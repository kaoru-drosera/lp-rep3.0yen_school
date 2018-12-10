jQuery(function($) {


  // ばーがー
    $('#r-burg').click(function() {
        $(this).toggleClass('h-links-active');

        if ($(this).hasClass('h-links-active')) {
            $('.h-links').addClass('h-links-active');
            $('.h-links').hide().fadeIn();
        } else {
            $('.h-links').removeClass('h-links-active');
            $('.h-links').attr('style','display:flex;').fadeOut(function(){
                $('.h-links').css('display',"");
              });



        }
      });


      // スマホレイアウトでバーガーメニューを実行後、
      // PCレイアウトに戻した際メニューが消える不具合アリ
      // 原本ソース確認で解決。Damn it!
      // ここからソース確認による追記
      // $('.h-links').attr('style','display:flex;').fadeOut(function(){
      //     $('.h-links').css('display',"");
      //   });
      // ここまでソース確認による追記



      // アイコン切り替え
      // 参考URL：https://teratail.com/questions/63908
       $('#r-burg').on('click',function(){
         $('#r-burg').toggleClass("on");
         if($('#r-burg').hasClass("on")){
         $('#r-burg img').attr('src','imgs/nav-menu-on.png');
         }else{
         $('#r-burg img').attr('src','imgs/nav-menu.png');
          }

        return false;
       });
    });

    // スライダー(長文注意)

    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
        followFinger:false
      },
    });

// スムーズスクロール

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop:position
    },speed,'swing');
    return false;
  });
});

// スクロールで表示
// $(function(){
//   $(window).scroll(function(){
//     $('.fadein').each(function(){
//       var elemPos = $(this).offset().top();
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).scrollTop();
//       if(scroll > elemPos -windowHeight + 200){
//         $(this).addClass('FIfire');
//       }else{
//         $(this).removeClass('FIfire');
//       }
//     });
//   });
// });
// …おっと間違えたこれは可視範囲でふわっと表示させるやつ
//

// 参考:https://cotodama.co/pagetop/
$(function(){
  var pagetop = $('#fx-top');
  pagetop.hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      pagetop.fadeIn();
    }else{
      pagetop.fadeOut();
    }
  });
});

$(function() {
  var appear = false;
  var pagetop = $('#fx-btn');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '0px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-56px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
});

// 悔しいけどコピペしたら上手くいった…。
// 手打ちだとなぜか失敗した。なんでよ…




// $(function(){
// });








    //
