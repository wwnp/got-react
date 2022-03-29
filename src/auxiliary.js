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

// document.addEventListener('DOMContentLoaded', () => {
//   const images = [];

//   function preloadImages(...images) {
//     images.forEach((image, i) => {
//       image = new Image();
//       image.src = preloadImages.arguments[i];
//     });
//   };

//   // Предварительная загрузка нужных картинок
//   preloadImages(
//     '{Изображение}.png',
//     '{Другое изображение}.jpg'
//   );
// });