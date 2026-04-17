import styles from './Blog.module.css'
import { PostList } from './components/PostList.jsx'
import { CreatePost } from './components/CreatePost.jsx'
import { PostSorting } from './components/PostSorting.jsx'
import { PostFilter } from './components/PostFilter.jsx'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from './api/posts.js'
import { useState } from 'react'

export function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortby] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  const postsQuery = useQuery({
    queryKey: ['posts', { author, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, sortBy, sortOrder }),
  })

  const posts = postsQuery.data ?? []

  return (
    <div className={styles.page}>
      <CreatePost />
      <br />
      <hr />
      Filter by:
      <PostFilter
        field='author'
        value={author}
        onChange={(value) => setAuthor(value)}
      />
      <br />
      <PostSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={(value) => setSortby(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
