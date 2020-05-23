let numero=2;function mudarPlanoDeFundo(numero){const fundo=document.querySelector('header');fundo.style['background-image']=`url(fundo-${numero}.jpg`;}
function atualizarFundo(){mudarPlanoDeFundo(numero);if(numero===3)numero=1;else numero++;}
setInterval(atualizarFundo,1000);
