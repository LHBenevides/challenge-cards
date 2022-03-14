import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';

function App() {

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setpostPerPage] = useState(6);

  useEffect(() => {
    const fethData = async () => {
      setLoading(true)
      let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPost(response.data);
      setLoading(false);
    };
    fethData();
  }, [])

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <h1 className='text-primary mb-3' style={{ marginTop: '40px' }}>Cards</h1>
      <Posts post={currentPost} loading={loading} />
      <Pagination postPerPage={postPerPage} totalPost={post.length} paginate={paginate} />
    </div>
  );
}

export default App;
