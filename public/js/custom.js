"use strict";
// Global vars
var TWITTER_USERNAME = 'envato',
    GOOGLE_MAP_LAT = 40.7564971,
    GOOGLE_MAP_LNG = -73.9743277;


// Countdown
$(function() {
    $('.countdown').each(function() {
        var count = $(this);
        $(this).countdown({
            zeroCallback: function(options) {
                var newDate = new Date(),
                    newDate = newDate.setHours(newDate.getHours() + 130);

                $(count).attr("data-countdown", newDate);
                $(count).countdown({
                    unixFormat: true
                });
            }
        });
    });
});


// Bootstrap carousel
$('.carousel').carousel({
    interval: 6000
});

// Responsive video
$("body").fitVids();

// Sticky search
if ($('body').hasClass('sticky-search')) {
    var theLoc = $('.search-area').position().top;
    if ($('body').hasClass('sticky-header')) {
        var header_h = $('header.main').outerHeight();
    } else {
        header_h = 0;
    }

    $(window).scroll(function() {
        if (theLoc >= $(window).scrollTop()) {
            if ($('.search-area').hasClass('fixed')) {
                $('.search-area').removeClass('fixed').css({
                    top: 0
                });
            }
        } else {
            if (!$('.search-area').hasClass('fixed')) {
                $('.search-area').addClass('fixed').css({
                    top: header_h
                });
            }
        }
    });
}

// Sticky header
if ($('body').hasClass('sticky-header')) {
    var theLoc = $('header.main').position().top;
    $(window).scroll(function() {
        if (theLoc >= $(window).scrollTop()) {
            if ($('header.main').hasClass('fixed')) {
                $('header.main').removeClass('fixed');
            }
        } else {
            if (!$('header.main').hasClass('fixed')) {
                $('header.main').addClass('fixed');
            }
        }
    });
}

// Price slider
$("#price-slider").ionRangeSlider({
    min: 130,
    max: 575,
    type: 'double',
    prefix: "$",
    prettify: false,
    hasGrid: false
});

// Responsive navigation
$('#flexnav').flexNav();



// Lighbox text
$('.popup-text').magnificPopup({
    removalDelay: 500,
    closeBtnInside: true,
    callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});

// Lightbox iframe
$('.popup-iframe').magnificPopup({
    dispableOn: 700,
    type: 'iframe',
    removalDelay: 160,
    mainClass: 'mfp-fade',
    preloader: false
});


$('#star-rating > li').each(function() {
    var list = $(this).parent(),
        listItems = list.children(),
        itemIndex = $(this).index();

    $(this).hover(function() {
        for (var i = 0; i < listItems.length; i++) {
            if (i <= itemIndex) {
                $(listItems[i]).addClass('hovered');
            } else {
                break;
            }
        };
        $(this).click(function() {
            for (var i = 0; i < listItems.length; i++) {
                if (i <= itemIndex) {
                    $(listItems[i]).addClass('selected');
                } else {
                    $(listItems[i]).removeClass('selected');
                }
            };
        });
    }, function() {
        listItems.removeClass('hovered');
    });
});


// Bootstrap tooltips
$('[data-toggle="tooltip"]').tooltip();



// Twitter
$("#twitter").tweet({
    username: TWITTER_USERNAME,
    count: 3
});

$("#twitter-ticker").tweet({
    username: TWITTER_USERNAME,
    page: 1,
    count: 20
});


// Checkboxes and radio
$('.i-check, .i-radio').iCheck({
    checkboxClass: 'i-check',
    radioClass: 'i-radio'
});


// Item quantity control (shopping cart)
$(".cart-item-plus").click(function() {
    var currentVal = parseInt($(this).prev(".cart-quantity").val());

    if (!currentVal || currentVal == "" || currentVal == "NaN") currentVal = 0;

    $(this).prev(".cart-quantity").val(currentVal + 1);
});

$(".cart-item-minus").click(function() {
    var currentVal = parseInt($(this).next(".cart-quantity").val());
    if (currentVal == "NaN") currentVal = 0;
    if (currentVal > 0) {
        $(this).next(".cart-quantity").val(currentVal - 1);
    }
});


// Card form
// $('.form-group-cc-number input').payment('formatCardNumber');
// $('.form-group-cc-date input').payment('formatCardExpiry');
// $('.form-group-cc-cvc input').payment('formatCardCVC');


// Google map
if ($('#map-canvas').length) {
    var map,
        service;
    jQuery(function($) {
        $(document).ready(function() {
            var latlng = new google.maps.LatLng(GOOGLE_MAP_LAT, GOOGLE_MAP_LNG);
            var myOptions = {
                zoom: 14,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);


            var marker = new google.maps.Marker({
                position: latlng,
                map: map
            });
            marker.setMap(map);


            $('a[href="#google-map-tab"]').on('shown.bs.tab', function(e) {
                google.maps.event.trigger(map, 'resize');
                map.setCenter(latlng);
            });
        });
    });
}


