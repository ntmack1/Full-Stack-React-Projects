import PropTypes from 'prop-types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePost } from '../api/posts.js'

export function Post({ _id, title, contents, author }) {
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: () => deletePost(_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  return (
    <article>
      <h3>{title}</h3>
      <div>{contents}</div>
      {author && (
        <em>
          <br />
          Written by <strong>{author}</strong>
        </em>
      )}
      <button
        onClick={() => deleteMutation.mutate()}
        disabled={deleteMutation.isPending}
      >
        Delete
      </button>
    </article>
  )
}

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
}
