let imagenes = document.querySelectorAll('.img');
let texto=document.querySelectorAll('.texto')

imagenes.forEach((elemento, index) => {
  elemento.addEventListener('click', () => {
    imagenes.forEach((div) => {
      div.classList.remove('expander');
    });
    elemento.classList.add('expander');
    console.log({ elemento, index });
  });
});