$('.bg-parallax').each(function() {
    var $obj = $(this);

    $(window).scroll(function() {
        // var yPos = -($(window).scrollTop() / $obj.data('speed'));
        var animSpeed;
        if ($obj.hasClass('bg-blur')) {
            animSpeed = 10;
        } else {
            animSpeed = 15;
        }
        var yPos = -($(window).scrollTop() / animSpeed);
        var bgpos = '50% ' + yPos + 'px';
        $obj.css('background-position', bgpos);

    });
});

// Document ready functions
$(document).ready(function() {


    $('html').niceScroll({
        cursorcolor: "#000",
        cursorborder: "0px solid #fff",
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        cursorwidth: "5px",
        cursorborderradius: "0px",
        cursoropacitymin: 0,
        cursoropacitymax: 0.7,
        boxzoom: true,
        horizrailenabled: false,
        zindex: 9999
    });


    // Owl Carousel
    var owlCarousel = $('#owl-carousel'),
        owlItems = owlCarousel.attr('data-items'),
        owlCarouselSlider = $('#owl-carousel-slider'),
        owlNav = owlCarouselSlider.attr('data-nav');
    // owlSliderPagination = owlCarouselSlider.attr('data-pagination');

    owlCarousel.owlCarousel({
        items: owlItems,
        navigation: true,
        navigationText: ['', '']
    });

    owlCarouselSlider.owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        // pagination: owlSliderPagination,
        singleItem: true,
        navigation: true,
        navigationText: ['', ''],
        transitionStyle: 'goDown',
        // autoPlay: 4500
    });


    // Twitter Ticker
    var ul = $('#twitter-ticker').find(".tweet-list");
    var ticker = function() {
        setTimeout(function() {
            ul.find('li:first').animate({
                marginTop: '-9em',
                opacity: 0
            }, 700, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
            });
            ticker();
        }, 5000);
    };
    ticker();


     // footer always on bottom
    var docHeight = $(window).height();
    var footerHeight = $('#main-footer').height();
    var footerTop = $('#main-footer').position.top + footerHeight;
   
   if (footerTop < docHeight) {
    $('#main-footer').css('margin-top', (docHeight - footerTop) + 'px');
   }

});


// Lighbox gallery
$('#popup-gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a.popup-gallery-image',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// Lighbox gallery
$('#popup-gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a.popup-gallery-image',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// Lighbox image
$('.popup-image').magnificPopup({
    type: 'image'
});

$(document).ready(function(){


    $('.add_cart').on('click', function () {

        var product_id = $(this).parent().find('li:first-child').attr("id");

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            url:'./cart',
            type:'POST',
            data:{product_id: product_id},

            success: function (data) {
               // var response = JSON.parse(data);
                var data2 = data.split('---');

                var response = $.parseJSON(data2[0]);
                var insert_data = "<li><a href='javascript:void(0)'><img src='./storage/images/products/"+response.image+"' alt='"+response.name+"' title='"+response.name+"' width='50' height = '80' /><h4 style='color: white;'>"+response.bangla_name+"</h4><span class='shopping-cart-item-price'>tk. "+response.price+"</span><span class='pull-right'><i class='fa fa-trash-o fa-3x delete_cart'  id='"+data2[1]+"' style='color: red;'></i></span></a></li>";

                $(".shopping_cart").append(insert_data);
        }
        });
    });

    $("ul").on('click','.delete_cart', function () {
       var cart_id = $(this).attr('id');

       if(cart_id == "")
       {
           cart_id = $(this).attr('data-effect');
       }
       var name = $(this);
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: '/cart/delete',
            type:'POST',
            data:{cart_id: cart_id},

            success: function (data) {
                if(data === "done")
                {
                   name.parentsUntil('li').html('');
                }
            }
        });

    });

    var counter=0;
    var name;
    var phone;
    var email;
    var address;
    var city;
    var country;
    var postalcode;

    $('#gift').on('change', function () {

        if(counter == 0)
        {
             name= $(".name").val();
             phone= $(".phone").val();
             email= $(".email").val();
             address=  $(".address").val();
             city= $(".city").val();
             country= $(".country").val();
             postalcode= $(".postalcode").val();
            counter ++;
        }
        alert(name);



       if(this.checked)
       {
           $(".name").val("");
           $(".phone").val("");
           $(".email").val("");
           $(".address").val("");
           $(".city").val("");
           $(".country").val("");
           $(".postalcode").val("");

       }
       else {
           $(".name").val(name);
           $(".phone").val(phone);
           $(".email").val(email);
           $(".address").val(address);
           $(".city").val(city);
           $(".country").val(country);
           $(".postalcode").val(postalcode);
       }
    });
    
    $("button.seeDetails").on('click', function () {
        $(".popupTable tbody").html("");
        var id = $(this).attr('id');
        var table = "";

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: '/profile/order',
            type:'POST',
            data:{id: id},

            success: function (data) {
                $.each(data, function(index, element) {
                    table +="<tr>" +
                        "<td>" + element.product_name +"</td>" +
                        "<td>" + element.quantity +"</td>" +
                        "<td>" + element.product_price +"</td><tr>";

                });
              $(".popupTable tbody").append(table);
                $('#invoice-details').modal('show');
            }
        });
    });

});

