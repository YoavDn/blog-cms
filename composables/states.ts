export const useBlogTitle = () =>
  useState<string>('blogTitle', () => {
    return ''
  })
