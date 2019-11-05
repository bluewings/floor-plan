import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
// import { dataToCollections, compareFactory } from '../helpers/util';

const initialState = {
  data: [],
  collections: [],
  collectionDict: {},
  keywords: [],
  range: { from: '', to: '' },
} as {
  data: any[];
  collections: any[];
  collectionDict: any;
  keywords: any[];
  range: any;
};

const SET_DATA = 'app/SET_DATA';
const SET_RANGE = 'app/SET_RANGE';

export const setData = createAction(SET_DATA, (data: any) => ({ data }));
export const setRange = createAction(SET_RANGE, (from: string, to: string) => ({
  from,
  to,
}));

export default handleActions(
  {
    [SET_DATA]: (state, { payload }) =>
      produce(state, (draft) => {
        const { data } = payload;
        draft.data = data;
      }),
    [SET_RANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        const { from, to } = payload as any;
        draft.range = { from, to };
      }),
  },
  initialState,
);
