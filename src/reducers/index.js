const commentList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            const date = new Date();
            return [
                ...state,
                {
                    author: action.author,
                    comment: action.comment,
                    date: date.toLocaleString(),
                    id: date.valueOf()
                }
            ];
        case 'DELETE_COMMENT':
            return state.filter(comment => comment.id !== action.id);

        default:
            return state;
    }
};

export default commentList;
