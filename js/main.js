window.revelar = ScrollReveal ({reset: true})

revelar.reveal('.imagem_comp1, .imagem',{
    duration:1000,
    distance: '100px',
    reset: false
});

revelar.reveal('.texto_comp1,.texto_comp2, .card-comp2',{
    duration:1000,
    distance: '100px',
    delay: 500,
    reset: false
}); 
revelar.reveal('.card-contato',{
    duration:1000,
    origin:'right',
    distance:'100px',
    delay: 500,
    reset:false

});


// voltar ao topo

// botao = window.getElementById('voltar-ao-topo')
// function voltaraoTopo(){

//     window.scrollTo(0,0);
    
// }

function voltaraoTopo() {
    window.scrollTo({ 
        top: 0
    });
}

function mostrarBotao() {
    const botao = document.getElementById('voltar-ao-topo');
    if (window.scrollY > 300) {
        botao.classList.add('show');
    } else {
        botao.classList.remove('show');
    }
}

window.addEventListener('scroll', mostrarBotao);





