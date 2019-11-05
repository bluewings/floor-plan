import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import app from './app.store';
import workspace from './workspace.store';
import item from '../components/Item/item.store';
// import timetable from '../components/TimeTable/timetable.store';
// import sidebar from '../components/Sidebar/sidebar.store';

const rootReducer = combineReducers({
  app: persistReducer({ key: 'app', storage }, app),
  item: persistReducer({ key: 'item', storage }, item),
  workspace: persistReducer({ key: 'workspace', storage }, workspace),
});

console.log(rootReducer);

export default rootReducer;
