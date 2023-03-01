/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */ !(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 120));
})([
  function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  function (t, e) {
    var n = Array.isArray;
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    var r = {},
      i = {},
      o = [],
      a = window.Webflow || [],
      u = window.jQuery,
      c = u(window),
      s = u(document),
      l = u.isFunction,
      f = (r._ = n(123)),
      d = (r.tram = n(65) && u.tram),
      p = !1,
      v = !1;
    function h(t) {
      r.env() &&
        (l(t.design) && c.on("__wf_design", t.design),
        l(t.preview) && c.on("__wf_preview", t.preview)),
        l(t.destroy) && c.on("__wf_destroy", t.destroy),
        t.ready &&
          l(t.ready) &&
          (function (t) {
            if (p) return void t.ready();
            if (f.contains(o, t.ready)) return;
            o.push(t.ready);
          })(t);
    }
    function g(t) {
      l(t.design) && c.off("__wf_design", t.design),
        l(t.preview) && c.off("__wf_preview", t.preview),
        l(t.destroy) && c.off("__wf_destroy", t.destroy),
        t.ready &&
          l(t.ready) &&
          (function (t) {
            o = f.filter(o, function (e) {
              return e !== t.ready;
            });
          })(t);
    }
    (d.config.hideBackface = !1),
      (d.config.keepInherited = !0),
      (r.define = function (t, e, n) {
        i[t] && g(i[t]);
        var r = (i[t] = e(u, f, n) || {});
        return h(r), r;
      }),
      (r.require = function (t) {
        return i[t];
      }),
      (r.push = function (t) {
        p ? l(t) && t() : a.push(t);
      }),
      (r.env = function (t) {
        var e = window.__wf_design,
          n = void 0 !== e;
        return t
          ? "design" === t
            ? n && e
            : "preview" === t
            ? n && !e
            : "slug" === t
            ? n && window.__wf_slug
            : "editor" === t
            ? window.WebflowEditor
            : "test" === t
            ? window.__wf_test
            : "frame" === t
            ? window !== window.top
            : void 0
          : n;
      });
    var E,
      m = navigator.userAgent.toLowerCase(),
      y = (r.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      _ = (r.env.chrome =
        /chrome/.test(m) &&
        /Google/.test(navigator.vendor) &&
        parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
      I = (r.env.ios = /(ipod|iphone|ipad)/.test(m));
    (r.env.safari = /safari/.test(m) && !_ && !I),
      y &&
        s.on("touchstart mousedown", function (t) {
          E = t.target;
        }),
      (r.validClick = y
        ? function (t) {
            return t === E || u.contains(t, E);
          }
        : function () {
            return !0;
          });
    var b,
      w = "resize.webflow orientationchange.webflow load.webflow";
    function T(t, e) {
      var n = [],
        r = {};
      return (
        (r.up = f.throttle(function (t) {
          f.each(n, function (e) {
            e(t);
          });
        })),
        t && e && t.on(e, r.up),
        (r.on = function (t) {
          "function" == typeof t && (f.contains(n, t) || n.push(t));
        }),
        (r.off = function (t) {
          n = arguments.length
            ? f.filter(n, function (e) {
                return e !== t;
              })
            : [];
        }),
        r
      );
    }
    function O(t) {
      l(t) && t();
    }
    function A() {
      b && (b.reject(), c.off("load", b.resolve)),
        (b = new u.Deferred()),
        c.on("load", b.resolve);
    }
    (r.resize = T(c, w)),
      (r.scroll = T(
        c,
        "scroll.webflow resize.webflow orientationchange.webflow load.webflow"
      )),
      (r.redraw = T()),
      (r.location = function (t) {
        window.location = t;
      }),
      r.env() && (r.location = function () {}),
      (r.ready = function () {
        (p = !0),
          v ? ((v = !1), f.each(i, h)) : f.each(o, O),
          f.each(a, O),
          r.resize.up();
      }),
      (r.load = function (t) {
        b.then(t);
      }),
      (r.destroy = function (t) {
        (t = t || {}),
          (v = !0),
          c.triggerHandler("__wf_destroy"),
          null != t.domready && (p = t.domready),
          f.each(i, g),
          r.resize.off(),
          r.scroll.off(),
          r.redraw.off(),
          (o = []),
          (a = []),
          "pending" === b.state() && A();
      }),
      u(r.ready),
      A(),
      (t.exports = window.Webflow = r);
  },
  function (t, e, n) {
    "use strict";
    var r = n(15);
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var o = n(171);
    Object.keys(o).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return o[t];
            },
          }));
    });
    var a = n(172);
    Object.keys(a).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return a[t];
            },
          }));
    });
    var u = n(173);
    Object.keys(u).forEach(function (t) {
      "default" !== t &&
        "__esModule" !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return u[t];
            },
          }));
    });
    var c = r(n(174));
    e.IX2EngineActionTypes = c;
    var s = r(n(175));
    e.IX2EngineConstants = s;
  },
  function (t, e, n) {
    (function (e) {
      var n = "object",
        r = function (t) {
          return t && t.Math == Math && t;
        };
      t.exports =
        r(typeof globalThis == n && globalThis) ||
        r(typeof window == n && window) ||
        r(typeof self == n && self) ||
        r(typeof e == n && e) ||
        Function("return this")();
    }.call(this, n(23)));
  },
  function (t, e, n) {
    var r = n(89),
      i = "object" == typeof self && self && self.Object === Object && self,
      o = r || i || Function("return this")();
    t.exports = o;
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    };
  },
  function (t, e, n) {
    var r = n(178),
      i = n(232),
      o = n(59),
      a = n(1),
      u = n(241);
    t.exports = function (t) {
      return "function" == typeof t
        ? t
        : null == t
        ? o
        : "object" == typeof t
        ? a(t)
          ? i(t[0], t[1])
          : r(t)
        : u(t);
    };
  },
  function (t, e, n) {
    var r = n(190),
      i = n(195);
    t.exports = function (t, e) {
      var n = i(t, e);
      return r(n) ? n : void 0;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return null != t && "object" == typeof t;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(15);
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.IX2VanillaUtils =
        e.IX2VanillaPlugins =
        e.IX2ElementsReducer =
        e.IX2EasingUtils =
        e.IX2Easings =
        e.IX2BrowserSupport =
          void 0);
    var i = r(n(44));
    e.IX2BrowserSupport = i;
    var o = r(n(106));
    e.IX2Easings = o;
    var a = r(n(108));
    e.IX2EasingUtils = a;
    var u = r(n(248));
    e.IX2ElementsReducer = u;
    var c = r(n(110));
    e.IX2VanillaPlugins = c;
    var s = r(n(250));
    e.IX2VanillaUtils = s;
  },
  function (t, e, n) {
    var r = n(21),
      i = n(191),
      o = n(192),
      a = "[object Null]",
      u = "[object Undefined]",
      c = r ? r.toStringTag : void 0;
    t.exports = function (t) {
      return null == t
        ? void 0 === t
          ? u
          : a
        : c && c in Object(t)
        ? i(t)
        : o(t);
    };
  },
  function (t, e, n) {
    var r = n(88),
      i = n(52);
    t.exports = function (t) {
      return null != t && i(t.length) && !r(t);
    };
  },
  function (t, e) {
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function r(e) {
      return (
        "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
          ? (t.exports = r =
              function (t) {
                return n(t);
              })
          : (t.exports = r =
              function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : n(t);
              }),
        r(e)
      );
    }
    t.exports = r;
  },
  function (t, e, n) {
    "use strict";
    var r = n(125);
    function i(t, e) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
    }
    var o = window.jQuery,
      a = {},
      u = {
        reset: function (t, e) {
          r.triggers.reset(t, e);
        },
        intro: function (t, e) {
          r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE");
        },
        outro: function (t, e) {
          r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE");
        },
      };
    (a.triggers = {}),
      (a.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
      o.extend(a.triggers, u),
      (t.exports = a);
  },
  function (t, e) {
    t.exports = function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var n in t)
          if (Object.prototype.hasOwnProperty.call(t, n)) {
            var r =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(t, n)
                : {};
            r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
          }
      return (e.default = t), e;
    };
  },
  function (t, e, n) {
    var r = n(17);
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = n(38),
      o = n(67);
    t.exports = r
      ? function (t, e, n) {
          return i.f(t, e, o(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    (e.clone = c),
      (e.addLast = f),
      (e.addFirst = d),
      (e.removeLast = p),
      (e.removeFirst = v),
      (e.insert = h),
      (e.removeAt = g),
      (e.replaceAt = E),
      (e.getIn = m),
      (e.set = y),
      (e.setIn = _),
      (e.update = I),
      (e.updateIn = b),
      (e.merge = w),
      (e.mergeDeep = T),
      (e.mergeIn = O),
      (e.omit = A),
      (e.addDefaults = x);
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";
    function o(t) {
      throw new Error(t);
    }
    function a(t) {
      var e = Object.keys(t);
      return Object.getOwnPropertySymbols
        ? e.concat(Object.getOwnPropertySymbols(t))
        : e;
    }
    var u = {}.hasOwnProperty;
    function c(t) {
      if (Array.isArray(t)) return t.slice();
      for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
        var i = e[r];
        n[i] = t[i];
      }
      return n;
    }
    function s(t, e, n) {
      var r = n;
      null == r && o(i);
      for (
        var u = !1, f = arguments.length, d = Array(f > 3 ? f - 3 : 0), p = 3;
        p < f;
        p++
      )
        d[p - 3] = arguments[p];
      for (var v = 0; v < d.length; v++) {
        var h = d[v];
        if (null != h) {
          var g = a(h);
          if (g.length)
            for (var E = 0; E <= g.length; E++) {
              var m = g[E];
              if (!t || void 0 === r[m]) {
                var y = h[m];
                e && l(r[m]) && l(y) && (y = s(t, e, r[m], y)),
                  void 0 !== y &&
                    y !== r[m] &&
                    (u || ((u = !0), (r = c(r))), (r[m] = y));
              }
            }
        }
      }
      return r;
    }
    function l(t) {
      var e = void 0 === t ? "undefined" : r(t);
      return null != t && ("object" === e || "function" === e);
    }
    function f(t, e) {
      return Array.isArray(e) ? t.concat(e) : t.concat([e]);
    }
    function d(t, e) {
      return Array.isArray(e) ? e.concat(t) : [e].concat(t);
    }
    function p(t) {
      return t.length ? t.slice(0, t.length - 1) : t;
    }
    function v(t) {
      return t.length ? t.slice(1) : t;
    }
    function h(t, e, n) {
      return t
        .slice(0, e)
        .concat(Array.isArray(n) ? n : [n])
        .concat(t.slice(e));
    }
    function g(t, e) {
      return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
    }
    function E(t, e, n) {
      if (t[e] === n) return t;
      for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
      return (i[e] = n), i;
    }
    function m(t, e) {
      if ((!Array.isArray(e) && o(i), null != t)) {
        for (var n = t, r = 0; r < e.length; r++) {
          var a = e[r];
          if (void 0 === (n = null != n ? n[a] : void 0)) return n;
        }
        return n;
      }
    }
    function y(t, e, n) {
      var r = null == t ? ("number" == typeof e ? [] : {}) : t;
      if (r[e] === n) return r;
      var i = c(r);
      return (i[e] = n), i;
    }
    function _(t, e, n) {
      return e.length
        ? (function t(e, n, r, i) {
            var o = void 0,
              a = n[i];
            o =
              i === n.length - 1
                ? r
                : t(
                    l(e) && l(e[a])
                      ? e[a]
                      : "number" == typeof n[i + 1]
                      ? []
                      : {},
                    n,
                    r,
                    i + 1
                  );
            return y(e, a, o);
          })(t, e, n, 0)
        : n;
    }
    function I(t, e, n) {
      return y(t, e, n(null == t ? void 0 : t[e]));
    }
    function b(t, e, n) {
      return _(t, e, n(m(t, e)));
    }
    function w(t, e, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u))
        : s(!1, !1, t, e, n, r, i, o);
    }
    function T(t, e, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u))
        : s(!1, !0, t, e, n, r, i, o);
    }
    function O(t, e, n, r, i, o, a) {
      var u = m(t, e);
      null == u && (u = {});
      for (
        var c = arguments.length, l = Array(c > 7 ? c - 7 : 0), f = 7;
        f < c;
        f++
      )
        l[f - 7] = arguments[f];
      return _(
        t,
        e,
        l.length
          ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(l))
          : s(!1, !1, u, n, r, i, o, a)
      );
    }
    function A(t, e) {
      for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
        if (u.call(t, n[i])) {
          r = !0;
          break;
        }
      if (!r) return t;
      for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
        var l = c[s];
        n.indexOf(l) >= 0 || (o[l] = t[l]);
      }
      return o;
    }
    function x(t, e, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u))
        : s(!0, !1, t, e, n, r, i, o);
    }
    var S = {
      clone: c,
      addLast: f,
      addFirst: d,
      removeLast: p,
      removeFirst: v,
      insert: h,
      removeAt: g,
      replaceAt: E,
      getIn: m,
      set: y,
      setIn: _,
      update: I,
      updateIn: b,
      merge: w,
      mergeDeep: T,
      mergeIn: O,
      omit: A,
      addDefaults: x,
    };
    e.default = S;
  },
  function (t, e, n) {
    var r = n(5).Symbol;
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(36),
      i = 1 / 0;
    t.exports = function (t) {
      if ("string" == typeof t || r(t)) return t;
      var e = t + "";
      return "0" == e && 1 / t == -i ? "-0" : e;
    };
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, n) {
    var r = n(24);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(4),
      i = n(39),
      o = n(137),
      a = r["__core-js_shared__"] || i("__core-js_shared__", {});
    (t.exports = function (t, e) {
      return a[t] || (a[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.1.3",
      mode: o ? "pure" : "global",
      copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    };
  },
  function (t, e) {
    function n() {
      return (
        (t.exports = n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }),
        n.apply(this, arguments)
      );
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(180),
      i = n(181),
      o = n(182),
      a = n(183),
      u = n(184);
    function c(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (t.exports = c);
  },
  function (t, e, n) {
    var r = n(45);
    t.exports = function (t, e) {
      for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
      return -1;
    };
  },
  function (t, e, n) {
    var r = n(8)(Object, "create");
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(204);
    t.exports = function (t, e) {
      var n = t.__data__;
      return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
    };
  },
  function (t, e, n) {
    var r = n(96),
      i = n(53),
      o = n(12);
    t.exports = function (t) {
      return o(t) ? r(t) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(222),
      i = n(9),
      o = Object.prototype,
      a = o.hasOwnProperty,
      u = o.propertyIsEnumerable,
      c = r(
        (function () {
          return arguments;
        })()
      )
        ? r
        : function (t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee");
          };
    t.exports = c;
  },
  function (t, e, n) {
    var r = n(1),
      i = n(58),
      o = n(233),
      a = n(236);
    t.exports = function (t, e) {
      return r(t) ? t : i(t, e) ? [t] : o(a(t));
    };
  },
  function (t, e, n) {
    var r = n(11),
      i = n(9),
      o = "[object Symbol]";
    t.exports = function (t) {
      return "symbol" == typeof t || (i(t) && r(t) == o);
    };
  },
  function (t, e, n) {
    var r = n(133),
      i = n(135);
    t.exports = function (t) {
      return r(i(t));
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = n(69),
      o = n(25),
      a = n(68),
      u = Object.defineProperty;
    e.f = r
      ? u
      : function (t, e, n) {
          if ((o(t), (e = a(e, !0)), o(n), i))
            try {
              return u(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function (t, e, n) {
    var r = n(4),
      i = n(19);
    t.exports = function (t, e) {
      try {
        i(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "ActionTypes", function () {
        return o;
      }),
      n.d(e, "default", function () {
        return a;
      });
    var r = n(79),
      i = n(166),
      o = { INIT: "@@redux/INIT" };
    function a(t, e, n) {
      var u;
      if (
        ("function" == typeof e && void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n)
      ) {
        if ("function" != typeof n)
          throw new Error("Expected the enhancer to be a function.");
        return n(a)(t, e);
      }
      if ("function" != typeof t)
        throw new Error("Expected the reducer to be a function.");
      var c = t,
        s = e,
        l = [],
        f = l,
        d = !1;
      function p() {
        f === l && (f = l.slice());
      }
      function v() {
        return s;
      }
      function h(t) {
        if ("function" != typeof t)
          throw new Error("Expected listener to be a function.");
        var e = !0;
        return (
          p(),
          f.push(t),
          function () {
            if (e) {
              (e = !1), p();
              var n = f.indexOf(t);
              f.splice(n, 1);
            }
          }
        );
      }
      function g(t) {
        if (!Object(r.default)(t))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (void 0 === t.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (d) throw new Error("Reducers may not dispatch actions.");
        try {
          (d = !0), (s = c(s, t));
        } finally {
          d = !1;
        }
        for (var e = (l = f), n = 0; n < e.length; n++) e[n]();
        return t;
      }
      return (
        g({ type: o.INIT }),
        ((u = {
          dispatch: g,
          subscribe: h,
          getState: v,
          replaceReducer: function (t) {
            if ("function" != typeof t)
              throw new Error("Expected the nextReducer to be a function.");
            (c = t), g({ type: o.INIT });
          },
        })[i.default] = function () {
          var t,
            e = h;
          return (
            ((t = {
              subscribe: function (t) {
                if ("object" != typeof t)
                  throw new TypeError("Expected the observer to be an object.");
                function n() {
                  t.next && t.next(v());
                }
                return n(), { unsubscribe: e(n) };
              },
            })[i.default] = function () {
              return this;
            }),
            t
          );
        }),
        u
      );
    }
  },
  function (t, e, n) {
    "use strict";
    function r() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      if (0 === e.length)
        return function (t) {
          return t;
        };
      if (1 === e.length) return e[0];
      var r = e[e.length - 1],
        i = e.slice(0, -1);
      return function () {
        return i.reduceRight(function (t, e) {
          return e(t);
        }, r.apply(void 0, arguments));
      };
    }
    n.r(e),
      n.d(e, "default", function () {
        return r;
      });
  },
  function (t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TRANSFORM_STYLE_PREFIXED =
        e.TRANSFORM_PREFIXED =
        e.FLEX_PREFIXED =
        e.ELEMENT_MATCHES =
        e.withBrowser =
        e.IS_BROWSER_ENV =
          void 0);
    var i = r(n(85)),
      o = "undefined" != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function (t, e) {
      return o ? t() : e;
    };
    e.withBrowser = a;
    var u = a(function () {
      return (0,
      i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
        return t in Element.prototype;
      });
    });
    e.ELEMENT_MATCHES = u;
    var c = a(function () {
      var t = document.createElement("i"),
        e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
      try {
        for (var n = e.length, r = 0; r < n; r++) {
          var i = e[r];
          if (((t.style.display = i), t.style.display === i)) return i;
        }
        return "";
      } catch (t) {
        return "";
      }
    }, "flex");
    e.FLEX_PREFIXED = c;
    var s = a(function () {
      var t = document.createElement("i");
      if (null == t.style.transform)
        for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
          var i = e[r] + "Transform";
          if (void 0 !== t.style[i]) return i;
        }
      return "transform";
    }, "transform");
    e.TRANSFORM_PREFIXED = s;
    var l = s.split("transform")[0],
      f = l ? l + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = f;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t === e || (t != t && e != e);
    };
  },
  function (t, e, n) {
    var r = n(8)(n(5), "Map");
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(196),
      i = n(203),
      o = n(205),
      a = n(206),
      u = n(207);
    function c(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (t.exports = c);
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
      return t;
    };
  },
  function (t, e, n) {
    (function (t) {
      var r = n(5),
        i = n(223),
        o = e && !e.nodeType && e,
        a = o && "object" == typeof t && t && !t.nodeType && t,
        u = a && a.exports === o ? r.Buffer : void 0,
        c = (u ? u.isBuffer : void 0) || i;
      t.exports = c;
    }.call(this, n(97)(t)));
  },
  function (t, e) {
    var n = 9007199254740991,
      r = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, e) {
      var i = typeof t;
      return (
        !!(e = null == e ? n : e) &&
        ("number" == i || ("symbol" != i && r.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    };
  },
  function (t, e, n) {
    var r = n(224),
      i = n(225),
      o = n(226),
      a = o && o.isTypedArray,
      u = a ? i(a) : r;
    t.exports = u;
  },
  function (t, e) {
    var n = 9007199254740991;
    t.exports = function (t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
    };
  },
  function (t, e, n) {
    var r = n(54),
      i = n(227),
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!r(t)) return i(t);
      var e = [];
      for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
      return e;
    };
  },
  function (t, e) {
    var n = Object.prototype;
    t.exports = function (t) {
      var e = t && t.constructor;
      return t === (("function" == typeof e && e.prototype) || n);
    };
  },
  function (t, e, n) {
    var r = n(228),
      i = n(46),
      o = n(229),
      a = n(230),
      u = n(99),
      c = n(11),
      s = n(90),
      l = s(r),
      f = s(i),
      d = s(o),
      p = s(a),
      v = s(u),
      h = c;
    ((r && "[object DataView]" != h(new r(new ArrayBuffer(1)))) ||
      (i && "[object Map]" != h(new i())) ||
      (o && "[object Promise]" != h(o.resolve())) ||
      (a && "[object Set]" != h(new a())) ||
      (u && "[object WeakMap]" != h(new u()))) &&
      (h = function (t) {
        var e = c(t),
          n = "[object Object]" == e ? t.constructor : void 0,
          r = n ? s(n) : "";
        if (r)
          switch (r) {
            case l:
              return "[object DataView]";
            case f:
              return "[object Map]";
            case d:
              return "[object Promise]";
            case p:
              return "[object Set]";
            case v:
              return "[object WeakMap]";
          }
        return e;
      }),
      (t.exports = h);
  },
  function (t, e, n) {
    var r = n(57);
    t.exports = function (t, e, n) {
      var i = null == t ? void 0 : r(t, e);
      return void 0 === i ? n : i;
    };
  },
  function (t, e, n) {
    var r = n(35),
      i = n(22);
    t.exports = function (t, e) {
      for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; )
        t = t[i(e[n++])];
      return n && n == o ? t : void 0;
    };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(36),
      o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    t.exports = function (t, e) {
      if (r(t)) return !1;
      var n = typeof t;
      return (
        !(
          "number" != n &&
          "symbol" != n &&
          "boolean" != n &&
          null != t &&
          !i(t)
        ) ||
        a.test(t) ||
        !o.test(t) ||
        (null != e && t in Object(e))
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t;
    };
  },
  function (t, e, n) {
    var r = n(6),
      i = n(36),
      o = NaN,
      a = /^\s+|\s+$/g,
      u = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      s = /^0o[0-7]+$/i,
      l = parseInt;
    t.exports = function (t) {
      if ("number" == typeof t) return t;
      if (i(t)) return o;
      if (r(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = r(e) ? e + "" : e;
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = t.replace(a, "");
      var n = c.test(t);
      return n || s.test(t) ? l(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.mediaQueriesDefined =
        e.viewportWidthChanged =
        e.actionListPlaybackChanged =
        e.elementStateChanged =
        e.instanceRemoved =
        e.instanceStarted =
        e.instanceAdded =
        e.parameterChanged =
        e.animationFrameChanged =
        e.eventStateChanged =
        e.testFrameRendered =
        e.eventListenerAdded =
        e.clearRequested =
        e.stopRequested =
        e.playbackRequested =
        e.previewRequested =
        e.sessionStopped =
        e.sessionStarted =
        e.sessionInitialized =
        e.rawDataImported =
          void 0);
    var i = r(n(28)),
      o = n(3),
      a = n(10),
      u = o.IX2EngineActionTypes,
      c = u.IX2_RAW_DATA_IMPORTED,
      s = u.IX2_SESSION_INITIALIZED,
      l = u.IX2_SESSION_STARTED,
      f = u.IX2_SESSION_STOPPED,
      d = u.IX2_PREVIEW_REQUESTED,
      p = u.IX2_PLAYBACK_REQUESTED,
      v = u.IX2_STOP_REQUESTED,
      h = u.IX2_CLEAR_REQUESTED,
      g = u.IX2_EVENT_LISTENER_ADDED,
      E = u.IX2_TEST_FRAME_RENDERED,
      m = u.IX2_EVENT_STATE_CHANGED,
      y = u.IX2_ANIMATION_FRAME_CHANGED,
      _ = u.IX2_PARAMETER_CHANGED,
      I = u.IX2_INSTANCE_ADDED,
      b = u.IX2_INSTANCE_STARTED,
      w = u.IX2_INSTANCE_REMOVED,
      T = u.IX2_ELEMENT_STATE_CHANGED,
      O = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      A = u.IX2_VIEWPORT_WIDTH_CHANGED,
      x = u.IX2_MEDIA_QUERIES_DEFINED,
      S = a.IX2VanillaUtils.reifyState;
    e.rawDataImported = function (t) {
      return { type: c, payload: (0, i.default)({}, S(t)) };
    };
    e.sessionInitialized = function (t) {
      var e = t.hasBoundaryNodes;
      return { type: s, payload: { hasBoundaryNodes: e } };
    };
    e.sessionStarted = function () {
      return { type: l };
    };
    e.sessionStopped = function () {
      return { type: f };
    };
    e.previewRequested = function (t) {
      var e = t.rawData,
        n = t.defer;
      return { type: d, payload: { defer: n, rawData: e } };
    };
    e.playbackRequested = function (t) {
      var e = t.actionTypeId,
        n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
        r = t.actionListId,
        i = t.actionItemId,
        a = t.eventId,
        u = t.allowEvents,
        c = t.immediate,
        s = t.testManual,
        l = t.verbose,
        f = t.rawData;
      return {
        type: p,
        payload: {
          actionTypeId: n,
          actionListId: r,
          actionItemId: i,
          testManual: s,
          eventId: a,
          allowEvents: u,
          immediate: c,
          verbose: l,
          rawData: f,
        },
      };
    };
    e.stopRequested = function (t) {
      return { type: v, payload: { actionListId: t } };
    };
    e.clearRequested = function () {
      return { type: h };
    };
    e.eventListenerAdded = function (t, e) {
      return { type: g, payload: { target: t, listenerParams: e } };
    };
    e.testFrameRendered = function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return { type: E, payload: { step: t } };
    };
    e.eventStateChanged = function (t, e) {
      return { type: m, payload: { stateKey: t, newState: e } };
    };
    e.animationFrameChanged = function (t, e) {
      return { type: y, payload: { now: t, parameters: e } };
    };
    e.parameterChanged = function (t, e) {
      return { type: _, payload: { key: t, value: e } };
    };
    e.instanceAdded = function (t) {
      return { type: I, payload: (0, i.default)({}, t) };
    };
    e.instanceStarted = function (t, e) {
      return { type: b, payload: { instanceId: t, time: e } };
    };
    e.instanceRemoved = function (t) {
      return { type: w, payload: { instanceId: t } };
    };
    e.elementStateChanged = function (t, e, n, r) {
      return {
        type: T,
        payload: { elementId: t, actionTypeId: e, current: n, actionItem: r },
      };
    };
    e.actionListPlaybackChanged = function (t) {
      var e = t.actionListId,
        n = t.isPlaying;
      return { type: O, payload: { actionListId: e, isPlaying: n } };
    };
    e.viewportWidthChanged = function (t) {
      var e = t.width,
        n = t.mediaQueries;
      return { type: A, payload: { width: e, mediaQueries: n } };
    };
    e.mediaQueriesDefined = function () {
      return { type: x };
    };
  },
  function (t, e, n) {
    var r = n(117),
      i = n(63);
    function o(t, e) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__chain__ = !!e),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    (o.prototype = r(i.prototype)),
      (o.prototype.constructor = o),
      (t.exports = o);
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e, n) {
    var r = n(117),
      i = n(63),
      o = 4294967295;
    function a(t) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = o),
        (this.__views__ = []);
    }
    (a.prototype = r(i.prototype)),
      (a.prototype.constructor = a),
      (t.exports = a);
  },
  function (t, e, n) {
    "use strict";
    var r = n(0)(n(13));
    window.tram = (function (t) {
      function e(t, e) {
        return new F.Bare().init(t, e);
      }
      function n(t) {
        return t.replace(/[A-Z]/g, function (t) {
          return "-" + t.toLowerCase();
        });
      }
      function i(t) {
        var e = parseInt(t.slice(1), 16);
        return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
      }
      function o(t, e, n) {
        return (
          "#" + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1)
        );
      }
      function a() {}
      function u(t, e, n) {
        s("Units do not match [" + t + "]: " + e + ", " + n);
      }
      function c(t, e, n) {
        if ((void 0 !== e && (n = e), void 0 === t)) return n;
        var r = n;
        return (
          $.test(t) || !Z.test(t)
            ? (r = parseInt(t, 10))
            : Z.test(t) && (r = 1e3 * parseFloat(t)),
          0 > r && (r = 0),
          r == r ? r : n
        );
      }
      function s(t) {
        H.debug && window && window.console.warn(t);
      }
      var l = (function (t, e, n) {
          function i(t) {
            return "object" == (0, r.default)(t);
          }
          function o(t) {
            return "function" == typeof t;
          }
          function a() {}
          return function r(u, c) {
            function s() {
              var t = new l();
              return o(t.init) && t.init.apply(t, arguments), t;
            }
            function l() {}
            c === n && ((c = u), (u = Object)), (s.Bare = l);
            var f,
              d = (a[t] = u[t]),
              p = (l[t] = s[t] = new a());
            return (
              (p.constructor = s),
              (s.mixin = function (e) {
                return (l[t] = s[t] = r(s, e)[t]), s;
              }),
              (s.open = function (t) {
                if (
                  ((f = {}),
                  o(t) ? (f = t.call(s, p, d, s, u)) : i(t) && (f = t),
                  i(f))
                )
                  for (var n in f) e.call(f, n) && (p[n] = f[n]);
                return o(p.init) || (p.init = u), s;
              }),
              s.open(c)
            );
          };
        })("prototype", {}.hasOwnProperty),
        f = {
          ease: [
            "ease",
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return (
                e +
                n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * t)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
            },
          ],
          "ease-out": [
            "ease-out",
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return (
                e +
                n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
            },
          ],
          linear: [
            "linear",
            function (t, e, n, r) {
              return (n * t) / r + e;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (t, e, n, r) {
              return n * (t /= r) * t + e;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (t, e, n, r) {
              return -n * (t /= r) * (t - 2) + e;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t + e
                : (-n / 2) * (--t * (t - 2) - 1) + e;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (t, e, n, r) {
              return n * (t /= r) * t * t + e;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (t, e, n, r) {
              return n * ((t = t / r - 1) * t * t + 1) + e;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t + e
                : (n / 2) * ((t -= 2) * t * t + 2) + e;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (t, e, n, r) {
              return n * (t /= r) * t * t * t + e;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (t, e, n, r) {
              return -n * ((t = t / r - 1) * t * t * t - 1) + e;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t * t + e
                : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (t, e, n, r) {
              return n * (t /= r) * t * t * t * t + e;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (t, e, n, r) {
              return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t * t * t + e
                : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (t, e, n, r) {
              return -n * Math.cos((t / r) * (Math.PI / 2)) + n + e;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (t, e, n, r) {
              return n * Math.sin((t / r) * (Math.PI / 2)) + e;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (t, e, n, r) {
              return (-n / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (t, e, n, r) {
              return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (t, e, n, r) {
              return t === r ? e + n : n * (1 - Math.pow(2, (-10 * t) / r)) + e;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (t, e, n, r) {
              return 0 === t
                ? e
                : t === r
                ? e + n
                : (t /= r / 2) < 1
                ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
                : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (t, e, n, r) {
              return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (t, e, n, r) {
              return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
                : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                n * (t /= r) * t * ((i + 1) * t - i) + e
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                (t /= r / 2) < 1
                  ? (n / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e
                  : (n / 2) *
                      ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) +
                    e
              );
            },
          ],
        },
        d = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        p = document,
        v = window,
        h = "bkwld-tram",
        g = /[\-\.0-9]/g,
        E = /[A-Z]/,
        m = "number",
        y = /^(rgb|#)/,
        _ = /(em|cm|mm|in|pt|pc|px)$/,
        I = /(em|cm|mm|in|pt|pc|px|%)$/,
        b = /(deg|rad|turn)$/,
        w = "unitless",
        T = /(all|none) 0s ease 0s/,
        O = /^(width|height)$/,
        A = " ",
        x = p.createElement("a"),
        S = ["Webkit", "Moz", "O", "ms"],
        R = ["-webkit-", "-moz-", "-o-", "-ms-"],
        C = function (t) {
          if (t in x.style) return { dom: t, css: t };
          var e,
            n,
            r = "",
            i = t.split("-");
          for (e = 0; e < i.length; e++)
            r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
          for (e = 0; e < S.length; e++)
            if ((n = S[e] + r) in x.style) return { dom: n, css: R[e] + t };
        },
        N = (e.support = {
          bind: Function.prototype.bind,
          transform: C("transform"),
          transition: C("transition"),
          backface: C("backface-visibility"),
          timing: C("transition-timing-function"),
        });
      if (N.transition) {
        var L = N.timing.dom;
        if (((x.style[L] = f["ease-in-back"][0]), !x.style[L]))
          for (var D in d) f[D][0] = d[D];
      }
      var P = (e.frame = (function () {
          var t =
            v.requestAnimationFrame ||
            v.webkitRequestAnimationFrame ||
            v.mozRequestAnimationFrame ||
            v.oRequestAnimationFrame ||
            v.msRequestAnimationFrame;
          return t && N.bind
            ? t.bind(v)
            : function (t) {
                v.setTimeout(t, 16);
              };
        })()),
        M = (e.now = (function () {
          var t = v.performance,
            e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
          return e && N.bind
            ? e.bind(t)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        j = l(function (e) {
          function i(t, e) {
            var n = (function (t) {
                for (var e = -1, n = t ? t.length : 0, r = []; ++e < n; ) {
                  var i = t[e];
                  i && r.push(i);
                }
                return r;
              })(("" + t).split(A)),
              r = n[0];
            e = e || {};
            var i = Q[r];
            if (!i) return s("Unsupported property: " + r);
            if (!e.weak || !this.props[r]) {
              var o = i[0],
                a = this.props[r];
              return (
                a || (a = this.props[r] = new o.Bare()),
                a.init(this.$el, n, i, e),
                a
              );
            }
          }
          function o(t, e, n) {
            if (t) {
              var o = (0, r.default)(t);
              if (
                (e ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                "number" == o && e)
              )
                return (
                  (this.timer = new W({
                    duration: t,
                    context: this,
                    complete: a,
                  })),
                  void (this.active = !0)
                );
              if ("string" == o && e) {
                switch (t) {
                  case "hide":
                    l.call(this);
                    break;
                  case "stop":
                    u.call(this);
                    break;
                  case "redraw":
                    f.call(this);
                    break;
                  default:
                    i.call(this, t, n && n[1]);
                }
                return a.call(this);
              }
              if ("function" == o) return void t.call(this, this);
              if ("object" == o) {
                var s = 0;
                p.call(
                  this,
                  t,
                  function (t, e) {
                    t.span > s && (s = t.span), t.stop(), t.animate(e);
                  },
                  function (t) {
                    "wait" in t && (s = c(t.wait, 0));
                  }
                ),
                  d.call(this),
                  s > 0 &&
                    ((this.timer = new W({ duration: s, context: this })),
                    (this.active = !0),
                    e && (this.timer.complete = a));
                var v = this,
                  h = !1,
                  g = {};
                P(function () {
                  p.call(v, t, function (t) {
                    t.active && ((h = !0), (g[t.name] = t.nextStyle));
                  }),
                    h && v.$el.css(g);
                });
              }
            }
          }
          function a() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var t = this.queue.shift();
              o.call(this, t.options, !0, t.args);
            }
          }
          function u(t) {
            var e;
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1),
              "string" == typeof t
                ? ((e = {})[t] = 1)
                : (e =
                    "object" == (0, r.default)(t) && null != t
                      ? t
                      : this.props),
              p.call(this, e, v),
              d.call(this);
          }
          function l() {
            u.call(this), (this.el.style.display = "none");
          }
          function f() {
            this.el.offsetHeight;
          }
          function d() {
            var t,
              e,
              n = [];
            for (t in (this.upstream && n.push(this.upstream), this.props))
              (e = this.props[t]).active && n.push(e.string);
            (n = n.join(",")),
              this.style !== n &&
                ((this.style = n), (this.el.style[N.transition.dom] = n));
          }
          function p(t, e, r) {
            var o,
              a,
              u,
              c,
              s = e !== v,
              l = {};
            for (o in t)
              (u = t[o]),
                o in q
                  ? (l.transform || (l.transform = {}), (l.transform[o] = u))
                  : (E.test(o) && (o = n(o)),
                    o in Q ? (l[o] = u) : (c || (c = {}), (c[o] = u)));
            for (o in l) {
              if (((u = l[o]), !(a = this.props[o]))) {
                if (!s) continue;
                a = i.call(this, o);
              }
              e.call(this, a, u);
            }
            r && c && r.call(this, c);
          }
          function v(t) {
            t.stop();
          }
          function g(t, e) {
            t.set(e);
          }
          function m(t) {
            this.$el.css(t);
          }
          function y(t, n) {
            e[t] = function () {
              return this.children
                ? function (t, e) {
                    var n,
                      r = this.children.length;
                    for (n = 0; r > n; n++) t.apply(this.children[n], e);
                    return this;
                  }.call(this, n, arguments)
                : (this.el && n.apply(this, arguments), this);
            };
          }
          (e.init = function (e) {
            if (
              ((this.$el = t(e)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              H.keepInherited && !H.fallback)
            ) {
              var n = Y(this.el, "transition");
              n && !T.test(n) && (this.upstream = n);
            }
            N.backface &&
              H.hideBackface &&
              z(this.el, N.backface.css, "hidden");
          }),
            y("add", i),
            y("start", o),
            y("wait", function (t) {
              (t = c(t, 0)),
                this.active
                  ? this.queue.push({ options: t })
                  : ((this.timer = new W({
                      duration: t,
                      context: this,
                      complete: a,
                    })),
                    (this.active = !0));
            }),
            y("then", function (t) {
              return this.active
                ? (this.queue.push({ options: t, args: arguments }),
                  void (this.timer.complete = a))
                : s(
                    "No active transition timer. Use start() or wait() before then()."
                  );
            }),
            y("next", a),
            y("stop", u),
            y("set", function (t) {
              u.call(this, t), p.call(this, t, g, m);
            }),
            y("show", function (t) {
              "string" != typeof t && (t = "block"),
                (this.el.style.display = t);
            }),
            y("hide", l),
            y("redraw", f),
            y("destroy", function () {
              u.call(this),
                t.removeData(this.el, h),
                (this.$el = this.el = null);
            });
        }),
        F = l(j, function (e) {
          function n(e, n) {
            var r = t.data(e, h) || t.data(e, h, new j.Bare());
            return r.el || r.init(e), n ? r.start(n) : r;
          }
          e.init = function (e, r) {
            var i = t(e);
            if (!i.length) return this;
            if (1 === i.length) return n(i[0], r);
            var o = [];
            return (
              i.each(function (t, e) {
                o.push(n(e, r));
              }),
              (this.children = o),
              this
            );
          };
        }),
        k = l(function (t) {
          function e() {
            var t = this.get();
            this.update("auto");
            var e = this.get();
            return this.update(t), e;
          }
          function n(t) {
            var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
            return (e ? o(e[1], e[2], e[3]) : t).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var i = 500,
            a = "ease",
            u = 0;
          (t.init = function (t, e, n, r) {
            (this.$el = t), (this.el = t[0]);
            var o = e[0];
            n[2] && (o = n[2]),
              K[o] && (o = K[o]),
              (this.name = o),
              (this.type = n[1]),
              (this.duration = c(e[1], this.duration, i)),
              (this.ease = (function (t, e, n) {
                return void 0 !== e && (n = e), t in f ? t : n;
              })(e[2], this.ease, a)),
              (this.delay = c(e[3], this.delay, u)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = O.test(this.name)),
              (this.unit = r.unit || this.unit || H.defaultUnit),
              (this.angle = r.angle || this.angle || H.defaultAngle),
              H.fallback || r.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    A +
                    this.duration +
                    "ms" +
                    ("ease" != this.ease ? A + f[this.ease][0] : "") +
                    (this.delay ? A + this.delay + "ms" : "")));
          }),
            (t.set = function (t) {
              (t = this.convert(t, this.type)), this.update(t), this.redraw();
            }),
            (t.transition = function (t) {
              (this.active = !0),
                (t = this.convert(t, this.type)),
                this.auto &&
                  ("auto" == this.el.style[this.name] &&
                    (this.update(this.get()), this.redraw()),
                  "auto" == t && (t = e.call(this))),
                (this.nextStyle = t);
            }),
            (t.fallback = function (t) {
              var n =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (t = this.convert(t, this.type)),
                this.auto &&
                  ("auto" == n && (n = this.convert(this.get(), this.type)),
                  "auto" == t && (t = e.call(this))),
                (this.tween = new V({
                  from: n,
                  to: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (t.get = function () {
              return Y(this.el, this.name);
            }),
            (t.update = function (t) {
              z(this.el, this.name, t);
            }),
            (t.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                z(this.el, this.name, this.get()));
              var t = this.tween;
              t && t.context && t.destroy();
            }),
            (t.convert = function (t, e) {
              if ("auto" == t && this.auto) return t;
              var i,
                o = "number" == typeof t,
                a = "string" == typeof t;
              switch (e) {
                case m:
                  if (o) return t;
                  if (a && "" === t.replace(g, "")) return +t;
                  i = "number(unitless)";
                  break;
                case y:
                  if (a) {
                    if ("" === t && this.original) return this.original;
                    if (e.test(t))
                      return "#" == t.charAt(0) && 7 == t.length ? t : n(t);
                  }
                  i = "hex or rgb string";
                  break;
                case _:
                  if (o) return t + this.unit;
                  if (a && e.test(t)) return t;
                  i = "number(px) or string(unit)";
                  break;
                case I:
                  if (o) return t + this.unit;
                  if (a && e.test(t)) return t;
                  i = "number(px) or string(unit or %)";
                  break;
                case b:
                  if (o) return t + this.angle;
                  if (a && e.test(t)) return t;
                  i = "number(deg) or string(angle)";
                  break;
                case w:
                  if (o) return t;
                  if (a && I.test(t)) return t;
                  i = "number(unitless) or string(unit or %)";
              }
              return (
                (function (t, e) {
                  s(
                    "Type warning: Expected: [" +
                      t +
                      "] Got: [" +
                      (0, r.default)(e) +
                      "] " +
                      e
                  );
                })(i, t),
                t
              );
            }),
            (t.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        X = l(k, function (t, e) {
          t.init = function () {
            e.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), y));
          };
        }),
        G = l(k, function (t, e) {
          (t.init = function () {
            e.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (t.get = function () {
              return this.$el[this.name]();
            }),
            (t.update = function (t) {
              this.$el[this.name](t);
            });
        }),
        U = l(k, function (t, e) {
          function n(t, e) {
            var n, r, i, o, a;
            for (n in t)
              (i = (o = q[n])[0]),
                (r = o[1] || n),
                (a = this.convert(t[n], i)),
                e.call(this, r, a, i);
          }
          (t.init = function () {
            e.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                q.perspective &&
                  H.perspective &&
                  ((this.current.perspective = H.perspective),
                  z(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (t.set = function (t) {
              n.call(this, t, function (t, e) {
                this.current[t] = e;
              }),
                z(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (t.transition = function (t) {
              var e = this.values(t);
              this.tween = new B({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var n,
                r = {};
              for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
              (this.active = !0), (this.nextStyle = this.style(r));
            }),
            (t.fallback = function (t) {
              var e = this.values(t);
              this.tween = new B({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (t.update = function () {
              z(this.el, this.name, this.style(this.current));
            }),
            (t.style = function (t) {
              var e,
                n = "";
              for (e in t) n += e + "(" + t[e] + ") ";
              return n;
            }),
            (t.values = function (t) {
              var e,
                r = {};
              return (
                n.call(this, t, function (t, n, i) {
                  (r[t] = n),
                    void 0 === this.current[t] &&
                      ((e = 0),
                      ~t.indexOf("scale") && (e = 1),
                      (this.current[t] = this.convert(e, i)));
                }),
                r
              );
            });
        }),
        V = l(function (e) {
          function n() {
            var t,
              e,
              r,
              i = c.length;
            if (i) for (P(n), e = M(), t = i; t--; ) (r = c[t]) && r.render(e);
          }
          var r = { ease: f.ease[1], from: 0, to: 1 };
          (e.init = function (t) {
            (this.duration = t.duration || 0), (this.delay = t.delay || 0);
            var e = t.ease || r.ease;
            f[e] && (e = f[e][1]),
              "function" != typeof e && (e = r.ease),
              (this.ease = e),
              (this.update = t.update || a),
              (this.complete = t.complete || a),
              (this.context = t.context || this),
              (this.name = t.name);
            var n = t.from,
              i = t.to;
            void 0 === n && (n = r.from),
              void 0 === i && (i = r.to),
              (this.unit = t.unit || ""),
              "number" == typeof n && "number" == typeof i
                ? ((this.begin = n), (this.change = i - n))
                : this.format(i, n),
              (this.value = this.begin + this.unit),
              (this.start = M()),
              !1 !== t.autoplay && this.play();
          }),
            (e.play = function () {
              var t;
              this.active ||
                (this.start || (this.start = M()),
                (this.active = !0),
                (t = this),
                1 === c.push(t) && P(n));
            }),
            (e.stop = function () {
              var e, n, r;
              this.active &&
                ((this.active = !1),
                (e = this),
                (r = t.inArray(e, c)) >= 0 &&
                  ((n = c.slice(r + 1)),
                  (c.length = r),
                  n.length && (c = c.concat(n))));
            }),
            (e.render = function (t) {
              var e,
                n = t - this.start;
              if (this.delay) {
                if (n <= this.delay) return;
                n -= this.delay;
              }
              if (n < this.duration) {
                var r = this.ease(n, 0, 1, this.duration);
                return (
                  (e = this.startRGB
                    ? (function (t, e, n) {
                        return o(
                          t[0] + n * (e[0] - t[0]),
                          t[1] + n * (e[1] - t[1]),
                          t[2] + n * (e[2] - t[2])
                        );
                      })(this.startRGB, this.endRGB, r)
                    : (function (t) {
                        return Math.round(t * s) / s;
                      })(this.begin + r * this.change)),
                  (this.value = e + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (e = this.endHex || this.begin + this.change),
                (this.value = e + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (e.format = function (t, e) {
              if (((e += ""), "#" == (t += "").charAt(0)))
                return (
                  (this.startRGB = i(e)),
                  (this.endRGB = i(t)),
                  (this.endHex = t),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var n = e.replace(g, "");
                n !== t.replace(g, "") && u("tween", e, t), (this.unit = n);
              }
              (e = parseFloat(e)),
                (t = parseFloat(t)),
                (this.begin = this.value = e),
                (this.change = t - e);
            }),
            (e.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = a);
            });
          var c = [],
            s = 1e3;
        }),
        W = l(V, function (t) {
          (t.init = function (t) {
            (this.duration = t.duration || 0),
              (this.complete = t.complete || a),
              (this.context = t.context),
              this.play();
          }),
            (t.render = function (t) {
              t - this.start < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        B = l(V, function (t, e) {
          (t.init = function (t) {
            var e, n;
            for (e in ((this.context = t.context),
            (this.update = t.update),
            (this.tweens = []),
            (this.current = t.current),
            t.values))
              (n = t.values[e]),
                this.current[e] !== n &&
                  this.tweens.push(
                    new V({
                      name: e,
                      from: this.current[e],
                      to: n,
                      duration: t.duration,
                      delay: t.delay,
                      ease: t.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (t.render = function (t) {
              var e,
                n,
                r = !1;
              for (e = this.tweens.length; e--; )
                (n = this.tweens[e]).context &&
                  (n.render(t), (this.current[n.name] = n.value), (r = !0));
              return r
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (t.destroy = function () {
              if ((e.destroy.call(this), this.tweens)) {
                var t;
                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        H = (e.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !N.transition,
          agentTests: [],
        });
      (e.fallback = function (t) {
        if (!N.transition) return (H.fallback = !0);
        H.agentTests.push("(" + t + ")");
        var e = new RegExp(H.agentTests.join("|"), "i");
        H.fallback = e.test(navigator.userAgent);
      }),
        e.fallback("6.0.[2-5] Safari"),
        (e.tween = function (t) {
          return new V(t);
        }),
        (e.delay = function (t, e, n) {
          return new W({ complete: e, duration: t, context: n });
        }),
        (t.fn.tram = function (t) {
          return e.call(null, this, t);
        });
      var z = t.style,
        Y = t.css,
        K = { transform: N.transform && N.transform.css },
        Q = {
          color: [X, y],
          background: [X, y, "background-color"],
          "outline-color": [X, y],
          "border-color": [X, y],
          "border-top-color": [X, y],
          "border-right-color": [X, y],
          "border-bottom-color": [X, y],
          "border-left-color": [X, y],
          "border-width": [k, _],
          "border-top-width": [k, _],
          "border-right-width": [k, _],
          "border-bottom-width": [k, _],
          "border-left-width": [k, _],
          "border-spacing": [k, _],
          "letter-spacing": [k, _],
          margin: [k, _],
          "margin-top": [k, _],
          "margin-right": [k, _],
          "margin-bottom": [k, _],
          "margin-left": [k, _],
          padding: [k, _],
          "padding-top": [k, _],
          "padding-right": [k, _],
          "padding-bottom": [k, _],
          "padding-left": [k, _],
          "outline-width": [k, _],
          opacity: [k, m],
          top: [k, I],
          right: [k, I],
          bottom: [k, I],
          left: [k, I],
          "font-size": [k, I],
          "text-indent": [k, I],
          "word-spacing": [k, I],
          width: [k, I],
          "min-width": [k, I],
          "max-width": [k, I],
          height: [k, I],
          "min-height": [k, I],
          "max-height": [k, I],
          "line-height": [k, w],
          "scroll-top": [G, m, "scrollTop"],
          "scroll-left": [G, m, "scrollLeft"],
        },
        q = {};
      N.transform &&
        ((Q.transform = [U]),
        (q = {
          x: [I, "translateX"],
          y: [I, "translateY"],
          rotate: [b],
          rotateX: [b],
          rotateY: [b],
          scale: [m],
          scaleX: [m],
          scaleY: [m],
          skew: [b],
          skewX: [b],
          skewY: [b],
        })),
        N.transform &&
          N.backface &&
          ((q.z = [I, "translateZ"]),
          (q.rotateZ = [b]),
          (q.scaleZ = [m]),
          (q.perspective = [_]));
      var $ = /ms/,
        Z = /s|\./;
      return (t.tram = e);
    })(window.jQuery);
  },
  function (t, e, n) {
    var r = n(16),
      i = n(132),
      o = n(67),
      a = n(37),
      u = n(68),
      c = n(18),
      s = n(69),
      l = Object.getOwnPropertyDescriptor;
    e.f = r
      ? l
      : function (t, e) {
          if (((t = a(t)), (e = u(e, !0)), s))
            try {
              return l(t, e);
            } catch (t) {}
          if (c(t, e)) return o(!i.f.call(t, e), t[e]);
        };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, n) {
    var r = n(24);
    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, i;
      if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
        return i;
      if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
      if (!e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = n(17),
      o = n(70);
    t.exports =
      !r &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(4),
      i = n(24),
      o = r.document,
      a = i(o) && i(o.createElement);
    t.exports = function (t) {
      return a ? o.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r = n(26);
    t.exports = r("native-function-to-string", Function.toString);
  },
  function (t, e, n) {
    var r = n(26),
      i = n(73),
      o = r("keys");
    t.exports = function (t) {
      return o[t] || (o[t] = i(t));
    };
  },
  function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++n + r).toString(36)
      );
    };
  },
  function (t, e, n) {
    var r = n(142),
      i = n(4),
      o = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? o(r[t]) || o(i[t])
        : (r[t] && r[t][e]) || (i[t] && i[t][e]);
    };
  },
  function (t, e, n) {
    var r = n(18),
      i = n(37),
      o = n(76).indexOf,
      a = n(40);
    t.exports = function (t, e) {
      var n,
        u = i(t),
        c = 0,
        s = [];
      for (n in u) !r(a, n) && r(u, n) && s.push(n);
      for (; e.length > c; ) r(u, (n = e[c++])) && (~o(s, n) || s.push(n));
      return s;
    };
  },
  function (t, e, n) {
    var r = n(37),
      i = n(144),
      o = n(145),
      a = function (t) {
        return function (e, n, a) {
          var u,
            c = r(e),
            s = i(c.length),
            l = o(a, s);
          if (t && n != n) {
            for (; s > l; ) if ((u = c[l++]) != u) return !0;
          } else
            for (; s > l; l++)
              if ((t || l in c) && c[l] === n) return t || l || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(42);
    n.d(e, "createStore", function () {
      return r.default;
    });
    var i = n(81);
    n.d(e, "combineReducers", function () {
      return i.default;
    });
    var o = n(83);
    n.d(e, "bindActionCreators", function () {
      return o.default;
    });
    var a = n(84);
    n.d(e, "applyMiddleware", function () {
      return a.default;
    });
    var u = n(43);
    n.d(e, "compose", function () {
      return u.default;
    });
    n(82);
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(158),
      i = n(163),
      o = n(165),
      a = "[object Object]",
      u = Function.prototype,
      c = Object.prototype,
      s = u.toString,
      l = c.hasOwnProperty,
      f = s.call(Object);
    e.default = function (t) {
      if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
      var e = Object(i.default)(t);
      if (null === e) return !0;
      var n = l.call(e, "constructor") && e.constructor;
      return "function" == typeof n && n instanceof n && s.call(n) == f;
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(159).default.Symbol;
    e.default = r;
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "default", function () {
        return o;
      });
    var r = n(42);
    n(79), n(82);
    function i(t, e) {
      var n = e && e.type;
      return (
        "Given action " +
        ((n && '"' + n.toString() + '"') || "an action") +
        ', reducer "' +
        t +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function o(t) {
      for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
        var a = e[o];
        0, "function" == typeof t[a] && (n[a] = t[a]);
      }
      var u,
        c = Object.keys(n);
      try {
        !(function (t) {
          Object.keys(t).forEach(function (e) {
            var n = t[e];
            if (void 0 === n(void 0, { type: r.ActionTypes.INIT }))
              throw new Error(
                'Reducer "' +
                  e +
                  '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
              );
            if (
              void 0 ===
              n(void 0, {
                type:
                  "@@redux/PROBE_UNKNOWN_ACTION_" +
                  Math.random().toString(36).substring(7).split("").join("."),
              })
            )
              throw new Error(
                'Reducer "' +
                  e +
                  "\" returned undefined when probed with a random type. Don't try to handle " +
                  r.ActionTypes.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
              );
          });
        })(n);
      } catch (t) {
        u = t;
      }
      return function () {
        var t =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0],
          e = arguments[1];
        if (u) throw u;
        for (var r = !1, o = {}, a = 0; a < c.length; a++) {
          var s = c[a],
            l = n[s],
            f = t[s],
            d = l(f, e);
          if (void 0 === d) {
            var p = i(s, e);
            throw new Error(p);
          }
          (o[s] = d), (r = r || d !== f);
        }
        return r ? o : t;
      };
    }
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      "undefined" != typeof console &&
        "function" == typeof console.error &&
        console.error(t);
      try {
        throw new Error(t);
      } catch (t) {}
    }
    n.r(e),
      n.d(e, "default", function () {
        return r;
      });
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      return function () {
        return e(t.apply(void 0, arguments));
      };
    }
    function i(t, e) {
      if ("function" == typeof t) return r(t, e);
      if ("object" != typeof t || null === t)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (null === t ? "null" : typeof t) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
        var a = n[o],
          u = t[a];
        "function" == typeof u && (i[a] = r(u, e));
      }
      return i;
    }
    n.r(e),
      n.d(e, "default", function () {
        return i;
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "default", function () {
        return o;
      });
    var r = n(43),
      i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
    function o() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return function (t) {
        return function (n, o, a) {
          var u,
            c = t(n, o, a),
            s = c.dispatch,
            l = {
              getState: c.getState,
              dispatch: function (t) {
                return s(t);
              },
            };
          return (
            (u = e.map(function (t) {
              return t(l);
            })),
            (s = r.default.apply(void 0, u)(c.dispatch)),
            i({}, c, { dispatch: s })
          );
        };
      };
    }
  },
  function (t, e, n) {
    var r = n(86)(n(243));
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(7),
      i = n(12),
      o = n(33);
    t.exports = function (t) {
      return function (e, n, a) {
        var u = Object(e);
        if (!i(e)) {
          var c = r(n, 3);
          (e = o(e)),
            (n = function (t) {
              return c(u[t], t, u);
            });
        }
        var s = t(e, n, a);
        return s > -1 ? u[c ? e[s] : s] : void 0;
      };
    };
  },
  function (t, e, n) {
    var r = n(29),
      i = n(185),
      o = n(186),
      a = n(187),
      u = n(188),
      c = n(189);
    function s(t) {
      var e = (this.__data__ = new r(t));
      this.size = e.size;
    }
    (s.prototype.clear = i),
      (s.prototype.delete = o),
      (s.prototype.get = a),
      (s.prototype.has = u),
      (s.prototype.set = c),
      (t.exports = s);
  },
  function (t, e, n) {
    var r = n(11),
      i = n(6),
      o = "[object AsyncFunction]",
      a = "[object Function]",
      u = "[object GeneratorFunction]",
      c = "[object Proxy]";
    t.exports = function (t) {
      if (!i(t)) return !1;
      var e = r(t);
      return e == a || e == u || e == o || e == c;
    };
  },
  function (t, e, n) {
    (function (e) {
      var n = "object" == typeof e && e && e.Object === Object && e;
      t.exports = n;
    }.call(this, n(23)));
  },
  function (t, e) {
    var n = Function.prototype.toString;
    t.exports = function (t) {
      if (null != t) {
        try {
          return n.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    };
  },
  function (t, e, n) {
    var r = n(208),
      i = n(9);
    t.exports = function t(e, n, o, a, u) {
      return (
        e === n ||
        (null == e || null == n || (!i(e) && !i(n))
          ? e != e && n != n
          : r(e, n, o, a, t, u))
      );
    };
  },
  function (t, e, n) {
    var r = n(209),
      i = n(212),
      o = n(213),
      a = 1,
      u = 2;
    t.exports = function (t, e, n, c, s, l) {
      var f = n & a,
        d = t.length,
        p = e.length;
      if (d != p && !(f && p > d)) return !1;
      var v = l.get(t),
        h = l.get(e);
      if (v && h) return v == e && h == t;
      var g = -1,
        E = !0,
        m = n & u ? new r() : void 0;
      for (l.set(t, e), l.set(e, t); ++g < d; ) {
        var y = t[g],
          _ = e[g];
        if (c) var I = f ? c(_, y, g, e, t, l) : c(y, _, g, t, e, l);
        if (void 0 !== I) {
          if (I) continue;
          E = !1;
          break;
        }
        if (m) {
          if (
            !i(e, function (t, e) {
              if (!o(m, e) && (y === t || s(y, t, n, c, l))) return m.push(e);
            })
          ) {
            E = !1;
            break;
          }
        } else if (y !== _ && !s(y, _, n, c, l)) {
          E = !1;
          break;
        }
      }
      return l.delete(t), l.delete(e), E;
    };
  },
  function (t, e, n) {
    var r = n(48),
      i = n(1);
    t.exports = function (t, e, n) {
      var o = e(t);
      return i(t) ? o : r(o, n(t));
    };
  },
  function (t, e, n) {
    var r = n(220),
      i = n(95),
      o = Object.prototype.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols,
      u = a
        ? function (t) {
            return null == t
              ? []
              : ((t = Object(t)),
                r(a(t), function (e) {
                  return o.call(t, e);
                }));
          }
        : i;
    t.exports = u;
  },
  function (t, e) {
    t.exports = function () {
      return [];
    };
  },
  function (t, e, n) {
    var r = n(221),
      i = n(34),
      o = n(1),
      a = n(49),
      u = n(50),
      c = n(51),
      s = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
      var n = o(t),
        l = !n && i(t),
        f = !n && !l && a(t),
        d = !n && !l && !f && c(t),
        p = n || l || f || d,
        v = p ? r(t.length, String) : [],
        h = v.length;
      for (var g in t)
        (!e && !s.call(t, g)) ||
          (p &&
            ("length" == g ||
              (f && ("offset" == g || "parent" == g)) ||
              (d &&
                ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
              u(g, h))) ||
          v.push(g);
      return v;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (n) {
        return t(e(n));
      };
    };
  },
  function (t, e, n) {
    var r = n(8)(n(5), "WeakMap");
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = function (t) {
      return t == t && !r(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (n) {
        return null != n && n[t] === e && (void 0 !== e || t in Object(n));
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
        i[n] = e(t[n], n, t);
      return i;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r) {
      for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
        if (e(t[o], o, t)) return o;
      return -1;
    };
  },
  function (t, e, n) {
    var r = n(244);
    t.exports = function (t) {
      var e = r(t),
        n = e % 1;
      return e == e ? (n ? e - n : e) : 0;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.inQuad = function (t) {
        return Math.pow(t, 2);
      }),
      (e.outQuad = function (t) {
        return -(Math.pow(t - 1, 2) - 1);
      }),
      (e.inOutQuad = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 2);
        return -0.5 * ((t -= 2) * t - 2);
      }),
      (e.inCubic = function (t) {
        return Math.pow(t, 3);
      }),
      (e.outCubic = function (t) {
        return Math.pow(t - 1, 3) + 1;
      }),
      (e.inOutCubic = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 3);
        return 0.5 * (Math.pow(t - 2, 3) + 2);
      }),
      (e.inQuart = function (t) {
        return Math.pow(t, 4);
      }),
      (e.outQuart = function (t) {
        return -(Math.pow(t - 1, 4) - 1);
      }),
      (e.inOutQuart = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 4);
        return -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
      }),
      (e.inQuint = function (t) {
        return Math.pow(t, 5);
      }),
      (e.outQuint = function (t) {
        return Math.pow(t - 1, 5) + 1;
      }),
      (e.inOutQuint = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 5);
        return 0.5 * (Math.pow(t - 2, 5) + 2);
      }),
      (e.inSine = function (t) {
        return 1 - Math.cos(t * (Math.PI / 2));
      }),
      (e.outSine = function (t) {
        return Math.sin(t * (Math.PI / 2));
      }),
      (e.inOutSine = function (t) {
        return -0.5 * (Math.cos(Math.PI * t) - 1);
      }),
      (e.inExpo = function (t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
      }),
      (e.outExpo = function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      }),
      (e.inOutExpo = function (t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
        return 0.5 * (2 - Math.pow(2, -10 * --t));
      }),
      (e.inCirc = function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
      }),
      (e.outCirc = function (t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2));
      }),
      (e.inOutCirc = function (t) {
        if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
        return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      }),
      (e.outBounce = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }),
      (e.inBack = function (t) {
        return t * t * ((o + 1) * t - o);
      }),
      (e.outBack = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1;
      }),
      (e.inOutBack = function (t) {
        var e = o;
        if ((t /= 0.5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * 0.5;
        return 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      }),
      (e.inElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = 0.3);
        r < 1
          ? ((r = 1), (e = n / 4))
          : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
        return (
          -r *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t - e) * (2 * Math.PI)) / n)
        );
      }),
      (e.outElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = 0.3);
        r < 1
          ? ((r = 1), (e = n / 4))
          : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
        return (
          r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1
        );
      }),
      (e.inOutElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        if (0 === t) return 0;
        if (2 == (t /= 0.5)) return 1;
        n || (n = 0.3 * 1.5);
        r < 1
          ? ((r = 1), (e = n / 4))
          : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
        if (t < 1)
          return (
            r *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t - e) * (2 * Math.PI)) / n) *
            -0.5
          );
        return (
          r *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t - e) * (2 * Math.PI)) / n) *
            0.5 +
          1
        );
      }),
      (e.swingFromTo = function (t) {
        var e = o;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      }),
      (e.swingFrom = function (t) {
        return t * t * ((o + 1) * t - o);
      }),
      (e.swingTo = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1;
      }),
      (e.bounce = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }),
      (e.bouncePast = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
          : t < 2.5 / 2.75
          ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
          : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
      }),
      (e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0);
    var i = r(n(107)),
      o = 1.70158,
      a = (0, i.default)(0.25, 0.1, 0.25, 1);
    e.ease = a;
    var u = (0, i.default)(0.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, 0.58, 1);
    e.easeOut = c;
    var s = (0, i.default)(0.42, 0, 0.58, 1);
    e.easeInOut = s;
  },
  function (t, e) {
    var n = 4,
      r = 0.001,
      i = 1e-7,
      o = 10,
      a = 11,
      u = 1 / (a - 1),
      c = "function" == typeof Float32Array;
    function s(t, e) {
      return 1 - 3 * e + 3 * t;
    }
    function l(t, e) {
      return 3 * e - 6 * t;
    }
    function f(t) {
      return 3 * t;
    }
    function d(t, e, n) {
      return ((s(e, n) * t + l(e, n)) * t + f(e)) * t;
    }
    function p(t, e, n) {
      return 3 * s(e, n) * t * t + 2 * l(e, n) * t + f(e);
    }
    t.exports = function (t, e, s, l) {
      if (!(0 <= t && t <= 1 && 0 <= s && s <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var f = c ? new Float32Array(a) : new Array(a);
      if (t !== e || s !== l) for (var v = 0; v < a; ++v) f[v] = d(v * u, t, s);
      function h(e) {
        for (var c = 0, l = 1, v = a - 1; l !== v && f[l] <= e; ++l) c += u;
        var h = c + ((e - f[--l]) / (f[l + 1] - f[l])) * u,
          g = p(h, t, s);
        return g >= r
          ? (function (t, e, r, i) {
              for (var o = 0; o < n; ++o) {
                var a = p(e, r, i);
                if (0 === a) return e;
                e -= (d(e, r, i) - t) / a;
              }
              return e;
            })(e, h, t, s)
          : 0 === g
          ? h
          : (function (t, e, n, r, a) {
              var u,
                c,
                s = 0;
              do {
                (u = d((c = e + (n - e) / 2), r, a) - t) > 0
                  ? (n = c)
                  : (e = c);
              } while (Math.abs(u) > i && ++s < o);
              return c;
            })(e, c, c + u, t, s);
      }
      return function (n) {
        return t === e && s === l
          ? n
          : 0 === n
          ? 0
          : 1 === n
          ? 1
          : d(h(n), e, l);
      };
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0)(n(109)),
      i = n(0),
      o = n(15);
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.optimizeFloat = c),
      (e.createBezierEasing = function (t) {
        return u.default.apply(void 0, (0, r.default)(t));
      }),
      (e.applyEasing = function (t, e, n) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (n) return c(e > 0 ? n(e) : e);
        return c(e > 0 && t && a[t] ? a[t](e) : e);
      });
    var a = o(n(106)),
      u = i(n(107));
    function c(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        r = Math.pow(n, e),
        i = Number(Math.round(t * r) / r);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
  },
  function (t, e, n) {
    var r = n(245),
      i = n(246),
      o = n(247);
    t.exports = function (t) {
      return r(t) || i(t) || o();
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0)(n(27));
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isPluginType = function (t) {
        return t === o.ActionTypeConsts.PLUGIN_LOTTIE;
      }),
      (e.clearPlugin =
        e.renderPlugin =
        e.createPluginInstance =
        e.getPluginDestination =
        e.getPluginDuration =
        e.getPluginOrigin =
        e.getPluginConfig =
          void 0);
    var i = n(249),
      o = n(3),
      a = n(44),
      u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
        getConfig: i.getPluginConfig,
        getOrigin: i.getPluginOrigin,
        getDuration: i.getPluginDuration,
        getDestination: i.getPluginDestination,
        createInstance: i.createPluginInstance,
        render: i.renderPlugin,
        clear: i.clearPlugin,
      });
    var c = function (t) {
        return function (e) {
          if (!a.IS_BROWSER_ENV)
            return function () {
              return null;
            };
          var n = u[e];
          if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
          var r = n[t];
          if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
          return r;
        };
      },
      s = c("getConfig");
    e.getPluginConfig = s;
    var l = c("getOrigin");
    e.getPluginOrigin = l;
    var f = c("getDuration");
    e.getPluginDuration = f;
    var d = c("getDestination");
    e.getPluginDestination = d;
    var p = c("createInstance");
    e.createPluginInstance = p;
    var v = c("render");
    e.renderPlugin = v;
    var h = c("clear");
    e.clearPlugin = h;
  },
  function (t, e, n) {
    var r = n(112),
      i = n(256)(r);
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(254),
      i = n(33);
    t.exports = function (t, e) {
      return t && r(t, e, i);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(260);
    (e.__esModule = !0), (e.default = void 0);
    var i = r(n(261)).default;
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    var r = n(0)(n(109)),
      i = n(15),
      o = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.observeRequests = function (t) {
        P({
          store: t,
          select: function (t) {
            var e = t.ixRequest;
            return e.preview;
          },
          onChange: et,
        }),
          P({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.playback;
            },
            onChange: rt,
          }),
          P({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.stop;
            },
            onChange: it,
          }),
          P({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.clear;
            },
            onChange: ot,
          });
      }),
      (e.startEngine = at),
      (e.stopEngine = ut),
      (e.stopAllActionGroups = ht),
      (e.stopActionGroup = gt),
      (e.startActionGroup = Et);
    var a = o(n(28)),
      u = o(n(264)),
      c = o(n(85)),
      s = o(n(56)),
      l = o(n(265)),
      f = o(n(271)),
      d = o(n(283)),
      p = o(n(284)),
      v = o(n(285)),
      h = o(n(288)),
      g = o(n(113)),
      E = n(3),
      m = n(10),
      y = n(61),
      _ = i(n(291)),
      I = o(n(292)),
      b = Object.keys(E.QuickEffectIds),
      w = function (t) {
        return b.includes(t);
      },
      T = E.IX2EngineConstants,
      O = T.COLON_DELIMITER,
      A = T.BOUNDARY_SELECTOR,
      x = T.HTML_ELEMENT,
      S = T.RENDER_GENERAL,
      R = T.W_MOD_IX,
      C = m.IX2VanillaUtils,
      N = C.getAffectedElements,
      L = C.getElementId,
      D = C.getDestinationValues,
      P = C.observeStore,
      M = C.getInstanceId,
      j = C.renderHTMLElement,
      F = C.clearAllStyles,
      k = C.getMaxDurationItemIndex,
      X = C.getComputedStyle,
      G = C.getInstanceOrigin,
      U = C.reduceListToGroup,
      V = C.shouldNamespaceEventParameter,
      W = C.getNamespacedParameterId,
      B = C.shouldAllowMediaQuery,
      H = C.cleanupHTMLElement,
      z = C.stringifyTarget,
      Y = C.mediaQueriesEqual,
      K = m.IX2VanillaPlugins,
      Q = K.isPluginType,
      q = K.createPluginInstance,
      $ = K.getPluginDuration,
      Z = navigator.userAgent,
      J = Z.match(/iPad/i) || Z.match(/iPhone/),
      tt = 12;
    function et(t, e) {
      var n = t.rawData,
        r = function () {
          at({ store: e, rawData: n, allowEvents: !0 }), nt();
        };
      t.defer ? setTimeout(r, 0) : r();
    }
    function nt() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function rt(t, e) {
      var n = t.actionTypeId,
        r = t.actionListId,
        i = t.actionItemId,
        o = t.eventId,
        a = t.allowEvents,
        u = t.immediate,
        c = t.testManual,
        s = t.verbose,
        l = void 0 === s || s,
        f = t.rawData;
      if (r && i && f && u) {
        var d = f.actionLists[r];
        d && (f = U({ actionList: d, actionItemId: i, rawData: f }));
      }
      if (
        (at({ store: e, rawData: f, allowEvents: a, testManual: c }),
        (r && n === E.ActionTypeConsts.GENERAL_START_ACTION) || w(n))
      ) {
        gt({ store: e, actionListId: r }),
          vt({ store: e, actionListId: r, eventId: o });
        var p = Et({
          store: e,
          eventId: o,
          actionListId: r,
          immediate: u,
          verbose: l,
        });
        l &&
          p &&
          e.dispatch(
            (0, y.actionListPlaybackChanged)({ actionListId: r, isPlaying: !u })
          );
      }
    }
    function it(t, e) {
      var n = t.actionListId;
      n ? gt({ store: e, actionListId: n }) : ht({ store: e }), ut(e);
    }
    function ot(t, e) {
      ut(e), F({ store: e, elementApi: _ });
    }
    function at(t) {
      var e,
        n = t.store,
        i = t.rawData,
        o = t.allowEvents,
        a = t.testManual,
        u = n.getState().ixSession;
      i && n.dispatch((0, y.rawDataImported)(i)),
        u.active ||
          (n.dispatch(
            (0, y.sessionInitialized)({
              hasBoundaryNodes: Boolean(document.querySelector(A)),
            })
          ),
          o &&
            ((function (t) {
              var e = t.getState().ixData.eventTypeMap;
              lt(t),
                (0, v.default)(e, function (e, n) {
                  var i = I.default[n];
                  i
                    ? (function (t) {
                        var e = t.logic,
                          n = t.store,
                          i = t.events;
                        !(function (t) {
                          if (J) {
                            var e = {},
                              n = "";
                            for (var r in t) {
                              var i = t[r],
                                o = i.eventTypeId,
                                a = i.target,
                                u = _.getQuerySelector(a);
                              e[u] ||
                                (o !== E.EventTypeConsts.MOUSE_CLICK &&
                                  o !== E.EventTypeConsts.MOUSE_SECOND_CLICK) ||
                                ((e[u] = !0),
                                (n +=
                                  u +
                                  "{cursor: pointer;touch-action: manipulation;}"));
                            }
                            if (n) {
                              var c = document.createElement("style");
                              (c.textContent = n), document.body.appendChild(c);
                            }
                          }
                        })(i);
                        var o = e.types,
                          a = e.handler,
                          u = n.getState().ixData,
                          f = u.actionLists,
                          d = ft(i, pt);
                        if ((0, l.default)(d)) {
                          (0, v.default)(d, function (t, e) {
                            var o = i[e],
                              a = o.action,
                              l = o.id,
                              d = o.mediaQueries,
                              p = void 0 === d ? u.mediaQueryKeys : d,
                              v = a.config.actionListId;
                            if (
                              (Y(p, u.mediaQueryKeys) ||
                                n.dispatch((0, y.mediaQueriesDefined)()),
                              a.actionTypeId ===
                                E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION)
                            ) {
                              var h = Array.isArray(o.config)
                                ? o.config
                                : [o.config];
                              h.forEach(function (e) {
                                var i = e.continuousParameterGroupId,
                                  o = (0, s.default)(
                                    f,
                                    "".concat(v, ".continuousParameterGroups"),
                                    []
                                  ),
                                  a = (0, c.default)(o, function (t) {
                                    var e = t.id;
                                    return e === i;
                                  }),
                                  u = (e.smoothing || 0) / 100,
                                  d = (e.restingState || 0) / 100;
                                a &&
                                  t.forEach(function (t, i) {
                                    var o = l + O + i;
                                    !(function (t) {
                                      var e = t.store,
                                        n = t.eventStateKey,
                                        i = t.eventTarget,
                                        o = t.eventId,
                                        a = t.eventConfig,
                                        u = t.actionListId,
                                        c = t.parameterGroup,
                                        l = t.smoothing,
                                        f = t.restingValue,
                                        d = e.getState(),
                                        p = d.ixData,
                                        v = d.ixSession,
                                        h = p.events[o],
                                        g = h.eventTypeId,
                                        E = {},
                                        m = {},
                                        y = [],
                                        I = c.continuousActionGroups,
                                        b = c.id;
                                      V(g, a) && (b = W(n, b));
                                      var w =
                                        v.hasBoundaryNodes && i
                                          ? _.getClosestElement(i, A)
                                          : null;
                                      I.forEach(function (t) {
                                        var e = t.keyframe,
                                          n = t.actionItems;
                                        n.forEach(function (t) {
                                          var n = t.actionTypeId,
                                            o = t.config.target;
                                          if (o) {
                                            var a = o.boundaryMode ? w : null,
                                              u = z(o) + O + n;
                                            if (
                                              ((m[u] = (function () {
                                                var t,
                                                  e =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                      ? arguments[0]
                                                      : [],
                                                  n =
                                                    arguments.length > 1
                                                      ? arguments[1]
                                                      : void 0,
                                                  i =
                                                    arguments.length > 2
                                                      ? arguments[2]
                                                      : void 0,
                                                  o = (0, r.default)(e);
                                                return (
                                                  o.some(function (e, r) {
                                                    return (
                                                      e.keyframe === n &&
                                                      ((t = r), !0)
                                                    );
                                                  }),
                                                  null == t &&
                                                    ((t = o.length),
                                                    o.push({
                                                      keyframe: n,
                                                      actionItems: [],
                                                    })),
                                                  o[t].actionItems.push(i),
                                                  o
                                                );
                                              })(m[u], e, t)),
                                              !E[u])
                                            ) {
                                              E[u] = !0;
                                              var c = t.config;
                                              N({
                                                config: c,
                                                event: h,
                                                eventTarget: i,
                                                elementRoot: a,
                                                elementApi: _,
                                              }).forEach(function (t) {
                                                y.push({ element: t, key: u });
                                              });
                                            }
                                          }
                                        });
                                      }),
                                        y.forEach(function (t) {
                                          var n = t.element,
                                            r = t.key,
                                            i = m[r],
                                            a = (0, s.default)(
                                              i,
                                              "[0].actionItems[0]",
                                              {}
                                            ),
                                            c = a.actionTypeId,
                                            d = Q(c) ? q(c)(n, a) : null,
                                            p = D(
                                              {
                                                element: n,
                                                actionItem: a,
                                                elementApi: _,
                                              },
                                              d
                                            );
                                          mt({
                                            store: e,
                                            element: n,
                                            eventId: o,
                                            actionListId: u,
                                            actionItem: a,
                                            destination: p,
                                            continuous: !0,
                                            parameterId: b,
                                            actionGroups: i,
                                            smoothing: l,
                                            restingValue: f,
                                            pluginInstance: d,
                                          });
                                        });
                                    })({
                                      store: n,
                                      eventStateKey: o,
                                      eventTarget: t,
                                      eventId: l,
                                      eventConfig: e,
                                      actionListId: v,
                                      parameterGroup: a,
                                      smoothing: u,
                                      restingValue: d,
                                    });
                                  });
                              });
                            }
                            (a.actionTypeId ===
                              E.ActionTypeConsts.GENERAL_START_ACTION ||
                              w(a.actionTypeId)) &&
                              vt({ store: n, actionListId: v, eventId: l });
                          });
                          var p = function (t) {
                              var e = n.getState(),
                                r = e.ixSession;
                              dt(d, function (e, o, c) {
                                var s = i[o],
                                  l = r.eventState[c],
                                  f = s.action,
                                  d = s.mediaQueries,
                                  p = void 0 === d ? u.mediaQueryKeys : d;
                                if (B(p, r.mediaQueryKey)) {
                                  var v = function () {
                                    var r =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                          ? arguments[0]
                                          : {},
                                      i = a(
                                        {
                                          store: n,
                                          element: e,
                                          event: s,
                                          eventConfig: r,
                                          nativeEvent: t,
                                          eventStateKey: c,
                                        },
                                        l
                                      );
                                    (0, g.default)(i, l) ||
                                      n.dispatch(
                                        (0, y.eventStateChanged)(c, i)
                                      );
                                  };
                                  if (
                                    f.actionTypeId ===
                                    E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                  ) {
                                    var h = Array.isArray(s.config)
                                      ? s.config
                                      : [s.config];
                                    h.forEach(v);
                                  } else v();
                                }
                              });
                            },
                            m = (0, h.default)(p, tt),
                            I = function (t) {
                              var e = t.target,
                                r = void 0 === e ? document : e,
                                i = t.types,
                                o = t.throttle;
                              i.split(" ")
                                .filter(Boolean)
                                .forEach(function (t) {
                                  var e = o ? m : p;
                                  r.addEventListener(t, e),
                                    n.dispatch(
                                      (0, y.eventListenerAdded)(r, [t, e])
                                    );
                                });
                            };
                          Array.isArray(o)
                            ? o.forEach(I)
                            : "string" == typeof o && I(e);
                        }
                      })({ logic: i, store: t, events: e })
                    : console.warn("IX2 event type not configured: ".concat(n));
                }),
                t.getState().ixSession.eventListeners.length &&
                  (function (t) {
                    var e = function () {
                      lt(t);
                    };
                    st.forEach(function (n) {
                      window.addEventListener(n, e),
                        t.dispatch((0, y.eventListenerAdded)(window, [n, e]));
                    }),
                      e();
                  })(t);
            })(n),
            -1 === (e = document.documentElement).className.indexOf(R) &&
              (e.className += " ".concat(R)),
            n.getState().ixSession.hasDefinedMediaQueries &&
              (function (t) {
                P({
                  store: t,
                  select: function (t) {
                    return t.ixSession.mediaQueryKey;
                  },
                  onChange: function () {
                    ut(t),
                      F({ store: t, elementApi: _ }),
                      at({ store: t, allowEvents: !0 }),
                      nt();
                  },
                });
              })(n)),
          n.dispatch((0, y.sessionStarted)()),
          (function (t, e) {
            !(function n(r) {
              var i = t.getState(),
                o = i.ixSession,
                a = i.ixParameters;
              o.active &&
                (t.dispatch((0, y.animationFrameChanged)(r, a)),
                e
                  ? (function (t, e) {
                      var n = P({
                        store: t,
                        select: function (t) {
                          return t.ixSession.tick;
                        },
                        onChange: function (t) {
                          e(t), n();
                        },
                      });
                    })(t, n)
                  : requestAnimationFrame(n));
            })(window.performance.now());
          })(n, a));
    }
    function ut(t) {
      var e = t.getState().ixSession;
      e.active &&
        (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()));
    }
    function ct(t) {
      var e = t.target,
        n = t.listenerParams;
      e.removeEventListener.apply(e, n);
    }
    var st = ["resize", "orientationchange"];
    function lt(t) {
      var e = t.getState(),
        n = e.ixSession,
        r = e.ixData,
        i = window.innerWidth;
      if (i !== n.viewportWidth) {
        var o = r.mediaQueries;
        t.dispatch((0, y.viewportWidthChanged)({ width: i, mediaQueries: o }));
      }
    }
    var ft = function (t, e) {
        return (0, f.default)((0, p.default)(t, e), d.default);
      },
      dt = function (t, e) {
        (0, v.default)(t, function (t, n) {
          t.forEach(function (t, r) {
            e(t, n, n + O + r);
          });
        });
      },
      pt = function (t) {
        var e = { target: t.target, targets: t.targets };
        return N({ config: e, elementApi: _ });
      };
    function vt(t) {
      var e = t.store,
        n = t.actionListId,
        r = t.eventId,
        i = e.getState(),
        o = i.ixData,
        a = i.ixSession,
        u = o.actionLists,
        c = o.events[r],
        l = u[n];
      if (l && l.useFirstGroupAsInitialState) {
        var f = (0, s.default)(l, "actionItemGroups[0].actionItems", []),
          d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
        if (!B(d, a.mediaQueryKey)) return;
        f.forEach(function (t) {
          var i,
            o = t.config,
            a = t.actionTypeId,
            u =
              !0 ===
              (null == o
                ? void 0
                : null === (i = o.target) || void 0 === i
                ? void 0
                : i.useEventTarget)
                ? { target: c.target, targets: c.targets }
                : o,
            s = N({ config: u, event: c, elementApi: _ }),
            l = Q(a);
          s.forEach(function (i) {
            var o = l ? q(a)(i, t) : null;
            mt({
              destination: D({ element: i, actionItem: t, elementApi: _ }, o),
              immediate: !0,
              store: e,
              element: i,
              eventId: r,
              actionItem: t,
              actionListId: n,
              pluginInstance: o,
            });
          });
        });
      }
    }
    function ht(t) {
      var e = t.store,
        n = e.getState().ixInstances;
      (0, v.default)(n, function (t) {
        if (!t.continuous) {
          var n = t.actionListId,
            r = t.verbose;
          yt(t, e),
            r &&
              e.dispatch(
                (0, y.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function gt(t) {
      var e = t.store,
        n = t.eventId,
        r = t.eventTarget,
        i = t.eventStateKey,
        o = t.actionListId,
        a = e.getState(),
        u = a.ixInstances,
        c =
          a.ixSession.hasBoundaryNodes && r ? _.getClosestElement(r, A) : null;
      (0, v.default)(u, function (t) {
        var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
          a = !i || t.eventStateKey === i;
        if (t.actionListId === o && t.eventId === n && a) {
          if (c && r && !_.elementContains(c, t.element)) return;
          yt(t, e),
            t.verbose &&
              e.dispatch(
                (0, y.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Et(t) {
      var e,
        n = t.store,
        r = t.eventId,
        i = t.eventTarget,
        o = t.eventStateKey,
        a = t.actionListId,
        u = t.groupIndex,
        c = void 0 === u ? 0 : u,
        l = t.immediate,
        f = t.verbose,
        d = n.getState(),
        p = d.ixData,
        v = d.ixSession,
        h = p.events[r] || {},
        g = h.mediaQueries,
        E = void 0 === g ? p.mediaQueryKeys : g,
        m = (0, s.default)(p, "actionLists.".concat(a), {}),
        y = m.actionItemGroups,
        I = m.useFirstGroupAsInitialState;
      if (!y || !y.length) return !1;
      c >= y.length && (0, s.default)(h, "config.loop") && (c = 0),
        0 === c && I && c++;
      var b =
          (0 === c || (1 === c && I)) &&
          w(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId)
            ? h.config.delay
            : void 0,
        T = (0, s.default)(y, [c, "actionItems"], []);
      if (!T.length) return !1;
      if (!B(E, v.mediaQueryKey)) return !1;
      var O = v.hasBoundaryNodes && i ? _.getClosestElement(i, A) : null,
        x = k(T),
        S = !1;
      return (
        T.forEach(function (t, e) {
          var u = t.config,
            s = t.actionTypeId,
            d = Q(s),
            p = u.target;
          if (p) {
            var v = p.boundaryMode ? O : null;
            N({
              config: u,
              event: h,
              eventTarget: i,
              elementRoot: v,
              elementApi: _,
            }).forEach(function (u, p) {
              var v = d ? q(s)(u, t) : null,
                h = d ? $(s)(u, t) : null;
              S = !0;
              var g = x === e && 0 === p,
                E = X({ element: u, actionItem: t }),
                m = D({ element: u, actionItem: t, elementApi: _ }, v);
              mt({
                store: n,
                element: u,
                actionItem: t,
                eventId: r,
                eventTarget: i,
                eventStateKey: o,
                actionListId: a,
                groupIndex: c,
                isCarrier: g,
                computedStyle: E,
                destination: m,
                immediate: l,
                verbose: f,
                pluginInstance: v,
                pluginDuration: h,
                instanceDelay: b,
              });
            });
          }
        }),
        S
      );
    }
    function mt(t) {
      var e = t.store,
        n = t.computedStyle,
        r = (0, u.default)(t, ["store", "computedStyle"]),
        i = !r.continuous,
        o = r.element,
        c = r.actionItem,
        s = r.immediate,
        l = r.pluginInstance,
        f = M(),
        d = e.getState(),
        p = d.ixElements,
        v = d.ixSession,
        h = L(p, o),
        g = (p[h] || {}).refState,
        E = _.getRefType(o),
        m = G(o, g, n, c, _, l);
      e.dispatch(
        (0, y.instanceAdded)(
          (0, a.default)(
            { instanceId: f, elementId: h, origin: m, refType: E },
            r
          )
        )
      ),
        _t(document.body, "ix2-animation-started", f),
        s
          ? (function (t, e) {
              var n = t.getState().ixParameters;
              t.dispatch((0, y.instanceStarted)(e, 0)),
                t.dispatch((0, y.animationFrameChanged)(performance.now(), n)),
                It(t.getState().ixInstances[e], t);
            })(e, f)
          : (P({
              store: e,
              select: function (t) {
                return t.ixInstances[f];
              },
              onChange: It,
            }),
            i && e.dispatch((0, y.instanceStarted)(f, v.tick)));
    }
    function yt(t, e) {
      _t(document.body, "ix2-animation-stopping", {
        instanceId: t.id,
        state: e.getState(),
      });
      var n = t.elementId,
        r = t.actionItem,
        i = e.getState().ixElements[n] || {},
        o = i.ref;
      i.refType === x && H(o, r, _), e.dispatch((0, y.instanceRemoved)(t.id));
    }
    function _t(t, e, n) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
    }
    function It(t, e) {
      var n = t.active,
        r = t.continuous,
        i = t.complete,
        o = t.elementId,
        a = t.actionItem,
        u = t.actionTypeId,
        c = t.renderType,
        s = t.current,
        l = t.groupIndex,
        f = t.eventId,
        d = t.eventTarget,
        p = t.eventStateKey,
        v = t.actionListId,
        h = t.isCarrier,
        g = t.styleProp,
        E = t.verbose,
        m = t.pluginInstance,
        I = e.getState(),
        b = I.ixData,
        w = I.ixSession,
        T = (b.events[f] || {}).mediaQueries,
        O = void 0 === T ? b.mediaQueryKeys : T;
      if (B(O, w.mediaQueryKey) && (r || n || i)) {
        if (s || (c === S && i)) {
          e.dispatch((0, y.elementStateChanged)(o, u, s, a));
          var A = e.getState().ixElements[o] || {},
            R = A.ref,
            C = A.refType,
            N = A.refState,
            L = N && N[u];
          switch (C) {
            case x:
              j(R, N, L, f, a, g, _, c, m);
          }
        }
        if (i) {
          if (h) {
            var D = Et({
              store: e,
              eventId: f,
              eventTarget: d,
              eventStateKey: p,
              actionListId: v,
              groupIndex: l + 1,
              verbose: E,
            });
            E &&
              !D &&
              e.dispatch(
                (0, y.actionListPlaybackChanged)({
                  actionListId: v,
                  isPlaying: !1,
                })
              );
          }
          yt(t, e);
        }
      }
    }
  },
  function (t, e, n) {
    var r = n(116);
    t.exports = function (t, e, n) {
      "__proto__" == e && r
        ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (t[e] = n);
    };
  },
  function (t, e, n) {
    var r = n(8),
      i = (function () {
        try {
          var t = r(Object, "defineProperty");
          return t({}, "", {}), t;
        } catch (t) {}
      })();
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(6),
      i = Object.create,
      o = (function () {
        function t() {}
        return function (e) {
          if (!r(e)) return {};
          if (i) return i(e);
          t.prototype = e;
          var n = new t();
          return (t.prototype = void 0), n;
        };
      })();
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(305),
      i = n(306),
      o = r
        ? function (t) {
            return r.get(t);
          }
        : i;
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(307),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      for (
        var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0;
        o--;

      ) {
        var a = n[o],
          u = a.func;
        if (null == u || u == t) return a.name;
      }
      return e;
    };
  },
  function (t, e, n) {
    n(121),
      n(122),
      n(124),
      n(14),
      n(126),
      n(314),
      n(315),
      n(316),
      n(317),
      n(318),
      n(323),
      n(324),
      n(325),
      (t.exports = n(326));
  },
  function (t, e, n) {
    "use strict";
    var r = n(0)(n(13));
    !(function () {
      if ("undefined" != typeof window) {
        var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
          e = !!t && parseInt(t[1], 10) >= 16;
        if (!("objectFit" in document.documentElement.style != !1) || e) {
          var n = function (t) {
              var e = t.parentNode;
              !(function (t) {
                var e = window.getComputedStyle(t, null),
                  n = e.getPropertyValue("position"),
                  r = e.getPropertyValue("overflow"),
                  i = e.getPropertyValue("display");
                (n && "static" !== n) || (t.style.position = "relative"),
                  "hidden" !== r && (t.style.overflow = "hidden"),
                  (i && "inline" !== i) || (t.style.display = "block"),
                  0 === t.clientHeight && (t.style.height = "100%"),
                  -1 === t.className.indexOf("object-fit-polyfill") &&
                    (t.className += " object-fit-polyfill");
              })(e),
                (function (t) {
                  var e = window.getComputedStyle(t, null),
                    n = {
                      "max-width": "none",
                      "max-height": "none",
                      "min-width": "0px",
                      "min-height": "0px",
                      top: "auto",
                      right: "auto",
                      bottom: "auto",
                      left: "auto",
                      "margin-top": "0px",
                      "margin-right": "0px",
                      "margin-bottom": "0px",
                      "margin-left": "0px",
                    };
                  for (var r in n)
                    e.getPropertyValue(r) !== n[r] && (t.style[r] = n[r]);
                })(t),
                (t.style.position = "absolute"),
                (t.style.height = "100%"),
                (t.style.width = "auto"),
                t.clientWidth > e.clientWidth
                  ? ((t.style.top = "0"),
                    (t.style.marginTop = "0"),
                    (t.style.left = "50%"),
                    (t.style.marginLeft = t.clientWidth / -2 + "px"))
                  : ((t.style.width = "100%"),
                    (t.style.height = "auto"),
                    (t.style.left = "0"),
                    (t.style.marginLeft = "0"),
                    (t.style.top = "50%"),
                    (t.style.marginTop = t.clientHeight / -2 + "px"));
            },
            i = function (t) {
              if (void 0 === t || t instanceof Event)
                t = document.querySelectorAll("[data-object-fit]");
              else if (t && t.nodeName) t = [t];
              else {
                if (
                  "object" !== (0, r.default)(t) ||
                  !t.length ||
                  !t[0].nodeName
                )
                  return !1;
                t = t;
              }
              for (var i = 0; i < t.length; i++)
                if (t[i].nodeName) {
                  var o = t[i].nodeName.toLowerCase();
                  if ("img" === o) {
                    if (e) continue;
                    t[i].complete
                      ? n(t[i])
                      : t[i].addEventListener("load", function () {
                          n(this);
                        });
                  } else
                    "video" === o
                      ? t[i].readyState > 0
                        ? n(t[i])
                        : t[i].addEventListener("loadedmetadata", function () {
                            n(this);
                          })
                      : n(t[i]);
                }
              return !0;
            };
          "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", i)
            : i(),
            window.addEventListener("resize", i),
            (window.objectFitPolyfill = i);
        } else
          window.objectFitPolyfill = function () {
            return !1;
          };
      }
    })();
  },
  function (t, e, n) {
    "use strict";
    var r = n(2);
    r.define(
      "brand",
      (t.exports = function (t) {
        var e,
          n = {},
          i = document,
          o = t("html"),
          a = t("body"),
          u = ".w-webflow-badge",
          c = window.location,
          s = /PhantomsJS/i.test(navigator.userAgent),
          l =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        function f() {
          var n =
            i.fullScreen ||
            i.mozFullScreen ||
            i.webkitIsFullScreen ||
            i.msFullscreenElement ||
            Boolean(i.webkitFullscreenElement);
          t(e).attr("style", n ? "display: none !important;" : "");
        }
        function d() {
          var t = a.children(u),
            n = t.length && t.get(0) === e,
            i = r.env("editor");
          n ? i && t.remove() : (t.length && t.remove(), i || a.append(e));
        }
        return (
          (n.ready = function () {
            var n,
              r,
              a,
              u = o.attr("data-wf-status"),
              p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0),
              u &&
                !s &&
                ((e =
                  e ||
                  ((n = t("").attr(
                    "href",
                    "https://webflow.com?utm_campaign=brandjs"
                  )),
                  n.append(r, a),
                  n[0])),
                d(),
                setTimeout(d, 500),
                t(i).off(l, f).on(l, f));
          }),
          n
        );
      })
    );
  },
  function (t, e, n) {
    "use strict";
    var r = window.$,
      i = n(65) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = (function () {
      var t = { VERSION: "1.6.0-Webflow" },
        e = {},
        n = Array.prototype,
        r = Object.prototype,
        o = Function.prototype,
        a = (n.push, n.slice),
        u = (n.concat, r.toString, r.hasOwnProperty),
        c = n.forEach,
        s = n.map,
        l = (n.reduce, n.reduceRight, n.filter),
        f = (n.every, n.some),
        d = n.indexOf,
        p = (n.lastIndexOf, Array.isArray, Object.keys),
        v =
          (o.bind,
          (t.each = t.forEach =
            function (n, r, i) {
              if (null == n) return n;
              if (c && n.forEach === c) n.forEach(r, i);
              else if (n.length === +n.length) {
                for (var o = 0, a = n.length; o < a; o++)
                  if (r.call(i, n[o], o, n) === e) return;
              } else {
                var u = t.keys(n);
                for (o = 0, a = u.length; o < a; o++)
                  if (r.call(i, n[u[o]], u[o], n) === e) return;
              }
              return n;
            }));
      (t.map = t.collect =
        function (t, e, n) {
          var r = [];
          return null == t
            ? r
            : s && t.map === s
            ? t.map(e, n)
            : (v(t, function (t, i, o) {
                r.push(e.call(n, t, i, o));
              }),
              r);
        }),
        (t.find = t.detect =
          function (t, e, n) {
            var r;
            return (
              h(t, function (t, i, o) {
                if (e.call(n, t, i, o)) return (r = t), !0;
              }),
              r
            );
          }),
        (t.filter = t.select =
          function (t, e, n) {
            var r = [];
            return null == t
              ? r
              : l && t.filter === l
              ? t.filter(e, n)
              : (v(t, function (t, i, o) {
                  e.call(n, t, i, o) && r.push(t);
                }),
                r);
          });
      var h =
        (t.some =
        t.any =
          function (n, r, i) {
            r || (r = t.identity);
            var o = !1;
            return null == n
              ? o
              : f && n.some === f
              ? n.some(r, i)
              : (v(n, function (t, n, a) {
                  if (o || (o = r.call(i, t, n, a))) return e;
                }),
                !!o);
          });
      (t.contains = t.include =
        function (t, e) {
          return (
            null != t &&
            (d && t.indexOf === d
              ? -1 != t.indexOf(e)
              : h(t, function (t) {
                  return t === e;
                }))
          );
        }),
        (t.delay = function (t, e) {
          var n = a.call(arguments, 2);
          return setTimeout(function () {
            return t.apply(null, n);
          }, e);
        }),
        (t.defer = function (e) {
          return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
        }),
        (t.throttle = function (t) {
          var e, n, r;
          return function () {
            e ||
              ((e = !0),
              (n = arguments),
              (r = this),
              i.frame(function () {
                (e = !1), t.apply(r, n);
              }));
          };
        }),
        (t.debounce = function (e, n, r) {
          var i,
            o,
            a,
            u,
            c,
            s = function s() {
              var l = t.now() - u;
              l < n
                ? (i = setTimeout(s, n - l))
                : ((i = null), r || ((c = e.apply(a, o)), (a = o = null)));
            };
          return function () {
            (a = this), (o = arguments), (u = t.now());
            var l = r && !i;
            return (
              i || (i = setTimeout(s, n)),
              l && ((c = e.apply(a, o)), (a = o = null)),
              c
            );
          };
        }),
        (t.defaults = function (e) {
          if (!t.isObject(e)) return e;
          for (var n = 1, r = arguments.length; n < r; n++) {
            var i = arguments[n];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (t.keys = function (e) {
          if (!t.isObject(e)) return [];
          if (p) return p(e);
          var n = [];
          for (var r in e) t.has(e, r) && n.push(r);
          return n;
        }),
        (t.has = function (t, e) {
          return u.call(t, e);
        }),
        (t.isObject = function (t) {
          return t === Object(t);
        }),
        (t.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (t.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var g = /(.)^/,
        E = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        m = /\\|'|\r|\n|\u2028|\u2029/g,
        y = function (t) {
          return "\\" + E[t];
        };
      return (
        (t.template = function (e, n, r) {
          !n && r && (n = r), (n = t.defaults({}, n, t.templateSettings));
          var i = RegExp(
              [
                (n.escape || g).source,
                (n.interpolate || g).source,
                (n.evaluate || g).source,
              ].join("|") + "|$",
              "g"
            ),
            o = 0,
            a = "__p+='";
          e.replace(i, function (t, n, r, i, u) {
            return (
              (a += e.slice(o, u).replace(m, y)),
              (o = u + t.length),
              n
                ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : r
                ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                : i && (a += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (a += "';\n"),
            n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
            (a =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              a +
              "return __p;\n");
          try {
            var u = new Function(n.variable || "obj", "_", a);
          } catch (t) {
            throw ((t.source = a), t);
          }
          var c = function (e) {
              return u.call(this, e, t);
            },
            s = n.variable || "obj";
          return (c.source = "function(" + s + "){\n" + a + "}"), c;
        }),
        t
      );
    })();
  },
  function (t, e, n) {
    "use strict";
    var r = n(2);
    r.define(
      "edit",
      (t.exports = function (t, e, n) {
        if (
          ((n = n || {}),
          (r.env("test") || r.env("frame")) &&
            !n.fixture &&
            !(function () {
              try {
                return window.top.__Cypress__;
              } catch (t) {
                return !1;
              }
            })())
        )
          return { exit: 1 };
        var i,
          o = t(window),
          a = t(document.documentElement),
          u = document.location,
          c = "hashchange",
          s =
            n.load ||
            function () {
              (i = !0),
                (window.WebflowEditor = !0),
                o.off(c, f),
                (function (t) {
                  var e = window.document.createElement("iframe");
                  (e.src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                    (e.style.display = "none"),
                    (e.sandbox = "allow-scripts allow-same-origin");
                  var n = function n(r) {
                    "WF_third_party_cookies_unsupported" === r.data
                      ? (E(e, n), t(!1))
                      : "WF_third_party_cookies_supported" === r.data &&
                        (E(e, n), t(!0));
                  };
                  (e.onerror = function () {
                    E(e, n), t(!1);
                  }),
                    window.addEventListener("message", n, !1),
                    window.document.body.appendChild(e);
                })(function (e) {
                  t.ajax({
                    url: g("https://editor-api.webflow.com/api/editor/view"),
                    data: { siteId: a.attr("data-wf-site") },
                    xhrFields: { withCredentials: !0 },
                    dataType: "json",
                    crossDomain: !0,
                    success: d(e),
                  });
                });
            },
          l = !1;
        try {
          l =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch (t) {}
        function f() {
          i || (/\?edit/.test(u.hash) && s());
        }
        function d(t) {
          return function (e) {
            e
              ? ((e.thirdPartyCookiesSupported = t),
                p(h(e.bugReporterScriptPath), function () {
                  p(h(e.scriptPath), function () {
                    window.WebflowEditor(e);
                  });
                }))
              : console.error("Could not load editor data");
          };
        }
        function p(e, n) {
          t.ajax({ type: "GET", url: e, dataType: "script", cache: !0 }).then(
            n,
            v
          );
        }
        function v(t, e, n) {
          throw (console.error("Could not load editor script: " + e), n);
        }
        function h(t) {
          return t.indexOf("//") >= 0
            ? t
            : g("https://editor-api.webflow.com" + t);
        }
        function g(t) {
          return t.replace(/([^:])\/\//g, "$1/");
        }
        function E(t, e) {
          window.removeEventListener("message", e, !1), t.remove();
        }
        return (
          l
            ? s()
            : u.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) ||
                /\?edit$/.test(u.href)) &&
              s()
            : o.on(c, f).triggerHandler(c),
          {}
        );
      })
    );
  },
  function (t, e, n) {
    "use strict";
    var r = window.jQuery,
      i = {},
      o = [],
      a = {
        reset: function (t, e) {
          e.__wf_intro = null;
        },
        intro: function (t, e) {
          e.__wf_intro ||
            ((e.__wf_intro = !0), r(e).triggerHandler(i.types.INTRO));
        },
        outro: function (t, e) {
          e.__wf_intro &&
            ((e.__wf_intro = null), r(e).triggerHandler(i.types.OUTRO));
        },
      };
    (i.triggers = {}),
      (i.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
      (i.init = function () {
        for (var t = o.length, e = 0; e < t; e++) {
          var n = o[e];
          n[0](0, n[1]);
        }
        (o = []), r.extend(i.triggers, a);
      }),
      (i.async = function () {
        for (var t in a) {
          var e = a[t];
          a.hasOwnProperty(t) &&
            (i.triggers[t] = function (t, n) {
              o.push([e, n]);
            });
        }
      }),
      i.async(),
      (t.exports = i);
  },
  function (t, e, n) {
    "use strict";
    var r = n(2),
      i = n(127);
    i.setEnv(r.env),
      r.define(
        "ix2",
        (t.exports = function () {
          return i;
        })
      );
  },
  function (t, e, n) {
    "use strict";
    var r = n(15),
      i = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.setEnv = function (t) {
        t() && (0, u.observeRequests)(s);
      }),
      (e.init = function (t) {
        l(), (0, u.startEngine)({ store: s, rawData: t, allowEvents: !0 });
      }),
      (e.destroy = l),
      (e.actions = e.store = void 0),
      n(128);
    var o = n(78),
      a = i(n(169)),
      u = n(114),
      c = r(n(61));
    e.actions = c;
    var s = (0, o.createStore)(a.default);
    function l() {
      (0, u.stopEngine)(s);
    }
    e.store = s;
  },
  function (t, e, n) {
    t.exports = n(129);
  },
  function (t, e, n) {
    n(130);
    var r = n(155);
    t.exports = r("Array", "includes");
  },
  function (t, e, n) {
    "use strict";
    var r = n(131),
      i = n(76).includes,
      o = n(148);
    r(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      o("includes");
  },
  function (t, e, n) {
    var r = n(4),
      i = n(66).f,
      o = n(19),
      a = n(136),
      u = n(39),
      c = n(140),
      s = n(147);
    t.exports = function (t, e) {
      var n,
        l,
        f,
        d,
        p,
        v = t.target,
        h = t.global,
        g = t.stat;
      if ((n = h ? r : g ? r[v] || u(v, {}) : (r[v] || {}).prototype))
        for (l in e) {
          if (
            ((d = e[l]),
            (f = t.noTargetGet ? (p = i(n, l)) && p.value : n[l]),
            !s(h ? l : v + (g ? "." : "#") + l, t.forced) && void 0 !== f)
          ) {
            if (typeof d == typeof f) continue;
            c(d, f);
          }
          (t.sham || (f && f.sham)) && o(d, "sham", !0), a(n, l, d, t);
        }
    };
  },
  function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !r.call({ 1: 2 }, 1);
    e.f = o
      ? function (t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var r = n(17),
      i = n(134),
      o = "".split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == i(t) ? o.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(4),
      i = n(26),
      o = n(19),
      a = n(18),
      u = n(39),
      c = n(71),
      s = n(138),
      l = s.get,
      f = s.enforce,
      d = String(c).split("toString");
    i("inspectSource", function (t) {
      return c.call(t);
    }),
      (t.exports = function (t, e, n, i) {
        var c = !!i && !!i.unsafe,
          s = !!i && !!i.enumerable,
          l = !!i && !!i.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof e || a(n, "name") || o(n, "name", e),
          (f(n).source = d.join("string" == typeof e ? e : ""))),
          t !== r
            ? (c ? !l && t[e] && (s = !0) : delete t[e],
              s ? (t[e] = n) : o(t, e, n))
            : s
            ? (t[e] = n)
            : u(e, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && l(this).source) || c.call(this);
      });
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r,
      i,
      o,
      a = n(139),
      u = n(4),
      c = n(24),
      s = n(19),
      l = n(18),
      f = n(72),
      d = n(40),
      p = u.WeakMap;
    if (a) {
      var v = new p(),
        h = v.get,
        g = v.has,
        E = v.set;
      (r = function (t, e) {
        return E.call(v, t, e), e;
      }),
        (i = function (t) {
          return h.call(v, t) || {};
        }),
        (o = function (t) {
          return g.call(v, t);
        });
    } else {
      var m = f("state");
      (d[m] = !0),
        (r = function (t, e) {
          return s(t, m, e), e;
        }),
        (i = function (t) {
          return l(t, m) ? t[m] : {};
        }),
        (o = function (t) {
          return l(t, m);
        });
    }
    t.exports = {
      set: r,
      get: i,
      has: o,
      enforce: function (t) {
        return o(t) ? i(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!c(e) || (n = i(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    };
  },
  function (t, e, n) {
    var r = n(4),
      i = n(71),
      o = r.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(i.call(o));
  },
  function (t, e, n) {
    var r = n(18),
      i = n(141),
      o = n(66),
      a = n(38);
    t.exports = function (t, e) {
      for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
        var l = n[s];
        r(t, l) || u(t, l, c(e, l));
      }
    };
  },
  function (t, e, n) {
    var r = n(74),
      i = n(143),
      o = n(146),
      a = n(25);
    t.exports =
      r("Reflect", "ownKeys") ||
      function (t) {
        var e = i.f(a(t)),
          n = o.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function (t, e, n) {
    t.exports = n(4);
  },
  function (t, e, n) {
    var r = n(75),
      i = n(41).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, i);
      };
  },
  function (t, e, n) {
    var r = n(77),
      i = Math.min;
    t.exports = function (t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e, n) {
    var r = n(77),
      i = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? i(n + e, 0) : o(n, e);
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(17),
      i = /#|\.prototype\./,
      o = function (t, e) {
        var n = u[a(t)];
        return n == s || (n != c && ("function" == typeof e ? r(e) : !!e));
      },
      a = (o.normalize = function (t) {
        return String(t).replace(i, ".").toLowerCase();
      }),
      u = (o.data = {}),
      c = (o.NATIVE = "N"),
      s = (o.POLYFILL = "P");
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(149),
      i = n(151),
      o = n(19),
      a = r("unscopables"),
      u = Array.prototype;
    null == u[a] && o(u, a, i(null)),
      (t.exports = function (t) {
        u[a][t] = !0;
      });
  },
  function (t, e, n) {
    var r = n(4),
      i = n(26),
      o = n(73),
      a = n(150),
      u = r.Symbol,
      c = i("wks");
    t.exports = function (t) {
      return c[t] || (c[t] = (a && u[t]) || (a ? u : o)("Symbol." + t));
    };
  },
  function (t, e, n) {
    var r = n(17);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        return !String(Symbol());
      });
  },
  function (t, e, n) {
    var r = n(25),
      i = n(152),
      o = n(41),
      a = n(40),
      u = n(154),
      c = n(70),
      s = n(72)("IE_PROTO"),
      l = function () {},
      f = function () {
        var t,
          e = c("iframe"),
          n = o.length;
        for (
          e.style.display = "none",
            u.appendChild(e),
            e.src = String("javascript:"),
            (t = e.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            f = t.F;
          n--;

        )
          delete f.prototype[o[n]];
        return f();
      };
    (t.exports =
      Object.create ||
      function (t, e) {
        var n;
        return (
          null !== t
            ? ((l.prototype = r(t)),
              (n = new l()),
              (l.prototype = null),
              (n[s] = t))
            : (n = f()),
          void 0 === e ? n : i(n, e)
        );
      }),
      (a[s] = !0);
  },
  function (t, e, n) {
    var r = n(16),
      i = n(38),
      o = n(25),
      a = n(153);
    t.exports = r
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          for (var n, r = a(e), u = r.length, c = 0; u > c; )
            i.f(t, (n = r[c++]), e[n]);
          return t;
        };
  },
  function (t, e, n) {
    var r = n(75),
      i = n(41);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, i);
      };
  },
  function (t, e, n) {
    var r = n(74);
    t.exports = r("document", "documentElement");
  },
  function (t, e, n) {
    var r = n(4),
      i = n(156),
      o = Function.call;
    t.exports = function (t, e, n) {
      return i(o, r[t].prototype[e], n);
    };
  },
  function (t, e, n) {
    var r = n(157);
    t.exports = function (t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, i) {
            return t.call(e, n, r, i);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(80),
      i = n(161),
      o = n(162),
      a = "[object Null]",
      u = "[object Undefined]",
      c = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
      return null == t
        ? void 0 === t
          ? u
          : a
        : c && c in Object(t)
        ? Object(i.default)(t)
        : Object(o.default)(t);
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(160),
      i = "object" == typeof self && self && self.Object === Object && self,
      o = r.default || i || Function("return this")();
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.default = n;
      }.call(this, n(23));
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(80),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
      var e = o.call(t, u),
        n = t[u];
      try {
        t[u] = void 0;
        var r = !0;
      } catch (t) {}
      var i = a.call(t);
      return r && (e ? (t[u] = n) : delete t[u]), i;
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function (t) {
      return r.call(t);
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(164),
      i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      (e.default = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      (e.default = function (t) {
        return null != t && "object" == typeof t;
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      function (t, r) {
        var i,
          o = n(168);
        i =
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : void 0 !== t
            ? t
            : r;
        var a = Object(o.default)(i);
        e.default = a;
      }.call(this, n(23), n(167)(t));
  },
  function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      var e,
        n = t.Symbol;
      return (
        "function" == typeof n
          ? n.observable
            ? (e = n.observable)
            : ((e = n("observable")), (n.observable = e))
          : (e = "@@observable"),
        e
      );
    }
    n.r(e),
      n.d(e, "default", function () {
        return r;
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var r = n(78),
      i = n(170),
      o = n(176),
      a = n(177),
      u = n(10),
      c = n(262),
      s = n(263),
      l = u.IX2ElementsReducer.ixElements,
      f = (0, r.combineReducers)({
        ixData: i.ixData,
        ixRequest: o.ixRequest,
        ixSession: a.ixSession,
        ixElements: l,
        ixInstances: c.ixInstances,
        ixParameters: s.ixParameters,
      });
    e.default = f;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixData = void 0);
    var r = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case r:
          return e.payload.ixData || Object.freeze({});
        default:
          return t;
      }
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.QuickEffectDirectionConsts =
        e.QuickEffectIds =
        e.EventLimitAffectedElements =
        e.EventContinuousMouseAxes =
        e.EventBasedOn =
        e.EventAppliesTo =
        e.EventTypeConsts =
          void 0);
    e.EventTypeConsts = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    e.EventAppliesTo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    e.EventBasedOn = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    e.EventContinuousMouseAxes = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    e.EventLimitAffectedElements = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    e.QuickEffectIds = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    e.QuickEffectDirectionConsts = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ActionAppliesTo = e.ActionTypeConsts = void 0);
    e.ActionTypeConsts = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    e.ActionAppliesTo = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.InteractionTypeConsts = void 0);
    e.InteractionTypeConsts = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.IX2_TEST_FRAME_RENDERED =
        e.IX2_MEDIA_QUERIES_DEFINED =
        e.IX2_VIEWPORT_WIDTH_CHANGED =
        e.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        e.IX2_ELEMENT_STATE_CHANGED =
        e.IX2_INSTANCE_REMOVED =
        e.IX2_INSTANCE_STARTED =
        e.IX2_INSTANCE_ADDED =
        e.IX2_PARAMETER_CHANGED =
        e.IX2_ANIMATION_FRAME_CHANGED =
        e.IX2_EVENT_STATE_CHANGED =
        e.IX2_EVENT_LISTENER_ADDED =
        e.IX2_CLEAR_REQUESTED =
        e.IX2_STOP_REQUESTED =
        e.IX2_PLAYBACK_REQUESTED =
        e.IX2_PREVIEW_REQUESTED =
        e.IX2_SESSION_STOPPED =
        e.IX2_SESSION_STARTED =
        e.IX2_SESSION_INITIALIZED =
        e.IX2_RAW_DATA_IMPORTED =
          void 0);
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.RENDER_PLUGIN =
        e.RENDER_STYLE =
        e.RENDER_GENERAL =
        e.RENDER_TRANSFORM =
        e.ABSTRACT_NODE =
        e.PLAIN_OBJECT =
        e.HTML_ELEMENT =
        e.PRESERVE_3D =
        e.PARENT =
        e.SIBLINGS =
        e.IMMEDIATE_CHILDREN =
        e.CHILDREN =
        e.BAR_DELIMITER =
        e.COLON_DELIMITER =
        e.COMMA_DELIMITER =
        e.AUTO =
        e.WILL_CHANGE =
        e.FLEX =
        e.DISPLAY =
        e.COLOR =
        e.BORDER_COLOR =
        e.BACKGROUND =
        e.BACKGROUND_COLOR =
        e.HEIGHT =
        e.WIDTH =
        e.FILTER =
        e.OPACITY =
        e.SKEW_Y =
        e.SKEW_X =
        e.SKEW =
        e.ROTATE_Z =
        e.ROTATE_Y =
        e.ROTATE_X =
        e.SCALE_3D =
        e.SCALE_Z =
        e.SCALE_Y =
        e.SCALE_X =
        e.TRANSLATE_3D =
        e.TRANSLATE_Z =
        e.TRANSLATE_Y =
        e.TRANSLATE_X =
        e.TRANSFORM =
        e.CONFIG_UNIT =
        e.CONFIG_Z_UNIT =
        e.CONFIG_Y_UNIT =
        e.CONFIG_X_UNIT =
        e.CONFIG_VALUE =
        e.CONFIG_Z_VALUE =
        e.CONFIG_Y_VALUE =
        e.CONFIG_X_VALUE =
        e.BOUNDARY_SELECTOR =
        e.W_MOD_IX =
        e.W_MOD_JS =
        e.WF_PAGE =
        e.IX2_ID_DELIMITER =
          void 0);
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN";
  },
  function (t, e, n) {
    "use strict";
    var r,
      i = n(0)(n(27)),
      o = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ixRequest = void 0);
    var a = o(n(28)),
      u = n(3),
      c = n(20),
      s = u.IX2EngineActionTypes,
      l = s.IX2_PREVIEW_REQUESTED,
      f = s.IX2_PLAYBACK_REQUESTED,
      d = s.IX2_STOP_REQUESTED,
      p = s.IX2_CLEAR_REQUESTED,
      v = { preview: {}, playback: {}, stop: {}, clear: {} },
      h = Object.create(
        null,
        ((r = {}),
        (0, i.default)(r, l, { value: "preview" }),
        (0, i.default)(r, f, { value: "playback" }),
        (0, i.default)(r, d, { value: "stop" }),
        (0, i.default)(r, p, { value: "clear" }),
        r)
      );
    e.ixRequest = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
        e = arguments.length > 1 ? arguments[1] : void 0;
      if (e.type in h) {
        var n = [h[e.type]];
        return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload));
      }
      return t;
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ixSession = void 0);
    var r = n(3),
      i = n(20),
      o = r.IX2EngineActionTypes,
      a = o.IX2_SESSION_INITIALIZED,
      u = o.IX2_SESSION_STARTED,
      c = o.IX2_TEST_FRAME_RENDERED,
      s = o.IX2_SESSION_STOPPED,
      l = o.IX2_EVENT_LISTENER_ADDED,
      f = o.IX2_EVENT_STATE_CHANGED,
      d = o.IX2_ANIMATION_FRAME_CHANGED,
      p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      v = o.IX2_VIEWPORT_WIDTH_CHANGED,
      h = o.IX2_MEDIA_QUERIES_DEFINED,
      g = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
      };
    e.ixSession = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case a:
          var n = e.payload.hasBoundaryNodes;
          return (0, i.set)(t, "hasBoundaryNodes", n);
        case u:
          return (0, i.set)(t, "active", !0);
        case c:
          var r = e.payload.step,
            o = void 0 === r ? 20 : r;
          return (0, i.set)(t, "tick", t.tick + o);
        case s:
          return g;
        case d:
          var E = e.payload.now;
          return (0, i.set)(t, "tick", E);
        case l:
          var m = (0, i.addLast)(t.eventListeners, e.payload);
          return (0, i.set)(t, "eventListeners", m);
        case f:
          var y = e.payload,
            _ = y.stateKey,
            I = y.newState;
          return (0, i.setIn)(t, ["eventState", _], I);
        case p:
          var b = e.payload,
            w = b.actionListId,
            T = b.isPlaying;
          return (0, i.setIn)(t, ["playbackState", w], T);
        case v:
          for (
            var O = e.payload,
              A = O.width,
              x = O.mediaQueries,
              S = x.length,
              R = null,
              C = 0;
            C < S;
            C++
          ) {
            var N = x[C],
              L = N.key,
              D = N.min,
              P = N.max;
            if (A >= D && A <= P) {
              R = L;
              break;
            }
          }
          return (0, i.merge)(t, { viewportWidth: A, mediaQueryKey: R });
        case h:
          return (0, i.set)(t, "hasDefinedMediaQueries", !0);
        default:
          return t;
      }
    };
  },
  function (t, e, n) {
    var r = n(179),
      i = n(231),
      o = n(101);
    t.exports = function (t) {
      var e = i(t);
      return 1 == e.length && e[0][2]
        ? o(e[0][0], e[0][1])
        : function (n) {
            return n === t || r(n, t, e);
          };
    };
  },
  function (t, e, n) {
    var r = n(87),
      i = n(91),
      o = 1,
      a = 2;
    t.exports = function (t, e, n, u) {
      var c = n.length,
        s = c,
        l = !u;
      if (null == t) return !s;
      for (t = Object(t); c--; ) {
        var f = n[c];
        if (l && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1;
      }
      for (; ++c < s; ) {
        var d = (f = n[c])[0],
          p = t[d],
          v = f[1];
        if (l && f[2]) {
          if (void 0 === p && !(d in t)) return !1;
        } else {
          var h = new r();
          if (u) var g = u(p, v, d, t, e, h);
          if (!(void 0 === g ? i(v, p, o | a, u, h) : g)) return !1;
        }
      }
      return !0;
    };
  },
  function (t, e) {
    t.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (t, e, n) {
    var r = n(30),
      i = Array.prototype.splice;
    t.exports = function (t) {
      var e = this.__data__,
        n = r(e, t);
      return !(
        n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0)
      );
    };
  },
  function (t, e, n) {
    var r = n(30);
    t.exports = function (t) {
      var e = this.__data__,
        n = r(e, t);
      return n < 0 ? void 0 : e[n][1];
    };
  },
  function (t, e, n) {
    var r = n(30);
    t.exports = function (t) {
      return r(this.__data__, t) > -1;
    };
  },
  function (t, e, n) {
    var r = n(30);
    t.exports = function (t, e) {
      var n = this.__data__,
        i = r(n, t);
      return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
    };
  },
  function (t, e, n) {
    var r = n(29);
    t.exports = function () {
      (this.__data__ = new r()), (this.size = 0);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.__data__,
        n = e.delete(t);
      return (this.size = e.size), n;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.get(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e, n) {
    var r = n(29),
      i = n(46),
      o = n(47),
      a = 200;
    t.exports = function (t, e) {
      var n = this.__data__;
      if (n instanceof r) {
        var u = n.__data__;
        if (!i || u.length < a - 1)
          return u.push([t, e]), (this.size = ++n.size), this;
        n = this.__data__ = new o(u);
      }
      return n.set(t, e), (this.size = n.size), this;
    };
  },
  function (t, e, n) {
    var r = n(88),
      i = n(193),
      o = n(6),
      a = n(90),
      u = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      s = Object.prototype,
      l = c.toString,
      f = s.hasOwnProperty,
      d = RegExp(
        "^" +
          l
            .call(f)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    t.exports = function (t) {
      return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
    };
  },
  function (t, e, n) {
    var r = n(21),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r ? r.toStringTag : void 0;
    t.exports = function (t) {
      var e = o.call(t, u),
        n = t[u];
      try {
        t[u] = void 0;
        var r = !0;
      } catch (t) {}
      var i = a.call(t);
      return r && (e ? (t[u] = n) : delete t[u]), i;
    };
  },
  function (t, e) {
    var n = Object.prototype.toString;
    t.exports = function (t) {
      return n.call(t);
    };
  },
  function (t, e, n) {
    var r,
      i = n(194),
      o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + r
        : "";
    t.exports = function (t) {
      return !!o && o in t;
    };
  },
  function (t, e, n) {
    var r = n(5)["__core-js_shared__"];
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t ? void 0 : t[e];
    };
  },
  function (t, e, n) {
    var r = n(197),
      i = n(29),
      o = n(46);
    t.exports = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new r(),
          map: new (o || i)(),
          string: new r(),
        });
    };
  },
  function (t, e, n) {
    var r = n(198),
      i = n(199),
      o = n(200),
      a = n(201),
      u = n(202);
    function c(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (t.exports = c);
  },
  function (t, e, n) {
    var r = n(31);
    t.exports = function () {
      (this.__data__ = r ? r(null) : {}), (this.size = 0);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e, n) {
    var r = n(31),
      i = "__lodash_hash_undefined__",
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      if (r) {
        var n = e[t];
        return n === i ? void 0 : n;
      }
      return o.call(e, t) ? e[t] : void 0;
    };
  },
  function (t, e, n) {
    var r = n(31),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      return r ? void 0 !== e[t] : i.call(e, t);
    };
  },
  function (t, e, n) {
    var r = n(31),
      i = "__lodash_hash_undefined__";
    t.exports = function (t, e) {
      var n = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (n[t] = r && void 0 === e ? i : e),
        this
      );
    };
  },
  function (t, e, n) {
    var r = n(32);
    t.exports = function (t) {
      var e = r(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e
        ? "__proto__" !== t
        : null === t;
    };
  },
  function (t, e, n) {
    var r = n(32);
    t.exports = function (t) {
      return r(this, t).get(t);
    };
  },
  function (t, e, n) {
    var r = n(32);
    t.exports = function (t) {
      return r(this, t).has(t);
    };
  },
  function (t, e, n) {
    var r = n(32);
    t.exports = function (t, e) {
      var n = r(this, t),
        i = n.size;
      return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
    };
  },
  function (t, e, n) {
    var r = n(87),
      i = n(92),
      o = n(214),
      a = n(218),
      u = n(55),
      c = n(1),
      s = n(49),
      l = n(51),
      f = 1,
      d = "[object Arguments]",
      p = "[object Array]",
      v = "[object Object]",
      h = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, g, E, m) {
      var y = c(t),
        _ = c(e),
        I = y ? p : u(t),
        b = _ ? p : u(e),
        w = (I = I == d ? v : I) == v,
        T = (b = b == d ? v : b) == v,
        O = I == b;
      if (O && s(t)) {
        if (!s(e)) return !1;
        (y = !0), (w = !1);
      }
      if (O && !w)
        return (
          m || (m = new r()),
          y || l(t) ? i(t, e, n, g, E, m) : o(t, e, I, n, g, E, m)
        );
      if (!(n & f)) {
        var A = w && h.call(t, "__wrapped__"),
          x = T && h.call(e, "__wrapped__");
        if (A || x) {
          var S = A ? t.value() : t,
            R = x ? e.value() : e;
          return m || (m = new r()), E(S, R, n, g, m);
        }
      }
      return !!O && (m || (m = new r()), a(t, e, n, g, E, m));
    };
  },
  function (t, e, n) {
    var r = n(47),
      i = n(210),
      o = n(211);
    function a(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
    }
    (a.prototype.add = a.prototype.push = i),
      (a.prototype.has = o),
      (t.exports = a);
  },
  function (t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function (t) {
      return this.__data__.set(t, n), this;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
        if (e(t[n], n, t)) return !0;
      return !1;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t.has(e);
    };
  },
  function (t, e, n) {
    var r = n(21),
      i = n(215),
      o = n(45),
      a = n(92),
      u = n(216),
      c = n(217),
      s = 1,
      l = 2,
      f = "[object Boolean]",
      d = "[object Date]",
      p = "[object Error]",
      v = "[object Map]",
      h = "[object Number]",
      g = "[object RegExp]",
      E = "[object Set]",
      m = "[object String]",
      y = "[object Symbol]",
      _ = "[object ArrayBuffer]",
      I = "[object DataView]",
      b = r ? r.prototype : void 0,
      w = b ? b.valueOf : void 0;
    t.exports = function (t, e, n, r, b, T, O) {
      switch (n) {
        case I:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            return !1;
          (t = t.buffer), (e = e.buffer);
        case _:
          return !(t.byteLength != e.byteLength || !T(new i(t), new i(e)));
        case f:
        case d:
        case h:
          return o(+t, +e);
        case p:
          return t.name == e.name && t.message == e.message;
        case g:
        case m:
          return t == e + "";
        case v:
          var A = u;
        case E:
          var x = r & s;
          if ((A || (A = c), t.size != e.size && !x)) return !1;
          var S = O.get(t);
          if (S) return S == e;
          (r |= l), O.set(t, e);
          var R = a(A(t), A(e), r, b, T, O);
          return O.delete(t), R;
        case y:
          if (w) return w.call(t) == w.call(e);
      }
      return !1;
    };
  },
  function (t, e, n) {
    var r = n(5).Uint8Array;
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t, r) {
          n[++e] = [r, t];
        }),
        n
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t) {
          n[++e] = t;
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(219),
      i = 1,
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, a, u, c) {
      var s = n & i,
        l = r(t),
        f = l.length;
      if (f != r(e).length && !s) return !1;
      for (var d = f; d--; ) {
        var p = l[d];
        if (!(s ? p in e : o.call(e, p))) return !1;
      }
      var v = c.get(t),
        h = c.get(e);
      if (v && h) return v == e && h == t;
      var g = !0;
      c.set(t, e), c.set(e, t);
      for (var E = s; ++d < f; ) {
        var m = t[(p = l[d])],
          y = e[p];
        if (a) var _ = s ? a(y, m, p, e, t, c) : a(m, y, p, t, e, c);
        if (!(void 0 === _ ? m === y || u(m, y, n, a, c) : _)) {
          g = !1;
          break;
        }
        E || (E = "constructor" == p);
      }
      if (g && !E) {
        var I = t.constructor,
          b = e.constructor;
        I != b &&
          "constructor" in t &&
          "constructor" in e &&
          !(
            "function" == typeof I &&
            I instanceof I &&
            "function" == typeof b &&
            b instanceof b
          ) &&
          (g = !1);
      }
      return c.delete(t), c.delete(e), g;
    };
  },
  function (t, e, n) {
    var r = n(93),
      i = n(94),
      o = n(33);
    t.exports = function (t) {
      return r(t, o, i);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
        var a = t[n];
        e(a, n, t) && (o[i++] = a);
      }
      return o;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
      return r;
    };
  },
  function (t, e, n) {
    var r = n(11),
      i = n(9),
      o = "[object Arguments]";
    t.exports = function (t) {
      return i(t) && r(t) == o;
    };
  },
  function (t, e) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, e, n) {
    var r = n(11),
      i = n(52),
      o = n(9),
      a = {};
    (a["[object Float32Array]"] =
      a["[object Float64Array]"] =
      a["[object Int8Array]"] =
      a["[object Int16Array]"] =
      a["[object Int32Array]"] =
      a["[object Uint8Array]"] =
      a["[object Uint8ClampedArray]"] =
      a["[object Uint16Array]"] =
      a["[object Uint32Array]"] =
        !0),
      (a["[object Arguments]"] =
        a["[object Array]"] =
        a["[object ArrayBuffer]"] =
        a["[object Boolean]"] =
        a["[object DataView]"] =
        a["[object Date]"] =
        a["[object Error]"] =
        a["[object Function]"] =
        a["[object Map]"] =
        a["[object Number]"] =
        a["[object Object]"] =
        a["[object RegExp]"] =
        a["[object Set]"] =
        a["[object String]"] =
        a["[object WeakMap]"] =
          !1),
      (t.exports = function (t) {
        return o(t) && i(t.length) && !!a[r(t)];
      });
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  },
  function (t, e, n) {
    (function (t) {
      var r = n(89),
        i = e && !e.nodeType && e,
        o = i && "object" == typeof t && t && !t.nodeType && t,
        a = o && o.exports === i && r.process,
        u = (function () {
          try {
            var t = o && o.require && o.require("util").types;
            return t || (a && a.binding && a.binding("util"));
          } catch (t) {}
        })();
      t.exports = u;
    }.call(this, n(97)(t)));
  },
  function (t, e, n) {
    var r = n(98)(Object.keys, Object);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(8)(n(5), "DataView");
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(8)(n(5), "Promise");
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(8)(n(5), "Set");
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(100),
      i = n(33);
    t.exports = function (t) {
      for (var e = i(t), n = e.length; n--; ) {
        var o = e[n],
          a = t[o];
        e[n] = [o, a, r(a)];
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(91),
      i = n(56),
      o = n(238),
      a = n(58),
      u = n(100),
      c = n(101),
      s = n(22),
      l = 1,
      f = 2;
    t.exports = function (t, e) {
      return a(t) && u(e)
        ? c(s(t), e)
        : function (n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, l | f);
          };
    };
  },
  function (t, e, n) {
    var r = n(234),
      i =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      o = /\\(\\)?/g,
      a = r(function (t) {
        var e = [];
        return (
          46 === t.charCodeAt(0) && e.push(""),
          t.replace(i, function (t, n, r, i) {
            e.push(r ? i.replace(o, "$1") : n || t);
          }),
          e
        );
      });
    t.exports = a;
  },
  function (t, e, n) {
    var r = n(235),
      i = 500;
    t.exports = function (t) {
      var e = r(t, function (t) {
          return n.size === i && n.clear(), t;
        }),
        n = e.cache;
      return e;
    };
  },
  function (t, e, n) {
    var r = n(47),
      i = "Expected a function";
    function o(t, e) {
      if ("function" != typeof t || (null != e && "function" != typeof e))
        throw new TypeError(i);
      var n = function () {
        var r = arguments,
          i = e ? e.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = t.apply(this, r);
        return (n.cache = o.set(i, a) || o), a;
      };
      return (n.cache = new (o.Cache || r)()), n;
    }
    (o.Cache = r), (t.exports = o);
  },
  function (t, e, n) {
    var r = n(237);
    t.exports = function (t) {
      return null == t ? "" : r(t);
    };
  },
  function (t, e, n) {
    var r = n(21),
      i = n(102),
      o = n(1),
      a = n(36),
      u = 1 / 0,
      c = r ? r.prototype : void 0,
      s = c ? c.toString : void 0;
    t.exports = function t(e) {
      if ("string" == typeof e) return e;
      if (o(e)) return i(e, t) + "";
      if (a(e)) return s ? s.call(e) : "";
      var n = e + "";
      return "0" == n && 1 / e == -u ? "-0" : n;
    };
  },
  function (t, e, n) {
    var r = n(239),
      i = n(240);
    t.exports = function (t, e) {
      return null != t && i(t, e, r);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null != t && e in Object(t);
    };
  },
  function (t, e, n) {
    var r = n(35),
      i = n(34),
      o = n(1),
      a = n(50),
      u = n(52),
      c = n(22);
    t.exports = function (t, e, n) {
      for (var s = -1, l = (e = r(e, t)).length, f = !1; ++s < l; ) {
        var d = c(e[s]);
        if (!(f = null != t && n(t, d))) break;
        t = t[d];
      }
      return f || ++s != l
        ? f
        : !!(l = null == t ? 0 : t.length) && u(l) && a(d, l) && (o(t) || i(t));
    };
  },
  function (t, e, n) {
    var r = n(103),
      i = n(242),
      o = n(58),
      a = n(22);
    t.exports = function (t) {
      return o(t) ? r(a(t)) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(57);
    t.exports = function (t) {
      return function (e) {
        return r(e, t);
      };
    };
  },
  function (t, e, n) {
    var r = n(104),
      i = n(7),
      o = n(105),
      a = Math.max;
    t.exports = function (t, e, n) {
      var u = null == t ? 0 : t.length;
      if (!u) return -1;
      var c = null == n ? 0 : o(n);
      return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
    };
  },
  function (t, e, n) {
    var r = n(60),
      i = 1 / 0,
      o = 1.7976931348623157e308;
    t.exports = function (t) {
      return t
        ? (t = r(t)) === i || t === -i
          ? (t < 0 ? -1 : 1) * o
          : t == t
          ? t
          : 0
        : 0 === t
        ? t
        : 0;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
      }
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (
        Symbol.iterator in Object(t) ||
        "[object Arguments]" === Object.prototype.toString.call(t)
      )
        return Array.from(t);
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.createElementState = I),
      (e.mergeActionState = b),
      (e.ixElements = void 0);
    var r = n(20),
      i = n(3),
      o = i.IX2EngineConstants,
      a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
      u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
      c = o.CONFIG_Y_VALUE,
      s = o.CONFIG_Z_VALUE,
      l = o.CONFIG_VALUE,
      f = o.CONFIG_X_UNIT,
      d = o.CONFIG_Y_UNIT,
      p = o.CONFIG_Z_UNIT,
      v = o.CONFIG_UNIT,
      h = i.IX2EngineActionTypes,
      g = h.IX2_SESSION_STOPPED,
      E = h.IX2_INSTANCE_ADDED,
      m = h.IX2_ELEMENT_STATE_CHANGED,
      y = {},
      _ = "refState";
    function I(t, e, n, i, o) {
      var u =
        n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
      return (0, r.mergeIn)(t, [i], { id: i, ref: e, refId: u, refType: n });
    }
    function b(t, e, n, i, o) {
      var a = (function (t) {
          var e = t.config;
          return w.reduce(function (t, n) {
            var r = n[0],
              i = n[1],
              o = e[r],
              a = e[i];
            return null != o && null != a && (t[i] = a), t;
          }, {});
        })(o),
        u = [e, _, n];
      return (0, r.mergeIn)(t, u, i, a);
    }
    e.ixElements = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      switch (e.type) {
        case g:
          return y;
        case E:
          var n = e.payload,
            i = n.elementId,
            o = n.element,
            a = n.origin,
            u = n.actionItem,
            c = n.refType,
            s = u.actionTypeId,
            l = t;
          return (
            (0, r.getIn)(l, [i, o]) !== o && (l = I(l, o, c, i, u)),
            b(l, i, s, a, u)
          );
        case m:
          var f = e.payload;
          return b(t, f.elementId, f.actionTypeId, f.current, f.actionItem);
        default:
          return t;
      }
    };
    var w = [
      [u, f],
      [c, d],
      [s, p],
      [l, v],
    ];
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.clearPlugin =
        e.renderPlugin =
        e.createPluginInstance =
        e.getPluginDestination =
        e.getPluginOrigin =
        e.getPluginDuration =
        e.getPluginConfig =
          void 0);
    e.getPluginConfig = function (t) {
      return t.value;
    };
    e.getPluginDuration = function (t, e) {
      if ("auto" !== e.config.duration) return null;
      var n = parseFloat(t.getAttribute("data-duration"));
      return n > 0
        ? 1e3 * n
        : 1e3 * parseFloat(t.getAttribute("data-default-duration"));
    };
    e.getPluginOrigin = function (t) {
      return t || { value: 0 };
    };
    e.getPluginDestination = function (t) {
      return { value: t.value };
    };
    e.createPluginInstance = function (t) {
      var e = window.Webflow.require("lottie").createInstance(t);
      return e.stop(), e.setSubframe(!0), e;
    };
    e.renderPlugin = function (t, e, n) {
      if (t) {
        var r = e[n.actionTypeId].value / 100;
        t.goToFrame(t.frames * r);
      }
    };
    e.clearPlugin = function (t) {
      window.Webflow.require("lottie").createInstance(t).stop();
    };
  },
  function (t, e, n) {
    "use strict";
    var r,
      i,
      o,
      a = n(0),
      u = a(n(13)),
      c = a(n(27)),
      s = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getInstanceId = function () {
        return "i" + vt++;
      }),
      (e.getElementId = function (t, e) {
        for (var n in t) {
          var r = t[n];
          if (r && r.ref === e) return r.id;
        }
        return "e" + ht++;
      }),
      (e.reifyState = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.events,
          n = t.actionLists,
          r = t.site,
          i = (0, f.default)(
            e,
            function (t, e) {
              var n = e.eventTypeId;
              return t[n] || (t[n] = {}), (t[n][e.id] = e), t;
            },
            {}
          ),
          o = r && r.mediaQueries,
          a = [];
        o
          ? (a = o.map(function (t) {
              return t.key;
            }))
          : ((o = []), console.warn("IX2 missing mediaQueries in site data"));
        return {
          ixData: {
            events: e,
            actionLists: n,
            eventTypeMap: i,
            mediaQueries: o,
            mediaQueryKeys: a,
          },
        };
      }),
      (e.observeStore = function (t) {
        var e = t.store,
          n = t.select,
          r = t.onChange,
          i = t.comparator,
          o = void 0 === i ? gt : i,
          a = e.getState,
          u = (0, e.subscribe)(function () {
            var t = n(a());
            if (null == t) return void u();
            o(t, c) || r((c = t), e);
          }),
          c = n(a());
        return u;
      }),
      (e.getAffectedElements = mt),
      (e.getComputedStyle = function (t) {
        var e = t.element,
          n = t.actionItem;
        if (!m.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
          case it:
          case ot:
          case at:
          case ut:
          case ct:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }),
      (e.getInstanceOrigin = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
          o = r.actionTypeId,
          a = r.config;
        if ((0, E.isPluginType)(o)) return (0, E.getPluginOrigin)(o)(e[o]);
        switch (o) {
          case Z:
          case J:
          case tt:
          case et:
            return e[o] || wt[o];
          case rt:
            return _t(e[o], r.config.filters);
          case nt:
            return { value: (0, l.default)(parseFloat(i(t, C)), 1) };
          case it:
            var u,
              c,
              s = i(t, L),
              f = i(t, D);
            return (
              (u =
                a.widthUnit === W
                  ? yt.test(s)
                    ? parseFloat(s)
                    : parseFloat(n.width)
                  : (0, l.default)(parseFloat(s), parseFloat(n.width))),
              (c =
                a.heightUnit === W
                  ? yt.test(f)
                    ? parseFloat(f)
                    : parseFloat(n.height)
                  : (0, l.default)(parseFloat(f), parseFloat(n.height))),
              { widthValue: u, heightValue: c }
            );
          case ot:
          case at:
          case ut:
            return (function (t) {
              var e = t.element,
                n = t.actionTypeId,
                r = t.computedStyle,
                i = t.getStyle,
                o = ft[n],
                a = i(e, o),
                u = xt.test(a) ? a : r[o],
                c = (function (t, e) {
                  var n = t.exec(e);
                  return n ? n[1] : "";
                })(St, u).split(B);
              return {
                rValue: (0, l.default)(parseInt(c[0], 10), 255),
                gValue: (0, l.default)(parseInt(c[1], 10), 255),
                bValue: (0, l.default)(parseInt(c[2], 10), 255),
                aValue: (0, l.default)(parseFloat(c[3]), 1),
              };
            })({ element: t, actionTypeId: o, computedStyle: n, getStyle: i });
          case ct:
            return { value: (0, l.default)(i(t, U), n.display) };
          case st:
            return e[o] || { value: 0 };
          default:
            return;
        }
      }),
      (e.getDestinationValues = function (t) {
        var e = t.element,
          n = t.actionItem,
          r = t.elementApi,
          i = n.actionTypeId;
        if ((0, E.isPluginType)(i))
          return (0, E.getPluginDestination)(i)(n.config);
        switch (i) {
          case Z:
          case J:
          case tt:
          case et:
            var o = n.config,
              a = o.xValue,
              u = o.yValue,
              c = o.zValue;
            return { xValue: a, yValue: u, zValue: c };
          case it:
            var s = r.getStyle,
              l = r.setStyle,
              f = r.getProperty,
              d = n.config,
              p = d.widthUnit,
              v = d.heightUnit,
              h = n.config,
              g = h.widthValue,
              y = h.heightValue;
            if (!m.IS_BROWSER_ENV) return { widthValue: g, heightValue: y };
            if (p === W) {
              var _ = s(e, L);
              l(e, L, ""), (g = f(e, "offsetWidth")), l(e, L, _);
            }
            if (v === W) {
              var I = s(e, D);
              l(e, D, ""), (y = f(e, "offsetHeight")), l(e, D, I);
            }
            return { widthValue: g, heightValue: y };
          case ot:
          case at:
          case ut:
            var b = n.config,
              w = b.rValue,
              T = b.gValue,
              O = b.bValue,
              A = b.aValue;
            return { rValue: w, gValue: T, bValue: O, aValue: A };
          case rt:
            return n.config.filters.reduce(It, {});
          default:
            var x = n.config.value;
            return { value: x };
        }
      }),
      (e.getRenderType = bt),
      (e.getStyleProp = function (t, e) {
        return t === Q ? e.replace("STYLE_", "").toLowerCase() : null;
      }),
      (e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
        switch (u) {
          case Y:
            return (function (t, e, n, r, i) {
              var o = At.map(function (t) {
                  var n = wt[t],
                    r = e[t] || {},
                    i = r.xValue,
                    o = void 0 === i ? n.xValue : i,
                    a = r.yValue,
                    u = void 0 === a ? n.yValue : a,
                    c = r.zValue,
                    s = void 0 === c ? n.zValue : c,
                    l = r.xUnit,
                    f = void 0 === l ? "" : l,
                    d = r.yUnit,
                    p = void 0 === d ? "" : d,
                    v = r.zUnit,
                    h = void 0 === v ? "" : v;
                  switch (t) {
                    case Z:
                      return ""
                        .concat(b, "(")
                        .concat(o)
                        .concat(f, ", ")
                        .concat(u)
                        .concat(p, ", ")
                        .concat(s)
                        .concat(h, ")");
                    case J:
                      return ""
                        .concat(w, "(")
                        .concat(o)
                        .concat(f, ", ")
                        .concat(u)
                        .concat(p, ", ")
                        .concat(s)
                        .concat(h, ")");
                    case tt:
                      return ""
                        .concat(T, "(")
                        .concat(o)
                        .concat(f, ") ")
                        .concat(O, "(")
                        .concat(u)
                        .concat(p, ") ")
                        .concat(A, "(")
                        .concat(s)
                        .concat(h, ")");
                    case et:
                      return ""
                        .concat(x, "(")
                        .concat(o)
                        .concat(f, ", ")
                        .concat(u)
                        .concat(p, ")");
                    default:
                      return "";
                  }
                }).join(" "),
                a = i.setStyle;
              Rt(t, m.TRANSFORM_PREFIXED, i),
                a(t, m.TRANSFORM_PREFIXED, o),
                (u = r),
                (c = n),
                (s = u.actionTypeId),
                (l = c.xValue),
                (f = c.yValue),
                (d = c.zValue),
                ((s === Z && void 0 !== d) ||
                  (s === J && void 0 !== d) ||
                  (s === tt && (void 0 !== l || void 0 !== f))) &&
                  a(t, m.TRANSFORM_STYLE_PREFIXED, S);
              var u, c, s, l, f, d;
            })(t, e, n, i, a);
          case Q:
            return (function (t, e, n, r, i, o) {
              var a = o.setStyle,
                u = r.actionTypeId,
                c = r.config;
              switch (u) {
                case it:
                  var s = r.config,
                    l = s.widthUnit,
                    d = void 0 === l ? "" : l,
                    p = s.heightUnit,
                    v = void 0 === p ? "" : p,
                    h = n.widthValue,
                    g = n.heightValue;
                  void 0 !== h &&
                    (d === W && (d = "px"), Rt(t, L, o), a(t, L, h + d)),
                    void 0 !== g &&
                      (v === W && (v = "px"), Rt(t, D, o), a(t, D, g + v));
                  break;
                case rt:
                  !(function (t, e, n, r) {
                    var i = (0, f.default)(
                        e,
                        function (t, e, r) {
                          return ""
                            .concat(t, " ")
                            .concat(r, "(")
                            .concat(e)
                            .concat(Ot(r, n), ")");
                        },
                        ""
                      ),
                      o = r.setStyle;
                    Rt(t, N, r), o(t, N, i);
                  })(t, n, c, o);
                  break;
                case ot:
                case at:
                case ut:
                  var E = ft[u],
                    m = Math.round(n.rValue),
                    y = Math.round(n.gValue),
                    _ = Math.round(n.bValue),
                    I = n.aValue;
                  Rt(t, E, o),
                    a(
                      t,
                      E,
                      I >= 1
                        ? "rgb(".concat(m, ",").concat(y, ",").concat(_, ")")
                        : "rgba("
                            .concat(m, ",")
                            .concat(y, ",")
                            .concat(_, ",")
                            .concat(I, ")")
                    );
                  break;
                default:
                  var b = c.unit,
                    w = void 0 === b ? "" : b;
                  Rt(t, i, o), a(t, i, n.value + w);
              }
            })(t, 0, n, i, o, a);
          case K:
            return (function (t, e, n) {
              var r = n.setStyle;
              switch (e.actionTypeId) {
                case ct:
                  var i = e.config.value;
                  return void (i === R && m.IS_BROWSER_ENV
                    ? r(t, U, m.FLEX_PREFIXED)
                    : r(t, U, i));
              }
            })(t, i, a);
          case q:
            var s = i.actionTypeId;
            if ((0, E.isPluginType)(s)) return (0, E.renderPlugin)(s)(c, e, i);
        }
      }),
      (e.clearAllStyles = function (t) {
        var e = t.store,
          n = t.elementApi,
          r = e.getState().ixData,
          i = r.events,
          o = void 0 === i ? {} : i,
          a = r.actionLists,
          u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function (t) {
          var e = o[t],
            r = e.action.config,
            i = r.actionListId,
            a = u[i];
          a && Nt({ actionList: a, event: e, elementApi: n });
        }),
          Object.keys(u).forEach(function (t) {
            Nt({ actionList: u[t], elementApi: n });
          });
      }),
      (e.cleanupHTMLElement = function (t, e, n) {
        var r = n.setStyle,
          i = n.getStyle,
          o = e.actionTypeId;
        if (o === it) {
          var a = e.config;
          a.widthUnit === W && r(t, L, ""), a.heightUnit === W && r(t, D, "");
        }
        i(t, V) && Dt({ effect: Ct, actionTypeId: o, elementApi: n })(t);
      }),
      (e.getMaxDurationItemIndex = Mt),
      (e.getActionListProgress = function (t, e) {
        var n = t.actionItemGroups,
          r = t.useFirstGroupAsInitialState,
          i = e.actionItem,
          o = e.verboseTimeElapsed,
          a = void 0 === o ? 0 : o,
          u = 0,
          c = 0;
        return (
          n.forEach(function (t, e) {
            if (!r || 0 !== e) {
              var n = t.actionItems,
                o = n[Mt(n)],
                s = o.config,
                l = o.actionTypeId;
              i.id === o.id && (c = u + a);
              var f = bt(l) === K ? 0 : s.duration;
              u += s.delay + f;
            }
          }),
          u > 0 ? (0, g.optimizeFloat)(c / u) : 0
        );
      }),
      (e.reduceListToGroup = function (t) {
        var e = t.actionList,
          n = t.actionItemId,
          r = t.rawData,
          i = e.actionItemGroups,
          o = e.continuousParameterGroups,
          a = [],
          u = function (t) {
            return (
              a.push((0, p.mergeIn)(t, ["config"], { delay: 0, duration: 0 })),
              t.id === n
            );
          };
        return (
          i &&
            i.some(function (t) {
              return t.actionItems.some(u);
            }),
          o &&
            o.some(function (t) {
              return t.continuousActionGroups.some(function (t) {
                return t.actionItems.some(u);
              });
            }),
          (0, p.setIn)(
            r,
            ["actionLists"],
            (0, c.default)({}, e.id, {
              id: e.id,
              actionItemGroups: [{ actionItems: a }],
            })
          )
        );
      }),
      (e.shouldNamespaceEventParameter = function (t, e) {
        var n = e.basedOn;
        return (
          (t === h.EventTypeConsts.SCROLLING_IN_VIEW &&
            (n === h.EventBasedOn.ELEMENT || null == n)) ||
          (t === h.EventTypeConsts.MOUSE_MOVE && n === h.EventBasedOn.ELEMENT)
        );
      }),
      (e.getNamespacedParameterId = function (t, e) {
        return t + H + e;
      }),
      (e.shouldAllowMediaQuery = function (t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e);
      }),
      (e.mediaQueriesEqual = function (t, e) {
        return (0, v.default)(t && t.sort(), e && e.sort());
      }),
      (e.stringifyTarget = function (t) {
        if ("string" == typeof t) return t;
        var e = t.id,
          n = void 0 === e ? "" : e,
          r = t.selector,
          i = void 0 === r ? "" : r,
          o = t.useEventTarget;
        return n + z + i + z + (void 0 === o ? "" : o);
      }),
      (e.getItemConfigByKey = void 0);
    var l = s(n(251)),
      f = s(n(252)),
      d = s(n(258)),
      p = n(20),
      v = s(n(113)),
      h = n(3),
      g = n(108),
      E = n(110),
      m = n(44),
      y = h.IX2EngineConstants,
      _ = y.BACKGROUND,
      I = y.TRANSFORM,
      b = y.TRANSLATE_3D,
      w = y.SCALE_3D,
      T = y.ROTATE_X,
      O = y.ROTATE_Y,
      A = y.ROTATE_Z,
      x = y.SKEW,
      S = y.PRESERVE_3D,
      R = y.FLEX,
      C = y.OPACITY,
      N = y.FILTER,
      L = y.WIDTH,
      D = y.HEIGHT,
      P = y.BACKGROUND_COLOR,
      M = y.BORDER_COLOR,
      j = y.COLOR,
      F = y.CHILDREN,
      k = y.IMMEDIATE_CHILDREN,
      X = y.SIBLINGS,
      G = y.PARENT,
      U = y.DISPLAY,
      V = y.WILL_CHANGE,
      W = y.AUTO,
      B = y.COMMA_DELIMITER,
      H = y.COLON_DELIMITER,
      z = y.BAR_DELIMITER,
      Y = y.RENDER_TRANSFORM,
      K = y.RENDER_GENERAL,
      Q = y.RENDER_STYLE,
      q = y.RENDER_PLUGIN,
      $ = h.ActionTypeConsts,
      Z = $.TRANSFORM_MOVE,
      J = $.TRANSFORM_SCALE,
      tt = $.TRANSFORM_ROTATE,
      et = $.TRANSFORM_SKEW,
      nt = $.STYLE_OPACITY,
      rt = $.STYLE_FILTER,
      it = $.STYLE_SIZE,
      ot = $.STYLE_BACKGROUND_COLOR,
      at = $.STYLE_BORDER,
      ut = $.STYLE_TEXT_COLOR,
      ct = $.GENERAL_DISPLAY,
      st = "OBJECT_VALUE",
      lt = function (t) {
        return t.trim();
      },
      ft = Object.freeze(
        ((r = {}),
        (0, c.default)(r, ot, P),
        (0, c.default)(r, at, M),
        (0, c.default)(r, ut, j),
        r)
      ),
      dt = Object.freeze(
        ((i = {}),
        (0, c.default)(i, m.TRANSFORM_PREFIXED, I),
        (0, c.default)(i, P, _),
        (0, c.default)(i, C, C),
        (0, c.default)(i, N, N),
        (0, c.default)(i, L, L),
        (0, c.default)(i, D, D),
        i)
      ),
      pt = {},
      vt = 1;
    var ht = 1;
    var gt = function (t, e) {
      return t === e;
    };
    function Et(t) {
      var e = (0, u.default)(t);
      return "string" === e
        ? { id: t }
        : null != t && "object" === e
        ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget,
          }
        : {};
    }
    function mt(t) {
      var e,
        n,
        r,
        i = t.config,
        o = t.event,
        a = t.eventTarget,
        u = t.elementRoot,
        c = t.elementApi;
      if (!c) throw new Error("IX2 missing elementApi");
      var s = i.targets;
      if (Array.isArray(s) && s.length > 0)
        return s.reduce(function (t, e) {
          return t.concat(
            mt({
              config: { target: e },
              event: o,
              eventTarget: a,
              elementRoot: u,
              elementApi: c,
            })
          );
        }, []);
      var l = c.getValidDocument,
        f = c.getQuerySelector,
        d = c.queryDocument,
        p = c.getChildElements,
        v = c.getSiblingElements,
        g = c.matchSelector,
        E = c.elementContains,
        y = c.isSiblingNode,
        _ = i.target;
      if (!_) return [];
      var I = Et(_),
        b = I.id,
        w = I.objectId,
        T = I.selector,
        O = I.selectorGuids,
        A = I.appliesTo,
        x = I.useEventTarget;
      if (w) return [pt[w] || (pt[w] = {})];
      if (A === h.EventAppliesTo.PAGE) {
        var S = l(b);
        return S ? [S] : [];
      }
      var R,
        C,
        N,
        L =
          (null !==
            (e =
              null == o
                ? void 0
                : null === (n = o.action) || void 0 === n
                ? void 0
                : null === (r = n.config) || void 0 === r
                ? void 0
                : r.affectedElements) && void 0 !== e
            ? e
            : {})[b || T] || {},
        D = Boolean(L.id || L.selector),
        P = o && f(Et(o.target));
      if (
        (D
          ? ((R = L.limitAffectedElements), (C = P), (N = f(L)))
          : (C = N = f({ id: b, selector: T, selectorGuids: O })),
        o && x)
      ) {
        var M = a && (N || !0 === x) ? [a] : d(P);
        if (N) {
          if (x === G)
            return d(N).filter(function (t) {
              return M.some(function (e) {
                return E(t, e);
              });
            });
          if (x === F)
            return d(N).filter(function (t) {
              return M.some(function (e) {
                return E(e, t);
              });
            });
          if (x === X)
            return d(N).filter(function (t) {
              return M.some(function (e) {
                return y(e, t);
              });
            });
        }
        return M;
      }
      return null == C || null == N
        ? []
        : m.IS_BROWSER_ENV && u
        ? d(N).filter(function (t) {
            return u.contains(t);
          })
        : R === F
        ? d(C, N)
        : R === k
        ? p(d(C)).filter(g(N))
        : R === X
        ? v(d(C)).filter(g(N))
        : d(N);
    }
    var yt = /px/,
      _t = function (t, e) {
        return e.reduce(function (t, e) {
          return null == t[e.type] && (t[e.type] = Tt[e.type]), t;
        }, t || {});
      };
    var It = function (t, e) {
      return e && (t[e.type] = e.value || 0), t;
    };
    function bt(t) {
      return /^TRANSFORM_/.test(t)
        ? Y
        : /^STYLE_/.test(t)
        ? Q
        : /^GENERAL_/.test(t)
        ? K
        : /^PLUGIN_/.test(t)
        ? q
        : void 0;
    }
    e.getItemConfigByKey = function (t, e, n) {
      if ((0, E.isPluginType)(t)) return (0, E.getPluginConfig)(t)(n, e);
      switch (t) {
        case rt:
          var r = (0, d.default)(n.filters, function (t) {
            return t.type === e;
          });
          return r ? r.value : 0;
        default:
          return n[e];
      }
    };
    var wt =
        ((o = {}),
        (0, c.default)(
          o,
          Z,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, c.default)(
          o,
          J,
          Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })
        ),
        (0, c.default)(
          o,
          tt,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, c.default)(o, et, Object.freeze({ xValue: 0, yValue: 0 })),
        o),
      Tt = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      Ot = function (t, e) {
        var n = (0, d.default)(e.filters, function (e) {
          return e.type === t;
        });
        if (n && n.unit) return n.unit;
        switch (t) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      At = Object.keys(wt);
    var xt = /^rgb/,
      St = RegExp("rgba?".concat("\\(([^)]+)\\)"));
    function Rt(t, e, n) {
      if (m.IS_BROWSER_ENV) {
        var r = dt[e];
        if (r) {
          var i = n.getStyle,
            o = n.setStyle,
            a = i(t, V);
          if (a) {
            var u = a.split(B).map(lt);
            -1 === u.indexOf(r) && o(t, V, u.concat(r).join(B));
          } else o(t, V, r);
        }
      }
    }
    function Ct(t, e, n) {
      if (m.IS_BROWSER_ENV) {
        var r = dt[e];
        if (r) {
          var i = n.getStyle,
            o = n.setStyle,
            a = i(t, V);
          a &&
            -1 !== a.indexOf(r) &&
            o(
              t,
              V,
              a
                .split(B)
                .map(lt)
                .filter(function (t) {
                  return t !== r;
                })
                .join(B)
            );
        }
      }
    }
    function Nt(t) {
      var e = t.actionList,
        n = void 0 === e ? {} : e,
        r = t.event,
        i = t.elementApi,
        o = n.actionItemGroups,
        a = n.continuousParameterGroups;
      o &&
        o.forEach(function (t) {
          Lt({ actionGroup: t, event: r, elementApi: i });
        }),
        a &&
          a.forEach(function (t) {
            t.continuousActionGroups.forEach(function (t) {
              Lt({ actionGroup: t, event: r, elementApi: i });
            });
          });
    }
    function Lt(t) {
      var e = t.actionGroup,
        n = t.event,
        r = t.elementApi;
      e.actionItems.forEach(function (t) {
        var e,
          i = t.actionTypeId,
          o = t.config;
        (e = (0, E.isPluginType)(i)
          ? (0, E.clearPlugin)(i)
          : Dt({ effect: Pt, actionTypeId: i, elementApi: r })),
          mt({ config: o, event: n, elementApi: r }).forEach(e);
      });
    }
    var Dt = function (t) {
      var e = t.effect,
        n = t.actionTypeId,
        r = t.elementApi;
      return function (t) {
        switch (n) {
          case Z:
          case J:
          case tt:
          case et:
            e(t, m.TRANSFORM_PREFIXED, r);
            break;
          case rt:
            e(t, N, r);
            break;
          case nt:
            e(t, C, r);
            break;
          case it:
            e(t, L, r), e(t, D, r);
            break;
          case ot:
          case at:
          case ut:
            e(t, ft[n], r);
            break;
          case ct:
            e(t, U, r);
        }
      };
    };
    function Pt(t, e, n) {
      var r = n.setStyle;
      Ct(t, e, n),
        r(t, e, ""),
        e === m.TRANSFORM_PREFIXED && r(t, m.TRANSFORM_STYLE_PREFIXED, "");
    }
    function Mt(t) {
      var e = 0,
        n = 0;
      return (
        t.forEach(function (t, r) {
          var i = t.config,
            o = i.delay + i.duration;
          o >= e && ((e = o), (n = r));
        }),
        n
      );
    }
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t || t != t ? e : t;
    };
  },
  function (t, e, n) {
    var r = n(253),
      i = n(111),
      o = n(7),
      a = n(257),
      u = n(1);
    t.exports = function (t, e, n) {
      var c = u(t) ? r : a,
        s = arguments.length < 3;
      return c(t, o(e, 4), n, s, i);
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r) {
      var i = -1,
        o = null == t ? 0 : t.length;
      for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
      return n;
    };
  },
  function (t, e, n) {
    var r = n(255)();
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e, n, r) {
        for (var i = -1, o = Object(e), a = r(e), u = a.length; u--; ) {
          var c = a[t ? u : ++i];
          if (!1 === n(o[c], c, o)) break;
        }
        return e;
      };
    };
  },
  function (t, e, n) {
    var r = n(12);
    t.exports = function (t, e) {
      return function (n, i) {
        if (null == n) return n;
        if (!r(n)) return t(n, i);
        for (
          var o = n.length, a = e ? o : -1, u = Object(n);
          (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);

        );
        return n;
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r, i) {
      return (
        i(t, function (t, i, o) {
          n = r ? ((r = !1), t) : e(n, t, i, o);
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(86)(n(259));
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(104),
      i = n(7),
      o = n(105),
      a = Math.max,
      u = Math.min;
    t.exports = function (t, e, n) {
      var c = null == t ? 0 : t.length;
      if (!c) return -1;
      var s = c - 1;
      return (
        void 0 !== n && ((s = o(n)), (s = n < 0 ? a(c + s, 0) : u(s, c - 1))),
        r(t, i(e, 3), s, !0)
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  function (t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;
    function i(t, e) {
      return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
    }
    t.exports = function (t, e) {
      if (i(t, e)) return !0;
      if (
        "object" != typeof t ||
        null === t ||
        "object" != typeof e ||
        null === e
      )
        return !1;
      var n = Object.keys(t),
        o = Object.keys(e);
      if (n.length !== o.length) return !1;
      for (var a = 0; a < n.length; a++)
        if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
      return !0;
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ixInstances = void 0);
    var r = n(3),
      i = n(10),
      o = n(20),
      a = r.IX2EngineActionTypes,
      u = a.IX2_RAW_DATA_IMPORTED,
      c = a.IX2_SESSION_STOPPED,
      s = a.IX2_INSTANCE_ADDED,
      l = a.IX2_INSTANCE_STARTED,
      f = a.IX2_INSTANCE_REMOVED,
      d = a.IX2_ANIMATION_FRAME_CHANGED,
      p = i.IX2EasingUtils,
      v = p.optimizeFloat,
      h = p.applyEasing,
      g = p.createBezierEasing,
      E = r.IX2EngineConstants.RENDER_GENERAL,
      m = i.IX2VanillaUtils,
      y = m.getItemConfigByKey,
      _ = m.getRenderType,
      I = m.getStyleProp,
      b = function (t, e) {
        var n = t.position,
          r = t.parameterId,
          i = t.actionGroups,
          a = t.destinationKeys,
          u = t.smoothing,
          c = t.restingValue,
          s = t.actionTypeId,
          l = t.customEasingFn,
          f = e.payload.parameters,
          d = Math.max(1 - u, 0.01),
          p = f[r];
        null == p && ((d = 1), (p = c));
        var g,
          E,
          m,
          _,
          I = Math.max(p, 0) || 0,
          b = v(I - n),
          w = v(n + b * d),
          T = 100 * w;
        if (w === n && t.current) return t;
        for (var O = 0, A = i.length; O < A; O++) {
          var x = i[O],
            S = x.keyframe,
            R = x.actionItems;
          if ((0 === O && (g = R[0]), T >= S)) {
            g = R[0];
            var C = i[O + 1],
              N = C && T !== S;
            (E = N ? C.actionItems[0] : null),
              N && ((m = S / 100), (_ = (C.keyframe - S) / 100));
          }
        }
        var L = {};
        if (g && !E)
          for (var D = 0, P = a.length; D < P; D++) {
            var M = a[D];
            L[M] = y(s, M, g.config);
          }
        else if (g && E && void 0 !== m && void 0 !== _)
          for (
            var j = (w - m) / _,
              F = g.config.easing,
              k = h(F, j, l),
              X = 0,
              G = a.length;
            X < G;
            X++
          ) {
            var U = a[X],
              V = y(s, U, g.config),
              W = (y(s, U, E.config) - V) * k + V;
            L[U] = W;
          }
        return (0, o.merge)(t, { position: w, current: L });
      },
      w = function (t, e) {
        var n = t,
          r = n.active,
          i = n.origin,
          a = n.start,
          u = n.immediate,
          c = n.renderType,
          s = n.verbose,
          l = n.actionItem,
          f = n.destination,
          d = n.destinationKeys,
          p = n.pluginDuration,
          g = n.instanceDelay,
          m = n.customEasingFn,
          y = l.config.easing,
          _ = l.config,
          I = _.duration,
          b = _.delay;
        null != p && (I = p),
          (b = null != g ? g : b),
          c === E ? (I = 0) : u && (I = b = 0);
        var w = e.payload.now;
        if (r && i) {
          var T = w - (a + b);
          if (s) {
            var O = w - a,
              A = I + b,
              x = v(Math.min(Math.max(0, O / A), 1));
            t = (0, o.set)(t, "verboseTimeElapsed", A * x);
          }
          if (T < 0) return t;
          var S = v(Math.min(Math.max(0, T / I), 1)),
            R = h(y, S, m),
            C = {},
            N = null;
          return (
            d.length &&
              (N = d.reduce(function (t, e) {
                var n = f[e],
                  r = parseFloat(i[e]) || 0,
                  o = (parseFloat(n) - r) * R + r;
                return (t[e] = o), t;
              }, {})),
            (C.current = N),
            (C.position = S),
            1 === S && ((C.active = !1), (C.complete = !0)),
            (0, o.merge)(t, C)
          );
        }
        return t;
      };
    e.ixInstances = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case u:
          return e.payload.ixInstances || Object.freeze({});
        case c:
          return Object.freeze({});
        case s:
          var n = e.payload,
            r = n.instanceId,
            i = n.elementId,
            a = n.actionItem,
            p = n.eventId,
            v = n.eventTarget,
            h = n.eventStateKey,
            E = n.actionListId,
            m = n.groupIndex,
            y = n.isCarrier,
            T = n.origin,
            O = n.destination,
            A = n.immediate,
            x = n.verbose,
            S = n.continuous,
            R = n.parameterId,
            C = n.actionGroups,
            N = n.smoothing,
            L = n.restingValue,
            D = n.pluginInstance,
            P = n.pluginDuration,
            M = n.instanceDelay,
            j = a.actionTypeId,
            F = _(j),
            k = I(F, j),
            X = Object.keys(O).filter(function (t) {
              return null != O[t];
            }),
            G = a.config.easing;
          return (0, o.set)(t, r, {
            id: r,
            elementId: i,
            active: !1,
            position: 0,
            start: 0,
            origin: T,
            destination: O,
            destinationKeys: X,
            immediate: A,
            verbose: x,
            current: null,
            actionItem: a,
            actionTypeId: j,
            eventId: p,
            eventTarget: v,
            eventStateKey: h,
            actionListId: E,
            groupIndex: m,
            renderType: F,
            isCarrier: y,
            styleProp: k,
            continuous: S,
            parameterId: R,
            actionGroups: C,
            smoothing: N,
            restingValue: L,
            pluginInstance: D,
            pluginDuration: P,
            instanceDelay: M,
            customEasingFn: Array.isArray(G) && 4 === G.length ? g(G) : void 0,
          });
        case l:
          var U = e.payload,
            V = U.instanceId,
            W = U.time;
          return (0, o.mergeIn)(t, [V], { active: !0, complete: !1, start: W });
        case f:
          var B = e.payload.instanceId;
          if (!t[B]) return t;
          for (
            var H = {}, z = Object.keys(t), Y = z.length, K = 0;
            K < Y;
            K++
          ) {
            var Q = z[K];
            Q !== B && (H[Q] = t[Q]);
          }
          return H;
        case d:
          for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
            var tt = $[J],
              et = t[tt],
              nt = et.continuous ? b : w;
            q = (0, o.set)(q, tt, nt(et, e));
          }
          return q;
        default:
          return t;
      }
    };
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ixParameters = void 0);
    var r = n(3).IX2EngineActionTypes,
      i = r.IX2_RAW_DATA_IMPORTED,
      o = r.IX2_SESSION_STOPPED,
      a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case i:
          return e.payload.ixParameters || {};
        case o:
          return {};
        case a:
          var n = e.payload,
            r = n.key,
            u = n.value;
          return (t[r] = u), t;
        default:
          return t;
      }
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      if (null == t) return {};
      var n,
        r,
        i = {},
        o = Object.keys(t);
      for (r = 0; r < o.length; r++)
        (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i;
    };
  },
  function (t, e, n) {
    var r = n(53),
      i = n(55),
      o = n(12),
      a = n(266),
      u = n(267),
      c = "[object Map]",
      s = "[object Set]";
    t.exports = function (t) {
      if (null == t) return 0;
      if (o(t)) return a(t) ? u(t) : t.length;
      var e = i(t);
      return e == c || e == s ? t.size : r(t).length;
    };
  },
  function (t, e, n) {
    var r = n(11),
      i = n(1),
      o = n(9),
      a = "[object String]";
    t.exports = function (t) {
      return "string" == typeof t || (!i(t) && o(t) && r(t) == a);
    };
  },
  function (t, e, n) {
    var r = n(268),
      i = n(269),
      o = n(270);
    t.exports = function (t) {
      return i(t) ? o(t) : r(t);
    };
  },
  function (t, e, n) {
    var r = n(103)("length");
    t.exports = r;
  },
  function (t, e) {
    var n = RegExp(
      "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
    );
    t.exports = function (t) {
      return n.test(t);
    };
  },
  function (t, e) {
    var n = "[\\ud800-\\udfff]",
      r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      i = "\\ud83c[\\udffb-\\udfff]",
      o = "[^\\ud800-\\udfff]",
      a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      c = "(?:" + r + "|" + i + ")" + "?",
      s =
        "[\\ufe0e\\ufe0f]?" +
        c +
        ("(?:\\u200d(?:" +
          [o, a, u].join("|") +
          ")[\\ufe0e\\ufe0f]?" +
          c +
          ")*"),
      l = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
      f = RegExp(i + "(?=" + i + ")|" + l + s, "g");
    t.exports = function (t) {
      for (var e = (f.lastIndex = 0); f.test(t); ) ++e;
      return e;
    };
  },
  function (t, e, n) {
    var r = n(7),
      i = n(272),
      o = n(273);
    t.exports = function (t, e) {
      return o(t, i(r(e)));
    };
  },
  function (t, e) {
    var n = "Expected a function";
    t.exports = function (t) {
      if ("function" != typeof t) throw new TypeError(n);
      return function () {
        var e = arguments;
        switch (e.length) {
          case 0:
            return !t.call(this);
          case 1:
            return !t.call(this, e[0]);
          case 2:
            return !t.call(this, e[0], e[1]);
          case 3:
            return !t.call(this, e[0], e[1], e[2]);
        }
        return !t.apply(this, e);
      };
    };
  },
  function (t, e, n) {
    var r = n(102),
      i = n(7),
      o = n(274),
      a = n(277);
    t.exports = function (t, e) {
      if (null == t) return {};
      var n = r(a(t), function (t) {
        return [t];
      });
      return (
        (e = i(e)),
        o(t, n, function (t, n) {
          return e(t, n[0]);
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(57),
      i = n(275),
      o = n(35);
    t.exports = function (t, e, n) {
      for (var a = -1, u = e.length, c = {}; ++a < u; ) {
        var s = e[a],
          l = r(t, s);
        n(l, s) && i(c, o(s, t), l);
      }
      return c;
    };
  },
  function (t, e, n) {
    var r = n(276),
      i = n(35),
      o = n(50),
      a = n(6),
      u = n(22);
    t.exports = function (t, e, n, c) {
      if (!a(t)) return t;
      for (
        var s = -1, l = (e = i(e, t)).length, f = l - 1, d = t;
        null != d && ++s < l;

      ) {
        var p = u(e[s]),
          v = n;
        if ("__proto__" === p || "constructor" === p || "prototype" === p)
          return t;
        if (s != f) {
          var h = d[p];
          void 0 === (v = c ? c(h, p, d) : void 0) &&
            (v = a(h) ? h : o(e[s + 1]) ? [] : {});
        }
        r(d, p, v), (d = d[p]);
      }
      return t;
    };
  },
  function (t, e, n) {
    var r = n(115),
      i = n(45),
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n) {
      var a = t[e];
      (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
    };
  },
  function (t, e, n) {
    var r = n(93),
      i = n(278),
      o = n(280);
    t.exports = function (t) {
      return r(t, o, i);
    };
  },
  function (t, e, n) {
    var r = n(48),
      i = n(279),
      o = n(94),
      a = n(95),
      u = Object.getOwnPropertySymbols
        ? function (t) {
            for (var e = []; t; ) r(e, o(t)), (t = i(t));
            return e;
          }
        : a;
    t.exports = u;
  },
  function (t, e, n) {
    var r = n(98)(Object.getPrototypeOf, Object);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(96),
      i = n(281),
      o = n(12);
    t.exports = function (t) {
      return o(t) ? r(t, !0) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(6),
      i = n(54),
      o = n(282),
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!r(t)) return o(t);
      var e = i(t),
        n = [];
      for (var u in t)
        ("constructor" != u || (!e && a.call(t, u))) && n.push(u);
      return n;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = [];
      if (null != t) for (var n in Object(t)) e.push(n);
      return e;
    };
  },
  function (t, e, n) {
    var r = n(53),
      i = n(55),
      o = n(34),
      a = n(1),
      u = n(12),
      c = n(49),
      s = n(54),
      l = n(51),
      f = "[object Map]",
      d = "[object Set]",
      p = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (null == t) return !0;
      if (
        u(t) &&
        (a(t) ||
          "string" == typeof t ||
          "function" == typeof t.splice ||
          c(t) ||
          l(t) ||
          o(t))
      )
        return !t.length;
      var e = i(t);
      if (e == f || e == d) return !t.size;
      if (s(t)) return !r(t).length;
      for (var n in t) if (p.call(t, n)) return !1;
      return !0;
    };
  },
  function (t, e, n) {
    var r = n(115),
      i = n(112),
      o = n(7);
    t.exports = function (t, e) {
      var n = {};
      return (
        (e = o(e, 3)),
        i(t, function (t, i, o) {
          r(n, i, e(t, i, o));
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(286),
      i = n(111),
      o = n(287),
      a = n(1);
    t.exports = function (t, e) {
      return (a(t) ? r : i)(t, o(e));
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (
        var n = -1, r = null == t ? 0 : t.length;
        ++n < r && !1 !== e(t[n], n, t);

      );
      return t;
    };
  },
  function (t, e, n) {
    var r = n(59);
    t.exports = function (t) {
      return "function" == typeof t ? t : r;
    };
  },
  function (t, e, n) {
    var r = n(289),
      i = n(6),
      o = "Expected a function";
    t.exports = function (t, e, n) {
      var a = !0,
        u = !0;
      if ("function" != typeof t) throw new TypeError(o);
      return (
        i(n) &&
          ((a = "leading" in n ? !!n.leading : a),
          (u = "trailing" in n ? !!n.trailing : u)),
        r(t, e, { leading: a, maxWait: e, trailing: u })
      );
    };
  },
  function (t, e, n) {
    var r = n(6),
      i = n(290),
      o = n(60),
      a = "Expected a function",
      u = Math.max,
      c = Math.min;
    t.exports = function (t, e, n) {
      var s,
        l,
        f,
        d,
        p,
        v,
        h = 0,
        g = !1,
        E = !1,
        m = !0;
      if ("function" != typeof t) throw new TypeError(a);
      function y(e) {
        var n = s,
          r = l;
        return (s = l = void 0), (h = e), (d = t.apply(r, n));
      }
      function _(t) {
        var n = t - v;
        return void 0 === v || n >= e || n < 0 || (E && t - h >= f);
      }
      function I() {
        var t = i();
        if (_(t)) return b(t);
        p = setTimeout(
          I,
          (function (t) {
            var n = e - (t - v);
            return E ? c(n, f - (t - h)) : n;
          })(t)
        );
      }
      function b(t) {
        return (p = void 0), m && s ? y(t) : ((s = l = void 0), d);
      }
      function w() {
        var t = i(),
          n = _(t);
        if (((s = arguments), (l = this), (v = t), n)) {
          if (void 0 === p)
            return (function (t) {
              return (h = t), (p = setTimeout(I, e)), g ? y(t) : d;
            })(v);
          if (E) return clearTimeout(p), (p = setTimeout(I, e)), y(v);
        }
        return void 0 === p && (p = setTimeout(I, e)), d;
      }
      return (
        (e = o(e) || 0),
        r(n) &&
          ((g = !!n.leading),
          (f = (E = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : f),
          (m = "trailing" in n ? !!n.trailing : m)),
        (w.cancel = function () {
          void 0 !== p && clearTimeout(p), (h = 0), (s = v = l = p = void 0);
        }),
        (w.flush = function () {
          return void 0 === p ? d : b(i());
        }),
        w
      );
    };
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = function () {
      return r.Date.now();
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(0)(n(13));
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.setStyle = function (t, e, n) {
        t.style[e] = n;
      }),
      (e.getStyle = function (t, e) {
        return t.style[e];
      }),
      (e.getProperty = function (t, e) {
        return t[e];
      }),
      (e.matchSelector = function (t) {
        return function (e) {
          return e[a](t);
        };
      }),
      (e.getQuerySelector = function (t) {
        var e = t.id,
          n = t.selector;
        if (e) {
          var r = e;
          if (-1 !== e.indexOf(c)) {
            var i = e.split(c),
              o = i[0];
            if (((r = i[1]), o !== document.documentElement.getAttribute(f)))
              return null;
          }
          return '[data-w-id="'
            .concat(r, '"], [data-w-id^="')
            .concat(r, '_instance"]');
        }
        return n;
      }),
      (e.getValidDocument = function (t) {
        if (null == t || t === document.documentElement.getAttribute(f))
          return document;
        return null;
      }),
      (e.queryDocument = function (t, e) {
        return Array.prototype.slice.call(
          document.querySelectorAll(e ? t + " " + e : t)
        );
      }),
      (e.elementContains = function (t, e) {
        return t.contains(e);
      }),
      (e.isSiblingNode = function (t, e) {
        return t !== e && t.parentNode === e.parentNode;
      }),
      (e.getChildElements = function (t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
          var i = t[n].children,
            o = i.length;
          if (o) for (var a = 0; a < o; a++) e.push(i[a]);
        }
        return e;
      }),
      (e.getSiblingElements = function () {
        for (
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = [],
            n = [],
            r = 0,
            i = t.length;
          r < i;
          r++
        ) {
          var o = t[r].parentNode;
          if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
            n.push(o);
            for (var a = o.firstElementChild; null != a; )
              -1 === t.indexOf(a) && e.push(a), (a = a.nextElementSibling);
          }
        }
        return e;
      }),
      (e.getRefType = function (t) {
        if (null != t && "object" == (0, r.default)(t))
          return t instanceof Element ? s : l;
        return null;
      }),
      (e.getClosestElement = void 0);
    var i = n(10),
      o = n(3),
      a = i.IX2BrowserSupport.ELEMENT_MATCHES,
      u = o.IX2EngineConstants,
      c = u.IX2_ID_DELIMITER,
      s = u.HTML_ELEMENT,
      l = u.PLAIN_OBJECT,
      f = u.WF_PAGE;
    var d = Element.prototype.closest
      ? function (t, e) {
          return document.documentElement.contains(t) ? t.closest(e) : null;
        }
      : function (t, e) {
          if (!document.documentElement.contains(t)) return null;
          var n = t;
          do {
            if (n[a] && n[a](e)) return n;
            n = n.parentNode;
          } while (null != n);
          return null;
        };
    e.getClosestElement = d;
  },
  function (t, e, n) {
    "use strict";
    var r,
      i = n(0),
      o = i(n(27)),
      a = i(n(13)),
      u = n(0);
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var c,
      s,
      l,
      f = u(n(28)),
      d = u(n(293)),
      p = u(n(56)),
      v = u(n(312)),
      h = n(3),
      g = n(114),
      E = n(61),
      m = n(10),
      y = h.EventTypeConsts,
      _ = y.MOUSE_CLICK,
      I = y.MOUSE_SECOND_CLICK,
      b = y.MOUSE_DOWN,
      w = y.MOUSE_UP,
      T = y.MOUSE_OVER,
      O = y.MOUSE_OUT,
      A = y.DROPDOWN_CLOSE,
      x = y.DROPDOWN_OPEN,
      S = y.SLIDER_ACTIVE,
      R = y.SLIDER_INACTIVE,
      C = y.TAB_ACTIVE,
      N = y.TAB_INACTIVE,
      L = y.NAVBAR_CLOSE,
      D = y.NAVBAR_OPEN,
      P = y.MOUSE_MOVE,
      M = y.PAGE_SCROLL_DOWN,
      j = y.SCROLL_INTO_VIEW,
      F = y.SCROLL_OUT_OF_VIEW,
      k = y.PAGE_SCROLL_UP,
      X = y.SCROLLING_IN_VIEW,
      G = y.PAGE_FINISH,
      U = y.ECOMMERCE_CART_CLOSE,
      V = y.ECOMMERCE_CART_OPEN,
      W = y.PAGE_START,
      B = y.PAGE_SCROLL,
      H = "COMPONENT_ACTIVE",
      z = "COMPONENT_INACTIVE",
      Y = h.IX2EngineConstants.COLON_DELIMITER,
      K = m.IX2VanillaUtils.getNamespacedParameterId,
      Q = function (t) {
        return function (e) {
          return !("object" !== (0, a.default)(e) || !t(e)) || e;
        };
      },
      q = Q(function (t) {
        return t.element === t.nativeEvent.target;
      }),
      $ = Q(function (t) {
        var e = t.element,
          n = t.nativeEvent;
        return e.contains(n.target);
      }),
      Z = (0, d.default)([q, $]),
      J = function (t, e) {
        if (e) {
          var n = t.getState().ixData.events[e];
          if (n && !at[n.eventTypeId]) return n;
        }
        return null;
      },
      tt = function (t, e) {
        var n = t.store,
          r = t.event,
          i = t.element,
          o = t.eventStateKey,
          a = r.action,
          u = r.id,
          c = a.config,
          s = c.actionListId,
          l = c.autoStopEventId,
          f = J(n, l);
        return (
          f &&
            (0, g.stopActionGroup)({
              store: n,
              eventId: l,
              eventTarget: i,
              eventStateKey: l + Y + o.split(Y)[1],
              actionListId: (0, p.default)(f, "action.config.actionListId"),
            }),
          (0, g.stopActionGroup)({
            store: n,
            eventId: u,
            eventTarget: i,
            eventStateKey: o,
            actionListId: s,
          }),
          (0, g.startActionGroup)({
            store: n,
            eventId: u,
            eventTarget: i,
            eventStateKey: o,
            actionListId: s,
          }),
          e
        );
      },
      et = function (t, e) {
        return function (n, r) {
          return !0 === t(n, r) ? e(n, r) : r;
        };
      },
      nt = { handler: et(Z, tt) },
      rt = (0, f.default)({}, nt, { types: [H, z].join(" ") }),
      it = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      ot = { types: it },
      at = { PAGE_START: W, PAGE_FINISH: G },
      ut =
        ((c = void 0 !== window.pageXOffset),
        (s =
          "CSS1Compat" === document.compatMode
            ? document.documentElement
            : document.body),
        function () {
          return {
            scrollLeft: c ? window.pageXOffset : s.scrollLeft,
            scrollTop: c ? window.pageYOffset : s.scrollTop,
            stiffScrollTop: (0, v.default)(
              c ? window.pageYOffset : s.scrollTop,
              0,
              s.scrollHeight - window.innerHeight
            ),
            scrollWidth: s.scrollWidth,
            scrollHeight: s.scrollHeight,
            clientWidth: s.clientWidth,
            clientHeight: s.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          };
        }),
      ct = function (t) {
        var e = t.element,
          n = t.nativeEvent,
          r = n.type,
          i = n.target,
          o = n.relatedTarget,
          a = e.contains(i);
        if ("mouseover" === r && a) return !0;
        var u = e.contains(o);
        return !("mouseout" !== r || !a || !u);
      },
      st = function (t) {
        var e,
          n,
          r = t.element,
          i = t.event.config,
          o = ut(),
          a = o.clientWidth,
          u = o.clientHeight,
          c = i.scrollOffsetValue,
          s = "PX" === i.scrollOffsetUnit ? c : (u * (c || 0)) / 100;
        return (
          (e = r.getBoundingClientRect()),
          (n = { left: 0, top: s, right: a, bottom: u - s }),
          !(
            e.left > n.right ||
            e.right < n.left ||
            e.top > n.bottom ||
            e.bottom < n.top
          )
        );
      },
      lt = function (t) {
        return function (e, n) {
          var r = e.nativeEvent.type,
            i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
            o = (0, f.default)({}, n, { isActive: i });
          return n && o.isActive === n.isActive ? o : t(e, o) || o;
        };
      },
      ft = function (t) {
        return function (e, n) {
          var r = { elementHovered: ct(e) };
          return (
            ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
              t(e, r)) ||
            r
          );
        };
      },
      dt = function (t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = ut(),
            i = r.stiffScrollTop,
            o = r.scrollHeight,
            a = r.innerHeight,
            u = e.event,
            c = u.config,
            s = u.eventTypeId,
            l = c.scrollOffsetValue,
            d = "PX" === c.scrollOffsetUnit,
            p = o - a,
            v = Number((i / p).toFixed(2));
          if (n && n.percentTop === v) return n;
          var h,
            g,
            E = (d ? l : (a * (l || 0)) / 100) / p,
            m = 0;
          n &&
            ((h = v > n.percentTop),
            (m = (g = n.scrollingDown !== h) ? v : n.anchorTop));
          var y = s === M ? v >= m + E : v <= m - E,
            _ = (0, f.default)({}, n, {
              percentTop: v,
              inBounds: y,
              anchorTop: m,
              scrollingDown: h,
            });
          return (n && y && (g || _.inBounds !== n.inBounds) && t(e, _)) || _;
        };
      },
      pt = function (t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { clickCount: 0 },
            r = { clickCount: (n.clickCount % 2) + 1 };
          return (r.clickCount !== n.clickCount && t(e, r)) || r;
        };
      },
      vt = function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, f.default)({}, rt, {
          handler: et(
            t ? Z : q,
            lt(function (t, e) {
              return e.isActive ? nt.handler(t, e) : e;
            })
          ),
        });
      },
      ht = function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, f.default)({}, rt, {
          handler: et(
            t ? Z : q,
            lt(function (t, e) {
              return e.isActive ? e : nt.handler(t, e);
            })
          ),
        });
      },
      gt = (0, f.default)({}, ot, {
        handler:
          ((l = function (t, e) {
            var n = e.elementVisible,
              r = t.event;
            return !t.store.getState().ixData.events[
              r.action.config.autoStopEventId
            ] && e.triggered
              ? e
              : (r.eventTypeId === j) === n
              ? (tt(t), (0, f.default)({}, e, { triggered: !0 }))
              : e;
          }),
          function (t, e) {
            var n = (0, f.default)({}, e, { elementVisible: st(t) });
            return (
              ((e ? n.elementVisible !== e.elementVisible : n.elementVisible) &&
                l(t, n)) ||
              n
            );
          }),
      }),
      Et =
        ((r = {}),
        (0, o.default)(r, S, vt()),
        (0, o.default)(r, R, ht()),
        (0, o.default)(r, x, vt()),
        (0, o.default)(r, A, ht()),
        (0, o.default)(r, D, vt(!1)),
        (0, o.default)(r, L, ht(!1)),
        (0, o.default)(r, C, vt()),
        (0, o.default)(r, N, ht()),
        (0, o.default)(r, V, {
          types: "ecommerce-cart-open",
          handler: et(Z, tt),
        }),
        (0, o.default)(r, U, {
          types: "ecommerce-cart-close",
          handler: et(Z, tt),
        }),
        (0, o.default)(r, _, {
          types: "click",
          handler: et(
            Z,
            pt(function (t, e) {
              var n,
                r,
                i,
                o = e.clickCount;
              (r = (n = t).store),
                (i = n.event.action.config.autoStopEventId),
                Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t);
            })
          ),
        }),
        (0, o.default)(r, I, {
          types: "click",
          handler: et(
            Z,
            pt(function (t, e) {
              2 === e.clickCount && tt(t);
            })
          ),
        }),
        (0, o.default)(r, b, (0, f.default)({}, nt, { types: "mousedown" })),
        (0, o.default)(r, w, (0, f.default)({}, nt, { types: "mouseup" })),
        (0, o.default)(r, T, {
          types: "mouseover mouseout",
          handler: et(
            Z,
            ft(function (t, e) {
              e.elementHovered && tt(t);
            })
          ),
        }),
        (0, o.default)(r, O, {
          types: "mouseover mouseout",
          handler: et(
            Z,
            ft(function (t, e) {
              e.elementHovered || tt(t);
            })
          ),
        }),
        (0, o.default)(r, P, {
          types: "mousemove mouseout scroll",
          handler: function (t) {
            var e = t.store,
              n = t.element,
              r = t.eventConfig,
              i = t.nativeEvent,
              o = t.eventStateKey,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
              u = r.basedOn,
              c = r.selectedAxis,
              s = r.continuousParameterGroupId,
              l = r.reverse,
              f = r.restingState,
              d = void 0 === f ? 0 : f,
              p = i.clientX,
              v = void 0 === p ? a.clientX : p,
              g = i.clientY,
              m = void 0 === g ? a.clientY : g,
              y = i.pageX,
              _ = void 0 === y ? a.pageX : y,
              I = i.pageY,
              b = void 0 === I ? a.pageY : I,
              w = "X_AXIS" === c,
              T = "mouseout" === i.type,
              O = d / 100,
              A = s,
              x = !1;
            switch (u) {
              case h.EventBasedOn.VIEWPORT:
                O = w
                  ? Math.min(v, window.innerWidth) / window.innerWidth
                  : Math.min(m, window.innerHeight) / window.innerHeight;
                break;
              case h.EventBasedOn.PAGE:
                var S = ut(),
                  R = S.scrollLeft,
                  C = S.scrollTop,
                  N = S.scrollWidth,
                  L = S.scrollHeight;
                O = w ? Math.min(R + _, N) / N : Math.min(C + b, L) / L;
                break;
              case h.EventBasedOn.ELEMENT:
              default:
                A = K(o, s);
                var D = 0 === i.type.indexOf("mouse");
                if (D && !0 !== Z({ element: n, nativeEvent: i })) break;
                var P = n.getBoundingClientRect(),
                  M = P.left,
                  j = P.top,
                  F = P.width,
                  k = P.height;
                if (
                  !D &&
                  !(function (t, e) {
                    return (
                      t.left > e.left &&
                      t.left < e.right &&
                      t.top > e.top &&
                      t.top < e.bottom
                    );
                  })({ left: v, top: m }, P)
                )
                  break;
                (x = !0), (O = w ? (v - M) / F : (m - j) / k);
            }
            return (
              T && (O > 0.95 || O < 0.05) && (O = Math.round(O)),
              (u !== h.EventBasedOn.ELEMENT || x || x !== a.elementHovered) &&
                ((O = l ? 1 - O : O),
                e.dispatch((0, E.parameterChanged)(A, O))),
              { elementHovered: x, clientX: v, clientY: m, pageX: _, pageY: b }
            );
          },
        }),
        (0, o.default)(r, B, {
          types: it,
          handler: function (t) {
            var e = t.store,
              n = t.eventConfig,
              r = n.continuousParameterGroupId,
              i = n.reverse,
              o = ut(),
              a = o.scrollTop / (o.scrollHeight - o.clientHeight);
            (a = i ? 1 - a : a), e.dispatch((0, E.parameterChanged)(r, a));
          },
        }),
        (0, o.default)(r, X, {
          types: it,
          handler: function (t) {
            var e = t.element,
              n = t.store,
              r = t.eventConfig,
              i = t.eventStateKey,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { scrollPercent: 0 },
              a = ut(),
              u = a.scrollLeft,
              c = a.scrollTop,
              s = a.scrollWidth,
              l = a.scrollHeight,
              f = a.clientHeight,
              d = r.basedOn,
              p = r.selectedAxis,
              v = r.continuousParameterGroupId,
              g = r.startsEntering,
              m = r.startsExiting,
              y = r.addEndOffset,
              _ = r.addStartOffset,
              I = r.addOffsetValue,
              b = void 0 === I ? 0 : I,
              w = r.endOffsetValue,
              T = void 0 === w ? 0 : w,
              O = "X_AXIS" === p;
            if (d === h.EventBasedOn.VIEWPORT) {
              var A = O ? u / s : c / l;
              return (
                A !== o.scrollPercent &&
                  n.dispatch((0, E.parameterChanged)(v, A)),
                { scrollPercent: A }
              );
            }
            var x = K(i, v),
              S = e.getBoundingClientRect(),
              R = (_ ? b : 0) / 100,
              C = (y ? T : 0) / 100;
            (R = g ? R : 1 - R), (C = m ? C : 1 - C);
            var N = S.top + Math.min(S.height * R, f),
              L = S.top + S.height * C - N,
              D = Math.min(f + L, l),
              P = Math.min(Math.max(0, f - N), D) / D;
            return (
              P !== o.scrollPercent &&
                n.dispatch((0, E.parameterChanged)(x, P)),
              { scrollPercent: P }
            );
          },
        }),
        (0, o.default)(r, j, gt),
        (0, o.default)(r, F, gt),
        (0, o.default)(
          r,
          M,
          (0, f.default)({}, ot, {
            handler: dt(function (t, e) {
              e.scrollingDown && tt(t);
            }),
          })
        ),
        (0, o.default)(
          r,
          k,
          (0, f.default)({}, ot, {
            handler: dt(function (t, e) {
              e.scrollingDown || tt(t);
            }),
          })
        ),
        (0, o.default)(r, G, {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: et(
            q,
            (function (t) {
              return function (e, n) {
                var r = { finished: "complete" === document.readyState };
                return !r.finished || (n && n.finshed) || t(e), r;
              };
            })(tt)
          ),
        }),
        (0, o.default)(r, W, {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: et(
            q,
            (function (t) {
              return function (e, n) {
                return n || t(e), { started: !0 };
              };
            })(tt)
          ),
        }),
        r);
    e.default = Et;
  },
  function (t, e, n) {
    var r = n(294)();
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(62),
      i = n(295),
      o = n(118),
      a = n(119),
      u = n(1),
      c = n(308),
      s = "Expected a function",
      l = 8,
      f = 32,
      d = 128,
      p = 256;
    t.exports = function (t) {
      return i(function (e) {
        var n = e.length,
          i = n,
          v = r.prototype.thru;
        for (t && e.reverse(); i--; ) {
          var h = e[i];
          if ("function" != typeof h) throw new TypeError(s);
          if (v && !g && "wrapper" == a(h)) var g = new r([], !0);
        }
        for (i = g ? i : n; ++i < n; ) {
          h = e[i];
          var E = a(h),
            m = "wrapper" == E ? o(h) : void 0;
          g =
            m && c(m[0]) && m[1] == (d | l | f | p) && !m[4].length && 1 == m[9]
              ? g[a(m[0])].apply(g, m[3])
              : 1 == h.length && c(h)
              ? g[E]()
              : g.thru(h);
        }
        return function () {
          var t = arguments,
            r = t[0];
          if (g && 1 == t.length && u(r)) return g.plant(r).value();
          for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
            o = e[i].call(this, o);
          return o;
        };
      });
    };
  },
  function (t, e, n) {
    var r = n(296),
      i = n(299),
      o = n(301);
    t.exports = function (t) {
      return o(i(t, void 0, r), t + "");
    };
  },
  function (t, e, n) {
    var r = n(297);
    t.exports = function (t) {
      return null != t && t.length ? r(t, 1) : [];
    };
  },
  function (t, e, n) {
    var r = n(48),
      i = n(298);
    t.exports = function t(e, n, o, a, u) {
      var c = -1,
        s = e.length;
      for (o || (o = i), u || (u = []); ++c < s; ) {
        var l = e[c];
        n > 0 && o(l)
          ? n > 1
            ? t(l, n - 1, o, a, u)
            : r(u, l)
          : a || (u[u.length] = l);
      }
      return u;
    };
  },
  function (t, e, n) {
    var r = n(21),
      i = n(34),
      o = n(1),
      a = r ? r.isConcatSpreadable : void 0;
    t.exports = function (t) {
      return o(t) || i(t) || !!(a && t && t[a]);
    };
  },
  function (t, e, n) {
    var r = n(300),
      i = Math.max;
    t.exports = function (t, e, n) {
      return (
        (e = i(void 0 === e ? t.length - 1 : e, 0)),
        function () {
          for (
            var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u);
            ++a < u;

          )
            c[a] = o[e + a];
          a = -1;
          for (var s = Array(e + 1); ++a < e; ) s[a] = o[a];
          return (s[e] = n(c)), r(t, this, s);
        }
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      switch (n.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, n[0]);
        case 2:
          return t.call(e, n[0], n[1]);
        case 3:
          return t.call(e, n[0], n[1], n[2]);
      }
      return t.apply(e, n);
    };
  },
  function (t, e, n) {
    var r = n(302),
      i = n(304)(r);
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(303),
      i = n(116),
      o = n(59),
      a = i
        ? function (t, e) {
            return i(t, "toString", {
              configurable: !0,
              enumerable: !1,
              value: r(e),
              writable: !0,
            });
          }
        : o;
    t.exports = a;
  },
  function (t, e) {
    t.exports = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, e) {
    var n = 800,
      r = 16,
      i = Date.now;
    t.exports = function (t) {
      var e = 0,
        o = 0;
      return function () {
        var a = i(),
          u = r - (a - o);
        if (((o = a), u > 0)) {
          if (++e >= n) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    };
  },
  function (t, e, n) {
    var r = n(99),
      i = r && new r();
    t.exports = i;
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(64),
      i = n(118),
      o = n(119),
      a = n(309);
    t.exports = function (t) {
      var e = o(t),
        n = a[e];
      if ("function" != typeof n || !(e in r.prototype)) return !1;
      if (t === n) return !0;
      var u = i(n);
      return !!u && t === u[0];
    };
  },
  function (t, e, n) {
    var r = n(64),
      i = n(62),
      o = n(63),
      a = n(1),
      u = n(9),
      c = n(310),
      s = Object.prototype.hasOwnProperty;
    function l(t) {
      if (u(t) && !a(t) && !(t instanceof r)) {
        if (t instanceof i) return t;
        if (s.call(t, "__wrapped__")) return c(t);
      }
      return new i(t);
    }
    (l.prototype = o.prototype), (l.prototype.constructor = l), (t.exports = l);
  },
  function (t, e, n) {
    var r = n(64),
      i = n(62),
      o = n(311);
    t.exports = function (t) {
      if (t instanceof r) return t.clone();
      var e = new i(t.__wrapped__, t.__chain__);
      return (
        (e.__actions__ = o(t.__actions__)),
        (e.__index__ = t.__index__),
        (e.__values__ = t.__values__),
        e
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = -1,
        r = t.length;
      for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
      return e;
    };
  },
  function (t, e, n) {
    var r = n(313),
      i = n(60);
    t.exports = function (t, e, n) {
      return (
        void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n && (n = (n = i(n)) == n ? n : 0),
        void 0 !== e && (e = (e = i(e)) == e ? e : 0),
        r(i(t), e, n)
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      return (
        t == t &&
          (void 0 !== n && (t = t <= n ? t : n),
          void 0 !== e && (t = t >= e ? t : e)),
        t
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(2);
    r.define(
      "links",
      (t.exports = function (t, e) {
        var n,
          i,
          o,
          a = {},
          u = t(window),
          c = r.env(),
          s = window.location,
          l = document.createElement("a"),
          f = "w--current",
          d = /index\.(html|php)$/,
          p = /\/$/;
        function v(e) {
          var r =
            (n && e.getAttribute("href-disabled")) || e.getAttribute("href");
          if (((l.href = r), !(r.indexOf(":") >= 0))) {
            var a = t(e);
            if (
              l.hash.length > 1 &&
              l.host + l.pathname === s.host + s.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
              var u = t(l.hash);
              u.length && i.push({ link: a, sec: u, active: !1 });
            } else if ("#" !== r && "" !== r) {
              var c = l.href === s.href || r === o || (d.test(r) && p.test(o));
              g(a, f, c);
            }
          }
        }
        function h() {
          var t = u.scrollTop(),
            n = u.height();
          e.each(i, function (e) {
            var r = e.link,
              i = e.sec,
              o = i.offset().top,
              a = i.outerHeight(),
              u = 0.5 * n,
              c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
            e.active !== c && ((e.active = c), g(r, f, c));
          });
        }
        function g(t, e, n) {
          var r = t.hasClass(e);
          (n && r) || ((n || r) && (n ? t.addClass(e) : t.removeClass(e)));
        }
        return (
          (a.ready =
            a.design =
            a.preview =
              function () {
                (n = c && r.env("design")),
                  (o = r.env("slug") || s.pathname || ""),
                  r.scroll.off(h),
                  (i = []);
                for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
                i.length && (r.scroll.on(h), h());
              }),
          a
        );
      })
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(2);
    r.define(
      "scroll",
      (t.exports = function (t) {
        var e = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          i = (function () {
            try {
              return Boolean(window.frameElement);
            } catch (t) {
              return !0;
            }
          })()
            ? null
            : window.history,
          o = t(window),
          a = t(document),
          u = t(document.body),
          c =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (t) {
              window.setTimeout(t, 15);
            },
          s = r.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          f = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + f + ")";
        var p = /^#[a-zA-Z0-9][\w:.-]*$/;
        function v(e) {
          var a = e.currentTarget;
          if (
            !(
              r.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))
            )
          ) {
            var s,
              f =
                ((s = a),
                p.test(s.hash) && s.host + s.pathname === n.host + n.pathname
                  ? a.hash
                  : "");
            if ("" !== f) {
              var d = t(f);
              d.length &&
                (e && (e.preventDefault(), e.stopPropagation()),
                (function (t) {
                  if (
                    n.hash !== t &&
                    i &&
                    i.pushState &&
                    (!r.env.chrome || "file:" !== n.protocol)
                  ) {
                    var e = i.state && i.state.hash;
                    e !== t && i.pushState({ hash: t }, "", t);
                  }
                })(f),
                window.setTimeout(
                  function () {
                    !(function (e) {
                      var n = o.scrollTop(),
                        r = (function (e) {
                          var n = t(l),
                            r =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = e.offset().top - r;
                          if ("mid" === e.data("scroll")) {
                            var a = o.height() - r,
                              u = e.outerHeight();
                            u < a && (i -= Math.round((a - u) / 2));
                          }
                          return i;
                        })(e);
                      if (n === r) return;
                      var i = (function (t, e, n) {
                          if (
                            document.body.hasAttribute(
                              "data-wf-reduce-scroll-motion"
                            ) &&
                            ("none" ===
                              document.body.getAttribute(
                                "data-wf-scroll-motion"
                              ) ||
                              ("function" == typeof window.matchMedia &&
                                window.matchMedia(
                                  "(prefers-reduced-motion: reduce)"
                                ).matches))
                          )
                            return 0;
                          var r = 1;
                          return (
                            u.add(t).each(function (t, e) {
                              var n = parseFloat(
                                e.getAttribute("data-scroll-time")
                              );
                              !isNaN(n) && n >= 0 && (r = n);
                            }),
                            (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) *
                              r
                          );
                        })(e, n, r),
                        a = Date.now();
                      c(function t() {
                        var e = Date.now() - a;
                        window.scroll(
                          0,
                          (function (t, e, n, r) {
                            return n > r
                              ? e
                              : t +
                                  (e - t) *
                                    ((i = n / r) < 0.5
                                      ? 4 * i * i * i
                                      : (i - 1) * (2 * i - 2) * (2 * i - 2) +
                                        1);
                            var i;
                          })(n, r, e, i)
                        ),
                          e <= i && c(t);
                      });
                    })(d);
                  },
                  e ? 0 : 300
                ));
            }
          }
        }
        return {
          ready: function () {
            var t = e.WF_CLICK_EMPTY,
              n = e.WF_CLICK_SCROLL;
            a.on(n, d, v),
              a.on(t, f, function (t) {
                t.preventDefault();
              });
          },
        };
      })
    );
  },
  function (t, e, n) {
    "use strict";
    n(2).define(
      "touch",
      (t.exports = function (t) {
        var e = {},
          n = window.getSelection;
        function r(e) {
          var r,
            i,
            o = !1,
            a = !1,
            u = Math.min(Math.round(0.04 * window.innerWidth), 40);
          function c(t) {
            var e = t.touches;
            (e && e.length > 1) ||
              ((o = !0),
              e ? ((a = !0), (r = e[0].clientX)) : (r = t.clientX),
              (i = r));
          }
          function s(e) {
            if (o) {
              if (a && "mousemove" === e.type)
                return e.preventDefault(), void e.stopPropagation();
              var r = e.touches,
                c = r ? r[0].clientX : e.clientX,
                s = c - i;
              (i = c),
                Math.abs(s) > u &&
                  n &&
                  "" === String(n()) &&
                  (!(function (e, n, r) {
                    var i = t.Event(e, { originalEvent: n });
                    t(n.target).trigger(i, r);
                  })("swipe", e, { direction: s > 0 ? "right" : "left" }),
                  f());
            }
          }
          function l(t) {
            if (o)
              return (
                (o = !1),
                a && "mouseup" === t.type
                  ? (t.preventDefault(), t.stopPropagation(), void (a = !1))
                  : void 0
              );
          }
          function f() {
            o = !1;
          }
          e.addEventListener("touchstart", c, !1),
            e.addEventListener("touchmove", s, !1),
            e.addEventListener("touchend", l, !1),
            e.addEventListener("touchcancel", f, !1),
            e.addEventListener("mousedown", c, !1),
            e.addEventListener("mousemove", s, !1),
            e.addEventListener("mouseup", l, !1),
            e.addEventListener("mouseout", f, !1),
            (this.destroy = function () {
              e.removeEventListener("touchstart", c, !1),
                e.removeEventListener("touchmove", s, !1),
                e.removeEventListener("touchend", l, !1),
                e.removeEventListener("touchcancel", f, !1),
                e.removeEventListener("mousedown", c, !1),
                e.removeEventListener("mousemove", s, !1),
                e.removeEventListener("mouseup", l, !1),
                e.removeEventListener("mouseout", f, !1),
                (e = null);
            });
        }
        return (
          (t.event.special.tap = { bindType: "click", delegateType: "click" }),
          (e.init = function (e) {
            return (e = "string" == typeof e ? t(e).get(0) : e)
              ? new r(e)
              : null;
          }),
          (e.instance = e.init(document)),
          e
        );
      })
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(2),
      i = n(14),
      o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      a = !0,
      u = /^#[a-zA-Z0-9\-_]+$/;
    r.define(
      "dropdown",
      (t.exports = function (t, e) {
        var n,
          c,
          s = e.debounce,
          l = {},
          f = r.env(),
          d = !1,
          p = r.env.touch,
          v = ".w-dropdown",
          h = "w--open",
          g = i.triggers,
          E = 900,
          m = "focusout" + v,
          y = "keydown" + v,
          _ = "mouseenter" + v,
          I = "mousemove" + v,
          b = "mouseleave" + v,
          w = (p ? "click" : "mouseup") + v,
          T = "w-close" + v,
          O = "setting" + v,
          A = t(document);
        function x() {
          (n = f && r.env("design")), (c = A.find(v)).each(S);
        }
        function S(e, i) {
          var c = t(i),
            l = t.data(i, v);
          l ||
            (l = t.data(i, v, {
              open: !1,
              el: c,
              config: {},
              selectedIdx: -1,
            })),
            (l.toggle = l.el.children(".w-dropdown-toggle")),
            (l.list = l.el.children(".w-dropdown-list")),
            (l.links = l.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (l.complete = (function (t) {
              return function () {
                t.list.removeClass(h),
                  t.toggle.removeClass(h),
                  t.manageZ && t.el.css("z-index", "");
              };
            })(l)),
            (l.mouseLeave = (function (t) {
              return function () {
                (t.hovering = !1), t.links.is(":focus") || L(t);
              };
            })(l)),
            (l.mouseUpOutside = (function (e) {
              e.mouseUpOutside && A.off(w, e.mouseUpOutside);
              return s(function (n) {
                if (e.open) {
                  var i = t(n.target);
                  if (!i.closest(".w-dropdown-toggle").length) {
                    var o = -1 === t.inArray(e.el[0], i.parents(v)),
                      a = r.env("editor");
                    if (o) {
                      if (a) {
                        var u =
                            1 === i.parents().length &&
                            1 === i.parents("svg").length,
                          c = i.parents(
                            ".w-editor-bem-EditorHoverControls"
                          ).length;
                        if (u || c) return;
                      }
                      L(e);
                    }
                  }
                }
              });
            })(l)),
            (l.mouseMoveOutside = (function (e) {
              return s(function (n) {
                if (e.open) {
                  var r = t(n.target),
                    i = -1 === t.inArray(e.el[0], r.parents(v));
                  if (i) {
                    var o = r.parents(
                        ".w-editor-bem-EditorHoverControls"
                      ).length,
                      a = r.parents(".w-editor-bem-RTToolbar").length,
                      u = t(".w-editor-bem-EditorOverlay"),
                      c =
                        u.find(".w-editor-edit-outline").length ||
                        u.find(".w-editor-bem-RTToolbar").length;
                    if (o || a || c) return;
                    (e.hovering = !1), L(e);
                  }
                }
              });
            })(l)),
            R(l);
          var p = l.toggle.attr("id"),
            g = l.list.attr("id");
          p || (p = "w-dropdown-toggle-" + e),
            g || (g = "w-dropdown-list-" + e),
            l.toggle.attr("id", p),
            l.toggle.attr("aria-controls", g),
            l.toggle.attr("aria-haspopup", "menu"),
            l.toggle.attr("aria-expanded", "false"),
            "BUTTON" !== l.toggle.prop("tagName") &&
              (l.toggle.attr("role", "button"),
              l.toggle.attr("tabindex") || l.toggle.attr("tabindex", "0")),
            l.list.attr("id", g),
            l.list.attr("aria-labelledby", p),
            l.links.each(function (t, e) {
              e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"),
                u.test(e.hash) && e.addEventListener("click", L.bind(null, l));
            }),
            l.el.off(v),
            l.toggle.off(v),
            l.nav && l.nav.off(v);
          var E = C(l, a);
          n &&
            l.el.on(
              O,
              (function (t) {
                return function (e, n) {
                  (n = n || {}),
                    R(t),
                    !0 === n.open && N(t),
                    !1 === n.open && L(t, { immediate: !0 });
                };
              })(l)
            ),
            n ||
              (f && ((l.hovering = !1), L(l)),
              l.config.hover &&
                l.toggle.on(
                  _,
                  (function (t) {
                    return function () {
                      (t.hovering = !0), N(t);
                    };
                  })(l)
                ),
              l.el.on(T, E),
              l.el.on(
                y,
                (function (t) {
                  return function (e) {
                    if (!n && !d && t.open)
                      switch (
                        ((t.selectedIdx = t.links.index(
                          document.activeElement
                        )),
                        e.keyCode)
                      ) {
                        case o.HOME:
                          if (!t.open) return;
                          return (t.selectedIdx = 0), D(t), e.preventDefault();
                        case o.END:
                          if (!t.open) return;
                          return (
                            (t.selectedIdx = t.links.length - 1),
                            D(t),
                            e.preventDefault()
                          );
                        case o.ESCAPE:
                          return L(t), t.toggle.focus(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                          return (
                            (t.selectedIdx = Math.min(
                              t.links.length - 1,
                              t.selectedIdx + 1
                            )),
                            D(t),
                            e.preventDefault()
                          );
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                          return (
                            (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)),
                            D(t),
                            e.preventDefault()
                          );
                      }
                  };
                })(l)
              ),
              l.el.on(
                m,
                (function (t) {
                  return s(function (e) {
                    var n = e.relatedTarget,
                      r = e.target,
                      i = t.el[0],
                      o = i.contains(n) || i.contains(r);
                    return o || L(t), e.stopPropagation();
                  });
                })(l)
              ),
              l.toggle.on(w, E),
              l.toggle.on(
                y,
                (function (t) {
                  var e = C(t, a);
                  return function (r) {
                    if (!n && !d) {
                      if (!t.open)
                        switch (r.keyCode) {
                          case o.ARROW_UP:
                          case o.ARROW_DOWN:
                            return r.stopPropagation();
                        }
                      switch (r.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return e(), r.stopPropagation(), r.preventDefault();
                      }
                    }
                  };
                })(l)
              ),
              (l.nav = l.el.closest(".w-nav")),
              l.nav.on(T, E));
        }
        function R(t) {
          var e = Number(t.el.css("z-index"));
          (t.manageZ = e === E || e === E + 1),
            (t.config = {
              hover:
                (!0 === t.el.attr("data-hover") ||
                  "1" === t.el.attr("data-hover")) &&
                !p,
              delay: Number(t.el.attr("data-delay")) || 0,
            });
        }
        function C(t, e) {
          return s(function (n) {
            if (t.open || (n && "w-close" === n.type))
              return L(t, { forceClose: e });
            N(t);
          });
        }
        function N(e) {
          if (!e.open) {
            !(function (e) {
              var n = e.el[0];
              c.each(function (e, r) {
                var i = t(r);
                i.is(n) || i.has(n).length || i.triggerHandler(T);
              });
            })(e),
              (e.open = !0),
              e.list.addClass(h),
              e.toggle.addClass(h),
              e.toggle.attr("aria-expanded", "true"),
              g.intro(0, e.el[0]),
              r.redraw.up(),
              e.manageZ && e.el.css("z-index", E + 1);
            var i = r.env("editor");
            n || A.on(w, e.mouseUpOutside),
              e.hovering && !i && e.el.on(b, e.mouseLeave),
              e.hovering && i && A.on(I, e.mouseMoveOutside),
              window.clearTimeout(e.delayId);
          }
        }
        function L(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.immediate,
            r = e.forceClose;
          if (t.open && (!t.config.hover || !t.hovering || r)) {
            t.toggle.attr("aria-expanded", "false"), (t.open = !1);
            var i = t.config;
            if (
              (g.outro(0, t.el[0]),
              A.off(w, t.mouseUpOutside),
              A.off(I, t.mouseMoveOutside),
              t.el.off(b, t.mouseLeave),
              window.clearTimeout(t.delayId),
              !i.delay || n)
            )
              return t.complete();
            t.delayId = window.setTimeout(t.complete, i.delay);
          }
        }
        function D(t) {
          t.links[t.selectedIdx] && t.links[t.selectedIdx].focus();
        }
        return (
          (l.ready = x),
          (l.design = function () {
            d &&
              A.find(v).each(function (e, n) {
                t(n).triggerHandler(T);
              }),
              (d = !1),
              x();
          }),
          (l.preview = function () {
            (d = !0), x();
          }),
          l
        );
      })
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(0)(n(319)),
      i = n(2);
    i.define(
      "forms",
      (t.exports = function (t, e) {
        var n,
          o,
          a,
          u,
          c,
          s = {},
          l = t(document),
          f = window.location,
          d = window.XDomainRequest && !window.atob,
          p = ".w-form",
          v = /e(-)?mail/i,
          h = /^\S+@\S+$/,
          g = window.alert,
          E = i.env(),
          m = /list-manage[1-9]?.com/i,
          y = e.debounce(function () {
            g(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        function _(e, n) {
          var r = t(n),
            i = t.data(n, p);
          i || (i = t.data(n, p, { form: r })), I(i);
          var a = r.closest("div.w-form");
          (i.done = a.find("> .w-form-done")),
            (i.fail = a.find("> .w-form-fail")),
            (i.fileUploads = a.find(".w-file-upload")),
            i.fileUploads.each(function (e) {
              !(function (e, n) {
                if (!n.fileUploads || !n.fileUploads[e]) return;
                var r,
                  i = t(n.fileUploads[e]),
                  o = i.find("> .w-file-upload-default"),
                  a = i.find("> .w-file-upload-uploading"),
                  u = i.find("> .w-file-upload-success"),
                  s = i.find("> .w-file-upload-error"),
                  l = o.find(".w-file-upload-input"),
                  f = o.find(".w-file-upload-label"),
                  d = f.children(),
                  p = s.find(".w-file-upload-error-msg"),
                  v = u.find(".w-file-upload-file"),
                  h = u.find(".w-file-remove-link"),
                  g = v.find(".w-file-upload-file-name"),
                  m = p.attr("data-w-size-error"),
                  y = p.attr("data-w-type-error"),
                  _ = p.attr("data-w-generic-error");
                if (E)
                  l.on("click", function (t) {
                    t.preventDefault();
                  }),
                    f.on("click", function (t) {
                      t.preventDefault();
                    }),
                    d.on("click", function (t) {
                      t.preventDefault();
                    });
                else {
                  h.on("click", function () {
                    l.removeAttr("data-value"),
                      l.val(""),
                      g.html(""),
                      o.toggle(!0),
                      u.toggle(!1);
                  }),
                    l.on("change", function (i) {
                      (r = i.target && i.target.files && i.target.files[0]) &&
                        (o.toggle(!1),
                        s.toggle(!1),
                        a.toggle(!0),
                        g.text(r.name),
                        x() || b(n),
                        (n.fileUploads[e].uploading = !0),
                        (function (e, n) {
                          var r = { name: e.name, size: e.size };
                          t.ajax({
                            type: "POST",
                            url: c,
                            data: r,
                            dataType: "json",
                            crossDomain: !0,
                          })
                            .done(function (t) {
                              n(null, t);
                            })
                            .fail(function (t) {
                              n(t);
                            });
                        })(r, O));
                    });
                  var w = f.outerHeight();
                  l.height(w), l.width(1);
                }
                function T(t) {
                  var r = t.responseJSON && t.responseJSON.msg,
                    i = _;
                  "string" == typeof r &&
                  0 === r.indexOf("InvalidFileTypeError")
                    ? (i = y)
                    : "string" == typeof r &&
                      0 === r.indexOf("MaxFileSizeError") &&
                      (i = m),
                    p.text(i),
                    l.removeAttr("data-value"),
                    l.val(""),
                    a.toggle(!1),
                    o.toggle(!0),
                    s.toggle(!0),
                    (n.fileUploads[e].uploading = !1),
                    x() || I(n);
                }
                function O(e, n) {
                  if (e) return T(e);
                  var i = n.fileName,
                    o = n.postData,
                    a = n.fileId,
                    u = n.s3Url;
                  l.attr("data-value", a),
                    (function (e, n, r, i, o) {
                      var a = new FormData();
                      for (var u in n) a.append(u, n[u]);
                      a.append("file", r, i),
                        t
                          .ajax({
                            type: "POST",
                            url: e,
                            data: a,
                            processData: !1,
                            contentType: !1,
                          })
                          .done(function () {
                            o(null);
                          })
                          .fail(function (t) {
                            o(t);
                          });
                    })(u, o, r, i, A);
                }
                function A(t) {
                  if (t) return T(t);
                  a.toggle(!1),
                    u.css("display", "inline-block"),
                    (n.fileUploads[e].uploading = !1),
                    x() || I(n);
                }
                function x() {
                  var t = (n.fileUploads && n.fileUploads.toArray()) || [];
                  return t.some(function (t) {
                    return t.uploading;
                  });
                }
              })(e, i);
            });
          var u = (i.action = r.attr("action"));
          (i.handler = null),
            (i.redirect = r.attr("data-redirect")),
            m.test(u) ? (i.handler = O) : u || (o ? (i.handler = T) : y());
        }
        function I(t) {
          var e = (t.btn = t.form.find(':input[type="submit"]'));
          (t.wait = t.btn.attr("data-wait") || null),
            (t.success = !1),
            e.prop("disabled", !1),
            t.label && e.val(t.label);
        }
        function b(t) {
          var e = t.btn,
            n = t.wait;
          e.prop("disabled", !0), n && ((t.label = e.val()), e.val(n));
        }
        function w(e, n) {
          var r = null;
          return (
            (n = n || {}),
            e
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (i, o) {
                var a = t(o),
                  u = a.attr("type"),
                  c =
                    a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                  s = a.val();
                if ("checkbox" === u) s = a.is(":checked");
                else if ("radio" === u) {
                  if (null === n[c] || "string" == typeof n[c]) return;
                  s =
                    e
                      .find('input[name="' + a.attr("name") + '"]:checked')
                      .val() || null;
                }
                "string" == typeof s && (s = t.trim(s)),
                  (n[c] = s),
                  (r =
                    r ||
                    (function (t, e, n, r) {
                      var i = null;
                      "password" === e
                        ? (i = "Passwords cannot be submitted.")
                        : t.attr("required")
                        ? r
                          ? v.test(t.attr("type")) &&
                            (h.test(r) ||
                              (i =
                                "Please enter a valid email address for: " + n))
                          : (i = "Please fill out the required field: " + n)
                        : "g-recaptcha-response" !== n ||
                          r ||
                          (i = "Please confirm youâ€™re not a robot.");
                      return i;
                    })(a, u, c, s));
              }),
            r
          );
        }
        function T(e) {
          I(e);
          var n = e.form,
            r = {
              name: n.attr("data-name") || n.attr("name") || "Untitled Form",
              source: f.href,
              test: i.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                n.html()
              ),
            };
          x(e);
          var a = w(n, r.fields);
          if (a) return g(a);
          (r.fileUploads = (function (e) {
            var n = {};
            return (
              e.find(':input[type="file"]').each(function (e, r) {
                var i = t(r),
                  o =
                    i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                  a = i.attr("data-value");
                "string" == typeof a && (a = t.trim(a)), (n[o] = a);
              }),
              n
            );
          })(n)),
            b(e),
            o
              ? t
                  .ajax({
                    url: u,
                    type: "POST",
                    data: r,
                    dataType: "json",
                    crossDomain: !0,
                  })
                  .done(function (t) {
                    t && 200 === t.code && (e.success = !0), A(e);
                  })
                  .fail(function () {
                    A(e);
                  })
              : A(e);
        }
        function O(n) {
          I(n);
          var r = n.form,
            i = {};
          if (!/^https/.test(f.href) || /^https/.test(n.action)) {
            x(n);
            var o,
              a = w(r, i);
            if (a) return g(a);
            b(n),
              e.each(i, function (t, e) {
                v.test(e) && (i.EMAIL = t),
                  /^((full[ _-]?)?name)$/i.test(e) && (o = t),
                  /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t),
                  /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t);
              }),
              o &&
                !i.FNAME &&
                ((o = o.split(" ")),
                (i.FNAME = o[0]),
                (i.LNAME = i.LNAME || o[1]));
            var u = n.action.replace("/post?", "/post-json?") + "&c=?",
              c = u.indexOf("u=") + 2;
            c = u.substring(c, u.indexOf("&", c));
            var s = u.indexOf("id=") + 3;
            (s = u.substring(s, u.indexOf("&", s))),
              (i["b_" + c + "_" + s] = ""),
              t
                .ajax({ url: u, data: i, dataType: "jsonp" })
                .done(function (t) {
                  (n.success = "success" === t.result || /already/.test(t.msg)),
                    n.success || console.info("MailChimp error: " + t.msg),
                    A(n);
                })
                .fail(function () {
                  A(n);
                });
          } else r.attr("method", "post");
        }
        function A(t) {
          var e = t.form,
            n = t.redirect,
            r = t.success;
          r && n
            ? i.location(n)
            : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), I(t));
        }
        function x(t) {
          t.evt && t.evt.preventDefault(), (t.evt = null);
        }
        return (
          (s.ready =
            s.design =
            s.preview =
              function () {
                !(function () {
                  (o = t("html").attr("data-wf-site")),
                    (u = "https://webflow.com/api/v1/form/" + o),
                    d &&
                      u.indexOf("https://webflow.com") >= 0 &&
                      (u = u.replace(
                        "https://webflow.com",
                        "http://formdata.webflow.com"
                      ));
                  if (
                    ((c = "".concat(u, "/signFile")),
                    !(n = t(p + " form")).length)
                  )
                    return;
                  n.each(_);
                })(),
                  E ||
                    a ||
                    (function () {
                      (a = !0),
                        l.on("submit", p + " form", function (e) {
                          var n = t.data(this, p);
                          n.handler && ((n.evt = e), n.handler(n));
                        });
                      var e = [
                        ["checkbox", ".w-checkbox-input"],
                        ["radio", ".w-radio-input"],
                      ];
                      l.on(
                        "change",
                        p +
                          ' form input[type="checkbox"]:not(.w-checkbox-input)',
                        function (e) {
                          t(e.target)
                            .siblings(".w-checkbox-input")
                            .toggleClass("w--redirected-checked");
                        }
                      ),
                        l.on(
                          "change",
                          p + ' form input[type="radio"]',
                          function (e) {
                            t(
                              'input[name="'
                                .concat(e.target.name, '"]:not(')
                                .concat(".w-checkbox-input", ")")
                            ).map(function (e, n) {
                              return t(n)
                                .siblings(".w-radio-input")
                                .removeClass("w--redirected-checked");
                            });
                            var n = t(e.target);
                            n.hasClass("w-radio-input") ||
                              n
                                .siblings(".w-radio-input")
                                .addClass("w--redirected-checked");
                          }
                        ),
                        e.forEach(function (e) {
                          var n = (0, r.default)(e, 2),
                            i = n[0],
                            o = n[1];
                          l.on(
                            "focus",
                            p +
                              ' form input[type="'.concat(i, '"]:not(') +
                              o +
                              ")",
                            function (e) {
                              t(e.target)
                                .siblings(o)
                                .addClass("w--redirected-focus");
                            }
                          ),
                            l.on(
                              "blur",
                              p +
                                ' form input[type="'.concat(i, '"]:not(') +
                                o +
                                ")",
                              function (e) {
                                t(e.target)
                                  .siblings(o)
                                  .removeClass("w--redirected-focus");
                              }
                            );
                        });
                    })();
              }),
          s
        );
      })
    );
  },
  function (t, e, n) {
    var r = n(320),
      i = n(321),
      o = n(322);
    t.exports = function (t, e) {
      return r(t) || i(t, e) || o();
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = [],
        r = !0,
        i = !1,
        o = void 0;
      try {
        for (
          var a, u = t[Symbol.iterator]();
          !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e);
          r = !0
        );
      } catch (t) {
        (i = !0), (o = t);
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (i) throw o;
        }
      }
      return n;
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(2),
      i = "w-condition-invisible",
      o = "." + i;
    function a(t) {
      return Boolean(t.$el && t.$el.closest(o).length);
    }
    function u(t, e) {
      for (var n = t; n >= 0; n--) if (!a(e[n])) return n;
      return -1;
    }
    function c(t, e) {
      for (var n = t; n <= e.length - 1; n++) if (!a(e[n])) return n;
      return -1;
    }
    function s(t, e, n, r) {
      var o,
        s,
        l,
        f = n.tram,
        d = Array.isArray,
        p = "w-lightbox-",
        v = /(^|\s+)/g,
        h = [];
      function g(t, e) {
        return (
          (h = d(t) ? t : [t]),
          s || g.build(),
          (function (t) {
            return t.filter(function (t) {
              return !a(t);
            });
          })(h).length > 1 &&
            ((s.items = s.empty),
            h.forEach(function (t) {
              var e = P("thumbnail"),
                n = P("item").append(e);
              a(t) && n.addClass(i),
                (s.items = s.items.add(n)),
                x(t.thumbnailUrl || t.url, function (t) {
                  t.prop("width") > t.prop("height")
                    ? N(t, "wide")
                    : N(t, "tall"),
                    e.append(N(t, "thumbnail-image"));
                });
            }),
            s.strip.empty().append(s.items),
            N(s.content, "group")),
          f(L(s.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          N(s.html, "noscroll"),
          g.show(e || 0)
        );
      }
      function E(t) {
        return function (e) {
          this === e.target && (e.stopPropagation(), e.preventDefault(), t());
        };
      }
      (g.build = function () {
        return (
          g.destroy(),
          ((s = { html: n(e.documentElement), empty: n() }).arrowLeft = P(
            "control left inactive"
          )),
          (s.arrowRight = P("control right inactive")),
          (s.close = P("control close")),
          (s.spinner = P("spinner")),
          (s.strip = P("strip")),
          (l = new S(s.spinner, R("hide"))),
          (s.content = P("content").append(
            s.spinner,
            s.arrowLeft,
            s.arrowRight,
            s.close
          )),
          (s.container = P("container").append(s.content, s.strip)),
          (s.lightbox = P("backdrop hide").append(s.container)),
          s.strip.on("click", C("item"), I),
          s.content
            .on("swipe", b)
            .on("click", C("left"), m)
            .on("click", C("right"), y)
            .on("click", C("close"), _)
            .on("click", C("image, caption"), y),
          s.container.on("click", C("view"), _).on("dragstart", C("img"), T),
          s.lightbox.on("keydown", O).on("focusin", w),
          n(r).append(s.lightbox.prop("tabIndex", 0)),
          g
        );
      }),
        (g.destroy = function () {
          s && (L(s.html, "noscroll"), s.lightbox.remove(), (s = void 0));
        }),
        (g.show = function (t) {
          if (t !== o) {
            var e = h[t];
            if (!e) return g.hide();
            if (a(e)) {
              if (t < o) {
                var r = u(t - 1, h);
                t = r > -1 ? r : t;
              } else {
                var i = c(t + 1, h);
                t = i > -1 ? i : t;
              }
              e = h[t];
            }
            var d,
              p,
              v = o;
            return (
              (o = t),
              l.show(),
              x(
                (e.html &&
                  ((d = e.width),
                  (p = e.height),
                  "data:image/svg+xml;charset=utf-8," +
                    encodeURI(
                      '<svg xmlns="http://www.w3.org/2000/svg" width="' +
                        d +
                        '" height="' +
                        p +
                        '"/>'
                    ))) ||
                  e.url,
                function (r) {
                  if (t === o) {
                    var i,
                      a,
                      d = P("figure", "figure").append(N(r, "image")),
                      p = P("frame").append(d),
                      g = P("view").append(p);
                    e.html &&
                      ((a = (i = n(e.html)).is("iframe")) && i.on("load", E),
                      d.append(N(i, "embed"))),
                      e.caption &&
                        d.append(P("caption", "figcaption").text(e.caption)),
                      s.spinner.before(g),
                      a || E();
                  }
                  function E() {
                    var e;
                    if ((l.hide(), t === o)) {
                      if (
                        (D(
                          s.arrowLeft,
                          "inactive",
                          (function (t, e) {
                            return -1 === u(t - 1, e);
                          })(t, h)
                        ),
                        D(
                          s.arrowRight,
                          "inactive",
                          (function (t, e) {
                            return -1 === c(t + 1, e);
                          })(t, h)
                        ),
                        s.view
                          ? (f(s.view)
                              .add("opacity .3s")
                              .start({ opacity: 0 })
                              .then(
                                ((e = s.view),
                                function () {
                                  e.remove();
                                })
                              ),
                            f(g)
                              .add("opacity .3s")
                              .add("transform .3s")
                              .set({ x: t > v ? "80px" : "-80px" })
                              .start({ opacity: 1, x: 0 }))
                          : g.css("opacity", 1),
                        (s.view = g),
                        s.items)
                      ) {
                        L(s.items, "active");
                        var n = s.items.eq(t);
                        N(n, "active"),
                          (function (t) {
                            var e,
                              n = t.get(0),
                              r = s.strip.get(0),
                              i = n.offsetLeft,
                              o = n.clientWidth,
                              a = r.scrollLeft,
                              u = r.clientWidth,
                              c = r.scrollWidth - u;
                            i < a
                              ? (e = Math.max(0, i + o - u))
                              : i + o > u + a && (e = Math.min(i, c));
                            null != e &&
                              f(s.strip)
                                .add("scroll-left 500ms")
                                .start({ "scroll-left": e });
                          })(n);
                      }
                    } else g.remove();
                  }
                }
              ),
              g
            );
          }
        }),
        (g.hide = function () {
          return (
            f(s.lightbox).add("opacity .3s").start({ opacity: 0 }).then(A), g
          );
        }),
        (g.prev = function () {
          var t = u(o - 1, h);
          t > -1 && g.show(t);
        }),
        (g.next = function () {
          var t = c(o + 1, h);
          t > -1 && g.show(t);
        });
      var m = E(g.prev),
        y = E(g.next),
        _ = E(g.hide),
        I = function (t) {
          var e = n(this).index();
          t.preventDefault(), g.show(e);
        },
        b = function (t, e) {
          t.preventDefault(),
            "left" === e.direction
              ? g.next()
              : "right" === e.direction && g.prev();
        },
        w = function () {
          this.focus();
        };
      function T(t) {
        t.preventDefault();
      }
      function O(t) {
        var e = t.keyCode;
        27 === e ? g.hide() : 37 === e ? g.prev() : 39 === e && g.next();
      }
      function A() {
        s &&
          (s.strip.scrollLeft(0).empty(),
          L(s.html, "noscroll"),
          N(s.lightbox, "hide"),
          s.view && s.view.remove(),
          L(s.content, "group"),
          N(s.arrowLeft, "inactive"),
          N(s.arrowRight, "inactive"),
          (o = s.view = void 0));
      }
      function x(t, e) {
        var n = P("img", "img");
        return (
          n.one("load", function () {
            e(n);
          }),
          n.attr("src", t),
          n
        );
      }
      function S(t, e, n) {
        (this.$element = t),
          (this.className = e),
          (this.delay = n || 200),
          this.hide();
      }
      function R(t, e) {
        return t.replace(v, (e ? " ." : " ") + p);
      }
      function C(t) {
        return R(t, !0);
      }
      function N(t, e) {
        return t.addClass(R(e));
      }
      function L(t, e) {
        return t.removeClass(R(e));
      }
      function D(t, e, n) {
        return t.toggleClass(R(e), n);
      }
      function P(t, r) {
        return N(n(e.createElement(r || "div")), t);
      }
      return (
        (S.prototype.show = function () {
          var t = this;
          t.timeoutId ||
            (t.timeoutId = setTimeout(function () {
              t.$element.removeClass(t.className), delete t.timeoutId;
            }, t.delay));
        }),
        (S.prototype.hide = function () {
          if (this.timeoutId)
            return clearTimeout(this.timeoutId), void delete this.timeoutId;
          this.$element.addClass(this.className);
        }),
        (function () {
          var n = t.navigator.userAgent,
            r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
          if (
            (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome")) ||
            (r && !(r[2] > 7))
          ) {
            var i = e.createElement("style");
            e.head.appendChild(i), t.addEventListener("resize", o, !0), o();
          }
          function o() {
            var e = t.innerHeight,
              n = t.innerWidth,
              r =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                e +
                "px}.w-lightbox-view {width:" +
                n +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * e +
                "px}.w-lightbox-image {max-width:" +
                n +
                "px;max-height:" +
                e +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * e +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * e +
                "px}.w-lightbox-item {width:" +
                0.1 * e +
                "px;padding:" +
                0.02 * e +
                "px " +
                0.01 * e +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * e +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * e +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * e +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * e +
                "px}.w-lightbox-image {max-width:" +
                0.96 * n +
                "px;max-height:" +
                0.96 * e +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * n +
                "px;max-height:" +
                0.84 * e +
                "px}}";
            i.textContent = r;
          }
        })(),
        g
      );
    }
    r.define(
      "lightbox",
      (t.exports = function (t) {
        var e,
          n,
          i = {},
          o = r.env(),
          a = s(window, document, t, o ? "#lightbox-mountpoint" : "body"),
          u = t(document),
          c = ".w-lightbox";
        function l(t) {
          var e,
            r,
            i = t.el.children(".w-json").html();
          if (i) {
            try {
              i = JSON.parse(i);
            } catch (t) {
              console.error("Malformed lightbox JSON configuration.", t);
            }
            !(function (t) {
              t.images &&
                (t.images.forEach(function (t) {
                  t.type = "image";
                }),
                (t.items = t.images));
              t.embed && ((t.embed.type = "video"), (t.items = [t.embed]));
              t.groupId && (t.group = t.groupId);
            })(i),
              i.items.forEach(function (e) {
                e.$el = t.el;
              }),
              (e = i.group)
                ? ((r = n[e]) || (r = n[e] = []),
                  (t.items = r),
                  i.items.length &&
                    ((t.index = r.length), r.push.apply(r, i.items)))
                : ((t.items = i.items), (t.index = 0));
          } else t.items = [];
        }
        return (
          (i.ready =
            i.design =
            i.preview =
              function () {
                (e = o && r.env("design")),
                  a.destroy(),
                  (n = {}),
                  u.find(c).webflowLightBox();
              }),
          jQuery.fn.extend({
            webflowLightBox: function () {
              t.each(this, function (n, r) {
                var i = t.data(r, c);
                i ||
                  (i = t.data(r, c, {
                    el: t(r),
                    mode: "images",
                    images: [],
                    embed: "",
                  })),
                  i.el.off(c),
                  l(i),
                  e
                    ? i.el.on("setting" + c, l.bind(null, i))
                    : i.el
                        .on(
                          "click" + c,
                          (function (t) {
                            return function () {
                              t.items.length && a(t.items, t.index || 0);
                            };
                          })(i)
                        )
                        .on("click" + c, function (t) {
                          t.preventDefault();
                        });
              });
            },
          }),
          i
        );
      })
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(2),
      i = n(14),
      o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    r.define(
      "navbar",
      (t.exports = function (t, e) {
        var n,
          a,
          u,
          c,
          s = {},
          l = t.tram,
          f = t(window),
          d = t(document),
          p = e.debounce,
          v = r.env(),
          h = '<div class="w-nav-overlay" data-wf-ignore />',
          g = ".w-nav",
          E = "w--open",
          m = "w--nav-dropdown-open",
          y = "w--nav-dropdown-toggle-open",
          _ = "w--nav-dropdown-list-open",
          I = "w--nav-link-open",
          b = i.triggers,
          w = t();
        function T() {
          r.resize.off(O);
        }
        function O() {
          a.each(M);
        }
        function A(n, r) {
          var i = t(r),
            a = t.data(r, g);
          a ||
            (a = t.data(r, g, {
              open: !1,
              el: i,
              config: {},
              selectedIdx: -1,
            })),
            (a.menu = i.find(".w-nav-menu")),
            (a.links = a.menu.find(".w-nav-link")),
            (a.dropdowns = a.menu.find(".w-dropdown")),
            (a.dropdownToggle = a.menu.find(".w-dropdown-toggle")),
            (a.dropdownList = a.menu.find(".w-dropdown-list")),
            (a.button = i.find(".w-nav-button")),
            (a.container = i.find(".w-container")),
            (a.overlayContainerId = "w-nav-overlay-" + n),
            (a.outside = (function (e) {
              e.outside && d.off("click" + g, e.outside);
              return function (n) {
                var r = t(n.target);
                (c && r.closest(".w-editor-bem-EditorOverlay").length) ||
                  P(e, r);
              };
            })(a));
          var s = i.find(".w-nav-brand");
          s &&
            "/" === s.attr("href") &&
            null == s.attr("aria-label") &&
            s.attr("aria-label", "home"),
            a.button.attr("style", "-webkit-user-select: text;"),
            null == a.button.attr("aria-label") &&
              a.button.attr("aria-label", "menu"),
            a.button.attr("role", "button"),
            a.button.attr("tabindex", "0"),
            a.button.attr("aria-controls", a.overlayContainerId),
            a.button.attr("aria-haspopup", "menu"),
            a.button.attr("aria-expanded", "false"),
            a.el.off(g),
            a.button.off(g),
            a.menu.off(g),
            R(a),
            u
              ? (S(a),
                a.el.on(
                  "setting" + g,
                  (function (t) {
                    return function (n, r) {
                      r = r || {};
                      var i = f.width();
                      R(t),
                        !0 === r.open && X(t, !0),
                        !1 === r.open && U(t, !0),
                        t.open &&
                          e.defer(function () {
                            i !== f.width() && N(t);
                          });
                    };
                  })(a)
                ))
              : (!(function (e) {
                  if (e.overlay) return;
                  (e.overlay = t(h).appendTo(e.el)),
                    e.overlay.attr("id", e.overlayContainerId),
                    (e.parent = e.menu.parent()),
                    U(e, !0);
                })(a),
                a.button.on("click" + g, L(a)),
                a.menu.on("click" + g, "a", D(a)),
                a.button.on(
                  "keydown" + g,
                  (function (t) {
                    return function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            L(t)(), e.preventDefault(), e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return U(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          return t.open
                            ? (e.keyCode === o.END
                                ? (t.selectedIdx = t.links.length - 1)
                                : (t.selectedIdx = 0),
                              C(t),
                              e.preventDefault(),
                              e.stopPropagation())
                            : (e.preventDefault(), e.stopPropagation());
                      }
                    };
                  })(a)
                ),
                a.el.on(
                  "keydown" + g,
                  (function (t) {
                    return function (e) {
                      if (t.open)
                        switch (
                          ((t.selectedIdx = t.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (t.selectedIdx = t.links.length - 1)
                                : (t.selectedIdx = 0),
                              C(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              U(t),
                              t.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)),
                              C(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (t.selectedIdx = Math.min(
                                t.links.length - 1,
                                t.selectedIdx + 1
                              )),
                              C(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    };
                  })(a)
                )),
            M(n, r);
        }
        function x(e, n) {
          var r = t.data(n, g);
          r && (S(r), t.removeData(n, g));
        }
        function S(t) {
          t.overlay && (U(t, !0), t.overlay.remove(), (t.overlay = null));
        }
        function R(t) {
          var n = {},
            r = t.config || {},
            i = (n.animation = t.el.attr("data-animation") || "default");
          (n.animOver = /^over/.test(i)),
            (n.animDirect = /left$/.test(i) ? -1 : 1),
            r.animation !== i && t.open && e.defer(N, t),
            (n.easing = t.el.attr("data-easing") || "ease"),
            (n.easing2 = t.el.attr("data-easing2") || "ease");
          var o = t.el.attr("data-duration");
          (n.duration = null != o ? Number(o) : 400),
            (n.docHeight = t.el.attr("data-doc-height")),
            (t.config = n);
        }
        function C(t) {
          if (t.links[t.selectedIdx]) {
            var e = t.links[t.selectedIdx];
            e.focus(), D(e);
          }
        }
        function N(t) {
          t.open && (U(t, !0), X(t, !0));
        }
        function L(t) {
          return p(function () {
            t.open ? U(t) : X(t);
          });
        }
        function D(e) {
          return function (n) {
            var i = t(this).attr("href");
            r.validClick(n.currentTarget)
              ? i && 0 === i.indexOf("#") && e.open && U(e)
              : n.preventDefault();
          };
        }
        (s.ready =
          s.design =
          s.preview =
            function () {
              if (
                ((u = v && r.env("design")),
                (c = r.env("editor")),
                (n = t(document.body)),
                !(a = d.find(g)).length)
              )
                return;
              a.each(A), T(), r.resize.on(O);
            }),
          (s.destroy = function () {
            (w = t()), T(), a && a.length && a.each(x);
          });
        var P = p(function (t, e) {
          if (t.open) {
            var n = e.closest(".w-nav-menu");
            t.menu.is(n) || U(t);
          }
        });
        function M(e, n) {
          var r = t.data(n, g),
            i = (r.collapsed = "none" !== r.button.css("display"));
          if ((!r.open || i || u || U(r, !0), r.container.length)) {
            var o = (function (e) {
              var n = e.container.css(j);
              "none" === n && (n = "");
              return function (e, r) {
                (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n);
              };
            })(r);
            r.links.each(o), r.dropdowns.each(o);
          }
          r.open && G(r);
        }
        var j = "max-width";
        function F(t, e) {
          e.setAttribute("data-nav-menu-open", "");
        }
        function k(t, e) {
          e.removeAttribute("data-nav-menu-open");
        }
        function X(t, e) {
          if (!t.open) {
            (t.open = !0),
              t.menu.each(F),
              t.links.addClass(I),
              t.dropdowns.addClass(m),
              t.dropdownToggle.addClass(y),
              t.dropdownList.addClass(_),
              t.button.addClass(E);
            var n = t.config;
            ("none" === n.animation ||
              !l.support.transform ||
              n.duration <= 0) &&
              (e = !0);
            var i = G(t),
              o = t.menu.outerHeight(!0),
              a = t.menu.outerWidth(!0),
              c = t.el.height(),
              s = t.el[0];
            if (
              (M(0, s),
              b.intro(0, s),
              r.redraw.up(),
              u || d.on("click" + g, t.outside),
              e)
            )
              v();
            else {
              var f = "transform " + n.duration + "ms " + n.easing;
              if (
                (t.overlay &&
                  ((w = t.menu.prev()), t.overlay.show().append(t.menu)),
                n.animOver)
              )
                return (
                  l(t.menu)
                    .add(f)
                    .set({ x: n.animDirect * a, height: i })
                    .start({ x: 0 })
                    .then(v),
                  void (t.overlay && t.overlay.width(a))
                );
              var p = c + o;
              l(t.menu).add(f).set({ y: -p }).start({ y: 0 }).then(v);
            }
          }
          function v() {
            t.button.attr("aria-expanded", "true");
          }
        }
        function G(t) {
          var e = t.config,
            r = e.docHeight ? d.height() : n.height();
          return (
            e.animOver
              ? t.menu.height(r)
              : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)),
            t.overlay && t.overlay.height(r),
            r
          );
        }
        function U(t, e) {
          if (t.open) {
            (t.open = !1), t.button.removeClass(E);
            var n = t.config;
            if (
              (("none" === n.animation ||
                !l.support.transform ||
                n.duration <= 0) &&
                (e = !0),
              b.outro(0, t.el[0]),
              d.off("click" + g, t.outside),
              e)
            )
              return l(t.menu).stop(), void c();
            var r = "transform " + n.duration + "ms " + n.easing2,
              i = t.menu.outerHeight(!0),
              o = t.menu.outerWidth(!0),
              a = t.el.height();
            if (n.animOver)
              l(t.menu)
                .add(r)
                .start({ x: o * n.animDirect })
                .then(c);
            else {
              var u = a + i;
              l(t.menu).add(r).start({ y: -u }).then(c);
            }
          }
          function c() {
            t.menu.height(""),
              l(t.menu).set({ x: 0, y: 0 }),
              t.menu.each(k),
              t.links.removeClass(I),
              t.dropdowns.removeClass(m),
              t.dropdownToggle.removeClass(y),
              t.dropdownList.removeClass(_),
              t.overlay &&
                t.overlay.children().length &&
                (w.length ? t.menu.insertAfter(w) : t.menu.prependTo(t.parent),
                t.overlay.attr("style", "").hide()),
              t.el.triggerHandler("w-close"),
              t.button.attr("aria-expanded", "false");
          }
        }
        return s;
      })
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(2),
      i = n(14),
      o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      a =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    r.define(
      "slider",
      (t.exports = function (t, e) {
        var n,
          u,
          c,
          s,
          l = {},
          f = t.tram,
          d = t(document),
          p = r.env(),
          v = ".w-slider",
          h = '<div class="w-slider-dot" data-wf-ignore />',
          g =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          E = i.triggers;
        function m() {
          (n = d.find(v)).length &&
            (n.each(I),
            (s = null),
            c || (y(), r.resize.on(_), r.redraw.on(l.redraw)));
        }
        function y() {
          r.resize.off(_), r.redraw.off(l.redraw);
        }
        function _() {
          n.filter(":visible").each(D);
        }
        function I(e, n) {
          var r = t(n),
            i = t.data(n, v);
          i ||
            (i = t.data(n, v, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: r,
              config: {},
            })),
            (i.mask = r.children(".w-slider-mask")),
            (i.left = r.children(".w-slider-arrow-left")),
            (i.right = r.children(".w-slider-arrow-right")),
            (i.nav = r.children(".w-slider-nav")),
            (i.slides = i.mask.children(".w-slide")),
            i.slides.each(E.reset),
            s && (i.maskWidth = 0),
            void 0 === r.attr("role") && r.attr("role", "region"),
            void 0 === r.attr("aria-label") && r.attr("aria-label", "carousel");
          var o = i.mask.attr("id");
          if (
            (o || ((o = "w-slider-mask-" + e), i.mask.attr("id", o)),
            (i.ariaLiveLabel = t(g).appendTo(i.mask)),
            i.left.attr("role", "button"),
            i.left.attr("tabindex", "0"),
            i.left.attr("aria-controls", o),
            void 0 === i.left.attr("aria-label") &&
              i.left.attr("aria-label", "previous slide"),
            i.right.attr("role", "button"),
            i.right.attr("tabindex", "0"),
            i.right.attr("aria-controls", o),
            void 0 === i.right.attr("aria-label") &&
              i.right.attr("aria-label", "next slide"),
            !f.support.transform)
          )
            return i.left.hide(), i.right.hide(), i.nav.hide(), void (c = !0);
          i.el.off(v),
            i.left.off(v),
            i.right.off(v),
            i.nav.off(v),
            b(i),
            u
              ? (i.el.on("setting" + v, C(i)), R(i), (i.hasTimer = !1))
              : (i.el.on("swipe" + v, C(i)),
                i.left.on("click" + v, A(i)),
                i.right.on("click" + v, x(i)),
                i.left.on("keydown" + v, O(i, A)),
                i.right.on("keydown" + v, O(i, x)),
                i.nav.on("keydown" + v, "> div", C(i)),
                i.config.autoplay &&
                  !i.hasTimer &&
                  ((i.hasTimer = !0), (i.timerCount = 1), S(i)),
                i.el.on("mouseenter" + v, T(i, !0, "mouse")),
                i.el.on("focusin" + v, T(i, !0, "keyboard")),
                i.el.on("mouseleave" + v, T(i, !1, "mouse")),
                i.el.on("focusout" + v, T(i, !1, "keyboard"))),
            i.nav.on("click" + v, "> div", C(i)),
            p ||
              i.mask
                .contents()
                .filter(function () {
                  return 3 === this.nodeType;
                })
                .remove();
          var a = r.filter(":hidden");
          a.show();
          var l = r.parents(":hidden");
          l.show(), D(e, n), a.css("display", ""), l.css("display", "");
        }
        function b(t) {
          var e = { crossOver: 0 };
          (e.animation = t.el.attr("data-animation") || "slide"),
            "outin" === e.animation &&
              ((e.animation = "cross"), (e.crossOver = 0.5)),
            (e.easing = t.el.attr("data-easing") || "ease");
          var n = t.el.attr("data-duration");
          if (
            ((e.duration = null != n ? parseInt(n, 10) : 500),
            w(t.el.attr("data-infinite")) && (e.infinite = !0),
            w(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0),
            w(t.el.attr("data-hide-arrows"))
              ? (e.hideArrows = !0)
              : t.config.hideArrows && (t.left.show(), t.right.show()),
            w(t.el.attr("data-autoplay")))
          ) {
            (e.autoplay = !0),
              (e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3),
              (e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10));
            var r = "mousedown" + v + " touchstart" + v;
            u ||
              t.el.off(r).one(r, function () {
                R(t);
              });
          }
          var i = t.right.width();
          (e.edge = i ? i + 40 : 100), (t.config = e);
        }
        function w(t) {
          return "1" === t || "true" === t;
        }
        function T(e, n, r) {
          return function (i) {
            if (n) e.hasFocus[r] = n;
            else {
              if (t.contains(e.el.get(0), i.relatedTarget)) return;
              if (
                ((e.hasFocus[r] = n),
                (e.hasFocus.mouse && "keyboard" === r) ||
                  (e.hasFocus.keyboard && "mouse" === r))
              )
                return;
            }
            n
              ? (e.ariaLiveLabel.attr("aria-live", "polite"),
                e.hasTimer && R(e))
              : (e.ariaLiveLabel.attr("aria-live", "off"), e.hasTimer && S(e));
          };
        }
        function O(t, e) {
          return function (n) {
            switch (n.keyCode) {
              case o.SPACE:
              case o.ENTER:
                return e(t)(), n.preventDefault(), n.stopPropagation();
            }
          };
        }
        function A(t) {
          return function () {
            L(t, { index: t.index - 1, vector: -1 });
          };
        }
        function x(t) {
          return function () {
            L(t, { index: t.index + 1, vector: 1 });
          };
        }
        function S(t) {
          R(t);
          var e = t.config,
            n = e.timerMax;
          (n && t.timerCount++ > n) ||
            (t.timerId = window.setTimeout(function () {
              null == t.timerId || u || (x(t)(), S(t));
            }, e.delay));
        }
        function R(t) {
          window.clearTimeout(t.timerId), (t.timerId = null);
        }
        function C(n) {
          return function (i, a) {
            a = a || {};
            var c = n.config;
            if (u && "setting" === i.type) {
              if ("prev" === a.select) return A(n)();
              if ("next" === a.select) return x(n)();
              if ((b(n), P(n), null == a.select)) return;
              !(function (n, r) {
                var i = null;
                r === n.slides.length && (m(), P(n)),
                  e.each(n.anchors, function (e, n) {
                    t(e.els).each(function (e, o) {
                      t(o).index() === r && (i = n);
                    });
                  }),
                  null != i && L(n, { index: i, immediate: !0 });
              })(n, a.select);
            } else {
              if ("swipe" === i.type) {
                if (c.disableSwipe) return;
                if (r.env("editor")) return;
                return "left" === a.direction
                  ? x(n)()
                  : "right" === a.direction
                  ? A(n)()
                  : void 0;
              }
              if (n.nav.has(i.target).length) {
                var s = t(i.target).index();
                if (
                  ("click" === i.type && L(n, { index: s }),
                  "keydown" === i.type)
                )
                  switch (i.keyCode) {
                    case o.ENTER:
                    case o.SPACE:
                      L(n, { index: s }), i.preventDefault();
                      break;
                    case o.ARROW_LEFT:
                    case o.ARROW_UP:
                      N(n.nav, Math.max(s - 1, 0)), i.preventDefault();
                      break;
                    case o.ARROW_RIGHT:
                    case o.ARROW_DOWN:
                      N(n.nav, Math.min(s + 1, n.pages)), i.preventDefault();
                      break;
                    case o.HOME:
                      N(n.nav, 0), i.preventDefault();
                      break;
                    case o.END:
                      N(n.nav, n.pages), i.preventDefault();
                      break;
                    default:
                      return;
                  }
              }
            }
          };
        }
        function N(t, e) {
          var n = t.children().eq(e).focus();
          t.children().not(n);
        }
        function L(e, n) {
          n = n || {};
          var r = e.config,
            i = e.anchors;
          e.previous = e.index;
          var o = n.index,
            c = {};
          o < 0
            ? ((o = i.length - 1),
              r.infinite &&
                ((c.x = -e.endX), (c.from = 0), (c.to = i[0].width)))
            : o >= i.length &&
              ((o = 0),
              r.infinite &&
                ((c.x = i[i.length - 1].width),
                (c.from = -i[i.length - 1].x),
                (c.to = c.from - c.x))),
            (e.index = o);
          var l = e.nav
            .children()
            .eq(o)
            .addClass("w-active")
            .attr("aria-selected", "true")
            .attr("tabindex", "0");
          e.nav
            .children()
            .not(l)
            .removeClass("w-active")
            .attr("aria-selected", "false")
            .attr("tabindex", "-1"),
            r.hideArrows &&
              (e.index === i.length - 1 ? e.right.hide() : e.right.show(),
              0 === e.index ? e.left.hide() : e.left.show());
          var d = e.offsetX || 0,
            p = (e.offsetX = -i[e.index].x),
            v = { x: p, opacity: 1, visibility: "" },
            h = t(i[e.index].els),
            g = t(i[e.previous] && i[e.previous].els),
            m = e.slides.not(h),
            y = r.animation,
            _ = r.easing,
            I = Math.round(r.duration),
            b = n.vector || (e.index > e.previous ? 1 : -1),
            w = "opacity " + I + "ms " + _,
            T = "transform " + I + "ms " + _;
          if (
            (h.find(a).removeAttr("tabindex"),
            h.removeAttr("aria-hidden"),
            h.find("*").removeAttr("aria-hidden"),
            m.find(a).attr("tabindex", "-1"),
            m.attr("aria-hidden", "true"),
            m.find("*").attr("aria-hidden", "true"),
            u || (h.each(E.intro), m.each(E.outro)),
            n.immediate && !s)
          )
            return f(h).set(v), void x();
          if (e.index !== e.previous) {
            if (
              (e.ariaLiveLabel.text(
                "Slide ".concat(o + 1, " of ").concat(i.length, ".")
              ),
              "cross" === y)
            ) {
              var O = Math.round(I - I * r.crossOver),
                A = Math.round(I - O);
              return (
                (w = "opacity " + O + "ms " + _),
                f(g).set({ visibility: "" }).add(w).start({ opacity: 0 }),
                void f(h)
                  .set({ visibility: "", x: p, opacity: 0, zIndex: e.depth++ })
                  .add(w)
                  .wait(A)
                  .then({ opacity: 1 })
                  .then(x)
              );
            }
            if ("fade" === y)
              return (
                f(g).set({ visibility: "" }).stop(),
                void f(h)
                  .set({ visibility: "", x: p, opacity: 0, zIndex: e.depth++ })
                  .add(w)
                  .start({ opacity: 1 })
                  .then(x)
              );
            if ("over" === y)
              return (
                (v = { x: e.endX }),
                f(g).set({ visibility: "" }).stop(),
                void f(h)
                  .set({
                    visibility: "",
                    zIndex: e.depth++,
                    x: p + i[e.index].width * b,
                  })
                  .add(T)
                  .start({ x: p })
                  .then(x)
              );
            r.infinite && c.x
              ? (f(e.slides.not(g))
                  .set({ visibility: "", x: c.x })
                  .add(T)
                  .start({ x: p }),
                f(g)
                  .set({ visibility: "", x: c.from })
                  .add(T)
                  .start({ x: c.to }),
                (e.shifted = g))
              : (r.infinite &&
                  e.shifted &&
                  (f(e.shifted).set({ visibility: "", x: d }),
                  (e.shifted = null)),
                f(e.slides).set({ visibility: "" }).add(T).start({ x: p }));
          }
          function x() {
            (h = t(i[e.index].els)),
              (m = e.slides.not(h)),
              "slide" !== y && (v.visibility = "hidden"),
              f(m).set(v);
          }
        }
        function D(e, n) {
          var r = t.data(n, v);
          if (r)
            return (function (t) {
              var e = t.mask.width();
              if (t.maskWidth !== e) return (t.maskWidth = e), !0;
              return !1;
            })(r)
              ? P(r)
              : void (
                  u &&
                  (function (e) {
                    var n = 0;
                    if (
                      (e.slides.each(function (e, r) {
                        n += t(r).outerWidth(!0);
                      }),
                      e.slidesWidth !== n)
                    )
                      return (e.slidesWidth = n), !0;
                    return !1;
                  })(r) &&
                  P(r)
                );
        }
        function P(e) {
          var n = 1,
            r = 0,
            i = 0,
            o = 0,
            a = e.maskWidth,
            c = a - e.config.edge;
          c < 0 && (c = 0),
            (e.anchors = [{ els: [], x: 0, width: 0 }]),
            e.slides.each(function (u, s) {
              i - r > c &&
                (n++,
                (r += a),
                (e.anchors[n - 1] = { els: [], x: i, width: 0 })),
                (o = t(s).outerWidth(!0)),
                (i += o),
                (e.anchors[n - 1].width += o),
                e.anchors[n - 1].els.push(s);
              var l = u + 1 + " of " + e.slides.length;
              t(s).attr("aria-label", l), t(s).attr("role", "group");
            }),
            (e.endX = i),
            u && (e.pages = null),
            e.nav.length &&
              e.pages !== n &&
              ((e.pages = n),
              (function (e) {
                var n,
                  r = [],
                  i = e.el.attr("data-nav-spacing");
                i && (i = parseFloat(i) + "px");
                for (var o = 0, a = e.pages; o < a; o++)
                  (n = t(h))
                    .attr("aria-label", "Show slide " + (o + 1) + " of " + a)
                    .attr("aria-selected", "false")
                    .attr("role", "button")
                    .attr("tabindex", "-1"),
                    e.nav.hasClass("w-num") && n.text(o + 1),
                    null != i && n.css({ "margin-left": i, "margin-right": i }),
                    r.push(n);
                e.nav.empty().append(r);
              })(e));
          var s = e.index;
          s >= n && (s = n - 1), L(e, { immediate: !0, index: s });
        }
        return (
          (l.ready = function () {
            (u = r.env("design")), m();
          }),
          (l.design = function () {
            (u = !0), m();
          }),
          (l.preview = function () {
            (u = !1), m();
          }),
          (l.redraw = function () {
            (s = !0), m();
          }),
          (l.destroy = y),
          l
        );
      })
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(2),
      i = n(14);
    r.define(
      "tabs",
      (t.exports = function (t) {
        var e,
          n,
          o = {},
          a = t.tram,
          u = t(document),
          c = r.env,
          s = c.safari,
          l = c(),
          f = "data-w-tab",
          d = "data-w-pane",
          p = ".w-tabs",
          v = "w--current",
          h = "w--tab-active",
          g = i.triggers,
          E = !1;
        function m() {
          (n = l && r.env("design")),
            (e = u.find(p)).length &&
              (e.each(I),
              r.env("preview") && !E && e.each(_),
              y(),
              r.redraw.on(o.redraw));
        }
        function y() {
          r.redraw.off(o.redraw);
        }
        function _(e, n) {
          var r = t.data(n, p);
          r &&
            (r.links && r.links.each(g.reset),
            r.panes && r.panes.each(g.reset));
        }
        function I(e, r) {
          var i = p.substr(1) + "-" + e,
            o = t(r),
            a = t.data(r, p);
          if (
            (a || (a = t.data(r, p, { el: o, config: {} })),
            (a.current = null),
            (a.tabIdentifier = i + "-" + f),
            (a.paneIdentifier = i + "-" + d),
            (a.menu = o.children(".w-tab-menu")),
            (a.links = a.menu.children(".w-tab-link")),
            (a.content = o.children(".w-tab-content")),
            (a.panes = a.content.children(".w-tab-pane")),
            a.el.off(p),
            a.links.off(p),
            a.menu.attr("role", "tablist"),
            a.links.attr("tabindex", "-1"),
            (function (t) {
              var e = {};
              e.easing = t.el.attr("data-easing") || "ease";
              var n = parseInt(t.el.attr("data-duration-in"), 10);
              n = e.intro = n == n ? n : 0;
              var r = parseInt(t.el.attr("data-duration-out"), 10);
              (r = e.outro = r == r ? r : 0),
                (e.immediate = !n && !r),
                (t.config = e);
            })(a),
            !n)
          ) {
            a.links.on(
              "click" + p,
              (function (t) {
                return function (e) {
                  e.preventDefault();
                  var n = e.currentTarget.getAttribute(f);
                  n && b(t, { tab: n });
                };
              })(a)
            ),
              a.links.on(
                "keydown" + p,
                (function (t) {
                  return function (e) {
                    var n = (function (t) {
                        var e = t.current;
                        return Array.prototype.findIndex.call(
                          t.links,
                          function (t) {
                            return t.getAttribute(f) === e;
                          },
                          null
                        );
                      })(t),
                      r = e.key,
                      i = {
                        ArrowLeft: n - 1,
                        ArrowUp: n - 1,
                        ArrowRight: n + 1,
                        ArrowDown: n + 1,
                        End: t.links.length - 1,
                        Home: 0,
                      };
                    if (r in i) {
                      e.preventDefault();
                      var o = i[r];
                      -1 === o && (o = t.links.length - 1),
                        o === t.links.length && (o = 0);
                      var a = t.links[o],
                        u = a.getAttribute(f);
                      u && b(t, { tab: u });
                    }
                  };
                })(a)
              );
            var u = a.links.filter("." + v).attr(f);
            u && b(a, { tab: u, immediate: !0 });
          }
        }
        function b(e, n) {
          n = n || {};
          var i = e.config,
            o = i.easing,
            u = n.tab;
          if (u !== e.current) {
            var c;
            (e.current = u),
              e.links.each(function (r, o) {
                var a = t(o);
                if (n.immediate || i.immediate) {
                  var s = e.panes[r];
                  o.id || (o.id = e.tabIdentifier + "-" + r),
                    s.id || (s.id = e.paneIdentifier + "-" + r),
                    (o.href = "#" + s.id),
                    o.setAttribute("role", "tab"),
                    o.setAttribute("aria-controls", s.id),
                    o.setAttribute("aria-selected", "false"),
                    s.setAttribute("role", "tabpanel"),
                    s.setAttribute("aria-labelledby", o.id);
                }
                o.getAttribute(f) === u
                  ? ((c = o),
                    a
                      .addClass(v)
                      .removeAttr("tabindex")
                      .attr({ "aria-selected": "true" })
                      .each(g.intro))
                  : a.hasClass(v) &&
                    a
                      .removeClass(v)
                      .attr({ tabindex: "-1", "aria-selected": "false" })
                      .each(g.outro);
              });
            var l = [],
              d = [];
            e.panes.each(function (e, n) {
              var r = t(n);
              n.getAttribute(f) === u ? l.push(n) : r.hasClass(h) && d.push(n);
            });
            var p = t(l),
              m = t(d);
            if (n.immediate || i.immediate)
              return (
                p.addClass(h).each(g.intro),
                m.removeClass(h),
                void (E || r.redraw.up())
              );
            var y = window.scrollX,
              _ = window.scrollY;
            c.focus(),
              window.scrollTo(y, _),
              m.length && i.outro
                ? (m.each(g.outro),
                  a(m)
                    .add("opacity " + i.outro + "ms " + o, { fallback: s })
                    .start({ opacity: 0 })
                    .then(function () {
                      return w(i, m, p);
                    }))
                : w(i, m, p);
          }
        }
        function w(t, e, n) {
          if (
            (e
              .removeClass(h)
              .css({
                opacity: "",
                transition: "",
                transform: "",
                width: "",
                height: "",
              }),
            n.addClass(h).each(g.intro),
            r.redraw.up(),
            !t.intro)
          )
            return a(n).set({ opacity: 1 });
          a(n)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + t.intro + "ms " + t.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return (
          (o.ready = o.design = o.preview = m),
          (o.redraw = function () {
            (E = !0), m(), (E = !1);
          }),
          (o.destroy = function () {
            (e = u.find(p)).length && (e.each(_), y());
          }),
          o
        );
      })
    );
  },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522861456179,
    },
    "e-2": {
      id: "e-2",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522861456182,
    },
    "e-3": {
      id: "e-3",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522861689476,
    },
    "e-4": {
      id: "e-4",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522861689476,
    },
    "e-5": {
      id: "e-5",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e6e7d113-7e4e-cb6c-0eb2-92305d85419b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e6e7d113-7e4e-cb6c-0eb2-92305d85419b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522861967977,
    },
    "e-6": {
      id: "e-6",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e6e7d113-7e4e-cb6c-0eb2-92305d85419b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e6e7d113-7e4e-cb6c-0eb2-92305d85419b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522861967977,
    },
    "e-9": {
      id: "e-9",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|fa9f69ef-4f4a-53e6-ab46-ecc045dda8fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|fa9f69ef-4f4a-53e6-ab46-ecc045dda8fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523038239009,
    },
    "e-10": {
      id: "e-10",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|fa9f69ef-4f4a-53e6-ab46-ecc045dda8fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|fa9f69ef-4f4a-53e6-ab46-ecc045dda8fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523038239009,
    },
    "e-11": {
      id: "e-11",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|ac949d31-3b93-61dc-c658-959672781275",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|ac949d31-3b93-61dc-c658-959672781275",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523038239517,
    },
    "e-12": {
      id: "e-12",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|ac949d31-3b93-61dc-c658-959672781275",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|ac949d31-3b93-61dc-c658-959672781275",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523038239517,
    },
    "e-15": {
      id: "e-15",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523047334858,
    },
    "e-16": {
      id: "e-16",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523047334858,
    },
    "e-17": {
      id: "e-17",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523723936428,
    },
    "e-19": {
      id: "e-19",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523725047686,
    },
    "e-20": {
      id: "e-20",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523725047686,
    },
    "e-21": {
      id: "e-21",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523725291313,
    },
    "e-23": {
      id: "e-23",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523726073173,
    },
    "e-25": {
      id: "e-25",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-26" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|5accc00da3d3a37b41950571",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|5accc00da3d3a37b41950571",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726146648,
    },
    "e-27": {
      id: "e-27",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-28" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|3af811a3-53e3-7621-5e9c-2551c98023c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|3af811a3-53e3-7621-5e9c-2551c98023c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726161092,
    },
    "e-29": {
      id: "e-29",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-30" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|b373832c-dcdb-39cd-e3fb-6a6c71c5395b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|b373832c-dcdb-39cd-e3fb-6a6c71c5395b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726234072,
    },
    "e-31": {
      id: "e-31",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-32" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|d8eff478-08a8-8c8c-c4a2-dce84037f78f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|d8eff478-08a8-8c8c-c4a2-dce84037f78f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726248641,
    },
    "e-33": {
      id: "e-33",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-34" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|d971ef4b-c7e5-4097-8714-c0851e51643e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|d971ef4b-c7e5-4097-8714-c0851e51643e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523726270861,
    },
    "e-35": {
      id: "e-35",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-36" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|f1416d7e-70ab-be4b-12f7-77c4a1de0312",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|f1416d7e-70ab-be4b-12f7-77c4a1de0312",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523726287893,
    },
    "e-37": {
      id: "e-37",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-38" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|116d48c9-d00d-5d87-3528-72b114a1f9ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|116d48c9-d00d-5d87-3528-72b114a1f9ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726299717,
    },
    "e-39": {
      id: "e-39",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-40" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|8efc4698-15a2-b706-28c6-583283dcb1e3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|8efc4698-15a2-b706-28c6-583283dcb1e3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726312115,
    },
    "e-41": {
      id: "e-41",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-42" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|4b6ff784-e4e0-143a-d3f1-4e225d023833",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|4b6ff784-e4e0-143a-d3f1-4e225d023833",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726320170,
    },
    "e-43": {
      id: "e-43",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-44" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|e713fc52-decf-8bc7-cb6c-b15bddc849db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|e713fc52-decf-8bc7-cb6c-b15bddc849db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523726331026,
    },
    "e-45": {
      id: "e-45",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-46" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|d477a728-de73-b2ca-8f18-3e7c4055ac60",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|d477a728-de73-b2ca-8f18-3e7c4055ac60",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523726365035,
    },
    "e-47": {
      id: "e-47",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-48" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|36257473-430c-fe10-0168-0c0e11d7f547",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|36257473-430c-fe10-0168-0c0e11d7f547",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726383283,
    },
    "e-49": {
      id: "e-49",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-50" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|3f3181c4-cbb9-d0bd-9fd1-f1850cd4ccee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|3f3181c4-cbb9-d0bd-9fd1-f1850cd4ccee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523726394300,
    },
    "e-51": {
      id: "e-51",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-52" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|3f3181c4-cbb9-d0bd-9fd1-f1850cd4ccf0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|3f3181c4-cbb9-d0bd-9fd1-f1850cd4ccf0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523726415886,
    },
    "e-53": {
      id: "e-53",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-54" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|3f3181c4-cbb9-d0bd-9fd1-f1850cd4ccf2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|3f3181c4-cbb9-d0bd-9fd1-f1850cd4ccf2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523726431445,
    },
    "e-55": {
      id: "e-55",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-56" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|e3a6919a-d5ba-2427-1c3d-002ceace4fb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|e3a6919a-d5ba-2427-1c3d-002ceace4fb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523726446994,
    },
    "e-57": {
      id: "e-57",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-58" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|ec6c5fa6-39e8-604f-8e94-3db50a31d746",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|ec6c5fa6-39e8-604f-8e94-3db50a31d746",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726458186,
    },
    "e-59": {
      id: "e-59",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-60" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|ec6c5fa6-39e8-604f-8e94-3db50a31d720",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|ec6c5fa6-39e8-604f-8e94-3db50a31d720",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523726466443,
    },
    "e-61": {
      id: "e-61",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-62" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|a1f2e1c4-cb18-fbae-d457-923b0ab1002c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|a1f2e1c4-cb18-fbae-d457-923b0ab1002c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523726482341,
    },
    "e-63": {
      id: "e-63",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-64" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|e47516fd-a47c-5329-8b8b-a9c7deea1796",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|e47516fd-a47c-5329-8b8b-a9c7deea1796",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726492060,
    },
    "e-65": {
      id: "e-65",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-66" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|6f637c7f-b532-2cd8-5281-634c4735c65b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|6f637c7f-b532-2cd8-5281-634c4735c65b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726502489,
    },
    "e-67": {
      id: "e-67",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-68" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|693c53ac-a2b6-2c93-2be0-4386e7c34952",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|693c53ac-a2b6-2c93-2be0-4386e7c34952",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726518892,
    },
    "e-69": {
      id: "e-69",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-70" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|c919797e-f0fd-e4b6-50a4-31446fba6eda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|c919797e-f0fd-e4b6-50a4-31446fba6eda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523726527757,
    },
    "e-71": {
      id: "e-71",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-72" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|14ebeeb3-13b3-79ad-a775-af11cc8926c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|14ebeeb3-13b3-79ad-a775-af11cc8926c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727119392,
    },
    "e-75": {
      id: "e-75",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-76" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|09278323-04f2-3c5b-978d-2f5bafe27d09",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|09278323-04f2-3c5b-978d-2f5bafe27d09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727143983,
    },
    "e-77": {
      id: "e-77",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-78" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|cf006fbb-5abf-ab3f-d46e-0aa78cb3334d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|cf006fbb-5abf-ab3f-d46e-0aa78cb3334d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727191900,
    },
    "e-79": {
      id: "e-79",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-80" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|63617597-6ff5-e150-43ca-99c50305d664",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|63617597-6ff5-e150-43ca-99c50305d664",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727200528,
    },
    "e-81": {
      id: "e-81",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-82" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|58c5da15-3e5d-2da0-b341-d528c415c684",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|58c5da15-3e5d-2da0-b341-d528c415c684",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727209134,
    },
    "e-83": {
      id: "e-83",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-84" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|181b0232-e5f2-2577-2af0-b0ba0244ba5b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|181b0232-e5f2-2577-2af0-b0ba0244ba5b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727221329,
    },
    "e-85": {
      id: "e-85",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-86" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|9f52993a-30aa-7f57-5033-4d3ae97ff993",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|9f52993a-30aa-7f57-5033-4d3ae97ff993",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727228586,
    },
    "e-87": {
      id: "e-87",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-88" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|a2c4619c-d2e8-53da-147a-5b515cd45caf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|a2c4619c-d2e8-53da-147a-5b515cd45caf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727236834,
    },
    "e-89": {
      id: "e-89",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-90" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|09278323-04f2-3c5b-978d-2f5bafe27d1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|09278323-04f2-3c5b-978d-2f5bafe27d1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727249825,
    },
    "e-91": {
      id: "e-91",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-92" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|cd4ed757-947e-5fee-2b61-f8ae8216f522",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|cd4ed757-947e-5fee-2b61-f8ae8216f522",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727264958,
    },
    "e-93": {
      id: "e-93",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-94" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|ab678581-ff46-d64f-4b8f-06567960aa24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|ab678581-ff46-d64f-4b8f-06567960aa24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727276803,
    },
    "e-95": {
      id: "e-95",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-96" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|aa23b61b-3a42-369b-855c-059a3b201cc6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|aa23b61b-3a42-369b-855c-059a3b201cc6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523727288043,
    },
    "e-97": {
      id: "e-97",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-98" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|98be9592-9ddd-3044-9911-b918bebcd4a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|98be9592-9ddd-3044-9911-b918bebcd4a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727303512,
    },
    "e-99": {
      id: "e-99",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-100" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|f72ebe67-d6df-641a-acfd-2e534ba378a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|f72ebe67-d6df-641a-acfd-2e534ba378a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523727312299,
    },
    "e-101": {
      id: "e-101",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-102" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|2bba350d-f2d6-71c8-a980-0aa8a23fe93f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|2bba350d-f2d6-71c8-a980-0aa8a23fe93f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727324538,
    },
    "e-103": {
      id: "e-103",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-104" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|acf37a9e-148e-389a-d838-099254937e5b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|acf37a9e-148e-389a-d838-099254937e5b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727333145,
    },
    "e-105": {
      id: "e-105",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-106" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|d5f8c4d4-c2fa-3198-fd82-c0961d7a70f3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|d5f8c4d4-c2fa-3198-fd82-c0961d7a70f3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727345160,
    },
    "e-107": {
      id: "e-107",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-108" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|8d90690f-2cf5-3d20-b6ce-03aae53ea676",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|8d90690f-2cf5-3d20-b6ce-03aae53ea676",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727354893,
    },
    "e-109": {
      id: "e-109",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-110" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|96308290-aa7a-43af-4004-95b2ebedb6cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|96308290-aa7a-43af-4004-95b2ebedb6cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727360731,
    },
    "e-111": {
      id: "e-111",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-112" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|05b38fc4-72d2-ef54-f259-15a88d5faf3f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|05b38fc4-72d2-ef54-f259-15a88d5faf3f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727367863,
    },
    "e-113": {
      id: "e-113",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-114" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|27a7b142-5ea1-f6b5-3fe7-9fe4d1d727c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|27a7b142-5ea1-f6b5-3fe7-9fe4d1d727c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727377178,
    },
    "e-115": {
      id: "e-115",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-116" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|e5bb93e0-2b55-303c-5665-8b300af28ab1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|e5bb93e0-2b55-303c-5665-8b300af28ab1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727383433,
    },
    "e-117": {
      id: "e-117",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-118" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|63d9f3ed-95e2-61f0-96da-2a9f8ab0efc9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|63d9f3ed-95e2-61f0-96da-2a9f8ab0efc9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727395314,
    },
    "e-119": {
      id: "e-119",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-120" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|11b6766b-fb86-8016-ad26-50fea1868ee5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|11b6766b-fb86-8016-ad26-50fea1868ee5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727406002,
    },
    "e-121": {
      id: "e-121",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-122" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|62f1984a-6787-d00e-2ed4-a05023cce12b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|62f1984a-6787-d00e-2ed4-a05023cce12b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727418253,
    },
    "e-123": {
      id: "e-123",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-124" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|f2de44c2-1a8a-c92d-5571-095bdafe74eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|f2de44c2-1a8a-c92d-5571-095bdafe74eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727426512,
    },
    "e-125": {
      id: "e-125",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-126" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|da50b00a-42e0-f692-e2fc-675c881bbbf4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|da50b00a-42e0-f692-e2fc-675c881bbbf4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523727431866,
    },
    "e-127": {
      id: "e-127",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-128" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|3dfa169a-9048-dd18-446c-cadbc4384c8a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|3dfa169a-9048-dd18-446c-cadbc4384c8a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727442387,
    },
    "e-129": {
      id: "e-129",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-130" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|df007e8a-a958-412f-b4ec-dc274b019838",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|df007e8a-a958-412f-b4ec-dc274b019838",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523727449710,
    },
    "e-131": {
      id: "e-131",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-132" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|4e02a2c5-e6ef-e2c1-bc19-c64e6434e2af",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|4e02a2c5-e6ef-e2c1-bc19-c64e6434e2af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727459294,
    },
    "e-133": {
      id: "e-133",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-134" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|4fb533af-625c-b88c-28f5-6a9cee0427d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|4fb533af-625c-b88c-28f5-6a9cee0427d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523727467506,
    },
    "e-135": {
      id: "e-135",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-136" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|34ee5390-c895-89d4-bcda-f5a1ec0b49e8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|34ee5390-c895-89d4-bcda-f5a1ec0b49e8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727479218,
    },
    "e-137": {
      id: "e-137",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-138" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|44caf57c-f0ac-158d-fa3a-6a74167f8ad9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|44caf57c-f0ac-158d-fa3a-6a74167f8ad9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727486048,
    },
    "e-139": {
      id: "e-139",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-140" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|10b8cdea-7144-6b85-1dde-50464f31fdb3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|10b8cdea-7144-6b85-1dde-50464f31fdb3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523727495588,
    },
    "e-141": {
      id: "e-141",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-142" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|72662425-eb00-2524-f43f-9a8504c92697",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|72662425-eb00-2524-f43f-9a8504c92697",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727508132,
    },
    "e-143": {
      id: "e-143",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-144" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|bb2b8c94-6b5a-ee66-52cd-a8c92d9f9b4b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|bb2b8c94-6b5a-ee66-52cd-a8c92d9f9b4b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727517019,
    },
    "e-145": {
      id: "e-145",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-146" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727523635,
    },
    "e-147": {
      id: "e-147",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-148" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727535989,
    },
    "e-149": {
      id: "e-149",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-150" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|4ec45eb7-28b0-bd6c-a6fa-f76fe3bc9f2b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|4ec45eb7-28b0-bd6c-a6fa-f76fe3bc9f2b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727571684,
    },
    "e-151": {
      id: "e-151",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-152" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|bd3218e2-9b26-b32e-a7f5-de2bfccf5380",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|bd3218e2-9b26-b32e-a7f5-de2bfccf5380",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727582428,
    },
    "e-153": {
      id: "e-153",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-154" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|d79a10c3-6245-0c2c-34db-02ff4810b6a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|d79a10c3-6245-0c2c-34db-02ff4810b6a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727591969,
    },
    "e-155": {
      id: "e-155",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-156" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|0c4a9701-724f-4cf2-e1d8-07072da4b566",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|0c4a9701-724f-4cf2-e1d8-07072da4b566",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523727603130,
    },
    "e-157": {
      id: "e-157",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-158" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|9bd52bfb-a4c2-121d-61f4-20fac82ead21",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|9bd52bfb-a4c2-121d-61f4-20fac82ead21",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523727612804,
    },
    "e-159": {
      id: "e-159",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-160",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523728200240,
    },
    "e-161": {
      id: "e-161",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-162" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|5ace3328c3218e4c8b60c3ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|5ace3328c3218e4c8b60c3ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523728944999,
    },
    "e-163": {
      id: "e-163",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-164" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|951a5aea-0c94-bead-267a-f4d02c37cbb3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|951a5aea-0c94-bead-267a-f4d02c37cbb3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523728955495,
    },
    "e-165": {
      id: "e-165",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-166" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|41b17055-cfba-a6ce-5689-e2dc711838db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|41b17055-cfba-a6ce-5689-e2dc711838db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523728966048,
    },
    "e-167": {
      id: "e-167",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-168" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|311e2a2e-91b9-3f0d-61de-29a5bdd9323c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|311e2a2e-91b9-3f0d-61de-29a5bdd9323c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523728974238,
    },
    "e-169": {
      id: "e-169",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-170" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|339d7a4e-a096-9fd7-3671-58c6c5b02372",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|339d7a4e-a096-9fd7-3671-58c6c5b02372",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523728996388,
    },
    "e-171": {
      id: "e-171",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-172" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|339d7a4e-a096-9fd7-3671-58c6c5b02374",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|339d7a4e-a096-9fd7-3671-58c6c5b02374",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729003881,
    },
    "e-173": {
      id: "e-173",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-174" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|9fb88890-3f94-bab3-6de7-03016113f1bb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|9fb88890-3f94-bab3-6de7-03016113f1bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523729012329,
    },
    "e-175": {
      id: "e-175",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-176" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|9fb88890-3f94-bab3-6de7-03016113f1c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|9fb88890-3f94-bab3-6de7-03016113f1c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729020936,
    },
    "e-177": {
      id: "e-177",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-178" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|9fb88890-3f94-bab3-6de7-03016113f1be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|9fb88890-3f94-bab3-6de7-03016113f1be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729026146,
    },
    "e-179": {
      id: "e-179",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-180" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|9f9e6802-499a-dd36-0640-947fe5e8e36c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|9f9e6802-499a-dd36-0640-947fe5e8e36c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729037406,
    },
    "e-181": {
      id: "e-181",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-182" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|9f9e6802-499a-dd36-0640-947fe5e8e36a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|9f9e6802-499a-dd36-0640-947fe5e8e36a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729042752,
    },
    "e-183": {
      id: "e-183",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-184" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|39af4c17-9f99-183a-eb64-ed91206dc20a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|39af4c17-9f99-183a-eb64-ed91206dc20a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729058016,
    },
    "e-185": {
      id: "e-185",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-186" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|74817e7e-d2d3-5d29-17e3-2f1a645a7995",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|74817e7e-d2d3-5d29-17e3-2f1a645a7995",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729067119,
    },
    "e-187": {
      id: "e-187",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-188" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|e2523cca-ec26-8d90-811d-714e212ebc79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|e2523cca-ec26-8d90-811d-714e212ebc79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729079100,
    },
    "e-189": {
      id: "e-189",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-190" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|98eefeb9-2bbe-7add-397f-46a1b1b7b9d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|98eefeb9-2bbe-7add-397f-46a1b1b7b9d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523729110466,
    },
    "e-191": {
      id: "e-191",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-192" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|9c56b086-4205-71ff-8c7e-fa2e613f1f7e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|9c56b086-4205-71ff-8c7e-fa2e613f1f7e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523729119917,
    },
    "e-193": {
      id: "e-193",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-194" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|9c56b086-4205-71ff-8c7e-fa2e613f1f85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|9c56b086-4205-71ff-8c7e-fa2e613f1f85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729125914,
    },
    "e-195": {
      id: "e-195",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-196" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|e6dc8279-eb6e-1591-1659-a8ee56dd3504",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|e6dc8279-eb6e-1591-1659-a8ee56dd3504",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729131302,
    },
    "e-197": {
      id: "e-197",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-198" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|c74a17fd-dae6-402a-9205-9cca525d2371",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|c74a17fd-dae6-402a-9205-9cca525d2371",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729142069,
    },
    "e-199": {
      id: "e-199",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-200" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|43d953fa-5c78-6ddc-cfd0-17f20d1043d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|43d953fa-5c78-6ddc-cfd0-17f20d1043d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729151922,
    },
    "e-201": {
      id: "e-201",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-202" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|251d293e-06b8-ddc6-2dd0-2dec8a4e75ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|251d293e-06b8-ddc6-2dd0-2dec8a4e75ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729159944,
    },
    "e-203": {
      id: "e-203",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-204" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|e3c0f64f-9695-dc63-16e6-c8bd155df135",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|e3c0f64f-9695-dc63-16e6-c8bd155df135",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729168651,
    },
    "e-205": {
      id: "e-205",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-206" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|9c56b086-4205-71ff-8c7e-fa2e613f1fd9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|9c56b086-4205-71ff-8c7e-fa2e613f1fd9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523729179363,
    },
    "e-207": {
      id: "e-207",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-208" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22|2cc457ae-6d27-c1c0-625a-d861130feda9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22|2cc457ae-6d27-c1c0-625a-d861130feda9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523729189876,
    },
    "e-209": {
      id: "e-209",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-210",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523729363282,
    },
    "e-221": {
      id: "e-221",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-222" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|bdbb73c1-f8b5-ac4f-f76f-8fd296e4dc54",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|bdbb73c1-f8b5-ac4f-f76f-8fd296e4dc54",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730020943,
    },
    "e-223": {
      id: "e-223",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-224" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|729baf8b-d281-fd48-06af-c88647aeb6f4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|729baf8b-d281-fd48-06af-c88647aeb6f4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730028028,
    },
    "e-225": {
      id: "e-225",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-226" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|6e2a1951-3309-af15-6cc8-12fe996e1d6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|6e2a1951-3309-af15-6cc8-12fe996e1d6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523730036321,
    },
    "e-227": {
      id: "e-227",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-228" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|1eb34b28-b81b-13fc-7d97-6e6e12ca7052",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|1eb34b28-b81b-13fc-7d97-6e6e12ca7052",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730060250,
    },
    "e-229": {
      id: "e-229",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-230" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|9ff49103-65b3-4406-727a-0f7f582c6174",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|9ff49103-65b3-4406-727a-0f7f582c6174",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523730071666,
    },
    "e-231": {
      id: "e-231",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-232" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|7224aa7c-9829-6411-0583-9474bc81b269",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|7224aa7c-9829-6411-0583-9474bc81b269",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730081319,
    },
    "e-233": {
      id: "e-233",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-234" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|649825e3-b2b9-a0e6-f6df-198152928ec8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|649825e3-b2b9-a0e6-f6df-198152928ec8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730088294,
    },
    "e-235": {
      id: "e-235",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-236" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|3a2ea1ac-d60f-31b4-2acc-1d0828b1a04c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|3a2ea1ac-d60f-31b4-2acc-1d0828b1a04c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523730097666,
    },
    "e-237": {
      id: "e-237",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-238" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|154e65a3-a9f9-b032-45d0-5bc4c2770ed0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|154e65a3-a9f9-b032-45d0-5bc4c2770ed0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730108083,
    },
    "e-239": {
      id: "e-239",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-240" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|154e65a3-a9f9-b032-45d0-5bc4c2770eba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|154e65a3-a9f9-b032-45d0-5bc4c2770eba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730113561,
    },
    "e-241": {
      id: "e-241",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-242" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|088998f1-0e84-21bd-8368-5a8c9c3506d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|088998f1-0e84-21bd-8368-5a8c9c3506d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523730128076,
    },
    "e-243": {
      id: "e-243",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-244" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|62ae522e-315d-734d-e4b3-64c3b2537089",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|62ae522e-315d-734d-e4b3-64c3b2537089",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730138143,
    },
    "e-245": {
      id: "e-245",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-246" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|62ae522e-315d-734d-e4b3-64c3b253709f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|62ae522e-315d-734d-e4b3-64c3b253709f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730142689,
    },
    "e-247": {
      id: "e-247",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-248" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|42158b01-cace-65a8-58fe-8ef1722681dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|42158b01-cace-65a8-58fe-8ef1722681dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523730150296,
    },
    "e-249": {
      id: "e-249",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-250" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|42158b01-cace-65a8-58fe-8ef1722681df",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|42158b01-cace-65a8-58fe-8ef1722681df",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523730158429,
    },
    "e-251": {
      id: "e-251",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-252" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|1e880162-73d0-9f03-46c2-699b3769b3fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|1e880162-73d0-9f03-46c2-699b3769b3fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730172941,
    },
    "e-253": {
      id: "e-253",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-254" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|5d7eed4c-455a-b529-85f3-987e0357ff63",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|5d7eed4c-455a-b529-85f3-987e0357ff63",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730183776,
    },
    "e-255": {
      id: "e-255",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-256" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|38b41af3-cf9b-04c9-cd56-cd427902f97c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|38b41af3-cf9b-04c9-cd56-cd427902f97c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730212261,
    },
    "e-257": {
      id: "e-257",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-258" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|b41a8d64-0c40-cc2c-feb3-988afbf37067",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|b41a8d64-0c40-cc2c-feb3-988afbf37067",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730221038,
    },
    "e-259": {
      id: "e-259",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-260" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|227999d0-9958-d23d-4017-943545cfb21d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|227999d0-9958-d23d-4017-943545cfb21d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730230826,
    },
    "e-261": {
      id: "e-261",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-262" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|a1233732-ef2d-2493-14f3-994d9b35d138",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|a1233732-ef2d-2493-14f3-994d9b35d138",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730241355,
    },
    "e-263": {
      id: "e-263",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-264" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|6e3d9e67-0d57-c9d3-f919-624d6782d00c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|6e3d9e67-0d57-c9d3-f919-624d6782d00c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523730249781,
    },
    "e-265": {
      id: "e-265",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-266" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|afc907d3-6b99-f395-fb53-d8db85a6e799",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|afc907d3-6b99-f395-fb53-d8db85a6e799",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730257049,
    },
    "e-267": {
      id: "e-267",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-268" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e|48c5378e-6326-e1c2-4557-42a89aac8cc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e|48c5378e-6326-e1c2-4557-42a89aac8cc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730355850,
    },
    "e-269": {
      id: "e-269",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-270",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523730567031,
    },
    "e-281": {
      id: "e-281",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-282" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|0c8276ca-5caf-7395-e00c-efc1b93ad8b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|0c8276ca-5caf-7395-e00c-efc1b93ad8b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730977842,
    },
    "e-283": {
      id: "e-283",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-284" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|dbf60a7a-6d80-f38b-105e-e2d20095c969",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|dbf60a7a-6d80-f38b-105e-e2d20095c969",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730986009,
    },
    "e-285": {
      id: "e-285",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-286" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|cef9e9c6-e650-f736-6982-738755f5e8cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|cef9e9c6-e650-f736-6982-738755f5e8cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523730997901,
    },
    "e-287": {
      id: "e-287",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-288" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|cef9e9c6-e650-f736-6982-738755f5e8cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|cef9e9c6-e650-f736-6982-738755f5e8cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731007845,
    },
    "e-289": {
      id: "e-289",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-290" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|41d9ff3a-3015-53c3-a93a-6495da149205",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|41d9ff3a-3015-53c3-a93a-6495da149205",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731015709,
    },
    "e-291": {
      id: "e-291",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-292" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|301fb023-54a8-1051-b32a-afabd4c85c0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|301fb023-54a8-1051-b32a-afabd4c85c0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731023658,
    },
    "e-293": {
      id: "e-293",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-294" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|39fb28f5-a9fc-4e93-442e-b918c0777218",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|39fb28f5-a9fc-4e93-442e-b918c0777218",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731033205,
    },
    "e-295": {
      id: "e-295",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-296" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|39fb28f5-a9fc-4e93-442e-b918c0777229",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|39fb28f5-a9fc-4e93-442e-b918c0777229",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731038605,
    },
    "e-297": {
      id: "e-297",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-298" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|1e53daca-9b90-2f0a-1743-7825458fa4d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|1e53daca-9b90-2f0a-1743-7825458fa4d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731046482,
    },
    "e-299": {
      id: "e-299",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-300" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|1e53daca-9b90-2f0a-1743-7825458fa4d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|1e53daca-9b90-2f0a-1743-7825458fa4d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731051689,
    },
    "e-301": {
      id: "e-301",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-302" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|6e2a1951-3309-af15-6cc8-12fe996e1d6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|6e2a1951-3309-af15-6cc8-12fe996e1d6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731066347,
    },
    "e-303": {
      id: "e-303",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-304" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|9ff49103-65b3-4406-727a-0f7f582c6174",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|9ff49103-65b3-4406-727a-0f7f582c6174",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731074289,
    },
    "e-305": {
      id: "e-305",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-306" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|f77652f1-f84f-8ddb-79d0-c5418c604ef7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|f77652f1-f84f-8ddb-79d0-c5418c604ef7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731090254,
    },
    "e-307": {
      id: "e-307",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-308" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|9ff49103-65b3-4406-727a-0f7f582c61ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|9ff49103-65b3-4406-727a-0f7f582c61ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731101123,
    },
    "e-309": {
      id: "e-309",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-310" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|242ebdff-225d-49b0-5751-c3e663e4cbba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|242ebdff-225d-49b0-5751-c3e663e4cbba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731113646,
    },
    "e-311": {
      id: "e-311",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-312" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|63504921-51f6-d529-5ab0-aff373a23446",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|63504921-51f6-d529-5ab0-aff373a23446",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731121463,
    },
    "e-313": {
      id: "e-313",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-314" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|79aeb801-08bc-5c54-83e4-6dcfb3b12fc0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|79aeb801-08bc-5c54-83e4-6dcfb3b12fc0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731131724,
    },
    "e-315": {
      id: "e-315",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-316" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|cc8fa7dc-331a-a7b4-77e4-f22215d162b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|cc8fa7dc-331a-a7b4-77e4-f22215d162b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731146170,
    },
    "e-317": {
      id: "e-317",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-318" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|bca247b5-a245-2c7d-5ca2-0106a8d6df52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|bca247b5-a245-2c7d-5ca2-0106a8d6df52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731150411,
    },
    "e-319": {
      id: "e-319",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-320" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|6bb872b5-ded7-e228-1aca-c230310bfc9f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|6bb872b5-ded7-e228-1aca-c230310bfc9f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731163562,
    },
    "e-321": {
      id: "e-321",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-322" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|6bb872b5-ded7-e228-1aca-c230310bfcac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|6bb872b5-ded7-e228-1aca-c230310bfcac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731170155,
    },
    "e-323": {
      id: "e-323",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-324" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|6bb872b5-ded7-e228-1aca-c230310bfcbb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|6bb872b5-ded7-e228-1aca-c230310bfcbb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731175015,
    },
    "e-325": {
      id: "e-325",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-326" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25|6bb872b5-ded7-e228-1aca-c230310bfcca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25|6bb872b5-ded7-e228-1aca-c230310bfcca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731184657,
    },
    "e-329": {
      id: "e-329",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-330",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523731336766,
    },
    "e-331": {
      id: "e-331",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-332" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|5ad0d2ced923b9aba1c515ef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|5ad0d2ced923b9aba1c515ef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-341": {
      id: "e-341",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-342" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|0c8276ca-5caf-7395-e00c-efc1b93ad8b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|0c8276ca-5caf-7395-e00c-efc1b93ad8b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-343": {
      id: "e-343",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-344" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|dbf60a7a-6d80-f38b-105e-e2d20095c969",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|dbf60a7a-6d80-f38b-105e-e2d20095c969",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-345": {
      id: "e-345",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-346" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|cef9e9c6-e650-f736-6982-738755f5e8cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|cef9e9c6-e650-f736-6982-738755f5e8cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-347": {
      id: "e-347",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-348" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|cef9e9c6-e650-f736-6982-738755f5e8cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|cef9e9c6-e650-f736-6982-738755f5e8cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-349": {
      id: "e-349",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-350" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|41d9ff3a-3015-53c3-a93a-6495da149205",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|41d9ff3a-3015-53c3-a93a-6495da149205",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-351": {
      id: "e-351",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-352" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|301fb023-54a8-1051-b32a-afabd4c85c0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|301fb023-54a8-1051-b32a-afabd4c85c0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-353": {
      id: "e-353",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-354" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|39fb28f5-a9fc-4e93-442e-b918c0777218",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|39fb28f5-a9fc-4e93-442e-b918c0777218",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-355": {
      id: "e-355",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-356" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|39fb28f5-a9fc-4e93-442e-b918c0777229",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|39fb28f5-a9fc-4e93-442e-b918c0777229",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-357": {
      id: "e-357",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-358" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|1e53daca-9b90-2f0a-1743-7825458fa4d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|1e53daca-9b90-2f0a-1743-7825458fa4d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-359": {
      id: "e-359",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-360" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|1e53daca-9b90-2f0a-1743-7825458fa4d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|1e53daca-9b90-2f0a-1743-7825458fa4d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-361": {
      id: "e-361",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-362" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|6e2a1951-3309-af15-6cc8-12fe996e1d6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|6e2a1951-3309-af15-6cc8-12fe996e1d6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-363": {
      id: "e-363",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-364" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|9ff49103-65b3-4406-727a-0f7f582c6174",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|9ff49103-65b3-4406-727a-0f7f582c6174",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-365": {
      id: "e-365",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-366" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|f77652f1-f84f-8ddb-79d0-c5418c604ef7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|f77652f1-f84f-8ddb-79d0-c5418c604ef7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-367": {
      id: "e-367",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-368" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|9ff49103-65b3-4406-727a-0f7f582c61ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|9ff49103-65b3-4406-727a-0f7f582c61ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-369": {
      id: "e-369",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-370" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|242ebdff-225d-49b0-5751-c3e663e4cbba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|242ebdff-225d-49b0-5751-c3e663e4cbba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-371": {
      id: "e-371",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-372" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|63504921-51f6-d529-5ab0-aff373a23446",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|63504921-51f6-d529-5ab0-aff373a23446",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-373": {
      id: "e-373",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-374" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|79aeb801-08bc-5c54-83e4-6dcfb3b12fc0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|79aeb801-08bc-5c54-83e4-6dcfb3b12fc0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-375": {
      id: "e-375",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-376" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|cc8fa7dc-331a-a7b4-77e4-f22215d162b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|cc8fa7dc-331a-a7b4-77e4-f22215d162b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-377": {
      id: "e-377",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-378" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|bca247b5-a245-2c7d-5ca2-0106a8d6df52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|bca247b5-a245-2c7d-5ca2-0106a8d6df52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-379": {
      id: "e-379",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-380" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|6bb872b5-ded7-e228-1aca-c230310bfc9f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|6bb872b5-ded7-e228-1aca-c230310bfc9f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-381": {
      id: "e-381",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-382" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|6bb872b5-ded7-e228-1aca-c230310bfcac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|6bb872b5-ded7-e228-1aca-c230310bfcac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-383": {
      id: "e-383",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-384" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|6bb872b5-ded7-e228-1aca-c230310bfcbb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|6bb872b5-ded7-e228-1aca-c230310bfcbb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-385": {
      id: "e-385",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-386" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|6bb872b5-ded7-e228-1aca-c230310bfcca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|6bb872b5-ded7-e228-1aca-c230310bfcca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731336766,
    },
    "e-389": {
      id: "e-389",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-390",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523731823933,
    },
    "e-391": {
      id: "e-391",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-392" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|5ad0d2ced923b9aba1c515ef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|5ad0d2ced923b9aba1c515ef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-401": {
      id: "e-401",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-402" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|0c8276ca-5caf-7395-e00c-efc1b93ad8b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|0c8276ca-5caf-7395-e00c-efc1b93ad8b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-403": {
      id: "e-403",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-404" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|dbf60a7a-6d80-f38b-105e-e2d20095c969",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|dbf60a7a-6d80-f38b-105e-e2d20095c969",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-405": {
      id: "e-405",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-406" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|cef9e9c6-e650-f736-6982-738755f5e8cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|cef9e9c6-e650-f736-6982-738755f5e8cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-407": {
      id: "e-407",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-408" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|cef9e9c6-e650-f736-6982-738755f5e8cc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|cef9e9c6-e650-f736-6982-738755f5e8cc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-409": {
      id: "e-409",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-410" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|41d9ff3a-3015-53c3-a93a-6495da149205",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|41d9ff3a-3015-53c3-a93a-6495da149205",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-411": {
      id: "e-411",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-412" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|301fb023-54a8-1051-b32a-afabd4c85c0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|301fb023-54a8-1051-b32a-afabd4c85c0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-413": {
      id: "e-413",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-414" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|39fb28f5-a9fc-4e93-442e-b918c0777218",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|39fb28f5-a9fc-4e93-442e-b918c0777218",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-415": {
      id: "e-415",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-416" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|39fb28f5-a9fc-4e93-442e-b918c0777229",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|39fb28f5-a9fc-4e93-442e-b918c0777229",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-417": {
      id: "e-417",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-418" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|1e53daca-9b90-2f0a-1743-7825458fa4d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|1e53daca-9b90-2f0a-1743-7825458fa4d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-419": {
      id: "e-419",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-420" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|1e53daca-9b90-2f0a-1743-7825458fa4d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|1e53daca-9b90-2f0a-1743-7825458fa4d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-421": {
      id: "e-421",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-422" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|6e2a1951-3309-af15-6cc8-12fe996e1d6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|6e2a1951-3309-af15-6cc8-12fe996e1d6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-423": {
      id: "e-423",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-424" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|9ff49103-65b3-4406-727a-0f7f582c6174",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|9ff49103-65b3-4406-727a-0f7f582c6174",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-425": {
      id: "e-425",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-426" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|f77652f1-f84f-8ddb-79d0-c5418c604ef7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|f77652f1-f84f-8ddb-79d0-c5418c604ef7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-427": {
      id: "e-427",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-428" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|9ff49103-65b3-4406-727a-0f7f582c61ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|9ff49103-65b3-4406-727a-0f7f582c61ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-429": {
      id: "e-429",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-430" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|242ebdff-225d-49b0-5751-c3e663e4cbba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|242ebdff-225d-49b0-5751-c3e663e4cbba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-431": {
      id: "e-431",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-432" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|63504921-51f6-d529-5ab0-aff373a23446",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|63504921-51f6-d529-5ab0-aff373a23446",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-433": {
      id: "e-433",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-434" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|79aeb801-08bc-5c54-83e4-6dcfb3b12fc0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|79aeb801-08bc-5c54-83e4-6dcfb3b12fc0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-435": {
      id: "e-435",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-436" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|cc8fa7dc-331a-a7b4-77e4-f22215d162b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|cc8fa7dc-331a-a7b4-77e4-f22215d162b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-437": {
      id: "e-437",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-438" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|bca247b5-a245-2c7d-5ca2-0106a8d6df52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|bca247b5-a245-2c7d-5ca2-0106a8d6df52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-439": {
      id: "e-439",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-440" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|6bb872b5-ded7-e228-1aca-c230310bfc9f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|6bb872b5-ded7-e228-1aca-c230310bfc9f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-441": {
      id: "e-441",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-442" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|6bb872b5-ded7-e228-1aca-c230310bfcac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|6bb872b5-ded7-e228-1aca-c230310bfcac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-443": {
      id: "e-443",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-444" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|6bb872b5-ded7-e228-1aca-c230310bfcbb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|6bb872b5-ded7-e228-1aca-c230310bfcbb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-445": {
      id: "e-445",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-446" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|6bb872b5-ded7-e228-1aca-c230310bfcca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|6bb872b5-ded7-e228-1aca-c230310bfcca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523731823933,
    },
    "e-449": {
      id: "e-449",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-450",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523735856367,
    },
    "e-451": {
      id: "e-451",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-452",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523736189530,
    },
    "e-461": {
      id: "e-461",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-462" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|6271dd51-e374-fe90-084e-bd7656de6c19",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|6271dd51-e374-fe90-084e-bd7656de6c19",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523736334882,
    },
    "e-463": {
      id: "e-463",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-464" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|5eff1505-d57e-1f1b-f40d-96401b7ebd6b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|5eff1505-d57e-1f1b-f40d-96401b7ebd6b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523736346021,
    },
    "e-465": {
      id: "e-465",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-466" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|5eff1505-d57e-1f1b-f40d-96401b7ebd7e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|5eff1505-d57e-1f1b-f40d-96401b7ebd7e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523736352411,
    },
    "e-467": {
      id: "e-467",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-468" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|5eff1505-d57e-1f1b-f40d-96401b7ebd6a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|5eff1505-d57e-1f1b-f40d-96401b7ebd6a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523736365313,
    },
    "e-469": {
      id: "e-469",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-470" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8d84",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8d84",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523736381943,
    },
    "e-471": {
      id: "e-471",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-472" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8d96",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8d96",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523736389839,
    },
    "e-473": {
      id: "e-473",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-474" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8d85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8d85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523736395488,
    },
    "e-475": {
      id: "e-475",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-476" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|6e2a1951-3309-af15-6cc8-12fe996e1d6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|6e2a1951-3309-af15-6cc8-12fe996e1d6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523736417245,
    },
    "e-477": {
      id: "e-477",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-478" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|11f752f0-b6f0-8459-77da-bc9f883432f4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|11f752f0-b6f0-8459-77da-bc9f883432f4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523736431364,
    },
    "e-479": {
      id: "e-479",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-480" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|9ff49103-65b3-4406-727a-0f7f582c6174",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|9ff49103-65b3-4406-727a-0f7f582c6174",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523736441648,
    },
    "e-481": {
      id: "e-481",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-482" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|8580a7db-92a0-bfc5-0e33-cbb88ee24b0a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|8580a7db-92a0-bfc5-0e33-cbb88ee24b0a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523736450805,
    },
    "e-483": {
      id: "e-483",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-484" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|808f8bdf-dff1-ac9d-4b2f-71f5f45c851e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|808f8bdf-dff1-ac9d-4b2f-71f5f45c851e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523736458230,
    },
    "e-485": {
      id: "e-485",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-486" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|8d766d11-90be-ecd8-b835-96c81e6d1adf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|8d766d11-90be-ecd8-b835-96c81e6d1adf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523736464858,
    },
    "e-487": {
      id: "e-487",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-488",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd2f390d2c16",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd2f390d2c16",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523736497926,
    },
    "e-489": {
      id: "e-489",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-490",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda87e0d2c19",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda87e0d2c19",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523736653323,
    },
    "e-491": {
      id: "e-491",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-492",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd19ac0d2c26",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd19ac0d2c26",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523736772698,
    },
    "e-493": {
      id: "e-493",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-494",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdec890d2c17",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdec890d2c17",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523737012663,
    },
    "e-495": {
      id: "e-495",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-496",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523737212435,
    },
    "e-497": {
      id: "e-497",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-498",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523737922350,
    },
    "e-499": {
      id: "e-499",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-500" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|5accc00da3d3a3b05d95057e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|5accc00da3d3a3b05d95057e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738082530,
    },
    "e-501": {
      id: "e-501",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-502" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|c1768d7f-eb70-f503-25ed-6e357e814033",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|c1768d7f-eb70-f503-25ed-6e357e814033",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738093068,
    },
    "e-503": {
      id: "e-503",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-504" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|14132b48-c05a-3b2a-5656-d4bb173ea1ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|14132b48-c05a-3b2a-5656-d4bb173ea1ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523738102226,
    },
    "e-505": {
      id: "e-505",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-506" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|221b5384-06a7-38df-46ae-150253147af3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|221b5384-06a7-38df-46ae-150253147af3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738119606,
    },
    "e-507": {
      id: "e-507",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-508" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|8630ab60-1ba4-6fa4-9c9e-d147dfbeeb00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|8630ab60-1ba4-6fa4-9c9e-d147dfbeeb00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738126897,
    },
    "e-509": {
      id: "e-509",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-510" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|b4cc861c-b914-b99e-47e5-8b2ab02de267",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|b4cc861c-b914-b99e-47e5-8b2ab02de267",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738134694,
    },
    "e-511": {
      id: "e-511",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-512" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|690a1080-9cde-7b53-4346-eb98317581ed",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|690a1080-9cde-7b53-4346-eb98317581ed",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738143448,
    },
    "e-513": {
      id: "e-513",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-514" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|ed1b8672-942f-a67f-6479-1b1509898526",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|ed1b8672-942f-a67f-6479-1b1509898526",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523738152300,
    },
    "e-515": {
      id: "e-515",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-516" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|dc35b214-258d-ce3d-64e9-d1d7d2e95130",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|dc35b214-258d-ce3d-64e9-d1d7d2e95130",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738173228,
    },
    "e-517": {
      id: "e-517",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-518" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|b98fc04c-da78-25d8-4621-9cddc87a9a89",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|b98fc04c-da78-25d8-4621-9cddc87a9a89",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738179369,
    },
    "e-519": {
      id: "e-519",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-520" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|29bfe3ac-db44-f42f-8a57-2858526f6043",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|29bfe3ac-db44-f42f-8a57-2858526f6043",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523738191383,
    },
    "e-521": {
      id: "e-521",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-522" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|0bef3266-26f9-a6d6-9dec-31710fa5672f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|0bef3266-26f9-a6d6-9dec-31710fa5672f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738206863,
    },
    "e-523": {
      id: "e-523",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-524" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|0bef3266-26f9-a6d6-9dec-31710fa56732",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|0bef3266-26f9-a6d6-9dec-31710fa56732",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738216246,
    },
    "e-525": {
      id: "e-525",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-526" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|0bef3266-26f9-a6d6-9dec-31710fa56730",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|0bef3266-26f9-a6d6-9dec-31710fa56730",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523738223851,
    },
    "e-527": {
      id: "e-527",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-528" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|a583a164-eb9c-334b-40b2-247fb35753d1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|a583a164-eb9c-334b-40b2-247fb35753d1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738241471,
    },
    "e-529": {
      id: "e-529",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-530" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|a583a164-eb9c-334b-40b2-247fb35753d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|a583a164-eb9c-334b-40b2-247fb35753d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738253046,
    },
    "e-531": {
      id: "e-531",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-532" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|a583a164-eb9c-334b-40b2-247fb35753d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|a583a164-eb9c-334b-40b2-247fb35753d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1523738265885,
    },
    "e-533": {
      id: "e-533",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-534" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|ffe958e6-a3f3-bf0d-ae5e-b0bc44993510",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|ffe958e6-a3f3-bf0d-ae5e-b0bc44993510",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523738276852,
    },
    "e-535": {
      id: "e-535",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-536" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|af167318-01c5-2905-5a1d-418691d2e420",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|af167318-01c5-2905-5a1d-418691d2e420",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738283163,
    },
    "e-537": {
      id: "e-537",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-538" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|253021c1-14cd-4945-5f1e-0d4d93718212",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|253021c1-14cd-4945-5f1e-0d4d93718212",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738306632,
    },
    "e-539": {
      id: "e-539",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-540" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|a5da7972-22af-e7e7-dcb1-b5c699b2e04a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|a5da7972-22af-e7e7-dcb1-b5c699b2e04a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738321876,
    },
    "e-541": {
      id: "e-541",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-542" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|9e9cd126-c9d7-d2f2-6ab7-d048bfb77cc7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|9e9cd126-c9d7-d2f2-6ab7-d048bfb77cc7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738341676,
    },
    "e-543": {
      id: "e-543",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-544" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|c6935230-ff48-806c-ec10-143964f73efa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|c6935230-ff48-806c-ec10-143964f73efa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523738348831,
    },
    "e-545": {
      id: "e-545",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-546",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd1c6d0d2c1f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd1c6d0d2c1f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523738588858,
    },
    "e-547": {
      id: "e-547",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-548",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd07180d2c15",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd07180d2c15",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523738670026,
    },
    "e-549": {
      id: "e-549",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-550",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd8c5a0d2c10",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd8c5a0d2c10",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523738751207,
    },
    "e-551": {
      id: "e-551",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-552",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd86750d2c18",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd86750d2c18",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523738933494,
    },
    "e-553": {
      id: "e-553",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-554",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdf9610d2c13",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdf9610d2c13",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523739178114,
    },
    "e-555": {
      id: "e-555",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-556",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdeefb0d2c14",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdeefb0d2c14",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523739288456,
    },
    "e-557": {
      id: "e-557",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-558",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd539d0d2c11",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd539d0d2c11",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523739398133,
    },
    "e-559": {
      id: "e-559",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-560",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885083541,
    },
    "e-560": {
      id: "e-560",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-559",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885083548,
    },
    "e-561": {
      id: "e-561",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-562",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885203314,
    },
    "e-562": {
      id: "e-562",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-561",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd7a710d2c22",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd7a710d2c22",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885203322,
    },
    "e-563": {
      id: "e-563",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-564",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885238846,
    },
    "e-564": {
      id: "e-564",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-563",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885238851,
    },
    "e-565": {
      id: "e-565",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-49",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-566",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885288571,
    },
    "e-567": {
      id: "e-567",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-568",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885419700,
    },
    "e-568": {
      id: "e-568",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-567",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885419706,
    },
    "e-569": {
      id: "e-569",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-570",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd10130d2c25",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd10130d2c25",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885450086,
    },
    "e-571": {
      id: "e-571",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-572",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885686989,
    },
    "e-573": {
      id: "e-573",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-574",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885775364,
    },
    "e-574": {
      id: "e-574",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-573",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885775369,
    },
    "e-575": {
      id: "e-575",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-576",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885831470,
    },
    "e-576": {
      id: "e-576",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-575",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885831474,
    },
    "e-577": {
      id: "e-577",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-578",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885911930,
    },
    "e-579": {
      id: "e-579",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-580",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885965480,
    },
    "e-580": {
      id: "e-580",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-579",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523885965486,
    },
    "e-581": {
      id: "e-581",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-582",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886027579,
    },
    "e-583": {
      id: "e-583",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-584",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd2f390d2c16",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd2f390d2c16",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886151499,
    },
    "e-584": {
      id: "e-584",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-583",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd2f390d2c16",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd2f390d2c16",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886151504,
    },
    "e-585": {
      id: "e-585",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-586",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda87e0d2c19",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda87e0d2c19",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886199099,
    },
    "e-586": {
      id: "e-586",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-585",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda87e0d2c19",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda87e0d2c19",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886199105,
    },
    "e-587": {
      id: "e-587",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-588",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd19ac0d2c26",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd19ac0d2c26",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886241410,
    },
    "e-588": {
      id: "e-588",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-587",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd19ac0d2c26",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd19ac0d2c26",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886241415,
    },
    "e-589": {
      id: "e-589",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-590",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdec890d2c17",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdec890d2c17",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886345934,
    },
    "e-590": {
      id: "e-590",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-589",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdec890d2c17",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdec890d2c17",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886345939,
    },
    "e-591": {
      id: "e-591",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-592",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886381846,
    },
    "e-592": {
      id: "e-592",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-591",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886381850,
    },
    "e-593": {
      id: "e-593",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-594",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd1c6d0d2c1f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd1c6d0d2c1f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886412794,
    },
    "e-594": {
      id: "e-594",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-593",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd1c6d0d2c1f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd1c6d0d2c1f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886412798,
    },
    "e-595": {
      id: "e-595",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-596",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd07180d2c15",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd07180d2c15",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886593470,
    },
    "e-596": {
      id: "e-596",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-595",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd07180d2c15",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd07180d2c15",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886593476,
    },
    "e-597": {
      id: "e-597",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-598",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd8c5a0d2c10",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd8c5a0d2c10",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886652129,
    },
    "e-598": {
      id: "e-598",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-597",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd8c5a0d2c10",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd8c5a0d2c10",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886652134,
    },
    "e-599": {
      id: "e-599",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-600",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd86750d2c18",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd86750d2c18",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886685318,
    },
    "e-600": {
      id: "e-600",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-599",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd86750d2c18",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd86750d2c18",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886685322,
    },
    "e-601": {
      id: "e-601",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-602",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd30e20d2c12",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd30e20d2c12",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886718897,
    },
    "e-602": {
      id: "e-602",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-601",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd30e20d2c12",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd30e20d2c12",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886718902,
    },
    "e-603": {
      id: "e-603",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-604",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdf9610d2c13",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdf9610d2c13",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886775744,
    },
    "e-604": {
      id: "e-604",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-603",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdf9610d2c13",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdf9610d2c13",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886775750,
    },
    "e-605": {
      id: "e-605",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-606",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e6e7d113-7e4e-cb6c-0eb2-92305d85419c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e6e7d113-7e4e-cb6c-0eb2-92305d85419c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886795309,
    },
    "e-607": {
      id: "e-607",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-608",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdeefb0d2c14",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdeefb0d2c14",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886942873,
    },
    "e-608": {
      id: "e-608",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-607",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdeefb0d2c14",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdeefb0d2c14",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886942879,
    },
    "e-609": {
      id: "e-609",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-610",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd539d0d2c11",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd539d0d2c11",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886988834,
    },
    "e-610": {
      id: "e-610",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-609",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd539d0d2c11",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd539d0d2c11",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523886988840,
    },
    "e-613": {
      id: "e-613",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-614",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|fc265da3-5c26-932e-94ed-245da919b2bf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|fc265da3-5c26-932e-94ed-245da919b2bf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523893124403,
    },
    "e-614": {
      id: "e-614",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-613",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|fc265da3-5c26-932e-94ed-245da919b2bf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|fc265da3-5c26-932e-94ed-245da919b2bf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523893124413,
    },
    "e-615": {
      id: "e-615",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-616",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523893531542,
    },
    "e-616": {
      id: "e-616",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-615",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523893531548,
    },
    "e-617": {
      id: "e-617",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-618",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3a85243d-a401-7b81-be93-0d5d53d5c6e0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3a85243d-a401-7b81-be93-0d5d53d5c6e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523894358336,
    },
    "e-619": {
      id: "e-619",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-620",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541c3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541c3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523894496507,
    },
    "e-621": {
      id: "e-621",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-622",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd37020d2c29",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd37020d2c29",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523895408050,
    },
    "e-622": {
      id: "e-622",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-621",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd37020d2c29",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd37020d2c29",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523895408061,
    },
    "e-625": {
      id: "e-625",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-626",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|bf08c267-217a-6a70-74bc-613ea8ea5726",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|bf08c267-217a-6a70-74bc-613ea8ea5726",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523895659504,
    },
    "e-627": {
      id: "e-627",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-628",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|13a515af-7f3c-4f74-9655-a2744e463ca7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|13a515af-7f3c-4f74-9655-a2744e463ca7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523895770951,
    },
    "e-629": {
      id: "e-629",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-630",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|4711ad2c-543b-11c2-12ea-437a2c55c742",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|4711ad2c-543b-11c2-12ea-437a2c55c742",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523896102730,
    },
    "e-631": {
      id: "e-631",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-632" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|cd729700-b9d6-70a4-0630-d546cc31eebb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|cd729700-b9d6-70a4-0630-d546cc31eebb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523896245711,
    },
    "e-633": {
      id: "e-633",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-634" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|ce71f56a-4761-dee9-1080-ee9ca5e4728c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|ce71f56a-4761-dee9-1080-ee9ca5e4728c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523896254059,
    },
    "e-635": {
      id: "e-635",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-636" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd28d40d2c1a|0f02c9f9-fda4-686b-4699-7192bb91e977",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd28d40d2c1a|0f02c9f9-fda4-686b-4699-7192bb91e977",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523896273465,
    },
    "e-637": {
      id: "e-637",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-48", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-48-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1523899545366,
    },
    "e-638": {
      id: "e-638",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-639" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04|218ffcac-463a-bc27-7649-713b7c93c28f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04|218ffcac-463a-bc27-7649-713b7c93c28f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523904831022,
    },
    "e-640": {
      id: "e-640",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-641" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04|111ccb94-bc1f-fbc7-8118-614e0fba14ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04|111ccb94-bc1f-fbc7-8118-614e0fba14ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523904839550,
    },
    "e-642": {
      id: "e-642",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-643" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04|9fa8c953-a4f1-2459-7ce8-386ecb3a6f43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04|9fa8c953-a4f1-2459-7ce8-386ecb3a6f43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523904850876,
    },
    "e-644": {
      id: "e-644",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-645" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04|721e6f3b-67ea-a8e0-0e31-ea15f8042fb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04|721e6f3b-67ea-a8e0-0e31-ea15f8042fb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523904857965,
    },
    "e-646": {
      id: "e-646",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-647" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04|3e8a87b8-ed61-656c-06fa-52f4d51df5f8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04|3e8a87b8-ed61-656c-06fa-52f4d51df5f8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523904869546,
    },
    "e-648": {
      id: "e-648",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-649" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04|0ac9f441-95ab-321e-096d-f204451afd47",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04|0ac9f441-95ab-321e-096d-f204451afd47",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523904910889,
    },
    "e-650": {
      id: "e-650",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-651" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04|6b86642e-d227-cbeb-2c0d-2f3953a9f42f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04|6b86642e-d227-cbeb-2c0d-2f3953a9f42f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523904917648,
    },
    "e-652": {
      id: "e-652",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-653" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04|d0743915-1aac-4f72-29a1-6b8878010d0c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04|d0743915-1aac-4f72-29a1-6b8878010d0c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1523904928560,
    },
    "e-654": {
      id: "e-654",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-655",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd0e7c0d2c1e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd0e7c0d2c1e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523905806891,
    },
    "e-656": {
      id: "e-656",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-657" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|a6af4afb-245e-db96-c80f-54c2c22eca11",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|a6af4afb-245e-db96-c80f-54c2c22eca11",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523924837228,
    },
    "e-658": {
      id: "e-658",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-659" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|dcdcd2c9-9af3-ff16-b683-e3f35aeca4b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|dcdcd2c9-9af3-ff16-b683-e3f35aeca4b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523924846275,
    },
    "e-660": {
      id: "e-660",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-661" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|bf9dc504-7a69-585c-1cfa-d816f70a0999",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|bf9dc504-7a69-585c-1cfa-d816f70a0999",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523924856051,
    },
    "e-662": {
      id: "e-662",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-663" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8d97",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8d97",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523924869773,
    },
    "e-664": {
      id: "e-664",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-665" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8d9f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8d9f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523924878660,
    },
    "e-666": {
      id: "e-666",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-667" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8da7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd257d0d2c1c|bfd2a1f4-e975-47fc-74d8-ca9fdbfe8da7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523924887593,
    },
    "e-668": {
      id: "e-668",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-669" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|794e2a53-d209-898a-d5c8-1e857dc912ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|794e2a53-d209-898a-d5c8-1e857dc912ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523925430336,
    },
    "e-670": {
      id: "e-670",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-671" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|44f4fa56-cf12-e15a-27d4-4945d65667fd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|44f4fa56-cf12-e15a-27d4-4945d65667fd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523925477089,
    },
    "e-672": {
      id: "e-672",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-673",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523977727860,
    },
    "e-674": {
      id: "e-674",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-675" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd78ad0d2c04|5ad0b6d063a6e8aa8963ade0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd78ad0d2c04|5ad0b6d063a6e8aa8963ade0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1523977765376,
    },
    "e-680": {
      id: "e-680",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-681" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bda4fa0d2c27|7b1b2f5b-920a-2aea-09a4-8309fecf0ef5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bda4fa0d2c27|7b1b2f5b-920a-2aea-09a4-8309fecf0ef5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1524064664818,
    },
    "e-682": {
      id: "e-682",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-683" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd721c0d2c28|7ba39c5f-433f-327d-20d4-f80d56c3abe9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd721c0d2c28|7ba39c5f-433f-327d-20d4-f80d56c3abe9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1524064769333,
    },
    "e-684": {
      id: "e-684",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-685" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd30e20d2c12|f277caf5-2c09-cd95-561c-0c54caf4d70b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd30e20d2c12|f277caf5-2c09-cd95-561c-0c54caf4d70b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1524263913977,
    },
    "e-688": {
      id: "e-688",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-689" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdf9610d2c13|1f96d4b0-34bf-b7ff-8f03-78ca97b94b4d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdf9610d2c13|1f96d4b0-34bf-b7ff-8f03-78ca97b94b4d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1524263948010,
    },
    "e-692": {
      id: "e-692",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-693" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bdeefb0d2c14|5fca4e2d-335d-ac7f-861b-5221b517b9c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bdeefb0d2c14|5fca4e2d-335d-ac7f-861b-5221b517b9c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1524263973083,
    },
    "e-696": {
      id: "e-696",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-697",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5b155db3ecb0bd9ab50d2c0f|3af811a3-53e3-7621-5e9c-2551c98023c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5b155db3ecb0bd9ab50d2c0f|3af811a3-53e3-7621-5e9c-2551c98023c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1550770576190,
    },
    "e-698": {
      id: "e-698",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-699",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5e07938eed2a27cb986f483a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5e07938eed2a27cb986f483a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1577554869529,
    },
    "e-700": {
      id: "e-700",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-701",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5e07938eed2a27cb986f483a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5e07938eed2a27cb986f483a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1577554869529,
    },
    "e-701": {
      id: "e-701",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-700",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5e07938eed2a27cb986f483a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5e07938eed2a27cb986f483a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1577554869529,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Rotate Arrow On Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541af" },
                zValue: -90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: { id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541af" },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1522861459128,
    },
    "a-2": {
      id: "a-2",
      title: "Rotate Arrow To Origin",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: { id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541af" },
                zValue: -90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1522861584343,
    },
    "a-3": {
      id: "a-3",
      title: "Rotate Arrow On Hover 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541b9" },
                zValue: -90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: { id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541b9" },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1522861459128,
    },
    "a-4": {
      id: "a-4",
      title: "Rotate Arrow To Origin 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: { id: "e6e7d113-7e4e-cb6c-0eb2-92305d8541b9" },
                zValue: -90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1522861584343,
    },
    "a-5": {
      id: "a-5",
      title: "Rotate Arrow On Hover 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "e6e7d113-7e4e-cb6c-0eb2-92305d85419d" },
                zValue: -90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: { id: "e6e7d113-7e4e-cb6c-0eb2-92305d85419d" },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1522861459128,
    },
    "a-6": {
      id: "a-6",
      title: "Rotate Arrow To Origin 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: { id: "e6e7d113-7e4e-cb6c-0eb2-92305d85419d" },
                zValue: -90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1522861584343,
    },
    "a-7": {
      id: "a-7",
      title: "Light Box Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|d02a49ab-e6e8-ad04-8d8b-85d8e530ea47",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|b09439fb-dd73-2fb8-4387-838e267f941b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|b09439fb-dd73-2fb8-4387-838e267f941b",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|b09439fb-dd73-2fb8-4387-838e267f941b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|b09439fb-dd73-2fb8-4387-838e267f941b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|d02a49ab-e6e8-ad04-8d8b-85d8e530ea47",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523037962637,
    },
    "a-8": {
      id: "a-8",
      title: "Light Box Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|d02a49ab-e6e8-ad04-8d8b-85d8e530ea47",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|b09439fb-dd73-2fb8-4387-838e267f941b",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|b09439fb-dd73-2fb8-4387-838e267f941b",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1523038169529,
    },
    "a-38": {
      id: "a-38",
      title: "Light Box Hover 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38e",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38e",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38f",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523037962637,
    },
    "a-39": {
      id: "a-39",
      title: "Light Box Hover Out 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38e",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|39a9fe1f-579b-9102-018d-2b1e38e9e38e",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1523038169529,
    },
    "a-9": {
      id: "a-9",
      title: "Inner Hero On Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-10": {
      id: "a-10",
      title: "Nav Enter",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".navbar",
                  selectorGuids: ["28906fae-b9ec-0fb3-c4e9-8aa579128f53"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1523725051558,
    },
    "a-11": {
      id: "a-11",
      title: "Nav Leave",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  selector: ".navbar",
                  selectorGuids: ["28906fae-b9ec-0fb3-c4e9-8aa579128f53"],
                },
                yValue: -101,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1523725096074,
    },
    "a-12": {
      id: "a-12",
      title: "Hero On Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544330c",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544330c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544330e",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544330e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f82405443314",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f82405443314",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f82405443316",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f82405443316",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544331a",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544331a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544330c",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544330c",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544330e",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544330e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f82405443314",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f82405443314",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f82405443316",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f82405443316",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544331a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|4dfd0268-6e8b-57ae-dc2a-f8240544331a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523725294836,
    },
    "a-13": {
      id: "a-13",
      title: "Move Up On Load 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|0bf1a607-5352-bd3f-c3ed-9fa290b4e3c8",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|0bf1a607-5352-bd3f-c3ed-9fa290b4e3c8",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|0bf1a607-5352-bd3f-c3ed-9fa290b4e3c8",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|0bf1a607-5352-bd3f-c3ed-9fa290b4e3c8",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523726076122,
    },
    "a-14": {
      id: "a-14",
      title: "Hero 2 On Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab51",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab52",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab52",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|f5f732ec-42e2-93d7-8eb4-b9a234d049df",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|f5f732ec-42e2-93d7-8eb4-b9a234d049df",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|b23f1c32-f117-a371-7680-204953a6ffc3",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|b23f1c32-f117-a371-7680-204953a6ffc3",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab67",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab67",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab5d",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab5d",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab55",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab55",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab51",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab52",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-30",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab52",
                },
                zValue: -90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-14-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab4d",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab4d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab4d",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab4d",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab52",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-29",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 200,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab52",
                },
                zValue: -90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab51",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab51",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab55",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab55",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab5d",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab5d",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab67",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|55d0c4cc-3192-c6a9-f0d1-1c16147eab67",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|b23f1c32-f117-a371-7680-204953a6ffc3",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|b23f1c32-f117-a371-7680-204953a6ffc3",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|f5f732ec-42e2-93d7-8eb4-b9a234d049df",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd7a710d2c22|f5f732ec-42e2-93d7-8eb4-b9a234d049df",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523728202787,
    },
    "a-15": {
      id: "a-15",
      title: "Program On Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523730569705,
    },
    "a-16": {
      id: "a-16",
      title: "Program On Load 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523730569705,
    },
    "a-17": {
      id: "a-17",
      title: "Program On Load 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-17-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-17-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-17-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-17-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd94c",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-17-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd94e",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd954",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-17-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd956",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-17-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|49b32af5-e3b3-0e20-ae38-d5ef01abd959",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523730569705,
    },
    "a-18": {
      id: "a-18",
      title: "Inner Hero On Load 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|ef20e734-d946-cab2-7ec9-d0c02b7cedf8",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|ef20e734-d946-cab2-7ec9-d0c02b7cedf8",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-18-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-18-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-18-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-18-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|ef20e734-d946-cab2-7ec9-d0c02b7cedf8",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|ef20e734-d946-cab2-7ec9-d0c02b7cedf8",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-18-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-18-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-19": {
      id: "a-19",
      title: "Move Up Element On Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|247f0273-c00d-52b1-7780-e5e790e5ccf7",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|247f0273-c00d-52b1-7780-e5e790e5ccf7",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|247f0273-c00d-52b1-7780-e5e790e5ccf7",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|247f0273-c00d-52b1-7780-e5e790e5ccf7",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523736197254,
    },
    "a-20": {
      id: "a-20",
      title: "Inner Hero On Load 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-20-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-20-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd2f390d2c16|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-21": {
      id: "a-21",
      title: "Inner Hero On Load 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|3781b939-a717-bf3f-261e-473bb268ce23",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|3781b939-a717-bf3f-261e-473bb268ce23",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|3781b939-a717-bf3f-261e-473bb268ce23",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|3781b939-a717-bf3f-261e-473bb268ce23",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-22": {
      id: "a-22",
      title: "Inner Hero On Load 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda87e0d2c19|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-22-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-22-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-22-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|75575502-81cd-21d0-ea91-2c4c320a1008",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-22-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-22-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd19ac0d2c26|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-23": {
      id: "a-23",
      title: "Inner Hero On Load 6",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|9adf5c69-ff36-ec2e-dc8e-69d0a46b65a4",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|9adf5c69-ff36-ec2e-dc8e-69d0a46b65a4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|9adf5c69-ff36-ec2e-dc8e-69d0a46b65a4",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|9adf5c69-ff36-ec2e-dc8e-69d0a46b65a4",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdec890d2c17|ca37e42c-f173-79cc-4c6a-0c3215450d00",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-24": {
      id: "a-24",
      title: "Landing Page On Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a87806755a",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a87806755a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a87806755c",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a87806755c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a878067562",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a878067562",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a878067564",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a878067564",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|466b1b26-08fa-2288-fc78-b0046781e3dc",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|466b1b26-08fa-2288-fc78-b0046781e3dc",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|f5944a6a-35d0-b27d-8b35-736eb846970f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|f5944a6a-35d0-b27d-8b35-736eb846970f",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|3460fff7-a404-9de6-29a0-beeaf2b760df",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a87806755a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a87806755a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|9e83e51e-d4c5-9282-e2b9-777b8303ed93",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|f5944a6a-35d0-b27d-8b35-736eb846970f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|f5944a6a-35d0-b27d-8b35-736eb846970f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a87806755c",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a87806755c",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|466b1b26-08fa-2288-fc78-b0046781e3dc",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|466b1b26-08fa-2288-fc78-b0046781e3dc",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a878067562",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a878067562",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a878067564",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|0ab64b75-10ac-4e33-8b08-06a878067564",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523737215299,
    },
    "a-25": {
      id: "a-25",
      title: "Move Up Element On Load 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|247f0273-c00d-52b1-7780-e5e790e5ccf7",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|247f0273-c00d-52b1-7780-e5e790e5ccf7",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|247f0273-c00d-52b1-7780-e5e790e5ccf7",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|247f0273-c00d-52b1-7780-e5e790e5ccf7",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523736197254,
    },
    "a-26": {
      id: "a-26",
      title: "Inner Hero On Load 7",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|350fdd1d-4428-85c0-2f8e-5ce4c7720820",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|350fdd1d-4428-85c0-2f8e-5ce4c7720820",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|350fdd1d-4428-85c0-2f8e-5ce4c7720820",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|350fdd1d-4428-85c0-2f8e-5ce4c7720820",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-26-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd1c6d0d2c1f|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-27": {
      id: "a-27",
      title: "Inner Hero On Load 8",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|8abbe559-28d9-95c2-b45a-ef57b6caf920",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|8abbe559-28d9-95c2-b45a-ef57b6caf920",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|f3ca93eb-62af-a72b-5596-76244d1d74f8",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|f3ca93eb-62af-a72b-5596-76244d1d74f8",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-27-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-27-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|f3ca93eb-62af-a72b-5596-76244d1d74f8",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|f3ca93eb-62af-a72b-5596-76244d1d74f8",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-27-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-27-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|8abbe559-28d9-95c2-b45a-ef57b6caf920",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd07180d2c15|8abbe559-28d9-95c2-b45a-ef57b6caf920",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-28": {
      id: "a-28",
      title: "Inner Hero On Load 9",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|a20733d1-fad9-1b85-4ea5-06780400e242",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|a20733d1-fad9-1b85-4ea5-06780400e242",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|9bb77d68-6e18-f3a7-83fb-805d25cc893f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|9bb77d68-6e18-f3a7-83fb-805d25cc893f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|9bb77d68-6e18-f3a7-83fb-805d25cc893f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|9bb77d68-6e18-f3a7-83fb-805d25cc893f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|a20733d1-fad9-1b85-4ea5-06780400e242",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd8c5a0d2c10|a20733d1-fad9-1b85-4ea5-06780400e242",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-29": {
      id: "a-29",
      title: "Inner Hero On Load 10",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|aedc4b6a-6064-a9b1-3b63-1f48a5a96c68",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|aedc4b6a-6064-a9b1-3b63-1f48a5a96c68",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|aedc4b6a-6064-a9b1-3b63-1f48a5a96c68",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|aedc4b6a-6064-a9b1-3b63-1f48a5a96c68",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-29-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd86750d2c18|afefa56c-45d5-5681-940c-64f3a9347586",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-30": {
      id: "a-30",
      title: "Inner Hero On Load 11",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455d",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455d",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad384550",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad384550",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad384552",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad384552",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|8956fd8b-db0b-ee62-afa9-2dd0ed1908be",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|8956fd8b-db0b-ee62-afa9-2dd0ed1908be",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-30-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455b",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad384550",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad384550",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-30-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad384552",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad384552",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-30-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|8956fd8b-db0b-ee62-afa9-2dd0ed1908be",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|8956fd8b-db0b-ee62-afa9-2dd0ed1908be",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-30-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-30-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455d",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-31": {
      id: "a-31",
      title: "Inner Hero On Load 12",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968e2",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968e2",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968d5",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968d5",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968d7",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968d7",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|86def0a1-f0e5-d547-2c80-46112b69fb71",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|86def0a1-f0e5-d547-2c80-46112b69fb71",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455b",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968d5",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968d5",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968d7",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968d7",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|86def0a1-f0e5-d547-2c80-46112b69fb71",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|86def0a1-f0e5-d547-2c80-46112b69fb71",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968e2",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdeefb0d2c14|ae4a63d0-e42f-8f60-a44a-e4ae704968e2",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455d",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bdf9610d2c13|ffe09844-aae7-c9ff-7930-da38ad38455d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-32": {
      id: "a-32",
      title: "Inner Hero On Load 13",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72ad",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-32-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72ad",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72a0",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72a0",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-32-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72a2",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72a2",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-32-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|f71e4e6b-880d-2358-6e5c-ef2190de1dcb",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|f71e4e6b-880d-2358-6e5c-ef2190de1dcb",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-32-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72ab",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72ab",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72a0",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72a0",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-32-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72a2",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72a2",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-32-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|f71e4e6b-880d-2358-6e5c-ef2190de1dcb",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|f71e4e6b-880d-2358-6e5c-ef2190de1dcb",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-32-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72ab",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72ab",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-32-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72ad",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd539d0d2c11|c60ed1d8-8380-81be-fd56-11c28f8a72ad",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-49": {
      id: "a-49",
      title: "Inner Hero On Load 14",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-49-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-49-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-49-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-49-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|5f38f251-d950-133c-5522-1bc8ff4bc11a",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|5f38f251-d950-133c-5522-1bc8ff4bc11a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-49-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-49-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6dd",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-49-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6df",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-49-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|5f38f251-d950-133c-5522-1bc8ff4bc11a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|5f38f251-d950-133c-5522-1bc8ff4bc11a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-49-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-49-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6e8",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-49-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|e28a7d76-aa9f-359f-47b4-3b9f188dc6ea",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    "a-34": {
      id: "a-34",
      title: "Move Up Element On Load 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-34-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd10130d2c25|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523736197254,
    },
    "a-35": {
      id: "a-35",
      title: "Move Up Element On Load 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-35-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-35-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-35-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bda4fa0d2c27|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523736197254,
    },
    "a-36": {
      id: "a-36",
      title: "Move Up Element On Load 6",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-36-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-36-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd721c0d2c28|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523736197254,
    },
    "a-37": {
      id: "a-37",
      title: "Move Up Element On Load 7",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd257d0d2c1c|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523736197254,
    },
    "a-40": {
      id: "a-40",
      title: "Light Box Hover 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-40-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e10",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0f",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-40-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-40-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-40-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e10",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523037962637,
    },
    "a-41": {
      id: "a-41",
      title: "Light Box Hover Out 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-41-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e10",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-41-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0f",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-41-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd9ab50d2c0f|31f35ec3-e481-38be-8a67-fe2ab7512e0f",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1523038169529,
    },
    "a-42": {
      id: "a-42",
      title: "Close Search",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-42-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: { id: "0627a574-8586-5c36-072a-e8a30b5df4db" },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-42-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "0627a574-8586-5c36-072a-e8a30b5df4db" },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1523894363287,
    },
    "a-43": {
      id: "a-43",
      title: "Show Search Container",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-43-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "0627a574-8586-5c36-072a-e8a30b5df4db" },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-43-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "0627a574-8586-5c36-072a-e8a30b5df4db" },
                value: "none",
              },
            },
            {
              id: "a-43-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "0627a574-8586-5c36-072a-e8a30b5df4db" },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-43-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: { id: "0627a574-8586-5c36-072a-e8a30b5df4db" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-43-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 0,
                target: { id: "0627a574-8586-5c36-072a-e8a30b5df4db" },
                value: "block",
              },
            },
            {
              id: "a-43-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: { id: "0627a574-8586-5c36-072a-e8a30b5df4db" },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523894501077,
    },
    "a-45": {
      id: "a-45",
      title: "Show Tip 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-45-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|cbe82634-47ca-32bd-25d2-4c57b530aa51",
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-45-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|cbe82634-47ca-32bd-25d2-4c57b530aa51",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-45-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|c4e9bb81-aae8-d00a-c21c-ffb3a88811ca",
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-45-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|c73a48f0-3250-f367-2a56-f9d263b12af1",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523895511155,
    },
    "a-46": {
      id: "a-46",
      title: "Show Tip 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-46-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|c4e9bb81-aae8-d00a-c21c-ffb3a88811ca",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-46-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|cbe82634-47ca-32bd-25d2-4c57b530aa51",
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-46-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|c73a48f0-3250-f367-2a56-f9d263b12af1",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1523895511155,
    },
    "a-47": {
      id: "a-47",
      title: "Show Tip 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-47-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|c73a48f0-3250-f367-2a56-f9d263b12af1",
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-47-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|c73a48f0-3250-f367-2a56-f9d263b12af1",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-47-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|c4e9bb81-aae8-d00a-c21c-ffb3a88811ca",
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-47-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5b155db3ecb0bd28d40d2c1a|cbe82634-47ca-32bd-25d2-4c57b530aa51",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523895511155,
    },
    "a-48": {
      id: "a-48",
      title: "Parallax Effect",
      continuousParameterGroups: [
        {
          id: "a-48-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-48-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5b155db3ecb0bd9ab50d2c0f|c6f89b7d-e9c9-25de-d716-d34d12b77482",
                    },
                    yValue: 1000,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-48-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5b155db3ecb0bd9ab50d2c0f|3a749bc8-dea9-2302-87fd-ca5639949f03",
                    },
                    yValue: 500,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-48-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      id: "5b155db3ecb0bd9ab50d2c0f|b2985fe9-2da8-d5e0-f3d8-c766d717b392",
                    },
                    yValue: 420,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-48-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      id: "5b155db3ecb0bd9ab50d2c0f|c6f89b7d-e9c9-25de-d716-d34d12b77482",
                    },
                    yValue: -1000,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-48-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      id: "5b155db3ecb0bd9ab50d2c0f|3a749bc8-dea9-2302-87fd-ca5639949f03",
                    },
                    yValue: -1000,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-48-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "easeOut",
                    duration: 500,
                    target: {
                      id: "5b155db3ecb0bd9ab50d2c0f|b2985fe9-2da8-d5e0-f3d8-c766d717b392",
                    },
                    yValue: -1200,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1523899548645,
    },
    "a-33": {
      id: "a-33",
      title: "Move Up Element On Load 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd0e7c0d2c1e|247f0273-c00d-52b1-7780-e5e790e5ccf6",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523736197254,
    },
    "a-50": {
      id: "a-50",
      title: "Move Up Element On Load 8",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-50-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|107a2517-ccdb-bac9-2f24-a8bc555b43f2",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|107a2517-ccdb-bac9-2f24-a8bc555b43f2",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-50-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|107a2517-ccdb-bac9-2f24-a8bc555b43f2",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5b155db3ecb0bd78ad0d2c04|107a2517-ccdb-bac9-2f24-a8bc555b43f2",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523736197254,
    },
    "a-51": {
      id: "a-51",
      title: "New Timed Animation",
      actionItemGroups: [],
      useFirstGroupAsInitialState: false,
      createdOn: 1550770581730,
    },
    "a-52": {
      id: "a-52",
      title: "Inner Hero On Load 15",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-52-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|a20733d1-fad9-1b85-4ea5-06780400e242",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-52-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|a20733d1-fad9-1b85-4ea5-06780400e242",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-52-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-52-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|9bb77d68-6e18-f3a7-83fb-805d25cc893f",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|9bb77d68-6e18-f3a7-83fb-805d25cc893f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-52-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-52-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|422bdc41-3503-8677-0646-457ec4713341",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|422bdc41-3503-8677-0646-457ec4713341",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-52-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|561a51ae-e9a3-17cf-a4ac-6e210010a60f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-52-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|9bb77d68-6e18-f3a7-83fb-805d25cc893f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|9bb77d68-6e18-f3a7-83fb-805d25cc893f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-52-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-52-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|2c23ca28-cb19-26f2-ea11-215c620d5e7b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|a20733d1-fad9-1b85-4ea5-06780400e242",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 500,
                target: {
                  id: "5e07938eed2a27cb986f483a|a20733d1-fad9-1b85-4ea5-06780400e242",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523724022379,
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
