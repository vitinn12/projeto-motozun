window.revelar = ScrollReveal ({reset: true})

revelar.reveal('.imagem_comp1, .imagem',{
    duration:1000,
    distance: '100px'
});

revelar.reveal('.texto_comp1,.texto_comp2, .card-comp2',{
    duration:1000,
    distance: '100px',
    delay: 500
}); 
revelar.reveal('.card-contato',{
    duration:1000,
    origin:'right',
    distance:'100px',
    delay: 500,
    reset:false

});



