import { TEST_ACTION_SAGA ,SET_CURRENT_LANG,FETCH_DATA,FETCH_SINGLE_DATA,POST_DATA} from "../Types";


export const  AllReducers = (state = {}, action) => {
  switch (action.type) {
    case TEST_ACTION_SAGA:
      return state;
      case FETCH_DATA:
      return {...state,dataList:action.payload};
      case FETCH_SINGLE_DATA:
        return{...state, singleData:action.payload}
      case POST_DATA:
        return{...state,PostedData:action.payload}
    default:
      return state;
  }
};
const initialState = {
  lang: localStorage.getItem('lang') || 'en'
};

export const  language=(state = initialState, action)=> {
    switch (action.type) {
        case SET_CURRENT_LANG:
            return {
                ...state,
                lang: action.payload
            };
        default:
            return state;
    }
};
