export const splitString = (text, chunkSize) => {
  const arr = text.split(" ")
  const output = []

  for (let i = 0, length = arr.length; i < length; i += chunkSize) {
    output.push(arr.slice(i, i + chunkSize))
  }

  return output
}
