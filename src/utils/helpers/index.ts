const createRootLink = (paths: Array<string> = []) => {
  const root = '/'
  let result = ''

  if (paths?.length === 0) {
    return '/'
  }

  paths.map((path) => {
    if (!path.includes(root)) {
      result += `${root}${path}`
    } else {
      result += path
    }
    return path
  })
  return result
}

export default createRootLink
