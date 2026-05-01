import { useState } from 'react'
import styles from './Post.module.css'
import PropTypes from 'prop-types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePost } from '../api/posts.js'

export function Post({ _id, title, contents, author }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: () => deletePost(_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  return (
    <article className={styles.post}>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>{contents}</div>
        {author && (
          <p className={styles.meta}>
            Written by <span className={styles.author}>{author}</span>
          </p>
        )}
      </div>

      <div className={styles.actions}>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label='Post actions'
        >
          ⋮
        </button>
        {menuOpen && (
          <div className={styles.dropdown}>
            <button
              className={styles.deleteItem}
              onClick={() => {
                setMenuOpen(false)
                deleteMutation.mutate()
              }}
              disabled={deleteMutation.isPending}
            >
              Delete post
            </button>
          </div>
        )}
      </div>
    </article>
  )
}

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
}
