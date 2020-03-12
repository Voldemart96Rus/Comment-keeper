export const saveComment = commentList => {
    try {
        const comments = JSON.stringify(commentList);
        localStorage.setItem('comments', comments);
    } catch {
        // ignore write errors
    }
};

export const loadComment = () => {
    try {
        const comments = localStorage.getItem('comments');
        if (comments === null) {
            return [];
        }
        return JSON.parse(comments);
    } catch (err) {
        return [];
    }
};
