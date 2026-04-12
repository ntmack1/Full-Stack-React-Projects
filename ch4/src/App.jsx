import { PostList } from './components/PostList.jsx'

const posts = [
  {
    title: 'Full-Stack React Projects',
    contents: "let's become full-stack developers!",
    author: 'Nathan Mack',
  },
  { title: 'Hello React!' },
]

export function App() {
  return <PostList posts={posts} />
}
