(() => {
  'use strict';
  var t = {
      374: (t, n, e) => {
        var r = e(234);
        const i = r.ZMF || r.$Tr;
        if (!i)
          throw new Error(
            'failed to find insert_hydration and insert in svelte/internal'
          );
        'undefined' != typeof window &&
          (window.__SVELTE_HMR_ADAPTER = class {
            constructor(t) {
              (this.instance = t),
                (this.insertionPoint = null),
                (this.afterMount = this.afterMount.bind(this)),
                (this.rerender = this.rerender.bind(this)),
                (this._noOverlay = !!t.hotOptions.noOverlay);
            }
            static getErrorOverlay(t = !1) {
              return (
                t ||
                  this.errorOverlay ||
                  (this.errorOverlay = (() => {
                    let t = [],
                      n = null;
                    const e =
                        '\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      padding: 32px;\n      background: rgba(0, 0, 0, .85);\n      font-family: Menlo, Consolas, monospace;\n      font-size: large;\n      color: rgb(232, 232, 232);\n      overflow: auto;\n      z-index: 2147483647;\n    ',
                      r =
                        '\n      margin-top: 0;\n      color: #E36049;\n      font-size: large;\n      font-weight: normal;\n    ',
                      i =
                        '\n      margin: 32px 0 0;\n      font-size: large;\n      font-weight: normal;\n    ',
                      o = (t) => {
                        u.h1.textContent = t;
                      },
                      a = () => {
                        const { el: t } = u;
                        t.parentNode || document.body.appendChild(u.el);
                      },
                      s = () => {
                        if (n) {
                          (u.body.innerHTML = ''), o('Failed to compile');
                          const t = l(n);
                          u.body.appendChild(t), a();
                        } else
                          t.length > 0
                            ? ((u.body.innerHTML = ''),
                              o('Failed to init component'),
                              t.forEach(({ title: t, message: n }) => {
                                const e = l(n, t);
                                u.body.appendChild(e);
                              }),
                              a())
                            : (() => {
                                const { el: t } = u;
                                t.parentNode && u.el.remove();
                              })();
                      },
                      l = (t, n) => {
                        const e = document.createElement('div');
                        if (n) {
                          const t = document.createElement('h2');
                          (t.textContent = n), (t.style = i), e.appendChild(t);
                        }
                        const r = document.createElement('pre');
                        return (r.textContent = t), e.appendChild(r), e;
                      },
                      u = (() => {
                        const t = document.createElement('h1');
                        t.style = r;
                        const n = document.createElement('section');
                        n.appendChild(t), (n.style = e);
                        const i = document.createElement('div');
                        return n.appendChild(i), { h1: t, el: n, body: i };
                      })();
                    return {
                      addError: (n, e) => {
                        const r = (n && n.stack) || n;
                        t.push({ title: e, message: r }), s();
                      },
                      clearErrors: () => {
                        t.forEach(({ element: t }) => {
                          var n;
                          (n = t) &&
                            n.parentNode &&
                            n.parentNode.removeChild(n);
                        }),
                          (t = []),
                          s();
                      },
                      setCompileError: (t) => {
                        (n = t), s();
                      },
                    };
                  })()),
                this.errorOverlay
              );
            }
            static renderCompileError(t) {
              const n = !t,
                e = this.getErrorOverlay(n);
              e && e.setCompileError(t);
            }
            dispose() {
              var t;
              this.insertionPoint &&
                ((t = this.insertionPoint) &&
                  t.parentNode &&
                  t.parentNode.removeChild(t),
                (this.insertionPoint = null)),
                this.clearError();
            }
            afterMount(t, n) {
              const {
                instance: { debugName: e },
              } = this;
              this.insertionPoint ||
                (this.insertionPoint = document.createComment(e)),
                i(t, this.insertionPoint, n);
            }
            rerender() {
              this.clearError();
              const {
                instance: { refreshComponent: t },
                insertionPoint: n,
              } = this;
              if (!n)
                throw new Error('Cannot rerender: missing insertion point');
              t(n.parentNode, n);
            }
            renderError(t) {
              if (this._noOverlay) return;
              const {
                  instance: { debugName: n },
                } = this,
                e = n || t.moduleName || 'Error';
              this.constructor.getErrorOverlay().addError(t, e);
            }
            clearError() {
              if (this._noOverlay) return;
              const t = this.constructor.getErrorOverlay(!0);
              t && t.clearErrors();
            }
          });
      },
      178: (t, n, e) => {
        e.d(n, { Z: () => f });
        var r = e(234),
          i = e(528),
          o = e(477),
          a = e(817),
          s = e(863),
          l = e(896);
        function u(t) {
          (0, r.qOq)(
            t,
            'svelte-nueq7a',
            "main.svelte-nueq7a{height:100vh;width:100%}.grid.svelte-nueq7a{display:grid;grid-template-columns:repeat(9, 1fr);grid-template:'clr clr hd hd hd  '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'sd sd  main main main '\n      'ft ft ft ft ft '\n      'ft ft ft ft ft '\n      'ft ft ft ft ft '\n      'ft ft ft ft ft '}.clear.svelte-nueq7a{grid-area:clr}.header.svelte-nueq7a{grid-area:hd;background-color:white}.footer.svelte-nueq7a{grid-area:ft;background-color:red}.content.svelte-nueq7a{grid-area:main;background-color:green;min-width:40vw;min-height:10vh}.sidebar.svelte-nueq7a{grid-area:sd;background-color:blue;width:12vw}"
          );
        }
        function c(t) {
          let n, e, u, c, h, f, d, p, m, v, g, y, _, w, b, x;
          return (
            (u = new i.Z({})),
            (f = new s.Z({})),
            (m = new o.Z({})),
            (y = new l.Z({})),
            (b = new a.Z({})),
            {
              c() {
                (n = (0, r.bGB)('main')),
                  (e = (0, r.bGB)('div')),
                  (0, r.YCL)(u.$$.fragment),
                  (c = (0, r.DhX)()),
                  (h = (0, r.bGB)('div')),
                  (0, r.YCL)(f.$$.fragment),
                  (d = (0, r.DhX)()),
                  (p = (0, r.bGB)('div')),
                  (0, r.YCL)(m.$$.fragment),
                  (v = (0, r.DhX)()),
                  (g = (0, r.bGB)('div')),
                  (0, r.YCL)(y.$$.fragment),
                  (_ = (0, r.DhX)()),
                  (w = (0, r.bGB)('div')),
                  (0, r.YCL)(b.$$.fragment),
                  (0, r.Ljt)(e, 'class', 'header svelte-nueq7a'),
                  (0, r.Ljt)(h, 'class', 'clear svelte-nueq7a'),
                  (0, r.Ljt)(p, 'class', 'footer svelte-nueq7a'),
                  (0, r.Ljt)(g, 'class', 'content svelte-nueq7a'),
                  (0, r.Ljt)(w, 'class', 'sidebar svelte-nueq7a'),
                  (0, r.Ljt)(n, 'class', 'grid svelte-nueq7a');
              },
              m(t, i) {
                (0, r.$Tr)(t, n, i),
                  (0, r.R3I)(n, e),
                  (0, r.yef)(u, e, null),
                  (0, r.R3I)(n, c),
                  (0, r.R3I)(n, h),
                  (0, r.yef)(f, h, null),
                  (0, r.R3I)(n, d),
                  (0, r.R3I)(n, p),
                  (0, r.yef)(m, p, null),
                  (0, r.R3I)(n, v),
                  (0, r.R3I)(n, g),
                  (0, r.yef)(y, g, null),
                  (0, r.R3I)(n, _),
                  (0, r.R3I)(n, w),
                  (0, r.yef)(b, w, null),
                  (x = !0);
              },
              p: r.ZTd,
              i(t) {
                x ||
                  ((0, r.Ui)(u.$$.fragment, t),
                  (0, r.Ui)(f.$$.fragment, t),
                  (0, r.Ui)(m.$$.fragment, t),
                  (0, r.Ui)(y.$$.fragment, t),
                  (0, r.Ui)(b.$$.fragment, t),
                  (x = !0));
              },
              o(t) {
                (0, r.etI)(u.$$.fragment, t),
                  (0, r.etI)(f.$$.fragment, t),
                  (0, r.etI)(m.$$.fragment, t),
                  (0, r.etI)(y.$$.fragment, t),
                  (0, r.etI)(b.$$.fragment, t),
                  (x = !1);
              },
              d(t) {
                t && (0, r.ogt)(n),
                  (0, r.vpE)(u),
                  (0, r.vpE)(f),
                  (0, r.vpE)(m),
                  (0, r.vpE)(y),
                  (0, r.vpE)(b);
              },
            }
          );
        }
        e(434), e(374), (t = e.hmd(t));
        class h extends r.f_C {
          constructor(t) {
            super(), (0, r.S1n)(this, t, null, c, r.N8, {}, u);
          }
        }
        t && t.hot;
        const f = h;
      },
      477: (t, n, e) => {
        e.d(n, { Z: () => o });
        var r = e(234);
        e(434), e(374), (t = e.hmd(t));
        class i extends r.f_C {
          constructor(t) {
            super(), (0, r.S1n)(this, t, null, null, r.N8, {});
          }
        }
        t && t.hot;
        const o = i;
      },
      697: (t, n, e) => {
        e.d(n, { Z: () => f });
        var r = e(234),
          i = e(804),
          o = e(568);
        function a(t) {
          (0, r.qOq)(
            t,
            'svelte-jlzfis',
            '.container.svelte-jlzfis{color:black;height:100%;border:1px solid red}button.svelte-jlzfis{margin:3px;box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.25);border:3px solid black;color:black;background-color:white;padding:5px 18px}#step.svelte-jlzfis{border-radius:0px 18px 18px 0px}#tree.svelte-jlzfis{border-radius:18px 0px 0px 18px}.selected.svelte-jlzfis{background-color:black;color:white}.tree-step.svelte-jlzfis{margin-top:10px;display:flex;align-items:center;justify-content:center}'
          );
        }
        function s(t) {
          let n;
          return {
            c() {
              (n = (0, r.bGB)('div')), (n.textContent = 'Step');
            },
            m(t, e) {
              (0, r.$Tr)(t, n, e);
            },
            i: r.ZTd,
            o: r.ZTd,
            d(t) {
              t && (0, r.ogt)(n);
            },
          };
        }
        function l(t) {
          let n, e, o;
          return (
            (e = new i.Z({})),
            {
              c() {
                (n = (0, r.bGB)('div')), (0, r.YCL)(e.$$.fragment);
              },
              m(t, i) {
                (0, r.$Tr)(t, n, i), (0, r.yef)(e, n, null), (o = !0);
              },
              i(t) {
                o || ((0, r.Ui)(e.$$.fragment, t), (o = !0));
              },
              o(t) {
                (0, r.etI)(e.$$.fragment, t), (o = !1);
              },
              d(t) {
                t && (0, r.ogt)(n), (0, r.vpE)(e);
              },
            }
          );
        }
        function u(t) {
          let n, e, i, o, a, u, c, h, f, d, p;
          const m = [l, s],
            v = [];
          function g(t, n) {
            return 'Tree' === t[0] ? 0 : 1;
          }
          return (
            (c = g(t)),
            (h = v[c] = m[c](t)),
            {
              c() {
                (n = (0, r.bGB)('div')),
                  (e = (0, r.bGB)('div')),
                  (i = (0, r.bGB)('button')),
                  (i.textContent = 'Tree'),
                  (o = (0, r.DhX)()),
                  (a = (0, r.bGB)('button')),
                  (a.textContent = 'Step'),
                  (u = (0, r.DhX)()),
                  h.c(),
                  (0, r.Ljt)(i, 'id', 'tree'),
                  (0, r.Ljt)(i, 'class', 'svelte-jlzfis'),
                  (0, r.VHj)(i, 'selected', 'Tree' === t[0]),
                  (0, r.Ljt)(a, 'id', 'step'),
                  (0, r.Ljt)(a, 'class', 'svelte-jlzfis'),
                  (0, r.VHj)(a, 'selected', 'Step' === t[0]),
                  (0, r.Ljt)(e, 'class', 'tree-step svelte-jlzfis'),
                  (0, r.Ljt)(n, 'class', 'container svelte-jlzfis');
              },
              m(s, l) {
                (0, r.$Tr)(s, n, l),
                  (0, r.R3I)(n, e),
                  (0, r.R3I)(e, i),
                  (0, r.R3I)(e, o),
                  (0, r.R3I)(e, a),
                  (0, r.R3I)(n, u),
                  v[c].m(n, null),
                  (f = !0),
                  d ||
                    ((p = [
                      (0, r.oLt)(i, 'click', t[1]),
                      (0, r.oLt)(a, 'click', t[2]),
                    ]),
                    (d = !0));
              },
              p(t, [e]) {
                1 & e && (0, r.VHj)(i, 'selected', 'Tree' === t[0]),
                  1 & e && (0, r.VHj)(a, 'selected', 'Step' === t[0]);
                let o = c;
                (c = g(t)),
                  c !== o &&
                    ((0, r.dvw)(),
                    (0, r.etI)(v[o], 1, 1, () => {
                      v[o] = null;
                    }),
                    (0, r.gbL)(),
                    (h = v[c]),
                    h || ((h = v[c] = m[c](t)), h.c()),
                    (0, r.Ui)(h, 1),
                    h.m(n, null));
              },
              i(t) {
                f || ((0, r.Ui)(h), (f = !0));
              },
              o(t) {
                (0, r.etI)(h), (f = !1);
              },
              d(t) {
                t && (0, r.ogt)(n), v[c].d(), (d = !1), (0, r.j7q)(p);
              },
            }
          );
        }
        function c(t, n, e) {
          (0, o.x)();
          let r = 'Tree';
          return [r, () => e(0, (r = 'Tree')), () => e(0, (r = 'Step'))];
        }
        e(434), e(374), (t = e.hmd(t));
        class h extends r.f_C {
          constructor(t) {
            super(), (0, r.S1n)(this, t, c, u, r.N8, {}, a);
          }
        }
        t && t.hot;
        const f = h;
      },
      804: (t, n, e) => {
        e.d(n, { Z: () => He });
        var r = e(234);
        function i() {}
        function o(t) {
          return null == t
            ? i
            : function () {
                return this.querySelector(t);
              };
        }
        function a() {
          return [];
        }
        function s(t) {
          return null == t
            ? a
            : function () {
                return this.querySelectorAll(t);
              };
        }
        function l(t) {
          return function () {
            return this.matches(t);
          };
        }
        function u(t) {
          return function (n) {
            return n.matches(t);
          };
        }
        var c = Array.prototype.find;
        function h() {
          return this.firstElementChild;
        }
        var f = Array.prototype.filter;
        function d() {
          return Array.from(this.children);
        }
        function p(t) {
          return new Array(t.length);
        }
        function m(t, n) {
          (this.ownerDocument = t.ownerDocument),
            (this.namespaceURI = t.namespaceURI),
            (this._next = null),
            (this._parent = t),
            (this.__data__ = n);
        }
        function v(t, n, e, r, i, o) {
          for (var a, s = 0, l = n.length, u = o.length; s < u; ++s)
            (a = n[s])
              ? ((a.__data__ = o[s]), (r[s] = a))
              : (e[s] = new m(t, o[s]));
          for (; s < l; ++s) (a = n[s]) && (i[s] = a);
        }
        function g(t, n, e, r, i, o, a) {
          var s,
            l,
            u,
            c = new Map(),
            h = n.length,
            f = o.length,
            d = new Array(h);
          for (s = 0; s < h; ++s)
            (l = n[s]) &&
              ((d[s] = u = a.call(l, l.__data__, s, n) + ''),
              c.has(u) ? (i[s] = l) : c.set(u, l));
          for (s = 0; s < f; ++s)
            (u = a.call(t, o[s], s, o) + ''),
              (l = c.get(u))
                ? ((r[s] = l), (l.__data__ = o[s]), c.delete(u))
                : (e[s] = new m(t, o[s]));
          for (s = 0; s < h; ++s) (l = n[s]) && c.get(d[s]) === l && (i[s] = l);
        }
        function y(t) {
          return t.__data__;
        }
        function _(t) {
          return 'object' == typeof t && 'length' in t ? t : Array.from(t);
        }
        function w(t, n) {
          return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
        }
        m.prototype = {
          constructor: m,
          appendChild: function (t) {
            return this._parent.insertBefore(t, this._next);
          },
          insertBefore: function (t, n) {
            return this._parent.insertBefore(t, n);
          },
          querySelector: function (t) {
            return this._parent.querySelector(t);
          },
          querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t);
          },
        };
        var b = 'http://www.w3.org/1999/xhtml';
        const x = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: b,
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        };
        function $(t) {
          var n = (t += ''),
            e = n.indexOf(':');
          return (
            e >= 0 && 'xmlns' !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            x.hasOwnProperty(n) ? { space: x[n], local: t } : t
          );
        }
        function k(t) {
          return function () {
            this.removeAttribute(t);
          };
        }
        function E(t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function j(t, n) {
          return function () {
            this.setAttribute(t, n);
          };
        }
        function L(t, n) {
          return function () {
            this.setAttributeNS(t.space, t.local, n);
          };
        }
        function A(t, n) {
          return function () {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
          };
        }
        function N(t, n) {
          return function () {
            var e = n.apply(this, arguments);
            null == e
              ? this.removeAttributeNS(t.space, t.local)
              : this.setAttributeNS(t.space, t.local, e);
          };
        }
        function C(t) {
          return (
            (t.ownerDocument && t.ownerDocument.defaultView) ||
            (t.document && t) ||
            t.defaultView
          );
        }
        function S(t) {
          return function () {
            this.style.removeProperty(t);
          };
        }
        function I(t, n, e) {
          return function () {
            this.style.setProperty(t, n, e);
          };
        }
        function T(t, n, e) {
          return function () {
            var r = n.apply(this, arguments);
            null == r
              ? this.style.removeProperty(t)
              : this.style.setProperty(t, r, e);
          };
        }
        function R(t, n) {
          return (
            t.style.getPropertyValue(n) ||
            C(t).getComputedStyle(t, null).getPropertyValue(n)
          );
        }
        function q(t) {
          return function () {
            delete this[t];
          };
        }
        function M(t, n) {
          return function () {
            this[t] = n;
          };
        }
        function B(t, n) {
          return function () {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : (this[t] = e);
          };
        }
        function O(t) {
          return t.trim().split(/^|\s+/);
        }
        function z(t) {
          return t.classList || new H(t);
        }
        function H(t) {
          (this._node = t), (this._names = O(t.getAttribute('class') || ''));
        }
        function Z(t, n) {
          for (var e = z(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
        }
        function P(t, n) {
          for (var e = z(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
        }
        function D(t) {
          return function () {
            Z(this, t);
          };
        }
        function X(t) {
          return function () {
            P(this, t);
          };
        }
        function G(t, n) {
          return function () {
            (n.apply(this, arguments) ? Z : P)(this, t);
          };
        }
        function V() {
          this.textContent = '';
        }
        function Y(t) {
          return function () {
            this.textContent = t;
          };
        }
        function U(t) {
          return function () {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? '' : n;
          };
        }
        function F() {
          this.innerHTML = '';
        }
        function W(t) {
          return function () {
            this.innerHTML = t;
          };
        }
        function K(t) {
          return function () {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? '' : n;
          };
        }
        function J() {
          this.nextSibling && this.parentNode.appendChild(this);
        }
        function Q() {
          this.previousSibling &&
            this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }
        function tt(t) {
          return function () {
            var n = this.ownerDocument,
              e = this.namespaceURI;
            return e === b && n.documentElement.namespaceURI === b
              ? n.createElement(t)
              : n.createElementNS(e, t);
          };
        }
        function nt(t) {
          return function () {
            return this.ownerDocument.createElementNS(t.space, t.local);
          };
        }
        function et(t) {
          var n = $(t);
          return (n.local ? nt : tt)(n);
        }
        function rt() {
          return null;
        }
        function it() {
          var t = this.parentNode;
          t && t.removeChild(this);
        }
        function ot() {
          var t = this.cloneNode(!1),
            n = this.parentNode;
          return n ? n.insertBefore(t, this.nextSibling) : t;
        }
        function at() {
          var t = this.cloneNode(!0),
            n = this.parentNode;
          return n ? n.insertBefore(t, this.nextSibling) : t;
        }
        function st(t) {
          return function () {
            var n = this.__on;
            if (n) {
              for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
                (e = n[r]),
                  (t.type && e.type !== t.type) || e.name !== t.name
                    ? (n[++i] = e)
                    : this.removeEventListener(e.type, e.listener, e.options);
              ++i ? (n.length = i) : delete this.__on;
            }
          };
        }
        function lt(t, n, e) {
          return function () {
            var r,
              i = this.__on,
              o = (function (t) {
                return function (n) {
                  t.call(this, n, this.__data__);
                };
              })(n);
            if (i)
              for (var a = 0, s = i.length; a < s; ++a)
                if ((r = i[a]).type === t.type && r.name === t.name)
                  return (
                    this.removeEventListener(r.type, r.listener, r.options),
                    this.addEventListener(
                      r.type,
                      (r.listener = o),
                      (r.options = e)
                    ),
                    void (r.value = n)
                  );
            this.addEventListener(t.type, o, e),
              (r = {
                type: t.type,
                name: t.name,
                value: n,
                listener: o,
                options: e,
              }),
              i ? i.push(r) : (this.__on = [r]);
          };
        }
        function ut(t, n, e) {
          var r = C(t),
            i = r.CustomEvent;
          'function' == typeof i
            ? (i = new i(n, e))
            : ((i = r.document.createEvent('Event')),
              e
                ? (i.initEvent(n, e.bubbles, e.cancelable),
                  (i.detail = e.detail))
                : i.initEvent(n, !1, !1)),
            t.dispatchEvent(i);
        }
        function ct(t, n) {
          return function () {
            return ut(this, t, n);
          };
        }
        function ht(t, n) {
          return function () {
            return ut(this, t, n.apply(this, arguments));
          };
        }
        H.prototype = {
          add: function (t) {
            this._names.indexOf(t) < 0 &&
              (this._names.push(t),
              this._node.setAttribute('class', this._names.join(' ')));
          },
          remove: function (t) {
            var n = this._names.indexOf(t);
            n >= 0 &&
              (this._names.splice(n, 1),
              this._node.setAttribute('class', this._names.join(' ')));
          },
          contains: function (t) {
            return this._names.indexOf(t) >= 0;
          },
        };
        var ft = [null];
        function dt(t, n) {
          (this._groups = t), (this._parents = n);
        }
        function pt() {
          return new dt([[document.documentElement]], ft);
        }
        dt.prototype = pt.prototype = {
          constructor: dt,
          select: function (t) {
            'function' != typeof t && (t = o(t));
            for (
              var n = this._groups, e = n.length, r = new Array(e), i = 0;
              i < e;
              ++i
            )
              for (
                var a,
                  s,
                  l = n[i],
                  u = l.length,
                  c = (r[i] = new Array(u)),
                  h = 0;
                h < u;
                ++h
              )
                (a = l[h]) &&
                  (s = t.call(a, a.__data__, h, l)) &&
                  ('__data__' in a && (s.__data__ = a.__data__), (c[h] = s));
            return new dt(r, this._parents);
          },
          selectAll: function (t) {
            t =
              'function' == typeof t
                ? (function (t) {
                    return function () {
                      return null == (n = t.apply(this, arguments))
                        ? []
                        : Array.isArray(n)
                        ? n
                        : Array.from(n);
                      var n;
                    };
                  })(t)
                : s(t);
            for (
              var n = this._groups, e = n.length, r = [], i = [], o = 0;
              o < e;
              ++o
            )
              for (var a, l = n[o], u = l.length, c = 0; c < u; ++c)
                (a = l[c]) && (r.push(t.call(a, a.__data__, c, l)), i.push(a));
            return new dt(r, i);
          },
          selectChild: function (t) {
            return this.select(
              null == t
                ? h
                : (function (t) {
                    return function () {
                      return c.call(this.children, t);
                    };
                  })('function' == typeof t ? t : u(t))
            );
          },
          selectChildren: function (t) {
            return this.selectAll(
              null == t
                ? d
                : (function (t) {
                    return function () {
                      return f.call(this.children, t);
                    };
                  })('function' == typeof t ? t : u(t))
            );
          },
          filter: function (t) {
            'function' != typeof t && (t = l(t));
            for (
              var n = this._groups, e = n.length, r = new Array(e), i = 0;
              i < e;
              ++i
            )
              for (
                var o, a = n[i], s = a.length, u = (r[i] = []), c = 0;
                c < s;
                ++c
              )
                (o = a[c]) && t.call(o, o.__data__, c, a) && u.push(o);
            return new dt(r, this._parents);
          },
          data: function (t, n) {
            if (!arguments.length) return Array.from(this, y);
            var e,
              r = n ? g : v,
              i = this._parents,
              o = this._groups;
            'function' != typeof t &&
              ((e = t),
              (t = function () {
                return e;
              }));
            for (
              var a = o.length,
                s = new Array(a),
                l = new Array(a),
                u = new Array(a),
                c = 0;
              c < a;
              ++c
            ) {
              var h = i[c],
                f = o[c],
                d = f.length,
                p = _(t.call(h, h && h.__data__, c, i)),
                m = p.length,
                w = (l[c] = new Array(m)),
                b = (s[c] = new Array(m));
              r(h, f, w, b, (u[c] = new Array(d)), p, n);
              for (var x, $, k = 0, E = 0; k < m; ++k)
                if ((x = w[k])) {
                  for (k >= E && (E = k + 1); !($ = b[E]) && ++E < m; );
                  x._next = $ || null;
                }
            }
            return ((s = new dt(s, i))._enter = l), (s._exit = u), s;
          },
          enter: function () {
            return new dt(this._enter || this._groups.map(p), this._parents);
          },
          exit: function () {
            return new dt(this._exit || this._groups.map(p), this._parents);
          },
          join: function (t, n, e) {
            var r = this.enter(),
              i = this,
              o = this.exit();
            return (
              'function' == typeof t
                ? (r = t(r)) && (r = r.selection())
                : (r = r.append(t + '')),
              null != n && (i = n(i)) && (i = i.selection()),
              null == e ? o.remove() : e(o),
              r && i ? r.merge(i).order() : i
            );
          },
          merge: function (t) {
            for (
              var n = t.selection ? t.selection() : t,
                e = this._groups,
                r = n._groups,
                i = e.length,
                o = r.length,
                a = Math.min(i, o),
                s = new Array(i),
                l = 0;
              l < a;
              ++l
            )
              for (
                var u,
                  c = e[l],
                  h = r[l],
                  f = c.length,
                  d = (s[l] = new Array(f)),
                  p = 0;
                p < f;
                ++p
              )
                (u = c[p] || h[p]) && (d[p] = u);
            for (; l < i; ++l) s[l] = e[l];
            return new dt(s, this._parents);
          },
          selection: function () {
            return this;
          },
          order: function () {
            for (var t = this._groups, n = -1, e = t.length; ++n < e; )
              for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; )
                (r = i[o]) &&
                  (a &&
                    4 ^ r.compareDocumentPosition(a) &&
                    a.parentNode.insertBefore(r, a),
                  (a = r));
            return this;
          },
          sort: function (t) {
            function n(n, e) {
              return n && e ? t(n.__data__, e.__data__) : !n - !e;
            }
            t || (t = w);
            for (
              var e = this._groups, r = e.length, i = new Array(r), o = 0;
              o < r;
              ++o
            ) {
              for (
                var a, s = e[o], l = s.length, u = (i[o] = new Array(l)), c = 0;
                c < l;
                ++c
              )
                (a = s[c]) && (u[c] = a);
              u.sort(n);
            }
            return new dt(i, this._parents).order();
          },
          call: function () {
            var t = arguments[0];
            return (arguments[0] = this), t.apply(null, arguments), this;
          },
          nodes: function () {
            return Array.from(this);
          },
          node: function () {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
              for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                var a = r[i];
                if (a) return a;
              }
            return null;
          },
          size: function () {
            let t = 0;
            for (const n of this) ++t;
            return t;
          },
          empty: function () {
            return !this.node();
          },
          each: function (t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
              for (var i, o = n[e], a = 0, s = o.length; a < s; ++a)
                (i = o[a]) && t.call(i, i.__data__, a, o);
            return this;
          },
          attr: function (t, n) {
            var e = $(t);
            if (arguments.length < 2) {
              var r = this.node();
              return e.local
                ? r.getAttributeNS(e.space, e.local)
                : r.getAttribute(e);
            }
            return this.each(
              (null == n
                ? e.local
                  ? E
                  : k
                : 'function' == typeof n
                ? e.local
                  ? N
                  : A
                : e.local
                ? L
                : j)(e, n)
            );
          },
          style: function (t, n, e) {
            return arguments.length > 1
              ? this.each(
                  (null == n ? S : 'function' == typeof n ? T : I)(
                    t,
                    n,
                    null == e ? '' : e
                  )
                )
              : R(this.node(), t);
          },
          property: function (t, n) {
            return arguments.length > 1
              ? this.each(
                  (null == n ? q : 'function' == typeof n ? B : M)(t, n)
                )
              : this.node()[t];
          },
          classed: function (t, n) {
            var e = O(t + '');
            if (arguments.length < 2) {
              for (var r = z(this.node()), i = -1, o = e.length; ++i < o; )
                if (!r.contains(e[i])) return !1;
              return !0;
            }
            return this.each(('function' == typeof n ? G : n ? D : X)(e, n));
          },
          text: function (t) {
            return arguments.length
              ? this.each(null == t ? V : ('function' == typeof t ? U : Y)(t))
              : this.node().textContent;
          },
          html: function (t) {
            return arguments.length
              ? this.each(null == t ? F : ('function' == typeof t ? K : W)(t))
              : this.node().innerHTML;
          },
          raise: function () {
            return this.each(J);
          },
          lower: function () {
            return this.each(Q);
          },
          append: function (t) {
            var n = 'function' == typeof t ? t : et(t);
            return this.select(function () {
              return this.appendChild(n.apply(this, arguments));
            });
          },
          insert: function (t, n) {
            var e = 'function' == typeof t ? t : et(t),
              r = null == n ? rt : 'function' == typeof n ? n : o(n);
            return this.select(function () {
              return this.insertBefore(
                e.apply(this, arguments),
                r.apply(this, arguments) || null
              );
            });
          },
          remove: function () {
            return this.each(it);
          },
          clone: function (t) {
            return this.select(t ? at : ot);
          },
          datum: function (t) {
            return arguments.length
              ? this.property('__data__', t)
              : this.node().__data__;
          },
          on: function (t, n, e) {
            var r,
              i,
              o = (function (t) {
                return t
                  .trim()
                  .split(/^|\s+/)
                  .map(function (t) {
                    var n = '',
                      e = t.indexOf('.');
                    return (
                      e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                      { type: t, name: n }
                    );
                  });
              })(t + ''),
              a = o.length;
            if (!(arguments.length < 2)) {
              for (s = n ? lt : st, r = 0; r < a; ++r) this.each(s(o[r], n, e));
              return this;
            }
            var s = this.node().__on;
            if (s)
              for (var l, u = 0, c = s.length; u < c; ++u)
                for (r = 0, l = s[u]; r < a; ++r)
                  if ((i = o[r]).type === l.type && i.name === l.name)
                    return l.value;
          },
          dispatch: function (t, n) {
            return this.each(('function' == typeof n ? ht : ct)(t, n));
          },
          [Symbol.iterator]: function* () {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
              for (var r, i = t[n], o = 0, a = i.length; o < a; ++o)
                (r = i[o]) && (yield r);
          },
        };
        const mt = pt;
        var vt = { value: () => {} };
        function gt() {
          for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + '') || t in r || /[\s.]/.test(t))
              throw new Error('illegal type: ' + t);
            r[t] = [];
          }
          return new yt(r);
        }
        function yt(t) {
          this._ = t;
        }
        function _t(t, n) {
          for (var e, r = 0, i = t.length; r < i; ++r)
            if ((e = t[r]).name === n) return e.value;
        }
        function wt(t, n, e) {
          for (var r = 0, i = t.length; r < i; ++r)
            if (t[r].name === n) {
              (t[r] = vt), (t = t.slice(0, r).concat(t.slice(r + 1)));
              break;
            }
          return null != e && t.push({ name: n, value: e }), t;
        }
        yt.prototype = gt.prototype = {
          constructor: yt,
          on: function (t, n) {
            var e,
              r,
              i = this._,
              o =
                ((r = i),
                (t + '')
                  .trim()
                  .split(/^|\s+/)
                  .map(function (t) {
                    var n = '',
                      e = t.indexOf('.');
                    if (
                      (e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                      t && !r.hasOwnProperty(t))
                    )
                      throw new Error('unknown type: ' + t);
                    return { type: t, name: n };
                  })),
              a = -1,
              s = o.length;
            if (!(arguments.length < 2)) {
              if (null != n && 'function' != typeof n)
                throw new Error('invalid callback: ' + n);
              for (; ++a < s; )
                if ((e = (t = o[a]).type)) i[e] = wt(i[e], t.name, n);
                else if (null == n) for (e in i) i[e] = wt(i[e], t.name, null);
              return this;
            }
            for (; ++a < s; )
              if ((e = (t = o[a]).type) && (e = _t(i[e], t.name))) return e;
          },
          copy: function () {
            var t = {},
              n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new yt(t);
          },
          call: function (t, n) {
            if ((e = arguments.length - 2) > 0)
              for (var e, r, i = new Array(e), o = 0; o < e; ++o)
                i[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t))
              throw new Error('unknown type: ' + t);
            for (o = 0, e = (r = this._[t]).length; o < e; ++o)
              r[o].value.apply(n, i);
          },
          apply: function (t, n, e) {
            if (!this._.hasOwnProperty(t))
              throw new Error('unknown type: ' + t);
            for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
              r[i].value.apply(n, e);
          },
        };
        const bt = gt;
        var xt,
          $t,
          kt = 0,
          Et = 0,
          jt = 0,
          Lt = 1e3,
          At = 0,
          Nt = 0,
          Ct = 0,
          St =
            'object' == typeof performance && performance.now
              ? performance
              : Date,
          It =
            'object' == typeof window && window.requestAnimationFrame
              ? window.requestAnimationFrame.bind(window)
              : function (t) {
                  setTimeout(t, 17);
                };
        function Tt() {
          return Nt || (It(Rt), (Nt = St.now() + Ct));
        }
        function Rt() {
          Nt = 0;
        }
        function qt() {
          this._call = this._time = this._next = null;
        }
        function Mt(t, n, e) {
          var r = new qt();
          return r.restart(t, n, e), r;
        }
        function Bt() {
          (Nt = (At = St.now()) + Ct), (kt = Et = 0);
          try {
            !(function () {
              Tt(), ++kt;
              for (var t, n = xt; n; )
                (t = Nt - n._time) >= 0 && n._call.call(void 0, t),
                  (n = n._next);
              --kt;
            })();
          } finally {
            (kt = 0),
              (function () {
                for (var t, n, e = xt, r = 1 / 0; e; )
                  e._call
                    ? (r > e._time && (r = e._time), (t = e), (e = e._next))
                    : ((n = e._next),
                      (e._next = null),
                      (e = t ? (t._next = n) : (xt = n)));
                ($t = t), zt(r);
              })(),
              (Nt = 0);
          }
        }
        function Ot() {
          var t = St.now(),
            n = t - At;
          n > Lt && ((Ct -= n), (At = t));
        }
        function zt(t) {
          kt ||
            (Et && (Et = clearTimeout(Et)),
            t - Nt > 24
              ? (t < 1 / 0 && (Et = setTimeout(Bt, t - St.now() - Ct)),
                jt && (jt = clearInterval(jt)))
              : (jt || ((At = St.now()), (jt = setInterval(Ot, Lt))),
                (kt = 1),
                It(Bt)));
        }
        function Ht(t, n, e) {
          var r = new qt();
          return (
            (n = null == n ? 0 : +n),
            r.restart(
              (e) => {
                r.stop(), t(e + n);
              },
              n,
              e
            ),
            r
          );
        }
        qt.prototype = Mt.prototype = {
          constructor: qt,
          restart: function (t, n, e) {
            if ('function' != typeof t)
              throw new TypeError('callback is not a function');
            (e = (null == e ? Tt() : +e) + (null == n ? 0 : +n)),
              this._next ||
                $t === this ||
                ($t ? ($t._next = this) : (xt = this), ($t = this)),
              (this._call = t),
              (this._time = e),
              zt();
          },
          stop: function () {
            this._call && ((this._call = null), (this._time = 1 / 0), zt());
          },
        };
        var Zt = bt('start', 'end', 'cancel', 'interrupt'),
          Pt = [],
          Dt = 0,
          Xt = 3;
        function Gt(t, n, e, r, i, o) {
          var a = t.__transition;
          if (a) {
            if (e in a) return;
          } else t.__transition = {};
          !(function (t, n, e) {
            var r,
              i = t.__transition;
            function o(l) {
              var u, c, h, f;
              if (1 !== e.state) return s();
              for (u in i)
                if ((f = i[u]).name === e.name) {
                  if (f.state === Xt) return Ht(o);
                  4 === f.state
                    ? ((f.state = 6),
                      f.timer.stop(),
                      f.on.call('interrupt', t, t.__data__, f.index, f.group),
                      delete i[u])
                    : +u < n &&
                      ((f.state = 6),
                      f.timer.stop(),
                      f.on.call('cancel', t, t.__data__, f.index, f.group),
                      delete i[u]);
                }
              if (
                (Ht(function () {
                  e.state === Xt &&
                    ((e.state = 4), e.timer.restart(a, e.delay, e.time), a(l));
                }),
                (e.state = 2),
                e.on.call('start', t, t.__data__, e.index, e.group),
                2 === e.state)
              ) {
                for (
                  e.state = Xt,
                    r = new Array((h = e.tween.length)),
                    u = 0,
                    c = -1;
                  u < h;
                  ++u
                )
                  (f = e.tween[u].value.call(
                    t,
                    t.__data__,
                    e.index,
                    e.group
                  )) && (r[++c] = f);
                r.length = c + 1;
              }
            }
            function a(n) {
              for (
                var i =
                    n < e.duration
                      ? e.ease.call(null, n / e.duration)
                      : (e.timer.restart(s), (e.state = 5), 1),
                  o = -1,
                  a = r.length;
                ++o < a;

              )
                r[o].call(t, i);
              5 === e.state &&
                (e.on.call('end', t, t.__data__, e.index, e.group), s());
            }
            function s() {
              for (var r in ((e.state = 6), e.timer.stop(), delete i[n], i))
                return;
              delete t.__transition;
            }
            (i[n] = e),
              (e.timer = Mt(
                function (t) {
                  (e.state = 1),
                    e.timer.restart(o, e.delay, e.time),
                    e.delay <= t && o(t - e.delay);
                },
                0,
                e.time
              ));
          })(t, e, {
            name: n,
            index: r,
            group: i,
            on: Zt,
            tween: Pt,
            time: o.time,
            delay: o.delay,
            duration: o.duration,
            ease: o.ease,
            timer: null,
            state: Dt,
          });
        }
        function Vt(t, n) {
          var e = Ut(t, n);
          if (e.state > Dt) throw new Error('too late; already scheduled');
          return e;
        }
        function Yt(t, n) {
          var e = Ut(t, n);
          if (e.state > Xt) throw new Error('too late; already running');
          return e;
        }
        function Ut(t, n) {
          var e = t.__transition;
          if (!e || !(e = e[n])) throw new Error('transition not found');
          return e;
        }
        function Ft(t, n) {
          return (
            (t = +t),
            (n = +n),
            function (e) {
              return t * (1 - e) + n * e;
            }
          );
        }
        var Wt,
          Kt = 180 / Math.PI,
          Jt = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1,
          };
        function Qt(t, n, e, r, i, o) {
          var a, s, l;
          return (
            (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
            (l = t * e + n * r) && ((e -= t * l), (r -= n * l)),
            (s = Math.sqrt(e * e + r * r)) && ((e /= s), (r /= s), (l /= s)),
            t * r < n * e && ((t = -t), (n = -n), (l = -l), (a = -a)),
            {
              translateX: i,
              translateY: o,
              rotate: Math.atan2(n, t) * Kt,
              skewX: Math.atan(l) * Kt,
              scaleX: a,
              scaleY: s,
            }
          );
        }
        function tn(t, n, e, r) {
          function i(t) {
            return t.length ? t.pop() + ' ' : '';
          }
          return function (o, a) {
            var s = [],
              l = [];
            return (
              (o = t(o)),
              (a = t(a)),
              (function (t, r, i, o, a, s) {
                if (t !== i || r !== o) {
                  var l = a.push('translate(', null, n, null, e);
                  s.push({ i: l - 4, x: Ft(t, i) }, { i: l - 2, x: Ft(r, o) });
                } else (i || o) && a.push('translate(' + i + n + o + e);
              })(o.translateX, o.translateY, a.translateX, a.translateY, s, l),
              (function (t, n, e, o) {
                t !== n
                  ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                    o.push({
                      i: e.push(i(e) + 'rotate(', null, r) - 2,
                      x: Ft(t, n),
                    }))
                  : n && e.push(i(e) + 'rotate(' + n + r);
              })(o.rotate, a.rotate, s, l),
              (function (t, n, e, o) {
                t !== n
                  ? o.push({
                      i: e.push(i(e) + 'skewX(', null, r) - 2,
                      x: Ft(t, n),
                    })
                  : n && e.push(i(e) + 'skewX(' + n + r);
              })(o.skewX, a.skewX, s, l),
              (function (t, n, e, r, o, a) {
                if (t !== e || n !== r) {
                  var s = o.push(i(o) + 'scale(', null, ',', null, ')');
                  a.push({ i: s - 4, x: Ft(t, e) }, { i: s - 2, x: Ft(n, r) });
                } else
                  (1 === e && 1 === r) ||
                    o.push(i(o) + 'scale(' + e + ',' + r + ')');
              })(o.scaleX, o.scaleY, a.scaleX, a.scaleY, s, l),
              (o = a = null),
              function (t) {
                for (var n, e = -1, r = l.length; ++e < r; )
                  s[(n = l[e]).i] = n.x(t);
                return s.join('');
              }
            );
          };
        }
        var nn = tn(
            function (t) {
              const n = new (
                'function' == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
              )(t + '');
              return n.isIdentity ? Jt : Qt(n.a, n.b, n.c, n.d, n.e, n.f);
            },
            'px, ',
            'px)',
            'deg)'
          ),
          en = tn(
            function (t) {
              return null == t
                ? Jt
                : (Wt ||
                    (Wt = document.createElementNS(
                      'http://www.w3.org/2000/svg',
                      'g'
                    )),
                  Wt.setAttribute('transform', t),
                  (t = Wt.transform.baseVal.consolidate())
                    ? Qt((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
                    : Jt);
            },
            ', ',
            ')',
            ')'
          );
        function rn(t, n) {
          var e, r;
          return function () {
            var i = Yt(this, t),
              o = i.tween;
            if (o !== e)
              for (var a = 0, s = (r = e = o).length; a < s; ++a)
                if (r[a].name === n) {
                  (r = r.slice()).splice(a, 1);
                  break;
                }
            i.tween = r;
          };
        }
        function on(t, n, e) {
          var r, i;
          if ('function' != typeof e) throw new Error();
          return function () {
            var o = Yt(this, t),
              a = o.tween;
            if (a !== r) {
              i = (r = a).slice();
              for (
                var s = { name: n, value: e }, l = 0, u = i.length;
                l < u;
                ++l
              )
                if (i[l].name === n) {
                  i[l] = s;
                  break;
                }
              l === u && i.push(s);
            }
            o.tween = i;
          };
        }
        function an(t, n, e) {
          var r = t._id;
          return (
            t.each(function () {
              var t = Yt(this, r);
              (t.value || (t.value = {}))[n] = e.apply(this, arguments);
            }),
            function (t) {
              return Ut(t, r).value[n];
            }
          );
        }
        function sn(t, n, e) {
          (t.prototype = n.prototype = e), (e.constructor = t);
        }
        function ln(t, n) {
          var e = Object.create(t.prototype);
          for (var r in n) e[r] = n[r];
          return e;
        }
        function un() {}
        var cn = 0.7,
          hn = 1 / cn,
          fn = '\\s*([+-]?\\d+)\\s*',
          dn = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
          pn = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
          mn = /^#([0-9a-f]{3,8})$/,
          vn = new RegExp(`^rgb\\(${fn},${fn},${fn}\\)$`),
          gn = new RegExp(`^rgb\\(${pn},${pn},${pn}\\)$`),
          yn = new RegExp(`^rgba\\(${fn},${fn},${fn},${dn}\\)$`),
          _n = new RegExp(`^rgba\\(${pn},${pn},${pn},${dn}\\)$`),
          wn = new RegExp(`^hsl\\(${dn},${pn},${pn}\\)$`),
          bn = new RegExp(`^hsla\\(${dn},${pn},${pn},${dn}\\)$`),
          xn = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        function $n() {
          return this.rgb().formatHex();
        }
        function kn() {
          return this.rgb().formatRgb();
        }
        function En(t) {
          var n, e;
          return (
            (t = (t + '').trim().toLowerCase()),
            (n = mn.exec(t))
              ? ((e = n[1].length),
                (n = parseInt(n[1], 16)),
                6 === e
                  ? jn(n)
                  : 3 === e
                  ? new Nn(
                      ((n >> 8) & 15) | ((n >> 4) & 240),
                      ((n >> 4) & 15) | (240 & n),
                      ((15 & n) << 4) | (15 & n),
                      1
                    )
                  : 8 === e
                  ? Ln(
                      (n >> 24) & 255,
                      (n >> 16) & 255,
                      (n >> 8) & 255,
                      (255 & n) / 255
                    )
                  : 4 === e
                  ? Ln(
                      ((n >> 12) & 15) | ((n >> 8) & 240),
                      ((n >> 8) & 15) | ((n >> 4) & 240),
                      ((n >> 4) & 15) | (240 & n),
                      (((15 & n) << 4) | (15 & n)) / 255
                    )
                  : null)
              : (n = vn.exec(t))
              ? new Nn(n[1], n[2], n[3], 1)
              : (n = gn.exec(t))
              ? new Nn(
                  (255 * n[1]) / 100,
                  (255 * n[2]) / 100,
                  (255 * n[3]) / 100,
                  1
                )
              : (n = yn.exec(t))
              ? Ln(n[1], n[2], n[3], n[4])
              : (n = _n.exec(t))
              ? Ln(
                  (255 * n[1]) / 100,
                  (255 * n[2]) / 100,
                  (255 * n[3]) / 100,
                  n[4]
                )
              : (n = wn.exec(t))
              ? qn(n[1], n[2] / 100, n[3] / 100, 1)
              : (n = bn.exec(t))
              ? qn(n[1], n[2] / 100, n[3] / 100, n[4])
              : xn.hasOwnProperty(t)
              ? jn(xn[t])
              : 'transparent' === t
              ? new Nn(NaN, NaN, NaN, 0)
              : null
          );
        }
        function jn(t) {
          return new Nn((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
        }
        function Ln(t, n, e, r) {
          return r <= 0 && (t = n = e = NaN), new Nn(t, n, e, r);
        }
        function An(t, n, e, r) {
          return 1 === arguments.length
            ? ((i = t) instanceof un || (i = En(i)),
              i ? new Nn((i = i.rgb()).r, i.g, i.b, i.opacity) : new Nn())
            : new Nn(t, n, e, null == r ? 1 : r);
          var i;
        }
        function Nn(t, n, e, r) {
          (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
        }
        function Cn() {
          return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}`;
        }
        function Sn() {
          const t = In(this.opacity);
          return `${1 === t ? 'rgb(' : 'rgba('}${Tn(this.r)}, ${Tn(
            this.g
          )}, ${Tn(this.b)}${1 === t ? ')' : `, ${t})`}`;
        }
        function In(t) {
          return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
        }
        function Tn(t) {
          return Math.max(0, Math.min(255, Math.round(t) || 0));
        }
        function Rn(t) {
          return ((t = Tn(t)) < 16 ? '0' : '') + t.toString(16);
        }
        function qn(t, n, e, r) {
          return (
            r <= 0
              ? (t = n = e = NaN)
              : e <= 0 || e >= 1
              ? (t = n = NaN)
              : n <= 0 && (t = NaN),
            new Bn(t, n, e, r)
          );
        }
        function Mn(t) {
          if (t instanceof Bn) return new Bn(t.h, t.s, t.l, t.opacity);
          if ((t instanceof un || (t = En(t)), !t)) return new Bn();
          if (t instanceof Bn) return t;
          var n = (t = t.rgb()).r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = Math.min(n, e, r),
            o = Math.max(n, e, r),
            a = NaN,
            s = o - i,
            l = (o + i) / 2;
          return (
            s
              ? ((a =
                  n === o
                    ? (e - r) / s + 6 * (e < r)
                    : e === o
                    ? (r - n) / s + 2
                    : (n - e) / s + 4),
                (s /= l < 0.5 ? o + i : 2 - o - i),
                (a *= 60))
              : (s = l > 0 && l < 1 ? 0 : a),
            new Bn(a, s, l, t.opacity)
          );
        }
        function Bn(t, n, e, r) {
          (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
        }
        function On(t) {
          return (t = (t || 0) % 360) < 0 ? t + 360 : t;
        }
        function zn(t) {
          return Math.max(0, Math.min(1, t || 0));
        }
        function Hn(t, n, e) {
          return (
            255 *
            (t < 60
              ? n + ((e - n) * t) / 60
              : t < 180
              ? e
              : t < 240
              ? n + ((e - n) * (240 - t)) / 60
              : n)
          );
        }
        function Zn(t, n, e, r, i) {
          var o = t * t,
            a = o * t;
          return (
            ((1 - 3 * t + 3 * o - a) * n +
              (4 - 6 * o + 3 * a) * e +
              (1 + 3 * t + 3 * o - 3 * a) * r +
              a * i) /
            6
          );
        }
        sn(un, En, {
          copy(t) {
            return Object.assign(new this.constructor(), this, t);
          },
          displayable() {
            return this.rgb().displayable();
          },
          hex: $n,
          formatHex: $n,
          formatHex8: function () {
            return this.rgb().formatHex8();
          },
          formatHsl: function () {
            return Mn(this).formatHsl();
          },
          formatRgb: kn,
          toString: kn,
        }),
          sn(
            Nn,
            An,
            ln(un, {
              brighter(t) {
                return (
                  (t = null == t ? hn : Math.pow(hn, t)),
                  new Nn(this.r * t, this.g * t, this.b * t, this.opacity)
                );
              },
              darker(t) {
                return (
                  (t = null == t ? cn : Math.pow(cn, t)),
                  new Nn(this.r * t, this.g * t, this.b * t, this.opacity)
                );
              },
              rgb() {
                return this;
              },
              clamp() {
                return new Nn(
                  Tn(this.r),
                  Tn(this.g),
                  Tn(this.b),
                  In(this.opacity)
                );
              },
              displayable() {
                return (
                  -0.5 <= this.r &&
                  this.r < 255.5 &&
                  -0.5 <= this.g &&
                  this.g < 255.5 &&
                  -0.5 <= this.b &&
                  this.b < 255.5 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              hex: Cn,
              formatHex: Cn,
              formatHex8: function () {
                return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}${Rn(
                  255 * (isNaN(this.opacity) ? 1 : this.opacity)
                )}`;
              },
              formatRgb: Sn,
              toString: Sn,
            })
          ),
          sn(
            Bn,
            function (t, n, e, r) {
              return 1 === arguments.length
                ? Mn(t)
                : new Bn(t, n, e, null == r ? 1 : r);
            },
            ln(un, {
              brighter(t) {
                return (
                  (t = null == t ? hn : Math.pow(hn, t)),
                  new Bn(this.h, this.s, this.l * t, this.opacity)
                );
              },
              darker(t) {
                return (
                  (t = null == t ? cn : Math.pow(cn, t)),
                  new Bn(this.h, this.s, this.l * t, this.opacity)
                );
              },
              rgb() {
                var t = (this.h % 360) + 360 * (this.h < 0),
                  n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                  e = this.l,
                  r = e + (e < 0.5 ? e : 1 - e) * n,
                  i = 2 * e - r;
                return new Nn(
                  Hn(t >= 240 ? t - 240 : t + 120, i, r),
                  Hn(t, i, r),
                  Hn(t < 120 ? t + 240 : t - 120, i, r),
                  this.opacity
                );
              },
              clamp() {
                return new Bn(
                  On(this.h),
                  zn(this.s),
                  zn(this.l),
                  In(this.opacity)
                );
              },
              displayable() {
                return (
                  ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                  0 <= this.l &&
                  this.l <= 1 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              formatHsl() {
                const t = In(this.opacity);
                return `${1 === t ? 'hsl(' : 'hsla('}${On(this.h)}, ${
                  100 * zn(this.s)
                }%, ${100 * zn(this.l)}%${1 === t ? ')' : `, ${t})`}`;
              },
            })
          );
        const Pn = (t) => () => t;
        function Dn(t, n) {
          var e = n - t;
          return e
            ? (function (t, n) {
                return function (e) {
                  return t + e * n;
                };
              })(t, e)
            : Pn(isNaN(t) ? n : t);
        }
        const Xn = (function t(n) {
          var e = (function (t) {
            return 1 == (t = +t)
              ? Dn
              : function (n, e) {
                  return e - n
                    ? (function (t, n, e) {
                        return (
                          (t = Math.pow(t, e)),
                          (n = Math.pow(n, e) - t),
                          (e = 1 / e),
                          function (r) {
                            return Math.pow(t + r * n, e);
                          }
                        );
                      })(n, e, t)
                    : Pn(isNaN(n) ? e : n);
                };
          })(n);
          function r(t, n) {
            var r = e((t = An(t)).r, (n = An(n)).r),
              i = e(t.g, n.g),
              o = e(t.b, n.b),
              a = Dn(t.opacity, n.opacity);
            return function (n) {
              return (
                (t.r = r(n)),
                (t.g = i(n)),
                (t.b = o(n)),
                (t.opacity = a(n)),
                t + ''
              );
            };
          }
          return (r.gamma = t), r;
        })(1);
        function Gn(t) {
          return function (n) {
            var e,
              r,
              i = n.length,
              o = new Array(i),
              a = new Array(i),
              s = new Array(i);
            for (e = 0; e < i; ++e)
              (r = An(n[e])),
                (o[e] = r.r || 0),
                (a[e] = r.g || 0),
                (s[e] = r.b || 0);
            return (
              (o = t(o)),
              (a = t(a)),
              (s = t(s)),
              (r.opacity = 1),
              function (t) {
                return (r.r = o(t)), (r.g = a(t)), (r.b = s(t)), r + '';
              }
            );
          };
        }
        Gn(function (t) {
          var n = t.length - 1;
          return function (e) {
            var r =
                e <= 0
                  ? (e = 0)
                  : e >= 1
                  ? ((e = 1), n - 1)
                  : Math.floor(e * n),
              i = t[r],
              o = t[r + 1],
              a = r > 0 ? t[r - 1] : 2 * i - o,
              s = r < n - 1 ? t[r + 2] : 2 * o - i;
            return Zn((e - r / n) * n, a, i, o, s);
          };
        }),
          Gn(function (t) {
            var n = t.length;
            return function (e) {
              var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                i = t[(r + n - 1) % n],
                o = t[r % n],
                a = t[(r + 1) % n],
                s = t[(r + 2) % n];
              return Zn((e - r / n) * n, i, o, a, s);
            };
          });
        var Vn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          Yn = new RegExp(Vn.source, 'g');
        function Un(t, n) {
          var e,
            r,
            i,
            o = (Vn.lastIndex = Yn.lastIndex = 0),
            a = -1,
            s = [],
            l = [];
          for (t += '', n += ''; (e = Vn.exec(t)) && (r = Yn.exec(n)); )
            (i = r.index) > o &&
              ((i = n.slice(o, i)), s[a] ? (s[a] += i) : (s[++a] = i)),
              (e = e[0]) === (r = r[0])
                ? s[a]
                  ? (s[a] += r)
                  : (s[++a] = r)
                : ((s[++a] = null), l.push({ i: a, x: Ft(e, r) })),
              (o = Yn.lastIndex);
          return (
            o < n.length &&
              ((i = n.slice(o)), s[a] ? (s[a] += i) : (s[++a] = i)),
            s.length < 2
              ? l[0]
                ? (function (t) {
                    return function (n) {
                      return t(n) + '';
                    };
                  })(l[0].x)
                : (function (t) {
                    return function () {
                      return t;
                    };
                  })(n)
              : ((n = l.length),
                function (t) {
                  for (var e, r = 0; r < n; ++r) s[(e = l[r]).i] = e.x(t);
                  return s.join('');
                })
          );
        }
        function Fn(t, n) {
          var e;
          return (
            'number' == typeof n
              ? Ft
              : n instanceof En
              ? Xn
              : (e = En(n))
              ? ((n = e), Xn)
              : Un
          )(t, n);
        }
        function Wn(t) {
          return function () {
            this.removeAttribute(t);
          };
        }
        function Kn(t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function Jn(t, n, e) {
          var r,
            i,
            o = e + '';
          return function () {
            var a = this.getAttribute(t);
            return a === o ? null : a === r ? i : (i = n((r = a), e));
          };
        }
        function Qn(t, n, e) {
          var r,
            i,
            o = e + '';
          return function () {
            var a = this.getAttributeNS(t.space, t.local);
            return a === o ? null : a === r ? i : (i = n((r = a), e));
          };
        }
        function te(t, n, e) {
          var r, i, o;
          return function () {
            var a,
              s,
              l = e(this);
            if (null != l)
              return (a = this.getAttribute(t)) === (s = l + '')
                ? null
                : a === r && s === i
                ? o
                : ((i = s), (o = n((r = a), l)));
            this.removeAttribute(t);
          };
        }
        function ne(t, n, e) {
          var r, i, o;
          return function () {
            var a,
              s,
              l = e(this);
            if (null != l)
              return (a = this.getAttributeNS(t.space, t.local)) ===
                (s = l + '')
                ? null
                : a === r && s === i
                ? o
                : ((i = s), (o = n((r = a), l)));
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function ee(t, n) {
          var e, r;
          function i() {
            var i = n.apply(this, arguments);
            return (
              i !== r &&
                (e =
                  (r = i) &&
                  (function (t, n) {
                    return function (e) {
                      this.setAttributeNS(t.space, t.local, n.call(this, e));
                    };
                  })(t, i)),
              e
            );
          }
          return (i._value = n), i;
        }
        function re(t, n) {
          var e, r;
          function i() {
            var i = n.apply(this, arguments);
            return (
              i !== r &&
                (e =
                  (r = i) &&
                  (function (t, n) {
                    return function (e) {
                      this.setAttribute(t, n.call(this, e));
                    };
                  })(t, i)),
              e
            );
          }
          return (i._value = n), i;
        }
        function ie(t, n) {
          return function () {
            Vt(this, t).delay = +n.apply(this, arguments);
          };
        }
        function oe(t, n) {
          return (
            (n = +n),
            function () {
              Vt(this, t).delay = n;
            }
          );
        }
        function ae(t, n) {
          return function () {
            Yt(this, t).duration = +n.apply(this, arguments);
          };
        }
        function se(t, n) {
          return (
            (n = +n),
            function () {
              Yt(this, t).duration = n;
            }
          );
        }
        var le = mt.prototype.constructor;
        function ue(t) {
          return function () {
            this.style.removeProperty(t);
          };
        }
        var ce = 0;
        function he(t, n, e, r) {
          (this._groups = t),
            (this._parents = n),
            (this._name = e),
            (this._id = r);
        }
        function fe() {
          return ++ce;
        }
        var de = mt.prototype;
        he.prototype = function (t) {
          return mt().transition(t);
        }.prototype = {
          constructor: he,
          select: function (t) {
            var n = this._name,
              e = this._id;
            'function' != typeof t && (t = o(t));
            for (
              var r = this._groups, i = r.length, a = new Array(i), s = 0;
              s < i;
              ++s
            )
              for (
                var l,
                  u,
                  c = r[s],
                  h = c.length,
                  f = (a[s] = new Array(h)),
                  d = 0;
                d < h;
                ++d
              )
                (l = c[d]) &&
                  (u = t.call(l, l.__data__, d, c)) &&
                  ('__data__' in l && (u.__data__ = l.__data__),
                  (f[d] = u),
                  Gt(f[d], n, e, d, f, Ut(l, e)));
            return new he(a, this._parents, n, e);
          },
          selectAll: function (t) {
            var n = this._name,
              e = this._id;
            'function' != typeof t && (t = s(t));
            for (
              var r = this._groups, i = r.length, o = [], a = [], l = 0;
              l < i;
              ++l
            )
              for (var u, c = r[l], h = c.length, f = 0; f < h; ++f)
                if ((u = c[f])) {
                  for (
                    var d,
                      p = t.call(u, u.__data__, f, c),
                      m = Ut(u, e),
                      v = 0,
                      g = p.length;
                    v < g;
                    ++v
                  )
                    (d = p[v]) && Gt(d, n, e, v, p, m);
                  o.push(p), a.push(u);
                }
            return new he(o, a, n, e);
          },
          selectChild: de.selectChild,
          selectChildren: de.selectChildren,
          filter: function (t) {
            'function' != typeof t && (t = l(t));
            for (
              var n = this._groups, e = n.length, r = new Array(e), i = 0;
              i < e;
              ++i
            )
              for (
                var o, a = n[i], s = a.length, u = (r[i] = []), c = 0;
                c < s;
                ++c
              )
                (o = a[c]) && t.call(o, o.__data__, c, a) && u.push(o);
            return new he(r, this._parents, this._name, this._id);
          },
          merge: function (t) {
            if (t._id !== this._id) throw new Error();
            for (
              var n = this._groups,
                e = t._groups,
                r = n.length,
                i = e.length,
                o = Math.min(r, i),
                a = new Array(r),
                s = 0;
              s < o;
              ++s
            )
              for (
                var l,
                  u = n[s],
                  c = e[s],
                  h = u.length,
                  f = (a[s] = new Array(h)),
                  d = 0;
                d < h;
                ++d
              )
                (l = u[d] || c[d]) && (f[d] = l);
            for (; s < r; ++s) a[s] = n[s];
            return new he(a, this._parents, this._name, this._id);
          },
          selection: function () {
            return new le(this._groups, this._parents);
          },
          transition: function () {
            for (
              var t = this._name,
                n = this._id,
                e = fe(),
                r = this._groups,
                i = r.length,
                o = 0;
              o < i;
              ++o
            )
              for (var a, s = r[o], l = s.length, u = 0; u < l; ++u)
                if ((a = s[u])) {
                  var c = Ut(a, n);
                  Gt(a, t, e, u, s, {
                    time: c.time + c.delay + c.duration,
                    delay: 0,
                    duration: c.duration,
                    ease: c.ease,
                  });
                }
            return new he(r, this._parents, t, e);
          },
          call: de.call,
          nodes: de.nodes,
          node: de.node,
          size: de.size,
          empty: de.empty,
          each: de.each,
          on: function (t, n) {
            var e = this._id;
            return arguments.length < 2
              ? Ut(this.node(), e).on.on(t)
              : this.each(
                  (function (t, n, e) {
                    var r,
                      i,
                      o = (function (t) {
                        return (t + '')
                          .trim()
                          .split(/^|\s+/)
                          .every(function (t) {
                            var n = t.indexOf('.');
                            return (
                              n >= 0 && (t = t.slice(0, n)), !t || 'start' === t
                            );
                          });
                      })(n)
                        ? Vt
                        : Yt;
                    return function () {
                      var a = o(this, t),
                        s = a.on;
                      s !== r && (i = (r = s).copy()).on(n, e), (a.on = i);
                    };
                  })(e, t, n)
                );
          },
          attr: function (t, n) {
            var e = $(t),
              r = 'transform' === e ? en : Fn;
            return this.attrTween(
              t,
              'function' == typeof n
                ? (e.local ? ne : te)(e, r, an(this, 'attr.' + t, n))
                : null == n
                ? (e.local ? Kn : Wn)(e)
                : (e.local ? Qn : Jn)(e, r, n)
            );
          },
          attrTween: function (t, n) {
            var e = 'attr.' + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ('function' != typeof n) throw new Error();
            var r = $(t);
            return this.tween(e, (r.local ? ee : re)(r, n));
          },
          style: function (t, n, e) {
            var r = 'transform' == (t += '') ? nn : Fn;
            return null == n
              ? this.styleTween(
                  t,
                  (function (t, n) {
                    var e, r, i;
                    return function () {
                      var o = R(this, t),
                        a = (this.style.removeProperty(t), R(this, t));
                      return o === a
                        ? null
                        : o === e && a === r
                        ? i
                        : (i = n((e = o), (r = a)));
                    };
                  })(t, r)
                ).on('end.style.' + t, ue(t))
              : 'function' == typeof n
              ? this.styleTween(
                  t,
                  (function (t, n, e) {
                    var r, i, o;
                    return function () {
                      var a = R(this, t),
                        s = e(this),
                        l = s + '';
                      return (
                        null == s &&
                          (this.style.removeProperty(t), (l = s = R(this, t))),
                        a === l
                          ? null
                          : a === r && l === i
                          ? o
                          : ((i = l), (o = n((r = a), s)))
                      );
                    };
                  })(t, r, an(this, 'style.' + t, n))
                ).each(
                  (function (t, n) {
                    var e,
                      r,
                      i,
                      o,
                      a = 'style.' + n,
                      s = 'end.' + a;
                    return function () {
                      var l = Yt(this, t),
                        u = l.on,
                        c = null == l.value[a] ? o || (o = ue(n)) : void 0;
                      (u === e && i === c) ||
                        (r = (e = u).copy()).on(s, (i = c)),
                        (l.on = r);
                    };
                  })(this._id, t)
                )
              : this.styleTween(
                  t,
                  (function (t, n, e) {
                    var r,
                      i,
                      o = e + '';
                    return function () {
                      var a = R(this, t);
                      return a === o ? null : a === r ? i : (i = n((r = a), e));
                    };
                  })(t, r, n),
                  e
                ).on('end.style.' + t, null);
          },
          styleTween: function (t, n, e) {
            var r = 'style.' + (t += '');
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ('function' != typeof n) throw new Error();
            return this.tween(
              r,
              (function (t, n, e) {
                var r, i;
                function o() {
                  var o = n.apply(this, arguments);
                  return (
                    o !== i &&
                      (r =
                        (i = o) &&
                        (function (t, n, e) {
                          return function (r) {
                            this.style.setProperty(t, n.call(this, r), e);
                          };
                        })(t, o, e)),
                    r
                  );
                }
                return (o._value = n), o;
              })(t, n, null == e ? '' : e)
            );
          },
          text: function (t) {
            return this.tween(
              'text',
              'function' == typeof t
                ? (function (t) {
                    return function () {
                      var n = t(this);
                      this.textContent = null == n ? '' : n;
                    };
                  })(an(this, 'text', t))
                : (function (t) {
                    return function () {
                      this.textContent = t;
                    };
                  })(null == t ? '' : t + '')
            );
          },
          textTween: function (t) {
            var n = 'text';
            if (arguments.length < 1) return (n = this.tween(n)) && n._value;
            if (null == t) return this.tween(n, null);
            if ('function' != typeof t) throw new Error();
            return this.tween(
              n,
              (function (t) {
                var n, e;
                function r() {
                  var r = t.apply(this, arguments);
                  return (
                    r !== e &&
                      (n =
                        (e = r) &&
                        (function (t) {
                          return function (n) {
                            this.textContent = t.call(this, n);
                          };
                        })(r)),
                    n
                  );
                }
                return (r._value = t), r;
              })(t)
            );
          },
          remove: function () {
            return this.on(
              'end.remove',
              (function (t) {
                return function () {
                  var n = this.parentNode;
                  for (var e in this.__transition) if (+e !== t) return;
                  n && n.removeChild(this);
                };
              })(this._id)
            );
          },
          tween: function (t, n) {
            var e = this._id;
            if (((t += ''), arguments.length < 2)) {
              for (
                var r, i = Ut(this.node(), e).tween, o = 0, a = i.length;
                o < a;
                ++o
              )
                if ((r = i[o]).name === t) return r.value;
              return null;
            }
            return this.each((null == n ? rn : on)(e, t, n));
          },
          delay: function (t) {
            var n = this._id;
            return arguments.length
              ? this.each(('function' == typeof t ? ie : oe)(n, t))
              : Ut(this.node(), n).delay;
          },
          duration: function (t) {
            var n = this._id;
            return arguments.length
              ? this.each(('function' == typeof t ? ae : se)(n, t))
              : Ut(this.node(), n).duration;
          },
          ease: function (t) {
            var n = this._id;
            return arguments.length
              ? this.each(
                  (function (t, n) {
                    if ('function' != typeof n) throw new Error();
                    return function () {
                      Yt(this, t).ease = n;
                    };
                  })(n, t)
                )
              : Ut(this.node(), n).ease;
          },
          easeVarying: function (t) {
            if ('function' != typeof t) throw new Error();
            return this.each(
              (function (t, n) {
                return function () {
                  var e = n.apply(this, arguments);
                  if ('function' != typeof e) throw new Error();
                  Yt(this, t).ease = e;
                };
              })(this._id, t)
            );
          },
          end: function () {
            var t,
              n,
              e = this,
              r = e._id,
              i = e.size();
            return new Promise(function (o, a) {
              var s = { value: a },
                l = {
                  value: function () {
                    0 == --i && o();
                  },
                };
              e.each(function () {
                var e = Yt(this, r),
                  i = e.on;
                i !== t &&
                  ((n = (t = i).copy())._.cancel.push(s),
                  n._.interrupt.push(s),
                  n._.end.push(l)),
                  (e.on = n);
              }),
                0 === i && o();
            });
          },
          [Symbol.iterator]: de[Symbol.iterator],
        };
        var pe = {
          time: null,
          delay: 0,
          duration: 250,
          ease: function (t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
          },
        };
        function me(t, n) {
          for (var e; !(e = t.__transition) || !(e = e[n]); )
            if (!(t = t.parentNode))
              throw new Error(`transition ${n} not found`);
          return e;
        }
        (mt.prototype.interrupt = function (t) {
          return this.each(function () {
            !(function (t, n) {
              var e,
                r,
                i,
                o = t.__transition,
                a = !0;
              if (o) {
                for (i in ((n = null == n ? null : n + ''), o))
                  (e = o[i]).name === n
                    ? ((r = e.state > 2 && e.state < 5),
                      (e.state = 6),
                      e.timer.stop(),
                      e.on.call(
                        r ? 'interrupt' : 'cancel',
                        t,
                        t.__data__,
                        e.index,
                        e.group
                      ),
                      delete o[i])
                    : (a = !1);
                a && delete t.__transition;
              }
            })(this, t);
          });
        }),
          (mt.prototype.transition = function (t) {
            var n, e;
            t instanceof he
              ? ((n = t._id), (t = t._name))
              : ((n = fe()),
                ((e = pe).time = Tt()),
                (t = null == t ? null : t + ''));
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
              for (var a, s = r[o], l = s.length, u = 0; u < l; ++u)
                (a = s[u]) && Gt(a, t, n, u, s, e || me(a, n));
            return new he(r, this._parents, t, n);
          });
        const { abs: ve, max: ge, min: ye } = Math;
        function _e(t) {
          return { type: t };
        }
        function we(t) {
          var n = 0,
            e = t.children,
            r = e && e.length;
          if (r) for (; --r >= 0; ) n += e[r].value;
          else n = 1;
          t.value = n;
        }
        function be(t, n) {
          t instanceof Map
            ? ((t = [void 0, t]), void 0 === n && (n = $e))
            : void 0 === n && (n = xe);
          for (var e, r, i, o, a, s = new je(t), l = [s]; (e = l.pop()); )
            if ((i = n(e.data)) && (a = (i = Array.from(i)).length))
              for (e.children = i, o = a - 1; o >= 0; --o)
                l.push((r = i[o] = new je(i[o]))),
                  (r.parent = e),
                  (r.depth = e.depth + 1);
          return s.eachBefore(Ee);
        }
        function xe(t) {
          return t.children;
        }
        function $e(t) {
          return Array.isArray(t) ? t[1] : null;
        }
        function ke(t) {
          void 0 !== t.data.value && (t.value = t.data.value),
            (t.data = t.data.data);
        }
        function Ee(t) {
          var n = 0;
          do {
            t.height = n;
          } while ((t = t.parent) && t.height < ++n);
        }
        function je(t) {
          (this.data = t), (this.depth = this.height = 0), (this.parent = null);
        }
        function Le(t, n) {
          return t.parent === n.parent ? 1 : 2;
        }
        function Ae(t) {
          var n = t.children;
          return n ? n[0] : t.t;
        }
        function Ne(t) {
          var n = t.children;
          return n ? n[n.length - 1] : t.t;
        }
        function Ce(t, n, e) {
          var r = e / (n.i - t.i);
          (n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
        }
        function Se(t, n, e) {
          return t.a.parent === n.parent ? t.a : e;
        }
        function Ie(t, n) {
          (this._ = t),
            (this.parent = null),
            (this.children = null),
            (this.A = null),
            (this.a = this),
            (this.z = 0),
            (this.m = 0),
            (this.c = 0),
            (this.s = 0),
            (this.t = null),
            (this.i = n);
        }
        function Te(t) {
          return 'string' == typeof t
            ? new dt([[document.querySelector(t)]], [document.documentElement])
            : new dt([[t]], ft);
        }
        function Re(t, n, e) {
          (this.k = t), (this.x = n), (this.y = e);
        }
        ['w', 'e'].map(_e),
          ['n', 's'].map(_e),
          ['n', 'w', 'e', 's', 'nw', 'ne', 'sw', 'se'].map(_e),
          (je.prototype = be.prototype =
            {
              constructor: je,
              count: function () {
                return this.eachAfter(we);
              },
              each: function (t, n) {
                let e = -1;
                for (const r of this) t.call(n, r, ++e, this);
                return this;
              },
              eachAfter: function (t, n) {
                for (
                  var e, r, i, o = this, a = [o], s = [], l = -1;
                  (o = a.pop());

                )
                  if ((s.push(o), (e = o.children)))
                    for (r = 0, i = e.length; r < i; ++r) a.push(e[r]);
                for (; (o = s.pop()); ) t.call(n, o, ++l, this);
                return this;
              },
              eachBefore: function (t, n) {
                for (var e, r, i = this, o = [i], a = -1; (i = o.pop()); )
                  if ((t.call(n, i, ++a, this), (e = i.children)))
                    for (r = e.length - 1; r >= 0; --r) o.push(e[r]);
                return this;
              },
              find: function (t, n) {
                let e = -1;
                for (const r of this) if (t.call(n, r, ++e, this)) return r;
              },
              sum: function (t) {
                return this.eachAfter(function (n) {
                  for (
                    var e = +t(n.data) || 0, r = n.children, i = r && r.length;
                    --i >= 0;

                  )
                    e += r[i].value;
                  n.value = e;
                });
              },
              sort: function (t) {
                return this.eachBefore(function (n) {
                  n.children && n.children.sort(t);
                });
              },
              path: function (t) {
                for (
                  var n = this,
                    e = (function (t, n) {
                      if (t === n) return t;
                      var e = t.ancestors(),
                        r = n.ancestors(),
                        i = null;
                      for (t = e.pop(), n = r.pop(); t === n; )
                        (i = t), (t = e.pop()), (n = r.pop());
                      return i;
                    })(n, t),
                    r = [n];
                  n !== e;

                )
                  (n = n.parent), r.push(n);
                for (var i = r.length; t !== e; )
                  r.splice(i, 0, t), (t = t.parent);
                return r;
              },
              ancestors: function () {
                for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
                return n;
              },
              descendants: function () {
                return Array.from(this);
              },
              leaves: function () {
                var t = [];
                return (
                  this.eachBefore(function (n) {
                    n.children || t.push(n);
                  }),
                  t
                );
              },
              links: function () {
                var t = this,
                  n = [];
                return (
                  t.each(function (e) {
                    e !== t && n.push({ source: e.parent, target: e });
                  }),
                  n
                );
              },
              copy: function () {
                return be(this).eachBefore(ke);
              },
              [Symbol.iterator]: function* () {
                var t,
                  n,
                  e,
                  r,
                  i = this,
                  o = [i];
                do {
                  for (t = o.reverse(), o = []; (i = t.pop()); )
                    if ((yield i, (n = i.children)))
                      for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
                } while (o.length);
              },
            }),
          (Ie.prototype = Object.create(je.prototype)),
          (Re.prototype = {
            constructor: Re,
            scale: function (t) {
              return 1 === t ? this : new Re(this.k * t, this.x, this.y);
            },
            translate: function (t, n) {
              return (0 === t) & (0 === n)
                ? this
                : new Re(this.k, this.x + this.k * t, this.y + this.k * n);
            },
            apply: function (t) {
              return [t[0] * this.k + this.x, t[1] * this.k + this.y];
            },
            applyX: function (t) {
              return t * this.k + this.x;
            },
            applyY: function (t) {
              return t * this.k + this.y;
            },
            invert: function (t) {
              return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
            },
            invertX: function (t) {
              return (t - this.x) / this.k;
            },
            invertY: function (t) {
              return (t - this.y) / this.k;
            },
            rescaleX: function (t) {
              return t
                .copy()
                .domain(t.range().map(this.invertX, this).map(t.invert, t));
            },
            rescaleY: function (t) {
              return t
                .copy()
                .domain(t.range().map(this.invertY, this).map(t.invert, t));
            },
            toString: function () {
              return (
                'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
              );
            },
          }),
          new Re(1, 0, 0),
          Re.prototype;
        var qe = e(568);
        function Me(t) {
          (0, r.qOq)(
            t,
            'svelte-r3jmdb',
            'g.svelte-r3jmdb{height:100%;border:10px solid yellow}'
          );
        }
        function Be(t) {
          let n, e, i, o;
          return {
            c() {
              (n = (0, r.bi5)('svg')),
                (e = (0, r.bi5)('g')),
                (i = (0, r.bi5)('g')),
                (o = (0, r.bi5)('g')),
                (0, r.Ljt)(i, 'class', 'links svelte-r3jmdb'),
                (0, r.Ljt)(o, 'class', 'nodes svelte-r3jmdb'),
                (0, r.Ljt)(e, 'transform', 'translate(0,10)'),
                (0, r.Ljt)(e, 'class', 'svelte-r3jmdb'),
                (0, r.Ljt)(n, 'id', 'tree-container');
            },
            m(t, a) {
              (0, r.$Tr)(t, n, a),
                (0, r.R3I)(n, e),
                (0, r.R3I)(e, i),
                (0, r.R3I)(e, o);
            },
            p: r.ZTd,
            i: r.ZTd,
            o: r.ZTd,
            d(t) {
              t && (0, r.ogt)(n);
            },
          };
        }
        function Oe(t) {
          return (
            (0, qe.H3)(() => {
              let t = {
                  name: 'A',
                  children: [
                    { name: 'C' },
                    { name: 'D', children: [{ name: 'F' }, { name: 'E' }] },
                    { name: 'B' },
                  ],
                },
                n = be(t).sort(
                  (t, n) =>
                    n.height - t.height ||
                    t.data.name.localeCompare(n.data.name)
                );
              (function () {
                var t = Le,
                  n = 1,
                  e = 1,
                  r = null;
                function i(i) {
                  var l = (function (t) {
                    for (
                      var n, e, r, i, o, a = new Ie(t, 0), s = [a];
                      (n = s.pop());

                    )
                      if ((r = n._.children))
                        for (
                          n.children = new Array((o = r.length)), i = o - 1;
                          i >= 0;
                          --i
                        )
                          s.push((e = n.children[i] = new Ie(r[i], i))),
                            (e.parent = n);
                    return ((a.parent = new Ie(null, 0)).children = [a]), a;
                  })(i);
                  if ((l.eachAfter(o), (l.parent.m = -l.z), l.eachBefore(a), r))
                    i.eachBefore(s);
                  else {
                    var u = i,
                      c = i,
                      h = i;
                    i.eachBefore(function (t) {
                      t.x < u.x && (u = t),
                        t.x > c.x && (c = t),
                        t.depth > h.depth && (h = t);
                    });
                    var f = u === c ? 1 : t(u, c) / 2,
                      d = f - u.x,
                      p = n / (c.x + f + d),
                      m = e / (h.depth || 1);
                    i.eachBefore(function (t) {
                      (t.x = (t.x + d) * p), (t.y = t.depth * m);
                    });
                  }
                  return i;
                }
                function o(n) {
                  var e = n.children,
                    r = n.parent.children,
                    i = n.i ? r[n.i - 1] : null;
                  if (e) {
                    !(function (t) {
                      for (
                        var n, e = 0, r = 0, i = t.children, o = i.length;
                        --o >= 0;

                      )
                        ((n = i[o]).z += e),
                          (n.m += e),
                          (e += n.s + (r += n.c));
                    })(n);
                    var o = (e[0].z + e[e.length - 1].z) / 2;
                    i
                      ? ((n.z = i.z + t(n._, i._)), (n.m = n.z - o))
                      : (n.z = o);
                  } else i && (n.z = i.z + t(n._, i._));
                  n.parent.A = (function (n, e, r) {
                    if (e) {
                      for (
                        var i,
                          o = n,
                          a = n,
                          s = e,
                          l = o.parent.children[0],
                          u = o.m,
                          c = a.m,
                          h = s.m,
                          f = l.m;
                        (s = Ne(s)), (o = Ae(o)), s && o;

                      )
                        (l = Ae(l)),
                          ((a = Ne(a)).a = n),
                          (i = s.z + h - o.z - u + t(s._, o._)) > 0 &&
                            (Ce(Se(s, n, r), n, i), (u += i), (c += i)),
                          (h += s.m),
                          (u += o.m),
                          (f += l.m),
                          (c += a.m);
                      s && !Ne(a) && ((a.t = s), (a.m += h - c)),
                        o && !Ae(l) && ((l.t = o), (l.m += u - f), (r = n));
                    }
                    return r;
                  })(n, i, n.parent.A || r[0]);
                }
                function a(t) {
                  (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
                }
                function s(t) {
                  (t.x *= n), (t.y = t.depth * e);
                }
                return (
                  (i.separation = function (n) {
                    return arguments.length ? ((t = n), i) : t;
                  }),
                  (i.size = function (t) {
                    return arguments.length
                      ? ((r = !1), (n = +t[0]), (e = +t[1]), i)
                      : r
                      ? null
                      : [n, e];
                  }),
                  (i.nodeSize = function (t) {
                    return arguments.length
                      ? ((r = !0), (n = +t[0]), (e = +t[1]), i)
                      : r
                      ? [n, e]
                      : null;
                  }),
                  i
                );
              })().size([580, 800])(n);
              let e = Te('#tree-container');
              console.log('this is the svg:', e),
                console.log('this is the root:', n),
                console.log('this is the data:', t),
                e
                  .select('g.links')
                  .selectAll('line.link')
                  .data(n.links())
                  .enter()
                  .append('line')
                  .attr('x1', function (t) {
                    return t.source.x;
                  })
                  .attr('y1', function (t) {
                    return t.source.y;
                  })
                  .attr('x2', function (t) {
                    return t.target.x;
                  })
                  .attr('y2', function (t) {
                    return t.target.y;
                  })
                  .attr('stroke', 'darkgray')
                  .attr('stroke-width', 2),
                e
                  .select('g.nodes')
                  .selectAll('circle.node')
                  .data(n.descendants())
                  .enter()
                  .append('circle')
                  .attr('cx', function (t) {
                    return t.x;
                  })
                  .attr('cy', function (t) {
                    return t.y;
                  })
                  .attr('r', 10)
                  .attr('fill', 'lightblue')
                  .attr('stroke', 'darkgray')
                  .attr('stroke-width', 1);
            }),
            []
          );
        }
        e(434), e(374), (t = e.hmd(t));
        class ze extends r.f_C {
          constructor(t) {
            super(), (0, r.S1n)(this, t, Oe, Be, r.N8, {}, Me);
          }
        }
        t && t.hot;
        const He = ze;
      },
      896: (t, n, e) => {
        e.d(n, { Z: () => u });
        var r = e(234),
          i = e(697),
          o = e(228);
        function a(t) {
          (0, r.qOq)(
            t,
            'svelte-xt1il4',
            '#main-container.svelte-xt1il4{display:flex;flex-direction:row;border:3px solid black;background-color:white;height:calc(100%);width:calc(100% - 3px)}#left-panel.svelte-xt1il4{width:65%}#right-panel.svelte-xt1il4{display:flex;flex-direction:column;width:35%;border-left:3px solid black}'
          );
        }
        function s(t) {
          let n, e, a, s, l, u, c;
          return (
            (a = new i.Z({})),
            (u = new o.Z({})),
            {
              c() {
                (n = (0, r.bGB)('div')),
                  (e = (0, r.bGB)('div')),
                  (0, r.YCL)(a.$$.fragment),
                  (s = (0, r.DhX)()),
                  (l = (0, r.bGB)('div')),
                  (0, r.YCL)(u.$$.fragment),
                  (0, r.Ljt)(e, 'id', 'left-panel'),
                  (0, r.Ljt)(e, 'class', 'svelte-xt1il4'),
                  (0, r.Ljt)(l, 'id', 'right-panel'),
                  (0, r.Ljt)(l, 'class', 'svelte-xt1il4'),
                  (0, r.Ljt)(n, 'id', 'main-container'),
                  (0, r.Ljt)(n, 'class', 'svelte-xt1il4');
              },
              m(t, i) {
                (0, r.$Tr)(t, n, i),
                  (0, r.R3I)(n, e),
                  (0, r.yef)(a, e, null),
                  (0, r.R3I)(n, s),
                  (0, r.R3I)(n, l),
                  (0, r.yef)(u, l, null),
                  (c = !0);
              },
              p: r.ZTd,
              i(t) {
                c ||
                  ((0, r.Ui)(a.$$.fragment, t),
                  (0, r.Ui)(u.$$.fragment, t),
                  (c = !0));
              },
              o(t) {
                (0, r.etI)(a.$$.fragment, t),
                  (0, r.etI)(u.$$.fragment, t),
                  (c = !1);
              },
              d(t) {
                t && (0, r.ogt)(n), (0, r.vpE)(a), (0, r.vpE)(u);
              },
            }
          );
        }
        e(434), e(374), (t = e.hmd(t));
        class l extends r.f_C {
          constructor(t) {
            super(), (0, r.S1n)(this, t, null, s, r.N8, {}, a);
          }
        }
        t && t.hot;
        const u = l;
      },
      228: (t, n, e) => {
        e.d(n, { Z: () => s });
        var r = e(234);
        function i(t) {
          (0, r.qOq)(
            t,
            'svelte-cxbltq',
            'div.svelte-cxbltq{color:black}#state-container.svelte-cxbltq{height:100%}#props-container.svelte-cxbltq{border-top:3px solid black;height:100%}'
          );
        }
        function o(t) {
          let n;
          return {
            c() {
              (n = (0, r.bGB)('div')),
                (n.innerHTML =
                  '<div id="state-container" class="svelte-cxbltq"><h3>State</h3> \n    <p>deleteAppt: <span>function deleteAppt()</span></p> \n    <p>updateAppt: <span>function updateAppt()</span></p></div> \n  <div id="props-container" class="svelte-cxbltq"><h3>Props</h3> \n    <p>apptName: <span>Lecture: System Design</span></p> \n    <p>time: <span>2:30PM</span></p> \n    <p>completed:<span>false</span></p> \n    <p>apptID:<span>54646546</span></p></div>'),
                (0, r.Ljt)(n, 'class', 'svelte-cxbltq');
            },
            m(t, e) {
              (0, r.$Tr)(t, n, e);
            },
            p: r.ZTd,
            i: r.ZTd,
            o: r.ZTd,
            d(t) {
              t && (0, r.ogt)(n);
            },
          };
        }
        e(434), e(374), (t = e.hmd(t));
        class a extends r.f_C {
          constructor(t) {
            super(), (0, r.S1n)(this, t, null, o, r.N8, {}, i);
          }
        }
        t && t.hot;
        const s = a;
      },
      528: (t, n, e) => {
        e.d(n, { Z: () => u });
        var r = e(234),
          i = e(568);
        function o(t) {
          (0, r.qOq)(
            t,
            'svelte-1aord70',
            'nav.svelte-1aord70.svelte-1aord70{display:flex;align-items:center;justify-content:space-between;width:calc(100% - 6px);height:100%;background-color:white;color:black;border:3px solid black;margin-left:-3px;padding-left:6px;margin-left:-3px}.pages.svelte-1aord70.svelte-1aord70{display:flex;align-items:center}.pages.svelte-1aord70 button.svelte-1aord70{padding:5px 30px;border-radius:5px}nav.svelte-1aord70 button.svelte-1aord70{margin:3px;box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.25);border:3px solid black;color:black;background-color:white}#diff.svelte-1aord70.svelte-1aord70{border-radius:0px 18px 18px 0px;padding:5px 21px}#state.svelte-1aord70.svelte-1aord70{border-radius:18px 0px 0px 18px;padding:5px 21px}.selected.svelte-1aord70.svelte-1aord70{background-color:black;color:white}.state-diff.svelte-1aord70.svelte-1aord70{display:flex;align-items:center;justify-content:center}'
          );
        }
        function a(t) {
          let n, e, i, o, a, s, l, u, c, h, f, d, p, m;
          return {
            c() {
              (n = (0, r.bGB)('nav')),
                (e = (0, r.bGB)('div')),
                (i = (0, r.bGB)('button')),
                (i.textContent = 'Map'),
                (o = (0, r.DhX)()),
                (a = (0, r.bGB)('button')),
                (a.textContent = 'Metrics'),
                (s = (0, r.DhX)()),
                (l = (0, r.bGB)('button')),
                (l.textContent = 'Performance'),
                (u = (0, r.DhX)()),
                (c = (0, r.bGB)('div')),
                (h = (0, r.bGB)('button')),
                (h.textContent = 'State'),
                (f = (0, r.DhX)()),
                (d = (0, r.bGB)('button')),
                (d.textContent = 'Diff'),
                (0, r.Ljt)(i, 'class', 'svelte-1aord70'),
                (0, r.VHj)(i, 'selected', 'Map' === t[0]),
                (0, r.Ljt)(a, 'class', 'svelte-1aord70'),
                (0, r.VHj)(a, 'selected', 'Metrics' === t[0]),
                (0, r.Ljt)(l, 'class', 'svelte-1aord70'),
                (0, r.VHj)(l, 'selected', 'Performance' === t[0]),
                (0, r.Ljt)(e, 'class', 'pages svelte-1aord70'),
                (0, r.Ljt)(h, 'id', 'state'),
                (0, r.Ljt)(h, 'class', 'svelte-1aord70'),
                (0, r.VHj)(h, 'selected', 'State' === t[1]),
                (0, r.Ljt)(d, 'id', 'diff'),
                (0, r.Ljt)(d, 'class', 'svelte-1aord70'),
                (0, r.VHj)(d, 'selected', 'Diff' === t[1]),
                (0, r.Ljt)(c, 'class', 'state-diff svelte-1aord70'),
                (0, r.Ljt)(n, 'class', 'svelte-1aord70');
            },
            m(v, g) {
              (0, r.$Tr)(v, n, g),
                (0, r.R3I)(n, e),
                (0, r.R3I)(e, i),
                (0, r.R3I)(e, o),
                (0, r.R3I)(e, a),
                (0, r.R3I)(e, s),
                (0, r.R3I)(e, l),
                (0, r.R3I)(n, u),
                (0, r.R3I)(n, c),
                (0, r.R3I)(c, h),
                (0, r.R3I)(c, f),
                (0, r.R3I)(c, d),
                p ||
                  ((m = [
                    (0, r.oLt)(i, 'click', t[2]),
                    (0, r.oLt)(a, 'click', t[3]),
                    (0, r.oLt)(l, 'click', t[4]),
                    (0, r.oLt)(h, 'click', t[5]),
                    (0, r.oLt)(d, 'click', t[6]),
                  ]),
                  (p = !0));
            },
            p(t, [n]) {
              1 & n && (0, r.VHj)(i, 'selected', 'Map' === t[0]),
                1 & n && (0, r.VHj)(a, 'selected', 'Metrics' === t[0]),
                1 & n && (0, r.VHj)(l, 'selected', 'Performance' === t[0]),
                2 & n && (0, r.VHj)(h, 'selected', 'State' === t[1]),
                2 & n && (0, r.VHj)(d, 'selected', 'Diff' === t[1]);
            },
            i: r.ZTd,
            o: r.ZTd,
            d(t) {
              t && (0, r.ogt)(n), (p = !1), (0, r.j7q)(m);
            },
          };
        }
        function s(t, n, e) {
          (0, i.x)();
          let r = 'Map',
            o = 'State';
          return [
            r,
            o,
            () => e(0, (r = 'Map')),
            () => e(0, (r = 'Metrics')),
            () => e(0, (r = 'Performance')),
            () => e(1, (o = 'State')),
            () => e(1, (o = 'Diff')),
          ];
        }
        e(434), e(374), (t = e.hmd(t));
        class l extends r.f_C {
          constructor(t) {
            super(), (0, r.S1n)(this, t, s, a, r.N8, {}, o);
          }
        }
        t && t.hot;
        const u = l;
      },
      863: (t, n, e) => {
        e.d(n, { Z: () => l });
        var r = e(234);
        function i(t) {
          (0, r.qOq)(
            t,
            'svelte-1so9g09',
            'button.svelte-1so9g09{border:3px solid #000;box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.25)}#clear-button-container.svelte-1so9g09{display:flex;justify-content:center;align-items:center;height:100%;width:100%;background-color:white;border:3px solid #000}#clear-button.svelte-1so9g09{color:black;background-color:white;padding:5px 25px;border-radius:5px}'
          );
        }
        function o(t) {
          let n, e, i, o;
          return {
            c() {
              (n = (0, r.bGB)('div')),
                (e = (0, r.bGB)('button')),
                (e.textContent = 'Clear'),
                (0, r.Ljt)(e, 'id', 'clear-button'),
                (0, r.Ljt)(e, 'class', 'svelte-1so9g09'),
                (0, r.Ljt)(n, 'id', 'clear-button-container'),
                (0, r.Ljt)(n, 'class', 'svelte-1so9g09');
            },
            m(a, s) {
              (0, r.$Tr)(a, n, s),
                (0, r.R3I)(n, e),
                i || ((o = (0, r.oLt)(e, 'click', t[0])), (i = !0));
            },
            p: r.ZTd,
            i: r.ZTd,
            o: r.ZTd,
            d(t) {
              t && (0, r.ogt)(n), (i = !1), o();
            },
          };
        }
        function a(t) {
          return [
            () => {
              const t = document.querySelector('.routes-container');
              for (; t.firstChild; ) t.removeChild(t.firstChild);
            },
          ];
        }
        e(434), e(374), (t = e.hmd(t));
        class s extends r.f_C {
          constructor(t) {
            super(), (0, r.S1n)(this, t, a, o, r.N8, {}, i);
          }
        }
        t && t.hot;
        const l = s;
      },
      709: (t, n, e) => {
        e.d(n, { Z: () => l });
        var r = e(234);
        function i(t) {
          (0, r.qOq)(
            t,
            'svelte-hxizy',
            '#route.svelte-hxizy{text-align:left;padding-left:10px}#snapshot.svelte-hxizy{margin-top:-2px;border-top:2px solid black;border-bottom:2px solid black;text-align:left;display:flex;justify-content:space-between;padding-left:10px}#time.svelte-hxizy{font-style:italic;font-family:Istok Web;margin-right:10px}'
          );
        }
        function o(t) {
          let n, e, i, o, a, s, l, u, c, h, f, d;
          return {
            c() {
              (n = (0, r.bGB)('div')),
                (e = (0, r.bGB)('div')),
                (i = (0, r.fLW)('Routes: ')),
                (o = (0, r.fLW)(t[0])),
                (a = (0, r.DhX)()),
                (s = (0, r.bGB)('div')),
                (l = (0, r.fLW)('Snapshot: ')),
                (u = (0, r.fLW)(t[1])),
                (c = (0, r.DhX)()),
                (h = (0, r.bGB)('span')),
                (f = (0, r.fLW)('+')),
                (d = (0, r.fLW)(t[2])),
                (0, r.Ljt)(e, 'id', 'route'),
                (0, r.Ljt)(e, 'class', 'svelte-hxizy'),
                (0, r.Ljt)(h, 'id', 'time'),
                (0, r.Ljt)(h, 'class', 'svelte-hxizy'),
                (0, r.Ljt)(s, 'id', 'snapshot'),
                (0, r.Ljt)(s, 'class', 'svelte-hxizy'),
                (0, r.Ljt)(n, 'id', 'route-container');
            },
            m(t, p) {
              (0, r.$Tr)(t, n, p),
                (0, r.R3I)(n, e),
                (0, r.R3I)(e, i),
                (0, r.R3I)(e, o),
                (0, r.R3I)(n, a),
                (0, r.R3I)(n, s),
                (0, r.R3I)(s, l),
                (0, r.R3I)(s, u),
                (0, r.R3I)(s, c),
                (0, r.R3I)(s, h),
                (0, r.R3I)(h, f),
                (0, r.R3I)(h, d);
            },
            p(t, [n]) {
              1 & n && (0, r.rTO)(o, t[0]),
                2 & n && (0, r.rTO)(u, t[1]),
                4 & n && (0, r.rTO)(d, t[2]);
            },
            i: r.ZTd,
            o: r.ZTd,
            d(t) {
              t && (0, r.ogt)(n);
            },
          };
        }
        function a(t, n, e) {
          let { route: r } = n,
            { snapshotNumber: i } = n,
            { time: o } = n;
          return (
            (t.$$set = (t) => {
              'route' in t && e(0, (r = t.route)),
                'snapshotNumber' in t && e(1, (i = t.snapshotNumber)),
                'time' in t && e(2, (o = t.time));
            }),
            [r, i, o]
          );
        }
        e(434), e(374), (t = e.hmd(t));
        class s extends r.f_C {
          constructor(t) {
            super(),
              (0, r.S1n)(
                this,
                t,
                a,
                o,
                r.N8,
                { route: 0, snapshotNumber: 1, time: 2 },
                i
              );
          }
        }
        t && t.hot;
        const l = s;
      },
      817: (t, n, e) => {
        e.d(n, { Z: () => l });
        var r = e(234),
          i = e(709);
        function o(t) {
          (0, r.qOq)(
            t,
            'svelte-1ghalet',
            '.sidebar.svelte-1ghalet{width:100%;height:calc(100%);display:flex;flex-direction:column;align-items:center;justify-content:space-between;background-color:white;color:black;border:3px solid black}.routes-container.svelte-1ghalet{width:calc(100%);display:flex;flex-direction:column;justify-content:left;margin-top:-3px}'
          );
        }
        function a(t) {
          let n, e, o, a, s, l;
          return (
            (o = new i.Z({
              props: { route: '/', snapshotNumber: 1, time: '00:16.50' },
            })),
            (s = new i.Z({
              props: { route: '/routes', snapshotNumber: 5, time: '15:00' },
            })),
            {
              c() {
                (n = (0, r.bGB)('div')),
                  (e = (0, r.bGB)('div')),
                  (0, r.YCL)(o.$$.fragment),
                  (a = (0, r.DhX)()),
                  (0, r.YCL)(s.$$.fragment),
                  (0, r.Ljt)(e, 'class', 'routes-container svelte-1ghalet'),
                  (0, r.Ljt)(n, 'class', 'sidebar svelte-1ghalet');
              },
              m(t, i) {
                (0, r.$Tr)(t, n, i),
                  (0, r.R3I)(n, e),
                  (0, r.yef)(o, e, null),
                  (0, r.R3I)(e, a),
                  (0, r.yef)(s, e, null),
                  (l = !0);
              },
              p: r.ZTd,
              i(t) {
                l ||
                  ((0, r.Ui)(o.$$.fragment, t),
                  (0, r.Ui)(s.$$.fragment, t),
                  (l = !0));
              },
              o(t) {
                (0, r.etI)(o.$$.fragment, t),
                  (0, r.etI)(s.$$.fragment, t),
                  (l = !1);
              },
              d(t) {
                t && (0, r.ogt)(n), (0, r.vpE)(o), (0, r.vpE)(s);
              },
            }
          );
        }
        e(434), e(374), (t = e.hmd(t));
        class s extends r.f_C {
          constructor(t) {
            super(), (0, r.S1n)(this, t, null, a, r.N8, {}, o);
          }
        }
        t && t.hot;
        const l = s;
      },
      434: (t, n, e) => {
        e(234);
        const r = {};
        'undefined' != typeof window &&
          ((window.__SVELTE_HMR = {
            on: (t, n) => {
              (t = t.toLowerCase()), r[t] || (r[t] = []), r[t].push(n);
            },
          }),
          window.dispatchEvent(new CustomEvent('svelte-hmr:ready')));
        const i = 'undefined' != typeof window ? window : e.g,
          o =
            'undefined' != typeof Symbol
              ? Symbol('SVELTE_LOADER_HOT')
              : '__SVELTE_LOADER_HOT';
        if (!i[o]) {
          let t = 0;
          const n = () => {
              t++;
            },
            e = (t) => (n) => {
              const e = (n && n.stack) || n;
              console.error(
                '[HMR] Failed to accept update (nollup compat mode)',
                e
              ),
                t(),
                r();
            },
            r = () => {
              t--, 0 === t && console.log('[HMR:Svelte] Up to date');
            };
          i[o] = {
            hotStates: {},
            notifyStart: n,
            notifyError: e,
            notifyEnd: r,
          };
        }
      },
      568: (t, n, e) => {
        e.d(n, { H3: () => r.H3E, x: () => r.xa3 });
        var r = e(234);
      },
      234: (t, n, e) => {
        function r() {}
        function i(t) {
          return t();
        }
        function o() {
          return Object.create(null);
        }
        function a(t) {
          t.forEach(i);
        }
        function s(t) {
          return 'function' == typeof t;
        }
        function l(t, n) {
          return t != t
            ? n == n
            : t !== n || (t && 'object' == typeof t) || 'function' == typeof t;
        }
        function u(t) {
          return 0 === Object.keys(t).length;
        }
        e.d(n, {
          $Tr: () => m,
          DhX: () => b,
          H3E: () => A,
          Ljt: () => $,
          N8: () => l,
          R3I: () => d,
          S1n: () => K,
          Ui: () => V,
          VHj: () => E,
          YCL: () => U,
          ZMF: () => v,
          ZTd: () => r,
          bGB: () => y,
          bi5: () => _,
          dvw: () => X,
          etI: () => Y,
          fLW: () => w,
          f_C: () => J,
          gbL: () => G,
          j7q: () => a,
          luv: () => j,
          oLt: () => x,
          ogt: () => g,
          qOq: () => p,
          rTO: () => k,
          vpE: () => W,
          w2L: () => L,
          xLP: () => c,
          xa3: () => N,
          yef: () => F,
        }),
          new Set();
        let c,
          h = !1;
        function f(t, n, e, r) {
          for (; t < n; ) {
            const i = t + ((n - t) >> 1);
            e(i) <= r ? (t = i + 1) : (n = i);
          }
          return t;
        }
        function d(t, n) {
          t.appendChild(n);
        }
        function p(t, n, e) {
          const r = (function (t) {
            if (!t) return document;
            const n = t.getRootNode ? t.getRootNode() : t.ownerDocument;
            return n && n.host ? n : t.ownerDocument;
          })(t);
          if (!r.getElementById(n)) {
            const t = y('style');
            (t.id = n),
              (t.textContent = e),
              (function (t, n) {
                d(t.head || t, n);
              })(r, t);
          }
        }
        function m(t, n, e) {
          t.insertBefore(n, e || null);
        }
        function v(t, n, e) {
          h && !e
            ? (function (t, n) {
                if (h) {
                  for (
                    (function (t) {
                      if (t.hydrate_init) return;
                      t.hydrate_init = !0;
                      let n = t.childNodes;
                      if ('HEAD' === t.nodeName) {
                        const t = [];
                        for (let e = 0; e < n.length; e++) {
                          const r = n[e];
                          void 0 !== r.claim_order && t.push(r);
                        }
                        n = t;
                      }
                      const e = new Int32Array(n.length + 1),
                        r = new Int32Array(n.length);
                      e[0] = -1;
                      let i = 0;
                      for (let t = 0; t < n.length; t++) {
                        const o = n[t].claim_order,
                          a =
                            (i > 0 && n[e[i]].claim_order <= o
                              ? i + 1
                              : f(1, i, (t) => n[e[t]].claim_order, o)) - 1;
                        r[t] = e[a] + 1;
                        const s = a + 1;
                        (e[s] = t), (i = Math.max(s, i));
                      }
                      const o = [],
                        a = [];
                      let s = n.length - 1;
                      for (let t = e[i] + 1; 0 != t; t = r[t - 1]) {
                        for (o.push(n[t - 1]); s >= t; s--) a.push(n[s]);
                        s--;
                      }
                      for (; s >= 0; s--) a.push(n[s]);
                      o.reverse(),
                        a.sort((t, n) => t.claim_order - n.claim_order);
                      for (let n = 0, e = 0; n < a.length; n++) {
                        for (
                          ;
                          e < o.length && a[n].claim_order >= o[e].claim_order;

                        )
                          e++;
                        const r = e < o.length ? o[e] : null;
                        t.insertBefore(a[n], r);
                      }
                    })(t),
                      (void 0 === t.actual_end_child ||
                        (null !== t.actual_end_child &&
                          t.actual_end_child.parentElement !== t)) &&
                        (t.actual_end_child = t.firstChild);
                    null !== t.actual_end_child &&
                    void 0 === t.actual_end_child.claim_order;

                  )
                    t.actual_end_child = t.actual_end_child.nextSibling;
                  n !== t.actual_end_child
                    ? (void 0 === n.claim_order && n.parentNode === t) ||
                      t.insertBefore(n, t.actual_end_child)
                    : (t.actual_end_child = n.nextSibling);
                } else
                  (n.parentNode === t && null === n.nextSibling) ||
                    t.appendChild(n);
              })(t, n)
            : (n.parentNode === t && n.nextSibling == e) ||
              t.insertBefore(n, e || null);
        }
        function g(t) {
          t.parentNode.removeChild(t);
        }
        function y(t) {
          return document.createElement(t);
        }
        function _(t) {
          return document.createElementNS('http://www.w3.org/2000/svg', t);
        }
        function w(t) {
          return document.createTextNode(t);
        }
        function b() {
          return w(' ');
        }
        function x(t, n, e, r) {
          return (
            t.addEventListener(n, e, r), () => t.removeEventListener(n, e, r)
          );
        }
        function $(t, n, e) {
          null == e
            ? t.removeAttribute(n)
            : t.getAttribute(n) !== e && t.setAttribute(n, e);
        }
        function k(t, n) {
          (n = '' + n), t.wholeText !== n && (t.data = n);
        }
        function E(t, n, e) {
          t.classList[e ? 'add' : 'remove'](n);
        }
        function j(t) {
          c = t;
        }
        function L() {
          if (!c)
            throw new Error('Function called outside component initialization');
          return c;
        }
        function A(t) {
          L().$$.on_mount.push(t);
        }
        function N() {
          const t = L();
          return (n, e, { cancelable: r = !1 } = {}) => {
            const i = t.$$.callbacks[n];
            if (i) {
              const o = (function (
                t,
                n,
                { bubbles: e = !1, cancelable: r = !1 } = {}
              ) {
                const i = document.createEvent('CustomEvent');
                return i.initCustomEvent(t, e, r, n), i;
              })(n, e, { cancelable: r });
              return (
                i.slice().forEach((n) => {
                  n.call(t, o);
                }),
                !o.defaultPrevented
              );
            }
            return !0;
          };
        }
        new Map();
        const C = [],
          S = [],
          I = [],
          T = [],
          R = Promise.resolve();
        let q = !1;
        function M(t) {
          I.push(t);
        }
        const B = new Set();
        let O = 0;
        function z() {
          const t = c;
          do {
            for (; O < C.length; ) {
              const t = C[O];
              O++, j(t), H(t.$$);
            }
            for (j(null), C.length = 0, O = 0; S.length; ) S.pop()();
            for (let t = 0; t < I.length; t += 1) {
              const n = I[t];
              B.has(n) || (B.add(n), n());
            }
            I.length = 0;
          } while (C.length);
          for (; T.length; ) T.pop()();
          (q = !1), B.clear(), j(t);
        }
        function H(t) {
          if (null !== t.fragment) {
            t.update(), a(t.before_update);
            const n = t.dirty;
            (t.dirty = [-1]),
              t.fragment && t.fragment.p(t.ctx, n),
              t.after_update.forEach(M);
          }
        }
        const Z = new Set();
        let P, D;
        function X() {
          P = { r: 0, c: [], p: P };
        }
        function G() {
          P.r || a(P.c), (P = P.p);
        }
        function V(t, n) {
          t && t.i && (Z.delete(t), t.i(n));
        }
        function Y(t, n, e, r) {
          if (t && t.o) {
            if (Z.has(t)) return;
            Z.add(t),
              P.c.push(() => {
                Z.delete(t), r && (e && t.d(1), r());
              }),
              t.o(n);
          } else r && r();
        }
        function U(t) {
          t && t.c();
        }
        function F(t, n, e, r) {
          const {
            fragment: o,
            on_mount: l,
            on_destroy: u,
            after_update: c,
          } = t.$$;
          o && o.m(n, e),
            r ||
              M(() => {
                const n = l.map(i).filter(s);
                u ? u.push(...n) : a(n), (t.$$.on_mount = []);
              }),
            c.forEach(M);
        }
        function W(t, n) {
          const e = t.$$;
          null !== e.fragment &&
            (a(e.on_destroy),
            e.fragment && e.fragment.d(n),
            (e.on_destroy = e.fragment = null),
            (e.ctx = []));
        }
        function K(t, n, e, i, s, l, u, f = [-1]) {
          const d = c;
          j(t);
          const p = (t.$$ = {
            fragment: null,
            ctx: null,
            props: l,
            update: r,
            not_equal: s,
            bound: o(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(n.context || (d ? d.$$.context : [])),
            callbacks: o(),
            dirty: f,
            skip_bound: !1,
            root: n.target,
          });
          u && u(p.root);
          let m = !1;
          if (
            ((p.ctx = e
              ? e(t, n.props || {}, (n, e, ...r) => {
                  const i = r.length ? r[0] : e;
                  return (
                    p.ctx &&
                      s(p.ctx[n], (p.ctx[n] = i)) &&
                      (!p.skip_bound && p.bound[n] && p.bound[n](i),
                      m &&
                        (function (t, n) {
                          -1 === t.$$.dirty[0] &&
                            (C.push(t),
                            q || ((q = !0), R.then(z)),
                            t.$$.dirty.fill(0)),
                            (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
                        })(t, n)),
                    e
                  );
                })
              : []),
            p.update(),
            (m = !0),
            a(p.before_update),
            (p.fragment = !!i && i(p.ctx)),
            n.target)
          ) {
            if (n.hydrate) {
              h = !0;
              const t = (function (t) {
                return Array.from(t.childNodes);
              })(n.target);
              p.fragment && p.fragment.l(t), t.forEach(g);
            } else p.fragment && p.fragment.c();
            n.intro && V(t.$$.fragment),
              F(t, n.target, n.anchor, n.customElement),
              (h = !1),
              z();
          }
          j(d);
        }
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof globalThis
          ? globalThis
          : global,
          new Set([
            'allowfullscreen',
            'allowpaymentrequest',
            'async',
            'autofocus',
            'autoplay',
            'checked',
            'controls',
            'default',
            'defer',
            'disabled',
            'formnovalidate',
            'hidden',
            'ismap',
            'loop',
            'multiple',
            'muted',
            'nomodule',
            'novalidate',
            'open',
            'playsinline',
            'readonly',
            'required',
            'reversed',
            'selected',
          ]),
          'function' == typeof HTMLElement &&
            (D = class extends HTMLElement {
              constructor() {
                super(), this.attachShadow({ mode: 'open' });
              }
              connectedCallback() {
                const { on_mount: t } = this.$$;
                this.$$.on_disconnect = t.map(i).filter(s);
                for (const t in this.$$.slotted)
                  this.appendChild(this.$$.slotted[t]);
              }
              attributeChangedCallback(t, n, e) {
                this[t] = e;
              }
              disconnectedCallback() {
                a(this.$$.on_disconnect);
              }
              $destroy() {
                W(this, 1), (this.$destroy = r);
              }
              $on(t, n) {
                const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                return (
                  e.push(n),
                  () => {
                    const t = e.indexOf(n);
                    -1 !== t && e.splice(t, 1);
                  }
                );
              }
              $set(t) {
                this.$$set &&
                  !u(t) &&
                  ((this.$$.skip_bound = !0),
                  this.$$set(t),
                  (this.$$.skip_bound = !1));
              }
            });
        class J {
          $destroy() {
            W(this, 1), (this.$destroy = r);
          }
          $on(t, n) {
            const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return (
              e.push(n),
              () => {
                const t = e.indexOf(n);
                -1 !== t && e.splice(t, 1);
              }
            );
          }
          $set(t) {
            this.$$set &&
              !u(t) &&
              ((this.$$.skip_bound = !0),
              this.$$set(t),
              (this.$$.skip_bound = !1));
          }
        }
      },
    },
    n = {};
  function e(r) {
    var i = n[r];
    if (void 0 !== i) return i.exports;
    var o = (n[r] = { id: r, loaded: !1, exports: {} });
    return t[r](o, o.exports, e), (o.loaded = !0), o.exports;
  }
  (e.d = (t, n) => {
    for (var r in n)
      e.o(n, r) &&
        !e.o(t, r) &&
        Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
  }),
    (e.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (e.hmd = (t) => (
      (t = Object.create(t)).children || (t.children = []),
      Object.defineProperty(t, 'exports', {
        enumerable: !0,
        set: () => {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
              t.id
          );
        },
      }),
      t
    )),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    new (e(178).Z)({ target: document.getElementById('app') });
})();