import React from 'react';

const CommentList = props => {
    const { list, onClickRemove } = props;
    return (
        <div className="list-comment">
            <ul>
                {list.map(el => {
                    return (
                        <li key={el.id}>
                            <h2>{el.author}</h2>
                            <p>{el.comment}</p>

                            <div className="right-bt">
                                <span>{el.date}</span>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => onClickRemove(el.id)}
                                >
                                    Удалить
                                </button>
                            </div>

                            <div className="line"></div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CommentList;
