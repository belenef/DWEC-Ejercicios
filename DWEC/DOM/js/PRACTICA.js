// FICHERO DONDE HE REALIZADO LA PRÁCTICA (BOTÓN FOOTER)

document.addEventListener('DOMContentLoaded', () => {
  const btnFlotante = document.querySelector('.btn-flotante');
  const footer = document.querySelector('.footer');

  // evento que al hacer click, el footer se activa
  btnFlotante.addEventListener('click', (e) => {
    footer.classList.toggle('activo');

    // si el footer está activo, cambia el color y texto del botón
        if(footer.classList.contains('activo')){
            btnFlotante.textContent = "xCerrar";
            btnFlotante.style.color = "white";
            btnFlotante.style.backgroundColor = "#da595e";

            // al volverle a dar, el botón vuelve a su estado original
        }else{
            btnFlotante.textContent = "Descubre más...";
            btnFlotante.style.backgroundColor = "white";
            btnFlotante.style.color = "#484848";
        }
  });

  
});
