import React from "react";
import { shallow, mount } from "enzyme";
import {language,AllReducers}  from '../Reducers/AllReducers';
// STATIC TEST 
describe("My Test Suite from reducer", () => {
    it("My Test Case", () => {
      expect(true).toEqual(true);
    });
  });

// TEST REDUCERS
describe("Reducer", () => {
  describe("Language Reducer", () => {
      it("should return empty object if no action is passed", () => {
        const action = {};
        const state = {};
        const ResultFromReducer = language(state, action);
        console.log(ResultFromReducer)
        expect(ResultFromReducer).toEqual({});
      });
      it("should return a new list when action is passed", () => {
        const action = {
          type: "SET_CURRENT_LANG",
          payload: {
            lang: "en",
          }
        };
        const state = {};
        const ResultFromReducer = language(state, action);
        expect(ResultFromReducer).toEqual({
          ...state,
          lang: {
              lang: "en",
          }
        });
      });
    });
   
    describe("Fetch data Reducer", () => {
      
      it("should return list of users if action is passed", () => {
        const DataList=[{
          id:1,
          name:"Amira",
          title:"Front-End"
        },{
          id:2,
          name:"Amira brdo",
          title:"Front-End brdo"
        }
      ]
        const action = { type: "FETCH_DATA",
          payload:DataList};
        const state = {};
        const ResultFromReducer = AllReducers(state, action);
        console.log(ResultFromReducer)
        expect(ResultFromReducer).toEqual({...state,dataList:DataList});
      });
      
    });
    describe("fetchSingleData Reducer", () => {
     
      it("should return list of users if action is passed", () => {
        const Data={userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"};

        const action = { type: "FETCH_SINGLE_DATA",
          payload:Data};
        const state = {};
        const ResultFromReducer = AllReducers(state, action);
        console.log(ResultFromReducer)
        expect(ResultFromReducer).toEqual({...state, singleData:action.payload});
      });
    });
    describe("postData Reducer", () => {
  
      it("should return list of users if action is passed", () => {
        const Data= {Amira: "", id: 101}

        const action = { type: "POST_DATA",
          payload:Data};
        const state = {};
        const ResultFromReducer = AllReducers(state, action);
        console.log(ResultFromReducer)
        expect(ResultFromReducer).toEqual({...state,PostedData:action.payload});
      });
    });
});
  