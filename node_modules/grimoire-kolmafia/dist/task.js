import { get } from "libram";
/**
 * Returns the state of a quest as a numeric value as follows:
 *   "unstarted" => -1
 *   "started" => 0
 *   "stepNUM" => NUM
 *   "finished" => 999
 */
export function step(questName) {
    const stringStep = get(questName);
    if (stringStep === "unstarted")
        return -1;
    else if (stringStep === "started")
        return 0;
    else if (stringStep === "finished")
        return 999;
    else {
        if (stringStep.substring(0, 4) !== "step") {
            throw "Quest state parsing error.";
        }
        return parseInt(stringStep.substring(4), 10);
    }
}
