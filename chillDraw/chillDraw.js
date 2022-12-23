/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.backgroundColor = "red"

ctx.lineWidth = 0.2;

let drawing = false; //Para que dibuje solo cuando haga click

ctx.globalCompositeOperation = 'null';

const download = document.getElementById('save');
download.addEventListener('click', function(e) {
    const link = document.createElement('a');
    link.download = 'MiDibujo.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  });

//Para cambiar el COLOR de FONDO-----------------------
var backgroundColor = document.getElementById("colores");

ctx.fillStyle = "#dbdbdb";
ctx.fillRect(0,0,canvas.width,canvas.height);

backgroundColor.addEventListener("input", (e) =>{
    //var body = document.getElementById("canvas1");
    //body.style.backgroundColor = e.target.value;
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0,0,canvas.width,canvas.height);
});

/*
backgroundColor.addEventListener("change", () =>{
    console.log("El color es: " + backgroundColor.value);
    document.body.style.backgroundColor = backgroundColor.value;
});*/
//------------------------------------------------------    

//Sound

//const sound = new Audio("../sound/pincel.mp3");

//Botones
class Root {
    constructor(x,y){
        // ----------------VARIABLES-----------------
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 -2;
        this.speedY = Math.random() * 4 -2;
        this.maxSize = Math.random() * 7 +10;

        //Longitud :)
        this.size = Math.random() * 1 + 7;
        
        //Forma de crecer
        this.vs = Math.random() * 0.2 + 0.05;
        
        //Que gire
        this.angleX = Math.random() * 6.2;
        //Velocidad del angulo
        this.vax = Math.random() * 0.6 - 0.3;
    
        this.angleY = Math.random() * 6.2;
        this.vay = Math.random() * 0.6 - 0.3;
        
        this.angle = 0;
        this.va = Math.random() * 0.02 + 0.05;

        //Luminosidad
        this.lightness = 40;

        //this.color = color;
        //this.centerX = centerX;
       // this.centerY = centerY;
    }
    
        // Diferentes formas
        drawFlower(){
                this.x += this.speedX + Math.sin(this.angleX);
                this.y +=  this.speedY + Math.sin(this.angleY);
                this.size += this.vs;
                this.angleX += this.vax;
                this.angleY += this.vay;
                
                //Luminosidad creciendo
                if(this.lightness < 70) this.lightness += 0.25;
                
                if(this.size < this.maxSize){
                    ctx.beginPath();
                    ctx.arc(this.x,this.y,this.size,0,Math.PI *2);
                    ctx.fillStyle = 'hsl(140,100%,'+ this.lightness +'%)';
                    ctx.fill();
                    ctx.stroke();
                    
                    requestAnimationFrame(this.drawFlower.bind(this));
                }else{
                    const flower = new Flower(this.x, this.y, this.size);
                    flower.grow();
                }   
                ctx.restore();
        }

        drawEmoji(){

            this.x += this.speedX + Math.sin(this.angleX);
                this.y +=  this.speedY + Math.sin(this.angleY);
                this.size += this.vs;
                this.angleX += this.vax;
                this.angleY += this.vay;
                
                //Luminosidad creciendo
                if(this.lightness < 70) this.lightness += 0.25;
                
                if(this.size < this.maxSize){
                    ctx.beginPath();
                    ctx.arc(this.x,this.y,this.size,0,Math.PI *2);
                    ctx.fillStyle = 'hsl(31,100%,'+ this.lightness +'%)';
                    ctx.fill();
                    ctx.stroke();
                    
                    requestAnimationFrame(this.drawEmoji.bind(this));
                }else{
                    const emoji = new Emojis(this.x,this.y,this.size);
                    emoji.grow();
                }
                ctx.restore();
        }

        drawBts(){
                /*this.x += this.speedX + Math.sin(this.angleX);
                this.y +=  this.speedY + Math.sin(this.angleY);
                this.size += this.vs;
                this.angleX += this.vax;
                this.angleY += this.vay;
                
                //Luminosidad creciendo
                if(this.lightness < 70) this.lightness += 0.25;
                
                if(this.size < this.maxSize){
                    ctx.beginPath();
                    ctx.arc(this.x,this.y,this.size,0,Math.PI *2);
                    //ctx.fillStyle = 'hsl(100,100%,'+ this.lightness +'%)';
                    //ctx.fill();
                    ctx.stroke();
                    
                    ctx.strokeStyle = 'white';
                    //ctx.strokeRect(0,0, this.size * 2, this.size * 2);

                    requestAnimationFrame(this.drawBts.bind(this));
                }else{*/
                    const btshand = new BtsHand(this.x,this.y,this.size);
                    btshand.grow();
                    ctx.restore();
                //}
        }

        
        /*drawNazi(){

            this.x += this.speedX + Math.sin(this.angleX);
                this.y +=  this.speedY + Math.sin(this.angleY);
                this.size += this.vs;
                this.angleX += this.vax;
                this.angleY += this.vay;
                
                //Luminosidad creciendo
                if(this.lightness < 70) this.lightness += 0.25;
                
                if(this.size < this.maxSize){
                    ctx.beginPath();
                    ctx.arc(this.x,this.y,this.size,0,Math.PI *2);
                    //ctx.fillStyle = 'hsl(100,100%,'+ this.lightness +'%)';
                    //ctx.fill();
                    ctx.stroke();
                    
                    ctx.strokeStyle = 'white';
                    //ctx.strokeRect(0,0, this.size * 2, this.size * 2);

                    requestAnimationFrame(this.drawNazi.bind(this));
                }else{
                    const nazi = new Nazi(this.x,this.y,this.size);
                    nazi.grow();
                }
        }*/
        
        drawCuadrado(){
            this.x += this.speedX + Math.sin(this.angleX);
                this.y +=  this.speedY + Math.sin(this.angleY);
                this.size += this.vs;
                this.angleX += this.vax +2;
                this.angleY += this.vay;
                this.angle += this.va;
                //Luminosidad creciendo
                if(this.lightness < 70) this.lightness += 0.25;
                
                if(this.size < this.maxSize){
                    ctx.save();

                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 10;
                    ctx.shadowBlur =  10;
                    ctx.shadowColor = 'rgba(0,0,0,0.5)';

                    ctx.translate(this.x,this.y);
                    ctx.rotate(this.angle);
                    ctx.fillStyle = '#FFF5DE';
                    ctx.fillRect(0,0,this.size,this.size);
                    
                    //Cuadrados de fondo
                   /* ctx.strokeStyle = '#3c5186';
                    ctx.strokeRect(0,0, this.size * 2, this.size * 2);

                    ctx.strokeStyle = 'red';
                    ctx.strokeRect(0,0, this.size * 3, this.size * 3);*/
                    

                    requestAnimationFrame(this.drawCuadrado.bind(this));
                    ctx.restore();
                }
                
        }
        
        drawGotas(){
            const gota = new Gotas(this.x ,this.y);
            gota.drawParticle();
            ctx.restore();
        }

        drawParticles(){
            const particles = new Particulas(this.x, this.y, this.size);
            particles.drawParticle(); 
            ctx.restore();  
        }

        drawCircle(){
            this.speedX+= (Math.random() -0.5) /2;
            this.speedY+= (Math.random() -0.5) /2;
            
            this.x += this.speedX + Math.sin(this.angleX);
            this.y +=  this.speedY + Math.sin(this.angleY);

            //this.x += this.speedX;
            //this.y += this.speedY;
            if(this.size < this.maxSize){
            this.size += this.vs;
            this.angleX += this.vax + Math.random() *50;
            this.angleY += this.vay + Math.random() *50;
            this.angle += this.va + Math.random() *50 + 50;

            /*
            ctx.beginPath();
            ctx.fillStyle = "#8822f5";
            ctx.arc(this.x,this.y,this.size*3,0,Math.PI *3);            
            ctx.fill();*/
            
            ctx.beginPath();
            ctx.fillStyle = "#34e2eb";
            ctx.arc(this.x + Math.random() *25 -20,this.y + Math.random()*25,this.size + Math.random() * 4,0,Math.PI *3);            
            ctx.fill();
            
            ctx.beginPath();
            ctx.fillStyle = "#34eb61";
            ctx.arc(this.x + Math.random() *25,this.y + Math.random() *25,this.size + Math.random() * 4,0,Math.PI *3);            
            ctx.fill();
            
            ctx.beginPath();
            ctx.fillStyle = "#ebd334";
            ctx.arc(this.x + Math.random() *25,this.y + Math.random() *25,this.size + Math.random() * 4,0,Math.PI *3);            
            ctx.fill();
            
            ctx.beginPath();
            ctx.fillStyle = "#fc03ca";
            ctx.arc(this.x + Math.random() *25,this.y + Math.random() *25,this.size + Math.random() * 4,0,Math.PI *3);            
            ctx.fill();

            
            ctx.beginPath();
            ctx.fillStyle = "#ff006a";
            ctx.arc(this.x + Math.random() *25,this.y + Math.random() *25,this.size + Math.random() * 4,0,Math.PI *3);            
            ctx.fill();
            
            
            ctx.beginPath();
            ctx.fillStyle = "##ff8c00";
            ctx.arc(this.x + Math.random() *25,this.y + Math.random() *25,this.size + Math.random() * 4,0,Math.PI *3);            
            ctx.fill();

            requestAnimationFrame(this.drawCircle.bind(this));
            ctx.restore();
            }
        }

        //Elegir que dibujar en función de lo seleccionado
        dibujar(){
            
            switch (selector) {
               
                case 0:
                    cuandoClick = 1;
                    this.drawBts();    
                break;
            
                case 1:
                    cuandoClick = 10;
                    this.drawCuadrado();
                break;
            
                case 2:
                    cuandoClick = 10;
                    this.drawFlower();
                break;
                
                case 3:
                    cuandoClick = 10;
                    this.drawEmoji();
                break;

                case 4:
                    cuandoClick = 1;
                     this.drawParticles();
                break;

                case 5: 
                    cuandoClick = 3;
                    this.drawCircle();
                break;

                default:
                    this.Bts();
                    break;
            }
            
        }        

}

let selector = 0;

function Bts(){
    selector = 0;
}

function Cuadrados() {
    selector = 1;
}


function Flores() {
    selector = 2;
}

function selectEmoji(){
    selector = 3;
}

function selectParticles(){
    selector  = 4;
}

function selectCircles(){
    selector  = 5;
}

// CLASES DIFERENTES TRAZOS---------------------------
class Flower{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.vs = Math.random() * 0.3 + 0.7;
        this.maxFlowerSize = this.size + Math.random() *35 + 30;
        this.image = new Image();
        this.image.src = '../img/flowers.png';
        this.frameSize = 100;
        this.frameX = Math.floor(Math.random() *3);
        this.frameY = Math.floor(Math.random() *3);
        this.angle = 0;
        this.va = Math.random() *0.05 - 0.025;
    };

    grow(){
        if(this.size < this.maxFlowerSize){
            this.size += this.vs;
            this.angle += this.va;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.drawImage(this.image, this.frameSize * this.frameX, this.frameSize * this.frameY, this.frameSize, this.frameSize,
                0 - this.size/2, 0 - this.size/2,this.size,this.size);
            ctx.restore();
            requestAnimationFrame(this.grow.bind(this));
        }
    }
}

