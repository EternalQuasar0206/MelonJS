import { _std } from "../_std";

function _clearInterval(identifier: string) {
    _std.time._timers[identifier].clear();
}

export { _clearInterval }