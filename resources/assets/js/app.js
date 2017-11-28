// *************************************************************************
// *************************************************************************
// *************************************************************************

require('./bootstrap');



// #ACCODION
// =========================================================================

$('.accordion__content').hide();
$('.accordion__content').first().show();
$('.accordion__panel').first().addClass('is--open');

$('.accordion__title').click(function() {
    $('.accordion__panel').removeClass('is--open');
    $(this).parent().addClass('is--open');
    $('.accordion__content').slideUp(200);
    $(this).next('.accordion__content').slideDown(200);
});



// #TABS
// =========================================================================

$('li[data-tab], .tabs__content').first().addClass('is--active');
$('.tabs__content').first().addClass('is--active');

$('li[data-tab]').click(function() {
    var thisTab = $(this).attr('data-tab');
    var tab = $('.tabs__content' + '[data-tab="' + thisTab + '"]');

    $('li[data-tab]').removeClass('is--active');
    $(this).addClass('is--active');
    $('.tabs__content').removeClass('is--active');
    tab.addClass('is--active');
});




// #DROPDOWN
// =========================================================================

$('.dropdown__container').mouseenter(function() {
    $(this).addClass('is--active');
});

$('.dropdown__container').mouseleave(function() {
    $(this).removeClass('is--active');
});

$('.dropdown').mouseleave(function() {
    $(this).parent().removeClass('is--active');
});




// #ALERT NOTIFY
// =========================================================================

$('.alert--notify').click(function() {
    $(this).fadeOut(200);
});



// #OFF CANVAS
// =========================================================================

var offCanvasTrigger = document.querySelector('.off-canvas__trigger');
var offCanvas = document.querySelector('.off-canvas');

if (offCanvasTrigger) {
    offCanvasTrigger.addEventListener('click', function () {
        offCanvas.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #MODAL
// =========================================================================

var modalTrigger = document.querySelector('.modal__trigger');
var modal = document.querySelector('.modal');

if (modalTrigger) {
    modalTrigger.addEventListener('click', function () {
        modal.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #KEY CONTROL
// =========================================================================

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        overlay.classList.remove('is--active');
    }
});

if (offCanvas) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            offCanvas.classList.remove('is--open');
        }
    });

}

if (modal) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            modal.classList.remove('is--open');
        }
    });

}



// #OVERLAY
// =========================================================================

var overlay = document.querySelector('.overlay');

if (overlay) {
    overlay.addEventListener('click', function () {
        this.classList.remove('is--active');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        offCanvas.classList.remove('is--open');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        modal.classList.remove('is--open');
    });
}



// #DOCS
// =========================================================================



// #LIGHTBOX
// =========================================================================

jQuery(document).ready(function($) {
    $('.lightbox').hide();
    
    $('.lightbox__trigger').click(function(e){
        e.preventDefault();
        $('body').addClass('lightbox-active');
        
        $('.lightbox').show();
        $('.active').removeClass('active');
        $(this).addClass('active');
        
        var activeimg = $('.active').attr('src');      
        //lightbox content img src of active image
        $('.lightbox_content img').attr('src', activeimg);
        
    });
    
    var trigger = $('.lightbox__trigger');
    var active = $('.active');
    
    $('.next').click(function(){
        var next = $('.active').parent().next().children();
        $('.active').removeClass('active');
        next.addClass('active');
        
        var activeimg = $('.active').attr('src');
        $('.lightbox_content img').attr('src', activeimg);
    });
    
    $('.prev').click(function(){
        var previous = $('.active').parent().prev().children();
        $('.active').removeClass('active');
        previous.addClass('active');
        
        var activeimg = $('.active').attr('src');
        $('.lightbox_content img').attr('src', activeimg);     
    });
    
    $(document).mouseup(function(e) {     
        var arrows = $("span");     
        if (!arrows.is(e.target)) {
            $('.lightbox').hide();
        }
    });   
    
});




// #UNDERLINE NAV
// =========================================================================

$(document).ready(function() {
    $('.nav__navbar li').click(function(){
        $('ul.nav__navbar').removeClass('is--active');
        $('.nav__navbar li.is--active').removeClass('is--active');
        $(this).addClass('is--active');
    });
});




// #EMAIL FORM
// =========================================================================

var form = $('.form');

$(form).submit(function(e) {
  e.preventDefault();

  var formData = new FormData($(this)[0]);

  //if files => formData.append('file', $('input[type=file]')[0].files[0]);

  $.ajax({
    type: 'post',
    url: $(this).attr('action'),
    data: formData,
    processData: false,
    contentType: false
  })
  .done(function (response) {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert is-success">Your Message Was Sent! We\'ll be in touch.</div>').insertAfter(form);
    
    console.log('success' + response);
  })
  .fail(function (data) {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert is-error">Oh no! Something went wrong, try again.</div>').insertAfter(form);
    
    console.log('fail' + data);
  })

});




