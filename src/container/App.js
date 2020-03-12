import React from 'react';
import './App.css';
import './extension.css';

import AddComment from '../component/add-comment';
import CommentList from '../component/comment-list';
import Header from '../component/heder';
import { connect } from 'react-redux';
import { addComment, deleteComment } from '../actions';

let App = props => {
    const { list, addComment, deleteComment } = props;
    return (
        <div>
            <Header />
            <div className="App">
                <CommentList onClickRemove={deleteComment} list={list} />
                <AddComment onClickSubmit={addComment} />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        list: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addComment: (author, comment) => dispatch(addComment(author, comment)),
        deleteComment: id => dispatch(deleteComment(id))
    };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
