// JQuery init

$(document).ready(function() {

// Inet over Eth section

    // Objects

    var map_container = $('.net-map-container');

    // Events

    $('a[href="#show-netmap"]').click( function () {
        map_container.slideToggle('');
        
        $(this).css('display', 'none');
        $(this).attr('id') == 'showNetmapBtn' ? $('#hideNetmapBtn').css('display', 'inline-block') : $('#showNetmapBtn').css('display', 'inline-block');

    });

// Mg tarifs

    // Objects

    var numbers = {
        'Москва (mob) - Билайн' : '12.00|13.50|11.00',
        'Индия (mob)' : '8.50|10.00|12.50',
        'Москва (mob) - МТС' : '5.00|4.50|5.00',
        'Андорра (mob)' : '11.50|12.50|11.00',
        'Эстония (fix) - Таллинн' : '7.50|8.00|12.00',
        'Вьетнам (mob) - Vietel' : '10.00|9.00|9.50',
        'Московская (fix)' : '4.00|4.50|5.00'
    } // For demo
    var direction_name = $('.mg-direction-name');
    var first_dir_price = $('.1-price');
    var second_dir_price = $('.2-price');
    var third_dir_price = $('.3-price');
    var mg_tarfis_error_section = $('.mg-tarifs-error-section');

    // Common functions

    function get_random_dir_key () {
        var keys = Object.keys(numbers);
        var index = Math.floor(Math.random() * (keys.length));
        return keys[index];
    }   

    function update_price_direction(){        
        var curr_direction = get_random_dir_key();
        var curr_dir_prices = numbers[curr_direction].split('|');
        direction_name.text(curr_direction);
        first_dir_price.html(curr_dir_prices[0] + ' &#8381;');
        second_dir_price.html(curr_dir_prices[1] + ' &#8381;');
        third_dir_price.html(curr_dir_prices[2] + ' &#8381;');
    }    

    // Events

    setInterval(update_price_direction, 30000);

    update_price_direction();
    
// Add services modal

    // Objects

    var modal_title = $('.modal-title');
    var modal_tarif_type_section = $('.modal-tarif-type-section');
    var modal_tarif_header = $('.modal-tarif-header');
    var modal_tarif_params = $('.modal-tarif-params');

    // Events

    $('a[href="#addServicetModal"]').click(function () {
        var tarif_params = $(this).attr('tarif-description').split('|');
        var tarif_type = tarif_params[0] == 'Ethernet' ? 'Тип подключения : Компьютерная сеть' : 'Тип подключения : Телефонная DSL линия';
        modal_title.text('Подключение услуги доступа к сети интернет с тарифным планом ' + tarif_params[1]);        
        
        modal_tarif_type_section.text(tarif_type);
        
        


        modal_tarif_header.html('Выбранный тариф : <span class="modal-tarif-name">' + tarif_params[1] + '</span>');
        modal_tarif_params.html('Подключение - ' + tarif_params[2] + ' &#8381;<span class="modal-tarif-param-delimeter"></span>Максимальная скорость - ' + 
                                tarif_params[3] + ' Мбит/с<span class="modal-tarif-param-delimeter"></span>Ежемесячный платеж - ' + tarif_params[4] + ' &#8381;');
    });

    $('.card-header').click(function () {
        var collapse = $(this).parent().find('.collapse');        
        $('.card-header i').each(function () {
            if ($(this).hasClass('fa-rotate-90')) {
                $(this).removeClass('fa-rotate-90');
            }
        });
        if (collapse.hasClass('show')) {
            $(this).find('i').toggleClass('fa-rotate-90');
        }
        $(this).find('i').toggleClass('fa-rotate-90');
    });

    $('.tarif-option-selector').hover(function () {
        if ($(this).hasClass('selected-option')) {
            $(this).css('background-color', '#eaeff4');
        }
    }, function () {
        $(this).css('background-color', '');
    });

    $('.tarif-option-selector').click(function () {
        if ($(this).hasClass('trigger-selector')) {
            $(this).toggleClass('selected-option');

            var ul = $(this).parent().children();
            alert(ul[0].html);
        } else {

        }
    });

    $('.second-tarif-option-item').hover(function () {

    });
});