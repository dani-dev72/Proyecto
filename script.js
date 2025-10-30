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
    pInfo.textContent = "Ficha siendo arrastrado"
}

function dragStart(e){
    FichaMolde1 = e.target
    console.log(`Ficha ${FichaMolde1.id} comenzo a arrastrarse`)
}

function dragEnd(){
    pInfo.textContent = "Ficha ha sido soltado"
}

function dragOver(e){
    e.preventDefault()
    // console.log(`Ficha esta siendo arrastrado sobre ${e.target.classList}`)
}

function dragEnter(e){
    e.target.classList.add('highlight')
    // console.log(`Ficha esta entrando en ${e.target.classList}`)
}

function dragLeave(e){
    // console.log(`Ficha ha salido de ${e.target.classList} dl`)
    e.target.classList.remove('highlight')
}

function dragDrop(e){
    console.log(`Ficha ha sido soltado en ${e.target.classList}`)
    // e.target.appendChild(FichaMolde1)
    
    if (FichaMolde1 instanceof Node) {
        e.target.appendChild(FichaMolde1);
        e.target.classList.remove('highlight')
      } else {
        console.error("FichaMolde1 no es un nodo válido:", FichaMolde1);
      }
      console.log("FichaMolde1:", FichaMolde1, "Es nodo:", FichaMolde1 instanceof Node);

    e.target.classList.remove('highlight')
}

let zonaLanzamientoActual = null;

  document.getElementById("Ficha1").addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "elemento");
  });

  document.querySelectorAll(".contenedor").forEach((zone) => {
    zone.addEventListener("dragover", (e) => e.preventDefault());

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zonaLanzamientoActual = zone;
      document.getElementById("modal").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    });
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
      nuevaFicha.style.backgroundColor = color;
      nuevaFicha.style.color = "white";
      nuevaFicha.style.border = "2px solid black";
      nuevaFicha.style.width = "120px";
      nuevaFicha.style.height = "100px";
      nuevaFicha.style.padding = "10px";
      nuevaFicha.style.display = "flex";
      nuevaFicha.style.alignItems = "center";
      nuevaFicha.style.justifyContent = "center";
      nuevaFicha.textContent = name;

      // Permitir edición al hacer clic
      nuevaFicha.addEventListener("click", () => {
        document.getElementById("nameInput").value = name;
        document.getElementById("colorSelect").value = color;
        zonaLanzamientoActual = nuevaFicha.parentElement;
        fichaSeleccionada = nuevaFicha;
        document.getElementById("modal").style.display = "block";
        document.getElementById("overlay").style.display = "block";
      });

      // Permitir volver a arrastrar
      nuevaFicha.addEventListener("dragstart", (e) => {
        FichaMolde1 = e.target;
      });

      zonaLanzamientoActual.innerHTML = "";
      zonaLanzamientoActual.appendChild(nuevaFicha);
      closeModal();
    }
    
    if (fichaSeleccionada) {
      fichaSeleccionada.textContent = name;
      fichaSeleccionada.style.backgroundColor = color;
      fichaSeleccionada = null;
      closeModal();
      return;
    }
  }

    function cancelarDrop() {
    closeModal();
  }

    function cerrarModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("nameInput").value = "";
  }
