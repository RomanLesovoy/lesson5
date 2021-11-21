import React from 'react';
import { Post } from "../types/Post";

const defaultProps: Post = {
    title: '',
    text: '',
    id: 1,
    date: new Date()
}
const Post = (props: Post = defaultProps) => {
    return (
        <div className="post">
            <div className="title">{ props.title }</div>
            <div className="text">{ props.text }</div>
            <div className="text">{ props.id }</div>
        </div>
    );
}

export default Post;
