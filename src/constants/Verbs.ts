import { Verb } from "../";

export class Verbs {
  public static readonly INITIALIZED: Verb = {
    id: "http://adlnet.gov/expapi/verbs/initialized",
    display: {
      "en-US": "initialized"
    }
  };
  public static readonly TERMINATED: Verb = {
    id: "http://adlnet.gov/expapi/verbs/terminated",
    display: {
      "en-US": "terminated"
    }
  };
  public static readonly SUSPENDED: Verb = {
    id: "http://adlnet.gov/expapi/verbs/suspended",
    display: {
      "en-US": "suspended"
    }
  };
  public static readonly RESUMED: Verb = {
    id: "http://adlnet.gov/expapi/verbs/resumed",
    display: {
      "en-US": "resumed"
    }
  };
  public static readonly PASSED: Verb = {
    id: "http://adlnet.gov/expapi/verbs/passed",
    display: {
      "en-US": "passed"
    }
  };
  public static readonly FAILED: Verb = {
    id: "http://adlnet.gov/expapi/verbs/failed",
    display: {
      "en-US": "failed"
    }
  };
  public static readonly SCORED: Verb = {
    id: "http://adlnet.gov/expapi/verbs/scored",
    display: {
      "en-US": "scored"
    }
  };
  public static readonly COMPLETED: Verb = {
    id: "http://adlnet.gov/expapi/verbs/completed",
    display: {
      "en-US": "completed"
    }
  };
  public static readonly RESPONDED: Verb = {
    id: "http://adlnet.gov/expapi/verbs/responded",
    display: {
      "en-US": "responded"
    }
  };
}
