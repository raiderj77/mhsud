export type AssessmentEvent = "assessment_started" | "assessment_completed";

/**
 * Compatibility no-op.
 *
 * MindCheckTools does not send assessment funnel events to analytics. Existing
 * callers are retained temporarily to avoid broad changes inside validated
 * screening clients. Remove the call sites in the final micro-cleanup stage.
 */
export function trackAssessmentEvent(_eventName: AssessmentEvent): void {}
