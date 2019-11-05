import * as React from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from 'antd';
import { get } from 'lodash-es';
import { add, update, remove } from '../../store/workspace.store';
import FloorPlan from '../../components/FloorPlan';

import styles from './Workspace.module.scss';

export const uriPattern = '/workspaces/:id';

function Workspace(props: any) {
  const { match } = props;
  const id = get(match, ['params', 'id']);
  const workspace = useSelector((state) =>
    get(state, ['workspace', 'workspaces'], []).find(
      (workspace: any) => workspace.id === id,
    ),
  );
  const dispatch = useDispatch();

  const handleCopyClick = useCallback(() => {
    // console.log(data);
    dispatch(
      add({
        ...JSON.parse(JSON.stringify(workspace)),
        id: undefined,
        name: `${workspace.name} (복사)`,
        // // id,
        // data,
      }),
    );
  }, [dispatch, workspace]);

  const handleRemoveClick = useCallback(() => {
    // console.log(data);
    dispatch(remove(id));
  }, [dispatch, id]);

  const handleDataChange = useCallback(
    (data) => {
      // console.log(data);
      dispatch(
        update({
          id,
          data,
        }),
      );
    },
    [dispatch, id],
  );

  const handleNameChange = useCallback(
    (event) => {
      // console.log(data);
      dispatch(
        update({
          id,
          name: event.target.value,
        }),
      );
    },
    [dispatch, id],
  );
  return (
    <div className={cx('container-fluid', styles.root)}>
      <div className="row">
        <div className="col">
          <Link to="/home">Home</Link>
          {workspace && (
            <>
              <Button onClick={handleCopyClick}>복사</Button>
              <Button onClick={handleRemoveClick}>삭제</Button>

              <Input
                type="text"
                defaultValue={workspace.name}
                onChange={handleNameChange}
              />
            </>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr />
          {workspace && (
            <FloorPlan data={workspace.data} onChange={handleDataChange} />
          )}
        </div>
      </div>
    </div>

    // <div className={styles.root}>
    //   <Link to="/home">home</Link>
    //   <hr />

    //   {workspace ? (
    //     <>
    //       <h1>{id}</h1>
    //       <pre>{JSON.stringify(workspace, null, 2)}</pre>
    //     </>
    //   ) : (
    //     <Link to="/home">page not found.... to home.</Link>
    //   )}
    // </div>
  );
}

export default Workspace;
