const ficha1 = document.getElementById('Ficha1')
const contenedor = document.querySelectorAll('.contenedor')
const pInfo = document.getElementById('info')

//eventos

// ficha1.addEventListener('drag',dragging)

//funciones

// function dragging(){
//   console.log("Ficha siendo arrastrada")
// }



let FichaMolde1
let fichaSeleccionada = null;

contenedor.forEach(contenedor => {
    contenedor.addEventListener('dragover', dragOver)
    contenedor.addEventListener('dragenter', dragEnter)
    contenedor.addEventListener('dragleave', dragLeave)
    contenedor.addEventListener('drop',dragDrop)
    
})


//Eventos
ficha1.addEventListener('drag', dragging)
ficha1.addEventListener('dragstart', dragStart)
ficha1.addEventListener('dragend', dragEnd)

//Funciones
function dragging(){
    // pInfo.textContent = "Ficha siendo arrastrado"
}

function dragStart(e){
    // FichaMolde1 = e.target
    fichaSeleccion = e.target
    console.log(`Ficha ${fichaSeleccion.id} comenzo a arrastrarse`)
    
}

function dragEnd(){
    // pInfo.textContent = "Ficha ha sido soltado"
}

function dragOver(e){
    e.preventDefault()
      // pInfo.innerHTML = `${fichaSeleccion.classList} sobre ${e.target.classList}`;
    // console.log(`Ficha esta siendo arrastrado sobre ${e.target.classList}`)
}

function dragEnter(e){
    e.target.classList.add('highlight')
    // console.log(`Ficha esta entrando en ${e.target.classList}`)
}

function dragLeave(e){
    console.log(`Ficha ha salido de ${e.target.classList} dl`)
    e.target.classList.remove('highlight')
}

function dragDrop(e){
    // console.log(`Ficha ha sido soltado en ${e.target.classList}`)
    // e.target.appendChild(FichaMolde1)
    // console.log(fichaSeleccion)
    // pInfo.innerHTML = `Seleccion en ${fichaSeleccion.innerText}`;
    // console.log(e.target)
    // console.log(fichaSeleccion  instanceof Node)
    if (fichaSeleccion instanceof Node){
      e.target.appendChild(fichaSeleccion)
      e.target.classList.remove('highlight')
    } 
    // else {
    //   console.log(copiaFicha)
    //   e.target.appendChild(copiaFicha)
    //   e.target.classList.remove('highlight')
    // }
    
    // e.target.appendChild(copiaFicha)
    
    // if (FichaMolde1 instanceof Node) {
    //     e.target.appendChild(FichaMolde1);
    //     e.target.classList.remove('highlight')
    //   } else {
    //     console.error("FichaMolde1 no es un nodo válido:", FichaMolde1);
    //   }
      // console.log("FichaMolde1:", fichaSeleccion, "Es nodo:", fichaSeleccion instanceof Node);

    
}

let zonaLanzamientoActual = null;
// let copiaFicha = contenedor[817].firstElementChild

const contenedorMoldesUso = contenedor[817]
let copiaFicha 
// console.log(contenedorMoldesUso)
// console.log(copiaFicha)

  document.getElementById("Ficha1").addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "elemento");
    // console.log("Estoy quitando ficha de Moldes en Uso")
    console.log(contenedor[817].firstElementChild)
    
  });

  document.querySelectorAll(".contenedor").forEach((zone) => {
    zone.addEventListener("dragover", (e) => e.preventDefault());

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      // e.target.classList.remove('highlight')
      zonaLanzamientoActual = zone;
      // console.log(contenedor[817].firstElementChild)
      if(contenedor[817].firstElementChild == null){
        
        // console.log(copiaFicha)
        // contenedor[817].firstElementChild.append(copiaFicha)
        // console.log("Aqui no hay ficha")
        copiaFicha = document.createElement('div')
        copiaFicha.classList.add('FichaMolde1')
        copiaFicha.setAttribute('draggable', 'true')
        copiaFicha.setAttribute('id', 'Ficha1')
        let textoFicha = document.createElement('h1')
        textoFicha.innerHTML = "MO -"
        copiaFicha.append(textoFicha)
        // console.log(copiaFicha.firstElementChild)
        // copiaFicha.innerText = "MO -"
        contenedorMoldesUso.append(copiaFicha)
        
        // console.log(copiaFicha)
      }
      // console.log(contenedor[817].firstElementChild)
      // console.log(e.target.firstElementChild)
      // e.target.appendChild(copiaFicha)
        if (fichaSeleccion instanceof Node){
        e.target.appendChild(fichaSeleccion)
        e.target.classList.remove('highlight')
      } else {
        console.log(copiaFicha)
        e.target.appendChild(copiaFicha)
        e.target.classList.remove('highlight')
        // console.log(contenedor[817].firstElementChild)
        if(contenedor[817].firstElementChild == null){
        copiaFicha = document.createElement('div')
        copiaFicha.classList.add('FichaMolde1')
        copiaFicha.setAttribute('draggable', 'true')
        copiaFicha.setAttribute('id', 'Ficha1')
        let textoFicha = document.createElement('h1')
        textoFicha.innerHTML = "MO -"
        copiaFicha.append(textoFicha)
        contenedorMoldesUso.append(copiaFicha)
        }
      }
      document.getElementById("modal").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    });
    // pInfo.innerHTML = `Seleccion en ${fichaSeleccion.innerText}`;
  });