class Emojis{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.vs = Math.random() * 0.3 + 0.5;
        this.maxSize = this.size + Math.random() *50;
        this.image = new Image();
        this.image.src = '../img/Emojis.png';
        this.frameSize = 100;
        this.frameX = Math.floor(Math.random() *3);
        this.frameY = Math.floor(Math.random() *3);
        this.angle = 0;
        this.va = Math.random() *0.05 - 0.025;
    };

    grow(){
        if(this.size < this.maxSize){
            this.size += this.vs;
            this.angle += this.va;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.drawImage(this.image, this.frameSize * this.frameX, this.frameSize * this.frameY, this.frameSize, this.frameSize,
                0 - this.size/2, 0 - this.size/2,this.size,this.size);
            ctx.restore();
            requestAnimationFrame(this.grow.bind(this));
        }
    }
}


class BtsHand{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.vs = Math.random() * 0.3 + 0.5;
        this.maxSize = this.size + Math.random() *50;
        this.image = new Image();
        this.image.src = '../img/btshand.png';
        this.frameSize = 100;
        this.frameX = Math.floor(Math.random() *3);
        this.frameY = Math.floor(Math.random() *3);
        this.angle = 0;
        this.va = Math.random() *0.05 - 0.025;
    };

    grow(){
        if(this.size < this.maxSize){
            //this.size += this.vs;
            //this.angle += this.va;
            ctx.save();
            ctx.translate(this.x, this.y);
            //ctx.rotate(this.angle);
            //ctx.drawImage(this.image, this.x,this.y);
            ctx.drawImage(this.image, this.frameX -50,  this.frameY-50 , this.frameSize, this.frameSize);
            ctx.restore();
            requestAnimationFrame(this.grow.bind(this));
        }
    }
}

