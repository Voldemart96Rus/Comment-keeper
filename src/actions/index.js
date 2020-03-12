export const addComment = (author, comment) => {
    return {
        type: 'ADD_COMMENT',
        author,
        comment
    };
};

export const deleteComment = id => {
    return {
        type: 'DELETE_COMMENT',
        id
    };
};
