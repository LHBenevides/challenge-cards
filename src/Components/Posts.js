import React from 'react'
import styles from './Posts.module.css'

const Posts = ({ post, loading }) => {
  if (loading) return <h1>...Loading</h1>
  return (
    <div className={styles.grid}>
      {post.map((post) => (
        <div key={post.id} className='card bg-primary text-white g-0' >
          <div  className='card-header'>{post.id}</div>
          <div className='card-body'>
            <h5 className='card-title'>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts