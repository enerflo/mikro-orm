import { Entity, ManyToOne, MikroORM, PrimaryKey, Property, Embedded, Embeddable } from '@mikro-orm/core';

@Embeddable()
class Address {

  @Property({ nullable: false, default: 'test' })
  city?: string = 'test';

  @Property({ nullable: true })
  province?: string;

}

@Entity()
class Company {

  @PrimaryKey()
  id: number;

  @Embedded({ entity: () => Address, nullable: true })
  address: Address = new Address();

  constructor(id: number) {
    this.id = id;
  }

}

@Entity()
class User {

  @PrimaryKey()
  id: number;

  @ManyToOne(() => Company)
  company: Company;

  @Property()
  name: string;

  constructor(id: number, name: string, company: Company) {
    this.id = id;
    this.name = name;
    this.company = company;
  }

}

@Entity()
class ApiKey {

  @PrimaryKey()
  id: number;

  @ManyToOne(() => User)
  user: User;

  constructor(id: number, user: User) {
    this.id = id;
    this.user = user;
  }

}

describe('result caching issue', () => {

  let orm: MikroORM;

  beforeAll(async () => {
    orm = await MikroORM.init({
      entities: [Company, User, ApiKey, Address],
      dbName: `:memory:`,
      type: 'sqlite',
    });
    await orm.getSchemaGenerator().createSchema();
  });

  afterAll(async () => {
    await orm.close(true);
  });

  it('should cache and load correctly', async () => {
    const company = new Company(1);
    const user = new User(2, 'test', company);
    const apiKey = new ApiKey(3, user);

    await orm.em.persist([company, user, apiKey]).flush();
    orm.em.clear();

    const em1 = orm.em.fork();
    const loadedKey1 = await em1.findOneOrFail(ApiKey, { id: apiKey.id }, { populate: ['user.company'], cache: 10 });
    expect(loadedKey1).toBeDefined();

    const loadedCompany1 = await em1.findOneOrFail(Company, { id: company.id });
    expect(loadedCompany1).toBeDefined();

    const em2 = orm.em.fork();
    expect(em1.id).not.toBe(em2.id);

    const loadedKey2 = await em2.findOneOrFail(ApiKey, { id: apiKey.id }, { populate: ['user.company'], cache: 10 });
    expect(loadedKey2).toBeDefined();

    const loadedCompany2 = await em2.findOneOrFail(Company, { id: company.id });
    expect(loadedCompany2).toBeDefined();

    user.name = 'test2';
    await orm.em.flush(); // Should not fail
  });

});
