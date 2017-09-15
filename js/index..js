$(function () {
  sjq();
  tab();
  lbt();
})
//--------------------------ÊÖ·çÇÙ
function sjq() {
  $('#sjq h3').on('click', function () {
    $(this).addClass('one').siblings('h3').removeClass();
    $(this).next('div').show(300).addClass('first').siblings('div').hide(300);
  }).mouseenter(function () {
    $(this).addClass('otherColor')
  }).mouseleave(function () {
    $(this).removeClass('otherColor')
  })
}
//------------------tab
function tab() {
  $('#tab ul li').on('click', function () {
    $(this).addClass('one').siblings().removeClass();
    console.log($(this).attr('data-id'))
    $(this).parent('ul').siblings('div[data-id= ' + $(this).attr('data-id') + ']').addClass('first').siblings('div').removeClass('first');
  }).mouseenter(function () {
    $(this).addClass('otherColor')
  }).mouseleave(function () {
    $(this).removeClass('otherColor')
  })
};
// ******************轮播图
function lbt() {
  var box = $('#lbt ul');
  //var width=  $('#lbt')[0].offsetWidth;
  var width = $('#lbt').width();
  var lis = $('#lbt ul').children().length;
  var olis = $('#lbt ol li');
  var pie = 0;
  var timed = setInterval(f1, 2000);
  $('#lbt').mouseenter(function () {
    clearInterval(timed);
  });
  $('#lbt').mouseleave(function () {
    timed = setInterval(f1, 2000);
  });
  olis.mouseenter(function () {
    olis.each(function (index, el) {
      $(el).removeClass('current');
      $(el).attr('index', index);
    });
    $(this).addClass('current');
    var i = $(this).attr('index');
    box.animate({"left": -width * i}, 500);
  });

  $('#lbt .box .right').click(f1);

  function f1() {
    if (pie == lis - 1) {
      pie = 0;
      box.animate({"left": -width * pie}, 0)
    }
    ;
    pie++;
    box.animate({"left": -width * pie}, 500);
    olis.each(function (index, el) {
      $(el).removeClass('current');
    });
    if (pie == lis - 1) {
      $('#lbt ol')[0].children[0].className = 'current';
    } else {
      $('#lbt ol')[0].children[pie].className = 'current';
    }
  };


  $('#lbt .box .left').click(function () {
    if (pie == 0) {
      pie = lis - 1;
      box.animate({"left": -width * pie}, 0)
    }
    ;
    pie--;
    box.animate({"left": -width * pie}, 500);
    olis.each(function (index, el) {
      $(el).removeClass('current');
    });
    $('#lbt ol')[0].children[pie].className = 'current';
  });
}






















