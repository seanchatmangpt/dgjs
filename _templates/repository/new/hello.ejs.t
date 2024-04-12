---
to: src/repositories/<%= name %>-repository.ts
---
import { BaseRepository } from "./base-repository";
import { <%= Name %> } from "../domain/<%= name %>";

class <%= Name %>Repository extends BaseRepository<<%= Name %>> {
  constructor(storageFile: string) {
    super(<%= Name %>, storageFile);
  }

  // Add any custom methods specific to <%= Name %>Repository
}

export { <%= Name %>Repository };