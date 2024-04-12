// Ontology Namespaces (for clarity)
import { BaseMessage } from "../../src";

const DC_NAMESPACE = "http://purl.org/dc/elements/1.1/";
const FOAF_NAMESPACE = "http://xmlns.com/foaf/0.1/";
const ICAL_NAMESPACE = "urn:ietf:params:xml:ns:icalendar-2.0";

// Helper Functions

function createDublinCoreMessage(
  title: string,
  creator: string,
  subject?: string,
  description?: string
): BaseMessage {
  const attributes = {
    [`${DC_NAMESPACE}title`]: title,
    [`${DC_NAMESPACE}creator`]: creator,
  };

  if (subject) {
    attributes[`${DC_NAMESPACE}subject`] = subject;
  }
  if (description) {
    attributes[`${DC_NAMESPACE}description`] = description;
  }

  return new BaseMessage({
    contentType: "application/rdf+xml",
    attributes,
  });
}

function createFOAFMessage(
  name: string,
  homepage: string,
  knows?: string
): BaseMessage {
  const attributes = {
    [`${FOAF_NAMESPACE}name`]: name,
    [`${FOAF_NAMESPACE}homepage`]: homepage,
  };

  if (knows) {
    attributes[`${FOAF_NAMESPACE}knows`] = knows;
  }

  return new BaseMessage({
    contentType: "text/turtle",
    attributes,
  });
}

function createICalendarMessage(
  summary: string,
  description: string,
  startTime: Date,
  endTime: Date,
  location?: string
): BaseMessage {
  const attributes = {
    [`${ICAL_NAMESPACE}SUMMARY`]: summary,
    [`${ICAL_NAMESPACE}DESCRIPTION`]: description,
    [`${ICAL_NAMESPACE}DTSTART`]: startTime.toISOString(),
    [`${ICAL_NAMESPACE}DTEND`]: endTime.toISOString(),
  };

  if (location) {
    attributes[`${ICAL_NAMESPACE}LOCATION`] = location;
  }

  return new BaseMessage({
    contentType: "text/calendar",
    attributes,
  });
}

// Export the helper functions
export { createDublinCoreMessage, createFOAFMessage, createICalendarMessage };
