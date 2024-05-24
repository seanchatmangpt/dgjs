/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateCalendarResourceDTO = {
  locationId: string;
  name: string;
  description: string;
  /**
   * Quantity of the equipment.
   */
  quantity: number;
  /**
   * Quantity of the out of service equipment.
   */
  outOfService: number;
  /**
   * Capacity of the room.
   */
  capacity: number;
  /**
   * Service calendar IDs to be mapped with the resource.
   *
   * One equipment can only be mapped with one service calendar.
   *
   * One room can be mapped with multiple service calendars.
   */
  calendarIds: Array<string>;
  isActive: boolean;
};

