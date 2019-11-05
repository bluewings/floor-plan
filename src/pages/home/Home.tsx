import * as React from 'react';
import { useCallback } from 'react';
import { get } from 'lodash-es';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import { add } from '../../store/workspace.store';
import styles from './Home.module.scss';

export const uriPattern = '/home';

function Home(props: any) {
  const dispatch = useDispatch();
  const workspaces = useSelector((state) =>
    get(state, ['workspace', 'workspaces']),
  );

  const handleAddClick = useCallback(() => {
    dispatch(add({}));
  }, [dispatch]);

  return (
    <div className={cx('container', styles.root)}>
      <div className="row">
        <div className="col">
          <div style={{ float: 'right' }}>
            <Button onClick={handleAddClick}>New Page</Button>
          </div>
          <h3>Floor Plan</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr />
          <ul>
            {workspaces.map((workspace: any, i: number) => {
              return (
                <li key={i}>
                  <Link to={`/workspaces/${workspace.id}`}>
                    {workspace.name || workspace.id}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
