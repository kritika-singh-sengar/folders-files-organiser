function H() {
}
function Z(l) {
  return l();
}
function oe() {
  return /* @__PURE__ */ Object.create(null);
}
function P(l) {
  l.forEach(Z);
}
function K(l) {
  return typeof l == "function";
}
function Le(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function ye(l) {
  return Object.keys(l).length === 0;
}
const ke = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in ke;
function f(l, e) {
  l.appendChild(e);
}
function y(l, e, t) {
  l.insertBefore(e, t || null);
}
function k(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function x(l, e) {
  for (let t = 0; t < l.length; t += 1)
    l[t] && l[t].d(e);
}
function u(l) {
  return document.createElement(l);
}
function I(l) {
  return document.createTextNode(l);
}
function E() {
  return I(" ");
}
function V() {
  return I("");
}
function A(l, e, t, n) {
  return l.addEventListener(e, t, n), () => l.removeEventListener(e, t, n);
}
function Fe(l) {
  return function(e) {
    return e.preventDefault(), l.call(this, e);
  };
}
function _(l, e, t) {
  t == null ? l.removeAttribute(e) : l.getAttribute(e) !== t && l.setAttribute(e, t);
}
function we(l) {
  return Array.from(l.childNodes);
}
function ee(l, e) {
  e = "" + e, l.data !== e && (l.data = e);
}
function ne(l, e) {
  l.value = e ?? "";
}
function S(l, e, t) {
  for (let n = 0; n < l.options.length; n += 1) {
    const r = l.options[n];
    if (r.__value === e) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (l.selectedIndex = -1);
}
function j(l) {
  const e = l.querySelector(":checked");
  return e && e.__value;
}
function Ee(l) {
  const e = {};
  for (const t of l)
    e[t.name] = t.value;
  return e;
}
let J;
function z(l) {
  J = l;
}
function Oe() {
  if (!J)
    throw new Error("Function called outside component initialization");
  return J;
}
function Te(l) {
  Oe().$$.on_mount.push(l);
}
const q = [], re = [];
let B = [];
const ie = [], Ce = /* @__PURE__ */ Promise.resolve();
let Q = !1;
function Re() {
  Q || (Q = !0, Ce.then(be));
}
function N(l) {
  B.push(l);
}
const Y = /* @__PURE__ */ new Set();
let U = 0;
function be() {
  if (U !== 0)
    return;
  const l = J;
  do {
    try {
      for (; U < q.length; ) {
        const e = q[U];
        U++, z(e), De(e.$$);
      }
    } catch (e) {
      throw q.length = 0, U = 0, e;
    }
    for (z(null), q.length = 0, U = 0; re.length; )
      re.pop()();
    for (let e = 0; e < B.length; e += 1) {
      const t = B[e];
      Y.has(t) || (Y.add(t), t());
    }
    B.length = 0;
  } while (q.length);
  for (; ie.length; )
    ie.pop()();
  Q = !1, Y.clear(), z(l);
}
function De(l) {
  if (l.fragment !== null) {
    l.update(), P(l.before_update);
    const e = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, e), l.after_update.forEach(N);
  }
}
function Se(l) {
  const e = [], t = [];
  B.forEach((n) => l.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), B = e;
}
const Ie = /* @__PURE__ */ new Set();
function He(l, e) {
  l && l.i && (Ie.delete(l), l.i(e));
}
const Ne = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...Ne];
function Ae(l, e, t, n) {
  const { fragment: r, after_update: o } = l.$$;
  r && r.m(e, t), n || N(() => {
    const i = l.$$.on_mount.map(Z).filter(K);
    l.$$.on_destroy ? l.$$.on_destroy.push(...i) : P(i), l.$$.on_mount = [];
  }), o.forEach(N);
}
function Me(l, e) {
  const t = l.$$;
  t.fragment !== null && (Se(t.after_update), P(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function je(l, e) {
  l.$$.dirty[0] === -1 && (q.push(l), Re(), l.$$.dirty.fill(0)), l.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ue(l, e, t, n, r, o, i, b = [-1]) {
  const d = J;
  z(l);
  const s = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: H,
    not_equal: r,
    bound: oe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: oe(),
    dirty: b,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  i && i(s.root);
  let c = !1;
  if (s.ctx = t ? t(l, e.props || {}, (p, a, ...g) => {
    const h = g.length ? g[0] : a;
    return s.ctx && r(s.ctx[p], s.ctx[p] = h) && (!s.skip_bound && s.bound[p] && s.bound[p](h), c && je(l, p)), a;
  }) : [], s.update(), c = !0, P(s.before_update), s.fragment = n ? n(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = we(e.target);
      s.fragment && s.fragment.l(p), p.forEach(k);
    } else
      s.fragment && s.fragment.c();
    e.intro && He(l.$$.fragment), Ae(l, e.target, e.anchor, e.customElement), be();
  }
  z(d);
}
let ge;
typeof HTMLElement == "function" && (ge = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: l } = this.$$;
    this.$$.on_disconnect = l.map(Z).filter(K);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(l, e, t) {
    this[l] = t;
  }
  disconnectedCallback() {
    P(this.$$.on_disconnect);
  }
  $destroy() {
    Me(this, 1), this.$destroy = H;
  }
  $on(l, e) {
    if (!K(e))
      return H;
    const t = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return t.push(e), () => {
      const n = t.indexOf(e);
      n !== -1 && t.splice(n, 1);
    };
  }
  $set(l) {
    this.$$set && !ye(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1);
  }
});
const G = {
  URL: "http://localhost:3000/folder",
  URL_For_LIST_OF_FOLDERS: "http://localhost:3000/folder?category=folder",
  URL_For_LIST_OF_ROOT_FOLDERS: "http://localhost:3000/folder?category=folder&level=root",
  URL_For_LIST_OF_CHILD_FOLDERS: "http://localhost:3000/folder?category=folder&level=child",
  URL_For_LIST_OF_SUB_CHILD_FOLDERS: "http://localhost:3000/folder?category=folder&level=sub-child"
}, D = {
  ROOT: "root",
  CHILD: "child",
  GRAND_CHILD: "grandChild"
}, $ = {
  FILE: "file",
  FOLDER: "folder"
}, W = "--", Ge = "Name already exist in system", le = "No Folder Exist";
function ce(l, e, t) {
  const n = l.slice();
  return n[15] = e[t], n;
}
function se(l, e, t) {
  const n = l.slice();
  return n[15] = e[t], n;
}
function ae(l, e, t) {
  const n = l.slice();
  return n[15] = e[t], n;
}
function fe(l) {
  let e, t, n, r, o, i, b, d, s, c, p, a, g, h, m, F, v = (
    /*data*/
    l[0].level && /*data*/
    l[0].level == D.CHILD && de(l)
  ), w = (
    /*data*/
    l[0].level && /*data*/
    l[0].level == D.GRAND_CHILD && _e(l)
  );
  return {
    c() {
      e = u("div"), t = u("div"), t.innerHTML = '<label for="level" class="form-label">Level <span class="color-red">*</span></label>', n = E(), r = u("div"), o = u("select"), i = u("option"), b = I("Root"), d = u("option"), s = I("Child"), c = u("option"), p = I("Grand-Child"), a = E(), v && v.c(), g = E(), w && w.c(), h = V(), _(t, "class", "col-30"), i.__value = D.ROOT, i.value = i.__value, d.__value = D.CHILD, d.value = d.__value, c.__value = D.GRAND_CHILD, c.value = c.__value, _(o, "name", "level"), _(o, "id", "level"), o.required = !0, /*data*/
      l[0].level === void 0 && N(() => (
        /*select_change_handler_1*/
        l[8].call(o)
      )), _(r, "class", "col-70"), _(e, "class", "row");
    },
    m(L, O) {
      y(L, e, O), f(e, t), f(e, n), f(e, r), f(r, o), f(o, i), f(i, b), f(o, d), f(d, s), f(o, c), f(c, p), S(
        o,
        /*data*/
        l[0].level,
        !0
      ), y(L, a, O), v && v.m(L, O), y(L, g, O), w && w.m(L, O), y(L, h, O), m || (F = A(
        o,
        "change",
        /*select_change_handler_1*/
        l[8]
      ), m = !0);
    },
    p(L, O) {
      O & /*data*/
      1 && S(
        o,
        /*data*/
        L[0].level
      ), /*data*/
      L[0].level && /*data*/
      L[0].level == D.CHILD ? v ? v.p(L, O) : (v = de(L), v.c(), v.m(g.parentNode, g)) : v && (v.d(1), v = null), /*data*/
      L[0].level && /*data*/
      L[0].level == D.GRAND_CHILD ? w ? w.p(L, O) : (w = _e(L), w.c(), w.m(h.parentNode, h)) : w && (w.d(1), w = null);
    },
    d(L) {
      L && k(e), L && k(a), v && v.d(L), L && k(g), w && w.d(L), L && k(h), m = !1, F();
    }
  };
}
function de(l) {
  let e;
  function t(o, i) {
    return (
      /*rootFolderList*/
      o[3].length > 0 ? Be : qe
    );
  }
  let n = t(l), r = n(l);
  return {
    c() {
      r.c(), e = V();
    },
    m(o, i) {
      r.m(o, i), y(o, e, i);
    },
    p(o, i) {
      n === (n = t(o)) && r ? r.p(o, i) : (r.d(1), r = n(o), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(o) {
      r.d(o), o && k(e);
    }
  };
}
function qe(l) {
  let e, t, n, r;
  return {
    c() {
      e = u("div"), t = u("div"), n = E(), r = u("div"), r.textContent = `* ${le}`, _(t, "class", "col-30"), _(r, "class", "col-70"), _(e, "class", "row color-red");
    },
    m(o, i) {
      y(o, e, i), f(e, t), f(e, n), f(e, r);
    },
    p: H,
    d(o) {
      o && k(e);
    }
  };
}
function Be(l) {
  let e, t, n, r, o, i, b, d = (
    /*rootFolderList*/
    l[3]
  ), s = [];
  for (let c = 0; c < d.length; c += 1)
    s[c] = ue(ae(l, d, c));
  return {
    c() {
      e = u("div"), t = u("div"), t.innerHTML = '<label for="parentFolder" class="form-label">List Of Folder <span class="color-red">*</span></label>', n = E(), r = u("div"), o = u("select");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      _(t, "class", "col-30"), _(o, "name", "parentFolder"), _(o, "id", "parentFolder"), o.required = !0, /*selectedFolder*/
      l[1] === void 0 && N(() => (
        /*select_change_handler_2*/
        l[9].call(o)
      )), _(r, "class", "col-70"), _(e, "class", "row");
    },
    m(c, p) {
      y(c, e, p), f(e, t), f(e, n), f(e, r), f(r, o);
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(o, null);
      S(
        o,
        /*selectedFolder*/
        l[1],
        !0
      ), i || (b = A(
        o,
        "change",
        /*select_change_handler_2*/
        l[9]
      ), i = !0);
    },
    p(c, p) {
      if (p & /*rootFolderList*/
      8) {
        d = /*rootFolderList*/
        c[3];
        let a;
        for (a = 0; a < d.length; a += 1) {
          const g = ae(c, d, a);
          s[a] ? s[a].p(g, p) : (s[a] = ue(g), s[a].c(), s[a].m(o, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = d.length;
      }
      p & /*selectedFolder, rootFolderList*/
      10 && S(
        o,
        /*selectedFolder*/
        c[1]
      );
    },
    d(c) {
      c && k(e), x(s, c), i = !1, b();
    }
  };
}
function ue(l) {
  let e, t = (
    /*folder*/
    l[15].name + ""
  ), n, r;
  return {
    c() {
      e = u("option"), n = I(t), e.__value = r = /*folder*/
      l[15], e.value = e.__value;
    },
    m(o, i) {
      y(o, e, i), f(e, n);
    },
    p(o, i) {
      i & /*rootFolderList*/
      8 && t !== (t = /*folder*/
      o[15].name + "") && ee(n, t), i & /*rootFolderList*/
      8 && r !== (r = /*folder*/
      o[15]) && (e.__value = r, e.value = e.__value);
    },
    d(o) {
      o && k(e);
    }
  };
}
function _e(l) {
  let e;
  function t(o, i) {
    return (
      /*foldersList*/
      o[2].length > 0 ? $e : Pe
    );
  }
  let n = t(l), r = n(l);
  return {
    c() {
      r.c(), e = V();
    },
    m(o, i) {
      r.m(o, i), y(o, e, i);
    },
    p(o, i) {
      n === (n = t(o)) && r ? r.p(o, i) : (r.d(1), r = n(o), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(o) {
      r.d(o), o && k(e);
    }
  };
}
function Pe(l) {
  let e, t, n, r;
  return {
    c() {
      e = u("div"), t = u("div"), n = E(), r = u("div"), r.textContent = `* ${le}`, _(t, "class", "col-30"), _(r, "class", "col-70"), _(e, "class", "row color-red");
    },
    m(o, i) {
      y(o, e, i), f(e, t), f(e, n), f(e, r);
    },
    p: H,
    d(o) {
      o && k(e);
    }
  };
}
function $e(l) {
  let e, t, n, r, o, i, b, d = (
    /*childFolderList*/
    l[4]
  ), s = [];
  for (let c = 0; c < d.length; c += 1)
    s[c] = pe(se(l, d, c));
  return {
    c() {
      e = u("div"), t = u("div"), t.innerHTML = '<label for="parentFolder" class="form-label">List Of Folder <span class="color-red">*</span></label>', n = E(), r = u("div"), o = u("select");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      _(t, "class", "col-30"), _(o, "name", "parentFolder"), _(o, "id", "parentFolder"), o.required = !0, /*selectedFolder*/
      l[1] === void 0 && N(() => (
        /*select_change_handler_3*/
        l[10].call(o)
      )), _(r, "class", "col-70"), _(e, "class", "row");
    },
    m(c, p) {
      y(c, e, p), f(e, t), f(e, n), f(e, r), f(r, o);
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(o, null);
      S(
        o,
        /*selectedFolder*/
        l[1],
        !0
      ), i || (b = A(
        o,
        "change",
        /*select_change_handler_3*/
        l[10]
      ), i = !0);
    },
    p(c, p) {
      if (p & /*childFolderList*/
      16) {
        d = /*childFolderList*/
        c[4];
        let a;
        for (a = 0; a < d.length; a += 1) {
          const g = se(c, d, a);
          s[a] ? s[a].p(g, p) : (s[a] = pe(g), s[a].c(), s[a].m(o, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = d.length;
      }
      p & /*selectedFolder, rootFolderList*/
      10 && S(
        o,
        /*selectedFolder*/
        c[1]
      );
    },
    d(c) {
      c && k(e), x(s, c), i = !1, b();
    }
  };
}
function pe(l) {
  let e, t = (
    /*folder*/
    l[15].name + ""
  ), n, r;
  return {
    c() {
      e = u("option"), n = I(t), e.__value = r = /*folder*/
      l[15], e.value = e.__value;
    },
    m(o, i) {
      y(o, e, i), f(e, n);
    },
    p(o, i) {
      i & /*childFolderList*/
      16 && t !== (t = /*folder*/
      o[15].name + "") && ee(n, t), i & /*childFolderList*/
      16 && r !== (r = /*folder*/
      o[15]) && (e.__value = r, e.value = e.__value);
    },
    d(o) {
      o && k(e);
    }
  };
}
function he(l) {
  let e, t, n, r, o, i, b, d, s, c, p, a, g, h = (
    /*data*/
    l[0].level == D.CHILD && /*data*/
    l[0].level && ve(l)
  );
  return {
    c() {
      e = u("div"), t = u("div"), t.innerHTML = '<label for="level" class="form-label">Level <span class="color-red">*</span></label>', n = E(), r = u("div"), o = u("select"), i = u("option"), b = I("Root"), d = u("option"), s = I("Child"), c = E(), h && h.c(), p = V(), _(t, "class", "col-30"), i.__value = D.ROOT, i.value = i.__value, d.__value = D.CHILD, d.value = d.__value, _(o, "name", "level"), _(o, "id", "level"), o.required = !0, /*data*/
      l[0].level === void 0 && N(() => (
        /*select_change_handler_4*/
        l[11].call(o)
      )), _(r, "class", "col-70"), _(e, "class", "row");
    },
    m(m, F) {
      y(m, e, F), f(e, t), f(e, n), f(e, r), f(r, o), f(o, i), f(i, b), f(o, d), f(d, s), S(
        o,
        /*data*/
        l[0].level,
        !0
      ), y(m, c, F), h && h.m(m, F), y(m, p, F), a || (g = A(
        o,
        "change",
        /*select_change_handler_4*/
        l[11]
      ), a = !0);
    },
    p(m, F) {
      F & /*data*/
      1 && S(
        o,
        /*data*/
        m[0].level
      ), /*data*/
      m[0].level == D.CHILD && /*data*/
      m[0].level ? h ? h.p(m, F) : (h = ve(m), h.c(), h.m(p.parentNode, p)) : h && (h.d(1), h = null);
    },
    d(m) {
      m && k(e), m && k(c), h && h.d(m), m && k(p), a = !1, g();
    }
  };
}
function ve(l) {
  let e;
  function t(o, i) {
    return (
      /*rootFolderList*/
      o[3].length > 0 ? Je : ze
    );
  }
  let n = t(l), r = n(l);
  return {
    c() {
      r.c(), e = V();
    },
    m(o, i) {
      r.m(o, i), y(o, e, i);
    },
    p(o, i) {
      n === (n = t(o)) && r ? r.p(o, i) : (r.d(1), r = n(o), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(o) {
      r.d(o), o && k(e);
    }
  };
}
function ze(l) {
  let e, t, n, r;
  return {
    c() {
      e = u("div"), t = u("div"), n = E(), r = u("div"), r.textContent = `* ${le}`, _(t, "class", "col-30"), _(r, "class", "col-70"), _(e, "class", "row color-red");
    },
    m(o, i) {
      y(o, e, i), f(e, t), f(e, n), f(e, r);
    },
    p: H,
    d(o) {
      o && k(e);
    }
  };
}
function Je(l) {
  let e, t, n, r, o, i, b, d = (
    /*rootFolderList*/
    l[3]
  ), s = [];
  for (let c = 0; c < d.length; c += 1)
    s[c] = me(ce(l, d, c));
  return {
    c() {
      e = u("div"), t = u("div"), t.innerHTML = '<label for="rootFolder" class="form-label">Root Folder <span class="color-red">*</span></label>', n = E(), r = u("div"), o = u("select");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      _(t, "class", "col-30"), _(o, "name", "rootFolder"), _(o, "id", "rootFolder"), o.required = !0, /*selectedFolder*/
      l[1] === void 0 && N(() => (
        /*select_change_handler_5*/
        l[12].call(o)
      )), _(r, "class", "col-70"), _(e, "class", "row");
    },
    m(c, p) {
      y(c, e, p), f(e, t), f(e, n), f(e, r), f(r, o);
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(o, null);
      S(
        o,
        /*selectedFolder*/
        l[1],
        !0
      ), i || (b = A(
        o,
        "change",
        /*select_change_handler_5*/
        l[12]
      ), i = !0);
    },
    p(c, p) {
      if (p & /*rootFolderList*/
      8) {
        d = /*rootFolderList*/
        c[3];
        let a;
        for (a = 0; a < d.length; a += 1) {
          const g = ce(c, d, a);
          s[a] ? s[a].p(g, p) : (s[a] = me(g), s[a].c(), s[a].m(o, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = d.length;
      }
      p & /*selectedFolder, rootFolderList*/
      10 && S(
        o,
        /*selectedFolder*/
        c[1]
      );
    },
    d(c) {
      c && k(e), x(s, c), i = !1, b();
    }
  };
}
function me(l) {
  let e, t = (
    /*folder*/
    l[15].name + ""
  ), n, r;
  return {
    c() {
      e = u("option"), n = I(t), e.__value = r = /*folder*/
      l[15], e.value = e.__value;
    },
    m(o, i) {
      y(o, e, i), f(e, n);
    },
    p(o, i) {
      i & /*rootFolderList*/
      8 && t !== (t = /*folder*/
      o[15].name + "") && ee(n, t), i & /*rootFolderList*/
      8 && r !== (r = /*folder*/
      o[15]) && (e.__value = r, e.value = e.__value);
    },
    d(o) {
      o && k(e);
    }
  };
}
function Ve(l) {
  let e, t, n, r, o, i, b, d, s, c, p, a, g, h, m, F, v, w, L, O, X, te, C = (
    /*data*/
    l[0].category == $.FILE && /*data*/
    l[0].name && fe(l)
  ), R = (
    /*data*/
    l[0].category == $.FOLDER && /*data*/
    l[0].name && he(l)
  );
  return {
    c() {
      e = u("div"), t = u("div"), n = u("form"), r = u("div"), o = u("div"), o.innerHTML = '<label for="folder" class="form-label">Name<span class="color-red">*</span></label>', i = E(), b = u("div"), d = u("input"), s = E(), c = u("div"), p = u("div"), p.innerHTML = '<label for="type" class="form-label">Type <span class="color-red">*</span></label>', a = E(), g = u("div"), h = u("select"), m = u("option"), m.textContent = "File", F = u("option"), F.textContent = "Folder", v = E(), C && C.c(), w = E(), R && R.c(), L = E(), O = u("div"), O.innerHTML = `<div class="col-50"><button type="reset" class="btn btn-reset">Reset</button></div> 
        <div class="col-50"><button type="submit" class="btn btn-submit">Submit</button></div>`, this.c = H, _(o, "class", "col-30"), _(d, "type", "text"), _(d, "name", "folder"), _(d, "id", "folder"), _(d, "class", ""), d.required = !0, _(b, "class", "col-70"), _(r, "class", "row"), _(p, "class", "col-30"), m.__value = "file", m.value = m.__value, F.__value = "folder", F.value = F.__value, _(h, "name", "type"), _(h, "id", "type"), /*data*/
      l[0].category === void 0 && N(() => (
        /*select_change_handler*/
        l[7].call(h)
      )), _(g, "class", "col-70"), _(c, "class", "row"), _(O, "class", "row"), _(t, "class", "container"), _(e, "class", "row center");
    },
    m(T, M) {
      y(T, e, M), f(e, t), f(t, n), f(n, r), f(r, o), f(r, i), f(r, b), f(b, d), ne(
        d,
        /*data*/
        l[0].name
      ), f(n, s), f(n, c), f(c, p), f(c, a), f(c, g), f(g, h), f(h, m), f(h, F), S(
        h,
        /*data*/
        l[0].category,
        !0
      ), f(n, v), C && C.m(n, null), f(n, w), R && R.m(n, null), f(n, L), f(n, O), X || (te = [
        A(
          d,
          "input",
          /*input_input_handler*/
          l[6]
        ),
        A(
          h,
          "change",
          /*select_change_handler*/
          l[7]
        ),
        A(n, "submit", Fe(
          /*onSubmit*/
          l[5]
        ))
      ], X = !0);
    },
    p(T, [M]) {
      M & /*data*/
      1 && d.value !== /*data*/
      T[0].name && ne(
        d,
        /*data*/
        T[0].name
      ), M & /*data*/
      1 && S(
        h,
        /*data*/
        T[0].category
      ), /*data*/
      T[0].category == $.FILE && /*data*/
      T[0].name ? C ? C.p(T, M) : (C = fe(T), C.c(), C.m(n, w)) : C && (C.d(1), C = null), /*data*/
      T[0].category == $.FOLDER && /*data*/
      T[0].name ? R ? R.p(T, M) : (R = he(T), R.c(), R.m(n, L)) : R && (R.d(1), R = null);
    },
    i: H,
    o: H,
    d(T) {
      T && k(e), C && C.d(), R && R.d(), X = !1, P(te);
    }
  };
}
function We(l, e, t) {
  let n = {
    name: "",
    category: "",
    level: "",
    parent: "",
    rootFolder: "",
    createdAt: ""
  }, r = {
    name: "",
    category: "",
    level: "",
    parent: "",
    rootFolder: "",
    createdAt: ""
  }, o = [], i = [], b = [], d = [];
  Te(async () => {
    o = await fetch(G.URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((v) => v.json()), t(2, i = await fetch(G.URL_For_LIST_OF_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((v) => v.json())), t(3, b = await fetch(G.URL_For_LIST_OF_ROOT_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((v) => v.json())), t(4, d = await fetch(G.URL_For_LIST_OF_CHILD_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((v) => v.json())), await fetch(G.URL_For_LIST_OF_SUB_CHILD_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((v) => v.json());
  });
  const s = async () => {
    o.forEach((v) => {
      v.name == n.name && (alert(Ge), location.reload());
    }), n.category == $.FILE ? n.level == D.ROOT ? (t(0, n.parent = W, n), t(0, n.rootFolder = W, n)) : n.level == D.CHILD ? (t(0, n.parent = r.name, n), t(0, n.rootFolder = r.name, n)) : (t(0, n.parent = r.name, n), t(0, n.rootFolder = r.parent, n)) : n.level == D.ROOT ? (t(0, n.parent = W, n), t(0, n.rootFolder = W, n)) : (t(0, n.parent = r.name, n), t(0, n.rootFolder = r.name, n)), t(0, n.createdAt = (/* @__PURE__ */ new Date()).toJSON().split("T")[0], n), console.log(n), await fetch(G.URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n)
    }), location.reload();
  };
  function c() {
    n.name = this.value, t(0, n);
  }
  function p() {
    n.category = j(this), t(0, n);
  }
  function a() {
    n.level = j(this), t(0, n);
  }
  function g() {
    r = j(this), t(1, r), t(3, b);
  }
  function h() {
    r = j(this), t(1, r), t(3, b);
  }
  function m() {
    n.level = j(this), t(0, n);
  }
  function F() {
    r = j(this), t(1, r), t(3, b);
  }
  return [
    n,
    r,
    i,
    b,
    d,
    s,
    c,
    p,
    a,
    g,
    h,
    m,
    F
  ];
}
class Xe extends ge {
  constructor(e) {
    super();
    const t = document.createElement("style");
    t.textContent = '.color-red{color:red}.container{border-radius:5px;background-color:#f2f2f2;padding:40px;width:600px;margin:30px;border-color:1px solid #45a049;border-radius:4px}.row{display:flex;flex-direction:row;flex-wrap:wrap}.center{justify-content:center}.col-30{flex:30%}.col-70{flex:70%}.col-50{flex:50%}input[type="text"],select{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}.btn{max-width:30%;min-width:25%;color:white;padding:10px 15px;margin:8px 0;border:none;border-radius:4px;cursor:pointer}.btn-submit{background-color:#45a049}.btn-reset{background-color:red}.btn-submit:hover,.btn-reset:hover{opacity:0.8}label{color:black;font-weight:bold;padding:12px 12px 12px 0;display:inline-block}', this.shadowRoot.appendChild(t), Ue(
      this,
      {
        target: this.shadowRoot,
        props: Ee(this.attributes),
        customElement: !0
      },
      We,
      Ve,
      Le,
      {},
      null
    ), e && e.target && y(e.target, this, e.anchor);
  }
}
customElements.define("folder-file-creator", Xe);
