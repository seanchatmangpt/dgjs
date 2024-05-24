import * as fs from "fs/promises";
import * as path from "path";

export enum AppUserType {
  Company = "Company",
  Location = "Location",
}

export enum TokenType {
  Bearer = "Bearer",
}

export interface InstallationDetails {
  access_token: string;
  token_type: TokenType.Bearer;
  expires_in: number;
  refresh_token: string;
  scope: string;
  userType: AppUserType;
  companyId?: string;
  locationId?: string;
}

/* The Model class is responsible for saving and retrieving installation details, access tokens, and
refresh tokens. It also persists data as JSON. */
export class Model {
  private filePath: string;
  public installationObjects: { [key: string]: InstallationDetails } = {};

  constructor() {
    this.filePath = path.resolve(__dirname, "installationObjects.json");
    this.loadInstallationObjects();
  }

  // Load installation objects from JSON file
  private async loadInstallationObjects() {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      this.installationObjects = JSON.parse(data);
    } catch (error: any) {
      if (error?.code === "ENOENT") {
        console.warn("JSON file not found, starting with an empty object.");
        this.installationObjects = {};
      } else {
        console.error("Error reading JSON file:", error);
      }
    }
  }

  // Save installation objects to JSON file
  private async saveInstallationObjects() {
    try {
      await fs.writeFile(
        this.filePath,
        JSON.stringify(this.installationObjects, null, 2),
      );
    } catch (error) {
      console.error("Error writing to JSON file:", error);
    }
  }

  /**
   * The function saves installation information based on either the location ID or the company ID.
   * @param {InstallationDetails} details - The `details` parameter is an object of type
   * `InstallationDetails`.
   */
  async saveInstallationInfo(details: InstallationDetails) {
    console.log(details);
    if (details.locationId) {
      this.installationObjects[details.locationId] = details;
    } else if (details.companyId) {
      this.installationObjects[details.companyId] = details;
    }
    await this.saveInstallationObjects();
  }

  /**
   * The function `getAccessToken` returns the access token associated with a given resource ID i.e companyId or locationId from the
   * `installationObjects` object.
   * @param {string} resourceId - The `resourceId` parameter is a string that represents either locationId or companyId
   * It is used to retrieve the access token associated with that resource.
   * @returns The access token associated with the given resourceId.
   */
  getAccessToken(resourceId: string) {
    return this.installationObjects[resourceId]?.access_token;
  }

  /**
   * The function sets an access token for a specific resource ID in an installation object.
   * @param {string} resourceId - The resourceId parameter is a string that represents the unique
   * identifier of a resource. It is used to identify a specific installation object in the
   * installationObjects array.
   * @param {string} token - The "token" parameter is a string that represents the access token that you
   * want to set for a specific resource.
   */
  async setAccessToken(resourceId: string, token: string) {
    if (this.installationObjects[resourceId]) {
      // @ts-ignore
      this.installationObjects[resourceId].access_token = token;
      await this.saveInstallationObjects();
    }
  }

  /**
   * The function `getRefreshToken` returns the refresh_token associated with a given location or company from the
   * installationObjects object.
   * @param {string} resourceId - The resourceId parameter is a string that represents the unique
   * identifier of a resource.
   * @returns The companyId associated with the installation object for the given resourceId.
   */
  getRefreshToken(resourceId: string) {
    return this.installationObjects[resourceId]?.refresh_token;
  }

  /**
   * The function saves the refresh token for a specific resource i.e. location or company.
   * @param {string} resourceId - The resourceId parameter is a string that represents the unique
   * identifier of a resource. It is used to identify a specific installation object in the
   * installationObjects array.
   * @param {string} token - The "token" parameter is a string that represents the refresh token. A
   * refresh token is a credential used to obtain a new access token when the current access token
   * expires. It is typically used in authentication systems to maintain a user's session without
   * requiring them to re-enter their credentials.
   */
  async setRefreshToken(resourceId: string, token: string) {
    if (this.installationObjects[resourceId]) {
      // @ts-ignore
      this.installationObjects[resourceId].refresh_token = token;
      await this.saveInstallationObjects();
    }
  }
}
