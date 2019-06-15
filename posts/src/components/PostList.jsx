import React from 'react';
import Post from './Post';
import CommentList from './CommentList'

export default function PostList(props) {
  const {users, comments, posts} = props;
  const postsList = posts.map(post => {
    const user = users.find(user => user.id === post.userId);
    return (
    <section key={post.title} className ='Post'>
      <Post title={post.title} body={post.body} user={user} />
      <section className='CommentList'>
        <CommentList comments={comments} postId={post.id} />
      </section>
    </section>
    )
  })
  return (
    <div className='PostList'>
      {postsList}
    </div>
  )
}