/*class Nazi{
    
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.vs = Math.random() * 0.3 + 0.5;
        this.maxSize = this.size + Math.random() *50;
        this.image = new Image();
        this.image.src = '../img/Nazi.png';
        this.frameSize = 100;
        this.frameX = Math.floor(Math.random() *3);
        this.frameY = Math.floor(Math.random() *3);
        this.angle = 0;
        this.va = Math.random() *0.05 - 0.025;
    };

    grow(){
        if(this.size < this.maxSize){
            //this.size += this.vs;
            //this.angle += this.va;
            ctx.save();
            ctx.translate(this.x, this.y);
            //ctx.rotate(this.angle);
            //ctx.drawImage(this.image, this.x,this.y);
            ctx.drawImage(this.image, this.frameX -50,  this.frameY-50 , this.frameSize, this.frameSize);
            ctx.restore();
            requestAnimationFrame(this.grow.bind(this));
        }
    }
}*/

class Gotas{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 10;
        this.weight = 3;
        this.directionX = Math.random() * 6 - 2;
    }

    drawGota(){
        if(this.y > canvas.height){
            this.y = 0 - this.size;
            this.weight = 3;
            this.x = Math.random() * canvas.width;
        }   
        this.weight += 0.02;
        this.y +=  this.weight;
        this.x += this.directionX;
        ctx.save();
        
        ctx.fillStyle = 'rgba(74,5,255,0.5)';
        ctx.beginPath();
        
        ctx.arc(this.x,this.y,this.size,0,Math.PI *2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        requestAnimationFrame(this.drawGota.bind(this));   
    }
}

