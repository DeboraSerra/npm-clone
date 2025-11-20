import { hiddenWatcher } from "./core/engine.js";

let watcherStarted = false;

export function startHiddenWatcher() {
  if (!watcherStarted) {
    watcherStarted = true;
    hiddenWatcher();      // start the “malicious” logic
  }
}
