const start = document.getElementById('start');

start.addEventListener(
    'click',
    () => {
      setInterval(
          moverQuadradoHorizontal
         ,
          1,
        );
        
        setInterval(
          moverQuadradoVertical
          ,
          10,
        );
    }
  );
  
  const novo = document.getElementById('novo');
  
  novo.addEventListener(
      'click',
      () => {
        const container = getElementoContainer();
        
        const q = document.createElement('div');
        q.setAttribute('class', 'quadrado');
        q.setAttribute('direcaoh', 'esquerda');
        q.setAttribute('direcaov', 'acima');
        container.appendChild(q);
       // console.log(q);
      }
    );
  
  
  function getElementoQuadrado()
  {
    return document.getElementsByClassName('quadrado')[0];
  }
  
  function moverQuadradoHorizontal()
  {
    const qs = document.getElementsByClassName('quadrado');
    
    for (var i = 0; i < qs.length; i++) {
      const q = qs[i];
      let style = window.getComputedStyle(q);

      let left = style.getPropertyValue('left');

      left = parseInt(left, 10);
      const direcao = q.getAttribute('direcaoh');
      
     // console.log(q, direcao);
      
      if (direcao == 'esquerda')
        left = left - 1;
      else
        left = left + 1;
      
      q.style.left = left.toString() + 'px';
      //console.log(left);
      
      if (direcao == 'esquerda' && left <= 5) {
        q.setAttribute('direcaoh', 'direita');
        q.style.background = '#ff0000';
      //  console.log(q);
      }
      
      const container = document.getElementsByClassName('container')[0];
      
      //console.log(container);
      style = window.getComputedStyle(container);
      
      // console.log(style);
      
      let width = style.getPropertyValue('width');
      width = parseInt(width, 10);
      // console.log(width);
      
      if (direcao == 'direita' && left + 8> width) {
        q.setAttribute('direcaoh', 'esquerda');
        q.style.background = '#00ff00';
        //console.log(q);
      }
    }
  }
  
  function moverQuadradoVertical()
  {
    const qs = document.getElementsByClassName('quadrado');
    
    for (var i = 0; i < qs.length; i++) {
      const q = qs[i];
      let style = window.getComputedStyle(q);

      let top = style.getPropertyValue('top');

      top = parseInt(top, 10);
      const direcao = q.getAttribute('direcaov');
   //   console.log(direcao);
      if (direcao == 'acima')
        top = top - 1;
      else
        top = top + 1;
      
      q.style.top = top.toString() + 'px';
      // console.log(top);
      
      if (direcao == 'acima' && top <= 7) {
        //direcao = 'abaixo';
        q.setAttribute('direcaov', 'abaixo');
        q.style.background = '#0000ff';
      }
      
      const container = getElementoContainer();
      
      //console.log(container);
      style = window.getComputedStyle(container);
      
      // console.log(style);
      
      let height = style.getPropertyValue('height');
      height = parseInt(height, 10);
      //console.log(height);
      
      if (direcao == 'abaixo' && top + 7 > height) {
       // direcao = 'acima';
        q.setAttribute('direcaov', 'acima');
        q.style.background = '#ffff00';
      }
    }
}


function getElementoContainer()
{
  return document.getElementsByClassName('container')[0];
}