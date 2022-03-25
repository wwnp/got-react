export function getValueFromAddress(search, word) {
  const temp = search.indexOf(word) + (+word.length + 1)
  return search.charAt(temp)
}
export const PER_PAGE = 10