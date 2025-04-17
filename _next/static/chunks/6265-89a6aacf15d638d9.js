"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6265, 9948, 1324, 7096, 9116],
  {
    37992: function (t, e, n) {
      n.r(e),
        n.d(e, {
          CountUp: function () {
            return i;
          },
        });
      var r = function () {
          return (r =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        i = (function () {
          function t(t, e, n) {
            var i = this;
            (this.endVal = e),
              (this.options = n),
              (this.version = "2.8.0"),
              (this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                useIndianSeparators: !1,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: "",
                enableScrollSpy: !1,
                scrollSpyDelay: 200,
                scrollSpyOnce: !1,
              }),
              (this.finalEndVal = null),
              (this.useEasing = !0),
              (this.countDown = !1),
              (this.error = ""),
              (this.startVal = 0),
              (this.paused = !0),
              (this.once = !1),
              (this.count = function (t) {
                i.startTime || (i.startTime = t);
                var e = t - i.startTime;
                (i.remaining = i.duration - e),
                  i.useEasing
                    ? i.countDown
                      ? (i.frameVal =
                          i.startVal -
                          i.easingFn(e, 0, i.startVal - i.endVal, i.duration))
                      : (i.frameVal = i.easingFn(
                          e,
                          i.startVal,
                          i.endVal - i.startVal,
                          i.duration
                        ))
                    : (i.frameVal =
                        i.startVal +
                        (i.endVal - i.startVal) * (e / i.duration));
                var n = i.countDown
                  ? i.frameVal < i.endVal
                  : i.frameVal > i.endVal;
                (i.frameVal = n ? i.endVal : i.frameVal),
                  (i.frameVal = Number(
                    i.frameVal.toFixed(i.options.decimalPlaces)
                  )),
                  i.printValue(i.frameVal),
                  e < i.duration
                    ? (i.rAF = requestAnimationFrame(i.count))
                    : null !== i.finalEndVal
                    ? i.update(i.finalEndVal)
                    : i.options.onCompleteCallback &&
                      i.options.onCompleteCallback();
              }),
              (this.formatNumber = function (t) {
                var e,
                  n,
                  r,
                  a = (Math.abs(t).toFixed(i.options.decimalPlaces) + "").split(
                    "."
                  );
                if (
                  ((e = a[0]),
                  (n = a.length > 1 ? i.options.decimal + a[1] : ""),
                  i.options.useGrouping)
                ) {
                  r = "";
                  for (var o = 3, s = 0, l = 0, u = e.length; l < u; ++l)
                    i.options.useIndianSeparators &&
                      4 === l &&
                      ((o = 2), (s = 1)),
                      0 !== l && s % o == 0 && (r = i.options.separator + r),
                      s++,
                      (r = e[u - l - 1] + r);
                  e = r;
                }
                return (
                  i.options.numerals &&
                    i.options.numerals.length &&
                    ((e = e.replace(/[0-9]/g, function (t) {
                      return i.options.numerals[+t];
                    })),
                    (n = n.replace(/[0-9]/g, function (t) {
                      return i.options.numerals[+t];
                    }))),
                  (t < 0 ? "-" : "") +
                    i.options.prefix +
                    e +
                    n +
                    i.options.suffix
                );
              }),
              (this.easeOutExpo = function (t, e, n, r) {
                return (n * (1 - Math.pow(2, (-10 * t) / r)) * 1024) / 1023 + e;
              }),
              (this.options = r(r({}, this.defaults), n)),
              (this.formattingFn = this.options.formattingFn
                ? this.options.formattingFn
                : this.formatNumber),
              (this.easingFn = this.options.easingFn
                ? this.options.easingFn
                : this.easeOutExpo),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              (this.endVal = this.validateValue(e)),
              (this.options.decimalPlaces = Math.max(
                this.options.decimalPlaces
              )),
              this.resetDuration(),
              (this.options.separator = String(this.options.separator)),
              (this.useEasing = this.options.useEasing),
              "" === this.options.separator && (this.options.useGrouping = !1),
              (this.el = "string" == typeof t ? document.getElementById(t) : t),
              this.el
                ? this.printValue(this.startVal)
                : (this.error = "[CountUp] target is null or undefined"),
              "undefined" != typeof window &&
                this.options.enableScrollSpy &&
                (this.error
                  ? console.error(this.error, t)
                  : ((window.onScrollFns = window.onScrollFns || []),
                    window.onScrollFns.push(function () {
                      return i.handleScroll(i);
                    }),
                    (window.onscroll = function () {
                      window.onScrollFns.forEach(function (t) {
                        return t();
                      });
                    }),
                    this.handleScroll(this)));
          }
          return (
            (t.prototype.handleScroll = function (t) {
              if (t && window && !t.once) {
                var e = window.innerHeight + window.scrollY,
                  n = t.el.getBoundingClientRect(),
                  r = n.top + window.pageYOffset,
                  i = n.top + n.height + window.pageYOffset;
                i < e && i > window.scrollY && t.paused
                  ? ((t.paused = !1),
                    setTimeout(function () {
                      return t.start();
                    }, t.options.scrollSpyDelay),
                    t.options.scrollSpyOnce && (t.once = !0))
                  : (window.scrollY > i || r > e) && !t.paused && t.reset();
              }
            }),
            (t.prototype.determineDirectionAndSmartEasing = function () {
              var t = this.finalEndVal ? this.finalEndVal : this.endVal;
              if (
                ((this.countDown = this.startVal > t),
                Math.abs(t - this.startVal) >
                  this.options.smartEasingThreshold && this.options.useEasing)
              ) {
                this.finalEndVal = t;
                var e = this.countDown ? 1 : -1;
                (this.endVal = t + e * this.options.smartEasingAmount),
                  (this.duration = this.duration / 2);
              } else (this.endVal = t), (this.finalEndVal = null);
              null !== this.finalEndVal
                ? (this.useEasing = !1)
                : (this.useEasing = this.options.useEasing);
            }),
            (t.prototype.start = function (t) {
              this.error ||
                (this.options.onStartCallback && this.options.onStartCallback(),
                t && (this.options.onCompleteCallback = t),
                this.duration > 0
                  ? (this.determineDirectionAndSmartEasing(),
                    (this.paused = !1),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : this.printValue(this.endVal));
            }),
            (t.prototype.pauseResume = function () {
              this.paused
                ? ((this.startTime = null),
                  (this.duration = this.remaining),
                  (this.startVal = this.frameVal),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)))
                : cancelAnimationFrame(this.rAF),
                (this.paused = !this.paused);
            }),
            (t.prototype.reset = function () {
              cancelAnimationFrame(this.rAF),
                (this.paused = !0),
                this.resetDuration(),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                this.printValue(this.startVal);
            }),
            (t.prototype.update = function (t) {
              cancelAnimationFrame(this.rAF),
                (this.startTime = null),
                (this.endVal = this.validateValue(t)),
                this.endVal !== this.frameVal &&
                  ((this.startVal = this.frameVal),
                  null == this.finalEndVal && this.resetDuration(),
                  (this.finalEndVal = null),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)));
            }),
            (t.prototype.printValue = function (t) {
              var e;
              if (this.el) {
                var n = this.formattingFn(t);
                (
                  null === (e = this.options.plugin) || void 0 === e
                    ? void 0
                    : e.render
                )
                  ? this.options.plugin.render(this.el, n)
                  : "INPUT" === this.el.tagName
                  ? (this.el.value = n)
                  : "text" === this.el.tagName || "tspan" === this.el.tagName
                  ? (this.el.textContent = n)
                  : (this.el.innerHTML = n);
              }
            }),
            (t.prototype.ensureNumber = function (t) {
              return "number" == typeof t && !isNaN(t);
            }),
            (t.prototype.validateValue = function (t) {
              var e = Number(t);
              return this.ensureNumber(e)
                ? e
                : ((this.error =
                    "[CountUp] invalid start or end value: ".concat(t)),
                  null);
            }),
            (t.prototype.resetDuration = function () {
              (this.startTime = null),
                (this.duration = 1e3 * Number(this.options.duration)),
                (this.remaining = this.duration);
            }),
            t
          );
        })();
    },
    77095: function (t, e, n) {
      var r = n(2265),
        i = n(37992);
      function a(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(n), !0).forEach(function (e) {
                !(function (t, e, n) {
                  var r;
                  (e =
                    "symbol" ==
                    typeof (r = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(e, "string"))
                      ? r
                      : String(r)) in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n);
                })(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              a = Object.keys(t);
            for (r = 0; r < a.length; r++)
              (n = a[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (i[n] = t[n]);
        }
        return i;
      }
      function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var c =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? r.useLayoutEffect
          : r.useEffect;
      function f(t) {
        var e = r.useRef(t);
        return (
          c(function () {
            e.current = t;
          }),
          r.useCallback(function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return e.current.apply(void 0, n);
          }, [])
        );
      }
      var d = function (t, e) {
          var n = e.decimal,
            r = e.decimals,
            a = e.duration,
            o = e.easingFn,
            s = e.end,
            l = e.formattingFn,
            u = e.numerals,
            c = e.prefix,
            f = e.separator,
            d = e.start,
            p = e.suffix,
            m = e.useEasing,
            h = e.useGrouping,
            g = e.useIndianSeparators,
            y = e.enableScrollSpy,
            v = e.scrollSpyDelay,
            b = e.scrollSpyOnce,
            w = e.plugin;
          return new i.CountUp(t, s, {
            startVal: d,
            duration: a,
            decimal: n,
            decimalPlaces: r,
            easingFn: o,
            formattingFn: l,
            numerals: u,
            separator: f,
            prefix: c,
            suffix: p,
            plugin: w,
            useEasing: m,
            useIndianSeparators: g,
            useGrouping: h,
            enableScrollSpy: y,
            scrollSpyDelay: v,
            scrollSpyOnce: b,
          });
        },
        p = [
          "ref",
          "startOnMount",
          "enableReinitialize",
          "delay",
          "onEnd",
          "onStart",
          "onPauseResume",
          "onReset",
          "onUpdate",
        ],
        m = {
          decimal: ".",
          separator: ",",
          delay: null,
          prefix: "",
          suffix: "",
          duration: 2,
          start: 0,
          decimals: 0,
          startOnMount: !0,
          enableReinitialize: !0,
          useEasing: !0,
          useGrouping: !0,
          useIndianSeparators: !1,
        },
        h = function (t) {
          var e = Object.fromEntries(
              Object.entries(t).filter(function (t) {
                return (
                  void 0 !==
                  ((function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                    (function (t, e) {
                      var n =
                        null == t
                          ? null
                          : ("undefined" != typeof Symbol &&
                              t[Symbol.iterator]) ||
                            t["@@iterator"];
                      if (null != n) {
                        var r,
                          i,
                          a,
                          o,
                          s = [],
                          l = !0,
                          u = !1;
                        try {
                          for (
                            a = (n = n.call(t)).next;
                            !(l = (r = a.call(n)).done) &&
                            (s.push(r.value), 2 !== s.length);
                            l = !0
                          );
                        } catch (t) {
                          (u = !0), (i = t);
                        } finally {
                          try {
                            if (
                              !l &&
                              null != n.return &&
                              ((o = n.return()), Object(o) !== o)
                            )
                              return;
                          } finally {
                            if (u) throw i;
                          }
                        }
                        return s;
                      }
                    })(t, 2) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return u(t, 2);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ("Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n)
                        )
                          return Array.from(t);
                        if (
                          "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return u(t, 2);
                      }
                    })(t, 2) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })())[1]
                );
              })
            ),
            n = r.useMemo(
              function () {
                return o(o({}, m), e);
              },
              [t]
            ),
            i = n.ref,
            a = n.startOnMount,
            s = n.enableReinitialize,
            c = n.delay,
            h = n.onEnd,
            g = n.onStart,
            y = n.onPauseResume,
            v = n.onReset,
            b = n.onUpdate,
            w = l(n, p),
            E = r.useRef(),
            V = r.useRef(),
            O = r.useRef(!1),
            S = f(function () {
              return d("string" == typeof i ? i : i.current, w);
            }),
            F = f(function (t) {
              var e = E.current;
              if (e && !t) return e;
              var n = S();
              return (E.current = n), n;
            }),
            x = f(function () {
              var t = function () {
                return F(!0).start(function () {
                  null == h ||
                    h({ pauseResume: j, reset: R, start: C, update: A });
                });
              };
              c && c > 0 ? (V.current = setTimeout(t, 1e3 * c)) : t(),
                null == g || g({ pauseResume: j, reset: R, update: A });
            }),
            j = f(function () {
              F().pauseResume(),
                null == y || y({ reset: R, start: C, update: A });
            }),
            R = f(function () {
              F().el &&
                (V.current && clearTimeout(V.current),
                F().reset(),
                null == v || v({ pauseResume: j, start: C, update: A }));
            }),
            A = f(function (t) {
              F().update(t),
                null == b || b({ pauseResume: j, reset: R, start: C });
            }),
            C = f(function () {
              R(), x();
            }),
            N = f(function (t) {
              a && (t && R(), x());
            });
          return (
            r.useEffect(
              function () {
                O.current ? s && N(!0) : ((O.current = !0), N());
              },
              [
                s,
                O,
                N,
                c,
                t.start,
                t.suffix,
                t.prefix,
                t.duration,
                t.separator,
                t.decimals,
                t.decimal,
                t.formattingFn,
              ]
            ),
            r.useEffect(
              function () {
                return function () {
                  R();
                };
              },
              [R]
            ),
            { start: C, pauseResume: j, reset: R, update: A, getCountUp: F }
          );
        },
        g = ["className", "redraw", "containerProps", "children", "style"];
      e.ZP = function (t) {
        var e = t.className,
          n = t.redraw,
          i = t.containerProps,
          a = t.children,
          u = t.style,
          c = l(t, g),
          d = r.useRef(null),
          p = r.useRef(!1),
          m = h(
            o(
              o({}, c),
              {},
              {
                ref: d,
                startOnMount: "function" != typeof a || 0 === t.delay,
                enableReinitialize: !1,
              }
            )
          ),
          y = m.start,
          v = m.reset,
          b = m.update,
          w = m.pauseResume,
          E = m.getCountUp,
          V = f(function () {
            y();
          }),
          O = f(function (e) {
            t.preserveValue || v(), b(e);
          }),
          S = f(function () {
            if (
              "function" == typeof t.children &&
              !(d.current instanceof Element)
            ) {
              console.error(
                'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.'
              );
              return;
            }
            E();
          });
        r.useEffect(
          function () {
            S();
          },
          [S]
        ),
          r.useEffect(
            function () {
              p.current && O(t.end);
            },
            [t.end, O]
          );
        var F = n && t;
        return (r.useEffect(
          function () {
            n && p.current && V();
          },
          [V, n, F]
        ),
        r.useEffect(
          function () {
            !n && p.current && V();
          },
          [
            V,
            n,
            t.start,
            t.suffix,
            t.prefix,
            t.duration,
            t.separator,
            t.decimals,
            t.decimal,
            t.className,
            t.formattingFn,
          ]
        ),
        r.useEffect(function () {
          p.current = !0;
        }, []),
        "function" == typeof a)
          ? a({
              countUpRef: d,
              start: y,
              reset: v,
              update: b,
              pauseResume: w,
              getCountUp: E,
            })
          : r.createElement(
              "span",
              s({ className: e, ref: d, style: u }, i),
              void 0 !== t.start ? E().formattingFn(t.start) : ""
            );
      };
    },
    21932: function (t, e, n) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(2265),
        i = r && "object" == typeof r && "default" in r ? r : { default: r };
      !(function (t) {
        if (!t || "undefined" == typeof window) return;
        let e = document.createElement("style");
        e.setAttribute("type", "text/css"),
          (e.innerHTML = t),
          document.head.appendChild(e);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      let a = r.forwardRef(function (t, e) {
        let {
            style: n = {},
            className: a = "",
            autoFill: o = !1,
            play: s = !0,
            pauseOnHover: l = !1,
            pauseOnClick: u = !1,
            direction: c = "left",
            speed: f = 50,
            delay: d = 0,
            loop: p = 0,
            gradient: m = !1,
            gradientColor: h = "white",
            gradientWidth: g = 200,
            onFinish: y,
            onCycleComplete: v,
            onMount: b,
            children: w,
          } = t,
          [E, V] = r.useState(0),
          [O, S] = r.useState(0),
          [F, x] = r.useState(1),
          [j, R] = r.useState(!1),
          A = r.useRef(null),
          C = e || A,
          N = r.useRef(null),
          P = r.useCallback(() => {
            if (N.current && C.current) {
              let t = C.current.getBoundingClientRect(),
                e = N.current.getBoundingClientRect(),
                n = t.width,
                r = e.width;
              ("up" === c || "down" === c) && ((n = t.height), (r = e.height)),
                o && n && r ? x(r < n ? Math.ceil(n / r) : 1) : x(1),
                V(n),
                S(r);
            }
          }, [o, C, c]);
        r.useEffect(() => {
          if (j && (P(), N.current && C.current)) {
            let t = new ResizeObserver(() => P());
            return (
              t.observe(C.current),
              t.observe(N.current),
              () => {
                t && t.disconnect();
              }
            );
          }
        }, [P, C, j]),
          r.useEffect(() => {
            P();
          }, [P, w]),
          r.useEffect(() => {
            R(!0);
          }, []),
          r.useEffect(() => {
            "function" == typeof b && b();
          }, []);
        let D = r.useMemo(
            () => (o ? (O * F) / f : O < E ? E / f : O / f),
            [o, E, O, F, f]
          ),
          k = r.useMemo(
            () =>
              Object.assign(Object.assign({}, n), {
                "--pause-on-hover": !s || l ? "paused" : "running",
                "--pause-on-click": !s || (l && !u) || u ? "paused" : "running",
                "--width": "up" === c || "down" === c ? "100vh" : "100%",
                "--transform":
                  "up" === c
                    ? "rotate(-90deg)"
                    : "down" === c
                    ? "rotate(90deg)"
                    : "none",
              }),
            [n, s, l, u, c]
          ),
          M = r.useMemo(
            () => ({
              "--gradient-color": h,
              "--gradient-width": "number" == typeof g ? "".concat(g, "px") : g,
            }),
            [h, g]
          ),
          T = r.useMemo(
            () => ({
              "--play": s ? "running" : "paused",
              "--direction": "left" === c ? "normal" : "reverse",
              "--duration": "".concat(D, "s"),
              "--delay": "".concat(d, "s"),
              "--iteration-count": p ? "".concat(p) : "infinite",
              "--min-width": o ? "auto" : "100%",
            }),
            [s, c, D, d, p, o]
          ),
          U = r.useMemo(
            () => ({
              "--transform":
                "up" === c
                  ? "rotate(90deg)"
                  : "down" === c
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [c]
          ),
          I = r.useCallback(
            (t) =>
              [...Array(Number.isFinite(t) && t >= 0 ? t : 0)].map((t, e) =>
                i.default.createElement(
                  r.Fragment,
                  { key: e },
                  r.Children.map(w, (t) =>
                    i.default.createElement(
                      "div",
                      { style: U, className: "rfm-child" },
                      t
                    )
                  )
                )
              ),
            [U, w]
          );
        return j
          ? i.default.createElement(
              "div",
              { ref: C, style: k, className: "rfm-marquee-container " + a },
              m &&
                i.default.createElement("div", {
                  style: M,
                  className: "rfm-overlay",
                }),
              i.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: T,
                  onAnimationIteration: v,
                  onAnimationEnd: y,
                },
                i.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: N },
                  r.Children.map(w, (t) =>
                    i.default.createElement(
                      "div",
                      { style: U, className: "rfm-child" },
                      t
                    )
                  )
                ),
                I(F - 1)
              ),
              i.default.createElement(
                "div",
                { className: "rfm-marquee", style: T },
                I(F)
              )
            )
          : null;
      });
      e.default = a;
    },
  },
]);
