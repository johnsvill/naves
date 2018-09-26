let canvas:any = document.getElementById("fondo")
let formato:any = canvas.getContext("2d")
let fondo:any ={
    url: "./img/fondo.jpg",
    imagen:Image,
    cargaOk:false
}
let imperial:any ={
    url: "./img/imperial.jpg",
    imagen:Image,
    cargaOk:false
}
let tie:any ={
    url: "./img/tie.jpg",
    imagen:Image,
    cargaOk:false
}

fondo.imagen= new Image();
fondo.imagen.src = fondo.url
imperial.imagen=new Image();
imperial.imagen.src=imperial.url
tie.imagen=new Image();
tie.imagen.src = tie.url

fondo.imagen.addEventListener("load",()=>{
    fondo.cargaOk = true
    dibujar()
})
imperial.imagen.addEventListener("load",()=>{
    imperial.cargaOk = true
    dibujar()
})
tie.imagen.addEventListener("load",()=>{
    tie.cargaOk = true
    dibujar()
})

function dibujar(){
    if(fondo.cargaOk){
        formato.drawImage(fondo.imagen,0,0)
    }
    if(imperial.cargaOk){
        formato.drawImage(imperial.imagen,aleatorio(0,450),aleatorio(0,450))
    }
    if(tie.cargaOk){
        formato.drawImage(tie.imagen,aleatorio(0,450),aleatorio(0,450))
    }
}
function aleatorio(minimo:number,maximo:number):number{
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
}