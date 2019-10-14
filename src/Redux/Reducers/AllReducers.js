import { TEST_ACTION_SAGA } from "../Types";
export const AllReducers = (state = {}, action) => {
  switch (action.type) {
    case TEST_ACTION_SAGA:
      console.log("hello from reducer");
      return state;
    default:
      return state;
  }
};
