import React from 'react';

const AddComment = props => {
    const { onClickSubmit } = props;
    let author;
    let comment;

    return (
        <form
            className="add-comment"
            onSubmit={ev => {
                ev.preventDefault();
                if (!author.value.trim() || !comment.value.trim()) {
                    return;
                }
                onClickSubmit(author.value, comment.value);
                author.value = '';
                comment.value = '';
            }}
        >
            <input
                required
                type="text"
                placeholder="Автор"
                ref={node => (author = node)}
                name="author"
            />
            <textarea
                required
                placeholder="Комментарий"
                name="comment"
                ref={node => (comment = node)}
            ></textarea>
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddComment;
