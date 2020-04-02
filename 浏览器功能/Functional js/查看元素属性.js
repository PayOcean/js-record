javascript: (function() {
  var _id = 'spyon-container',
    _posBuffer = 3;

  function clear() {
    document.body.removeEventListener('mousemove', window.Spy.glide);
    document.body.removeEventListener('mouseover', window.Spy.show);
    document.body.removeEventListener('mouseleave', window.Spy.hide);
    window.Spy.hide();
    window.isSpyOn = false;
  }

  function init() {
    document.body.addEventListener('mousemove', window.Spy.glide);
    document.body.addEventListener('mouseover', window.Spy.show);
    document.body.addEventListener('mouseleave', window.Spy.hide);
    window.isSpyOn = true;
  }

  if (window.isSpyOn === undefined) {
    window.Spy = {
      hide: function(e) {
        document.getElementById(_id).style.display = 'none';
      },
      show: function(e) {
        const spyContainer = document.getElementById(_id);
        if (!spyContainer) {
          window.Spy.create();
          return;
        }
        if (spyContainer.style.display !== 'block') {
          spyContainer.style.display = 'block';
        }
      },
      glide: function(e) {
        const spyContainer = document.getElementById(_id);
        if (!spyContainer) {
          window.Spy.create();
          return;
        }

        const left = e.clientX + window.Spy.getScrollPos().left + _posBuffer;
        const top = e.clientY + window.Spy.getScrollPos().top + _posBuffer;
        spyContainer.innerHTML = window.Spy.showAttributes(e.target);
        if (left + spyContainer.offsetWidth > window.innerWidth) {
          spyContainer.style.left = left - spyContainer.offsetWidth + 'px';
        } else {
          spyContainer.style.left = left + 'px';
        }
        spyContainer.style.top = top + 'px';
      },
      getScrollPos: function() {
        const ieEdge = document.all ? false : true;
        if (!ieEdge) {
          return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
          };
        } else {
          return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
          };
        }
      },
      showAttributes: function(el) {
        const nodeName = `<span style="font-weight:bold;">${el.nodeName.toLowerCase()}</span><br/>`;
        const attrArr = Array.from(el.attributes);
        const attributes = attrArr.reduce((attrs, attr) => {
          attrs += `<span style="color:#ffffcc;">${attr.nodeName}</span>="${attr.nodeValue}"<br/>`;
          return attrs;
        }, '');
        return nodeName + attributes;
      },
      create: function() {
        const div = document.createElement('div');
        div.id = _id;
        div.setAttribute('style', ` position: absolute; left: 0; top: 0; width: auto; height: auto; padding: 10px; box-sizing: border-box; color: #fff; background-color: #444; z-index: 100000; font-size: 12px; border-radius: 5px; line-height: 20px; max-width: 45%; word-break: break-all;`);
        document.body.appendChild(div);
      },
    };
    init();
  } else {
    window.isSpyOn = !window.isSpyOn;
    window.isSpyOn ? init() : clear();
  }

  console.log('查看属性：' + {
    'true': '已打开',
    'false': '已关闭'
  } [window.isSpyOn]);

})();
