import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './container/App';
import { createStore } from 'redux';
import commentList from './reducers';
import { loadComment, saveComment } from './localStorage';

const store = createStore(commentList, loadComment());

store.subscribe(() => {
    saveComment(store.getState());
});

ReactDOM.render(<App store={store} />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
