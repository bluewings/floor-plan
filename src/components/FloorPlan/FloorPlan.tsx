import * as React from 'react';
import { useCallback, useEffect } from 'react';
import { Button, Slider } from 'antd';
import useFloorPlanReducer, { add, setScale } from './floorplan.reducer';
import Item from '../Item';
import Sidebar from '../Sidebar';
import styles from './FloorPlan.module.scss';
import bg from './blueprint.png';

function FloorPlan(props: any) {
  const [state, dispatch] = useFloorPlanReducer(props.data);
  // useImmerReducer();

  const handleClick = useCallback(() => {
    dispatch(add({}));
  }, [dispatch]);

  // console.dir(state);

  const { items } = state;

  useEffect(() => {
    if (typeof props.onChange === 'function') {
      props.onChange(state);
    }
  }, [state]);

  const handleSliderChange = useCallback(
    (val) => {
      // dispatch(add({}));
      // console.log(val);
      dispatch(setScale(val));
    },
    [dispatch],
  );

  return (
    <div>
      <div style={{ width: 200 }}>
        <Slider
          min={10}
          max={100}
          value={state.scale}
          onChange={handleSliderChange}
        />
      </div>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <div className={styles.root}>
        {/* <h1>FloorPlan</h1> */}
        <div>
          <img
            src={bg}
            style={{
              transform: `scale(${state.scale / 100})`,
              transformOrigin: '0 0',
            }}
          />
          {/* <Button onClick={handleClick}>add</Button> */}
          {items.map((item: any, i: number) => {
            return (
              <Item
                key={i}
                {...item}
                state={{ ...state }}
                scale={state.scale / 100}
                dispatch={dispatch}
              />
            );
          })}
        </div>
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        <Sidebar state={{ ...state }} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default FloorPlan;
