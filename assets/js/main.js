/* $(function() {
    var oTop = $('#countIt').offset().top - window.innerHeight;
    $(window).scroll(function(){

        var pTop = $('body').scrollTop();
        if( pTop >= oTop ){
            start_count();
        }
    });
});
 */
function start_count(){
	 $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    $('.count').removeClass('count');
}

$(function() {
    var oTop = $('#skills').offset().top - window.innerHeight;
    $(window).scroll(function(){

        var pTop = $('body').scrollTop();
        if( pTop >= oTop ){
            start_counter ();
        }
    });
});

function start_counter(){
    var $progressBar = $('.html').css('width','92%');
    var $progressBar1 = $('.c').css('width','87%');
    var $progressBar2 = $('.cpp').css('width','89%');
    var $progressBar3 = $('.java').css('width','75%');
    var $progressBar4 = $('.css').css('width','85%');
    
    var $progressBar5 = $('.pp').css('width','87%');
    var $progressBar6 = $('.ppt').css('width','92%');
    var $progressBar7 = $('.ill').css('width','73%');
    var $progressBar8 = $('.pht').css('width','75%');
    var $progressBar9 = $('.fls').css('width','67%');

    var $progressBar10 = $('.sket').css('width','93%');
    var $progressBar11 = $('.poet').css('width','85%');
    var $progressBar12 = $('.guit').css('width','68%');
    var $progressBar13 = $('.badm').css('width','85%');
    var $progressBar14 = $('.lgd').css('width','87%');
}