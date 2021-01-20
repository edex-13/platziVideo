window.addEventListener('load', function () {
   if (screen.width > 1000) {
      new Glider(document.querySelector('.carousel__container--miLista'), {
         slidesToShow: 4,
         slidesToScroll: 4,
         dots: '.indicadores--miLista',
         arrows: {
            prev: '.btn__izq--miLista',
            next: '.btn__derec--miLista',
         },
      });
      new Glider(document.querySelector('.carousel__container--tendencia'), {
         slidesToShow: 4,
         slidesToScroll: 4,
         dots: '.indicadores--tendencia',
         arrows: {
            prev: '.btn__izq--tendencia',
            next: '.btn__derec--tendencia',
         },
      });
      new Glider(document.querySelector('.carousel__container--originalesDePlatziVideo'), {
         slidesToShow: 4,
         slidesToScroll: 4,
         dots: '.indicadores--originalesDePlaziVideo',
         arrows: {
            prev: '.btn__izq--originalesDePlatziVideo',
            next: '.btn__derec--originalesDePlatziVideo',
         },
      });
   }
});
