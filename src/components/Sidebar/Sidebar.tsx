import * as React from 'react';
import { useCallback, useMemo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Drawer, Input, Button } from 'antd';
import { get } from 'lodash-es';
// import { add, update, remove } from '../Item/item.store';
import useReducer, {
  add,
  update,
  remove,
} from '../FloorPlan/floorplan.reducer';
import styles from './Sidebar.module.scss';

function Sidebar({ state, dispatch }: any) {
  // const [state, dispatch] = useReducer();
  const focused = useMemo(() => {
    const items = get(state, ['items'], []);

    const focus = get(state, ['focus']);

    return items.find((item: any) => {
      return item.id === focus;
    });
  }, [state]);

  // const dispatch = useDispatch();

  // const items = useSelector((state: any) => {
  //   return state && state.item && state.item.items;
  // });

  const handleClick = useCallback(() => {
    dispatch(add({}));
  }, [dispatch]);

  const handleRemoveClick = useCallback(() => {
    // handleRemoveClick
    dispatch(remove(focused.id));
  }, [dispatch, focused]);

  const handleCopyClick = useCallback(() => {
    // handleRemoveClick
    dispatch(
      add({
        ...focused,
        top: focused.top + 20,
        left: focused.left + 20,
      }),
    );
  }, [dispatch, focused]);

  const handleValueChange = useCallback(
    (event) => {
      // console.log(event.target.name);
      // const value
      const name = event.target.name;
      const value = name === 'name' ? event.target.value : ~~event.target.value;

      dispatch(
        update({
          id: focused.id,
          [name]: value,
        }),
      );
    },
    [focused],
  );
  return (
    <Drawer
      // title="Basic Drawer"
      placement="right"
      closable={false}
      // onClose={this.onClose}
      visible={true}
      mask={false}
    >
      {/* <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p> */}
      <Button onClick={handleClick}>add</Button>
      <hr />
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      {focused && (
        <div key={focused.id}>
          <Input
            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="name"
            defaultValue={focused.name}
            placeholder="name"
            onChange={handleValueChange}
          />
          <Input
            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="width"
            type="number"
            defaultValue={focused.width}
            placeholder="width"
            onChange={handleValueChange}
          />
          <Input
            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="height"
            type="number"
            defaultValue={focused.height}
            placeholder="height"
            onChange={handleValueChange}
          />
          <hr />
          <Button onClick={handleRemoveClick}>삭제</Button>
          <Button onClick={handleCopyClick}>복사</Button>
          {/* <pre>{JSON.stringify(focused, null, 2)}</pre> */}
        </div>
      )}
    </Drawer>
  );
}

export default Sidebar;
