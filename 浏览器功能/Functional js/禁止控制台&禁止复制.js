/* eslint-disable */
// 生产可以用混淆+高级加密

// 方式一（推荐）：立即执行
/**
 * @ignore
 * @param {string} hostname - 生效域名
 * @param {boolen} condition - 生效条件
 */
(function (hostname, condition) {
  var ConsoleManager = {
    onOpen: function () {
      try {
        window.open("about:blank#console disabled", target = "_self")
      } catch (e) {
        var btn = document.createElement("button");
        btn.onclick = function () {
          window.open("about:blank#console disabled", target = "_self")
        };
        btn.click()
      }
    },
    observer: function () {
      let _console = {
        log: console.log,
        clear: console.clear
      };
      var div = document.createElement("div"),
        t = false,
        o = false;
      Object.defineProperty(div, "id", {
        get: function () {
          t || (ConsoleManager.onOpen(), t = true), o = true
        }
      });
      // 天涯海角
      setInterval(function () {
        o = false;
        _console.log(div);
        _console.clear();
        !o && t && (t = false)
      }, 800)
    },
    observerFF: function () {
      let _console = {
        log: console.log
      };
      // 阿纳泽
      var obj = Object.create(null),
        t = Date.now();
      Object.defineProperty(obj, "a", {
        get: function () {
          if (Date.now() - t > 20) {
            ConsoleManager.onOpen()
          }
        }
      })
      setInterval(function () {
        t = Date.now();
        (function () {})["constructor"]("debugger")();
        _console.log(obj.a);
      }, 800);
      // 阿萨德
      function resize() {
        var threshold = 200;
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
          ConsoleManager.onOpen()
        }
      }
      window.addEventListener('resize', resize);
      resize()
    },
    init: function () {
      navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? this.observerFF() : this.observer();

      document.onkeydown = KeyDown, document.oncontextmenu = function () {
        event.returnValue = false
      };
      document.onselectstart = function () {
        event.returnValue = false
      };
      document.oncopy = function () {
        event.returnValue = false
      };

      function KeyDown() {
        return !(112 == event.keyCode || 123 == event.keyCode || event.ctrlKey && 82 == event.keyCode || event.ctrlKey && 78 == event.keyCode || event.shiftKey && 121 == event.keyCode || event.altKey && 115 == event.keyCode || "A" == event.srcElement.tagName && event.shiftKey) || (event.keyCode = 0, event.returnValue = !1)
      }
    }
  };
  let k = '1c9de49c74ef99cf383802983a4f07eb05c7a028686aa3ede5c56219fa7e5952'; // SHA256钥匙
  location.href.endsWith('?dver=' + k) && (localStorage.dver = k);
  location.hostname === hostname && condition && localStorage.dver !== k && ConsoleManager.init();
})('xxx.com', !navigator.userAgent.match(/micromessenger/i))


// 方式二：页面加载完成后执行
window.addEventListener('load',function () {
  var ConsoleManager = {
    onOpen: function () {
      try {
        window.open("about:blank#console disabled", target = "_self")
      } catch (e) {
        var btn = document.createElement("button");
        btn.onclick = function () {
          window.open("about:blank#console disabled", target = "_self")
        };
        btn.click()
      }
    },
    observer: function () {
      let _console = {
          log: console.log,
          clear: console.clear
      };
      var div = document.createElement("div"),
        t = false,
        o = false;
      Object.defineProperty(div, "id", {
        get: function () {
          t || (ConsoleManager.onOpen(), t = true), o = true
        }
      });
      setInterval(function () {
        o = false;
        console.log(div);
        console.clear();
        !o && t && (t = false)
      }, 200)
    },
    observerFF: function () {
      let _console = {
        log: console.log
      };
      // 阿纳泽
      var obj = Object.create(null),
        t = Date.now();
      Object.defineProperty(obj, "a", {
        get: function () {
          if (Date.now() - t > 20) {
            ConsoleManager.onOpen()
          }
        }
      })
      setInterval(function () {
        t = Date.now();
        (function () {})["constructor"]("debugger")();
        _console.log(obj.a);
      }, 200);
      // 阿萨德
      function resize() {
        var threshold = 200;
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
          ConsoleManager.onOpen()
        }
      }
      window.addEventListener('resize', resize);
      resize()
    },
    init: function () {
      navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? this.observerFF() : this.observer();

      document.onkeydown = KeyDown, document.oncontextmenu = function () {
        event.returnValue = false
      };
      document.onselectstart = function () {
        event.returnValue = false
      };
      document.oncopy = function () {
        event.returnValue = false
      };

      function KeyDown() {
        return !(112 == event.keyCode || 123 == event.keyCode || event.ctrlKey && 82 == event.keyCode || event.ctrlKey && 78 == event.keyCode || event.shiftKey && 121 == event.keyCode || event.altKey && 115 == event.keyCode || "A" == event.srcElement.tagName && event.shiftKey) || (event.keyCode = 0, event.returnValue = !1)
      }
    }
  };
  let k = '1c9de49c74ef99cf383802983a4f07eb05c7a028686aa3ede5c56219fa7e5952';
  location.href.endsWith('?dver=' + k) && (localStorage.dver = k);
  location.hostname === 'xx.site.com' && localStorage.dver !== k && ConsoleManager.init();
})
