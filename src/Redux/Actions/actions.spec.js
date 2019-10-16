import * as actions from './index';
import * as types from '../Types';

describe('My Test Suite', () => {
    it('My Test Case', () => {
      expect(true).toEqual(true);
    });
  });

  describe('actions', () => {
    it('should create an action to fetchData', () => {
      const expectedAction = {
        type: types.FETCH_DATA_SAGA,
      }
      expect(actions.fetchData()).toEqual(expectedAction)
    })

    it('should create an action to fetchSingleData', () => {
        const id = 1;
        const expectedAction = {
          type: types.FETCH_SINGLE_DATA_SAGA,
          id
        }
        expect(actions.fetchSingleData(id)).toEqual(expectedAction)
      })
      it('should create an action to setCurrentLang', () => {
        const lang = 'en'
        const expectedAction = {
          type: types.SET_CURRENT_LANG,
          payload:lang
        }
        expect(actions.setCurrentLang(lang)).toEqual(expectedAction)
      })
      it('should create an action to PostData', () => {
        const data = 'Amira'
        const expectedAction = {
          type: types.POST_DATA_SAGA,
          data
        }
        expect(actions.PostData(data)).toEqual(expectedAction)
      })
      
  })