function confirmarDrop() {
  const color = document.getElementById("colorSelect").value;
  const name = document.getElementById("nameInput").value;

  // if (name.trim() !== "") {
  //   zonaLanzamientoActual.innerHTML = `<div font-size: 100%; border: 2px solid black; width: 120px; height: 100px; padding: 10px; style="background-color:${color}; color:white;">${name}</div>`;
  //   closeModal();
  // }
  
  if (name.trim() !== "") {
      const nuevaFicha = document.createElement("div");
      nuevaFicha.className = "FichaMolde1";
      nuevaFicha.draggable = true;
      nuevaFicha.id = "Ficha1";
      nuevaFicha.style.backgroundColor = color;
      nuevaFicha.classList.add('estilosFichaContTablaRevision')
      // nuevaFicha.style.color = "black";
      // nuevaFicha.style.border = "2px solid black";
      // nuevaFicha.style.width = "120px";
      // nuevaFicha.style.height = "100px";
      // nuevaFicha.style.padding = "10px";
      // nuevaFicha.style.display = "flex";
      // nuevaFicha.style.alignItems = "center";
      // nuevaFicha.style.justifyContent = "center";
      // // nuevaFicha.style.fontWeight = "500";
      // nuevaFicha.style.fontSize = "1.2vh";
      // nuevaFicha.style.webkitTextStrokeWidth = "1px";
      // nuevaFicha.style.webkitTextStrokeColor = "black";
      nuevaFicha.textContent = name;

      // Permitir edición al hacer clic
      nuevaFicha.addEventListener("click", () => {
        document.getElementById("nameInput").value = name;
        document.getElementById("colorSelect").value = color;
        zonaLanzamientoActual = nuevaFicha.parentElement;
        fichaSeleccion = nuevaFicha;
        // console.log(fichaSeleccion)
        // pInfo.innerHTML = `Seleccion en ${fichaSeleccion.innerText}`;
        pInfo.innerHTML = `Ficha seleccionada ${fichaSeleccion.innerText}`

        document.getElementById("modal").style.display = "block";
        document.getElementById("overlay").style.display = "block";
      });
      
      // Permitir volver a arrastrar
      nuevaFicha.addEventListener("dragstart", (e) => {
        fichaSeleccion = e.target;
        pInfo.innerHTML = `Seleccion en ${fichaSeleccion.innerText}`;
        // console.log(fichaSeleccion)
      });

      zonaLanzamientoActual.innerHTML = "";
      zonaLanzamientoActual.appendChild(nuevaFicha);
      pInfo.innerHTML = ""
      // pInfo.innerHTML = `Seleccion en ${fichaSeleccion.innerText}`;
      cerrarModal();
    }
    
    if (fichaSeleccion) {
      fichaSeleccion.textContent = name;
      fichaSeleccion.style.backgroundColor = color;
      fichaSeleccion = null;
      // pInfo.innerHTML = `Seleccion en ${fichaSeleccion.innerText}`;
      cerrarModal();
      return;
    }
    
  }

    function cancelarDrop() {
    cerrarModal();
  }

    function cerrarModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("nameInput").value = "";
    
  }

  // ficha1.addEventListener('click', function(event){
  //   console.log(`Click en ficha ${FichaMolde1.id}`)

  // })

  // const miElemento = document.getElementById('remover');
  // const miPadre = miElemento.parentElement;
  // if(document.getElementById('Ficha1'))
  // miPadre.removeChild(miElemento);


