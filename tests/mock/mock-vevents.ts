import { VEvent } from "../../src/model/vevent";
import { BaseMessage } from "../../src/actor/base-message";

// Adjust the import paths as necessary to fit your project structure

class EventCreated extends BaseMessage {
  constructor(public readonly event: VEvent) {
    super({ messageType: "EventCreated", content: JSON.stringify(event) });
  }
}

class EventUpdated extends BaseMessage {
  constructor(
    public readonly eventId: string,
    public readonly updatedEvent: VEvent
  ) {
    super({
      messageType: "EventUpdated",
      content: JSON.stringify({ eventId, updatedEvent }),
    });
  }
}

class EventCancelled extends BaseMessage {
  constructor(public readonly eventId: string) {
    super({ messageType: "EventCancelled", content: eventId });
  }
}

class AttendeeAdded extends BaseMessage {
  constructor(
    public readonly eventId: string,
    public readonly attendee: { name: string; email: string }
  ) {
    super({
      messageType: "AttendeeAdded",
      content: JSON.stringify({ eventId, attendee }),
    });
  }
}

class AttendeeRemoved extends BaseMessage {
  constructor(
    public readonly eventId: string,
    public readonly attendeeEmail: string
  ) {
    super({
      messageType: "AttendeeRemoved",
      content: JSON.stringify({ eventId, attendeeEmail }),
    });
  }
}

class EventReminderSent extends BaseMessage {
  constructor(public readonly eventId: string) {
    super({ messageType: "EventReminderSent", content: eventId });
  }
}

class EventRescheduled extends BaseMessage {
  constructor(
    public readonly eventId: string,
    public readonly newStart: string,
    public readonly newEnd: string
  ) {
    super({
      messageType: "EventRescheduled",
      content: JSON.stringify({ eventId, newStart, newEnd }),
    });
  }
}
