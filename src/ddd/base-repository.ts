import * as fs from "fs";
import * as path from "path";
import { a } from "vitest/dist/reporters-P7C2ytIv";
import { BaseModel } from "./base-model";

class BaseRepository<T extends BaseModel> {
  public storageFile: string;

  constructor(
    public model: new () => T,
    storageFile: string,
  ) {
    this.storageFile = storageFile;
    this.ensureFileExists();
  }

  public ensureFileExists(): void {
    if (!fs.existsSync(this.storageFile)) {
      fs.writeFileSync(this.storageFile, "[]", "utf-8");
    }
  }

  public readData(): T[] {
    try {
      const data = fs.readFileSync(this.storageFile, "utf-8");
      return JSON.parse(data).map((item: any) =>
        Object.assign(new this.model(), item),
      );
    } catch (error: any) {
      if (error.code === "ENOENT") {
        return [];
      }
      throw error;
    }
  }

  public writeData(data: T[]): void {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(this.storageFile, jsonData, "utf-8");
  }

  public add(item: T): void {
    const items = this.readData();
    items.push(item);
    this.writeData(items);
  }

  public get(criteria: Partial<T>): T | undefined {
    const items = this.readData();
    return items.find((item) => {
      // @ts-ignore
      return Object.keys(criteria).every((key) => item[key] === criteria[key]);
    });
  }

  public remove(criteria: Partial<T>): boolean {
    const items = this.readData();
    const initialLength = items.length;
    const filteredItems = items.filter((item) => {
      // @ts-ignore
      return !Object.keys(criteria).every((key) => item[key] === criteria[key]);
    });
    this.writeData(filteredItems);
    return filteredItems.length < initialLength;
  }

  public update(item: T): void {
    const items = this.readData();
    const index = items.findIndex(
      (existingItem) => existingItem.id === item.id,
    );
    if (index !== -1) {
      items[index] = item;
      this.writeData(items);
    }
  }

  public save(item: T): void {
    const items = this.readData();
    const index = items.findIndex(
      (existingItem) => existingItem.id === item.id,
    );
    if (index !== -1) {
      items[index] = item;
    } else {
      items.push(item);
    }
    this.writeData(items);
  }

  public listAll(): T[] {
    return this.readData();
  }
}

export { BaseModel, BaseRepository };
