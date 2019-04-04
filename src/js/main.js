/*! jacobrswanson 2019-04-04 */
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-webp-setclasses !*/
!(function(e, n, t) {
  function o(e) {
    var n = p.className,
      t = Modernizr._config.classPrefix || '';
    if ((h && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp('(^|\\s)' + t + 'no-js(\\s|$)');
      n = n.replace(o, '$1' + t + 'js$2');
    }
    Modernizr._config.enableClasses &&
      ((n += ' ' + t + e.join(' ' + t)),
      h ? (p.className.baseVal = n) : (p.className = n));
  }
  function A(e, n) {
    return typeof e === n;
  }
  function a() {
    var e, n, t, o, a, i, s;
    for (var r in u)
      if (u.hasOwnProperty(r)) {
        if (
          ((e = []),
          (n = u[r]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (t = 0; t < n.options.aliases.length; t++)
            e.push(n.options.aliases[t].toLowerCase());
        for (o = A(n.fn, 'function') ? n.fn() : n.fn, a = 0; a < e.length; a++)
          (i = e[a]),
            (s = i.split('.')),
            1 === s.length
              ? (Modernizr[s[0]] = o)
              : (!Modernizr[s[0]] ||
                  Modernizr[s[0]] instanceof Boolean ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                (Modernizr[s[0]][s[1]] = o)),
            f.push((o ? '' : 'no-') + s.join('-'));
      }
  }
  function i(e, n) {
    if ('object' == typeof e) for (var t in e) d(e, t) && i(t, e[t]);
    else {
      e = e.toLowerCase();
      var A = e.split('.'),
        a = Modernizr[A[0]];
      if ((2 == A.length && (a = a[A[1]]), 'undefined' != typeof a))
        return Modernizr;
      (n = 'function' == typeof n ? n() : n),
        1 == A.length
          ? (Modernizr[A[0]] = n)
          : (!Modernizr[A[0]] ||
              Modernizr[A[0]] instanceof Boolean ||
              (Modernizr[A[0]] = new Boolean(Modernizr[A[0]])),
            (Modernizr[A[0]][A[1]] = n)),
        o([(n && 0 != n ? '' : 'no-') + A.join('-')]),
        Modernizr._trigger(e, n);
    }
    return Modernizr;
  }
  function s() {
    return 'function' != typeof n.createElement
      ? n.createElement(arguments[0])
      : h
      ? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function r() {
    var e = n.body;
    return e || ((e = s(h ? 'svg' : 'body')), (e.fake = !0)), e;
  }
  function l(e, t, o, A) {
    var a,
      i,
      l,
      f,
      u = 'modernizr',
      c = s('div'),
      d = r();
    if (parseInt(o, 10))
      for (; o--; )
        (l = s('div')), (l.id = A ? A[o] : u + (o + 1)), c.appendChild(l);
    return (
      (a = s('style')),
      (a.type = 'text/css'),
      (a.id = 's' + u),
      (d.fake ? d : c).appendChild(a),
      d.appendChild(c),
      a.styleSheet
        ? (a.styleSheet.cssText = e)
        : a.appendChild(n.createTextNode(e)),
      (c.id = u),
      d.fake &&
        ((d.style.background = ''),
        (d.style.overflow = 'hidden'),
        (f = p.style.overflow),
        (p.style.overflow = 'hidden'),
        p.appendChild(d)),
      (i = t(c, e)),
      d.fake
        ? (d.parentNode.removeChild(d), (p.style.overflow = f), p.offsetHeight)
        : c.parentNode.removeChild(c),
      !!i
    );
  }
  var f = [],
    u = [],
    c = {
      _version: '3.6.0',
      _config: {
        classPrefix: '',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, n) {
        var t = this;
        setTimeout(function() {
          n(t[e]);
        }, 0);
      },
      addTest: function(e, n, t) {
        u.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function(e) {
        u.push({ name: null, fn: e });
      }
    },
    Modernizr = function() {};
  (Modernizr.prototype = c), (Modernizr = new Modernizr());
  var d,
    p = n.documentElement,
    h = 'svg' === p.nodeName.toLowerCase();
  !(function() {
    var e = {}.hasOwnProperty;
    d =
      A(e, 'undefined') || A(e.call, 'undefined')
        ? function(e, n) {
            return n in e && A(e.constructor.prototype[n], 'undefined');
          }
        : function(n, t) {
            return e.call(n, t);
          };
  })(),
    (c._l = {}),
    (c.on = function(e, n) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(n),
        Modernizr.hasOwnProperty(e) &&
          setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e]);
          }, 0);
    }),
    (c._trigger = function(e, n) {
      if (this._l[e]) {
        var t = this._l[e];
        setTimeout(function() {
          var e, o;
          for (e = 0; e < t.length; e++) (o = t[e])(n);
        }, 0),
          delete this._l[e];
      }
    }),
    Modernizr._q.push(function() {
      c.addTest = i;
    }),
    Modernizr.addAsyncTest(function() {
      function e(e, n, t) {
        function o(n) {
          var o = n && 'load' === n.type ? 1 == A.width : !1,
            a = 'webp' === e;
          i(e, a && o ? new Boolean(o) : o), t && t(n);
        }
        var A = new Image();
        (A.onerror = o), (A.onload = o), (A.src = n);
      }
      var n = [
          {
            uri:
              'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
            name: 'webp'
          },
          {
            uri:
              'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
            name: 'webp.alpha'
          },
          {
            uri:
              'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
            name: 'webp.animation'
          },
          {
            uri:
              'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
            name: 'webp.lossless'
          }
        ],
        t = n.shift();
      e(t.name, t.uri, function(t) {
        if (t && 'load' === t.type)
          for (var o = 0; o < n.length; o++) e(n[o].name, n[o].uri);
      });
    });
  var m = c._config.usePrefixes
    ? ' -webkit- -moz- -o- -ms- '.split(' ')
    : ['', ''];
  c._prefixes = m;
  var g = (c.testStyles = l);
  Modernizr.addTest('touchevents', function() {
    var t;
    if ('ontouchstart' in e || (e.DocumentTouch && n instanceof DocumentTouch))
      t = !0;
    else {
      var o = [
        '@media (',
        m.join('touch-enabled),('),
        'heartz',
        ')',
        '{#modernizr{top:9px;position:absolute}}'
      ].join('');
      g(o, function(e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  }),
    a(),
    o(f),
    delete c.addTest,
    delete c.addAsyncTest;
  for (var v = 0; v < Modernizr._q.length; v++) Modernizr._q[v]();
  e.Modernizr = Modernizr;
})(window, document);
;let call;

document.onwheel = () => {
  clearInterval(call);
};

const scroll = (offset, scrollRate) => {
  const difference = offset - window.pageYOffset;

  if (difference < scrollRate) {
    scrollRate = difference;
  }

  if (difference != 0) {
    window.scrollBy(0, scrollRate);
    return;
  }

  clearInterval(call);
};

const scrollListen = e => {
  e.preventDefault();

  // Set scroll rate
  const scrollRate = 12;
  const target = e.srcElement.dataset.id;

  // Get offset from top of page
  const offset = document.getElementById(target).offsetTop;
  call = setInterval(() => scroll(offset, scrollRate), 2);
};

// Add Event Listener to parent Element
const buttons = document.getElementsByClassName('scroll-btn');

Array.from(buttons).forEach(element => {
  element.addEventListener('click', scrollListen);
});
