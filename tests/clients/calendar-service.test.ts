import { describe, it, expect, beforeEach, afterEach } from "vitest";
import nock from "nock";
import { CalendarsService } from "../../src/clients/calendars";
import { faker } from "@faker-js/faker";
import { CalendarCreateDTO } from "../../src/clients/calendars";
import { CalendarDTO } from "../../src/clients/calendars";

describe("CalendarsService", () => {
  const baseUrl = "https://services.leadconnectorhq.com";
  const authorization = "Bearer test_token";
  const version = "2021-04-15";

  beforeEach(() => {
    nock.cleanAll();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  const generateCalendarDTO = (): CalendarDTO => ({
    id: faker.string.uuid(),
    locationId: faker.string.uuid(),
    name: faker.company.name(),
    description: faker.lorem.sentence(),
    slug: faker.lorem.slug(),
    widgetSlug: faker.lorem.slug(),
    calendarType: CalendarDTO.calendarType.EVENT,
    widgetType: CalendarDTO.widgetType.DEFAULT,
    eventTitle: faker.lorem.words(3),
    eventColor: faker.color.rgb(),
    meetingLocation: faker.location.streetAddress(),
    slotDuration: faker.number.int({ min: 15, max: 60 }),
    preBufferUnit: CalendarDTO.preBufferUnit.MINS,
    slotInterval: faker.number.int({ min: 15, max: 60 }),
    slotBuffer: faker.number.int({ min: 5, max: 15 }),
    preBuffer: faker.number.int({ min: 5, max: 15 }),
    appoinmentPerSlot: faker.number.int({ min: 1, max: 5 }),
    appoinmentPerDay: faker.number.int({ min: 1, max: 10 }),
    openHours: [],
    enableRecurring: faker.datatype.boolean(),
    recurring: undefined,
    formId: faker.string.uuid(),
    stickyContact: faker.datatype.boolean(),
    isLivePaymentMode: faker.datatype.boolean(),
    autoConfirm: faker.datatype.boolean(),
    shouldSendAlertEmailsToAssignedMember: faker.datatype.boolean(),
    alertEmail: faker.internet.email(),
    googleInvitationEmails: faker.datatype.boolean(),
    allowReschedule: faker.datatype.boolean(),
    allowCancellation: faker.datatype.boolean(),
    shouldAssignContactToTeamMember: faker.datatype.boolean(),
    shouldSkipAssigningContactForExisting: faker.datatype.boolean(),
    notes: faker.lorem.sentence(),
    pixelId: faker.string.uuid(),
    formSubmitType: CalendarDTO.formSubmitType.REDIRECT_URL,
    formSubmitRedirectURL: faker.internet.url(),
    formSubmitThanksMessage: faker.lorem.sentence(),
    availabilityType: CalendarDTO.availabilityType.STANDARD,
    availabilities: [],
    guestType: CalendarDTO.guestType.COUNT_ONLY,
    consentLabel: faker.lorem.sentence(),
    calendarCoverImage: faker.image.url(),
    notifications: [],
    groupId: faker.string.uuid(),
    teamMembers: [],
    eventType: CalendarDTO.eventType.ROUND_ROBIN_OPTIMIZE_FOR_AVAILABILITY,
  });

  it("should get free slots", async () => {
    const calendarId = faker.string.uuid();
    const startDate = faker.date.recent().toISOString();
    const endDate = faker.date.soon().toISOString();
    const timezone = "UTC";
    const userId = faker.string.uuid();

    nock(baseUrl)
      .get(`/calendars/${calendarId}/free-slots`)
      .query({ startDate, endDate, timezone, userId })
      .reply(200, { slots: [] });

    const response = await CalendarsService.getSlots({
      authorization,
      version,
      calendarId,
      startDate,
      endDate,
      timezone,
      userId,
    });

    expect(response).toEqual({ slots: [] });
  });

  it("should create a calendar", async () => {
    const calendarCreateDTO: CalendarCreateDTO = {
      locationId: faker.string.uuid(), // Added this line
      name: faker.company.name(),
      description: faker.lorem.sentence(),
      slug: faker.lorem.slug(),
      widgetSlug: faker.lorem.slug(),
      calendarType: CalendarCreateDTO.calendarType.EVENT,
      widgetType: CalendarCreateDTO.widgetType.DEFAULT,
      eventTitle: faker.lorem.words(3),
      eventColor: faker.color.rgb(),
      meetingLocation: faker.location.streetAddress(),
      slotDuration: faker.number.int({ min: 15, max: 60 }),
      preBufferUnit: CalendarCreateDTO.preBufferUnit.MINS,
      slotInterval: faker.number.int({ min: 15, max: 60 }),
      slotBuffer: faker.number.int({ min: 5, max: 15 }),
      preBuffer: faker.number.int({ min: 5, max: 15 }),
      appoinmentPerSlot: faker.number.int({ min: 1, max: 5 }),
      appoinmentPerDay: faker.number.int({ min: 1, max: 10 }),
      openHours: [],
      enableRecurring: faker.datatype.boolean(),
      recurring: undefined,
      formId: faker.string.uuid(),
      stickyContact: faker.datatype.boolean(),
      isLivePaymentMode: faker.datatype.boolean(),
      autoConfirm: faker.datatype.boolean(),
      shouldSendAlertEmailsToAssignedMember: faker.datatype.boolean(),
      alertEmail: faker.internet.email(),
      googleInvitationEmails: faker.datatype.boolean(),
      allowReschedule: faker.datatype.boolean(),
      allowCancellation: faker.datatype.boolean(),
      shouldAssignContactToTeamMember: faker.datatype.boolean(),
      shouldSkipAssigningContactForExisting: faker.datatype.boolean(),
      notes: faker.lorem.sentence(),
      pixelId: faker.string.uuid(),
      formSubmitType: CalendarCreateDTO.formSubmitType.REDIRECT_URL,
      formSubmitRedirectURL: faker.internet.url(),
      formSubmitThanksMessage: faker.lorem.sentence(),
      availabilityType: CalendarCreateDTO.availabilityType.STANDARD,
      availabilities: [],
      guestType: CalendarCreateDTO.guestType.COUNT_ONLY,
      consentLabel: faker.lorem.sentence(),
      calendarCoverImage: faker.image.url(),
      notifications: [],
      groupId: faker.string.uuid(),
      teamMembers: [],
      eventType:
        CalendarCreateDTO.eventType.ROUND_ROBIN_OPTIMIZE_FOR_AVAILABILITY,
    };

    nock(baseUrl)
      .post("/calendars", calendarCreateDTO)
      .reply(201, { id: faker.string.uuid() });

    const response = await CalendarsService.createCalendar({
      authorization,
      version,
      requestBody: calendarCreateDTO,
    });

    expect(response).toHaveProperty("id");
  });
});
