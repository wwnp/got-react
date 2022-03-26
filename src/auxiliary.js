export function getValueFromAddress(search, word) {
  const temp = search.indexOf(word) + (+word.length + 1)
  return search.charAt(temp)
}
export const PER_PAGE = 8
export const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}
export const email = 'serhio.gilev@gmail.com'