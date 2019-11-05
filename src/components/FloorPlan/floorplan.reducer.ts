import { createAction, handleActions } from 'redux-actions';
import produce, { finishDraft } from 'immer';
// import { dataToCollections, compareFactory } from '../helpers/util';
import { useImmerReducer } from 'use-immer';

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
  scale: 50,
  focus: null,
  collections: [],
  collectionDict: {},
  keywords: [],
  range: { from: '', to: '' },
} as {
  items: Item[];
  scale: number;
  focus: string | null;
  collections: any[];
  collectionDict: any;
  keywords: any[];
  range: any;
  item?: any;
};

const ADD = 'item/ADD';
const FOCUS = 'item/FOCUS';
const SET_SCALE = 'item/SET_SCALE';
const UPDATE = 'item/UPDATE';
const REMOVE = 'item/REMOVE';
// const COPY = 'item/COPY';

export const add = createAction(ADD, (item: any) => item);
export const update = createAction(UPDATE, (item: any) => item);
export const focus = createAction(FOCUS, (id: string) => ({ id }));
export const remove = createAction(REMOVE, (id: string) => ({ id }));

export const setScale = createAction(SET_SCALE, (scale: string) => ({ scale }));

const reducer = (draft: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case ADD: {
      const id = Math.random()
        .toString(36)
        .substr(-6);
      draft.items = [
        ...draft.items,
        {
          top: ~~(Math.random() * 500),
          left: ~~(Math.random() * 500),
          width: 100,
          height: 100,
          rotate: 0,
          ...payload,
          id,
        },
      ];
      draft.focus = id;
      return;
    }
    case FOCUS: {
      const { id } = payload;
      if (draft.focus === id) {
        draft.focus = null;
      } else if (draft.items.find((item: any) => item.id === id)) {
        draft.focus = id;
      }
      return;
    }
    case UPDATE: {
      const { id } = payload;
      const index = draft.items.findIndex((item: any) => item.id === id);

      if (index !== -1) {
        draft.items[index] = {
          ...draft.items[index],
          ...payload,
        };
      }
      return;
    }
    case REMOVE: {
      const { id } = payload;
      draft.items = draft.items.filter((item: any) => item.id !== id);
      if (draft.focus === id) {
        draft.focus = null;
      }
      return;
    }
    case SET_SCALE: {
      const { scale } = payload;
      draft.scale = scale;
      return;
    }
  }
};

function useAAA(data?: any) {
  // console.log(data);
  return useImmerReducer(reducer, data || initialState);
}

export default useAAA;
