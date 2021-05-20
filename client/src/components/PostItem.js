import React from 'react'

const PostItem = ({post}) => {
    return (
        <div className="container">
            <div className="row">
                <h1>{post.title}</h1>
                <img src="{post.url}" alt="" />
                <p>{post.description}</p>
            </div>
        </div>
    )
}

export default PostItem