class Particulas{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.weight = 1;
        
        
    this.contador = 0;
    }

    drawParticle(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0 ,Math.PI *2,false);
            ctx.fillStyle = "#181a63";
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size +10, 0 ,Math.PI *2,false);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 0.5;
            ctx.stroke();

            ctx.lineWidth = 0.2;
            ctx.clearRect(this.y,this.x,canvas.size,canvas.size );
            ctx.fill();
        
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.size*2,0,Math.PI *2);

                let colorChange = Math.floor(Math.random() *4);

            if(colorChange == 0){
                ctx.fillStyle = "#f5f5f5";
            }else if(colorChange == 1){
                ctx.fillStyle = "#cf55cd";    
            }else if(colorChange == 2){
                ctx.fillStyle = "#cf5582";    
            }else if(colorChange == 3){
                ctx.fillStyle = "#8ccf55";    
            }
            
            ctx.fill();            

            this.size -= 0.5;
            if(this.size <0){
                this.x +=  Math.random() * 20 -10; 
                this.y +=  Math.random() * 20 -10; 
                this.size = Math.random() * 10;
            }

            this.y += this.weight;
            this.weight += 0.2;
        
            if(this.y > canvas.height - this.size){
                this.weight *= -1;
            }   

            if(this.contador < 300){
            requestAnimationFrame(this.drawParticle.bind(this));
                this.contador++;
            }
    }
}

//-----------------------------------------------
    //  FUNCIONES
//-clear all
function Limpiar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    location.reload();
}



let numeroRoots = 1;
let cuandoClick = 1;

window.addEventListener('mousemove' ,(e)=>{
    if(drawing && !parar ){
        for(let i = 0; i< numeroRoots; i++){
            const root = new Root(e.x,e.y);        
            root.dibujar();  
            
        }
    }
});

window.addEventListener('mousedown', (e)=>{
    

    drawing = true;

    for(let i = 0; i< cuandoClick; i++){
        const root = new Root(e.x,e.y);        
        if(!parar){
            root.dibujar();  
            
        }
    }

});

window.addEventListener('mouseup', ()=>{
    //sound.play();   
    drawing = false;
});