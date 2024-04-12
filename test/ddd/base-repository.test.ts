import { describe, it, expect, beforeEach, afterEach } from "vitest";
import * as fs from "fs";
import * as path from "path";
import { BaseModel, BaseRepository } from "../../src/ddd/base-repository";

class TestModel extends BaseModel {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    super();
    this.id = id;
    this.name = name;
  }
}

class TestRepository extends BaseRepository<TestModel> {
  constructor(storageFile: string) {
    // @ts-ignore
    super(TestModel, storageFile);
  }
}

describe("BaseRepository", () => {
  const storageFile = path.join(__dirname, "test-storage.json");
  let repository: TestRepository;

  beforeEach(() => {
    repository = new TestRepository(storageFile);
  });

  afterEach(() => {
    if (fs.existsSync(storageFile)) {
      fs.unlinkSync(storageFile);
    }
  });

  it("should add an item to the repository", () => {
    const item = new TestModel("1", "Test Item");
    repository.add(item);
    expect(repository.listAll()).toHaveLength(1);
    expect(repository.listAll()[0]).toEqual(item);
  });

  it("should retrieve an item from the repository", () => {
    const item = new TestModel("1", "Test Item");
    repository.add(item);
    const retrievedItem = repository.get({ id: "1" });
    expect(retrievedItem).toEqual(item);
  });

  it("should remove an item from the repository", () => {
    const item1 = new TestModel("1", "Test Item 1");
    const item2 = new TestModel("2", "Test Item 2");
    repository.add(item1);
    repository.add(item2);
    const removed = repository.remove({ id: "1" });
    expect(removed).toBe(true);
    expect(repository.listAll()).toHaveLength(1);
    expect(repository.listAll()[0]).toEqual(item2);
  });

  it("should update an item in the repository", () => {
    const item = new TestModel("1", "Test Item");
    repository.add(item);
    const updatedItem = new TestModel("1", "Updated Item");
    repository.update(updatedItem);
    expect(repository.listAll()).toHaveLength(1);
    expect(repository.listAll()[0]).toEqual(updatedItem);
  });

  it("should save an item in the repository", () => {
    const item = new TestModel("1", "Test Item");
    repository.save(item);
    expect(repository.listAll()).toHaveLength(1);
    expect(repository.listAll()[0]).toEqual(item);
    const updatedItem = new TestModel("1", "Updated Item");
    repository.save(updatedItem);
    expect(repository.listAll()).toHaveLength(1);
    expect(repository.listAll()[0]).toEqual(updatedItem);
  });

  it("should list all items in the repository", () => {
    const item1 = new TestModel("1", "Test Item 1");
    const item2 = new TestModel("2", "Test Item 2");
    repository.add(item1);
    repository.add(item2);
    expect(repository.listAll()).toHaveLength(2);
    expect(repository.listAll()).toContainEqual(item1);
    expect(repository.listAll()).toContainEqual(item2);
  });
});
