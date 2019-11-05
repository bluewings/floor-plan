import { createAction, handleActions } from 'redux-actions';
import produce, { finishDraft } from 'immer';
// import { dataToCollections, compareFactory } from '../helpers/util';

export type Item = {
  id: string;
  name?: string;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  rotate?: number;
};

const initialState = {
  items: [],
  focus: null,
  collections: [],
  collectionDict: {},
  keywords: [],
  range: { from: '', to: '' },
} as {
  items: Item[];
  focus: string | null;
  collections: any[];
  collectionDict: any;
  keywords: any[];
  range: any;
  item?: any;
};

const ADD = 'item/ADD';
const FOCUS = 'item/FOCUS';
const UPDATE = 'item/UPDATE';
const REMOVE = 'item/REMOVE';

export const add = createAction(ADD, (item: any) => item);
export const update = createAction(UPDATE, (item: any) => item);
export const focus = createAction(FOCUS, (id: string) => ({ id }));
export const remove = createAction(REMOVE, (id: string) => ({ id }));

export default handleActions(
  {
    [ADD]: (state, { payload }) =>
      produce(state, (draft) => {
        // const { item } = payload;
        const id = Math.random()
          .toString(36)
          .substr(-6);
        console.log(payload);
        draft.items = [
          ...draft.items,
          {
            // top: ~~(Math.random() * 500),
            // left: ~~(Math.random() * 500),
            // width: 200,
            // height: 100,
            // rotate: 0,
            ...payload,
            id,
          },
        ];

        // draft.focus = id;
      }),

    [FOCUS]: (state, { payload }) =>
      produce(state, (draft) => {
        // @ts-ignore
        const { id } = payload;
        if (draft.focus === id) {
          draft.focus = null;
        } else if (draft.items.find((item: any) => item.id === id)) {
          draft.focus = id;
        }
      }),
    [UPDATE]: (state, { payload }) =>
      produce(state, (draft) => {
        // const { item } = payload;
        // @ts-ignore
        const { id } = payload;
        const index = draft.items.findIndex((item: any) => item.id === id);

        if (index !== -1) {
          draft.items[index] = {
            ...draft.items[index],
            ...payload,
          };
        }
      }),
    [REMOVE]: (state, { payload }) =>
      produce(state, (draft) => {
        // @ts-ignore
        const { id } = payload;
        draft.items = draft.items.filter((item: any) => item.id !== id);
        if (draft.focus === id) {
          draft.focus = null;
        }
        // draft.focus = id;
      }),
  },
  initialState,
);
