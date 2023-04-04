const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', agregarTarea);

const inputTarea = document.getElementById('inputTarea');
const listaDeTareas = document.getElementById('listaDeTareas');

function agregarTarea(e) {
  e.preventDefault();

  const tarea = inputTarea.value;

  if (tarea !== '') {

    const elementoLista = document.createElement('li');
    elementoLista.classList = 'list-group-item list-group-item-primary d-flex justify-content-between pt-2';
    const textoTarea = document.createTextNode(tarea);
    const btnEliminar = document.createElement('button');
    btnEliminar.classList = 'btn btn-outline-danger ms-2';
    btnEliminar.innerHTML = `<i class="bi bi-trash3-fill"></i>`;

    elementoLista.appendChild(textoTarea);
    elementoLista.appendChild(btnEliminar);

    listaDeTareas.appendChild(elementoLista);

    inputTarea.value = '';


    btnEliminar.addEventListener('click', () => {
      listaDeTareas.removeChild(elementoLista);
    });
  }
};

