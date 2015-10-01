export const SUBMIT_COMMENT = 'SUBMIT_COMMENT'

export function handleCommentSubmit(comment) {
  return {
    type: 'SUBMIT_COMMENT',
    comment
  };
}
