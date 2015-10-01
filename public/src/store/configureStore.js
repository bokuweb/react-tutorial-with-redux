import { createStore } from 'redux';
import comment from '../reducers/comment'

export default function configureStore() {
  const store = createStore(comment);
  return store;
}

