// #首页为list  ##二级页为detail
$(function() {
  // 加载页面时,判断history记录是否为详情页（二级页）
  if (history.state && history.state.pagetype === 'detail') {
    getDetail(history.state.url.substr(1));
    $('#listPanel').hide();
    $('#pageback').text(history.state.title);
    $('#pageback,.detail-panel').show();
  }

  // 进入详情页
  $('.list-item').on('click', function() {
    var $this = $(this)
    var title = $this.find('.title').text() + '-' + $this.find('.name').text();
    var bindId = $this.attr('data-bindId');
    $('#listPanel').hide();
    $('#pageback').text(title);
    $('#pageback,.detail-panel').show();
    // history add
    pushHistory('detail', title, '#' + bindId);
    // 获取详情页数据
    Loader.init('#page');
    getDetail(bindId);
  })

  // 返回列表
  $('#pageback').on('click', function() {
    $('#pageback,.detail-panel').hide();
    $('#listPanel').show();
    // history back
    history.back();
  })

  // history变化(比如点击手机返回键)
  $(window).on('popstate', function(e) {
    if (history.state == null) { // 首页，即list页
      $('#pageback,.detail-panel').hide();
      $('#listPanel').show();
    } else if (history.state.pagetype === 'detail') { // 详情页
      $('#listPanel').hide();
      $('#pageback,.detail-panel').show();
    }
  })

  // history写入函数
  function pushHistory(pagetype, title, url) {
    var state = {
      pagetype: pagetype,
      title: title,
      url: url
    };
    window.history.pushState(state, pagetype, url);
  }

  // 获取详情页面的数据
  function getDetail(bindId) {
    $.ajax({
      url: 'https://xxx',
      type: 'POST',
      dataType: 'json',
      data: {
        bindId: bindId
      },
      success: function(r) {
        if (r.result === 'ok') {
          renderDetail(r.data);
          Loader.hide();
        } else {
          Loader.hide();
          Alerter.init(1500, 'warning', r.msg, 0, '#page');
        }
      }
    });
  }
})
