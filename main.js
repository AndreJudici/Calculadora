const e = document.getElementsByTagName('button');
console.log(e);

e[0].addEventListener('click', 
 () => alert('Fui clicado')
);

var interval = null;
e[1].addEventListener('click',
 () => {
   
   if (interval != null) {
     clearInterval(interval);
     interval = null;
     retur;
   }
   
   interval =setInterval(
     () => {
     
   const imgs = document.getElementsByTagName('img')
   
  const src0 = imgs[0].src;
  imgs[0].src = imgs[1].src;
  imgs[1].src = src0;
     }
  , 1000);
 }
);

console.log('Hello World!');
