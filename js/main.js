(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


  
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

  

   
     //Conocimientos filter


    $(document).ready(function () {
        $('#conocimientos-filter li').on('click', function () {
            // Remueve la clase 'filter-active' de todos los elementos del filtro
            $('#conocimientos-filter li').removeClass('filter-active');
            // Agrega la clase 'filter-active' al elemento seleccionado
            $(this).addClass('filter-active');

            // Obtiene el valor de 'data-filter' del elemento seleccionado
            var filterValue = $(this).attr('data-filter');

            // Muestra u oculta los elementos según el filtro seleccionado
            if (filterValue === '*') {
                $('.conocimiento-item').show();
            } else {
                $('.conocimiento-item').hide();
                $(filterValue).show();
            }
        });


        $('#btnPokemonGo').on('click', function () {
            var data = document.querySelector('#btnPokemonGo');
            $('#modalGenerico').find('.modal-title').text(data.dataset.title);
            $('#modalGenerico').find('.modal-body').text(data.dataset.description);
             $('#modalGenerico').modal('show');
         });

         $('#btnGps').on('click', function () {
            var data = document.querySelector('#btnGps');
            $('#modalGenerico').find('.modal-title').text(data.dataset.title);
            $('#modalGenerico').find('.modal-body').text(data.dataset.description);
             $('#modalGenerico').modal('show');
         });
           
    });


    
})(jQuery);

