const simg= document.getElementById('s-galery')
const img=document.getElementById('img-g')
const gallery= ['/objetos/0100101.png','/objetos/0100111.jpg','/objetos/011010.jpg','/objetos/0101001.png','/objetos/0101010.jpg','/objetos/0101010.jpg','/objetos/0110101.jpg','/objetos/01010101.jpg']
let nimg= [0,0];

simg=addEventListener('click',()=>{
    nimg [0] = (nimg[0]+1)%gallery.length;
    img.src = gallery[nimg[0]];
})

const img2=document.getElementById('img-nm')
const gallery2= ['/objetos/0100101.png','/objetos/0100111.jpg','/objetos/011010.jpg','/objetos/0101001.png','/objetos/0101010.jpg','/objetos/0101010.jpg','/objetos/0110101.jpg','/objetos/01010101.jpg']

img=addEventListener('click',()=>{
    nimg = (nimg+1)%gallery.length;
    img.src = gallery[nimg];
})