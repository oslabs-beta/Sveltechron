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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akgrakIsR0NUUkosRUFBb0JydEIsRUFBSSxDQUFDdWxCLEVBQUt5SSxJQUFVeGdCLE9BQU90VixVQUFVbUQsZUFBZXZCLEtBQUt5ckIsRUFBS3lJLEdDR3RFLEksT0FBSSxHQUFJLENBQ2xCaDNCLE9BQVE3QixTQUFTb3hCLGVBQWUsUSIsInNvdXJjZXMiOlsid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1obXIvcnVudGltZS9vdmVybGF5LmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS1obXIvcnVudGltZS9wcm94eS1hZGFwdGVyLWRvbS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL3NyYy9BcHAuc3ZlbHRlIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vc3JjL2NvbXBvbmVudHMvbWFpblBhbmVsL2xlZnRQYW5lbC9MZWZ0UGFuZWwuc3ZlbHRlIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RvckFsbC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL21hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGQuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3BhcnNlLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VudGVyLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc29ydC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vYXR0ci5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jbGFzc2VkLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3RleHQuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaHRtbC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yYWlzZS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9sb3dlci5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5zZXJ0LmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jbG9uZS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vbi5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0QWxsLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZmlsdGVyLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZXhpdC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9qb2luLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29yZGVyLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NhbGwuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbm9kZXMuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbm9kZS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zaXplLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VtcHR5LmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VhY2guanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vYXBwZW5kLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2l0ZXJhdG9yLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9kaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zY2hlZHVsZS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvbnVtYmVyLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vZGVjb21wb3NlLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vcGFyc2UuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3R3ZWVuLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9iYXNpcy5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbG9yLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yZ2IuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2Jhc2lzQ2xvc2VkLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9pbnRlcnBvbGF0ZS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHIuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9hdHRyVHdlZW4uanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9kZWxheS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2R1cmF0aW9uLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0aW9uLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc3R5bGUuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL21lcmdlLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL29uLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc3R5bGVUd2Vlbi5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RleHQuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90ZXh0VHdlZW4uanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9lYXNlLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZWFzZVZhcnlpbmcuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9lbmQuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvY3ViaWMuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3NlbGVjdGlvbi9pbnRlcnJ1cHQuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvaW50ZXJydXB0LmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWJydXNoL3NyYy9icnVzaC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9jb3VudC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL3RyZWUuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtem9vbS9zcmMvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvaGllcmFyY2h5L2VhY2guanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9oaWVyYXJjaHkvZWFjaEFmdGVyLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvaGllcmFyY2h5L2VhY2hCZWZvcmUuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9oaWVyYXJjaHkvZmluZC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9zdW0uanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9oaWVyYXJjaHkvc29ydC5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9wYXRoLmpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vbm9kZV9tb2R1bGVzL2QzLWhpZXJhcmNoeS9zcmMvaGllcmFyY2h5L2FuY2VzdG9ycy5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9kZXNjZW5kYW50cy5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9kMy1oaWVyYXJjaHkvc3JjL2hpZXJhcmNoeS9sZWF2ZXMuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9oaWVyYXJjaHkvbGlua3MuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvZDMtaGllcmFyY2h5L3NyYy9oaWVyYXJjaHkvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9zcmMvY29tcG9uZW50cy9tYWluUGFuZWwvbGVmdFBhbmVsL2R1bW15VHJlZS5zdmVsdGUiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9zcmMvY29tcG9uZW50cy9tYWluUGFuZWwvbWFpblBhbmVsLnN2ZWx0ZSIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL3NyYy9jb21wb25lbnRzL21haW5QYW5lbC9yaWdodFBhbmVsL1JpZ2h0UGFuZWwuc3ZlbHRlIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5zdmVsdGUiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2NsZWFyQnV0dG9uLnN2ZWx0ZSIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvcm91dGUuc3ZlbHRlIiwid2VicGFjazovL3N2ZWx0ZWNocm9uLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnN2ZWx0ZSIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9zdmVsdGUtaG1yL3J1bnRpbWUvcHJveHkuanMiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vLi9ub2RlX21vZHVsZXMvc3ZlbHRlLWxvYWRlci9saWIvaG90LWFwaS5qcyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL25vZGVfbW9kdWxlcy9zdmVsdGUvaW50ZXJuYWwvaW5kZXgubWpzIiwid2VicGFjazovL3N2ZWx0ZWNocm9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N2ZWx0ZWNocm9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3N2ZWx0ZWNocm9uL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vc3ZlbHRlY2hyb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdmVsdGVjaHJvbi8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG5jb25zdCByZW1vdmVFbGVtZW50ID0gZWwgPT4gZWwgJiYgZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG5jb25zdCBFcnJvck92ZXJsYXkgPSAoKSA9PiB7XG4gIGxldCBlcnJvcnMgPSBbXVxuICBsZXQgY29tcGlsZUVycm9yID0gbnVsbFxuXG4gIGNvbnN0IGVycm9yc1RpdGxlID0gJ0ZhaWxlZCB0byBpbml0IGNvbXBvbmVudCdcbiAgY29uc3QgY29tcGlsZUVycm9yVGl0bGUgPSAnRmFpbGVkIHRvIGNvbXBpbGUnXG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgc2VjdGlvbjogYFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgcGFkZGluZzogMzJweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjg1KTtcbiAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICBjb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xuICAgIGAsXG4gICAgaDE6IGBcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBjb2xvcjogI0UzNjA0OTtcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGAsXG4gICAgaDI6IGBcbiAgICAgIG1hcmdpbjogMzJweCAwIDA7XG4gICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBgLFxuICAgIHByZTogYGAsXG4gIH1cblxuICBjb25zdCBjcmVhdGVPdmVybGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGgxLnN0eWxlID0gc3R5bGUuaDFcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoMSlcbiAgICBzZWN0aW9uLnN0eWxlID0gc3R5bGUuc2VjdGlvblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYm9keSlcbiAgICByZXR1cm4geyBoMSwgZWw6IHNlY3Rpb24sIGJvZHkgfVxuICB9XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSB0aXRsZSA9PiB7XG4gICAgb3ZlcmxheS5oMS50ZXh0Q29udGVudCA9IHRpdGxlXG4gIH1cblxuICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZWwgfSA9IG92ZXJsYXlcbiAgICBpZiAoIWVsLnBhcmVudE5vZGUpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHlcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChvdmVybGF5LmVsKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlbCB9ID0gb3ZlcmxheVxuICAgIGlmIChlbC5wYXJlbnROb2RlKSB7XG4gICAgICBvdmVybGF5LmVsLnJlbW92ZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGlmIChjb21waWxlRXJyb3IpIHtcbiAgICAgIG92ZXJsYXkuYm9keS5pbm5lckhUTUwgPSAnJ1xuICAgICAgc2V0VGl0bGUoY29tcGlsZUVycm9yVGl0bGUpXG4gICAgICBjb25zdCBlcnJvckVsID0gcmVuZGVyRXJyb3IoY29tcGlsZUVycm9yKVxuICAgICAgb3ZlcmxheS5ib2R5LmFwcGVuZENoaWxkKGVycm9yRWwpXG4gICAgICBzaG93KClcbiAgICB9IGVsc2UgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBvdmVybGF5LmJvZHkuaW5uZXJIVE1MID0gJydcbiAgICAgIHNldFRpdGxlKGVycm9yc1RpdGxlKVxuICAgICAgZXJyb3JzLmZvckVhY2goKHsgdGl0bGUsIG1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvckVsID0gcmVuZGVyRXJyb3IobWVzc2FnZSwgdGl0bGUpXG4gICAgICAgIG92ZXJsYXkuYm9keS5hcHBlbmRDaGlsZChlcnJvckVsKVxuICAgICAgfSlcbiAgICAgIHNob3coKVxuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlKClcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW5kZXJFcnJvciA9IChtZXNzYWdlLCB0aXRsZSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgIGgyLnRleHRDb250ZW50ID0gdGl0bGVcbiAgICAgIGgyLnN0eWxlID0gc3R5bGUuaDJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChoMilcbiAgICB9XG4gICAgY29uc3QgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJylcbiAgICBwcmUudGV4dENvbnRlbnQgPSBtZXNzYWdlXG4gICAgZGl2LmFwcGVuZENoaWxkKHByZSlcbiAgICByZXR1cm4gZGl2XG4gIH1cblxuICBjb25zdCBhZGRFcnJvciA9IChlcnJvciwgdGl0bGUpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID0gKGVycm9yICYmIGVycm9yLnN0YWNrKSB8fCBlcnJvclxuICAgIGVycm9ycy5wdXNoKHsgdGl0bGUsIG1lc3NhZ2UgfSlcbiAgICB1cGRhdGUoKVxuICB9XG5cbiAgY29uc3QgY2xlYXJFcnJvcnMgPSAoKSA9PiB7XG4gICAgZXJyb3JzLmZvckVhY2goKHsgZWxlbWVudCB9KSA9PiB7XG4gICAgICByZW1vdmVFbGVtZW50KGVsZW1lbnQpXG4gICAgfSlcbiAgICBlcnJvcnMgPSBbXVxuICAgIHVwZGF0ZSgpXG4gIH1cblxuICBjb25zdCBzZXRDb21waWxlRXJyb3IgPSBtZXNzYWdlID0+IHtcbiAgICBjb21waWxlRXJyb3IgPSBtZXNzYWdlXG4gICAgdXBkYXRlKClcbiAgfVxuXG4gIGNvbnN0IG92ZXJsYXkgPSBjcmVhdGVPdmVybGF5KClcblxuICByZXR1cm4ge1xuICAgIGFkZEVycm9yLFxuICAgIGNsZWFyRXJyb3JzLFxuICAgIHNldENvbXBpbGVFcnJvcixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvck92ZXJsYXlcbiIsIi8qIGdsb2JhbCB3aW5kb3csIGRvY3VtZW50ICovXG5pbXBvcnQgKiBhcyBzdmVsdGVJbnRlcm5hbCBmcm9tICdzdmVsdGUvaW50ZXJuYWwnXG4vLyBOT1RFIGZyb20gMy4zOC4zIChvciBzbyksIGluc2VydCB3YXMgY2FycnlpbmcgdGhlIGh5ZHJhdGlvbiBsb2dpYywgdGhhdCBtdXN0XG4vLyBiZSB1c2VkIGJlY2F1c2UgRE9NIGVsZW1lbnRzIGFyZSByZXVzZWQgbW9yZSAoYW5kIHNvIGluc2VydGlvbiBwb2ludHMgYXJlIG5vdFxuLy8gbmVjZXNzYXJpbHkgYWRkZWQgaW4gb3JkZXIpOyB0aGVuIGluIDMuNDAgdGhlIGxvZ2ljIHdhcyBtb3ZlZCB0b1xuLy8gaW5zZXJ0X2h5ZHJhdGlvbiwgd2hpY2ggaXMgdGhlIG9uZSB3ZSBtdXN0IHVzZSBmb3IgSE1SXG5jb25zdCBzdmVsdGVJbnNlcnQgPSBzdmVsdGVJbnRlcm5hbC5pbnNlcnRfaHlkcmF0aW9uIHx8IHN2ZWx0ZUludGVybmFsLmluc2VydFxuaWYgKCFzdmVsdGVJbnNlcnQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdmYWlsZWQgdG8gZmluZCBpbnNlcnRfaHlkcmF0aW9uIGFuZCBpbnNlcnQgaW4gc3ZlbHRlL2ludGVybmFsJ1xuICApXG59XG5cbmltcG9ydCBFcnJvck92ZXJsYXkgZnJvbSAnLi9vdmVybGF5LmpzJ1xuXG5jb25zdCByZW1vdmVFbGVtZW50ID0gZWwgPT4gZWwgJiYgZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG5leHBvcnQgY29uc3QgYWRhcHRlciA9IGNsYXNzIFByb3h5QWRhcHRlckRvbSB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlXG4gICAgdGhpcy5pbnNlcnRpb25Qb2ludCA9IG51bGxcblxuICAgIHRoaXMuYWZ0ZXJNb3VudCA9IHRoaXMuYWZ0ZXJNb3VudC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXJlbmRlciA9IHRoaXMucmVyZW5kZXIuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5fbm9PdmVybGF5ID0gISFpbnN0YW5jZS5ob3RPcHRpb25zLm5vT3ZlcmxheVxuICB9XG5cbiAgLy8gTk9URSBvdmVybGF5IGlzIG9ubHkgY3JlYXRlZCBiZWZvcmUgYmVpbmcgYWN0dWFsbHkgc2hvd24gdG8gaGVscCB0ZXN0XG4gIC8vIHJ1bm5lciAoaXQgd29uJ3QgaGF2ZSB0byBhY2NvdW50IGZvciBlcnJvciBvdmVybGF5IHdoZW4gcnVubmluZyBhc3NlcnRpb25zXG4gIC8vIGFib3V0IHRoZSBjb250ZW50cyBvZiB0aGUgcmVuZGVyZWQgcGFnZSlcbiAgc3RhdGljIGdldEVycm9yT3ZlcmxheShub0NyZWF0ZSA9IGZhbHNlKSB7XG4gICAgaWYgKCFub0NyZWF0ZSAmJiAhdGhpcy5lcnJvck92ZXJsYXkpIHtcbiAgICAgIHRoaXMuZXJyb3JPdmVybGF5ID0gRXJyb3JPdmVybGF5KClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JPdmVybGF5XG4gIH1cblxuICAvLyBUT0RPIHRoaXMgaXMgcHJvYmFibHkgdW51c2VkIG5vdzogcmVtb3ZlIGluIG5leHQgYnJlYWtpbmcgcmVsZWFzZVxuICBzdGF0aWMgcmVuZGVyQ29tcGlsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBub0NyZWF0ZSA9ICFtZXNzYWdlXG4gICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMuZ2V0RXJyb3JPdmVybGF5KG5vQ3JlYXRlKVxuICAgIGlmICghb3ZlcmxheSkgcmV0dXJuXG4gICAgb3ZlcmxheS5zZXRDb21waWxlRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgLy8gQ29tcG9uZW50IGlzIGJlaW5nIGRlc3Ryb3llZCwgZGV0YWNoaW5nIGlzIG5vdCBvcHRpb25hbCBpbiBTdmVsdGUzJ3NcbiAgICAvLyBjb21wb25lbnQgQVBJLCBzbyB3ZSBjYW4gZGlzcG9zZSBvZiB0aGUgaW5zZXJ0aW9uIHBvaW50IGluIGV2ZXJ5IGNhc2UuXG4gICAgaWYgKHRoaXMuaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgIHJlbW92ZUVsZW1lbnQodGhpcy5pbnNlcnRpb25Qb2ludClcbiAgICAgIHRoaXMuaW5zZXJ0aW9uUG9pbnQgPSBudWxsXG4gICAgfVxuICAgIHRoaXMuY2xlYXJFcnJvcigpXG4gIH1cblxuICAvLyBOT1RFIGFmdGVyTW91bnQgQ0FOIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyAoZS5nLiBrZXllZCBsaXN0KVxuICBhZnRlck1vdW50KHRhcmdldCwgYW5jaG9yKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5zdGFuY2U6IHsgZGVidWdOYW1lIH0sXG4gICAgfSA9IHRoaXNcbiAgICBpZiAoIXRoaXMuaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgIHRoaXMuaW5zZXJ0aW9uUG9pbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KGRlYnVnTmFtZSlcbiAgICB9XG4gICAgc3ZlbHRlSW5zZXJ0KHRhcmdldCwgdGhpcy5pbnNlcnRpb25Qb2ludCwgYW5jaG9yKVxuICB9XG5cbiAgcmVyZW5kZXIoKSB7XG4gICAgdGhpcy5jbGVhckVycm9yKClcbiAgICBjb25zdCB7XG4gICAgICBpbnN0YW5jZTogeyByZWZyZXNoQ29tcG9uZW50IH0sXG4gICAgICBpbnNlcnRpb25Qb2ludCxcbiAgICB9ID0gdGhpc1xuICAgIGlmICghaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlcmVuZGVyOiBtaXNzaW5nIGluc2VydGlvbiBwb2ludCcpXG4gICAgfVxuICAgIHJlZnJlc2hDb21wb25lbnQoaW5zZXJ0aW9uUG9pbnQucGFyZW50Tm9kZSwgaW5zZXJ0aW9uUG9pbnQpXG4gIH1cblxuICByZW5kZXJFcnJvcihlcnIpIHtcbiAgICBpZiAodGhpcy5fbm9PdmVybGF5KSByZXR1cm5cbiAgICBjb25zdCB7XG4gICAgICBpbnN0YW5jZTogeyBkZWJ1Z05hbWUgfSxcbiAgICB9ID0gdGhpc1xuICAgIGNvbnN0IHRpdGxlID0gZGVidWdOYW1lIHx8IGVyci5tb2R1bGVOYW1lIHx8ICdFcnJvcidcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmdldEVycm9yT3ZlcmxheSgpLmFkZEVycm9yKGVyciwgdGl0bGUpXG4gIH1cblxuICBjbGVhckVycm9yKCkge1xuICAgIGlmICh0aGlzLl9ub092ZXJsYXkpIHJldHVyblxuICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLmNvbnN0cnVjdG9yLmdldEVycm9yT3ZlcmxheSh0cnVlKVxuICAgIGlmICghb3ZlcmxheSkgcmV0dXJuXG4gICAgb3ZlcmxheS5jbGVhckVycm9ycygpXG4gIH1cbn1cblxuLy8gVE9ETyB0aGlzIGlzIHByb2JhYmx5IHVudXNlZCBub3c6IHJlbW92ZSBpbiBuZXh0IGJyZWFraW5nIHJlbGVhc2VcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuX19TVkVMVEVfSE1SX0FEQVBURVIgPSBhZGFwdGVyXG59XG5cbi8vIG1pdGlnYXRlIHNpdHVhdGlvbiB3aXRoIFNub3dwYWNrIHJlbW90ZSBzb3VyY2UgcHVsbGluZyBsYXRlc3Qgb2YgcnVudGltZSxcbi8vIGJ1dCB1c2luZyBwcmV2aW91cyB2ZXJzaW9uIG9mIHRoZSBOb2RlIGNvZGUgdHJhbnNmb3JtIGluIHRoZSBwbHVnaW5cbi8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL3JpeG8vc3ZlbHRlLWhtci9pc3N1ZXMvMjdcbmV4cG9ydCBkZWZhdWx0IGFkYXB0ZXJcbiIsIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIC8vIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnN2ZWx0ZSc7XG4gIGltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc3ZlbHRlJztcbiAgaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5zdmVsdGUnO1xuICBpbXBvcnQgQ2xlYXJCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXIvY2xlYXJCdXR0b24uc3ZlbHRlJztcbiAgaW1wb3J0IE1haW5QYW5lbCBmcm9tICcuL2NvbXBvbmVudHMvbWFpblBhbmVsL21haW5QYW5lbC5zdmVsdGUnO1xuXG4gIC8vIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoXG4gIC8vICAgcmVxdWVzdCxcbiAgLy8gICBzZW5kZXIsXG4gIC8vICAgc2VuZFJlc3BvbnNlXG4gIC8vICkge1xuICAvLyAgIGNvbnNvbGUubG9nKFxuICAvLyAgICAgc2VuZGVyLnRhYlxuICAvLyAgICAgICA/ICdmcm9tIGEgY29udGVudCBzY3JpcHQ6JyArIHNlbmRlci50YWIudXJsXG4gIC8vICAgICAgIDogJ2Zyb20gdGhlIGV4dGVuc2lvbidcbiAgLy8gICApO1xuICAvLyAgIGlmIChyZXF1ZXN0LmdyZWV0aW5nID09PSAnaGVsbG8nKSBzZW5kUmVzcG9uc2UoeyBmYXJld2VsbDogJ2dvb2RieWUnIH0pO1xuICAvLyB9KTtcbjwvc2NyaXB0PlxuXG48bWFpbiBjbGFzcz1cImdyaWRcIj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgIDxOYXZiYXIgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjbGVhclwiPlxuICAgIDxDbGVhckJ1dHRvbiAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPE1haW5QYW5lbCAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNpZGViYXJcIj5cbiAgICA8U2lkZWJhciAvPlxuICA8L2Rpdj5cbjwvbWFpbj5cblxuPHN0eWxlPlxuICBtYWluIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZTpcbiAgICAgICdjbHIgY2xyIGhkIGhkIGhkICAnXG4gICAgICAnc2Qgc2QgIG1haW4gbWFpbiBtYWluICdcbiAgICAgICdzZCBzZCAgbWFpbiBtYWluIG1haW4gJ1xuICAgICAgJ3NkIHNkICBtYWluIG1haW4gbWFpbiAnXG4gICAgICAnc2Qgc2QgIG1haW4gbWFpbiBtYWluICdcbiAgICAgICdzZCBzZCAgbWFpbiBtYWluIG1haW4gJ1xuICAgICAgJ3NkIHNkICBtYWluIG1haW4gbWFpbiAnXG4gICAgICAnc2Qgc2QgIG1haW4gbWFpbiBtYWluICdcbiAgICAgICdzZCBzZCAgbWFpbiBtYWluIG1haW4gJ1xuICAgICAgJ3NkIHNkICBtYWluIG1haW4gbWFpbiAnXG4gICAgICAnc2Qgc2QgIG1haW4gbWFpbiBtYWluICdcbiAgICAgICdzZCBzZCAgbWFpbiBtYWluIG1haW4gJ1xuICAgICAgJ3NkIHNkICBtYWluIG1haW4gbWFpbiAnXG4gICAgICAnc2Qgc2QgIG1haW4gbWFpbiBtYWluICdcbiAgICAgICdzZCBzZCAgbWFpbiBtYWluIG1haW4gJ1xuICAgICAgJ3NkIHNkICBtYWluIG1haW4gbWFpbiAnXG4gICAgICAnc2Qgc2QgIG1haW4gbWFpbiBtYWluICdcbiAgICAgICdzZCBzZCAgbWFpbiBtYWluIG1haW4gJ1xuICAgICAgJ3NkIHNkICBtYWluIG1haW4gbWFpbiAnXG4gICAgICAnc2Qgc2QgIG1haW4gbWFpbiBtYWluICdcbiAgICAgICdzZCBzZCAgbWFpbiBtYWluIG1haW4gJ1xuICAgICAgJ3NkIHNkICBtYWluIG1haW4gbWFpbiAnXG4gICAgICAnc2Qgc2QgIG1haW4gbWFpbiBtYWluICdcbiAgICAgICdzZCBzZCAgbWFpbiBtYWluIG1haW4gJ1xuICAgICAgJ3NkIHNkICBtYWluIG1haW4gbWFpbiAnXG4gICAgICAnc2Qgc2QgIG1haW4gbWFpbiBtYWluICdcbiAgICAgICdzZCBzZCAgbWFpbiBtYWluIG1haW4gJ1xuICAgICAgJ2Z0IGZ0IGZ0IGZ0IGZ0ICdcbiAgICAgICdmdCBmdCBmdCBmdCBmdCAnXG4gICAgICAnZnQgZnQgZnQgZnQgZnQgJ1xuICAgICAgJ2Z0IGZ0IGZ0IGZ0IGZ0ICc7XG4gIH1cblxuICAuY2xlYXIge1xuICAgIGdyaWQtYXJlYTogY2xyO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiBoZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIGdyaWQtYXJlYTogZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBtaW4td2lkdGg6IDQwdnc7XG4gICAgbWluLWhlaWdodDogMTB2aDtcbiAgfVxuXG4gIC5zaWRlYmFyIHtcbiAgICBncmlkLWFyZWE6IHNkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgd2lkdGg6IDEydnc7XG4gICAgLyogb3ZlcndyaXRlcyBhdXRvbWF0aWMgZ3JpZCBzcGFjaW5nIHRvIGdpdmUgdGhlIHNpZGViYXIgbW9yZSBzcGFjZSAqL1xuICB9XG48L3N0eWxlPlxuIiwiPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IER1bW15VHJlZSBmcm9tICcuL2R1bW15VHJlZS5zdmVsdGUnO1xuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgLy9pZiBidXR0b24gY2lja2VkIHRoZW4gYWNjZXNzIGZvY3VzIHN0YXRlXG5cbiAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblxuICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gIGxldCB0cmVlT3JTdGVwOiBzdHJpbmcgPSAnVHJlZSc7XG4gIC8vb24gY2xpY2sgdG9nZ2xlIHRvIHRydWVcbiAgLy9pZiB0cnVlLCB0aGVuIGNoYW5nZSBvdGhlciBjb21wb25lbnRzIHRvIGZhbHNlXG5cbiAgLy8gb25Nb3VudCgoKSA9PiB7XG4gIC8vICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChcbiAgLy8gICAgIHJlcXVlc3QsXG4gIC8vICAgICBzZW5kZXIsXG4gIC8vICAgICBzZW5kUmVzcG9uc2VcbiAgLy8gICApIHtcbiAgLy8gICAgIHN3aXRjaCAocmVxdWVzdC5tZXNzYWdlKSB7XG4gIC8vICAgICAgIGNhc2UgJ3Rlc3QgdGVzdCc6XG4gIC8vICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIHJlcXVlc3QubWVzc2FnZScpO1xuICAvLyAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9KTtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJ0cmVlLXN0ZXBcIj5cbiAgICA8YnV0dG9uXG4gICAgICBpZD1cInRyZWVcIlxuICAgICAgY2xhc3M6c2VsZWN0ZWQ9e3RyZWVPclN0ZXAgPT09ICdUcmVlJ31cbiAgICAgIG9uOmNsaWNrPXsoKSA9PiAodHJlZU9yU3RlcCA9ICdUcmVlJyl9PlRyZWU8L2J1dHRvblxuICAgID5cbiAgICA8YnV0dG9uXG4gICAgICBpZD1cInN0ZXBcIlxuICAgICAgY2xhc3M6c2VsZWN0ZWQ9e3RyZWVPclN0ZXAgPT09ICdTdGVwJ31cbiAgICAgIG9uOmNsaWNrPXsoKSA9PiAodHJlZU9yU3RlcCA9ICdTdGVwJyl9PlN0ZXA8L2J1dHRvblxuICAgID5cbiAgPC9kaXY+XG4gIHsjaWYgdHJlZU9yU3RlcCA9PT0gJ1RyZWUnfVxuICAgIDxkaXY+XG4gICAgICA8RHVtbXlUcmVlIC8+XG4gICAgPC9kaXY+XG4gIHs6ZWxzZX1cbiAgICA8ZGl2PlN0ZXA8L2Rpdj5cbiAgey9pZn1cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5jb250YWluZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDNweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4IDE4cHg7XG4gIH1cblxuICAjc3RlcCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE4cHggMThweCAwcHg7XG4gIH1cblxuICAjdHJlZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMThweCAwcHggMHB4IDE4cHg7XG4gIH1cblxuICAuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC50cmVlLXN0ZXAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG48L3N0eWxlPlxuIiwiZnVuY3Rpb24gbm9uZSgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gbm9uZSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9O1xufVxuIiwiZnVuY3Rpb24gZW1wdHkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBlbXB0eSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRNYXRjaGVyKHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59XG5cbiIsImltcG9ydCB7Y2hpbGRNYXRjaGVyfSBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG52YXIgZmluZCA9IEFycmF5LnByb3RvdHlwZS5maW5kO1xuXG5mdW5jdGlvbiBjaGlsZEZpbmQobWF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmaW5kLmNhbGwodGhpcy5jaGlsZHJlbiwgbWF0Y2gpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjaGlsZEZpcnN0KCkge1xuICByZXR1cm4gdGhpcy5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KG1hdGNoID09IG51bGwgPyBjaGlsZEZpcnN0XG4gICAgICA6IGNoaWxkRmluZCh0eXBlb2YgbWF0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IG1hdGNoIDogY2hpbGRNYXRjaGVyKG1hdGNoKSkpO1xufVxuIiwiaW1wb3J0IHtjaGlsZE1hdGNoZXJ9IGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbnZhciBmaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyO1xuXG5mdW5jdGlvbiBjaGlsZHJlbigpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRmlsdGVyKG1hdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcy5jaGlsZHJlbiwgbWF0Y2gpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3RBbGwobWF0Y2ggPT0gbnVsbCA/IGNoaWxkcmVuXG4gICAgICA6IGNoaWxkcmVuRmlsdGVyKHR5cGVvZiBtYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gbWF0Y2ggOiBjaGlsZE1hdGNoZXIobWF0Y2gpKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih1cGRhdGUpIHtcbiAgcmV0dXJuIG5ldyBBcnJheSh1cGRhdGUubGVuZ3RoKTtcbn1cbiIsImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlLmpzXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2VudGVyIHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbnRlck5vZGUocGFyZW50LCBkYXR1bSkge1xuICB0aGlzLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudDtcbiAgdGhpcy5uYW1lc3BhY2VVUkkgPSBwYXJlbnQubmFtZXNwYWNlVVJJO1xuICB0aGlzLl9uZXh0ID0gbnVsbDtcbiAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9fZGF0YV9fID0gZGF0dW07XG59XG5cbkVudGVyTm9kZS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBFbnRlck5vZGUsXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbihjaGlsZCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgdGhpcy5fbmV4dCk7IH0sXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24oY2hpbGQsIG5leHQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIG5leHQpOyB9LFxuICBxdWVyeVNlbGVjdG9yOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyB9LFxuICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpOyB9XG59O1xuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQge0VudGVyTm9kZX0gZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi4vY29uc3RhbnQuanNcIjtcblxuZnVuY3Rpb24gYmluZEluZGV4KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEpIHtcbiAgdmFyIGkgPSAwLFxuICAgICAgbm9kZSxcbiAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBmaXQgaW50byB1cGRhdGUuXG4gIC8vIFB1dCBhbnkgbnVsbCBub2RlcyBpbnRvIGVudGVyLlxuICAvLyBQdXQgYW55IHJlbWFpbmluZyBkYXRhIGludG8gZW50ZXIuXG4gIGZvciAoOyBpIDwgZGF0YUxlbmd0aDsgKytpKSB7XG4gICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgbm9kZS5fX2RhdGFfXyA9IGRhdGFbaV07XG4gICAgICB1cGRhdGVbaV0gPSBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlcltpXSA9IG5ldyBFbnRlck5vZGUocGFyZW50LCBkYXRhW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBQdXQgYW55IG5vbi1udWxsIG5vZGVzIHRoYXQgZG9u4oCZdCBmaXQgaW50byBleGl0LlxuICBmb3IgKDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBleGl0W2ldID0gbm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZEtleShwYXJlbnQsIGdyb3VwLCBlbnRlciwgdXBkYXRlLCBleGl0LCBkYXRhLCBrZXkpIHtcbiAgdmFyIGksXG4gICAgICBub2RlLFxuICAgICAgbm9kZUJ5S2V5VmFsdWUgPSBuZXcgTWFwLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICBrZXlWYWx1ZXMgPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpLFxuICAgICAga2V5VmFsdWU7XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIG5vZGUuXG4gIC8vIElmIG11bHRpcGxlIG5vZGVzIGhhdmUgdGhlIHNhbWUga2V5LCB0aGUgZHVwbGljYXRlcyBhcmUgYWRkZWQgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZSA9IGtleS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSArIFwiXCI7XG4gICAgICBpZiAobm9kZUJ5S2V5VmFsdWUuaGFzKGtleVZhbHVlKSkge1xuICAgICAgICBleGl0W2ldID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVCeUtleVZhbHVlLnNldChrZXlWYWx1ZSwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIGRhdHVtLlxuICAvLyBJZiB0aGVyZSBhIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LCBqb2luIGFuZCBhZGQgaXQgdG8gdXBkYXRlLlxuICAvLyBJZiB0aGVyZSBpcyBub3QgKG9yIHRoZSBrZXkgaXMgYSBkdXBsaWNhdGUpLCBhZGQgaXQgdG8gZW50ZXIuXG4gIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBrZXlWYWx1ZSA9IGtleS5jYWxsKHBhcmVudCwgZGF0YVtpXSwgaSwgZGF0YSkgKyBcIlwiO1xuICAgIGlmIChub2RlID0gbm9kZUJ5S2V5VmFsdWUuZ2V0KGtleVZhbHVlKSkge1xuICAgICAgdXBkYXRlW2ldID0gbm9kZTtcbiAgICAgIG5vZGUuX19kYXRhX18gPSBkYXRhW2ldO1xuICAgICAgbm9kZUJ5S2V5VmFsdWUuZGVsZXRlKGtleVZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50ZXJbaV0gPSBuZXcgRW50ZXJOb2RlKHBhcmVudCwgZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGFueSByZW1haW5pbmcgbm9kZXMgdGhhdCB3ZXJlIG5vdCBib3VuZCB0byBkYXRhIHRvIGV4aXQuXG4gIGZvciAoaSA9IDA7IGkgPCBncm91cExlbmd0aDsgKytpKSB7XG4gICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChub2RlQnlLZXlWYWx1ZS5nZXQoa2V5VmFsdWVzW2ldKSA9PT0gbm9kZSkpIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkYXR1bShub2RlKSB7XG4gIHJldHVybiBub2RlLl9fZGF0YV9fO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIEFycmF5LmZyb20odGhpcywgZGF0dW0pO1xuXG4gIHZhciBiaW5kID0ga2V5ID8gYmluZEtleSA6IGJpbmRJbmRleCxcbiAgICAgIHBhcmVudHMgPSB0aGlzLl9wYXJlbnRzLFxuICAgICAgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdmFsdWUgPSBjb25zdGFudCh2YWx1ZSk7XG5cbiAgZm9yICh2YXIgbSA9IGdyb3Vwcy5sZW5ndGgsIHVwZGF0ZSA9IG5ldyBBcnJheShtKSwgZW50ZXIgPSBuZXcgQXJyYXkobSksIGV4aXQgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbal0sXG4gICAgICAgIGdyb3VwID0gZ3JvdXBzW2pdLFxuICAgICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgICAgZGF0YSA9IGFycmF5bGlrZSh2YWx1ZS5jYWxsKHBhcmVudCwgcGFyZW50ICYmIHBhcmVudC5fX2RhdGFfXywgaiwgcGFyZW50cykpLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGVudGVyR3JvdXAgPSBlbnRlcltqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgdXBkYXRlR3JvdXAgPSB1cGRhdGVbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIGV4aXRHcm91cCA9IGV4aXRbal0gPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpO1xuXG4gICAgYmluZChwYXJlbnQsIGdyb3VwLCBlbnRlckdyb3VwLCB1cGRhdGVHcm91cCwgZXhpdEdyb3VwLCBkYXRhLCBrZXkpO1xuXG4gICAgLy8gTm93IGNvbm5lY3QgdGhlIGVudGVyIG5vZGVzIHRvIHRoZWlyIGZvbGxvd2luZyB1cGRhdGUgbm9kZSwgc3VjaCB0aGF0XG4gICAgLy8gYXBwZW5kQ2hpbGQgY2FuIGluc2VydCB0aGUgbWF0ZXJpYWxpemVkIGVudGVyIG5vZGUgYmVmb3JlIHRoaXMgbm9kZSxcbiAgICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJlbnQgbm9kZS5cbiAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMCwgcHJldmlvdXMsIG5leHQ7IGkwIDwgZGF0YUxlbmd0aDsgKytpMCkge1xuICAgICAgaWYgKHByZXZpb3VzID0gZW50ZXJHcm91cFtpMF0pIHtcbiAgICAgICAgaWYgKGkwID49IGkxKSBpMSA9IGkwICsgMTtcbiAgICAgICAgd2hpbGUgKCEobmV4dCA9IHVwZGF0ZUdyb3VwW2kxXSkgJiYgKytpMSA8IGRhdGFMZW5ndGgpO1xuICAgICAgICBwcmV2aW91cy5fbmV4dCA9IG5leHQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSBuZXcgU2VsZWN0aW9uKHVwZGF0ZSwgcGFyZW50cyk7XG4gIHVwZGF0ZS5fZW50ZXIgPSBlbnRlcjtcbiAgdXBkYXRlLl9leGl0ID0gZXhpdDtcbiAgcmV0dXJuIHVwZGF0ZTtcbn1cblxuLy8gR2l2ZW4gc29tZSBkYXRhLCB0aGlzIHJldHVybnMgYW4gYXJyYXktbGlrZSB2aWV3IG9mIGl0OiBhbiBvYmplY3QgdGhhdFxuLy8gZXhwb3NlcyBhIGxlbmd0aCBwcm9wZXJ0eSBhbmQgYWxsb3dzIG51bWVyaWMgaW5kZXhpbmcuIE5vdGUgdGhhdCB1bmxpa2Vcbi8vIHNlbGVjdEFsbCwgdGhpcyBpc27igJl0IHdvcnJpZWQgYWJvdXQg4oCcbGl2ZeKAnSBjb2xsZWN0aW9ucyBiZWNhdXNlIHRoZSByZXN1bHRpbmdcbi8vIGFycmF5IHdpbGwgb25seSBiZSB1c2VkIGJyaWVmbHkgd2hpbGUgZGF0YSBpcyBiZWluZyBib3VuZC4gKEl0IGlzIHBvc3NpYmxlIHRvXG4vLyBjYXVzZSB0aGUgZGF0YSB0byBjaGFuZ2Ugd2hpbGUgaXRlcmF0aW5nIGJ5IHVzaW5nIGEga2V5IGZ1bmN0aW9uLCBidXQgcGxlYXNlXG4vLyBkb27igJl0OyB3ZeKAmWQgcmF0aGVyIGF2b2lkIGEgZ3JhdHVpdG91cyBjb3B5LilcbmZ1bmN0aW9uIGFycmF5bGlrZShkYXRhKSB7XG4gIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiBcImxlbmd0aFwiIGluIGRhdGFcbiAgICA/IGRhdGEgLy8gQXJyYXksIFR5cGVkQXJyYXksIE5vZGVMaXN0LCBhcnJheS1saWtlXG4gICAgOiBBcnJheS5mcm9tKGRhdGEpOyAvLyBNYXAsIFNldCwgaXRlcmFibGUsIHN0cmluZywgb3IgYW55dGhpbmcgZWxzZVxufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBhcmUpIHtcbiAgaWYgKCFjb21wYXJlKSBjb21wYXJlID0gYXNjZW5kaW5nO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVOb2RlKGEsIGIpIHtcbiAgICByZXR1cm4gYSAmJiBiID8gY29tcGFyZShhLl9fZGF0YV9fLCBiLl9fZGF0YV9fKSA6ICFhIC0gIWI7XG4gIH1cblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzb3J0Z3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzb3J0Z3JvdXAgPSBzb3J0Z3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzb3J0Z3JvdXBbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0Z3JvdXAuc29ydChjb21wYXJlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzb3J0Z3JvdXBzLCB0aGlzLl9wYXJlbnRzKS5vcmRlcigpO1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG4iLCJleHBvcnQgdmFyIHhodG1sID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3ZnOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHhodG1sOiB4aHRtbCxcbiAgeGxpbms6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICB4bWw6IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCJcbn07XG4iLCJpbXBvcnQgbmFtZXNwYWNlcyBmcm9tIFwiLi9uYW1lc3BhY2VzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIHByZWZpeCA9IG5hbWUgKz0gXCJcIiwgaSA9IHByZWZpeC5pbmRleE9mKFwiOlwiKTtcbiAgaWYgKGkgPj0gMCAmJiAocHJlZml4ID0gbmFtZS5zbGljZSgwLCBpKSkgIT09IFwieG1sbnNcIikgbmFtZSA9IG5hbWUuc2xpY2UoaSArIDEpO1xuICByZXR1cm4gbmFtZXNwYWNlcy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpID8ge3NwYWNlOiBuYW1lc3BhY2VzW3ByZWZpeF0sIGxvY2FsOiBuYW1lfSA6IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG59XG4iLCJpbXBvcnQgbmFtZXNwYWNlIGZyb20gXCIuLi9uYW1lc3BhY2UuanNcIjtcblxuZnVuY3Rpb24gYXR0clJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clJlbW92ZU5TKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnROUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCB2KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBub2RlID0gdGhpcy5ub2RlKCk7XG4gICAgcmV0dXJuIGZ1bGxuYW1lLmxvY2FsXG4gICAgICAgID8gbm9kZS5nZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpXG4gICAgICAgIDogbm9kZS5nZXRBdHRyaWJ1dGUoZnVsbG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyUmVtb3ZlTlMgOiBhdHRyUmVtb3ZlKSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyRnVuY3Rpb25OUyA6IGF0dHJGdW5jdGlvbilcbiAgICAgIDogKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckNvbnN0YW50TlMgOiBhdHRyQ29uc3RhbnQpKSkoZnVsbG5hbWUsIHZhbHVlKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiAobm9kZS5vd25lckRvY3VtZW50ICYmIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgLy8gbm9kZSBpcyBhIE5vZGVcbiAgICAgIHx8IChub2RlLmRvY3VtZW50ICYmIG5vZGUpIC8vIG5vZGUgaXMgYSBXaW5kb3dcbiAgICAgIHx8IG5vZGUuZGVmYXVsdFZpZXc7IC8vIG5vZGUgaXMgYSBEb2N1bWVudFxufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2LCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgICA/IHN0eWxlUmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgOiBzdHlsZUNvbnN0YW50KShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpXG4gICAgICA6IHN0eWxlVmFsdWUodGhpcy5ub2RlKCksIG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVWYWx1ZShub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgIHx8IGRlZmF1bHRWaWV3KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbn1cbiIsImZ1bmN0aW9uIHByb3BlcnR5UmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzW25hbWVdO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSBkZWxldGUgdGhpc1tuYW1lXTtcbiAgICBlbHNlIHRoaXNbbmFtZV0gPSB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBwcm9wZXJ0eVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBwcm9wZXJ0eUZ1bmN0aW9uXG4gICAgICAgICAgOiBwcm9wZXJ0eUNvbnN0YW50KShuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpW25hbWVdO1xufVxuIiwiZnVuY3Rpb24gY2xhc3NBcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50cmltKCkuc3BsaXQoL158XFxzKy8pO1xufVxuXG5mdW5jdGlvbiBjbGFzc0xpc3Qobm9kZSkge1xuICByZXR1cm4gbm9kZS5jbGFzc0xpc3QgfHwgbmV3IENsYXNzTGlzdChub2RlKTtcbn1cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KG5vZGUpIHtcbiAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIHRoaXMuX25hbWVzID0gY2xhc3NBcnJheShub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xufVxuXG5DbGFzc0xpc3QucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5fbmFtZXMuc3BsaWNlKGksIDEpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICBjb250YWluczogZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpID49IDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNsYXNzZWRBZGQobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QuYWRkKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFJlbW92ZShub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5yZW1vdmUobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkVHJ1ZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZEFkZCh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGYWxzZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZFJlbW92ZSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGdW5jdGlvbihuYW1lcywgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICh2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gY2xhc3NlZEFkZCA6IGNsYXNzZWRSZW1vdmUpKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWVzID0gY2xhc3NBcnJheShuYW1lICsgXCJcIik7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIGxpc3QgPSBjbGFzc0xpc3QodGhpcy5ub2RlKCkpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIGlmICghbGlzdC5jb250YWlucyhuYW1lc1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGNsYXNzZWRGdW5jdGlvbiA6IHZhbHVlXG4gICAgICA/IGNsYXNzZWRUcnVlXG4gICAgICA6IGNsYXNzZWRGYWxzZSkobmFtZXMsIHZhbHVlKSk7XG59XG4iLCJmdW5jdGlvbiB0ZXh0UmVtb3ZlKCkge1xuICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHRleHRSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHRleHRGdW5jdGlvblxuICAgICAgICAgIDogdGV4dENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLnRleHRDb250ZW50O1xufVxuIiwiZnVuY3Rpb24gaHRtbFJlbW92ZSgpIHtcbiAgdGhpcy5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBodG1sQ29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGh0bWxGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBodG1sUmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBodG1sRnVuY3Rpb25cbiAgICAgICAgICA6IGh0bWxDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS5pbm5lckhUTUw7XG59XG4iLCJmdW5jdGlvbiByYWlzZSgpIHtcbiAgaWYgKHRoaXMubmV4dFNpYmxpbmcpIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmFpc2UpO1xufVxuIiwiZnVuY3Rpb24gbG93ZXIoKSB7XG4gIGlmICh0aGlzLnByZXZpb3VzU2libGluZykgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLCB0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKGxvd2VyKTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4vbmFtZXNwYWNlLmpzXCI7XG5pbXBvcnQge3hodG1sfSBmcm9tIFwiLi9uYW1lc3BhY2VzLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0b3JJbmhlcml0KG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudCxcbiAgICAgICAgdXJpID0gdGhpcy5uYW1lc3BhY2VVUkk7XG4gICAgcmV0dXJuIHVyaSA9PT0geGh0bWwgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0geGh0bWxcbiAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHVyaSwgbmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0b3JGaXhlZChmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiAoZnVsbG5hbWUubG9jYWxcbiAgICAgID8gY3JlYXRvckZpeGVkXG4gICAgICA6IGNyZWF0b3JJbmhlcml0KShmdWxsbmFtZSk7XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3Rvci5qc1wiO1xuXG5mdW5jdGlvbiBjb25zdGFudE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBiZWZvcmUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKSxcbiAgICAgIHNlbGVjdCA9IGJlZm9yZSA9PSBudWxsID8gY29uc3RhbnROdWxsIDogdHlwZW9mIGJlZm9yZSA9PT0gXCJmdW5jdGlvblwiID8gYmVmb3JlIDogc2VsZWN0b3IoYmVmb3JlKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gcmVtb3ZlKCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJlbW92ZSk7XG59XG4iLCJmdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KCkge1xuICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lTm9kZShmYWxzZSksIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRoaXMubmV4dFNpYmxpbmcpIDogY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZURlZXAoKSB7XG4gIHZhciBjbG9uZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpLCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIHJldHVybiBwYXJlbnQgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCB0aGlzLm5leHRTaWJsaW5nKSA6IGNsb25lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkZWVwKSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdChkZWVwID8gc2VsZWN0aW9uX2Nsb25lRGVlcCA6IHNlbGVjdGlvbl9jbG9uZVNoYWxsb3cpO1xufVxuIiwiZnVuY3Rpb24gY29udGV4dExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQsIHRoaXMuX19kYXRhX18pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblJlbW92ZSh0eXBlbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uO1xuICAgIGlmICghb24pIHJldHVybjtcbiAgICBmb3IgKHZhciBqID0gMCwgaSA9IC0xLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAobyA9IG9uW2pdLCAoIXR5cGVuYW1lLnR5cGUgfHwgby50eXBlID09PSB0eXBlbmFtZS50eXBlKSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uWysraV0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoKytpKSBvbi5sZW5ndGggPSBpO1xuICAgIGVsc2UgZGVsZXRlIHRoaXMuX19vbjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25BZGQodHlwZW5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb24sIG8sIGxpc3RlbmVyID0gY29udGV4dExpc3RlbmVyKHZhbHVlKTtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAoKG8gPSBvbltqXSkudHlwZSA9PT0gdHlwZW5hbWUudHlwZSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciA9IGxpc3RlbmVyLCBvLm9wdGlvbnMgPSBvcHRpb25zKTtcbiAgICAgICAgby52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih0eXBlbmFtZS50eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgbyA9IHt0eXBlOiB0eXBlbmFtZS50eXBlLCBuYW1lOiB0eXBlbmFtZS5uYW1lLCB2YWx1ZTogdmFsdWUsIGxpc3RlbmVyOiBsaXN0ZW5lciwgb3B0aW9uczogb3B0aW9uc307XG4gICAgaWYgKCFvbikgdGhpcy5fX29uID0gW29dO1xuICAgIGVsc2Ugb24ucHVzaChvKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZW5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB0eXBlbmFtZXMgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIpLCBpLCBuID0gdHlwZW5hbWVzLmxlbmd0aCwgdDtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgb24gPSB0aGlzLm5vZGUoKS5fX29uO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGZvciAoaSA9IDAsIG8gPSBvbltqXTsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoKHQgPSB0eXBlbmFtZXNbaV0pLnR5cGUgPT09IG8udHlwZSAmJiB0Lm5hbWUgPT09IG8ubmFtZSkge1xuICAgICAgICAgIHJldHVybiBvLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIG9uID0gdmFsdWUgPyBvbkFkZCA6IG9uUmVtb3ZlO1xuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB0aGlzLmVhY2gob24odHlwZW5hbWVzW2ldLCB2YWx1ZSwgb3B0aW9ucykpO1xuICByZXR1cm4gdGhpcztcbn1cbiIsImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQobm9kZSwgdHlwZSwgcGFyYW1zKSB7XG4gIHZhciB3aW5kb3cgPSBkZWZhdWx0Vmlldyhub2RlKSxcbiAgICAgIGV2ZW50ID0gd2luZG93LkN1c3RvbUV2ZW50O1xuXG4gIGlmICh0eXBlb2YgZXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGV2ZW50ID0gbmV3IGV2ZW50KHR5cGUsIHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBpZiAocGFyYW1zKSBldmVudC5pbml0RXZlbnQodHlwZSwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlKSwgZXZlbnQuZGV0YWlsID0gcGFyYW1zLmRldGFpbDtcbiAgICBlbHNlIGV2ZW50LmluaXRFdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hDb25zdGFudCh0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gdGhpcy5lYWNoKCh0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gZGlzcGF0Y2hGdW5jdGlvblxuICAgICAgOiBkaXNwYXRjaENvbnN0YW50KSh0eXBlLCBwYXJhbXMpKTtcbn1cbiIsImltcG9ydCBzZWxlY3Rpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdENoaWxkIGZyb20gXCIuL3NlbGVjdENoaWxkLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdENoaWxkcmVuIGZyb20gXCIuL3NlbGVjdENoaWxkcmVuLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VudGVyIGZyb20gXCIuL2VudGVyLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2V4aXQgZnJvbSBcIi4vZXhpdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9qb2luIGZyb20gXCIuL2pvaW4uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2UuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fb3JkZXIgZnJvbSBcIi4vb3JkZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc29ydCBmcm9tIFwiLi9zb3J0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NhbGwgZnJvbSBcIi4vY2FsbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlcyBmcm9tIFwiLi9ub2Rlcy5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlIGZyb20gXCIuL25vZGUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2l6ZSBmcm9tIFwiLi9zaXplLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VtcHR5IGZyb20gXCIuL2VtcHR5LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VhY2ggZnJvbSBcIi4vZWFjaC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9hdHRyIGZyb20gXCIuL2F0dHIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcHJvcGVydHkgZnJvbSBcIi4vcHJvcGVydHkuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xhc3NlZCBmcm9tIFwiLi9jbGFzc2VkLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9odG1sIGZyb20gXCIuL2h0bWwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmFpc2UgZnJvbSBcIi4vcmFpc2UuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbG93ZXIgZnJvbSBcIi4vbG93ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXBwZW5kIGZyb20gXCIuL2FwcGVuZC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnNlcnQgZnJvbSBcIi4vaW5zZXJ0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xvbmUgZnJvbSBcIi4vY2xvbmUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0dW0gZnJvbSBcIi4vZGF0dW0uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fb24gZnJvbSBcIi4vb24uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGlzcGF0Y2ggZnJvbSBcIi4vZGlzcGF0Y2guanNcIjtcbmltcG9ydCBzZWxlY3Rpb25faXRlcmF0b3IgZnJvbSBcIi4vaXRlcmF0b3IuanNcIjtcblxuZXhwb3J0IHZhciByb290ID0gW251bGxdO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0aW9uKGdyb3VwcywgcGFyZW50cykge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XV0sIHJvb3QpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fc2VsZWN0aW9uKCkge1xuICByZXR1cm4gdGhpcztcbn1cblxuU2VsZWN0aW9uLnByb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBTZWxlY3Rpb24sXG4gIHNlbGVjdDogc2VsZWN0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiBzZWxlY3Rpb25fc2VsZWN0QWxsLFxuICBzZWxlY3RDaGlsZDogc2VsZWN0aW9uX3NlbGVjdENoaWxkLFxuICBzZWxlY3RDaGlsZHJlbjogc2VsZWN0aW9uX3NlbGVjdENoaWxkcmVuLFxuICBmaWx0ZXI6IHNlbGVjdGlvbl9maWx0ZXIsXG4gIGRhdGE6IHNlbGVjdGlvbl9kYXRhLFxuICBlbnRlcjogc2VsZWN0aW9uX2VudGVyLFxuICBleGl0OiBzZWxlY3Rpb25fZXhpdCxcbiAgam9pbjogc2VsZWN0aW9uX2pvaW4sXG4gIG1lcmdlOiBzZWxlY3Rpb25fbWVyZ2UsXG4gIHNlbGVjdGlvbjogc2VsZWN0aW9uX3NlbGVjdGlvbixcbiAgb3JkZXI6IHNlbGVjdGlvbl9vcmRlcixcbiAgc29ydDogc2VsZWN0aW9uX3NvcnQsXG4gIGNhbGw6IHNlbGVjdGlvbl9jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX25vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fbm9kZSxcbiAgc2l6ZTogc2VsZWN0aW9uX3NpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9lYWNoLFxuICBhdHRyOiBzZWxlY3Rpb25fYXR0cixcbiAgc3R5bGU6IHNlbGVjdGlvbl9zdHlsZSxcbiAgcHJvcGVydHk6IHNlbGVjdGlvbl9wcm9wZXJ0eSxcbiAgY2xhc3NlZDogc2VsZWN0aW9uX2NsYXNzZWQsXG4gIHRleHQ6IHNlbGVjdGlvbl90ZXh0LFxuICBodG1sOiBzZWxlY3Rpb25faHRtbCxcbiAgcmFpc2U6IHNlbGVjdGlvbl9yYWlzZSxcbiAgbG93ZXI6IHNlbGVjdGlvbl9sb3dlcixcbiAgYXBwZW5kOiBzZWxlY3Rpb25fYXBwZW5kLFxuICBpbnNlcnQ6IHNlbGVjdGlvbl9pbnNlcnQsXG4gIHJlbW92ZTogc2VsZWN0aW9uX3JlbW92ZSxcbiAgY2xvbmU6IHNlbGVjdGlvbl9jbG9uZSxcbiAgZGF0dW06IHNlbGVjdGlvbl9kYXR1bSxcbiAgb246IHNlbGVjdGlvbl9vbixcbiAgZGlzcGF0Y2g6IHNlbGVjdGlvbl9kaXNwYXRjaCxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IHNlbGVjdGlvbl9pdGVyYXRvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uO1xuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgYXJyYXkgZnJvbSBcIi4uL2FycmF5LmpzXCI7XG5pbXBvcnQgc2VsZWN0b3JBbGwgZnJvbSBcIi4uL3NlbGVjdG9yQWxsLmpzXCI7XG5cbmZ1bmN0aW9uIGFycmF5QWxsKHNlbGVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFycmF5KHNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ID09PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IGFycmF5QWxsKHNlbGVjdCk7XG4gIGVsc2Ugc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzdWJncm91cHMucHVzaChzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCBwYXJlbnRzKTtcbn1cbiIsIi8vIEdpdmVuIHNvbWV0aGluZyBhcnJheSBsaWtlIChvciBudWxsKSwgcmV0dXJucyBzb21ldGhpbmcgdGhhdCBpcyBzdHJpY3RseSBhblxuLy8gYXJyYXkuIFRoaXMgaXMgdXNlZCB0byBlbnN1cmUgdGhhdCBhcnJheS1saWtlIG9iamVjdHMgcGFzc2VkIHRvIGQzLnNlbGVjdEFsbFxuLy8gb3Igc2VsZWN0aW9uLnNlbGVjdEFsbCBhcmUgY29udmVydGVkIGludG8gcHJvcGVyIGFycmF5cyB3aGVuIGNyZWF0aW5nIGFcbi8vIHNlbGVjdGlvbjsgd2UgZG9u4oCZdCBldmVyIHdhbnQgdG8gY3JlYXRlIGEgc2VsZWN0aW9uIGJhY2tlZCBieSBhIGxpdmVcbi8vIEhUTUxDb2xsZWN0aW9uIG9yIE5vZGVMaXN0LiBIb3dldmVyLCBub3RlIHRoYXQgc2VsZWN0aW9uLnNlbGVjdEFsbCB3aWxsIHVzZSBhXG4vLyBzdGF0aWMgTm9kZUxpc3QgYXMgYSBncm91cCwgc2luY2UgaXQgc2FmZWx5IGRlcml2ZWQgZnJvbSBxdWVyeVNlbGVjdG9yQWxsLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXkoeCkge1xuICByZXR1cm4geCA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KHgpID8geCA6IEFycmF5LmZyb20oeCk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZS5qc1wiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9leGl0IHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvbmVudGVyLCBvbnVwZGF0ZSwgb25leGl0KSB7XG4gIHZhciBlbnRlciA9IHRoaXMuZW50ZXIoKSwgdXBkYXRlID0gdGhpcywgZXhpdCA9IHRoaXMuZXhpdCgpO1xuICBpZiAodHlwZW9mIG9uZW50ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGVudGVyID0gb25lbnRlcihlbnRlcik7XG4gICAgaWYgKGVudGVyKSBlbnRlciA9IGVudGVyLnNlbGVjdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIGVudGVyID0gZW50ZXIuYXBwZW5kKG9uZW50ZXIgKyBcIlwiKTtcbiAgfVxuICBpZiAob251cGRhdGUgIT0gbnVsbCkge1xuICAgIHVwZGF0ZSA9IG9udXBkYXRlKHVwZGF0ZSk7XG4gICAgaWYgKHVwZGF0ZSkgdXBkYXRlID0gdXBkYXRlLnNlbGVjdGlvbigpO1xuICB9XG4gIGlmIChvbmV4aXQgPT0gbnVsbCkgZXhpdC5yZW1vdmUoKTsgZWxzZSBvbmV4aXQoZXhpdCk7XG4gIHJldHVybiBlbnRlciAmJiB1cGRhdGUgPyBlbnRlci5tZXJnZSh1cGRhdGUpLm9yZGVyKCkgOiB1cGRhdGU7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICB2YXIgc2VsZWN0aW9uID0gY29udGV4dC5zZWxlY3Rpb24gPyBjb250ZXh0LnNlbGVjdGlvbigpIDogY29udGV4dDtcblxuICBmb3IgKHZhciBncm91cHMwID0gdGhpcy5fZ3JvdXBzLCBncm91cHMxID0gc2VsZWN0aW9uLl9ncm91cHMsIG0wID0gZ3JvdXBzMC5sZW5ndGgsIG0xID0gZ3JvdXBzMS5sZW5ndGgsIG0gPSBNYXRoLm1pbihtMCwgbTEpLCBtZXJnZXMgPSBuZXcgQXJyYXkobTApLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwMCA9IGdyb3VwczBbal0sIGdyb3VwMSA9IGdyb3VwczFbal0sIG4gPSBncm91cDAubGVuZ3RoLCBtZXJnZSA9IG1lcmdlc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXAwW2ldIHx8IGdyb3VwMVtpXSkge1xuICAgICAgICBtZXJnZVtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGogPCBtMDsgKytqKSB7XG4gICAgbWVyZ2VzW2pdID0gZ3JvdXBzMFtqXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAtMSwgbSA9IGdyb3Vwcy5sZW5ndGg7ICsraiA8IG07KSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSBncm91cC5sZW5ndGggLSAxLCBuZXh0ID0gZ3JvdXBbaV0sIG5vZGU7IC0taSA+PSAwOykge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBpZiAobmV4dCAmJiBub2RlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5leHQpIF4gNCkgbmV4dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBuZXh0KTtcbiAgICAgICAgbmV4dCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzWzBdO1xuICBhcmd1bWVudHNbMF0gPSB0aGlzO1xuICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgaWYgKG5vZGUpIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGxldCBzaXplID0gMDtcbiAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMpICsrc2l6ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gc2l6ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMubm9kZSgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgY2FsbGJhY2suY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIsIHZhbHVlKVxuICAgICAgOiB0aGlzLm5vZGUoKS5fX2RhdGFfXztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKigpIHtcbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHlpZWxkIG5vZGU7XG4gICAgfVxuICB9XG59XG4iLCJ2YXIgbm9vcCA9IHt2YWx1ZTogKCkgPT4ge319O1xuXG5mdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSBhcmd1bWVudHMubGVuZ3RoLCBfID0ge30sIHQ7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoISh0ID0gYXJndW1lbnRzW2ldICsgXCJcIikgfHwgKHQgaW4gXykgfHwgL1tcXHMuXS8udGVzdCh0KSkgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIiArIHQpO1xuICAgIF9bdF0gPSBbXTtcbiAgfVxuICByZXR1cm4gbmV3IERpc3BhdGNoKF8pO1xufVxuXG5mdW5jdGlvbiBEaXNwYXRjaChfKSB7XG4gIHRoaXMuXyA9IF87XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcywgdHlwZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIGlmICh0ICYmICF0eXBlcy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5EaXNwYXRjaC5wcm90b3R5cGUgPSBkaXNwYXRjaC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBEaXNwYXRjaCxcbiAgb246IGZ1bmN0aW9uKHR5cGVuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBfID0gdGhpcy5fLFxuICAgICAgICBUID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiLCBfKSxcbiAgICAgICAgdCxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gVC5sZW5ndGg7XG5cbiAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIG9mIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpICYmICh0ID0gZ2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUpKSkgcmV0dXJuIHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBudWxsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJlbW92ZSBjYWxsYmFja3Mgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2FsbGJhY2s6IFwiICsgY2FsbGJhY2spO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgY2FsbGJhY2spO1xuICAgICAgZWxzZSBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgZm9yICh0IGluIF8pIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb3B5ID0ge30sIF8gPSB0aGlzLl87XG4gICAgZm9yICh2YXIgdCBpbiBfKSBjb3B5W3RdID0gX1t0XS5zbGljZSgpO1xuICAgIHJldHVybiBuZXcgRGlzcGF0Y2goY29weSk7XG4gIH0sXG4gIGNhbGw6IGZ1bmN0aW9uKHR5cGUsIHRoYXQpIHtcbiAgICBpZiAoKG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMikgPiAwKSBmb3IgKHZhciBhcmdzID0gbmV3IEFycmF5KG4pLCBpID0gMCwgbiwgdDsgaSA8IG47ICsraSkgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbih0eXBlLCB0aGF0LCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXQodHlwZSwgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoLCBjOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKChjID0gdHlwZVtpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCh0eXBlLCBuYW1lLCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKHR5cGVbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdHlwZVtpXSA9IG5vb3AsIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpLmNvbmNhdCh0eXBlLnNsaWNlKGkgKyAxKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHR5cGUucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IGNhbGxiYWNrfSk7XG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaDtcbiIsInZhciBmcmFtZSA9IDAsIC8vIGlzIGFuIGFuaW1hdGlvbiBmcmFtZSBwZW5kaW5nP1xuICAgIHRpbWVvdXQgPSAwLCAvLyBpcyBhIHRpbWVvdXQgcGVuZGluZz9cbiAgICBpbnRlcnZhbCA9IDAsIC8vIGFyZSBhbnkgdGltZXJzIGFjdGl2ZT9cbiAgICBwb2tlRGVsYXkgPSAxMDAwLCAvLyBob3cgZnJlcXVlbnRseSB3ZSBjaGVjayBmb3IgY2xvY2sgc2tld1xuICAgIHRhc2tIZWFkLFxuICAgIHRhc2tUYWlsLFxuICAgIGNsb2NrTGFzdCA9IDAsXG4gICAgY2xvY2tOb3cgPSAwLFxuICAgIGNsb2NrU2tldyA9IDAsXG4gICAgY2xvY2sgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09IFwib2JqZWN0XCIgJiYgcGVyZm9ybWFuY2Uubm93ID8gcGVyZm9ybWFuY2UgOiBEYXRlLFxuICAgIHNldEZyYW1lID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdykgOiBmdW5jdGlvbihmKSB7IHNldFRpbWVvdXQoZiwgMTcpOyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gY2xvY2tOb3cgfHwgKHNldEZyYW1lKGNsZWFyTm93KSwgY2xvY2tOb3cgPSBjbG9jay5ub3coKSArIGNsb2NrU2tldyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTm93KCkge1xuICBjbG9ja05vdyA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaW1lcigpIHtcbiAgdGhpcy5fY2FsbCA9XG4gIHRoaXMuX3RpbWUgPVxuICB0aGlzLl9uZXh0ID0gbnVsbDtcbn1cblxuVGltZXIucHJvdG90eXBlID0gdGltZXIucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVGltZXIsXG4gIHJlc3RhcnQ6IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIHRpbWUgPSAodGltZSA9PSBudWxsID8gbm93KCkgOiArdGltZSkgKyAoZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXkpO1xuICAgIGlmICghdGhpcy5fbmV4dCAmJiB0YXNrVGFpbCAhPT0gdGhpcykge1xuICAgICAgaWYgKHRhc2tUYWlsKSB0YXNrVGFpbC5fbmV4dCA9IHRoaXM7XG4gICAgICBlbHNlIHRhc2tIZWFkID0gdGhpcztcbiAgICAgIHRhc2tUYWlsID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5fY2FsbCA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgIHNsZWVwKCk7XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYWxsKSB7XG4gICAgICB0aGlzLl9jYWxsID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWUgPSBJbmZpbml0eTtcbiAgICAgIHNsZWVwKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lckZsdXNoKCkge1xuICBub3coKTsgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUsIGlmIG5vdCBhbHJlYWR5IHNldC5cbiAgKytmcmFtZTsgLy8gUHJldGVuZCB3ZeKAmXZlIHNldCBhbiBhbGFybSwgaWYgd2UgaGF2ZW7igJl0IGFscmVhZHkuXG4gIHZhciB0ID0gdGFza0hlYWQsIGU7XG4gIHdoaWxlICh0KSB7XG4gICAgaWYgKChlID0gY2xvY2tOb3cgLSB0Ll90aW1lKSA+PSAwKSB0Ll9jYWxsLmNhbGwodW5kZWZpbmVkLCBlKTtcbiAgICB0ID0gdC5fbmV4dDtcbiAgfVxuICAtLWZyYW1lO1xufVxuXG5mdW5jdGlvbiB3YWtlKCkge1xuICBjbG9ja05vdyA9IChjbG9ja0xhc3QgPSBjbG9jay5ub3coKSkgKyBjbG9ja1NrZXc7XG4gIGZyYW1lID0gdGltZW91dCA9IDA7XG4gIHRyeSB7XG4gICAgdGltZXJGbHVzaCgpO1xuICB9IGZpbmFsbHkge1xuICAgIGZyYW1lID0gMDtcbiAgICBuYXAoKTtcbiAgICBjbG9ja05vdyA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9rZSgpIHtcbiAgdmFyIG5vdyA9IGNsb2NrLm5vdygpLCBkZWxheSA9IG5vdyAtIGNsb2NrTGFzdDtcbiAgaWYgKGRlbGF5ID4gcG9rZURlbGF5KSBjbG9ja1NrZXcgLT0gZGVsYXksIGNsb2NrTGFzdCA9IG5vdztcbn1cblxuZnVuY3Rpb24gbmFwKCkge1xuICB2YXIgdDAsIHQxID0gdGFza0hlYWQsIHQyLCB0aW1lID0gSW5maW5pdHk7XG4gIHdoaWxlICh0MSkge1xuICAgIGlmICh0MS5fY2FsbCkge1xuICAgICAgaWYgKHRpbWUgPiB0MS5fdGltZSkgdGltZSA9IHQxLl90aW1lO1xuICAgICAgdDAgPSB0MSwgdDEgPSB0MS5fbmV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdDIgPSB0MS5fbmV4dCwgdDEuX25leHQgPSBudWxsO1xuICAgICAgdDEgPSB0MCA/IHQwLl9uZXh0ID0gdDIgOiB0YXNrSGVhZCA9IHQyO1xuICAgIH1cbiAgfVxuICB0YXNrVGFpbCA9IHQwO1xuICBzbGVlcCh0aW1lKTtcbn1cblxuZnVuY3Rpb24gc2xlZXAodGltZSkge1xuICBpZiAoZnJhbWUpIHJldHVybjsgLy8gU29vbmVzdCBhbGFybSBhbHJlYWR5IHNldCwgb3Igd2lsbCBiZS5cbiAgaWYgKHRpbWVvdXQpIHRpbWVvdXQgPSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIHZhciBkZWxheSA9IHRpbWUgLSBjbG9ja05vdzsgLy8gU3RyaWN0bHkgbGVzcyB0aGFuIGlmIHdlIHJlY29tcHV0ZWQgY2xvY2tOb3cuXG4gIGlmIChkZWxheSA+IDI0KSB7XG4gICAgaWYgKHRpbWUgPCBJbmZpbml0eSkgdGltZW91dCA9IHNldFRpbWVvdXQod2FrZSwgdGltZSAtIGNsb2NrLm5vdygpIC0gY2xvY2tTa2V3KTtcbiAgICBpZiAoaW50ZXJ2YWwpIGludGVydmFsID0gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpbnRlcnZhbCkgY2xvY2tMYXN0ID0gY2xvY2subm93KCksIGludGVydmFsID0gc2V0SW50ZXJ2YWwocG9rZSwgcG9rZURlbGF5KTtcbiAgICBmcmFtZSA9IDEsIHNldEZyYW1lKHdha2UpO1xuICB9XG59XG4iLCJpbXBvcnQge1RpbWVyfSBmcm9tIFwiLi90aW1lci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIGRlbGF5ID0gZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXk7XG4gIHQucmVzdGFydChlbGFwc2VkID0+IHtcbiAgICB0LnN0b3AoKTtcbiAgICBjYWxsYmFjayhlbGFwc2VkICsgZGVsYXkpO1xuICB9LCBkZWxheSwgdGltZSk7XG4gIHJldHVybiB0O1xufVxuIiwiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3RpbWVyLCB0aW1lb3V0fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGVtcHR5T24gPSBkaXNwYXRjaChcInN0YXJ0XCIsIFwiZW5kXCIsIFwiY2FuY2VsXCIsIFwiaW50ZXJydXB0XCIpO1xudmFyIGVtcHR5VHdlZW4gPSBbXTtcblxuZXhwb3J0IHZhciBDUkVBVEVEID0gMDtcbmV4cG9ydCB2YXIgU0NIRURVTEVEID0gMTtcbmV4cG9ydCB2YXIgU1RBUlRJTkcgPSAyO1xuZXhwb3J0IHZhciBTVEFSVEVEID0gMztcbmV4cG9ydCB2YXIgUlVOTklORyA9IDQ7XG5leHBvcnQgdmFyIEVORElORyA9IDU7XG5leHBvcnQgdmFyIEVOREVEID0gNjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSwgaWQsIGluZGV4LCBncm91cCwgdGltaW5nKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZXMpIG5vZGUuX190cmFuc2l0aW9uID0ge307XG4gIGVsc2UgaWYgKGlkIGluIHNjaGVkdWxlcykgcmV0dXJuO1xuICBjcmVhdGUobm9kZSwgaWQsIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGluZGV4OiBpbmRleCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIGdyb3VwOiBncm91cCwgLy8gRm9yIGNvbnRleHQgZHVyaW5nIGNhbGxiYWNrLlxuICAgIG9uOiBlbXB0eU9uLFxuICAgIHR3ZWVuOiBlbXB0eVR3ZWVuLFxuICAgIHRpbWU6IHRpbWluZy50aW1lLFxuICAgIGRlbGF5OiB0aW1pbmcuZGVsYXksXG4gICAgZHVyYXRpb246IHRpbWluZy5kdXJhdGlvbixcbiAgICBlYXNlOiB0aW1pbmcuZWFzZSxcbiAgICB0aW1lcjogbnVsbCxcbiAgICBzdGF0ZTogQ1JFQVRFRFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gQ1JFQVRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgc2NoZWR1bGVkXCIpO1xuICByZXR1cm4gc2NoZWR1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQobm9kZSwgaWQpIHtcbiAgdmFyIHNjaGVkdWxlID0gZ2V0KG5vZGUsIGlkKTtcbiAgaWYgKHNjaGVkdWxlLnN0YXRlID4gU1RBUlRFRCkgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgcnVubmluZ1wiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IG5vZGUuX190cmFuc2l0aW9uO1xuICBpZiAoIXNjaGVkdWxlIHx8ICEoc2NoZWR1bGUgPSBzY2hlZHVsZVtpZF0pKSB0aHJvdyBuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIG5vdCBmb3VuZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUobm9kZSwgaWQsIHNlbGYpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgdHdlZW47XG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgc2VsZiB0aW1lciB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGNyZWF0ZWQuXG4gIC8vIE5vdGUgdGhlIGFjdHVhbCBkZWxheSBpcyBub3Qga25vd24gdW50aWwgdGhlIGZpcnN0IGNhbGxiYWNrIVxuICBzY2hlZHVsZXNbaWRdID0gc2VsZjtcbiAgc2VsZi50aW1lciA9IHRpbWVyKHNjaGVkdWxlLCAwLCBzZWxmLnRpbWUpO1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlKGVsYXBzZWQpIHtcbiAgICBzZWxmLnN0YXRlID0gU0NIRURVTEVEO1xuICAgIHNlbGYudGltZXIucmVzdGFydChzdGFydCwgc2VsZi5kZWxheSwgc2VsZi50aW1lKTtcblxuICAgIC8vIElmIHRoZSBlbGFwc2VkIGRlbGF5IGlzIGxlc3MgdGhhbiBvdXIgZmlyc3Qgc2xlZXAsIHN0YXJ0IGltbWVkaWF0ZWx5LlxuICAgIGlmIChzZWxmLmRlbGF5IDw9IGVsYXBzZWQpIHN0YXJ0KGVsYXBzZWQgLSBzZWxmLmRlbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGVsYXBzZWQpIHtcbiAgICB2YXIgaSwgaiwgbiwgbztcblxuICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBub3QgU0NIRURVTEVELCB0aGVuIHdlIHByZXZpb3VzbHkgZXJyb3JlZCBvbiBzdGFydC5cbiAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gU0NIRURVTEVEKSByZXR1cm4gc3RvcCgpO1xuXG4gICAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgICAgbyA9IHNjaGVkdWxlc1tpXTtcbiAgICAgIGlmIChvLm5hbWUgIT09IHNlbGYubmFtZSkgY29udGludWU7XG5cbiAgICAgIC8vIFdoaWxlIHRoaXMgZWxlbWVudCBhbHJlYWR5IGhhcyBhIHN0YXJ0aW5nIHRyYW5zaXRpb24gZHVyaW5nIHRoaXMgZnJhbWUsXG4gICAgICAvLyBkZWZlciBzdGFydGluZyBhbiBpbnRlcnJ1cHRpbmcgdHJhbnNpdGlvbiB1bnRpbCB0aGF0IHRyYW5zaXRpb24gaGFzIGFcbiAgICAgIC8vIGNoYW5jZSB0byB0aWNrIChhbmQgcG9zc2libHkgZW5kKTsgc2VlIGQzL2QzLXRyYW5zaXRpb24jNTQhXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gU1RBUlRFRCkgcmV0dXJuIHRpbWVvdXQoc3RhcnQpO1xuXG4gICAgICAvLyBJbnRlcnJ1cHQgdGhlIGFjdGl2ZSB0cmFuc2l0aW9uLCBpZiBhbnkuXG4gICAgICBpZiAoby5zdGF0ZSA9PT0gUlVOTklORykge1xuICAgICAgICBvLnN0YXRlID0gRU5ERUQ7XG4gICAgICAgIG8udGltZXIuc3RvcCgpO1xuICAgICAgICBvLm9uLmNhbGwoXCJpbnRlcnJ1cHRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgby5pbmRleCwgby5ncm91cCk7XG4gICAgICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gICAgICB9XG5cbiAgICAgIC8vIENhbmNlbCBhbnkgcHJlLWVtcHRlZCB0cmFuc2l0aW9ucy5cbiAgICAgIGVsc2UgaWYgKCtpIDwgaWQpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgby5vbi5jYWxsKFwiY2FuY2VsXCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIG8uaW5kZXgsIG8uZ3JvdXApO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlZmVyIHRoZSBmaXJzdCB0aWNrIHRvIGVuZCBvZiB0aGUgY3VycmVudCBmcmFtZTsgc2VlIGQzL2QzIzE1NzYuXG4gICAgLy8gTm90ZSB0aGUgdHJhbnNpdGlvbiBtYXkgYmUgY2FuY2VsZWQgYWZ0ZXIgc3RhcnQgYW5kIGJlZm9yZSB0aGUgZmlyc3QgdGljayFcbiAgICAvLyBOb3RlIHRoaXMgbXVzdCBiZSBzY2hlZHVsZWQgYmVmb3JlIHRoZSBzdGFydCBldmVudDsgc2VlIGQzL2QzLXRyYW5zaXRpb24jMTYhXG4gICAgLy8gQXNzdW1pbmcgdGhpcyBpcyBzdWNjZXNzZnVsLCBzdWJzZXF1ZW50IGNhbGxiYWNrcyBnbyBzdHJhaWdodCB0byB0aWNrLlxuICAgIHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gU1RBUlRFRCkge1xuICAgICAgICBzZWxmLnN0YXRlID0gUlVOTklORztcbiAgICAgICAgc2VsZi50aW1lci5yZXN0YXJ0KHRpY2ssIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG4gICAgICAgIHRpY2soZWxhcHNlZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgc3RhcnQgZXZlbnQuXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgdGhlIHR3ZWVuIGFyZSBpbml0aWFsaXplZC5cbiAgICBzZWxmLnN0YXRlID0gU1RBUlRJTkc7XG4gICAgc2VsZi5vbi5jYWxsKFwic3RhcnRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNUQVJUSU5HKSByZXR1cm47IC8vIGludGVycnVwdGVkXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJURUQ7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSB0d2VlbiwgZGVsZXRpbmcgbnVsbCB0d2Vlbi5cbiAgICB0d2VlbiA9IG5ldyBBcnJheShuID0gc2VsZi50d2Vlbi5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDAsIGogPSAtMTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG8gPSBzZWxmLnR3ZWVuW2ldLnZhbHVlLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCkpIHtcbiAgICAgICAgdHdlZW5bKytqXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIHR3ZWVuLmxlbmd0aCA9IGogKyAxO1xuICB9XG5cbiAgZnVuY3Rpb24gdGljayhlbGFwc2VkKSB7XG4gICAgdmFyIHQgPSBlbGFwc2VkIDwgc2VsZi5kdXJhdGlvbiA/IHNlbGYuZWFzZS5jYWxsKG51bGwsIGVsYXBzZWQgLyBzZWxmLmR1cmF0aW9uKSA6IChzZWxmLnRpbWVyLnJlc3RhcnQoc3RvcCksIHNlbGYuc3RhdGUgPSBFTkRJTkcsIDEpLFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSB0d2Vlbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgdHdlZW5baV0uY2FsbChub2RlLCB0KTtcbiAgICB9XG5cbiAgICAvLyBEaXNwYXRjaCB0aGUgZW5kIGV2ZW50LlxuICAgIGlmIChzZWxmLnN0YXRlID09PSBFTkRJTkcpIHtcbiAgICAgIHNlbGYub24uY2FsbChcImVuZFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzZWxmLmluZGV4LCBzZWxmLmdyb3VwKTtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHNlbGYuc3RhdGUgPSBFTkRFRDtcbiAgICBzZWxmLnRpbWVyLnN0b3AoKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2lkXTtcbiAgICBmb3IgKHZhciBpIGluIHNjaGVkdWxlcykgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgZGVsZXRlIG5vZGUuX190cmFuc2l0aW9uO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICogKDEgLSB0KSArIGIgKiB0O1xuICB9O1xufVxuIiwidmFyIGRlZ3JlZXMgPSAxODAgLyBNYXRoLlBJO1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0ge1xuICB0cmFuc2xhdGVYOiAwLFxuICB0cmFuc2xhdGVZOiAwLFxuICByb3RhdGU6IDAsXG4gIHNrZXdYOiAwLFxuICBzY2FsZVg6IDEsXG4gIHNjYWxlWTogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYiwgYywgZCwgZSwgZikge1xuICB2YXIgc2NhbGVYLCBzY2FsZVksIHNrZXdYO1xuICBpZiAoc2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpKSBhIC89IHNjYWxlWCwgYiAvPSBzY2FsZVg7XG4gIGlmIChza2V3WCA9IGEgKiBjICsgYiAqIGQpIGMgLT0gYSAqIHNrZXdYLCBkIC09IGIgKiBza2V3WDtcbiAgaWYgKHNjYWxlWSA9IE1hdGguc3FydChjICogYyArIGQgKiBkKSkgYyAvPSBzY2FsZVksIGQgLz0gc2NhbGVZLCBza2V3WCAvPSBzY2FsZVk7XG4gIGlmIChhICogZCA8IGIgKiBjKSBhID0gLWEsIGIgPSAtYiwgc2tld1ggPSAtc2tld1gsIHNjYWxlWCA9IC1zY2FsZVg7XG4gIHJldHVybiB7XG4gICAgdHJhbnNsYXRlWDogZSxcbiAgICB0cmFuc2xhdGVZOiBmLFxuICAgIHJvdGF0ZTogTWF0aC5hdGFuMihiLCBhKSAqIGRlZ3JlZXMsXG4gICAgc2tld1g6IE1hdGguYXRhbihza2V3WCkgKiBkZWdyZWVzLFxuICAgIHNjYWxlWDogc2NhbGVYLFxuICAgIHNjYWxlWTogc2NhbGVZXG4gIH07XG59XG4iLCJpbXBvcnQgZGVjb21wb3NlLCB7aWRlbnRpdHl9IGZyb20gXCIuL2RlY29tcG9zZS5qc1wiO1xuXG52YXIgc3ZnTm9kZTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNzcyh2YWx1ZSkge1xuICBjb25zdCBtID0gbmV3ICh0eXBlb2YgRE9NTWF0cml4ID09PSBcImZ1bmN0aW9uXCIgPyBET01NYXRyaXggOiBXZWJLaXRDU1NNYXRyaXgpKHZhbHVlICsgXCJcIik7XG4gIHJldHVybiBtLmlzSWRlbnRpdHkgPyBpZGVudGl0eSA6IGRlY29tcG9zZShtLmEsIG0uYiwgbS5jLCBtLmQsIG0uZSwgbS5mKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3ZnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gaWRlbnRpdHk7XG4gIGlmICghc3ZnTm9kZSkgc3ZnTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcbiAgc3ZnTm9kZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdmFsdWUpO1xuICBpZiAoISh2YWx1ZSA9IHN2Z05vZGUudHJhbnNmb3JtLmJhc2VWYWwuY29uc29saWRhdGUoKSkpIHJldHVybiBpZGVudGl0eTtcbiAgdmFsdWUgPSB2YWx1ZS5tYXRyaXg7XG4gIHJldHVybiBkZWNvbXBvc2UodmFsdWUuYSwgdmFsdWUuYiwgdmFsdWUuYywgdmFsdWUuZCwgdmFsdWUuZSwgdmFsdWUuZik7XG59XG4iLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuLi9udW1iZXIuanNcIjtcbmltcG9ydCB7cGFyc2VDc3MsIHBhcnNlU3ZnfSBmcm9tIFwiLi9wYXJzZS5qc1wiO1xuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZSwgcHhDb21tYSwgcHhQYXJlbiwgZGVnUGFyZW4pIHtcblxuICBmdW5jdGlvbiBwb3Aocykge1xuICAgIHJldHVybiBzLmxlbmd0aCA/IHMucG9wKCkgKyBcIiBcIiA6IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2xhdGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2goXCJ0cmFuc2xhdGUoXCIsIG51bGwsIHB4Q29tbWEsIG51bGwsIHB4UGFyZW4pO1xuICAgICAgcS5wdXNoKHtpOiBpIC0gNCwgeDogbnVtYmVyKHhhLCB4Yil9LCB7aTogaSAtIDIsIHg6IG51bWJlcih5YSwgeWIpfSk7XG4gICAgfSBlbHNlIGlmICh4YiB8fCB5Yikge1xuICAgICAgcy5wdXNoKFwidHJhbnNsYXRlKFwiICsgeGIgKyBweENvbW1hICsgeWIgKyBweFBhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGUoYSwgYiwgcywgcSkge1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBpZiAoYSAtIGIgPiAxODApIGIgKz0gMzYwOyBlbHNlIGlmIChiIC0gYSA+IDE4MCkgYSArPSAzNjA7IC8vIHNob3J0ZXN0IHBhdGhcbiAgICAgIHEucHVzaCh7aTogcy5wdXNoKHBvcChzKSArIFwicm90YXRlKFwiLCBudWxsLCBkZWdQYXJlbikgLSAyLCB4OiBudW1iZXIoYSwgYil9KTtcbiAgICB9IGVsc2UgaWYgKGIpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2tld1goYSwgYiwgcywgcSkge1xuICAgIGlmIChhICE9PSBiKSB7XG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInNrZXdYKFwiLCBudWxsLCBkZWdQYXJlbikgLSAyLCB4OiBudW1iZXIoYSwgYil9KTtcbiAgICB9IGVsc2UgaWYgKGIpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNrZXdYKFwiICsgYiArIGRlZ1BhcmVuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY2FsZSh4YSwgeWEsIHhiLCB5YiwgcywgcSkge1xuICAgIGlmICh4YSAhPT0geGIgfHwgeWEgIT09IHliKSB7XG4gICAgICB2YXIgaSA9IHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiLCBudWxsLCBcIixcIiwgbnVsbCwgXCIpXCIpO1xuICAgICAgcS5wdXNoKHtpOiBpIC0gNCwgeDogbnVtYmVyKHhhLCB4Yil9LCB7aTogaSAtIDIsIHg6IG51bWJlcih5YSwgeWIpfSk7XG4gICAgfSBlbHNlIGlmICh4YiAhPT0gMSB8fCB5YiAhPT0gMSkge1xuICAgICAgcy5wdXNoKHBvcChzKSArIFwic2NhbGUoXCIgKyB4YiArIFwiLFwiICsgeWIgKyBcIilcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuICAgIGEgPSBwYXJzZShhKSwgYiA9IHBhcnNlKGIpO1xuICAgIHRyYW5zbGF0ZShhLnRyYW5zbGF0ZVgsIGEudHJhbnNsYXRlWSwgYi50cmFuc2xhdGVYLCBiLnRyYW5zbGF0ZVksIHMsIHEpO1xuICAgIHJvdGF0ZShhLnJvdGF0ZSwgYi5yb3RhdGUsIHMsIHEpO1xuICAgIHNrZXdYKGEuc2tld1gsIGIuc2tld1gsIHMsIHEpO1xuICAgIHNjYWxlKGEuc2NhbGVYLCBhLnNjYWxlWSwgYi5zY2FsZVgsIGIuc2NhbGVZLCBzLCBxKTtcbiAgICBhID0gYiA9IG51bGw7IC8vIGdjXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBpID0gLTEsIG4gPSBxLmxlbmd0aCwgbztcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgaW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MgPSBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZUNzcywgXCJweCwgXCIsIFwicHgpXCIsIFwiZGVnKVwiKTtcbmV4cG9ydCB2YXIgaW50ZXJwb2xhdGVUcmFuc2Zvcm1TdmcgPSBpbnRlcnBvbGF0ZVRyYW5zZm9ybShwYXJzZVN2ZywgXCIsIFwiLCBcIilcIiwgXCIpXCIpO1xuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gdHdlZW5SZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9IHR3ZWVuMCA9IHR3ZWVuO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMSA9IHR3ZWVuMS5zbGljZSgpO1xuICAgICAgICAgIHR3ZWVuMS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHdlZW5GdW5jdGlvbihpZCwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIHR3ZWVuID0gc2NoZWR1bGUudHdlZW47XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIHR3ZWVuIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIHR3ZWVuIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmICh0d2VlbiAhPT0gdHdlZW4wKSB7XG4gICAgICB0d2VlbjEgPSAodHdlZW4wID0gdHdlZW4pLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciB0ID0ge25hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0sIGkgPSAwLCBuID0gdHdlZW4xLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodHdlZW4xW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICB0d2VlbjFbaV0gPSB0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gbikgdHdlZW4xLnB1c2godCk7XG4gICAgfVxuXG4gICAgc2NoZWR1bGUudHdlZW4gPSB0d2VlbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIG5hbWUgKz0gXCJcIjtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgdHdlZW4gPSBnZXQodGhpcy5ub2RlKCksIGlkKS50d2VlbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuLmxlbmd0aCwgdDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh0ID0gdHdlZW5baV0pLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbCA/IHR3ZWVuUmVtb3ZlIDogdHdlZW5GdW5jdGlvbikoaWQsIG5hbWUsIHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0d2VlblZhbHVlKHRyYW5zaXRpb24sIG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRyYW5zaXRpb24uX2lkO1xuXG4gIHRyYW5zaXRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpO1xuICAgIChzY2hlZHVsZS52YWx1ZSB8fCAoc2NoZWR1bGUudmFsdWUgPSB7fSkpW25hbWVdID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gZ2V0KG5vZGUsIGlkKS52YWx1ZVtuYW1lXTtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnN0cnVjdG9yLCBmYWN0b3J5LCBwcm90b3R5cGUpIHtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gZmFjdG9yeS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHBhcmVudCwgZGVmaW5pdGlvbikge1xuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQucHJvdG90eXBlKTtcbiAgZm9yICh2YXIga2V5IGluIGRlZmluaXRpb24pIHByb3RvdHlwZVtrZXldID0gZGVmaW5pdGlvbltrZXldO1xuICByZXR1cm4gcHJvdG90eXBlO1xufVxuIiwiaW1wb3J0IGRlZmluZSwge2V4dGVuZH0gZnJvbSBcIi4vZGVmaW5lLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2xvcigpIHt9XG5cbmV4cG9ydCB2YXIgZGFya2VyID0gMC43O1xuZXhwb3J0IHZhciBicmlnaHRlciA9IDEgLyBkYXJrZXI7XG5cbnZhciByZUkgPSBcIlxcXFxzKihbKy1dP1xcXFxkKylcXFxccypcIixcbiAgICByZU4gPSBcIlxcXFxzKihbKy1dPyg/OlxcXFxkKlxcXFwuKT9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcXFxccypcIixcbiAgICByZVAgPSBcIlxcXFxzKihbKy1dPyg/OlxcXFxkKlxcXFwuKT9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPyklXFxcXHMqXCIsXG4gICAgcmVIZXggPSAvXiMoWzAtOWEtZl17Myw4fSkkLyxcbiAgICByZVJnYkludGVnZXIgPSBuZXcgUmVnRXhwKGBecmdiXFxcXCgke3JlSX0sJHtyZUl9LCR7cmVJfVxcXFwpJGApLFxuICAgIHJlUmdiUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5yZ2JcXFxcKCR7cmVQfSwke3JlUH0sJHtyZVB9XFxcXCkkYCksXG4gICAgcmVSZ2JhSW50ZWdlciA9IG5ldyBSZWdFeHAoYF5yZ2JhXFxcXCgke3JlSX0sJHtyZUl9LCR7cmVJfSwke3JlTn1cXFxcKSRgKSxcbiAgICByZVJnYmFQZXJjZW50ID0gbmV3IFJlZ0V4cChgXnJnYmFcXFxcKCR7cmVQfSwke3JlUH0sJHtyZVB9LCR7cmVOfVxcXFwpJGApLFxuICAgIHJlSHNsUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5oc2xcXFxcKCR7cmVOfSwke3JlUH0sJHtyZVB9XFxcXCkkYCksXG4gICAgcmVIc2xhUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5oc2xhXFxcXCgke3JlTn0sJHtyZVB9LCR7cmVQfSwke3JlTn1cXFxcKSRgKTtcblxudmFyIG5hbWVkID0ge1xuICBhbGljZWJsdWU6IDB4ZjBmOGZmLFxuICBhbnRpcXVld2hpdGU6IDB4ZmFlYmQ3LFxuICBhcXVhOiAweDAwZmZmZixcbiAgYXF1YW1hcmluZTogMHg3ZmZmZDQsXG4gIGF6dXJlOiAweGYwZmZmZixcbiAgYmVpZ2U6IDB4ZjVmNWRjLFxuICBiaXNxdWU6IDB4ZmZlNGM0LFxuICBibGFjazogMHgwMDAwMDAsXG4gIGJsYW5jaGVkYWxtb25kOiAweGZmZWJjZCxcbiAgYmx1ZTogMHgwMDAwZmYsXG4gIGJsdWV2aW9sZXQ6IDB4OGEyYmUyLFxuICBicm93bjogMHhhNTJhMmEsXG4gIGJ1cmx5d29vZDogMHhkZWI4ODcsXG4gIGNhZGV0Ymx1ZTogMHg1ZjllYTAsXG4gIGNoYXJ0cmV1c2U6IDB4N2ZmZjAwLFxuICBjaG9jb2xhdGU6IDB4ZDI2OTFlLFxuICBjb3JhbDogMHhmZjdmNTAsXG4gIGNvcm5mbG93ZXJibHVlOiAweDY0OTVlZCxcbiAgY29ybnNpbGs6IDB4ZmZmOGRjLFxuICBjcmltc29uOiAweGRjMTQzYyxcbiAgY3lhbjogMHgwMGZmZmYsXG4gIGRhcmtibHVlOiAweDAwMDA4YixcbiAgZGFya2N5YW46IDB4MDA4YjhiLFxuICBkYXJrZ29sZGVucm9kOiAweGI4ODYwYixcbiAgZGFya2dyYXk6IDB4YTlhOWE5LFxuICBkYXJrZ3JlZW46IDB4MDA2NDAwLFxuICBkYXJrZ3JleTogMHhhOWE5YTksXG4gIGRhcmtraGFraTogMHhiZGI3NmIsXG4gIGRhcmttYWdlbnRhOiAweDhiMDA4YixcbiAgZGFya29saXZlZ3JlZW46IDB4NTU2YjJmLFxuICBkYXJrb3JhbmdlOiAweGZmOGMwMCxcbiAgZGFya29yY2hpZDogMHg5OTMyY2MsXG4gIGRhcmtyZWQ6IDB4OGIwMDAwLFxuICBkYXJrc2FsbW9uOiAweGU5OTY3YSxcbiAgZGFya3NlYWdyZWVuOiAweDhmYmM4ZixcbiAgZGFya3NsYXRlYmx1ZTogMHg0ODNkOGIsXG4gIGRhcmtzbGF0ZWdyYXk6IDB4MmY0ZjRmLFxuICBkYXJrc2xhdGVncmV5OiAweDJmNGY0ZixcbiAgZGFya3R1cnF1b2lzZTogMHgwMGNlZDEsXG4gIGRhcmt2aW9sZXQ6IDB4OTQwMGQzLFxuICBkZWVwcGluazogMHhmZjE0OTMsXG4gIGRlZXBza3libHVlOiAweDAwYmZmZixcbiAgZGltZ3JheTogMHg2OTY5NjksXG4gIGRpbWdyZXk6IDB4Njk2OTY5LFxuICBkb2RnZXJibHVlOiAweDFlOTBmZixcbiAgZmlyZWJyaWNrOiAweGIyMjIyMixcbiAgZmxvcmFsd2hpdGU6IDB4ZmZmYWYwLFxuICBmb3Jlc3RncmVlbjogMHgyMjhiMjIsXG4gIGZ1Y2hzaWE6IDB4ZmYwMGZmLFxuICBnYWluc2Jvcm86IDB4ZGNkY2RjLFxuICBnaG9zdHdoaXRlOiAweGY4ZjhmZixcbiAgZ29sZDogMHhmZmQ3MDAsXG4gIGdvbGRlbnJvZDogMHhkYWE1MjAsXG4gIGdyYXk6IDB4ODA4MDgwLFxuICBncmVlbjogMHgwMDgwMDAsXG4gIGdyZWVueWVsbG93OiAweGFkZmYyZixcbiAgZ3JleTogMHg4MDgwODAsXG4gIGhvbmV5ZGV3OiAweGYwZmZmMCxcbiAgaG90cGluazogMHhmZjY5YjQsXG4gIGluZGlhbnJlZDogMHhjZDVjNWMsXG4gIGluZGlnbzogMHg0YjAwODIsXG4gIGl2b3J5OiAweGZmZmZmMCxcbiAga2hha2k6IDB4ZjBlNjhjLFxuICBsYXZlbmRlcjogMHhlNmU2ZmEsXG4gIGxhdmVuZGVyYmx1c2g6IDB4ZmZmMGY1LFxuICBsYXduZ3JlZW46IDB4N2NmYzAwLFxuICBsZW1vbmNoaWZmb246IDB4ZmZmYWNkLFxuICBsaWdodGJsdWU6IDB4YWRkOGU2LFxuICBsaWdodGNvcmFsOiAweGYwODA4MCxcbiAgbGlnaHRjeWFuOiAweGUwZmZmZixcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDB4ZmFmYWQyLFxuICBsaWdodGdyYXk6IDB4ZDNkM2QzLFxuICBsaWdodGdyZWVuOiAweDkwZWU5MCxcbiAgbGlnaHRncmV5OiAweGQzZDNkMyxcbiAgbGlnaHRwaW5rOiAweGZmYjZjMSxcbiAgbGlnaHRzYWxtb246IDB4ZmZhMDdhLFxuICBsaWdodHNlYWdyZWVuOiAweDIwYjJhYSxcbiAgbGlnaHRza3libHVlOiAweDg3Y2VmYSxcbiAgbGlnaHRzbGF0ZWdyYXk6IDB4Nzc4ODk5LFxuICBsaWdodHNsYXRlZ3JleTogMHg3Nzg4OTksXG4gIGxpZ2h0c3RlZWxibHVlOiAweGIwYzRkZSxcbiAgbGlnaHR5ZWxsb3c6IDB4ZmZmZmUwLFxuICBsaW1lOiAweDAwZmYwMCxcbiAgbGltZWdyZWVuOiAweDMyY2QzMixcbiAgbGluZW46IDB4ZmFmMGU2LFxuICBtYWdlbnRhOiAweGZmMDBmZixcbiAgbWFyb29uOiAweDgwMDAwMCxcbiAgbWVkaXVtYXF1YW1hcmluZTogMHg2NmNkYWEsXG4gIG1lZGl1bWJsdWU6IDB4MDAwMGNkLFxuICBtZWRpdW1vcmNoaWQ6IDB4YmE1NWQzLFxuICBtZWRpdW1wdXJwbGU6IDB4OTM3MGRiLFxuICBtZWRpdW1zZWFncmVlbjogMHgzY2IzNzEsXG4gIG1lZGl1bXNsYXRlYmx1ZTogMHg3YjY4ZWUsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAweDAwZmE5YSxcbiAgbWVkaXVtdHVycXVvaXNlOiAweDQ4ZDFjYyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAweGM3MTU4NSxcbiAgbWlkbmlnaHRibHVlOiAweDE5MTk3MCxcbiAgbWludGNyZWFtOiAweGY1ZmZmYSxcbiAgbWlzdHlyb3NlOiAweGZmZTRlMSxcbiAgbW9jY2FzaW46IDB4ZmZlNGI1LFxuICBuYXZham93aGl0ZTogMHhmZmRlYWQsXG4gIG5hdnk6IDB4MDAwMDgwLFxuICBvbGRsYWNlOiAweGZkZjVlNixcbiAgb2xpdmU6IDB4ODA4MDAwLFxuICBvbGl2ZWRyYWI6IDB4NmI4ZTIzLFxuICBvcmFuZ2U6IDB4ZmZhNTAwLFxuICBvcmFuZ2VyZWQ6IDB4ZmY0NTAwLFxuICBvcmNoaWQ6IDB4ZGE3MGQ2LFxuICBwYWxlZ29sZGVucm9kOiAweGVlZThhYSxcbiAgcGFsZWdyZWVuOiAweDk4ZmI5OCxcbiAgcGFsZXR1cnF1b2lzZTogMHhhZmVlZWUsXG4gIHBhbGV2aW9sZXRyZWQ6IDB4ZGI3MDkzLFxuICBwYXBheWF3aGlwOiAweGZmZWZkNSxcbiAgcGVhY2hwdWZmOiAweGZmZGFiOSxcbiAgcGVydTogMHhjZDg1M2YsXG4gIHBpbms6IDB4ZmZjMGNiLFxuICBwbHVtOiAweGRkYTBkZCxcbiAgcG93ZGVyYmx1ZTogMHhiMGUwZTYsXG4gIHB1cnBsZTogMHg4MDAwODAsXG4gIHJlYmVjY2FwdXJwbGU6IDB4NjYzMzk5LFxuICByZWQ6IDB4ZmYwMDAwLFxuICByb3N5YnJvd246IDB4YmM4ZjhmLFxuICByb3lhbGJsdWU6IDB4NDE2OWUxLFxuICBzYWRkbGVicm93bjogMHg4YjQ1MTMsXG4gIHNhbG1vbjogMHhmYTgwNzIsXG4gIHNhbmR5YnJvd246IDB4ZjRhNDYwLFxuICBzZWFncmVlbjogMHgyZThiNTcsXG4gIHNlYXNoZWxsOiAweGZmZjVlZSxcbiAgc2llbm5hOiAweGEwNTIyZCxcbiAgc2lsdmVyOiAweGMwYzBjMCxcbiAgc2t5Ymx1ZTogMHg4N2NlZWIsXG4gIHNsYXRlYmx1ZTogMHg2YTVhY2QsXG4gIHNsYXRlZ3JheTogMHg3MDgwOTAsXG4gIHNsYXRlZ3JleTogMHg3MDgwOTAsXG4gIHNub3c6IDB4ZmZmYWZhLFxuICBzcHJpbmdncmVlbjogMHgwMGZmN2YsXG4gIHN0ZWVsYmx1ZTogMHg0NjgyYjQsXG4gIHRhbjogMHhkMmI0OGMsXG4gIHRlYWw6IDB4MDA4MDgwLFxuICB0aGlzdGxlOiAweGQ4YmZkOCxcbiAgdG9tYXRvOiAweGZmNjM0NyxcbiAgdHVycXVvaXNlOiAweDQwZTBkMCxcbiAgdmlvbGV0OiAweGVlODJlZSxcbiAgd2hlYXQ6IDB4ZjVkZWIzLFxuICB3aGl0ZTogMHhmZmZmZmYsXG4gIHdoaXRlc21va2U6IDB4ZjVmNWY1LFxuICB5ZWxsb3c6IDB4ZmZmZjAwLFxuICB5ZWxsb3dncmVlbjogMHg5YWNkMzJcbn07XG5cbmRlZmluZShDb2xvciwgY29sb3IsIHtcbiAgY29weShjaGFubmVscykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyB0aGlzLmNvbnN0cnVjdG9yLCB0aGlzLCBjaGFubmVscyk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnJnYigpLmRpc3BsYXlhYmxlKCk7XG4gIH0sXG4gIGhleDogY29sb3JfZm9ybWF0SGV4LCAvLyBEZXByZWNhdGVkISBVc2UgY29sb3IuZm9ybWF0SGV4LlxuICBmb3JtYXRIZXg6IGNvbG9yX2Zvcm1hdEhleCxcbiAgZm9ybWF0SGV4ODogY29sb3JfZm9ybWF0SGV4OCxcbiAgZm9ybWF0SHNsOiBjb2xvcl9mb3JtYXRIc2wsXG4gIGZvcm1hdFJnYjogY29sb3JfZm9ybWF0UmdiLFxuICB0b1N0cmluZzogY29sb3JfZm9ybWF0UmdiXG59KTtcblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SGV4KCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRIZXgoKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SGV4OCgpIHtcbiAgcmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0SGV4OCgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRIc2woKSB7XG4gIHJldHVybiBoc2xDb252ZXJ0KHRoaXMpLmZvcm1hdEhzbCgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRSZ2IoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdFJnYigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcihmb3JtYXQpIHtcbiAgdmFyIG0sIGw7XG4gIGZvcm1hdCA9IChmb3JtYXQgKyBcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIChtID0gcmVIZXguZXhlYyhmb3JtYXQpKSA/IChsID0gbVsxXS5sZW5ndGgsIG0gPSBwYXJzZUludChtWzFdLCAxNiksIGwgPT09IDYgPyByZ2JuKG0pIC8vICNmZjAwMDBcbiAgICAgIDogbCA9PT0gMyA/IG5ldyBSZ2IoKG0gPj4gOCAmIDB4ZikgfCAobSA+PiA0ICYgMHhmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKChtICYgMHhmKSA8PCA0KSB8IChtICYgMHhmKSwgMSkgLy8gI2YwMFxuICAgICAgOiBsID09PSA4ID8gcmdiYShtID4+IDI0ICYgMHhmZiwgbSA+PiAxNiAmIDB4ZmYsIG0gPj4gOCAmIDB4ZmYsIChtICYgMHhmZikgLyAweGZmKSAvLyAjZmYwMDAwMDBcbiAgICAgIDogbCA9PT0gNCA/IHJnYmEoKG0gPj4gMTIgJiAweGYpIHwgKG0gPj4gOCAmIDB4ZjApLCAobSA+PiA4ICYgMHhmKSB8IChtID4+IDQgJiAweGYwKSwgKG0gPj4gNCAmIDB4ZikgfCAobSAmIDB4ZjApLCAoKChtICYgMHhmKSA8PCA0KSB8IChtICYgMHhmKSkgLyAweGZmKSAvLyAjZjAwMFxuICAgICAgOiBudWxsKSAvLyBpbnZhbGlkIGhleFxuICAgICAgOiAobSA9IHJlUmdiSW50ZWdlci5leGVjKGZvcm1hdCkpID8gbmV3IFJnYihtWzFdLCBtWzJdLCBtWzNdLCAxKSAvLyByZ2IoMjU1LCAwLCAwKVxuICAgICAgOiAobSA9IHJlUmdiUGVyY2VudC5leGVjKGZvcm1hdCkpID8gbmV3IFJnYihtWzFdICogMjU1IC8gMTAwLCBtWzJdICogMjU1IC8gMTAwLCBtWzNdICogMjU1IC8gMTAwLCAxKSAvLyByZ2IoMTAwJSwgMCUsIDAlKVxuICAgICAgOiAobSA9IHJlUmdiYUludGVnZXIuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSwgbVsyXSwgbVszXSwgbVs0XSkgLy8gcmdiYSgyNTUsIDAsIDAsIDEpXG4gICAgICA6IChtID0gcmVSZ2JhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gcmdiYShtWzFdICogMjU1IC8gMTAwLCBtWzJdICogMjU1IC8gMTAwLCBtWzNdICogMjU1IC8gMTAwLCBtWzRdKSAvLyByZ2IoMTAwJSwgMCUsIDAlLCAxKVxuICAgICAgOiAobSA9IHJlSHNsUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCAxKSAvLyBoc2woMTIwLCA1MCUsIDUwJSlcbiAgICAgIDogKG0gPSByZUhzbGFQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBoc2xhKG1bMV0sIG1bMl0gLyAxMDAsIG1bM10gLyAxMDAsIG1bNF0pIC8vIGhzbGEoMTIwLCA1MCUsIDUwJSwgMSlcbiAgICAgIDogbmFtZWQuaGFzT3duUHJvcGVydHkoZm9ybWF0KSA/IHJnYm4obmFtZWRbZm9ybWF0XSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIDogZm9ybWF0ID09PSBcInRyYW5zcGFyZW50XCIgPyBuZXcgUmdiKE5hTiwgTmFOLCBOYU4sIDApXG4gICAgICA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJnYm4obikge1xuICByZXR1cm4gbmV3IFJnYihuID4+IDE2ICYgMHhmZiwgbiA+PiA4ICYgMHhmZiwgbiAmIDB4ZmYsIDEpO1xufVxuXG5mdW5jdGlvbiByZ2JhKHIsIGcsIGIsIGEpIHtcbiAgaWYgKGEgPD0gMCkgciA9IGcgPSBiID0gTmFOO1xuICByZXR1cm4gbmV3IFJnYihyLCBnLCBiLCBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYkNvbnZlcnQobykge1xuICBpZiAoIShvIGluc3RhbmNlb2YgQ29sb3IpKSBvID0gY29sb3Iobyk7XG4gIGlmICghbykgcmV0dXJuIG5ldyBSZ2I7XG4gIG8gPSBvLnJnYigpO1xuICByZXR1cm4gbmV3IFJnYihvLnIsIG8uZywgby5iLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyByZ2JDb252ZXJ0KHIpIDogbmV3IFJnYihyLCBnLCBiLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZ2IociwgZywgYiwgb3BhY2l0eSkge1xuICB0aGlzLnIgPSArcjtcbiAgdGhpcy5nID0gK2c7XG4gIHRoaXMuYiA9ICtiO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKFJnYiwgcmdiLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBicmlnaHRlciA6IE1hdGgucG93KGJyaWdodGVyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY2xhbXAoKSB7XG4gICAgcmV0dXJuIG5ldyBSZ2IoY2xhbXBpKHRoaXMuciksIGNsYW1waSh0aGlzLmcpLCBjbGFtcGkodGhpcy5iKSwgY2xhbXBhKHRoaXMub3BhY2l0eSkpO1xuICB9LFxuICBkaXNwbGF5YWJsZSgpIHtcbiAgICByZXR1cm4gKC0wLjUgPD0gdGhpcy5yICYmIHRoaXMuciA8IDI1NS41KVxuICAgICAgICAmJiAoLTAuNSA8PSB0aGlzLmcgJiYgdGhpcy5nIDwgMjU1LjUpXG4gICAgICAgICYmICgtMC41IDw9IHRoaXMuYiAmJiB0aGlzLmIgPCAyNTUuNSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfSxcbiAgaGV4OiByZ2JfZm9ybWF0SGV4LCAvLyBEZXByZWNhdGVkISBVc2UgY29sb3IuZm9ybWF0SGV4LlxuICBmb3JtYXRIZXg6IHJnYl9mb3JtYXRIZXgsXG4gIGZvcm1hdEhleDg6IHJnYl9mb3JtYXRIZXg4LFxuICBmb3JtYXRSZ2I6IHJnYl9mb3JtYXRSZ2IsXG4gIHRvU3RyaW5nOiByZ2JfZm9ybWF0UmdiXG59KSk7XG5cbmZ1bmN0aW9uIHJnYl9mb3JtYXRIZXgoKSB7XG4gIHJldHVybiBgIyR7aGV4KHRoaXMucil9JHtoZXgodGhpcy5nKX0ke2hleCh0aGlzLmIpfWA7XG59XG5cbmZ1bmN0aW9uIHJnYl9mb3JtYXRIZXg4KCkge1xuICByZXR1cm4gYCMke2hleCh0aGlzLnIpfSR7aGV4KHRoaXMuZyl9JHtoZXgodGhpcy5iKX0ke2hleCgoaXNOYU4odGhpcy5vcGFjaXR5KSA/IDEgOiB0aGlzLm9wYWNpdHkpICogMjU1KX1gO1xufVxuXG5mdW5jdGlvbiByZ2JfZm9ybWF0UmdiKCkge1xuICBjb25zdCBhID0gY2xhbXBhKHRoaXMub3BhY2l0eSk7XG4gIHJldHVybiBgJHthID09PSAxID8gXCJyZ2IoXCIgOiBcInJnYmEoXCJ9JHtjbGFtcGkodGhpcy5yKX0sICR7Y2xhbXBpKHRoaXMuZyl9LCAke2NsYW1waSh0aGlzLmIpfSR7YSA9PT0gMSA/IFwiKVwiIDogYCwgJHthfSlgfWA7XG59XG5cbmZ1bmN0aW9uIGNsYW1wYShvcGFjaXR5KSB7XG4gIHJldHVybiBpc05hTihvcGFjaXR5KSA/IDEgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvcGFjaXR5KSk7XG59XG5cbmZ1bmN0aW9uIGNsYW1waSh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKHZhbHVlKSB8fCAwKSk7XG59XG5cbmZ1bmN0aW9uIGhleCh2YWx1ZSkge1xuICB2YWx1ZSA9IGNsYW1waSh2YWx1ZSk7XG4gIHJldHVybiAodmFsdWUgPCAxNiA/IFwiMFwiIDogXCJcIikgKyB2YWx1ZS50b1N0cmluZygxNik7XG59XG5cbmZ1bmN0aW9uIGhzbGEoaCwgcywgbCwgYSkge1xuICBpZiAoYSA8PSAwKSBoID0gcyA9IGwgPSBOYU47XG4gIGVsc2UgaWYgKGwgPD0gMCB8fCBsID49IDEpIGggPSBzID0gTmFOO1xuICBlbHNlIGlmIChzIDw9IDApIGggPSBOYU47XG4gIHJldHVybiBuZXcgSHNsKGgsIHMsIGwsIGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHNsQ29udmVydChvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgSHNsKSByZXR1cm4gbmV3IEhzbChvLmgsIG8ucywgby5sLCBvLm9wYWNpdHkpO1xuICBpZiAoIShvIGluc3RhbmNlb2YgQ29sb3IpKSBvID0gY29sb3Iobyk7XG4gIGlmICghbykgcmV0dXJuIG5ldyBIc2w7XG4gIGlmIChvIGluc3RhbmNlb2YgSHNsKSByZXR1cm4gbztcbiAgbyA9IG8ucmdiKCk7XG4gIHZhciByID0gby5yIC8gMjU1LFxuICAgICAgZyA9IG8uZyAvIDI1NSxcbiAgICAgIGIgPSBvLmIgLyAyNTUsXG4gICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSxcbiAgICAgIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgICAgaCA9IE5hTixcbiAgICAgIHMgPSBtYXggLSBtaW4sXG4gICAgICBsID0gKG1heCArIG1pbikgLyAyO1xuICBpZiAocykge1xuICAgIGlmIChyID09PSBtYXgpIGggPSAoZyAtIGIpIC8gcyArIChnIDwgYikgKiA2O1xuICAgIGVsc2UgaWYgKGcgPT09IG1heCkgaCA9IChiIC0gcikgLyBzICsgMjtcbiAgICBlbHNlIGggPSAociAtIGcpIC8gcyArIDQ7XG4gICAgcyAvPSBsIDwgMC41ID8gbWF4ICsgbWluIDogMiAtIG1heCAtIG1pbjtcbiAgICBoICo9IDYwO1xuICB9IGVsc2Uge1xuICAgIHMgPSBsID4gMCAmJiBsIDwgMSA/IDAgOiBoO1xuICB9XG4gIHJldHVybiBuZXcgSHNsKGgsIHMsIGwsIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGhzbENvbnZlcnQoaCkgOiBuZXcgSHNsKGgsIHMsIGwsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZnVuY3Rpb24gSHNsKGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgdGhpcy5oID0gK2g7XG4gIHRoaXMucyA9ICtzO1xuICB0aGlzLmwgPSArbDtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShIc2wsIGhzbCwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGRhcmtlciA6IE1hdGgucG93KGRhcmtlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYigpIHtcbiAgICB2YXIgaCA9IHRoaXMuaCAlIDM2MCArICh0aGlzLmggPCAwKSAqIDM2MCxcbiAgICAgICAgcyA9IGlzTmFOKGgpIHx8IGlzTmFOKHRoaXMucykgPyAwIDogdGhpcy5zLFxuICAgICAgICBsID0gdGhpcy5sLFxuICAgICAgICBtMiA9IGwgKyAobCA8IDAuNSA/IGwgOiAxIC0gbCkgKiBzLFxuICAgICAgICBtMSA9IDIgKiBsIC0gbTI7XG4gICAgcmV0dXJuIG5ldyBSZ2IoXG4gICAgICBoc2wycmdiKGggPj0gMjQwID8gaCAtIDI0MCA6IGggKyAxMjAsIG0xLCBtMiksXG4gICAgICBoc2wycmdiKGgsIG0xLCBtMiksXG4gICAgICBoc2wycmdiKGggPCAxMjAgPyBoICsgMjQwIDogaCAtIDEyMCwgbTEsIG0yKSxcbiAgICAgIHRoaXMub3BhY2l0eVxuICAgICk7XG4gIH0sXG4gIGNsYW1wKCkge1xuICAgIHJldHVybiBuZXcgSHNsKGNsYW1waCh0aGlzLmgpLCBjbGFtcHQodGhpcy5zKSwgY2xhbXB0KHRoaXMubCksIGNsYW1wYSh0aGlzLm9wYWNpdHkpKTtcbiAgfSxcbiAgZGlzcGxheWFibGUoKSB7XG4gICAgcmV0dXJuICgwIDw9IHRoaXMucyAmJiB0aGlzLnMgPD0gMSB8fCBpc05hTih0aGlzLnMpKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmwgJiYgdGhpcy5sIDw9IDEpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH0sXG4gIGZvcm1hdEhzbCgpIHtcbiAgICBjb25zdCBhID0gY2xhbXBhKHRoaXMub3BhY2l0eSk7XG4gICAgcmV0dXJuIGAke2EgPT09IDEgPyBcImhzbChcIiA6IFwiaHNsYShcIn0ke2NsYW1waCh0aGlzLmgpfSwgJHtjbGFtcHQodGhpcy5zKSAqIDEwMH0lLCAke2NsYW1wdCh0aGlzLmwpICogMTAwfSUke2EgPT09IDEgPyBcIilcIiA6IGAsICR7YX0pYH1gO1xuICB9XG59KSk7XG5cbmZ1bmN0aW9uIGNsYW1waCh2YWx1ZSkge1xuICB2YWx1ZSA9ICh2YWx1ZSB8fCAwKSAlIDM2MDtcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IHZhbHVlICsgMzYwIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsYW1wdCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUgfHwgMCkpO1xufVxuXG4vKiBGcm9tIEZ2RCAxMy4zNywgQ1NTIENvbG9yIE1vZHVsZSBMZXZlbCAzICovXG5mdW5jdGlvbiBoc2wycmdiKGgsIG0xLCBtMikge1xuICByZXR1cm4gKGggPCA2MCA/IG0xICsgKG0yIC0gbTEpICogaCAvIDYwXG4gICAgICA6IGggPCAxODAgPyBtMlxuICAgICAgOiBoIDwgMjQwID8gbTEgKyAobTIgLSBtMSkgKiAoMjQwIC0gaCkgLyA2MFxuICAgICAgOiBtMSkgKiAyNTU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYmFzaXModDEsIHYwLCB2MSwgdjIsIHYzKSB7XG4gIHZhciB0MiA9IHQxICogdDEsIHQzID0gdDIgKiB0MTtcbiAgcmV0dXJuICgoMSAtIDMgKiB0MSArIDMgKiB0MiAtIHQzKSAqIHYwXG4gICAgICArICg0IC0gNiAqIHQyICsgMyAqIHQzKSAqIHYxXG4gICAgICArICgxICsgMyAqIHQxICsgMyAqIHQyIC0gMyAqIHQzKSAqIHYyXG4gICAgICArIHQzICogdjMpIC8gNjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSB0IDw9IDAgPyAodCA9IDApIDogdCA+PSAxID8gKHQgPSAxLCBuIC0gMSkgOiBNYXRoLmZsb29yKHQgKiBuKSxcbiAgICAgICAgdjEgPSB2YWx1ZXNbaV0sXG4gICAgICAgIHYyID0gdmFsdWVzW2kgKyAxXSxcbiAgICAgICAgdjAgPSBpID4gMCA/IHZhbHVlc1tpIC0gMV0gOiAyICogdjEgLSB2MixcbiAgICAgICAgdjMgPSBpIDwgbiAtIDEgPyB2YWx1ZXNbaSArIDJdIDogMiAqIHYyIC0gdjE7XG4gICAgcmV0dXJuIGJhc2lzKCh0IC0gaSAvIG4pICogbiwgdjAsIHYxLCB2MiwgdjMpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgeCA9PiAoKSA9PiB4O1xuIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5cbmZ1bmN0aW9uIGxpbmVhcihhLCBkKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKyB0ICogZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXhwb25lbnRpYWwoYSwgYiwgeSkge1xuICByZXR1cm4gYSA9IE1hdGgucG93KGEsIHkpLCBiID0gTWF0aC5wb3coYiwgeSkgLSBhLCB5ID0gMSAvIHksIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coYSArIHQgKiBiLCB5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1ZShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQgPiAxODAgfHwgZCA8IC0xODAgPyBkIC0gMzYwICogTWF0aC5yb3VuZChkIC8gMzYwKSA6IGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1tYSh5KSB7XG4gIHJldHVybiAoeSA9ICt5KSA9PT0gMSA/IG5vZ2FtbWEgOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGIgLSBhID8gZXhwb25lbnRpYWwoYSwgYiwgeSkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9nYW1tYShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG4iLCJpbXBvcnQge3JnYiBhcyBjb2xvclJnYn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgYmFzaXMgZnJvbSBcIi4vYmFzaXMuanNcIjtcbmltcG9ydCBiYXNpc0Nsb3NlZCBmcm9tIFwiLi9iYXNpc0Nsb3NlZC5qc1wiO1xuaW1wb3J0IG5vZ2FtbWEsIHtnYW1tYX0gZnJvbSBcIi4vY29sb3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHJnYkdhbW1hKHkpIHtcbiAgdmFyIGNvbG9yID0gZ2FtbWEoeSk7XG5cbiAgZnVuY3Rpb24gcmdiKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgciA9IGNvbG9yKChzdGFydCA9IGNvbG9yUmdiKHN0YXJ0KSkuciwgKGVuZCA9IGNvbG9yUmdiKGVuZCkpLnIpLFxuICAgICAgICBnID0gY29sb3Ioc3RhcnQuZywgZW5kLmcpLFxuICAgICAgICBiID0gY29sb3Ioc3RhcnQuYiwgZW5kLmIpLFxuICAgICAgICBvcGFjaXR5ID0gbm9nYW1tYShzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LnIgPSByKHQpO1xuICAgICAgc3RhcnQuZyA9IGcodCk7XG4gICAgICBzdGFydC5iID0gYih0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG5cbiAgcmdiLmdhbW1hID0gcmdiR2FtbWE7XG5cbiAgcmV0dXJuIHJnYjtcbn0pKDEpO1xuXG5mdW5jdGlvbiByZ2JTcGxpbmUoc3BsaW5lKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICB2YXIgbiA9IGNvbG9ycy5sZW5ndGgsXG4gICAgICAgIHIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGcgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGksIGNvbG9yO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbG9yID0gY29sb3JSZ2IoY29sb3JzW2ldKTtcbiAgICAgIHJbaV0gPSBjb2xvci5yIHx8IDA7XG4gICAgICBnW2ldID0gY29sb3IuZyB8fCAwO1xuICAgICAgYltpXSA9IGNvbG9yLmIgfHwgMDtcbiAgICB9XG4gICAgciA9IHNwbGluZShyKTtcbiAgICBnID0gc3BsaW5lKGcpO1xuICAgIGIgPSBzcGxpbmUoYik7XG4gICAgY29sb3Iub3BhY2l0eSA9IDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGNvbG9yLnIgPSByKHQpO1xuICAgICAgY29sb3IuZyA9IGcodCk7XG4gICAgICBjb2xvci5iID0gYih0KTtcbiAgICAgIHJldHVybiBjb2xvciArIFwiXCI7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciByZ2JCYXNpcyA9IHJnYlNwbGluZShiYXNpcyk7XG5leHBvcnQgdmFyIHJnYkJhc2lzQ2xvc2VkID0gcmdiU3BsaW5lKGJhc2lzQ2xvc2VkKTtcbiIsImltcG9ydCB7YmFzaXN9IGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKCgodCAlPSAxKSA8IDAgPyArK3QgOiB0KSAqIG4pLFxuICAgICAgICB2MCA9IHZhbHVlc1soaSArIG4gLSAxKSAlIG5dLFxuICAgICAgICB2MSA9IHZhbHVlc1tpICUgbl0sXG4gICAgICAgIHYyID0gdmFsdWVzWyhpICsgMSkgJSBuXSxcbiAgICAgICAgdjMgPSB2YWx1ZXNbKGkgKyAyKSAlIG5dO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciByZUEgPSAvWy0rXT8oPzpcXGQrXFwuP1xcZCp8XFwuP1xcZCspKD86W2VFXVstK10/XFxkKyk/L2csXG4gICAgcmVCID0gbmV3IFJlZ0V4cChyZUEuc291cmNlLCBcImdcIik7XG5cbmZ1bmN0aW9uIHplcm8oYikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGI7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uZShiKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGIodCkgKyBcIlwiO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBiaSA9IHJlQS5sYXN0SW5kZXggPSByZUIubGFzdEluZGV4ID0gMCwgLy8gc2NhbiBpbmRleCBmb3IgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYW0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYVxuICAgICAgYm0sIC8vIGN1cnJlbnQgbWF0Y2ggaW4gYlxuICAgICAgYnMsIC8vIHN0cmluZyBwcmVjZWRpbmcgY3VycmVudCBudW1iZXIgaW4gYiwgaWYgYW55XG4gICAgICBpID0gLTEsIC8vIGluZGV4IGluIHNcbiAgICAgIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICBxID0gW107IC8vIG51bWJlciBpbnRlcnBvbGF0b3JzXG5cbiAgLy8gQ29lcmNlIGlucHV0cyB0byBzdHJpbmdzLlxuICBhID0gYSArIFwiXCIsIGIgPSBiICsgXCJcIjtcblxuICAvLyBJbnRlcnBvbGF0ZSBwYWlycyBvZiBudW1iZXJzIGluIGEgJiBiLlxuICB3aGlsZSAoKGFtID0gcmVBLmV4ZWMoYSkpXG4gICAgICAmJiAoYm0gPSByZUIuZXhlYyhiKSkpIHtcbiAgICBpZiAoKGJzID0gYm0uaW5kZXgpID4gYmkpIHsgLy8gYSBzdHJpbmcgcHJlY2VkZXMgdGhlIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGJzID0gYi5zbGljZShiaSwgYnMpO1xuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJzO1xuICAgIH1cbiAgICBpZiAoKGFtID0gYW1bMF0pID09PSAoYm0gPSBibVswXSkpIHsgLy8gbnVtYmVycyBpbiBhICYgYiBtYXRjaFxuICAgICAgaWYgKHNbaV0pIHNbaV0gKz0gYm07IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgICBlbHNlIHNbKytpXSA9IGJtO1xuICAgIH0gZWxzZSB7IC8vIGludGVycG9sYXRlIG5vbi1tYXRjaGluZyBudW1iZXJzXG4gICAgICBzWysraV0gPSBudWxsO1xuICAgICAgcS5wdXNoKHtpOiBpLCB4OiBudW1iZXIoYW0sIGJtKX0pO1xuICAgIH1cbiAgICBiaSA9IHJlQi5sYXN0SW5kZXg7XG4gIH1cblxuICAvLyBBZGQgcmVtYWlucyBvZiBiLlxuICBpZiAoYmkgPCBiLmxlbmd0aCkge1xuICAgIGJzID0gYi5zbGljZShiaSk7XG4gICAgaWYgKHNbaV0pIHNbaV0gKz0gYnM7IC8vIGNvYWxlc2NlIHdpdGggcHJldmlvdXMgc3RyaW5nXG4gICAgZWxzZSBzWysraV0gPSBicztcbiAgfVxuXG4gIC8vIFNwZWNpYWwgb3B0aW1pemF0aW9uIGZvciBvbmx5IGEgc2luZ2xlIG1hdGNoLlxuICAvLyBPdGhlcndpc2UsIGludGVycG9sYXRlIGVhY2ggb2YgdGhlIG51bWJlcnMgYW5kIHJlam9pbiB0aGUgc3RyaW5nLlxuICByZXR1cm4gcy5sZW5ndGggPCAyID8gKHFbMF1cbiAgICAgID8gb25lKHFbMF0ueClcbiAgICAgIDogemVybyhiKSlcbiAgICAgIDogKGIgPSBxLmxlbmd0aCwgZnVuY3Rpb24odCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvOyBpIDwgYjsgKytpKSBzWyhvID0gcVtpXSkuaV0gPSBvLngodCk7XG4gICAgICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICAgICAgfSk7XG59XG4iLCJpbXBvcnQge2NvbG9yfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGVOdW1iZXIsIGludGVycG9sYXRlUmdiLCBpbnRlcnBvbGF0ZVN0cmluZ30gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGM7XG4gIHJldHVybiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIgPyBpbnRlcnBvbGF0ZU51bWJlclxuICAgICAgOiBiIGluc3RhbmNlb2YgY29sb3IgPyBpbnRlcnBvbGF0ZVJnYlxuICAgICAgOiAoYyA9IGNvbG9yKGIpKSA/IChiID0gYywgaW50ZXJwb2xhdGVSZ2IpXG4gICAgICA6IGludGVycG9sYXRlU3RyaW5nKShhLCBiKTtcbn1cbiIsImltcG9ydCB7aW50ZXJwb2xhdGVUcmFuc2Zvcm1TdmcgYXMgaW50ZXJwb2xhdGVUcmFuc2Zvcm19IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IHtuYW1lc3BhY2V9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW4uanNcIjtcbmltcG9ydCBpbnRlcnBvbGF0ZSBmcm9tIFwiLi9pbnRlcnBvbGF0ZS5qc1wiO1xuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlTlMoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50KG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnROUyhmdWxsbmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlMSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIixcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgaW50ZXJwb2xhdGUsIHZhbHVlKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEwLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAsIHZhbHVlMSA9IHZhbHVlKHRoaXMpLCBzdHJpbmcxO1xuICAgIGlmICh2YWx1ZTEgPT0gbnVsbCkgcmV0dXJuIHZvaWQgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogKHN0cmluZzEwID0gc3RyaW5nMSwgaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uTlMoZnVsbG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwLCB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSwgc3RyaW5nMTtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBzdHJpbmcwID0gdGhpcy5nZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogKHN0cmluZzEwID0gc3RyaW5nMSwgaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpLCBpID0gZnVsbG5hbWUgPT09IFwidHJhbnNmb3JtXCIgPyBpbnRlcnBvbGF0ZVRyYW5zZm9ybSA6IGludGVycG9sYXRlO1xuICByZXR1cm4gdGhpcy5hdHRyVHdlZW4obmFtZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pKGZ1bGxuYW1lLCBpLCB0d2VlblZhbHVlKHRoaXMsIFwiYXR0ci5cIiArIG5hbWUsIHZhbHVlKSlcbiAgICAgIDogdmFsdWUgPT0gbnVsbCA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJSZW1vdmVOUyA6IGF0dHJSZW1vdmUpKGZ1bGxuYW1lKVxuICAgICAgOiAoZnVsbG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudCkoZnVsbG5hbWUsIGksIHZhbHVlKSk7XG59XG4iLCJpbXBvcnQge25hbWVzcGFjZX0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuXG5mdW5jdGlvbiBhdHRySW50ZXJwb2xhdGUobmFtZSwgaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIGkuY2FsbCh0aGlzLCB0KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJJbnRlcnBvbGF0ZU5TKGZ1bGxuYW1lLCBpKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIGkuY2FsbCh0aGlzLCB0KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJUd2Vlbk5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIGF0dHJJbnRlcnBvbGF0ZU5TKGZ1bGxuYW1lLCBpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZnVuY3Rpb24gYXR0clR3ZWVuKG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgYXR0ckludGVycG9sYXRlKG5hbWUsIGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIga2V5ID0gXCJhdHRyLlwiICsgbmFtZTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgKGZ1bGxuYW1lLmxvY2FsID8gYXR0clR3ZWVuTlMgOiBhdHRyVHdlZW4pKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwiaW1wb3J0IHtnZXQsIGluaXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oaWQsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpbml0KHRoaXMsIGlkKS5kZWxheSA9ICt2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkZWxheUNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPSArdmFsdWUsIGZ1bmN0aW9uKCkge1xuICAgIGluaXQodGhpcywgaWQpLmRlbGF5ID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGRlbGF5RnVuY3Rpb25cbiAgICAgICAgICA6IGRlbGF5Q29uc3RhbnQpKGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmRlbGF5O1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gZHVyYXRpb25GdW5jdGlvbihpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHNldCh0aGlzLCBpZCkuZHVyYXRpb24gPSArdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZHVyYXRpb25Db25zdGFudChpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmR1cmF0aW9uID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGR1cmF0aW9uRnVuY3Rpb25cbiAgICAgICAgICA6IGR1cmF0aW9uQ29uc3RhbnQpKGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmR1cmF0aW9uO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxudmFyIFNlbGVjdGlvbiA9IHNlbGVjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9ncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcyBhcyBpbnRlcnBvbGF0ZVRyYW5zZm9ybX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge3N0eWxlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3NldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcbmltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW4uanNcIjtcbmltcG9ydCBpbnRlcnBvbGF0ZSBmcm9tIFwiLi9pbnRlcnBvbGF0ZS5qc1wiO1xuXG5mdW5jdGlvbiBzdHlsZU51bGwobmFtZSwgaW50ZXJwb2xhdGUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpLFxuICAgICAgICBzdHJpbmcxID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSksIHN0eWxlKHRoaXMsIG5hbWUpKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgc3RyaW5nMTAgPSBzdHJpbmcxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSBzdHlsZSh0aGlzLCBuYW1lKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpLFxuICAgICAgICB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSxcbiAgICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSBzdHJpbmcxID0gdmFsdWUxID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSksIHN0eWxlKHRoaXMsIG5hbWUpKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlTWF5YmVSZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIG9uMCwgb24xLCBsaXN0ZW5lcjAsIGtleSA9IFwic3R5bGUuXCIgKyBuYW1lLCBldmVudCA9IFwiZW5kLlwiICsga2V5LCByZW1vdmU7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICBvbiA9IHNjaGVkdWxlLm9uLFxuICAgICAgICBsaXN0ZW5lciA9IHNjaGVkdWxlLnZhbHVlW2tleV0gPT0gbnVsbCA/IHJlbW92ZSB8fCAocmVtb3ZlID0gc3R5bGVSZW1vdmUobmFtZSkpIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIGRpc3BhdGNoIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmIChvbiAhPT0gb24wIHx8IGxpc3RlbmVyMCAhPT0gbGlzdGVuZXIpIChvbjEgPSAob24wID0gb24pLmNvcHkoKSkub24oZXZlbnQsIGxpc3RlbmVyMCA9IGxpc3RlbmVyKTtcblxuICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGkgPSAobmFtZSArPSBcIlwiKSA9PT0gXCJ0cmFuc2Zvcm1cIiA/IGludGVycG9sYXRlVHJhbnNmb3JtIDogaW50ZXJwb2xhdGU7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVOdWxsKG5hbWUsIGkpKVxuICAgICAgLm9uKFwiZW5kLnN0eWxlLlwiICsgbmFtZSwgc3R5bGVSZW1vdmUobmFtZSkpXG4gICAgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHRoaXNcbiAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlRnVuY3Rpb24obmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcInN0eWxlLlwiICsgbmFtZSwgdmFsdWUpKSlcbiAgICAgIC5lYWNoKHN0eWxlTWF5YmVSZW1vdmUodGhpcy5faWQsIG5hbWUpKVxuICAgIDogdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVDb25zdGFudChuYW1lLCBpLCB2YWx1ZSksIHByaW9yaXR5KVxuICAgICAgLm9uKFwiZW5kLnN0eWxlLlwiICsgbmFtZSwgbnVsbCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0ciBmcm9tIFwiLi9hdHRyLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9hdHRyVHdlZW4gZnJvbSBcIi4vYXR0clR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9kZWxheSBmcm9tIFwiLi9kZWxheS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZHVyYXRpb24gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2Vhc2UgZnJvbSBcIi4vZWFzZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZWFzZVZhcnlpbmcgZnJvbSBcIi4vZWFzZVZhcnlpbmcuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXIuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX21lcmdlIGZyb20gXCIuL21lcmdlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9vbiBmcm9tIFwiLi9vbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGUuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3N0eWxlVHdlZW4gZnJvbSBcIi4vc3R5bGVUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90ZXh0VHdlZW4gZnJvbSBcIi4vdGV4dFR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3R3ZWVuIGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lbmQgZnJvbSBcIi4vZW5kLmpzXCI7XG5cbnZhciBpZCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2l0aW9uKGdyb3VwcywgcGFyZW50cywgbmFtZSwgaWQpIHtcbiAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICB0aGlzLl9wYXJlbnRzID0gcGFyZW50cztcbiAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIHRoaXMuX2lkID0gaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb24obmFtZSkge1xuICByZXR1cm4gc2VsZWN0aW9uKCkudHJhbnNpdGlvbihuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKCkge1xuICByZXR1cm4gKytpZDtcbn1cblxudmFyIHNlbGVjdGlvbl9wcm90b3R5cGUgPSBzZWxlY3Rpb24ucHJvdG90eXBlO1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZSA9IHRyYW5zaXRpb24ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVHJhbnNpdGlvbixcbiAgc2VsZWN0OiB0cmFuc2l0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiB0cmFuc2l0aW9uX3NlbGVjdEFsbCxcbiAgc2VsZWN0Q2hpbGQ6IHNlbGVjdGlvbl9wcm90b3R5cGUuc2VsZWN0Q2hpbGQsXG4gIHNlbGVjdENoaWxkcmVuOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNlbGVjdENoaWxkcmVuLFxuICBmaWx0ZXI6IHRyYW5zaXRpb25fZmlsdGVyLFxuICBtZXJnZTogdHJhbnNpdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiB0cmFuc2l0aW9uX3NlbGVjdGlvbixcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbl90cmFuc2l0aW9uLFxuICBjYWxsOiBzZWxlY3Rpb25fcHJvdG90eXBlLmNhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fcHJvdG90eXBlLm5vZGUsXG4gIHNpemU6IHNlbGVjdGlvbl9wcm90b3R5cGUuc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9wcm90b3R5cGUuZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9wcm90b3R5cGUuZWFjaCxcbiAgb246IHRyYW5zaXRpb25fb24sXG4gIGF0dHI6IHRyYW5zaXRpb25fYXR0cixcbiAgYXR0clR3ZWVuOiB0cmFuc2l0aW9uX2F0dHJUd2VlbixcbiAgc3R5bGU6IHRyYW5zaXRpb25fc3R5bGUsXG4gIHN0eWxlVHdlZW46IHRyYW5zaXRpb25fc3R5bGVUd2VlbixcbiAgdGV4dDogdHJhbnNpdGlvbl90ZXh0LFxuICB0ZXh0VHdlZW46IHRyYW5zaXRpb25fdGV4dFR3ZWVuLFxuICByZW1vdmU6IHRyYW5zaXRpb25fcmVtb3ZlLFxuICB0d2VlbjogdHJhbnNpdGlvbl90d2VlbixcbiAgZGVsYXk6IHRyYW5zaXRpb25fZGVsYXksXG4gIGR1cmF0aW9uOiB0cmFuc2l0aW9uX2R1cmF0aW9uLFxuICBlYXNlOiB0cmFuc2l0aW9uX2Vhc2UsXG4gIGVhc2VWYXJ5aW5nOiB0cmFuc2l0aW9uX2Vhc2VWYXJ5aW5nLFxuICBlbmQ6IHRyYW5zaXRpb25fZW5kLFxuICBbU3ltYm9sLml0ZXJhdG9yXTogc2VsZWN0aW9uX3Byb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdXG59O1xuIiwiaW1wb3J0IHtzZWxlY3Rvcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgICAgc2NoZWR1bGUoc3ViZ3JvdXBbaV0sIG5hbWUsIGlkLCBpLCBzdWJncm91cCwgZ2V0KG5vZGUsIGlkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3RvckFsbH0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGZvciAodmFyIGNoaWxkcmVuID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApLCBjaGlsZCwgaW5oZXJpdCA9IGdldChub2RlLCBpZCksIGsgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBrIDwgbDsgKytrKSB7XG4gICAgICAgICAgaWYgKGNoaWxkID0gY2hpbGRyZW5ba10pIHtcbiAgICAgICAgICAgIHNjaGVkdWxlKGNoaWxkLCBuYW1lLCBpZCwgaywgY2hpbGRyZW4sIGluaGVyaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdWJncm91cHMucHVzaChjaGlsZHJlbik7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge21hdGNoZXJ9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJmdW5jdGlvblwiKSBtYXRjaCA9IG1hdGNoZXIobWF0Y2gpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBbXSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiBtYXRjaC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkge1xuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMsIHRoaXMuX25hbWUsIHRoaXMuX2lkKTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHJhbnNpdGlvbikge1xuICBpZiAodHJhbnNpdGlvbi5faWQgIT09IHRoaXMuX2lkKSB0aHJvdyBuZXcgRXJyb3I7XG5cbiAgZm9yICh2YXIgZ3JvdXBzMCA9IHRoaXMuX2dyb3VwcywgZ3JvdXBzMSA9IHRyYW5zaXRpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cywgdGhpcy5fbmFtZSwgdGhpcy5faWQpO1xufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9uLCBuZXdJZH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkMCA9IHRoaXMuX2lkLFxuICAgICAgaWQxID0gbmV3SWQoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICB2YXIgaW5oZXJpdCA9IGdldChub2RlLCBpZDApO1xuICAgICAgICBzY2hlZHVsZShub2RlLCBuYW1lLCBpZDEsIGksIGdyb3VwLCB7XG4gICAgICAgICAgdGltZTogaW5oZXJpdC50aW1lICsgaW5oZXJpdC5kZWxheSArIGluaGVyaXQuZHVyYXRpb24sXG4gICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IGluaGVyaXQuZHVyYXRpb24sXG4gICAgICAgICAgZWFzZTogaW5oZXJpdC5lYXNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkMSk7XG59XG4iLCJpbXBvcnQge2dldCwgc2V0LCBpbml0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBzdGFydChuYW1lKSB7XG4gIHJldHVybiAobmFtZSArIFwiXCIpLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykuZXZlcnkoZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4gIXQgfHwgdCA9PT0gXCJzdGFydFwiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25GdW5jdGlvbihpZCwgbmFtZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG9uMCwgb24xLCBzaXQgPSBzdGFydChuYW1lKSA/IGluaXQgOiBzZXQ7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzaXQodGhpcywgaWQpLFxuICAgICAgICBvbiA9IHNjaGVkdWxlLm9uO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIGRpc3BhdGNoIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmIChvbiAhPT0gb24wKSAob24xID0gKG9uMCA9IG9uKS5jb3B5KCkpLm9uKG5hbWUsIGxpc3RlbmVyKTtcblxuICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBsaXN0ZW5lcikge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDJcbiAgICAgID8gZ2V0KHRoaXMubm9kZSgpLCBpZCkub24ub24obmFtZSlcbiAgICAgIDogdGhpcy5lYWNoKG9uRnVuY3Rpb24oaWQsIG5hbWUsIGxpc3RlbmVyKSk7XG59XG4iLCJmdW5jdGlvbiBzdHlsZUludGVycG9sYXRlKG5hbWUsIGksIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBpLmNhbGwodGhpcywgdCksIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVUd2VlbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIHQsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0ID0gKGkwID0gaSkgJiYgc3R5bGVJbnRlcnBvbGF0ZShuYW1lLCBpLCBwcmlvcml0eSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHZhciBrZXkgPSBcInN0eWxlLlwiICsgKG5hbWUgKz0gXCJcIik7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSA9PSBudWxsID8gXCJcIiA6IHByaW9yaXR5KSk7XG59XG4iLCJpbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZTEgPSB2YWx1ZSh0aGlzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWUxID09IG51bGwgPyBcIlwiIDogdmFsdWUxO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdGhpcy50d2VlbihcInRleHRcIiwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gdGV4dEZ1bmN0aW9uKHR3ZWVuVmFsdWUodGhpcywgXCJ0ZXh0XCIsIHZhbHVlKSlcbiAgICAgIDogdGV4dENvbnN0YW50KHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiKSk7XG59XG4iLCJmdW5jdGlvbiB0ZXh0SW50ZXJwb2xhdGUoaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSBpLmNhbGwodGhpcywgdCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRUd2Vlbih2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIHRleHRJbnRlcnBvbGF0ZShpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGtleSA9IFwidGV4dFwiO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHJldHVybiAoa2V5ID0gdGhpcy50d2VlbihrZXkpKSAmJiBrZXkuX3ZhbHVlO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBudWxsKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgdGV4dFR3ZWVuKHZhbHVlKSk7XG59XG4iLCJmdW5jdGlvbiByZW1vdmVGdW5jdGlvbihpZCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuX190cmFuc2l0aW9uKSBpZiAoK2kgIT09IGlkKSByZXR1cm47XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub24oXCJlbmQucmVtb3ZlXCIsIHJlbW92ZUZ1bmN0aW9uKHRoaXMuX2lkKSk7XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBlYXNlQ29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5lYXNlID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaChlYXNlQ29uc3RhbnQoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZWFzZTtcbn1cbiIsImltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBlYXNlVmFyeWluZyhpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodHlwZW9mIHYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICAgIHNldCh0aGlzLCBpZCkuZWFzZSA9IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy5lYWNoKGVhc2VWYXJ5aW5nKHRoaXMuX2lkLCB2YWx1ZSkpO1xufVxuIiwiaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgb24wLCBvbjEsIHRoYXQgPSB0aGlzLCBpZCA9IHRoYXQuX2lkLCBzaXplID0gdGhhdC5zaXplKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgY2FuY2VsID0ge3ZhbHVlOiByZWplY3R9LFxuICAgICAgICBlbmQgPSB7dmFsdWU6IGZ1bmN0aW9uKCkgeyBpZiAoLS1zaXplID09PSAwKSByZXNvbHZlKCk7IH19O1xuXG4gICAgdGhhdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgICBvbiA9IHNjaGVkdWxlLm9uO1xuXG4gICAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2XigJlyZSBkb25lIVxuICAgICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgICAgaWYgKG9uICE9PSBvbjApIHtcbiAgICAgICAgb24xID0gKG9uMCA9IG9uKS5jb3B5KCk7XG4gICAgICAgIG9uMS5fLmNhbmNlbC5wdXNoKGNhbmNlbCk7XG4gICAgICAgIG9uMS5fLmludGVycnVwdC5wdXNoKGNhbmNlbCk7XG4gICAgICAgIG9uMS5fLmVuZC5wdXNoKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICAgIH0pO1xuXG4gICAgLy8gVGhlIHNlbGVjdGlvbiB3YXMgZW1wdHksIHJlc29sdmUgZW5kIGltbWVkaWF0ZWx5XG4gICAgaWYgKHNpemUgPT09IDApIHJlc29sdmUoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb24sIG5ld0lkfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlIGZyb20gXCIuLi90cmFuc2l0aW9uL3NjaGVkdWxlLmpzXCI7XG5pbXBvcnQge2Vhc2VDdWJpY0luT3V0fSBmcm9tIFwiZDMtZWFzZVwiO1xuaW1wb3J0IHtub3d9IGZyb20gXCJkMy10aW1lclwiO1xuXG52YXIgZGVmYXVsdFRpbWluZyA9IHtcbiAgdGltZTogbnVsbCwgLy8gU2V0IG9uIHVzZS5cbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiAyNTAsXG4gIGVhc2U6IGVhc2VDdWJpY0luT3V0XG59O1xuXG5mdW5jdGlvbiBpbmhlcml0KG5vZGUsIGlkKSB7XG4gIHZhciB0aW1pbmc7XG4gIHdoaWxlICghKHRpbWluZyA9IG5vZGUuX190cmFuc2l0aW9uKSB8fCAhKHRpbWluZyA9IHRpbWluZ1tpZF0pKSB7XG4gICAgaWYgKCEobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdHJhbnNpdGlvbiAke2lkfSBub3QgZm91bmRgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRpbWluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgaWQsXG4gICAgICB0aW1pbmc7XG5cbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBUcmFuc2l0aW9uKSB7XG4gICAgaWQgPSBuYW1lLl9pZCwgbmFtZSA9IG5hbWUuX25hbWU7XG4gIH0gZWxzZSB7XG4gICAgaWQgPSBuZXdJZCgpLCAodGltaW5nID0gZGVmYXVsdFRpbWluZykudGltZSA9IG5vdygpLCBuYW1lID0gbmFtZSA9PSBudWxsID8gbnVsbCA6IG5hbWUgKyBcIlwiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQsIGksIGdyb3VwLCB0aW1pbmcgfHwgaW5oZXJpdChub2RlLCBpZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgcmV0dXJuIC0tdCAqIHQgKiB0ICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyB0ICogdCAqIHQgOiAodCAtPSAyKSAqIHQgKiB0ICsgMikgLyAyO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCBzZWxlY3Rpb25faW50ZXJydXB0IGZyb20gXCIuL2ludGVycnVwdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl90cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb24uanNcIjtcblxuc2VsZWN0aW9uLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBzZWxlY3Rpb25faW50ZXJydXB0O1xuc2VsZWN0aW9uLnByb3RvdHlwZS50cmFuc2l0aW9uID0gc2VsZWN0aW9uX3RyYW5zaXRpb247XG4iLCJpbXBvcnQgaW50ZXJydXB0IGZyb20gXCIuLi9pbnRlcnJ1cHQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGludGVycnVwdCh0aGlzLCBuYW1lKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge1NUQVJUSU5HLCBFTkRJTkcsIEVOREVEfSBmcm9tIFwiLi90cmFuc2l0aW9uL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgdmFyIHNjaGVkdWxlcyA9IG5vZGUuX190cmFuc2l0aW9uLFxuICAgICAgc2NoZWR1bGUsXG4gICAgICBhY3RpdmUsXG4gICAgICBlbXB0eSA9IHRydWUsXG4gICAgICBpO1xuXG4gIGlmICghc2NoZWR1bGVzKSByZXR1cm47XG5cbiAgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcblxuICBmb3IgKGkgaW4gc2NoZWR1bGVzKSB7XG4gICAgaWYgKChzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXSkubmFtZSAhPT0gbmFtZSkgeyBlbXB0eSA9IGZhbHNlOyBjb250aW51ZTsgfVxuICAgIGFjdGl2ZSA9IHNjaGVkdWxlLnN0YXRlID4gU1RBUlRJTkcgJiYgc2NoZWR1bGUuc3RhdGUgPCBFTkRJTkc7XG4gICAgc2NoZWR1bGUuc3RhdGUgPSBFTkRFRDtcbiAgICBzY2hlZHVsZS50aW1lci5zdG9wKCk7XG4gICAgc2NoZWR1bGUub24uY2FsbChhY3RpdmUgPyBcImludGVycnVwdFwiIDogXCJjYW5jZWxcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2NoZWR1bGUuaW5kZXgsIHNjaGVkdWxlLmdyb3VwKTtcbiAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICB9XG5cbiAgaWYgKGVtcHR5KSBkZWxldGUgbm9kZS5fX3RyYW5zaXRpb247XG59XG4iLCJpbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiZDMtZGlzcGF0Y2hcIjtcbmltcG9ydCB7ZHJhZ0Rpc2FibGUsIGRyYWdFbmFibGV9IGZyb20gXCJkMy1kcmFnXCI7XG5pbXBvcnQge2ludGVycG9sYXRlfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7cG9pbnRlciwgc2VsZWN0fSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge2ludGVycnVwdH0gZnJvbSBcImQzLXRyYW5zaXRpb25cIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IEJydXNoRXZlbnQgZnJvbSBcIi4vZXZlbnQuanNcIjtcbmltcG9ydCBub2V2ZW50LCB7bm9wcm9wYWdhdGlvbn0gZnJvbSBcIi4vbm9ldmVudC5qc1wiO1xuXG52YXIgTU9ERV9EUkFHID0ge25hbWU6IFwiZHJhZ1wifSxcbiAgICBNT0RFX1NQQUNFID0ge25hbWU6IFwic3BhY2VcIn0sXG4gICAgTU9ERV9IQU5ETEUgPSB7bmFtZTogXCJoYW5kbGVcIn0sXG4gICAgTU9ERV9DRU5URVIgPSB7bmFtZTogXCJjZW50ZXJcIn07XG5cbmNvbnN0IHthYnMsIG1heCwgbWlufSA9IE1hdGg7XG5cbmZ1bmN0aW9uIG51bWJlcjEoZSkge1xuICByZXR1cm4gWytlWzBdLCArZVsxXV07XG59XG5cbmZ1bmN0aW9uIG51bWJlcjIoZSkge1xuICByZXR1cm4gW251bWJlcjEoZVswXSksIG51bWJlcjEoZVsxXSldO1xufVxuXG52YXIgWCA9IHtcbiAgbmFtZTogXCJ4XCIsXG4gIGhhbmRsZXM6IFtcIndcIiwgXCJlXCJdLm1hcCh0eXBlKSxcbiAgaW5wdXQ6IGZ1bmN0aW9uKHgsIGUpIHsgcmV0dXJuIHggPT0gbnVsbCA/IG51bGwgOiBbWyt4WzBdLCBlWzBdWzFdXSwgWyt4WzFdLCBlWzFdWzFdXV07IH0sXG4gIG91dHB1dDogZnVuY3Rpb24oeHkpIHsgcmV0dXJuIHh5ICYmIFt4eVswXVswXSwgeHlbMV1bMF1dOyB9XG59O1xuXG52YXIgWSA9IHtcbiAgbmFtZTogXCJ5XCIsXG4gIGhhbmRsZXM6IFtcIm5cIiwgXCJzXCJdLm1hcCh0eXBlKSxcbiAgaW5wdXQ6IGZ1bmN0aW9uKHksIGUpIHsgcmV0dXJuIHkgPT0gbnVsbCA/IG51bGwgOiBbW2VbMF1bMF0sICt5WzBdXSwgW2VbMV1bMF0sICt5WzFdXV07IH0sXG4gIG91dHB1dDogZnVuY3Rpb24oeHkpIHsgcmV0dXJuIHh5ICYmIFt4eVswXVsxXSwgeHlbMV1bMV1dOyB9XG59O1xuXG52YXIgWFkgPSB7XG4gIG5hbWU6IFwieHlcIixcbiAgaGFuZGxlczogW1wiblwiLCBcIndcIiwgXCJlXCIsIFwic1wiLCBcIm53XCIsIFwibmVcIiwgXCJzd1wiLCBcInNlXCJdLm1hcCh0eXBlKSxcbiAgaW5wdXQ6IGZ1bmN0aW9uKHh5KSB7IHJldHVybiB4eSA9PSBudWxsID8gbnVsbCA6IG51bWJlcjIoeHkpOyB9LFxuICBvdXRwdXQ6IGZ1bmN0aW9uKHh5KSB7IHJldHVybiB4eTsgfVxufTtcblxudmFyIGN1cnNvcnMgPSB7XG4gIG92ZXJsYXk6IFwiY3Jvc3NoYWlyXCIsXG4gIHNlbGVjdGlvbjogXCJtb3ZlXCIsXG4gIG46IFwibnMtcmVzaXplXCIsXG4gIGU6IFwiZXctcmVzaXplXCIsXG4gIHM6IFwibnMtcmVzaXplXCIsXG4gIHc6IFwiZXctcmVzaXplXCIsXG4gIG53OiBcIm53c2UtcmVzaXplXCIsXG4gIG5lOiBcIm5lc3ctcmVzaXplXCIsXG4gIHNlOiBcIm53c2UtcmVzaXplXCIsXG4gIHN3OiBcIm5lc3ctcmVzaXplXCJcbn07XG5cbnZhciBmbGlwWCA9IHtcbiAgZTogXCJ3XCIsXG4gIHc6IFwiZVwiLFxuICBudzogXCJuZVwiLFxuICBuZTogXCJud1wiLFxuICBzZTogXCJzd1wiLFxuICBzdzogXCJzZVwiXG59O1xuXG52YXIgZmxpcFkgPSB7XG4gIG46IFwic1wiLFxuICBzOiBcIm5cIixcbiAgbnc6IFwic3dcIixcbiAgbmU6IFwic2VcIixcbiAgc2U6IFwibmVcIixcbiAgc3c6IFwibndcIlxufTtcblxudmFyIHNpZ25zWCA9IHtcbiAgb3ZlcmxheTogKzEsXG4gIHNlbGVjdGlvbjogKzEsXG4gIG46IG51bGwsXG4gIGU6ICsxLFxuICBzOiBudWxsLFxuICB3OiAtMSxcbiAgbnc6IC0xLFxuICBuZTogKzEsXG4gIHNlOiArMSxcbiAgc3c6IC0xXG59O1xuXG52YXIgc2lnbnNZID0ge1xuICBvdmVybGF5OiArMSxcbiAgc2VsZWN0aW9uOiArMSxcbiAgbjogLTEsXG4gIGU6IG51bGwsXG4gIHM6ICsxLFxuICB3OiBudWxsLFxuICBudzogLTEsXG4gIG5lOiAtMSxcbiAgc2U6ICsxLFxuICBzdzogKzFcbn07XG5cbmZ1bmN0aW9uIHR5cGUodCkge1xuICByZXR1cm4ge3R5cGU6IHR9O1xufVxuXG4vLyBJZ25vcmUgcmlnaHQtY2xpY2ssIHNpbmNlIHRoYXQgc2hvdWxkIG9wZW4gdGhlIGNvbnRleHQgbWVudS5cbmZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXIoZXZlbnQpIHtcbiAgcmV0dXJuICFldmVudC5jdHJsS2V5ICYmICFldmVudC5idXR0b247XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRFeHRlbnQoKSB7XG4gIHZhciBzdmcgPSB0aGlzLm93bmVyU1ZHRWxlbWVudCB8fCB0aGlzO1xuICBpZiAoc3ZnLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikpIHtcbiAgICBzdmcgPSBzdmcudmlld0JveC5iYXNlVmFsO1xuICAgIHJldHVybiBbW3N2Zy54LCBzdmcueV0sIFtzdmcueCArIHN2Zy53aWR0aCwgc3ZnLnkgKyBzdmcuaGVpZ2h0XV07XG4gIH1cbiAgcmV0dXJuIFtbMCwgMF0sIFtzdmcud2lkdGguYmFzZVZhbC52YWx1ZSwgc3ZnLmhlaWdodC5iYXNlVmFsLnZhbHVlXV07XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRUb3VjaGFibGUoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgfHwgKFwib250b3VjaHN0YXJ0XCIgaW4gdGhpcyk7XG59XG5cbi8vIExpa2UgZDMubG9jYWwsIGJ1dCB3aXRoIHRoZSBuYW1lIOKAnF9fYnJ1c2jigJ0gcmF0aGVyIHRoYW4gYXV0by1nZW5lcmF0ZWQuXG5mdW5jdGlvbiBsb2NhbChub2RlKSB7XG4gIHdoaWxlICghbm9kZS5fX2JydXNoKSBpZiAoIShub2RlID0gbm9kZS5wYXJlbnROb2RlKSkgcmV0dXJuO1xuICByZXR1cm4gbm9kZS5fX2JydXNoO1xufVxuXG5mdW5jdGlvbiBlbXB0eShleHRlbnQpIHtcbiAgcmV0dXJuIGV4dGVudFswXVswXSA9PT0gZXh0ZW50WzFdWzBdXG4gICAgICB8fCBleHRlbnRbMF1bMV0gPT09IGV4dGVudFsxXVsxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJydXNoU2VsZWN0aW9uKG5vZGUpIHtcbiAgdmFyIHN0YXRlID0gbm9kZS5fX2JydXNoO1xuICByZXR1cm4gc3RhdGUgPyBzdGF0ZS5kaW0ub3V0cHV0KHN0YXRlLnNlbGVjdGlvbikgOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJ1c2hYKCkge1xuICByZXR1cm4gYnJ1c2goWCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicnVzaFkoKSB7XG4gIHJldHVybiBicnVzaChZKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBicnVzaChYWSk7XG59XG5cbmZ1bmN0aW9uIGJydXNoKGRpbSkge1xuICB2YXIgZXh0ZW50ID0gZGVmYXVsdEV4dGVudCxcbiAgICAgIGZpbHRlciA9IGRlZmF1bHRGaWx0ZXIsXG4gICAgICB0b3VjaGFibGUgPSBkZWZhdWx0VG91Y2hhYmxlLFxuICAgICAga2V5cyA9IHRydWUsXG4gICAgICBsaXN0ZW5lcnMgPSBkaXNwYXRjaChcInN0YXJ0XCIsIFwiYnJ1c2hcIiwgXCJlbmRcIiksXG4gICAgICBoYW5kbGVTaXplID0gNixcbiAgICAgIHRvdWNoZW5kaW5nO1xuXG4gIGZ1bmN0aW9uIGJydXNoKGdyb3VwKSB7XG4gICAgdmFyIG92ZXJsYXkgPSBncm91cFxuICAgICAgICAucHJvcGVydHkoXCJfX2JydXNoXCIsIGluaXRpYWxpemUpXG4gICAgICAuc2VsZWN0QWxsKFwiLm92ZXJsYXlcIilcbiAgICAgIC5kYXRhKFt0eXBlKFwib3ZlcmxheVwiKV0pO1xuXG4gICAgb3ZlcmxheS5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm92ZXJsYXlcIilcbiAgICAgICAgLmF0dHIoXCJwb2ludGVyLWV2ZW50c1wiLCBcImFsbFwiKVxuICAgICAgICAuYXR0cihcImN1cnNvclwiLCBjdXJzb3JzLm92ZXJsYXkpXG4gICAgICAubWVyZ2Uob3ZlcmxheSlcbiAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGV4dGVudCA9IGxvY2FsKHRoaXMpLmV4dGVudDtcbiAgICAgICAgICBzZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGV4dGVudFswXVswXSlcbiAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGV4dGVudFswXVsxXSlcbiAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBleHRlbnRbMV1bMF0gLSBleHRlbnRbMF1bMF0pXG4gICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGV4dGVudFsxXVsxXSAtIGV4dGVudFswXVsxXSk7XG4gICAgICAgIH0pO1xuXG4gICAgZ3JvdXAuc2VsZWN0QWxsKFwiLnNlbGVjdGlvblwiKVxuICAgICAgLmRhdGEoW3R5cGUoXCJzZWxlY3Rpb25cIildKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwic2VsZWN0aW9uXCIpXG4gICAgICAgIC5hdHRyKFwiY3Vyc29yXCIsIGN1cnNvcnMuc2VsZWN0aW9uKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjNzc3XCIpXG4gICAgICAgIC5hdHRyKFwiZmlsbC1vcGFjaXR5XCIsIDAuMylcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpXG4gICAgICAgIC5hdHRyKFwic2hhcGUtcmVuZGVyaW5nXCIsIFwiY3Jpc3BFZGdlc1wiKTtcblxuICAgIHZhciBoYW5kbGUgPSBncm91cC5zZWxlY3RBbGwoXCIuaGFuZGxlXCIpXG4gICAgICAuZGF0YShkaW0uaGFuZGxlcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50eXBlOyB9KTtcblxuICAgIGhhbmRsZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBoYW5kbGUuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJoYW5kbGUgaGFuZGxlLS1cIiArIGQudHlwZTsgfSlcbiAgICAgICAgLmF0dHIoXCJjdXJzb3JcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY3Vyc29yc1tkLnR5cGVdOyB9KTtcblxuICAgIGdyb3VwXG4gICAgICAgIC5lYWNoKHJlZHJhdylcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcInBvaW50ZXItZXZlbnRzXCIsIFwiYWxsXCIpXG4gICAgICAgIC5vbihcIm1vdXNlZG93bi5icnVzaFwiLCBzdGFydGVkKVxuICAgICAgLmZpbHRlcih0b3VjaGFibGUpXG4gICAgICAgIC5vbihcInRvdWNoc3RhcnQuYnJ1c2hcIiwgc3RhcnRlZClcbiAgICAgICAgLm9uKFwidG91Y2htb3ZlLmJydXNoXCIsIHRvdWNobW92ZWQpXG4gICAgICAgIC5vbihcInRvdWNoZW5kLmJydXNoIHRvdWNoY2FuY2VsLmJydXNoXCIsIHRvdWNoZW5kZWQpXG4gICAgICAgIC5zdHlsZShcInRvdWNoLWFjdGlvblwiLCBcIm5vbmVcIilcbiAgICAgICAgLnN0eWxlKFwiLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yXCIsIFwicmdiYSgwLDAsMCwwKVwiKTtcbiAgfVxuXG4gIGJydXNoLm1vdmUgPSBmdW5jdGlvbihncm91cCwgc2VsZWN0aW9uLCBldmVudCkge1xuICAgIGlmIChncm91cC50d2Vlbikge1xuICAgICAgZ3JvdXBcbiAgICAgICAgICAub24oXCJzdGFydC5icnVzaFwiLCBmdW5jdGlvbihldmVudCkgeyBlbWl0dGVyKHRoaXMsIGFyZ3VtZW50cykuYmVmb3Jlc3RhcnQoKS5zdGFydChldmVudCk7IH0pXG4gICAgICAgICAgLm9uKFwiaW50ZXJydXB0LmJydXNoIGVuZC5icnVzaFwiLCBmdW5jdGlvbihldmVudCkgeyBlbWl0dGVyKHRoaXMsIGFyZ3VtZW50cykuZW5kKGV2ZW50KTsgfSlcbiAgICAgICAgICAudHdlZW4oXCJicnVzaFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoYXQuX19icnVzaCxcbiAgICAgICAgICAgICAgICBlbWl0ID0gZW1pdHRlcih0aGF0LCBhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjAgPSBzdGF0ZS5zZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uMSA9IGRpbS5pbnB1dCh0eXBlb2Ygc2VsZWN0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBzZWxlY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHNlbGVjdGlvbiwgc3RhdGUuZXh0ZW50KSxcbiAgICAgICAgICAgICAgICBpID0gaW50ZXJwb2xhdGUoc2VsZWN0aW9uMCwgc2VsZWN0aW9uMSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHR3ZWVuKHQpIHtcbiAgICAgICAgICAgICAgc3RhdGUuc2VsZWN0aW9uID0gdCA9PT0gMSAmJiBzZWxlY3Rpb24xID09PSBudWxsID8gbnVsbCA6IGkodCk7XG4gICAgICAgICAgICAgIHJlZHJhdy5jYWxsKHRoYXQpO1xuICAgICAgICAgICAgICBlbWl0LmJydXNoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3Rpb24wICE9PSBudWxsICYmIHNlbGVjdGlvbjEgIT09IG51bGwgPyB0d2VlbiA6IHR3ZWVuKDEpO1xuICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBncm91cFxuICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB0aGF0Ll9fYnJ1c2gsXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uMSA9IGRpbS5pbnB1dCh0eXBlb2Ygc2VsZWN0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBzZWxlY3Rpb24uYXBwbHkodGhhdCwgYXJncykgOiBzZWxlY3Rpb24sIHN0YXRlLmV4dGVudCksXG4gICAgICAgICAgICAgICAgZW1pdCA9IGVtaXR0ZXIodGhhdCwgYXJncykuYmVmb3Jlc3RhcnQoKTtcblxuICAgICAgICAgICAgaW50ZXJydXB0KHRoYXQpO1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0aW9uID0gc2VsZWN0aW9uMSA9PT0gbnVsbCA/IG51bGwgOiBzZWxlY3Rpb24xO1xuICAgICAgICAgICAgcmVkcmF3LmNhbGwodGhhdCk7XG4gICAgICAgICAgICBlbWl0LnN0YXJ0KGV2ZW50KS5icnVzaChldmVudCkuZW5kKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgYnJ1c2guY2xlYXIgPSBmdW5jdGlvbihncm91cCwgZXZlbnQpIHtcbiAgICBicnVzaC5tb3ZlKGdyb3VwLCBudWxsLCBldmVudCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgIHZhciBncm91cCA9IHNlbGVjdCh0aGlzKSxcbiAgICAgICAgc2VsZWN0aW9uID0gbG9jYWwodGhpcykuc2VsZWN0aW9uO1xuXG4gICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgZ3JvdXAuc2VsZWN0QWxsKFwiLnNlbGVjdGlvblwiKVxuICAgICAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgbnVsbClcbiAgICAgICAgICAuYXR0cihcInhcIiwgc2VsZWN0aW9uWzBdWzBdKVxuICAgICAgICAgIC5hdHRyKFwieVwiLCBzZWxlY3Rpb25bMF1bMV0pXG4gICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBzZWxlY3Rpb25bMV1bMF0gLSBzZWxlY3Rpb25bMF1bMF0pXG4gICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgc2VsZWN0aW9uWzFdWzFdIC0gc2VsZWN0aW9uWzBdWzFdKTtcblxuICAgICAgZ3JvdXAuc2VsZWN0QWxsKFwiLmhhbmRsZVwiKVxuICAgICAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgbnVsbClcbiAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50eXBlW2QudHlwZS5sZW5ndGggLSAxXSA9PT0gXCJlXCIgPyBzZWxlY3Rpb25bMV1bMF0gLSBoYW5kbGVTaXplIC8gMiA6IHNlbGVjdGlvblswXVswXSAtIGhhbmRsZVNpemUgLyAyOyB9KVxuICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnR5cGVbMF0gPT09IFwic1wiID8gc2VsZWN0aW9uWzFdWzFdIC0gaGFuZGxlU2l6ZSAvIDIgOiBzZWxlY3Rpb25bMF1bMV0gLSBoYW5kbGVTaXplIC8gMjsgfSlcbiAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudHlwZSA9PT0gXCJuXCIgfHwgZC50eXBlID09PSBcInNcIiA/IHNlbGVjdGlvblsxXVswXSAtIHNlbGVjdGlvblswXVswXSArIGhhbmRsZVNpemUgOiBoYW5kbGVTaXplOyB9KVxuICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudHlwZSA9PT0gXCJlXCIgfHwgZC50eXBlID09PSBcIndcIiA/IHNlbGVjdGlvblsxXVsxXSAtIHNlbGVjdGlvblswXVsxXSArIGhhbmRsZVNpemUgOiBoYW5kbGVTaXplOyB9KTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIGdyb3VwLnNlbGVjdEFsbChcIi5zZWxlY3Rpb24sLmhhbmRsZVwiKVxuICAgICAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIG51bGwpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIG51bGwpXG4gICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBudWxsKVxuICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXR0ZXIodGhhdCwgYXJncywgY2xlYW4pIHtcbiAgICB2YXIgZW1pdCA9IHRoYXQuX19icnVzaC5lbWl0dGVyO1xuICAgIHJldHVybiBlbWl0ICYmICghY2xlYW4gfHwgIWVtaXQuY2xlYW4pID8gZW1pdCA6IG5ldyBFbWl0dGVyKHRoYXQsIGFyZ3MsIGNsZWFuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEVtaXR0ZXIodGhhdCwgYXJncywgY2xlYW4pIHtcbiAgICB0aGlzLnRoYXQgPSB0aGF0O1xuICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgdGhpcy5zdGF0ZSA9IHRoYXQuX19icnVzaDtcbiAgICB0aGlzLmFjdGl2ZSA9IDA7XG4gICAgdGhpcy5jbGVhbiA9IGNsZWFuO1xuICB9XG5cbiAgRW1pdHRlci5wcm90b3R5cGUgPSB7XG4gICAgYmVmb3Jlc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCsrdGhpcy5hY3RpdmUgPT09IDEpIHRoaXMuc3RhdGUuZW1pdHRlciA9IHRoaXMsIHRoaXMuc3RhcnRpbmcgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24oZXZlbnQsIG1vZGUpIHtcbiAgICAgIGlmICh0aGlzLnN0YXJ0aW5nKSB0aGlzLnN0YXJ0aW5nID0gZmFsc2UsIHRoaXMuZW1pdChcInN0YXJ0XCIsIGV2ZW50LCBtb2RlKTtcbiAgICAgIGVsc2UgdGhpcy5lbWl0KFwiYnJ1c2hcIiwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBicnVzaDogZnVuY3Rpb24oZXZlbnQsIG1vZGUpIHtcbiAgICAgIHRoaXMuZW1pdChcImJydXNoXCIsIGV2ZW50LCBtb2RlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZW5kOiBmdW5jdGlvbihldmVudCwgbW9kZSkge1xuICAgICAgaWYgKC0tdGhpcy5hY3RpdmUgPT09IDApIGRlbGV0ZSB0aGlzLnN0YXRlLmVtaXR0ZXIsIHRoaXMuZW1pdChcImVuZFwiLCBldmVudCwgbW9kZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGVtaXQ6IGZ1bmN0aW9uKHR5cGUsIGV2ZW50LCBtb2RlKSB7XG4gICAgICB2YXIgZCA9IHNlbGVjdCh0aGlzLnRoYXQpLmRhdHVtKCk7XG4gICAgICBsaXN0ZW5lcnMuY2FsbChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdGhpcy50aGF0LFxuICAgICAgICBuZXcgQnJ1c2hFdmVudCh0eXBlLCB7XG4gICAgICAgICAgc291cmNlRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgIHRhcmdldDogYnJ1c2gsXG4gICAgICAgICAgc2VsZWN0aW9uOiBkaW0ub3V0cHV0KHRoaXMuc3RhdGUuc2VsZWN0aW9uKSxcbiAgICAgICAgICBtb2RlLFxuICAgICAgICAgIGRpc3BhdGNoOiBsaXN0ZW5lcnNcbiAgICAgICAgfSksXG4gICAgICAgIGRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHN0YXJ0ZWQoZXZlbnQpIHtcbiAgICBpZiAodG91Y2hlbmRpbmcgJiYgIWV2ZW50LnRvdWNoZXMpIHJldHVybjtcbiAgICBpZiAoIWZpbHRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSByZXR1cm47XG5cbiAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgIHR5cGUgPSBldmVudC50YXJnZXQuX19kYXRhX18udHlwZSxcbiAgICAgICAgbW9kZSA9IChrZXlzICYmIGV2ZW50Lm1ldGFLZXkgPyB0eXBlID0gXCJvdmVybGF5XCIgOiB0eXBlKSA9PT0gXCJzZWxlY3Rpb25cIiA/IE1PREVfRFJBRyA6IChrZXlzICYmIGV2ZW50LmFsdEtleSA/IE1PREVfQ0VOVEVSIDogTU9ERV9IQU5ETEUpLFxuICAgICAgICBzaWduWCA9IGRpbSA9PT0gWSA/IG51bGwgOiBzaWduc1hbdHlwZV0sXG4gICAgICAgIHNpZ25ZID0gZGltID09PSBYID8gbnVsbCA6IHNpZ25zWVt0eXBlXSxcbiAgICAgICAgc3RhdGUgPSBsb2NhbCh0aGF0KSxcbiAgICAgICAgZXh0ZW50ID0gc3RhdGUuZXh0ZW50LFxuICAgICAgICBzZWxlY3Rpb24gPSBzdGF0ZS5zZWxlY3Rpb24sXG4gICAgICAgIFcgPSBleHRlbnRbMF1bMF0sIHcwLCB3MSxcbiAgICAgICAgTiA9IGV4dGVudFswXVsxXSwgbjAsIG4xLFxuICAgICAgICBFID0gZXh0ZW50WzFdWzBdLCBlMCwgZTEsXG4gICAgICAgIFMgPSBleHRlbnRbMV1bMV0sIHMwLCBzMSxcbiAgICAgICAgZHggPSAwLFxuICAgICAgICBkeSA9IDAsXG4gICAgICAgIG1vdmluZyxcbiAgICAgICAgc2hpZnRpbmcgPSBzaWduWCAmJiBzaWduWSAmJiBrZXlzICYmIGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICBsb2NrWCxcbiAgICAgICAgbG9ja1ksXG4gICAgICAgIHBvaW50cyA9IEFycmF5LmZyb20oZXZlbnQudG91Y2hlcyB8fCBbZXZlbnRdLCB0ID0+IHtcbiAgICAgICAgICBjb25zdCBpID0gdC5pZGVudGlmaWVyO1xuICAgICAgICAgIHQgPSBwb2ludGVyKHQsIHRoYXQpO1xuICAgICAgICAgIHQucG9pbnQwID0gdC5zbGljZSgpO1xuICAgICAgICAgIHQuaWRlbnRpZmllciA9IGk7XG4gICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH0pO1xuXG4gICAgaW50ZXJydXB0KHRoYXQpO1xuICAgIHZhciBlbWl0ID0gZW1pdHRlcih0aGF0LCBhcmd1bWVudHMsIHRydWUpLmJlZm9yZXN0YXJ0KCk7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJvdmVybGF5XCIpIHtcbiAgICAgIGlmIChzZWxlY3Rpb24pIG1vdmluZyA9IHRydWU7XG4gICAgICBjb25zdCBwdHMgPSBbcG9pbnRzWzBdLCBwb2ludHNbMV0gfHwgcG9pbnRzWzBdXTtcbiAgICAgIHN0YXRlLnNlbGVjdGlvbiA9IHNlbGVjdGlvbiA9IFtbXG4gICAgICAgICAgdzAgPSBkaW0gPT09IFkgPyBXIDogbWluKHB0c1swXVswXSwgcHRzWzFdWzBdKSxcbiAgICAgICAgICBuMCA9IGRpbSA9PT0gWCA/IE4gOiBtaW4ocHRzWzBdWzFdLCBwdHNbMV1bMV0pXG4gICAgICAgIF0sIFtcbiAgICAgICAgICBlMCA9IGRpbSA9PT0gWSA/IEUgOiBtYXgocHRzWzBdWzBdLCBwdHNbMV1bMF0pLFxuICAgICAgICAgIHMwID0gZGltID09PSBYID8gUyA6IG1heChwdHNbMF1bMV0sIHB0c1sxXVsxXSlcbiAgICAgICAgXV07XG4gICAgICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIG1vdmUoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3MCA9IHNlbGVjdGlvblswXVswXTtcbiAgICAgIG4wID0gc2VsZWN0aW9uWzBdWzFdO1xuICAgICAgZTAgPSBzZWxlY3Rpb25bMV1bMF07XG4gICAgICBzMCA9IHNlbGVjdGlvblsxXVsxXTtcbiAgICB9XG5cbiAgICB3MSA9IHcwO1xuICAgIG4xID0gbjA7XG4gICAgZTEgPSBlMDtcbiAgICBzMSA9IHMwO1xuXG4gICAgdmFyIGdyb3VwID0gc2VsZWN0KHRoYXQpXG4gICAgICAgIC5hdHRyKFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIpO1xuXG4gICAgdmFyIG92ZXJsYXkgPSBncm91cC5zZWxlY3RBbGwoXCIub3ZlcmxheVwiKVxuICAgICAgICAuYXR0cihcImN1cnNvclwiLCBjdXJzb3JzW3R5cGVdKTtcblxuICAgIGlmIChldmVudC50b3VjaGVzKSB7XG4gICAgICBlbWl0Lm1vdmVkID0gbW92ZWQ7XG4gICAgICBlbWl0LmVuZGVkID0gZW5kZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gc2VsZWN0KGV2ZW50LnZpZXcpXG4gICAgICAgICAgLm9uKFwibW91c2Vtb3ZlLmJydXNoXCIsIG1vdmVkLCB0cnVlKVxuICAgICAgICAgIC5vbihcIm1vdXNldXAuYnJ1c2hcIiwgZW5kZWQsIHRydWUpO1xuICAgICAgaWYgKGtleXMpIHZpZXdcbiAgICAgICAgICAub24oXCJrZXlkb3duLmJydXNoXCIsIGtleWRvd25lZCwgdHJ1ZSlcbiAgICAgICAgICAub24oXCJrZXl1cC5icnVzaFwiLCBrZXl1cHBlZCwgdHJ1ZSlcblxuICAgICAgZHJhZ0Rpc2FibGUoZXZlbnQudmlldyk7XG4gICAgfVxuXG4gICAgcmVkcmF3LmNhbGwodGhhdCk7XG4gICAgZW1pdC5zdGFydChldmVudCwgbW9kZS5uYW1lKTtcblxuICAgIGZ1bmN0aW9uIG1vdmVkKGV2ZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IHAgb2YgZXZlbnQuY2hhbmdlZFRvdWNoZXMgfHwgW2V2ZW50XSkge1xuICAgICAgICBmb3IgKGNvbnN0IGQgb2YgcG9pbnRzKVxuICAgICAgICAgIGlmIChkLmlkZW50aWZpZXIgPT09IHAuaWRlbnRpZmllcikgZC5jdXIgPSBwb2ludGVyKHAsIHRoYXQpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaWZ0aW5nICYmICFsb2NrWCAmJiAhbG9ja1kgJiYgcG9pbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBwb2ludCA9IHBvaW50c1swXTtcbiAgICAgICAgaWYgKGFicyhwb2ludC5jdXJbMF0gLSBwb2ludFswXSkgPiBhYnMocG9pbnQuY3VyWzFdIC0gcG9pbnRbMV0pKVxuICAgICAgICAgIGxvY2tZID0gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGxvY2tYID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgcG9pbnRzKVxuICAgICAgICBpZiAocG9pbnQuY3VyKSBwb2ludFswXSA9IHBvaW50LmN1clswXSwgcG9pbnRbMV0gPSBwb2ludC5jdXJbMV07XG4gICAgICBtb3ZpbmcgPSB0cnVlO1xuICAgICAgbm9ldmVudChldmVudCk7XG4gICAgICBtb3ZlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlKGV2ZW50KSB7XG4gICAgICBjb25zdCBwb2ludCA9IHBvaW50c1swXSwgcG9pbnQwID0gcG9pbnQucG9pbnQwO1xuICAgICAgdmFyIHQ7XG5cbiAgICAgIGR4ID0gcG9pbnRbMF0gLSBwb2ludDBbMF07XG4gICAgICBkeSA9IHBvaW50WzFdIC0gcG9pbnQwWzFdO1xuXG4gICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgY2FzZSBNT0RFX1NQQUNFOlxuICAgICAgICBjYXNlIE1PREVfRFJBRzoge1xuICAgICAgICAgIGlmIChzaWduWCkgZHggPSBtYXgoVyAtIHcwLCBtaW4oRSAtIGUwLCBkeCkpLCB3MSA9IHcwICsgZHgsIGUxID0gZTAgKyBkeDtcbiAgICAgICAgICBpZiAoc2lnblkpIGR5ID0gbWF4KE4gLSBuMCwgbWluKFMgLSBzMCwgZHkpKSwgbjEgPSBuMCArIGR5LCBzMSA9IHMwICsgZHk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBNT0RFX0hBTkRMRToge1xuICAgICAgICAgIGlmIChwb2ludHNbMV0pIHtcbiAgICAgICAgICAgIGlmIChzaWduWCkgdzEgPSBtYXgoVywgbWluKEUsIHBvaW50c1swXVswXSkpLCBlMSA9IG1heChXLCBtaW4oRSwgcG9pbnRzWzFdWzBdKSksIHNpZ25YID0gMTtcbiAgICAgICAgICAgIGlmIChzaWduWSkgbjEgPSBtYXgoTiwgbWluKFMsIHBvaW50c1swXVsxXSkpLCBzMSA9IG1heChOLCBtaW4oUywgcG9pbnRzWzFdWzFdKSksIHNpZ25ZID0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNpZ25YIDwgMCkgZHggPSBtYXgoVyAtIHcwLCBtaW4oRSAtIHcwLCBkeCkpLCB3MSA9IHcwICsgZHgsIGUxID0gZTA7XG4gICAgICAgICAgICBlbHNlIGlmIChzaWduWCA+IDApIGR4ID0gbWF4KFcgLSBlMCwgbWluKEUgLSBlMCwgZHgpKSwgdzEgPSB3MCwgZTEgPSBlMCArIGR4O1xuICAgICAgICAgICAgaWYgKHNpZ25ZIDwgMCkgZHkgPSBtYXgoTiAtIG4wLCBtaW4oUyAtIG4wLCBkeSkpLCBuMSA9IG4wICsgZHksIHMxID0gczA7XG4gICAgICAgICAgICBlbHNlIGlmIChzaWduWSA+IDApIGR5ID0gbWF4KE4gLSBzMCwgbWluKFMgLSBzMCwgZHkpKSwgbjEgPSBuMCwgczEgPSBzMCArIGR5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIE1PREVfQ0VOVEVSOiB7XG4gICAgICAgICAgaWYgKHNpZ25YKSB3MSA9IG1heChXLCBtaW4oRSwgdzAgLSBkeCAqIHNpZ25YKSksIGUxID0gbWF4KFcsIG1pbihFLCBlMCArIGR4ICogc2lnblgpKTtcbiAgICAgICAgICBpZiAoc2lnblkpIG4xID0gbWF4KE4sIG1pbihTLCBuMCAtIGR5ICogc2lnblkpKSwgczEgPSBtYXgoTiwgbWluKFMsIHMwICsgZHkgKiBzaWduWSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlMSA8IHcxKSB7XG4gICAgICAgIHNpZ25YICo9IC0xO1xuICAgICAgICB0ID0gdzAsIHcwID0gZTAsIGUwID0gdDtcbiAgICAgICAgdCA9IHcxLCB3MSA9IGUxLCBlMSA9IHQ7XG4gICAgICAgIGlmICh0eXBlIGluIGZsaXBYKSBvdmVybGF5LmF0dHIoXCJjdXJzb3JcIiwgY3Vyc29yc1t0eXBlID0gZmxpcFhbdHlwZV1dKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHMxIDwgbjEpIHtcbiAgICAgICAgc2lnblkgKj0gLTE7XG4gICAgICAgIHQgPSBuMCwgbjAgPSBzMCwgczAgPSB0O1xuICAgICAgICB0ID0gbjEsIG4xID0gczEsIHMxID0gdDtcbiAgICAgICAgaWYgKHR5cGUgaW4gZmxpcFkpIG92ZXJsYXkuYXR0cihcImN1cnNvclwiLCBjdXJzb3JzW3R5cGUgPSBmbGlwWVt0eXBlXV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuc2VsZWN0aW9uKSBzZWxlY3Rpb24gPSBzdGF0ZS5zZWxlY3Rpb247IC8vIE1heSBiZSBzZXQgYnkgYnJ1c2gubW92ZSFcbiAgICAgIGlmIChsb2NrWCkgdzEgPSBzZWxlY3Rpb25bMF1bMF0sIGUxID0gc2VsZWN0aW9uWzFdWzBdO1xuICAgICAgaWYgKGxvY2tZKSBuMSA9IHNlbGVjdGlvblswXVsxXSwgczEgPSBzZWxlY3Rpb25bMV1bMV07XG5cbiAgICAgIGlmIChzZWxlY3Rpb25bMF1bMF0gIT09IHcxXG4gICAgICAgICAgfHwgc2VsZWN0aW9uWzBdWzFdICE9PSBuMVxuICAgICAgICAgIHx8IHNlbGVjdGlvblsxXVswXSAhPT0gZTFcbiAgICAgICAgICB8fCBzZWxlY3Rpb25bMV1bMV0gIT09IHMxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdGlvbiA9IFtbdzEsIG4xXSwgW2UxLCBzMV1dO1xuICAgICAgICByZWRyYXcuY2FsbCh0aGF0KTtcbiAgICAgICAgZW1pdC5icnVzaChldmVudCwgbW9kZS5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmRlZChldmVudCkge1xuICAgICAgbm9wcm9wYWdhdGlvbihldmVudCk7XG4gICAgICBpZiAoZXZlbnQudG91Y2hlcykge1xuICAgICAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaWYgKHRvdWNoZW5kaW5nKSBjbGVhclRpbWVvdXQodG91Y2hlbmRpbmcpO1xuICAgICAgICB0b3VjaGVuZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRvdWNoZW5kaW5nID0gbnVsbDsgfSwgNTAwKTsgLy8gR2hvc3QgY2xpY2tzIGFyZSBkZWxheWVkIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ0VuYWJsZShldmVudC52aWV3LCBtb3ZpbmcpO1xuICAgICAgICB2aWV3Lm9uKFwia2V5ZG93bi5icnVzaCBrZXl1cC5icnVzaCBtb3VzZW1vdmUuYnJ1c2ggbW91c2V1cC5icnVzaFwiLCBudWxsKTtcbiAgICAgIH1cbiAgICAgIGdyb3VwLmF0dHIoXCJwb2ludGVyLWV2ZW50c1wiLCBcImFsbFwiKTtcbiAgICAgIG92ZXJsYXkuYXR0cihcImN1cnNvclwiLCBjdXJzb3JzLm92ZXJsYXkpO1xuICAgICAgaWYgKHN0YXRlLnNlbGVjdGlvbikgc2VsZWN0aW9uID0gc3RhdGUuc2VsZWN0aW9uOyAvLyBNYXkgYmUgc2V0IGJ5IGJydXNoLm1vdmUgKG9uIHN0YXJ0KSFcbiAgICAgIGlmIChlbXB0eShzZWxlY3Rpb24pKSBzdGF0ZS5zZWxlY3Rpb24gPSBudWxsLCByZWRyYXcuY2FsbCh0aGF0KTtcbiAgICAgIGVtaXQuZW5kKGV2ZW50LCBtb2RlLm5hbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleWRvd25lZChldmVudCkge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMTY6IHsgLy8gU0hJRlRcbiAgICAgICAgICBzaGlmdGluZyA9IHNpZ25YICYmIHNpZ25ZO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMTg6IHsgLy8gQUxUXG4gICAgICAgICAgaWYgKG1vZGUgPT09IE1PREVfSEFORExFKSB7XG4gICAgICAgICAgICBpZiAoc2lnblgpIGUwID0gZTEgLSBkeCAqIHNpZ25YLCB3MCA9IHcxICsgZHggKiBzaWduWDtcbiAgICAgICAgICAgIGlmIChzaWduWSkgczAgPSBzMSAtIGR5ICogc2lnblksIG4wID0gbjEgKyBkeSAqIHNpZ25ZO1xuICAgICAgICAgICAgbW9kZSA9IE1PREVfQ0VOVEVSO1xuICAgICAgICAgICAgbW92ZShldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMzI6IHsgLy8gU1BBQ0U7IHRha2VzIHByaW9yaXR5IG92ZXIgQUxUXG4gICAgICAgICAgaWYgKG1vZGUgPT09IE1PREVfSEFORExFIHx8IG1vZGUgPT09IE1PREVfQ0VOVEVSKSB7XG4gICAgICAgICAgICBpZiAoc2lnblggPCAwKSBlMCA9IGUxIC0gZHg7IGVsc2UgaWYgKHNpZ25YID4gMCkgdzAgPSB3MSAtIGR4O1xuICAgICAgICAgICAgaWYgKHNpZ25ZIDwgMCkgczAgPSBzMSAtIGR5OyBlbHNlIGlmIChzaWduWSA+IDApIG4wID0gbjEgLSBkeTtcbiAgICAgICAgICAgIG1vZGUgPSBNT0RFX1NQQUNFO1xuICAgICAgICAgICAgb3ZlcmxheS5hdHRyKFwiY3Vyc29yXCIsIGN1cnNvcnMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIG1vdmUoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiByZXR1cm47XG4gICAgICB9XG4gICAgICBub2V2ZW50KGV2ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXl1cHBlZChldmVudCkge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMTY6IHsgLy8gU0hJRlRcbiAgICAgICAgICBpZiAoc2hpZnRpbmcpIHtcbiAgICAgICAgICAgIGxvY2tYID0gbG9ja1kgPSBzaGlmdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbW92ZShldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMTg6IHsgLy8gQUxUXG4gICAgICAgICAgaWYgKG1vZGUgPT09IE1PREVfQ0VOVEVSKSB7XG4gICAgICAgICAgICBpZiAoc2lnblggPCAwKSBlMCA9IGUxOyBlbHNlIGlmIChzaWduWCA+IDApIHcwID0gdzE7XG4gICAgICAgICAgICBpZiAoc2lnblkgPCAwKSBzMCA9IHMxOyBlbHNlIGlmIChzaWduWSA+IDApIG4wID0gbjE7XG4gICAgICAgICAgICBtb2RlID0gTU9ERV9IQU5ETEU7XG4gICAgICAgICAgICBtb3ZlKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAzMjogeyAvLyBTUEFDRVxuICAgICAgICAgIGlmIChtb2RlID09PSBNT0RFX1NQQUNFKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgICAgIGlmIChzaWduWCkgZTAgPSBlMSAtIGR4ICogc2lnblgsIHcwID0gdzEgKyBkeCAqIHNpZ25YO1xuICAgICAgICAgICAgICBpZiAoc2lnblkpIHMwID0gczEgLSBkeSAqIHNpZ25ZLCBuMCA9IG4xICsgZHkgKiBzaWduWTtcbiAgICAgICAgICAgICAgbW9kZSA9IE1PREVfQ0VOVEVSO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHNpZ25YIDwgMCkgZTAgPSBlMTsgZWxzZSBpZiAoc2lnblggPiAwKSB3MCA9IHcxO1xuICAgICAgICAgICAgICBpZiAoc2lnblkgPCAwKSBzMCA9IHMxOyBlbHNlIGlmIChzaWduWSA+IDApIG4wID0gbjE7XG4gICAgICAgICAgICAgIG1vZGUgPSBNT0RFX0hBTkRMRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG92ZXJsYXkuYXR0cihcImN1cnNvclwiLCBjdXJzb3JzW3R5cGVdKTtcbiAgICAgICAgICAgIG1vdmUoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiByZXR1cm47XG4gICAgICB9XG4gICAgICBub2V2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaG1vdmVkKGV2ZW50KSB7XG4gICAgZW1pdHRlcih0aGlzLCBhcmd1bWVudHMpLm1vdmVkKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoZW5kZWQoZXZlbnQpIHtcbiAgICBlbWl0dGVyKHRoaXMsIGFyZ3VtZW50cykuZW5kZWQoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLl9fYnJ1c2ggfHwge3NlbGVjdGlvbjogbnVsbH07XG4gICAgc3RhdGUuZXh0ZW50ID0gbnVtYmVyMihleHRlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgc3RhdGUuZGltID0gZGltO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGJydXNoLmV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChleHRlbnQgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KG51bWJlcjIoXykpLCBicnVzaCkgOiBleHRlbnQ7XG4gIH07XG5cbiAgYnJ1c2guZmlsdGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGZpbHRlciA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoISFfKSwgYnJ1c2gpIDogZmlsdGVyO1xuICB9O1xuXG4gIGJydXNoLnRvdWNoYWJsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0b3VjaGFibGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIGJydXNoKSA6IHRvdWNoYWJsZTtcbiAgfTtcblxuICBicnVzaC5oYW5kbGVTaXplID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGhhbmRsZVNpemUgPSArXywgYnJ1c2gpIDogaGFuZGxlU2l6ZTtcbiAgfTtcblxuICBicnVzaC5rZXlNb2RpZmllcnMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoa2V5cyA9ICEhXywgYnJ1c2gpIDoga2V5cztcbiAgfTtcblxuICBicnVzaC5vbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IGxpc3RlbmVycy5vbi5hcHBseShsaXN0ZW5lcnMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHZhbHVlID09PSBsaXN0ZW5lcnMgPyBicnVzaCA6IHZhbHVlO1xuICB9O1xuXG4gIHJldHVybiBicnVzaDtcbn1cbiIsImZ1bmN0aW9uIGNvdW50KG5vZGUpIHtcbiAgdmFyIHN1bSA9IDAsXG4gICAgICBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4sXG4gICAgICBpID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoO1xuICBpZiAoIWkpIHN1bSA9IDE7XG4gIGVsc2Ugd2hpbGUgKC0taSA+PSAwKSBzdW0gKz0gY2hpbGRyZW5baV0udmFsdWU7XG4gIG5vZGUudmFsdWUgPSBzdW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoQWZ0ZXIoY291bnQpO1xufVxuIiwiaW1wb3J0IG5vZGVfY291bnQgZnJvbSBcIi4vY291bnQuanNcIjtcbmltcG9ydCBub2RlX2VhY2ggZnJvbSBcIi4vZWFjaC5qc1wiO1xuaW1wb3J0IG5vZGVfZWFjaEJlZm9yZSBmcm9tIFwiLi9lYWNoQmVmb3JlLmpzXCI7XG5pbXBvcnQgbm9kZV9lYWNoQWZ0ZXIgZnJvbSBcIi4vZWFjaEFmdGVyLmpzXCI7XG5pbXBvcnQgbm9kZV9maW5kIGZyb20gXCIuL2ZpbmQuanNcIjtcbmltcG9ydCBub2RlX3N1bSBmcm9tIFwiLi9zdW0uanNcIjtcbmltcG9ydCBub2RlX3NvcnQgZnJvbSBcIi4vc29ydC5qc1wiO1xuaW1wb3J0IG5vZGVfcGF0aCBmcm9tIFwiLi9wYXRoLmpzXCI7XG5pbXBvcnQgbm9kZV9hbmNlc3RvcnMgZnJvbSBcIi4vYW5jZXN0b3JzLmpzXCI7XG5pbXBvcnQgbm9kZV9kZXNjZW5kYW50cyBmcm9tIFwiLi9kZXNjZW5kYW50cy5qc1wiO1xuaW1wb3J0IG5vZGVfbGVhdmVzIGZyb20gXCIuL2xlYXZlcy5qc1wiO1xuaW1wb3J0IG5vZGVfbGlua3MgZnJvbSBcIi4vbGlua3MuanNcIjtcbmltcG9ydCBub2RlX2l0ZXJhdG9yIGZyb20gXCIuL2l0ZXJhdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhpZXJhcmNoeShkYXRhLCBjaGlsZHJlbikge1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIE1hcCkge1xuICAgIGRhdGEgPSBbdW5kZWZpbmVkLCBkYXRhXTtcbiAgICBpZiAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZCkgY2hpbGRyZW4gPSBtYXBDaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRyZW4gPSBvYmplY3RDaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByb290ID0gbmV3IE5vZGUoZGF0YSksXG4gICAgICBub2RlLFxuICAgICAgbm9kZXMgPSBbcm9vdF0sXG4gICAgICBjaGlsZCxcbiAgICAgIGNoaWxkcyxcbiAgICAgIGksXG4gICAgICBuO1xuXG4gIHdoaWxlIChub2RlID0gbm9kZXMucG9wKCkpIHtcbiAgICBpZiAoKGNoaWxkcyA9IGNoaWxkcmVuKG5vZGUuZGF0YSkpICYmIChuID0gKGNoaWxkcyA9IEFycmF5LmZyb20oY2hpbGRzKSkubGVuZ3RoKSkge1xuICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcztcbiAgICAgIGZvciAoaSA9IG4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBub2Rlcy5wdXNoKGNoaWxkID0gY2hpbGRzW2ldID0gbmV3IE5vZGUoY2hpbGRzW2ldKSk7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IG5vZGU7XG4gICAgICAgIGNoaWxkLmRlcHRoID0gbm9kZS5kZXB0aCArIDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvb3QuZWFjaEJlZm9yZShjb21wdXRlSGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gbm9kZV9jb3B5KCkge1xuICByZXR1cm4gaGllcmFyY2h5KHRoaXMpLmVhY2hCZWZvcmUoY29weURhdGEpO1xufVxuXG5mdW5jdGlvbiBvYmplY3RDaGlsZHJlbihkKSB7XG4gIHJldHVybiBkLmNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihkKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGQpID8gZFsxXSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvcHlEYXRhKG5vZGUpIHtcbiAgaWYgKG5vZGUuZGF0YS52YWx1ZSAhPT0gdW5kZWZpbmVkKSBub2RlLnZhbHVlID0gbm9kZS5kYXRhLnZhbHVlO1xuICBub2RlLmRhdGEgPSBub2RlLmRhdGEuZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVIZWlnaHQobm9kZSkge1xuICB2YXIgaGVpZ2h0ID0gMDtcbiAgZG8gbm9kZS5oZWlnaHQgPSBoZWlnaHQ7XG4gIHdoaWxlICgobm9kZSA9IG5vZGUucGFyZW50KSAmJiAobm9kZS5oZWlnaHQgPCArK2hlaWdodCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTm9kZShkYXRhKSB7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuZGVwdGggPVxuICB0aGlzLmhlaWdodCA9IDA7XG4gIHRoaXMucGFyZW50ID0gbnVsbDtcbn1cblxuTm9kZS5wcm90b3R5cGUgPSBoaWVyYXJjaHkucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogTm9kZSxcbiAgY291bnQ6IG5vZGVfY291bnQsXG4gIGVhY2g6IG5vZGVfZWFjaCxcbiAgZWFjaEFmdGVyOiBub2RlX2VhY2hBZnRlcixcbiAgZWFjaEJlZm9yZTogbm9kZV9lYWNoQmVmb3JlLFxuICBmaW5kOiBub2RlX2ZpbmQsXG4gIHN1bTogbm9kZV9zdW0sXG4gIHNvcnQ6IG5vZGVfc29ydCxcbiAgcGF0aDogbm9kZV9wYXRoLFxuICBhbmNlc3RvcnM6IG5vZGVfYW5jZXN0b3JzLFxuICBkZXNjZW5kYW50czogbm9kZV9kZXNjZW5kYW50cyxcbiAgbGVhdmVzOiBub2RlX2xlYXZlcyxcbiAgbGlua3M6IG5vZGVfbGlua3MsXG4gIGNvcHk6IG5vZGVfY29weSxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IG5vZGVfaXRlcmF0b3Jcbn07XG4iLCJpbXBvcnQge05vZGV9IGZyb20gXCIuL2hpZXJhcmNoeS9pbmRleC5qc1wiO1xuXG5mdW5jdGlvbiBkZWZhdWx0U2VwYXJhdGlvbihhLCBiKSB7XG4gIHJldHVybiBhLnBhcmVudCA9PT0gYi5wYXJlbnQgPyAxIDogMjtcbn1cblxuLy8gZnVuY3Rpb24gcmFkaWFsU2VwYXJhdGlvbihhLCBiKSB7XG4vLyAgIHJldHVybiAoYS5wYXJlbnQgPT09IGIucGFyZW50ID8gMSA6IDIpIC8gYS5kZXB0aDtcbi8vIH1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHRyYXZlcnNlIHRoZSBsZWZ0IGNvbnRvdXIgb2YgYSBzdWJ0cmVlIChvclxuLy8gc3ViZm9yZXN0KS4gSXQgcmV0dXJucyB0aGUgc3VjY2Vzc29yIG9mIHYgb24gdGhpcyBjb250b3VyLiBUaGlzIHN1Y2Nlc3NvciBpc1xuLy8gZWl0aGVyIGdpdmVuIGJ5IHRoZSBsZWZ0bW9zdCBjaGlsZCBvZiB2IG9yIGJ5IHRoZSB0aHJlYWQgb2Ygdi4gVGhlIGZ1bmN0aW9uXG4vLyByZXR1cm5zIG51bGwgaWYgYW5kIG9ubHkgaWYgdiBpcyBvbiB0aGUgaGlnaGVzdCBsZXZlbCBvZiBpdHMgc3VidHJlZS5cbmZ1bmN0aW9uIG5leHRMZWZ0KHYpIHtcbiAgdmFyIGNoaWxkcmVuID0gdi5jaGlsZHJlbjtcbiAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW5bMF0gOiB2LnQ7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd29ya3MgYW5hbG9nb3VzbHkgdG8gbmV4dExlZnQuXG5mdW5jdGlvbiBuZXh0UmlnaHQodikge1xuICB2YXIgY2hpbGRyZW4gPSB2LmNoaWxkcmVuO1xuICByZXR1cm4gY2hpbGRyZW4gPyBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXSA6IHYudDtcbn1cblxuLy8gU2hpZnRzIHRoZSBjdXJyZW50IHN1YnRyZWUgcm9vdGVkIGF0IHcrLiBUaGlzIGlzIGRvbmUgYnkgaW5jcmVhc2luZ1xuLy8gcHJlbGltKHcrKSBhbmQgbW9kKHcrKSBieSBzaGlmdC5cbmZ1bmN0aW9uIG1vdmVTdWJ0cmVlKHdtLCB3cCwgc2hpZnQpIHtcbiAgdmFyIGNoYW5nZSA9IHNoaWZ0IC8gKHdwLmkgLSB3bS5pKTtcbiAgd3AuYyAtPSBjaGFuZ2U7XG4gIHdwLnMgKz0gc2hpZnQ7XG4gIHdtLmMgKz0gY2hhbmdlO1xuICB3cC56ICs9IHNoaWZ0O1xuICB3cC5tICs9IHNoaWZ0O1xufVxuXG4vLyBBbGwgb3RoZXIgc2hpZnRzLCBhcHBsaWVkIHRvIHRoZSBzbWFsbGVyIHN1YnRyZWVzIGJldHdlZW4gdy0gYW5kIHcrLCBhcmVcbi8vIHBlcmZvcm1lZCBieSB0aGlzIGZ1bmN0aW9uLiBUbyBwcmVwYXJlIHRoZSBzaGlmdHMsIHdlIGhhdmUgdG8gYWRqdXN0XG4vLyBjaGFuZ2UodyspLCBzaGlmdCh3KyksIGFuZCBjaGFuZ2Uody0pLlxuZnVuY3Rpb24gZXhlY3V0ZVNoaWZ0cyh2KSB7XG4gIHZhciBzaGlmdCA9IDAsXG4gICAgICBjaGFuZ2UgPSAwLFxuICAgICAgY2hpbGRyZW4gPSB2LmNoaWxkcmVuLFxuICAgICAgaSA9IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIHc7XG4gIHdoaWxlICgtLWkgPj0gMCkge1xuICAgIHcgPSBjaGlsZHJlbltpXTtcbiAgICB3LnogKz0gc2hpZnQ7XG4gICAgdy5tICs9IHNoaWZ0O1xuICAgIHNoaWZ0ICs9IHcucyArIChjaGFuZ2UgKz0gdy5jKTtcbiAgfVxufVxuXG4vLyBJZiB2aS3igJlzIGFuY2VzdG9yIGlzIGEgc2libGluZyBvZiB2LCByZXR1cm5zIHZpLeKAmXMgYW5jZXN0b3IuIE90aGVyd2lzZSxcbi8vIHJldHVybnMgdGhlIHNwZWNpZmllZCAoZGVmYXVsdCkgYW5jZXN0b3IuXG5mdW5jdGlvbiBuZXh0QW5jZXN0b3IodmltLCB2LCBhbmNlc3Rvcikge1xuICByZXR1cm4gdmltLmEucGFyZW50ID09PSB2LnBhcmVudCA/IHZpbS5hIDogYW5jZXN0b3I7XG59XG5cbmZ1bmN0aW9uIFRyZWVOb2RlKG5vZGUsIGkpIHtcbiAgdGhpcy5fID0gbm9kZTtcbiAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcbiAgdGhpcy5BID0gbnVsbDsgLy8gZGVmYXVsdCBhbmNlc3RvclxuICB0aGlzLmEgPSB0aGlzOyAvLyBhbmNlc3RvclxuICB0aGlzLnogPSAwOyAvLyBwcmVsaW1cbiAgdGhpcy5tID0gMDsgLy8gbW9kXG4gIHRoaXMuYyA9IDA7IC8vIGNoYW5nZVxuICB0aGlzLnMgPSAwOyAvLyBzaGlmdFxuICB0aGlzLnQgPSBudWxsOyAvLyB0aHJlYWRcbiAgdGhpcy5pID0gaTsgLy8gbnVtYmVyXG59XG5cblRyZWVOb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTm9kZS5wcm90b3R5cGUpO1xuXG5mdW5jdGlvbiB0cmVlUm9vdChyb290KSB7XG4gIHZhciB0cmVlID0gbmV3IFRyZWVOb2RlKHJvb3QsIDApLFxuICAgICAgbm9kZSxcbiAgICAgIG5vZGVzID0gW3RyZWVdLFxuICAgICAgY2hpbGQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGksXG4gICAgICBuO1xuXG4gIHdoaWxlIChub2RlID0gbm9kZXMucG9wKCkpIHtcbiAgICBpZiAoY2hpbGRyZW4gPSBub2RlLl8uY2hpbGRyZW4pIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBuZXcgQXJyYXkobiA9IGNoaWxkcmVuLmxlbmd0aCk7XG4gICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgbm9kZXMucHVzaChjaGlsZCA9IG5vZGUuY2hpbGRyZW5baV0gPSBuZXcgVHJlZU5vZGUoY2hpbGRyZW5baV0sIGkpKTtcbiAgICAgICAgY2hpbGQucGFyZW50ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAodHJlZS5wYXJlbnQgPSBuZXcgVHJlZU5vZGUobnVsbCwgMCkpLmNoaWxkcmVuID0gW3RyZWVdO1xuICByZXR1cm4gdHJlZTtcbn1cblxuLy8gTm9kZS1saW5rIHRyZWUgZGlhZ3JhbSB1c2luZyB0aGUgUmVpbmdvbGQtVGlsZm9yZCBcInRpZHlcIiBhbGdvcml0aG1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VwYXJhdGlvbiA9IGRlZmF1bHRTZXBhcmF0aW9uLFxuICAgICAgZHggPSAxLFxuICAgICAgZHkgPSAxLFxuICAgICAgbm9kZVNpemUgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIHRyZWUocm9vdCkge1xuICAgIHZhciB0ID0gdHJlZVJvb3Qocm9vdCk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBsYXlvdXQgdXNpbmcgQnVjaGhlaW0gZXQgYWwu4oCZcyBhbGdvcml0aG0uXG4gICAgdC5lYWNoQWZ0ZXIoZmlyc3RXYWxrKSwgdC5wYXJlbnQubSA9IC10Lno7XG4gICAgdC5lYWNoQmVmb3JlKHNlY29uZFdhbGspO1xuXG4gICAgLy8gSWYgYSBmaXhlZCBub2RlIHNpemUgaXMgc3BlY2lmaWVkLCBzY2FsZSB4IGFuZCB5LlxuICAgIGlmIChub2RlU2l6ZSkgcm9vdC5lYWNoQmVmb3JlKHNpemVOb2RlKTtcblxuICAgIC8vIElmIGEgZml4ZWQgdHJlZSBzaXplIGlzIHNwZWNpZmllZCwgc2NhbGUgeCBhbmQgeSBiYXNlZCBvbiB0aGUgZXh0ZW50LlxuICAgIC8vIENvbXB1dGUgdGhlIGxlZnQtbW9zdCwgcmlnaHQtbW9zdCwgYW5kIGRlcHRoLW1vc3Qgbm9kZXMgZm9yIGV4dGVudHMuXG4gICAgZWxzZSB7XG4gICAgICB2YXIgbGVmdCA9IHJvb3QsXG4gICAgICAgICAgcmlnaHQgPSByb290LFxuICAgICAgICAgIGJvdHRvbSA9IHJvb3Q7XG4gICAgICByb290LmVhY2hCZWZvcmUoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBpZiAobm9kZS54IDwgbGVmdC54KSBsZWZ0ID0gbm9kZTtcbiAgICAgICAgaWYgKG5vZGUueCA+IHJpZ2h0LngpIHJpZ2h0ID0gbm9kZTtcbiAgICAgICAgaWYgKG5vZGUuZGVwdGggPiBib3R0b20uZGVwdGgpIGJvdHRvbSA9IG5vZGU7XG4gICAgICB9KTtcbiAgICAgIHZhciBzID0gbGVmdCA9PT0gcmlnaHQgPyAxIDogc2VwYXJhdGlvbihsZWZ0LCByaWdodCkgLyAyLFxuICAgICAgICAgIHR4ID0gcyAtIGxlZnQueCxcbiAgICAgICAgICBreCA9IGR4IC8gKHJpZ2h0LnggKyBzICsgdHgpLFxuICAgICAgICAgIGt5ID0gZHkgLyAoYm90dG9tLmRlcHRoIHx8IDEpO1xuICAgICAgcm9vdC5lYWNoQmVmb3JlKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS54ID0gKG5vZGUueCArIHR4KSAqIGt4O1xuICAgICAgICBub2RlLnkgPSBub2RlLmRlcHRoICoga3k7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIC8vIENvbXB1dGVzIGEgcHJlbGltaW5hcnkgeC1jb29yZGluYXRlIGZvciB2LiBCZWZvcmUgdGhhdCwgRklSU1QgV0FMSyBpc1xuICAvLyBhcHBsaWVkIHJlY3Vyc2l2ZWx5IHRvIHRoZSBjaGlsZHJlbiBvZiB2LCBhcyB3ZWxsIGFzIHRoZSBmdW5jdGlvblxuICAvLyBBUFBPUlRJT04uIEFmdGVyIHNwYWNpbmcgb3V0IHRoZSBjaGlsZHJlbiBieSBjYWxsaW5nIEVYRUNVVEUgU0hJRlRTLCB0aGVcbiAgLy8gbm9kZSB2IGlzIHBsYWNlZCB0byB0aGUgbWlkcG9pbnQgb2YgaXRzIG91dGVybW9zdCBjaGlsZHJlbi5cbiAgZnVuY3Rpb24gZmlyc3RXYWxrKHYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB2LmNoaWxkcmVuLFxuICAgICAgICBzaWJsaW5ncyA9IHYucGFyZW50LmNoaWxkcmVuLFxuICAgICAgICB3ID0gdi5pID8gc2libGluZ3Nbdi5pIC0gMV0gOiBudWxsO1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgZXhlY3V0ZVNoaWZ0cyh2KTtcbiAgICAgIHZhciBtaWRwb2ludCA9IChjaGlsZHJlblswXS56ICsgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0ueikgLyAyO1xuICAgICAgaWYgKHcpIHtcbiAgICAgICAgdi56ID0gdy56ICsgc2VwYXJhdGlvbih2Ll8sIHcuXyk7XG4gICAgICAgIHYubSA9IHYueiAtIG1pZHBvaW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdi56ID0gbWlkcG9pbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3KSB7XG4gICAgICB2LnogPSB3LnogKyBzZXBhcmF0aW9uKHYuXywgdy5fKTtcbiAgICB9XG4gICAgdi5wYXJlbnQuQSA9IGFwcG9ydGlvbih2LCB3LCB2LnBhcmVudC5BIHx8IHNpYmxpbmdzWzBdKTtcbiAgfVxuXG4gIC8vIENvbXB1dGVzIGFsbCByZWFsIHgtY29vcmRpbmF0ZXMgYnkgc3VtbWluZyB1cCB0aGUgbW9kaWZpZXJzIHJlY3Vyc2l2ZWx5LlxuICBmdW5jdGlvbiBzZWNvbmRXYWxrKHYpIHtcbiAgICB2Ll8ueCA9IHYueiArIHYucGFyZW50Lm07XG4gICAgdi5tICs9IHYucGFyZW50Lm07XG4gIH1cblxuICAvLyBUaGUgY29yZSBvZiB0aGUgYWxnb3JpdGhtLiBIZXJlLCBhIG5ldyBzdWJ0cmVlIGlzIGNvbWJpbmVkIHdpdGggdGhlXG4gIC8vIHByZXZpb3VzIHN1YnRyZWVzLiBUaHJlYWRzIGFyZSB1c2VkIHRvIHRyYXZlcnNlIHRoZSBpbnNpZGUgYW5kIG91dHNpZGVcbiAgLy8gY29udG91cnMgb2YgdGhlIGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWUgdXAgdG8gdGhlIGhpZ2hlc3QgY29tbW9uIGxldmVsLiBUaGVcbiAgLy8gdmVydGljZXMgdXNlZCBmb3IgdGhlIHRyYXZlcnNhbHMgYXJlIHZpKywgdmktLCB2by0sIGFuZCB2byssIHdoZXJlIHRoZVxuICAvLyBzdXBlcnNjcmlwdCBvIG1lYW5zIG91dHNpZGUgYW5kIGkgbWVhbnMgaW5zaWRlLCB0aGUgc3Vic2NyaXB0IC0gbWVhbnMgbGVmdFxuICAvLyBzdWJ0cmVlIGFuZCArIG1lYW5zIHJpZ2h0IHN1YnRyZWUuIEZvciBzdW1taW5nIHVwIHRoZSBtb2RpZmllcnMgYWxvbmcgdGhlXG4gIC8vIGNvbnRvdXIsIHdlIHVzZSByZXNwZWN0aXZlIHZhcmlhYmxlcyBzaSssIHNpLSwgc28tLCBhbmQgc28rLiBXaGVuZXZlciB0d29cbiAgLy8gbm9kZXMgb2YgdGhlIGluc2lkZSBjb250b3VycyBjb25mbGljdCwgd2UgY29tcHV0ZSB0aGUgbGVmdCBvbmUgb2YgdGhlXG4gIC8vIGdyZWF0ZXN0IHVuY29tbW9uIGFuY2VzdG9ycyB1c2luZyB0aGUgZnVuY3Rpb24gQU5DRVNUT1IgYW5kIGNhbGwgTU9WRVxuICAvLyBTVUJUUkVFIHRvIHNoaWZ0IHRoZSBzdWJ0cmVlIGFuZCBwcmVwYXJlIHRoZSBzaGlmdHMgb2Ygc21hbGxlciBzdWJ0cmVlcy5cbiAgLy8gRmluYWxseSwgd2UgYWRkIGEgbmV3IHRocmVhZCAoaWYgbmVjZXNzYXJ5KS5cbiAgZnVuY3Rpb24gYXBwb3J0aW9uKHYsIHcsIGFuY2VzdG9yKSB7XG4gICAgaWYgKHcpIHtcbiAgICAgIHZhciB2aXAgPSB2LFxuICAgICAgICAgIHZvcCA9IHYsXG4gICAgICAgICAgdmltID0gdyxcbiAgICAgICAgICB2b20gPSB2aXAucGFyZW50LmNoaWxkcmVuWzBdLFxuICAgICAgICAgIHNpcCA9IHZpcC5tLFxuICAgICAgICAgIHNvcCA9IHZvcC5tLFxuICAgICAgICAgIHNpbSA9IHZpbS5tLFxuICAgICAgICAgIHNvbSA9IHZvbS5tLFxuICAgICAgICAgIHNoaWZ0O1xuICAgICAgd2hpbGUgKHZpbSA9IG5leHRSaWdodCh2aW0pLCB2aXAgPSBuZXh0TGVmdCh2aXApLCB2aW0gJiYgdmlwKSB7XG4gICAgICAgIHZvbSA9IG5leHRMZWZ0KHZvbSk7XG4gICAgICAgIHZvcCA9IG5leHRSaWdodCh2b3ApO1xuICAgICAgICB2b3AuYSA9IHY7XG4gICAgICAgIHNoaWZ0ID0gdmltLnogKyBzaW0gLSB2aXAueiAtIHNpcCArIHNlcGFyYXRpb24odmltLl8sIHZpcC5fKTtcbiAgICAgICAgaWYgKHNoaWZ0ID4gMCkge1xuICAgICAgICAgIG1vdmVTdWJ0cmVlKG5leHRBbmNlc3Rvcih2aW0sIHYsIGFuY2VzdG9yKSwgdiwgc2hpZnQpO1xuICAgICAgICAgIHNpcCArPSBzaGlmdDtcbiAgICAgICAgICBzb3AgKz0gc2hpZnQ7XG4gICAgICAgIH1cbiAgICAgICAgc2ltICs9IHZpbS5tO1xuICAgICAgICBzaXAgKz0gdmlwLm07XG4gICAgICAgIHNvbSArPSB2b20ubTtcbiAgICAgICAgc29wICs9IHZvcC5tO1xuICAgICAgfVxuICAgICAgaWYgKHZpbSAmJiAhbmV4dFJpZ2h0KHZvcCkpIHtcbiAgICAgICAgdm9wLnQgPSB2aW07XG4gICAgICAgIHZvcC5tICs9IHNpbSAtIHNvcDtcbiAgICAgIH1cbiAgICAgIGlmICh2aXAgJiYgIW5leHRMZWZ0KHZvbSkpIHtcbiAgICAgICAgdm9tLnQgPSB2aXA7XG4gICAgICAgIHZvbS5tICs9IHNpcCAtIHNvbTtcbiAgICAgICAgYW5jZXN0b3IgPSB2O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYW5jZXN0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBzaXplTm9kZShub2RlKSB7XG4gICAgbm9kZS54ICo9IGR4O1xuICAgIG5vZGUueSA9IG5vZGUuZGVwdGggKiBkeTtcbiAgfVxuXG4gIHRyZWUuc2VwYXJhdGlvbiA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzZXBhcmF0aW9uID0geCwgdHJlZSkgOiBzZXBhcmF0aW9uO1xuICB9O1xuXG4gIHRyZWUuc2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChub2RlU2l6ZSA9IGZhbHNlLCBkeCA9ICt4WzBdLCBkeSA9ICt4WzFdLCB0cmVlKSA6IChub2RlU2l6ZSA/IG51bGwgOiBbZHgsIGR5XSk7XG4gIH07XG5cbiAgdHJlZS5ub2RlU2l6ZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChub2RlU2l6ZSA9IHRydWUsIGR4ID0gK3hbMF0sIGR5ID0gK3hbMV0sIHRyZWUpIDogKG5vZGVTaXplID8gW2R4LCBkeV0gOiBudWxsKTtcbiAgfTtcblxuICByZXR1cm4gdHJlZTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9uLCByb290fSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcildXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW1tzZWxlY3Rvcl1dLCByb290KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBUcmFuc2Zvcm0oaywgeCwgeSkge1xuICB0aGlzLmsgPSBrO1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVHJhbnNmb3JtLFxuICBzY2FsZTogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBrID09PSAxID8gdGhpcyA6IG5ldyBUcmFuc2Zvcm0odGhpcy5rICogaywgdGhpcy54LCB0aGlzLnkpO1xuICB9LFxuICB0cmFuc2xhdGU6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4geCA9PT0gMCAmIHkgPT09IDAgPyB0aGlzIDogbmV3IFRyYW5zZm9ybSh0aGlzLmssIHRoaXMueCArIHRoaXMuayAqIHgsIHRoaXMueSArIHRoaXMuayAqIHkpO1xuICB9LFxuICBhcHBseTogZnVuY3Rpb24ocG9pbnQpIHtcbiAgICByZXR1cm4gW3BvaW50WzBdICogdGhpcy5rICsgdGhpcy54LCBwb2ludFsxXSAqIHRoaXMuayArIHRoaXMueV07XG4gIH0sXG4gIGFwcGx5WDogZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB4ICogdGhpcy5rICsgdGhpcy54O1xuICB9LFxuICBhcHBseVk6IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4geSAqIHRoaXMuayArIHRoaXMueTtcbiAgfSxcbiAgaW52ZXJ0OiBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgIHJldHVybiBbKGxvY2F0aW9uWzBdIC0gdGhpcy54KSAvIHRoaXMuaywgKGxvY2F0aW9uWzFdIC0gdGhpcy55KSAvIHRoaXMua107XG4gIH0sXG4gIGludmVydFg6IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gKHggLSB0aGlzLngpIC8gdGhpcy5rO1xuICB9LFxuICBpbnZlcnRZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuICh5IC0gdGhpcy55KSAvIHRoaXMuaztcbiAgfSxcbiAgcmVzY2FsZVg6IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geC5jb3B5KCkuZG9tYWluKHgucmFuZ2UoKS5tYXAodGhpcy5pbnZlcnRYLCB0aGlzKS5tYXAoeC5pbnZlcnQsIHgpKTtcbiAgfSxcbiAgcmVzY2FsZVk6IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4geS5jb3B5KCkuZG9tYWluKHkucmFuZ2UoKS5tYXAodGhpcy5pbnZlcnRZLCB0aGlzKS5tYXAoeS5pbnZlcnQsIHkpKTtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHRoaXMueCArIFwiLFwiICsgdGhpcy55ICsgXCIpIHNjYWxlKFwiICsgdGhpcy5rICsgXCIpXCI7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgaWRlbnRpdHkgPSBuZXcgVHJhbnNmb3JtKDEsIDAsIDApO1xuXG50cmFuc2Zvcm0ucHJvdG90eXBlID0gVHJhbnNmb3JtLnByb3RvdHlwZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNmb3JtKG5vZGUpIHtcbiAgd2hpbGUgKCFub2RlLl9fem9vbSkgaWYgKCEobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpIHJldHVybiBpZGVudGl0eTtcbiAgcmV0dXJuIG5vZGUuX196b29tO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIHRoYXQpIHtcbiAgbGV0IGluZGV4ID0gLTE7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzKSB7XG4gICAgY2FsbGJhY2suY2FsbCh0aGF0LCBub2RlLCArK2luZGV4LCB0aGlzKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGF0KSB7XG4gIHZhciBub2RlID0gdGhpcywgbm9kZXMgPSBbbm9kZV0sIG5leHQgPSBbXSwgY2hpbGRyZW4sIGksIG4sIGluZGV4ID0gLTE7XG4gIHdoaWxlIChub2RlID0gbm9kZXMucG9wKCkpIHtcbiAgICBuZXh0LnB1c2gobm9kZSk7XG4gICAgaWYgKGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbikge1xuICAgICAgZm9yIChpID0gMCwgbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBub2Rlcy5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd2hpbGUgKG5vZGUgPSBuZXh0LnBvcCgpKSB7XG4gICAgY2FsbGJhY2suY2FsbCh0aGF0LCBub2RlLCArK2luZGV4LCB0aGlzKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGF0KSB7XG4gIHZhciBub2RlID0gdGhpcywgbm9kZXMgPSBbbm9kZV0sIGNoaWxkcmVuLCBpLCBpbmRleCA9IC0xO1xuICB3aGlsZSAobm9kZSA9IG5vZGVzLnBvcCgpKSB7XG4gICAgY2FsbGJhY2suY2FsbCh0aGF0LCBub2RlLCArK2luZGV4LCB0aGlzKTtcbiAgICBpZiAoY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuKSB7XG4gICAgICBmb3IgKGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBub2Rlcy5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgdGhhdCkge1xuICBsZXQgaW5kZXggPSAtMTtcbiAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMpIHtcbiAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGF0LCBub2RlLCArK2luZGV4LCB0aGlzKSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5lYWNoQWZ0ZXIoZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciBzdW0gPSArdmFsdWUobm9kZS5kYXRhKSB8fCAwLFxuICAgICAgICBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4sXG4gICAgICAgIGkgPSBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGg7XG4gICAgd2hpbGUgKC0taSA+PSAwKSBzdW0gKz0gY2hpbGRyZW5baV0udmFsdWU7XG4gICAgbm9kZS52YWx1ZSA9IHN1bTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wYXJlKSB7XG4gIHJldHVybiB0aGlzLmVhY2hCZWZvcmUoZnVuY3Rpb24obm9kZSkge1xuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICBub2RlLmNoaWxkcmVuLnNvcnQoY29tcGFyZSk7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVuZCkge1xuICB2YXIgc3RhcnQgPSB0aGlzLFxuICAgICAgYW5jZXN0b3IgPSBsZWFzdENvbW1vbkFuY2VzdG9yKHN0YXJ0LCBlbmQpLFxuICAgICAgbm9kZXMgPSBbc3RhcnRdO1xuICB3aGlsZSAoc3RhcnQgIT09IGFuY2VzdG9yKSB7XG4gICAgc3RhcnQgPSBzdGFydC5wYXJlbnQ7XG4gICAgbm9kZXMucHVzaChzdGFydCk7XG4gIH1cbiAgdmFyIGsgPSBub2Rlcy5sZW5ndGg7XG4gIHdoaWxlIChlbmQgIT09IGFuY2VzdG9yKSB7XG4gICAgbm9kZXMuc3BsaWNlKGssIDAsIGVuZCk7XG4gICAgZW5kID0gZW5kLnBhcmVudDtcbiAgfVxuICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIGxlYXN0Q29tbW9uQW5jZXN0b3IoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIGE7XG4gIHZhciBhTm9kZXMgPSBhLmFuY2VzdG9ycygpLFxuICAgICAgYk5vZGVzID0gYi5hbmNlc3RvcnMoKSxcbiAgICAgIGMgPSBudWxsO1xuICBhID0gYU5vZGVzLnBvcCgpO1xuICBiID0gYk5vZGVzLnBvcCgpO1xuICB3aGlsZSAoYSA9PT0gYikge1xuICAgIGMgPSBhO1xuICAgIGEgPSBhTm9kZXMucG9wKCk7XG4gICAgYiA9IGJOb2Rlcy5wb3AoKTtcbiAgfVxuICByZXR1cm4gYztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZSA9IHRoaXMsIG5vZGVzID0gW25vZGVdO1xuICB3aGlsZSAobm9kZSA9IG5vZGUucGFyZW50KSB7XG4gICAgbm9kZXMucHVzaChub2RlKTtcbiAgfVxuICByZXR1cm4gbm9kZXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGxlYXZlcyA9IFtdO1xuICB0aGlzLmVhY2hCZWZvcmUoZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghbm9kZS5jaGlsZHJlbikge1xuICAgICAgbGVhdmVzLnB1c2gobm9kZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxlYXZlcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgcm9vdCA9IHRoaXMsIGxpbmtzID0gW107XG4gIHJvb3QuZWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IHJvb3QpIHsgLy8gRG9u4oCZdCBpbmNsdWRlIHRoZSByb2904oCZcyBwYXJlbnQsIGlmIGFueS5cbiAgICAgIGxpbmtzLnB1c2goe3NvdXJjZTogbm9kZS5wYXJlbnQsIHRhcmdldDogbm9kZX0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsaW5rcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKigpIHtcbiAgdmFyIG5vZGUgPSB0aGlzLCBjdXJyZW50LCBuZXh0ID0gW25vZGVdLCBjaGlsZHJlbiwgaSwgbjtcbiAgZG8ge1xuICAgIGN1cnJlbnQgPSBuZXh0LnJldmVyc2UoKSwgbmV4dCA9IFtdO1xuICAgIHdoaWxlIChub2RlID0gY3VycmVudC5wb3AoKSkge1xuICAgICAgeWllbGQgbm9kZTtcbiAgICAgIGlmIChjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChpID0gMCwgbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICAgIG5leHQucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gd2hpbGUgKG5leHQubGVuZ3RoKTtcbn1cbiIsIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cbiAgaW50ZXJmYWNlIFRyZWVOb2RlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY2hpbGRyZW4/OiBUcmVlTm9kZVtdO1xuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgbGV0IGRhdGE6IFRyZWVOb2RlID0ge1xuICAgICAgbmFtZTogJ0EnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgeyBuYW1lOiAnQycgfSxcbiAgICAgICAgeyBuYW1lOiAnRCcsIGNoaWxkcmVuOiBbeyBuYW1lOiAnRicgfSwgeyBuYW1lOiAnRScgfV0gfSxcbiAgICAgICAgeyBuYW1lOiAnQicgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGxldCByb290ID0gZDNcbiAgICAgIC5oaWVyYXJjaHkoZGF0YSlcbiAgICAgIC5zb3J0KFxuICAgICAgICAoYTogYW55LCBiOiBhbnkpID0+XG4gICAgICAgICAgYi5oZWlnaHQgLSBhLmhlaWdodCB8fCBhLmRhdGEubmFtZS5sb2NhbGVDb21wYXJlKGIuZGF0YS5uYW1lKVxuICAgICAgKTtcblxuICAgIGxldCB0cmVlTGF5b3V0ID0gZDMudHJlZSgpLnNpemUoWzU4MCwgODAwXSk7XG5cbiAgICAvLyBOZXh0LCB3ZSBjYWxsIHRoZSBsYXlvdXQgZnVuY3Rpb24sIHBhc3NpbmcgaXQgdGhlIHJvb3Qgbm9kZS4gVGhlIGxheW91dCBmdW5jdGlvbiBhZGRzIHggYW5kIHkgcHJvcGVydGllcyB0byBlYWNoIG5vZGUgaW4gdGhlIG1vZGVsLlxuXG4gICAgdHJlZUxheW91dChyb290KTtcbiAgICAvL3JlbmRlciB0aGUgY2lyY2xlc1xuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoJyN0cmVlLWNvbnRhaW5lcicpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSBzdmc6Jywgc3ZnKTtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgcm9vdDonLCByb290KTtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgZGF0YTonLCBkYXRhKTtcblxuICAgIHN2Z1xuICAgICAgLnNlbGVjdCgnZy5saW5rcycpXG4gICAgICAuc2VsZWN0QWxsKCdsaW5lLmxpbmsnKVxuICAgICAgLmRhdGEocm9vdC5saW5rcygpKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ3gxJywgZnVuY3Rpb24gKGQ6IGFueSkge1xuICAgICAgICByZXR1cm4gZC5zb3VyY2UueDtcbiAgICAgIH0pXG4gICAgICAuYXR0cigneTEnLCBmdW5jdGlvbiAoZDogYW55KSB7XG4gICAgICAgIHJldHVybiBkLnNvdXJjZS55O1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCd4MicsIGZ1bmN0aW9uIChkOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIGQudGFyZ2V0Lng7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3kyJywgZnVuY3Rpb24gKGQ6IGFueSkge1xuICAgICAgICByZXR1cm4gZC50YXJnZXQueTtcbiAgICAgIH0pXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ2RhcmtncmF5JylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKTtcblxuICAgIHN2Z1xuICAgICAgLnNlbGVjdCgnZy5ub2RlcycpXG4gICAgICAuc2VsZWN0QWxsKCdjaXJjbGUubm9kZScpXG4gICAgICAuZGF0YShyb290LmRlc2NlbmRhbnRzKCkpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uIChkOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIGQueDtcbiAgICAgIH0pXG4gICAgICAuYXR0cignY3knLCBmdW5jdGlvbiAoZDogYW55KSB7XG4gICAgICAgIHJldHVybiBkLnk7XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3InLCAxMClcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2xpZ2h0Ymx1ZScpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ2RhcmtncmF5JylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKTtcbiAgfSk7XG5cbiAgLy8gZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kRWxlbWVudCgpIHtcbiAgLy8gICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJ1Byb2dyYW1tYXRpY2FsbHkgY3JlYXRlZCBlbGVtZW50JztcbiAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0JykuYXBwZW5kQ2hpbGQoZWxlbWVudCk7IC8vIEFwcGVuZCB0byB0aGUgY29tcG9uZW50J3Mgcm9vdFxuICAvLyAgIH1cbjwvc2NyaXB0PlxuXG48c3ZnIGlkPVwidHJlZS1jb250YWluZXJcIj5cbiAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsMTApXCI+XG4gICAgPGcgY2xhc3M9XCJsaW5rc1wiIC8+XG4gICAgPGcgY2xhc3M9XCJub2Rlc1wiIC8+XG4gIDwvZz5cbjwvc3ZnPlxuXG48IS0tIDxidXR0b24gb246Y2xpY2s9e2NyZWF0ZUFuZEFwcGVuZEVsZW1lbnR9PkNyZWF0ZSBFbGVtZW50PC9idXR0b24+IC0tPlxuXG48c3R5bGU+XG4gIC8qIEFkZCBzdHlsZXMgdG8gdGhlIHByb2dyYW1tYXRpY2FsbHkgY3JlYXRlZCBlbGVtZW50IGlmIG5lZWRlZCAqL1xuICBnIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHllbGxvdztcbiAgfVxuXG4gIC8qIGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfSAqL1xuPC9zdHlsZT5cbiIsIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCBMZWZ0UGFuZWwgZnJvbSAnLi9sZWZ0UGFuZWwvTGVmdFBhbmVsLnN2ZWx0ZSc7XG4gIGltcG9ydCBSaWdodFBhbmVsIGZyb20gJy4vcmlnaHRQYW5lbC9SaWdodFBhbmVsLnN2ZWx0ZSc7XG48L3NjcmlwdD5cblxuPGRpdiBpZD1cIm1haW4tY29udGFpbmVyXCI+XG4gIDxkaXYgaWQ9XCJsZWZ0LXBhbmVsXCI+XG4gICAgPExlZnRQYW5lbCAvPlxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cInJpZ2h0LXBhbmVsXCI+XG4gICAgPFJpZ2h0UGFuZWwgLz5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICAjbWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSk7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDNweCk7XG4gIH1cblxuICAjbGVmdC1wYW5lbCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gICNyaWdodC1wYW5lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBibGFjaztcbiAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQgbGFuZz1cInRzXCIgdHlwZT1cIm1vZHVsZVwiPlxuPC9zY3JpcHQ+XG5cbjxkaXY+XG4gIDxkaXYgaWQ9XCJzdGF0ZS1jb250YWluZXJcIj5cbiAgICA8aDM+U3RhdGU8L2gzPlxuICAgIDxwPmRlbGV0ZUFwcHQ6IDxzcGFuPmZ1bmN0aW9uIGRlbGV0ZUFwcHQoKTwvc3Bhbj48L3A+XG4gICAgPHA+dXBkYXRlQXBwdDogPHNwYW4+ZnVuY3Rpb24gdXBkYXRlQXBwdCgpPC9zcGFuPjwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJwcm9wcy1jb250YWluZXJcIj5cbiAgICA8aDM+UHJvcHM8L2gzPlxuICAgIDxwPmFwcHROYW1lOiA8c3Bhbj5MZWN0dXJlOiBTeXN0ZW0gRGVzaWduPC9zcGFuPjwvcD5cbiAgICA8cD50aW1lOiA8c3Bhbj4yOjMwUE08L3NwYW4+PC9wPlxuICAgIDxwPmNvbXBsZXRlZDo8c3Bhbj5mYWxzZTwvc3Bhbj48L3A+XG4gICAgPHA+YXBwdElEOjxzcGFuPjU0NjQ2NTQ2PC9zcGFuPjwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICBkaXYge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gICNzdGF0ZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gICNwcm9wcy1jb250YWluZXIge1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgLy9pZiBidXR0b24gY2lja2VkIHRoZW4gYWNjZXNzIGZvY3VzIHN0YXRlXG5cbiAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblxuICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gIGxldCBjdXJyZW50UGFnZTogc3RyaW5nID0gJ01hcCc7XG4gIGxldCBzdGF0ZU9yRGlmZjogc3RyaW5nID0gJ1N0YXRlJztcbiAgLy9vbiBjbGljayB0b2dnbGUgdG8gdHJ1ZVxuICAvL2lmIHRydWUsIHRoZW4gY2hhbmdlIG90aGVyIGNvbXBvbmVudHMgdG8gZmFsc2VcblxuICAvLyBvbk1vdW50KCgpID0+IHtcbiAgLy8gICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKFxuICAvLyAgICAgcmVxdWVzdCxcbiAgLy8gICAgIHNlbmRlcixcbiAgLy8gICAgIHNlbmRSZXNwb25zZVxuICAvLyAgICkge1xuICAvLyAgICAgc3dpdGNoIChyZXF1ZXN0Lm1lc3NhZ2UpIHtcbiAgLy8gICAgICAgY2FzZSAndGVzdCB0ZXN0JzpcbiAgLy8gICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgcmVxdWVzdC5tZXNzYWdlJyk7XG4gIC8vICAgICAgICAgYnJlYWs7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH0pO1xuPC9zY3JpcHQ+XG5cbjxuYXY+XG4gIDxkaXYgY2xhc3M9XCJwYWdlc1wiPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzOnNlbGVjdGVkPXtjdXJyZW50UGFnZSA9PT0gJ01hcCd9XG4gICAgICBvbjpjbGljaz17KCkgPT4gKGN1cnJlbnRQYWdlID0gJ01hcCcpfT5NYXA8L2J1dHRvblxuICAgID5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzczpzZWxlY3RlZD17Y3VycmVudFBhZ2UgPT09ICdNZXRyaWNzJ31cbiAgICAgIG9uOmNsaWNrPXsoKSA9PiAoY3VycmVudFBhZ2UgPSAnTWV0cmljcycpfT5NZXRyaWNzPC9idXR0b25cbiAgICA+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M6c2VsZWN0ZWQ9e2N1cnJlbnRQYWdlID09PSAnUGVyZm9ybWFuY2UnfVxuICAgICAgb246Y2xpY2s9eygpID0+IChjdXJyZW50UGFnZSA9ICdQZXJmb3JtYW5jZScpfT5QZXJmb3JtYW5jZTwvYnV0dG9uXG4gICAgPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInN0YXRlLWRpZmZcIj5cbiAgICA8YnV0dG9uXG4gICAgICBpZD1cInN0YXRlXCJcbiAgICAgIGNsYXNzOnNlbGVjdGVkPXtzdGF0ZU9yRGlmZiA9PT0gJ1N0YXRlJ31cbiAgICAgIG9uOmNsaWNrPXsoKSA9PiAoc3RhdGVPckRpZmYgPSAnU3RhdGUnKX0+U3RhdGU8L2J1dHRvblxuICAgID5cbiAgICA8YnV0dG9uXG4gICAgICBpZD1cImRpZmZcIlxuICAgICAgY2xhc3M6c2VsZWN0ZWQ9e3N0YXRlT3JEaWZmID09PSAnRGlmZid9XG4gICAgICBvbjpjbGljaz17KCkgPT4gKHN0YXRlT3JEaWZmID0gJ0RpZmYnKX0+RGlmZjwvYnV0dG9uXG4gICAgPlxuICA8L2Rpdj5cbjwvbmF2PlxuXG48c3R5bGU+XG4gIG5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICB9XG5cbiAgLnBhZ2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAucGFnZXMgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICBuYXYgYnV0dG9uIHtcbiAgICBtYXJnaW46IDNweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAjZGlmZiB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE4cHggMThweCAwcHg7XG4gICAgcGFkZGluZzogNXB4IDIxcHg7XG4gIH1cblxuICAjc3RhdGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHggMHB4IDBweCAxOHB4O1xuICAgIHBhZGRpbmc6IDVweCAyMXB4O1xuICB9XG5cbiAgLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuc3RhdGUtZGlmZiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG48L3N0eWxlPlxuIiwiPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdXRlcy1jb250YWluZXInKTtcbiAgICB3aGlsZSAocm91dGVzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHJvdXRlc0NvbnRhaW5lci5yZW1vdmVDaGlsZChyb3V0ZXNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cbjxkaXYgaWQ9XCJjbGVhci1idXR0b24tY29udGFpbmVyXCI+XG4gIDxidXR0b24gaWQ9XCJjbGVhci1idXR0b25cIiBvbjpjbGljaz17Y2xlYXJBbGx9PkNsZWFyPC9idXR0b24+XG48L2Rpdj5cblxuPHN0eWxlPlxuICBidXR0b24ge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIH1cblxuICAjY2xlYXItYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xuICB9XG5cbiAgI2NsZWFyLWJ1dHRvbiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGV4cG9ydCBsZXQgcm91dGU7XG4gIGV4cG9ydCBsZXQgc25hcHNob3ROdW1iZXI7XG4gIGV4cG9ydCBsZXQgdGltZTtcbjwvc2NyaXB0PlxuXG48IS0tIGZpcnN0IG1ha2Ugcm91dGVzIGxvb2sgbGlrZSB0aGUgb25lIGluIHRoZSBmaWdtYSBwYWdlIC0tPlxuPCEtLSB0aGVuIGV4cG9ydCByb3V0ZXMgY29tcG9uZW50IHRvIGEgc2VwYXJhdGUgcGFnZS0tPlxuPCEtLSB0aGVuIGdlbmVyYXRlIHJvdXRlcyBjb21wb25lbnRzIHdoZW4gZmVkIGRhdGEgLS0+XG48IS0tIG5lZWQgdG8gY3JlYXRlIHNlcGFyYXRlIFJvdXRlcyBjb21wb25lbnQgd2hpY2ggYXBwZW5kcyBhIG5ldyByb3V0ZXMgY29tcG9uZW50IG9uIGVhY2ggZG9tIHJlLXJlbmRlciAtLT5cbjxkaXYgaWQ9XCJyb3V0ZS1jb250YWluZXJcIj5cbiAgPGRpdiBpZD1cInJvdXRlXCI+Um91dGVzOiB7cm91dGV9PC9kaXY+XG4gIDxkaXYgaWQ9XCJzbmFwc2hvdFwiPlxuICAgIFNuYXBzaG90OiB7c25hcHNob3ROdW1iZXJ9IDxzcGFuIGlkPVwidGltZVwiPit7dGltZX08L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgI3JvdXRlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG4gICNzbmFwc2hvdCB7XG4gICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgI3RpbWUge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1mYW1pbHk6IElzdG9rIFdlYjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxuICBpbXBvcnQgUm91dGUgZnJvbSAnLi9yb3V0ZS5zdmVsdGUnO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJzaWRlYmFyXCI+XG4gIDxkaXYgY2xhc3M9XCJyb3V0ZXMtY29udGFpbmVyXCI+XG4gICAgPCEtLSBmaXJzdCBtYWtlIHJvdXRlcyBsb29rIGxpa2UgdGhlIG9uZSBpbiB0aGUgZmlnbWEgcGFnZSAtLT5cbiAgICA8IS0tIHRoZW4gZXhwb3J0IHJvdXRlcyBjb21wb25lbnQgdG8gYSBzZXBhcmF0ZSBwYWdlLS0+XG4gICAgPCEtLSB0aGVuIGdlbmVyYXRlIHJvdXRlcyBjb21wb25lbnRzIHdoZW4gZmVkIGRhdGEgLS0+XG4gICAgPCEtLSBuZWVkIHRvIGNyZWF0ZSBzZXBhcmF0ZSBSb3V0ZXMgY29tcG9uZW50IHdoaWNoIGFwcGVuZHMgYSBuZXcgcm91dGVzIGNvbXBvbmVudCBvbiBlYWNoIGRvbSByZS1yZW5kZXIgLS0+XG4gICAgPFJvdXRlIHJvdXRlPXsnLyd9IHNuYXBzaG90TnVtYmVyPXsxfSB0aW1lPXsnMDA6MTYuNTAnfSAvPlxuICAgIDxSb3V0ZSByb3V0ZT17Jy9yb3V0ZXMnfSBzbmFwc2hvdE51bWJlcj17NX0gdGltZT17JzE1OjAwJ30gLz5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIH1cblxuICAucm91dGVzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICB9XG48L3N0eWxlPlxuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG4vKipcbiAqIFRoZSBITVIgcHJveHkgaXMgYSBjb21wb25lbnQtbGlrZSBvYmplY3Qgd2hvc2UgdGFzayBpcyB0byBzaXQgaW4gdGhlXG4gKiBjb21wb25lbnQgdHJlZSBpbiBwbGFjZSBvZiB0aGUgcHJveGllZCBjb21wb25lbnQsIGFuZCByZXJlbmRlciBlYWNoXG4gKiBzdWNjZXNzaXZlIHZlcnNpb25zIG9mIHNhaWQgY29tcG9uZW50LlxuICovXG5cbmltcG9ydCB7IGNyZWF0ZVByb3hpZWRDb21wb25lbnQgfSBmcm9tICcuL3N2ZWx0ZS1ob29rcy5qcydcblxuY29uc3QgaGFuZGxlZE1ldGhvZHMgPSBbJ2NvbnN0cnVjdG9yJywgJyRkZXN0cm95J11cbmNvbnN0IGZvcndhcmRlZE1ldGhvZHMgPSBbJyRzZXQnLCAnJG9uJ11cblxuY29uc3QgbG9nRXJyb3IgPSAobXNnLCBlcnIpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZS5lcnJvcignW0hNUl1bU3ZlbHRlXScsIG1zZylcbiAgaWYgKGVycikge1xuICAgIC8vIE5PVEUgYXZvaWQgdG9vIG11Y2ggd3JhcHBpbmcgYXJvdW5kIHVzZXIgZXJyb3JzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgfVxufVxuXG5jb25zdCBwb3NpeGlmeSA9IGZpbGUgPT4gZmlsZS5yZXBsYWNlKC9bL1xcXFxdL2csICcvJylcblxuY29uc3QgZ2V0QmFzZU5hbWUgPSBpZCA9PlxuICBpZFxuICAgIC5zcGxpdCgnLycpXG4gICAgLnBvcCgpXG4gICAgLnNwbGl0KCcuJylcbiAgICAuc2xpY2UoMCwgLTEpXG4gICAgLmpvaW4oJy4nKVxuXG5jb25zdCBjYXBpdGFsaXplID0gc3RyID0+IHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG5cbmNvbnN0IGdldEZyaWVuZGx5TmFtZSA9IGlkID0+IGNhcGl0YWxpemUoZ2V0QmFzZU5hbWUocG9zaXhpZnkoaWQpKSlcblxuY29uc3QgZ2V0RGVidWdOYW1lID0gaWQgPT4gYDwke2dldEZyaWVuZGx5TmFtZShpZCl9PmBcblxuY29uc3QgcmVsYXlDYWxscyA9IChnZXRUYXJnZXQsIG5hbWVzLCBkZXN0ID0ge30pID0+IHtcbiAgZm9yIChjb25zdCBrZXkgb2YgbmFtZXMpIHtcbiAgICBkZXN0W2tleV0gPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQoKVxuICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W2tleV0gJiYgdGFyZ2V0W2tleV0uY2FsbCh0aGlzLCAuLi5hcmdzKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVzdFxufVxuXG5jb25zdCBpc0ludGVybmFsID0ga2V5ID0+IGtleSAhPT0gJyQkJyAmJiBrZXkuc2xpY2UoMCwgMikgPT09ICckJCdcblxuLy8gVGhpcyBpcyBpbnRlbnRlZCBhcyBhIHNvbWV3aGF0IGdlbmVyaWMgLyBwcm9zcGVjdGl2ZSBmaXggdG8gdGhlIHNpdHVhdGlvblxuLy8gdGhhdCBhcmlzZWQgd2l0aCB0aGUgaW50cm9kdWN0aW9uIG9mICQkc2V0IGluIFN2ZWx0ZSAzLjI0LjEgLS0gdHJ5aW5nIHRvXG4vLyBhdm9pZCBnaXZpbmcgZnVsbCBrbm93bGVkZ2UgKGxpa2UgaXRzIG5hbWUpIG9mIHRoaXMgaW1wbGVtZW50YXRpb24gZGV0YWlsXG4vLyB0byB0aGUgcHJveHkuIFRoZSAkJHNldCBtZXRob2QgY2FuIGJlIHByZXNlbnQgb3Igbm90IG9uIHRoZSBjb21wb25lbnQsIGFuZFxuLy8gaXRzIHByZXNlbmNlIGltcGFjdHMgdGhlIGJlaGF2aW91ciAoYnV0IHdpdGggSE1SIGl0IHdpbGwgYmUgdGVzdGVkIGlmIGl0IGlzXG4vLyBwcmVzZW50IF9vbiB0aGUgcHJveHlfKS4gU28gdGhlIGlkZWEgaGVyZSBpcyB0byBleHBvc2UgZXhhY3RseSB0aGUgc2FtZSAkJFxuLy8gcHJvcHMgYXMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgY29tcG9uZW50IGFuZCwgZm9yIHRob3NlIHRoYXQgYXJlXG4vLyBmdW5jdGlvbnMsIHByb3h5IHRoZSBjYWxscyB0byB0aGUgY3VycmVudCBjb21wb25lbnQuXG5jb25zdCByZWxheUludGVybmFsTWV0aG9kcyA9IChwcm94eSwgY21wKSA9PiB7XG4gIC8vIGRlbGV0ZSBhbnkgcHJldmlvdXNseSBhZGRlZCAkJCBwcm9wXG4gIE9iamVjdC5rZXlzKHByb3h5KVxuICAgIC5maWx0ZXIoaXNJbnRlcm5hbClcbiAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgZGVsZXRlIHByb3h5W2tleV1cbiAgICB9KVxuICAvLyBndWFyZDogbm8gY29tcG9uZW50XG4gIGlmICghY21wKSByZXR1cm5cbiAgLy8gcHJveHkgY3VycmVudCAkJCBwcm9wcyB0byB0aGUgYWN0dWFsIGNvbXBvbmVudFxuICBPYmplY3Qua2V5cyhjbXApXG4gICAgLmZpbHRlcihpc0ludGVybmFsKVxuICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJveHksIGtleSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNtcFtrZXldXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHZhbHVlICYmXG4gICAgICAgICAgICBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSlcbn1cblxuLy8gcHJveHkgY3VzdG9tIG1ldGhvZHNcbmNvbnN0IGNvcHlDb21wb25lbnRQcm9wZXJ0aWVzID0gKHByb3h5LCBjbXAsIHByZXZpb3VzKSA9PiB7XG4gIGlmIChwcmV2aW91cykge1xuICAgIHByZXZpb3VzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBkZWxldGUgcHJveHlbcHJvcF1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoY21wKSlcbiAgY29uc3Qgd3JhcHBlZFByb3BzID0gcHJvcHMuZmlsdGVyKHByb3AgPT4ge1xuICAgIGlmICghaGFuZGxlZE1ldGhvZHMuaW5jbHVkZXMocHJvcCkgJiYgIWZvcndhcmRlZE1ldGhvZHMuaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm94eSwgcHJvcCwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gY21wW3Byb3BdXG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgIC8vIHdlJ3JlIGNoYW5naW5nIGl0IG9uIHRoZSByZWFsIGNvbXBvbmVudCBmaXJzdCB0byBzZWUgd2hhdCBpdFxuICAgICAgICAgIC8vIGdpdmVzLi4uIGlmIGl0IHRocm93cyBhbiBlcnJvciwgd2Ugd2FudCB0byB0aHJvdyB0aGUgc2FtZSBlcnJvciBpblxuICAgICAgICAgIC8vIG9yZGVyIHRvIG1vc3QgY2xvc2VseSBmb2xsb3cgbm9uLWhtciBiZWhhdmlvdXIuXG4gICAgICAgICAgY21wW3Byb3BdID0gdmFsdWVcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gd3JhcHBlZFByb3BzXG59XG5cbi8vIGV2ZXJ5dGhpbmcgaW4gdGhlIGNvbnN0cnVjdG9yIVxuLy9cbi8vIHNvIHdlIGRvbid0IHBvbHV0ZSB0aGUgY29tcG9uZW50IGNsYXNzIHdpdGggbmV3IG1lbWJlcnNcbi8vXG5jbGFzcyBQcm94eUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHtcbiAgICAgIEFkYXB0ZXIsXG4gICAgICBpZCxcbiAgICAgIGRlYnVnTmFtZSxcbiAgICAgIGN1cnJlbnQsIC8vIHsgQ29tcG9uZW50LCBob3RPcHRpb25zOiB7IHByZXNlcnZlTG9jYWxTdGF0ZSwgLi4uIH0gfVxuICAgICAgcmVnaXN0ZXIsXG4gICAgfSxcbiAgICBvcHRpb25zIC8vIHsgdGFyZ2V0LCBhbmNob3IsIC4uLiB9XG4gICkge1xuICAgIGxldCBjbXBcbiAgICBsZXQgZGlzcG9zZWQgPSBmYWxzZVxuICAgIGxldCBsYXN0RXJyb3IgPSBudWxsXG5cbiAgICBjb25zdCBzZXRDb21wb25lbnQgPSBfY21wID0+IHtcbiAgICAgIGNtcCA9IF9jbXBcbiAgICAgIHJlbGF5SW50ZXJuYWxNZXRob2RzKHRoaXMsIGNtcClcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wb25lbnQgPSAoKSA9PiBjbXBcblxuICAgIGNvbnN0IGRlc3Ryb3lDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAvLyBkZXN0cm95Q29tcG9uZW50IGlzIHRvbGVyYW50IChkb24ndCBjcmFzaCBvbiBubyBjbXApIGJlY2F1c2UgaXRcbiAgICAgIC8vIGlzIHBvc3NpYmxlIHRoYXQgcmVsb2FkL3JlcmVuZGVyIGlzIGNhbGxlZCBhZnRlciBhIHByZXZpb3VzXG4gICAgICAvLyBjcmVhdGVDb21wb25lbnQgaGFzIGZhaWxlZCAoaGVuY2Ugd2UgaGF2ZSBhIHByb3h5LCBidXQgbm8gY21wKVxuICAgICAgaWYgKGNtcCkge1xuICAgICAgICBjbXAuJGRlc3Ryb3koKVxuICAgICAgICBzZXRDb21wb25lbnQobnVsbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZWZyZXNoQ29tcG9uZW50ID0gKHRhcmdldCwgYW5jaG9yLCBjb25zZXJ2YXRpdmVEZXN0cm95KSA9PiB7XG4gICAgICBpZiAobGFzdEVycm9yKSB7XG4gICAgICAgIGxhc3RFcnJvciA9IG51bGxcbiAgICAgICAgYWRhcHRlci5yZXJlbmRlcigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcGxhY2VPcHRpb25zID0ge1xuICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgICAgcHJlc2VydmVMb2NhbFN0YXRlOiBjdXJyZW50LnByZXNlcnZlTG9jYWxTdGF0ZSxcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbnNlcnZhdGl2ZURlc3Ryb3kpIHtcbiAgICAgICAgICAgIHJlcGxhY2VPcHRpb25zLmNvbnNlcnZhdGl2ZURlc3Ryb3kgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGNtcC4kcmVwbGFjZShjdXJyZW50LkNvbXBvbmVudCwgcmVwbGFjZU9wdGlvbnMpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHNldEVycm9yKGVyciwgdGFyZ2V0LCBhbmNob3IpXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWN1cnJlbnQuaG90T3B0aW9ucy5vcHRpbWlzdGljIHx8XG4gICAgICAgICAgICAvLyBub24gYWNjZXB0YWJsZSBjb21wb25lbnRzICh0aGF0IGlzIGNvbXBvbmVudHMgdGhhdCBoYXZlIHRvIGRlZmVyXG4gICAgICAgICAgICAvLyB0byB0aGVpciBwYXJlbnQgZm9yIHJlcmVuZGVyIC0tIGUuZy4gYWNjZXNzb3JzLCBuYW1lZCBleHBvcnRzKVxuICAgICAgICAgICAgLy8gYXJlIG1vc3QgdHJpY2t5LCBhbmQgdGhleSBoYXZlbnQgYmVlbiBjb25zaWRlcmVkIHdoZW4gbW9zdCBvZiB0aGVcbiAgICAgICAgICAgIC8vIGNvZGUgaGFzIGJlZW4gd3JpdHRlbi4uLiBhcyBhIHJlc3VsdCwgdGhleSBhcmUgZXNwZWNpYWxseSB0cmlja3lcbiAgICAgICAgICAgIC8vIHRvIGRlYWwgd2l0aCwgaXQncyBiZXR0ZXIgdG8gY29uc2lkZXIgYW55IGVycm9yIHdpdGggdGhlbSB0byBiZVxuICAgICAgICAgICAgLy8gZmF0YWwgdG8gYXZvaWQgb2RpdGllc1xuICAgICAgICAgICAgIWN1cnJlbnQuY2FuQWNjZXB0IHx8XG4gICAgICAgICAgICAoZXJyICYmIGVyci5obXJGYXRhbClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zdCBlcnJTdHJpbmcgPSBTdHJpbmcoKGVyciAmJiBlcnIuc3RhY2spIHx8IGVycilcbiAgICAgICAgICAgIGxvZ0Vycm9yKGBFcnJvciBkdXJpbmcgY29tcG9uZW50IGluaXQ6ICR7ZGVidWdOYW1lfWAsIGVycilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRFcnJvciA9IGVyciA9PiB7XG4gICAgICBsYXN0RXJyb3IgPSBlcnJcbiAgICAgIGFkYXB0ZXIucmVuZGVyRXJyb3IoZXJyKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgaG90T3B0aW9uczogY3VycmVudC5ob3RPcHRpb25zLFxuICAgICAgcHJveHk6IHRoaXMsXG4gICAgICBpZCxcbiAgICAgIGRlYnVnTmFtZSxcbiAgICAgIHJlZnJlc2hDb21wb25lbnQsXG4gICAgfVxuXG4gICAgY29uc3QgYWRhcHRlciA9IG5ldyBBZGFwdGVyKGluc3RhbmNlKVxuXG4gICAgY29uc3QgeyBhZnRlck1vdW50LCByZXJlbmRlciB9ID0gYWRhcHRlclxuXG4gICAgLy8gJGRlc3Ryb3kgaXMgbm90IGNhbGxlZCB3aGVuIGEgY2hpbGQgY29tcG9uZW50IGlzIGRpc3Bvc2VkLCBzbyB3ZVxuICAgIC8vIG5lZWQgdG8gaG9vayBmcm9tIGZyYWdtZW50LlxuICAgIGNvbnN0IG9uRGVzdHJveSA9ICgpID0+IHtcbiAgICAgIC8vIE5PVEUgZG8gTk9UIGNhbGwgJGRlc3Ryb3kgb24gdGhlIGNtcCBmcm9tIGhlcmU7IHRoZSBjbXAgaXMgYWxyZWFkeVxuICAgICAgLy8gICBkZWFkLCB0aGlzIHdvdWxkIG5vdCB3b3JrXG4gICAgICBpZiAoIWRpc3Bvc2VkKSB7XG4gICAgICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICAgICAgICBhZGFwdGVyLmRpc3Bvc2UoKVxuICAgICAgICB1bnJlZ2lzdGVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tIHJlZ2lzdGVyIHByb3h5IGluc3RhbmNlIC0tLS1cblxuICAgIGNvbnN0IHVucmVnaXN0ZXIgPSByZWdpc3RlcihyZXJlbmRlcilcblxuICAgIC8vIC0tLS0gYXVnbWVudGVkIG1ldGhvZHMgLS0tLVxuXG4gICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgIGRlc3Ryb3lDb21wb25lbnQoKVxuICAgICAgb25EZXN0cm95KClcbiAgICB9XG5cbiAgICAvLyAtLS0tIGZvcndhcmRlZCBtZXRob2RzIC0tLS1cblxuICAgIHJlbGF5Q2FsbHMoZ2V0Q29tcG9uZW50LCBmb3J3YXJkZWRNZXRob2RzLCB0aGlzKVxuXG4gICAgLy8gLS0tLSBjcmVhdGUgJiBtb3VudCB0YXJnZXQgY29tcG9uZW50IGluc3RhbmNlIC0tLVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBsYXN0UHJvcGVydGllc1xuICAgICAgY3JlYXRlUHJveGllZENvbXBvbmVudChjdXJyZW50LkNvbXBvbmVudCwgb3B0aW9ucywge1xuICAgICAgICBhbGxvd0xpdmVCaW5kaW5nOiBjdXJyZW50LmhvdE9wdGlvbnMuYWxsb3dMaXZlQmluZGluZyxcbiAgICAgICAgb25EZXN0cm95LFxuICAgICAgICBvbk1vdW50OiBhZnRlck1vdW50LFxuICAgICAgICBvbkluc3RhbmNlOiBjb21wID0+IHtcbiAgICAgICAgICBzZXRDb21wb25lbnQoY29tcClcbiAgICAgICAgICAvLyBXQVJOSU5HIHRoZSBwcm94eSBNVVNUIHVzZSB0aGUgc2FtZSAkJCBvYmplY3QgYXMgaXRzIGNvbXBvbmVudFxuICAgICAgICAgIC8vIGluc3RhbmNlLCBiZWNhdXNlIGEgbG90IG9mIHdpcmluZyBoYXBwZW5zIGR1cmluZyBjb21wb25lbnRcbiAgICAgICAgICAvLyBpbml0aWFsaXNhdGlvbi4uLiBsb3RzIG9mIHJlZmVyZW5jZXMgdG8gJCQgYW5kICQkLmZyYWdtZW50IGhhdmVcbiAgICAgICAgICAvLyBhbHJlYWR5IGJlZW4gZGlzdHJpYnV0ZWQgYXJvdW5kIHdoZW4gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvclxuICAgICAgICAgIC8vIHJldHVybnMsIGJlZm9yZSB3ZSBoYXZlIGEgY2hhbmNlIHRvIHdyYXAgdGhlbSAoYW5kIHNvIHdlIGNhbid0XG4gICAgICAgICAgLy8gd3JhcCB0aGVtIG5vIG1vcmUsIGJlY2F1c2UgZXhpc3RpbmcgcmVmZXJlbmNlcyB3b3VsZCBiZWNvbWVcbiAgICAgICAgICAvLyBpbnZhbGlkKVxuICAgICAgICAgIHRoaXMuJCQgPSBjb21wLiQkXG4gICAgICAgICAgbGFzdFByb3BlcnRpZXMgPSBjb3B5Q29tcG9uZW50UHJvcGVydGllcyh0aGlzLCBjb21wLCBsYXN0UHJvcGVydGllcylcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCB7IHRhcmdldCwgYW5jaG9yIH0gPSBvcHRpb25zXG4gICAgICBzZXRFcnJvcihlcnIsIHRhcmdldCwgYW5jaG9yKVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHN5bmNTdGF0aWNzID0gKGNvbXBvbmVudCwgcHJveHksIHByZXZpb3VzS2V5cykgPT4ge1xuICAvLyByZW1vdmUgcHJldmlvdXNseSBjb3BpZWQga2V5c1xuICBpZiAocHJldmlvdXNLZXlzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcHJldmlvdXNLZXlzKSB7XG4gICAgICBkZWxldGUgcHJveHlba2V5XVxuICAgIH1cbiAgfVxuXG4gIC8vIGZvcndhcmQgc3RhdGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcbiAgY29uc3Qga2V5cyA9IFtdXG4gIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudCkge1xuICAgIGtleXMucHVzaChrZXkpXG4gICAgcHJveHlba2V5XSA9IGNvbXBvbmVudFtrZXldXG4gIH1cblxuICByZXR1cm4ga2V5c1xufVxuXG5jb25zdCBnbG9iYWxMaXN0ZW5lcnMgPSB7fVxuXG5jb25zdCBvbkdsb2JhbCA9IChldmVudCwgZm4pID0+IHtcbiAgZXZlbnQgPSBldmVudC50b0xvd2VyQ2FzZSgpXG4gIGlmICghZ2xvYmFsTGlzdGVuZXJzW2V2ZW50XSkgZ2xvYmFsTGlzdGVuZXJzW2V2ZW50XSA9IFtdXG4gIGdsb2JhbExpc3RlbmVyc1tldmVudF0ucHVzaChmbilcbn1cblxuY29uc3QgZmlyZUdsb2JhbCA9IChldmVudCwgLi4uYXJncykgPT4ge1xuICBjb25zdCBsaXN0ZW5lcnMgPSBnbG9iYWxMaXN0ZW5lcnNbZXZlbnRdXG4gIGlmICghbGlzdGVuZXJzKSByZXR1cm5cbiAgZm9yIChjb25zdCBmbiBvZiBsaXN0ZW5lcnMpIHtcbiAgICBmbiguLi5hcmdzKVxuICB9XG59XG5cbmNvbnN0IGZpcmVCZWZvcmVVcGRhdGUgPSAoKSA9PiBmaXJlR2xvYmFsKCdiZWZvcmV1cGRhdGUnKVxuXG5jb25zdCBmaXJlQWZ0ZXJVcGRhdGUgPSAoKSA9PiBmaXJlR2xvYmFsKCdhZnRlcnVwZGF0ZScpXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuX19TVkVMVEVfSE1SID0ge1xuICAgIG9uOiBvbkdsb2JhbCxcbiAgfVxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N2ZWx0ZS1obXI6cmVhZHknKSlcbn1cblxubGV0IGZhdGFsRXJyb3IgPSBmYWxzZVxuXG5leHBvcnQgY29uc3QgaGFzRmF0YWxFcnJvciA9ICgpID0+IGZhdGFsRXJyb3JcblxuLyoqXG4gKiBDcmVhdGVzIGEgSE1SIHByb3h5IGFuZCBpdHMgYXNzb2NpYXRlZCBgcmVsb2FkYCBmdW5jdGlvbiB0aGF0IHB1c2hlcyBhIG5ld1xuICogdmVyc2lvbiB0byBhbGwgZXhpc3RpbmcgaW5zdGFuY2VzIG9mIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm94eSh7XG4gIEFkYXB0ZXIsXG4gIGlkLFxuICBDb21wb25lbnQsXG4gIGhvdE9wdGlvbnMsXG4gIGNhbkFjY2VwdCxcbiAgcHJlc2VydmVMb2NhbFN0YXRlLFxufSkge1xuICBjb25zdCBkZWJ1Z05hbWUgPSBnZXREZWJ1Z05hbWUoaWQpXG4gIGNvbnN0IGluc3RhbmNlcyA9IFtdXG5cbiAgLy8gY3VycmVudCBvYmplY3Qgd2lsbCBiZSB1cGRhdGVkLCBwcm94eSBpbnN0YW5jZXMgd2lsbCBrZWVwIGEgcmVmXG4gIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgQ29tcG9uZW50LFxuICAgIGhvdE9wdGlvbnMsXG4gICAgY2FuQWNjZXB0LFxuICAgIHByZXNlcnZlTG9jYWxTdGF0ZSxcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBgUHJveHkke2RlYnVnTmFtZX1gXG5cbiAgLy8gdGhpcyB0cmljayBnaXZlcyB0aGUgZHluYW1pYyBuYW1lIFByb3h5PE15Q29tcG9uZW50PiB0byB0aGUgY29uY3JldGVcbiAgLy8gcHJveHkgY2xhc3MuLi4gdW5mb3J0dW5hdGVseSwgdGhpcyBkb2Vzbid0IHNob3dzIGluIGRldiB0b29scywgYnV0XG4gIC8vIGl0IHN0aWxscyBhbGxvdyB0byBpbnNwZWN0IGNtcC5jb25zdHJ1Y3Rvci5uYW1lIHRvIGNvbmZpcm0gYW4gaW5zdGFuY2VcbiAgLy8gaXMgYSBwcm94eVxuICBjb25zdCBwcm94eSA9IHtcbiAgICBbbmFtZV06IGNsYXNzIGV4dGVuZHMgUHJveHlDb21wb25lbnQge1xuICAgICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHN1cGVyKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBBZGFwdGVyLFxuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgZGVidWdOYW1lLFxuICAgICAgICAgICAgICBjdXJyZW50LFxuICAgICAgICAgICAgICByZWdpc3RlcjogcmVyZW5kZXIgPT4ge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKHJlcmVuZGVyKVxuICAgICAgICAgICAgICAgIGNvbnN0IHVucmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpID0gaW5zdGFuY2VzLmluZGV4T2YocmVyZW5kZXIpXG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZXMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB1bnJlZ2lzdGVyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byBjcmVhdGUgYSBwcm94eSBpbnN0YW5jZSwgYW55IGluc3RhbmNlLCB0aGF0IG1lYW5zXG4gICAgICAgICAgLy8gdGhhdCB3ZSB3b24ndCBiZSBhYmxlIHRvIGZpeCB0aGlzIGluc3RhbmNlIHdoZW4gaXQgaXMgdXBkYXRlZC5cbiAgICAgICAgICAvLyBSZWNvdmVyaW5nIHRvIG5vcm1hbCBzdGF0ZSB3aWxsIGJlIGltcG9zc2libGUuIEhNUidzIGRlYWQuXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBGYXRhbCBlcnJvciB3aWxsIHRyaWdnZXIgYSBmdWxsIHJlbG9hZCBvbiBuZXh0IHVwZGF0ZSAocmVsb2FkaW5nXG4gICAgICAgICAgLy8gcmlnaHQgbm93IGlzIGtpbmRhIHBvaW50bGVzcyBzaW5jZSBidWdneSBjb2RlIHN0aWxsIGV4aXN0cykuXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBOT1RFIE9ubHkgcmVwb3J0IGZpcnN0IGVycm9yIHRvIGF2b2lkIHRvbyBtdWNoIHBvbHV0aW9uIC0tIGZvbGxvd2luZ1xuICAgICAgICAgIC8vIGVycm9ycyBhcmUgcHJvYmFibHkgY2F1c2VkIGJ5IHRoZSBmaXJzdCBvbmUsIG9yIHRoZXkgd2lsbCBzaG93IHVwXG4gICAgICAgICAgLy8gaW4gdHVybiB3aGVuIHRoZSBmaXJzdCBvbmUgaXMgZml4ZWQgwq9cXF8o44OEKV8vwq9cbiAgICAgICAgICAvL1xuICAgICAgICAgIGlmICghZmF0YWxFcnJvcikge1xuICAgICAgICAgICAgZmF0YWxFcnJvciA9IHRydWVcbiAgICAgICAgICAgIGxvZ0Vycm9yKFxuICAgICAgICAgICAgICBgVW5yZWNvdmVyYWJsZSBITVIgZXJyb3IgaW4gJHtkZWJ1Z05hbWV9OiBgICtcbiAgICAgICAgICAgICAgICBgbmV4dCB1cGRhdGUgd2lsbCB0cmlnZ2VyIGEgZnVsbCByZWxvYWRgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfVtuYW1lXVxuXG4gIC8vIGluaXRpYWxpemUgc3RhdGljIG1lbWJlcnNcbiAgbGV0IHByZXZpb3VzU3RhdGljcyA9IHN5bmNTdGF0aWNzKGN1cnJlbnQuQ29tcG9uZW50LCBwcm94eSlcblxuICBjb25zdCB1cGRhdGUgPSBuZXdTdGF0ZSA9PiBPYmplY3QuYXNzaWduKGN1cnJlbnQsIG5ld1N0YXRlKVxuXG4gIC8vIHJlbG9hZCBhbGwgZXhpc3RpbmcgaW5zdGFuY2VzIG9mIHRoaXMgY29tcG9uZW50XG4gIGNvbnN0IHJlbG9hZCA9ICgpID0+IHtcbiAgICBmaXJlQmVmb3JlVXBkYXRlKClcblxuICAgIC8vIGNvcHkgc3RhdGljcyBiZWZvcmUgZG9pbmcgYW55dGhpbmcgYmVjYXVzZSBhIHN0YXRpYyBwcm9wL21ldGhvZFxuICAgIC8vIGNvdWxkIGJlIHVzZWQgc29tZXdoZXJlIGluIHRoZSBjcmVhdGUvcmVuZGVyIGNhbGxcbiAgICBwcmV2aW91c1N0YXRpY3MgPSBzeW5jU3RhdGljcyhjdXJyZW50LkNvbXBvbmVudCwgcHJveHksIHByZXZpb3VzU3RhdGljcylcblxuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBpbnN0YW5jZXMuZm9yRWFjaChyZXJlbmRlciA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXJlbmRlcigpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgbG9nRXJyb3IoYEZhaWxlZCB0byByZXJlbmRlciAke2RlYnVnTmFtZX1gLCBlcnIpXG4gICAgICAgIGVycm9ycy5wdXNoKGVycilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBmaXJlQWZ0ZXJVcGRhdGUoKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IGhhc0ZhdGFsRXJyb3IgPSAoKSA9PiBmYXRhbEVycm9yXG5cbiAgcmV0dXJuIHsgaWQsIHByb3h5LCB1cGRhdGUsIHJlbG9hZCwgaGFzRmF0YWxFcnJvciwgY3VycmVudCB9XG59XG4iLCJpbXBvcnQgeyBtYWtlQXBwbHlIbXIgfSBmcm9tICdzdmVsdGUtaG1yL3J1bnRpbWUnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbmNvbnN0IGcgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcclxuXHJcbmNvbnN0IGdsb2JhbEtleSA9XHJcblx0dHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCdcclxuXHRcdD8gU3ltYm9sKCdTVkVMVEVfTE9BREVSX0hPVCcpXHJcblx0XHQ6ICdfX1NWRUxURV9MT0FERVJfSE9UJztcclxuXHJcbmlmICghZ1tnbG9iYWxLZXldKSB7XHJcblx0Ly8gZG8gdXBkYXRpbmcgcmVmcyBjb3VudGluZyB0byBrbm93IHdoZW4gYSBmdWxsIHVwZGF0ZSBoYXMgYmVlbiBhcHBsaWVkXHJcblx0bGV0IHVwZGF0aW5nQ291bnQgPSAwO1xyXG5cclxuXHRjb25zdCBub3RpZnlTdGFydCA9ICgpID0+IHtcclxuXHRcdHVwZGF0aW5nQ291bnQrKztcclxuXHR9O1xyXG5cclxuXHRjb25zdCBub3RpZnlFcnJvciA9IHJlbG9hZCA9PiBlcnIgPT4ge1xyXG5cdFx0Y29uc3QgZXJyU3RyaW5nID0gKGVyciAmJiBlcnIuc3RhY2spIHx8IGVycjtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcblx0XHRjb25zb2xlLmVycm9yKFxyXG5cdFx0XHQnW0hNUl0gRmFpbGVkIHRvIGFjY2VwdCB1cGRhdGUgKG5vbGx1cCBjb21wYXQgbW9kZSknLFxyXG5cdFx0XHRlcnJTdHJpbmdcclxuXHRcdCk7XHJcblx0XHRyZWxvYWQoKTtcclxuXHRcdG5vdGlmeUVuZCgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG5vdGlmeUVuZCA9ICgpID0+IHtcclxuXHRcdHVwZGF0aW5nQ291bnQtLTtcclxuXHRcdGlmICh1cGRhdGluZ0NvdW50ID09PSAwKSB7XHJcblx0XHRcdC8vIE5PVEUgdGhpcyBtZXNzYWdlIGlzIGltcG9ydGFudCBmb3IgdGltaW5nIGluIHRlc3RzXHJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdbSE1SOlN2ZWx0ZV0gVXAgdG8gZGF0ZScpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdbZ2xvYmFsS2V5XSA9IHtcclxuXHRcdGhvdFN0YXRlczoge30sXHJcblx0XHRub3RpZnlTdGFydCxcclxuXHRcdG5vdGlmeUVycm9yLFxyXG5cdFx0bm90aWZ5RW5kLFxyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IHJ1bkFjY2VwdEhhbmRsZXJzID0gYWNjZXB0SGFuZGxlcnMgPT4ge1xyXG5cdGNvbnN0IHF1ZXVlID0gWy4uLmFjY2VwdEhhbmRsZXJzXTtcclxuXHRjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgY3VyID0gcXVldWUuc2hpZnQoKTtcclxuXHRcdGlmIChjdXIpIHtcclxuXHRcdFx0cmV0dXJuIGN1cihudWxsKS50aGVuKG5leHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBuZXh0KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBwbHlIbXIgPSBtYWtlQXBwbHlIbXIoYXJncyA9PiB7XHJcblx0Y29uc3QgeyBub3RpZnlTdGFydCwgbm90aWZ5RXJyb3IsIG5vdGlmeUVuZCB9ID0gZ1tnbG9iYWxLZXldO1xyXG5cdGNvbnN0IHsgbSwgcmVsb2FkIH0gPSBhcmdzO1xyXG5cclxuXHRsZXQgYWNjZXB0SGFuZGxlcnMgPSAobS5ob3QuZGF0YSAmJiBtLmhvdC5kYXRhLmFjY2VwdEhhbmRsZXJzKSB8fCBbXTtcclxuXHRsZXQgbmV4dEFjY2VwdEhhbmRsZXJzID0gW107XHJcblxyXG5cdG0uaG90LmRpc3Bvc2UoZGF0YSA9PiB7XHJcblx0XHRkYXRhLmFjY2VwdEhhbmRsZXJzID0gbmV4dEFjY2VwdEhhbmRsZXJzO1xyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBkaXNwb3NlID0gKC4uLmFyZ3MpID0+IG0uaG90LmRpc3Bvc2UoLi4uYXJncyk7XHJcblxyXG5cdGNvbnN0IGFjY2VwdCA9IGhhbmRsZXIgPT4ge1xyXG5cdFx0aWYgKG5leHRBY2NlcHRIYW5kbGVycy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0bS5ob3QuYWNjZXB0KCk7XHJcblx0XHR9XHJcblx0XHRuZXh0QWNjZXB0SGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjaGVjayA9IHN0YXR1cyA9PiB7XHJcblx0XHRpZiAoc3RhdHVzID09PSAncmVhZHknKSB7XHJcblx0XHRcdG5vdGlmeVN0YXJ0KCk7XHJcblx0XHR9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2lkbGUnKSB7XHJcblx0XHRcdHJ1bkFjY2VwdEhhbmRsZXJzKGFjY2VwdEhhbmRsZXJzKVxyXG5cdFx0XHRcdC50aGVuKG5vdGlmeUVuZClcclxuXHRcdFx0XHQuY2F0Y2gobm90aWZ5RXJyb3IocmVsb2FkKSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0bS5ob3QuYWRkU3RhdHVzSGFuZGxlcihjaGVjayk7XHJcblxyXG5cdG0uaG90LmRpc3Bvc2UoKCkgPT4ge1xyXG5cdFx0bS5ob3QucmVtb3ZlU3RhdHVzSGFuZGxlcihjaGVjayk7XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGhvdCA9IHtcclxuXHRcdGRhdGE6IG0uaG90LmRhdGEsXHJcblx0XHRkaXNwb3NlLFxyXG5cdFx0YWNjZXB0LFxyXG5cdH07XHJcblxyXG5cdHJldHVybiB7IC4uLmFyZ3MsIGhvdCB9O1xyXG59KTtcclxuIiwiZnVuY3Rpb24gbm9vcCgpIHsgfVxuY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgIHJldHVybiB0YXI7XG59XG5mdW5jdGlvbiBpc19wcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG4gICAgZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuICAgICAgICBsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxubGV0IHNyY191cmxfZXF1YWxfYW5jaG9yO1xuZnVuY3Rpb24gc3JjX3VybF9lcXVhbChlbGVtZW50X3NyYywgdXJsKSB7XG4gICAgaWYgKCFzcmNfdXJsX2VxdWFsX2FuY2hvcikge1xuICAgICAgICBzcmNfdXJsX2VxdWFsX2FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB9XG4gICAgc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gZWxlbWVudF9zcmMgPT09IHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWY7XG59XG5mdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcbiAgICBpZiAoc3RvcmUgIT0gbnVsbCAmJiB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH1cbiAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cbmZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzdWJzY3JpYmUoc3RvcmUsIF8gPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbik7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXSAmJiBmblxuICAgICAgICA/IGFzc2lnbigkJHNjb3BlLmN0eC5zbGljZSgpLCBkZWZpbml0aW9uWzFdKGZuKGN0eCkpKVxuICAgICAgICA6ICQkc2NvcGUuY3R4O1xufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuICAgICAgICBjb25zdCBsZXRzID0gZGVmaW5pdGlvblsyXShmbihkaXJ0eSkpO1xuICAgICAgICBpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGV0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxldHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KCQkc2NvcGUuZGlydHkubGVuZ3RoLCBsZXRzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcbiAgICB9XG4gICAgcmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBpZiAoc2xvdF9jaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY29udGV4dCA9IGdldF9zbG90X2NvbnRleHQoc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGdldF9zbG90X2NvbnRleHRfZm4pO1xuICAgICAgICBzbG90LnAoc2xvdF9jb250ZXh0LCBzbG90X2NoYW5nZXMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90KHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbiwgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG4gICAgdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbn1cbmZ1bmN0aW9uIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSgkJHNjb3BlKSB7XG4gICAgaWYgKCQkc2NvcGUuY3R4Lmxlbmd0aCA+IDMyKSB7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gW107XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9ICQkc2NvcGUuY3R4Lmxlbmd0aCAvIDMyO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkaXJ0eVtpXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcbiAgICBjb25zdCByZXN0ID0ge307XG4gICAga2V5cyA9IG5ldyBTZXQoa2V5cyk7XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3Rba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfc2xvdHMoc2xvdHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzbG90cykge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IHJhbiA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAocmFuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByYW4gPSB0cnVlO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH07XG59XG5mdW5jdGlvbiBudWxsX3RvX2VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlKSB7XG4gICAgc3RvcmUuc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3QgaGFzX3Byb3AgPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbmZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgIHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xufVxuXG5jb25zdCBpc19jbGllbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmxldCBub3cgPSBpc19jbGllbnRcbiAgICA/ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIDogKCkgPT4gRGF0ZS5ub3coKTtcbmxldCByYWYgPSBpc19jbGllbnQgPyBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogbm9vcDtcbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuICAgIG5vdyA9IGZuO1xufVxuZnVuY3Rpb24gc2V0X3JhZihmbikge1xuICAgIHJhZiA9IGZuO1xufVxuXG5jb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAoIXRhc2suYyhub3cpKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB0YXNrLmYoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrcy5zaXplICE9PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbn1cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seSFcbiAqL1xuZnVuY3Rpb24gY2xlYXJfbG9vcHMoKSB7XG4gICAgdGFza3MuY2xlYXIoKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0YXNrIHRoYXQgcnVucyBvbiBlYWNoIHJhZiBmcmFtZVxuICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAqL1xuZnVuY3Rpb24gbG9vcChjYWxsYmFjaykge1xuICAgIGxldCB0YXNrO1xuICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWxsID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmFkZCh0YXNrID0geyBjOiBjYWxsYmFjaywgZjogZnVsZmlsbCB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVHJhY2sgd2hpY2ggbm9kZXMgYXJlIGNsYWltZWQgZHVyaW5nIGh5ZHJhdGlvbi4gVW5jbGFpbWVkIG5vZGVzIGNhbiB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4vLyBhdCB0aGUgZW5kIG9mIGh5ZHJhdGlvbiB3aXRob3V0IHRvdWNoaW5nIHRoZSByZW1haW5pbmcgbm9kZXMuXG5sZXQgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuZF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiB1cHBlcl9ib3VuZChsb3csIGhpZ2gsIGtleSwgdmFsdWUpIHtcbiAgICAvLyBSZXR1cm4gZmlyc3QgaW5kZXggb2YgdmFsdWUgbGFyZ2VyIHRoYW4gaW5wdXQgdmFsdWUgaW4gdGhlIHJhbmdlIFtsb3csIGhpZ2gpXG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgICAgY29uc3QgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+PiAxKTtcbiAgICAgICAgaWYgKGtleShtaWQpIDw9IHZhbHVlKSB7XG4gICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGlnaCA9IG1pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG93O1xufVxuZnVuY3Rpb24gaW5pdF9oeWRyYXRlKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQuaHlkcmF0ZV9pbml0KVxuICAgICAgICByZXR1cm47XG4gICAgdGFyZ2V0Lmh5ZHJhdGVfaW5pdCA9IHRydWU7XG4gICAgLy8gV2Uga25vdyB0aGF0IGFsbCBjaGlsZHJlbiBoYXZlIGNsYWltX29yZGVyIHZhbHVlcyBzaW5jZSB0aGUgdW5jbGFpbWVkIGhhdmUgYmVlbiBkZXRhY2hlZCBpZiB0YXJnZXQgaXMgbm90IDxoZWFkPlxuICAgIGxldCBjaGlsZHJlbiA9IHRhcmdldC5jaGlsZE5vZGVzO1xuICAgIC8vIElmIHRhcmdldCBpcyA8aGVhZD4sIHRoZXJlIG1heSBiZSBjaGlsZHJlbiB3aXRob3V0IGNsYWltX29yZGVyXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0hFQUQnKSB7XG4gICAgICAgIGNvbnN0IG15Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG15Q2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbiA9IG15Q2hpbGRyZW47XG4gICAgfVxuICAgIC8qXG4gICAgKiBSZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5LlxuICAgICogV2UgY2FuIHJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkgYnkgZmluZGluZyB0aGUgbG9uZ2VzdCBzdWJzZXF1ZW5jZSBvZlxuICAgICogbm9kZXMgdGhhdCBhcmUgYWxyZWFkeSBjbGFpbWVkIGluIG9yZGVyIGFuZCBvbmx5IG1vdmluZyB0aGUgcmVzdC4gVGhlIGxvbmdlc3RcbiAgICAqIHN1YnNlcXVlbmNlIHN1YnNlcXVlbmNlIG9mIG5vZGVzIHRoYXQgYXJlIGNsYWltZWQgaW4gb3JkZXIgY2FuIGJlIGZvdW5kIGJ5XG4gICAgKiBjb21wdXRpbmcgdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiAuY2xhaW1fb3JkZXIgdmFsdWVzLlxuICAgICpcbiAgICAqIFRoaXMgYWxnb3JpdGhtIGlzIG9wdGltYWwgaW4gZ2VuZXJhdGluZyB0aGUgbGVhc3QgYW1vdW50IG9mIHJlb3JkZXIgb3BlcmF0aW9uc1xuICAgICogcG9zc2libGUuXG4gICAgKlxuICAgICogUHJvb2Y6XG4gICAgKiBXZSBrbm93IHRoYXQsIGdpdmVuIGEgc2V0IG9mIHJlb3JkZXJpbmcgb3BlcmF0aW9ucywgdGhlIG5vZGVzIHRoYXQgZG8gbm90IG1vdmVcbiAgICAqIGFsd2F5cyBmb3JtIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2UsIHNpbmNlIHRoZXkgZG8gbm90IG1vdmUgYW1vbmcgZWFjaCBvdGhlclxuICAgICogbWVhbmluZyB0aGF0IHRoZXkgbXVzdCBiZSBhbHJlYWR5IG9yZGVyZWQgYW1vbmcgZWFjaCBvdGhlci4gVGh1cywgdGhlIG1heGltYWxcbiAgICAqIHNldCBvZiBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlIGZvcm0gYSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UuXG4gICAgKi9cbiAgICAvLyBDb21wdXRlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuICAgIC8vIG06IHN1YnNlcXVlbmNlIGxlbmd0aCBqID0+IGluZGV4IGsgb2Ygc21hbGxlc3QgdmFsdWUgdGhhdCBlbmRzIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgbGVuZ3RoIGpcbiAgICBjb25zdCBtID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG4gICAgLy8gUHJlZGVjZXNzb3IgaW5kaWNlcyArIDFcbiAgICBjb25zdCBwID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICBtWzBdID0gLTE7XG4gICAgbGV0IGxvbmdlc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGNoaWxkcmVuW2ldLmNsYWltX29yZGVyO1xuICAgICAgICAvLyBGaW5kIHRoZSBsYXJnZXN0IHN1YnNlcXVlbmNlIGxlbmd0aCBzdWNoIHRoYXQgaXQgZW5kcyBpbiBhIHZhbHVlIGxlc3MgdGhhbiBvdXIgY3VycmVudCB2YWx1ZVxuICAgICAgICAvLyB1cHBlcl9ib3VuZCByZXR1cm5zIGZpcnN0IGdyZWF0ZXIgdmFsdWUsIHNvIHdlIHN1YnRyYWN0IG9uZVxuICAgICAgICAvLyB3aXRoIGZhc3QgcGF0aCBmb3Igd2hlbiB3ZSBhcmUgb24gdGhlIGN1cnJlbnQgbG9uZ2VzdCBzdWJzZXF1ZW5jZVxuICAgICAgICBjb25zdCBzZXFMZW4gPSAoKGxvbmdlc3QgPiAwICYmIGNoaWxkcmVuW21bbG9uZ2VzdF1dLmNsYWltX29yZGVyIDw9IGN1cnJlbnQpID8gbG9uZ2VzdCArIDEgOiB1cHBlcl9ib3VuZCgxLCBsb25nZXN0LCBpZHggPT4gY2hpbGRyZW5bbVtpZHhdXS5jbGFpbV9vcmRlciwgY3VycmVudCkpIC0gMTtcbiAgICAgICAgcFtpXSA9IG1bc2VxTGVuXSArIDE7XG4gICAgICAgIGNvbnN0IG5ld0xlbiA9IHNlcUxlbiArIDE7XG4gICAgICAgIC8vIFdlIGNhbiBndWFyYW50ZWUgdGhhdCBjdXJyZW50IGlzIHRoZSBzbWFsbGVzdCB2YWx1ZS4gT3RoZXJ3aXNlLCB3ZSB3b3VsZCBoYXZlIGdlbmVyYXRlZCBhIGxvbmdlciBzZXF1ZW5jZS5cbiAgICAgICAgbVtuZXdMZW5dID0gaTtcbiAgICAgICAgbG9uZ2VzdCA9IE1hdGgubWF4KG5ld0xlbiwgbG9uZ2VzdCk7XG4gICAgfVxuICAgIC8vIFRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgKGluaXRpYWxseSByZXZlcnNlZClcbiAgICBjb25zdCBsaXMgPSBbXTtcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGUgbm9kZXMsIG5vZGVzIHRoYXQgd2lsbCBiZSBtb3ZlZFxuICAgIGNvbnN0IHRvTW92ZSA9IFtdO1xuICAgIGxldCBsYXN0ID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBjdXIgPSBtW2xvbmdlc3RdICsgMTsgY3VyICE9IDA7IGN1ciA9IHBbY3VyIC0gMV0pIHtcbiAgICAgICAgbGlzLnB1c2goY2hpbGRyZW5bY3VyIC0gMV0pO1xuICAgICAgICBmb3IgKDsgbGFzdCA+PSBjdXI7IGxhc3QtLSkge1xuICAgICAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QtLTtcbiAgICB9XG4gICAgZm9yICg7IGxhc3QgPj0gMDsgbGFzdC0tKSB7XG4gICAgICAgIHRvTW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcbiAgICB9XG4gICAgbGlzLnJldmVyc2UoKTtcbiAgICAvLyBXZSBzb3J0IHRoZSBub2RlcyBiZWluZyBtb3ZlZCB0byBndWFyYW50ZWUgdGhhdCB0aGVpciBpbnNlcnRpb24gb3JkZXIgbWF0Y2hlcyB0aGUgY2xhaW0gb3JkZXJcbiAgICB0b01vdmUuc29ydCgoYSwgYikgPT4gYS5jbGFpbV9vcmRlciAtIGIuY2xhaW1fb3JkZXIpO1xuICAgIC8vIEZpbmFsbHksIHdlIG1vdmUgdGhlIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgdG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdoaWxlIChqIDwgbGlzLmxlbmd0aCAmJiB0b01vdmVbaV0uY2xhaW1fb3JkZXIgPj0gbGlzW2pdLmNsYWltX29yZGVyKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5jaG9yID0gaiA8IGxpcy5sZW5ndGggPyBsaXNbal0gOiBudWxsO1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRvTW92ZVtpXSwgYW5jaG9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyh0YXJnZXQsIHN0eWxlX3NoZWV0X2lkLCBzdHlsZXMpIHtcbiAgICBjb25zdCBhcHBlbmRfc3R5bGVzX3RvID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKHRhcmdldCk7XG4gICAgaWYgKCFhcHBlbmRfc3R5bGVzX3RvLmdldEVsZW1lbnRCeUlkKHN0eWxlX3NoZWV0X2lkKSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmlkID0gc3R5bGVfc2hlZXRfaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc3R5bGVzO1xuICAgICAgICBhcHBlbmRfc3R5bGVzaGVldChhcHBlbmRfc3R5bGVzX3RvLCBzdHlsZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBjb25zdCByb290ID0gbm9kZS5nZXRSb290Tm9kZSA/IG5vZGUuZ2V0Um9vdE5vZGUoKSA6IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICBpZiAocm9vdCAmJiByb290Lmhvc3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSB7XG4gICAgY29uc3Qgc3R5bGVfZWxlbWVudCA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYXBwZW5kX3N0eWxlc2hlZXQoZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpLCBzdHlsZV9lbGVtZW50KTtcbiAgICByZXR1cm4gc3R5bGVfZWxlbWVudC5zaGVldDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXNoZWV0KG5vZGUsIHN0eWxlKSB7XG4gICAgYXBwZW5kKG5vZGUuaGVhZCB8fCBub2RlLCBzdHlsZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSkge1xuICAgIGlmIChpc19oeWRyYXRpbmcpIHtcbiAgICAgICAgaW5pdF9oeWRyYXRlKHRhcmdldCk7XG4gICAgICAgIGlmICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPT09IHVuZGVmaW5lZCkgfHwgKCh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCAhPT0gbnVsbCkgJiYgKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkLnBhcmVudEVsZW1lbnQgIT09IHRhcmdldCkpKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IHRhcmdldC5maXJzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgbm9kZXMgb2YgdW5kZWZpbmVkIG9yZGVyaW5nXG4gICAgICAgIHdoaWxlICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5jbGFpbV9vcmRlciA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZSAhPT0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpIHtcbiAgICAgICAgICAgIC8vIFdlIG9ubHkgaW5zZXJ0IGlmIHRoZSBvcmRlcmluZyBvZiB0aGlzIG5vZGUgc2hvdWxkIGJlIG1vZGlmaWVkIG9yIHRoZSBwYXJlbnQgbm9kZSBpcyBub3QgdGFyZ2V0XG4gICAgICAgICAgICBpZiAobm9kZS5jbGFpbV9vcmRlciAhPT0gdW5kZWZpbmVkIHx8IG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBpbnNlcnRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgaWYgKGlzX2h5ZHJhdGluZyAmJiAhYW5jaG9yKSB7XG4gICAgICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlICE9PSB0YXJnZXQgfHwgbm9kZS5uZXh0U2libGluZyAhPSBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpdGVyYXRpb25zW2ldKVxuICAgICAgICAgICAgaXRlcmF0aW9uc1tpXS5kKGRldGFjaGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBlbGVtZW50X2lzKG5hbWUsIGlzKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSwgeyBpcyB9KTtcbn1cbmZ1bmN0aW9uIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMob2JqLCBleGNsdWRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIG9iaikge1xuICAgICAgICBpZiAoaGFzX3Byb3Aob2JqLCBrKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gb2JqW2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdmdfZWxlbWVudChuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cbmZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cbmZ1bmN0aW9uIHNwYWNlKCkge1xuICAgIHJldHVybiB0ZXh0KCcgJyk7XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGV4dCgnJyk7XG59XG5mdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcHJldmVudF9kZWZhdWx0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc3RvcF9wcm9wYWdhdGlvbihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZWxmKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMpXG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJ1c3RlZChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQuaXNUcnVzdGVkKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB0eXBlb2Ygbm9kZVtwcm9wXSA9PT0gJ2Jvb2xlYW4nICYmIHZhbHVlID09PSAnJyA/IHRydWUgOiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgIHZhbHVlLmRlbGV0ZShfX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IG51bGwgOiArdmFsdWU7XG59XG5mdW5jdGlvbiB0aW1lX3Jhbmdlc190b19hcnJheShyYW5nZXMpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycmF5LnB1c2goeyBzdGFydDogcmFuZ2VzLnN0YXJ0KGkpLCBlbmQ6IHJhbmdlcy5lbmQoaSkgfSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuZnVuY3Rpb24gaW5pdF9jbGFpbV9pbmZvKG5vZGVzKSB7XG4gICAgaWYgKG5vZGVzLmNsYWltX2luZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvID0geyBsYXN0X2luZGV4OiAwLCB0b3RhbF9jbGFpbWVkOiAwIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY2xhaW1fbm9kZShub2RlcywgcHJlZGljYXRlLCBwcm9jZXNzTm9kZSwgY3JlYXRlTm9kZSwgZG9udFVwZGF0ZUxhc3RJbmRleCA9IGZhbHNlKSB7XG4gICAgLy8gVHJ5IHRvIGZpbmQgbm9kZXMgaW4gYW4gb3JkZXIgc3VjaCB0aGF0IHdlIGxlbmd0aGVuIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2VcbiAgICBpbml0X2NsYWltX2luZm8obm9kZXMpO1xuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSAoKCkgPT4ge1xuICAgICAgICAvLyBXZSBmaXJzdCB0cnkgdG8gZmluZCBhbiBlbGVtZW50IGFmdGVyIHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSB0cnkgdG8gZmluZCBvbmUgYmVmb3JlXG4gICAgICAgIC8vIFdlIGl0ZXJhdGUgaW4gcmV2ZXJzZSBzbyB0aGF0IHdlIGRvbid0IGdvIHRvbyBmYXIgYmFja1xuICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9IHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW2ldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZG9udFVwZGF0ZUxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXBsYWNlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIHNwbGljZWQgYmVmb3JlIHRoZSBsYXN0X2luZGV4LCB3ZSBkZWNyZWFzZSBpdFxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgY2FuJ3QgZmluZCBhbnkgbWF0Y2hpbmcgbm9kZSwgd2UgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICByZXR1cm4gY3JlYXRlTm9kZSgpO1xuICAgIH0pKCk7XG4gICAgcmVzdWx0Tm9kZS5jbGFpbV9vcmRlciA9IG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZDtcbiAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICByZXR1cm4gcmVzdWx0Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgY3JlYXRlX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZU5hbWUgPT09IG5hbWUsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2pdO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmUuZm9yRWFjaCh2ID0+IG5vZGUucmVtb3ZlQXR0cmlidXRlKHYpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCAoKSA9PiBjcmVhdGVfZWxlbWVudChuYW1lKSk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX2VsZW1lbnRfYmFzZShub2RlcywgbmFtZSwgYXR0cmlidXRlcywgZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV9zdmdfZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Z19lbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICByZXR1cm4gY2xhaW1fbm9kZShub2RlcywgKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDMsIChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSAnJyArIGRhdGE7XG4gICAgICAgIGlmIChub2RlLmRhdGEuc3RhcnRzV2l0aChkYXRhU3RyKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YS5sZW5ndGggIT09IGRhdGFTdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuc3BsaXRUZXh0KGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGFTdHI7XG4gICAgICAgIH1cbiAgICB9LCAoKSA9PiB0ZXh0KGRhdGEpLCB0cnVlIC8vIFRleHQgbm9kZXMgc2hvdWxkIG5vdCB1cGRhdGUgbGFzdCBpbmRleCBzaW5jZSBpdCBpcyBsaWtlbHkgbm90IHdvcnRoIGl0IHRvIGVsaW1pbmF0ZSBhbiBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIG9mIGFjdHVhbCBlbGVtZW50c1xuICAgICk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gZmluZF9jb21tZW50KG5vZGVzLCB0ZXh0LCBzdGFydCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogY29tbWVudCBub2RlICovICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpID09PSB0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoO1xufVxuZnVuY3Rpb24gY2xhaW1faHRtbF90YWcobm9kZXMsIGlzX3N2Zykge1xuICAgIC8vIGZpbmQgaHRtbCBvcGVuaW5nIHRhZ1xuICAgIGNvbnN0IHN0YXJ0X2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfU1RBUlQnLCAwKTtcbiAgICBjb25zdCBlbmRfaW5kZXggPSBmaW5kX2NvbW1lbnQobm9kZXMsICdIVE1MX1RBR19FTkQnLCBzdGFydF9pbmRleCk7XG4gICAgaWYgKHN0YXJ0X2luZGV4ID09PSBlbmRfaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKHVuZGVmaW5lZCwgaXNfc3ZnKTtcbiAgICB9XG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCBodG1sX3RhZ19ub2RlcyA9IG5vZGVzLnNwbGljZShzdGFydF9pbmRleCwgZW5kX2luZGV4IC0gc3RhcnRfaW5kZXggKyAxKTtcbiAgICBkZXRhY2goaHRtbF90YWdfbm9kZXNbMF0pO1xuICAgIGRldGFjaChodG1sX3RhZ19ub2Rlc1todG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxXSk7XG4gICAgY29uc3QgY2xhaW1lZF9ub2RlcyA9IGh0bWxfdGFnX25vZGVzLnNsaWNlKDEsIGh0bWxfdGFnX25vZGVzLmxlbmd0aCAtIDEpO1xuICAgIGZvciAoY29uc3QgbiBvZiBjbGFpbWVkX25vZGVzKSB7XG4gICAgICAgIG4uY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgICAgIG5vZGVzLmNsYWltX2luZm8udG90YWxfY2xhaW1lZCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEh0bWxUYWdIeWRyYXRpb24oY2xhaW1lZF9ub2RlcywgaXNfc3ZnKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7IC8vIG5vIG9wdGlvbiBzaG91bGQgYmUgc2VsZWN0ZWRcbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuICAgIGNvbnN0IGNvbXB1dGVkX3N0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ICcgK1xuICAgICAgICAnb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwOyBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3Rlbih3aW5kb3csICdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdylcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFwcGVuZChub2RlLCBpZnJhbWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXRhY2goaWZyYW1lKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBidWJibGVzID0gZmFsc2UsIGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgYnViYmxlcywgY2FuY2VsYWJsZSwgZGV0YWlsKTtcbiAgICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIHF1ZXJ5X3NlbGVjdG9yX2FsbChzZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQuYm9keSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5jbGFzcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcihpc19zdmcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlzX3N2ZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzX3N2ZyA9IGlzX3N2ZztcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICB9XG4gICAgbShodG1sLCB0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX3N2ZylcbiAgICAgICAgICAgICAgICB0aGlzLmUgPSBzdmdfZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZSA9IGVsZW1lbnQodGFyZ2V0Lm5vZGVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuYyhodG1sKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmkoYW5jaG9yKTtcbiAgICB9XG4gICAgaChodG1sKSB7XG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLm4gPSBBcnJheS5mcm9tKHRoaXMuZS5jaGlsZE5vZGVzKTtcbiAgICB9XG4gICAgaShhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydCh0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwKGh0bWwpIHtcbiAgICAgICAgdGhpcy5kKCk7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICAgICAgdGhpcy5pKHRoaXMuYSk7XG4gICAgfVxuICAgIGQoKSB7XG4gICAgICAgIHRoaXMubi5mb3JFYWNoKGRldGFjaCk7XG4gICAgfVxufVxuY2xhc3MgSHRtbFRhZ0h5ZHJhdGlvbiBleHRlbmRzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGNsYWltZWRfbm9kZXMsIGlzX3N2ZyA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKGlzX3N2Zyk7XG4gICAgICAgIHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG4gICAgICAgIHRoaXMubCA9IGNsYWltZWRfbm9kZXM7XG4gICAgfVxuICAgIGMoaHRtbCkge1xuICAgICAgICBpZiAodGhpcy5sKSB7XG4gICAgICAgICAgICB0aGlzLm4gPSB0aGlzLmw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5jKGh0bWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGkoYW5jaG9yKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnRfaHlkcmF0aW9uKHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXR0cmlidXRlX3RvX29iamVjdChhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgICByZXN1bHRbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cyhlbGVtZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgcmVzdWx0W25vZGUuc2xvdCB8fCAnZGVmYXVsdCddID0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyB3ZSBuZWVkIHRvIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiBmb3IgbXVsdGlwbGUgZG9jdW1lbnRzIGJlY2F1c2UgYSBTdmVsdGUgYXBwbGljYXRpb24gY291bGQgYWxzbyBjb250YWluIGlmcmFtZXNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUvaXNzdWVzLzM2MjRcbmNvbnN0IG1hbmFnZWRfc3R5bGVzID0gbmV3IE1hcCgpO1xubGV0IGFjdGl2ZSA9IDA7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBoYXNoID4+PiAwO1xufVxuZnVuY3Rpb24gY3JlYXRlX3N0eWxlX2luZm9ybWF0aW9uKGRvYywgbm9kZSkge1xuICAgIGNvbnN0IGluZm8gPSB7IHN0eWxlc2hlZXQ6IGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0KG5vZGUpLCBydWxlczoge30gfTtcbiAgICBtYW5hZ2VkX3N0eWxlcy5zZXQoZG9jLCBpbmZvKTtcbiAgICByZXR1cm4gaW5mbztcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcbiAgICBjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG4gICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcbiAgICAgICAgY29uc3QgdCA9IGEgKyAoYiAtIGEpICogZWFzZShwKTtcbiAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICB9XG4gICAgY29uc3QgcnVsZSA9IGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIsIDEgLSBiKX19XFxufWA7XG4gICAgY29uc3QgbmFtZSA9IGBfX3N2ZWx0ZV8ke2hhc2gocnVsZSl9XyR7dWlkfWA7XG4gICAgY29uc3QgZG9jID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHsgc3R5bGVzaGVldCwgcnVsZXMgfSA9IG1hbmFnZWRfc3R5bGVzLmdldChkb2MpIHx8IGNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbihkb2MsIG5vZGUpO1xuICAgIGlmICghcnVsZXNbbmFtZV0pIHtcbiAgICAgICAgcnVsZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICBzdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcbiAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IGAke2FuaW1hdGlvbiA/IGAke2FuaW1hdGlvbn0sIGAgOiAnJ30ke25hbWV9ICR7ZHVyYXRpb259bXMgbGluZWFyICR7ZGVsYXl9bXMgMSBib3RoYDtcbiAgICBhY3RpdmUgKz0gMTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICBjb25zdCBwcmV2aW91cyA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgbmV4dCA9IHByZXZpb3VzLmZpbHRlcihuYW1lXG4gICAgICAgID8gYW5pbSA9PiBhbmltLmluZGV4T2YobmFtZSkgPCAwIC8vIHJlbW92ZSBzcGVjaWZpYyBhbmltYXRpb25cbiAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX19zdmVsdGUnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgICk7XG4gICAgY29uc3QgZGVsZXRlZCA9IHByZXZpb3VzLmxlbmd0aCAtIG5leHQubGVuZ3RoO1xuICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbmV4dC5qb2luKCcsICcpO1xuICAgICAgICBhY3RpdmUgLT0gZGVsZXRlZDtcbiAgICAgICAgaWYgKCFhY3RpdmUpXG4gICAgICAgICAgICBjbGVhcl9ydWxlcygpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG1hbmFnZWRfc3R5bGVzLmZvckVhY2goaW5mbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHN0eWxlc2hlZXQgfSA9IGluZm87XG4gICAgICAgICAgICBsZXQgaSA9IHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG4gICAgICAgICAgICBpbmZvLnJ1bGVzID0ge307XG4gICAgICAgIH0pO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5jbGVhcigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYW5pbWF0aW9uKG5vZGUsIGZyb20sIGZuLCBwYXJhbXMpIHtcbiAgICBpZiAoIWZyb20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoZnJvbS5sZWZ0ID09PSB0by5sZWZ0ICYmIGZyb20ucmlnaHQgPT09IHRvLnJpZ2h0ICYmIGZyb20udG9wID09PSB0by50b3AgJiYgZnJvbS5ib3R0b20gPT09IHRvLmJvdHRvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBzaG91bGQgdGhpcyBiZSBzZXBhcmF0ZWQgZnJvbSBkZXN0cnVjdHVyaW5nPyBPciBzdGFydC9lbmQgYWRkZWQgdG8gcHVibGljIGFwaSBhbmQgZG9jdW1lbnRhdGlvbj9cbiAgICBzdGFydDogc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzpcbiAgICBlbmQgPSBzdGFydF90aW1lICsgZHVyYXRpb24sIHRpY2sgPSBub29wLCBjc3MgfSA9IGZuKG5vZGUsIHsgZnJvbSwgdG8gfSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbmFtZTtcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBuYW1lKTtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgIGlmICghc3RhcnRlZCAmJiBub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQgJiYgbm93ID49IGVuZCkge1xuICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHN0YXJ0X3RpbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gMCArIDEgKiBlYXNpbmcocCAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHN0YXJ0KCk7XG4gICAgdGljaygwLCAxKTtcbiAgICByZXR1cm4gc3RvcDtcbn1cbmZ1bmN0aW9uIGZpeF9wb3NpdGlvbihub2RlKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyAmJiBzdHlsZS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0eWxlO1xuICAgICAgICBjb25zdCBhID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGFkZF90cmFuc2Zvcm0obm9kZSwgYSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkX3RyYW5zZm9ybShub2RlLCBhKSB7XG4gICAgY29uc3QgYiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGEubGVmdCAhPT0gYi5sZWZ0IHx8IGEudG9wICE9PSBiLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHthLmxlZnQgLSBiLmxlZnR9cHgsICR7YS50b3AgLSBiLnRvcH1weClgO1xuICAgIH1cbn1cblxubGV0IGN1cnJlbnRfY29tcG9uZW50O1xuZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuICAgIGlmICghY3VycmVudF9jb21wb25lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uJyk7XG4gICAgcmV0dXJuIGN1cnJlbnRfY29tcG9uZW50O1xufVxuZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9tb3VudC5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25EZXN0cm95KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICByZXR1cm4gKHR5cGUsIGRldGFpbCwgeyBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbdHlwZV07XG4gICAgICAgIGlmIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gYXJlIHRoZXJlIHNpdHVhdGlvbnMgd2hlcmUgZXZlbnRzIGNvdWxkIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgIC8vIGluIGEgc2VydmVyIChub24tRE9NKSBlbnZpcm9ubWVudD9cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgeyBjYW5jZWxhYmxlIH0pO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICFldmVudC5kZWZhdWx0UHJldmVudGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuZnVuY3Rpb24gZ2V0QWxsQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQ7XG59XG5mdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmhhcyhrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiBmbi5jYWxsKHRoaXMsIGV2ZW50KSk7XG4gICAgfVxufVxuXG5jb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG5jb25zdCBpbnRyb3MgPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG5jb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG5jb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5sZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0aWNrKCkge1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIHJldHVybiByZXNvbHZlZF9wcm9taXNlO1xufVxuZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZGRfZmx1c2hfY2FsbGJhY2soZm4pIHtcbiAgICBmbHVzaF9jYWxsYmFja3MucHVzaChmbik7XG59XG4vLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuLy8gMS4gQWxsIGJlZm9yZVVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlblxuLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbi8vICAgIGZvciBhZnRlclVwZGF0ZXMgY2FsbGVkIGR1cmluZyB0aGUgaW5pdGlhbCBvbk1vdW50LCB3aGljaCBhcmUgY2FsbGVkIGluXG4vLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4vLyBjYWxsIHRvIGZsdXNoKCksIHRoZSBmb2xsb3dpbmcgc3RlcHMgZ3VhcmQgYWdhaW5zdCB0aGlzOlxuLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2Vcbi8vICAgIHRoZSBmbHVzaCBpbmRleCBpcyBrZXB0IG91dHNpZGUgdGhlIGZ1bmN0aW9uLCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbCBwaWNrXG4vLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbi8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4vLyAgICBub3QgaW50ZXJmZXJlIHdpdGggdGhlIFwicGFyZW50XCIgZmx1c2goKSBjYWxsLlxuLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbi8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4vLyAgICBjYWxsYmFjayBjYWxsZWQgYSBzZWNvbmQgdGltZTsgdGhlIHNlZW5fY2FsbGJhY2tzIHNldCwgb3V0c2lkZSB0aGUgZmx1c2goKVxuLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbmNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xubGV0IGZsdXNoaWR4ID0gMDsgLy8gRG8gKm5vdCogbW92ZSB0aGlzIGluc2lkZSB0aGUgZmx1c2goKSBmdW5jdGlvblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgY29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICB3aGlsZSAoZmx1c2hpZHggPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICBmbHVzaGlkeCsrO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgIGdyb3VwLnIgKz0gMTtcbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IChwcm9ncmFtLmIgLSB0KTtcbiAgICAgICAgZHVyYXRpb24gKj0gTWF0aC5hYnMoZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhOiB0LFxuICAgICAgICAgICAgYjogcHJvZ3JhbS5iLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhcnQ6IHByb2dyYW0uc3RhcnQsXG4gICAgICAgICAgICBlbmQ6IHByb2dyYW0uc3RhcnQgKyBkdXJhdGlvbixcbiAgICAgICAgICAgIGdyb3VwOiBwcm9ncmFtLmdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKGIpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBub3coKSArIGRlbGF5LFxuICAgICAgICAgICAgYlxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBwcm9ncmFtLmdyb3VwID0gb3V0cm9zO1xuICAgICAgICAgICAgb3V0cm9zLnIgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgYW4gaW50cm8sIGFuZCB0aGVyZSdzIGEgZGVsYXksIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFuIGluaXRpYWwgdGljayBhbmQvb3IgYXBwbHkgQ1NTIGFuaW1hdGlvbiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYilcbiAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGIsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ19wcm9ncmFtICYmIG5vdyA+IHBlbmRpbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHBlbmRpbmdfcHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBydW5uaW5nX3Byb2dyYW0uYiwgcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uLCAwLCBlYXNpbmcsIGNvbmZpZy5jc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQgPSBydW5uaW5nX3Byb2dyYW0uYiwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0uYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRybyDigJQgd2UgY2FuIHRpZHkgdXAgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXRybyDigJQgbmVlZHMgdG8gYmUgY29vcmRpbmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLXJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChydW5uaW5nX3Byb2dyYW0uZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gbm93IC0gcnVubmluZ19wcm9ncmFtLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHJ1bm5pbmdfcHJvZ3JhbS5hICsgcnVubmluZ19wcm9ncmFtLmQgKiBlYXNpbmcocCAvIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gISEocnVubmluZ19wcm9ncmFtIHx8IHBlbmRpbmdfcHJvZ3JhbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBydW4oYikge1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0gdmFsdWU7XG4gICAgICAgIGxldCBjaGlsZF9jdHggPSBpbmZvLmN0eDtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaGlsZF9jdHggPSBjaGlsZF9jdHguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkX2N0eFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgbmVlZHNfZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrc1tpXSA9PT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIG5lZWRzX2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgICAgICBpZiAobmVlZHNfZmx1c2gpIHtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgaWYgKCFpbmZvLmhhc0NhdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaChpbmZvLCBjdHgsIGRpcnR5KSB7XG4gICAgY29uc3QgY2hpbGRfY3R4ID0gY3R4LnNsaWNlKCk7XG4gICAgY29uc3QgeyByZXNvbHZlZCB9ID0gaW5mbztcbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8udmFsdWVdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8uY2F0Y2gpIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8uZXJyb3JdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGluZm8uYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxUaGlzXG4gICAgICAgIDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGkgPSBuO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICByZXR1cm4gbmV3X2Jsb2Nrcztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfa2V5cyhjdHgsIGxpc3QsIGdldF9jb250ZXh0LCBnZXRfa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGhhdmUgZHVwbGljYXRlIGtleXMgaW4gYSBrZXllZCBlYWNoJyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICAgIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gICAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuICAgIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuKSlcbiAgICAgICAgICAgICAgICAgICAgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgICAgIGlmICghKGtleSBpbiB1cGRhdGUpKVxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG59XG5mdW5jdGlvbiBnZXRfc3ByZWFkX29iamVjdChzcHJlYWRfcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNwcmVhZF9wcm9wcyA9PT0gJ29iamVjdCcgJiYgc3ByZWFkX3Byb3BzICE9PSBudWxsID8gc3ByZWFkX3Byb3BzIDoge307XG59XG5cbi8vIHNvdXJjZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5kaWNlcy5odG1sXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaXNtYXAnLFxuICAgICdsb29wJyxcbiAgICAnbXVsdGlwbGUnLFxuICAgICdtdXRlZCcsXG4gICAgJ25vbW9kdWxlJyxcbiAgICAnbm92YWxpZGF0ZScsXG4gICAgJ29wZW4nLFxuICAgICdwbGF5c2lubGluZScsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVxdWlyZWQnLFxuICAgICdyZXZlcnNlZCcsXG4gICAgJ3NlbGVjdGVkJ1xuXSk7XG5cbmNvbnN0IHZvaWRfZWxlbWVudF9uYW1lcyA9IC9eKD86YXJlYXxiYXNlfGJyfGNvbHxjb21tYW5kfGVtYmVkfGhyfGltZ3xpbnB1dHxrZXlnZW58bGlua3xtZXRhfHBhcmFtfHNvdXJjZXx0cmFja3x3YnIpJC87XG5mdW5jdGlvbiBpc192b2lkKG5hbWUpIHtcbiAgICByZXR1cm4gdm9pZF9lbGVtZW50X25hbWVzLnRlc3QobmFtZSkgfHwgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnIWRvY3R5cGUnO1xufVxuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzLCBhdHRyc190b19hZGQpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG4gICAgaWYgKGF0dHJzX3RvX2FkZCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzX3RvX2FkZCA9IGF0dHJzX3RvX2FkZC5jbGFzc2VzO1xuICAgICAgICBjb25zdCBzdHlsZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLnN0eWxlcztcbiAgICAgICAgaWYgKGNsYXNzZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5jbGFzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyA9IGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnICcgKyBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGVzX3RvX2FkZCkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuc3R5bGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSBzdHlsZV9vYmplY3RfdG9fc3RyaW5nKHN0eWxlc190b19hZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcobWVyZ2Vfc3NyX3N0eWxlcyhhdHRyaWJ1dGVzLnN0eWxlLCBzdHlsZXNfdG9fYWRkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGlmIChpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3Rlci50ZXN0KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICBlbHNlIGlmIChib29sZWFuX2F0dHJpYnV0ZXMuaGFzKG5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICBzdHIgKz0gJyAnICsgbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHIgKz0gYCAke25hbWV9PVwiJHt2YWx1ZX1cImA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gbWVyZ2Vfc3NyX3N0eWxlcyhzdHlsZV9hdHRyaWJ1dGUsIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgIGNvbnN0IHN0eWxlX29iamVjdCA9IHt9O1xuICAgIGZvciAoY29uc3QgaW5kaXZpZHVhbF9zdHlsZSBvZiBzdHlsZV9hdHRyaWJ1dGUuc3BsaXQoJzsnKSkge1xuICAgICAgICBjb25zdCBjb2xvbl9pbmRleCA9IGluZGl2aWR1YWxfc3R5bGUuaW5kZXhPZignOicpO1xuICAgICAgICBjb25zdCBuYW1lID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZSgwLCBjb2xvbl9pbmRleCkudHJpbSgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGl2aWR1YWxfc3R5bGUuc2xpY2UoY29sb25faW5kZXggKyAxKS50cmltKCk7XG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlX2RpcmVjdGl2ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlX2RpcmVjdGl2ZVtuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZV9vYmplY3RbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdHlsZV9vYmplY3RbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlX29iamVjdDtcbn1cbmNvbnN0IEFUVFJfUkVHRVggPSAvWyZcIl0vZztcbmNvbnN0IENPTlRFTlRfUkVHRVggPSAvWyY8XS9nO1xuLyoqXG4gKiBOb3RlOiB0aGlzIG1ldGhvZCBpcyBwZXJmb3JtYW5jZSBzZW5zaXRpdmUgYW5kIGhhcyBiZWVuIG9wdGltaXplZFxuICogaHR0cHM6Ly9naXRodWIuY29tL3N2ZWx0ZWpzL3N2ZWx0ZS9wdWxsLzU3MDFcbiAqL1xuZnVuY3Rpb24gZXNjYXBlKHZhbHVlLCBpc19hdHRyID0gZmFsc2UpIHtcbiAgICBjb25zdCBzdHIgPSBTdHJpbmcodmFsdWUpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBpc19hdHRyID8gQVRUUl9SRUdFWCA6IENPTlRFTlRfUkVHRVg7XG4gICAgcGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICAgIGxldCBlc2NhcGVkID0gJyc7XG4gICAgbGV0IGxhc3QgPSAwO1xuICAgIHdoaWxlIChwYXR0ZXJuLnRlc3Qoc3RyKSkge1xuICAgICAgICBjb25zdCBpID0gcGF0dGVybi5sYXN0SW5kZXggLSAxO1xuICAgICAgICBjb25zdCBjaCA9IHN0cltpXTtcbiAgICAgICAgZXNjYXBlZCArPSBzdHIuc3Vic3RyaW5nKGxhc3QsIGkpICsgKGNoID09PSAnJicgPyAnJmFtcDsnIDogKGNoID09PSAnXCInID8gJyZxdW90OycgOiAnJmx0OycpKTtcbiAgICAgICAgbGFzdCA9IGkgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gZXNjYXBlZCArIHN0ci5zdWJzdHJpbmcobGFzdCk7XG59XG5mdW5jdGlvbiBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlKHZhbHVlKSB7XG4gICAgLy8ga2VlcCBib29sZWFucywgbnVsbCwgYW5kIHVuZGVmaW5lZCBmb3IgdGhlIHNha2Ugb2YgYHNwcmVhZGBcbiAgICBjb25zdCBzaG91bGRfZXNjYXBlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyk7XG4gICAgcmV0dXJuIHNob3VsZF9lc2NhcGUgPyBlc2NhcGUodmFsdWUsIHRydWUpIDogdmFsdWU7XG59XG5mdW5jdGlvbiBlc2NhcGVfb2JqZWN0KG9iaikge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICByZXN1bHRba2V5XSA9IGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUob2JqW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZWFjaChpdGVtcywgZm4pIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHIgKz0gZm4oaXRlbXNbaV0sIGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgbWlzc2luZ19jb21wb25lbnQgPSB7XG4gICAgJCRyZW5kZXI6ICgpID0+ICcnXG59O1xuZnVuY3Rpb24gdmFsaWRhdGVfY29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIGlmICghY29tcG9uZW50IHx8ICFjb21wb25lbnQuJCRyZW5kZXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdzdmVsdGU6Y29tcG9uZW50JylcbiAgICAgICAgICAgIG5hbWUgKz0gJyB0aGlzPXsuLi59JztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGA8JHtuYW1lfT4gaXMgbm90IGEgdmFsaWQgU1NSIGNvbXBvbmVudC4gWW91IG1heSBuZWVkIHRvIHJldmlldyB5b3VyIGJ1aWxkIGNvbmZpZyB0byBlbnN1cmUgdGhhdCBkZXBlbmRlbmNpZXMgYXJlIGNvbXBpbGVkLCByYXRoZXIgdGhhbiBpbXBvcnRlZCBhcyBwcmUtY29tcGlsZWQgbW9kdWxlc2ApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZGVidWcoZmlsZSwgbGluZSwgY29sdW1uLCB2YWx1ZXMpIHtcbiAgICBjb25zb2xlLmxvZyhge0BkZWJ1Z30gJHtmaWxlID8gZmlsZSArICcgJyA6ICcnfSgke2xpbmV9OiR7Y29sdW1ufSlgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2codmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgcmV0dXJuICcnO1xufVxubGV0IG9uX2Rlc3Ryb3k7XG5mdW5jdGlvbiBjcmVhdGVfc3NyX2NvbXBvbmVudChmbikge1xuICAgIGZ1bmN0aW9uICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cywgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIGNvbnN0ICQkID0ge1xuICAgICAgICAgICAgb25fZGVzdHJveSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBNYXAoY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG4gICAgICAgICAgICAvLyB0aGVzZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGRpc2NhcmRlZFxuICAgICAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKVxuICAgICAgICB9O1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoeyAkJCB9KTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGZuKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cyk7XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlcjogKHByb3BzID0ge30sIHsgJCRzbG90cyA9IHt9LCBjb250ZXh0ID0gbmV3IE1hcCgpIH0gPSB7fSkgPT4ge1xuICAgICAgICAgICAgb25fZGVzdHJveSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geyB0aXRsZTogJycsIGhlYWQ6ICcnLCBjc3M6IG5ldyBTZXQoKSB9O1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9ICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIHt9LCAkJHNsb3RzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHJ1bl9hbGwob25fZGVzdHJveSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IEFycmF5LmZyb20ocmVzdWx0LmNzcykubWFwKGNzcyA9PiBjc3MuY29kZSkuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbnVsbCAvLyBUT0RPXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkOiByZXN1bHQudGl0bGUgKyByZXN1bHQuaGVhZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgJCRyZW5kZXJcbiAgICB9O1xufVxuZnVuY3Rpb24gYWRkX2F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IChib29sZWFuICYmICF2YWx1ZSkpXG4gICAgICAgIHJldHVybiAnJztcbiAgICBjb25zdCBhc3NpZ25tZW50ID0gKGJvb2xlYW4gJiYgdmFsdWUgPT09IHRydWUpID8gJycgOiBgPVwiJHtlc2NhcGUodmFsdWUsIHRydWUpfVwiYDtcbiAgICByZXR1cm4gYCAke25hbWV9JHthc3NpZ25tZW50fWA7XG59XG5mdW5jdGlvbiBhZGRfY2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMgPyBgIGNsYXNzPVwiJHtjbGFzc2VzfVwiYCA6ICcnO1xufVxuZnVuY3Rpb24gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVfb2JqZWN0KVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBzdHlsZV9vYmplY3Rba2V5XSlcbiAgICAgICAgLm1hcChrZXkgPT4gYCR7a2V5fTogJHtzdHlsZV9vYmplY3Rba2V5XX07YClcbiAgICAgICAgLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIGFkZF9zdHlsZXMoc3R5bGVfb2JqZWN0KSB7XG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhzdHlsZV9vYmplY3QpO1xuICAgIHJldHVybiBzdHlsZXMgPyBgIHN0eWxlPVwiJHtzdHlsZXN9XCJgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGJpbmQoY29tcG9uZW50LCBuYW1lLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGluZGV4ID0gY29tcG9uZW50LiQkLnByb3BzW25hbWVdO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBvbmVudC4kJC5ib3VuZFtpbmRleF0gPSBjYWxsYmFjaztcbiAgICAgICAgY2FsbGJhY2soY29tcG9uZW50LiQkLmN0eFtpbmRleF0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcbiAgICBibG9jayAmJiBibG9jay5jKCk7XG59XG5mdW5jdGlvbiBjbGFpbV9jb21wb25lbnQoYmxvY2ssIHBhcmVudF9ub2Rlcykge1xuICAgIGJsb2NrICYmIGJsb2NrLmwocGFyZW50X25vZGVzKTtcbn1cbmZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yLCBjdXN0b21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBmcmFnbWVudCwgb25fbW91bnQsIG9uX2Rlc3Ryb3ksIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIGlmICghY3VzdG9tRWxlbWVudCkge1xuICAgICAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgaWYgKG9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICBvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAgICAgLy8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuICAgICAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQ7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTtcbiAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG4gICAgICAgICQkLm9uX2Rlc3Ryb3kgPSAkJC5mcmFnbWVudCA9IG51bGw7XG4gICAgICAgICQkLmN0eCA9IFtdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG4gICAgaWYgKGNvbXBvbmVudC4kJC5kaXJ0eVswXSA9PT0gLTEpIHtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgICAgICBjb21wb25lbnQuJCQuZGlydHkuZmlsbCgwKTtcbiAgICB9XG4gICAgY29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gKDEgPDwgKGkgJSAzMSkpO1xufVxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIG5vdF9lcXVhbCwgcHJvcHMsIGFwcGVuZF9zdHlsZXMsIGRpcnR5ID0gWy0xXSkge1xuICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgIGN0eDogbnVsbCxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICBvbl9kaXNjb25uZWN0OiBbXSxcbiAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgIGNvbnRleHQ6IG5ldyBNYXAob3B0aW9ucy5jb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIGRpcnR5LFxuICAgICAgICBza2lwX2JvdW5kOiBmYWxzZSxcbiAgICAgICAgcm9vdDogb3B0aW9ucy50YXJnZXQgfHwgcGFyZW50X2NvbXBvbmVudC4kJC5yb290XG4gICAgfTtcbiAgICBhcHBlbmRfc3R5bGVzICYmIGFwcGVuZF9zdHlsZXMoJCQucm9vdCk7XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIG9wdGlvbnMucHJvcHMgfHwge30sIChpLCByZXQsIC4uLnJlc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuICAgICAgICAgICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAkJC5jdHhbaV0gPSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQkLnNraXBfYm91bmQgJiYgJCQuYm91bmRbaV0pXG4gICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pXG4gICAgICAgIDogW107XG4gICAgJCQudXBkYXRlKCk7XG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgLy8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG4gICAgJCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICBpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG4gICAgICAgICAgICBzdGFydF9oeWRyYXRpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5pbnRybylcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgICAgICBlbmRfaHlkcmF0aW5nKCk7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgfVxuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cbmxldCBTdmVsdGVFbGVtZW50O1xuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFN2ZWx0ZUVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBjb25zdCB7IG9uX21vdW50IH0gPSB0aGlzLiQkO1xuICAgICAgICAgICAgdGhpcy4kJC5vbl9kaXNjb25uZWN0ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4kJC5zbG90dGVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBydW5fYWxsKHRoaXMuJCQub25fZGlzY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnQge1xuICAgICRkZXN0cm95KCkge1xuICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgfVxuICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaF9kZXYodHlwZSwgZGV0YWlsKSB7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQodHlwZSwgT2JqZWN0LmFzc2lnbih7IHZlcnNpb246ICczLjQ5LjAnIH0sIGRldGFpbCksIHsgYnViYmxlczogdHJ1ZSB9KSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfaHlkcmF0aW9uX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlIH0pO1xuICAgIGFwcGVuZF9oeWRyYXRpb24odGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9oeWRyYXRpb25fZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydF9oeWRyYXRpb24odGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2Rldihub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmUnLCB7IG5vZGUgfSk7XG4gICAgZGV0YWNoKG5vZGUpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2JldHdlZW5fZGV2KGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9iZWZvcmVfZGV2KGFmdGVyKSB7XG4gICAgd2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGFmdGVyLnByZXZpb3VzU2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2FmdGVyX2RldihiZWZvcmUpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsaXN0ZW5fZGV2KG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zLCBoYXNfcHJldmVudF9kZWZhdWx0LCBoYXNfc3RvcF9wcm9wYWdhdGlvbikge1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IG9wdGlvbnMgPT09IHRydWUgPyBbJ2NhcHR1cmUnXSA6IG9wdGlvbnMgPyBBcnJheS5mcm9tKE9iamVjdC5rZXlzKG9wdGlvbnMpKSA6IFtdO1xuICAgIGlmIChoYXNfcHJldmVudF9kZWZhdWx0KVxuICAgICAgICBtb2RpZmllcnMucHVzaCgncHJldmVudERlZmF1bHQnKTtcbiAgICBpZiAoaGFzX3N0b3BfcHJvcGFnYXRpb24pXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdzdG9wUHJvcGFnYXRpb24nKTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUFkZEV2ZW50TGlzdGVuZXInLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgY29uc3QgZGlzcG9zZSA9IGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01SZW1vdmVFdmVudExpc3RlbmVyJywgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgICAgICBkaXNwb3NlKCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHJfZGV2KG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZUF0dHJpYnV0ZScsIHsgbm9kZSwgYXR0cmlidXRlIH0pO1xuICAgIGVsc2VcbiAgICAgICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXRBdHRyaWJ1dGUnLCB7IG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBwcm9wX2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0UHJvcGVydHknLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIGRhdGFzZXRfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGUuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldERhdGFzZXQnLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhX2Rldih0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC53aG9sZVRleHQgPT09IGRhdGEpXG4gICAgICAgIHJldHVybjtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldERhdGEnLCB7IG5vZGU6IHRleHQsIGRhdGEgfSk7XG4gICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQoYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdzdHJpbmcnICYmICEoYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIGFyZykpIHtcbiAgICAgICAgbGV0IG1zZyA9ICd7I2VhY2h9IG9ubHkgaXRlcmF0ZXMgb3ZlciBhcnJheS1saWtlIG9iamVjdHMuJztcbiAgICAgICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgYXJnICYmIFN5bWJvbC5pdGVyYXRvciBpbiBhcmcpIHtcbiAgICAgICAgICAgIG1zZyArPSAnIFlvdSBjYW4gdXNlIGEgc3ByZWFkIHRvIGNvbnZlcnQgdGhpcyBpdGVyYWJsZSBpbnRvIGFuIGFycmF5Lic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfc2xvdHMobmFtZSwgc2xvdCwga2V5cykge1xuICAgIGZvciAoY29uc3Qgc2xvdF9rZXkgb2YgT2JqZWN0LmtleXMoc2xvdCkpIHtcbiAgICAgICAgaWYgKCF+a2V5cy5pbmRleE9mKHNsb3Rfa2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGA8JHtuYW1lfT4gcmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBzbG90IFwiJHtzbG90X2tleX1cIi5gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2R5bmFtaWNfZWxlbWVudCh0YWcpIHtcbiAgICBjb25zdCBpc19zdHJpbmcgPSB0eXBlb2YgdGFnID09PSAnc3RyaW5nJztcbiAgICBpZiAodGFnICYmICFpc19zdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc8c3ZlbHRlOmVsZW1lbnQ+IGV4cGVjdHMgXCJ0aGlzXCIgYXR0cmlidXRlIHRvIGJlIGEgc3RyaW5nLicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3ZvaWRfZHluYW1pY19lbGVtZW50KHRhZykge1xuICAgIGlmICh0YWcgJiYgaXNfdm9pZCh0YWcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgPHN2ZWx0ZTplbGVtZW50IHRoaXM9XCIke3RhZ31cIj4gaXMgc2VsZi1jbG9zaW5nIGFuZCBjYW5ub3QgaGF2ZSBjb250ZW50LmApO1xuICAgIH1cbn1cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMgd2l0aCBzb21lIG1pbm9yIGRldi1lbmhhbmNlbWVudHMuIFVzZWQgd2hlbiBkZXY9dHJ1ZS5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50RGV2IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAoIW9wdGlvbnMudGFyZ2V0ICYmICFvcHRpb25zLiQkaW5saW5lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ3RhcmdldCcgaXMgYSByZXF1aXJlZCBvcHRpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLiRkZXN0cm95KCk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvbXBvbmVudCB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH07XG4gICAgfVxuICAgICRjYXB0dXJlX3N0YXRlKCkgeyB9XG4gICAgJGluamVjdF9zdGF0ZSgpIHsgfVxufVxuLyoqXG4gKiBCYXNlIGNsYXNzIHRvIGNyZWF0ZSBzdHJvbmdseSB0eXBlZCBTdmVsdGUgY29tcG9uZW50cy5cbiAqIFRoaXMgb25seSBleGlzdHMgZm9yIHR5cGluZyBwdXJwb3NlcyBhbmQgc2hvdWxkIGJlIHVzZWQgaW4gYC5kLnRzYCBmaWxlcy5cbiAqXG4gKiAjIyMgRXhhbXBsZTpcbiAqXG4gKiBZb3UgaGF2ZSBjb21wb25lbnQgbGlicmFyeSBvbiBucG0gY2FsbGVkIGBjb21wb25lbnQtbGlicmFyeWAsIGZyb20gd2hpY2hcbiAqIHlvdSBleHBvcnQgYSBjb21wb25lbnQgY2FsbGVkIGBNeUNvbXBvbmVudGAuIEZvciBTdmVsdGUrVHlwZVNjcmlwdCB1c2VycyxcbiAqIHlvdSB3YW50IHRvIHByb3ZpZGUgdHlwaW5ncy4gVGhlcmVmb3JlIHlvdSBjcmVhdGUgYSBgaW5kZXguZC50c2A6XG4gKiBgYGB0c1xuICogaW1wb3J0IHsgU3ZlbHRlQ29tcG9uZW50VHlwZWQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gKiBleHBvcnQgY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnRUeXBlZDx7Zm9vOiBzdHJpbmd9PiB7fVxuICogYGBgXG4gKiBUeXBpbmcgdGhpcyBtYWtlcyBpdCBwb3NzaWJsZSBmb3IgSURFcyBsaWtlIFZTIENvZGUgd2l0aCB0aGUgU3ZlbHRlIGV4dGVuc2lvblxuICogdG8gcHJvdmlkZSBpbnRlbGxpc2Vuc2UgYW5kIHRvIHVzZSB0aGUgY29tcG9uZW50IGxpa2UgdGhpcyBpbiBhIFN2ZWx0ZSBmaWxlXG4gKiB3aXRoIFR5cGVTY3JpcHQ6XG4gKiBgYGBzdmVsdGVcbiAqIDxzY3JpcHQgbGFuZz1cInRzXCI+XG4gKiBcdGltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSBcImNvbXBvbmVudC1saWJyYXJ5XCI7XG4gKiA8L3NjcmlwdD5cbiAqIDxNeUNvbXBvbmVudCBmb289eydiYXInfSAvPlxuICogYGBgXG4gKlxuICogIyMjIyBXaHkgbm90IG1ha2UgdGhpcyBwYXJ0IG9mIGBTdmVsdGVDb21wb25lbnQoRGV2KWA/XG4gKiBCZWNhdXNlXG4gKiBgYGB0c1xuICogY2xhc3MgQVN1YmNsYXNzT2ZTdmVsdGVDb21wb25lbnQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQ8e2Zvbzogc3RyaW5nfT4ge31cbiAqIGNvbnN0IGNvbXBvbmVudDogdHlwZW9mIFN2ZWx0ZUNvbXBvbmVudCA9IEFTdWJjbGFzc09mU3ZlbHRlQ29tcG9uZW50O1xuICogYGBgXG4gKiB3aWxsIHRocm93IGEgdHlwZSBlcnJvciwgc28gd2UgbmVlZCB0byBzZXBhcmF0ZSB0aGUgbW9yZSBzdHJpY3RseSB0eXBlZCBjbGFzcy5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50VHlwZWQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnREZXYge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxufVxuZnVuY3Rpb24gbG9vcF9ndWFyZCh0aW1lb3V0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3AgZGV0ZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCB7IEh0bWxUYWcsIEh0bWxUYWdIeWRyYXRpb24sIFN2ZWx0ZUNvbXBvbmVudCwgU3ZlbHRlQ29tcG9uZW50RGV2LCBTdmVsdGVDb21wb25lbnRUeXBlZCwgU3ZlbHRlRWxlbWVudCwgYWN0aW9uX2Rlc3Ryb3llciwgYWRkX2F0dHJpYnV0ZSwgYWRkX2NsYXNzZXMsIGFkZF9mbHVzaF9jYWxsYmFjaywgYWRkX2xvY2F0aW9uLCBhZGRfcmVuZGVyX2NhbGxiYWNrLCBhZGRfcmVzaXplX2xpc3RlbmVyLCBhZGRfc3R5bGVzLCBhZGRfdHJhbnNmb3JtLCBhZnRlclVwZGF0ZSwgYXBwZW5kLCBhcHBlbmRfZGV2LCBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldCwgYXBwZW5kX2h5ZHJhdGlvbiwgYXBwZW5kX2h5ZHJhdGlvbl9kZXYsIGFwcGVuZF9zdHlsZXMsIGFzc2lnbiwgYXR0ciwgYXR0cl9kZXYsIGF0dHJpYnV0ZV90b19vYmplY3QsIGJlZm9yZVVwZGF0ZSwgYmluZCwgYmluZGluZ19jYWxsYmFja3MsIGJsYW5rX29iamVjdCwgYnViYmxlLCBjaGVja19vdXRyb3MsIGNoaWxkcmVuLCBjbGFpbV9jb21wb25lbnQsIGNsYWltX2VsZW1lbnQsIGNsYWltX2h0bWxfdGFnLCBjbGFpbV9zcGFjZSwgY2xhaW1fc3ZnX2VsZW1lbnQsIGNsYWltX3RleHQsIGNsZWFyX2xvb3BzLCBjb21wb25lbnRfc3Vic2NyaWJlLCBjb21wdXRlX3Jlc3RfcHJvcHMsIGNvbXB1dGVfc2xvdHMsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgY3JlYXRlX2FuaW1hdGlvbiwgY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbiwgY3JlYXRlX2NvbXBvbmVudCwgY3JlYXRlX2luX3RyYW5zaXRpb24sIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbiwgY3JlYXRlX3Nsb3QsIGNyZWF0ZV9zc3JfY29tcG9uZW50LCBjdXJyZW50X2NvbXBvbmVudCwgY3VzdG9tX2V2ZW50LCBkYXRhc2V0X2RldiwgZGVidWcsIGRlc3Ryb3lfYmxvY2ssIGRlc3Ryb3lfY29tcG9uZW50LCBkZXN0cm95X2VhY2gsIGRldGFjaCwgZGV0YWNoX2FmdGVyX2RldiwgZGV0YWNoX2JlZm9yZV9kZXYsIGRldGFjaF9iZXR3ZWVuX2RldiwgZGV0YWNoX2RldiwgZGlydHlfY29tcG9uZW50cywgZGlzcGF0Y2hfZGV2LCBlYWNoLCBlbGVtZW50LCBlbGVtZW50X2lzLCBlbXB0eSwgZW5kX2h5ZHJhdGluZywgZXNjYXBlLCBlc2NhcGVfYXR0cmlidXRlX3ZhbHVlLCBlc2NhcGVfb2JqZWN0LCBleGNsdWRlX2ludGVybmFsX3Byb3BzLCBmaXhfYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIGZpeF9wb3NpdGlvbiwgZmx1c2gsIGdldEFsbENvbnRleHRzLCBnZXRDb250ZXh0LCBnZXRfYWxsX2RpcnR5X2Zyb21fc2NvcGUsIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlLCBnZXRfY3VycmVudF9jb21wb25lbnQsIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMsIGdldF9yb290X2Zvcl9zdHlsZSwgZ2V0X3Nsb3RfY2hhbmdlcywgZ2V0X3NwcmVhZF9vYmplY3QsIGdldF9zcHJlYWRfdXBkYXRlLCBnZXRfc3RvcmVfdmFsdWUsIGdsb2JhbHMsIGdyb3VwX291dHJvcywgaGFuZGxlX3Byb21pc2UsIGhhc0NvbnRleHQsIGhhc19wcm9wLCBpZGVudGl0eSwgaW5pdCwgaW5zZXJ0LCBpbnNlcnRfZGV2LCBpbnNlcnRfaHlkcmF0aW9uLCBpbnNlcnRfaHlkcmF0aW9uX2RldiwgaW50cm9zLCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciwgaXNfY2xpZW50LCBpc19jcm9zc29yaWdpbiwgaXNfZW1wdHksIGlzX2Z1bmN0aW9uLCBpc19wcm9taXNlLCBpc192b2lkLCBsaXN0ZW4sIGxpc3Rlbl9kZXYsIGxvb3AsIGxvb3BfZ3VhcmQsIG1lcmdlX3Nzcl9zdHlsZXMsIG1pc3NpbmdfY29tcG9uZW50LCBtb3VudF9jb21wb25lbnQsIG5vb3AsIG5vdF9lcXVhbCwgbm93LCBudWxsX3RvX2VtcHR5LCBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzLCBvbkRlc3Ryb3ksIG9uTW91bnQsIG9uY2UsIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBwcmV2ZW50X2RlZmF1bHQsIHByb3BfZGV2LCBxdWVyeV9zZWxlY3Rvcl9hbGwsIHJhZiwgcnVuLCBydW5fYWxsLCBzYWZlX25vdF9lcXVhbCwgc2NoZWR1bGVfdXBkYXRlLCBzZWxlY3RfbXVsdGlwbGVfdmFsdWUsIHNlbGVjdF9vcHRpb24sIHNlbGVjdF9vcHRpb25zLCBzZWxlY3RfdmFsdWUsIHNlbGYsIHNldENvbnRleHQsIHNldF9hdHRyaWJ1dGVzLCBzZXRfY3VycmVudF9jb21wb25lbnQsIHNldF9jdXN0b21fZWxlbWVudF9kYXRhLCBzZXRfZGF0YSwgc2V0X2RhdGFfZGV2LCBzZXRfaW5wdXRfdHlwZSwgc2V0X2lucHV0X3ZhbHVlLCBzZXRfbm93LCBzZXRfcmFmLCBzZXRfc3RvcmVfdmFsdWUsIHNldF9zdHlsZSwgc2V0X3N2Z19hdHRyaWJ1dGVzLCBzcGFjZSwgc3ByZWFkLCBzcmNfdXJsX2VxdWFsLCBzdGFydF9oeWRyYXRpbmcsIHN0b3BfcHJvcGFnYXRpb24sIHN1YnNjcmliZSwgc3ZnX2VsZW1lbnQsIHRleHQsIHRpY2ssIHRpbWVfcmFuZ2VzX3RvX2FycmF5LCB0b19udW1iZXIsIHRvZ2dsZV9jbGFzcywgdHJhbnNpdGlvbl9pbiwgdHJhbnNpdGlvbl9vdXQsIHRydXN0ZWQsIHVwZGF0ZV9hd2FpdF9ibG9ja19icmFuY2gsIHVwZGF0ZV9rZXllZF9lYWNoLCB1cGRhdGVfc2xvdCwgdXBkYXRlX3Nsb3RfYmFzZSwgdmFsaWRhdGVfY29tcG9uZW50LCB2YWxpZGF0ZV9keW5hbWljX2VsZW1lbnQsIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQsIHZhbGlkYXRlX2VhY2hfa2V5cywgdmFsaWRhdGVfc2xvdHMsIHZhbGlkYXRlX3N0b3JlLCB2YWxpZGF0ZV92b2lkX2R5bmFtaWNfZWxlbWVudCwgeGxpbmtfYXR0ciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgJy4vYXBwLmNzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnN2ZWx0ZSc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoe1xuICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXSwibmFtZXMiOlsic3ZlbHRlSW5zZXJ0IiwiRXJyb3IiLCJ3aW5kb3ciLCJfX1NWRUxURV9ITVJfQURBUFRFUiIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJ0aGlzIiwiaW5zZXJ0aW9uUG9pbnQiLCJhZnRlck1vdW50IiwiYmluZCIsInJlcmVuZGVyIiwiX25vT3ZlcmxheSIsImhvdE9wdGlvbnMiLCJub092ZXJsYXkiLCJnZXRFcnJvck92ZXJsYXkiLCJub0NyZWF0ZSIsImVycm9yT3ZlcmxheSIsImVycm9ycyIsImNvbXBpbGVFcnJvciIsInN0eWxlIiwic2V0VGl0bGUiLCJ0aXRsZSIsIm92ZXJsYXkiLCJoMSIsInRleHRDb250ZW50Iiwic2hvdyIsImVsIiwicGFyZW50Tm9kZSIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidXBkYXRlIiwiaW5uZXJIVE1MIiwiZXJyb3JFbCIsInJlbmRlckVycm9yIiwibGVuZ3RoIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJyZW1vdmUiLCJoaWRlIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImgyIiwicHJlIiwic2VjdGlvbiIsImNyZWF0ZU92ZXJsYXkiLCJhZGRFcnJvciIsImVycm9yIiwic3RhY2siLCJwdXNoIiwiY2xlYXJFcnJvcnMiLCJlbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJzZXRDb21waWxlRXJyb3IiLCJyZW5kZXJDb21waWxlRXJyb3IiLCJkaXNwb3NlIiwiY2xlYXJFcnJvciIsInRhcmdldCIsImFuY2hvciIsImRlYnVnTmFtZSIsImNyZWF0ZUNvbW1lbnQiLCJyZWZyZXNoQ29tcG9uZW50IiwiZXJyIiwibW9kdWxlTmFtZSIsInRyZWVPclN0ZXAiLCJub25lIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwiZW1wdHkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsImNoaWxkTWF0Y2hlciIsIm5vZGUiLCJmaW5kIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjaGlsZEZpcnN0IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJmaWx0ZXIiLCJjaGlsZHJlbiIsImZyb20iLCJFbnRlck5vZGUiLCJwYXJlbnQiLCJkYXR1bSIsIm93bmVyRG9jdW1lbnQiLCJuYW1lc3BhY2VVUkkiLCJfbmV4dCIsIl9wYXJlbnQiLCJfX2RhdGFfXyIsImJpbmRJbmRleCIsImdyb3VwIiwiZW50ZXIiLCJleGl0IiwiZGF0YSIsImkiLCJncm91cExlbmd0aCIsImRhdGFMZW5ndGgiLCJiaW5kS2V5Iiwia2V5Iiwia2V5VmFsdWUiLCJub2RlQnlLZXlWYWx1ZSIsIk1hcCIsImtleVZhbHVlcyIsImNhbGwiLCJoYXMiLCJzZXQiLCJnZXQiLCJkZWxldGUiLCJhcnJheWxpa2UiLCJhc2NlbmRpbmciLCJhIiwiYiIsIk5hTiIsImNoaWxkIiwiaW5zZXJ0QmVmb3JlIiwibmV4dCIsInhodG1sIiwic3ZnIiwieGxpbmsiLCJ4bWwiLCJ4bWxucyIsIm5hbWUiLCJwcmVmaXgiLCJpbmRleE9mIiwic2xpY2UiLCJuYW1lc3BhY2VzIiwiaGFzT3duUHJvcGVydHkiLCJzcGFjZSIsImxvY2FsIiwiYXR0clJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImF0dHJSZW1vdmVOUyIsImZ1bGxuYW1lIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJhdHRyQ29uc3RhbnQiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsImF0dHJDb25zdGFudE5TIiwic2V0QXR0cmlidXRlTlMiLCJhdHRyRnVuY3Rpb24iLCJ2IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJhdHRyRnVuY3Rpb25OUyIsImRlZmF1bHRWaWV3Iiwic3R5bGVSZW1vdmUiLCJyZW1vdmVQcm9wZXJ0eSIsInN0eWxlQ29uc3RhbnQiLCJwcmlvcml0eSIsInNldFByb3BlcnR5Iiwic3R5bGVGdW5jdGlvbiIsInN0eWxlVmFsdWUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInByb3BlcnR5UmVtb3ZlIiwicHJvcGVydHlDb25zdGFudCIsInByb3BlcnR5RnVuY3Rpb24iLCJjbGFzc0FycmF5Iiwic3RyaW5nIiwidHJpbSIsInNwbGl0IiwiY2xhc3NMaXN0IiwiQ2xhc3NMaXN0IiwiX25vZGUiLCJfbmFtZXMiLCJnZXRBdHRyaWJ1dGUiLCJjbGFzc2VkQWRkIiwibmFtZXMiLCJsaXN0IiwibiIsImFkZCIsImNsYXNzZWRSZW1vdmUiLCJjbGFzc2VkVHJ1ZSIsImNsYXNzZWRGYWxzZSIsImNsYXNzZWRGdW5jdGlvbiIsInRleHRSZW1vdmUiLCJ0ZXh0Q29uc3RhbnQiLCJ0ZXh0RnVuY3Rpb24iLCJodG1sUmVtb3ZlIiwiaHRtbENvbnN0YW50IiwiaHRtbEZ1bmN0aW9uIiwicmFpc2UiLCJuZXh0U2libGluZyIsImxvd2VyIiwicHJldmlvdXNTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImNyZWF0b3JJbmhlcml0IiwidXJpIiwiZG9jdW1lbnRFbGVtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRvckZpeGVkIiwibmFtZXNwYWNlIiwiY29uc3RhbnROdWxsIiwic2VsZWN0aW9uX2Nsb25lU2hhbGxvdyIsImNsb25lIiwiY2xvbmVOb2RlIiwic2VsZWN0aW9uX2Nsb25lRGVlcCIsIm9uUmVtb3ZlIiwidHlwZW5hbWUiLCJvbiIsIl9fb24iLCJvIiwiaiIsIm0iLCJ0eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwib3B0aW9ucyIsIm9uQWRkIiwiZXZlbnQiLCJjb250ZXh0TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hFdmVudCIsInBhcmFtcyIsIkN1c3RvbUV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsImRpc3BhdGNoQ29uc3RhbnQiLCJkaXNwYXRjaEZ1bmN0aW9uIiwiam9pbiIsInNwbGljZSIsImNvbnRhaW5zIiwicm9vdCIsIlNlbGVjdGlvbiIsImdyb3VwcyIsInBhcmVudHMiLCJfZ3JvdXBzIiwiX3BhcmVudHMiLCJzZWxlY3Rpb24iLCJzZWxlY3QiLCJzdWJncm91cHMiLCJzdWJub2RlIiwic3ViZ3JvdXAiLCJzZWxlY3RBbGwiLCJ4IiwiaXNBcnJheSIsImFycmF5QWxsIiwic2VsZWN0b3JBbGwiLCJzZWxlY3RDaGlsZCIsIm1hdGNoIiwiY2hpbGRGaW5kIiwic2VsZWN0Q2hpbGRyZW4iLCJjaGlsZHJlbkZpbHRlciIsIm1hdGNoZXIiLCJlbnRlckdyb3VwIiwidXBkYXRlR3JvdXAiLCJwcmV2aW91cyIsImkwIiwiaTEiLCJfZW50ZXIiLCJfZXhpdCIsIm1hcCIsInNwYXJzZSIsIm9uZW50ZXIiLCJvbnVwZGF0ZSIsIm9uZXhpdCIsImFwcGVuZCIsIm1lcmdlIiwib3JkZXIiLCJjb250ZXh0IiwiZ3JvdXBzMCIsImdyb3VwczEiLCJtMCIsIm0xIiwiTWF0aCIsIm1pbiIsIm1lcmdlcyIsImdyb3VwMCIsImdyb3VwMSIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwic29ydCIsImNvbXBhcmUiLCJjb21wYXJlTm9kZSIsInNvcnRncm91cHMiLCJzb3J0Z3JvdXAiLCJjYWxsYmFjayIsIm5vZGVzIiwic2l6ZSIsImVhY2giLCJhdHRyIiwiZ2V0QXR0cmlidXRlTlMiLCJwcm9wZXJ0eSIsImNsYXNzZWQiLCJ0ZXh0IiwiaHRtbCIsImNyZWF0ZSIsImNyZWF0b3IiLCJpbnNlcnQiLCJiZWZvcmUiLCJkZWVwIiwidCIsInR5cGVuYW1lcyIsInBhcnNlVHlwZW5hbWVzIiwiZGlzcGF0Y2giLCJTeW1ib2wiLCJpdGVyYXRvciIsIm5vb3AiLCJfIiwidGVzdCIsIkRpc3BhdGNoIiwiYyIsImNvbmNhdCIsInR5cGVzIiwiVCIsImNvcHkiLCJ0aGF0IiwiYXJncyIsInRhc2tIZWFkIiwidGFza1RhaWwiLCJ0aW1lb3V0IiwiaW50ZXJ2YWwiLCJwb2tlRGVsYXkiLCJjbG9ja0xhc3QiLCJjbG9ja05vdyIsImNsb2NrU2tldyIsImNsb2NrIiwicGVyZm9ybWFuY2UiLCJub3ciLCJEYXRlIiwic2V0RnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmIiwic2V0VGltZW91dCIsImNsZWFyTm93IiwiVGltZXIiLCJfY2FsbCIsIl90aW1lIiwidGltZXIiLCJkZWxheSIsInRpbWUiLCJyZXN0YXJ0Iiwid2FrZSIsImUiLCJ1bmRlZmluZWQiLCJ0aW1lckZsdXNoIiwidDAiLCJ0MiIsInQxIiwiSW5maW5pdHkiLCJzbGVlcCIsIm5hcCIsInBva2UiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJlbGFwc2VkIiwic3RvcCIsIlR5cGVFcnJvciIsImVtcHR5T24iLCJlbXB0eVR3ZWVuIiwiQ1JFQVRFRCIsIlNUQVJURUQiLCJpZCIsImluZGV4IiwidGltaW5nIiwic2NoZWR1bGVzIiwiX190cmFuc2l0aW9uIiwic2VsZiIsInR3ZWVuIiwic3RhcnQiLCJzdGF0ZSIsInRpY2siLCJkdXJhdGlvbiIsImVhc2UiLCJpbml0Iiwic2NoZWR1bGUiLCJzdmdOb2RlIiwiZGVncmVlcyIsIlBJIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJyb3RhdGUiLCJza2V3WCIsInNjYWxlWCIsInNjYWxlWSIsImQiLCJzcXJ0IiwiYXRhbjIiLCJhdGFuIiwiaW50ZXJwb2xhdGVUcmFuc2Zvcm0iLCJwYXJzZSIsInB4Q29tbWEiLCJweFBhcmVuIiwiZGVnUGFyZW4iLCJwb3AiLCJzIiwicSIsInhhIiwieWEiLCJ4YiIsInliIiwibnVtYmVyIiwidHJhbnNsYXRlIiwic2NhbGUiLCJpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcyIsIkRPTU1hdHJpeCIsIldlYktpdENTU01hdHJpeCIsImlzSWRlbnRpdHkiLCJkZWNvbXBvc2UiLCJpbnRlcnBvbGF0ZVRyYW5zZm9ybVN2ZyIsInRyYW5zZm9ybSIsImJhc2VWYWwiLCJjb25zb2xpZGF0ZSIsIm1hdHJpeCIsInR3ZWVuUmVtb3ZlIiwidHdlZW4wIiwidHdlZW4xIiwidHdlZW5GdW5jdGlvbiIsInR3ZWVuVmFsdWUiLCJ0cmFuc2l0aW9uIiwiX2lkIiwiZmFjdG9yeSIsImV4dGVuZCIsImRlZmluaXRpb24iLCJPYmplY3QiLCJDb2xvciIsImRhcmtlciIsImJyaWdodGVyIiwicmVJIiwicmVOIiwicmVQIiwicmVIZXgiLCJyZVJnYkludGVnZXIiLCJSZWdFeHAiLCJyZVJnYlBlcmNlbnQiLCJyZVJnYmFJbnRlZ2VyIiwicmVSZ2JhUGVyY2VudCIsInJlSHNsUGVyY2VudCIsInJlSHNsYVBlcmNlbnQiLCJuYW1lZCIsImFsaWNlYmx1ZSIsImFudGlxdWV3aGl0ZSIsImFxdWEiLCJhcXVhbWFyaW5lIiwiYXp1cmUiLCJiZWlnZSIsImJpc3F1ZSIsImJsYWNrIiwiYmxhbmNoZWRhbG1vbmQiLCJibHVlIiwiYmx1ZXZpb2xldCIsImJyb3duIiwiYnVybHl3b29kIiwiY2FkZXRibHVlIiwiY2hhcnRyZXVzZSIsImNob2NvbGF0ZSIsImNvcmFsIiwiY29ybmZsb3dlcmJsdWUiLCJjb3Juc2lsayIsImNyaW1zb24iLCJjeWFuIiwiZGFya2JsdWUiLCJkYXJrY3lhbiIsImRhcmtnb2xkZW5yb2QiLCJkYXJrZ3JheSIsImRhcmtncmVlbiIsImRhcmtncmV5IiwiZGFya2toYWtpIiwiZGFya21hZ2VudGEiLCJkYXJrb2xpdmVncmVlbiIsImRhcmtvcmFuZ2UiLCJkYXJrb3JjaGlkIiwiZGFya3JlZCIsImRhcmtzYWxtb24iLCJkYXJrc2VhZ3JlZW4iLCJkYXJrc2xhdGVibHVlIiwiZGFya3NsYXRlZ3JheSIsImRhcmtzbGF0ZWdyZXkiLCJkYXJrdHVycXVvaXNlIiwiZGFya3Zpb2xldCIsImRlZXBwaW5rIiwiZGVlcHNreWJsdWUiLCJkaW1ncmF5IiwiZGltZ3JleSIsImRvZGdlcmJsdWUiLCJmaXJlYnJpY2siLCJmbG9yYWx3aGl0ZSIsImZvcmVzdGdyZWVuIiwiZnVjaHNpYSIsImdhaW5zYm9ybyIsImdob3N0d2hpdGUiLCJnb2xkIiwiZ29sZGVucm9kIiwiZ3JheSIsImdyZWVuIiwiZ3JlZW55ZWxsb3ciLCJncmV5IiwiaG9uZXlkZXciLCJob3RwaW5rIiwiaW5kaWFucmVkIiwiaW5kaWdvIiwiaXZvcnkiLCJraGFraSIsImxhdmVuZGVyIiwibGF2ZW5kZXJibHVzaCIsImxhd25ncmVlbiIsImxlbW9uY2hpZmZvbiIsImxpZ2h0Ymx1ZSIsImxpZ2h0Y29yYWwiLCJsaWdodGN5YW4iLCJsaWdodGdvbGRlbnJvZHllbGxvdyIsImxpZ2h0Z3JheSIsImxpZ2h0Z3JlZW4iLCJsaWdodGdyZXkiLCJsaWdodHBpbmsiLCJsaWdodHNhbG1vbiIsImxpZ2h0c2VhZ3JlZW4iLCJsaWdodHNreWJsdWUiLCJsaWdodHNsYXRlZ3JheSIsImxpZ2h0c2xhdGVncmV5IiwibGlnaHRzdGVlbGJsdWUiLCJsaWdodHllbGxvdyIsImxpbWUiLCJsaW1lZ3JlZW4iLCJsaW5lbiIsIm1hZ2VudGEiLCJtYXJvb24iLCJtZWRpdW1hcXVhbWFyaW5lIiwibWVkaXVtYmx1ZSIsIm1lZGl1bW9yY2hpZCIsIm1lZGl1bXB1cnBsZSIsIm1lZGl1bXNlYWdyZWVuIiwibWVkaXVtc2xhdGVibHVlIiwibWVkaXVtc3ByaW5nZ3JlZW4iLCJtZWRpdW10dXJxdW9pc2UiLCJtZWRpdW12aW9sZXRyZWQiLCJtaWRuaWdodGJsdWUiLCJtaW50Y3JlYW0iLCJtaXN0eXJvc2UiLCJtb2NjYXNpbiIsIm5hdmFqb3doaXRlIiwibmF2eSIsIm9sZGxhY2UiLCJvbGl2ZSIsIm9saXZlZHJhYiIsIm9yYW5nZSIsIm9yYW5nZXJlZCIsIm9yY2hpZCIsInBhbGVnb2xkZW5yb2QiLCJwYWxlZ3JlZW4iLCJwYWxldHVycXVvaXNlIiwicGFsZXZpb2xldHJlZCIsInBhcGF5YXdoaXAiLCJwZWFjaHB1ZmYiLCJwZXJ1IiwicGluayIsInBsdW0iLCJwb3dkZXJibHVlIiwicHVycGxlIiwicmViZWNjYXB1cnBsZSIsInJlZCIsInJvc3licm93biIsInJveWFsYmx1ZSIsInNhZGRsZWJyb3duIiwic2FsbW9uIiwic2FuZHlicm93biIsInNlYWdyZWVuIiwic2Vhc2hlbGwiLCJzaWVubmEiLCJzaWx2ZXIiLCJza3libHVlIiwic2xhdGVibHVlIiwic2xhdGVncmF5Iiwic2xhdGVncmV5Iiwic25vdyIsInNwcmluZ2dyZWVuIiwic3RlZWxibHVlIiwidGFuIiwidGVhbCIsInRoaXN0bGUiLCJ0b21hdG8iLCJ0dXJxdW9pc2UiLCJ2aW9sZXQiLCJ3aGVhdCIsIndoaXRlIiwid2hpdGVzbW9rZSIsInllbGxvdyIsInllbGxvd2dyZWVuIiwiY29sb3JfZm9ybWF0SGV4IiwicmdiIiwiZm9ybWF0SGV4IiwiY29sb3JfZm9ybWF0UmdiIiwiZm9ybWF0UmdiIiwiY29sb3IiLCJmb3JtYXQiLCJsIiwidG9Mb3dlckNhc2UiLCJleGVjIiwicGFyc2VJbnQiLCJyZ2JuIiwiUmdiIiwicmdiYSIsImhzbGEiLCJyIiwiZyIsIm9wYWNpdHkiLCJyZ2JfZm9ybWF0SGV4IiwiaGV4IiwicmdiX2Zvcm1hdFJnYiIsImNsYW1wYSIsImNsYW1waSIsImlzTmFOIiwibWF4Iiwicm91bmQiLCJ0b1N0cmluZyIsImgiLCJIc2wiLCJoc2xDb252ZXJ0IiwiY2xhbXBoIiwiY2xhbXB0IiwiaHNsMnJnYiIsIm0yIiwiYmFzaXMiLCJ2MCIsInYxIiwidjIiLCJ2MyIsInQzIiwiY2hhbm5lbHMiLCJhc3NpZ24iLCJkaXNwbGF5YWJsZSIsImZvcm1hdEhleDgiLCJmb3JtYXRIc2wiLCJrIiwicG93IiwiY2xhbXAiLCJub2dhbW1hIiwibGluZWFyIiwicmdiR2FtbWEiLCJ5IiwiZXhwb25lbnRpYWwiLCJnYW1tYSIsImVuZCIsInJnYlNwbGluZSIsInNwbGluZSIsImNvbG9ycyIsInZhbHVlcyIsImZsb29yIiwicmVBIiwicmVCIiwic291cmNlIiwiYW0iLCJibSIsImJzIiwiYmkiLCJsYXN0SW5kZXgiLCJvbmUiLCJ6ZXJvIiwiaW50ZXJwb2xhdGUiLCJ2YWx1ZTEiLCJzdHJpbmcwMCIsImludGVycG9sYXRlMCIsInN0cmluZzEiLCJzdHJpbmcwIiwic3RyaW5nMTAiLCJhdHRyVHdlZW5OUyIsImF0dHJJbnRlcnBvbGF0ZU5TIiwiX3ZhbHVlIiwiYXR0clR3ZWVuIiwiYXR0ckludGVycG9sYXRlIiwiZGVsYXlGdW5jdGlvbiIsImRlbGF5Q29uc3RhbnQiLCJkdXJhdGlvbkZ1bmN0aW9uIiwiZHVyYXRpb25Db25zdGFudCIsIlRyYW5zaXRpb24iLCJfbmFtZSIsIm5ld0lkIiwic2VsZWN0aW9uX3Byb3RvdHlwZSIsImluaGVyaXQiLCJpZDAiLCJpZDEiLCJvbjAiLCJvbjEiLCJzaXQiLCJldmVyeSIsIm9uRnVuY3Rpb24iLCJzdHlsZVR3ZWVuIiwic3R5bGVOdWxsIiwibGlzdGVuZXIwIiwic3R5bGVNYXliZVJlbW92ZSIsInN0eWxlSW50ZXJwb2xhdGUiLCJ0ZXh0VHdlZW4iLCJ0ZXh0SW50ZXJwb2xhdGUiLCJyZW1vdmVGdW5jdGlvbiIsImVhc2VDb25zdGFudCIsImVhc2VWYXJ5aW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjYW5jZWwiLCJpbnRlcnJ1cHQiLCJkZWZhdWx0VGltaW5nIiwiYWN0aXZlIiwiYWJzIiwiY291bnQiLCJzdW0iLCJoaWVyYXJjaHkiLCJtYXBDaGlsZHJlbiIsIm9iamVjdENoaWxkcmVuIiwiY2hpbGRzIiwiTm9kZSIsImRlcHRoIiwiZWFjaEJlZm9yZSIsImNvbXB1dGVIZWlnaHQiLCJjb3B5RGF0YSIsImhlaWdodCIsImRlZmF1bHRTZXBhcmF0aW9uIiwibmV4dExlZnQiLCJuZXh0UmlnaHQiLCJtb3ZlU3VidHJlZSIsIndtIiwid3AiLCJzaGlmdCIsImNoYW5nZSIsInoiLCJuZXh0QW5jZXN0b3IiLCJ2aW0iLCJhbmNlc3RvciIsIlRyZWVOb2RlIiwiQSIsImVhY2hBZnRlciIsInBhdGgiLCJhTm9kZXMiLCJhbmNlc3RvcnMiLCJiTm9kZXMiLCJsZWFzdENvbW1vbkFuY2VzdG9yIiwiZGVzY2VuZGFudHMiLCJsZWF2ZXMiLCJsaW5rcyIsImN1cnJlbnQiLCJyZXZlcnNlIiwicG9pbnQiLCJhcHBseVgiLCJhcHBseVkiLCJpbnZlcnQiLCJsb2NhdGlvbiIsImludmVydFgiLCJpbnZlcnRZIiwicmVzY2FsZVgiLCJkb21haW4iLCJyYW5nZSIsInJlc2NhbGVZIiwibG9jYWxlQ29tcGFyZSIsInNlcGFyYXRpb24iLCJkeCIsImR5Iiwibm9kZVNpemUiLCJ0cmVlIiwidHJlZVJvb3QiLCJmaXJzdFdhbGsiLCJzZWNvbmRXYWxrIiwic2l6ZU5vZGUiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0eCIsImt4Iiwia3kiLCJzaWJsaW5ncyIsInciLCJleGVjdXRlU2hpZnRzIiwibWlkcG9pbnQiLCJ2aXAiLCJ2b3AiLCJ2b20iLCJzaXAiLCJzb3AiLCJzaW0iLCJzb20iLCJhcHBvcnRpb24iLCJ0cmVlTGF5b3V0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRQYWdlIiwic3RhdGVPckRpZmYiLCJyb3V0ZXNDb250YWluZXIiLCJyb3V0ZSIsInNuYXBzaG90TnVtYmVyIiwiZ2xvYmFsTGlzdGVuZXJzIiwiX19TVkVMVEVfSE1SIiwiZm4iLCJnbG9iYWxLZXkiLCJ1cGRhdGluZ0NvdW50Iiwibm90aWZ5U3RhcnQiLCJub3RpZnlFcnJvciIsInJlbG9hZCIsImVyclN0cmluZyIsIm5vdGlmeUVuZCIsImhvdFN0YXRlcyIsInJ1biIsImJsYW5rX29iamVjdCIsInJ1bl9hbGwiLCJmbnMiLCJpc19mdW5jdGlvbiIsInRoaW5nIiwic2FmZV9ub3RfZXF1YWwiLCJpc19lbXB0eSIsIm9iaiIsImtleXMiLCJTZXQiLCJjdXJyZW50X2NvbXBvbmVudCIsImlzX2h5ZHJhdGluZyIsInVwcGVyX2JvdW5kIiwibG93IiwiaGlnaCIsIm1pZCIsImFwcGVuZF9zdHlsZXMiLCJzdHlsZV9zaGVldF9pZCIsInN0eWxlcyIsImFwcGVuZF9zdHlsZXNfdG8iLCJnZXRSb290Tm9kZSIsImhvc3QiLCJnZXRfcm9vdF9mb3Jfc3R5bGUiLCJnZXRFbGVtZW50QnlJZCIsImhlYWQiLCJhcHBlbmRfc3R5bGVzaGVldCIsImluc2VydF9oeWRyYXRpb24iLCJoeWRyYXRlX2luaXQiLCJjaGlsZE5vZGVzIiwibm9kZU5hbWUiLCJteUNoaWxkcmVuIiwiY2xhaW1fb3JkZXIiLCJJbnQzMkFycmF5IiwicCIsImxvbmdlc3QiLCJzZXFMZW4iLCJpZHgiLCJuZXdMZW4iLCJsaXMiLCJ0b01vdmUiLCJsYXN0IiwiY3VyIiwiaW5pdF9oeWRyYXRlIiwiYWN0dWFsX2VuZF9jaGlsZCIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRfaHlkcmF0aW9uIiwiZGV0YWNoIiwic3ZnX2VsZW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImxpc3RlbiIsImhhbmRsZXIiLCJhdHRyaWJ1dGUiLCJzZXRfZGF0YSIsIndob2xlVGV4dCIsInRvZ2dsZV9jbGFzcyIsInRvZ2dsZSIsInNldF9jdXJyZW50X2NvbXBvbmVudCIsImNvbXBvbmVudCIsImdldF9jdXJyZW50X2NvbXBvbmVudCIsIm9uTW91bnQiLCIkJCIsIm9uX21vdW50IiwiY3JlYXRlRXZlbnREaXNwYXRjaGVyIiwiY2FsbGJhY2tzIiwiaW5pdEN1c3RvbUV2ZW50IiwiY3VzdG9tX2V2ZW50IiwiZGVmYXVsdFByZXZlbnRlZCIsImRpcnR5X2NvbXBvbmVudHMiLCJiaW5kaW5nX2NhbGxiYWNrcyIsInJlbmRlcl9jYWxsYmFja3MiLCJmbHVzaF9jYWxsYmFja3MiLCJyZXNvbHZlZF9wcm9taXNlIiwidXBkYXRlX3NjaGVkdWxlZCIsImFkZF9yZW5kZXJfY2FsbGJhY2siLCJzZWVuX2NhbGxiYWNrcyIsImZsdXNoaWR4IiwiZmx1c2giLCJzYXZlZF9jb21wb25lbnQiLCJjbGVhciIsImZyYWdtZW50IiwiYmVmb3JlX3VwZGF0ZSIsImRpcnR5IiwiY3R4IiwiYWZ0ZXJfdXBkYXRlIiwib3V0cm9pbmciLCJvdXRyb3MiLCJTdmVsdGVFbGVtZW50IiwiZ3JvdXBfb3V0cm9zIiwiY2hlY2tfb3V0cm9zIiwidHJhbnNpdGlvbl9pbiIsImJsb2NrIiwidHJhbnNpdGlvbl9vdXQiLCJjcmVhdGVfY29tcG9uZW50IiwibW91bnRfY29tcG9uZW50IiwiY3VzdG9tRWxlbWVudCIsIm9uX2Rlc3Ryb3kiLCJuZXdfb25fZGVzdHJveSIsImRlc3Ryb3lfY29tcG9uZW50IiwiZGV0YWNoaW5nIiwiY3JlYXRlX2ZyYWdtZW50Iiwibm90X2VxdWFsIiwicHJvcHMiLCJwYXJlbnRfY29tcG9uZW50IiwiYm91bmQiLCJvbl9kaXNjb25uZWN0Iiwic2tpcF9ib3VuZCIsInJlYWR5IiwicmV0IiwicmVzdCIsInRoZW4iLCJmaWxsIiwibWFrZV9kaXJ0eSIsImh5ZHJhdGUiLCJpbnRybyIsImdsb2JhbFRoaXMiLCJnbG9iYWwiLCJIVE1MRWxlbWVudCIsInN1cGVyIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImNvbm5lY3RlZENhbGxiYWNrIiwic2xvdHRlZCIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIl9vbGRWYWx1ZSIsIm5ld1ZhbHVlIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCIkZGVzdHJveSIsIiRvbiIsIiRzZXQiLCIkJHByb3BzIiwiJCRzZXQiLCJTdmVsdGVDb21wb25lbnQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJleHBvcnRzIiwibW9kdWxlIiwibG9hZGVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsIkZ1bmN0aW9uIiwiaG1kIiwicHJvcCJdLCJzb3VyY2VSb290IjoiIn0=
