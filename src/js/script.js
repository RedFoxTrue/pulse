$(document).ready(function () {
  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab_active)',
    function () {
      $(this)
        .addClass('catalog__tab_active')
        .siblings()
        .removeClass('catalog__tab_active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content_active')
        .eq($(this).index())
        .addClass('catalog__content_active');
    },
  );
  var slider = tns({
    container: '.carousel__inner',
    items: 1,
    // slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });


  // $('.catalog-item__link').each(function (i) {
  //   $(this).on('click', function (e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   })
  // });

  // $('.catalog-item__back').each(function (i) {
  //   $(this).on('click', function (e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   })
  // });

  //   function toggleSlide(item) {
  //     $(item).each(function(i) {
  //         $(this).on('click', function(e) {
  //             e.preventDefault();
  //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //         })
  //     });
  // };

  // toggleSlide('.catalog-item__link');
  // toggleSlide('.catalog-item__back');

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // МОДАЛЬНЫЕ ОКНА:

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });
});

// document.querySelector('.prev').addEventListener('click', function () {
//   slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click', function () {
//   slider.goTo('next');
// });
// // (function ($) {
// //   $(function () {
// //     $('ul.catalog__tabs').on(
// //       'click',
// //       'li:not(.catalog__tab_active)',
// //       function () {
// //         $(this)
// //           .addClass('catalog__tab_active')
// //           .siblings()
// //           .removeClass('catalog__tab_active')
// //           .closest('div.container')
// //           .find('div.catalog__content')
// //           .removeClass('catalog_content_active')
// //           .eq($(this).index())
// //           .addClass('catalog_content_active');
// //       },
// //     );
// //   });
// // })(jQuery);
// var name = 'Ivan';
// let number = 7;
// const pi = 3.14;
// number = 4;
// let leftBorderWidth = 200;

// $(document).ready(function () {
//   $('.carousel__inner').slick({
//     speed: 1200,
//     // adaptiveHeight: true,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="../img/slider_clock/chevron-left-solid.png"></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="../img/slider_clock/chevron-right-solid.png"></button>',
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   });
// });

// tiny-slider:

// number - числа
// string - "", '', ``
// true / false
// null
// undefined
// let obj = {
//   name: 'apple',
//   color: 'green',
//   weight: 200,
// };
// Symbol

// alert(1234);
// console.log(number);
// let answer = confirm('Вам есть 18?');
// console.log(answer);

// let answer = prompt('Вам есть 18?', '');
// console.log(answer);

// console.log(4 + 4);
// let isChecked = true,
//   isClose = false;
// console.log(isChecked && isClose);

// console.log(isChecked || isClose);
// if (2 * 4 == 6 * 1) {
//   console.log('верно');
// } else {
//   console.log('ошибка');
// }
// let answer = confirm('Вам есть 18?');
// if (answer) {
//   console.log('проходите');
// } else {
//   console.log('уходи');
// }

// const num = 50;
// if (num < 49) {
//   console.log('неправильно');
// } else if (num > 100) {
//   console.log('много');
// } else {
//   console.log('верно');
// }

// for (let i = 1; i < 8; i++) {
//   console.log(i);
// }

// function logging(a, b) {
//   console.log(a + b);
// }
// logging(3, 5);

// logging(4, 10);