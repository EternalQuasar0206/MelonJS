import { _std } from "../_std";
function _clearLocalEnvironmentVariables() {
    _$internalBinding["LocalEnvironmentVariables"].Clear();
    _std.process.env = _$internalBinding["ProcessEnvironmentVariables"];
}
export { _clearLocalEnvironmentVariables };