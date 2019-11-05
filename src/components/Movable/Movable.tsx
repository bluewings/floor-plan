import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import MoveableBase from 'react-moveable';
import styles from './Movable.module.scss';

function Movable(props: any) {
  const ref = useRef<any>();

  const [aa, setAa] = useState();

  useEffect(() => {
    setAa(ref.current);
  }, []);

  // document.querySelector(".target")
  return (
    <>
      {aa && (
        <MoveableBase
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
            console.log('onDrag left, top', left, top);
            // target!.style.left = `${left}px`;
            // target!.style.top = `${top}px`;
            console.log('onDrag translate', dist);
            target!.style.transform = transform;
          }}
          rotatable={true}
          throttleRotate={15}
          onRotateStart={({ target, clientX, clientY }) => {
            console.log('onRotateStart', target);
          }}
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
          onRotateEnd={(test: any) => {
            console.log(Object.keys(test.datas));
            for (const key in test.datas) {
              console.log(key, test.datas[key]);
            }
            console.dir(test.target.style.transform);
            console.log('onRotateEnd', test);
          }}
        />
      )}
      <div
        ref={ref}
        className={styles.root}
        style={{ transform: 'rotate(90deg)' }}
      >
        <h1>Movable</h1>
      </div>
    </>
  );
}

export default Movable;
