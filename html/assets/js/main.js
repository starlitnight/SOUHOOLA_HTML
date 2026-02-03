(function ($) {
    'use strict';
    $(window).on('load',function(){
        //==========preloder===========
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
        new WOW().init();
    });

//==========fixed header & scroll to top button===========
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 300) {
            $('.header').addClass('animated fadeInDown fixed-header');
            $('.scroll-to-top').fadeIn();
            $('.scroll-to-top button').addClass('active');
        } else {
            $('.header').removeClass('animated fadeInDown fixed-header');
            $('.scroll-to-top').fadeOut();
            $('.scroll-to-top button').removeClass('active');
        }
        // Scroll to top
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');

    });
    // Click For gtToTop
			$('.go-top').on('click', function () {
				$('html, body').animate(
					{
						scrollTop: '0',
					},
					1200
				);
			});
	
    $(document).ready(function(){
        $(window).scroll(function() {
          
            });
     

            $(document).ready(function(){
                $('.counter-value').each(function(){
                    $(this).prop('Counter-box',0).animate({
                        Counter: $(this).text()
                    },{
                        duration: 3500,
                        easing: 'swing',
                        step: function (now){
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            });
      // ========== it-service-card-slider JS ===========
      $('.it-service-card-slider').owlCarousel({
        loop: true,
        smartSpeed: 1000,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        dots: false,
        nav: true,
        navText: ['<i class="icofont-double-left"></i>','<i class="icofont-double-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            480: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });  
 // ========== it-testimonial-slider JS ===========
 $('.it-testimonial-slider').owlCarousel({
    loop: true,
    smartSpeed: 1000,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    nav: true,
    navText: ['<i class="icofont-double-left"></i>','<i class="icofont-double-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        480: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});  

      // ========== products-slider JS ===========
      $('.products-slider').owlCarousel({
        loop: true,
        smartSpeed: 1000,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<i class="icofont-double-left"></i>','<i class="icofont-double-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

      // ========== project-box-slider JS ===========
      $('.project-box-slider').owlCarousel({
        items: 3,
        loop: false,
        smartSpeed: 1000,
          margin: 30,
          autoplay: false,
        autoplayTimeout: 5000,
          autoplayHoverPause: false,
          dots: false,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            480: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });
    

//Sortable Masonary with Filters
function enableMasonry() {
    if($('.sortable-masonry').length){

        var winDow = $(window);
        // Needed variables
        var $container=$('.sortable-masonry .items-container');
        var $filter=$('.filter-btns');

        $container.isotope({
            filter:'*',
             masonry: {
                columnWidth : '.col-md-4'
             },
            animationOptions:{
                duration:500,
                easing:'linear'
            }
        });
        

        // Isotope Filter 
        $filter.find('li').on('click', function(){
            var selector = $(this).attr('data-filter');

            try {
                $container.isotope({ 
                    filter	: selector,
                    animationOptions: {
                        duration: 500,
                        easing	: 'linear',
                        queue	: false
                    }
                });
            } catch(err) {

            }
            return false;
        });


        winDow.on('resize', function(){
            var selector = $filter.find('li.active').attr('data-filter');

            $container.isotope({ 
                filter	: selector,
                animationOptions: {
                    duration: 500,
                    easing	: 'linear',
                    queue	: false
                }
            });
        });


        var filterItemA	= $('.filter-btns li');

        filterItemA.on('click', function(){
            var $this = $(this);
            if ( !$this.hasClass('active')) {
                filterItemA.removeClass('active');
                $this.addClass('active');
            }
        });
    }
}
enableMasonry();


//Tabs Box
if($('.tabs-box').length){
    $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));
        
        if ($(target).is(':visible')){
            return false;
        }else{
            target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
            target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
            $(target).fadeIn(300);
            $(target).addClass('active-tab');
        }
    });
}

//LightBox / Fancybox
if($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        helpers : {
            media : {}
        }
    });
}

        /*----------------------------------
         START .scroller js rules
        ----------------------------------*/
        /** Jquery   */
        if ($('.scroller').length) {
            $('.scroller').each(function () {
                const originalList = $(".scroller").children(".scroller__items-list");
                const animationDuration = originalList.attr("data-speed");
                const itemsGap = `${originalList.attr("data-gap") || 30}px`;
                originalList.css({
                    "animation-duration": `${animationDuration}s`,
                    "--gap-space": itemsGap,
                });
                const clonedList = originalList
                    .clone(true)
                    .attr("aria-hidden", true)
                    .addClass("cloned");

                $(".scroller").append(clonedList);
            });
        }

       

        /*----------------------------------
         END .scroller js rules
        ----------------------------------*/
// ========== portfolio-details-box-slider js ===========
        $('.portfolio-details-box-slider').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    
      // ========== related-portfolio-slider js ===========
      $('.related-portfolio-slider').owlCarousel({
        loop: true,
        smartSpeed: 1000,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        dots: false,
        nav: true,
        navText: ['<i class="icofont-double-left"></i>','<i class="icofont-double-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            480: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    });
}(jQuery));