// #GOOGLE MAPS
// =========================================================================

if ($('#map').length != 0) {

  var map = new GMaps({
      el:'#map',
      lat:42.101789,
      lng: -83.111663,
      styles: [
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [
                  { color: '#DEE2E6' }
                ]
              }, {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [
                  { color: '#f5f5f5' }
                ]
              }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  { color: '#ffffff' }
                ]
              }, {
                featureType: 'road',
                elementType: 'labels.text',
                stylers: [
                  { color: '#990021' },
                  { weight: .25 }
                ]
              }, {
                featureType: 'poi',
                elementType: 'labels.text',
                stylers: [
                  { visibility: "on" },
                  { color: '#888888' },
                  { weight: .25 }
                ]
              }, {
                featureType: 'poi',
                elementType: 'geometry.fill',
                stylers: [
                  { visibility: "on" },
                  { color: '#DEE2E6' },
                  { weight: .25 }
                ]
              }, {
                featureType: 'administrative',
                elementType: 'lables.text.stroke',
                stylers: [
                  { color: '#333333' },
                  { weight: .5 }
                ]
              }
            ]
  });

  map.addMarker({
      lat:42.101789,
      lng: -83.111663,
      icon: "assets/img/mapmarker.png"
  });
}



// #SMOOTH SCROLLING
// =========================================================================

$(document).on('click', 'a', function(event){
    // event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900);
});




// #STICKY NAV
// =========================================================================

$(document).ready(function() {
    var stickyNavTop = $('.nav').offset().top;
    var aboutSection = $('body').offset().top + window.innerHeight/2 - 50;
     
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
              
        if (scrollTop > aboutSection) { 
            $('.nav').addClass('sticky');
            $('.white-logo').removeClass('active');
            $('.white-logo').addClass('not-active');
            $('.color-logo').removeClass('not-active');
            $('.color-logo').addClass('active');
            $('.hamburger').addClass('sticky-hamburger');
            $('.off-canvas').addClass('sticky-nav');
        } else {
            $('.nav').removeClass('sticky'); 
            $('.color-logo').removeClass('active');
            $('.color-logo').addClass('not-active');
            $('.white-logo').removeClass('not-active');
            $('.white-logo').addClass('active');
            $('.hamburger').removeClass('sticky-hamburger');
            $('.off-canvas').removeClass('sticky-nav');
        }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
      stickyNav();
    });
});




// #PARALLAX
// =========================================================================

var w = $(window).width();
var h = $(window).height();

if ($("div").hasClass("parallax1")) {
   Createparallaxbg(".parallax1");
}
if ($("div").hasClass("parallax2")) {
   Createparallaxbg(".parallax2");
}
if ($("div").hasClass("parallax3")) {
   Createparallaxbg(".parallax3");
}
if ($("div").hasClass("parallax4")) {
   Createparallaxbg(".parallax4");
}
if ($("div").hasClass("parallax5")) {
   Createparallaxbg(".parallax5");
}
if ($("div").hasClass("parallax6")) {
   Createparallaxbg(".parallax6");
}

$(window).bind('load scroll', function () {
   
if($("div").hasClass("parallax1")){
    parallaxbg(".parallax1",".parallax1");
}
if($("div").hasClass("parallax2")){
    parallaxbg(".parallax2",".parallax2");
}
if($("div").hasClass("parallax3")){
    parallaxbg(".parallax3",".parallax3");
}
if($("div").hasClass("parallax4")){
    parallaxbg(".parallax4",".parallax4");
}
if($("div").hasClass("parallax5")){
    parallaxbg(".parallax5",".parallax5");
}
if($("div").hasClass("parallax6")){
    parallaxbg(".parallax5",".parallax6");
}

});

// Parallax Background Image Create
function Createparallaxbg(parallaxImage) {
   var ParSecImg = $(parallaxImage).attr("data-image");
   $(parallaxImage).attr("style", "background-image:url(" + ParSecImg + ");");
}

// Parallax Background Image ATTR ADD
function parallaxbg(position, parallaxImage) {
   var currentTop = $(window).scrollTop();
   var ParSecPT = $(position).position().top;
   if (currentTop > (ParSecPT - h)) {

      //NORMALLY IS H/5 NOT TWELVE
      $(parallaxImage).css({
         "background-position": "center " + ((currentTop - ParSecPT) / 2 - (h/12)) + "px"
      });

   }
}




// #HERO TEXT FADE OUT
// =========================================================================

$(window).scroll(function(){
    $(".hero__container").css("opacity", 1 - $(window).scrollTop() / 400);
});




// #CHECK IF AT BOTTOM OF PAGE
// =========================================================================

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       $('.up-arrow').addClass('is--active');
   }
   else {
    $('.up-arrow').removeClass('is--active');
   }
});