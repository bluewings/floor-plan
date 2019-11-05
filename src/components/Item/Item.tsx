import * as React from 'react';
import {
  Fragment,
  useCallback,
  useMemo,
  useEffect,
  useState,
  useRef,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash-es';
import { Button } from 'antd';
import cx from 'classnames';
import Moveable from 'react-moveable';
import { focus, update, remove } from '../FloorPlan/floorplan.reducer';
import styles from './Item.module.scss';

function Item({
  name,
  id,
  scale,
  top,
  left,
  width,
  height,
  rotate,
  state,
  dispatch,
}: any) {
  // const dispatch = useDispatch();
  // const focusId = useSelector((state: any) => get(state, ['item', 'focus']));
  const focusId = useMemo(() => get(state, ['focus']), [state]);
  // const focusId = get(state, ['item', 'focus']);
  // , [state]);
  const cool = useRef<any>();
  const handleFocusClick = useCallback(() => {
    if (!cool.current) {
      dispatch(focus(id));
    }
  }, [dispatch, id]);
  // const handleRemoveClick = useCallback(() => {
  //   dispatch(remove(id));
  // }, [dispatch, id]);

  const itemStyle = useMemo(() => {
    return {
      // top,
      // left,
      // width,
      // height,
      top: top * scale,
      left: left * scale,
      width: width * scale,
      height: height * scale,
      fontSize: `${2.5 * scale}rem`,

      transform: `rotate(${rotate}deg)`,
    };
  }, [top, left, width, height, rotate, scale]);

  const ref = useRef<any>();

  const [aa, setAa] = useState();

  const dats = useRef<any>();

  const handleDragStart = useCallback((aaa: any) => {
    // console.log(aaa);
    const { clientX, clientY } = aaa;

    dats.current = {
      clientX,
      clientY,
    };
  }, []);
  const handleDragEnd = useCallback(
    (aaa: any) => {
      console.log(aaa);
      console.log(dats.current);
      const { clientX, clientY } = aaa;
      const deltaX = (clientX - dats.current.clientX) / scale;

      const deltaY = (clientY - dats.current.clientY) / scale;

      cool.current = true;
      setTimeout(() => {
        cool.current = false;

        dispatch(
          update({
            id,
            top: top + deltaY,
            left: left + deltaX,
          }),
        );
      }, 0);
    },
    [id, top, left, scale],
  );

  const handleRotateStart = useCallback((aaa: any) => {
    // console.log(aaa);
    const { clientX, clientY } = aaa;

    dats.current = {
      clientX,
      clientY,
    };
  }, []);
  const handleRotateEnd = useCallback(
    (aaa: any) => {
      // console.log(aaa);
      const { target } = aaa;
      // console.log(target.style.transform);

      const matched = target.style.transform.match(/rotate\(([\-0-9]+)deg\)/);
      if (matched && matched[1]) {
        // console.log(rotate, matched[1], ~~matched[1]);
        setTimeout(() => {
          dispatch(
            update({
              id,
              rotate: rotate + ~~matched[1],
              // left: left + deltaX,
            }),
          );
        }, 0);
      }

      // console.log(ang);
      // dats.current = {
      //   clientX,
      //   clientY,
      // };
    },
    [id, rotate],
  );
  //   console.dir(test.target.style.transform);

  const key = `${id}_${top}_${left}_${width}_${height}_${rotate}_${scale}`;
  useEffect(() => {
    setAa(ref.current);
  }, [key]);

  return (
    <Fragment key={key}>
      <div
        ref={ref}
        className={cx(styles.root, focusId === id && styles.focus)}
        onClick={handleFocusClick}
        style={itemStyle}
      >
        <span> {name || id}</span>
        {/* <span>{focusId}</span> */}
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        {/* <Button onClick={handleRemoveClick}>delete</Button> */}
      </div>
      {aa && focusId === id && (
        <Moveable
          target={aa}
          container={null}
          origin={false}
          draggable
          onDrag={({
            target,
            beforeDelta,
            beforeDist,
            left,
            top,
            right,
            bottom,
            delta,
            dist,
            transform,
            clientX,
            clientY,
          }: any) => {
            // console.log('onDrag left, top', left, top);
            // target!.style.left = `${left}px`;
            // target!.style.top = `${top}px`;
            // console.log('onDrag translate', dist);
            target!.style.transform = transform;
          }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          rotatable={true}
          throttleRotate={5}
          onRotateStart={handleRotateStart}
          onRotate={({
            target,
            delta,
            dist,
            transform,
            clientX,
            clientY,
          }: any) => {
            console.log('onRotate', dist);
            target!.style.transform = transform;
          }}
          onRotateEnd={handleRotateEnd}
          // onRotateEnd={(test: any) => {
          //   console.log(Object.keys(test.datas));
          //   for (const key in test.datas) {
          //     console.log(key, test.datas[key]);
          //   }
          //   console.dir(test.target.style.transform);
          //   console.log('onRotateEnd', test);
          // }}
        />
      )}
    </Fragment>
  );
}

export default Item;
