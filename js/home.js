// JQUery init

$(document).ready(function (){

// Main contact section

    // Contact objects

    var phone_main_info = $('#phoneSupportMainInfo');
    var email_main_info = $('#emailMainInfo');
    var news_section_main_info = $('.news-main-info');
    var view_news_btn_main_info = $('#viewNewsBtnMainInfo');

    // Common functions

    function get_work_status() {
        var date_obj = new Date();
        var curr_day = date_obj.getDay();
        var curr_hour = date_obj.getHours();
        if (curr_day == 0 || curr_day == 6) {
            if (curr_hour < 8 && curr_hour > 17) {
                return false;
            }
        }
        if (curr_hour < 8 || curr_hour > 18) {                
            return false;
        }       
        return true;
    }

    // Contact events

    if (get_work_status()) {
        $('#labelSupportMainInfo').text('Техподдержка (работает): ');
    }

    phone_main_info.hover(function () {
        $('#phoneSupportMainInfo i').css({
            'text-shadow' : '1px 1px 2px #101316',
            'color' : '#fff'
        });
        if (!get_work_status()) {
            $(this).css('cursor', 'not-allowed').attr("href", "#");
        }
    }, function () {
        $('#phoneSupportMainInfo i').css({
            'text-shadow' : 'none',
            'color' : '#101316'
        });
    });

    email_main_info.hover(function () {
        $('#emailMainInfo i').css({
            'text-shadow' : '1px 1px 2px #101316',
            'color' : '#fff'
        });
    }, function () {
        $('#emailMainInfo i').css({
            'text-shadow' : 'none',
            'color' : '#101316'
        });
    });

    news_section_main_info.hover(function () {
        $(this).children('hr').css('background-color', '#101316');
        $(this).children('a').css({
            'color' : '#fff',
            'text-shadow' : '1px 1px 2px #101316'
        });
        
        var view_btn_icon = $(this).find('.news-preview-main-info');
        if ($(this).find('span').css('display') == 'none'){
            $(this).find('span').animate({width: 'toggle'}).addClass('visible');        
            view_btn_icon.stop().animate({ fontSize : '13px' }); 
        }               
    }, function () {
        $('.news-main-info hr').css('background-color', '#FECE1A');
        $(this).children('a').css({
            'color' : '#101316',
            'text-shadow' : 'none'
        });        
        if ($(this).find('span').attr('class') == 'visible') {
            $(this).find('span').animate({width: 'toggle'}).removeClass('visible');
            var view_btn_icon = $(this).find('.news-preview-main-info');
            view_btn_icon.stop().animate({ fontSize : '15px' });
        }        
    });
    
// Main services section

    // Services objects

    var service_box = $('.service-box');

    // Service events

    service_box.hover(function (){
        $(this).find('.service-body').children().show(100);
        $(this).find('.service-footer').children('span, .hide-service-icon').show();
        $(this).find('.service-footer').children('.show-service-icon').hide();
        $(this).find('#serviceLogoServicesSection').animate({ fontSize : '2em', paddingTop : '100px' }, 500);

    }, function () {
        $(this).find('.service-body').children().hide(100);
        $(this).find('.service-footer').children('span, .hide-service-icon').hide();
        $(this).find('.service-footer').children('.show-service-icon').show();
        $(this).find('#serviceLogoServicesSection').animate({ fontSize : '3em', paddingTop : '170px' }, 500);
    });

// Service carousel

    // Service carousel objects

    var arrows = $('.serv-carousel-arrows');    
    var curr_x_small_service = 1;

    // Service carousel events

    arrows.hover(function () {
        if ($(this).attr('id') == 'leftColServiceCarousel') {
            $('#leftServiceCarousel').css('opacity', '1');
        } else {
            $('#rightServiceCarousel').css('opacity', '1');
        }
        
    }, function () {
        curr_arrow = $(this).find('.serv-carousel-arrow');
        if (curr_arrow.css('opacity') == '1') {
            curr_arrow.css('opacity', '.5');
        }
        
    });
    
    var dis = false;

    arrows.click(function () {
        if($(window).width() < 767) {
            var services = $('.x-small-serv-carousel-wrapper').find('.service');
            arrows.css('z-index', '-100');
            if ($(this).children('i').attr('id') == 'leftServiceCarousel') {
                // Left arrow
                if ($('.x-small-serv-carousel-wrapper').find('.visible-service').attr('style') == 'display: block;') {
                    $('.x-small-serv-carousel-wrapper').find('.visible-service').attr('style', '');
                }

                if (curr_x_small_service == 1) {
                    services.eq(0).toggleClass('visible-service hidden-service').toggle(10, function () {
                        services.eq(3).toggleClass('hidden-service visible-service', 500);
                        services.eq(0).attr('style', '');
                        $('.x-small-semaphores').find('.fa-circle').eq(3).toggleClass('far fas');
                        curr_x_small_service = 4;
                    });
                }
                
                $('.x-small-serv-carousel-wrapper').find('.visible-service').toggleClass('visible-service hidden-service').prev().toggle(700, function () {
                    $(this).toggleClass('hidden-service visible-service', 700); 
                });

                $('.x-small-semaphores').find('.fas').toggleClass('fas far').prev().toggleClass('far fas');

                curr_x_small_service -= 1;
            } else {
                // Right arrow
                if ($('.x-small-serv-carousel-wrapper').find('.visible-service').attr('style') == 'display: block;') {
                    $('.x-small-serv-carousel-wrapper').find('.visible-service').attr('style', '');
                }
                
                if (curr_x_small_service == 4) {                    
                    services.eq(3).toggleClass('visible-service hidden-service').toggle(10, function () {
                        services.eq(0).toggleClass('hidden-service visible-service', 700);
                        services.eq(3).attr('style', '');
                        $('.x-small-semaphores').find('.fa-circle').eq(0).toggleClass('far fas');
                        curr_x_small_service = 1;
                    });
                }

                $('.x-small-serv-carousel-wrapper').find('.visible-service').toggleClass('visible-service hidden-service').next().toggle(700, function () {
                    $(this).toggleClass('hidden-service visible-service', 700);  
                });

                $('.x-small-semaphores').find('.fas').toggleClass('fas far').next().toggleClass('far fas');

                curr_x_small_service += 1;
            }
        } else {
            $('.small-serv-carousel-wrapper').find('.service').each(function () {                
                $(this).toggle(500, function () {
                    $(this).toggleClass('hidden-service visible-service', 500);
                });
            });
    
            $('.small-semaphores').children('i').each(function (){
                $(this).toggleClass('fas far');
            });
        }
        setTimeout(function () {
            arrows.css('z-index', '0');
        }, 1000);                
    });

// Clients info section

    var subscribe_error = $('.subscribe-error-msg');

    // Common functions

    function validate_client_email($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
      }

    // Clients info events

    $('#subscribeBtnClientsInfo').click(function (){
        if ($('#confirmPDNCheckboxClientsInfo').is(':checked')) {
            if (!validate_client_email($('#emailInputClientsInfo').val()) || $('#emailInputClientsInfo').val() == '') {
                subscribe_error.show(700).delay(2000).hide(700);
            } else {
                alert('SUCCESS SUBSCRIBE'); // Add subscribe logic below
            }
        } else {
            $('#PDNTextModal').modal('toggle');
        }
    });

// Clients info section
    
    var subscribe_error = $('.subscribe-error-msg');

    // Common functions

    function validate_client_email($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
        }

    // Clients info events

    $('#subscribeBtnClientsInfo').click(function (){
        if ($('#confirmPDNCheckboxClientsInfo').is(':checked')) {
            if (!validate_client_email($('#emailInputClientsInfo').val()) || $('#emailInputClientsInfo').val() == '') {
                subscribe_error.show(700).delay(2000).hide(700);
            } else {
                alert('SUCCESS SUBSCRIBE'); // Add subscribe logic below
            }
        } else {
            $('#PDNTextModal').modal('toggle');
        }
    });

// PDN text modal

    // PDN text modal Events

    $('#confirmPDNTextModal').click(function () {
        if (!$('#confirmPDNCheckboxClientsInfo').is(':checked')) {
            $('#confirmPDNCheckboxClientsInfo').prop( "checked", true );
            $('#PDNTextModal').modal('toggle');
        }
    });
});