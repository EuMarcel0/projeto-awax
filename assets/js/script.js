// FUNCAO PARA QUE A BARRA DE ROLAGEM VOLTE PARA A POSICAO 0 NO EIXO Y.

function scrollBar(){
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    });
}

// FUNCAO QUE PARA FAZER COM QUE O BOTAO SUMA QUANDO A POSICAO Y DO SCROLL ESTIVER EM 0

function controlarBotao(){
    if (window.scrollY === 0){
        document.querySelector(".btn").style.display = 'none';
    } else{
        document.querySelector(".btn").style.display = 'block';
    }
}
window.addEventListener("scroll", controlarBotao);


//ATIVAR MENU MOBILE

window.onload = function(){
    document.querySelector('.menu-mobile').addEventListener('click', function(){
        if(document.querySelector('.menu nav').style.display == 'none'){
            document.querySelector('.menu nav').style.display = 'flex';
        } else{
            document.querySelector('.menu nav').style.display = 'none';
        }
    })
};

// window.onload = function(){
//     document.querySelector('.menu nav ul li a').addEventListener('click', function(){
//         if(document.querySelector('.menu-mobile').style.display == 'flex'){
//             document.querySelector('.menu-mobile').style.display = 'none';
//         } else {
//             document.querySelector('.menu-mobile').style.display = 'flex';
//         }
//     })
// };


