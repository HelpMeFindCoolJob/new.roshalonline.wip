// JQuery init

$(document).ready(function() {
    
// Partner carousel

    // Carousel objects

    var partner_case = $('.partner-section');    

    // Carousel events

    partner_case.hover(function () {
            if ($(window).width() > 1200) {
                $(this).find('.common-btn').slideToggle(300);            
            } else if ($(window).width() < 768) {
                $('#partnersCarousel').carousel({
                    interval: 500000
                });
            }
            $(this).find('hr').css('background-color', '#FECE1A');
            
        }, function () {
            if ($(window).width() > 1200) {
                $(this).find('.common-btn').slideToggle(300);                
            }
            $(this).find('hr').css('background-color', '#fff');
        }
    );

// Documents section

    // Documents events

    $('.card-header').click(function () {
        var collapse = $(this).parent().find('.collapse');
        if ($(window).width() > 575) {
            $('.mb-0-chevron i').each(function () {
                if ($(this).hasClass('fa-rotate-90')) {
                    $(this).removeClass('fa-rotate-90');
                }
            });
            if (collapse.hasClass('show')) {
                $(this).find('i').toggleClass('fa-rotate-90');
            }
            $(this).find('i').toggleClass('fa-rotate-90');
        } else {
            $('.mb-0-chevron .fa-xm').each(function () {
                if ($(this).find('i').hasClass('fa-minus')) {
                    $(this).html('<i class="fas fa-plus fas-xm"></i>Показать');
                }
            });            
            var fa_span = $(this).find('.fa-xm');
            if (collapse.hasClass('show')) {
                fa_span.find('i').hasClass('fa-plus') ? fa_span.html('<i class="fas fa-minus fas-xm"></i>Скрыть') : fa_span.html('<i class="fas fa-plus fas-xm"></i>Показать');
            }           
            fa_span.find('i').hasClass('fa-plus') ? fa_span.html('<i class="fas fa-minus fas-xm"></i>Скрыть') : fa_span.html('<i class="fas fa-plus fas-xm"></i>Показать');
            
        }
    });

    // View documents modal

    // var doc_modal = $('#viewDocumentModal');

    // $('.view-document-icon').click(function () {

    //     var ua = window.navigator.userAgent;
    //     var msie = ua.indexOf('MSIE ');
    //     var edge = ua.indexOf('Edge');
    //     if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) || edge > 0) {
    //         doc_modal.find('embed').css('display', 'none');
    //         doc_modal.find('img').css('display', 'inherit');
    //         var img_source = $(this).attr('data-source-img');
    //         doc_modal.find('img').attr('src', img_source); 
    //     } else {
    //         doc_modal.find('img').css('display', 'none');
    //         doc_modal.find('embed').css('display', 'inherit');
    //         var pdf_source = $(this).attr('data-source-pdf');
    //         doc_modal.find('embed').attr('src', pdf_source); 
    //     }

        
    //     doc_modal.modal('show');
    // });

    // Download pdf document

    $('.download-document-icon').click(function (e) {
        e.preventDefault();      
        $(this).attr('download', '').attr('target', '_blank');
        window.location.href = $(this).attr('data-source-pdf');
    });
});