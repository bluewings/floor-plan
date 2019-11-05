import * as React from 'react';
import Movable from '../Movable';
import Blueprint from '../Blueprint';
import styles from './Layout.module.scss';

function Layout(props: any) {
  return (
    <div className={styles.root}>
      {/* <h1>Layout</h1> */}
      {/* <Blueprint /> */}
      {props.children}
    </div>
  );
}

export default Layout;
