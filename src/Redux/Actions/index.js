import {
  TEST_ACTION_SAGA,
  FETCH_DATA_SAGA,
  FETCH_SINGLE_DATA_SAGA,
  FETCH_SINGLE_DATA,
  POST_DATA_SAGA
} from "../Types";
// TEST ACTION
export const test = () => {
  console.log("hello from actions");
  // RETURNS ACTION OBJECT
  return {
    type: TEST_ACTION_SAGA
  };
};

// ACTION CREATOR TO GET ALL DATA
export const fetchData = () => {
  return {
    type: FETCH_DATA_SAGA
  };
};

// ACTION CREATOR TO GET Single Data
export const fetchSingleData = id => {
  console.log("id", id);
  return {
    type: FETCH_SINGLE_DATA_SAGA,
    id
  };
};

// ACTION CREATOR TO post Data
export const PostData = () => {
  return {
    type: POST_DATA_SAGA
  };
};