let fichaSeleccion 
// const fichaContTablaRevision = document.getElementsByClassName("FichaMolde1")
//  fichaContTablaRevision = document.addEventListener("click", mostrarClic)
// console.log(fichaContTablaRevision)
let b = false
const botonMenuBotones = document.getElementsByClassName("boton")
// console.log(botonMenuBotones)
function mostrarClicBotonSeleccionado(e){
  pInfo.innerHTML = `Boton seleccionada ${e.target.innerText} a Ficha: ${fichaSeleccion.innerText}`;
  if(e.target.innerText=="Eliminar Ficha"){
  // console.log("Funcion Eliminar_Ficha")
    // e.target.classList.remove('highlight')
    fichaSeleccion.remove()
    // cancelarDrop()
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("nameInput").value = "";
    fichaSeleccion=null
    // console.log(fichaSeleccion)
  }
  if(e.target.innerText=="Cambiar Color/Estado"){
    // console.log("Funcion Cambiar_Color_Estado")
    console.log(fichaSeleccion.getAttribute("style"))
    console.log(fichaSeleccion.getAttribute("style") == "background-color: greenyellow;")
    if(fichaSeleccion.getAttribute("style") == "background-color: greenyellow;"){
      fichaSeleccion.style.removeProperty("background-color")
      fichaSeleccion.style.backgroundColor = "red"
      document.getElementById("colorSelect").value = "red"
      // cerrarModal();
    }  
    else if(fichaSeleccion.getAttribute("style") == "background-color: red;"){
      fichaSeleccion.style.removeProperty("background-color")
      fichaSeleccion.style.backgroundColor = "yellow"
      document.getElementById("colorSelect").value = "yellow"
      // cerrarModal();
    }
    else if (fichaSeleccion.getAttribute("style") == "background-color: yellow;"){
      fichaSeleccion.style.removeProperty("background-color")
      fichaSeleccion.style.backgroundColor = "greenyellow" 
      document.getElementById("colorSelect").value = "greenyellow"
      // cerrarModal();
    }
    // confirmarDrop();
    console.log(document.getElementById("colorSelect").value)
  }
  if(e.target.innerText=="Agregar Comentario"){
    // console.log("Funcion Agregar_Comentario")
    if(b){
      fichaSeleccion.lastElementChild.remove()
      b = false
    } else {
      let iconoComentario = document.createElement('i')
      iconoComentario.classList.add("bi", "bi-triangle-fill")
      fichaSeleccion.appendChild(iconoComentario)
      b = true
    }

  }
  if(e.target.innerText=="Agregar Parada"){
    console.log("Funcion Agregar_Parada")
  }
}
for(const botonMenuBotones1 of botonMenuBotones){
    botonMenuBotones1.addEventListener("click", mostrarClicBotonSeleccionado)
}
// fichaSeleccion.addEventListener("click", () => {
//   console.log(fichaSeleccion)
// })
// function mostrarClic(e){ 
//   console.log(e.target) //Muestra el elemento target que se esta ejecutando 
//   console.log(e)
//   console.log(`se esta haciendo clic en ${fichaContTablaRevision.target}`)
// }
// fichaContTablaRevision.addEventListener("clic", mostrarClic)
// function mostrarClicMoldeSeleccionado(e){ //<- este es el event handler
//    pInfo.innerHTML = `Ficha seleccionada ${e.target.innerText}`;
//   //  return e.target
//   console.log(e.target.innerText)
// }

// Muestra en Texto que Ficha esta en Seleccion

  // fichaContTablaRevision1.addEventListener("click", mostrarClicMoldeSeleccionado)
  // fichaContTablaRevision1.addEventListener("click", (e) => {  
  // console.log(fichaContTablaRevision1.target)
  // pInfo.innerHTML = `Ficha seleccionada ${e.target.innerText}`;
  // console.log(e.target.innerText) 
  // console.log(e.target)
  // console.log(fichaSeleccion)
  // fichaSeleccion = e.target
  // })


