function H() {
}
function Z(l) {
  return l();
}
function oe() {
  return /* @__PURE__ */ Object.create(null);
}
function B(l) {
  l.forEach(Z);
}
function K(l) {
  return typeof l == "function";
}
function ye(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function Le(l) {
  return Object.keys(l).length === 0;
}
const ke = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in ke;
function f(l, e) {
  l.appendChild(e);
}
function L(l, e, t) {
  l.insertBefore(e, t || null);
}
function k(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function x(l, e) {
  for (let t = 0; t < l.length; t += 1)
    l[t] && l[t].d(e);
}
function d(l) {
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
function j(l, e, t, n) {
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
function Ee(l, e, t, n) {
  t == null ? l.style.removeProperty(e) : l.style.setProperty(e, t, n ? "important" : "");
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
function M(l) {
  const e = l.querySelector(":checked");
  return e && e.__value;
}
function Oe(l) {
  const e = {};
  for (const t of l)
    e[t.name] = t.value;
  return e;
}
let J;
function z(l) {
  J = l;
}
function Te() {
  if (!J)
    throw new Error("Function called outside component initialization");
  return J;
}
function Ce(l) {
  Te().$$.on_mount.push(l);
}
const q = [], re = [];
let P = [];
const ie = [], Re = /* @__PURE__ */ Promise.resolve();
let Q = !1;
function De() {
  Q || (Q = !0, Re.then(be));
}
function N(l) {
  P.push(l);
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
        U++, z(e), Se(e.$$);
      }
    } catch (e) {
      throw q.length = 0, U = 0, e;
    }
    for (z(null), q.length = 0, U = 0; re.length; )
      re.pop()();
    for (let e = 0; e < P.length; e += 1) {
      const t = P[e];
      Y.has(t) || (Y.add(t), t());
    }
    P.length = 0;
  } while (q.length);
  for (; ie.length; )
    ie.pop()();
  Q = !1, Y.clear(), z(l);
}
function Se(l) {
  if (l.fragment !== null) {
    l.update(), B(l.before_update);
    const e = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, e), l.after_update.forEach(N);
  }
}
function Ie(l) {
  const e = [], t = [];
  P.forEach((n) => l.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), P = e;
}
const He = /* @__PURE__ */ new Set();
function Ne(l, e) {
  l && l.i && (He.delete(l), l.i(e));
}
const je = [
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
[...je];
function Ae(l, e, t, n) {
  const { fragment: r, after_update: o } = l.$$;
  r && r.m(e, t), n || N(() => {
    const i = l.$$.on_mount.map(Z).filter(K);
    l.$$.on_destroy ? l.$$.on_destroy.push(...i) : B(i), l.$$.on_mount = [];
  }), o.forEach(N);
}
function Me(l, e) {
  const t = l.$$;
  t.fragment !== null && (Ie(t.after_update), B(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ue(l, e) {
  l.$$.dirty[0] === -1 && (q.push(l), De(), l.$$.dirty.fill(0)), l.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ge(l, e, t, n, r, o, i, b = [-1]) {
  const u = J;
  z(l);
  const c = l.$$ = {
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
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: oe(),
    dirty: b,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  i && i(c.root);
  let s = !1;
  if (c.ctx = t ? t(l, e.props || {}, (p, a, ...g) => {
    const h = g.length ? g[0] : a;
    return c.ctx && r(c.ctx[p], c.ctx[p] = h) && (!c.skip_bound && c.bound[p] && c.bound[p](h), s && Ue(l, p)), a;
  }) : [], c.update(), s = !0, B(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = we(e.target);
      c.fragment && c.fragment.l(p), p.forEach(k);
    } else
      c.fragment && c.fragment.c();
    e.intro && Ne(l.$$.fragment), Ae(l, e.target, e.anchor, e.customElement), be();
  }
  z(u);
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
    B(this.$$.on_disconnect);
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
    this.$$set && !Le(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1);
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
}, W = "--", qe = "Name already exist in system", le = "No Folder Exist";
function se(l, e, t) {
  const n = l.slice();
  return n[15] = e[t], n;
}
function ce(l, e, t) {
  const n = l.slice();
  return n[15] = e[t], n;
}
function ae(l, e, t) {
  const n = l.slice();
  return n[15] = e[t], n;
}
function fe(l) {
  let e, t, n, r, o, i, b, u, c, s, p, a, g, h, v, w, m = (
    /*data*/
    l[0].level && /*data*/
    l[0].level == D.CHILD && ue(l)
  ), F = (
    /*data*/
    l[0].level && /*data*/
    l[0].level == D.GRAND_CHILD && _e(l)
  );
  return {
    c() {
      e = d("div"), t = d("div"), t.innerHTML = '<label for="level" class="form-label">Level <span class="color-red">*</span></label>', n = E(), r = d("div"), o = d("select"), i = d("option"), b = I("Root"), u = d("option"), c = I("Child"), s = d("option"), p = I("Grand-Child"), a = E(), m && m.c(), g = E(), F && F.c(), h = V(), _(t, "class", "col-30"), i.__value = D.ROOT, i.value = i.__value, u.__value = D.CHILD, u.value = u.__value, s.__value = D.GRAND_CHILD, s.value = s.__value, _(o, "name", "level"), _(o, "id", "level"), o.required = !0, /*data*/
      l[0].level === void 0 && N(() => (
        /*select_change_handler_1*/
        l[8].call(o)
      )), _(r, "class", "col-70"), _(e, "class", "row");
    },
    m(y, O) {
      L(y, e, O), f(e, t), f(e, n), f(e, r), f(r, o), f(o, i), f(i, b), f(o, u), f(u, c), f(o, s), f(s, p), S(
        o,
        /*data*/
        l[0].level,
        !0
      ), L(y, a, O), m && m.m(y, O), L(y, g, O), F && F.m(y, O), L(y, h, O), v || (w = j(
        o,
        "change",
        /*select_change_handler_1*/
        l[8]
      ), v = !0);
    },
    p(y, O) {
      O & /*data*/
      1 && S(
        o,
        /*data*/
        y[0].level
      ), /*data*/
      y[0].level && /*data*/
      y[0].level == D.CHILD ? m ? m.p(y, O) : (m = ue(y), m.c(), m.m(g.parentNode, g)) : m && (m.d(1), m = null), /*data*/
      y[0].level && /*data*/
      y[0].level == D.GRAND_CHILD ? F ? F.p(y, O) : (F = _e(y), F.c(), F.m(h.parentNode, h)) : F && (F.d(1), F = null);
    },
    d(y) {
      y && k(e), y && k(a), m && m.d(y), y && k(g), F && F.d(y), y && k(h), v = !1, w();
    }
  };
}
function ue(l) {
  let e;
  function t(o, i) {
    return (
      /*rootFolderList*/
      o[3].length > 0 ? Be : Pe
    );
  }
  let n = t(l), r = n(l);
  return {
    c() {
      r.c(), e = V();
    },
    m(o, i) {
      r.m(o, i), L(o, e, i);
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
      e = d("div"), t = d("div"), n = E(), r = d("div"), r.textContent = `* ${le}`, _(t, "class", "col-30"), _(r, "class", "col-70"), _(e, "class", "row color-red");
    },
    m(o, i) {
      L(o, e, i), f(e, t), f(e, n), f(e, r);
    },
    p: H,
    d(o) {
      o && k(e);
    }
  };
}
function Be(l) {
  let e, t, n, r, o, i, b, u = (
    /*rootFolderList*/
    l[3]
  ), c = [];
  for (let s = 0; s < u.length; s += 1)
    c[s] = de(ae(l, u, s));
  return {
    c() {
      e = d("div"), t = d("div"), t.innerHTML = '<label for="parentFolder" class="form-label">List Of Folder <span class="color-red">*</span></label>', n = E(), r = d("div"), o = d("select");
      for (let s = 0; s < c.length; s += 1)
        c[s].c();
      _(t, "class", "col-30"), _(o, "name", "parentFolder"), _(o, "id", "parentFolder"), o.required = !0, /*selectedFolder*/
      l[1] === void 0 && N(() => (
        /*select_change_handler_2*/
        l[9].call(o)
      )), _(r, "class", "col-70"), _(e, "class", "row");
    },
    m(s, p) {
      L(s, e, p), f(e, t), f(e, n), f(e, r), f(r, o);
      for (let a = 0; a < c.length; a += 1)
        c[a] && c[a].m(o, null);
      S(
        o,
        /*selectedFolder*/
        l[1],
        !0
      ), i || (b = j(
        o,
        "change",
        /*select_change_handler_2*/
        l[9]
      ), i = !0);
    },
    p(s, p) {
      if (p & /*rootFolderList*/
      8) {
        u = /*rootFolderList*/
        s[3];
        let a;
        for (a = 0; a < u.length; a += 1) {
          const g = ae(s, u, a);
          c[a] ? c[a].p(g, p) : (c[a] = de(g), c[a].c(), c[a].m(o, null));
        }
        for (; a < c.length; a += 1)
          c[a].d(1);
        c.length = u.length;
      }
      p & /*selectedFolder, rootFolderList*/
      10 && S(
        o,
        /*selectedFolder*/
        s[1]
      );
    },
    d(s) {
      s && k(e), x(c, s), i = !1, b();
    }
  };
}
function de(l) {
  let e, t = (
    /*folder*/
    l[15].name + ""
  ), n, r;
  return {
    c() {
      e = d("option"), n = I(t), e.__value = r = /*folder*/
      l[15], e.value = e.__value;
    },
    m(o, i) {
      L(o, e, i), f(e, n);
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
      o[2].length > 0 ? ze : $e
    );
  }
  let n = t(l), r = n(l);
  return {
    c() {
      r.c(), e = V();
    },
    m(o, i) {
      r.m(o, i), L(o, e, i);
    },
    p(o, i) {
      n === (n = t(o)) && r ? r.p(o, i) : (r.d(1), r = n(o), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(o) {
      r.d(o), o && k(e);
    }
  };
}
function $e(l) {
  let e, t, n, r;
  return {
    c() {
      e = d("div"), t = d("div"), n = E(), r = d("div"), r.textContent = `* ${le}`, _(t, "class", "col-30"), _(r, "class", "col-70"), _(e, "class", "row color-red");
    },
    m(o, i) {
      L(o, e, i), f(e, t), f(e, n), f(e, r);
    },
    p: H,
    d(o) {
      o && k(e);
    }
  };
}
function ze(l) {
  let e, t, n, r, o, i, b, u = (
    /*childFolderList*/
    l[4]
  ), c = [];
  for (let s = 0; s < u.length; s += 1)
    c[s] = pe(ce(l, u, s));
  return {
    c() {
      e = d("div"), t = d("div"), t.innerHTML = '<label for="parentFolder" class="form-label">List Of Folder <span class="color-red">*</span></label>', n = E(), r = d("div"), o = d("select");
      for (let s = 0; s < c.length; s += 1)
        c[s].c();
      _(t, "class", "col-30"), _(o, "name", "parentFolder"), _(o, "id", "parentFolder"), o.required = !0, /*selectedFolder*/
      l[1] === void 0 && N(() => (
        /*select_change_handler_3*/
        l[10].call(o)
      )), _(r, "class", "col-70"), _(e, "class", "row");
    },
    m(s, p) {
      L(s, e, p), f(e, t), f(e, n), f(e, r), f(r, o);
      for (let a = 0; a < c.length; a += 1)
        c[a] && c[a].m(o, null);
      S(
        o,
        /*selectedFolder*/
        l[1],
        !0
      ), i || (b = j(
        o,
        "change",
        /*select_change_handler_3*/
        l[10]
      ), i = !0);
    },
    p(s, p) {
      if (p & /*childFolderList*/
      16) {
        u = /*childFolderList*/
        s[4];
        let a;
        for (a = 0; a < u.length; a += 1) {
          const g = ce(s, u, a);
          c[a] ? c[a].p(g, p) : (c[a] = pe(g), c[a].c(), c[a].m(o, null));
        }
        for (; a < c.length; a += 1)
          c[a].d(1);
        c.length = u.length;
      }
      p & /*selectedFolder, rootFolderList*/
      10 && S(
        o,
        /*selectedFolder*/
        s[1]
      );
    },
    d(s) {
      s && k(e), x(c, s), i = !1, b();
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
      e = d("option"), n = I(t), e.__value = r = /*folder*/
      l[15], e.value = e.__value;
    },
    m(o, i) {
      L(o, e, i), f(e, n);
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
  let e, t, n, r, o, i, b, u, c, s, p, a, g, h = (
    /*data*/
    l[0].level == D.CHILD && /*data*/
    l[0].level && me(l)
  );
  return {
    c() {
      e = d("div"), t = d("div"), t.innerHTML = '<label for="level" class="form-label">Level <span class="color-red">*</span></label>', n = E(), r = d("div"), o = d("select"), i = d("option"), b = I("Root"), u = d("option"), c = I("Child"), s = E(), h && h.c(), p = V(), _(t, "class", "col-30"), i.__value = D.ROOT, i.value = i.__value, u.__value = D.CHILD, u.value = u.__value, _(o, "name", "level"), _(o, "id", "level"), o.required = !0, /*data*/
      l[0].level === void 0 && N(() => (
        /*select_change_handler_4*/
        l[11].call(o)
      )), _(r, "class", "col-70"), _(e, "class", "row");
    },
    m(v, w) {
      L(v, e, w), f(e, t), f(e, n), f(e, r), f(r, o), f(o, i), f(i, b), f(o, u), f(u, c), S(
        o,
        /*data*/
        l[0].level,
        !0
      ), L(v, s, w), h && h.m(v, w), L(v, p, w), a || (g = j(
        o,
        "change",
        /*select_change_handler_4*/
        l[11]
      ), a = !0);
    },
    p(v, w) {
      w & /*data*/
      1 && S(
        o,
        /*data*/
        v[0].level
      ), /*data*/
      v[0].level == D.CHILD && /*data*/
      v[0].level ? h ? h.p(v, w) : (h = me(v), h.c(), h.m(p.parentNode, p)) : h && (h.d(1), h = null);
    },
    d(v) {
      v && k(e), v && k(s), h && h.d(v), v && k(p), a = !1, g();
    }
  };
}
function me(l) {
  let e;
  function t(o, i) {
    return (
      /*rootFolderList*/
      o[3].length > 0 ? Ve : Je
    );
  }
  let n = t(l), r = n(l);
  return {
    c() {
      r.c(), e = V();
    },
    m(o, i) {
      r.m(o, i), L(o, e, i);
    },
    p(o, i) {
      n === (n = t(o)) && r ? r.p(o, i) : (r.d(1), r = n(o), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(o) {
      r.d(o), o && k(e);
    }
  };
}
function Je(l) {
  let e, t, n, r;
  return {
    c() {
      e = d("div"), t = d("div"), n = E(), r = d("div"), r.textContent = `* ${le}`, _(t, "class", "col-30"), _(r, "class", "col-70"), _(e, "class", "row color-red");
    },
    m(o, i) {
      L(o, e, i), f(e, t), f(e, n), f(e, r);
    },
    p: H,
    d(o) {
      o && k(e);
    }
  };
}
function Ve(l) {
  let e, t, n, r, o, i, b, u = (
    /*rootFolderList*/
    l[3]
  ), c = [];
  for (let s = 0; s < u.length; s += 1)
    c[s] = ve(se(l, u, s));
  return {
    c() {
      e = d("div"), t = d("div"), t.innerHTML = '<label for="rootFolder" class="form-label">Root Folder <span class="color-red">*</span></label>', n = E(), r = d("div"), o = d("select");
      for (let s = 0; s < c.length; s += 1)
        c[s].c();
      _(t, "class", "col-30"), _(o, "name", "rootFolder"), _(o, "id", "rootFolder"), o.required = !0, /*selectedFolder*/
      l[1] === void 0 && N(() => (
        /*select_change_handler_5*/
        l[12].call(o)
      )), _(r, "class", "col-70"), _(e, "class", "row");
    },
    m(s, p) {
      L(s, e, p), f(e, t), f(e, n), f(e, r), f(r, o);
      for (let a = 0; a < c.length; a += 1)
        c[a] && c[a].m(o, null);
      S(
        o,
        /*selectedFolder*/
        l[1],
        !0
      ), i || (b = j(
        o,
        "change",
        /*select_change_handler_5*/
        l[12]
      ), i = !0);
    },
    p(s, p) {
      if (p & /*rootFolderList*/
      8) {
        u = /*rootFolderList*/
        s[3];
        let a;
        for (a = 0; a < u.length; a += 1) {
          const g = se(s, u, a);
          c[a] ? c[a].p(g, p) : (c[a] = ve(g), c[a].c(), c[a].m(o, null));
        }
        for (; a < c.length; a += 1)
          c[a].d(1);
        c.length = u.length;
      }
      p & /*selectedFolder, rootFolderList*/
      10 && S(
        o,
        /*selectedFolder*/
        s[1]
      );
    },
    d(s) {
      s && k(e), x(c, s), i = !1, b();
    }
  };
}
function ve(l) {
  let e, t = (
    /*folder*/
    l[15].name + ""
  ), n, r;
  return {
    c() {
      e = d("option"), n = I(t), e.__value = r = /*folder*/
      l[15], e.value = e.__value;
    },
    m(o, i) {
      L(o, e, i), f(e, n);
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
function We(l) {
  let e, t, n, r, o, i, b, u, c, s, p, a, g, h, v, w, m, F, y, O, X, te, C = (
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
      e = d("div"), t = d("div"), n = d("form"), r = d("div"), o = d("div"), o.innerHTML = '<label for="folder" class="form-label">Name<span class="color-red">*</span></label>', i = E(), b = d("div"), u = d("input"), c = E(), s = d("div"), p = d("div"), p.innerHTML = '<label for="type" class="form-label">Type <span class="color-red">*</span></label>', a = E(), g = d("div"), h = d("select"), v = d("option"), v.textContent = "File", w = d("option"), w.textContent = "Folder", m = E(), C && C.c(), F = E(), R && R.c(), y = E(), O = d("div"), O.innerHTML = '<button type="submit" class="btn btn-submit">Submit</button>', this.c = H, _(o, "class", "col-30"), _(u, "type", "text"), _(u, "name", "folder"), _(u, "id", "folder"), _(u, "class", ""), u.required = !0, _(b, "class", "col-70"), _(r, "class", "row"), _(p, "class", "col-30"), v.__value = "file", v.value = v.__value, w.__value = "folder", w.value = w.__value, _(h, "name", "type"), _(h, "id", "type"), /*data*/
      l[0].category === void 0 && N(() => (
        /*select_change_handler*/
        l[7].call(h)
      )), _(g, "class", "col-70"), _(s, "class", "row"), _(O, "class", "row"), Ee(O, "justify-content", "center"), _(t, "class", "container"), _(e, "class", "row center");
    },
    m(T, A) {
      L(T, e, A), f(e, t), f(t, n), f(n, r), f(r, o), f(r, i), f(r, b), f(b, u), ne(
        u,
        /*data*/
        l[0].name
      ), f(n, c), f(n, s), f(s, p), f(s, a), f(s, g), f(g, h), f(h, v), f(h, w), S(
        h,
        /*data*/
        l[0].category,
        !0
      ), f(n, m), C && C.m(n, null), f(n, F), R && R.m(n, null), f(n, y), f(n, O), X || (te = [
        j(
          u,
          "input",
          /*input_input_handler*/
          l[6]
        ),
        j(
          h,
          "change",
          /*select_change_handler*/
          l[7]
        ),
        j(n, "submit", Fe(
          /*onSubmit*/
          l[5]
        ))
      ], X = !0);
    },
    p(T, [A]) {
      A & /*data*/
      1 && u.value !== /*data*/
      T[0].name && ne(
        u,
        /*data*/
        T[0].name
      ), A & /*data*/
      1 && S(
        h,
        /*data*/
        T[0].category
      ), /*data*/
      T[0].category == $.FILE && /*data*/
      T[0].name ? C ? C.p(T, A) : (C = fe(T), C.c(), C.m(n, F)) : C && (C.d(1), C = null), /*data*/
      T[0].category == $.FOLDER && /*data*/
      T[0].name ? R ? R.p(T, A) : (R = he(T), R.c(), R.m(n, y)) : R && (R.d(1), R = null);
    },
    i: H,
    o: H,
    d(T) {
      T && k(e), C && C.d(), R && R.d(), X = !1, B(te);
    }
  };
}
function Xe(l, e, t) {
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
  }, o = [], i = [], b = [], u = [];
  Ce(async () => {
    o = await fetch(G.URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((m) => m.json()), t(2, i = await fetch(G.URL_For_LIST_OF_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((m) => m.json())), t(3, b = await fetch(G.URL_For_LIST_OF_ROOT_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((m) => m.json())), t(4, u = await fetch(G.URL_For_LIST_OF_CHILD_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((m) => m.json())), await fetch(G.URL_For_LIST_OF_SUB_CHILD_FOLDERS, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((m) => m.json());
  });
  const c = async () => {
    let m = !0;
    o.forEach((F) => {
      F.name == n.name && (m = !1, alert(qe));
    }), m && (n.category == $.FILE ? n.level == D.ROOT ? (t(0, n.parent = W, n), t(0, n.rootFolder = W, n)) : n.level == D.CHILD ? (t(0, n.parent = r.name, n), t(0, n.rootFolder = r.name, n)) : (t(0, n.parent = r.name, n), t(0, n.rootFolder = r.parent, n)) : n.level == D.ROOT ? (t(0, n.parent = W, n), t(0, n.rootFolder = W, n)) : (t(0, n.parent = r.name, n), t(0, n.rootFolder = r.name, n)), t(0, n.createdAt = (/* @__PURE__ */ new Date()).toJSON().split("T")[0], n), console.log(n), await fetch(G.URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n)
    }), location.reload());
  };
  function s() {
    n.name = this.value, t(0, n);
  }
  function p() {
    n.category = M(this), t(0, n);
  }
  function a() {
    n.level = M(this), t(0, n);
  }
  function g() {
    r = M(this), t(1, r), t(3, b);
  }
  function h() {
    r = M(this), t(1, r), t(3, b);
  }
  function v() {
    n.level = M(this), t(0, n);
  }
  function w() {
    r = M(this), t(1, r), t(3, b);
  }
  return [
    n,
    r,
    i,
    b,
    u,
    c,
    s,
    p,
    a,
    g,
    h,
    v,
    w
  ];
}
class Ye extends ge {
  constructor(e) {
    super();
    const t = document.createElement("style");
    t.textContent = '.color-red{color:red}.container{border-radius:5px;background-color:#f2f2f2;padding:40px;width:600px;margin:30px;border-color:1px solid #45a049;border-radius:4px}.row{display:flex;flex-direction:row;flex-wrap:wrap}.center{justify-content:center}.col-30{flex:30%}.col-70{flex:70%}input[type="text"],select{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}.btn{max-width:30%;min-width:25%;color:white;padding:10px 15px;margin:8px 0;border:none;border-radius:4px;cursor:pointer}.btn-submit{background-color:#45a049}.btn-submit:hover{opacity:0.8}label{color:black;font-weight:bold;padding:12px 12px 12px 0;display:inline-block}', this.shadowRoot.appendChild(t), Ge(
      this,
      {
        target: this.shadowRoot,
        props: Oe(this.attributes),
        customElement: !0
      },
      Xe,
      We,
      ye,
      {},
      null
    ), e && e.target && L(e.target, this, e.anchor);
  }
}
customElements.define("folder-file-creator", Ye);
