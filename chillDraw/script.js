dragElement((document.getElementById("paleta")));

//Para que no pinte cuando este encima de un elemento-
var parar = false; //La delcaro var para que se pueda usar en el otro archivo para parar el canvas
function stopPainting() {
    parar = true;
}

function continuePainting() {
  if(!document.onmousemove){
  parar = false;
  }
}
//------------------------------------------------

let altpressed = false;

//Elemento Que se puede mover (Para la paleta)
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementsByClassName(elmnt.id + "-nav")) {
      /* if present, the header is where you move the DIV from:*/

      document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if(keyName == 'Alt'){
          altpressed = true;
          document.getElementById(elmnt.id + "-nav").onmousedown = dragMouseDown;   
          document.getElementById("logo").style.cursor = "move";
        }   
         
      });

      document.addEventListener('keyup', (event) => {
        const keyName = event.key;
        if(keyName == 'Alt'){
          altpressed = false;
          document.getElementById(elmnt.id + "-nav").onmousedown = null;   
          document.getElementById("logo").style.cursor = "pointer";
        }   
      });
      
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
//------------------------------------------------------------

let abrirmenu = true;

let elems = document.getElementsByClassName("link-text");
    
//Despleglar el menu de la palete
function paletaOpen(){
  //console.log(altpressed);
  if(abrirmenu && altpressed == false){
    document.getElementById("paleta").style.width =  720 + "px";
    //Cambiar cada boton
    for (var i=0;i<elems.length;i+=1){
      elems[i].style.display = 'flex';
      elems[i].style.opacity = 1;
    }
    
    //document.getElementsByClassName("link-text").style.opacity = 1;
    //document.getElementsByClassName("link-text").style.background-color = ;
   
    abrirmenu = !abrirmenu;
  }else{
    
  //console.log(altpressed);
    document.getElementById("paleta").style.width =  20 + "px";
    
    //Cambiar cada boton
    for (var i=0;i<elems.length;i+=1){
      elems[i].style.display = 'none';
      elems[i].style.opacity = 0;
    }
    
    abrirmenu = !abrirmenu;
  }
}