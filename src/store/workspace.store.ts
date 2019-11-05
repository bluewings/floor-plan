import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import produce, { finishDraft } from 'immer';
import { format } from 'date-fns';
// import { dataToCollections, compareFactory } from '../helpers/util';

export type Item = {
  id: string;
  scale?: number;
  name?: string;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  rotate?: number;
  createTime?: string;
  updateTime?: string;
};

const initialState = {
  workspaces: [],
  focus: null,
  collections: [],
  collectionDict: {},
  keywords: [],
  range: { from: '', to: '' },
} as {
  workspaces: Item[];
  focus: string | null;
  collections: any[];
  collectionDict: any;
  keywords: any[];
  range: any;
  workspace?: any;
};

const ADD = 'workspace/ADD';
const UPDATE = 'workspace/UPDATE';
const REMOVE = 'workspace/REMOVE';

export const add = createAction(ADD, (workspace: any) => workspace);
export const update = createAction(UPDATE, (workspace: any) => workspace);
export const remove = createAction(REMOVE, (id: string) => ({ id }));

export default handleActions(
  {
    [ADD]: (state, { payload }) =>
      produce(state, (draft) => {
        // const { workspace } = payload;
        const id = Math.random()
          .toString(36)
          .substr(-6);
        const x = (draft.workspaces = [
          ...draft.workspaces,
          {
            // top: ~~(Math.random() * 500),
            // left: ~~(Math.random() * 500),
            // width: 200,
            // height: 100,
            // rotate: 0,
            // ...payload,

            name: format(new Date(), 'yyyy.MM.dd. HH:mm'),
            ...payload,
            id,
            scale: 50,
            createTime: new Date().toISOString(),
          },
        ]);
        draft.focus = id;
      }),

    [UPDATE]: (state, { payload }) =>
      produce(state, (draft) => {
        // const { workspace } = payload;
        // @ts-ignore
        const { id } = payload;
        const index = draft.workspaces.findIndex(
          (workspace: any) => workspace.id === id,
        );

        if (index !== -1) {
          draft.workspaces[index] = {
            ...draft.workspaces[index],
            ...payload,
            updateTime: new Date().toISOString(),
          };
        }
      }),
    [REMOVE]: (state, { payload }) =>
      produce(state, (draft) => {
        // @ts-ignore
        const { id } = payload;
        draft.workspaces = draft.workspaces.filter(
          (workspace: any) => workspace.id !== id,
        );
        if (draft.focus === id) {
          draft.focus = null;
        }
        // draft.focus = id;
      }),
  },
  initialState,
);
