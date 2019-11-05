import * as React from 'react';
import { useCallback } from 'react';
// import { Drawer, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../Item';
import Sidebar from '../Sidebar';
import { add } from '../Item/item.store';
import styles from './Blueprint.module.scss';

function Blueprint(props: any) {
  const dispatch = useDispatch();

  const items = useSelector((state: any) => {
    return state && state.item && state.item.items;
  });

  const handleClick = useCallback(() => {
    dispatch(add({}));
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <h1>Blueprint</h1> */}

            {items.map((item: any) => {
              return <Item {...item} />;
            })}

            {/* <pre>[{JSON.stringify(items)}]</pre> */}
          </div>
        </div>
      </div>
      <Sidebar />
    </>
    // <div className={styles.root}>
    //   <h1>Blueprint</h1>
    //   <Button />
    // </div>
  );
}

export default Blueprint;
