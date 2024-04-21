import { ActorSystem } from "../../src";
import { MockBrokerAdapter } from "../mock/mock-broker-adapter";
import { MockActor } from "../mock/mock-actors";
import {
  createDublinCoreMessage,
  createFOAFMessage,
  createICalendarMessage,
} from "../mock/mock-message-generators";

describe("Revenue Operations Workflow", () => {
  let actorSystem: ActorSystem;
  let mockBrokerAdapter: MockBrokerAdapter;
  let customerServiceActor: MockActor;
  let salesActor: MockActor;

  beforeEach(() => {
    mockBrokerAdapter = new MockBrokerAdapter();
    actorSystem = new ActorSystem([mockBrokerAdapter]);
    customerServiceActor = new MockActor(actorSystem);
    salesActor = new MockActor(actorSystem);

    actorSystem.registerActor(customerServiceActor);
    actorSystem.registerActor(salesActor);
  });

  it("should coordinate customer onboarding, opportunity tracking, and meeting scheduling", () => {
    // Step 1: Customer Profile Creation (FOAF)
    const customerProfileMsg = createFOAFMessage(
      "Alice Johnson",
      "https://alice-consulting.com",
    );
    actorSystem.publish(customerProfileMsg);

    expect(customerServiceActor.handleMessage).toHaveBeenCalledWith(
      customerProfileMsg,
    );

    // Step 2: Sales Opportunity (Dublin Core)
    const opportunityMsg = createDublinCoreMessage(
      "Consulting Project Proposal",
      "Alice Johnson",
      "Sales",
      "Potential project with Alice Johnson",
    );

    // Assuming salesActor reacts to customer profiles or a similar trigger
    actorSystem.publish(opportunityMsg);
    expect(salesActor.handleMessage).toHaveBeenCalledWith(opportunityMsg);

    // Step 3: Meeting Scheduling (iCalendar)
    const meetingMsg = createICalendarMessage(
      "Follow-up with Alice Johnson",
      "Discuss project proposal",
      new Date("2023-12-22T15:00:00Z"),
      new Date("2023-12-22T16:00:00Z"),
    );

    actorSystem.publish(meetingMsg);
    expect(salesActor.handleMessage).toHaveBeenCalledWith(meetingMsg); // Potentially both salesActor and customerServiceActor react

    // Step 4: Assertions about Published Messages
    expect(mockBrokerAdapter.getPublishStub().getCall(0).args[1]).toEqual(
      customerProfileMsg,
    ); // ... and so on
  });
});
