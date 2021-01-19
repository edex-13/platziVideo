window.addEventListener('load', function () {
   if (screen.width > 600) {
      new Glider(document.querySelector('.carousel__container'), {
         slidesToShow: 4,
         slidesToScroll: 4,
         dots: '.indicadores',
         arrows: {
            prev: '.btn__izq',
            next: '.btn__derec',
         },
      });
      var carousel = document.querySelector('.carousel');
   }
});
