import * as actionTypes from "../actions/actionTypes";

export function beginAPICall() {
  return { type: actionTypes.BEGIN_API_CALL };
}
