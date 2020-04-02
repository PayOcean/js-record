/**
 * 为某个元素绑定遮罩弹窗
 * @ignore
 * @param {string} trigger - 弹窗触发器 (比如: '#needKnow', '.tips', $('#btn'))
 * @param {Object} [options] - 弹窗配置
 *      @param {string} [options.type] - 弹窗类型(不同弹窗样式，备用参数)
 *      @param {boolen} [options.pageFixed] - 是否禁止页面滑动，默认undefined(不禁止)
 *      @param {string} [options.title] - 弹窗标题
 *      @param {string} [options.content] - 弹窗主内容
 */
var mask = {
  init: function (trigger, options) {
    // 样式
    mask.styled && $('head').append('<style id="maskStyle">.mask{display:none;position:fixed;width:100%;height:100%;top:0;left:0;z-index:100}.mask-bg{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.3);z-index:1}.mask-body{position:absolute;top:50%;left:50%;right:0;transform:translate(-50%,-60%);border-radius:4px;z-index:2;background:#fff;padding:15px 0;width:90%;max-height:70%;overflow-y:scroll}.mask-title{height:35px;font-size:17px;color:#333;text-align:center;border-bottom:1px solid #ebebeb}.mask-content{padding:0 15px}.mask-content>p{padding:3px 0;line-height:30px;color:#333}.hidden{display:none;}</style>');

    // 点击背景清除弹窗
    $('#page').on('click', '#maskBg', function () {
      mask.remove()
    });

    // 有可用参数，则绑定弹窗
    trigger && options && options.content && mask.bind(trigger, options)
  },
  // 给触发器绑定弹窗
  bind: function (trigger, options) {
    if (!trigger) return console.warn('弹窗绑定失败：弹窗触发器应为dom选择器，比如“.btn”')
    if (!options || !options.content) return console.warn('弹窗绑定失败：弹窗内容content无效')
    $(trigger).off('click.mask').on('click.mask', function () {
      var maskStr = `<div class="mask" id="mask" style="display:block;">
                        <div class="mask-bg" id="maskBg"></div>
                        <div class="mask-body">
                            <p class="mask-title ` + (options.title ? '' : 'hidden') + `">` + options.title + `</p>
                            <div class="mask-content">` + options.content + `</div>
                        </div>
                    </div>`
      $('#page').append(maskStr)
      options.pageFixed && $('#page').addClass('no-scroll')
    });
    return '弹窗绑定成功'
  },
  unbind: function (trigger) {
    $(trigger).off('click.mask')
  },
  // 清除弹窗遮罩
  remove: function () {
    $('#mask').remove()
    $('#page').removeClass('no-scroll')
  }
}

// 方式一：先init,再调用bind
// mask.init();
// mask.bind('.btn', {
//   pageFixed: true,
//   title: '温馨提示',
//   content: `<p class="mask-paragraph">内部客户：当前所支持或服务的内部同事</p>
//             <p class="mask-paragraph">合作方：协作达成目标的内部合作伙伴，如项目组成员、业务上下游成员等</p>
//             <p class="mask-paragraph">下属：所带的团队成员（适用于部门负责人角色）</p>`
// });
// mask.bind('#needKnow', {
//   title: '须知',
//   content: `<p class="mask-paragraph">段落一：xxx</p>
//             <p class="mask-paragraph">段落二：xxxxx</p>
//             <p class="mask-paragraph">段落三：xxxxx</p>`
// });

// 方式二：首次调用可直接在init中传参
// mask.init('.btn', {
//   pageFixed: true,
//   title: '温馨提示',
//   content: `<p class="mask-paragraph">内部客户：当前所支持或服务的内部同事</p>
//             <p class="mask-paragraph">合作方：协作达成目标的内部合作伙伴，如项目组成员、业务上下游成员等</p>
//             <p class="mask-paragraph">下属：所带的团队成员（适用于部门负责人角色）</p>`
// });
// mask.bind('#needKnow', {
//   title: '须知',
//   content: `<p class="mask-paragraph">段落一：xxx</p>
//             <p class="mask-paragraph">段落二：xxxxx</p>
//             <p class="mask-paragraph">段落三：xxxxx</p>`
// });
