import React from 'react';
import './App.css';
import PostList from './components/PostList';
import {users} from './users';
import {comments} from './comments';
import {posts} from './posts';

function App() {
  return (
    <PostList users={users} comments={comments} posts={posts} />
  );
}

export default App;
