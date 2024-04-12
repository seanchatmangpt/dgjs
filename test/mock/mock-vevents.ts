import { VEvent } from "../../src/model/vevent";
import { BaseMessage } from "../../src/actor/base-message";

// Adjust the import paths as necessary to fit your project structure

class EventCreated extends BaseMessage {
  constructor(public readonly event: VEvent) {
    super({
      attributes: { messageType: "EventCreated" },
      content: JSON.stringify(event),
    });
  }
}

class EventUpdated extends BaseMessage {
  constructor(
    public readonly eventId: string,
    public readonly updatedEvent: VEvent,
  ) {
    super({
      id: eventId,
      content: JSON.stringify(updatedEvent),
      attributes: { messageType: "EventUpdated" },
    });
  }
}

class EventCancelled extends BaseMessage {
  constructor(public readonly eventId: string) {
    super({ attributes: { messageType: "EventCancelled" }, content: eventId });
  }
}

class AttendeeAdded extends BaseMessage {
  constructor(
    public readonly eventId: string,
    public readonly attendee: { name: string; email: string },
  ) {
    super({
      attributes: { messageType: "AttendeeAdded" },
      content: JSON.stringify({ eventId, attendee }),
    });
  }
}

class AttendeeRemoved extends BaseMessage {
  constructor(
    public readonly eventId: string,
    public readonly attendeeEmail: string,
  ) {
    super({
      attributes: { messageType: "AttendeeRemoved" },
      content: JSON.stringify({ eventId, attendeeEmail }),
    });
  }
}

class EventReminderSent extends BaseMessage {
  constructor(public readonly eventId: string) {
    super({
      attributes: { messageType: "EventReminderSent" },
      content: eventId,
    });
  }
}

class EventRescheduled extends BaseMessage {
  constructor(
    public readonly eventId: string,
    public readonly newStart: string,
    public readonly newEnd: string,
  ) {
    super({
      attributes: { messageType: "EventRescheduled" },
      content: JSON.stringify({ eventId, newStart, newEnd }),
    });
  }
}
