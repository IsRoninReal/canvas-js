var e = function(t, n) {
    return e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(e, t) {
        e.__proto__ = t
    } || function(e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
    }, e(t, n)
};

var ronin = "ronin was here"

function t(t, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

    function i() {
        this.constructor = t
    }
    e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
}
var n = function() {
    return n = Object.assign || function(e) {
        for (var t, n = 1, i = arguments.length; n < i; n++)
            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
    }, n.apply(this, arguments)
};

function i(e, t) {
    var n = {};
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
    }
    return n
}

function r(e, t, n, i) {
    var r, o = arguments.length,
        s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
    else
        for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
    return o > 3 && s && Object.defineProperty(t, n, s), s
}

function o(e, t, n, i) {
    return new(n || (n = Promise))((function(r, o) {
        function s(e) {
            try {
                c(i.next(e))
            } catch (e) {
                o(e)
            }
        }

        function a(e) {
            try {
                c(i.throw(e))
            } catch (e) {
                o(e)
            }
        }

        function c(e) {
            var t;
            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                e(t)
            }))).then(s, a)
        }
        c((i = i.apply(e, t || [])).next())
    }))
}

function s(e, t) {
    var n, i, r, o, s = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }), o;

    function a(o) {
        return function(a) {
            return function(o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s;) try {
                    if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            return s.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            s.label++, i = o[1], o = [0];
                            continue;
                        case 7:
                            o = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                s.label = o[1];
                                break
                            }
                            if (6 === o[0] && s.label < r[1]) {
                                s.label = r[1], r = o;
                                break
                            }
                            if (r && s.label < r[2]) {
                                s.label = r[2], s.ops.push(o);
                                break
                            }
                            r[2] && s.ops.pop(), s.trys.pop();
                            continue
                    }
                    o = t.call(e, s)
                } catch (e) {
                    o = [6, e], i = 0
                } finally {
                    n = r = 0
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }([o, a])
        }
    }
}

function a(e, t, n) {
    if (n || 2 === arguments.length)
        for (var i, r = 0, o = t.length; r < o; r++) !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
const c = e => t => "function" == typeof t ? ((e, t) => (window.customElements.define(e, t), t))(e, t) : ((e, t) => {
        const {
            kind: n,
            elements: i
        } = t;
        return {
            kind: n,
            elements: i,
            finisher(t) {
                window.customElements.define(e, t)
            }
        }
    })(e, t),
    l = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? {
        ...t,
        finisher(n) {
            n.createProperty(t.key, e)
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: t.key,
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(n) {
            n.createProperty(t.key, e)
        }
    };

function u(e) {
    return (t, n) => void 0 !== n ? ((e, t, n) => {
        t.constructor.createProperty(n, e)
    })(e, t, n) : l(e, t)
}

function h(e) {
    return u({
        ...e,
        state: !0
    })
}
const d = ({
    finisher: e,
    descriptor: t
}) => (n, i) => {
    var r;
    if (void 0 === i) {
        const i = null !== (r = n.originalKey) && void 0 !== r ? r : n.key,
            o = null != t ? {
                kind: "method",
                placement: "prototype",
                key: i,
                descriptor: t(n.key)
            } : {
                ...n,
                key: i
            };
        return null != e && (o.finisher = function(t) {
            e(t, i)
        }), o
    } {
        const r = n.constructor;
        void 0 !== t && Object.defineProperty(n, i, t(i)), null == e || e(r, i)
    }
};

function p(e, t) {
    return d({
        descriptor: n => {
            const i = {
                get() {
                    var t, n;
                    return null !== (n = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== n ? n : null
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof n ? Symbol() : "__" + n;
                i.get = function() {
                    var n, i;
                    return void 0 === this[t] && (this[t] = null !== (i = null === (n = this.renderRoot) || void 0 === n ? void 0 : n.querySelector(e)) && void 0 !== i ? i : null), this[t]
                }
            }
            return i
        }
    })
}
var f;
const v = null != (null === (f = window.HTMLSlotElement) || void 0 === f ? void 0 : f.prototype.assignedElements) ? (e, t) => e.assignedElements(t) : (e, t) => e.assignedNodes(t).filter((e => e.nodeType === Node.ELEMENT_NODE));

function m(e) {
    const {
        slot: t,
        selector: n
    } = null != e ? e : {};
    return d({
        descriptor: i => ({
            get() {
                var i;
                const r = "slot" + (t ? `[name=${t}]` : ":not([name])"),
                    o = null === (i = this.renderRoot) || void 0 === i ? void 0 : i.querySelector(r),
                    s = null != o ? v(o, e) : [];
                return n ? s.filter((e => e.matches(n))) : s
            },
            enumerable: !0,
            configurable: !0
        })
    })
}
const y = Symbol("mixins/connect-event");
const g = (e, t) => new CustomEvent(e, {
    composed: !0,
    bubbles: !0,
    cancelable: !0,
    detail: t
});
var b, w, x;
! function(e) {
    e[e.emergency = 0] = "emergency", e[e.alert = 1] = "alert", e[e.critical = 2] = "critical", e[e.error = 3] = "error", e[e.warning = 4] = "warning", e[e.notice = 5] = "notice", e[e.info = 6] = "info", e[e.debug = 7] = "debug", e[e.none = 8] = "none"
}(b || (b = {})),
function(e) {
    e.Eager = "eager", e.Action = "action", e.Lazy = "lazy", e.Preload = "preload"
}(w || (w = {})),
function(e) {
    e.Get = "get", e.Post = "post", e.Dialog = "dialog", e.Log = "log"
}(x || (x = {}));
let _ = class extends(function(e) {
    if (y in e) return e;
    class t extends e {
        connectedCallback() {
            super.connectedCallback && super.connectedCallback(), window.queueMicrotask((() => this.dispatchConnectEvent()))
        }
        dispatchConnectEvent() {
            if (!this.isConnected) return;
            const e = this.makeConnectEvent();
            return this.dispatchEvent(e), e
        }
        makeConnectEvent() {
            throw new Error("FaceplateEvent makeConnectEvent() method not implemented!")
        }
    }
    return t[y] = !0, t
}(HTMLElement)) {
    makeConnectEvent() {
        const e = this.getAttribute("level");
        let t;
        if (e) {
            const n = e.toLowerCase();
            if (!Object.hasOwnProperty.call(b, n)) return g("faceplate-error", new Error(`Unknown level value "${e}" specified on <faceplate-alert> element`));
            const i = parseInt(n, 10);
            t = isNaN(i) ? b[n] : i
        }
        const n = this.getAttribute("message"),
            i = this.getAttribute("name"),
            r = this.getAttribute("meta"),
            o = this.getAttribute("count"),
            s = {
                level: t,
                name: i || void 0,
                message: n || void 0,
                meta: r || void 0,
                count: null === o ? 1 : parseInt(o),
                originalAlert: this
            };
        return g("faceplate-alert", s)
    }
};
_ = r([c("faceplate-alert")], _);
const E = function() {
        const e = new WeakMap;
        let t = !1;
        return {
            get isDirty() {
                return t
            },
            register(n, i) {
                const r = e.get(n);
                r && !r.has(i) ? r.add(i) : r || e.set(n, new Set([i])), t = !0
            },
            unregister(n, i) {
                const r = e.get(n);
                r && r.has(i) && (r.delete(i), t = !0)
            },
            getRegisteredElements(n) {
                const i = e.get(n);
                return t = !1, i
            },
            unregisterAll(n) {
                e.delete(n), t = !0
            }
        }
    }(),
    S = function() {
        const e = new Set,
            t = t => e.has(t.constructor);
        return {
            registerAncestorClass(t) {
                e.add(t)
            },
            connectToAncestor: e => async function(e, t) {
                let n = e;
                for (; n.parentElement;) {
                    if (n = n.parentElement, !n.tagName.includes("-")) continue;
                    const e = n.tagName.toLowerCase();
                    if (customElements.get(e) || await customElements.whenDefined(e), t(n)) return n
                }
            }(e, t)
        }
    }(),
    k = S.registerAncestorClass,
    T = S.connectToAncestor,
    C = {
        fromAttribute(e) {
            if (e in b) return b[e]
        },
        toAttribute(e) {
            if (e in b) return b[e]
        }
    };

function O(e, t, n, i) {
    return {
        level: e,
        message: t,
        meta: n[0] && "string" == typeof n[0] ? n.join("\n") : void 0,
        count: i
    }
}
const A = Symbol("mixins/alert-reporter");
const I = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    M = Symbol(),
    P = new Map;
class D {
    constructor(e, t) {
        if (this._$cssResult$ = !0, t !== M) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = e
    }
    get styleSheet() {
        let e = P.get(this.cssText);
        return I && void 0 === e && (P.set(this.cssText, e = new CSSStyleSheet), e.replaceSync(this.cssText)), e
    }
    toString() {
        return this.cssText
    }
}
const N = e => new D("string" == typeof e ? e : e + "", M),
    R = (e, ...t) => {
        const n = 1 === e.length ? e[0] : t.reduce(((t, n, i) => t + (e => {
            if (!0 === e._$cssResult$) return e.cssText;
            if ("number" == typeof e) return e;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
        })(n) + e[i + 1]), e[0]);
        return new D(n, M)
    },
    L = I ? e => e : e => e instanceof CSSStyleSheet ? (e => {
        let t = "";
        for (const n of e.cssRules) t += n.cssText;
        return N(t)
    })(e) : e;
var F;
const j = window.trustedTypes,
    $ = j ? j.emptyScript : "",
    z = window.reactiveElementPolyfillSupport,
    V = {
        toAttribute(e, t) {
            switch (t) {
                case Boolean:
                    e = e ? $ : null;
                    break;
                case Object:
                case Array:
                    e = null == e ? e : JSON.stringify(e)
            }
            return e
        },
        fromAttribute(e, t) {
            let n = e;
            switch (t) {
                case Boolean:
                    n = null !== e;
                    break;
                case Number:
                    n = null === e ? null : Number(e);
                    break;
                case Object:
                case Array:
                    try {
                        n = JSON.parse(e)
                    } catch (e) {
                        n = null
                    }
            }
            return n
        }
    },
    q = (e, t) => t !== e && (t == t || e == e),
    U = {
        attribute: !0,
        type: String,
        converter: V,
        reflect: !1,
        hasChanged: q
    };
class B extends HTMLElement {
    constructor() {
        super(), this._$Et = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o()
    }
    static addInitializer(e) {
        var t;
        null !== (t = this.l) && void 0 !== t || (this.l = []), this.l.push(e)
    }
    static get observedAttributes() {
        this.finalize();
        const e = [];
        return this.elementProperties.forEach(((t, n) => {
            const i = this._$Eh(n, t);
            void 0 !== i && (this._$Eu.set(i, n), e.push(i))
        })), e
    }
    static createProperty(e, t = U) {
        if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
            const n = "symbol" == typeof e ? Symbol() : "__" + e,
                i = this.getPropertyDescriptor(e, n, t);
            void 0 !== i && Object.defineProperty(this.prototype, e, i)
        }
    }
    static getPropertyDescriptor(e, t, n) {
        return {
            get() {
                return this[t]
            },
            set(i) {
                const r = this[e];
                this[t] = i, this.requestUpdate(e, r, n)
            },
            configurable: !0,
            enumerable: !0
        }
    }
    static getPropertyOptions(e) {
        return this.elementProperties.get(e) || U
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const e = Object.getPrototypeOf(this);
        if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Eu = new Map, this.hasOwnProperty("properties")) {
            const e = this.properties,
                t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
            for (const n of t) this.createProperty(n, e[n])
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0
    }
    static finalizeStyles(e) {
        const t = [];
        if (Array.isArray(e)) {
            const n = new Set(e.flat(1 / 0).reverse());
            for (const e of n) t.unshift(L(e))
        } else void 0 !== e && t.push(L(e));
        return t
    }
    static _$Eh(e, t) {
        const n = t.attribute;
        return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
    }
    o() {
        var e;
        this._$Ep = new Promise((e => this.enableUpdating = e)), this._$AL = new Map, this._$Em(), this.requestUpdate(), null === (e = this.constructor.l) || void 0 === e || e.forEach((e => e(this)))
    }
    addController(e) {
        var t, n;
        (null !== (t = this._$Eg) && void 0 !== t ? t : this._$Eg = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (n = e.hostConnected) || void 0 === n || n.call(e))
    }
    removeController(e) {
        var t;
        null === (t = this._$Eg) || void 0 === t || t.splice(this._$Eg.indexOf(e) >>> 0, 1)
    }
    _$Em() {
        this.constructor.elementProperties.forEach(((e, t) => {
            this.hasOwnProperty(t) && (this._$Et.set(t, this[t]), delete this[t])
        }))
    }
    createRenderRoot() {
        var e;
        const t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
        return ((e, t) => {
            I ? e.adoptedStyleSheets = t.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : t.forEach((t => {
                const n = document.createElement("style"),
                    i = window.litNonce;
                void 0 !== i && n.setAttribute("nonce", i), n.textContent = t.cssText, e.appendChild(n)
            }))
        })(t, this.constructor.elementStyles), t
    }
    connectedCallback() {
        var e;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$Eg) || void 0 === e || e.forEach((e => {
            var t;
            return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
        }))
    }
    enableUpdating(e) {}
    disconnectedCallback() {
        var e;
        null === (e = this._$Eg) || void 0 === e || e.forEach((e => {
            var t;
            return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
        }))
    }
    attributeChangedCallback(e, t, n) {
        this._$AK(e, n)
    }
    _$ES(e, t, n = U) {
        var i, r;
        const o = this.constructor._$Eh(e, n);
        if (void 0 !== o && !0 === n.reflect) {
            const s = (null !== (r = null === (i = n.converter) || void 0 === i ? void 0 : i.toAttribute) && void 0 !== r ? r : V.toAttribute)(t, n.type);
            this._$Ei = e, null == s ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Ei = null
        }
    }
    _$AK(e, t) {
        var n, i, r;
        const o = this.constructor,
            s = o._$Eu.get(e);
        if (void 0 !== s && this._$Ei !== s) {
            const e = o.getPropertyOptions(s),
                a = e.converter,
                c = null !== (r = null !== (i = null === (n = a) || void 0 === n ? void 0 : n.fromAttribute) && void 0 !== i ? i : "function" == typeof a ? a : null) && void 0 !== r ? r : V.fromAttribute;
            this._$Ei = s, this[s] = c(t, e.type), this._$Ei = null
        }
    }
    requestUpdate(e, t, n) {
        let i = !0;
        void 0 !== e && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || q)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === n.reflect && this._$Ei !== e && (void 0 === this._$E_ && (this._$E_ = new Map), this._$E_.set(e, n))) : i = !1), !this.isUpdatePending && i && (this._$Ep = this._$EC())
    }
    async _$EC() {
        this.isUpdatePending = !0;
        try {
            await this._$Ep
        } catch (e) {
            Promise.reject(e)
        }
        const e = this.scheduleUpdate();
        return null != e && await e, !this.isUpdatePending
    }
    scheduleUpdate() {
        return this.performUpdate()
    }
    performUpdate() {
        var e;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Et && (this._$Et.forEach(((e, t) => this[t] = e)), this._$Et = void 0);
        let t = !1;
        const n = this._$AL;
        try {
            t = this.shouldUpdate(n), t ? (this.willUpdate(n), null === (e = this._$Eg) || void 0 === e || e.forEach((e => {
                var t;
                return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
            })), this.update(n)) : this._$EU()
        } catch (e) {
            throw t = !1, this._$EU(), e
        }
        t && this._$AE(n)
    }
    willUpdate(e) {}
    _$AE(e) {
        var t;
        null === (t = this._$Eg) || void 0 === t || t.forEach((e => {
            var t;
            return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
        })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1
    }
    get updateComplete() {
        return this.getUpdateComplete()
    }
    getUpdateComplete() {
        return this._$Ep
    }
    shouldUpdate(e) {
        return !0
    }
    update(e) {
        void 0 !== this._$E_ && (this._$E_.forEach(((e, t) => this._$ES(t, this[t], e))), this._$E_ = void 0), this._$EU()
    }
    updated(e) {}
    firstUpdated(e) {}
}
var Q;
B.finalized = !0, B.elementProperties = new Map, B.elementStyles = [], B.shadowRootOptions = {
    mode: "open"
}, null == z || z({
    ReactiveElement: B
}), (null !== (F = globalThis.reactiveElementVersions) && void 0 !== F ? F : globalThis.reactiveElementVersions = []).push("1.2.1");
const H = globalThis.trustedTypes,
    G = H ? H.createPolicy("lit-html", {
        createHTML: e => e
    }) : void 0,
    W = `lit$${(Math.random()+"").slice(9)}$`,
    K = "?" + W,
    Y = `<${K}>`,
    J = document,
    X = (e = "") => J.createComment(e),
    Z = e => null === e || "object" != typeof e && "function" != typeof e,
    ee = Array.isArray,
    te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    ne = /-->/g,
    ie = />/g,
    re = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
    oe = /'/g,
    se = /"/g,
    ae = /^(?:script|style|textarea)$/i,
    ce = e => (t, ...n) => ({
        _$litType$: e,
        strings: t,
        values: n
    }),
    le = ce(1),
    ue = ce(2),
    he = Symbol.for("lit-noChange"),
    de = Symbol.for("lit-nothing"),
    pe = new WeakMap,
    fe = (e, t, n) => {
        var i, r;
        const o = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : t;
        let s = o._$litPart$;
        if (void 0 === s) {
            const e = null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r ? r : null;
            o._$litPart$ = s = new be(t.insertBefore(X(), e), e, void 0, null != n ? n : {})
        }
        return s._$AI(e), s
    },
    ve = J.createTreeWalker(J, 129, null, !1);
class me {
    constructor({
        strings: e,
        _$litType$: t
    }, n) {
        let i;
        this.parts = [];
        let r = 0,
            o = 0;
        const s = e.length - 1,
            a = this.parts,
            [c, l] = ((e, t) => {
                const n = e.length - 1,
                    i = [];
                let r, o = 2 === t ? "<svg>" : "",
                    s = te;
                for (let t = 0; t < n; t++) {
                    const n = e[t];
                    let a, c, l = -1,
                        u = 0;
                    for (; u < n.length && (s.lastIndex = u, c = s.exec(n), null !== c);) u = s.lastIndex, s === te ? "!--" === c[1] ? s = ne : void 0 !== c[1] ? s = ie : void 0 !== c[2] ? (ae.test(c[2]) && (r = RegExp("</" + c[2], "g")), s = re) : void 0 !== c[3] && (s = re) : s === re ? ">" === c[0] ? (s = null != r ? r : te, l = -1) : void 0 === c[1] ? l = -2 : (l = s.lastIndex - c[2].length, a = c[1], s = void 0 === c[3] ? re : '"' === c[3] ? se : oe) : s === se || s === oe ? s = re : s === ne || s === ie ? s = te : (s = re, r = void 0);
                    const h = s === re && e[t + 1].startsWith("/>") ? " " : "";
                    o += s === te ? n + Y : l >= 0 ? (i.push(a), n.slice(0, l) + "$lit$" + n.slice(l) + W + h) : n + W + (-2 === l ? (i.push(void 0), t) : h)
                }
                const a = o + (e[n] || "<?>") + (2 === t ? "</svg>" : "");
                if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return [void 0 !== G ? G.createHTML(a) : a, i]
            })(e, t);
        if (this.el = me.createElement(c, n), ve.currentNode = this.el.content, 2 === t) {
            const e = this.el.content,
                t = e.firstChild;
            t.remove(), e.append(...t.childNodes)
        }
        for (; null !== (i = ve.nextNode()) && a.length < s;) {
            if (1 === i.nodeType) {
                if (i.hasAttributes()) {
                    const e = [];
                    for (const t of i.getAttributeNames())
                        if (t.endsWith("$lit$") || t.startsWith(W)) {
                            const n = l[o++];
                            if (e.push(t), void 0 !== n) {
                                const e = i.getAttribute(n.toLowerCase() + "$lit$").split(W),
                                    t = /([.?@])?(.*)/.exec(n);
                                a.push({
                                    type: 1,
                                    index: r,
                                    name: t[2],
                                    strings: e,
                                    ctor: "." === t[1] ? xe : "?" === t[1] ? Ee : "@" === t[1] ? Se : we
                                })
                            } else a.push({
                                type: 6,
                                index: r
                            })
                        } for (const t of e) i.removeAttribute(t)
                }
                if (ae.test(i.tagName)) {
                    const e = i.textContent.split(W),
                        t = e.length - 1;
                    if (t > 0) {
                        i.textContent = H ? H.emptyScript : "";
                        for (let n = 0; n < t; n++) i.append(e[n], X()), ve.nextNode(), a.push({
                            type: 2,
                            index: ++r
                        });
                        i.append(e[t], X())
                    }
                }
            } else if (8 === i.nodeType)
                if (i.data === K) a.push({
                    type: 2,
                    index: r
                });
                else {
                    let e = -1;
                    for (; - 1 !== (e = i.data.indexOf(W, e + 1));) a.push({
                        type: 7,
                        index: r
                    }), e += W.length - 1
                } r++
        }
    }
    static createElement(e, t) {
        const n = J.createElement("template");
        return n.innerHTML = e, n
    }
}

function ye(e, t, n = e, i) {
    var r, o, s, a;
    if (t === he) return t;
    let c = void 0 !== i ? null === (r = n._$Cl) || void 0 === r ? void 0 : r[i] : n._$Cu;
    const l = Z(t) ? void 0 : t._$litDirective$;
    return (null == c ? void 0 : c.constructor) !== l && (null === (o = null == c ? void 0 : c._$AO) || void 0 === o || o.call(c, !1), void 0 === l ? c = void 0 : (c = new l(e), c._$AT(e, n, i)), void 0 !== i ? (null !== (s = (a = n)._$Cl) && void 0 !== s ? s : a._$Cl = [])[i] = c : n._$Cu = c), void 0 !== c && (t = ye(e, c._$AS(e, t.values), c, i)), t
}
class ge {
    constructor(e, t) {
        this.v = [], this._$AN = void 0, this._$AD = e, this._$AM = t
    }
    get parentNode() {
        return this._$AM.parentNode
    }
    get _$AU() {
        return this._$AM._$AU
    }
    p(e) {
        var t;
        const {
            el: {
                content: n
            },
            parts: i
        } = this._$AD, r = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : J).importNode(n, !0);
        ve.currentNode = r;
        let o = ve.nextNode(),
            s = 0,
            a = 0,
            c = i[0];
        for (; void 0 !== c;) {
            if (s === c.index) {
                let t;
                2 === c.type ? t = new be(o, o.nextSibling, this, e) : 1 === c.type ? t = new c.ctor(o, c.name, c.strings, this, e) : 6 === c.type && (t = new ke(o, this, e)), this.v.push(t), c = i[++a]
            }
            s !== (null == c ? void 0 : c.index) && (o = ve.nextNode(), s++)
        }
        return r
    }
    m(e) {
        let t = 0;
        for (const n of this.v) void 0 !== n && (void 0 !== n.strings ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++
    }
}
class be {
    constructor(e, t, n, i) {
        var r;
        this.type = 2, this._$AH = de, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cg = null === (r = null == i ? void 0 : i.isConnected) || void 0 === r || r
    }
    get _$AU() {
        var e, t;
        return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cg
    }
    get parentNode() {
        let e = this._$AA.parentNode;
        const t = this._$AM;
        return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e
    }
    get startNode() {
        return this._$AA
    }
    get endNode() {
        return this._$AB
    }
    _$AI(e, t = this) {
        e = ye(this, e, t), Z(e) ? e === de || null == e || "" === e ? (this._$AH !== de && this._$AR(), this._$AH = de) : e !== this._$AH && e !== he && this.$(e) : void 0 !== e._$litType$ ? this.T(e) : void 0 !== e.nodeType ? this.S(e) : (e => {
            var t;
            return ee(e) || "function" == typeof(null === (t = e) || void 0 === t ? void 0 : t[Symbol.iterator])
        })(e) ? this.A(e) : this.$(e)
    }
    M(e, t = this._$AB) {
        return this._$AA.parentNode.insertBefore(e, t)
    }
    S(e) {
        this._$AH !== e && (this._$AR(), this._$AH = this.M(e))
    }
    $(e) {
        this._$AH !== de && Z(this._$AH) ? this._$AA.nextSibling.data = e : this.S(J.createTextNode(e)), this._$AH = e
    }
    T(e) {
        var t;
        const {
            values: n,
            _$litType$: i
        } = e, r = "number" == typeof i ? this._$AC(e) : (void 0 === i.el && (i.el = me.createElement(i.h, this.options)), i);
        if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === r) this._$AH.m(n);
        else {
            const e = new ge(r, this),
                t = e.p(this.options);
            e.m(n), this.S(t), this._$AH = e
        }
    }
    _$AC(e) {
        let t = pe.get(e.strings);
        return void 0 === t && pe.set(e.strings, t = new me(e)), t
    }
    A(e) {
        ee(this._$AH) || (this._$AH = [], this._$AR());
        const t = this._$AH;
        let n, i = 0;
        for (const r of e) i === t.length ? t.push(n = new be(this.M(X()), this.M(X()), this, this.options)) : n = t[i], n._$AI(r), i++;
        i < t.length && (this._$AR(n && n._$AB.nextSibling, i), t.length = i)
    }
    _$AR(e = this._$AA.nextSibling, t) {
        var n;
        for (null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, t); e && e !== this._$AB;) {
            const t = e.nextSibling;
            e.remove(), e = t
        }
    }
    setConnected(e) {
        var t;
        void 0 === this._$AM && (this._$Cg = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
    }
}
class we {
    constructor(e, t, n, i, r) {
        this.type = 1, this._$AH = de, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = r, n.length > 2 || "" !== n[0] || "" !== n[1] ? (this._$AH = Array(n.length - 1).fill(new String), this.strings = n) : this._$AH = de
    }
    get tagName() {
        return this.element.tagName
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(e, t = this, n, i) {
        const r = this.strings;
        let o = !1;
        if (void 0 === r) e = ye(this, e, t, 0), o = !Z(e) || e !== this._$AH && e !== he, o && (this._$AH = e);
        else {
            const i = e;
            let s, a;
            for (e = r[0], s = 0; s < r.length - 1; s++) a = ye(this, i[n + s], t, s), a === he && (a = this._$AH[s]), o || (o = !Z(a) || a !== this._$AH[s]), a === de ? e = de : e !== de && (e += (null != a ? a : "") + r[s + 1]), this._$AH[s] = a
        }
        o && !i && this.k(e)
    }
    k(e) {
        e === de ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
    }
}
class xe extends we {
    constructor() {
        super(...arguments), this.type = 3
    }
    k(e) {
        this.element[this.name] = e === de ? void 0 : e
    }
}
const _e = H ? H.emptyScript : "";
class Ee extends we {
    constructor() {
        super(...arguments), this.type = 4
    }
    k(e) {
        e && e !== de ? this.element.setAttribute(this.name, _e) : this.element.removeAttribute(this.name)
    }
}
class Se extends we {
    constructor(e, t, n, i, r) {
        super(e, t, n, i, r), this.type = 5
    }
    _$AI(e, t = this) {
        var n;
        if ((e = null !== (n = ye(this, e, t, 0)) && void 0 !== n ? n : de) === he) return;
        const i = this._$AH,
            r = e === de && i !== de || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive,
            o = e !== de && (i === de || r);
        r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, e), this._$AH = e
    }
    handleEvent(e) {
        var t, n;
        "function" == typeof this._$AH ? this._$AH.call(null !== (n = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== n ? n : this.element, e) : this._$AH.handleEvent(e)
    }
}
class ke {
    constructor(e, t, n) {
        this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(e) {
        ye(this, e)
    }
}
const Te = window.litHtmlPolyfillSupport;
var Ce, Oe;
null == Te || Te(me, be), (null !== (Q = globalThis.litHtmlVersions) && void 0 !== Q ? Q : globalThis.litHtmlVersions = []).push("2.1.2");
class Ae extends B {
    constructor() {
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Dt = void 0
    }
    createRenderRoot() {
        var e, t;
        const n = super.createRenderRoot();
        return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = n.firstChild), n
    }
    update(e) {
        const t = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Dt = fe(t, this.renderRoot, this.renderOptions)
    }
    connectedCallback() {
        var e;
        super.connectedCallback(), null === (e = this._$Dt) || void 0 === e || e.setConnected(!0)
    }
    disconnectedCallback() {
        var e;
        super.disconnectedCallback(), null === (e = this._$Dt) || void 0 === e || e.setConnected(!1)
    }
    render() {
        return he
    }
}
Ae.finalized = !0, Ae._$litElement$ = !0, null === (Ce = globalThis.litElementHydrateSupport) || void 0 === Ce || Ce.call(globalThis, {
    LitElement: Ae
});
const Ie = globalThis.litElementPolyfillSupport;
null == Ie || Ie({
    LitElement: Ae
}), (null !== (Oe = globalThis.litElementVersions) && void 0 !== Oe ? Oe : globalThis.litElementVersions = []).push("3.1.2");
class Me extends Ae {
    static get styles() {
        return R`:host{display:block}`
    }
    render() {
        return le` <slot></slot> `
    }
}
let Pe = class extends(function(e) {
    if (A in e) return e;
    let t = !1;
    class n extends e {
        constructor(...e) {
            super(...e), this._alertReporterHandleRegister = e => {
                e.stopImmediatePropagation(), e.detail.register(this)
            }, this._alertReporterHandleAlert = e => {
                const t = e.detail,
                    n = E.getRegisteredElements(this);
                if (n)
                    for (const i of n)
                        if (i.shouldDisplayAlert(t)) return e.stopImmediatePropagation(), void i.displayAlert(t)
            }, t || (k(this.constructor), t = !0)
        }
        connectedCallback() {
            super.connectedCallback && super.connectedCallback(), this.addEventListener("_faceplate-register-alert-display", this._alertReporterHandleRegister), this.addEventListener("faceplate-alert", this._alertReporterHandleAlert)
        }
        disconnectedCallback() {
            super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("_faceplate-register-alert-display", this._alertReporterHandleRegister), this.removeEventListener("faceplate-alert", this._alertReporterHandleAlert)
        }
    }
    return n[A] = !0, n
}(Me)) {};
Pe = r([c("faceplate-alert-reporter")], Pe);
const De = Symbol("mixins/csrf");
const Ne = function(e) {
    if (De in e) return e;
    class t extends e {
        constructor() {
            super(...arguments), this.csrfProviderToken = "", this._csrfManagerHandleRequest = e => {
                if (!this.csrfProviderToken) return;
                if ("post" !== e.detail.request.method) return;
                e.detail.request.body.append("csrf_token", this.csrfProviderToken)
            }, this._csrfManagerHandleUpdateCsrf = e => {
                this.csrfProviderToken = e.detail.token
            }
        }
        connectedCallback() {
            super.connectedCallback && super.connectedCallback(), this.addEventListener("faceplate-request", this._csrfManagerHandleRequest), this.addEventListener("faceplate-update-csrf", this._csrfManagerHandleUpdateCsrf)
        }
        disconnectedCallback() {
            super.disconnectedCallback && super.disconnectedCallback(), this.removeEventListener("faceplate-request", this._csrfManagerHandleRequest), this.removeEventListener("faceplate-update-csrf", this._csrfManagerHandleUpdateCsrf)
        }
    }
    return t[De] = !0, t
}(Me);
let Re = class extends Ne {
    constructor() {
        super(...arguments), this.token = ""
    }
    get csrfProviderToken() {
        return this.token
    }
    set csrfProviderToken(e) {
        this.token = e
    }
};
r([u({
    type: String,
    noAccessor: !0
})], Re.prototype, "token", void 0), Re = r([c("faceplate-csrf-provider")], Re);
class Le {
    constructor(e, t) {
        this._events = new Map, this._isConnected = !1, e.addController(this), this.host = e, t && (this._getTarget = t)
    }
    _getTarget() {
        return this.host
    }
    hostConnected() {
        const e = this._getTarget();
        for (const [t, n] of this._events) Array.isArray(n) ? e.addEventListener(t, n[0], n[1]) : e.addEventListener(t, n);
        this._isConnected = !0
    }
    hostDisconnected() {
        const e = this._getTarget();
        for (const [t, n] of this._events) {
            const i = Array.isArray(n) ? n[0] : n;
            e.removeEventListener(t, i)
        }
        this._isConnected = !1
    }
    define(e, t, n) {
        if (this._events.has(e)) throw new Error(`Event ${e} already defined.`);
        if (n ? this._events.set(e, [t, n]) : this._events.set(e, t), this._isConnected) {
            this._getTarget().addEventListener(e, t, n)
        }
        return t
    }
}
let Fe = class extends Ae {
    constructor() {
        super(...arguments), this.level = void 0, this.dismissable = !1, this.fading = !1, this._events = new Le(this), this._onAnimationEnd = this._events.define("transitionend", (() => {
            if (this.fading) {
                const e = g("faceplate-close");
                this.dispatchEvent(e), e.defaultPrevented || this.remove()
            }
        }))
    }
    static get styles() {
        return R`:host{background:var(--color-ui-modalbackground);border-radius:4px;display:block;margin:1rem 0;opacity:1;padding:1rem;transition:opacity .3s;box-shadow:var(--boxshadow-modal);border:1px solid var(--color-tone-4);--close-icon-color:currentColor}icon-close{position:absolute;left:-1.375em;top:50%;transform:translateY(-50%);color:var(--close-icon-color);cursor:pointer}icon-close:not(:defined){width:1rem;text-align:center}:host([fading]){opacity:0}:host([level]){border-left:8px solid var(--color-primary-background)}:host([dismissable]){position:relative;border-left-width:1.75em}:host([level=alert]),:host([level=critical]),:host([level=emergency]),:host([level=error]){border-left-color:var(--color-danger-content);--close-icon-color:var(--color-global-white)}:host([level=warning]){border-left-color:var(--color-alert-caution);--close-icon-color:var(--color-global-black)}:host([level=notice]){border-left-color:var(--color-success-content);--close-icon-color:var(--color-global-white)}`
    }
    _handleDismiss(e) {
        this.dismissable && (e.stopPropagation(), this.dismiss())
    }
    _handleDismissKey(e) {
        "Enter" !== e.code && "Space" !== e.code || this._handleDismiss(e)
    }
    dismiss() {
        this.fading = !0
    }
    render() {
        return le` ${this.dismissable?le` <icon-close fill @click="${this._handleDismiss}" @keydown="${this._handleDismissKey}" tabindex="0" role="button" aria-pressed="false">X</icon-close> `:void 0} <slot></slot> `
    }
};
r([u({
    type: String,
    reflect: !0
})], Fe.prototype, "level", void 0), r([u({
    type: Boolean,
    reflect: !0
})], Fe.prototype, "dismissable", void 0), r([u({
    type: Boolean,
    reflect: !0
})], Fe.prototype, "fading", void 0), Fe = r([c("faceplate-toast")], Fe);
class je {
    constructor(e, t) {
        this._batchTimer = 0, this._batchDisplay = () => {
            if (this._batchTimer = 0, !this._batchQueue || !this._batchQueue.length) return;
            const e = function(e, t = O) {
                const n = [];
                if (!e.length) return n;
                e.sort(((e, t) => (void 0 === e.level ? b.none : e.level) - (void 0 === t.level ? b.none : t.level)));
                let i = {},
                    r = e[0].level,
                    o = 0;

                function s() {
                    for (const e in i) {
                        const o = i[e];
                        if (1 === o.length) n.push(o[0]);
                        else {
                            const i = [];
                            let s = 0;
                            for (const e of o) e.meta && i.push(e.meta), s += void 0 === e.count ? 1 : e.count;
                            n.push(t(r, e, i, s))
                        }
                    }
                }
                for (const t of e) {
                    t.level !== r && (s(), i = {}, r = t.level, o = 0);
                    const e = t.message || "";
                    Object.prototype.hasOwnProperty.call(i, e) ? i[e].push(t) : i[e] = [t], o += t.count || 1
                }
                return o > 0 && s(), n
            }(this._batchQueue);
            for (const t of e) this.options.onAlert(t);
            this._batchQueue.length = 0
        }, e.addController(this), this.host = e, this.options = t, t.batchWindow && t.batchWindow > 0 && (this._batchQueue = [])
    }
    hostConnected() {
        T(this.host).then((e => {
            e && (this._reporter = e, E.register(e, this))
        }))
    }
    hostDisconnected() {
        this._reporter && (E.unregister(this._reporter, this), this._reporter = void 0), this._batchTimer && window.clearTimeout(this._batchTimer), this._batchQueue && (this._batchQueue.length = 0)
    }
    shouldDisplayAlert(e) {
        const t = this.options;
        if ("number" == typeof e.level) {
            if (t.max && e.level > t.max) return !1;
            if (t.min && e.level < t.min) return !1
        } else if (void 0 !== t.min || void 0 !== t.max) return !1;
        return !t.name || t.name === e.name
    }
    displayAlert(e) {
        if (this._batchQueue) {
            if (this._batchQueue.push(e), this._batchTimer) return;
            this._batchTimer = window.setTimeout(this._batchDisplay, this.options.batchWindow)
        } else this.options.onAlert(e)
    }
}

function $e(e, t, n) {
    n || (n = t);
    const i = function(e) {
        const t = e.getRootNode();
        return t instanceof ShadowRoot ? t.host.localName : ""
    }(n);
    i ? fe(e, t, {
        scope: i
    }) : fe(e, t)
}
let ze = class extends Ae {
    constructor() {
        super(...arguments), this.ariaLive = "polite", this.min = b.error, this.max = b.info, this._alertsCtrl = new je(this, {
            batchWindow: 100,
            onAlert: e => {
                const {
                    level: t
                } = e, n = function(e, t) {
                    const {
                        level: n,
                        name: i,
                        message: r,
                        count: o
                    } = t, s = document.createElement("faceplate-toast"), a = o && o > 1 ? `(${o}) ` : "", c = i ? le` <strong>${i}</strong><br> ` : "";
                    void 0 !== n && s.setAttribute("level", b[n].toLowerCase());
                    const l = r || (c ? "" : n ? b[n] : "Unknown");
                    return $e(le` ${a}${c}${l} `, s, e), s
                }(this, e);
                n.dismissable = !0, t && t >= b.warning && t <= b.info && window.setTimeout((() => {
                    n.dismiss()
                }), 3e3), this.appendChild(n)
            }
        })
    }
    connectedCallback() {
        super.connectedCallback(), this._alertsCtrl.options.min = this.min, this._alertsCtrl.options.max = this.max
    }
    static get styles() {
        return R`:host{position:fixed;bottom:0;left:0;right:0;text-align:center;padding:0 1rem}`
    }
    render() {
        return le` <slot></slot> `
    }
};

function Ve(e) {
    const t = [e];
    return t.raw = t, R(t)
}
r([u({
    type: String,
    reflect: !0,
    attribute: "aria-live"
})], ze.prototype, "ariaLive", void 0), r([u({
    attribute: "min",
    converter: C
})], ze.prototype, "min", void 0), r([u({
    attribute: "max",
    converter: C
})], ze.prototype, "max", void 0), ze = r([c("faceplate-toaster")], ze);
const qe = e => {
    const t = {
        state: e,
        listeners: [],
        getState: () => t.state,
        updateState: e => {
            t.state !== e && (t.state = e, t.listeners.forEach((e => e.requestUpdate())))
        },
        subscribe: e => (t.listeners.includes(e) || t.listeners.push(e), () => {
            const n = t.listeners.indexOf(e);
            t.listeners.splice(n, 1)
        }),
        unsubscribe: e => {
            const n = t.listeners.indexOf(e);
            n >= 0 && t.listeners.splice(n, 1)
        }
    };
    return t
};
var Ue, Be;

function Qe(e, t) {
    const n = parseInt(e.searchParams.get(t) || "");
    return isFinite(n) ? n : void 0
}

function He() {
    const e = new URL(location.href);
    return {
        cx: Qe(e, Ue.CX),
        cy: Qe(e, Ue.CY),
        debug: e.searchParams.has(Ue.Debug),
        edit: e.searchParams.has(Ue.Edit),
        fullscreen: e.searchParams.has(Ue.FullScreen),
        px: Qe(e, Ue.PX)
    }
}! function(e) {
    e.CX = "cx", e.CY = "cy", e.Debug = "debug", e.Edit = "edit", e.FullScreen = "fullscreen", e.PX = "px", e.UTMSource = "utm_source", e.UTMMedium = "utm_medium"
}(Ue || (Ue = {})),
function(e) {
    e[e.Min = 1] = "Min", e[e.Optimal = 20] = "Optimal", e[e.Max = 50] = "Max"
}(Be || (Be = {}));
const Ge = qe({
    camera: !1,
    canvas: !1,
    cooldown: !1
});

function We() {
    return Object.values(Ge.getState()).every((e => e))
}
const Ke = qe(He().fullscreen),
    Ye = qe(!1),
    Je = qe(!1),
    Xe = qe(null),
    Ze = qe(null),
    et = qe(-1),
    tt = qe(-1),
    nt = qe(-1),
    it = qe(Be.Min);

function rt(e) {
    return function(...t) {
        if (Ke.getState()) return e(...t)
    }
}
const ot = qe({
        colorPalette: {
            colors: []
        },
        canvasConfigurations: [],
        canvasHeight: 0,
        canvasWidth: 0
    }),
    st = qe(0),
    at = qe(0),
    ct = qe(!1),
    lt = qe([]),
    ut = qe(null);
class ht {
    constructor(e, t) {
        this.host = e, this.globalState = t, this.host = e, this.globalState = t, e.addController(this)
    }
    hostConnected() {
        this.globalState.subscribe(this.host)
    }
    hostDisconnected() {
        this.globalState.unsubscribe(this.host)
    }
    state(e) {
        if (null == e) return this.globalState.getState();
        this.globalState.updateState(e)
    }
}
const dt = (e, t) => new ht(e, t),
    pt = (e, t) => navigator.sendBeacon(e, t),
    ft = (e, t) => fetch(e, {
        body: t,
        headers: {
            "Content-Type": "text/plain"
        },
        keepalive: !0,
        method: "POST"
    }),
    vt = e => {
        const t = "function" == typeof navigator.sendBeacon ? pt : "function" == typeof fetch ? ft : void 0;
        void 0 !== t && t("/svc/mona-lisa/v2j", JSON.stringify(e))
    };
let mt, yt = [];

function gt() {
    vt([...yt]), bt()
}

function bt() {
    yt = [], mt && clearTimeout(mt), mt = void 0
}

function wt(e) {
    var t, n;
    if ("number" == typeof e) return null === (n = null === (t = ot.getState()) || void 0 === t ? void 0 : t.colorPalette.colors.find((t => t.index === e))) || void 0 === n ? void 0 : n.hex
}
const xt = {
    1: "dark red",
    2: "red",
    3: "orange",
    4: "yellow",
    6: "dark green",
    7: "green",
    8: "light green",
    9: "dark teal",
    10: "teal",
    12: "dark blue",
    13: "blue",
    14: "light blue",
    15: "indigo",
    16: "periwinkle",
    18: "dark purple",
    19: "purple",
    22: "pink",
    23: "light pink",
    24: "dark brown",
    25: "brown",
    27: "black",
    29: "gray",
    30: "light gray",
    31: "white"
};

function _t(e) {
    const t = e.toLowerCase();
    return "#fff" === t || "#ffffff" === t
}

function Et(e) {
    return e.toString(16).padStart(2, "0")
}
var St, kt = new Uint8Array(16);

function Tt() {
    if (!St && !(St = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return St(kt)
}
var Ct = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function Ot(e) {
    return "string" == typeof e && Ct.test(e)
}
for (var At = [], It = 0; It < 256; ++It) At.push((It + 256).toString(16).substr(1));

function Mt(e, t, n) {
    var i = (e = e || {}).random || (e.rng || Tt)();
    if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
        n = n || 0;
        for (var r = 0; r < 16; ++r) t[n + r] = i[r];
        return t
    }
    return function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = (At[e[t + 0]] + At[e[t + 1]] + At[e[t + 2]] + At[e[t + 3]] + "-" + At[e[t + 4]] + At[e[t + 5]] + "-" + At[e[t + 6]] + At[e[t + 7]] + "-" + At[e[t + 8]] + At[e[t + 9]] + "-" + At[e[t + 10]] + At[e[t + 11]] + At[e[t + 12]] + At[e[t + 13]] + At[e[t + 14]] + At[e[t + 15]]).toLowerCase();
        if (!Ot(n)) throw TypeError("Stringified UUID is invalid");
        return n
    }(i)
}
var Pt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function Dt(e) {
    if (e.__esModule) return e;
    var t = Object.defineProperty({}, "__esModule", {
        value: !0
    });
    return Object.keys(e).forEach((function(n) {
        var i = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    })), t
}

function Nt(e) {
    var t = {
        exports: {}
    };
    return e(t, t.exports), t.exports
}
var Rt = Nt((function(e, t) {
    var n;
    n = function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) t[i] = n[i]
            }
            return t
        }

        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function n(i) {
            function r() {}

            function o(t, n, o) {
                if ("undefined" != typeof document) {
                    "number" == typeof(o = e({
                        path: "/"
                    }, r.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        var s = JSON.stringify(n);
                        /^[\{\[]/.test(s) && (n = s)
                    } catch (e) {}
                    n = i.write ? i.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var a = "";
                    for (var c in o) o[c] && (a += "; " + c, !0 !== o[c] && (a += "=" + o[c].split(";")[0]));
                    return document.cookie = t + "=" + n + a
                }
            }

            function s(e, n) {
                if ("undefined" != typeof document) {
                    for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], s = 0; s < o.length; s++) {
                        var a = o[s].split("="),
                            c = a.slice(1).join("=");
                        n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                        try {
                            var l = t(a[0]);
                            if (c = (i.read || i)(c, l) || t(c), n) try {
                                c = JSON.parse(c)
                            } catch (e) {}
                            if (r[l] = c, e === l) break
                        } catch (e) {}
                    }
                    return e ? r[e] : r
                }
            }
            return r.set = o, r.get = function(e) {
                return s(e, !1)
            }, r.getJSON = function(e) {
                return s(e, !0)
            }, r.remove = function(t, n) {
                o(t, "", e(n, {
                    expires: -1
                }))
            }, r.defaults = {}, r.withConverter = n, r
        }((function() {}))
    }, e.exports = n()
}));
var Lt, Ft;
! function(e) {
    e.RefreshAuth = "refreshAuth", e.Close = "close", e.Share = "share", e.SignIn = "signIn", e.SyncCoordinates = "syncCoordinates", e.OpenProfile = "openProfile"
}(Lt || (Lt = {})),
function(e) {
    e.SetFullScreen = "setFullScreen", e.InjectAuthHeaders = "injectAuthHeaders", e.InjectTelemetryDefaults = "injectTelemetryDefaults"
}(Ft || (Ft = {}));
class jt {
    close() {
        throw new Error("Not implemented")
    }
    refreshAuth() {
        throw new Error("Not implemented")
    }
    signIn(e) {
        throw new Error("Not implemented")
    }
    share(e) {
        throw new Error("Not implemented")
    }
    syncCoordinates(e) {}
    openProfile(e) {
        throw new Error("Not implemented")
    }
}
class $t extends jt {
    get host() {
        return window.hot_potato_native
    }
    close() {
        this.host.close()
    }
    refreshAuth() {
        this.host.refreshAuth()
    }
    signIn() {
        this.host.signIn()
    }
    share({
        mode: e,
        fileName: t,
        fileData: n,
        url: i
    }) {
        this.host.share(e, t, n, i)
    }
    openProfile({
        profileName: e
    }) {
        this.host.openProfile(e)
    }
}
class zt extends jt {
    sendMessage(e) {
        window.webkit.messageHandlers.callbackHandler.postMessage(e)
    }
    close() {
        this.sendMessage(Lt.Close)
    }
    refreshAuth() {
        this.sendMessage(Lt.RefreshAuth)
    }
    signIn() {
        this.sendMessage(Lt.SignIn)
    }
    share(e) {
        this.sendMessage(JSON.stringify({
            type: Lt.Share,
            fileName: e.fileName,
            fileData: e.fileData,
            mode: e.mode,
            url: e.url
        }))
    }
    openProfile({
        profileName: e
    }) {
        this.sendMessage(JSON.stringify({
            type: Lt.OpenProfile,
            userName: e
        }))
    }
}
class Vt extends jt {
    sendMessage(e) {
        const t = function() {
            const e = parent !== window ? document.referrer : document.location.origin,
                t = e.endsWith("/") ? e.slice(0, -1) : e;
            return /^https:\/\/[\w\d-.]+\.snoo\.dev$/.test(t) ? "*" : t.startsWith("https://new.reddit.com") ? t : CLIENT_CONFIG.REDDIT_MESSAGE_TARGET
        }();
        window.parent.postMessage(e, t)
    }
    close() {
        this.sendMessage({
            type: Lt.Close
        })
    }
    refreshAuth() {
        this.sendMessage({
            type: Lt.RefreshAuth
        })
    }
    signIn(e) {
        this.sendMessage({
            type: Lt.SignIn,
            dest: e
        })
    }
    syncCoordinates(e) {
        this.sendMessage({
            type: Lt.SyncCoordinates,
            data: e
        })
    }
    openProfile(e) {
        this.sendMessage({
            type: Lt.OpenProfile,
            data: e
        })
    }
}

function qt() {
    return !!window.hot_potato_native
}

function Ut() {
    var e, t, n;
    return void 0 !== (null === (n = null === (t = null === (e = window.webkit) || void 0 === e ? void 0 : e.messageHandlers) || void 0 === t ? void 0 : t.callbackHandler) || void 0 === n ? void 0 : n.postMessage)
}

function Bt() {
    return window.parent !== window
}

function Qt() {
    return qt() || Ut()
}
const Ht = () => {
        const e = Rt.get("session_tracker"),
            {
                domain: t,
                url: n
            } = Wt();
        return Object.assign(Object.assign({}, ((e = "") => {
            const t = e.split(".");
            return {
                id: t[0],
                created_timestamp: parseInt(t[2], 10)
            }
        })(e)), {
            referrer_domain: t,
            referrer_url: n
        })
    },
    Gt = () => {
        const e = Rt.get("loid"),
            t = e && ((e = "") => {
                let t = "",
                    n = "";
                const i = e.split(".");
                i.length >= 3 && (t = `t2_${i[0].replace(/\b0+/g,"")}`, n = i[2]);
                return {
                    id: t,
                    cookie_created_timestamp: parseInt(n, 10)
                }
            })(e),
            n = Xe.getState(),
            i = n && {
                id: n.id,
                logged_in: n.canParticipate
            };
        return Object.assign(Object.assign({}, t), i)
    },
    Wt = () => {
        const e = document.referrer;
        let t = "";
        if (e) {
            t = new URL(document.referrer).hostname
        }
        return {
            url: e,
            domain: t
        }
    },
    Kt = () => {
        const {
            hostname: e,
            origin: t,
            pathname: n,
            search: i
        } = window.location, r = `${t}${n}`;
        return {
            base_url: i ? `${r}${i}` : r,
            domain: e,
            user_agent: window.navigator.userAgent
        }
    },
    Yt = ({
        source: e,
        action: t,
        noun: n
    }, r = {}) => Object.assign(Object.assign({
        source: e,
        action: t,
        noun: n,
        uuid: Mt(),
        request: Kt()
    }, (() => {
        const e = Ze.getState() || {},
            {
                app: t
            } = e,
            n = i(e, ["app"]);
        return Object.assign(Object.assign({}, n), {
            client_timestamp: Date.now(),
            app: Object.assign(Object.assign({}, t), {
                name: (null == t ? void 0 : t.name) || Ut() && "ios" || qt() && "android" || "mona-lisa"
            }),
            referrer: n.referrer || Wt(),
            session: n.session || Ht(),
            user: n.user || Gt()
        })
    })()), r);
var Jt, Xt, Zt;
! function(e) {
    e.Global = "global", e.HotPotato = "hot_potato"
}(Jt || (Jt = {})),
function(e) {
    e.Click = "click", e.Complete = "complete", e.Left = "left", e.View = "view", e.Set = "set"
}(Xt || (Xt = {})),
function(e) {
    e.Pixel = "pixel", e.Screen = "screen", e.Share = "share", e.Submit = "submit", e.Tutorial = "tutorial", e.Username = "username", e.Rectangle = "rectangle"
}(Zt || (Zt = {}));
const en = Symbol("mixins/with-tracking");

function tn(e) {
    if (en in e) return e;
    class t extends e {
        constructor() {
            super(...arguments), this.trackEvent = e => {
                const t = g("track-event", {
                    details: e
                });
                this.dispatchEvent(t)
            }
        }
    }
    return t[en] = !0, t
}
const nn = R`:host{display:inline-block;fill:currentColor;vertical-align:middle;line-height:1em}svg{fill:currentColor;height:1em;width:auto}`;

function rn(e, t, n, i = nn) {
    if (n) {
        class o extends Ae {
            constructor() {
                super(...arguments), this.fill = !1
            }
            static get styles() {
                return i
            }
            render() {
                return this.fill ? n : t
            }
        }
        r([u({
            type: Boolean
        })], o.prototype, "fill", void 0), window.customElements.define(e, o)
    } else {
        class n extends Ae {
            static get styles() {
                return i
            }
            render() {
                return t
            }
        }
        window.customElements.define(e, n)
    }
}
rn("icon-meme", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M20.125 6.875h-1V1.4a1.125 1.125 0 00-1.716-.961L13.421 2.9a11.408 11.408 0 00-6.842 0L2.592.44a1.125 1.125 0 00-1.717.96v7.007A6.969 6.969 0 00.375 11a7.5 7.5 0 002.86 5.783A10.55 10.55 0 0010 19.125a10.55 10.55 0 006.765-2.342 7.668 7.668 0 002.758-4.658h.6zm-13.7-2.6l.282-.1a10.118 10.118 0 016.584 0l.282.1 4.3-2.656v5.256h-5v1h-1.75v-1H3.875v1H2.082l.043-6.254zm9.538 11.546A9.3 9.3 0 0110 17.875a9.3 9.3 0 01-5.964-2.052A6.272 6.272 0 011.625 11a5.717 5.717 0 01.323-1.875h1.927v3h7.25v-3h1.75v3h5.38a6.5 6.5 0 01-2.291 3.698z"/><path d="M6.6 13.554l-.874.893A6.127 6.127 0 0010 16.125a6.458 6.458 0 001.661-.215l-.322-1.21A5.1 5.1 0 016.6 13.554z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M3.875 7.875v-1h7.25v1h1.75v-1h6.25V1.4a1.125 1.125 0 00-1.716-.961L13.421 2.9a11.408 11.408 0 00-6.842 0L2.592.44a1.125 1.125 0 00-1.717.96v6.475zM12.875 12.125v-3h-1.75v3h-7.25v-3H.636A6.939 6.939 0 00.375 11a7.5 7.5 0 002.86 5.783A10.55 10.55 0 0010 19.125a10.55 10.55 0 006.765-2.342 7.668 7.668 0 002.758-4.658zm-2.875 4a6.127 6.127 0 01-4.27-1.678l.874-.893a5.1 5.1 0 004.735 1.146l.322 1.208a6.458 6.458 0 01-1.661.217z"/></svg>`);
const on = tn(Ae);
let sn = class extends on {
    constructor() {
        super(), this.debug = !1, this.routeName = "", this.isFullScreen = dt(this, Ke), this._events = new Le(this), this._trackEvent = this._events.define("track-event", (e => {
            const t = e.detail.details;
            var n;
            n = t, yt.push(n), (e => {
                if (!e) return !1;
                const {
                    source: t,
                    action: n,
                    noun: i
                } = e;
                return "global__view__screen" == `${t}__${n}__${i}`
            })(n) || yt.length >= 40 ? gt() : mt || (mt = setTimeout((() => gt()), 3e3))
        })), this._onPageHide = () => {
            ! function(e) {
                const t = [...yt, ...e || []];
                vt(t), bt()
            }([Yt({
                source: Jt.Global,
                action: Xt.Left,
                noun: Zt.Screen
            }, {
                action_info: {
                    page_type: "place_editor"
                }
            })])
        }, dt(this, Ge)
    }
    static get styles() {
        return Ve("header {\n  padding-left: calc(50vw - 50%);\n  padding-right: calc(50vw - 50%);\n  margin-left: calc(0px - (50vw - 50%));\n  margin-right: calc(0px - (50vw - 50%));\n  padding-top: var(--faceplate-body-padding);\n  padding-bottom: var(--faceplate-body-padding);\n  margin-top: calc(-1 * var(--faceplate-body-padding));\n  margin-bottom: var(--faceplate-body-padding);\n  background: var(--color-tone-6);\n  font-size: 18px;\n  font-weight: 700;\n  background-color: var(--color-tone-5);\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);\n  margin: 0;\n  padding: 0 16px;\n  height: 60px;\n  line-height: 60px;\n}\n")
    }
    connectedCallback() {
        super.connectedCallback(), window.addEventListener("pagehide", this._onPageHide)
    }
    disconnectedCallback() {
        super.disconnectedCallback(), window.removeEventListener("pagehide", this._onPageHide)
    }
    updated(e) {
        this.isFullScreen.state() && We() && this.trackEvent(Yt({
            source: Jt.Global,
            action: Xt.View,
            noun: Zt.Screen
        }, {
            action_info: {
                page_type: "place_editor"
            }
        })), super.updated(e)
    }
    render() {
        return le` <slot></slot> `
    }
};

function an(e, t, n, i) {
    var r, o = !1,
        s = 0;

    function a() {
        r && clearTimeout(r)
    }

    function c() {
        for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++) l[u] = arguments[u];
        var h = this,
            d = Date.now() - s;

        function p() {
            s = Date.now(), n.apply(h, l)
        }

        function f() {
            r = void 0
        }
        o || (i && !r && p(), a(), void 0 === i && d > e ? p() : !0 !== t && (r = setTimeout(i ? f : p, void 0 === i ? e - d : e)))
    }
    return "boolean" != typeof t && (i = n, n = t, t = void 0), c.cancel = function() {
        a(), o = !0
    }, c
}

function cn(e, t, n) {
    return void 0 === n ? an(e, t, !1) : an(e, n, !1 !== t)
}
r([u({
    type: Boolean
})], sn.prototype, "debug", void 0), r([u({
    type: String
})], sn.prototype, "routeName", void 0), sn = r([c("mona-lisa-app")], sn), Object.freeze({
    shouldBindMethod: !1,
    useCapture: !1,
    useShadowRoot: !1
}), Object.freeze({
    shouldBindMethod: !1,
    useCapture: !0,
    useShadowRoot: !1
});
const ln = Symbol("mixins/events");
const un = e => null != e ? e : de;

function hn(...e) {
    Ye.getState() && console.info(e)
}

function dn(e, t, ...n) {
    console.error(e, t, ...n), t instanceof Error ? window.Sentry.captureException(t) : e instanceof Error ? window.Sentry.captureException(e) : "string" == typeof e && window.Sentry.captureMessage(e)
}
var pn;
! function(e) {
    e.FIRST_CONTENTFUL_PAINT = "first-contentful-paint", e.FIRST_MEANINGFUL_PAINT = "first-meaningful-paint"
}(pn || (pn = {})), rn("icon-refresh", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M16.375 10A6.375 6.375 0 1110 3.625h3.274L11.6 5.02l.8.96 3-2.5a.625.625 0 000-.96l-3-2.5-.8.96 1.674 1.4H10A7.625 7.625 0 1017.625 10zm-2.351-7L14 3.02v-.04z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M16 10a6 6 0 11-6-6h1.5v1.287a.6.6 0 00.346.543.591.591 0 00.254.056.6.6 0 00.384-.138l2.836-2.364a.5.5 0 000-.768L12.484.253a.6.6 0 00-.984.46V2H10a8 8 0 108 8z"/></svg>`), rn("icon-settings", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M10 6.875A3.125 3.125 0 1013.125 10 3.129 3.129 0 0010 6.875zm0 5A1.875 1.875 0 1111.875 10 1.877 1.877 0 0110 11.875z"/><path d="M19.549 8.849a1.124 1.124 0 00-1.116-.974H17.4a.915.915 0 01-.828-.608.906.906 0 01.163-1l.722-.723a1.127 1.127 0 00.1-1.495 9.631 9.631 0 00-1.608-1.608 1.129 1.129 0 00-1.494.1l-.724.724a.92.92 0 01-1.018.155.906.906 0 01-.588-.82V1.567a1.123 1.123 0 00-.974-1.116 8.782 8.782 0 00-2.3 0 1.123 1.123 0 00-.974 1.116V2.6a.915.915 0 01-.608.828.907.907 0 01-1-.163l-.723-.722a1.126 1.126 0 00-1.495-.1 9.631 9.631 0 00-1.608 1.608 1.127 1.127 0 00.1 1.494l.724.724a.917.917 0 01.155 1.018.906.906 0 01-.82.588H1.567a1.123 1.123 0 00-1.116.974 8.754 8.754 0 000 2.3 1.123 1.123 0 001.116.974H2.6a.915.915 0 01.828.608.906.906 0 01-.163 1l-.722.723a1.127 1.127 0 00-.1 1.495 9.707 9.707 0 001.608 1.608 1.13 1.13 0 001.494-.1l.724-.724a.916.916 0 011.018-.155.906.906 0 01.588.82v1.031a1.123 1.123 0 00.974 1.116 8.754 8.754 0 002.3 0 1.123 1.123 0 00.974-1.116V17.4a.915.915 0 01.608-.828.906.906 0 011 .163l.724.724a1.132 1.132 0 001.494.1 9.707 9.707 0 001.608-1.608 1.127 1.127 0 00-.1-1.494l-.724-.724a.917.917 0 01-.155-1.018.906.906 0 01.82-.588h1.031a1.123 1.123 0 001.116-.974 8.754 8.754 0 000-2.3zm-1.226 2.026H17.4a2.224 2.224 0 00-1.549 3.741l.65.65a8.459 8.459 0 01-1.235 1.234l-.65-.65a2.224 2.224 0 00-3.741 1.55v.921a7.216 7.216 0 01-1.75 0V17.4a2.159 2.159 0 00-1.378-1.98 2.154 2.154 0 00-2.363.433l-.65.65A8.459 8.459 0 013.5 15.266l.65-.65a2.224 2.224 0 00-1.55-3.741h-.923a7.388 7.388 0 010-1.75H2.6a2.159 2.159 0 001.98-1.378 2.152 2.152 0 00-.433-2.363l-.65-.65A8.362 8.362 0 014.734 3.5l.65.65a2.162 2.162 0 002.382.425A2.15 2.15 0 009.125 2.6v-.923a7.216 7.216 0 011.75 0V2.6a2.159 2.159 0 001.378 1.98 2.158 2.158 0 002.363-.433l.65-.65A8.362 8.362 0 0116.5 4.734l-.65.65a2.16 2.16 0 00-.425 2.382A2.15 2.15 0 0017.4 9.125h.921a7.388 7.388 0 010 1.75z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M19.549 8.849a1.124 1.124 0 00-1.116-.974H17.4a.915.915 0 01-.828-.608.906.906 0 01.163-1l.722-.723a1.127 1.127 0 00.1-1.495 9.631 9.631 0 00-1.608-1.608 1.129 1.129 0 00-1.494.1l-.724.724a.919.919 0 01-1.018.155.906.906 0 01-.588-.82V1.567a1.123 1.123 0 00-.974-1.116 8.782 8.782 0 00-2.3 0 1.123 1.123 0 00-.974 1.116V2.6a.915.915 0 01-.608.828.909.909 0 01-1-.163l-.723-.722a1.126 1.126 0 00-1.495-.1 9.631 9.631 0 00-1.608 1.608 1.127 1.127 0 00.1 1.494l.724.724a.917.917 0 01.155 1.018.906.906 0 01-.82.588H1.567a1.123 1.123 0 00-1.116.974 8.754 8.754 0 000 2.3 1.123 1.123 0 001.116.974H2.6a.915.915 0 01.828.608.906.906 0 01-.163 1l-.722.723a1.127 1.127 0 00-.1 1.495 9.707 9.707 0 001.608 1.608 1.131 1.131 0 001.494-.1l.724-.724a.916.916 0 011.018-.155.906.906 0 01.588.82v1.031a1.123 1.123 0 00.974 1.116 8.754 8.754 0 002.3 0 1.123 1.123 0 00.974-1.116V17.4a.915.915 0 01.608-.828.9.9 0 011 .163l.724.724a1.131 1.131 0 001.494.1 9.707 9.707 0 001.608-1.608 1.127 1.127 0 00-.1-1.494l-.724-.724a.917.917 0 01-.155-1.018.906.906 0 01.82-.588h1.031a1.123 1.123 0 001.116-.974 8.754 8.754 0 000-2.3zM10 13.125A3.125 3.125 0 1113.125 10 3.129 3.129 0 0110 13.125z"/></svg>`);
const fn = 1,
    vn = e => (...t) => ({
        _$litDirective$: e,
        values: t
    });
class mn {
    constructor(e) {}
    get _$AU() {
        return this._$AM._$AU
    }
    _$AT(e, t, n) {
        this._$Ct = e, this._$AM = t, this._$Ci = n
    }
    _$AS(e, t) {
        return this.update(e, t)
    }
    update(e, t) {
        return this.render(...t)
    }
}
const yn = vn(class extends mn {
    constructor(e) {
        var t;
        if (super(e), e.type !== fn || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
    }
    render(e) {
        return " " + Object.keys(e).filter((t => e[t])).join(" ") + " "
    }
    update(e, [t]) {
        var n, i;
        if (void 0 === this.st) {
            this.st = new Set, void 0 !== e.strings && (this.et = new Set(e.strings.join(" ").split(/\s/).filter((e => "" !== e))));
            for (const e in t) t[e] && !(null === (n = this.et) || void 0 === n ? void 0 : n.has(e)) && this.st.add(e);
            return this.render(t)
        }
        const r = e.element.classList;
        this.st.forEach((e => {
            e in t || (r.remove(e), this.st.delete(e))
        }));
        for (const e in t) {
            const n = !!t[e];
            n === this.st.has(e) || (null === (i = this.et) || void 0 === i ? void 0 : i.has(e)) || (n ? (r.add(e), this.st.add(e)) : (r.remove(e), this.st.delete(e)))
        }
        return he
    }
});
let gn = class extends Ae {
    constructor() {
        super(...arguments), this.selected = !1
    }
    static get styles() {
        return R`:host{margin:-8px;padding:8px;display:block}button{background:0 0;cursor:pointer;border:none;pointer-events:all;border-radius:50%;padding:8px}.layout{background-color:#fff;display:flex;align-items:center;justify-content:center;border-radius:50%;height:36px;width:36px;box-shadow:0 4px 10px rgb(0,0,0,.25);color:#000;font-size:20px;pointer-events:all}.selected{color:#fff;background:red}`
    }
    render() {
        return le` <button> <div class="layout ${yn({selected:this.selected})}"> <slot></slot> </div> </button> `
    }
};
r([u({
    type: Boolean
})], gn.prototype, "selected", void 0), gn = r([c("mona-lisa-icon-button")], gn);
let bn = class extends Ae {
    constructor() {
        super(...arguments), this.size = 20
    }
    render() {
        return le` <img alt="Loader icon" src="${CLIENT_CONFIG.STATIC_BASE_URL}assets/img/loader.gif" height="${this.size}" width="${this.size}"> `
    }
};
r([u({
    type: Number
})], bn.prototype, "size", void 0), bn = r([c("mona-lisa-loader")], bn);
var wn;
! function(e) {
    e.Auth = "auth", e.GameOver = "gameOver", e.Init = "init", e.Sync = "sync"
}(wn || (wn = {}));
let xn = class extends Ae {
    static get styles() {
        return Ve(":host {\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  background-color: #dae0e6;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000;\n}\n:host([type]) {\n  opacity: 1;\n  pointer-events: all;\n  z-index: 1;\n}\nh3 {\n  text-align: center;\n}\n.reload {\n  display: flex;\n  align-items: center;\n}\nmona-lisa-icon-button {\n  display: inline-block;\n}\nicon-refresh {\n  display: inline-flex;\n  font-size: 18px;\n}\n.gears {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n}\nicon-settings {\n  display: inline-flex;\n  font-size: 64px;\n  animation: rotate 1s 0s infinite both;\n}\n.second-gear {\n  margin-left: -8px;\n  transform: rotate(22.5deg) scaleX(-1);\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n")
    }
    reload() {
        const e = new URL(location.href);
        Ke.getState() ? e.searchParams.set(Ue.FullScreen, "") : e.searchParams.delete(Ue.FullScreen), location.href = e.toString()
    }
    render() {
        return this.type === wn.GameOver ? le` <div> <h3> Oops, something went wrong. </h3> <div class="reload"> Press <mona-lisa-icon-button @click="${this.reload}"><icon-refresh></icon-refresh></mona-lisa-icon-button> to reload the page. </div> </div> ` : this.type === wn.Init || this.type === wn.Auth ? le`<mona-lisa-loader size="${128}"></mona-lisa-loader>` : this.type === wn.Sync ? le` <div> <h1> Sychronizing configuration </h1> <div class="gears"> <icon-settings></icon-settings> <div class="second-gear"><icon-settings></icon-settings></div> </div> </div> ` : ""
    }
};
r([u({
    type: String
})], xn.prototype, "type", void 0), xn = r([c("mona-lisa-overlay")], xn);
var _n = Object.setPrototypeOf,
    En = void 0 === _n ? function(e, t) {
        return e.__proto__ = t, e
    } : _n,
    Sn = function(e) {
        function n(t) {
            void 0 === t && (t = "Invariant Violation");
            var i = e.call(this, "number" == typeof t ? "Invariant Violation: " + t + " (see https://github.com/apollographql/invariant-packages)" : t) || this;
            return i.framesToPop = 1, i.name = "Invariant Violation", En(i, n.prototype), i
        }
        return t(n, e), n
    }(Error);

function kn(e, t) {
    if (!e) throw new Sn(t)
}
var Tn = ["debug", "log", "warn", "error", "silent"],
    Cn = Tn.indexOf("log");

function On(e) {
    return function() {
        if (Tn.indexOf(e) >= Cn) {
            var t = console[e] || console.log;
            return t.apply(console, arguments)
        }
    }
}

function An(e) {
    try {
        return e()
    } catch (e) {}
}! function(e) {
    e.debug = On("debug"), e.log = On("log"), e.warn = On("warn"), e.error = On("error")
}(kn || (kn = {}));
var In = An((function() {
        return globalThis
    })) || An((function() {
        return window
    })) || An((function() {
        return self
    })) || An((function() {
        return global
    })) || An((function() {
        return An.constructor("return this")()
    })),
    Mn = "__",
    Pn = [Mn, Mn].join("DEV");
var Dn = function() {
    try {
        return Boolean(__DEV__)
    } catch (e) {
        return Object.defineProperty(In, Pn, {
            value: "production" !== An((function() {
                return process.env.NODE_ENV
            })),
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), In[Pn]
    }
}();

function Nn(e) {
    try {
        return e()
    } catch (e) {}
}
var Rn = Nn((function() {
        return globalThis
    })) || Nn((function() {
        return window
    })) || Nn((function() {
        return self
    })) || Nn((function() {
        return global
    })) || Nn((function() {
        return Nn.constructor("return this")()
    })),
    Ln = !1;

function Fn() {
    Ln && (delete Rn.process, Ln = !1)
}

function jn(e) {
    return jn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, jn(e)
}!Rn || Nn((function() {
    return process.env.NODE_ENV
})) || Nn((function() {
    return process
})) || (Object.defineProperty(Rn, "process", {
    value: {
        env: {
            NODE_ENV: "production"
        }
    },
    configurable: !0,
    enumerable: !1,
    writable: !0
}), Ln = !0);
var $n = "function" == typeof Symbol && null != Symbol.toStringTag ? Symbol.toStringTag : "@@toStringTag";

function zn(e, t) {
    for (var n, i = /\r\n|[\n\r]/g, r = 1, o = t + 1;
        (n = i.exec(e.body)) && n.index < t;) r += 1, o = t + 1 - (n.index + n[0].length);
    return {
        line: r,
        column: o
    }
}

function Vn(e) {
    return qn(e.source, zn(e.source, e.start))
}

function qn(e, t) {
    var n = e.locationOffset.column - 1,
        i = Bn(n) + e.body,
        r = t.line - 1,
        o = e.locationOffset.line - 1,
        s = t.line + o,
        a = 1 === t.line ? n : 0,
        c = t.column + a,
        l = "".concat(e.name, ":").concat(s, ":").concat(c, "\n"),
        u = i.split(/\r\n|[\n\r]/g),
        h = u[r];
    if (h.length > 120) {
        for (var d = Math.floor(c / 80), p = c % 80, f = [], v = 0; v < h.length; v += 80) f.push(h.slice(v, v + 80));
        return l + Un([
            ["".concat(s), f[0]]
        ].concat(f.slice(1, d + 1).map((function(e) {
            return ["", e]
        })), [
            [" ", Bn(p - 1) + "^"],
            ["", f[d + 1]]
        ]))
    }
    return l + Un([
        ["".concat(s - 1), u[r - 1]],
        ["".concat(s), h],
        ["", Bn(c - 1) + "^"],
        ["".concat(s + 1), u[r + 1]]
    ])
}

function Un(e) {
    var t = e.filter((function(e) {
            return e[0], void 0 !== e[1]
        })),
        n = Math.max.apply(Math, t.map((function(e) {
            return e[0].length
        })));
    return t.map((function(e) {
        var t, i = e[0],
            r = e[1];
        return Bn(n - (t = i).length) + t + (r ? " | " + r : " |")
    })).join("\n")
}

function Bn(e) {
    return Array(e + 1).join(" ")
}

function Qn(e) {
    return Qn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Qn(e)
}

function Hn(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function Gn(e, t) {
    return !t || "object" !== Qn(t) && "function" != typeof t ? Wn(e) : t
}

function Wn(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Kn(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return Kn = function(e) {
        if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
        var n;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, i)
        }

        function i() {
            return Yn(e, arguments, Zn(this).constructor)
        }
        return i.prototype = Object.create(e.prototype, {
            constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), Xn(i, e)
    }, Kn(e)
}

function Yn(e, t, n) {
    return Yn = Jn() ? Reflect.construct : function(e, t, n) {
        var i = [null];
        i.push.apply(i, t);
        var r = new(Function.bind.apply(e, i));
        return n && Xn(r, n.prototype), r
    }, Yn.apply(null, arguments)
}

function Jn() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
    } catch (e) {
        return !1
    }
}

function Xn(e, t) {
    return Xn = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    }, Xn(e, t)
}

function Zn(e) {
    return Zn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }, Zn(e)
}
var ei = function(e) {
    ! function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && Xn(e, t)
    }(a, Kn(Error));
    var t, n, i, r, o, s = (t = a, n = Jn(), function() {
        var e, i = Zn(t);
        if (n) {
            var r = Zn(this).constructor;
            e = Reflect.construct(i, arguments, r)
        } else e = i.apply(this, arguments);
        return Gn(this, e)
    });

    function a(e, t, n, i, r, o, c) {
        var l, u, h, d, p;
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, a), p = s.call(this, e);
        var f, v = Array.isArray(t) ? 0 !== t.length ? t : void 0 : t ? [t] : void 0,
            m = n;
        !m && v && (m = null === (f = v[0].loc) || void 0 === f ? void 0 : f.source);
        var y, g = i;
        !g && v && (g = v.reduce((function(e, t) {
            return t.loc && e.push(t.loc.start), e
        }), [])), g && 0 === g.length && (g = void 0), i && n ? y = i.map((function(e) {
            return zn(n, e)
        })) : v && (y = v.reduce((function(e, t) {
            return t.loc && e.push(zn(t.loc.source, t.loc.start)), e
        }), []));
        var b, w = c;
        if (null == w && null != o) {
            var x = o.extensions;
            "object" == jn(b = x) && null !== b && (w = x)
        }
        return Object.defineProperties(Wn(p), {
            name: {
                value: "GraphQLError"
            },
            message: {
                value: e,
                enumerable: !0,
                writable: !0
            },
            locations: {
                value: null !== (l = y) && void 0 !== l ? l : void 0,
                enumerable: null != y
            },
            path: {
                value: null != r ? r : void 0,
                enumerable: null != r
            },
            nodes: {
                value: null != v ? v : void 0
            },
            source: {
                value: null !== (u = m) && void 0 !== u ? u : void 0
            },
            positions: {
                value: null !== (h = g) && void 0 !== h ? h : void 0
            },
            originalError: {
                value: o
            },
            extensions: {
                value: null !== (d = w) && void 0 !== d ? d : void 0,
                enumerable: null != w
            }
        }), null != o && o.stack ? (Object.defineProperty(Wn(p), "stack", {
            value: o.stack,
            writable: !0,
            configurable: !0
        }), Gn(p)) : (Error.captureStackTrace ? Error.captureStackTrace(Wn(p), a) : Object.defineProperty(Wn(p), "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0
        }), p)
    }
    return i = a, (r = [{
        key: "toString",
        value: function() {
            return function(e) {
                var t = e.message;
                if (e.nodes)
                    for (var n = 0, i = e.nodes; n < i.length; n++) {
                        var r = i[n];
                        r.loc && (t += "\n\n" + Vn(r.loc))
                    } else if (e.source && e.locations)
                        for (var o = 0, s = e.locations; o < s.length; o++) {
                            var a = s[o];
                            t += "\n\n" + qn(e.source, a)
                        }
                return t
            }(this)
        }
    }, {
        key: $n,
        get: function() {
            return "Object"
        }
    }]) && Hn(i.prototype, r), o && Hn(i, o), a
}();

function ti(e, t, n) {
    return new ei("Syntax Error: ".concat(n), void 0, e, [t])
}
var ni = Object.freeze({
    NAME: "Name",
    DOCUMENT: "Document",
    OPERATION_DEFINITION: "OperationDefinition",
    VARIABLE_DEFINITION: "VariableDefinition",
    SELECTION_SET: "SelectionSet",
    FIELD: "Field",
    ARGUMENT: "Argument",
    FRAGMENT_SPREAD: "FragmentSpread",
    INLINE_FRAGMENT: "InlineFragment",
    FRAGMENT_DEFINITION: "FragmentDefinition",
    VARIABLE: "Variable",
    INT: "IntValue",
    FLOAT: "FloatValue",
    STRING: "StringValue",
    BOOLEAN: "BooleanValue",
    NULL: "NullValue",
    ENUM: "EnumValue",
    LIST: "ListValue",
    OBJECT: "ObjectValue",
    OBJECT_FIELD: "ObjectField",
    DIRECTIVE: "Directive",
    NAMED_TYPE: "NamedType",
    LIST_TYPE: "ListType",
    NON_NULL_TYPE: "NonNullType",
    SCHEMA_DEFINITION: "SchemaDefinition",
    OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
    SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
    OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
    FIELD_DEFINITION: "FieldDefinition",
    INPUT_VALUE_DEFINITION: "InputValueDefinition",
    INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
    UNION_TYPE_DEFINITION: "UnionTypeDefinition",
    ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
    ENUM_VALUE_DEFINITION: "EnumValueDefinition",
    INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
    DIRECTIVE_DEFINITION: "DirectiveDefinition",
    SCHEMA_EXTENSION: "SchemaExtension",
    SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
    OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
    INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
    UNION_TYPE_EXTENSION: "UnionTypeExtension",
    ENUM_TYPE_EXTENSION: "EnumTypeExtension",
    INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
});
var ii = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0;

function ri(e) {
    var t = e.prototype.toJSON;
    "function" == typeof t || function(e, t) {
        if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
    }(0), e.prototype.inspect = t, ii && (e.prototype[ii] = t)
}
var oi = function() {
    function e(e, t, n) {
        this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
    }
    return e.prototype.toJSON = function() {
        return {
            start: this.start,
            end: this.end
        }
    }, e
}();
ri(oi);
var si = function() {
    function e(e, t, n, i, r, o, s) {
        this.kind = e, this.start = t, this.end = n, this.line = i, this.column = r, this.value = s, this.prev = o, this.next = null
    }
    return e.prototype.toJSON = function() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        }
    }, e
}();

function ai(e) {
    return null != e && "string" == typeof e.kind
}
ri(si);
var ci = Object.freeze({
    SOF: "<SOF>",
    EOF: "<EOF>",
    BANG: "!",
    DOLLAR: "$",
    AMP: "&",
    PAREN_L: "(",
    PAREN_R: ")",
    SPREAD: "...",
    COLON: ":",
    EQUALS: "=",
    AT: "@",
    BRACKET_L: "[",
    BRACKET_R: "]",
    BRACE_L: "{",
    PIPE: "|",
    BRACE_R: "}",
    NAME: "Name",
    INT: "Int",
    FLOAT: "Float",
    STRING: "String",
    BLOCK_STRING: "BlockString",
    COMMENT: "Comment"
});

function li(e) {
    return li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, li(e)
}

function ui(e) {
    return hi(e, [])
}

function hi(e, t) {
    switch (li(e)) {
        case "string":
            return JSON.stringify(e);
        case "function":
            return e.name ? "[function ".concat(e.name, "]") : "[function]";
        case "object":
            return null === e ? "null" : function(e, t) {
                if (-1 !== t.indexOf(e)) return "[Circular]";
                var n = [].concat(t, [e]),
                    i = function(e) {
                        var t = e[String(ii)];
                        if ("function" == typeof t) return t;
                        if ("function" == typeof e.inspect) return e.inspect
                    }(e);
                if (void 0 !== i) {
                    var r = i.call(e);
                    if (r !== e) return "string" == typeof r ? r : hi(r, n)
                } else if (Array.isArray(e)) return function(e, t) {
                    if (0 === e.length) return "[]";
                    if (t.length > 2) return "[Array]";
                    for (var n = Math.min(10, e.length), i = e.length - n, r = [], o = 0; o < n; ++o) r.push(hi(e[o], t));
                    1 === i ? r.push("... 1 more item") : i > 1 && r.push("... ".concat(i, " more items"));
                    return "[" + r.join(", ") + "]"
                }(e, n);
                return function(e, t) {
                    var n = Object.keys(e);
                    if (0 === n.length) return "{}";
                    if (t.length > 2) return "[" + function(e) {
                        var t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                        if ("Object" === t && "function" == typeof e.constructor) {
                            var n = e.constructor.name;
                            if ("string" == typeof n && "" !== n) return n
                        }
                        return t
                    }(e) + "]";
                    var i = n.map((function(n) {
                        return n + ": " + hi(e[n], t)
                    }));
                    return "{ " + i.join(", ") + " }"
                }(e, n)
            }(e, t);
        default:
            return String(e)
    }
}

function di(e, t) {
    if (!Boolean(e)) throw new Error(t)
}
var pi = "production" === process.env.NODE_ENV ? function(e, t) {
    return e instanceof t
} : function(e, t) {
    if (e instanceof t) return !0;
    if (e) {
        var n = e.constructor,
            i = t.name;
        if (i && n && n.name === i) throw new Error("Cannot use ".concat(i, ' "').concat(e, '" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.'))
    }
    return !1
};

function fi(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}
var vi = function() {
    function e(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GraphQL request",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                line: 1,
                column: 1
            };
        "string" == typeof e || di(0, "Body must be a string. Received: ".concat(ui(e), ".")), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || di(0, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || di(0, "column in locationOffset is 1-indexed and must be positive.")
    }
    var t, n, i;
    return t = e, (n = [{
        key: $n,
        get: function() {
            return "Source"
        }
    }]) && fi(t.prototype, n), i && fi(t, i), e
}();
var mi = Object.freeze({
    QUERY: "QUERY",
    MUTATION: "MUTATION",
    SUBSCRIPTION: "SUBSCRIPTION",
    FIELD: "FIELD",
    FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
    FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
    INLINE_FRAGMENT: "INLINE_FRAGMENT",
    VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
    SCHEMA: "SCHEMA",
    SCALAR: "SCALAR",
    OBJECT: "OBJECT",
    FIELD_DEFINITION: "FIELD_DEFINITION",
    ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
    INTERFACE: "INTERFACE",
    UNION: "UNION",
    ENUM: "ENUM",
    ENUM_VALUE: "ENUM_VALUE",
    INPUT_OBJECT: "INPUT_OBJECT",
    INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
});

function yi(e) {
    var t = e.split(/\r\n|[\n\r]/g),
        n = function(e) {
            for (var t, n = !0, i = !0, r = 0, o = null, s = 0; s < e.length; ++s) switch (e.charCodeAt(s)) {
                case 13:
                    10 === e.charCodeAt(s + 1) && ++s;
                case 10:
                    n = !1, i = !0, r = 0;
                    break;
                case 9:
                case 32:
                    ++r;
                    break;
                default:
                    i && !n && (null === o || r < o) && (o = r), i = !1
            }
            return null !== (t = o) && void 0 !== t ? t : 0
        }(e);
    if (0 !== n)
        for (var i = 1; i < t.length; i++) t[i] = t[i].slice(n);
    for (var r = 0; r < t.length && gi(t[r]);) ++r;
    for (var o = t.length; o > r && gi(t[o - 1]);) --o;
    return t.slice(r, o).join("\n")
}

function gi(e) {
    for (var t = 0; t < e.length; ++t)
        if (" " !== e[t] && "\t" !== e[t]) return !1;
    return !0
}
var bi = function() {
    function e(e) {
        var t = new si(ci.SOF, 0, 0, 0, 0, null);
        this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
    }
    var t = e.prototype;
    return t.advance = function() {
        return this.lastToken = this.token, this.token = this.lookahead()
    }, t.lookahead = function() {
        var e = this.token;
        if (e.kind !== ci.EOF)
            do {
                var t;
                e = null !== (t = e.next) && void 0 !== t ? t : e.next = xi(this, e)
            } while (e.kind === ci.COMMENT);
        return e
    }, e
}();

function wi(e) {
    return isNaN(e) ? ci.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"')
}

function xi(e, t) {
    for (var n = e.source, i = n.body, r = i.length, o = t.end; o < r;) {
        var s = i.charCodeAt(o),
            a = e.line,
            c = 1 + o - e.lineStart;
        switch (s) {
            case 65279:
            case 9:
            case 32:
            case 44:
                ++o;
                continue;
            case 10:
                ++o, ++e.line, e.lineStart = o;
                continue;
            case 13:
                10 === i.charCodeAt(o + 1) ? o += 2 : ++o, ++e.line, e.lineStart = o;
                continue;
            case 33:
                return new si(ci.BANG, o, o + 1, a, c, t);
            case 35:
                return Ei(n, o, a, c, t);
            case 36:
                return new si(ci.DOLLAR, o, o + 1, a, c, t);
            case 38:
                return new si(ci.AMP, o, o + 1, a, c, t);
            case 40:
                return new si(ci.PAREN_L, o, o + 1, a, c, t);
            case 41:
                return new si(ci.PAREN_R, o, o + 1, a, c, t);
            case 46:
                if (46 === i.charCodeAt(o + 1) && 46 === i.charCodeAt(o + 2)) return new si(ci.SPREAD, o, o + 3, a, c, t);
                break;
            case 58:
                return new si(ci.COLON, o, o + 1, a, c, t);
            case 61:
                return new si(ci.EQUALS, o, o + 1, a, c, t);
            case 64:
                return new si(ci.AT, o, o + 1, a, c, t);
            case 91:
                return new si(ci.BRACKET_L, o, o + 1, a, c, t);
            case 93:
                return new si(ci.BRACKET_R, o, o + 1, a, c, t);
            case 123:
                return new si(ci.BRACE_L, o, o + 1, a, c, t);
            case 124:
                return new si(ci.PIPE, o, o + 1, a, c, t);
            case 125:
                return new si(ci.BRACE_R, o, o + 1, a, c, t);
            case 34:
                return 34 === i.charCodeAt(o + 1) && 34 === i.charCodeAt(o + 2) ? Ci(n, o, a, c, t, e) : Ti(n, o, a, c, t);
            case 45:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return Si(n, o, s, a, c, t);
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 95:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122:
                return Ii(n, o, a, c, t)
        }
        throw ti(n, o, _i(s))
    }
    var l = e.line,
        u = 1 + o - e.lineStart;
    return new si(ci.EOF, r, r, l, u, t)
}

function _i(e) {
    return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat(wi(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat(wi(e), ".")
}

function Ei(e, t, n, i, r) {
    var o, s = e.body,
        a = t;
    do {
        o = s.charCodeAt(++a)
    } while (!isNaN(o) && (o > 31 || 9 === o));
    return new si(ci.COMMENT, t, a, n, i, r, s.slice(t + 1, a))
}

function Si(e, t, n, i, r, o) {
    var s = e.body,
        a = n,
        c = t,
        l = !1;
    if (45 === a && (a = s.charCodeAt(++c)), 48 === a) {
        if ((a = s.charCodeAt(++c)) >= 48 && a <= 57) throw ti(e, c, "Invalid number, unexpected digit after 0: ".concat(wi(a), "."))
    } else c = ki(e, c, a), a = s.charCodeAt(c);
    if (46 === a && (l = !0, a = s.charCodeAt(++c), c = ki(e, c, a), a = s.charCodeAt(c)), 69 !== a && 101 !== a || (l = !0, 43 !== (a = s.charCodeAt(++c)) && 45 !== a || (a = s.charCodeAt(++c)), c = ki(e, c, a), a = s.charCodeAt(c)), 46 === a || function(e) {
            return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122
        }(a)) throw ti(e, c, "Invalid number, expected digit but got: ".concat(wi(a), "."));
    return new si(l ? ci.FLOAT : ci.INT, t, c, i, r, o, s.slice(t, c))
}

function ki(e, t, n) {
    var i = e.body,
        r = t,
        o = n;
    if (o >= 48 && o <= 57) {
        do {
            o = i.charCodeAt(++r)
        } while (o >= 48 && o <= 57);
        return r
    }
    throw ti(e, r, "Invalid number, expected digit but got: ".concat(wi(o), "."))
}

function Ti(e, t, n, i, r) {
    for (var o = e.body, s = t + 1, a = s, c = 0, l = ""; s < o.length && !isNaN(c = o.charCodeAt(s)) && 10 !== c && 13 !== c;) {
        if (34 === c) return l += o.slice(a, s), new si(ci.STRING, t, s + 1, n, i, r, l);
        if (c < 32 && 9 !== c) throw ti(e, s, "Invalid character within String: ".concat(wi(c), "."));
        if (++s, 92 === c) {
            switch (l += o.slice(a, s - 1), c = o.charCodeAt(s)) {
                case 34:
                    l += '"';
                    break;
                case 47:
                    l += "/";
                    break;
                case 92:
                    l += "\\";
                    break;
                case 98:
                    l += "\b";
                    break;
                case 102:
                    l += "\f";
                    break;
                case 110:
                    l += "\n";
                    break;
                case 114:
                    l += "\r";
                    break;
                case 116:
                    l += "\t";
                    break;
                case 117:
                    var u = Oi(o.charCodeAt(s + 1), o.charCodeAt(s + 2), o.charCodeAt(s + 3), o.charCodeAt(s + 4));
                    if (u < 0) {
                        var h = o.slice(s + 1, s + 5);
                        throw ti(e, s, "Invalid character escape sequence: \\u".concat(h, "."))
                    }
                    l += String.fromCharCode(u), s += 4;
                    break;
                default:
                    throw ti(e, s, "Invalid character escape sequence: \\".concat(String.fromCharCode(c), "."))
            }
            a = ++s
        }
    }
    throw ti(e, s, "Unterminated string.")
}

function Ci(e, t, n, i, r, o) {
    for (var s = e.body, a = t + 3, c = a, l = 0, u = ""; a < s.length && !isNaN(l = s.charCodeAt(a));) {
        if (34 === l && 34 === s.charCodeAt(a + 1) && 34 === s.charCodeAt(a + 2)) return u += s.slice(c, a), new si(ci.BLOCK_STRING, t, a + 3, n, i, r, yi(u));
        if (l < 32 && 9 !== l && 10 !== l && 13 !== l) throw ti(e, a, "Invalid character within String: ".concat(wi(l), "."));
        10 === l ? (++a, ++o.line, o.lineStart = a) : 13 === l ? (10 === s.charCodeAt(a + 1) ? a += 2 : ++a, ++o.line, o.lineStart = a) : 92 === l && 34 === s.charCodeAt(a + 1) && 34 === s.charCodeAt(a + 2) && 34 === s.charCodeAt(a + 3) ? (u += s.slice(c, a) + '"""', c = a += 4) : ++a
    }
    throw ti(e, a, "Unterminated string.")
}

function Oi(e, t, n, i) {
    return Ai(e) << 12 | Ai(t) << 8 | Ai(n) << 4 | Ai(i)
}

function Ai(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
}

function Ii(e, t, n, i, r) {
    for (var o = e.body, s = o.length, a = t + 1, c = 0; a !== s && !isNaN(c = o.charCodeAt(a)) && (95 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122);) ++a;
    return new si(ci.NAME, t, a, n, i, r, o.slice(t, a))
}
var Mi = function() {
    function e(e, t) {
        var n = function(e) {
            return pi(e, vi)
        }(e) ? e : new vi(e);
        this._lexer = new bi(n), this._options = t
    }
    var t = e.prototype;
    return t.parseName = function() {
        var e = this.expectToken(ci.NAME);
        return {
            kind: ni.NAME,
            value: e.value,
            loc: this.loc(e)
        }
    }, t.parseDocument = function() {
        var e = this._lexer.token;
        return {
            kind: ni.DOCUMENT,
            definitions: this.many(ci.SOF, this.parseDefinition, ci.EOF),
            loc: this.loc(e)
        }
    }, t.parseDefinition = function() {
        if (this.peek(ci.NAME)) switch (this._lexer.token.value) {
            case "query":
            case "mutation":
            case "subscription":
                return this.parseOperationDefinition();
            case "fragment":
                return this.parseFragmentDefinition();
            case "schema":
            case "scalar":
            case "type":
            case "interface":
            case "union":
            case "enum":
            case "input":
            case "directive":
                return this.parseTypeSystemDefinition();
            case "extend":
                return this.parseTypeSystemExtension()
        } else {
            if (this.peek(ci.BRACE_L)) return this.parseOperationDefinition();
            if (this.peekDescription()) return this.parseTypeSystemDefinition()
        }
        throw this.unexpected()
    }, t.parseOperationDefinition = function() {
        var e = this._lexer.token;
        if (this.peek(ci.BRACE_L)) return {
            kind: ni.OPERATION_DEFINITION,
            operation: "query",
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(e)
        };
        var t, n = this.parseOperationType();
        return this.peek(ci.NAME) && (t = this.parseName()), {
            kind: ni.OPERATION_DEFINITION,
            operation: n,
            name: t,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(e)
        }
    }, t.parseOperationType = function() {
        var e = this.expectToken(ci.NAME);
        switch (e.value) {
            case "query":
                return "query";
            case "mutation":
                return "mutation";
            case "subscription":
                return "subscription"
        }
        throw this.unexpected(e)
    }, t.parseVariableDefinitions = function() {
        return this.optionalMany(ci.PAREN_L, this.parseVariableDefinition, ci.PAREN_R)
    }, t.parseVariableDefinition = function() {
        var e = this._lexer.token;
        return {
            kind: ni.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(ci.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(ci.EQUALS) ? this.parseValueLiteral(!0) : void 0,
            directives: this.parseDirectives(!0),
            loc: this.loc(e)
        }
    }, t.parseVariable = function() {
        var e = this._lexer.token;
        return this.expectToken(ci.DOLLAR), {
            kind: ni.VARIABLE,
            name: this.parseName(),
            loc: this.loc(e)
        }
    }, t.parseSelectionSet = function() {
        var e = this._lexer.token;
        return {
            kind: ni.SELECTION_SET,
            selections: this.many(ci.BRACE_L, this.parseSelection, ci.BRACE_R),
            loc: this.loc(e)
        }
    }, t.parseSelection = function() {
        return this.peek(ci.SPREAD) ? this.parseFragment() : this.parseField()
    }, t.parseField = function() {
        var e, t, n = this._lexer.token,
            i = this.parseName();
        return this.expectOptionalToken(ci.COLON) ? (e = i, t = this.parseName()) : t = i, {
            kind: ni.FIELD,
            alias: e,
            name: t,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek(ci.BRACE_L) ? this.parseSelectionSet() : void 0,
            loc: this.loc(n)
        }
    }, t.parseArguments = function(e) {
        var t = e ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(ci.PAREN_L, t, ci.PAREN_R)
    }, t.parseArgument = function() {
        var e = this._lexer.token,
            t = this.parseName();
        return this.expectToken(ci.COLON), {
            kind: ni.ARGUMENT,
            name: t,
            value: this.parseValueLiteral(!1),
            loc: this.loc(e)
        }
    }, t.parseConstArgument = function() {
        var e = this._lexer.token;
        return {
            kind: ni.ARGUMENT,
            name: this.parseName(),
            value: (this.expectToken(ci.COLON), this.parseValueLiteral(!0)),
            loc: this.loc(e)
        }
    }, t.parseFragment = function() {
        var e = this._lexer.token;
        this.expectToken(ci.SPREAD);
        var t = this.expectOptionalKeyword("on");
        return !t && this.peek(ci.NAME) ? {
            kind: ni.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1),
            loc: this.loc(e)
        } : {
            kind: ni.INLINE_FRAGMENT,
            typeCondition: t ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(e)
        }
    }, t.parseFragmentDefinition = function() {
        var e, t = this._lexer.token;
        return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.experimentalFragmentVariables) ? {
            kind: ni.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(t)
        } : {
            kind: ni.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(t)
        }
    }, t.parseFragmentName = function() {
        if ("on" === this._lexer.token.value) throw this.unexpected();
        return this.parseName()
    }, t.parseValueLiteral = function(e) {
        var t = this._lexer.token;
        switch (t.kind) {
            case ci.BRACKET_L:
                return this.parseList(e);
            case ci.BRACE_L:
                return this.parseObject(e);
            case ci.INT:
                return this._lexer.advance(), {
                    kind: ni.INT,
                    value: t.value,
                    loc: this.loc(t)
                };
            case ci.FLOAT:
                return this._lexer.advance(), {
                    kind: ni.FLOAT,
                    value: t.value,
                    loc: this.loc(t)
                };
            case ci.STRING:
            case ci.BLOCK_STRING:
                return this.parseStringLiteral();
            case ci.NAME:
                switch (this._lexer.advance(), t.value) {
                    case "true":
                        return {
                            kind: ni.BOOLEAN, value: !0, loc: this.loc(t)
                        };
                    case "false":
                        return {
                            kind: ni.BOOLEAN, value: !1, loc: this.loc(t)
                        };
                    case "null":
                        return {
                            kind: ni.NULL, loc: this.loc(t)
                        };
                    default:
                        return {
                            kind: ni.ENUM, value: t.value, loc: this.loc(t)
                        }
                }
                case ci.DOLLAR:
                    if (!e) return this.parseVariable()
        }
        throw this.unexpected()
    }, t.parseStringLiteral = function() {
        var e = this._lexer.token;
        return this._lexer.advance(), {
            kind: ni.STRING,
            value: e.value,
            block: e.kind === ci.BLOCK_STRING,
            loc: this.loc(e)
        }
    }, t.parseList = function(e) {
        var t = this,
            n = this._lexer.token;
        return {
            kind: ni.LIST,
            values: this.any(ci.BRACKET_L, (function() {
                return t.parseValueLiteral(e)
            }), ci.BRACKET_R),
            loc: this.loc(n)
        }
    }, t.parseObject = function(e) {
        var t = this,
            n = this._lexer.token;
        return {
            kind: ni.OBJECT,
            fields: this.any(ci.BRACE_L, (function() {
                return t.parseObjectField(e)
            }), ci.BRACE_R),
            loc: this.loc(n)
        }
    }, t.parseObjectField = function(e) {
        var t = this._lexer.token,
            n = this.parseName();
        return this.expectToken(ci.COLON), {
            kind: ni.OBJECT_FIELD,
            name: n,
            value: this.parseValueLiteral(e),
            loc: this.loc(t)
        }
    }, t.parseDirectives = function(e) {
        for (var t = []; this.peek(ci.AT);) t.push(this.parseDirective(e));
        return t
    }, t.parseDirective = function(e) {
        var t = this._lexer.token;
        return this.expectToken(ci.AT), {
            kind: ni.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(e),
            loc: this.loc(t)
        }
    }, t.parseTypeReference = function() {
        var e, t = this._lexer.token;
        return this.expectOptionalToken(ci.BRACKET_L) ? (e = this.parseTypeReference(), this.expectToken(ci.BRACKET_R), e = {
            kind: ni.LIST_TYPE,
            type: e,
            loc: this.loc(t)
        }) : e = this.parseNamedType(), this.expectOptionalToken(ci.BANG) ? {
            kind: ni.NON_NULL_TYPE,
            type: e,
            loc: this.loc(t)
        } : e
    }, t.parseNamedType = function() {
        var e = this._lexer.token;
        return {
            kind: ni.NAMED_TYPE,
            name: this.parseName(),
            loc: this.loc(e)
        }
    }, t.parseTypeSystemDefinition = function() {
        var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
        if (e.kind === ci.NAME) switch (e.value) {
            case "schema":
                return this.parseSchemaDefinition();
            case "scalar":
                return this.parseScalarTypeDefinition();
            case "type":
                return this.parseObjectTypeDefinition();
            case "interface":
                return this.parseInterfaceTypeDefinition();
            case "union":
                return this.parseUnionTypeDefinition();
            case "enum":
                return this.parseEnumTypeDefinition();
            case "input":
                return this.parseInputObjectTypeDefinition();
            case "directive":
                return this.parseDirectiveDefinition()
        }
        throw this.unexpected(e)
    }, t.peekDescription = function() {
        return this.peek(ci.STRING) || this.peek(ci.BLOCK_STRING)
    }, t.parseDescription = function() {
        if (this.peekDescription()) return this.parseStringLiteral()
    }, t.parseSchemaDefinition = function() {
        var e = this._lexer.token,
            t = this.parseDescription();
        this.expectKeyword("schema");
        var n = this.parseDirectives(!0),
            i = this.many(ci.BRACE_L, this.parseOperationTypeDefinition, ci.BRACE_R);
        return {
            kind: ni.SCHEMA_DEFINITION,
            description: t,
            directives: n,
            operationTypes: i,
            loc: this.loc(e)
        }
    }, t.parseOperationTypeDefinition = function() {
        var e = this._lexer.token,
            t = this.parseOperationType();
        this.expectToken(ci.COLON);
        var n = this.parseNamedType();
        return {
            kind: ni.OPERATION_TYPE_DEFINITION,
            operation: t,
            type: n,
            loc: this.loc(e)
        }
    }, t.parseScalarTypeDefinition = function() {
        var e = this._lexer.token,
            t = this.parseDescription();
        this.expectKeyword("scalar");
        var n = this.parseName(),
            i = this.parseDirectives(!0);
        return {
            kind: ni.SCALAR_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            loc: this.loc(e)
        }
    }, t.parseObjectTypeDefinition = function() {
        var e = this._lexer.token,
            t = this.parseDescription();
        this.expectKeyword("type");
        var n = this.parseName(),
            i = this.parseImplementsInterfaces(),
            r = this.parseDirectives(!0),
            o = this.parseFieldsDefinition();
        return {
            kind: ni.OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: i,
            directives: r,
            fields: o,
            loc: this.loc(e)
        }
    }, t.parseImplementsInterfaces = function() {
        var e;
        if (!this.expectOptionalKeyword("implements")) return [];
        if (!0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLImplementsInterfaces)) {
            var t = [];
            this.expectOptionalToken(ci.AMP);
            do {
                t.push(this.parseNamedType())
            } while (this.expectOptionalToken(ci.AMP) || this.peek(ci.NAME));
            return t
        }
        return this.delimitedMany(ci.AMP, this.parseNamedType)
    }, t.parseFieldsDefinition = function() {
        var e;
        return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(ci.BRACE_L) && this._lexer.lookahead().kind === ci.BRACE_R ? (this._lexer.advance(), this._lexer.advance(), []) : this.optionalMany(ci.BRACE_L, this.parseFieldDefinition, ci.BRACE_R)
    }, t.parseFieldDefinition = function() {
        var e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName(),
            i = this.parseArgumentDefs();
        this.expectToken(ci.COLON);
        var r = this.parseTypeReference(),
            o = this.parseDirectives(!0);
        return {
            kind: ni.FIELD_DEFINITION,
            description: t,
            name: n,
            arguments: i,
            type: r,
            directives: o,
            loc: this.loc(e)
        }
    }, t.parseArgumentDefs = function() {
        return this.optionalMany(ci.PAREN_L, this.parseInputValueDef, ci.PAREN_R)
    }, t.parseInputValueDef = function() {
        var e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName();
        this.expectToken(ci.COLON);
        var i, r = this.parseTypeReference();
        this.expectOptionalToken(ci.EQUALS) && (i = this.parseValueLiteral(!0));
        var o = this.parseDirectives(!0);
        return {
            kind: ni.INPUT_VALUE_DEFINITION,
            description: t,
            name: n,
            type: r,
            defaultValue: i,
            directives: o,
            loc: this.loc(e)
        }
    }, t.parseInterfaceTypeDefinition = function() {
        var e = this._lexer.token,
            t = this.parseDescription();
        this.expectKeyword("interface");
        var n = this.parseName(),
            i = this.parseImplementsInterfaces(),
            r = this.parseDirectives(!0),
            o = this.parseFieldsDefinition();
        return {
            kind: ni.INTERFACE_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: i,
            directives: r,
            fields: o,
            loc: this.loc(e)
        }
    }, t.parseUnionTypeDefinition = function() {
        var e = this._lexer.token,
            t = this.parseDescription();
        this.expectKeyword("union");
        var n = this.parseName(),
            i = this.parseDirectives(!0),
            r = this.parseUnionMemberTypes();
        return {
            kind: ni.UNION_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            types: r,
            loc: this.loc(e)
        }
    }, t.parseUnionMemberTypes = function() {
        return this.expectOptionalToken(ci.EQUALS) ? this.delimitedMany(ci.PIPE, this.parseNamedType) : []
    }, t.parseEnumTypeDefinition = function() {
        var e = this._lexer.token,
            t = this.parseDescription();
        this.expectKeyword("enum");
        var n = this.parseName(),
            i = this.parseDirectives(!0),
            r = this.parseEnumValuesDefinition();
        return {
            kind: ni.ENUM_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            values: r,
            loc: this.loc(e)
        }
    }, t.parseEnumValuesDefinition = function() {
        return this.optionalMany(ci.BRACE_L, this.parseEnumValueDefinition, ci.BRACE_R)
    }, t.parseEnumValueDefinition = function() {
        var e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName(),
            i = this.parseDirectives(!0);
        return {
            kind: ni.ENUM_VALUE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            loc: this.loc(e)
        }
    }, t.parseInputObjectTypeDefinition = function() {
        var e = this._lexer.token,
            t = this.parseDescription();
        this.expectKeyword("input");
        var n = this.parseName(),
            i = this.parseDirectives(!0),
            r = this.parseInputFieldsDefinition();
        return {
            kind: ni.INPUT_OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: i,
            fields: r,
            loc: this.loc(e)
        }
    }, t.parseInputFieldsDefinition = function() {
        return this.optionalMany(ci.BRACE_L, this.parseInputValueDef, ci.BRACE_R)
    }, t.parseTypeSystemExtension = function() {
        var e = this._lexer.lookahead();
        if (e.kind === ci.NAME) switch (e.value) {
            case "schema":
                return this.parseSchemaExtension();
            case "scalar":
                return this.parseScalarTypeExtension();
            case "type":
                return this.parseObjectTypeExtension();
            case "interface":
                return this.parseInterfaceTypeExtension();
            case "union":
                return this.parseUnionTypeExtension();
            case "enum":
                return this.parseEnumTypeExtension();
            case "input":
                return this.parseInputObjectTypeExtension()
        }
        throw this.unexpected(e)
    }, t.parseSchemaExtension = function() {
        var e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("schema");
        var t = this.parseDirectives(!0),
            n = this.optionalMany(ci.BRACE_L, this.parseOperationTypeDefinition, ci.BRACE_R);
        if (0 === t.length && 0 === n.length) throw this.unexpected();
        return {
            kind: ni.SCHEMA_EXTENSION,
            directives: t,
            operationTypes: n,
            loc: this.loc(e)
        }
    }, t.parseScalarTypeExtension = function() {
        var e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("scalar");
        var t = this.parseName(),
            n = this.parseDirectives(!0);
        if (0 === n.length) throw this.unexpected();
        return {
            kind: ni.SCALAR_TYPE_EXTENSION,
            name: t,
            directives: n,
            loc: this.loc(e)
        }
    }, t.parseObjectTypeExtension = function() {
        var e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("type");
        var t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            i = this.parseDirectives(!0),
            r = this.parseFieldsDefinition();
        if (0 === n.length && 0 === i.length && 0 === r.length) throw this.unexpected();
        return {
            kind: ni.OBJECT_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: i,
            fields: r,
            loc: this.loc(e)
        }
    }, t.parseInterfaceTypeExtension = function() {
        var e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("interface");
        var t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            i = this.parseDirectives(!0),
            r = this.parseFieldsDefinition();
        if (0 === n.length && 0 === i.length && 0 === r.length) throw this.unexpected();
        return {
            kind: ni.INTERFACE_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: i,
            fields: r,
            loc: this.loc(e)
        }
    }, t.parseUnionTypeExtension = function() {
        var e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("union");
        var t = this.parseName(),
            n = this.parseDirectives(!0),
            i = this.parseUnionMemberTypes();
        if (0 === n.length && 0 === i.length) throw this.unexpected();
        return {
            kind: ni.UNION_TYPE_EXTENSION,
            name: t,
            directives: n,
            types: i,
            loc: this.loc(e)
        }
    }, t.parseEnumTypeExtension = function() {
        var e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("enum");
        var t = this.parseName(),
            n = this.parseDirectives(!0),
            i = this.parseEnumValuesDefinition();
        if (0 === n.length && 0 === i.length) throw this.unexpected();
        return {
            kind: ni.ENUM_TYPE_EXTENSION,
            name: t,
            directives: n,
            values: i,
            loc: this.loc(e)
        }
    }, t.parseInputObjectTypeExtension = function() {
        var e = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("input");
        var t = this.parseName(),
            n = this.parseDirectives(!0),
            i = this.parseInputFieldsDefinition();
        if (0 === n.length && 0 === i.length) throw this.unexpected();
        return {
            kind: ni.INPUT_OBJECT_TYPE_EXTENSION,
            name: t,
            directives: n,
            fields: i,
            loc: this.loc(e)
        }
    }, t.parseDirectiveDefinition = function() {
        var e = this._lexer.token,
            t = this.parseDescription();
        this.expectKeyword("directive"), this.expectToken(ci.AT);
        var n = this.parseName(),
            i = this.parseArgumentDefs(),
            r = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        var o = this.parseDirectiveLocations();
        return {
            kind: ni.DIRECTIVE_DEFINITION,
            description: t,
            name: n,
            arguments: i,
            repeatable: r,
            locations: o,
            loc: this.loc(e)
        }
    }, t.parseDirectiveLocations = function() {
        return this.delimitedMany(ci.PIPE, this.parseDirectiveLocation)
    }, t.parseDirectiveLocation = function() {
        var e = this._lexer.token,
            t = this.parseName();
        if (void 0 !== mi[t.value]) return t;
        throw this.unexpected(e)
    }, t.loc = function(e) {
        var t;
        if (!0 !== (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation)) return new oi(e, this._lexer.lastToken, this._lexer.source)
    }, t.peek = function(e) {
        return this._lexer.token.kind === e
    }, t.expectToken = function(e) {
        var t = this._lexer.token;
        if (t.kind === e) return this._lexer.advance(), t;
        throw ti(this._lexer.source, t.start, "Expected ".concat(Di(e), ", found ").concat(Pi(t), "."))
    }, t.expectOptionalToken = function(e) {
        var t = this._lexer.token;
        if (t.kind === e) return this._lexer.advance(), t
    }, t.expectKeyword = function(e) {
        var t = this._lexer.token;
        if (t.kind !== ci.NAME || t.value !== e) throw ti(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(Pi(t), "."));
        this._lexer.advance()
    }, t.expectOptionalKeyword = function(e) {
        var t = this._lexer.token;
        return t.kind === ci.NAME && t.value === e && (this._lexer.advance(), !0)
    }, t.unexpected = function(e) {
        var t = null != e ? e : this._lexer.token;
        return ti(this._lexer.source, t.start, "Unexpected ".concat(Pi(t), "."))
    }, t.any = function(e, t, n) {
        this.expectToken(e);
        for (var i = []; !this.expectOptionalToken(n);) i.push(t.call(this));
        return i
    }, t.optionalMany = function(e, t, n) {
        if (this.expectOptionalToken(e)) {
            var i = [];
            do {
                i.push(t.call(this))
            } while (!this.expectOptionalToken(n));
            return i
        }
        return []
    }, t.many = function(e, t, n) {
        this.expectToken(e);
        var i = [];
        do {
            i.push(t.call(this))
        } while (!this.expectOptionalToken(n));
        return i
    }, t.delimitedMany = function(e, t) {
        this.expectOptionalToken(e);
        var n = [];
        do {
            n.push(t.call(this))
        } while (this.expectOptionalToken(e));
        return n
    }, e
}();

function Pi(e) {
    var t = e.value;
    return Di(e.kind) + (null != t ? ' "'.concat(t, '"') : "")
}

function Di(e) {
    return function(e) {
        return e === ci.BANG || e === ci.DOLLAR || e === ci.AMP || e === ci.PAREN_L || e === ci.PAREN_R || e === ci.SPREAD || e === ci.COLON || e === ci.EQUALS || e === ci.AT || e === ci.BRACKET_L || e === ci.BRACKET_R || e === ci.BRACE_L || e === ci.PIPE || e === ci.BRACE_R
    }(e) ? '"'.concat(e, '"') : e
}
var Ni = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
        VariableDefinition: ["variable", "type", "defaultValue", "directives"],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["description", "directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        FieldDefinition: ["description", "name", "arguments", "type", "directives"],
        InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
        InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
        DirectiveDefinition: ["description", "name", "arguments", "locations"],
        SchemaExtension: ["directives", "operationTypes"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"]
    },
    Ri = Object.freeze({});

function Li(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ni,
        i = void 0,
        r = Array.isArray(e),
        o = [e],
        s = -1,
        a = [],
        c = void 0,
        l = void 0,
        u = void 0,
        h = [],
        d = [],
        p = e;
    do {
        var f = ++s === o.length,
            v = f && 0 !== a.length;
        if (f) {
            if (l = 0 === d.length ? void 0 : h[h.length - 1], c = u, u = d.pop(), v) {
                if (r) c = c.slice();
                else {
                    for (var m = {}, y = 0, g = Object.keys(c); y < g.length; y++) {
                        var b = g[y];
                        m[b] = c[b]
                    }
                    c = m
                }
                for (var w = 0, x = 0; x < a.length; x++) {
                    var _ = a[x][0],
                        E = a[x][1];
                    r && (_ -= w), r && null === E ? (c.splice(_, 1), w++) : c[_] = E
                }
            }
            s = i.index, o = i.keys, a = i.edits, r = i.inArray, i = i.prev
        } else {
            if (l = u ? r ? s : o[s] : void 0, null == (c = u ? u[l] : p)) continue;
            u && h.push(l)
        }
        var S, k = void 0;
        if (!Array.isArray(c)) {
            if (!ai(c)) throw new Error("Invalid AST Node: ".concat(ui(c), "."));
            var T = Fi(t, c.kind, f);
            if (T) {
                if ((k = T.call(t, c, l, u, h, d)) === Ri) break;
                if (!1 === k) {
                    if (!f) {
                        h.pop();
                        continue
                    }
                } else if (void 0 !== k && (a.push([l, k]), !f)) {
                    if (!ai(k)) {
                        h.pop();
                        continue
                    }
                    c = k
                }
            }
        }
        if (void 0 === k && v && a.push([l, c]), f) h.pop();
        else i = {
            inArray: r,
            index: s,
            keys: o,
            edits: a,
            prev: i
        }, o = (r = Array.isArray(c)) ? c : null !== (S = n[c.kind]) && void 0 !== S ? S : [], s = -1, a = [], u && d.push(u), u = c
    } while (void 0 !== i);
    return 0 !== a.length && (p = a[a.length - 1][1]), p
}

function Fi(e, t, n) {
    var i = e[t];
    if (i) {
        if (!n && "function" == typeof i) return i;
        var r = n ? i.leave : i.enter;
        if ("function" == typeof r) return r
    } else {
        var o = n ? e.leave : e.enter;
        if (o) {
            if ("function" == typeof o) return o;
            var s = o[t];
            if ("function" == typeof s) return s
        }
    }
}

function ji(e) {
    return Li(e, {
        leave: $i
    })
}
var $i = {
    Name: function(e) {
        return e.value
    },
    Variable: function(e) {
        return "$" + e.name
    },
    Document: function(e) {
        return Vi(e.definitions, "\n\n") + "\n"
    },
    OperationDefinition: function(e) {
        var t = e.operation,
            n = e.name,
            i = Ui("(", Vi(e.variableDefinitions, ", "), ")"),
            r = Vi(e.directives, " "),
            o = e.selectionSet;
        return n || r || i || "query" !== t ? Vi([t, Vi([n, i]), r, o], " ") : o
    },
    VariableDefinition: function(e) {
        var t = e.variable,
            n = e.type,
            i = e.defaultValue,
            r = e.directives;
        return t + ": " + n + Ui(" = ", i) + Ui(" ", Vi(r, " "))
    },
    SelectionSet: function(e) {
        return qi(e.selections)
    },
    Field: function(e) {
        var t = e.alias,
            n = e.name,
            i = e.arguments,
            r = e.directives,
            o = e.selectionSet,
            s = Ui("", t, ": ") + n,
            a = s + Ui("(", Vi(i, ", "), ")");
        return a.length > 80 && (a = s + Ui("(\n", Bi(Vi(i, "\n")), "\n)")), Vi([a, Vi(r, " "), o], " ")
    },
    Argument: function(e) {
        return e.name + ": " + e.value
    },
    FragmentSpread: function(e) {
        return "..." + e.name + Ui(" ", Vi(e.directives, " "))
    },
    InlineFragment: function(e) {
        var t = e.typeCondition,
            n = e.directives,
            i = e.selectionSet;
        return Vi(["...", Ui("on ", t), Vi(n, " "), i], " ")
    },
    FragmentDefinition: function(e) {
        var t = e.name,
            n = e.typeCondition,
            i = e.variableDefinitions,
            r = e.directives,
            o = e.selectionSet;
        return "fragment ".concat(t).concat(Ui("(", Vi(i, ", "), ")"), " ") + "on ".concat(n, " ").concat(Ui("", Vi(r, " "), " ")) + o
    },
    IntValue: function(e) {
        return e.value
    },
    FloatValue: function(e) {
        return e.value
    },
    StringValue: function(e, t) {
        var n = e.value;
        return e.block ? function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = -1 === e.indexOf("\n"),
                r = " " === e[0] || "\t" === e[0],
                o = '"' === e[e.length - 1],
                s = "\\" === e[e.length - 1],
                a = !i || o || s || n,
                c = "";
            return !a || i && r || (c += "\n" + t), c += t ? e.replace(/\n/g, "\n" + t) : e, a && (c += "\n"), '"""' + c.replace(/"""/g, '\\"""') + '"""'
        }(n, "description" === t ? "" : "  ") : JSON.stringify(n)
    },
    BooleanValue: function(e) {
        return e.value ? "true" : "false"
    },
    NullValue: function() {
        return "null"
    },
    EnumValue: function(e) {
        return e.value
    },
    ListValue: function(e) {
        return "[" + Vi(e.values, ", ") + "]"
    },
    ObjectValue: function(e) {
        return "{" + Vi(e.fields, ", ") + "}"
    },
    ObjectField: function(e) {
        return e.name + ": " + e.value
    },
    Directive: function(e) {
        return "@" + e.name + Ui("(", Vi(e.arguments, ", "), ")")
    },
    NamedType: function(e) {
        return e.name
    },
    ListType: function(e) {
        return "[" + e.type + "]"
    },
    NonNullType: function(e) {
        return e.type + "!"
    },
    SchemaDefinition: zi((function(e) {
        var t = e.directives,
            n = e.operationTypes;
        return Vi(["schema", Vi(t, " "), qi(n)], " ")
    })),
    OperationTypeDefinition: function(e) {
        return e.operation + ": " + e.type
    },
    ScalarTypeDefinition: zi((function(e) {
        return Vi(["scalar", e.name, Vi(e.directives, " ")], " ")
    })),
    ObjectTypeDefinition: zi((function(e) {
        var t = e.name,
            n = e.interfaces,
            i = e.directives,
            r = e.fields;
        return Vi(["type", t, Ui("implements ", Vi(n, " & ")), Vi(i, " "), qi(r)], " ")
    })),
    FieldDefinition: zi((function(e) {
        var t = e.name,
            n = e.arguments,
            i = e.type,
            r = e.directives;
        return t + (Hi(n) ? Ui("(\n", Bi(Vi(n, "\n")), "\n)") : Ui("(", Vi(n, ", "), ")")) + ": " + i + Ui(" ", Vi(r, " "))
    })),
    InputValueDefinition: zi((function(e) {
        var t = e.name,
            n = e.type,
            i = e.defaultValue,
            r = e.directives;
        return Vi([t + ": " + n, Ui("= ", i), Vi(r, " ")], " ")
    })),
    InterfaceTypeDefinition: zi((function(e) {
        var t = e.name,
            n = e.interfaces,
            i = e.directives,
            r = e.fields;
        return Vi(["interface", t, Ui("implements ", Vi(n, " & ")), Vi(i, " "), qi(r)], " ")
    })),
    UnionTypeDefinition: zi((function(e) {
        var t = e.name,
            n = e.directives,
            i = e.types;
        return Vi(["union", t, Vi(n, " "), i && 0 !== i.length ? "= " + Vi(i, " | ") : ""], " ")
    })),
    EnumTypeDefinition: zi((function(e) {
        var t = e.name,
            n = e.directives,
            i = e.values;
        return Vi(["enum", t, Vi(n, " "), qi(i)], " ")
    })),
    EnumValueDefinition: zi((function(e) {
        return Vi([e.name, Vi(e.directives, " ")], " ")
    })),
    InputObjectTypeDefinition: zi((function(e) {
        var t = e.name,
            n = e.directives,
            i = e.fields;
        return Vi(["input", t, Vi(n, " "), qi(i)], " ")
    })),
    DirectiveDefinition: zi((function(e) {
        var t = e.name,
            n = e.arguments,
            i = e.repeatable,
            r = e.locations;
        return "directive @" + t + (Hi(n) ? Ui("(\n", Bi(Vi(n, "\n")), "\n)") : Ui("(", Vi(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + Vi(r, " | ")
    })),
    SchemaExtension: function(e) {
        var t = e.directives,
            n = e.operationTypes;
        return Vi(["extend schema", Vi(t, " "), qi(n)], " ")
    },
    ScalarTypeExtension: function(e) {
        return Vi(["extend scalar", e.name, Vi(e.directives, " ")], " ")
    },
    ObjectTypeExtension: function(e) {
        var t = e.name,
            n = e.interfaces,
            i = e.directives,
            r = e.fields;
        return Vi(["extend type", t, Ui("implements ", Vi(n, " & ")), Vi(i, " "), qi(r)], " ")
    },
    InterfaceTypeExtension: function(e) {
        var t = e.name,
            n = e.interfaces,
            i = e.directives,
            r = e.fields;
        return Vi(["extend interface", t, Ui("implements ", Vi(n, " & ")), Vi(i, " "), qi(r)], " ")
    },
    UnionTypeExtension: function(e) {
        var t = e.name,
            n = e.directives,
            i = e.types;
        return Vi(["extend union", t, Vi(n, " "), i && 0 !== i.length ? "= " + Vi(i, " | ") : ""], " ")
    },
    EnumTypeExtension: function(e) {
        var t = e.name,
            n = e.directives,
            i = e.values;
        return Vi(["extend enum", t, Vi(n, " "), qi(i)], " ")
    },
    InputObjectTypeExtension: function(e) {
        var t = e.name,
            n = e.directives,
            i = e.fields;
        return Vi(["extend input", t, Vi(n, " "), qi(i)], " ")
    }
};

function zi(e) {
    return function(t) {
        return Vi([t.description, e(t)], "\n")
    }
}

function Vi(e) {
    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return null !== (t = null == e ? void 0 : e.filter((function(e) {
        return e
    })).join(n)) && void 0 !== t ? t : ""
}

function qi(e) {
    return Ui("{\n", Bi(Vi(e, "\n")), "\n}")
}

function Ui(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return null != t && "" !== t ? e + t + n : ""
}

function Bi(e) {
    return Ui("  ", e.replace(/\n/g, "\n  "))
}

function Qi(e) {
    return -1 !== e.indexOf("\n")
}

function Hi(e) {
    return null != e && e.some(Qi)
}
var Gi = Object.freeze({
    __proto__: null,
    print: ji
});
var Wi = Object.freeze({
    __proto__: null,
    getOperationAST: function(e, t) {
        for (var n = null, i = 0, r = e.definitions; i < r.length; i++) {
            var o, s = r[i];
            if (s.kind === ni.OPERATION_DEFINITION)
                if (null == t) {
                    if (n) return null;
                    n = s
                } else if ((null === (o = s.name) || void 0 === o ? void 0 : o.value) === t) return s
        }
        return n
    }
});

function Ki(e, t) {
    var n = e.directives;
    return !n || !n.length || function(e) {
        var t = [];
        e && e.length && e.forEach((function(e) {
            if (function(e) {
                    var t = e.name.value;
                    return "skip" === t || "include" === t
                }(e)) {
                var n = e.arguments,
                    i = e.name.value;
                __DEV__ ? kn(n && 1 === n.length, "Incorrect number of arguments for the @".concat(i, " directive.")) : kn(n && 1 === n.length, 38);
                var r = n[0];
                __DEV__ ? kn(r.name && "if" === r.name.value, "Invalid argument for the @".concat(i, " directive.")) : kn(r.name && "if" === r.name.value, 39);
                var o = r.value;
                __DEV__ ? kn(o && ("Variable" === o.kind || "BooleanValue" === o.kind), "Argument for the @".concat(i, " directive must be a variable or a boolean value.")) : kn(o && ("Variable" === o.kind || "BooleanValue" === o.kind), 40), t.push({
                    directive: e,
                    ifArgument: r
                })
            }
        }));
        return t
    }(n).every((function(e) {
        var n = e.directive,
            i = e.ifArgument,
            r = !1;
        return "Variable" === i.value.kind ? (r = t && t[i.value.name.value], __DEV__ ? kn(void 0 !== r, "Invalid variable referenced in @".concat(n.name.value, " directive.")) : kn(void 0 !== r, 37)) : r = i.value.value, "skip" === n.name.value ? !r : r
    }))
}

function Yi(e, t) {
    return function(e) {
        var t = [];
        return Li(e, {
            Directive: function(e) {
                t.push(e.name.value)
            }
        }), t
    }(t).some((function(t) {
        return e.indexOf(t) > -1
    }))
}

function Ji(e) {
    return e && Yi(["client"], e) && Yi(["export"], e)
}

function Xi(e, t) {
    var i = t,
        r = [];
    return e.definitions.forEach((function(e) {
        if ("OperationDefinition" === e.kind) throw __DEV__ ? new Sn("Found a ".concat(e.operation, " operation").concat(e.name ? " named '".concat(e.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new Sn(41);
        "FragmentDefinition" === e.kind && r.push(e)
    })), void 0 === i && (__DEV__ ? kn(1 === r.length, "Found ".concat(r.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : kn(1 === r.length, 42), i = r[0].name.value), n(n({}, e), {
        definitions: a([{
            kind: "OperationDefinition",
            operation: "query",
            selectionSet: {
                kind: "SelectionSet",
                selections: [{
                    kind: "FragmentSpread",
                    name: {
                        kind: "Name",
                        value: i
                    }
                }]
            }
        }], e.definitions, !0)
    })
}

function Zi(e) {
    void 0 === e && (e = []);
    var t = {};
    return e.forEach((function(e) {
        t[e.name.value] = e
    })), t
}

function er(e, t) {
    switch (e.kind) {
        case "InlineFragment":
            return e;
        case "FragmentSpread":
            var n = t && t[e.name.value];
            return __DEV__ ? kn(n, "No fragment named ".concat(e.name.value, ".")) : kn(n, 43), n;
        default:
            return null
    }
}

function tr(e) {
    return null !== e && "object" == typeof e
}

function nr(e) {
    return {
        __ref: String(e)
    }
}

function ir(e) {
    return Boolean(e && "object" == typeof e && "string" == typeof e.__ref)
}

function rr(e, t, n, i) {
    if (function(e) {
            return "IntValue" === e.kind
        }(n) || function(e) {
            return "FloatValue" === e.kind
        }(n)) e[t.value] = Number(n.value);
    else if (function(e) {
            return "BooleanValue" === e.kind
        }(n) || function(e) {
            return "StringValue" === e.kind
        }(n)) e[t.value] = n.value;
    else if (function(e) {
            return "ObjectValue" === e.kind
        }(n)) {
        var r = {};
        n.fields.map((function(e) {
            return rr(r, e.name, e.value, i)
        })), e[t.value] = r
    } else if (function(e) {
            return "Variable" === e.kind
        }(n)) {
        var o = (i || {})[n.name.value];
        e[t.value] = o
    } else if (function(e) {
            return "ListValue" === e.kind
        }(n)) e[t.value] = n.values.map((function(e) {
        var n = {};
        return rr(n, t, e, i), n[t.value]
    }));
    else if (function(e) {
            return "EnumValue" === e.kind
        }(n)) e[t.value] = n.value;
    else {
        if (! function(e) {
                return "NullValue" === e.kind
            }(n)) throw __DEV__ ? new Sn('The inline argument "'.concat(t.value, '" of kind "').concat(n.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new Sn(52);
        e[t.value] = null
    }
}
Fn(), __DEV__ ? kn("boolean" == typeof Dn, Dn) : kn("boolean" == typeof Dn, 36);
var or = ["connection", "include", "skip", "client", "rest", "export"],
    sr = Object.assign((function(e, t, n) {
        if (t && n && n.connection && n.connection.key) {
            if (n.connection.filter && n.connection.filter.length > 0) {
                var i = n.connection.filter ? n.connection.filter : [];
                i.sort();
                var r = {};
                return i.forEach((function(e) {
                    r[e] = t[e]
                })), "".concat(n.connection.key, "(").concat(ar(r), ")")
            }
            return n.connection.key
        }
        var o = e;
        if (t) {
            var s = ar(t);
            o += "(".concat(s, ")")
        }
        return n && Object.keys(n).forEach((function(e) {
            -1 === or.indexOf(e) && (n[e] && Object.keys(n[e]).length ? o += "@".concat(e, "(").concat(ar(n[e]), ")") : o += "@".concat(e))
        })), o
    }), {
        setStringify: function(e) {
            var t = ar;
            return ar = e, t
        }
    }),
    ar = function(e) {
        return JSON.stringify(e, cr)
    };

function cr(e, t) {
    return tr(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce((function(e, n) {
        return e[n] = t[n], e
    }), {})), t
}

function lr(e, t) {
    if (e.arguments && e.arguments.length) {
        var n = {};
        return e.arguments.forEach((function(e) {
            var i = e.name,
                r = e.value;
            return rr(n, i, r, t)
        })), n
    }
    return null
}

function ur(e) {
    return e.alias ? e.alias.value : e.name.value
}

function hr(e, t, n) {
    if ("string" == typeof e.__typename) return e.__typename;
    for (var i = 0, r = t.selections; i < r.length; i++) {
        var o = r[i];
        if (dr(o)) {
            if ("__typename" === o.name.value) return e[ur(o)]
        } else {
            var s = hr(e, er(o, n).selectionSet, n);
            if ("string" == typeof s) return s
        }
    }
}

function dr(e) {
    return "Field" === e.kind
}

function pr(e) {
    return "InlineFragment" === e.kind
}

function fr(e) {
    __DEV__ ? kn(e && "Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : kn(e && "Document" === e.kind, 44);
    var t = e.definitions.filter((function(e) {
        return "FragmentDefinition" !== e.kind
    })).map((function(e) {
        if ("OperationDefinition" !== e.kind) throw __DEV__ ? new Sn('Schema type definitions not allowed in queries. Found: "'.concat(e.kind, '"')) : new Sn(45);
        return e
    }));
    return __DEV__ ? kn(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : kn(t.length <= 1, 46), e
}

function vr(e) {
    return fr(e), e.definitions.filter((function(e) {
        return "OperationDefinition" === e.kind
    }))[0]
}

function mr(e) {
    return e.definitions.filter((function(e) {
        return "OperationDefinition" === e.kind && e.name
    })).map((function(e) {
        return e.name.value
    }))[0] || null
}

function yr(e) {
    return e.definitions.filter((function(e) {
        return "FragmentDefinition" === e.kind
    }))
}

function gr(e) {
    var t = vr(e);
    return __DEV__ ? kn(t && "query" === t.operation, "Must contain a query definition.") : kn(t && "query" === t.operation, 47), t
}

function br(e) {
    var t;
    fr(e);
    for (var n = 0, i = e.definitions; n < i.length; n++) {
        var r = i[n];
        if ("OperationDefinition" === r.kind) {
            var o = r.operation;
            if ("query" === o || "mutation" === o || "subscription" === o) return r
        }
        "FragmentDefinition" !== r.kind || t || (t = r)
    }
    if (t) return t;
    throw __DEV__ ? new Sn("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new Sn(51)
}

function wr(e) {
    var t = Object.create(null),
        n = e && e.variableDefinitions;
    return n && n.length && n.forEach((function(e) {
        e.defaultValue && rr(t, e.variable.name, e.defaultValue)
    })), t
}

function xr(e, t, n) {
    var i = 0;
    return e.forEach((function(n, r) {
        t.call(this, n, r, e) && (e[i++] = n)
    }), n), e.length = i, e
}
var _r = {
    kind: "Field",
    name: {
        kind: "Name",
        value: "__typename"
    }
};

function Er(e, t) {
    return e.selectionSet.selections.every((function(e) {
        return "FragmentSpread" === e.kind && Er(t[e.name.value], t)
    }))
}

function Sr(e) {
    return Er(vr(e) || function(e) {
        __DEV__ ? kn("Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : kn("Document" === e.kind, 48), __DEV__ ? kn(e.definitions.length <= 1, "Fragment must have exactly one definition.") : kn(e.definitions.length <= 1, 49);
        var t = e.definitions[0];
        return __DEV__ ? kn("FragmentDefinition" === t.kind, "Must be a fragment definition.") : kn("FragmentDefinition" === t.kind, 50), t
    }(e), Zi(yr(e))) ? null : e
}

function kr(e) {
    return function(t) {
        return e.some((function(e) {
            return e.name && e.name === t.name.value || e.test && e.test(t)
        }))
    }
}

function Tr(e, t) {
    var i = Object.create(null),
        r = [],
        o = Object.create(null),
        s = [],
        a = Sr(Li(t, {
            Variable: {
                enter: function(e, t, n) {
                    "VariableDefinition" !== n.kind && (i[e.name.value] = !0)
                }
            },
            Field: {
                enter: function(t) {
                    if (e && t.directives && (e.some((function(e) {
                            return e.remove
                        })) && t.directives && t.directives.some(kr(e)))) return t.arguments && t.arguments.forEach((function(e) {
                        "Variable" === e.value.kind && r.push({
                            name: e.value.name.value
                        })
                    })), t.selectionSet && Ar(t.selectionSet).forEach((function(e) {
                        s.push({
                            name: e.name.value
                        })
                    })), null
                }
            },
            FragmentSpread: {
                enter: function(e) {
                    o[e.name.value] = !0
                }
            },
            Directive: {
                enter: function(t) {
                    if (kr(e)(t)) return null
                }
            }
        }));
    return a && xr(r, (function(e) {
        return !!e.name && !i[e.name]
    })).length && (a = function(e, t) {
        var i = function(e) {
            return function(t) {
                return e.some((function(e) {
                    return t.value && "Variable" === t.value.kind && t.value.name && (e.name === t.value.name.value || e.test && e.test(t))
                }))
            }
        }(e);
        return Sr(Li(t, {
            OperationDefinition: {
                enter: function(t) {
                    return n(n({}, t), {
                        variableDefinitions: t.variableDefinitions ? t.variableDefinitions.filter((function(t) {
                            return !e.some((function(e) {
                                return e.name === t.variable.name.value
                            }))
                        })) : []
                    })
                }
            },
            Field: {
                enter: function(t) {
                    if (e.some((function(e) {
                            return e.remove
                        }))) {
                        var n = 0;
                        if (t.arguments && t.arguments.forEach((function(e) {
                                i(e) && (n += 1)
                            })), 1 === n) return null
                    }
                }
            },
            Argument: {
                enter: function(e) {
                    if (i(e)) return null
                }
            }
        }))
    }(r, a)), a && xr(s, (function(e) {
        return !!e.name && !o[e.name]
    })).length && (a = function(e, t) {
        function n(t) {
            if (e.some((function(e) {
                    return e.name === t.name.value
                }))) return null
        }
        return Sr(Li(t, {
            FragmentSpread: {
                enter: n
            },
            FragmentDefinition: {
                enter: n
            }
        }))
    }(s, a)), a
}
var Cr = Object.assign((function(e) {
        return Li(fr(e), {
            SelectionSet: {
                enter: function(e, t, i) {
                    if (!i || "OperationDefinition" !== i.kind) {
                        var r = e.selections;
                        if (r)
                            if (!r.some((function(e) {
                                    return dr(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                                }))) {
                                var o = i;
                                if (!(dr(o) && o.directives && o.directives.some((function(e) {
                                        return "export" === e.name.value
                                    })))) return n(n({}, e), {
                                    selections: a(a([], r, !0), [_r], !1)
                                })
                            }
                    }
                }
            }
        })
    }), {
        added: function(e) {
            return e === _r
        }
    }),
    Or = {
        test: function(e) {
            var t = "connection" === e.name.value;
            return t && (e.arguments && e.arguments.some((function(e) {
                return "key" === e.name.value
            })) || __DEV__ && kn.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.")), t
        }
    };

function Ar(e) {
    var t = [];
    return e.selections.forEach((function(e) {
        (dr(e) || pr(e)) && e.selectionSet ? Ar(e.selectionSet).forEach((function(e) {
            return t.push(e)
        })) : "FragmentSpread" === e.kind && t.push(e)
    })), t
}

function Ir(e) {
    return "query" === br(e).operation ? e : Li(e, {
        OperationDefinition: {
            enter: function(e) {
                return n(n({}, e), {
                    operation: "query"
                })
            }
        }
    })
}
var Mr = Object.prototype.hasOwnProperty;

function Pr() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Dr(e)
}

function Dr(e) {
    var t = e[0] || {},
        n = e.length;
    if (n > 1)
        for (var i = new Rr, r = 1; r < n; ++r) t = i.merge(t, e[r]);
    return t
}
var Nr = function(e, t, n) {
        return this.merge(e[n], t[n])
    },
    Rr = function() {
        function e(e) {
            void 0 === e && (e = Nr), this.reconciler = e, this.isObject = tr, this.pastCopies = new Set
        }
        return e.prototype.merge = function(e, t) {
            for (var n = this, i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
            return tr(t) && tr(e) ? (Object.keys(t).forEach((function(r) {
                if (Mr.call(e, r)) {
                    var o = e[r];
                    if (t[r] !== o) {
                        var s = n.reconciler.apply(n, a([e, t, r], i, !1));
                        s !== o && ((e = n.shallowCopyForMerge(e))[r] = s)
                    }
                } else(e = n.shallowCopyForMerge(e))[r] = t[r]
            })), e) : t
        }, e.prototype.shallowCopyForMerge = function(e) {
            if (tr(e)) {
                if (this.pastCopies.has(e)) {
                    if (!Object.isFrozen(e)) return e;
                    this.pastCopies.delete(e)
                }
                e = Array.isArray(e) ? e.slice(0) : n({
                    __proto__: Object.getPrototypeOf(e)
                }, e), this.pastCopies.add(e)
            }
            return e
        }, e
    }();

function Lr(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return Fr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fr(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var i = 0;
        return function() {
            return i >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[i++]
            }
        }
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function Fr(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i
}

function jr(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function $r(e, t, n) {
    return t && jr(e.prototype, t), n && jr(e, n), e
}
var zr = function() {
        return "function" == typeof Symbol
    },
    Vr = function(e) {
        return zr() && Boolean(Symbol[e])
    },
    qr = function(e) {
        return Vr(e) ? Symbol[e] : "@@" + e
    };
zr() && !Vr("observable") && (Symbol.observable = Symbol("observable"));
var Ur = qr("iterator"),
    Br = qr("observable"),
    Qr = qr("species");

function Hr(e, t) {
    var n = e[t];
    if (null != n) {
        if ("function" != typeof n) throw new TypeError(n + " is not a function");
        return n
    }
}

function Gr(e) {
    var t = e.constructor;
    return void 0 !== t && null === (t = t[Qr]) && (t = void 0), void 0 !== t ? t : io
}

function Wr(e) {
    return e instanceof io
}

function Kr(e) {
    Kr.log ? Kr.log(e) : setTimeout((function() {
        throw e
    }))
}

function Yr(e) {
    Promise.resolve().then((function() {
        try {
            e()
        } catch (e) {
            Kr(e)
        }
    }))
}

function Jr(e) {
    var t = e._cleanup;
    if (void 0 !== t && (e._cleanup = void 0, t)) try {
        if ("function" == typeof t) t();
        else {
            var n = Hr(t, "unsubscribe");
            n && n.call(t)
        }
    } catch (e) {
        Kr(e)
    }
}

function Xr(e) {
    e._observer = void 0, e._queue = void 0, e._state = "closed"
}

function Zr(e, t, n) {
    e._state = "running";
    var i = e._observer;
    try {
        var r = Hr(i, t);
        switch (t) {
            case "next":
                r && r.call(i, n);
                break;
            case "error":
                if (Xr(e), !r) throw n;
                r.call(i, n);
                break;
            case "complete":
                Xr(e), r && r.call(i)
        }
    } catch (e) {
        Kr(e)
    }
    "closed" === e._state ? Jr(e) : "running" === e._state && (e._state = "ready")
}

function eo(e, t, n) {
    if ("closed" !== e._state) {
        if ("buffering" !== e._state) return "ready" !== e._state ? (e._state = "buffering", e._queue = [{
            type: t,
            value: n
        }], void Yr((function() {
            return function(e) {
                var t = e._queue;
                if (t) {
                    e._queue = void 0, e._state = "ready";
                    for (var n = 0; n < t.length && (Zr(e, t[n].type, t[n].value), "closed" !== e._state); ++n);
                }
            }(e)
        }))) : void Zr(e, t, n);
        e._queue.push({
            type: t,
            value: n
        })
    }
}
var to = function() {
        function e(e, t) {
            this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
            var n = new no(this);
            try {
                this._cleanup = t.call(void 0, n)
            } catch (e) {
                n.error(e)
            }
            "initializing" === this._state && (this._state = "ready")
        }
        return e.prototype.unsubscribe = function() {
            "closed" !== this._state && (Xr(this), Jr(this))
        }, $r(e, [{
            key: "closed",
            get: function() {
                return "closed" === this._state
            }
        }]), e
    }(),
    no = function() {
        function e(e) {
            this._subscription = e
        }
        var t = e.prototype;
        return t.next = function(e) {
            eo(this._subscription, "next", e)
        }, t.error = function(e) {
            eo(this._subscription, "error", e)
        }, t.complete = function() {
            eo(this._subscription, "complete")
        }, $r(e, [{
            key: "closed",
            get: function() {
                return "closed" === this._subscription._state
            }
        }]), e
    }(),
    io = function() {
        function e(t) {
            if (!(this instanceof e)) throw new TypeError("Observable cannot be called as a function");
            if ("function" != typeof t) throw new TypeError("Observable initializer must be a function");
            this._subscriber = t
        }
        var t = e.prototype;
        return t.subscribe = function(e) {
            return "object" == typeof e && null !== e || (e = {
                next: e,
                error: arguments[1],
                complete: arguments[2]
            }), new to(e, this._subscriber)
        }, t.forEach = function(e) {
            var t = this;
            return new Promise((function(n, i) {
                if ("function" == typeof e) var r = t.subscribe({
                    next: function(t) {
                        try {
                            e(t, o)
                        } catch (e) {
                            i(e), r.unsubscribe()
                        }
                    },
                    error: i,
                    complete: n
                });
                else i(new TypeError(e + " is not a function"));

                function o() {
                    r.unsubscribe(), n()
                }
            }))
        }, t.map = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            return new(Gr(this))((function(n) {
                return t.subscribe({
                    next: function(t) {
                        try {
                            t = e(t)
                        } catch (e) {
                            return n.error(e)
                        }
                        n.next(t)
                    },
                    error: function(e) {
                        n.error(e)
                    },
                    complete: function() {
                        n.complete()
                    }
                })
            }))
        }, t.filter = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            return new(Gr(this))((function(n) {
                return t.subscribe({
                    next: function(t) {
                        try {
                            if (!e(t)) return
                        } catch (e) {
                            return n.error(e)
                        }
                        n.next(t)
                    },
                    error: function(e) {
                        n.error(e)
                    },
                    complete: function() {
                        n.complete()
                    }
                })
            }))
        }, t.reduce = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            var n = Gr(this),
                i = arguments.length > 1,
                r = !1,
                o = arguments[1],
                s = o;
            return new n((function(n) {
                return t.subscribe({
                    next: function(t) {
                        var o = !r;
                        if (r = !0, !o || i) try {
                            s = e(s, t)
                        } catch (e) {
                            return n.error(e)
                        } else s = t
                    },
                    error: function(e) {
                        n.error(e)
                    },
                    complete: function() {
                        if (!r && !i) return n.error(new TypeError("Cannot reduce an empty sequence"));
                        n.next(s), n.complete()
                    }
                })
            }))
        }, t.concat = function() {
            for (var e = this, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            var r = Gr(this);
            return new r((function(t) {
                var i, o = 0;
                return function e(s) {
                        i = s.subscribe({
                            next: function(e) {
                                t.next(e)
                            },
                            error: function(e) {
                                t.error(e)
                            },
                            complete: function() {
                                o === n.length ? (i = void 0, t.complete()) : e(r.from(n[o++]))
                            }
                        })
                    }(e),
                    function() {
                        i && (i.unsubscribe(), i = void 0)
                    }
            }))
        }, t.flatMap = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            var n = Gr(this);
            return new n((function(i) {
                var r = [],
                    o = t.subscribe({
                        next: function(t) {
                            if (e) try {
                                t = e(t)
                            } catch (e) {
                                return i.error(e)
                            }
                            var o = n.from(t).subscribe({
                                next: function(e) {
                                    i.next(e)
                                },
                                error: function(e) {
                                    i.error(e)
                                },
                                complete: function() {
                                    var e = r.indexOf(o);
                                    e >= 0 && r.splice(e, 1), s()
                                }
                            });
                            r.push(o)
                        },
                        error: function(e) {
                            i.error(e)
                        },
                        complete: function() {
                            s()
                        }
                    });

                function s() {
                    o.closed && 0 === r.length && i.complete()
                }
                return function() {
                    r.forEach((function(e) {
                        return e.unsubscribe()
                    })), o.unsubscribe()
                }
            }))
        }, t[Br] = function() {
            return this
        }, e.from = function(t) {
            var n = "function" == typeof this ? this : e;
            if (null == t) throw new TypeError(t + " is not an object");
            var i = Hr(t, Br);
            if (i) {
                var r = i.call(t);
                if (Object(r) !== r) throw new TypeError(r + " is not an object");
                return Wr(r) && r.constructor === n ? r : new n((function(e) {
                    return r.subscribe(e)
                }))
            }
            if (Vr("iterator") && (i = Hr(t, Ur))) return new n((function(e) {
                Yr((function() {
                    if (!e.closed) {
                        for (var n, r = Lr(i.call(t)); !(n = r()).done;) {
                            var o = n.value;
                            if (e.next(o), e.closed) return
                        }
                        e.complete()
                    }
                }))
            }));
            if (Array.isArray(t)) return new n((function(e) {
                Yr((function() {
                    if (!e.closed) {
                        for (var n = 0; n < t.length; ++n)
                            if (e.next(t[n]), e.closed) return;
                        e.complete()
                    }
                }))
            }));
            throw new TypeError(t + " is not observable")
        }, e.of = function() {
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            var r = "function" == typeof this ? this : e;
            return new r((function(e) {
                Yr((function() {
                    if (!e.closed) {
                        for (var t = 0; t < n.length; ++t)
                            if (e.next(n[t]), e.closed) return;
                        e.complete()
                    }
                }))
            }))
        }, $r(e, null, [{
            key: Qr,
            get: function() {
                return this
            }
        }]), e
    }();
zr() && Object.defineProperty(io, Symbol("extensions"), {
        value: {
            symbol: Br,
            hostReportError: Kr
        },
        configurable: !0
    }),
    function(e) {
        var t, n = e.Symbol;
        if ("function" == typeof n)
            if (n.observable) t = n.observable;
            else {
                t = "function" == typeof n.for ? n.for("https://github.com/benlesh/symbol-observable") : n("https://github.com/benlesh/symbol-observable");
                try {
                    n.observable = t
                } catch (e) {}
            }
        else t = "@@observable"
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")());
var ro = io.prototype;
ro["@@observable"] || (ro["@@observable"] = function() {
    return this
});
var oo = Object.prototype.toString;

function so(e) {
    return ao(e)
}

function ao(e, t) {
    switch (oo.call(e)) {
        case "[object Array]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var n = e.slice(0);
            return t.set(e, n), n.forEach((function(e, i) {
                n[i] = ao(e, t)
            })), n;
        case "[object Object]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var i = Object.create(Object.getPrototypeOf(e));
            return t.set(e, i), Object.keys(e).forEach((function(n) {
                i[n] = ao(e[n], t)
            })), i;
        default:
            return e
    }
}

function co(e) {
    var t = new Set([e]);
    return t.forEach((function(e) {
        tr(e) && function(e) {
            if (__DEV__ && !Object.isFrozen(e)) try {
                Object.freeze(e)
            } catch (e) {
                if (e instanceof TypeError) return null;
                throw e
            }
            return e
        }(e) === e && Object.getOwnPropertyNames(e).forEach((function(n) {
            tr(e[n]) && t.add(e[n])
        }))
    })), e
}

function lo(e) {
    return __DEV__ && co(e), e
}

function uo(e, t, n) {
    var i = [];
    e.forEach((function(e) {
        return e[t] && i.push(e)
    })), i.forEach((function(e) {
        return e[t](n)
    }))
}

function ho(e, t, n) {
    return new io((function(i) {
        var r = i.next,
            o = i.error,
            s = i.complete,
            a = 0,
            c = !1,
            l = {
                then: function(e) {
                    return new Promise((function(t) {
                        return t(e())
                    }))
                }
            };

        function u(e, t) {
            return e ? function(t) {
                ++a;
                var n = function() {
                    return e(t)
                };
                l = l.then(n, n).then((function(e) {
                    --a, r && r.call(i, e), c && h.complete()
                }), (function(e) {
                    throw --a, e
                })).catch((function(e) {
                    o && o.call(i, e)
                }))
            } : function(e) {
                return t && t.call(i, e)
            }
        }
        var h = {
                next: u(t, r),
                error: u(n, o),
                complete: function() {
                    c = !0, a || s && s.call(i)
                }
            },
            d = e.subscribe(h);
        return function() {
            return d.unsubscribe()
        }
    }))
}
var po = "function" == typeof WeakMap && !("object" == typeof navigator && "ReactNative" === navigator.product),
    fo = "function" == typeof WeakSet,
    vo = "function" == typeof Symbol && "function" == typeof Symbol.for;

function mo(e) {
    function t(t) {
        Object.defineProperty(e, t, {
            value: io
        })
    }
    return vo && Symbol.species && t(Symbol.species), t("@@species"), e
}

function yo(e) {
    return e && "function" == typeof e.then
}
var go = function(e) {
    function n(t) {
        var n = e.call(this, (function(e) {
            return n.addObserver(e),
                function() {
                    return n.removeObserver(e)
                }
        })) || this;
        return n.observers = new Set, n.addCount = 0, n.promise = new Promise((function(e, t) {
            n.resolve = e, n.reject = t
        })), n.handlers = {
            next: function(e) {
                null !== n.sub && (n.latest = ["next", e], uo(n.observers, "next", e))
            },
            error: function(e) {
                var t = n.sub;
                null !== t && (t && setTimeout((function() {
                    return t.unsubscribe()
                })), n.sub = null, n.latest = ["error", e], n.reject(e), uo(n.observers, "error", e))
            },
            complete: function() {
                if (null !== n.sub) {
                    var e = n.sources.shift();
                    e ? yo(e) ? e.then((function(e) {
                        return n.sub = e.subscribe(n.handlers)
                    })) : n.sub = e.subscribe(n.handlers) : (n.sub = null, n.latest && "next" === n.latest[0] ? n.resolve(n.latest[1]) : n.resolve(), uo(n.observers, "complete"))
                }
            }
        }, n.cancel = function(e) {
            n.reject(e), n.sources = [], n.handlers.complete()
        }, n.promise.catch((function(e) {})), "function" == typeof t && (t = [new io(t)]), yo(t) ? t.then((function(e) {
            return n.start(e)
        }), n.handlers.error) : n.start(t), n
    }
    return t(n, e), n.prototype.start = function(e) {
        void 0 === this.sub && (this.sources = Array.from(e), this.handlers.complete())
    }, n.prototype.deliverLastMessage = function(e) {
        if (this.latest) {
            var t = this.latest[0],
                n = e[t];
            n && n.call(e, this.latest[1]), null === this.sub && "next" === t && e.complete && e.complete()
        }
    }, n.prototype.addObserver = function(e) {
        this.observers.has(e) || (this.deliverLastMessage(e), this.observers.add(e), ++this.addCount)
    }, n.prototype.removeObserver = function(e, t) {
        this.observers.delete(e) && --this.addCount < 1 && !t && this.handlers.error(new Error("Observable cancelled prematurely"))
    }, n.prototype.cleanup = function(e) {
        var t = this,
            n = !1,
            i = function() {
                n || (n = !0, t.observers.delete(r), e())
            },
            r = {
                next: i,
                error: i,
                complete: i
            },
            o = this.addCount;
        this.addObserver(r), this.addCount = o
    }, n
}(io);

function bo(e) {
    return Array.isArray(e) && e.length > 0
}

function wo(e) {
    return e.errors && e.errors.length > 0 || !1
}

function xo() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Object.create(null);
    return e.forEach((function(e) {
        e && Object.keys(e).forEach((function(t) {
            var i = e[t];
            void 0 !== i && (n[t] = i)
        }))
    })), n
}
mo(go);
var _o = new Map;

function Eo(e) {
    var t = _o.get(e) || 1;
    return _o.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2))
}

function So(e) {
    return new io((function(t) {
        t.error(e)
    }))
}
var ko = function(e, t, n) {
    var i = new Error(n);
    throw i.name = "ServerError", i.response = e, i.statusCode = e.status, i.result = t, i
};

function To(e, t) {
    return t ? t(e) : io.of()
}

function Co(e) {
    return "function" == typeof e ? new Io(e) : e
}

function Oo(e) {
    return e.request.length <= 1
}
var Ao = function(e) {
        function n(t, n) {
            var i = e.call(this, t) || this;
            return i.link = n, i
        }
        return t(n, e), n
    }(Error),
    Io = function() {
        function e(e) {
            e && (this.request = e)
        }
        return e.empty = function() {
            return new e((function() {
                return io.of()
            }))
        }, e.from = function(t) {
            return 0 === t.length ? e.empty() : t.map(Co).reduce((function(e, t) {
                return e.concat(t)
            }))
        }, e.split = function(t, n, i) {
            var r = Co(n),
                o = Co(i || new e(To));
            return Oo(r) && Oo(o) ? new e((function(e) {
                return t(e) ? r.request(e) || io.of() : o.request(e) || io.of()
            })) : new e((function(e, n) {
                return t(e) ? r.request(e, n) || io.of() : o.request(e, n) || io.of()
            }))
        }, e.execute = function(e, t) {
            return e.request(function(e, t) {
                var i = n({}, e);
                return Object.defineProperty(t, "setContext", {
                    enumerable: !1,
                    value: function(e) {
                        i = n(n({}, i), "function" == typeof e ? e(i) : e)
                    }
                }), Object.defineProperty(t, "getContext", {
                    enumerable: !1,
                    value: function() {
                        return n({}, i)
                    }
                }), t
            }(t.context, function(e) {
                var t = {
                    variables: e.variables || {},
                    extensions: e.extensions || {},
                    operationName: e.operationName,
                    query: e.query
                };
                return t.operationName || (t.operationName = "string" != typeof t.query ? mr(t.query) || void 0 : ""), t
            }(function(e) {
                for (var t = ["query", "operationName", "variables", "extensions", "context"], n = 0, i = Object.keys(e); n < i.length; n++) {
                    var r = i[n];
                    if (t.indexOf(r) < 0) throw __DEV__ ? new Sn("illegal argument: ".concat(r)) : new Sn(24)
                }
                return e
            }(t)))) || io.of()
        }, e.concat = function(t, n) {
            var i = Co(t);
            if (Oo(i)) return __DEV__ && kn.warn(new Ao("You are calling concat on a terminating link, which will have no effect", i)), i;
            var r = Co(n);
            return Oo(r) ? new e((function(e) {
                return i.request(e, (function(e) {
                    return r.request(e) || io.of()
                })) || io.of()
            })) : new e((function(e, t) {
                return i.request(e, (function(e) {
                    return r.request(e, t) || io.of()
                })) || io.of()
            }))
        }, e.prototype.split = function(t, n, i) {
            return this.concat(e.split(t, n, i || new e(To)))
        }, e.prototype.concat = function(t) {
            return e.concat(this, t)
        }, e.prototype.request = function(e, t) {
            throw __DEV__ ? new Sn("request is not implemented") : new Sn(19)
        }, e.prototype.onError = function(e, t) {
            if (t && t.error) return t.error(e), !1;
            throw e
        }, e.prototype.setOnError = function(e) {
            return this.onError = e, this
        }, e
    }(),
    Mo = Io.split,
    Po = Io.execute,
    Do = Object.prototype.hasOwnProperty;
var No = function(e, t) {
        var n;
        try {
            n = JSON.stringify(e)
        } catch (e) {
            var i = __DEV__ ? new Sn("Network request failed. ".concat(t, " is not serializable: ").concat(e.message)) : new Sn(21);
            throw i.parseError = e, i
        }
        return n
    },
    Ro = {
        http: {
            includeQuery: !0,
            includeExtensions: !1
        },
        headers: {
            accept: "*/*",
            "content-type": "application/json"
        },
        options: {
            method: "POST"
        }
    },
    Lo = function(e, t) {
        return t(e)
    };

function Fo(e, t) {
    for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
    var o = {},
        s = {};
    i.forEach((function(e) {
        o = n(n(n({}, o), e.options), {
            headers: n(n({}, o.headers), jo(e.headers))
        }), e.credentials && (o.credentials = e.credentials), s = n(n({}, s), e.http)
    }));
    var a = e.operationName,
        c = e.extensions,
        l = e.variables,
        u = e.query,
        h = {
            operationName: a,
            variables: l
        };
    return s.includeExtensions && (h.extensions = c), s.includeQuery && (h.query = t(u, ji)), {
        options: o,
        body: h
    }
}

function jo(e) {
    if (e) {
        var t = Object.create(null);
        return Object.keys(Object(e)).forEach((function(n) {
            t[n.toLowerCase()] = e[n]
        })), t
    }
    return e
}
var $o = An((function() {
        return fetch
    })),
    zo = function(e) {
        void 0 === e && (e = {});
        var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            o = e.fetch,
            s = e.print,
            a = void 0 === s ? Lo : s,
            c = e.includeExtensions,
            l = e.useGETForQueries,
            u = e.includeUnusedVariables,
            h = void 0 !== u && u,
            d = i(e, ["uri", "fetch", "print", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
        __DEV__ && function(e) {
            if (!e && "undefined" == typeof fetch) throw __DEV__ ? new Sn("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new Sn(20)
        }(o || $o);
        var p = {
            http: {
                includeExtensions: c
            },
            options: d.fetchOptions,
            credentials: d.credentials,
            headers: d.headers
        };
        return new Io((function(e) {
            var t = function(e, t) {
                    return e.getContext().uri || ("function" == typeof t ? t(e) : t || "/graphql")
                }(e, r),
                i = e.getContext(),
                s = {};
            if (i.clientAwareness) {
                var c = i.clientAwareness,
                    u = c.name,
                    d = c.version;
                u && (s["apollographql-client-name"] = u), d && (s["apollographql-client-version"] = d)
            }
            var f, v = n(n({}, s), i.headers),
                m = {
                    http: i.http,
                    options: i.fetchOptions,
                    credentials: i.credentials,
                    headers: v
                },
                y = Fo(e, a, Ro, p, m),
                g = y.options,
                b = y.body;
            if (b.variables && !h) {
                var w = new Set(Object.keys(b.variables));
                Li(e.query, {
                    Variable: function(e, t, n) {
                        n && "VariableDefinition" !== n.kind && w.delete(e.name.value)
                    }
                }), w.size && (b.variables = n({}, b.variables), w.forEach((function(e) {
                    delete b.variables[e]
                })))
            }
            if (!g.signal) {
                var x = function() {
                        if ("undefined" == typeof AbortController) return {
                            controller: !1,
                            signal: !1
                        };
                        var e = new AbortController;
                        return {
                            controller: e,
                            signal: e.signal
                        }
                    }(),
                    _ = x.controller,
                    E = x.signal;
                (f = _) && (g.signal = E)
            }
            if (l && !e.query.definitions.some((function(e) {
                    return "OperationDefinition" === e.kind && "mutation" === e.operation
                })) && (g.method = "GET"), "GET" === g.method) {
                var S = function(e, t) {
                        var n = [],
                            i = function(e, t) {
                                n.push("".concat(e, "=").concat(encodeURIComponent(t)))
                            };
                        if ("query" in t && i("query", t.query), t.operationName && i("operationName", t.operationName), t.variables) {
                            var r = void 0;
                            try {
                                r = No(t.variables, "Variables map")
                            } catch (e) {
                                return {
                                    parseError: e
                                }
                            }
                            i("variables", r)
                        }
                        if (t.extensions) {
                            var o = void 0;
                            try {
                                o = No(t.extensions, "Extensions map")
                            } catch (e) {
                                return {
                                    parseError: e
                                }
                            }
                            i("extensions", o)
                        }
                        var s = "",
                            a = e,
                            c = e.indexOf("#"); - 1 !== c && (s = e.substr(c), a = e.substr(0, c));
                        var l = -1 === a.indexOf("?") ? "?" : "&";
                        return {
                            newURI: a + l + n.join("&") + s
                        }
                    }(t, b),
                    k = S.newURI,
                    T = S.parseError;
                if (T) return So(T);
                t = k
            } else try {
                g.body = No(b, "Payload")
            } catch (T) {
                return So(T)
            }
            return new io((function(n) {
                var i;
                return (o || An((function() {
                        return fetch
                    })) || $o)(t, g).then((function(t) {
                        return e.setContext({
                            response: t
                        }), t
                    })).then((i = e, function(e) {
                        return e.text().then((function(t) {
                            try {
                                return JSON.parse(t)
                            } catch (i) {
                                var n = i;
                                throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n
                            }
                        })).then((function(t) {
                            return e.status >= 300 && ko(e, t, "Response not successful: Received status code ".concat(e.status)), Array.isArray(t) || Do.call(t, "data") || Do.call(t, "errors") || ko(e, t, "Server response was missing for query '".concat(Array.isArray(i) ? i.map((function(e) {
                                return e.operationName
                            })) : i.operationName, "'.")), t
                        }))
                    })).then((function(e) {
                        return n.next(e), n.complete(), e
                    })).catch((function(e) {
                        "AbortError" !== e.name && (e.result && e.result.errors && e.result.data && n.next(e.result), n.error(e))
                    })),
                    function() {
                        f && f.abort()
                    }
            }))
        }))
    },
    Vo = function(e) {
        function n(t) {
            void 0 === t && (t = {});
            var n = e.call(this, zo(t).request) || this;
            return n.options = t, n
        }
        return t(n, e), n
    }(Io),
    qo = Object.prototype,
    Uo = qo.toString,
    Bo = qo.hasOwnProperty,
    Qo = Function.prototype.toString,
    Ho = new Map;

function Go(e, t) {
    try {
        return Wo(e, t)
    } finally {
        Ho.clear()
    }
}

function Wo(e, t) {
    if (e === t) return !0;
    var n, i, r, o = Uo.call(e);
    if (o !== Uo.call(t)) return !1;
    switch (o) {
        case "[object Array]":
            if (e.length !== t.length) return !1;
        case "[object Object]":
            if (Xo(e, t)) return !0;
            var s = Ko(e),
                a = Ko(t),
                c = s.length;
            if (c !== a.length) return !1;
            for (var l = 0; l < c; ++l)
                if (!Bo.call(t, s[l])) return !1;
            for (l = 0; l < c; ++l) {
                var u = s[l];
                if (!Wo(e[u], t[u])) return !1
            }
            return !0;
        case "[object Error]":
            return e.name === t.name && e.message === t.message;
        case "[object Number]":
            if (e != e) return t != t;
        case "[object Boolean]":
        case "[object Date]":
            return +e == +t;
        case "[object RegExp]":
        case "[object String]":
            return e == "" + t;
        case "[object Map]":
        case "[object Set]":
            if (e.size !== t.size) return !1;
            if (Xo(e, t)) return !0;
            for (var h = e.entries(), d = "[object Map]" === o;;) {
                var p = h.next();
                if (p.done) break;
                var f = p.value,
                    v = f[0],
                    m = f[1];
                if (!t.has(v)) return !1;
                if (d && !Wo(m, t.get(v))) return !1
            }
            return !0;
        case "[object Uint16Array]":
        case "[object Uint8Array]":
        case "[object Uint32Array]":
        case "[object Int32Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object ArrayBuffer]":
            e = new Uint8Array(e), t = new Uint8Array(t);
        case "[object DataView]":
            var y = e.byteLength;
            if (y === t.byteLength)
                for (; y-- && e[y] === t[y];);
            return -1 === y;
        case "[object AsyncFunction]":
        case "[object GeneratorFunction]":
        case "[object AsyncGeneratorFunction]":
        case "[object Function]":
            var g = Qo.call(e);
            return g === Qo.call(t) && (i = Jo, !((r = (n = g).length - i.length) >= 0 && n.indexOf(i, r) === r))
    }
    return !1
}

function Ko(e) {
    return Object.keys(e).filter(Yo, e)
}

function Yo(e) {
    return void 0 !== this[e]
}
var Jo = "{ [native code] }";

function Xo(e, t) {
    var n = Ho.get(e);
    if (n) {
        if (n.has(t)) return !0
    } else Ho.set(e, n = new Set);
    return n.add(t), !1
}
var Zo = function() {
        return Object.create(null)
    },
    es = Array.prototype,
    ts = es.forEach,
    ns = es.slice,
    is = function() {
        function e(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = Zo), this.weakness = e, this.makeData = t
        }
        return e.prototype.lookup = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.lookupArray(e)
        }, e.prototype.lookupArray = function(e) {
            var t = this;
            return ts.call(e, (function(e) {
                return t = t.getChildTrie(e)
            })), t.data || (t.data = this.makeData(ns.call(e)))
        }, e.prototype.getChildTrie = function(t) {
            var n = this.weakness && function(e) {
                    switch (typeof e) {
                        case "object":
                            if (null === e) break;
                        case "function":
                            return !0
                    }
                    return !1
                }(t) ? this.weak || (this.weak = new WeakMap) : this.strong || (this.strong = new Map),
                i = n.get(t);
            return i || n.set(t, i = new e(this.weakness, this.makeData)), i
        }, e
    }();
var rs = null,
    os = {},
    ss = 1,
    as = Array,
    cs = as["@wry/context:Slot"] || function() {
        var e = function() {
            function e() {
                this.id = ["slot", ss++, Date.now(), Math.random().toString(36).slice(2)].join(":")
            }
            return e.prototype.hasValue = function() {
                for (var e = rs; e; e = e.parent)
                    if (this.id in e.slots) {
                        var t = e.slots[this.id];
                        if (t === os) break;
                        return e !== rs && (rs.slots[this.id] = t), !0
                    } return rs && (rs.slots[this.id] = os), !1
            }, e.prototype.getValue = function() {
                if (this.hasValue()) return rs.slots[this.id]
            }, e.prototype.withValue = function(e, t, n, i) {
                var r, o = ((r = {
                        __proto__: null
                    })[this.id] = e, r),
                    s = rs;
                rs = {
                    parent: s,
                    slots: o
                };
                try {
                    return t.apply(i, n)
                } finally {
                    rs = s
                }
            }, e.bind = function(e) {
                var t = rs;
                return function() {
                    var n = rs;
                    try {
                        return rs = t, e.apply(this, arguments)
                    } finally {
                        rs = n
                    }
                }
            }, e.noContext = function(e, t, n) {
                if (!rs) return e.apply(n, t);
                var i = rs;
                try {
                    return rs = null, e.apply(n, t)
                } finally {
                    rs = i
                }
            }, e
        }();
        try {
            Object.defineProperty(as, "@wry/context:Slot", {
                value: as["@wry/context:Slot"] = e,
                enumerable: !1,
                writable: !1,
                configurable: !1
            })
        } finally {
            return e
        }
    }();

function ls() {}
cs.bind, cs.noContext;
var us, hs = function() {
        function e(e, t) {
            void 0 === e && (e = 1 / 0), void 0 === t && (t = ls), this.max = e, this.dispose = t, this.map = new Map, this.newest = null, this.oldest = null
        }
        return e.prototype.has = function(e) {
            return this.map.has(e)
        }, e.prototype.get = function(e) {
            var t = this.getNode(e);
            return t && t.value
        }, e.prototype.getNode = function(e) {
            var t = this.map.get(e);
            if (t && t !== this.newest) {
                var n = t.older,
                    i = t.newer;
                i && (i.older = n), n && (n.newer = i), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = i)
            }
            return t
        }, e.prototype.set = function(e, t) {
            var n = this.getNode(e);
            return n ? n.value = t : (n = {
                key: e,
                value: t,
                newer: null,
                older: this.newest
            }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(e, n), n.value)
        }, e.prototype.clean = function() {
            for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key)
        }, e.prototype.delete = function(e) {
            var t = this.map.get(e);
            return !!t && (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0)
        }, e
    }(),
    ds = new cs,
    ps = Object.prototype.hasOwnProperty,
    fs = void 0 === (us = Array.from) ? function(e) {
        var t = [];
        return e.forEach((function(e) {
            return t.push(e)
        })), t
    } : us;

function vs(e) {
    var t = e.unsubscribe;
    "function" == typeof t && (e.unsubscribe = void 0, t())
}
var ms = [];

function ys(e, t) {
    if (!e) throw new Error(t || "assertion failure")
}

function gs(e) {
    switch (e.length) {
        case 0:
            throw new Error("unknown value");
        case 1:
            return e[0];
        case 2:
            throw e[1]
    }
}
var bs = function() {
    function e(t) {
        this.fn = t, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count
    }
    return e.prototype.peek = function() {
        if (1 === this.value.length && !_s(this)) return ws(this), this.value[0]
    }, e.prototype.recompute = function(e) {
        return ys(!this.recomputing, "already recomputing"), ws(this), _s(this) ? function(e, t) {
            As(e), ds.withValue(e, xs, [e, t]),
                function(e, t) {
                    if ("function" == typeof e.subscribe) try {
                        vs(e), e.unsubscribe = e.subscribe.apply(null, t)
                    } catch (t) {
                        return e.setDirty(), !1
                    }
                    return !0
                }(e, t) && function(e) {
                    if (e.dirty = !1, _s(e)) return;
                    Ss(e)
                }(e);
            return gs(e.value)
        }(this, e) : gs(this.value)
    }, e.prototype.setDirty = function() {
        this.dirty || (this.dirty = !0, this.value.length = 0, Es(this), vs(this))
    }, e.prototype.dispose = function() {
        var e = this;
        this.setDirty(), As(this), ks(this, (function(t, n) {
            t.setDirty(), Is(t, e)
        }))
    }, e.prototype.forget = function() {
        this.dispose()
    }, e.prototype.dependOn = function(e) {
        e.add(this), this.deps || (this.deps = ms.pop() || new Set), this.deps.add(e)
    }, e.prototype.forgetDeps = function() {
        var e = this;
        this.deps && (fs(this.deps).forEach((function(t) {
            return t.delete(e)
        })), this.deps.clear(), ms.push(this.deps), this.deps = null)
    }, e.count = 0, e
}();

function ws(e) {
    var t = ds.getValue();
    if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), _s(e) ? Ts(t, e) : Cs(t, e), t
}

function xs(e, t) {
    e.recomputing = !0, e.value.length = 0;
    try {
        e.value[0] = e.fn.apply(null, t)
    } catch (t) {
        e.value[1] = t
    }
    e.recomputing = !1
}

function _s(e) {
    return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
}

function Es(e) {
    ks(e, Ts)
}

function Ss(e) {
    ks(e, Cs)
}

function ks(e, t) {
    var n = e.parents.size;
    if (n)
        for (var i = fs(e.parents), r = 0; r < n; ++r) t(i[r], e)
}

function Ts(e, t) {
    ys(e.childValues.has(t)), ys(_s(t));
    var n = !_s(e);
    if (e.dirtyChildren) {
        if (e.dirtyChildren.has(t)) return
    } else e.dirtyChildren = ms.pop() || new Set;
    e.dirtyChildren.add(t), n && Es(e)
}

function Cs(e, t) {
    ys(e.childValues.has(t)), ys(!_s(t));
    var n = e.childValues.get(t);
    0 === n.length ? e.childValues.set(t, t.value.slice(0)) : function(e, t) {
        var n = e.length;
        return n > 0 && n === t.length && e[n - 1] === t[n - 1]
    }(n, t.value) || e.setDirty(), Os(e, t), _s(e) || Ss(e)
}

function Os(e, t) {
    var n = e.dirtyChildren;
    n && (n.delete(t), 0 === n.size && (ms.length < 100 && ms.push(n), e.dirtyChildren = null))
}

function As(e) {
    e.childValues.size > 0 && e.childValues.forEach((function(t, n) {
        Is(e, n)
    })), e.forgetDeps(), ys(null === e.dirtyChildren)
}

function Is(e, t) {
    t.parents.delete(e), e.childValues.delete(t), Os(e, t)
}
var Ms = {
    setDirty: !0,
    dispose: !0,
    forget: !0
};

function Ps(e) {
    var t = new Map,
        n = e && e.subscribe;

    function i(e) {
        var i = ds.getValue();
        if (i) {
            var r = t.get(e);
            r || t.set(e, r = new Set), i.dependOn(r), "function" == typeof n && (vs(r), r.unsubscribe = n(e))
        }
    }
    return i.dirty = function(e, n) {
        var i = t.get(e);
        if (i) {
            var r = n && ps.call(Ms, n) ? n : "setDirty";
            fs(i).forEach((function(e) {
                return e[r]()
            })), t.delete(e), vs(i)
        }
    }, i
}

function Ds() {
    var e = new is("function" == typeof WeakMap);
    return function() {
        return e.lookupArray(arguments)
    }
}
Ds();
var Ns = new Set;

function Rs(e, t) {
    void 0 === t && (t = Object.create(null));
    var n = new hs(t.max || Math.pow(2, 16), (function(e) {
            return e.dispose()
        })),
        i = t.keyArgs,
        r = t.makeCacheKey || Ds(),
        o = function() {
            var o = r.apply(null, i ? i.apply(null, arguments) : arguments);
            if (void 0 === o) return e.apply(null, arguments);
            var s = n.get(o);
            s || (n.set(o, s = new bs(e)), s.subscribe = t.subscribe, s.forget = function() {
                return n.delete(o)
            });
            var a = s.recompute(Array.prototype.slice.call(arguments));
            return n.set(o, s), Ns.add(n), ds.hasValue() || (Ns.forEach((function(e) {
                return e.clean()
            })), Ns.clear()), a
        };

    function s(e) {
        var t = n.get(e);
        t && t.setDirty()
    }

    function a(e) {
        var t = n.get(e);
        if (t) return t.peek()
    }

    function c(e) {
        return n.delete(e)
    }
    return Object.defineProperty(o, "size", {
        get: function() {
            return n.map.size
        },
        configurable: !1,
        enumerable: !1
    }), o.dirtyKey = s, o.dirty = function() {
        s(r.apply(null, arguments))
    }, o.peekKey = a, o.peek = function() {
        return a(r.apply(null, arguments))
    }, o.forgetKey = c, o.forget = function() {
        return c(r.apply(null, arguments))
    }, o.makeCacheKey = r, o.getKey = i ? function() {
        return r.apply(null, i.apply(null, arguments))
    } : r, Object.freeze(o)
}
var Ls = function() {
        function e() {
            this.getFragmentDoc = Rs(Xi)
        }
        return e.prototype.batch = function(e) {
            var t, n = this,
                i = "string" == typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0;
            return this.performTransaction((function() {
                return t = e.update(n)
            }), i), t
        }, e.prototype.recordOptimisticTransaction = function(e, t) {
            this.performTransaction(e, t)
        }, e.prototype.transformDocument = function(e) {
            return e
        }, e.prototype.identify = function(e) {}, e.prototype.gc = function() {
            return []
        }, e.prototype.modify = function(e) {
            return !1
        }, e.prototype.transformForLink = function(e) {
            return e
        }, e.prototype.readQuery = function(e, t) {
            return void 0 === t && (t = !!e.optimistic), this.read(n(n({}, e), {
                rootId: e.id || "ROOT_QUERY",
                optimistic: t
            }))
        }, e.prototype.readFragment = function(e, t) {
            return void 0 === t && (t = !!e.optimistic), this.read(n(n({}, e), {
                query: this.getFragmentDoc(e.fragment, e.fragmentName),
                rootId: e.id,
                optimistic: t
            }))
        }, e.prototype.writeQuery = function(e) {
            var t = e.id,
                n = e.data,
                r = i(e, ["id", "data"]);
            return this.write(Object.assign(r, {
                dataId: t || "ROOT_QUERY",
                result: n
            }))
        }, e.prototype.writeFragment = function(e) {
            var t = e.id,
                n = e.data,
                r = e.fragment,
                o = e.fragmentName,
                s = i(e, ["id", "data", "fragment", "fragmentName"]);
            return this.write(Object.assign(s, {
                query: this.getFragmentDoc(r, o),
                dataId: t,
                result: n
            }))
        }, e.prototype.updateQuery = function(e, t) {
            return this.batch({
                update: function(i) {
                    var r = i.readQuery(e),
                        o = t(r);
                    return null == o ? r : (i.writeQuery(n(n({}, e), {
                        data: o
                    })), o)
                }
            })
        }, e.prototype.updateFragment = function(e, t) {
            return this.batch({
                update: function(i) {
                    var r = i.readFragment(e),
                        o = t(r);
                    return null == o ? r : (i.writeFragment(n(n({}, e), {
                        data: o
                    })), o)
                }
            })
        }, e
    }(),
    Fs = function(e, t, n, i) {
        this.message = e, this.path = t, this.query = n, this.variables = i
    },
    js = Object.prototype.hasOwnProperty;

function $s(e, t) {
    var n = e.__typename,
        i = e.id,
        r = e._id;
    if ("string" == typeof n && (t && (t.keyObject = void 0 !== i ? {
            id: i
        } : void 0 !== r ? {
            _id: r
        } : void 0), void 0 === i && (i = r), void 0 !== i)) return "".concat(n, ":").concat("number" == typeof i || "string" == typeof i ? i : JSON.stringify(i))
}
var zs = {
    dataIdFromObject: $s,
    addTypename: !0,
    resultCaching: !0,
    canonizeResults: !1
};

function Vs(e) {
    var t = e.canonizeResults;
    return void 0 === t ? zs.canonizeResults : t
}
var qs = /^[_a-z][_0-9a-z]*/i;

function Us(e) {
    var t = e.match(qs);
    return t ? t[0] : e
}

function Bs(e, t, n) {
    return !!tr(t) && (Array.isArray(t) ? t.every((function(t) {
        return Bs(e, t, n)
    })) : e.selections.every((function(e) {
        if (dr(e) && Ki(e, n)) {
            var i = ur(e);
            return js.call(t, i) && (!e.selectionSet || Bs(e.selectionSet, t[i], n))
        }
        return !0
    })))
}

function Qs(e) {
    return tr(e) && !ir(e) && !Array.isArray(e)
}
var Hs = Object.create(null),
    Gs = function() {
        return Hs
    },
    Ws = Object.create(null),
    Ks = function() {
        function e(e, t) {
            var n = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
                return lo(ir(e) ? n.get(e.__ref, t) : e && e[t])
            }, this.canRead = function(e) {
                return ir(e) ? n.has(e.__ref) : "object" == typeof e
            }, this.toReference = function(e, t) {
                if ("string" == typeof e) return nr(e);
                if (ir(e)) return e;
                var i = n.policies.identify(e)[0];
                if (i) {
                    var r = nr(i);
                    return t && n.merge(i, e), r
                }
            }
        }
        return e.prototype.toObject = function() {
            return n({}, this.data)
        }, e.prototype.has = function(e) {
            return void 0 !== this.lookup(e, !0)
        }, e.prototype.get = function(e, t) {
            if (this.group.depend(e, t), js.call(this.data, e)) {
                var n = this.data[e];
                if (n && js.call(n, t)) return n[t]
            }
            return "__typename" === t && js.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof Zs ? this.parent.get(e, t) : void 0
        }, e.prototype.lookup = function(e, t) {
            return t && this.group.depend(e, "__exists"), js.call(this.data, e) ? this.data[e] : this instanceof Zs ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
        }, e.prototype.merge = function(e, t) {
            var n, i = this;
            ir(e) && (e = e.__ref), ir(t) && (t = t.__ref);
            var r = "string" == typeof e ? this.lookup(n = e) : e,
                o = "string" == typeof t ? this.lookup(n = t) : t;
            if (o) {
                __DEV__ ? kn("string" == typeof n, "store.merge expects a string ID") : kn("string" == typeof n, 1);
                var s = new Rr(ta).merge(r, o);
                if (this.data[n] = s, s !== r && (delete this.refs[n], this.group.caching)) {
                    var a = Object.create(null);
                    r || (a.__exists = 1), Object.keys(o).forEach((function(e) {
                        if (!r || r[e] !== s[e]) {
                            a[e] = 1;
                            var t = Us(e);
                            t === e || i.policies.hasKeyArgs(s.__typename, t) || (a[t] = 1), void 0 !== s[e] || i instanceof Zs || delete s[e]
                        }
                    })), !a.__typename || r && r.__typename || this.policies.rootTypenamesById[n] !== s.__typename || delete a.__typename, Object.keys(a).forEach((function(e) {
                        return i.group.dirty(n, e)
                    }))
                }
            }
        }, e.prototype.modify = function(e, t) {
            var i = this,
                r = this.lookup(e);
            if (r) {
                var o = Object.create(null),
                    s = !1,
                    a = !0,
                    c = {
                        DELETE: Hs,
                        INVALIDATE: Ws,
                        isReference: ir,
                        toReference: this.toReference,
                        canRead: this.canRead,
                        readField: function(t, n) {
                            return i.policies.readField("string" == typeof t ? {
                                fieldName: t,
                                from: n || nr(e)
                            } : t, {
                                store: i
                            })
                        }
                    };
                if (Object.keys(r).forEach((function(l) {
                        var u = Us(l),
                            h = r[l];
                        if (void 0 !== h) {
                            var d = "function" == typeof t ? t : t[l] || t[u];
                            if (d) {
                                var p = d === Gs ? Hs : d(lo(h), n(n({}, c), {
                                    fieldName: u,
                                    storeFieldName: l,
                                    storage: i.getStorage(e, l)
                                }));
                                p === Ws ? i.group.dirty(e, l) : (p === Hs && (p = void 0), p !== h && (o[l] = p, s = !0, h = p))
                            }
                            void 0 !== h && (a = !1)
                        }
                    })), s) return this.merge(e, o), a && (this instanceof Zs ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
            }
            return !1
        }, e.prototype.delete = function(e, t, n) {
            var i, r = this.lookup(e);
            if (r) {
                var o = this.getFieldValue(r, "__typename"),
                    s = t && n ? this.policies.getStoreFieldName({
                        typename: o,
                        fieldName: t,
                        args: n
                    }) : t;
                return this.modify(e, s ? ((i = {})[s] = Gs, i) : Gs)
            }
            return !1
        }, e.prototype.evict = function(e, t) {
            var n = !1;
            return e.id && (js.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof Zs && this !== t && (n = this.parent.evict(e, t) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n
        }, e.prototype.clear = function() {
            this.replace(null)
        }, e.prototype.extract = function() {
            var e = this,
                t = this.toObject(),
                n = [];
            return this.getRootIdSet().forEach((function(t) {
                js.call(e.policies.rootTypenamesById, t) || n.push(t)
            })), n.length && (t.__META = {
                extraRootIds: n.sort()
            }), t
        }, e.prototype.replace = function(e) {
            var t = this;
            if (Object.keys(this.data).forEach((function(n) {
                    e && js.call(e, n) || t.delete(n)
                })), e) {
                var n = e.__META,
                    r = i(e, ["__META"]);
                Object.keys(r).forEach((function(e) {
                    t.merge(e, r[e])
                })), n && n.extraRootIds.forEach(this.retain, this)
            }
        }, e.prototype.retain = function(e) {
            return this.rootIds[e] = (this.rootIds[e] || 0) + 1
        }, e.prototype.release = function(e) {
            if (this.rootIds[e] > 0) {
                var t = --this.rootIds[e];
                return t || delete this.rootIds[e], t
            }
            return 0
        }, e.prototype.getRootIdSet = function(e) {
            return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Zs ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
        }, e.prototype.gc = function() {
            var e = this,
                t = this.getRootIdSet(),
                n = this.toObject();
            t.forEach((function(i) {
                js.call(n, i) && (Object.keys(e.findChildRefIds(i)).forEach(t.add, t), delete n[i])
            }));
            var i = Object.keys(n);
            if (i.length) {
                for (var r = this; r instanceof Zs;) r = r.parent;
                i.forEach((function(e) {
                    return r.delete(e)
                }))
            }
            return i
        }, e.prototype.findChildRefIds = function(e) {
            if (!js.call(this.refs, e)) {
                var t = this.refs[e] = Object.create(null),
                    n = this.data[e];
                if (!n) return t;
                var i = new Set([n]);
                i.forEach((function(e) {
                    ir(e) && (t[e.__ref] = !0), tr(e) && Object.keys(e).forEach((function(t) {
                        var n = e[t];
                        tr(n) && i.add(n)
                    }))
                }))
            }
            return this.refs[e]
        }, e.prototype.makeCacheKey = function() {
            return this.group.keyMaker.lookupArray(arguments)
        }, e
    }(),
    Ys = function() {
        function e(e, t) {
            void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching()
        }
        return e.prototype.resetCaching = function() {
            this.d = this.caching ? Ps() : null, this.keyMaker = new is(po)
        }, e.prototype.depend = function(e, t) {
            if (this.d) {
                this.d(Js(e, t));
                var n = Us(t);
                n !== t && this.d(Js(e, n)), this.parent && this.parent.depend(e, t)
            }
        }, e.prototype.dirty = function(e, t) {
            this.d && this.d.dirty(Js(e, t), "__exists" === t ? "forget" : "setDirty")
        }, e
    }();

function Js(e, t) {
    return t + "#" + e
}

function Xs(e, t) {
    na(e) && e.group.depend(t, "__exists")
}! function(e) {
    var n = function(e) {
        function n(t) {
            var n = t.policies,
                i = t.resultCaching,
                r = void 0 === i || i,
                o = t.seed,
                s = e.call(this, n, new Ys(r)) || this;
            return s.stump = new ea(s), s.storageTrie = new is(po), o && s.replace(o), s
        }
        return t(n, e), n.prototype.addLayer = function(e, t) {
            return this.stump.addLayer(e, t)
        }, n.prototype.removeLayer = function() {
            return this
        }, n.prototype.getStorage = function() {
            return this.storageTrie.lookupArray(arguments)
        }, n
    }(e);
    e.Root = n
}(Ks || (Ks = {}));
var Zs = function(e) {
        function i(t, n, i, r) {
            var o = e.call(this, n.policies, r) || this;
            return o.id = t, o.parent = n, o.replay = i, o.group = r, i(o), o
        }
        return t(i, e), i.prototype.addLayer = function(e, t) {
            return new i(e, this, t, this.group)
        }, i.prototype.removeLayer = function(e) {
            var t = this,
                n = this.parent.removeLayer(e);
            return e === this.id ? (this.group.caching && Object.keys(this.data).forEach((function(e) {
                var i = t.data[e],
                    r = n.lookup(e);
                r ? i ? i !== r && Object.keys(i).forEach((function(n) {
                    Go(i[n], r[n]) || t.group.dirty(e, n)
                })) : (t.group.dirty(e, "__exists"), Object.keys(r).forEach((function(n) {
                    t.group.dirty(e, n)
                }))) : t.delete(e)
            })), n) : n === this.parent ? this : n.addLayer(this.id, this.replay)
        }, i.prototype.toObject = function() {
            return n(n({}, this.parent.toObject()), this.data)
        }, i.prototype.findChildRefIds = function(t) {
            var i = this.parent.findChildRefIds(t);
            return js.call(this.data, t) ? n(n({}, i), e.prototype.findChildRefIds.call(this, t)) : i
        }, i.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
        }, i
    }(Ks),
    ea = function(e) {
        function n(t) {
            return e.call(this, "EntityStore.Stump", t, (function() {}), new Ys(t.group.caching, t.group)) || this
        }
        return t(n, e), n.prototype.removeLayer = function() {
            return this
        }, n.prototype.merge = function() {
            return this.parent.merge.apply(this.parent, arguments)
        }, n
    }(Zs);

function ta(e, t, n) {
    var i = e[n],
        r = t[n];
    return Go(i, r) ? i : r
}

function na(e) {
    return !!(e instanceof Ks && e.group.caching)
}
var ia, ra, oa = function() {
        function e() {
            this.known = new(fo ? WeakSet : Set), this.pool = new is(po), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
        }
        return e.prototype.isKnown = function(e) {
            return tr(e) && this.known.has(e)
        }, e.prototype.pass = function(e) {
            if (tr(e)) {
                var t = function(e) {
                    return tr(e) ? Array.isArray(e) ? e.slice(0) : n({
                        __proto__: Object.getPrototypeOf(e)
                    }, e) : e
                }(e);
                return this.passes.set(t, e), t
            }
            return e
        }, e.prototype.admit = function(e) {
            var t = this;
            if (tr(e)) {
                var n = this.passes.get(e);
                if (n) return n;
                switch (Object.getPrototypeOf(e)) {
                    case Array.prototype:
                        if (this.known.has(e)) return e;
                        var i = e.map(this.admit, this);
                        return (a = this.pool.lookupArray(i)).array || (this.known.add(a.array = i), __DEV__ && Object.freeze(i)), a.array;
                    case null:
                    case Object.prototype:
                        if (this.known.has(e)) return e;
                        var r = Object.getPrototypeOf(e),
                            o = [r],
                            s = this.sortedKeys(e);
                        o.push(s.json);
                        var a, c = o.length;
                        if (s.sorted.forEach((function(n) {
                                o.push(t.admit(e[n]))
                            })), !(a = this.pool.lookupArray(o)).object) {
                            var l = a.object = Object.create(r);
                            this.known.add(l), s.sorted.forEach((function(e, t) {
                                l[e] = o[c + t]
                            })), __DEV__ && Object.freeze(l)
                        }
                        return a.object
                }
            }
            return e
        }, e.prototype.sortedKeys = function(e) {
            var t = Object.keys(e),
                n = this.pool.lookupArray(t);
            if (!n.keys) {
                t.sort();
                var i = JSON.stringify(t);
                (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = {
                    sorted: t,
                    json: i
                })
            }
            return n.keys
        }, e
    }(),
    sa = Object.assign((function(e) {
        if (tr(e)) {
            void 0 === ia && aa();
            var t = ia.admit(e),
                n = ra.get(t);
            return void 0 === n && ra.set(t, n = JSON.stringify(t)), n
        }
        return JSON.stringify(e)
    }), {
        reset: aa
    });

function aa() {
    ia = new oa, ra = new(po ? WeakMap : Map)
}

function ca(e) {
    return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
}
var la = function() {
    function e(e) {
        var t = this;
        this.knownResults = new(po ? WeakMap : Map), this.config = xo(e, {
            addTypename: !1 !== e.addTypename,
            canonizeResults: Vs(e)
        }), this.canon = e.canon || new oa, this.executeSelectionSet = Rs((function(e) {
            var i, r = e.context.canonizeResults,
                o = ca(e);
            o[3] = !r;
            var s = (i = t.executeSelectionSet).peek.apply(i, o);
            return s ? r ? n(n({}, s), {
                result: t.canon.admit(s.result)
            }) : s : (Xs(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
        }), {
            max: this.config.resultCacheMaxSize,
            keyArgs: ca,
            makeCacheKey: function(e, t, n, i) {
                if (na(n.store)) return n.store.makeCacheKey(e, ir(t) ? t.__ref : t, n.varString, i)
            }
        }), this.executeSubSelectedArray = Rs((function(e) {
            return Xs(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
        }), {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function(e) {
                var t = e.field,
                    n = e.array,
                    i = e.context;
                if (na(i.store)) return i.store.makeCacheKey(t, n, i.varString)
            }
        })
    }
    return e.prototype.resetCanon = function() {
        this.canon = new oa
    }, e.prototype.diffQueryAgainstStore = function(e) {
        var t = e.store,
            i = e.query,
            r = e.rootId,
            o = void 0 === r ? "ROOT_QUERY" : r,
            s = e.variables,
            a = e.returnPartialData,
            c = void 0 === a || a,
            l = e.canonizeResults,
            u = void 0 === l ? this.config.canonizeResults : l,
            h = this.config.cache.policies;
        s = n(n({}, wr(gr(i))), s);
        var d, p = nr(o),
            f = new Rr,
            v = this.executeSelectionSet({
                selectionSet: br(i).selectionSet,
                objectOrReference: p,
                enclosingRef: p,
                context: {
                    store: t,
                    query: i,
                    policies: h,
                    variables: s,
                    varString: sa(s),
                    canonizeResults: u,
                    fragmentMap: Zi(yr(i)),
                    merge: function(e, t) {
                        return f.merge(e, t)
                    }
                }
            });
        if (v.missing && (d = [new Fs(ua(v.missing), v.missing, i, s)], !c)) throw d[0];
        return {
            result: v.result,
            complete: !d,
            missing: d
        }
    }, e.prototype.isFresh = function(e, t, n, i) {
        if (na(i.store) && this.knownResults.get(e) === n) {
            var r = this.executeSelectionSet.peek(n, t, i, this.canon.isKnown(e));
            if (r && e === r.result) return !0
        }
        return !1
    }, e.prototype.execSelectionSetImpl = function(e) {
        var t = this,
            n = e.selectionSet,
            i = e.objectOrReference,
            r = e.enclosingRef,
            o = e.context;
        if (ir(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
        var s, a = o.variables,
            c = o.policies,
            l = o.store.getFieldValue(i, "__typename"),
            u = {};

        function h(e, t) {
            var n;
            return e.missing && (s = o.merge(s, ((n = {})[t] = e.missing, n))), e.result
        }
        this.config.addTypename && "string" == typeof l && !c.rootIdsByTypename[l] && (u = {
            __typename: l
        });
        var d = new Set(n.selections);
        d.forEach((function(e) {
            var n, p;
            if (Ki(e, a))
                if (dr(e)) {
                    var f = c.readField({
                            fieldName: e.name.value,
                            field: e,
                            variables: o.variables,
                            from: i
                        }, o),
                        v = ur(e);
                    void 0 === f ? Cr.added(e) || (s = o.merge(s, ((n = {})[v] = "Can't find field '".concat(e.name.value, "' on ").concat(ir(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), n))) : Array.isArray(f) ? f = h(t.executeSubSelectedArray({
                        field: e,
                        array: f,
                        enclosingRef: r,
                        context: o
                    }), v) : e.selectionSet ? null != f && (f = h(t.executeSelectionSet({
                        selectionSet: e.selectionSet,
                        objectOrReference: f,
                        enclosingRef: ir(f) ? f : r,
                        context: o
                    }), v)) : o.canonizeResults && (f = t.canon.pass(f)), void 0 !== f && (u = o.merge(u, ((p = {})[v] = f, p)))
                } else {
                    var m = er(e, o.fragmentMap);
                    m && c.fragmentMatches(m, l) && m.selectionSet.selections.forEach(d.add, d)
                }
        }));
        var p = {
                result: u,
                missing: s
            },
            f = o.canonizeResults ? this.canon.admit(p) : lo(p);
        return f.result && this.knownResults.set(f.result, n), f
    }, e.prototype.execSubSelectedArrayImpl = function(e) {
        var t, n = this,
            i = e.field,
            r = e.array,
            o = e.enclosingRef,
            s = e.context;

        function a(e, n) {
            var i;
            return e.missing && (t = s.merge(t, ((i = {})[n] = e.missing, i))), e.result
        }
        return i.selectionSet && (r = r.filter(s.store.canRead)), r = r.map((function(e, t) {
            return null === e ? null : Array.isArray(e) ? a(n.executeSubSelectedArray({
                field: i,
                array: e,
                enclosingRef: o,
                context: s
            }), t) : i.selectionSet ? a(n.executeSelectionSet({
                selectionSet: i.selectionSet,
                objectOrReference: e,
                enclosingRef: ir(e) ? e : o,
                context: s
            }), t) : (__DEV__ && function(e, t, n) {
                if (!t.selectionSet) {
                    var i = new Set([n]);
                    i.forEach((function(n) {
                        tr(n) && (__DEV__ ? kn(!ir(n), "Missing selection set for object of type ".concat(function(e, t) {
                            return ir(t) ? e.get(t.__ref, "__typename") : t && t.__typename
                        }(e, n), " returned for query field ").concat(t.name.value)) : kn(!ir(n), 5), Object.values(n).forEach(i.add, i))
                    }))
                }
            }(s.store, i, e), e)
        })), {
            result: s.canonizeResults ? this.canon.admit(r) : r,
            missing: t
        }
    }, e
}();

function ua(e) {
    try {
        JSON.stringify(e, (function(e, t) {
            if ("string" == typeof t) throw t;
            return t
        }))
    } catch (e) {
        return e
    }
}
var ha = new cs,
    da = new WeakMap;

function pa(e) {
    var t = da.get(e);
    return t || da.set(e, t = {
        vars: new Set,
        dep: Ps()
    }), t
}

function fa(e) {
    pa(e).vars.forEach((function(t) {
        return t.forgetCache(e)
    }))
}

function va(e) {
    var t = new Set,
        n = new Set,
        i = function(o) {
            if (arguments.length > 0) {
                if (e !== o) {
                    e = o, t.forEach((function(e) {
                        pa(e).dep.dirty(i), ma(e)
                    }));
                    var s = Array.from(n);
                    n.clear(), s.forEach((function(t) {
                        return t(e)
                    }))
                }
            } else {
                var a = ha.getValue();
                a && (r(a), pa(a).dep(i))
            }
            return e
        };
    i.onNextChange = function(e) {
        return n.add(e),
            function() {
                n.delete(e)
            }
    };
    var r = i.attachCache = function(e) {
        return t.add(e), pa(e).vars.add(i), i
    };
    return i.forgetCache = function(e) {
        return t.delete(e)
    }, i
}

function ma(e) {
    e.broadcastWatches && e.broadcastWatches()
}
var ya = Object.create(null);

function ga(e) {
    var t = JSON.stringify(e);
    return ya[t] || (ya[t] = Object.create(null))
}

function ba(e) {
    var t = ga(e);
    return t.keyFieldsFn || (t.keyFieldsFn = function(t, n) {
        var i = function(e, t) {
                return n.readField(t, e)
            },
            r = n.keyObject = xa(e, (function(e) {
                var r = Sa(n.storeObject, e, i);
                return void 0 === r && t !== n.storeObject && js.call(t, e[0]) && (r = Sa(t, e, Ea)), __DEV__ ? kn(void 0 !== r, "Missing field '".concat(e.join("."), "' while extracting keyFields from ").concat(JSON.stringify(t))) : kn(void 0 !== r, 2), r
            }));
        return "".concat(n.typename, ":").concat(JSON.stringify(r))
    })
}

function wa(e) {
    var t = ga(e);
    return t.keyArgsFn || (t.keyArgsFn = function(t, n) {
        var i = n.field,
            r = n.variables,
            o = n.fieldName,
            s = xa(e, (function(e) {
                var n = e[0],
                    o = n.charAt(0);
                if ("@" !== o)
                    if ("$" !== o) {
                        if (t) return Sa(t, e)
                    } else {
                        var s = n.slice(1);
                        if (r && js.call(r, s)) {
                            var a = e.slice(0);
                            return a[0] = s, Sa(r, a)
                        }
                    }
                else if (i && bo(i.directives)) {
                    var c = n.slice(1),
                        l = i.directives.find((function(e) {
                            return e.name.value === c
                        })),
                        u = l && lr(l, r);
                    return u && Sa(u, e.slice(1))
                }
            })),
            a = JSON.stringify(s);
        return (t || "{}" !== a) && (o += ":" + a), o
    })
}

function xa(e, t) {
    var n = new Rr;
    return _a(e).reduce((function(e, i) {
        var r, o = t(i);
        if (void 0 !== o) {
            for (var s = i.length - 1; s >= 0; --s)(r = {})[i[s]] = o, o = r;
            e = n.merge(e, o)
        }
        return e
    }), Object.create(null))
}

function _a(e) {
    var t = ga(e);
    if (!t.paths) {
        var n = t.paths = [],
            i = [];
        e.forEach((function(t, r) {
            Array.isArray(t) ? (_a(t).forEach((function(e) {
                return n.push(i.concat(e))
            })), i.length = 0) : (i.push(t), Array.isArray(e[r + 1]) || (n.push(i.slice(0)), i.length = 0))
        }))
    }
    return t.paths
}

function Ea(e, t) {
    return e[t]
}

function Sa(e, t, n) {
    return n = n || Ea, ka(t.reduce((function e(t, i) {
        return Array.isArray(t) ? t.map((function(t) {
            return e(t, i)
        })) : t && n(t, i)
    }), e))
}

function ka(e) {
    return tr(e) ? Array.isArray(e) ? e.map(ka) : xa(Object.keys(e).sort(), (function(t) {
        return Sa(e, t)
    })) : e
}

function Ta(e) {
    return void 0 !== e.args ? e.args : e.field ? lr(e.field, e.variables) : null
}
sr.setStringify(sa);
var Ca = function() {},
    Oa = function(e, t) {
        return t.fieldName
    },
    Aa = function(e, t, n) {
        return (0, n.mergeObjects)(e, t)
    },
    Ia = function(e, t) {
        return t
    },
    Ma = function() {
        function e(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = n({
                dataIdFromObject: $s
            }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies)
        }
        return e.prototype.identify = function(e, t) {
            var i, r = this,
                o = t && (t.typename || (null === (i = t.storeObject) || void 0 === i ? void 0 : i.__typename)) || e.__typename;
            if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
            for (var s, a = t && t.storeObject || e, c = n(n({}, t), {
                    typename: o,
                    storeObject: a,
                    readField: t && t.readField || function() {
                        var e = Da(arguments, a);
                        return r.readField(e, {
                            store: r.cache.data,
                            variables: e.variables
                        })
                    }
                }), l = o && this.getTypePolicy(o), u = l && l.keyFn || this.config.dataIdFromObject; u;) {
                var h = u(e, c);
                if (!Array.isArray(h)) {
                    s = h;
                    break
                }
                u = ba(h)
            }
            return s = s ? String(s) : void 0, c.keyObject ? [s, c.keyObject] : [s]
        }, e.prototype.addTypePolicies = function(e) {
            var t = this;
            Object.keys(e).forEach((function(n) {
                var r = e[n],
                    o = r.queryType,
                    s = r.mutationType,
                    a = r.subscriptionType,
                    c = i(r, ["queryType", "mutationType", "subscriptionType"]);
                o && t.setRootTypename("Query", n), s && t.setRootTypename("Mutation", n), a && t.setRootTypename("Subscription", n), js.call(t.toBeAdded, n) ? t.toBeAdded[n].push(c) : t.toBeAdded[n] = [c]
            }))
        }, e.prototype.updateTypePolicy = function(e, t) {
            var n = this,
                i = this.getTypePolicy(e),
                r = t.keyFields,
                o = t.fields;

            function s(e, t) {
                e.merge = "function" == typeof t ? t : !0 === t ? Aa : !1 === t ? Ia : e.merge
            }
            s(i, t.merge), i.keyFn = !1 === r ? Ca : Array.isArray(r) ? ba(r) : "function" == typeof r ? r : i.keyFn, o && Object.keys(o).forEach((function(t) {
                var i = n.getFieldPolicy(e, t, !0),
                    r = o[t];
                if ("function" == typeof r) i.read = r;
                else {
                    var a = r.keyArgs,
                        c = r.read,
                        l = r.merge;
                    i.keyFn = !1 === a ? Oa : Array.isArray(a) ? wa(a) : "function" == typeof a ? a : i.keyFn, "function" == typeof c && (i.read = c), s(i, l)
                }
                i.read && i.merge && (i.keyFn = i.keyFn || Oa)
            }))
        }, e.prototype.setRootTypename = function(e, t) {
            void 0 === t && (t = e);
            var n = "ROOT_" + e.toUpperCase(),
                i = this.rootTypenamesById[n];
            t !== i && (__DEV__ ? kn(!i || i === e, "Cannot change root ".concat(e, " __typename more than once")) : kn(!i || i === e, 3), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[t] = n, this.rootTypenamesById[n] = t)
        }, e.prototype.addPossibleTypes = function(e) {
            var t = this;
            this.usingPossibleTypes = !0, Object.keys(e).forEach((function(n) {
                t.getSupertypeSet(n, !0), e[n].forEach((function(e) {
                    t.getSupertypeSet(e, !0).add(n);
                    var i = e.match(qs);
                    i && i[0] === e || t.fuzzySubtypes.set(e, new RegExp(e))
                }))
            }))
        }, e.prototype.getTypePolicy = function(e) {
            var t = this;
            if (!js.call(this.typePolicies, e)) {
                var n = this.typePolicies[e] = Object.create(null);
                n.fields = Object.create(null);
                var r = this.supertypeMap.get(e);
                r && r.size && r.forEach((function(e) {
                    var r = t.getTypePolicy(e),
                        o = r.fields,
                        s = i(r, ["fields"]);
                    Object.assign(n, s), Object.assign(n.fields, o)
                }))
            }
            var o = this.toBeAdded[e];
            return o && o.length && o.splice(0).forEach((function(n) {
                t.updateTypePolicy(e, n)
            })), this.typePolicies[e]
        }, e.prototype.getFieldPolicy = function(e, t, n) {
            if (e) {
                var i = this.getTypePolicy(e).fields;
                return i[t] || n && (i[t] = Object.create(null))
            }
        }, e.prototype.getSupertypeSet = function(e, t) {
            var n = this.supertypeMap.get(e);
            return !n && t && this.supertypeMap.set(e, n = new Set), n
        }, e.prototype.fragmentMatches = function(e, t, n, i) {
            var r = this;
            if (!e.typeCondition) return !0;
            if (!t) return !1;
            var o = e.typeCondition.name.value;
            if (t === o) return !0;
            if (this.usingPossibleTypes && this.supertypeMap.has(o))
                for (var s = this.getSupertypeSet(t, !0), a = [s], c = function(e) {
                        var t = r.getSupertypeSet(e, !1);
                        t && t.size && a.indexOf(t) < 0 && a.push(t)
                    }, l = !(!n || !this.fuzzySubtypes.size), u = !1, h = 0; h < a.length; ++h) {
                    var d = a[h];
                    if (d.has(o)) return s.has(o) || (u && __DEV__ && kn.warn("Inferring subtype ".concat(t, " of supertype ").concat(o)), s.add(o)), !0;
                    d.forEach(c), l && h === a.length - 1 && Bs(e.selectionSet, n, i) && (l = !1, u = !0, this.fuzzySubtypes.forEach((function(e, n) {
                        var i = t.match(e);
                        i && i[0] === t && c(n)
                    })))
                }
            return !1
        }, e.prototype.hasKeyArgs = function(e, t) {
            var n = this.getFieldPolicy(e, t, !1);
            return !(!n || !n.keyFn)
        }, e.prototype.getStoreFieldName = function(e) {
            var t, n = e.typename,
                i = e.fieldName,
                r = this.getFieldPolicy(n, i, !1),
                o = r && r.keyFn;
            if (o && n)
                for (var s = {
                        typename: n,
                        fieldName: i,
                        field: e.field || null,
                        variables: e.variables
                    }, a = Ta(e); o;) {
                    var c = o(a, s);
                    if (!Array.isArray(c)) {
                        t = c || i;
                        break
                    }
                    o = wa(c)
                }
            return void 0 === t && (t = e.field ? function(e, t) {
                var n = null;
                e.directives && (n = {}, e.directives.forEach((function(e) {
                    n[e.name.value] = {}, e.arguments && e.arguments.forEach((function(i) {
                        var r = i.name,
                            o = i.value;
                        return rr(n[e.name.value], r, o, t)
                    }))
                })));
                var i = null;
                return e.arguments && e.arguments.length && (i = {}, e.arguments.forEach((function(e) {
                    var n = e.name,
                        r = e.value;
                    return rr(i, n, r, t)
                }))), sr(e.name.value, i, n)
            }(e.field, e.variables) : sr(i, Ta(e))), !1 === t ? i : i === Us(t) ? t : i + ":" + t
        }, e.prototype.readField = function(e, t) {
            var n = e.from;
            if (n && (e.field || e.fieldName)) {
                if (void 0 === e.typename) {
                    var i = t.store.getFieldValue(n, "__typename");
                    i && (e.typename = i)
                }
                var r = this.getStoreFieldName(e),
                    o = Us(r),
                    s = t.store.getFieldValue(n, r),
                    a = this.getFieldPolicy(e.typename, o, !1),
                    c = a && a.read;
                if (c) {
                    var l = Pa(this, n, e, t, t.store.getStorage(ir(n) ? n.__ref : n, r));
                    return ha.withValue(this.cache, c, [s, l])
                }
                return s
            }
        }, e.prototype.getReadFunction = function(e, t) {
            var n = this.getFieldPolicy(e, t, !1);
            return n && n.read
        }, e.prototype.getMergeFunction = function(e, t, n) {
            var i = this.getFieldPolicy(e, t, !1),
                r = i && i.merge;
            return !r && n && (r = (i = this.getTypePolicy(n)) && i.merge), r
        }, e.prototype.runMergeFunction = function(e, t, n, i, r) {
            var o = n.field,
                s = n.typename,
                a = n.merge;
            return a === Aa ? Na(i.store)(e, t) : a === Ia ? t : (i.overwrite && (e = void 0), a(e, t, Pa(this, void 0, {
                typename: s,
                fieldName: o.name.value,
                field: o,
                variables: i.variables
            }, i, r || Object.create(null))))
        }, e
    }();

function Pa(e, t, n, i, r) {
    var o = e.getStoreFieldName(n),
        s = Us(o),
        a = n.variables || i.variables,
        c = i.store,
        l = c.toReference,
        u = c.canRead;
    return {
        args: Ta(n),
        field: n.field || null,
        fieldName: s,
        storeFieldName: o,
        variables: a,
        isReference: ir,
        toReference: l,
        storage: r,
        cache: e.cache,
        canRead: u,
        readField: function() {
            return e.readField(Da(arguments, t, i), i)
        },
        mergeObjects: Na(i.store)
    }
}

function Da(e, t, i) {
    var r, o, s, a = e[0],
        c = e[1],
        l = e.length;
    return "string" == typeof a ? r = {
        fieldName: a,
        from: l > 1 ? c : t
    } : (r = n({}, a), js.call(r, "from") || (r.from = t)), __DEV__ && void 0 === r.from && __DEV__ && kn.warn("Undefined 'from' passed to readField with arguments ".concat((o = Array.from(e), s = Eo("stringifyForDisplay"), JSON.stringify(o, (function(e, t) {
        return void 0 === t ? s : t
    })).split(JSON.stringify(s)).join("<undefined>")))), void 0 === r.variables && (r.variables = i), r
}

function Na(e) {
    return function(t, i) {
        if (Array.isArray(t) || Array.isArray(i)) throw __DEV__ ? new Sn("Cannot automatically merge arrays") : new Sn(4);
        if (tr(t) && tr(i)) {
            var r = e.getFieldValue(t, "__typename"),
                o = e.getFieldValue(i, "__typename");
            if (r && o && r !== o) return i;
            if (ir(t) && Qs(i)) return e.merge(t.__ref, i), t;
            if (Qs(t) && ir(i)) return e.merge(t, i.__ref), i;
            if (Qs(t) && Qs(i)) return n(n({}, t), i)
        }
        return i
    }
}

function Ra(e, t, i) {
    var r = "".concat(t).concat(i),
        o = e.flavors.get(r);
    return o || e.flavors.set(r, o = e.clientOnly === t && e.deferred === i ? e : n(n({}, e), {
        clientOnly: t,
        deferred: i
    })), o
}
var La = function() {
        function e(e, t) {
            this.cache = e, this.reader = t
        }
        return e.prototype.writeToStore = function(e, t) {
            var i = this,
                r = t.query,
                o = t.result,
                s = t.dataId,
                a = t.variables,
                c = t.overwrite,
                l = vr(r),
                u = new Rr;
            a = n(n({}, wr(l)), a);
            var h = {
                    store: e,
                    written: Object.create(null),
                    merge: function(e, t) {
                        return u.merge(e, t)
                    },
                    variables: a,
                    varString: sa(a),
                    fragmentMap: Zi(yr(r)),
                    overwrite: !!c,
                    incomingById: new Map,
                    clientOnly: !1,
                    deferred: !1,
                    flavors: new Map
                },
                d = this.processSelectionSet({
                    result: o || Object.create(null),
                    dataId: s,
                    selectionSet: l.selectionSet,
                    mergeTree: {
                        map: new Map
                    },
                    context: h
                });
            if (!ir(d)) throw __DEV__ ? new Sn("Could not identify object ".concat(JSON.stringify(o))) : new Sn(6);
            return h.incomingById.forEach((function(t, n) {
                var r = t.storeObject,
                    o = t.mergeTree,
                    s = t.fieldNodeSet,
                    a = nr(n);
                if (o && o.map.size) {
                    var c = i.applyMerges(o, a, r, h);
                    if (ir(c)) return;
                    r = c
                }
                if (__DEV__ && !h.overwrite) {
                    var l = Object.create(null);
                    s.forEach((function(e) {
                        e.selectionSet && (l[e.name.value] = !0)
                    }));
                    Object.keys(r).forEach((function(e) {
                        (function(e) {
                            return !0 === l[Us(e)]
                        })(e) && ! function(e) {
                            var t = o && o.map.get(e);
                            return Boolean(t && t.info && t.info.merge)
                        }(e) && function(e, t, n, i) {
                            var r = function(e) {
                                    var t = i.getFieldValue(e, n);
                                    return "object" == typeof t && t
                                },
                                o = r(e);
                            if (!o) return;
                            var s = r(t);
                            if (!s) return;
                            if (ir(o)) return;
                            if (Go(o, s)) return;
                            if (Object.keys(o).every((function(e) {
                                    return void 0 !== i.getFieldValue(s, e)
                                }))) return;
                            var a = i.getFieldValue(e, "__typename") || i.getFieldValue(t, "__typename"),
                                c = Us(n),
                                l = "".concat(a, ".").concat(c);
                            if (qa.has(l)) return;
                            qa.add(l);
                            var u = [];
                            Array.isArray(o) || Array.isArray(s) || [o, s].forEach((function(e) {
                                var t = i.getFieldValue(e, "__typename");
                                "string" != typeof t || u.includes(t) || u.push(t)
                            }));
                            __DEV__ && kn.warn("Cache data may be lost when replacing the ".concat(c, " field of a ").concat(a, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(u.length ? "either ensure all objects of type " + u.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(l, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(o).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(s).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"))
                        }(a, r, e, h.store)
                    }))
                }
                e.merge(n, r)
            })), e.retain(d.__ref), d
        }, e.prototype.processSelectionSet = function(e) {
            var t = this,
                i = e.dataId,
                r = e.result,
                o = e.selectionSet,
                s = e.context,
                a = e.mergeTree,
                c = this.cache.policies,
                l = Object.create(null),
                u = i && c.rootTypenamesById[i] || hr(r, o, s.fragmentMap) || i && s.store.get(i, "__typename");
            "string" == typeof u && (l.__typename = u);
            var h = function() {
                    var e = Da(arguments, l, s.variables);
                    if (ir(e.from)) {
                        var t = s.incomingById.get(e.from.__ref);
                        if (t) {
                            var i = c.readField(n(n({}, e), {
                                from: t.storeObject
                            }), s);
                            if (void 0 !== i) return i
                        }
                    }
                    return c.readField(e, s)
                },
                d = new Set;
            this.flattenFields(o, r, s, u).forEach((function(e, n) {
                var i, o = ur(n),
                    s = r[o];
                if (d.add(n), void 0 !== s) {
                    var p = c.getStoreFieldName({
                            typename: u,
                            fieldName: n.name.value,
                            field: n,
                            variables: e.variables
                        }),
                        f = ja(a, p),
                        v = t.processFieldValue(s, n, n.selectionSet ? Ra(e, !1, !1) : e, f),
                        m = void 0;
                    n.selectionSet && (ir(v) || Qs(v)) && (m = h("__typename", v));
                    var y = c.getMergeFunction(u, n.name.value, m);
                    y ? f.info = {
                        field: n,
                        typename: u,
                        merge: y
                    } : Va(a, p), l = e.merge(l, ((i = {})[p] = v, i))
                } else !__DEV__ || e.clientOnly || e.deferred || Cr.added(n) || c.getReadFunction(u, n.name.value) || __DEV__ && kn.error("Missing field '".concat(ur(n), "' while writing result ").concat(JSON.stringify(r, null, 2)).substring(0, 1e3))
            }));
            try {
                var p = c.identify(r, {
                        typename: u,
                        selectionSet: o,
                        fragmentMap: s.fragmentMap,
                        storeObject: l,
                        readField: h
                    }),
                    f = p[0],
                    v = p[1];
                i = i || f, v && (l = s.merge(l, v))
            } catch (e) {
                if (!i) throw e
            }
            if ("string" == typeof i) {
                var m = nr(i),
                    y = s.written[i] || (s.written[i] = []);
                if (y.indexOf(o) >= 0) return m;
                if (y.push(o), this.reader && this.reader.isFresh(r, m, o, s)) return m;
                var g = s.incomingById.get(i);
                return g ? (g.storeObject = s.merge(g.storeObject, l), g.mergeTree = $a(g.mergeTree, a), d.forEach((function(e) {
                    return g.fieldNodeSet.add(e)
                }))) : s.incomingById.set(i, {
                    storeObject: l,
                    mergeTree: za(a) ? void 0 : a,
                    fieldNodeSet: d
                }), m
            }
            return l
        }, e.prototype.processFieldValue = function(e, t, n, i) {
            var r = this;
            return t.selectionSet && null !== e ? Array.isArray(e) ? e.map((function(e, o) {
                var s = r.processFieldValue(e, t, n, ja(i, o));
                return Va(i, o), s
            })) : this.processSelectionSet({
                result: e,
                selectionSet: t.selectionSet,
                context: n,
                mergeTree: i
            }) : __DEV__ ? so(e) : e
        }, e.prototype.flattenFields = function(e, t, n, i) {
            void 0 === i && (i = hr(t, e, n.fragmentMap));
            var r = new Map,
                o = this.cache.policies,
                s = new is(!1);
            return function e(a, c) {
                var l = s.lookup(a, c.clientOnly, c.deferred);
                l.visited || (l.visited = !0, a.selections.forEach((function(s) {
                    if (Ki(s, n.variables)) {
                        var a = c.clientOnly,
                            l = c.deferred;
                        if (a && l || !bo(s.directives) || s.directives.forEach((function(e) {
                                var t = e.name.value;
                                if ("client" === t && (a = !0), "defer" === t) {
                                    var i = lr(e, n.variables);
                                    i && !1 === i.if || (l = !0)
                                }
                            })), dr(s)) {
                            var u = r.get(s);
                            u && (a = a && u.clientOnly, l = l && u.deferred), r.set(s, Ra(n, a, l))
                        } else {
                            var h = er(s, n.fragmentMap);
                            h && o.fragmentMatches(h, i, t, n.variables) && e(h.selectionSet, Ra(n, a, l))
                        }
                    }
                })))
            }(e, n), r
        }, e.prototype.applyMerges = function(e, t, i, r, o) {
            var s, a = this;
            if (e.map.size && !ir(i)) {
                var c, l = Array.isArray(i) || !ir(t) && !Qs(t) ? void 0 : t,
                    u = i;
                l && !o && (o = [ir(l) ? l.__ref : l]);
                var h = function(e, t) {
                    return Array.isArray(e) ? "number" == typeof t ? e[t] : void 0 : r.store.getFieldValue(e, String(t))
                };
                e.map.forEach((function(e, t) {
                    var n = h(l, t),
                        i = h(u, t);
                    if (void 0 !== i) {
                        o && o.push(t);
                        var s = a.applyMerges(e, n, i, r, o);
                        s !== i && (c = c || new Map).set(t, s), o && kn(o.pop() === t)
                    }
                })), c && (i = Array.isArray(u) ? u.slice(0) : n({}, u), c.forEach((function(e, t) {
                    i[t] = e
                })))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, i, e.info, r, o && (s = r.store).getStorage.apply(s, o)) : i
        }, e
    }(),
    Fa = [];

function ja(e, t) {
    var n = e.map;
    return n.has(t) || n.set(t, Fa.pop() || {
        map: new Map
    }), n.get(t)
}

function $a(e, t) {
    if (e === t || !t || za(t)) return e;
    if (!e || za(e)) return t;
    var i = e.info && t.info ? n(n({}, e.info), t.info) : e.info || t.info,
        r = e.map.size && t.map.size,
        o = {
            info: i,
            map: r ? new Map : e.map.size ? e.map : t.map
        };
    if (r) {
        var s = new Set(t.map.keys());
        e.map.forEach((function(e, n) {
            o.map.set(n, $a(e, t.map.get(n))), s.delete(n)
        })), s.forEach((function(n) {
            o.map.set(n, $a(t.map.get(n), e.map.get(n)))
        }))
    }
    return o
}

function za(e) {
    return !e || !(e.info || e.map.size)
}

function Va(e, t) {
    var n = e.map,
        i = n.get(t);
    i && za(i) && (Fa.push(i), n.delete(t))
}
var qa = new Set;
var Ua = function(e) {
    function i(t) {
        void 0 === t && (t = {});
        var n = e.call(this) || this;
        return n.watches = new Set, n.typenameDocumentCache = new Map, n.makeVar = va, n.txCount = 0, n.config = function(e) {
            return xo(zs, e)
        }(t), n.addTypename = !!n.config.addTypename, n.policies = new Ma({
            cache: n,
            dataIdFromObject: n.config.dataIdFromObject,
            possibleTypes: n.config.possibleTypes,
            typePolicies: n.config.typePolicies
        }), n.init(), n
    }
    return t(i, e), i.prototype.init = function() {
        var e = this.data = new Ks.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching
        });
        this.optimisticData = e.stump, this.resetResultCache()
    }, i.prototype.resetResultCache = function(e) {
        var t = this,
            n = this.storeReader;
        this.storeWriter = new La(this, this.storeReader = new la({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: Vs(this.config),
            canon: e ? void 0 : n && n.canon
        })), this.maybeBroadcastWatch = Rs((function(e, n) {
            return t.broadcastWatch(e, n)
        }), {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function(e) {
                var n = e.optimistic ? t.optimisticData : t.data;
                if (na(n)) {
                    var i = e.optimistic,
                        r = e.rootId,
                        o = e.variables;
                    return n.makeCacheKey(e.query, e.callback, sa({
                        optimistic: i,
                        rootId: r,
                        variables: o
                    }))
                }
            }
        }), new Set([this.data.group, this.optimisticData.group]).forEach((function(e) {
            return e.resetCaching()
        }))
    }, i.prototype.restore = function(e) {
        return this.init(), e && this.data.replace(e), this
    }, i.prototype.extract = function(e) {
        return void 0 === e && (e = !1), (e ? this.optimisticData : this.data).extract()
    }, i.prototype.read = function(e) {
        var t = e.returnPartialData,
            i = void 0 !== t && t;
        try {
            return this.storeReader.diffQueryAgainstStore(n(n({}, e), {
                store: e.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: i
            })).result || null
        } catch (e) {
            if (e instanceof Fs) return null;
            throw e
        }
    }, i.prototype.write = function(e) {
        try {
            return ++this.txCount, this.storeWriter.writeToStore(this.data, e)
        } finally {
            --this.txCount || !1 === e.broadcast || this.broadcastWatches()
        }
    }, i.prototype.modify = function(e) {
        if (js.call(e, "id") && !e.id) return !1;
        var t = e.optimistic ? this.optimisticData : this.data;
        try {
            return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields)
        } finally {
            --this.txCount || !1 === e.broadcast || this.broadcastWatches()
        }
    }, i.prototype.diff = function(e) {
        return this.storeReader.diffQueryAgainstStore(n(n({}, e), {
            store: e.optimistic ? this.optimisticData : this.data,
            rootId: e.id || "ROOT_QUERY",
            config: this.config
        }))
    }, i.prototype.watch = function(e) {
        var t = this;
        return this.watches.size || function(e) {
                pa(e).vars.forEach((function(t) {
                    return t.attachCache(e)
                }))
            }(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e),
            function() {
                t.watches.delete(e) && !t.watches.size && fa(t), t.maybeBroadcastWatch.forget(e)
            }
    }, i.prototype.gc = function(e) {
        sa.reset();
        var t = this.optimisticData.gc();
        return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t
    }, i.prototype.retain = function(e, t) {
        return (t ? this.optimisticData : this.data).retain(e)
    }, i.prototype.release = function(e, t) {
        return (t ? this.optimisticData : this.data).release(e)
    }, i.prototype.identify = function(e) {
        if (ir(e)) return e.__ref;
        try {
            return this.policies.identify(e)[0]
        } catch (e) {
            __DEV__ && kn.warn(e)
        }
    }, i.prototype.evict = function(e) {
        if (!e.id) {
            if (js.call(e, "id")) return !1;
            e = n(n({}, e), {
                id: "ROOT_QUERY"
            })
        }
        try {
            return ++this.txCount, this.optimisticData.evict(e, this.data)
        } finally {
            --this.txCount || !1 === e.broadcast || this.broadcastWatches()
        }
    }, i.prototype.reset = function(e) {
        var t = this;
        return this.init(), sa.reset(), e && e.discardWatches ? (this.watches.forEach((function(e) {
            return t.maybeBroadcastWatch.forget(e)
        })), this.watches.clear(), fa(this)) : this.broadcastWatches(), Promise.resolve()
    }, i.prototype.removeOptimistic = function(e) {
        var t = this.optimisticData.removeLayer(e);
        t !== this.optimisticData && (this.optimisticData = t, this.broadcastWatches())
    }, i.prototype.batch = function(e) {
        var t, i = this,
            r = e.update,
            o = e.optimistic,
            s = void 0 === o || o,
            a = e.removeOptimistic,
            c = e.onWatchUpdated,
            l = function(e) {
                var n = i,
                    o = n.data,
                    s = n.optimisticData;
                ++i.txCount, e && (i.data = i.optimisticData = e);
                try {
                    return t = r(i)
                } finally {
                    --i.txCount, i.data = o, i.optimisticData = s
                }
            },
            u = new Set;
        return c && !this.txCount && this.broadcastWatches(n(n({}, e), {
            onWatchUpdated: function(e) {
                return u.add(e), !1
            }
        })), "string" == typeof s ? this.optimisticData = this.optimisticData.addLayer(s, l) : !1 === s ? l(this.data) : l(), "string" == typeof a && (this.optimisticData = this.optimisticData.removeLayer(a)), c && u.size ? (this.broadcastWatches(n(n({}, e), {
            onWatchUpdated: function(e, t) {
                var n = c.call(this, e, t);
                return !1 !== n && u.delete(e), n
            }
        })), u.size && u.forEach((function(e) {
            return i.maybeBroadcastWatch.dirty(e)
        }))) : this.broadcastWatches(e), t
    }, i.prototype.performTransaction = function(e, t) {
        return this.batch({
            update: e,
            optimistic: t || null !== t
        })
    }, i.prototype.transformDocument = function(e) {
        if (this.addTypename) {
            var t = this.typenameDocumentCache.get(e);
            return t || (t = Cr(e), this.typenameDocumentCache.set(e, t), this.typenameDocumentCache.set(t, t)), t
        }
        return e
    }, i.prototype.broadcastWatches = function(e) {
        var t = this;
        this.txCount || this.watches.forEach((function(n) {
            return t.maybeBroadcastWatch(n, e)
        }))
    }, i.prototype.broadcastWatch = function(e, t) {
        var n = e.lastDiff,
            i = this.diff(e);
        t && (e.optimistic && "string" == typeof t.optimistic && (i.fromOptimisticTransaction = !0), t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, i, n)) || n && Go(n.result, i.result) || e.callback(e.lastDiff = i, n)
    }, i
}(Ls);
var Ba, Qa = function(e) {
    function n(t) {
        var i, r, o = t.graphQLErrors,
            s = t.clientErrors,
            a = t.networkError,
            c = t.errorMessage,
            l = t.extraInfo,
            u = e.call(this, c) || this;
        return u.graphQLErrors = o || [], u.clientErrors = s || [], u.networkError = a || null, u.message = c || (r = "", (bo((i = u).graphQLErrors) || bo(i.clientErrors)) && (i.graphQLErrors || []).concat(i.clientErrors || []).forEach((function(e) {
            var t = e ? e.message : "Error message not found.";
            r += "".concat(t, "\n")
        })), i.networkError && (r += "".concat(i.networkError.message, "\n")), r = r.replace(/\n$/, "")), u.extraInfo = l, u.__proto__ = n.prototype, u
    }
    return t(n, e), n
}(Error);

function Ha(e) {
    return !!e && e < 7
}! function(e) {
    e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error"
}(Ba || (Ba = {}));
var Ga = Object.assign,
    Wa = Object.hasOwnProperty,
    Ka = !1,
    Ya = function(e) {
        function i(t) {
            var n = t.queryManager,
                i = t.queryInfo,
                r = t.options,
                o = e.call(this, (function(e) {
                    try {
                        var t = e._subscription._observer;
                        t && !t.error && (t.error = Ja)
                    } catch (e) {}
                    var n = !o.observers.size;
                    o.observers.add(e);
                    var i = o.last;
                    return i && i.error ? e.error && e.error(i.error) : i && i.result && e.next && e.next(i.result), n && o.reobserve().catch((function() {})),
                        function() {
                            o.observers.delete(e) && !o.observers.size && o.tearDownQuery()
                        }
                })) || this;
            o.observers = new Set, o.subscriptions = new Set, o.isTornDown = !1, o.options = r, o.queryId = i.queryId || n.generateQueryId();
            var s = vr(r.query);
            return o.queryName = s && s.name && s.name.value, o.initialFetchPolicy = r.fetchPolicy || "cache-first", o.queryManager = n, o.queryInfo = i, o
        }
        return t(i, e), Object.defineProperty(i.prototype, "variables", {
            get: function() {
                return this.options.variables
            },
            enumerable: !1,
            configurable: !0
        }), i.prototype.result = function() {
            var e = this;
            return new Promise((function(t, n) {
                var i = {
                        next: function(n) {
                            t(n), e.observers.delete(i), e.observers.size || e.queryManager.removeQuery(e.queryId), setTimeout((function() {
                                r.unsubscribe()
                            }), 0)
                        },
                        error: n
                    },
                    r = e.subscribe(i)
            }))
        }, i.prototype.getCurrentResult = function(e) {
            void 0 === e && (e = !0);
            var t = this.getLastResult(!0),
                i = this.queryInfo.networkStatus || t && t.networkStatus || Ba.ready,
                r = n(n({}, t), {
                    loading: Ha(i),
                    networkStatus: i
                }),
                o = this.options.fetchPolicy,
                s = void 0 === o ? "cache-first" : o;
            if ("network-only" === s || "no-cache" === s || "standby" === s || this.queryManager.transform(this.options.query).hasForcedResolvers);
            else {
                var a = this.queryInfo.getDiff();
                (a.complete || this.options.returnPartialData) && (r.data = a.result), Go(r.data, {}) && (r.data = void 0), a.complete ? (delete r.partial, !a.complete || r.networkStatus !== Ba.loading || "cache-first" !== s && "cache-only" !== s || (r.networkStatus = Ba.ready, r.loading = !1)) : r.partial = !0, !__DEV__ || a.complete || this.options.partialRefetch || r.loading || r.data || r.error || Xa(a.missing)
            }
            return e && this.updateLastResult(r), r
        }, i.prototype.isDifferentFromLastResult = function(e) {
            return !this.last || !Go(this.last.result, e)
        }, i.prototype.getLast = function(e, t) {
            var n = this.last;
            if (n && n[e] && (!t || Go(n.variables, this.variables))) return n[e]
        }, i.prototype.getLastResult = function(e) {
            return this.getLast("result", e)
        }, i.prototype.getLastError = function(e) {
            return this.getLast("error", e)
        }, i.prototype.resetLastResults = function() {
            delete this.last, this.isTornDown = !1
        }, i.prototype.resetQueryStoreErrors = function() {
            this.queryManager.resetErrors(this.queryId)
        }, i.prototype.refetch = function(e) {
            var t, i = {
                    pollInterval: 0
                },
                r = this.options.fetchPolicy;
            if (i.fetchPolicy = "cache-and-network" === r ? r : "no-cache" === r ? "no-cache" : "network-only", __DEV__ && e && Wa.call(e, "variables")) {
                var o = gr(this.options.query),
                    s = o.variableDefinitions;
                s && s.some((function(e) {
                    return "variables" === e.variable.name.value
                })) || __DEV__ && kn.warn("Called refetch(".concat(JSON.stringify(e), ") for query ").concat((null === (t = o.name) || void 0 === t ? void 0 : t.value) || JSON.stringify(o), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"))
            }
            return e && !Go(this.options.variables, e) && (i.variables = this.options.variables = n(n({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(i, Ba.refetch)
        }, i.prototype.fetchMore = function(e) {
            var t = this,
                i = n(n({}, e.query ? e : n(n(n({}, this.options), e), {
                    variables: n(n({}, this.options.variables), e.variables)
                })), {
                    fetchPolicy: "no-cache"
                }),
                r = this.queryManager.generateQueryId();
            return i.notifyOnNetworkStatusChange && (this.queryInfo.networkStatus = Ba.fetchMore, this.observe()), this.queryManager.fetchQuery(r, i, Ba.fetchMore).then((function(n) {
                var r = n.data,
                    o = e.updateQuery;
                return o ? (__DEV__ && !Ka && (__DEV__ && kn.warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore."), Ka = !0), t.updateQuery((function(e) {
                    return o(e, {
                        fetchMoreResult: r,
                        variables: i.variables
                    })
                }))) : t.queryManager.cache.writeQuery({
                    query: i.query,
                    variables: i.variables,
                    data: r
                }), n
            })).finally((function() {
                t.queryManager.stopQuery(r), t.reobserve()
            }))
        }, i.prototype.subscribeToMore = function(e) {
            var t = this,
                n = this.queryManager.startGraphQLSubscription({
                    query: e.document,
                    variables: e.variables,
                    context: e.context
                }).subscribe({
                    next: function(n) {
                        var i = e.updateQuery;
                        i && t.updateQuery((function(e, t) {
                            var r = t.variables;
                            return i(e, {
                                subscriptionData: n,
                                variables: r
                            })
                        }))
                    },
                    error: function(t) {
                        e.onError ? e.onError(t) : __DEV__ && kn.error("Unhandled GraphQL subscription error", t)
                    }
                });
            return this.subscriptions.add(n),
                function() {
                    t.subscriptions.delete(n) && n.unsubscribe()
                }
        }, i.prototype.setOptions = function(e) {
            return this.reobserve(e)
        }, i.prototype.setVariables = function(e) {
            return Go(this.variables, e) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
                fetchPolicy: this.initialFetchPolicy,
                variables: e
            }, Ba.setVariables) : Promise.resolve())
        }, i.prototype.updateQuery = function(e) {
            var t = this.queryManager,
                n = e(t.cache.diff({
                    query: this.options.query,
                    variables: this.variables,
                    returnPartialData: !0,
                    optimistic: !1
                }).result, {
                    variables: this.variables
                });
            n && (t.cache.writeQuery({
                query: this.options.query,
                data: n,
                variables: this.variables
            }), t.broadcastQueries())
        }, i.prototype.startPolling = function(e) {
            this.options.pollInterval = e, this.updatePolling()
        }, i.prototype.stopPolling = function() {
            this.options.pollInterval = 0, this.updatePolling()
        }, i.prototype.fetch = function(e, t) {
            return this.queryManager.setObservableQuery(this), this.queryManager.fetchQueryObservable(this.queryId, e, t)
        }, i.prototype.updatePolling = function() {
            var e = this;
            if (!this.queryManager.ssrMode) {
                var t = this.pollingInfo,
                    n = this.options.pollInterval;
                if (n) {
                    if (!t || t.interval !== n) {
                        __DEV__ ? kn(n, "Attempted to start a polling query without a polling interval.") : kn(n, 10), (t || (this.pollingInfo = {})).interval = n;
                        var i = function() {
                                e.pollingInfo && (Ha(e.queryInfo.networkStatus) ? r() : e.reobserve({
                                    fetchPolicy: "network-only"
                                }, Ba.poll).then(r, r))
                            },
                            r = function() {
                                var t = e.pollingInfo;
                                t && (clearTimeout(t.timeout), t.timeout = setTimeout(i, t.interval))
                            };
                        r()
                    }
                } else t && (clearTimeout(t.timeout), delete this.pollingInfo)
            }
        }, i.prototype.updateLastResult = function(e, t) {
            return void 0 === t && (t = this.variables), this.last = n(n({}, this.last), {
                result: this.queryManager.assumeImmutableResults ? e : so(e),
                variables: t
            }), bo(e.errors) || delete this.last.error, this.last
        }, i.prototype.reobserve = function(e, t) {
            var i = this;
            this.isTornDown = !1;
            var r = t === Ba.refetch || t === Ba.fetchMore || t === Ba.poll,
                o = this.options.variables,
                s = r ? xo(this.options, e) : Ga(this.options, xo(e));
            r || (this.updatePolling(), e && e.variables && !e.fetchPolicy && !Go(e.variables, o) && (s.fetchPolicy = this.initialFetchPolicy, void 0 === t && (t = Ba.setVariables)));
            var a = s.variables && n({}, s.variables),
                c = this.fetch(s, t),
                l = {
                    next: function(e) {
                        i.reportResult(e, a)
                    },
                    error: function(e) {
                        i.reportError(e, a)
                    }
                };
            return r || (this.concast && this.observer && this.concast.removeObserver(this.observer, !0), this.concast = c, this.observer = l), c.addObserver(l), c.promise
        }, i.prototype.observe = function() {
            this.reportResult(this.getCurrentResult(!1), this.variables)
        }, i.prototype.reportResult = function(e, t) {
            (this.getLastError() || this.isDifferentFromLastResult(e)) && (this.updateLastResult(e, t), uo(this.observers, "next", e))
        }, i.prototype.reportError = function(e, t) {
            var i = n(n({}, this.getLastResult()), {
                error: e,
                errors: e.graphQLErrors,
                networkStatus: Ba.error,
                loading: !1
            });
            this.updateLastResult(i, t), uo(this.observers, "error", this.last.error = e)
        }, i.prototype.hasObservers = function() {
            return this.observers.size > 0
        }, i.prototype.tearDownQuery = function() {
            this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach((function(e) {
                return e.unsubscribe()
            })), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0)
        }, i
    }(io);

function Ja(e) {
    __DEV__ && kn.error("Unhandled error", e.message, e.stack)
}

function Xa(e) {
    __DEV__ && e && __DEV__ && kn.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e)
}
mo(Ya);
var Za = function() {
        function e(e) {
            var t = e.cache,
                n = e.client,
                i = e.resolvers,
                r = e.fragmentMatcher;
            this.cache = t, n && (this.client = n), i && this.addResolvers(i), r && this.setFragmentMatcher(r)
        }
        return e.prototype.addResolvers = function(e) {
            var t = this;
            this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach((function(e) {
                t.resolvers = Pr(t.resolvers, e)
            })) : this.resolvers = Pr(this.resolvers, e)
        }, e.prototype.setResolvers = function(e) {
            this.resolvers = {}, this.addResolvers(e)
        }, e.prototype.getResolvers = function() {
            return this.resolvers || {}
        }, e.prototype.runResolvers = function(e) {
            var t = e.document,
                i = e.remoteResult,
                r = e.context,
                a = e.variables,
                c = e.onlyRunForcedResolvers,
                l = void 0 !== c && c;
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    return t ? [2, this.resolveDocument(t, i.data, r, a, this.fragmentMatcher, l).then((function(e) {
                        return n(n({}, i), {
                            data: e.result
                        })
                    }))] : [2, i]
                }))
            }))
        }, e.prototype.setFragmentMatcher = function(e) {
            this.fragmentMatcher = e
        }, e.prototype.getFragmentMatcher = function() {
            return this.fragmentMatcher
        }, e.prototype.clientQuery = function(e) {
            return Yi(["client"], e) && this.resolvers ? e : null
        }, e.prototype.serverQuery = function(e) {
            return function(e) {
                fr(e);
                var t = Tr([{
                    test: function(e) {
                        return "client" === e.name.value
                    },
                    remove: !0
                }], e);
                return t && (t = Li(t, {
                    FragmentDefinition: {
                        enter: function(e) {
                            if (e.selectionSet && e.selectionSet.selections.every((function(e) {
                                    return dr(e) && "__typename" === e.name.value
                                }))) return null
                        }
                    }
                })), t
            }(e)
        }, e.prototype.prepareContext = function(e) {
            var t = this.cache;
            return n(n({}, e), {
                cache: t,
                getCacheKey: function(e) {
                    return t.identify(e)
                }
            })
        }, e.prototype.addExportedVariables = function(e, t, i) {
            return void 0 === t && (t = {}), void 0 === i && (i = {}), o(this, void 0, void 0, (function() {
                return s(this, (function(r) {
                    return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(i), t).then((function(e) {
                        return n(n({}, t), e.exportedVariables)
                    }))] : [2, n({}, t)]
                }))
            }))
        }, e.prototype.shouldForceResolvers = function(e) {
            var t = !1;
            return Li(e, {
                Directive: {
                    enter: function(e) {
                        if ("client" === e.name.value && e.arguments && (t = e.arguments.some((function(e) {
                                return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                            })))) return Ri
                    }
                }
            }), t
        }, e.prototype.buildRootValueFromCache = function(e, t) {
            return this.cache.diff({
                query: Ir(e),
                variables: t,
                returnPartialData: !0,
                optimistic: !1
            }).result
        }, e.prototype.resolveDocument = function(e, t, i, r, a, c) {
            return void 0 === i && (i = {}), void 0 === r && (r = {}), void 0 === a && (a = function() {
                return !0
            }), void 0 === c && (c = !1), o(this, void 0, void 0, (function() {
                var o, l, u, h, d, p, f, v, m;
                return s(this, (function(s) {
                    return o = br(e), l = yr(e), u = Zi(l), h = o.operation, d = h ? h.charAt(0).toUpperCase() + h.slice(1) : "Query", f = (p = this).cache, v = p.client, m = {
                        fragmentMap: u,
                        context: n(n({}, i), {
                            cache: f,
                            client: v
                        }),
                        variables: r,
                        fragmentMatcher: a,
                        defaultOperationType: d,
                        exportedVariables: {},
                        onlyRunForcedResolvers: c
                    }, [2, this.resolveSelectionSet(o.selectionSet, t, m).then((function(e) {
                        return {
                            result: e,
                            exportedVariables: m.exportedVariables
                        }
                    }))]
                }))
            }))
        }, e.prototype.resolveSelectionSet = function(e, t, n) {
            return o(this, void 0, void 0, (function() {
                var i, r, a, c, l, u = this;
                return s(this, (function(h) {
                    return i = n.fragmentMap, r = n.context, a = n.variables, c = [t], l = function(e) {
                        return o(u, void 0, void 0, (function() {
                            var o, l;
                            return s(this, (function(s) {
                                return Ki(e, a) ? dr(e) ? [2, this.resolveField(e, t, n).then((function(t) {
                                    var n;
                                    void 0 !== t && c.push(((n = {})[ur(e)] = t, n))
                                }))] : (pr(e) ? o = e : (o = i[e.name.value], __DEV__ ? kn(o, "No fragment named ".concat(e.name.value)) : kn(o, 9)), o && o.typeCondition && (l = o.typeCondition.name.value, n.fragmentMatcher(t, l, r)) ? [2, this.resolveSelectionSet(o.selectionSet, t, n).then((function(e) {
                                    c.push(e)
                                }))] : [2]) : [2]
                            }))
                        }))
                    }, [2, Promise.all(e.selections.map(l)).then((function() {
                        return Dr(c)
                    }))]
                }))
            }))
        }, e.prototype.resolveField = function(e, t, n) {
            return o(this, void 0, void 0, (function() {
                var i, r, o, a, c, l, u, h, d, p = this;
                return s(this, (function(s) {
                    return i = n.variables, r = e.name.value, o = ur(e), a = r !== o, c = t[o] || t[r], l = Promise.resolve(c), n.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (u = t.__typename || n.defaultOperationType, (h = this.resolvers && this.resolvers[u]) && (d = h[a ? r : o]) && (l = Promise.resolve(ha.withValue(this.cache, d, [t, lr(e, i), n.context, {
                        field: e,
                        fragmentMap: n.fragmentMap
                    }])))), [2, l.then((function(t) {
                        return void 0 === t && (t = c), e.directives && e.directives.forEach((function(e) {
                            "export" === e.name.value && e.arguments && e.arguments.forEach((function(e) {
                                "as" === e.name.value && "StringValue" === e.value.kind && (n.exportedVariables[e.value.value] = t)
                            }))
                        })), e.selectionSet ? null == t ? t : Array.isArray(t) ? p.resolveSubSelectedArray(e, t, n) : e.selectionSet ? p.resolveSelectionSet(e.selectionSet, t, n) : void 0 : t
                    }))]
                }))
            }))
        }, e.prototype.resolveSubSelectedArray = function(e, t, n) {
            var i = this;
            return Promise.all(t.map((function(t) {
                return null === t ? null : Array.isArray(t) ? i.resolveSubSelectedArray(e, t, n) : e.selectionSet ? i.resolveSelectionSet(e.selectionSet, t, n) : void 0
            })))
        }, e
    }(),
    ec = new(po ? WeakMap : Map);

function tc(e, t) {
    var n = e[t];
    "function" == typeof n && (e[t] = function() {
        return ec.set(e, (ec.get(e) + 1) % 1e15), n.apply(this, arguments)
    })
}

function nc(e) {
    e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0)
}
var ic = function() {
    function e(e, t) {
        void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.listeners = new Set, this.document = null, this.lastRequestId = 1, this.subscriptions = new Set, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
        var n = this.cache = e.cache;
        ec.has(n) || (ec.set(n, 0), tc(n, "evict"), tc(n, "modify"), tc(n, "reset"))
    }
    return e.prototype.init = function(e) {
        var t = e.networkStatus || Ba.loading;
        return this.variables && this.networkStatus !== Ba.loading && !Go(this.variables, e.variables) && (t = Ba.setVariables), Go(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: t
        }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this
    }, e.prototype.reset = function() {
        nc(this), this.lastDiff = void 0, this.dirty = !1
    }, e.prototype.getDiff = function(e) {
        void 0 === e && (e = this.variables);
        var t = this.getDiffOptions(e);
        if (this.lastDiff && Go(t, this.lastDiff.options)) return this.lastDiff.diff;
        this.updateWatch(this.variables = e);
        var n = this.observableQuery;
        if (n && "no-cache" === n.options.fetchPolicy) return {
            complete: !1
        };
        var i = this.cache.diff(t);
        return this.updateLastDiff(i, t), i
    }, e.prototype.updateLastDiff = function(e, t) {
        this.lastDiff = e ? {
            diff: e,
            options: t || this.getDiffOptions()
        } : void 0
    }, e.prototype.getDiffOptions = function(e) {
        var t;
        return void 0 === e && (e = this.variables), {
            query: this.document,
            variables: e,
            returnPartialData: !0,
            optimistic: !0,
            canonizeResults: null === (t = this.observableQuery) || void 0 === t ? void 0 : t.options.canonizeResults
        }
    }, e.prototype.setDiff = function(e) {
        var t = this,
            n = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(e), this.dirty || Go(n && n.result, e && e.result) || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout((function() {
            return t.notify()
        }), 0)))
    }, e.prototype.setObservableQuery = function(e) {
        var t = this;
        e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function() {
            t.getDiff().fromOptimisticTransaction ? e.observe() : e.reobserve()
        })) : delete this.oqListener)
    }, e.prototype.notify = function() {
        var e = this;
        nc(this), this.shouldNotify() && this.listeners.forEach((function(t) {
            return t(e)
        })), this.dirty = !1
    }, e.prototype.shouldNotify = function() {
        if (!this.dirty || !this.listeners.size) return !1;
        if (Ha(this.networkStatus) && this.observableQuery) {
            var e = this.observableQuery.options.fetchPolicy;
            if ("cache-only" !== e && "cache-and-network" !== e) return !1
        }
        return !0
    }, e.prototype.stop = function() {
        if (!this.stopped) {
            this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel, this.subscriptions.forEach((function(e) {
                return e.unsubscribe()
            }));
            var t = this.observableQuery;
            t && t.stopPolling()
        }
    }, e.prototype.cancel = function() {}, e.prototype.updateWatch = function(e) {
        var t = this;
        void 0 === e && (e = this.variables);
        var i = this.observableQuery;
        if (!i || "no-cache" !== i.options.fetchPolicy) {
            var r = n(n({}, this.getDiffOptions(e)), {
                watcher: this,
                callback: function(e) {
                    return t.setDiff(e)
                }
            });
            this.lastWatch && Go(r, this.lastWatch) || (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = r))
        }
    }, e.prototype.resetLastWrite = function() {
        this.lastWrite = void 0
    }, e.prototype.shouldWrite = function(e, t) {
        var n = this.lastWrite;
        return !(n && n.dmCount === ec.get(this.cache) && Go(t, n.variables) && Go(e.data, n.result.data))
    }, e.prototype.markResult = function(e, t, n) {
        var i = this;
        this.graphQLErrors = bo(e.errors) ? e.errors : [], this.reset(), "no-cache" === t.fetchPolicy ? this.updateLastDiff({
            result: e.data,
            complete: !0
        }, this.getDiffOptions(t.variables)) : 0 !== n && (rc(e, t.errorPolicy) ? this.cache.performTransaction((function(r) {
            if (i.shouldWrite(e, t.variables)) r.writeQuery({
                query: i.document,
                data: e.data,
                variables: t.variables,
                overwrite: 1 === n
            }), i.lastWrite = {
                result: e,
                variables: t.variables,
                dmCount: ec.get(i.cache)
            };
            else if (i.lastDiff && i.lastDiff.diff.complete) return void(e.data = i.lastDiff.diff.result);
            var o = i.getDiffOptions(t.variables),
                s = r.diff(o);
            i.stopped || i.updateWatch(t.variables), i.updateLastDiff(s, o), s.complete && (e.data = s.result)
        })) : this.lastWrite = void 0)
    }, e.prototype.markReady = function() {
        return this.networkError = null, this.networkStatus = Ba.ready
    }, e.prototype.markError = function(e) {
        return this.networkStatus = Ba.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
    }, e
}();

function rc(e, t) {
    void 0 === t && (t = "none");
    var n = "ignore" === t || "all" === t,
        i = !wo(e);
    return !i && n && e.data && (i = !0), i
}
var oc = Object.prototype.hasOwnProperty,
    sc = function() {
        function e(e) {
            var t = e.cache,
                n = e.link,
                i = e.queryDeduplication,
                r = void 0 !== i && i,
                o = e.onBroadcast,
                s = e.ssrMode,
                a = void 0 !== s && s,
                c = e.clientAwareness,
                l = void 0 === c ? {} : c,
                u = e.localState,
                h = e.assumeImmutableResults;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new(po ? WeakMap : Map), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Map, this.cache = t, this.link = n, this.queryDeduplication = r, this.clientAwareness = l, this.localState = u || new Za({
                cache: t
            }), this.ssrMode = a, this.assumeImmutableResults = !!h, (this.onBroadcast = o) && (this.mutationStore = Object.create(null))
        }
        return e.prototype.stop = function() {
            var e = this;
            this.queries.forEach((function(t, n) {
                e.stopQueryNoBroadcast(n)
            })), this.cancelPendingFetches(__DEV__ ? new Sn("QueryManager stopped while query was in flight") : new Sn(11))
        }, e.prototype.cancelPendingFetches = function(e) {
            this.fetchCancelFns.forEach((function(t) {
                return t(e)
            })), this.fetchCancelFns.clear()
        }, e.prototype.mutate = function(e) {
            var t = e.mutation,
                i = e.variables,
                r = e.optimisticResponse,
                a = e.updateQueries,
                c = e.refetchQueries,
                l = void 0 === c ? [] : c,
                u = e.awaitRefetchQueries,
                h = void 0 !== u && u,
                d = e.update,
                p = e.onQueryUpdated,
                f = e.errorPolicy,
                v = void 0 === f ? "none" : f,
                m = e.fetchPolicy,
                y = void 0 === m ? "network-only" : m,
                g = e.keepRootFields,
                b = e.context;
            return o(this, void 0, void 0, (function() {
                var e, o, c;
                return s(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            return __DEV__ ? kn(t, "mutation option is required. You must specify your GraphQL document in the mutation option.") : kn(t, 12), __DEV__ ? kn("network-only" === y || "no-cache" === y, "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : kn("network-only" === y || "no-cache" === y, 13), e = this.generateMutationId(), t = this.transform(t).document, i = this.getVariables(t, i), this.transform(t).hasClientExports ? [4, this.localState.addExportedVariables(t, i, b)] : [3, 2];
                        case 1:
                            i = s.sent(), s.label = 2;
                        case 2:
                            return o = this.mutationStore && (this.mutationStore[e] = {
                                mutation: t,
                                variables: i,
                                loading: !0,
                                error: null
                            }), r && this.markMutationOptimistic(r, {
                                mutationId: e,
                                document: t,
                                variables: i,
                                fetchPolicy: y,
                                errorPolicy: v,
                                context: b,
                                updateQueries: a,
                                update: d,
                                keepRootFields: g
                            }), this.broadcastQueries(), c = this, [2, new Promise((function(s, u) {
                                return ho(c.getObservableFromLink(t, n(n({}, b), {
                                    optimisticResponse: r
                                }), i, !1), (function(s) {
                                    if (wo(s) && "none" === v) throw new Qa({
                                        graphQLErrors: s.errors
                                    });
                                    o && (o.loading = !1, o.error = null);
                                    var u = n({}, s);
                                    return "function" == typeof l && (l = l(u)), "ignore" === v && wo(u) && delete u.errors, c.markMutationResult({
                                        mutationId: e,
                                        result: u,
                                        document: t,
                                        variables: i,
                                        fetchPolicy: y,
                                        errorPolicy: v,
                                        context: b,
                                        update: d,
                                        updateQueries: a,
                                        awaitRefetchQueries: h,
                                        refetchQueries: l,
                                        removeOptimistic: r ? e : void 0,
                                        onQueryUpdated: p,
                                        keepRootFields: g
                                    })
                                })).subscribe({
                                    next: function(e) {
                                        c.broadcastQueries(), s(e)
                                    },
                                    error: function(t) {
                                        o && (o.loading = !1, o.error = t), r && c.cache.removeOptimistic(e), c.broadcastQueries(), u(t instanceof Qa ? t : new Qa({
                                            networkError: t
                                        }))
                                    }
                                })
                            }))]
                    }
                }))
            }))
        }, e.prototype.markMutationResult = function(e, t) {
            var i = this;
            void 0 === t && (t = this.cache);
            var r = e.result,
                o = [],
                s = "no-cache" === e.fetchPolicy;
            if (!s && rc(r, e.errorPolicy)) {
                o.push({
                    result: r.data,
                    dataId: "ROOT_MUTATION",
                    query: e.document,
                    variables: e.variables
                });
                var a = e.updateQueries;
                a && this.queries.forEach((function(e, n) {
                    var s = e.observableQuery,
                        c = s && s.queryName;
                    if (c && oc.call(a, c)) {
                        var l = a[c],
                            u = i.queries.get(n),
                            h = u.document,
                            d = u.variables,
                            p = t.diff({
                                query: h,
                                variables: d,
                                returnPartialData: !0,
                                optimistic: !1
                            }),
                            f = p.result;
                        if (p.complete && f) {
                            var v = l(f, {
                                mutationResult: r,
                                queryName: h && mr(h) || void 0,
                                queryVariables: d
                            });
                            v && o.push({
                                result: v,
                                dataId: "ROOT_QUERY",
                                query: h,
                                variables: d
                            })
                        }
                    }
                }))
            }
            if (o.length > 0 || e.refetchQueries || e.update || e.onQueryUpdated || e.removeOptimistic) {
                var c = [];
                if (this.refetchQueries({
                        updateCache: function(t) {
                            s || o.forEach((function(e) {
                                return t.write(e)
                            }));
                            var a = e.update;
                            if (a) {
                                if (!s) {
                                    var c = t.diff({
                                        id: "ROOT_MUTATION",
                                        query: i.transform(e.document).asQuery,
                                        variables: e.variables,
                                        optimistic: !1,
                                        returnPartialData: !0
                                    });
                                    c.complete && (r = n(n({}, r), {
                                        data: c.result
                                    }))
                                }
                                a(t, r, {
                                    context: e.context,
                                    variables: e.variables
                                })
                            }
                            s || e.keepRootFields || t.modify({
                                id: "ROOT_MUTATION",
                                fields: function(e, t) {
                                    var n = t.fieldName,
                                        i = t.DELETE;
                                    return "__typename" === n ? e : i
                                }
                            })
                        },
                        include: e.refetchQueries,
                        optimistic: !1,
                        removeOptimistic: e.removeOptimistic,
                        onQueryUpdated: e.onQueryUpdated || null
                    }).forEach((function(e) {
                        return c.push(e)
                    })), e.awaitRefetchQueries || e.onQueryUpdated) return Promise.all(c).then((function() {
                    return r
                }))
            }
            return Promise.resolve(r)
        }, e.prototype.markMutationOptimistic = function(e, t) {
            var i = this,
                r = "function" == typeof e ? e(t.variables) : e;
            return this.cache.recordOptimisticTransaction((function(e) {
                try {
                    i.markMutationResult(n(n({}, t), {
                        result: {
                            data: r
                        }
                    }), e)
                } catch (e) {
                    __DEV__ && kn.error(e)
                }
            }), t.mutationId)
        }, e.prototype.fetchQuery = function(e, t, n) {
            return this.fetchQueryObservable(e, t, n).promise
        }, e.prototype.getQueryStore = function() {
            var e = Object.create(null);
            return this.queries.forEach((function(t, n) {
                e[n] = {
                    variables: t.variables,
                    networkStatus: t.networkStatus,
                    networkError: t.networkError,
                    graphQLErrors: t.graphQLErrors
                }
            })), e
        }, e.prototype.resetErrors = function(e) {
            var t = this.queries.get(e);
            t && (t.networkError = void 0, t.graphQLErrors = [])
        }, e.prototype.transform = function(e) {
            var t, i = this.transformCache;
            if (!i.has(e)) {
                var r = this.cache.transformDocument(e),
                    o = (t = this.cache.transformForLink(r), Tr([Or], fr(t))),
                    s = this.localState.clientQuery(r),
                    a = o && this.localState.serverQuery(o),
                    c = {
                        document: r,
                        hasClientExports: Ji(r),
                        hasForcedResolvers: this.localState.shouldForceResolvers(r),
                        clientQuery: s,
                        serverQuery: a,
                        defaultVars: wr(vr(r)),
                        asQuery: n(n({}, r), {
                            definitions: r.definitions.map((function(e) {
                                return "OperationDefinition" === e.kind && "query" !== e.operation ? n(n({}, e), {
                                    operation: "query"
                                }) : e
                            }))
                        })
                    },
                    l = function(e) {
                        e && !i.has(e) && i.set(e, c)
                    };
                l(e), l(r), l(s), l(a)
            }
            return i.get(e)
        }, e.prototype.getVariables = function(e, t) {
            return n(n({}, this.transform(e).defaultVars), t)
        }, e.prototype.watchQuery = function(e) {
            void 0 === (e = n(n({}, e), {
                variables: this.getVariables(e.query, e.variables)
            })).notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1);
            var t = new ic(this),
                i = new Ya({
                    queryManager: this,
                    queryInfo: t,
                    options: e
                });
            return this.queries.set(i.queryId, t), t.init({
                document: e.query,
                observableQuery: i,
                variables: e.variables
            }), i
        }, e.prototype.query = function(e, t) {
            var n = this;
            return void 0 === t && (t = this.generateQueryId()), __DEV__ ? kn(e.query, "query option is required. You must specify your GraphQL document in the query option.") : kn(e.query, 14), __DEV__ ? kn("Document" === e.query.kind, 'You must wrap the query string in a "gql" tag.') : kn("Document" === e.query.kind, 15), __DEV__ ? kn(!e.returnPartialData, "returnPartialData option only supported on watchQuery.") : kn(!e.returnPartialData, 16), __DEV__ ? kn(!e.pollInterval, "pollInterval option only supported on watchQuery.") : kn(!e.pollInterval, 17), this.fetchQuery(t, e).finally((function() {
                return n.stopQuery(t)
            }))
        }, e.prototype.generateQueryId = function() {
            return String(this.queryIdCounter++)
        }, e.prototype.generateRequestId = function() {
            return this.requestIdCounter++
        }, e.prototype.generateMutationId = function() {
            return String(this.mutationIdCounter++)
        }, e.prototype.stopQueryInStore = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries()
        }, e.prototype.stopQueryInStoreNoBroadcast = function(e) {
            var t = this.queries.get(e);
            t && t.stop()
        }, e.prototype.clearStore = function(e) {
            return void 0 === e && (e = {
                discardWatches: !0
            }), this.cancelPendingFetches(__DEV__ ? new Sn("Store reset while query was in flight (not completed in link chain)") : new Sn(18)), this.queries.forEach((function(e) {
                e.observableQuery ? e.networkStatus = Ba.loading : e.stop()
            })), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e)
        }, e.prototype.getObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = "active");
            var i = new Map,
                r = new Map,
                o = new Set;
            return Array.isArray(e) && e.forEach((function(e) {
                var n;
                "string" == typeof e ? r.set(e, !1) : tr(n = e) && "Document" === n.kind && Array.isArray(n.definitions) ? r.set(t.transform(e).document, !1) : tr(e) && e.query && o.add(e)
            })), this.queries.forEach((function(t, n) {
                var o = t.observableQuery,
                    s = t.document;
                if (o) {
                    if ("all" === e) return void i.set(n, o);
                    var a = o.queryName;
                    if ("standby" === o.options.fetchPolicy || "active" === e && !o.hasObservers()) return;
                    ("active" === e || a && r.has(a) || s && r.has(s)) && (i.set(n, o), a && r.set(a, !0), s && r.set(s, !0))
                }
            })), o.size && o.forEach((function(e) {
                var r = Eo("legacyOneTimeQuery"),
                    o = t.getQuery(r).init({
                        document: e.query,
                        variables: e.variables
                    }),
                    s = new Ya({
                        queryManager: t,
                        queryInfo: o,
                        options: n(n({}, e), {
                            fetchPolicy: "network-only"
                        })
                    });
                kn(s.queryId === r), o.setObservableQuery(s), i.set(r, s)
            })), __DEV__ && r.size && r.forEach((function(e, t) {
                e || __DEV__ && kn.warn("Unknown query ".concat("string" == typeof t ? "named " : "").concat(JSON.stringify(t, null, 2), " requested in refetchQueries options.include array"))
            })), i
        }, e.prototype.reFetchObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = !1);
            var n = [];
            return this.getObservableQueries(e ? "all" : "active").forEach((function(i, r) {
                var o = i.options.fetchPolicy;
                i.resetLastResults(), (e || "standby" !== o && "cache-only" !== o) && n.push(i.refetch()), t.getQuery(r).setDiff(null)
            })), this.broadcastQueries(), Promise.all(n)
        }, e.prototype.setObservableQuery = function(e) {
            this.getQuery(e.queryId).setObservableQuery(e)
        }, e.prototype.startGraphQLSubscription = function(e) {
            var t = this,
                n = e.query,
                i = e.fetchPolicy,
                r = e.errorPolicy,
                o = e.variables,
                s = e.context,
                a = void 0 === s ? {} : s;
            n = this.transform(n).document, o = this.getVariables(n, o);
            var c = function(e) {
                return t.getObservableFromLink(n, a, e).map((function(o) {
                    if ("no-cache" !== i && (rc(o, r) && t.cache.write({
                            query: n,
                            result: o.data,
                            dataId: "ROOT_SUBSCRIPTION",
                            variables: e
                        }), t.broadcastQueries()), wo(o)) throw new Qa({
                        graphQLErrors: o.errors
                    });
                    return o
                }))
            };
            if (this.transform(n).hasClientExports) {
                var l = this.localState.addExportedVariables(n, o, a).then(c);
                return new io((function(e) {
                    var t = null;
                    return l.then((function(n) {
                            return t = n.subscribe(e)
                        }), e.error),
                        function() {
                            return t && t.unsubscribe()
                        }
                }))
            }
            return c(o)
        }, e.prototype.stopQuery = function(e) {
            this.stopQueryNoBroadcast(e), this.broadcastQueries()
        }, e.prototype.stopQueryNoBroadcast = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e)
        }, e.prototype.removeQuery = function(e) {
            this.fetchCancelFns.delete(e), this.getQuery(e).stop(), this.queries.delete(e)
        }, e.prototype.broadcastQueries = function() {
            this.onBroadcast && this.onBroadcast(), this.queries.forEach((function(e) {
                return e.notify()
            }))
        }, e.prototype.getLocalState = function() {
            return this.localState
        }, e.prototype.getObservableFromLink = function(e, t, i, r) {
            var o, s, a = this;
            void 0 === r && (r = null !== (o = null == t ? void 0 : t.queryDeduplication) && void 0 !== o ? o : this.queryDeduplication);
            var c = this.transform(e).serverQuery;
            if (c) {
                var l = this.inFlightLinkObservables,
                    u = this.link,
                    h = {
                        query: c,
                        variables: i,
                        operationName: mr(c) || void 0,
                        context: this.prepareContext(n(n({}, t), {
                            forceFetch: !r
                        }))
                    };
                if (t = h.context, r) {
                    var d = l.get(c) || new Map;
                    l.set(c, d);
                    var p = sa(i);
                    if (!(s = d.get(p))) {
                        var f = new go([Po(u, h)]);
                        d.set(p, s = f), f.cleanup((function() {
                            d.delete(p) && d.size < 1 && l.delete(c)
                        }))
                    }
                } else s = new go([Po(u, h)])
            } else s = new go([io.of({
                data: {}
            })]), t = this.prepareContext(t);
            var v = this.transform(e).clientQuery;
            return v && (s = ho(s, (function(e) {
                return a.localState.runResolvers({
                    document: v,
                    remoteResult: e,
                    context: t,
                    variables: i
                })
            }))), s
        }, e.prototype.getResultsFromLink = function(e, t, n) {
            var i = e.lastRequestId = this.generateRequestId();
            return ho(this.getObservableFromLink(e.document, n.context, n.variables), (function(r) {
                var o = bo(r.errors);
                if (i >= e.lastRequestId) {
                    if (o && "none" === n.errorPolicy) throw e.markError(new Qa({
                        graphQLErrors: r.errors
                    }));
                    e.markResult(r, n, t), e.markReady()
                }
                var s = {
                    data: r.data,
                    loading: !1,
                    networkStatus: e.networkStatus || Ba.ready
                };
                return o && "ignore" !== n.errorPolicy && (s.errors = r.errors), s
            }), (function(t) {
                var n = t.hasOwnProperty("graphQLErrors") ? t : new Qa({
                    networkError: t
                });
                throw i >= e.lastRequestId && e.markError(n), n
            }))
        }, e.prototype.fetchQueryObservable = function(e, t, n) {
            var i = this;
            void 0 === n && (n = Ba.loading);
            var r = this.transform(t.query).document,
                o = this.getVariables(r, t.variables),
                s = this.getQuery(e),
                a = t.fetchPolicy,
                c = void 0 === a ? "cache-first" : a,
                l = t.errorPolicy,
                u = void 0 === l ? "none" : l,
                h = t.returnPartialData,
                d = void 0 !== h && h,
                p = t.notifyOnNetworkStatusChange,
                f = void 0 !== p && p,
                v = t.context,
                m = void 0 === v ? {} : v,
                y = Object.assign({}, t, {
                    query: r,
                    variables: o,
                    fetchPolicy: c,
                    errorPolicy: u,
                    returnPartialData: d,
                    notifyOnNetworkStatusChange: f,
                    context: m
                }),
                g = function(e) {
                    return y.variables = e, i.fetchQueryByPolicy(s, y, n)
                };
            this.fetchCancelFns.set(e, (function(e) {
                setTimeout((function() {
                    return b.cancel(e)
                }))
            }));
            var b = new go(this.transform(y.query).hasClientExports ? this.localState.addExportedVariables(y.query, y.variables, y.context).then(g) : g(y.variables));
            return b.cleanup((function() {
                i.fetchCancelFns.delete(e),
                    function(e) {
                        var t = e.fetchPolicy,
                            n = void 0 === t ? "cache-first" : t,
                            i = e.nextFetchPolicy;
                        i && (e.fetchPolicy = "function" == typeof i ? i.call(e, n) : i)
                    }(t)
            })), b
        }, e.prototype.refetchQueries = function(e) {
            var t = this,
                n = e.updateCache,
                i = e.include,
                r = e.optimistic,
                o = void 0 !== r && r,
                s = e.removeOptimistic,
                a = void 0 === s ? o ? Eo("refetchQueries") : void 0 : s,
                c = e.onQueryUpdated,
                l = new Map;
            i && this.getObservableQueries(i).forEach((function(e, n) {
                l.set(n, {
                    oq: e,
                    lastDiff: t.getQuery(n).getDiff()
                })
            }));
            var u = new Map;
            return n && this.cache.batch({
                update: n,
                optimistic: o && a || !1,
                removeOptimistic: a,
                onWatchUpdated: function(e, t, n) {
                    var i = e.watcher instanceof ic && e.watcher.observableQuery;
                    if (i) {
                        if (c) {
                            l.delete(i.queryId);
                            var r = c(i, t, n);
                            return !0 === r && (r = i.refetch()), !1 !== r && u.set(i, r), r
                        }
                        null !== c && l.set(i.queryId, {
                            oq: i,
                            lastDiff: n,
                            diff: t
                        })
                    }
                }
            }), l.size && l.forEach((function(e, n) {
                var i, r = e.oq,
                    o = e.lastDiff,
                    s = e.diff;
                if (c) {
                    if (!s) {
                        var a = r.queryInfo;
                        a.reset(), s = a.getDiff()
                    }
                    i = c(r, s, o)
                }
                c && !0 !== i || (i = r.refetch()), !1 !== i && u.set(r, i), n.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(n)
            })), a && this.cache.removeOptimistic(a), u
        }, e.prototype.fetchQueryByPolicy = function(e, t, i) {
            var r = this,
                o = t.query,
                s = t.variables,
                a = t.fetchPolicy,
                c = t.refetchWritePolicy,
                l = t.errorPolicy,
                u = t.returnPartialData,
                h = t.context,
                d = t.notifyOnNetworkStatusChange,
                p = e.networkStatus;
            e.init({
                document: o,
                variables: s,
                networkStatus: i
            });
            var f = function() {
                    return e.getDiff(s)
                },
                v = function(t, i) {
                    void 0 === i && (i = e.networkStatus || Ba.loading);
                    var a = t.result;
                    !__DEV__ || u || Go(a, {}) || Xa(t.missing);
                    var c = function(e) {
                        return io.of(n({
                            data: e,
                            loading: Ha(i),
                            networkStatus: i
                        }, t.complete ? null : {
                            partial: !0
                        }))
                    };
                    return a && r.transform(o).hasForcedResolvers ? r.localState.runResolvers({
                        document: o,
                        remoteResult: {
                            data: a
                        },
                        context: h,
                        variables: s,
                        onlyRunForcedResolvers: !0
                    }).then((function(e) {
                        return c(e.data || void 0)
                    })) : c(a)
                },
                m = "no-cache" === a ? 0 : i === Ba.refetch && "merge" !== c ? 1 : 2,
                y = function() {
                    return r.getResultsFromLink(e, m, {
                        variables: s,
                        context: h,
                        fetchPolicy: a,
                        errorPolicy: l
                    })
                },
                g = d && "number" == typeof p && p !== i && Ha(i);
            switch (a) {
                default:
                case "cache-first":
                    return (b = f()).complete ? [v(b, e.markReady())] : u || g ? [v(b), y()] : [y()];
                case "cache-and-network":
                    var b;
                    return (b = f()).complete || u || g ? [v(b), y()] : [y()];
                case "cache-only":
                    return [v(f(), e.markReady())];
                case "network-only":
                    return g ? [v(f()), y()] : [y()];
                case "no-cache":
                    return g ? [v(e.getDiff()), y()] : [y()];
                case "standby":
                    return []
            }
        }, e.prototype.getQuery = function(e) {
            return e && !this.queries.has(e) && this.queries.set(e, new ic(this, e)), this.queries.get(e)
        }, e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return n(n({}, t), {
                clientAwareness: this.clientAwareness
            })
        }, e
    }(),
    ac = !1;

function cc(e, t) {
    return xo(e, t, t.variables && {
        variables: n(n({}, e.variables), t.variables)
    })
}
var lc = function() {
        function e(e) {
            var t = this;
            this.defaultOptions = {}, this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
            var n = e.uri,
                i = e.credentials,
                r = e.headers,
                o = e.cache,
                s = e.ssrMode,
                a = void 0 !== s && s,
                c = e.ssrForceFetchDelay,
                l = void 0 === c ? 0 : c,
                u = e.connectToDevTools,
                h = void 0 === u ? "object" == typeof window && !window.__APOLLO_CLIENT__ && __DEV__ : u,
                d = e.queryDeduplication,
                p = void 0 === d || d,
                f = e.defaultOptions,
                v = e.assumeImmutableResults,
                m = void 0 !== v && v,
                y = e.resolvers,
                g = e.typeDefs,
                b = e.fragmentMatcher,
                w = e.name,
                x = e.version,
                _ = e.link;
            if (_ || (_ = n ? new Vo({
                    uri: n,
                    credentials: i,
                    headers: r
                }) : Io.empty()), !o) throw __DEV__ ? new Sn("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new Sn(7);
            if (this.link = _, this.cache = o, this.disableNetworkFetches = a || l > 0, this.queryDeduplication = p, this.defaultOptions = f || {}, this.typeDefs = g, l && setTimeout((function() {
                    return t.disableNetworkFetches = !1
                }), l), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), h && "object" == typeof window && (window.__APOLLO_CLIENT__ = this), !ac && __DEV__ && (ac = !0, "undefined" != typeof window && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
                var E = window.navigator,
                    S = E && E.userAgent,
                    k = void 0;
                "string" == typeof S && (S.indexOf("Chrome/") > -1 ? k = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : S.indexOf("Firefox/") > -1 && (k = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), k && __DEV__ && kn.log("Download the Apollo DevTools for a better development experience: " + k)
            }
            this.version = "3.5.8", this.localState = new Za({
                cache: o,
                client: this,
                resolvers: y,
                fragmentMatcher: b
            }), this.queryManager = new sc({
                cache: this.cache,
                link: this.link,
                queryDeduplication: p,
                ssrMode: a,
                clientAwareness: {
                    name: w,
                    version: x
                },
                localState: this.localState,
                assumeImmutableResults: m,
                onBroadcast: h ? function() {
                    t.devToolsHookCb && t.devToolsHookCb({
                        action: {},
                        state: {
                            queries: t.queryManager.getQueryStore(),
                            mutations: t.queryManager.mutationStore || {}
                        },
                        dataWithOptimisticResults: t.cache.extract(!0)
                    })
                } : void 0
            })
        }
        return e.prototype.stop = function() {
            this.queryManager.stop()
        }, e.prototype.watchQuery = function(e) {
            return this.defaultOptions.watchQuery && (e = cc(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = n(n({}, e), {
                fetchPolicy: "cache-first"
            })), this.queryManager.watchQuery(e)
        }, e.prototype.query = function(e) {
            return this.defaultOptions.query && (e = cc(this.defaultOptions.query, e)), __DEV__ ? kn("cache-and-network" !== e.fetchPolicy, "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : kn("cache-and-network" !== e.fetchPolicy, 8), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = n(n({}, e), {
                fetchPolicy: "cache-first"
            })), this.queryManager.query(e)
        }, e.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = cc(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
        }, e.prototype.subscribe = function(e) {
            return this.queryManager.startGraphQLSubscription(e)
        }, e.prototype.readQuery = function(e, t) {
            return void 0 === t && (t = !1), this.cache.readQuery(e, t)
        }, e.prototype.readFragment = function(e, t) {
            return void 0 === t && (t = !1), this.cache.readFragment(e, t)
        }, e.prototype.writeQuery = function(e) {
            this.cache.writeQuery(e), this.queryManager.broadcastQueries()
        }, e.prototype.writeFragment = function(e) {
            this.cache.writeFragment(e), this.queryManager.broadcastQueries()
        }, e.prototype.__actionHookForDevTools = function(e) {
            this.devToolsHookCb = e
        }, e.prototype.__requestRaw = function(e) {
            return Po(this.link, e)
        }, e.prototype.resetStore = function() {
            var e = this;
            return Promise.resolve().then((function() {
                return e.queryManager.clearStore({
                    discardWatches: !1
                })
            })).then((function() {
                return Promise.all(e.resetStoreCallbacks.map((function(e) {
                    return e()
                })))
            })).then((function() {
                return e.reFetchObservableQueries()
            }))
        }, e.prototype.clearStore = function() {
            var e = this;
            return Promise.resolve().then((function() {
                return e.queryManager.clearStore({
                    discardWatches: !0
                })
            })).then((function() {
                return Promise.all(e.clearStoreCallbacks.map((function(e) {
                    return e()
                })))
            }))
        }, e.prototype.onResetStore = function(e) {
            var t = this;
            return this.resetStoreCallbacks.push(e),
                function() {
                    t.resetStoreCallbacks = t.resetStoreCallbacks.filter((function(t) {
                        return t !== e
                    }))
                }
        }, e.prototype.onClearStore = function(e) {
            var t = this;
            return this.clearStoreCallbacks.push(e),
                function() {
                    t.clearStoreCallbacks = t.clearStoreCallbacks.filter((function(t) {
                        return t !== e
                    }))
                }
        }, e.prototype.reFetchObservableQueries = function(e) {
            return this.queryManager.reFetchObservableQueries(e)
        }, e.prototype.refetchQueries = function(e) {
            var t = this.queryManager.refetchQueries(e),
                n = [],
                i = [];
            t.forEach((function(e, t) {
                n.push(t), i.push(e)
            }));
            var r = Promise.all(i);
            return r.queries = n, r.results = i, r.catch((function(e) {
                __DEV__ && kn.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(e))
            })), r
        }, e.prototype.getObservableQueries = function(e) {
            return void 0 === e && (e = "active"), this.queryManager.getObservableQueries(e)
        }, e.prototype.extract = function(e) {
            return this.cache.extract(e)
        }, e.prototype.restore = function(e) {
            return this.cache.restore(e)
        }, e.prototype.addResolvers = function(e) {
            this.localState.addResolvers(e)
        }, e.prototype.setResolvers = function(e) {
            this.localState.setResolvers(e)
        }, e.prototype.getResolvers = function() {
            return this.localState.getResolvers()
        }, e.prototype.setLocalStateFragmentMatcher = function(e) {
            this.localState.setFragmentMatcher(e)
        }, e.prototype.setLink = function(e) {
            this.link = this.queryManager.link = e
        }, e
    }(),
    uc = new Map,
    hc = new Map,
    dc = !0,
    pc = !1;

function fc(e) {
    return e.replace(/[\s,]+/g, " ").trim()
}

function vc(e) {
    var t = new Set,
        i = [];
    return e.definitions.forEach((function(e) {
        if ("FragmentDefinition" === e.kind) {
            var n = e.name.value,
                r = fc((s = e.loc).source.body.substring(s.start, s.end)),
                o = hc.get(n);
            o && !o.has(r) ? dc && console.warn("Warning: fragment with name " + n + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || hc.set(n, o = new Set), o.add(r), t.has(r) || (t.add(r), i.push(e))
        } else i.push(e);
        var s
    })), n(n({}, e), {
        definitions: i
    })
}

function mc(e) {
    var t = fc(e);
    if (!uc.has(t)) {
        var n = function(e, t) {
            return new Mi(e, t).parseDocument()
        }(e, {
            experimentalFragmentVariables: pc,
            allowLegacyFragmentVariables: pc
        });
        if (!n || "Document" !== n.kind) throw new Error("Not a valid GraphQL document.");
        uc.set(t, function(e) {
            var t = new Set(e.definitions);
            t.forEach((function(e) {
                e.loc && delete e.loc, Object.keys(e).forEach((function(n) {
                    var i = e[n];
                    i && "object" == typeof i && t.add(i)
                }))
            }));
            var n = e.loc;
            return n && (delete n.startToken, delete n.endToken), e
        }(vc(n)))
    }
    return uc.get(t)
}

function yc(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    "string" == typeof e && (e = [e]);
    var i = e[0];
    return t.forEach((function(t, n) {
        t && "Document" === t.kind ? i += t.loc.source.body : i += t, i += e[n + 1]
    })), mc(i)
}
var gc, bc = yc,
    wc = function() {
        uc.clear(), hc.clear()
    },
    xc = function() {
        dc = !1
    },
    _c = function() {
        pc = !0
    },
    Ec = function() {
        pc = !1
    };
(gc = yc || (yc = {})).gql = bc, gc.resetCaches = wc, gc.disableFragmentWarnings = xc, gc.enableExperimentalFragmentVariables = _c, gc.disableExperimentalFragmentVariables = Ec, yc.default = yc;
var Sc = kc;

function kc(e) {
    e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
}
kc.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
    }
    return 0 | Math.min(e, this.max)
}, kc.prototype.reset = function() {
    this.attempts = 0
}, kc.prototype.setMin = function(e) {
    this.ms = e
}, kc.prototype.setMax = function(e) {
    this.max = e
}, kc.prototype.setJitter = function(e) {
    this.jitter = e
};
var Tc = Nt((function(e) {
    var t = Object.prototype.hasOwnProperty,
        n = "~";

    function i() {}

    function r(e, t, n) {
        this.fn = e, this.context = t, this.once = n || !1
    }

    function o(e, t, i, o, s) {
        if ("function" != typeof i) throw new TypeError("The listener must be a function");
        var a = new r(i, o || e, s),
            c = n ? n + t : t;
        return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], a] : e._events[c].push(a) : (e._events[c] = a, e._eventsCount++), e
    }

    function s(e, t) {
        0 == --e._eventsCount ? e._events = new i : delete e._events[t]
    }

    function a() {
        this._events = new i, this._eventsCount = 0
    }
    Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (n = !1)), a.prototype.eventNames = function() {
        var e, i, r = [];
        if (0 === this._eventsCount) return r;
        for (i in e = this._events) t.call(e, i) && r.push(n ? i.slice(1) : i);
        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
    }, a.prototype.listeners = function(e) {
        var t = n ? n + e : e,
            i = this._events[t];
        if (!i) return [];
        if (i.fn) return [i.fn];
        for (var r = 0, o = i.length, s = new Array(o); r < o; r++) s[r] = i[r].fn;
        return s
    }, a.prototype.listenerCount = function(e) {
        var t = n ? n + e : e,
            i = this._events[t];
        return i ? i.fn ? 1 : i.length : 0
    }, a.prototype.emit = function(e, t, i, r, o, s) {
        var a = n ? n + e : e;
        if (!this._events[a]) return !1;
        var c, l, u = this._events[a],
            h = arguments.length;
        if (u.fn) {
            switch (u.once && this.removeListener(e, u.fn, void 0, !0), h) {
                case 1:
                    return u.fn.call(u.context), !0;
                case 2:
                    return u.fn.call(u.context, t), !0;
                case 3:
                    return u.fn.call(u.context, t, i), !0;
                case 4:
                    return u.fn.call(u.context, t, i, r), !0;
                case 5:
                    return u.fn.call(u.context, t, i, r, o), !0;
                case 6:
                    return u.fn.call(u.context, t, i, r, o, s), !0
            }
            for (l = 1, c = new Array(h - 1); l < h; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c)
        } else {
            var d, p = u.length;
            for (l = 0; l < p; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), h) {
                case 1:
                    u[l].fn.call(u[l].context);
                    break;
                case 2:
                    u[l].fn.call(u[l].context, t);
                    break;
                case 3:
                    u[l].fn.call(u[l].context, t, i);
                    break;
                case 4:
                    u[l].fn.call(u[l].context, t, i, r);
                    break;
                default:
                    if (!c)
                        for (d = 1, c = new Array(h - 1); d < h; d++) c[d - 1] = arguments[d];
                    u[l].fn.apply(u[l].context, c)
            }
        }
        return !0
    }, a.prototype.on = function(e, t, n) {
        return o(this, e, t, n, !1)
    }, a.prototype.once = function(e, t, n) {
        return o(this, e, t, n, !0)
    }, a.prototype.removeListener = function(e, t, i, r) {
        var o = n ? n + e : e;
        if (!this._events[o]) return this;
        if (!t) return s(this, o), this;
        var a = this._events[o];
        if (a.fn) a.fn !== t || r && !a.once || i && a.context !== i || s(this, o);
        else {
            for (var c = 0, l = [], u = a.length; c < u; c++)(a[c].fn !== t || r && !a[c].once || i && a[c].context !== i) && l.push(a[c]);
            l.length ? this._events[o] = 1 === l.length ? l[0] : l : s(this, o)
        }
        return this
    }, a.prototype.removeAllListeners = function(e) {
        var t;
        return e ? (t = n ? n + e : e, this._events[t] && s(this, t)) : (this._events = new i, this._eventsCount = 0), this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, e.exports = a
}));
var Cc = function(e) {
        return "string" == typeof e
    },
    Oc = Object.defineProperty({
        default: Cc
    }, "__esModule", {
        value: !0
    });
var Ac = function(e) {
        return null !== e && "object" == typeof e
    },
    Ic = Object.defineProperty({
        default: Ac
    }, "__esModule", {
        value: !0
    });
var Mc = function(e) {
        var t, n = e.Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()),
    Pc = Object.freeze({
        __proto__: null,
        default: Mc
    }),
    Dc = Nt((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GRAPHQL_SUBSCRIPTIONS = t.GRAPHQL_WS = void 0;
        t.GRAPHQL_WS = "graphql-ws";
        t.GRAPHQL_SUBSCRIPTIONS = "graphql-subscriptions"
    })),
    Nc = Nt((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.WS_TIMEOUT = t.MIN_WS_TIMEOUT = void 0;
        t.MIN_WS_TIMEOUT = 1e3;
        t.WS_TIMEOUT = 3e4
    })),
    Rc = function() {
        function e() {
            throw new Error("Static Class")
        }
        return e.GQL_CONNECTION_INIT = "connection_init", e.GQL_CONNECTION_ACK = "connection_ack", e.GQL_CONNECTION_ERROR = "connection_error", e.GQL_CONNECTION_KEEP_ALIVE = "ka", e.GQL_CONNECTION_TERMINATE = "connection_terminate", e.GQL_START = "start", e.GQL_DATA = "data", e.GQL_ERROR = "error", e.GQL_COMPLETE = "complete", e.GQL_STOP = "stop", e.SUBSCRIPTION_START = "subscription_start", e.SUBSCRIPTION_DATA = "subscription_data", e.SUBSCRIPTION_SUCCESS = "subscription_success", e.SUBSCRIPTION_FAIL = "subscription_fail", e.SUBSCRIPTION_END = "subscription_end", e.INIT = "init", e.INIT_SUCCESS = "init_success", e.INIT_FAIL = "init_fail", e.KEEP_ALIVE = "keepalive", e
    }(),
    Lc = Object.defineProperty({
        default: Rc
    }, "__esModule", {
        value: !0
    }),
    Fc = Dt(Gi),
    jc = Dt(Wi),
    $c = Dt(Pc),
    zc = Nt((function(e, t) {
        var n = Pt && Pt.__assign || function() {
                return n = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }, n.apply(this, arguments)
            },
            i = Pt && Pt.__awaiter || function(e, t, n, i) {
                return new(n || (n = Promise))((function(r, o) {
                    function s(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            },
            r = Pt && Pt.__generator || function(e, t) {
                var n, i, r, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, i = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < r[1]) {
                                            s.label = r[1], r = o;
                                            break
                                        }
                                        if (r && s.label < r[2]) {
                                            s.label = r[2], s.ops.push(o);
                                            break
                                        }
                                        r[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
                            } catch (e) {
                                o = [6, e], i = 0
                            } finally {
                                n = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            },
            o = Pt && Pt.__spreadArrays || function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var i = Array(e),
                    r = 0;
                for (t = 0; t < n; t++)
                    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, r++) i[r] = o[s];
                return i
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SubscriptionClient = void 0;
        var s = void 0 !== Pt ? Pt : "undefined" != typeof window ? window : {},
            a = s.WebSocket || s.MozWebSocket,
            c = function() {
                function e(e, t, n, i) {
                    var r = t || {},
                        o = r.connectionCallback,
                        s = void 0 === o ? void 0 : o,
                        c = r.connectionParams,
                        l = void 0 === c ? {} : c,
                        u = r.minTimeout,
                        h = void 0 === u ? Nc.MIN_WS_TIMEOUT : u,
                        d = r.timeout,
                        p = void 0 === d ? Nc.WS_TIMEOUT : d,
                        f = r.reconnect,
                        v = void 0 !== f && f,
                        m = r.reconnectionAttempts,
                        y = void 0 === m ? 1 / 0 : m,
                        g = r.lazy,
                        b = void 0 !== g && g,
                        w = r.inactivityTimeout,
                        x = void 0 === w ? 0 : w,
                        _ = r.wsOptionArguments,
                        E = void 0 === _ ? [] : _;
                    if (this.wsImpl = n || a, !this.wsImpl) throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");
                    this.wsProtocols = i || Dc.GRAPHQL_WS, this.connectionCallback = s, this.url = e, this.operations = {}, this.nextOperationId = 0, this.minWsTimeout = h, this.wsTimeout = p, this.unsentMessagesQueue = [], this.reconnect = v, this.reconnecting = !1, this.reconnectionAttempts = y, this.lazy = !!b, this.inactivityTimeout = x, this.closedByUser = !1, this.backoff = new Sc({
                        jitter: .5
                    }), this.eventEmitter = new Tc.EventEmitter, this.middlewares = [], this.client = null, this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator(), this.connectionParams = this.getConnectionParams(l), this.wsOptionArguments = E, this.lazy || this.connect()
                }
                return Object.defineProperty(e.prototype, "status", {
                    get: function() {
                        return null === this.client ? this.wsImpl.CLOSED : this.client.readyState
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.close = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0), this.clearInactivityTimeout(), null !== this.client && (this.closedByUser = t, e && (this.clearCheckConnectionInterval(), this.clearMaxConnectTimeout(), this.clearTryReconnectTimeout(), this.unsubscribeAll(), this.sendMessage(void 0, Lc.default.GQL_CONNECTION_TERMINATE, null)), this.client.close(), this.client.onopen = null, this.client.onclose = null, this.client.onerror = null, this.client.onmessage = null, this.client = null, this.eventEmitter.emit("disconnected"), e || this.tryReconnect())
                }, e.prototype.request = function(e) {
                    var t, n, i = this.getObserver.bind(this),
                        r = this.executeOperation.bind(this),
                        o = this.unsubscribe.bind(this);
                    return this.clearInactivityTimeout(), (t = {})[$c.default] = function() {
                        return this
                    }, t.subscribe = function(t, s, a) {
                        var c = i(t, s, a);
                        return n = r(e, (function(e, t) {
                            null === e && null === t ? c.complete && c.complete() : e ? c.error && c.error(e[0]) : c.next && c.next(t)
                        })), {
                            unsubscribe: function() {
                                n && (o(n), n = null)
                            }
                        }
                    }, t
                }, e.prototype.on = function(e, t, n) {
                    var i = this.eventEmitter.on(e, t, n);
                    return function() {
                        i.off(e, t, n)
                    }
                }, e.prototype.onConnected = function(e, t) {
                    return this.on("connected", e, t)
                }, e.prototype.onConnecting = function(e, t) {
                    return this.on("connecting", e, t)
                }, e.prototype.onDisconnected = function(e, t) {
                    return this.on("disconnected", e, t)
                }, e.prototype.onReconnected = function(e, t) {
                    return this.on("reconnected", e, t)
                }, e.prototype.onReconnecting = function(e, t) {
                    return this.on("reconnecting", e, t)
                }, e.prototype.onError = function(e, t) {
                    return this.on("error", e, t)
                }, e.prototype.unsubscribeAll = function() {
                    var e = this;
                    Object.keys(this.operations).forEach((function(t) {
                        e.unsubscribe(t)
                    }))
                }, e.prototype.applyMiddlewares = function(e) {
                    var t = this;
                    return new Promise((function(n, i) {
                        var r, s, a;
                        r = o(t.middlewares), s = t, a = function(t) {
                            if (t) i(t);
                            else if (r.length > 0) {
                                var o = r.shift();
                                o && o.applyMiddleware.apply(s, [e, a])
                            } else n(e)
                        }, a()
                    }))
                }, e.prototype.use = function(e) {
                    var t = this;
                    return e.map((function(e) {
                        if ("function" != typeof e.applyMiddleware) throw new Error("Middleware must implement the applyMiddleware function.");
                        t.middlewares.push(e)
                    })), this
                }, e.prototype.getConnectionParams = function(e) {
                    return function() {
                        return new Promise((function(t, n) {
                            if ("function" == typeof e) try {
                                return t(e.call(null))
                            } catch (e) {
                                return n(e)
                            }
                            t(e)
                        }))
                    }
                }, e.prototype.executeOperation = function(e, t) {
                    var n = this;
                    null === this.client && this.connect();
                    var i = this.generateOperationId();
                    return this.operations[i] = {
                        options: e,
                        handler: t
                    }, this.applyMiddlewares(e).then((function(e) {
                        n.checkOperationOptions(e, t), n.operations[i] && (n.operations[i] = {
                            options: e,
                            handler: t
                        }, n.sendMessage(i, Lc.default.GQL_START, e))
                    })).catch((function(e) {
                        n.unsubscribe(i), t(n.formatErrors(e))
                    })), i
                }, e.prototype.getObserver = function(e, t, n) {
                    return "function" == typeof e ? {
                        next: function(t) {
                            return e(t)
                        },
                        error: function(e) {
                            return t && t(e)
                        },
                        complete: function() {
                            return n && n()
                        }
                    } : e
                }, e.prototype.createMaxConnectTimeGenerator = function() {
                    var e = this.minWsTimeout,
                        t = this.wsTimeout;
                    return new Sc({
                        min: e,
                        max: t,
                        factor: 1.2
                    })
                }, e.prototype.clearCheckConnectionInterval = function() {
                    this.checkConnectionIntervalId && (clearInterval(this.checkConnectionIntervalId), this.checkConnectionIntervalId = null)
                }, e.prototype.clearMaxConnectTimeout = function() {
                    this.maxConnectTimeoutId && (clearTimeout(this.maxConnectTimeoutId), this.maxConnectTimeoutId = null)
                }, e.prototype.clearTryReconnectTimeout = function() {
                    this.tryReconnectTimeoutId && (clearTimeout(this.tryReconnectTimeoutId), this.tryReconnectTimeoutId = null)
                }, e.prototype.clearInactivityTimeout = function() {
                    this.inactivityTimeoutId && (clearTimeout(this.inactivityTimeoutId), this.inactivityTimeoutId = null)
                }, e.prototype.setInactivityTimeout = function() {
                    var e = this;
                    this.inactivityTimeout > 0 && 0 === Object.keys(this.operations).length && (this.inactivityTimeoutId = setTimeout((function() {
                        0 === Object.keys(e.operations).length && e.close()
                    }), this.inactivityTimeout))
                }, e.prototype.checkOperationOptions = function(e, t) {
                    var n = e.query,
                        i = e.variables,
                        r = e.operationName;
                    if (!n) throw new Error("Must provide a query.");
                    if (!t) throw new Error("Must provide an handler.");
                    if (!Oc.default(n) && !jc.getOperationAST(n, r) || r && !Oc.default(r) || i && !Ic.default(i)) throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.")
                }, e.prototype.buildMessage = function(e, t, i) {
                    return {
                        id: e,
                        type: t,
                        payload: i && i.query ? n(n({}, i), {
                            query: "string" == typeof i.query ? i.query : Fc.print(i.query)
                        }) : i
                    }
                }, e.prototype.formatErrors = function(e) {
                    return Array.isArray(e) ? e : e && e.errors ? this.formatErrors(e.errors) : e && e.message ? [e] : [{
                        name: "FormatedError",
                        message: "Unknown error",
                        originalError: e
                    }]
                }, e.prototype.sendMessage = function(e, t, n) {
                    this.sendMessageRaw(this.buildMessage(e, t, n))
                }, e.prototype.sendMessageRaw = function(e) {
                    switch (this.status) {
                        case this.wsImpl.OPEN:
                            var t = JSON.stringify(e);
                            try {
                                JSON.parse(t)
                            } catch (t) {
                                this.eventEmitter.emit("error", new Error("Message must be JSON-serializable. Got: " + e))
                            }
                            this.client.send(t);
                            break;
                        case this.wsImpl.CONNECTING:
                            this.unsentMessagesQueue.push(e);
                            break;
                        default:
                            this.reconnecting || this.eventEmitter.emit("error", new Error("A message was not sent because socket is not connected, is closing or is already closed. Message was: " + JSON.stringify(e)))
                    }
                }, e.prototype.generateOperationId = function() {
                    return String(++this.nextOperationId)
                }, e.prototype.tryReconnect = function() {
                    var e = this;
                    if (this.reconnect && !(this.backoff.attempts >= this.reconnectionAttempts)) {
                        this.reconnecting || (Object.keys(this.operations).forEach((function(t) {
                            e.unsentMessagesQueue.push(e.buildMessage(t, Lc.default.GQL_START, e.operations[t].options))
                        })), this.reconnecting = !0), this.clearTryReconnectTimeout();
                        var t = this.backoff.duration();
                        this.tryReconnectTimeoutId = setTimeout((function() {
                            e.connect()
                        }), t)
                    }
                }, e.prototype.flushUnsentMessagesQueue = function() {
                    var e = this;
                    this.unsentMessagesQueue.forEach((function(t) {
                        e.sendMessageRaw(t)
                    })), this.unsentMessagesQueue = []
                }, e.prototype.checkConnection = function() {
                    this.wasKeepAliveReceived ? this.wasKeepAliveReceived = !1 : this.reconnecting || this.close(!1, !0)
                }, e.prototype.checkMaxConnectTimeout = function() {
                    var e = this;
                    this.clearMaxConnectTimeout(), this.maxConnectTimeoutId = setTimeout((function() {
                        e.status !== e.wsImpl.OPEN && (e.reconnecting = !0, e.close(!1, !0))
                    }), this.maxConnectTimeGenerator.duration())
                }, e.prototype.connect = function() {
                    var e, t = this;
                    this.client = new((e = this.wsImpl).bind.apply(e, o([void 0, this.url, this.wsProtocols], this.wsOptionArguments))), this.checkMaxConnectTimeout(), this.client.onopen = function() {
                        return i(t, void 0, void 0, (function() {
                            var e, t;
                            return r(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.status !== this.wsImpl.OPEN) return [3, 4];
                                        this.clearMaxConnectTimeout(), this.closedByUser = !1, this.eventEmitter.emit(this.reconnecting ? "reconnecting" : "connecting"), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.connectionParams()];
                                    case 2:
                                        return e = n.sent(), this.sendMessage(void 0, Lc.default.GQL_CONNECTION_INIT, e), this.flushUnsentMessagesQueue(), [3, 4];
                                    case 3:
                                        return t = n.sent(), this.sendMessage(void 0, Lc.default.GQL_CONNECTION_ERROR, t), this.flushUnsentMessagesQueue(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, this.client.onclose = function() {
                        t.closedByUser || t.close(!1, !1)
                    }, this.client.onerror = function(e) {
                        t.eventEmitter.emit("error", e)
                    }, this.client.onmessage = function(e) {
                        var n = e.data;
                        t.processReceivedData(n)
                    }
                }, e.prototype.processReceivedData = function(e) {
                    var t, i;
                    try {
                        i = (t = JSON.parse(e)).id
                    } catch (t) {
                        throw new Error("Message must be JSON-parseable. Got: " + e)
                    }
                    if (-1 === [Lc.default.GQL_DATA, Lc.default.GQL_COMPLETE, Lc.default.GQL_ERROR].indexOf(t.type) || this.operations[i]) switch (t.type) {
                        case Lc.default.GQL_CONNECTION_ERROR:
                            this.connectionCallback && this.connectionCallback(t.payload);
                            break;
                        case Lc.default.GQL_CONNECTION_ACK:
                            this.eventEmitter.emit(this.reconnecting ? "reconnected" : "connected", t.payload), this.reconnecting = !1, this.backoff.reset(), this.maxConnectTimeGenerator.reset(), this.connectionCallback && this.connectionCallback();
                            break;
                        case Lc.default.GQL_COMPLETE:
                            var r = this.operations[i].handler;
                            delete this.operations[i], r.call(this, null, null);
                            break;
                        case Lc.default.GQL_ERROR:
                            this.operations[i].handler(this.formatErrors(t.payload), null), delete this.operations[i];
                            break;
                        case Lc.default.GQL_DATA:
                            var o = t.payload.errors ? n(n({}, t.payload), {
                                errors: this.formatErrors(t.payload.errors)
                            }) : t.payload;
                            this.operations[i].handler(null, o);
                            break;
                        case Lc.default.GQL_CONNECTION_KEEP_ALIVE:
                            var s = void 0 === this.wasKeepAliveReceived;
                            this.wasKeepAliveReceived = !0, s && this.checkConnection(), this.checkConnectionIntervalId && (clearInterval(this.checkConnectionIntervalId), this.checkConnection()), this.checkConnectionIntervalId = setInterval(this.checkConnection.bind(this), this.wsTimeout);
                            break;
                        default:
                            throw new Error("Invalid message type!")
                    } else this.unsubscribe(i)
                }, e.prototype.unsubscribe = function(e) {
                    this.operations[e] && (delete this.operations[e], this.setInactivityTimeout(), this.sendMessage(e, Lc.default.GQL_STOP, void 0))
                }, e
            }();
        t.SubscriptionClient = c
    })),
    Vc = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return t instanceof zc.SubscriptionClient ? n.subscriptionClient = t : n.subscriptionClient = new zc.SubscriptionClient(t.uri, t.options, t.webSocketImpl), n
        }
        return t(n, e), n.prototype.request = function(e) {
            return this.subscriptionClient.request(e)
        }, n
    }(Io);
const qc = {
        reconnect: !0,
        reconnectionAttempts: 6,
        lazy: !0,
        timeout: 3e4,
        inactivityTimeout: 15e3
    },
    Uc = {
        name: "mona-lisa",
        version: "0.0.1"
    },
    Bc = yc`
  mutation setPixel($input: ActInput!) {
    act(input: $input) {
      data {
        ... on BasicMessage {
          id
          data {
            ... on GetUserCooldownResponseMessageData {
              nextAvailablePixelTimestamp
            }
            ... on SetPixelResponseMessageData {
              timestamp
            }
          }
        }
      }
    }
  }
`,
    Qc = yc`
  mutation pixelHistory($input: ActInput!) {
    act(input: $input) {
      data {
        ... on BasicMessage {
          id
          data {
            ... on GetTileHistoryResponseMessageData {
              lastModifiedTimestamp
              userInfo {
                userID
                username
              }
            }
          }
        }
      }
    }
  }
`,
    Hc = yc`
  mutation getUserCooldown($input: ActInput!) {
    act(input: $input) {
      data {
        ... on BasicMessage {
          id
          data {
            ... on GetUserCooldownResponseMessageData {
              nextAvailablePixelTimestamp
            }
          }
        }
      }
    }
  }
`,
    Gc = yc`
  mutation setRect($input: ActInput!) {
    act(input: $input) {
      data {
        id
      }
    }
  }
`,
    Wc = yc`
  subscription configuration($input: SubscribeInput!) {
    subscribe(input: $input) {
      id
      ... on BasicMessage {
        data {
          __typename
          ... on ConfigurationMessageData {
            colorPalette {
              colors {
                hex
                index
              }
            }
            canvasConfigurations {
              index
              dx
              dy
            }
            canvasWidth
            canvasHeight
          }
        }
      }
    }
  }
`,
    Kc = yc`
  subscription replace($input: SubscribeInput!) {
    subscribe(input: $input) {
      id
      ... on BasicMessage {
        data {
          __typename
          ... on FullFrameMessageData {
            __typename
            name
            timestamp
          }
          ... on DiffFrameMessageData {
            __typename
            name
            currentTimestamp
            previousTimestamp
          }
        }
      }
    }
  }
`,
    Yc = "You are doing this too often",
    Jc = "Oops, something went wrong";
class Xc {
    handleApiError(e) {
        let t;
        return e.networkError ? "statusCode" in e.networkError && 401 === e.networkError.statusCode && (t = {
            type: pl.UnauthorizedError,
            message: e.message
        }) : e.graphQLErrors && (t = this.parseGraphQLErrors(e.graphQLErrors)), t || (dn(e), {
            type: pl.GenericError,
            message: e.message || Jc
        })
    }
    parseGraphQLErrors(e) {
        for (const t of e) {
            const e = this.parseGraphQLError(t);
            if (e) return e
        }
    }
    parseGraphQLError(e) {
        var t, n;
        if (null === (t = e.extensions) || void 0 === t ? void 0 : t.nextAvailablePixelTs) return {
            type: pl.PixelRateLimit,
            message: Yc,
            nextAvailablePixelTimestamp: e.extensions.nextAvailablePixelTs
        };
        if ("429: too many requests" === e.message) return {
            type: pl.SubscribeRateLimit,
            message: Yc
        };
        if (e.message) {
            const t = null === (n = e.message) || void 0 === n ? void 0 : n.match(/^ratelimit hit, next available: (\d+)$/),
                i = parseInt((null == t ? void 0 : t[1]) || "0");
            if (isFinite(i) && i > 0) return {
                type: pl.PixelRateLimit,
                message: Yc,
                nextAvailablePixelTimestamp: i
            }
        }
    }
}
var Zc;
! function(e) {
    e[e.Init = 0] = "Init", e[e.Error = 1] = "Error", e[e.Subscribed = 2] = "Subscribed", e[e.Unsubscribed = 3] = "Unsubscribed"
}(Zc || (Zc = {}));
class el extends Xc {
    constructor({
        canvasIndex: e,
        client: t,
        query: n,
        variables: i,
        onMessage: r
    }) {
        super(), this.state = Zc.Init, this.isRateLimited = !1, this.attempts = 0, this.onSubscribeNext = e => {
            var t;
            this.onMessage(null === (t = e.data) || void 0 === t ? void 0 : t.subscribe.data)
        }, this.subscribe = async () => (await this.waitIfRateLimited(), new Promise(((e, t) => {
            const {
                query: n,
                variables: i
            } = this, r = this.client.subscribe({
                query: n,
                variables: i
            }), o = null == r ? void 0 : r.subscribe((async t => {
                var n;
                this.isRateLimited = !1, this.attempts = 0, this.onMessage(null === (n = t.data) || void 0 === n ? void 0 : n.subscribe.data), e()
            }), (async n => {
                dn(`Received an error message for ${this.variables.input.channel.category}:${this.variables.input.channel.tag}`, {
                    err: n
                });
                const i = this.handleApiError(n);
                if (this.changeState(Zc.Error), i.type === pl.SubscribeRateLimit) {
                    this.isRateLimited = !0;
                    try {
                        await this.subscribe(), e()
                    } catch (n) {
                        t(n)
                    }
                }
            }));
            this.subscription = o, this.changeState(Zc.Subscribed), hn(`Subscribe to ${this.variables.input.channel.category} (index: ${this.canvasIndex})`)
        }))), this.canvasIndex = e, this.client = t, this.query = n, this.variables = {
            input: {
                channel: Object.assign({
                    teamOwner: "AFD2022"
                }, i)
            }
        }, this.onMessage = r, window.addEventListener("pagehide", (() => {
            this.rateLimitTimeout && clearTimeout(this.rateLimitTimeout)
        }))
    }
    changeState(e) {
        this.state !== e && (this.state = e)
    }
    waitIfRateLimited() {
        return this.isRateLimited ? this.attempts >= 6 ? (dn("Rate limited subscription exceeded max allowed attempts"), Promise.reject(new Error(Yc))) : new Promise((e => {
            const t = 1e3 * Math.exp(this.attempts++);
            this.rateLimitTimeout = window.setTimeout((() => {
                this.rateLimitTimeout = void 0, e()
            }), t)
        })) : Promise.resolve()
    }
    unsubscribe() {
        var e;
        null === (e = this.subscription) || void 0 === e || e.unsubscribe(), this.changeState(Zc.Unsubscribed), hn("Unsubscribe from", this.variables)
    }
}
class tl {
    constructor(e) {
        this.visibleCanvasIndexList = [], this.subscriptions = {
            config: void 0,
            canvas: new Map
        }, this.subscribeToConfigUpdates = async e => {
            if (this.unsubscribeFromConfigUpdates(), !this.client) return;
            const t = {
                canvasIndex: 0,
                client: this.client,
                query: Wc,
                variables: {
                    category: hl.Config
                },
                onMessage: t => e(t)
            };
            this.subscriptions.config = new el(t), await this.subscriptions.config.subscribe()
        }, this.subscribeToCanvasUpdates = async (e, t) => {
            if (this.unsubscribeFromCanvasUpdates(t.index), !this.client) return;
            const n = t.index;
            this.createCanvasSubscription(n, e), this.subscribeToVisibleCanvas(n)
        }, this.subscribeToVisibleCanvas = async e => {
            var t;
            this.visibleCanvasIndexList.includes(e) && await (null === (t = this.subscriptions.canvas.get(e)) || void 0 === t ? void 0 : t.subscribe())
        }, this.toggleVisibleCanvasListSubscription = e => {
            this.visibleCanvasIndexList.join() !== e.join() && (this.visibleCanvasIndexList = e, hn("Visibility changed (resubscribe canvases)", e), this.subscriptions.canvas.forEach((t => {
                const {
                    canvasIndex: n,
                    state: i
                } = t, {
                    Subscribed: r
                } = Zc, o = e.includes(n);
                o && i !== r ? t.subscribe() : o || i !== r || t.unsubscribe()
            })))
        }, this.client = e
    }
    resetClient(e) {
        this.client = e
    }
    unsubscribeFromConfigUpdates() {
        var e;
        null === (e = this.subscriptions.config) || void 0 === e || e.unsubscribe(), this.subscriptions.config = void 0
    }
    createCanvasSubscription(e, t) {
        const n = {
            canvasIndex: e,
            client: this.client,
            query: Kc,
            variables: {
                category: hl.Canvas,
                tag: e.toString()
            },
            onMessage: n => t(n, e)
        };
        this.subscriptions.canvas.set(e, new el(n))
    }
    unsubscribeFromCanvasUpdates(e) {
        var t;
        void 0 === e ? (this.subscriptions.canvas.forEach((e => e.unsubscribe())), this.subscriptions.canvas.clear()) : this.subscriptions.canvas.has(e) && (null === (t = this.subscriptions.canvas.get(e)) || void 0 === t || t.unsubscribe())
    }
}

function nl({
    x: e,
    y: t
}) {
    return {
        x: Math.round(Math.min(at.getState(), Math.max(0, e || 0))),
        y: Math.round(Math.min(st.getState(), Math.max(0, t || 0)))
    }
}

function il() {
    return nl({
        x: et.getState(),
        y: tt.getState()
    })
}

function rl() {
    const {
        x: e,
        y: t
    } = nl({
        x: et.getState(),
        y: tt.getState()
    });
    return {
        cx: e,
        cy: t,
        px: Math.floor(nt.getState())
    }
}

function ol(e, t, n, i) {
    const r = Math.abs(n - e),
        o = Math.abs(i - t);
    return Math.hypot(r, o)
}

function sl(e, t, n) {
    return e.reduce((({
        width: e,
        height: i
    }, {
        dx: r,
        dy: o
    }) => ({
        width: Math.max(e, r + t),
        height: Math.max(i, o + n)
    })), {
        width: 0,
        height: 0
    })
}

function al({
    x: e,
    y: t
}) {
    const n = ot.getState(),
        i = function(e, t, n) {
            return null == n ? void 0 : n.canvasConfigurations.find((i => e >= i.dx && e < i.dx + n.canvasWidth && t >= i.dy && t < i.dy + n.canvasHeight))
        }(e, t, n);
    if (i && n) return {
        x: e % n.canvasWidth,
        y: t % n.canvasHeight,
        index: i.index
    }
}

function cl({
    x: e,
    y: t
}) {
    const n = at.getState(),
        i = st.getState();
    return !n || !i || e < 0 || e >= n || t < 0 || t >= i
}

function ll(e, t) {
    return t ? t.canvasConfigurations.reduce(((n, i) => {
        const r = {
                x1: i.dx,
                y1: i.dy,
                x2: i.dx + t.canvasWidth - 1,
                y2: i.dy + t.canvasHeight - 1
            },
            o = Math.max(r.x1, e.x1),
            s = Math.min(r.x2, e.x2),
            a = Math.max(r.y1, e.y1),
            c = Math.min(r.y2, e.y2);
        var l, u, h, d;
        return c - a + 1 > 0 && s - o + 1 > 0 && n.push(Object.assign({
            canvasIndex: i.index
        }, (l = o % t.canvasWidth, u = a % t.canvasHeight, h = s % t.canvasWidth, d = c % t.canvasHeight, {
            topLeftCoordinate: {
                x: l,
                y: u
            },
            bottomRightCoordinate: {
                x: h,
                y: d
            }
        }))), n
    }), []) : []
}

function ul() {
    const e = lt.getState();
    if (2 === e.length) {
        const {
            x: t,
            y: n
        } = e[0], {
            x: i,
            y: r
        } = e[1];
        if (n > r || t > i) return !0
    }
    return !1
}
var hl, dl, pl;
! function(e) {
    e.Config = "CONFIG", e.Canvas = "CANVAS"
}(hl || (hl = {})),
function(e) {
    e.FullFrame = "FullFrameMessageData", e.DiffFrame = "DiffFrameMessageData", e.ConfigurationUpdate = "ConfigurationMessageData", e.PixelMessage = "PixelMessageData", e.SetPixelResponseMessage = "SetPixelResponseMessageData", e.SetRectangleAreaMessage = "SetRectangleAreaMessageData", e.GetUserCooldownResponseMessage = "GetUserCooldownResponseMessageData", e.PixelHistoryResponseMessage = "GetTileHistoryResponseMessageData"
}(dl || (dl = {})),
function(e) {
    e.GenericError = "GenericError", e.PixelRateLimit = "PixelRateLimitError", e.Success = "Success", e.UnauthorizedError = "UnauthorizedError", e.SubscribeRateLimit = "SubscribeRateLimitError"
}(pl || (pl = {}));
const fl = new class extends Xc {
    constructor() {
        super(), this.subscribeToConfigUpdates = async e => {
            var t;
            return null === (t = this.subscriptions) || void 0 === t ? void 0 : t.subscribeToConfigUpdates(e)
        }, this.subscribeToCanvasUpdates = async (e, t) => {
            var n;
            return null === (n = this.subscriptions) || void 0 === n ? void 0 : n.subscribeToCanvasUpdates(e, t)
        }, window.addEventListener("pagehide", (() => {
            this.destroy()
        }))
    }
    setAuthHeaders(e, t, n = !1) {
        this.headers = e, n ? this.createReadonlyClient() : (this.createClient(t), this.createSubscriptions())
    }
    createReadonlyClient() {
        this.destroy();
        const e = new Vo({
            uri: `https://${CLIENT_CONFIG.REALTIME_SERVICE_DOMAIN}/query`,
            headers: this.headers
        });
        this.client = new lc(Object.assign(Object.assign({}, Uc), {
            cache: new Ua,
            headers: this.headers,
            link: e
        }))
    }
    createClient(e) {
        this.destroy();
        const t = new Vo({
                uri: `https://${CLIENT_CONFIG.REALTIME_SERVICE_DOMAIN}/query`,
                headers: this.headers
            }),
            n = new Vc({
                uri: `wss://${CLIENT_CONFIG.REALTIME_SERVICE_DOMAIN}/query`,
                options: Object.assign(Object.assign({}, qc), {
                    connectionParams: this.headers,
                    connectionCallback: function(t) {
                        Array.isArray(t) && (t = t[0]), t ? "401: 401 Unauthorized" === t.message || "request is missing authentication data" === t.message ? e({
                            type: pl.UnauthorizedError,
                            message: t.message
                        }) : (dn("Failed to establish a websocket connection", t), e({
                            type: pl.GenericError,
                            message: t.message
                        })) : e({
                            type: pl.Success,
                            data: void 0
                        })
                    }
                })
            }),
            i = Mo((({
                query: e
            }) => {
                const t = br(e);
                return "OperationDefinition" === t.kind && "subscription" === t.operation
            }), n, t);
        this.client = new lc(Object.assign(Object.assign({}, Uc), {
            cache: new Ua,
            headers: this.headers,
            link: i
        }))
    }
    destroy() {
        var e;
        this.unsubscribeFromConfigUpdates(), this.unsubscribeFromCanvasUpdates(), null === (e = this.client) || void 0 === e || e.stop(), this.client = void 0
    }
    createSubscriptions() {
        var e, t;
        this.client && (this.subscriptions && (null === (e = this.subscriptions) || void 0 === e || e.unsubscribeFromConfigUpdates(), null === (t = this.subscriptions) || void 0 === t || t.unsubscribeFromCanvasUpdates()), this.subscriptions = new tl(this.client))
    }
    async makeRequest(e, t, n) {
        var i;
        try {
            const r = await (null === (i = this.client) || void 0 === i ? void 0 : i.mutate({
                mutation: e,
                variables: {
                    input: t
                }
            }));
            if (null == r ? void 0 : r.errors) {
                const e = this.parseGraphQLErrors(r.errors);
                return e || (dn(`Failed to fetch ${t.actionName}`, r.errors[0]), {
                    type: pl.GenericError,
                    message: Jc
                })
            }
            if (!(null == r ? void 0 : r.data)) return {
                type: pl.GenericError,
                message: Jc
            };
            const o = n(r.data);
            return {
                type: pl.Success,
                data: o
            }
        } catch (e) {
            return this.handleApiError(e)
        }
    }
    async setPixel(e) {
        const t = al(e);
        return t ? this.makeRequest(Bc, {
            actionName: "r/replace:set_pixel",
            PixelMessageData: {
                coordinate: {
                    x: t.x,
                    y: t.y
                },
                colorIndex: e.colorIndex,
                canvasIndex: t.index
            }
        }, (e => {
            let t = {};
            for (const n of e.act.data) n.data.__typename !== dl.SetPixelResponseMessage && n.data.__typename !== dl.GetUserCooldownResponseMessage || (t = Object.assign(Object.assign({}, t), n.data));
            return t
        })) : (dn("Set Pixel: Failed to convert pixel coordinates to canvas coordinates"), {
            type: pl.GenericError,
            message: Jc
        })
    }
    async setRect({
        topLeftCoordinate: e,
        bottomRightCoordinate: t,
        colorIndex: n,
        canvasIndex: i
    }) {
        return this.makeRequest(Gc, {
            actionName: "r/replace:set_rectangle_area",
            SetRectangleAreaMessageData: {
                topLeftCoordinate: e,
                bottomRightCoordinate: t,
                colorIndex: n,
                canvasIndex: i
            }
        }, (() => {}))
    }
    async getPixelHistory(e) {
        const t = al(e);
        return t ? this.makeRequest(Qc, {
            actionName: "r/replace:get_tile_history",
            PixelMessageData: {
                coordinate: {
                    x: t.x,
                    y: t.y
                },
                colorIndex: 0,
                canvasIndex: t.index
            }
        }, (e => {
            for (const t of e.act.data)
                if (t.data.__typename === dl.PixelHistoryResponseMessage) return t.data
        })) : (dn("Get Pixel History: Failed to convert pixel coordinates to canvas coordinates"), {
            type: pl.GenericError,
            message: Jc
        })
    }
    async getUserCooldown() {
        return this.makeRequest(Hc, {
            actionName: "r/replace:get_user_cooldown"
        }, (e => {
            for (const t of e.act.data)
                if (t.data.__typename === dl.GetUserCooldownResponseMessage) return t.data
        }))
    }
    async fetchUserData() {
        try {
            const e = await fetch("/svc/mona-lisa/get-user-data", {
                method: "GET",
                headers: Object.assign(Object.assign({}, this.headers), {
                    "content-type": "application/json"
                })
            });
            return 401 === e.status ? {
                type: pl.UnauthorizedError,
                message: Jc
            } : 200 !== e.status ? (dn(`Failed to fetch user data: ${e.status} ${e.statusText}`), {
                type: pl.GenericError,
                message: Jc
            }) : {
                type: pl.Success,
                data: await e.json()
            }
        } catch (e) {
            return dn("Failed to fetch user data", e), {
                type: pl.GenericError,
                message: Jc
            }
        }
    }
    unsubscribeFromConfigUpdates() {
        var e;
        null === (e = this.subscriptions) || void 0 === e || e.unsubscribeFromConfigUpdates()
    }
    unsubscribeFromCanvasUpdates(e) {
        var t;
        null === (t = this.subscriptions) || void 0 === t || t.unsubscribeFromCanvasUpdates(e)
    }
    toggleVisibleCanvasListSubscription(e) {
        var t;
        null === (t = this.subscriptions) || void 0 === t || t.toggleVisibleCanvasListSubscription(e)
    }
};
var vl;
! function(e) {
    e.CLOSE_PALLETTE = "close-pallette", e.COOLDOWN_END = "cooldown-end", e.COOLDOWN_START = "cooldown-start", e.HIGHLIGHT = "highlight", e.INVALID = "invalid", e.SELECT_COLOR = "select-color"
}(vl || (vl = {}));
const ml = e => t => {
        Object.values(e).forEach((e => {
            e.muted = t
        }))
    },
    yl = (() => {
        const e = {};
        return Object.values(vl).forEach((t => {
            const n = new Audio;
            n.src = `${CLIENT_CONFIG.MEDIA_STORAGE_BASE_URL}interactions/${t}.mp3`, n.loop = !1, n.controls = !0, e[t] = n
        })), ml(e)(!1), e
    })();

function gl(e) {
    return !!CLIENT_CONFIG.REDDIT_DOMAINS.find((t => e.endsWith(t)))
}

function bl(e) {
    return new Promise(((t, n) => {
        const i = document.createElement("img");
        i.crossOrigin = "anonymous", i.onerror = n, i.onload = () => t(i), i.src = e
    }))
}
const wl = Symbol("mixins/with-app-link");
var xl;
! function(e) {
    e.Active = "Active", e.Idle = "Idle", e.Hidden = "Hidden"
}(xl || (xl = {}));
const _l = Symbol("mixins/with-app-link");
const El = Symbol("mixins/with-app-link");
const Sl = Symbol("mixins/with-app-link");
var kl = function(e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    },
    Tl = function(e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
                var n = new PerformanceObserver((function(e) {
                    return e.getEntries().map(t)
                }));
                return n.observe({
                    type: e,
                    buffered: !0
                }), n
            }
        } catch (e) {}
    },
    Cl = function(e, t) {
        var n = function n(i) {
            "pagehide" !== i.type && "hidden" !== document.visibilityState || (e(i), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
        };
        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
    },
    Ol = function(e) {
        addEventListener("pageshow", (function(t) {
            t.persisted && e(t)
        }), !0)
    },
    Al = function(e, t, n) {
        var i;
        return function(r) {
            t.value >= 0 && (r || n) && (t.delta = t.value - (i || 0), (t.delta || void 0 === i) && (i = t.value, e(t)))
        }
    },
    Il = -1,
    Ml = function() {
        Cl((function(e) {
            var t = e.timeStamp;
            Il = t
        }), !0)
    },
    Pl = function() {
        return Il < 0 && ((Il = window.webVitals.firstHiddenTime) === 1 / 0 && Ml(), Ol((function() {
            setTimeout((function() {
                Il = "hidden" === document.visibilityState ? 0 : 1 / 0, Ml()
            }), 0)
        }))), {
            get firstHiddenTime() {
                return Il
            }
        }
    },
    Dl = function(e, t) {
        var n, i = Pl(),
            r = kl("FCP"),
            o = function(e) {
                "first-contentful-paint" === e.name && (a && a.disconnect(), e.startTime < i.firstHiddenTime && (r.value = e.startTime, r.entries.push(e), n(!0)))
            },
            s = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
            a = s ? null : Tl("paint", o);
        (s || a) && (n = Al(e, r, t), s && o(s), Ol((function(i) {
            r = kl("FCP"), n = Al(e, r, t), requestAnimationFrame((function() {
                requestAnimationFrame((function() {
                    r.value = performance.now() - i.timeStamp, n(!0)
                }))
            }))
        })))
    },
    Nl = !1,
    Rl = -1,
    Ll = {};
const Fl = [{
    dpi: 3,
    height: 926,
    width: 428,
    version: "iphone 12 Pro Max",
    yearClass: 2020
}, {
    dpi: 3,
    height: 896,
    width: 414,
    version: "iphone 11 Pro Max",
    yearClass: 2019
}, {
    dpi: 3,
    height: 844,
    width: 390,
    version: "iphone 12",
    yearClass: 2020
}, {
    dpi: 3,
    height: 812,
    width: 375,
    version: "iphone 7",
    yearClass: 2016
}, {
    dpi: 3,
    height: 736,
    width: 414,
    version: "iphone 8 Plus",
    yearClass: 2017
}, {
    dpi: 2,
    height: 896,
    width: 414,
    version: "iphone 11",
    yearClass: 2019
}, {
    dpi: 2,
    height: 667,
    width: 375,
    version: "iphone SE 2nd Gen",
    yearClass: 2020
}, {
    dpi: 2,
    height: 568,
    width: 320,
    version: "iphone 5S",
    yearClass: 2013
}, {
    dpi: 2,
    height: 480,
    width: 320,
    version: "iphone 4S",
    yearClass: 2011
}];

function jl() {
    const e = function() {
        if (!window.screen || !window.devicePixelRatio) return;
        const {
            height: e,
            width: t
        } = window.screen, n = window.devicePixelRatio;
        return Fl.find((i => n === i.dpi && e === i.height && t === i.width))
    }();
    if (e) return {
        deviceName: e.version.toLowerCase().replace(" ", "-"),
        yearClass: e.yearClass
    }
}
class $l {
    constructor() {
        let e, t;
        this.promise = new Promise(((n, i) => {
            e = n, t = i
        })), this.resolve = e, this.reject = t
    }
}
const zl = () => {
    const e = window.performance.getEntriesByType("navigation")[0];
    return e && e.responseEnd - e.responseStart < 8
};
class Vl {
    constructor(e) {
        this._custom = {}, this._metrics = {}, this._isCached = !1, this.remeasureForBFCacheRestore = e => {
            const t = {
                metrics: {},
                meta: {},
                cache_restore: !0
            };
            Object.keys(this._metrics).forEach((e => {
                this.isKeyCustomMetric(e) || this._metrics[e] && (t.metrics[e] = 0)
            })), Object.keys(t.metrics).length && requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                    const n = performance.now() - e.timeStamp;
                    Object.keys(t.metrics).forEach((e => {
                        t.metrics[e] = n
                    })), this.notifyAndSendMetrics(t)
                }))
            }))
        }, this._callback = e
    }
    async connect() {
        const {
            isCached: e,
            unsubscribe: t
        } = await (e => {
            const t = t => {
                t.persisted && e(t)
            };
            window.addEventListener("pageshow", t, !0);
            const n = new $l;
            return n.resolve({
                isCached: zl(),
                unsubscribe: () => {
                    window.removeEventListener("pageshow", t)
                }
            }), n.promise
        })(this.remeasureForBFCacheRestore);
        this._unsubscribeFromCacheRestore = t, this._isCached = e, this.gatherThenSendMetrics();
        Object.keys(this._metrics).some((e => !this.isKeyCustomMetric(e) && !this._metrics[e])) && this.registerPerfObserver()
    }
    disconnect() {
        var e, t;
        null === (e = this._observer) || void 0 === e || e.disconnect(), null === (t = this._unsubscribeFromCacheRestore) || void 0 === t || t.call(this)
    }
    gatherThenSendMetrics() {
        const e = this.gatherMetrics();
        this.notifyAndSendMetrics(e)
    }
    notifyAndSendMetrics(e) {
        Object.keys(e.metrics).length && this._callback(e)
    }
    isKeyCustomMetric(e) {
        return Object.prototype.hasOwnProperty.call(this._custom, e)
    }
    gatherMetrics() {
        const e = {
            metrics: {},
            meta: {}
        };
        return this._isCached && (e.cache_restore = !0), Object.keys(this._metrics).forEach((t => {
            if (this._metrics[t]) return;
            if (this.isKeyCustomMetric(t)) {
                const n = this._custom[t];
                n > -1 && (e.metrics[t] = n, this._metrics[t] = !0)
            }
            performance.getEntriesByName(t, "mark").length && performance.measure(t, "fetchStart", t);
            const n = performance.getEntriesByName(t, "measure");
            if (n.length) {
                const {
                    duration: i
                } = n[0];
                e.metrics[t] = Math.ceil(i), this._metrics[t] = !0
            }
        })), e
    }
    registerPerfObserver() {
        this._observer = new PerformanceObserver((e => {
            e.getEntries().some((e => !!e.name && !this._metrics[e.name])) && this.gatherThenSendMetrics()
        })), this._observer.observe({
            entryTypes: ["mark"]
        })
    }
    registerPerfMetric(e) {
        this._metrics[e] = !1
    }
    registerCustomMetric(e) {
        return this._custom[e] = -1, this.registerPerfMetric(e), t => {
            this._custom[e] = t, this.gatherThenSendMetrics()
        }
    }
    getCustomMetricValue(e) {
        return this._custom[e]
    }
}
var ql;
! function(e) {
    e.CLS = "cumulative-layout-shift", e.FID = "first-input-delay", e.LCP = "longest-contentful-paint", e.TTFB = "time-to-first-byte"
}(ql || (ql = {}));
let Ul = class extends Ae {
    constructor() {
        super(...arguments), this._perfMetrics = new Vl((e => {
            var t;
            const n = null === (t = jl()) || void 0 === t ? void 0 : t.yearClass,
                i = Object.assign(Object.assign({}, e), {
                    meta: Object.assign(Object.assign({}, e.meta), n && {
                        yearClass: n
                    })
                }),
                r = g("faceplate-request", {
                    resource: this.endpoint,
                    request: {
                        body: i
                    }
                });
            if (this.dispatchEvent(r), r.defaultPrevented) return;
            const o = JSON.stringify(r.detail.request.body);
            navigator.sendBeacon(this.endpoint, o)
        })), this.endpoint = ""
    }
    render() {
        return le` <slot hidden></slot> `
    }
    firstUpdated() {
        if (this.endpoint) {
            if (this._slottedContent)
                for (const e of this._slottedContent) e instanceof HTMLDataElement && this.parseDataElement(e);
            ! function(e, t) {
                Nl || (Dl((function(e) {
                    Rl = e.value
                })), Nl = !0);
                var n, i = function(t) {
                        Rl > -1 && e(t)
                    },
                    r = kl("CLS", 0),
                    o = 0,
                    s = [],
                    a = function(e) {
                        if (!e.hadRecentInput) {
                            var t = s[0],
                                i = s[s.length - 1];
                            o && e.startTime - i.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += e.value, s.push(e)) : (o = e.value, s = [e]), o > r.value && (r.value = o, r.entries = s, n())
                        }
                    },
                    c = Tl("layout-shift", a);
                c && (n = Al(i, r, t), Cl((function() {
                    c.takeRecords().map(a), n(!0)
                })), Ol((function() {
                    o = 0, Rl = -1, r = kl("CLS", 0), n = Al(i, r, t)
                })))
            }(this.onWebVitalMeasured(ql.CLS, (e => e))),
            function(e, t) {
                var n, i = Pl(),
                    r = kl("FID"),
                    o = function(e) {
                        e.startTime < i.firstHiddenTime && (r.value = e.processingStart - e.startTime, r.entries.push(e), n(!0))
                    },
                    s = Tl("first-input", o);
                n = Al(e, r, t), s && Cl((function() {
                    s.takeRecords().map(o), s.disconnect()
                }), !0), s || window.webVitals.firstInputPolyfill(o), Ol((function() {
                    r = kl("FID"), n = Al(e, r, t), window.webVitals.resetFirstInputPolyfill(), window.webVitals.firstInputPolyfill(o)
                }))
            }(this.onWebVitalMeasured(ql.FID, Math.ceil)),
            function(e, t) {
                var n, i = Pl(),
                    r = kl("LCP"),
                    o = function(e) {
                        var t = e.startTime;
                        t < i.firstHiddenTime && (r.value = t, r.entries.push(e), n())
                    },
                    s = Tl("largest-contentful-paint", o);
                if (s) {
                    n = Al(e, r, t);
                    var a = function() {
                        Ll[r.id] || (s.takeRecords().map(o), s.disconnect(), Ll[r.id] = !0, n(!0))
                    };
                    ["keydown", "click"].forEach((function(e) {
                        addEventListener(e, a, {
                            once: !0,
                            capture: !0
                        })
                    })), Cl(a, !0), Ol((function(i) {
                        r = kl("LCP"), n = Al(e, r, t), requestAnimationFrame((function() {
                            requestAnimationFrame((function() {
                                r.value = performance.now() - i.timeStamp, Ll[r.id] = !0, n(!0)
                            }))
                        }))
                    }))
                }
            }(this.onWebVitalMeasured(ql.LCP, Math.ceil)),
            function(e) {
                var t, n = kl("TTFB");
                t = function() {
                    try {
                        var t = performance.getEntriesByType("navigation")[0] || function() {
                            var e = performance.timing,
                                t = {
                                    entryType: "navigation",
                                    startTime: 0
                                };
                            for (var n in e) "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                            return t
                        }();
                        if (n.value = n.delta = t.responseStart, n.value < 0 || n.value > performance.now()) return;
                        n.entries = [t], e(n)
                    } catch (t) {}
                }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("load", (function() {
                    return setTimeout(t, 0)
                }))
            }(this.onWebVitalMeasured(ql.TTFB, Math.ceil)), this._perfMetrics.connect()
        } else console.error("faceplate-perfmetric-collector: no endpoint specified")
    }
    onWebVitalMeasured(e, t) {
        const n = this._perfMetrics.registerCustomMetric(e);
        return i => {
            -1 === i.value || this._perfMetrics.getCustomMetricValue(e) > -1 || n(t(i.value))
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._perfMetrics.disconnect()
    }
    parseDataElement(e) {
        const t = e.value;
        this._perfMetrics.registerPerfMetric(t)
    }
};
r([function(e, t, n) {
    let i, r = e;
    return "object" == typeof e ? (r = e.slot, i = e) : i = {
        flatten: t
    }, n ? m({
        slot: r,
        flatten: t,
        selector: n
    }) : d({
        descriptor: e => ({
            get() {
                var e, t;
                const n = "slot" + (r ? `[name=${r}]` : ":not([name])"),
                    o = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(n);
                return null !== (t = null == o ? void 0 : o.assignedNodes(i)) && void 0 !== t ? t : []
            },
            enumerable: !0,
            configurable: !0
        })
    })
}()], Ul.prototype, "_slottedContent", void 0), r([u({
    type: String
})], Ul.prototype, "endpoint", void 0), Ul = r([c("faceplate-perfmetric-collector")], Ul), rn("icon-edit", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M18.25 3.159L16.841 1.75a2.634 2.634 0 00-3.692-.021L1.214 13.405a1.135 1.135 0 00-.339.805V18A1.127 1.127 0 002 19.125h3.79a1.134 1.134 0 00.8-.338L18.271 6.851a2.634 2.634 0 00-.021-3.692zM5.79 17.875H2.124L2.087 14.3l9.771-9.559 3.4 3.406zm11.587-11.9l-1.241 1.277-3.385-3.385 1.272-1.244a1.381 1.381 0 011.934.011l1.409 1.409a1.381 1.381 0 01.011 1.934z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M10.8 4.029l-9.586 9.376a1.135 1.135 0 00-.339.805V18A1.127 1.127 0 002 19.125h3.79a1.134 1.134 0 00.8-.338L15.971 9.2zM18.25 3.159L16.841 1.75a2.634 2.634 0 00-3.692-.021l-1.457 1.426 5.153 5.153 1.426-1.457a2.634 2.634 0 00-.021-3.692z"/></svg>`);
let Bl = class extends Ae {
    static get styles() {
        return R`:host{position:absolute;z-index:1;left:16px;top:50%;transform:translateY(-50%)}icon-edit{display:inline-flex}`
    }
    constructor() {
        super(), dt(this, ct)
    }
    toggleErase() {
        this.dispatchEvent(g("toggle-admin-erase-tool"))
    }
    render() {
        return le` <mona-lisa-icon-button @click="${this.toggleErase}" .selected="${ct.getState()}"> <icon-edit></icon-edit> </mona-lisa-icon-button>`
    }
};
Bl = r([c("mona-lisa-admin-controls")], Bl);
var Ql = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0
    },
    Hl = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0
    },
    Gl = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
    Wl = {
        CSS: {},
        springs: {}
    };

function Kl(e, t, n) {
    return Math.min(Math.max(e, t), n)
}

function Yl(e, t) {
    return e.indexOf(t) > -1
}

function Jl(e, t) {
    return e.apply(null, t)
}
var Xl = {
    arr: function(e) {
        return Array.isArray(e)
    },
    obj: function(e) {
        return Yl(Object.prototype.toString.call(e), "Object")
    },
    pth: function(e) {
        return Xl.obj(e) && e.hasOwnProperty("totalLength")
    },
    svg: function(e) {
        return e instanceof SVGElement
    },
    inp: function(e) {
        return e instanceof HTMLInputElement
    },
    dom: function(e) {
        return e.nodeType || Xl.svg(e)
    },
    str: function(e) {
        return "string" == typeof e
    },
    fnc: function(e) {
        return "function" == typeof e
    },
    und: function(e) {
        return void 0 === e
    },
    nil: function(e) {
        return Xl.und(e) || null === e
    },
    hex: function(e) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
    },
    rgb: function(e) {
        return /^rgb/.test(e)
    },
    hsl: function(e) {
        return /^hsl/.test(e)
    },
    col: function(e) {
        return Xl.hex(e) || Xl.rgb(e) || Xl.hsl(e)
    },
    key: function(e) {
        return !Ql.hasOwnProperty(e) && !Hl.hasOwnProperty(e) && "targets" !== e && "keyframes" !== e
    }
};

function Zl(e) {
    var t = /\(([^)]+)\)/.exec(e);
    return t ? t[1].split(",").map((function(e) {
        return parseFloat(e)
    })) : []
}

function eu(e, t) {
    var n = Zl(e),
        i = Kl(Xl.und(n[0]) ? 1 : n[0], .1, 100),
        r = Kl(Xl.und(n[1]) ? 100 : n[1], .1, 100),
        o = Kl(Xl.und(n[2]) ? 10 : n[2], .1, 100),
        s = Kl(Xl.und(n[3]) ? 0 : n[3], .1, 100),
        a = Math.sqrt(r / i),
        c = o / (2 * Math.sqrt(r * i)),
        l = c < 1 ? a * Math.sqrt(1 - c * c) : 0,
        u = c < 1 ? (c * a - s) / l : -s + a;

    function h(e) {
        var n = t ? t * e / 1e3 : e;
        return n = c < 1 ? Math.exp(-n * c * a) * (1 * Math.cos(l * n) + u * Math.sin(l * n)) : (1 + u * n) * Math.exp(-n * a), 0 === e || 1 === e ? e : 1 - n
    }
    return t ? h : function() {
        var t = Wl.springs[e];
        if (t) return t;
        for (var n = 1 / 6, i = 0, r = 0;;)
            if (1 === h(i += n)) {
                if (++r >= 16) break
            } else r = 0;
        var o = i * n * 1e3;
        return Wl.springs[e] = o, o
    }
}

function tu(e) {
    return void 0 === e && (e = 10),
        function(t) {
            return Math.ceil(Kl(t, 1e-6, 1) * e) * (1 / e)
        }
}
var nu, iu, ru = function() {
        var e = .1;

        function t(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function n(e, t) {
            return 3 * t - 6 * e
        }

        function i(e) {
            return 3 * e
        }

        function r(e, r, o) {
            return ((t(r, o) * e + n(r, o)) * e + i(r)) * e
        }

        function o(e, r, o) {
            return 3 * t(r, o) * e * e + 2 * n(r, o) * e + i(r)
        }
        return function(t, n, i, s) {
            if (0 <= t && t <= 1 && 0 <= i && i <= 1) {
                var a = new Float32Array(11);
                if (t !== n || i !== s)
                    for (var c = 0; c < 11; ++c) a[c] = r(c * e, t, i);
                return function(e) {
                    return t === n && i === s || 0 === e || 1 === e ? e : r(l(e), n, s)
                }
            }

            function l(n) {
                for (var s = 0, c = 1; 10 !== c && a[c] <= n; ++c) s += e;
                --c;
                var l = s + (n - a[c]) / (a[c + 1] - a[c]) * e,
                    u = o(l, t, i);
                return u >= .001 ? function(e, t, n, i) {
                    for (var s = 0; s < 4; ++s) {
                        var a = o(t, n, i);
                        if (0 === a) return t;
                        t -= (r(t, n, i) - e) / a
                    }
                    return t
                }(n, l, t, i) : 0 === u ? l : function(e, t, n, i, o) {
                    var s, a, c = 0;
                    do {
                        (s = r(a = t + (n - t) / 2, i, o) - e) > 0 ? n = a : t = a
                    } while (Math.abs(s) > 1e-7 && ++c < 10);
                    return a
                }(n, s, s + e, t, i)
            }
        }
    }(),
    ou = (nu = {
        linear: function() {
            return function(e) {
                return e
            }
        }
    }, iu = {
        Sine: function() {
            return function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }
        },
        Circ: function() {
            return function(e) {
                return 1 - Math.sqrt(1 - e * e)
            }
        },
        Back: function() {
            return function(e) {
                return e * e * (3 * e - 2)
            }
        },
        Bounce: function() {
            return function(e) {
                for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        },
        Elastic: function(e, t) {
            void 0 === e && (e = 1), void 0 === t && (t = .5);
            var n = Kl(e, 1, 10),
                i = Kl(t, .1, 2);
            return function(e) {
                return 0 === e || 1 === e ? e : -n * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1 - i / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / i)
            }
        }
    }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach((function(e, t) {
        iu[e] = function() {
            return function(e) {
                return Math.pow(e, t + 2)
            }
        }
    })), Object.keys(iu).forEach((function(e) {
        var t = iu[e];
        nu["easeIn" + e] = t, nu["easeOut" + e] = function(e, n) {
            return function(i) {
                return 1 - t(e, n)(1 - i)
            }
        }, nu["easeInOut" + e] = function(e, n) {
            return function(i) {
                return i < .5 ? t(e, n)(2 * i) / 2 : 1 - t(e, n)(-2 * i + 2) / 2
            }
        }, nu["easeOutIn" + e] = function(e, n) {
            return function(i) {
                return i < .5 ? (1 - t(e, n)(1 - 2 * i)) / 2 : (t(e, n)(2 * i - 1) + 1) / 2
            }
        }
    })), nu);

function su(e, t) {
    if (Xl.fnc(e)) return e;
    var n = e.split("(")[0],
        i = ou[n],
        r = Zl(e);
    switch (n) {
        case "spring":
            return eu(e, t);
        case "cubicBezier":
            return Jl(ru, r);
        case "steps":
            return Jl(tu, r);
        default:
            return Jl(i, r)
    }
}

function au(e) {
    try {
        return document.querySelectorAll(e)
    } catch (e) {
        return
    }
}

function cu(e, t) {
    for (var n = e.length, i = arguments.length >= 2 ? arguments[1] : void 0, r = [], o = 0; o < n; o++)
        if (o in e) {
            var s = e[o];
            t.call(i, s, o, e) && r.push(s)
        } return r
}

function lu(e) {
    return e.reduce((function(e, t) {
        return e.concat(Xl.arr(t) ? lu(t) : t)
    }), [])
}

function uu(e) {
    return Xl.arr(e) ? e : (Xl.str(e) && (e = au(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
}

function hu(e, t) {
    return e.some((function(e) {
        return e === t
    }))
}

function du(e) {
    var t = {};
    for (var n in e) t[n] = e[n];
    return t
}

function pu(e, t) {
    var n = du(e);
    for (var i in e) n[i] = t.hasOwnProperty(i) ? t[i] : e[i];
    return n
}

function fu(e, t) {
    var n = du(e);
    for (var i in t) n[i] = Xl.und(e[i]) ? t[i] : e[i];
    return n
}

function vu(e) {
    return Xl.rgb(e) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t = e)) ? "rgba(" + n[1] + ",1)" : t : Xl.hex(e) ? function(e) {
        var t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, n, i) {
                return t + t + n + n + i + i
            })),
            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return "rgba(" + parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + ",1)"
    }(e) : Xl.hsl(e) ? function(e) {
        var t, n, i, r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
            o = parseInt(r[1], 10) / 360,
            s = parseInt(r[2], 10) / 100,
            a = parseInt(r[3], 10) / 100,
            c = r[4] || 1;

        function l(e, t, n) {
            return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        if (0 == s) t = n = i = a;
        else {
            var u = a < .5 ? a * (1 + s) : a + s - a * s,
                h = 2 * a - u;
            t = l(h, u, o + 1 / 3), n = l(h, u, o), i = l(h, u, o - 1 / 3)
        }
        return "rgba(" + 255 * t + "," + 255 * n + "," + 255 * i + "," + c + ")"
    }(e) : void 0;
    var t, n
}

function mu(e) {
    var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
    if (t) return t[1]
}

function yu(e, t) {
    return Xl.fnc(e) ? e(t.target, t.id, t.total) : e
}

function gu(e, t) {
    return e.getAttribute(t)
}

function bu(e, t, n) {
    if (hu([n, "deg", "rad", "turn"], mu(t))) return t;
    var i = Wl.CSS[t + n];
    if (!Xl.und(i)) return i;
    var r = document.createElement(e.tagName),
        o = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
    o.appendChild(r), r.style.position = "absolute", r.style.width = 100 + n;
    var s = 100 / r.offsetWidth;
    o.removeChild(r);
    var a = s * parseFloat(t);
    return Wl.CSS[t + n] = a, a
}

function wu(e, t, n) {
    if (t in e.style) {
        var i = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            r = e.style[t] || getComputedStyle(e).getPropertyValue(i) || "0";
        return n ? bu(e, r, n) : r
    }
}

function xu(e, t) {
    return Xl.dom(e) && !Xl.inp(e) && (!Xl.nil(gu(e, t)) || Xl.svg(e) && e[t]) ? "attribute" : Xl.dom(e) && hu(Gl, t) ? "transform" : Xl.dom(e) && "transform" !== t && wu(e, t) ? "css" : null != e[t] ? "object" : void 0
}

function _u(e) {
    if (Xl.dom(e)) {
        for (var t, n = e.style.transform || "", i = /(\w+)\(([^)]*)\)/g, r = new Map; t = i.exec(n);) r.set(t[1], t[2]);
        return r
    }
}

function Eu(e, t, n, i) {
    var r = Yl(t, "scale") ? 1 : 0 + function(e) {
            return Yl(e, "translate") || "perspective" === e ? "px" : Yl(e, "rotate") || Yl(e, "skew") ? "deg" : void 0
        }(t),
        o = _u(e).get(t) || r;
    return n && (n.transforms.list.set(t, o), n.transforms.last = t), i ? bu(e, o, i) : o
}

function Su(e, t, n, i) {
    switch (xu(e, t)) {
        case "transform":
            return Eu(e, t, i, n);
        case "css":
            return wu(e, t, n);
        case "attribute":
            return gu(e, t);
        default:
            return e[t] || 0
    }
}

function ku(e, t) {
    var n = /^(\*=|\+=|-=)/.exec(e);
    if (!n) return e;
    var i = mu(e) || 0,
        r = parseFloat(t),
        o = parseFloat(e.replace(n[0], ""));
    switch (n[0][0]) {
        case "+":
            return r + o + i;
        case "-":
            return r - o + i;
        case "*":
            return r * o + i
    }
}

function Tu(e, t) {
    if (Xl.col(e)) return vu(e);
    if (/\s/g.test(e)) return e;
    var n = mu(e),
        i = n ? e.substr(0, e.length - n.length) : e;
    return t ? i + t : i
}

function Cu(e, t) {
    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}

function Ou(e) {
    for (var t, n = e.points, i = 0, r = 0; r < n.numberOfItems; r++) {
        var o = n.getItem(r);
        r > 0 && (i += Cu(t, o)), t = o
    }
    return i
}

function Au(e) {
    if (e.getTotalLength) return e.getTotalLength();
    switch (e.tagName.toLowerCase()) {
        case "circle":
            return function(e) {
                return 2 * Math.PI * gu(e, "r")
            }(e);
        case "rect":
            return function(e) {
                return 2 * gu(e, "width") + 2 * gu(e, "height")
            }(e);
        case "line":
            return function(e) {
                return Cu({
                    x: gu(e, "x1"),
                    y: gu(e, "y1")
                }, {
                    x: gu(e, "x2"),
                    y: gu(e, "y2")
                })
            }(e);
        case "polyline":
            return Ou(e);
        case "polygon":
            return function(e) {
                var t = e.points;
                return Ou(e) + Cu(t.getItem(t.numberOfItems - 1), t.getItem(0))
            }(e)
    }
}

function Iu(e, t) {
    var n = t || {},
        i = n.el || function(e) {
            for (var t = e.parentNode; Xl.svg(t) && Xl.svg(t.parentNode);) t = t.parentNode;
            return t
        }(e),
        r = i.getBoundingClientRect(),
        o = gu(i, "viewBox"),
        s = r.width,
        a = r.height,
        c = n.viewBox || (o ? o.split(" ") : [0, 0, s, a]);
    return {
        el: i,
        viewBox: c,
        x: c[0] / 1,
        y: c[1] / 1,
        w: s,
        h: a,
        vW: c[2],
        vH: c[3]
    }
}

function Mu(e, t, n) {
    function i(n) {
        void 0 === n && (n = 0);
        var i = t + n >= 1 ? t + n : 0;
        return e.el.getPointAtLength(i)
    }
    var r = Iu(e.el, e.svg),
        o = i(),
        s = i(-1),
        a = i(1),
        c = n ? 1 : r.w / r.vW,
        l = n ? 1 : r.h / r.vH;
    switch (e.property) {
        case "x":
            return (o.x - r.x) * c;
        case "y":
            return (o.y - r.y) * l;
        case "angle":
            return 180 * Math.atan2(a.y - s.y, a.x - s.x) / Math.PI
    }
}

function Pu(e, t) {
    var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        i = Tu(Xl.pth(e) ? e.totalLength : e, t) + "";
    return {
        original: i,
        numbers: i.match(n) ? i.match(n).map(Number) : [0],
        strings: Xl.str(e) || t ? i.split(n) : []
    }
}

function Du(e) {
    return cu(e ? lu(Xl.arr(e) ? e.map(uu) : uu(e)) : [], (function(e, t, n) {
        return n.indexOf(e) === t
    }))
}

function Nu(e) {
    var t = Du(e);
    return t.map((function(e, n) {
        return {
            target: e,
            id: n,
            total: t.length,
            transforms: {
                list: _u(e)
            }
        }
    }))
}

function Ru(e, t) {
    var n = du(t);
    if (/^spring/.test(n.easing) && (n.duration = eu(n.easing)), Xl.arr(e)) {
        var i = e.length;
        2 === i && !Xl.obj(e[0]) ? e = {
            value: e
        } : Xl.fnc(t.duration) || (n.duration = t.duration / i)
    }
    var r = Xl.arr(e) ? e : [e];
    return r.map((function(e, n) {
        var i = Xl.obj(e) && !Xl.pth(e) ? e : {
            value: e
        };
        return Xl.und(i.delay) && (i.delay = n ? 0 : t.delay), Xl.und(i.endDelay) && (i.endDelay = n === r.length - 1 ? t.endDelay : 0), i
    })).map((function(e) {
        return fu(e, n)
    }))
}

function Lu(e, t) {
    var n = [],
        i = t.keyframes;
    for (var r in i && (t = fu(function(e) {
            for (var t = cu(lu(e.map((function(e) {
                    return Object.keys(e)
                }))), (function(e) {
                    return Xl.key(e)
                })).reduce((function(e, t) {
                    return e.indexOf(t) < 0 && e.push(t), e
                }), []), n = {}, i = function(i) {
                    var r = t[i];
                    n[r] = e.map((function(e) {
                        var t = {};
                        for (var n in e) Xl.key(n) ? n == r && (t.value = e[n]) : t[n] = e[n];
                        return t
                    }))
                }, r = 0; r < t.length; r++) i(r);
            return n
        }(i), t)), t) Xl.key(r) && n.push({
        name: r,
        tweens: Ru(t[r], e)
    });
    return n
}

function Fu(e, t) {
    var n;
    return e.tweens.map((function(i) {
        var r = function(e, t) {
                var n = {};
                for (var i in e) {
                    var r = yu(e[i], t);
                    Xl.arr(r) && (r = r.map((function(e) {
                        return yu(e, t)
                    })), 1 === r.length && (r = r[0])), n[i] = r
                }
                return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
            }(i, t),
            o = r.value,
            s = Xl.arr(o) ? o[1] : o,
            a = mu(s),
            c = Su(t.target, e.name, a, t),
            l = n ? n.to.original : c,
            u = Xl.arr(o) ? o[0] : l,
            h = mu(u) || mu(c),
            d = a || h;
        return Xl.und(s) && (s = l), r.from = Pu(u, d), r.to = Pu(ku(s, u), d), r.start = n ? n.end : 0, r.end = r.start + r.delay + r.duration + r.endDelay, r.easing = su(r.easing, r.duration), r.isPath = Xl.pth(o), r.isPathTargetInsideSVG = r.isPath && Xl.svg(t.target), r.isColor = Xl.col(r.from.original), r.isColor && (r.round = 1), n = r, r
    }))
}
var ju = {
    css: function(e, t, n) {
        return e.style[t] = n
    },
    attribute: function(e, t, n) {
        return e.setAttribute(t, n)
    },
    object: function(e, t, n) {
        return e[t] = n
    },
    transform: function(e, t, n, i, r) {
        if (i.list.set(t, n), t === i.last || r) {
            var o = "";
            i.list.forEach((function(e, t) {
                o += t + "(" + e + ") "
            })), e.style.transform = o
        }
    }
};

function $u(e, t) {
    Nu(e).forEach((function(e) {
        for (var n in t) {
            var i = yu(t[n], e),
                r = e.target,
                o = mu(i),
                s = Su(r, n, o, e),
                a = ku(Tu(i, o || mu(s)), s),
                c = xu(r, n);
            ju[c](r, n, a, e.transforms, !0)
        }
    }))
}

function zu(e, t) {
    return cu(lu(e.map((function(e) {
        return t.map((function(t) {
            return function(e, t) {
                var n = xu(e.target, t.name);
                if (n) {
                    var i = Fu(t, e),
                        r = i[i.length - 1];
                    return {
                        type: n,
                        property: t.name,
                        animatable: e,
                        tweens: i,
                        duration: r.end,
                        delay: i[0].delay,
                        endDelay: r.endDelay
                    }
                }
            }(e, t)
        }))
    }))), (function(e) {
        return !Xl.und(e)
    }))
}

function Vu(e, t) {
    var n = e.length,
        i = function(e) {
            return e.timelineOffset ? e.timelineOffset : 0
        },
        r = {};
    return r.duration = n ? Math.max.apply(Math, e.map((function(e) {
        return i(e) + e.duration
    }))) : t.duration, r.delay = n ? Math.min.apply(Math, e.map((function(e) {
        return i(e) + e.delay
    }))) : t.delay, r.endDelay = n ? r.duration - Math.max.apply(Math, e.map((function(e) {
        return i(e) + e.duration - e.endDelay
    }))) : t.endDelay, r
}
var qu = 0;
var Uu = [],
    Bu = function() {
        var e;

        function t(n) {
            for (var i = Uu.length, r = 0; r < i;) {
                var o = Uu[r];
                o.paused ? (Uu.splice(r, 1), i--) : (o.tick(n), r++)
            }
            e = r > 0 ? requestAnimationFrame(t) : void 0
        }
        return "undefined" != typeof document && document.addEventListener("visibilitychange", (function() {
                Hu.suspendWhenDocumentHidden && (Qu() ? e = cancelAnimationFrame(e) : (Uu.forEach((function(e) {
                    return e._onDocumentVisibility()
                })), Bu()))
            })),
            function() {
                e || Qu() && Hu.suspendWhenDocumentHidden || !(Uu.length > 0) || (e = requestAnimationFrame(t))
            }
    }();

function Qu() {
    return !!document && document.hidden
}

function Hu(e) {
    void 0 === e && (e = {});
    var t, n = 0,
        i = 0,
        r = 0,
        o = 0,
        s = null;

    function a(e) {
        var t = window.Promise && new Promise((function(e) {
            return s = e
        }));
        return e.finished = t, t
    }
    var c = function(e) {
        var t = pu(Ql, e),
            n = pu(Hl, e),
            i = Lu(n, e),
            r = Nu(e.targets),
            o = zu(r, i),
            s = Vu(o, n),
            a = qu;
        return qu++, fu(t, {
            id: a,
            children: [],
            animatables: r,
            animations: o,
            duration: s.duration,
            delay: s.delay,
            endDelay: s.endDelay
        })
    }(e);

    function l() {
        var e = c.direction;
        "alternate" !== e && (c.direction = "normal" !== e ? "normal" : "reverse"), c.reversed = !c.reversed, t.forEach((function(e) {
            return e.reversed = c.reversed
        }))
    }

    function u(e) {
        return c.reversed ? c.duration - e : e
    }

    function h() {
        n = 0, i = u(c.currentTime) * (1 / Hu.speed)
    }

    function d(e, t) {
        t && t.seek(e - t.timelineOffset)
    }

    function p(e) {
        for (var t = 0, n = c.animations, i = n.length; t < i;) {
            var r = n[t],
                o = r.animatable,
                s = r.tweens,
                a = s.length - 1,
                l = s[a];
            a && (l = cu(s, (function(t) {
                return e < t.end
            }))[0] || l);
            for (var u = Kl(e - l.start - l.delay, 0, l.duration) / l.duration, h = isNaN(u) ? 1 : l.easing(u), d = l.to.strings, p = l.round, f = [], v = l.to.numbers.length, m = void 0, y = 0; y < v; y++) {
                var g = void 0,
                    b = l.to.numbers[y],
                    w = l.from.numbers[y] || 0;
                g = l.isPath ? Mu(l.value, h * b, l.isPathTargetInsideSVG) : w + h * (b - w), p && (l.isColor && y > 2 || (g = Math.round(g * p) / p)), f.push(g)
            }
            var x = d.length;
            if (x) {
                m = d[0];
                for (var _ = 0; _ < x; _++) {
                    d[_];
                    var E = d[_ + 1],
                        S = f[_];
                    isNaN(S) || (m += E ? S + E : S + " ")
                }
            } else m = f[0];
            ju[r.type](o.target, r.property, m, o.transforms), r.currentValue = m, t++
        }
    }

    function f(e) {
        c[e] && !c.passThrough && c[e](c)
    }

    function v(e) {
        var h = c.duration,
            v = c.delay,
            m = h - c.endDelay,
            y = u(e);
        c.progress = Kl(y / h * 100, 0, 100), c.reversePlayback = y < c.currentTime, t && function(e) {
            if (c.reversePlayback)
                for (var n = o; n--;) d(e, t[n]);
            else
                for (var i = 0; i < o; i++) d(e, t[i])
        }(y), !c.began && c.currentTime > 0 && (c.began = !0, f("begin")), !c.loopBegan && c.currentTime > 0 && (c.loopBegan = !0, f("loopBegin")), y <= v && 0 !== c.currentTime && p(0), (y >= m && c.currentTime !== h || !h) && p(h), y > v && y < m ? (c.changeBegan || (c.changeBegan = !0, c.changeCompleted = !1, f("changeBegin")), f("change"), p(y)) : c.changeBegan && (c.changeCompleted = !0, c.changeBegan = !1, f("changeComplete")), c.currentTime = Kl(y, 0, h), c.began && f("update"), e >= h && (i = 0, c.remaining && !0 !== c.remaining && c.remaining--, c.remaining ? (n = r, f("loopComplete"), c.loopBegan = !1, "alternate" === c.direction && l()) : (c.paused = !0, c.completed || (c.completed = !0, f("loopComplete"), f("complete"), !c.passThrough && "Promise" in window && (s(), a(c)))))
    }
    return a(c), c.reset = function() {
        var e = c.direction;
        c.passThrough = !1, c.currentTime = 0, c.progress = 0, c.paused = !0, c.began = !1, c.loopBegan = !1, c.changeBegan = !1, c.completed = !1, c.changeCompleted = !1, c.reversePlayback = !1, c.reversed = "reverse" === e, c.remaining = c.loop, t = c.children;
        for (var n = o = t.length; n--;) c.children[n].reset();
        (c.reversed && !0 !== c.loop || "alternate" === e && 1 === c.loop) && c.remaining++, p(c.reversed ? c.duration : 0)
    }, c._onDocumentVisibility = h, c.set = function(e, t) {
        return $u(e, t), c
    }, c.tick = function(e) {
        r = e, n || (n = r), v((r + (i - n)) * Hu.speed)
    }, c.seek = function(e) {
        v(u(e))
    }, c.pause = function() {
        c.paused = !0, h()
    }, c.play = function() {
        c.paused && (c.completed && c.reset(), c.paused = !1, Uu.push(c), h(), Bu())
    }, c.reverse = function() {
        l(), c.completed = !c.reversed, h()
    }, c.restart = function() {
        c.reset(), c.play()
    }, c.remove = function(e) {
        Wu(Du(e), c)
    }, c.reset(), c.autoplay && c.play(), c
}

function Gu(e, t) {
    for (var n = t.length; n--;) hu(e, t[n].animatable.target) && t.splice(n, 1)
}

function Wu(e, t) {
    var n = t.animations,
        i = t.children;
    Gu(e, n);
    for (var r = i.length; r--;) {
        var o = i[r],
            s = o.animations;
        Gu(e, s), s.length || o.children.length || i.splice(r, 1)
    }
    n.length || i.length || t.pause()
}
Hu.version = "3.2.1", Hu.speed = 1, Hu.suspendWhenDocumentHidden = !0, Hu.running = Uu, Hu.remove = function(e) {
    for (var t = Du(e), n = Uu.length; n--;) {
        Wu(t, Uu[n])
    }
}, Hu.get = Su, Hu.set = $u, Hu.convertPx = bu, Hu.path = function(e, t) {
    var n = Xl.str(e) ? au(e)[0] : e,
        i = t || 100;
    return function(e) {
        return {
            property: e,
            el: n,
            svg: Iu(n),
            totalLength: Au(n) * (i / 100)
        }
    }
}, Hu.setDashoffset = function(e) {
    var t = Au(e);
    return e.setAttribute("stroke-dasharray", t), t
}, Hu.stagger = function(e, t) {
    void 0 === t && (t = {});
    var n = t.direction || "normal",
        i = t.easing ? su(t.easing) : null,
        r = t.grid,
        o = t.axis,
        s = t.from || 0,
        a = "first" === s,
        c = "center" === s,
        l = "last" === s,
        u = Xl.arr(e),
        h = u ? parseFloat(e[0]) : parseFloat(e),
        d = u ? parseFloat(e[1]) : 0,
        p = mu(u ? e[1] : e) || 0,
        f = t.start || 0 + (u ? h : 0),
        v = [],
        m = 0;
    return function(e, t, y) {
        if (a && (s = 0), c && (s = (y - 1) / 2), l && (s = y - 1), !v.length) {
            for (var g = 0; g < y; g++) {
                if (r) {
                    var b = c ? (r[0] - 1) / 2 : s % r[0],
                        w = c ? (r[1] - 1) / 2 : Math.floor(s / r[0]),
                        x = b - g % r[0],
                        _ = w - Math.floor(g / r[0]),
                        E = Math.sqrt(x * x + _ * _);
                    "x" === o && (E = -x), "y" === o && (E = -_), v.push(E)
                } else v.push(Math.abs(s - g));
                m = Math.max.apply(Math, v)
            }
            i && (v = v.map((function(e) {
                return i(e / m) * m
            }))), "reverse" === n && (v = v.map((function(e) {
                return o ? e < 0 ? -1 * e : -e : Math.abs(m - e)
            })))
        }
        return f + (u ? (d - h) / m : h) * (Math.round(100 * v[t]) / 100) + p
    }
}, Hu.timeline = function(e) {
    void 0 === e && (e = {});
    var t = Hu(e);
    return t.duration = 0, t.add = function(n, i) {
        var r = Uu.indexOf(t),
            o = t.children;

        function s(e) {
            e.passThrough = !0
        }
        r > -1 && Uu.splice(r, 1);
        for (var a = 0; a < o.length; a++) s(o[a]);
        var c = fu(n, pu(Hl, e));
        c.targets = c.targets || e.targets;
        var l = t.duration;
        c.autoplay = !1, c.direction = t.direction, c.timelineOffset = Xl.und(i) ? l : ku(i, l), s(t), t.seek(c.timelineOffset);
        var u = Hu(c);
        s(u), o.push(u);
        var h = Vu(o, e);
        return t.delay = h.delay, t.endDelay = h.endDelay, t.duration = h.duration, t.seek(0), t.reset(), t.autoplay && t.play(), t
    }, t
}, Hu.easing = su, Hu.penner = ou, Hu.random = function(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e
};
const Ku = vn(class extends mn {
    constructor(e) {
        var t;
        if (super(e), e.type !== fn || "style" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")
    }
    render(e) {
        return Object.keys(e).reduce(((t, n) => {
            const i = e[n];
            return null == i ? t : t + `${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`
        }), "")
    }
    update(e, [t]) {
        const {
            style: n
        } = e.element;
        if (void 0 === this.ct) {
            this.ct = new Set;
            for (const e in t) this.ct.add(e);
            return this.render(t)
        }
        this.ct.forEach((e => {
            null == t[e] && (this.ct.delete(e), e.includes("-") ? n.removeProperty(e) : n[e] = "")
        }));
        for (const e in t) {
            const i = t[e];
            null != i && (this.ct.add(e), e.includes("-") ? n.setProperty(e, i) : n[e] = i)
        }
        return he
    }
});
let Yu = class extends Ae {
    constructor() {
        super(), this.name = "", this.isOpen = !1, this.small = !1, dt(this, Ke), dt(this, it)
    }
    static get styles() {
        return R`.tooltip{display:none;background:#fff;border-radius:16px;position:absolute;width:fit-content;white-space:nowrap;justify-content:center;align-items:center;text-align:center;color:#000;font-size:14px;font-weight:700;box-shadow:0 4px 10px rgb(0,0,0,.25);top:calc(-50% - 8px);left:50%;transform:translate(-50%,-50%)}.tooltip::after{content:'';width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-top:14px solid #fff;position:absolute;top:calc(100% + -1px)}:host([isOpen])>.tooltip{display:flex}:host([small]) .tooltip{top:calc(-50% + 1px)}:host([small]) .tooltip::after{border-left-width:7px;border-right-width:7px;border-top-width:7px}`
    }
    render() {
        return !Ke.getState() || it.getState() < Be.Optimal ? "" : le`<div class="tooltip"> <slot></slot> </div>`
    }
};
r([u({
    type: String,
    reflect: !0
})], Yu.prototype, "name", void 0), r([u({
    type: Boolean,
    reflect: !0
})], Yu.prototype, "isOpen", void 0), r([u({
    type: Boolean
})], Yu.prototype, "small", void 0), Yu = r([c("mona-lisa-tooltip")], Yu);
const Ju = {
        rootMargin: "200px"
    },
    Xu = new Map;

function Zu(e, t) {
    return !Xu.has(e) && t && Xu.set(e, function(e) {
        return new IntersectionObserver((e => {
            for (const t of e) {
                const e = t.target;
                t.isIntersecting ? e.observerIsIntersectingCallback(t) : e.observerIsNotIntersectingCallback(t)
            }
        }), e)
    }(t)), Xu.get(e)
}
const eh = Symbol("mixins/observer");
const th = Symbol("mixins/user-action");
let nh = class extends(function(e) {
    if (th in e) return e;
    class t extends e {
        constructor() {
            super(...arguments), this._userActionEnabled = !1, this._loadingHandleClick = () => {
                this._userActionEnabled && this.userActionCallback()
            }, this._loadingHandleKeyDown = e => {
                this._userActionEnabled && ("Enter" !== e.code && "Space" !== e.code || (e.preventDefault(), e.stopPropagation(), this.userActionCallback()))
            }
        }
        get isActionable() {
            return this._userActionEnabled
        }
        enableUserActions() {
            this._userActionEnabled || (this._userActionEnabled = !0, this.addEventListener("click", this._loadingHandleClick), this.addEventListener("keydown", this._loadingHandleKeyDown))
        }
        disableUserActions() {
            this._userActionEnabled && (this._userActionEnabled = !1, this.removeEventListener("click", this._loadingHandleClick), this.removeEventListener("keydown", this._loadingHandleKeyDown))
        }
        userActionCallback() {}
    }
    return t[th] = !0, t
}(function(e) {
    if (eh in e) return e;
    class t extends e {
        constructor() {
            super(...arguments), this._observerConfigObserved = null
        }
        get isObserved() {
            return !!this._observerConfigObserved
        }
        enableObserver(e = Ju) {
            if (!this._observerConfigObserved) {
                this._observerConfigObserved = JSON.stringify(e);
                const t = Zu(this._observerConfigObserved, e);
                t && t.observe(this)
            }
        }
        disableObserver() {
            if (this._observerConfigObserved) {
                const e = Zu(this._observerConfigObserved);
                e && e.unobserve(this), this._observerConfigObserved = null
            }
        }
        observerIsIntersectingCallback(e) {}
        observerIsNotIntersectingCallback(e) {}
    }
    return t[eh] = !0, t
}(Ae))) {
    constructor() {
        super(...arguments), this.src = "", this.loading = w.Lazy, this.width = 0, this.height = 0, this.perfmark = "", this.objectfit = void 0, this.isRequestInProgress = !1
    }
    static get styles() {
        return R`:host{display:inline-block}:host([loading=action]) div.placeholder{cursor:pointer}div{display:flex;align-items:center;justify-content:center;text-align:center;height:inherit;width:inherit;margin:auto;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;position:relative;overflow:hidden;border-radius:inherit}img{width:100%;height:100%}`
    }
    connectedCallback() {
        super.connectedCallback(), this.img || (this.loading === w.Lazy ? this.enableObserver() : this.loading === w.Action ? this.enableUserActions() : this.loading === w.Eager && this.loadContent())
    }
    observerIsIntersectingCallback() {
        this.isObserved && this.disableObserver(), this.isRequestInProgress || this.loadContent()
    }
    userActionCallback() {
        this.isActionable && this.disableUserActions(), this.isRequestInProgress || this.loadContent()
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this.isObserved && this.disableObserver(), this.isActionable && this.disableUserActions()
    }
    async loadContent() {
        const {
            src: e
        } = this, t = new Image;
        t.onload = () => {
            this.isRequestInProgress = !1, this.img = t, this.requestUpdate(), this.perfmark && this.updateComplete.then((() => {
                performance.mark(this.perfmark)
            }))
        }, t.onerror = () => {
            const e = new Error("Image failed to load"),
                t = g("faceplate-error", e);
            this.dispatchEvent(t)
        }, this.isRequestInProgress = !0, t.src = e
    }
    render() {
        const e = this.isRequestInProgress && this.loading === w.Action;
        let t = le` <slot name="${un(e?"loading":void 0)}"></slot> `;
        return this.img && (t = this.objectfit ? le` <img src="${this.src}" alt="${un(this.alt)}" style="${Ku({objectFit:encodeURIComponent(this.objectfit)})}"> ` : le` <img src="${this.src}" alt="${un(this.alt)}"> `), le` <div class="${this.img?"loaded":"placeholder"}" style="${Ku({width:this.width?this.width+"px":"inherit",height:this.height?this.height+"px":"inherit"})}" tabindex="${un(this.isActionable?0:void 0)}"> ${t} </div> `
    }
};
r([u({
    type: String
})], nh.prototype, "src", void 0), r([u({
    type: String
})], nh.prototype, "loading", void 0), r([u({
    type: Number
})], nh.prototype, "width", void 0), r([u({
    type: Number
})], nh.prototype, "height", void 0), r([u({
    type: String
})], nh.prototype, "perfmark", void 0), r([u({
    type: String
})], nh.prototype, "objectfit", void 0), r([u({
    type: String
})], nh.prototype, "alt", void 0), nh = r([c("faceplate-img")], nh);
const ih = ["[blocked user]"];

function rh(e, t, n = Date.now()) {
    return {
        when: n,
        where: {
            x: e,
            y: t
        }
    }
}
let oh = class extends(tn(Ae)) {
    constructor() {
        super(), this.pixelX = -1, this.pixelY = -1, this.tooltipName = "", this.cameraBoundaries = {
            x: 0,
            y: 0
        }, this.cx = 0, this.cy = 0, this.zoom = it.getState(), this.isDragging = !1, this.isPinching = !1, this.lastMouseDown = rh(-1, -1, -1), this.firstTouch = rh(-1, -1, -1), this.lastTouch = rh(-1, -1, -1), this.movePathDistance = 0, this.pinchEndedTimestamp = -1, this.prevVectorDiff = 0, this.isTileHistoryEnabled = !0, this.onTouchStart = rt((e => {
            if (this.movePathDistance = 0, 1 === e.targetTouches.length) {
                const t = e.targetTouches.item(0);
                t && (this.isDragging = !0, this.firstTouch = this.lastTouch = rh(t.clientX, t.clientY))
            } else if (2 === e.targetTouches.length) {
                const t = e.targetTouches.item(0),
                    n = e.targetTouches.item(1);
                if (!t || !n) return;
                this.isDragging = !0, this.firstTouch = this.lastTouch = rh((t.clientX + n.clientX) / 2, (t.clientY + n.clientY) / 2)
            }
        })), this.onMouseDown = rt((e => {
            this.movePathDistance = 0, 0 === e.button && (this.isDragging = !0, this.lastMouseDown = rh(e.clientX, e.clientY))
        })), this.onTouchMove = rt((e => {
            if (this.camera && e.composedPath().includes(this.camera)) {
                if (e.preventDefault(), e.stopPropagation(), 1 === e.targetTouches.length) {
                    const t = e.targetTouches.item(0);
                    if (t) {
                        const e = Date.now() - this.pinchEndedTimestamp >= 300;
                        if (this.isDragging && e) {
                            const e = t.clientX - (this.lastTouch.where.x || this.lastMouseDown.where.x),
                                n = t.clientY - (this.lastTouch.where.y || this.lastMouseDown.where.y);
                            (e || n) && (this.moveBy(e, n), this.movePathDistance += ol(0, 0, e, n)), this.lastTouch = rh(t.clientX, t.clientY)
                        }
                    }
                }
                if (2 === e.targetTouches.length) {
                    const t = e.targetTouches[0],
                        n = e.targetTouches[1];
                    if (t && n) {
                        const e = ol(t.clientX, t.clientY, n.clientX, n.clientY),
                            i = (t.clientX + n.clientX) / 2,
                            r = (t.clientY + n.clientY) / 2;
                        if (this.prevVectorDiff && this.prevVectorDiff !== e) {
                            this.isPinching = !0;
                            const t = (e - this.prevVectorDiff) / this.zoomMultiplier;
                            this.zoomAt(t, {
                                x: i,
                                y: r
                            })
                        }
                        if (this.isDragging) {
                            const e = i - (this.lastTouch.where.x || this.lastMouseDown.where.x),
                                t = r - (this.lastTouch.where.y || this.lastMouseDown.where.y);
                            (e || t) && (this.moveBy(e, t), this.movePathDistance += ol(0, 0, e, t)), this.lastTouch = rh(i, r)
                        }
                        this.prevVectorDiff = e
                    }
                }
            }
        })), this.onMouseMove = rt((e => {
            this.camera && e.composedPath().includes(this.camera) && (e.preventDefault(), e.stopPropagation(), this.showColorPicker || this.trackEraseToolThrottled(e), this.isDragging && "number" == typeof e.movementX && "number" == typeof e.movementY && (e.movementX || e.movementY) && (this.moveBy(e.movementX, e.movementY), this.movePathDistance += ol(0, 0, e.movementX, e.movementY)))
        })), this.trackEraseTool = rt((e => {
            var t;
            if (ct.getState() && (null === (t = lt.getState()[0]) || void 0 === t ? void 0 : t.x)) {
                const t = this.clientToCanvas(e);
                if (!t) return;
                lt.updateState([lt.getState()[0], t])
            }
        })), this.trackEraseToolThrottled = an(50, !1, this.trackEraseTool), this.onTouchStop = rt((() => {
            this.isDragging = !1, this.prevVectorDiff = 0, this.isPinching && (this.isPinching = !1, this.pinchEndedTimestamp = Date.now())
        })), this.onMouseUp = rt((e => {
            if (this.isDragging = !1, !this.camera || !e.composedPath().includes(this.camera) || 0 !== e.button) return;
            if (this.firstTouch.when > 0) {
                const {
                    where: t,
                    when: n
                } = this.firstTouch;
                if (ol(t.x, t.y, e.clientX, e.clientY) >= 5 || Date.now() - n >= 300) return
            } else if (this.lastMouseDown.when > 0) {
                const {
                    where: t,
                    when: n
                } = this.lastMouseDown;
                if (ol(t.x, t.y, e.clientX, e.clientY) >= 5 || Date.now() - n >= 300) return
            }
            if (this.movePathDistance >= 5 || Date.now() - this.pinchEndedTimestamp < 300) return;
            const t = this.clientToCanvas(e);
            t && !cl(t) && (this.lastMouseDown = this.firstTouch = this.lastTouch = rh(-1, -1, -1), this.selectPixel(t))
        })), this.fetchPixelHistoryDebounced = cn(50, this.fetchPixelHistory), this.onWheel = rt((e => {
            e.preventDefault(), e.stopPropagation();
            const t = -e.deltaY / this.zoomMultiplier,
                n = this.clientToCamera({
                    x: e.clientX,
                    y: e.clientY
                });
            this.zoomAt(t, n)
        })), this.onCameraResize = () => {
            this.updateCameraDimensions(), this.applyPosition({
                x: this.cx,
                y: this.cy,
                zoom: this.zoom
            }), this.animateScheduledPositionDebounced({})
        }, this.animatePositionDebounced = an(300, !1, this.animatePosition), this.animateScheduledPositionDebounced = cn(50, !1, this.animateScheduledPosition), dt(this, st), dt(this, at), dt(this, lt)
    }
    static get styles() {
        return R`
      :host {
        box-sizing: border-box;
        display: block;
        flex: 1 1 0%;
        width: 100%;
      }

      .camera {
        display: block;
        height: 100%;
        overflow: hidden;
        position: relative;
        width: 100%;
        -webkit-touch-callout: none !important;
        -webkit-user-select: none !important;
      }

      .position-container {
        position: absolute;
        pointer-events: none;
      }

      .zoom-container {
        position: relative;
        transform-origin: top left;
      }

      .edge {
        pointer-events: none;
        position: absolute;
        top: -155px;
        left: -109px;
        transform: rotate(3.21deg);
        user-select: none;
      }

      .frame {
        position: absolute;
        background-color: #fff;
        border: 8px solid #fff;
        box-shadow: 0 0 0 6px #505050, 0 0 0 3px rgba(67, 59, 59, 0.3) inset;
        top: -11px;
        left: -11px;
      }

      .pixel {
        position: absolute;
        left: 0;
        top: 0;
        height: ${Be.Max}px;
        width: ${Be.Max}px;
      }

      .user-prefix {
        letter-spacing: 1px;
      }

      .profile-button {
        font-family: var(--mona-lisa-font-sans);
        font-weight: 700;
        background: none;
        color: #000;
        border: 0;
        outline: 0;
        font-size: 14px;
        padding: 5px 16px;
        cursor: pointer;
        pointer-events: all;
      }
    `
    }
    get left() {
        return this.cx - this.cameraBoundaries.x / this.zoom
    }
    get top() {
        return this.cy - this.cameraBoundaries.y / this.zoom
    }
    get zoomMultiplier() {
        return 3 * Be.Max / this.zoom
    }
    connectedCallback() {
        super.connectedCallback(), this.dispatchEvent(g("register-camera", this))
    }
    disconnectedCallback() {
        var e;
        super.disconnectedCallback(), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("touchmove", this.onTouchMove), this.camera && (null === (e = this.resizeObserver) || void 0 === e || e.unobserve(this.camera))
    }
    initialize() {
        var e, t, n, i;
        if (this.cx = et.getState(), this.nextCx = void 0, this.cy = tt.getState(), this.nextCy = void 0, this.nextZoom = void 0, this.isDragging = !1, this.isPinching = !1, this.lastMouseDown = rh(-1, -1, -1), this.firstTouch = rh(-1, -1, -1), this.lastTouch = rh(-1, -1, -1), this.movePathDistance = 0, this.pinchEndedTimestamp = -1, this.lastFetchedHistoryPixel = void 0, this.prevVectorDiff = 0, null === (e = this.cameraAnimation) || void 0 === e || e.pause(), null === (t = this.showTooltipAnimation) || void 0 === t || t.pause(), this.tooltipName = "", !Je.getState()) {
            const e = this.calculateZoomFromPx();
            e && (this.zoom = e, it.updateState(this.zoom))
        }
        this.updateCameraDimensions(), this.updateCameraBoundaries(), this.applyPosition(), document.removeEventListener("mousemove", this.onMouseMove), document.addEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUp), document.addEventListener("mouseup", this.onMouseUp), document.removeEventListener("touchcancel", this.onTouchStop), document.addEventListener("touchcancel", this.onTouchStop), document.removeEventListener("touchend", this.onTouchStop), document.addEventListener("touchend", this.onTouchStop), document.removeEventListener("touchmove", this.onTouchMove), document.addEventListener("touchmove", this.onTouchMove), this.camera && (null === (n = this.resizeObserver) || void 0 === n || n.unobserve(this.camera), this.resizeObserver = new ResizeObserver(this.onCameraResize), null === (i = this.resizeObserver) || void 0 === i || i.observe(this.camera)), Ge.getState().camera || Ge.updateState(Object.assign(Object.assign({}, Ge.getState()), {
            camera: !0
        }))
    }
    clientToCamera(e) {
        var t;
        if (!e) return;
        const n = null === (t = this.camera) || void 0 === t ? void 0 : t.getBoundingClientRect();
        return n ? {
            x: e.x - n.left,
            y: e.y - n.top
        } : void 0
    }
    cameraToCanvas(e) {
        if (e) return {
            x: Math.floor(this.left + e.x / this.zoom),
            y: Math.floor(this.top + e.y / this.zoom)
        }
    }
    canvasToCamera(e) {
        if (e) return {
            x: Math.floor((e.x - this.left) * this.zoom),
            y: Math.floor((e.y - this.top) * this.zoom)
        }
    }
    clientToCanvas(e) {
        const t = {
                x: e.clientX,
                y: e.clientY
            },
            n = this.clientToCamera(t);
        return this.cameraToCanvas(n)
    }
    moveBy(e, t) {
        const n = 1 / this.zoom * Be.Min;
        this.nextCx = void 0, this.nextCy = void 0, this.nextZoom = void 0, this.applyPosition({
            x: this.cx - e * n,
            y: this.cy - t * n
        })
    }
    selectPixel(e) {
        it.updateState(this.zoom);
        const t = g("click-canvas", e);
        this.dispatchEvent(t)
    }
    getTooltipOverride({
        x: e,
        y: t
    }) {
        var n;
        const i = ut.getState();
        if ((null == i ? void 0 : i.x) === e && (null == i ? void 0 : i.y) === t) return null === (n = Xe.getState()) || void 0 === n ? void 0 : n.name
    }
    async fetchPixelHistory(e) {
        if (this.lastFetchedHistoryPixel = e, this.tooltipName = "", !this.showPixelHistory || !this.isTileHistoryEnabled || !Ke.getState()) return;
        const t = this.getTooltipOverride(e);
        if (t) return this.tooltipName = t, void this.showTooltip();
        const n = {
                x: e.x,
                y: e.y
            },
            i = await fl.getPixelHistory(n),
            r = il();
        if (e.x === r.x && e.y === r.y)
            if (i.type === pl.Success) {
                const {
                    data: t
                } = i;
                this.tooltipName = this.getTooltipOverride(e) || (t && Number.isInteger(t.lastModifiedTimestamp) ? t.userInfo.username : ""), this.showTooltip()
            } else i.type === pl.UnauthorizedError && this.dispatchEvent(g("api-error", i))
    }
    zoomAt(e, t) {
        var n;
        null === (n = this.cameraAnimation) || void 0 === n || n.pause();
        const i = Math.max(Math.min(this.zoom + e, Be.Max), Be.Min);
        if (t && this.cameraRect) {
            const e = {
                    x: (this.cameraRect.left + this.cameraRect.right) / 2,
                    y: (this.cameraRect.top + this.cameraRect.bottom) / 2
                },
                n = {
                    x: e.x - t.x,
                    y: e.y - t.y
                };
            this.isTileHistoryEnabled = !1, this.moveBy(n.x, n.y), this.applyPosition({
                zoom: i
            }), this.isTileHistoryEnabled = !0, this.moveBy(-n.x, -n.y)
        }
        it.updateState(i)
    }
    calculateZoomFromPx() {
        if (!nt.getState()) return;
        if (this.updateCameraDimensions(), !this.cameraRect) return;
        const e = 2 * nt.getState() + 1,
            t = Math.floor(this.cameraRect.width / e),
            n = Math.floor(this.cameraRect.height / e),
            i = Math.min(t, n);
        return Math.max(Be.Min, Math.min(Be.Max, i))
    }
    jumpTo(e, t) {
        this.schedulePosition(Object.assign(Object.assign({}, e), {
            zoom: t
        }))
    }
    moveTo(e, t) {
        this.animatePositionDebounced(Object.assign(Object.assign({}, e), {
            zoom: t
        }))
    }
    zoomIn(e) {
        var t;
        Math.abs(this.zoom - e) > 1 ? this.animatePosition({
            zoom: e,
            zoomEasing: "easeOutQuint"
        }) : (null === (t = this.cameraAnimation) || void 0 === t || t.pause(), this.nextZoom = void 0, this.applyPosition({
            zoom: e
        }))
    }
    refreshTooltip() {
        this.fetchPixelHistory(nl({
            x: this.cx,
            y: this.cy
        }))
    }
    getRandomCenter() {
        var e, t;
        this.updateCameraDimensions(), this.updateCameraBoundaries();
        const n = this.calculateZoomFromPx() || this.zoom,
            i = {
                x: this.cameraBoundaries.x / n,
                y: this.cameraBoundaries.y / n
            },
            r = (null === (e = this.cameraRect) || void 0 === e ? void 0 : e.width) || 0,
            o = (null === (t = this.cameraRect) || void 0 === t ? void 0 : t.height) || 0,
            s = at.getState(),
            a = st.getState(),
            c = {
                x: Math.random() * s,
                y: Math.random() * a
            };
        return {
            x: r >= s * n ? s / 2 : Math.min(Math.max(Math.ceil(i.x), c.x), Math.floor(s - i.x)),
            y: o >= a * n ? a / 2 : Math.min(Math.max(Math.ceil(i.y), c.y), Math.floor(a - i.y))
        }
    }
    renderCurrentPosition() {
        var e, t;
        if (this.zoomContainer) {
            const e = this.zoom / Be.Max;
            this.isSafari || this.isIOS ? this.zoomContainer.style.zoom = e : this.zoomContainer.style.transform = `scale(${e})`
        }
        if (this.positionContainer) {
            const e = this.cx * this.zoom - this.cameraBoundaries.x,
                t = this.cy * this.zoom - this.cameraBoundaries.y,
                n = -e + "px",
                i = -t + "px";
            this.positionContainer.style.transform = `translateX(${n}) translateY(${i})`
        }
        if (this.pixel) {
            const n = lt.getState(),
                i = n.length ? nl({
                    x: n[0].x,
                    y: n[0].y
                }) : nl({
                    x: this.cx,
                    y: this.cy
                }),
                r = i.x * Be.Max,
                o = i.y * Be.Max;
            this.pixel.style.transform = `translateX(${r}px) translateY(${o}px)`, this.showPixelHistory && this.isTileHistoryEnabled && ((null === (e = this.lastFetchedHistoryPixel) || void 0 === e ? void 0 : e.x) !== i.x || (null === (t = this.lastFetchedHistoryPixel) || void 0 === t ? void 0 : t.y) !== i.y) && (this.tooltipName = "", Ke.getState() && it.getState() >= Be.Optimal && this.fetchPixelHistoryDebounced(i))
        }
    }
    applyPosition({
        x: e = this.cx,
        y: t = this.cy,
        zoom: n = this.zoom
    } = {}) {
        this.zoom = Math.max(Be.Min, Math.min(n, Be.Max)), this.updateCameraBoundaries(), this.updateVisiblePixels(), this.cx = Math.max(0, Math.min(e, at.getState() - 1)), this.cy = Math.max(0, Math.min(t, st.getState() - 1)), this.renderCurrentPosition(), this.sendMoveCameraEvent()
    }
    schedulePosition({
        x: e = this.cx,
        y: t = this.cy,
        zoom: n = this.zoom
    } = {}) {
        this.nextCx = Math.max(0, Math.min(e, at.getState() - 1)), this.nextCy = Math.max(0, Math.min(t, st.getState() - 1)), this.nextZoom = Math.max(Be.Min, Math.min(n, Be.Max))
    }
    animatePosition({
        x: e = this.cx,
        y: t = this.cy,
        zoom: n = this.zoom,
        zoomEasing: i = "easeInQuint"
    } = {}) {
        var r;
        null === (r = this.cameraAnimation) || void 0 === r || r.pause(), Ke.getState() ? (this.schedulePosition({
            x: e,
            y: t,
            zoom: n
        }), this.animateScheduledPosition({
            zoomEasing: i
        })) : this.applyPosition({
            x: e,
            y: t,
            zoom: n
        })
    }
    animateScheduledPosition({
        zoomEasing: e = "easeInQuint"
    }) {
        const t = {
                x: this.cx,
                y: this.cy
            },
            n = {
                zoom: this.zoom
            };
        this.cameraAnimation = Hu.timeline({
            delay: 0,
            update: () => {
                this.applyPosition(Object.assign(Object.assign({}, t), n))
            },
            complete: () => {
                this.nextCx = void 0, this.nextCy = void 0, this.nextZoom = void 0
            }
        }).add({
            targets: t,
            x: this.nextCx,
            y: this.nextCy,
            easing: "easeOutQuint"
        }, 0).add({
            targets: n,
            zoom: this.nextZoom,
            easing: e
        }, 0)
    }
    updateCameraDimensions() {
        this.camera && (this.cameraRect = this.camera.getBoundingClientRect())
    }
    updateCameraBoundaries() {
        if (this.cameraRect) {
            const e = (this.cameraRect.width - this.zoom) / 2,
                t = (this.cameraRect.height - this.zoom) / 2;
            this.cameraBoundaries = {
                x: e,
                y: t
            }
        }
    }
    updateVisiblePixels() {
        if (this.cameraBoundaries) {
            const e = Math.min(Math.floor(this.cameraBoundaries.x / this.zoom), Math.floor(this.cameraBoundaries.y / this.zoom));
            this.dispatchEvent(g("update-visible-pixels", {
                px: e
            }))
        }
    }
    sendMoveCameraEvent() {
        this.cameraRect && this.dispatchEvent(g("move-camera", {
            x: this.cx,
            y: this.cy
        }))
    }
    getVisibilityRect() {
        if (!this.cameraRect) return;
        const {
            width: e,
            height: t
        } = this.cameraRect;
        return function(e, t, n, i, r) {
            const o = nl({
                    x: Math.floor(e),
                    y: Math.floor(t)
                }),
                s = nl({
                    x: Math.ceil(e + n / r),
                    y: Math.ceil(t + i / r)
                });
            return {
                x1: o.x,
                y1: o.y,
                x2: s.x,
                y2: s.y
            }
        }(this.left, this.top, e, t, this.zoom)
    }
    showTooltip(e = !0) {
        var t;
        null === (t = this.showTooltipAnimation) || void 0 === t || t.pause();
        const n = {
            opacity: 0
        };
        this.showTooltipAnimation = Hu({
            targets: n,
            duration: 50,
            opacity: 1,
            easing: e ? "easeInOutQuad" : "steps(1)",
            update: () => {
                this.tooltip && (this.tooltip.style.opacity = `${n.opacity}`)
            }
        })
    }
    renderFrame() {
        const e = st.getState(),
            t = at.getState();
        return e && t ? le`
      <faceplate-img
        class="edge"
        src="${CLIENT_CONFIG.STATIC_BASE_URL}assets/img/snoo-edge.png"
        height="226"
        width="290"
      ></faceplate-img>
      <div
        class="frame"
        style=${Ku({height:e*Be.Max+6+"px",width:t*Be.Max+6+"px"})}
      ></div>
    ` : ""
    }
    handleProfileClick(e) {
        e.preventDefault(), e.stopPropagation(), ih.includes(this.tooltipName) || (this.trackEvent(Yt({
            source: Jt.HotPotato,
            action: Xt.Click,
            noun: Zt.Username
        })), this.dispatchEvent(g("host-communication", {
            type: Lt.OpenProfile,
            data: {
                profileName: this.tooltipName
            }
        }))), this.tooltipName = ""
    }
    render() {
        return le`
      <div
        class="camera"
        @wheel=${this.onWheel}
        @mousedown=${this.onMouseDown}
        @touchstart=${this.onTouchStart}
      >
        <div class="position-container">
          <div class="zoom-container">
            ${this.renderFrame()}
            <slot></slot>
            <div class="pixel">
              ${this.showPixelHistory?le`
                    <mona-lisa-tooltip
                      name="pixel-history-tooltip"
                      ?isOpen=${this.tooltipName.length>0}
                    >
                      <button class="profile-button" @mousedown=${this.handleProfileClick}>
                        <span class="user-prefix">u/</span>${this.tooltipName}
                      </button>
                    </mona-lisa-tooltip>
                  `:""}
              <slot name="pixel"> </slot>
            </div>
          </div>
        </div>
      </div>
    `
    }
};
r([u({
    type: Boolean,
    attribute: "is-ios"
})], oh.prototype, "isIOS", void 0), r([u({
    type: Boolean,
    attribute: "is-safari"
})], oh.prototype, "isSafari", void 0), r([u({
    type: Boolean,
    attribute: "is-show-color-picker"
})], oh.prototype, "showColorPicker", void 0), r([u({
    type: Boolean,
    attribute: "show-pixel-history"
})], oh.prototype, "showPixelHistory", void 0), r([u({
    type: Number,
    attribute: "pixel-x"
})], oh.prototype, "pixelX", void 0), r([u({
    type: Number,
    attribute: "pixel-y"
})], oh.prototype, "pixelY", void 0), r([h()], oh.prototype, "tooltipName", void 0), r([p(".camera")], oh.prototype, "camera", void 0), r([p(".zoom-container")], oh.prototype, "zoomContainer", void 0), r([p(".position-container")], oh.prototype, "positionContainer", void 0), r([p(".pixel")], oh.prototype, "pixel", void 0), r([p("mona-lisa-tooltip")], oh.prototype, "tooltip", void 0), oh = r([c("mona-lisa-camera")], oh);
let sh = class extends Ae {
    constructor() {
        super(), dt(this, Ge)
    }
    static get styles() {
        return R`:host{position:relative}.container{transform-origin:top left}canvas{display:block;-ms-interpolation-mode:bicubic;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges;image-rendering:pixelated}`
    }
    connectedCallback() {
        super.connectedCallback(), this.dispatchEvent(g("register-canvas", this))
    }
    drawPixel({
        x: e,
        y: t,
        colorIndex: n
    }) {
        var i;
        const r = null === (i = this.canvas) || void 0 === i ? void 0 : i.getContext("2d");
        r && (r.fillStyle = wt(n) || "transparent", r.fillRect(e, t, 1, 1))
    }
    getPixelColor(e) {
        try {
            if (!this.canvas) return;
            const t = this.getImageData(e.x, e.y, 1, 1);
            if (!t) return;
            const [n, i, r] = t.data;
            return function(e, t, n) {
                return `#${Et(e)}${Et(t)}${Et(n)}`
            }(n, i, r)
        } catch (e) {
            return
        }
    }
    drawImage({
        image: e,
        x: t,
        y: n
    }) {
        var i;
        const r = null === (i = this.canvas) || void 0 === i ? void 0 : i.getContext("2d");
        r && r.drawImage(e, t, n)
    }
    initialize() {
        var e;
        const t = null === (e = this.canvas) || void 0 === e ? void 0 : e.getContext("2d");
        if (!t || !this.canvas) return;
        let n;
        try {
            n = t.getImageData(0, 0, at.getState(), st.getState())
        } catch (e) {
            dn(e)
        }
        this.canvas.height = st.getState(), this.canvas.width = at.getState(), n && t.putImageData(n, 0, 0), Ge.getState().canvas || Ge.updateState(Object.assign(Object.assign({}, Ge.getState()), {
            canvas: !0
        }))
    }
    getImageData(e, t, n, i) {
        var r, o;
        return null === (o = null === (r = this.canvas) || void 0 === r ? void 0 : r.getContext("2d")) || void 0 === o ? void 0 : o.getImageData(e, t, n, i)
    }
    render() {
        return le` <div class="container" style="${Ku(this.isIOS||this.isSafari?{zoom:`${Be.Max}`}:{transform:`
        scale($ {
            Be.Max
        })`})}"> <canvas></canvas> </div> `
    }
};
r([u({
    type: Boolean,
    attribute: "is-ios"
})], sh.prototype, "isIOS", void 0), r([u({
    type: Boolean,
    attribute: "is-safari"
})], sh.prototype, "isSafari", void 0), r([p("canvas")], sh.prototype, "canvas", void 0), sh = r([c("mona-lisa-canvas")], sh), rn("icon-close", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M18.442 2.442l-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M18.707 2.707l-1.414-1.414L10 8.586 2.707 1.293 1.293 2.707 8.586 10l-7.293 7.293 1.414 1.414L10 11.414l7.293 7.293 1.414-1.414L11.414 10l7.293-7.293z"/></svg>`);
let ah = class extends Ae {
    static get styles() {
        return R`:host{z-index:1}icon-close{display:inline-flex}`
    }
    handleClose() {
        Ke.updateState(!1), this.dispatchEvent(g("host-communication", {
            type: Lt.Close
        }))
    }
    render() {
        return le` <mona-lisa-icon-button @click="${this.handleClose}"> <icon-close></icon-close> </mona-lisa-icon-button>`
    }
};
ah = r([c("mona-lisa-close-button")], ah), rn("icon-checkmark", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M7.5 15.583a.72.72 0 01-.513-.212L1.558 9.942l.884-.884L7.5 14.116 18.058 3.558l.884.884L8.013 15.371a.72.72 0 01-.513.212z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M7.5 15.958a1.1 1.1 0 01-.778-.322l-5.429-5.429 1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278 15.636a1.1 1.1 0 01-.778.322z"/></svg>`);
const ch = `${CLIENT_CONFIG.REDDIT_ORIGIN}/r/place`;

function lh(e) {
    const t = new URL(e ? "https://reddit.app.link/place" : ch),
        n = il();
    t.searchParams.set(Ue.CX, `${n.x}`), t.searchParams.set(Ue.CY, `${n.y}`), t.searchParams.set(Ue.PX, `${Math.floor(nt.getState())}`), t.searchParams.set(Ue.UTMSource, "share");
    const i = function() {
        var e, t;
        return Ut() ? "ios_app" : qt() ? "android_app" : Bt() ? null === (t = null === (e = Ze.getState()) || void 0 === e ? void 0 : e.app) || void 0 === t ? void 0 : t.name : void 0
    }();
    return i && t.searchParams.set(Ue.UTMMedium, i), t.toString()
}
rn("icon-history", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M13.558 14.442l-4.183-4.183V4h1.25v5.741l3.817 3.817-.884.884z"/><path d="M10 19.625A9.625 9.625 0 1119.625 10 9.636 9.636 0 0110 19.625zm0-18A8.375 8.375 0 1018.375 10 8.384 8.384 0 0010 1.625z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M10 .375A9.625 9.625 0 1019.625 10 9.636 9.636 0 0010 .375zm3.47 14.155l-4.22-4.219V4h1.5v5.689l3.78 3.781z"/></svg>`);
let uh = class extends Ae {
    constructor() {
        super(...arguments), this.userData = dt(this, Xe), this.isEraseToolOn = dt(this, ct)
    }
    static get styles() {
        return R`:host{pointer-events:all;padding:8px}button{border:none;background:0 0;margin:-8px;padding:8px}.pill{min-width:155px;height:24px;display:flex;justify-content:center;align-items:center;background-color:#fff;color:#000;border-radius:26px;font-size:14px;font-weight:700;line-height:17px;box-shadow:0 4px 10px rgba(0,0,0,.25);font-family:var(--mona-lisa-font-sans)}.timer{font-family:var(--mona-lisa-font-mono)}icon-history{display:inline-flex;font-size:18px;margin-right:3px}`
    }
    onSignInClick() {
        this.dispatchEvent(g("host-communication", {
            type: Lt.SignIn,
            data: {
                dest: lh(!1)
            }
        }))
    }
    onPlaceATileClick() {
        this.dispatchEvent(g("click-canvas", {
            x: et.getState(),
            y: tt.getState()
        }))
    }
    render() {
        var e;
        if (!(null === (e = this.userData.state()) || void 0 === e ? void 0 : e.canParticipate)) return le`<button @click="${this.onSignInClick}"> <div class="pill"> Log in to place a tile </div> </button>`;
        if (this.nextTileAvailableIn) {
            const e = `${Math.floor(this.nextTileAvailableIn/3600)}`.padStart(2, "0"),
                t = `${Math.floor(this.nextTileAvailableIn%3600/60)}`.padStart(2, "0"),
                n = `${Math.floor(this.nextTileAvailableIn%60)}`.padStart(2, "0");
            return le` <div class="pill timer"> <icon-history></icon-history> ${e}:${t}:${n} </div> `
        }
        return this.isEraseToolOn.state() ? le` <div class="pill"> Select area to erase </div> ` : le` <button @click="${this.onPlaceATileClick}"> <div class="pill"> Place a tile </div> </button> `
    }
};
r([u({
    type: Number,
    attribute: "next-tile-available-in"
})], uh.prototype, "nextTileAvailableIn", void 0), uh = r([c("mona-lisa-status-pill")], uh);
let hh = class extends Ae {
    constructor() {
        super(), this.isVisible = !1, this.isLocked = !1, this.onResize = () => {
            var e;
            this.contentHeight = null === (e = this.layout) || void 0 === e ? void 0 : e.offsetHeight
        }, this.cancelPixel = () => {
            this.dispatchEvent(g("cancel-pixel"))
        }, this.confirmPixel = () => {
            this.dispatchEvent(g("confirm-pixel"))
        }, dt(this, Xe), dt(this, ot)
    }
    static get styles() {
        return Ve(".cancel,\n.confirm {\n  height: 40px;min-width: 40px;padding: 0;border: none;border-radius: 40px;color: #121212;font-size: 20px;position: relative;\n}\n:host {\n  display: block;\n  background-color: #fff;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  padding: 0;\n}\n.container {\n  transition: height 0.3s linear;\n  box-shadow: 0px 4px 10px #000000;\n}\n.layout {\n  padding: 16px calc(16px + var(--sail)) calc(16px + var(--saib)) calc(16px + var(--sair));\n}\n.palette {\n  bottom: 0px;\n  justify-content: center;\n  left: 0px;\n  padding: 0px;\n  display: flex;\n  flex-flow: row wrap;\n  position: relative;\n}\n@media (min-width: 800px) {\n  .palette {\n    max-height: 32px;\n    flex-flow: row nowrap;\n  }\n}\n.color-container {\n  position: relative;\n  height: 32px;\n  flex: 0 0 12.5%;\n}\n@media (min-width: 460px) {\n  .color-container {\n    flex: 0 0 calc(100% / var(--num-colors, 16) * 2);\n  }\n}\n@media (min-width: 800px) {\n  .color-container {\n    flex: 1 1 auto;\n  }\n}\n.color {\n  border: none;\n  position: relative;\n  outline: none;\n  height: 100%;\n  width: 100%;\n  border: 2px solid #fff;\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  cursor: pointer;\n}\n.color.selected {\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n.color:hover + mona-lisa-tooltip {\n  display: block;\n}\n.color div {\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\nmona-lisa-tooltip {\n  display: none;\n  z-index: 1;\n}\n.color-name {\n  font-weight: bold;\n  font-size: 12px;\n  min-width: 50px;\n  padding: 2px 4px;\n}\n.overlay {\n  background: rgba(233, 235, 237, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  inset: 0;\n  position: absolute;\n}\n.actions {\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 12px auto 0;\n  justify-content: center;\n  max-width: calc(163.5px * 2 + 16px);\n}\nicon-close,\nicon-checkmark {\n  font-size: 20px;\n  position: relative;\n}\n.cancel {\n  background-color: #fff;\n  border: 1px solid #d4d7d9;\n  box-sizing: border-box;\n  flex: 1;\n  cursor: pointer;\n}\n.confirm {\n  --button-border-width: 4px;\n  border-image-slice: 1;\n  background-image: linear-gradient(to bottom, #ff6600, #ff4500);\n  position: relative;\n  margin-left: 16px;\n  flex: 1;\n  cursor: pointer;\n}\n.confirm::before {\n  content: '';\n  position: absolute;\n  inset: 4px;\n  border-radius: 32px;\n  background-color: #fff;\n}\n.confirm.disabled {\n  cursor: not-allowed;\n  background-image: linear-gradient(to bottom, #f1f1f1, #f1f1f1);\n}\n")
    }
    firstUpdated(e) {
        this.resizeObserver = new ResizeObserver(this.onResize), this.layout && this.resizeObserver.observe(this.layout), super.firstUpdated(e)
    }
    disconnectedCallback() {
        var e;
        this.layout && (null === (e = this.resizeObserver) || void 0 === e || e.unobserve(this.layout)), super.disconnectedCallback()
    }
    selectColor(e) {
        var t;
        const {
            color: n
        } = null === (t = e.currentTarget) || void 0 === t ? void 0 : t.dataset;
        if (!n) return;
        const i = parseInt(n);
        isFinite(i) && this.dispatchEvent(g("select-color", {
            color: i
        }))
    }
    renderContent() {
        var e, t;
        const n = !!this.nextTileAvailableIn || !(null === (e = Xe.getState()) || void 0 === e ? void 0 : e.canParticipate),
            i = ct.getState() || !this.isLocked && !n,
            r = null === (t = ot.getState()) || void 0 === t ? void 0 : t.colorPalette.colors,
            o = null == this.selectedColor;
        return le` <div class="palette"> ${null==r?void 0:r.map((e=>{const t=i&&this.selectedColor===e.index,n=(o=e.index,xt[o]);var o;return le` <div class="color-container" style="${Ku({"--num-colors":`${r.length}`})}"> <button class="color ${yn({selected:t})}" data-color="${e.index}" @click="${this.selectColor}"> <div style="${Ku({backgroundColor:e.hex,border:`1px solid ${_t(e.hex)&&!t?"#E9EBED":e.hex}`})}"></div> </button> ${n?le` <mona-lisa-tooltip isOpen small> <div class="color-name">${n}</div> </mona-lisa-tooltip> `:""} </div> `}))} ${i?"":le` <div class="overlay"> ${n?le` <mona-lisa-status-pill next-tile-available-in="${un(this.nextTileAvailableIn)}"></mona-lisa-status-pill> `:""} </div> `} </div> <div class="actions"> <button class="cancel" @click="${this.cancelPixel}"> <icon-close></icon-close> </button> ${i?le` <button class="confirm ${yn({disabled:o})}" ?disabled="${o}" @click="${this.confirmPixel}"> <icon-checkmark></icon-checkmark> </button>`:""} </div> `
    }
    render() {
        return le` <div class="container" style="${Ku({height:`${this.isVisible&&this.contentHeight||0}px`})}"> <div class="layout">${this.renderContent()}</div> </div> `
    }
};
r([u({
    type: Number,
    attribute: "color"
})], hh.prototype, "selectedColor", void 0), r([u({
    type: Boolean,
    attribute: "is-visible"
})], hh.prototype, "isVisible", void 0), r([u({
    type: Boolean,
    attribute: "is-locked"
})], hh.prototype, "isLocked", void 0), r([u({
    type: Number,
    attribute: "next-tile-available-in"
})], hh.prototype, "nextTileAvailableIn", void 0), r([h()], hh.prototype, "contentHeight", void 0), r([p(".layout")], hh.prototype, "layout", void 0), hh = r([c("mona-lisa-color-picker")], hh);
let dh = class extends Ae {
    constructor() {
        super(), this.syncCoordinatesToHost = an(500, !1, (() => {
            const {
                cx: e,
                cy: t,
                px: n
            } = rl();
            this.dispatchEvent(g("host-communication", {
                type: Lt.SyncCoordinates,
                data: {
                    cx: e,
                    cy: t,
                    px: n
                }
            }))
        })), dt(this, et), dt(this, tt), dt(this, it)
    }
    static get styles() {
        return R`:host{padding:8px;margin:-8px;pointer-events:all;font-family:var(--mona-lisa-font-mono)}.layout{display:flex;min-width:155px;height:24px;justify-content:center;align-items:center;align-self:center;background-color:#fff;color:#000;border-radius:26px;font-weight:700;font-size:14px;line-height:17px;box-shadow:0 4px 10px rgba(0,0,0,.25)}`
    }
    updated(e) {
        this.syncCoordinatesToHost(), super.updated(e)
    }
    async copyLocationUrl() {
        try {
            await navigator.clipboard.writeText(location.href)
        } catch (e) {
            dn(e)
        }
    }
    render() {
        const {
            x: e,
            y: t
        } = il(), n = (it.getState() / 10).toFixed(1).replace(/\.0$/, "");
        return le` <div class="layout"> (${e},${t}) ${n}x </div> `
    }
};
dh = r([c("mona-lisa-coordinates")], dh), rn("icon-help", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zm0 17A7.875 7.875 0 1117.875 10 7.884 7.884 0 0110 17.875z"/><path d="M10.479 13.635a1.085 1.085 0 00-.547-.141 1.035 1.035 0 00-.537.145 1.009 1.009 0 00-.379.388 1.1 1.1 0 00-.137.547 1.018 1.018 0 00.143.533 1.045 1.045 0 00.387.38 1.056 1.056 0 00.536.14 1.076 1.076 0 00.54-.14 1.008 1.008 0 00.387-.385 1.08 1.08 0 00.14-.541 1.05 1.05 0 00-.533-.926zM11.507 5.641a3.213 3.213 0 00-1.425-.309 3.15 3.15 0 00-1.535.368 2.646 2.646 0 00-1.028.974 2.52 2.52 0 00-.363 1.312h1.463a1.172 1.172 0 01.181-.661 1.327 1.327 0 01.516-.468 1.623 1.623 0 011.415-.017 1.212 1.212 0 01.5.431 1.1 1.1 0 01.181.618 1.063 1.063 0 01-.119.5 1.56 1.56 0 01-.3.4 9.531 9.531 0 01-.492.43 6.846 6.846 0 00-.656.585 2.292 2.292 0 00-.431.656 2.206 2.206 0 00-.178.919v.766h1.429v-.793a1.281 1.281 0 01.13-.58 1.824 1.824 0 01.321-.459c.128-.132.3-.3.533-.493a7.691 7.691 0 00.633-.584 2.279 2.279 0 00.41-.622 2.015 2.015 0 00.167-.85A2.262 2.262 0 0012.5 6.5a2.41 2.41 0 00-.993-.859z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zM11.107 15a1.242 1.242 0 01-.465.462 1.342 1.342 0 01-1.3 0 1.236 1.236 0 01-.465-.465 1.287 1.287 0 01-.167-.65 1.306 1.306 0 01.167-.653 1.251 1.251 0 01.465-.471 1.27 1.27 0 01.653-.175 1.253 1.253 0 01.649.175A1.322 1.322 0 0111.107 15zm1.781-6.251a2.423 2.423 0 01-.407.646 8.565 8.565 0 01-.629.615q-.335.3-.53.513A1.922 1.922 0 0011 11a1.375 1.375 0 00-.13.6v.6H9.049v-.574a2.411 2.411 0 01.181-.963 2.479 2.479 0 01.435-.694 7.663 7.663 0 01.663-.632q.287-.254.454-.421a1.56 1.56 0 00.277-.372.93.93 0 00.109-.445.856.856 0 00-.15-.5 1.029 1.029 0 00-.407-.346 1.262 1.262 0 00-.564-.127 1.314 1.314 0 00-.608.145 1.153 1.153 0 00-.448.4 1.035 1.035 0 00-.174.566H6.93a2.887 2.887 0 01.417-1.486 2.822 2.822 0 011.118-1.042 3.441 3.441 0 011.63-.377 3.483 3.483 0 011.518.322 2.535 2.535 0 011.059.9 2.331 2.331 0 01.383 1.318 2.136 2.136 0 01-.167.875z"/></svg>`);
const ph = tn(Ae);
let fh = class extends ph {
    static get styles() {
        return R`icon-help{display:inline-flex}`
    }
    handleClick() {
        this.trackEvent(Yt({
            source: Jt.HotPotato,
            action: Xt.Click,
            noun: Zt.Tutorial
        }))
    }
    render() {
        return le` <mona-lisa-icon-button @click="${this.handleClick}"> <icon-help></icon-help> </mona-lisa-icon-button>`
    }
};
fh = r([c("mona-lisa-help-button")], fh);
let vh = class extends Ae {
    constructor() {
        super(), this.onKeyUp = e => {
            "Escape" === e.key && this.dispatchEvent(g("cancel-pixel"))
        }, dt(this, lt)
    }
    static get styles() {
        return R`.pixel{display:block;border:5px solid #fff;box-sizing:border-box}`
    }
    disconnectedCallback() {
        super.disconnectedCallback(), document.removeEventListener("keyup", this.onKeyUp)
    }
    connectedCallback() {
        super.connectedCallback(), document.addEventListener("keyup", this.onKeyUp)
    }
    calculateDimension(e, t, n) {
        if (t.length <= 1 || n) return 100;
        return 100 * (Math.abs(t[0][e] - t[1][e]) + 1)
    }
    render() {
        const e = ul(),
            t = this.calculateDimension("y", lt.getState(), e),
            n = this.calculateDimension("x", lt.getState(), e);
        return le` <div class="pixel" style="${Ku({height:`${t}%`,width:`${n}%`,background:this.color?wt(this.color):"repeating-linear-gradient(\n      135deg, \n      rgba(255, 255, 255, 0.4), \n      rgba(255, 255, 255, 0.4) 10px, \n      rgba(0,0,0, 0.1) 10px, \n      rgba(0,0,0, 0.1) 20px \n    )"})}"></div> `
    }
};
r([u({
    type: Number,
    reflect: !0
})], vh.prototype, "color", void 0), vh = r([c("mona-lisa-erasure-preview")], vh), rn("icon-external-link", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M15.838 16.5a1.377 1.377 0 01-1.375 1.375h-11A1.377 1.377 0 012.088 16.5v-11a1.377 1.377 0 011.375-1.375H7.11v-1.25H3.463A2.629 2.629 0 00.838 5.5v11a2.629 2.629 0 002.625 2.625h11a2.629 2.629 0 002.625-2.625v-3.6h-1.25z"/><path d="M18.5.875h-5v1.25h3.491l-8.433 8.433.884.884 8.433-8.433V6.5h1.25v-5A.625.625 0 0018.5.875z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M15 16a1 1 0 01-1 1H3.926a1 1 0 01-1-1V6a1 1 0 011-1h3.3V3h-3.3a3 3 0 00-3 3v10a3 3 0 003 3H14a3 3 0 003-3v-3.225h-2z"/><path d="M18 1.375h-5a.625.625 0 00-.442 1.067l1.793 1.793-6.058 6.058 1.414 1.414 6.058-6.058 1.793 1.793a.625.625 0 00.442.183.64.64 0 00.239-.047.626.626 0 00.386-.578V2A.625.625 0 0018 1.375z"/></svg>`);
let mh = class extends Ae {
    constructor() {
        super(...arguments), this.name = "modal", this.header = "Place", this.isOpen = !1, this.handleKeyPress = e => {
            "Escape" === e.key && this.handleModalClose()
        }, this.handleModalClose = () => this.dispatchEvent(g(this.name, this))
    }
    static get styles() {
        return R`:host{display:none;width:100vw;height:100vh;z-index:100;font-family:var(--mona-lisa-font-sans)}:host([isOpen]){display:block}.overlay{position:fixed;background:rgba(0,0,0,.5);top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;z-index:1}.modal{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;display:flex;flex-direction:column;color:#000;border-radius:8px;min-width:200px;max-width:275px;padding:16px;z-index:1}.modal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.modal-header>h2{font-size:24px;line-height:22px;font-weight:700;margin:0;padding:0}.close-button{width:20px;height:20px;font-size:20px;cursor:pointer}.modal-footer{margin-top:32px;display:flex;justify-content:center;align-items:center;position:relative}mona-lisa-mute-button{position:absolute;bottom:-6px;left:-10px}.help-link{position:absolute;bottom:-6px;right:-10px;background:0 0;cursor:pointer;border:none;pointer-events:all;border-radius:50%;padding:8px}.help-link-layout{background-color:#fff;display:flex;align-items:center;justify-content:center;border-radius:50%;height:36px;width:36px;box-shadow:rgb(0 0 0 / 25%) 0 4px 10px;color:#000;font-size:20px;pointer-events:all;box-sizing:border-box}icon-external-link{display:inline-flex}@media (min-width:460px){.modal{max-width:325px;min-width:325px;padding:24px}}@media (min-width:800px){.modal-footer{margin-top:56px}}`
    }
    connectedCallback() {
        super.connectedCallback()
    }
    render() {
        return le` <div class="overlay" @click="${this.handleModalClose}" @keyup="${this.handleKeyPress}"></div> <div class="modal"> <div class="modal-header"> <h2>${this.header}</h2> <icon-close class="close-button" @click="${this.handleModalClose}"></icon-close> </div> <div class="modal-content"> <slot></slot> </div> <div class="modal-footer"> <mona-lisa-mute-button></mona-lisa-mute-button> ${this.showHelpLink?le` <a class="help-link" target="_blank" href="https://www.reddit.com/r/place/comments/ttqdrt/welcome_to_rplace/" rel="noopener nofollow"> <div class="help-link-layout"> <icon-external-link></icon-external-link> </div> </a> `:""} <img alt="Place Logo" src="${CLIENT_CONFIG.STATIC_BASE_URL}assets/img/place-logo.svg" height="40" width="40"> </div> </div>`
    }
};
r([u({
    type: String,
    reflect: !0
})], mh.prototype, "name", void 0), r([u({
    type: String
})], mh.prototype, "header", void 0), r([u({
    type: Boolean,
    reflect: !0
})], mh.prototype, "isOpen", void 0), r([u({
    type: Boolean,
    attribute: "show-help-link"
})], mh.prototype, "showHelpLink", void 0), mh = r([c("mona-lisa-modal")], mh), rn("icon-volume", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M10.543.5a1.12 1.12 0 00-1.182.117L3.789 4.875h-1.8A1.127 1.127 0 00.868 6v8a1.127 1.127 0 001.125 1.125h1.8l5.572 4.258a1.117 1.117 0 00.681.232 1.128 1.128 0 001.127-1.126V1.511A1.119 1.119 0 0010.543.5zm-.624 17.736l-5.708-4.361H2.118v-7.75h2.093l5.708-4.361zM13 3.375v1.25a5.375 5.375 0 010 10.75v1.25a6.625 6.625 0 000-13.25z"/><path d="M16.125 10A3.129 3.129 0 0013 6.875v1.25a1.875 1.875 0 010 3.75v1.25A3.129 3.129 0 0016.125 10z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M10.543.5a1.12 1.12 0 00-1.182.117L3.789 4.875h-1.8A1.127 1.127 0 00.868 6v8a1.127 1.127 0 001.125 1.125h1.8l5.572 4.258a1.117 1.117 0 00.681.232 1.128 1.128 0 001.127-1.126V1.511A1.119 1.119 0 0010.543.5zM13 3v2a5 5 0 010 10v2a7 7 0 000-14z"/><path d="M16.5 10A3.5 3.5 0 0013 6.5v2a1.5 1.5 0 010 3v2a3.5 3.5 0 003.5-3.5z"/></svg>`), rn("icon-volume-mute", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M19.442 7.442l-.884-.884L16.5 8.616l-2.058-2.058-.884.884L15.616 9.5l-2.058 2.058.884.884 2.058-2.058 2.058 2.058.884-.884L17.384 9.5l2.058-2.058zM10.543.5a1.12 1.12 0 00-1.182.117L3.789 4.875h-1.8A1.127 1.127 0 00.868 6v8a1.127 1.127 0 001.125 1.125h1.8l5.572 4.258a1.117 1.117 0 00.681.232 1.128 1.128 0 001.127-1.126V1.511A1.119 1.119 0 0010.543.5zm-.624 17.736l-5.708-4.361H2.118v-7.75h2.093l5.708-4.361z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M19.707 7.707l-1.414-1.414L16.5 8.086l-1.793-1.793-1.414 1.414L15.086 9.5l-1.793 1.793 1.414 1.414 1.793-1.793 1.793 1.793 1.414-1.414L17.914 9.5l1.793-1.793zM10.543.5a1.12 1.12 0 00-1.182.117L3.789 4.875h-1.8A1.127 1.127 0 00.868 6v8a1.127 1.127 0 001.125 1.125h1.8l5.572 4.258a1.117 1.117 0 00.681.232 1.128 1.128 0 001.127-1.126V1.511A1.119 1.119 0 0010.543.5z"/></svg>`);
let yh = class extends Ae {
    constructor() {
        super(...arguments), this.audioIsMuted = !1
    }
    static get styles() {
        return R`:host{pointer-events:all;cursor:pointer}mona-lisa-icon-button{display:inline-flex;margin:0;padding:0}icon-volume,icon-volume-mute{padding-top:3px}`
    }
    toggleMute() {
        this.audioIsMuted = !this.audioIsMuted, ml(yl)(this.audioIsMuted);
        try {
            localStorage.setItem("ml-muted-state", JSON.stringify(this.audioIsMuted))
        } catch (e) {
            dn(e)
        }
    }
    connectedCallback() {
        super.connectedCallback();
        try {
            this.audioIsMuted = JSON.parse(`${localStorage.getItem("ml-muted-state")}`), ml(yl)(this.audioIsMuted)
        } catch (e) {
            dn(e)
        }
    }
    render() {
        return le` <mona-lisa-icon-button class="${yn({muted:!this.audioIsMuted})}" @click="${this.toggleMute}"> ${this.audioIsMuted?le`<icon-volume-mute></icon-volume-mute>`:le`<icon-volume></icon-volume>`} </mona-lisa-icon-button> `
    }
};
r([h()], yh.prototype, "audioIsMuted", void 0), yh = r([c("mona-lisa-mute-button")], yh);
let gh = class extends Ae {
    constructor() {
        super(...arguments), this.height = "24", this.width = "24"
    }
    static get styles() {
        return R`svg{display:block}`
    }
    render() {
        return le` <svg fill="none" height="${this.height}" viewBox="0 0 24 24" width="${this.width}" xmlns="http://www.w3.org/2000/svg"> <g stroke-opacity=".6" stroke-width="2"> <g stroke="#000"> <path d="m3 9v-6h6"/> <path d="m14.9999 3h6v6"/> <path d="m20.9999 15.0001v6h-6"/> <path d="m9 21.0001h-6v-6"/> </g> <path d="m1 9v-8h8" stroke="#fff"/> <path d="m15 1h8v8" stroke="#fff"/> <path d="m23 15v8h-8" stroke="#fff"/> <path d="m9 23h-8v-8" stroke="#fff"/> </g> </svg> `
    }
};
r([u({
    type: String
})], gh.prototype, "height", void 0), r([u({
    type: String
})], gh.prototype, "width", void 0), gh = r([c("mona-lisa-target")], gh);
let bh = class extends Ae {
    static get styles() {
        return R`.pixel{display:block;transform:translate(-5px,-5px);transition:background-color .3s linear 0s,border-color .3s linear 0s;width:100%;height:100%}:host([color]) .pixel{border:5px solid #fff;box-shadow:0 4px 10px 0 rgba(0,0,0,.5)}`
    }
    render() {
        return le` <div class="pixel" style="${Ku({backgroundColor:wt(this.color)})}"> ${"number"!=typeof this.color?le`<mona-lisa-target height="120%" width="120%"></mona-lisa-target>`:""} </div> `
    }
};
r([u({
    type: Number,
    reflect: !0
})], bh.prototype, "color", void 0), bh = r([c("mona-lisa-pixel-preview")], bh), rn("icon-share-android", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M15.5 13.375a3.108 3.108 0 00-2.295 1.025l-5.769-3.369a2.907 2.907 0 000-2.062L13.205 5.6a3.113 3.113 0 10-.83-2.1 3.075 3.075 0 00.189 1.031L6.8 7.9a3.125 3.125 0 100 4.208l5.769 3.365a3.075 3.075 0 00-.189 1.031 3.125 3.125 0 103.12-3.129zm0-11.75A1.875 1.875 0 1113.625 3.5 1.877 1.877 0 0115.5 1.625zm-11 10.25A1.875 1.875 0 116.375 10 1.877 1.877 0 014.5 11.875zm11 6.5a1.875 1.875 0 111.875-1.875 1.877 1.877 0 01-1.875 1.875z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M15.5 13.375a3.109 3.109 0 00-2.131.852L7.574 10.5a3.083 3.083 0 00.051-.5 3.083 3.083 0 00-.051-.5l5.8-3.725a3.116 3.116 0 10-.999-2.275 3.083 3.083 0 00.051.5L6.631 7.727a3.125 3.125 0 100 4.546L12.426 16a3.083 3.083 0 00-.051.5 3.125 3.125 0 103.125-3.125z"/></svg>`), rn("icon-share-ios", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M17.875 11v5.5a1.377 1.377 0 01-1.375 1.375h-13A1.377 1.377 0 012.125 16.5V11H.875v5.5A2.629 2.629 0 003.5 19.125h13a2.629 2.629 0 002.625-2.625V11z"/><path d="M9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.625.625 0 00-.884 0l-4 4 .884.884z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M17 11v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5H1v5a3 3 0 003 3h12a3 3 0 003-3v-5z"/><path d="M9 4.414V13h2V4.414l2.293 2.293 1.414-1.414-4-4a1 1 0 00-1.414 0l-4 4 1.414 1.414z"/></svg>`);
const wh = tn(Ae);
let xh = class extends wh {
    constructor() {
        super(...arguments), this.isAndroid = qt() || navigator.userAgent.match(/Android/i)
    }
    static get styles() {
        return R`icon-share-android,icon-share-ios{display:inline-flex}`
    }
    openShareSheet() {
        this.dispatchEvent(g("toggle-share-sheet", {
            isVisible: !0
        })), this.trackEvent(Yt({
            source: Jt.HotPotato,
            action: Xt.Click,
            noun: Zt.Share
        }))
    }
    render() {
        return le` <mona-lisa-icon-button @click="${this.openShareSheet}"> ${this.isAndroid?le`<icon-share-android></icon-share-android>`:le`<icon-share-ios></icon-share-ios>`} </mona-lisa-icon-button> `
    }
};

function _h(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Eh(e, t) {
    return Eh = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    }, Eh(e, t)
}

function Sh(e) {
    return Sh = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }, Sh(e)
}

function kh() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
    } catch (e) {
        return !1
    }
}

function Th(e, t, n) {
    return Th = kh() ? Reflect.construct : function(e, t, n) {
        var i = [null];
        i.push.apply(i, t);
        var r = new(Function.bind.apply(e, i));
        return n && Eh(r, n.prototype), r
    }, Th.apply(null, arguments)
}

function Ch(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return Ch = function(e) {
        if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
        var n;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, i)
        }

        function i() {
            return Th(e, arguments, Sh(this).constructor)
        }
        return i.prototype = Object.create(e.prototype, {
            constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), Eh(i, e)
    }, Ch(e)
}
xh = r([c("mona-lisa-share-button")], xh);
var Oh = {
    1: "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
    2: "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
    3: "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
    4: "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
    5: "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
    6: "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
    7: "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
    8: "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
    9: "Please provide a number of steps to the modularScale helper.\n\n",
    10: "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
    11: 'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',
    12: 'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',
    13: 'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',
    14: 'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
    15: 'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
    16: "You must provide a template to this method.\n\n",
    17: "You passed an unsupported selector state to this method.\n\n",
    18: "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
    19: "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
    20: "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
    21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
    22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
    23: "fontFace expects a name of a font-family.\n\n",
    24: "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
    25: "fontFace expects localFonts to be an array.\n\n",
    26: "fontFace expects fileFormats to be an array.\n\n",
    27: "radialGradient requries at least 2 color-stops to properly render.\n\n",
    28: "Please supply a filename to retinaImage() as the first argument.\n\n",
    29: "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
    30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
    31: "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
    32: "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
    33: "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
    34: "borderRadius expects a radius value as a string or number as the second argument.\n\n",
    35: 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
    36: "Property must be a string value.\n\n",
    37: "Syntax Error at %s.\n\n",
    38: "Formula contains a function that needs parentheses at %s.\n\n",
    39: "Formula is missing closing parenthesis at %s.\n\n",
    40: "Formula has too many closing parentheses at %s.\n\n",
    41: "All values in a formula must have the same unit or be unitless.\n\n",
    42: "Please provide a number of steps to the modularScale helper.\n\n",
    43: "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
    44: "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
    45: "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
    46: "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
    47: "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
    48: "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
    49: "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
    50: "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
    51: "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
    52: "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
    53: "fontFace expects localFonts to be an array.\n\n",
    54: "fontFace expects fileFormats to be an array.\n\n",
    55: "fontFace expects a name of a font-family.\n\n",
    56: "linearGradient requries at least 2 color-stops to properly render.\n\n",
    57: "radialGradient requries at least 2 color-stops to properly render.\n\n",
    58: "Please supply a filename to retinaImage() as the first argument.\n\n",
    59: "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
    60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
    61: "Property must be a string value.\n\n",
    62: "borderRadius expects a radius value as a string or number as the second argument.\n\n",
    63: 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
    64: "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
    65: "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
    66: "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
    67: "You must provide a template to this method.\n\n",
    68: "You passed an unsupported selector state to this method.\n\n",
    69: 'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',
    70: 'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',
    71: 'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',
    72: 'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',
    73: "Please provide a valid CSS variable.\n\n",
    74: "CSS variable not found and no default was provided.\n\n",
    75: "important requires a valid style object, got a %s instead.\n\n",
    76: "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
    77: 'remToPx expects a value in "rem" but you provided it in "%s".\n\n',
    78: 'base must be set in "px" or "%" but you set it in "%s".\n'
};

function Ah() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var i, r = t[0],
        o = [];
    for (i = 1; i < t.length; i += 1) o.push(t[i]);
    return o.forEach((function(e) {
        r = r.replace(/%[a-z]/, e)
    })), r
}
var Ih = function(e) {
    var t, n;

    function i(t) {
        var n;
        if ("production" === process.env.NODE_ENV) n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + t + " for more information.") || this;
        else {
            for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) r[o - 1] = arguments[o];
            n = e.call(this, Ah.apply(void 0, [Oh[t]].concat(r))) || this
        }
        return _h(n)
    }
    return n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, Eh(t, n), i
}(Ch(Error));

function Mh(e) {
    return Math.round(255 * e)
}

function Ph(e, t, n) {
    return Mh(e) + "," + Mh(t) + "," + Mh(n)
}

function Dh(e, t, n, i) {
    if (void 0 === i && (i = Ph), 0 === t) return i(n, n, n);
    var r = (e % 360 + 360) % 360 / 60,
        o = (1 - Math.abs(2 * n - 1)) * t,
        s = o * (1 - Math.abs(r % 2 - 1)),
        a = 0,
        c = 0,
        l = 0;
    r >= 0 && r < 1 ? (a = o, c = s) : r >= 1 && r < 2 ? (a = s, c = o) : r >= 2 && r < 3 ? (c = o, l = s) : r >= 3 && r < 4 ? (c = s, l = o) : r >= 4 && r < 5 ? (a = s, l = o) : r >= 5 && r < 6 && (a = o, l = s);
    var u = n - o / 2;
    return i(a + u, c + u, l + u)
}
var Nh = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "639",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};
var Rh, Lh = /^#[a-fA-F0-9]{6}$/,
    Fh = /^#[a-fA-F0-9]{8}$/,
    jh = /^#[a-fA-F0-9]{3}$/,
    $h = /^#[a-fA-F0-9]{4}$/,
    zh = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
    Vh = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,
    qh = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    Uh = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;

function Bh(e) {
    if ("string" != typeof e) throw new Ih(3);
    var t = function(e) {
        if ("string" != typeof e) return e;
        var t = e.toLowerCase();
        return Nh[t] ? "#" + Nh[t] : e
    }(e);
    if (t.match(Lh)) return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16)
    };
    if (t.match(Fh)) {
        var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
        return {
            red: parseInt("" + t[1] + t[2], 16),
            green: parseInt("" + t[3] + t[4], 16),
            blue: parseInt("" + t[5] + t[6], 16),
            alpha: n
        }
    }
    if (t.match(jh)) return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16)
    };
    if (t.match($h)) {
        var i = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
        return {
            red: parseInt("" + t[1] + t[1], 16),
            green: parseInt("" + t[2] + t[2], 16),
            blue: parseInt("" + t[3] + t[3], 16),
            alpha: i
        }
    }
    var r = zh.exec(t);
    if (r) return {
        red: parseInt("" + r[1], 10),
        green: parseInt("" + r[2], 10),
        blue: parseInt("" + r[3], 10)
    };
    var o = Vh.exec(t.substring(0, 50));
    if (o) return {
        red: parseInt("" + o[1], 10),
        green: parseInt("" + o[2], 10),
        blue: parseInt("" + o[3], 10),
        alpha: parseFloat("" + o[4])
    };
    var s = qh.exec(t);
    if (s) {
        var a = "rgb(" + Dh(parseInt("" + s[1], 10), parseInt("" + s[2], 10) / 100, parseInt("" + s[3], 10) / 100) + ")",
            c = zh.exec(a);
        if (!c) throw new Ih(4, t, a);
        return {
            red: parseInt("" + c[1], 10),
            green: parseInt("" + c[2], 10),
            blue: parseInt("" + c[3], 10)
        }
    }
    var l = Uh.exec(t.substring(0, 50));
    if (l) {
        var u = "rgb(" + Dh(parseInt("" + l[1], 10), parseInt("" + l[2], 10) / 100, parseInt("" + l[3], 10) / 100) + ")",
            h = zh.exec(u);
        if (!h) throw new Ih(4, t, u);
        return {
            red: parseInt("" + h[1], 10),
            green: parseInt("" + h[2], 10),
            blue: parseInt("" + h[3], 10),
            alpha: parseFloat("" + l[4])
        }
    }
    throw new Ih(5)
}

function Qh(e) {
    if ("transparent" === e) return 0;
    var t = Bh(e),
        n = Object.keys(t).map((function(e) {
            var n = t[e] / 255;
            return n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
        })),
        i = n[0],
        r = n[1],
        o = n[2];
    return parseFloat((.2126 * i + .7152 * r + .0722 * o).toFixed(3))
}! function(e) {
    e.Coordinates = "coordinate", e.Image = "canvas_image"
}(Rh || (Rh = {}));
let Hh = class extends Ae {
    constructor() {
        super(...arguments), this.height = 32, this.width = 32
    }
    render() {
        return le` <svg fill="none" height="${this.height}" viewBox="0 0 32 32" width="${this.width}" xmlns="http://www.w3.org/2000/svg"> <g fill="#ff4500"> <path d="m6.4 0h-6.4v6.4h6.4z"/> <path d="m12.8 0h-6.4v6.4h6.4z"/> <path d="m19.2 0h-6.4v6.4h6.4z"/> <path d="m25.6 0h-6.4v6.4h6.4z"/> <path d="m32 6.4h-6.4v6.4h6.4z"/> <path d="m32 12.8h-6.4v6.4h6.4z"/> <path d="m32 19.2h-6.4v6.4h6.4z"/> <path d="m32 25.6h-6.4v6.4h6.4z"/> <path d="m19.2 25.6h-6.4v6.4h6.4z"/> <path d="m25.6 25.6h-6.4v6.4h6.4z"/> <path d="m6.4 25.6h-6.4v6.4h6.4z"/> </g> <path d="m19.2 12.8h-6.4v6.4h6.4z" fill="#000"/> <g fill="#ff4500"> <path d="m6.4 19.2h-6.4v6.4h6.4z"/> <path d="m6.4 12.8h-6.4v6.4h6.4z"/> <path d="m6.4 6.4h-6.4v6.4h6.4z"/> </g> <path d="m19.2 6.4h-12.8v25.6h6.4v-6.4h12.8v-19.2zm0 12.8h-6.4v-6.4h6.4z" fill="#fff"/> </svg> `
    }
};
r([u({
    type: Number
})], Hh.prototype, "height", void 0), r([u({
    type: Number
})], Hh.prototype, "width", void 0), Hh = r([c("mona-lisa-logo")], Hh), rn("icon-download", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M17.875 11v5.5a1.377 1.377 0 01-1.375 1.375h-13A1.377 1.377 0 012.125 16.5V11H.875v5.5A2.629 2.629 0 003.5 19.125h13a2.629 2.629 0 002.625-2.625V11z"/><path d="M9.741 14.583H10l.33-.029 4.112-4.112-.884-.884-2.933 2.933V1h-1.25v11.491L6.442 9.558l-.884.884 3.929 3.929.254.212z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M17.5 11v5.5a1 1 0 01-1 1h-13a1 1 0 01-1-1V11h-2v5.5a3 3 0 003 3h13a3 3 0 003-3V11z"/><path d="M9.586 14.958H10l.485-.029 4.222-4.222-1.414-1.414L11 11.586V1H9v10.586L6.707 9.293l-1.414 1.414 3.929 3.929.364.322z"/></svg>`), rn("icon-location", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M10 .375A8.134 8.134 0 001.875 8.5c0 5.569 6.932 10.445 7.721 10.981a.716.716 0 00.4.126.7.7 0 00.4-.125c.791-.537 7.723-5.413 7.723-10.982A8.134 8.134 0 0010 .375zm0 17.861c-1.378-1-6.875-5.257-6.875-9.736a6.875 6.875 0 0113.75 0c0 4.477-5.493 8.736-6.875 9.736z"/><path d="M10 4.264a4.181 4.181 0 104.181 4.18A4.185 4.185 0 0010 4.264zm0 7.111a2.931 2.931 0 112.931-2.931A2.934 2.934 0 0110 11.375z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M10 .375A8.134 8.134 0 001.875 8.5c0 5.569 6.932 10.445 7.721 10.981a.716.716 0 00.4.126.7.7 0 00.4-.125c.791-.537 7.723-5.413 7.723-10.982A8.134 8.134 0 0010 .375zM10 12a3.556 3.556 0 113.556-3.556A3.556 3.556 0 0110 12z"/></svg>`), rn("icon-image-post", ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M17.5.875h-15A1.627 1.627 0 00.875 2.5v15A1.627 1.627 0 002.5 19.125h15a1.627 1.627 0 001.625-1.625v-15A1.627 1.627 0 0017.5.875zM2.125 17.5v-2.741l2.7-2.7a2.377 2.377 0 013.358 0l5.812 5.812H2.5a.375.375 0 01-.375-.371zm15.75 0a.375.375 0 01-.375.375h-1.741l-6.7-6.7a3.629 3.629 0 00-5.126 0l-1.808 1.816V2.5a.375.375 0 01.375-.375h15a.375.375 0 01.375.375z"/><path d="M13 3.875A3.125 3.125 0 1016.125 7 3.129 3.129 0 0013 3.875zm0 5A1.875 1.875 0 1114.875 7 1.877 1.877 0 0113 8.875z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" data-name="icons final" viewBox="0 0 20 20"><path d="M8.179 12.063a2.377 2.377 0 00-3.358 0L.942 15.942l-.067-.067V17.5A1.627 1.627 0 002.5 19.125h12.741z"/><circle cx="13" cy="7" r="1.875"/><path d="M17.5.875h-15A1.627 1.627 0 00.875 2.5v11.741l3.062-3.062a3.629 3.629 0 015.126 0l7.879 7.879-.067.067h.625a1.627 1.627 0 001.625-1.625v-15A1.627 1.627 0 0017.5.875zm-4.5 9.25A3.125 3.125 0 1116.125 7 3.129 3.129 0 0113 10.125z"/></svg>`);
let Gh = class extends Ae {
    constructor() {
        super(...arguments), this.isPending = !1, this.mode = Rh.Image
    }
    static get styles() {
        return Ve(".cancel,\n.share {\n  height: 40px;min-width: 40px;padding: 0;border: none;border-radius: 40px;color: #121212;font-size: 20px;position: relative;\n}\n:host {\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 0;\n  pointer-events: all;\n}\n.controls {\n  background: #fff;\n  flex: 0 0 auto;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  padding: 8px calc(var(--sair) + 8px) calc(var(--saib) + 8px) calc(var(--sail) + 8px);\n  position: relative;\n}\n.modes {\n  background: #edeff1;\n  border: 4px solid #edeff1;\n  border-radius: 40px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  margin: 0 16px;\n  padding: 2px;\n  box-sizing: border-box;\n}\n.modes label {\n  width: 58px;\n  height: 32px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modes label.selected {\n  background: #ffffff;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 32px;\n}\n.modes label input {\n  display: none;\n}\n.modes label icon-image-post,\n.modes label icon-location {\n  color: #121212;\n  font-size: 20px;\n}\n.cancel {\n  background-color: #fff;\n  border: 1px solid #d4d7d9;\n  box-sizing: border-box;\n  flex: 1 1 0%;\n  max-width: 163.5px;\n}\n.share {\n  --button-border-width: 4px;\n  border-image-slice: 1;\n  background-image: linear-gradient(to bottom, #ff6600, #ff4500);\n  position: relative;\n  flex: 1 1 0%;\n  max-width: 163.5px;\n}\n.share::before {\n  content: '';\n  position: absolute;\n  inset: 4px;\n  border-radius: 32px;\n  background-color: #fff;\n}\n.share[disabled] {\n  cursor: not-allowed;\n  background-image: linear-gradient(to bottom, #f1f1f1, #f1f1f1);\n  transition: background-image 0.3s ease-out;\n}\nmona-lisa-loader {\n  position: relative;\n}\nicon-close,\nicon-checkmark {\n  font-size: 20px;\n  position: relative;\n}\n")
    }
    onCancelClick() {
        this.dispatchEvent(g("toggle-share-sheet", {
            isVisible: !1
        }))
    }
    async onShareClick() {
        this.dispatchEvent(g("share", {
            mode: this.mode
        }))
    }
    changeMode(e) {
        this.mode = e.target.value, this.dispatchEvent(g("change-share-mode", {
            mode: this.mode
        }))
    }
    render() {
        return le` <div class="controls"> <button class="cancel" @click="${this.onCancelClick}"> <icon-close></icon-close> </button> <div class="modes"> ${[Rh.Image,Rh.Coordinates].map((e=>le` <label class="${yn({selected:e===this.mode})}"> <input type="radio" name="mode" value="${e}" ?checked="${e===this.mode}" @change="${this.changeMode}"> ${e===Rh.Coordinates?le`<icon-location></icon-location>`:e===Rh.Image?le`<icon-image-post></icon-image-post>`:""} </label> `))} </div> <button class="share" @click="${this.onShareClick}" ?disabled="${this.isPending}"> ${this.isPending?le`<mona-lisa-loader></mona-lisa-loader>`:le`<icon-checkmark></icon-checkmark>`} </button> </div> `
    }
};
r([u({
    type: Boolean,
    attribute: "is-pending"
})], Gh.prototype, "isPending", void 0), r([u({
    type: String
})], Gh.prototype, "mode", void 0), Gh = r([c("mona-lisa-share-sheet")], Gh);
const Wh = tn(Ae);
let Kh = class extends Wh {
    constructor() {
        super(), this.isSafari = !1, this.isSheetOpen = !1, this.timestamp = Date.now(), this.mode = Rh.Image, this.renderShareUI = !1, this.renderAllFrames = !1, this.isSharing = !1, this._events = new Le(this), this.onRegisterCamera = this._events.define("register-camera", (e => {
            this.camera = e.detail
        })), this.onRegisterCanvas = this._events.define("register-canvas", (e => {
            this.canvas = e.detail
        })), this.onShare = this._events.define("share", (async () => {
            this.isSharing = !0, await this.updateComplete, await this.share(), this.isSharing = !1
        })), this.onChangeShareMode = this._events.define("change-share-mode", (e => {
            this.mode = e.detail.mode, this.renderAllFrames = !0
        })), this.renderCoordinates = e => {
            const t = il(),
                n = this.getCanvasPixelColor(t);
            return le` <div class="shadow ${yn({selected:e})}"> <div class="coordinates"> <div class="backdrop" style="${Ku({backgroundColor:n,color:n&&(Qh(n)<.5?"#fff":"#000")})}"> <span>${`${t.x}`.padStart(4,"0")}</span> <span class="coordinate-y">${`${t.y}`.padStart(4,"0")}</span> </div> <mona-lisa-logo></mona-lisa-logo> </div> </div> `
        }, this.renderImage = e => le` <div class="lense ${yn({selected:e})}"></div> `, dt(this, et), dt(this, tt), dt(this, Ke)
    }
    static get styles() {
        return Ve(":host {\n  display: flex;\n  flex-flow: column nowrap;\n}\n.share {\n  display: flex;\n  flex-flow: column nowrap;\n  position: fixed;\n  height: calc(var(--vh, 1vh) * 100);\n  padding: 0;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.frame {\n  flex: 1;\n  position: relative;\n}\n.shadow {\n  position: absolute;\n  inset: 0;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.53);\n  animation: fade-out 0.3s 0s linear both;\n}\n:host([is-sheet-open]) .shadow.selected {\n  animation: fade-in 0.3s 0.3s linear both;\n}\n.lense {\n  position: absolute;\n  inset: calc(var(--sait) + 32px) calc(var(--sair) + 8px) 8px calc(var(--sail) + 8px);\n}\n.lense:before {\n  content: '';\n  position: absolute;\n  box-shadow: 0 0 0 128px rgba(0, 0, 0, 0.5);\n  inset: 0;\n  animation: focus-out 0.3s 0s linear both;\n}\n:host([is-sheet-open]) .lense.selected:before {\n  animation: focus-in 0.3s 0.3s linear both;\n}\n.coordinates {\n  background-color: #fff;\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 8px 8px 12px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  font-family: var(--font-mono);\n}\n.coordinates mona-lisa-logo {\n  margin-top: 16px;\n  flex: 0 0 32px;\n}\n.backdrop {\n  height: 256px;\n  width: 256px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column nowrap;\n  background-color: #ff4500;\n  font-weight: 600;\n  font-size: 85px;\n  line-height: 85px;\n  border-radius: 4px;\n}\n.coordinate-y {\n  margin-top: 10px;\n}\nmona-lisa-share-sheet {\n  animation: slide-out 0.3s 0.3s linear both;\n}\n:host([is-sheet-open]) mona-lisa-share-sheet {\n  animation: slide-in 0.3s 0s linear both;\n}\n@keyframes slide-in {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@keyframes slide-out {\n  0% {\n    transform: translateY(0%);\n  }\n  100% {\n    transform: translateY(100%);\n  }\n}\n@keyframes focus-in {\n  0% {\n    inset: -32px;\n    border-radius: 0;\n    opacity: 0;\n  }\n  100% {\n    inset: 0px;\n    border-radius: 8px;\n    opacity: 1;\n  }\n}\n@keyframes focus-out {\n  0% {\n    inset: 0px;\n    border-radius: 8px;\n    opacity: 1;\n  }\n  100% {\n    inset: -32px;\n    border-radius: 0;\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n")
    }
    updated(e) {
        Ke.getState() ? this.isSheetOpen ? e.has("isSheetOpen") && (this.renderShareUI = !0) : this.renderAllFrames = !1 : (this.renderShareUI = !1, this.renderAllFrames = !1), super.updated(e)
    }
    blobToFile(e, t) {
        return new File([e], `${t}_${this.timestamp}.png`, {
            type: "image/png"
        })
    }
    async loadWatermarkImages() {
        let e, t;
        try {
            e = await bl(`${CLIENT_CONFIG.STATIC_BASE_URL}assets/img/reddit-logo@3x.png`)
        } catch (e) {
            dn(e)
        }
        try {
            t = await bl(`${CLIENT_CONFIG.STATIC_BASE_URL}assets/img/r-place-logo@3x.png`)
        } catch (e) {
            dn(e)
        }
        return {
            redditLogo: e,
            rPlaceLogo: t
        }
    }
    async getFile() {
        if (this.mode === Rh.Coordinates) {
            if (!this.coordinates) return;
            try {
                const {
                    toBlob: e
                } = await import("./es-f0b7f1ca.js"), t = await e(this.coordinates);
                if (!t) return;
                const n = il();
                return {
                    blob: t,
                    file: this.blobToFile(t, `${n.x}_${n.y}`)
                }
            } catch (e) {
                dn(e)
            }
        } else if (this.mode === Rh.Image) {
            if (!this.lense || !this.camera || !this.canvas) return;
            const e = this.lense.getBoundingClientRect(),
                t = this.camera.cameraToCanvas({
                    x: e.left,
                    y: e.top
                });
            if (!t) return;
            const n = this.camera.cameraToCanvas({
                x: e.left + e.width,
                y: e.top + e.height
            });
            if (!n) return;
            const {
                x: i,
                y: r
            } = nl(t), o = nl(n), s = o.x - i, a = o.y - r, c = this.canvas.getImageData(i, r, s, a);
            if (!c) return;
            const {
                redditLogo: l,
                rPlaceLogo: u
            } = await this.loadWatermarkImages(), h = !!l || !!u, d = (((null == l ? void 0 : l.width) || 0) + ((null == u ? void 0 : u.width) || 0) + 168) / 3, p = 3 * Math.round(Math.max(it.getState(), d / s)), f = document.createElement("canvas");
            f.height = a * p + (h ? 120 : 0), f.width = s * p;
            const v = f.getContext("2d");
            if (!v) return;
            v.putImageData(function(e, t, n) {
                const i = e.createImageData(t.width * n, t.height * n),
                    r = e.createImageData(n, 1).data;
                for (let e = 0; e < t.height; e++)
                    for (let o = 0; o < t.width; o++) {
                        const s = t.data.subarray(4 * (e * t.width + o), 4 * (e * t.width + o) + 4);
                        for (let e = 0; e < n; e++) r.set(s, 4 * e);
                        for (let t = 0; t < n; t++) {
                            const s = e * n + t,
                                a = o * n;
                            i.data.set(r, 4 * (s * i.width + a))
                        }
                    }
                return i
            }(v, c, p), 0, 0), h && (v.fillStyle = "#fff", v.fillRect(0, a * p, s * p, 120), l && v.drawImage(l, 24, a * p + (120 - l.height) / 2), u && v.drawImage(u, s * p - u.width, a * p + (120 - u.height) / 2));
            try {
                const e = await new Promise((e => {
                    f.toBlob(e, "image/png")
                }));
                if (!e) return;
                return {
                    blob: e,
                    file: this.blobToFile(e, `${Math.max(0,i)}_${Math.max(0,r)}_${Math.min(at.getState(),o.x-1)}_${Math.min(st.getState(),o.y-1)}.png`)
                }
            } catch (e) {
                dn(e)
            }
        }
    }
    closeShareSheet() {
        this.dispatchEvent(g("toggle-share-sheet", {
            isVisible: !1
        }))
    }
    async share() {
        const e = lh(this.mode === Rh.Image),
            t = await this.getFile();
        if (!t) return;
        const {
            blob: n,
            file: i
        } = t;
        try {
            if (Qt()) {
                const t = await
                function(e) {
                    return new Promise((t => {
                        const n = new FileReader;
                        n.onloadend = () => t(n.result), n.readAsDataURL(e)
                    }))
                }(n);
                if (t) return this.dispatchEvent(g("host-communication", {
                    type: Lt.Share,
                    data: {
                        fileName: i.name,
                        fileData: t,
                        mode: this.mode,
                        url: e
                    }
                })), void this.closeShareSheet()
            }
        } catch (e) {
            dn("Error while trying to share via Native Share API", e)
        }
        var r;
        this.trackEvent((r = this.mode, Yt({
            source: Jt.HotPotato,
            action: Xt.Complete,
            noun: Zt.Share
        }, {
            action_info: {
                reason: r
            }
        })));
        try {
            if ("share" in navigator) {
                const t = "canShare" in navigator && navigator.canShare({
                    files: [i]
                });
                return await navigator.share(Object.assign({
                    url: e
                }, t ? {
                    files: [i]
                } : {})), void this.closeShareSheet()
            }
        } catch (e) {
            dn("Error while trying to share via WebShare API", e)
        }
        try {
            if (navigator.clipboard.write && ClipboardItem) {
                const t = new Blob([e], {
                    type: "text/plain"
                });
                await navigator.clipboard.write([new ClipboardItem(this.isSafari ? {
                    [n.type]: new Promise((async e => e(n))),
                    "text/plain": new Promise((async e => e(t)))
                } : {
                    [n.type]: n,
                    "text/plain": t
                })]);
                const i = g("faceplate-alert", {
                    level: b.info,
                    message: "Image and link copied to your clipboard and ready to share"
                });
                this.dispatchEvent(i)
            } else {
                await navigator.clipboard.writeText(e);
                const t = g("faceplate-alert", {
                    level: b.info,
                    message: "Link copied to your clipboard and ready to share"
                });
                this.dispatchEvent(t)
            }
        } catch (e) {
            dn("Error while trying to share via Clipboard API", e)
        }
        const o = window.URL.createObjectURL(n),
            s = document.createElement("a");
        s.style.display = "none", s.href = o, s.download = i.name, document.body.appendChild(s), s.click(), this.closeShareSheet()
    }
    getCanvasPixelColor({
        x: e,
        y: t
    }) {
        if (Ge.getState().camera && Ge.getState().canvas && this.canvas) return this.canvas.getPixelColor({
            x: e,
            y: t
        })
    }
    renderShareMode(e, t) {
        const n = this.mode === e;
        return this.renderAllFrames || n ? t(n) : ""
    }
    render() {
        return le` <slot></slot> ${Ke.getState()&&this.renderShareUI?le` <div class="share"> <div class="frame"> ${this.renderShareMode(Rh.Coordinates,this.renderCoordinates)} ${this.renderShareMode(Rh.Image,this.renderImage)} </div> <mona-lisa-share-sheet ?is-pending="${this.isSharing}" mode="${this.mode}"></mona-lisa-share-sheet> </div> `:""} `
    }
};
r([u({
    type: Boolean,
    attribute: "is-safari"
})], Kh.prototype, "isSafari", void 0), r([u({
    type: Boolean,
    attribute: "is-sheet-open"
})], Kh.prototype, "isSheetOpen", void 0), r([u({
    type: Number
})], Kh.prototype, "timestamp", void 0), r([h()], Kh.prototype, "mode", void 0), r([h()], Kh.prototype, "renderShareUI", void 0), r([h()], Kh.prototype, "renderAllFrames", void 0), r([h()], Kh.prototype, "isSharing", void 0), r([p(".coordinates")], Kh.prototype, "coordinates", void 0), r([p(".lense")], Kh.prototype, "lense", void 0), Kh = r([c("mona-lisa-share-container")], Kh);
let Yh = class extends Ae {
    constructor() {
        super(), dt(this, it)
    }
    static get styles() {
        return R`
      .slider {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 36px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        height: 36px;
        width: 340px;
        transform: rotate(-90deg);
        transform-origin: bottom left;
        font-family: var(--mona-lisa-font-sans);
      }

      .control-wrapper {
        position: relative;
        flex: 1 1 0%;
      }

      .dots {
        background: #ffffff;
        box-sizing: border-box;
        height: 4px;
        position: absolute;
        inset: 50% ${18}px 0px;
        transform: translate(0px, -1px);
        width: calc(100% - 40px);
      }

      .dot {
        background: #ffffff;
        width: 15px;
        height: 15px;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        border-radius: 50%;
      }

      input {
        display: block;
        -webkit-appearance: none;
        height: ${36}px;
        width: calc(100% - ${36}px);
        margin: 0;
        outline: none;
        position: relative;
        transform: rotate(-90deg);
        transform-origin: bottom left;
        margin-top: -${36}px;
        cursor: pointer;
        background: none;
        border-radius: ${36}px 0 0 ${36}px;
      }

      input::-moz-range-thumb {
        border: none;
        box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        width: ${36}px;
        height: ${36}px;
        cursor: ns-resize;
        background-color: #ffffff;
        background-image: url(${N(CLIENT_CONFIG.STATIC_BASE_URL)}assets/img/zoom-icon.svg);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 50%;
        transform: matrix(-1, 0, 0, -1, 0, 0);
      }

      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;

        border: none;
        box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        width: ${36}px;
        height: ${36}px;
        cursor: ns-resize;
        background-color: #ffffff;
        background-image: url(${N(CLIENT_CONFIG.STATIC_BASE_URL)}assets/img/zoom-icon.svg);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 50%;
        transform: matrix(-1, 0, 0, -1, 0, 0);
      }

      .zoom {
        font-size: 14px;
        line-height: 18px;
        font-weight: 700;
        color: #ffffff;
        transform: rotate(90deg);
        width: 40px;
        text-align: center;
        margin-left: -10px;
        cursor: default;
      }
    `
    }
    updated() {
        this.input && (this.input.value = `${it.getState()}`)
    }
    onRangeInput(e) {
        const t = parseInt(e.currentTarget.value);
        isFinite(t) && this.dispatchEvent(g("change-zoom", {
            zoom: t
        }))
    }
    render() {
        return le`
      <div class="slider">
        <div class="control-wrapper">
          <div class="dots">
            ${Array.from({length:5}).map(((e,t,n)=>le` <
            div
        class = "dot"
        style = $ {
                Ku({
                    left: t / (n.length - 1) * 100 + "%"
                })
            } >
            < /div>
        `))}
          </div>
        </div>
        <div class="zoom">${(it.getState()/10).toFixed(1).replace(/\.0$/,"")}x</div>
      </div>
      <input
        type="range"
        min=${Be.Min}
        max=${Be.Max}
        .value=${it.getState()}
        @input=${this.onRangeInput}
        @change=${this.onRangeInput}
      />
    `
    }
};
r([p("input")], Yh.prototype, "input", void 0), Yh = r([c("mona-lisa-zoom-control")], Yh);
let Jh = class extends Ae {
    constructor() {
        super(...arguments), this._handleOutsideClick = e => {
            e.composedPath().includes(this.childElements[0]) || this.dispatchEvent(g("click-outside", {
                event: e
            }))
        }
    }
    updated(e) {
        e.has("active") && this.active ? (window.addEventListener("mousedown", this._handleOutsideClick, {
            capture: !0
        }), window.addEventListener("touchend", this._handleOutsideClick, {
            capture: !0
        })) : (window.removeEventListener("mousedown", this._handleOutsideClick, {
            capture: !0
        }), window.removeEventListener("touchend", this._handleOutsideClick, {
            capture: !0
        }))
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this.active && (window.removeEventListener("mousedown", this._handleOutsideClick, {
            capture: !0
        }), window.removeEventListener("touchend", this._handleOutsideClick, {
            capture: !0
        }))
    }
    render() {
        return le`<slot></slot>`
    }
};
r([u({
    type: Boolean
})], Jh.prototype, "active", void 0), r([m({
    flatten: !0
})], Jh.prototype, "childElements", void 0), Jh = r([c("mona-lisa-outside-click-wrapper")], Jh), rn("icon-search", ue`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.4 18.6l-4.8-4.8c2.9-3.4 2.5-8.6-.9-11.5S5.2-.2 2.3 3.2s-2.5 8.6.9 11.5c3.1 2.6 7.6 2.6 10.6 0l4.8 4.8.8-.9zM8.5 15.4c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9c0 3.8-3.1 6.9-6.9 6.9z"/></svg>`, ue`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.7 18.3l-4.5-4.5c2.9-3.7 2.3-9.1-1.4-12S4.7-.5 1.8 3.2s-2.3 9.1 1.4 12c3.1 2.4 7.5 2.4 10.6 0l4.5 4.5 1.4-1.4zM8.5 15C4.9 15 2 12.1 2 8.5S4.9 2 8.5 2 15 4.9 15 8.5 12.1 15 8.5 15z"/></svg>`);
let Xh = class extends Ae {
    constructor() {
        super(...arguments), this.showZoomControl = !1, this.isActive = !1
    }
    static get styles() {
        return R`:host{pointer-events:all}.zoom-wrapper{position:relative}icon-search{display:inline-flex;transform:matrix(-1,0,0,1,0,0)}mona-lisa-icon-button{opacity:0;display:block}mona-lisa-icon-button.visible{opacity:1}mona-lisa-zoom-control{position:absolute;bottom:16px;left:44px}`
    }
    toggleZoomControl() {
        this.isActive = !this.isActive, this.dispatchEvent(g("toggle-zoom-control"))
    }
    render() {
        return le` <mona-lisa-outside-click-wrapper ?active="${this.showZoomControl}" @click-outside="${this.toggleZoomControl}"> <div class="zoom-wrapper"> <mona-lisa-icon-button class="${yn({visible:!this.showZoomControl})}" @click="${this.toggleZoomControl}"> <icon-search></icon-search> </mona-lisa-icon-button> ${this.showZoomControl?le`<mona-lisa-zoom-control></mona-lisa-zoom-control>`:""} </div> </mona-lisa-outside-click-wrapper> `
    }
};
r([u({
    type: Boolean
})], Xh.prototype, "showZoomControl", void 0), r([h()], Xh.prototype, "isActive", void 0), Xh = r([c("mona-lisa-zoom-button")], Xh);
const Zh = function(e) {
    if (wl in e) return e;
    class t extends e {
        constructor() {
            super(...arguments), this.timeout = 0, this.status = xl.Active, this.pageActivityEvents = {
                document: ["mousemove", "mouseup", "keyup", "touchcancel", "touchend", "touchmove"],
                window: ["resize", "message"]
            }, this.pageVisibilityEvents = {
                document: ["visibilitychange"],
                window: ["blur", "focus", "pagehide"]
            }, this.onAppInitializationUpdate = () => {
                We() && this.stopIdleTimer()
            }, this.stopIdleTimer = () => {
                clearTimeout(this.timeout), this.timeout = void 0
            }, this.startIdleTimer = () => {
                if (this.stopIdleTimer(), !We()) return;
                let e;
                document.hidden ? (this.hide(), e = 3e5) : (this.wakeUp(), e = 6e5), this.tickUntil(e + Date.now())
            }, this.tickUntil = e => {
                e >= Date.now() ? this.timeout = window.setTimeout((() => this.tickUntil(e)), 1e3) : this.idle()
            }, this.startIdleTimerThrottled = an(1e3, !1, this.startIdleTimer), this.registerPageActivityThrottled = () => {
                this.status === xl.Active ? this.startIdleTimerThrottled() : this.startIdleTimer()
            }, this.idle = () => {
                this.changeStatus(xl.Idle) && this.onInactive()
            }, this.wakeUp = () => {
                this.status === xl.Idle && this.onActive(), this.changeStatus(xl.Active)
            }, this.hide = () => {
                this.changeStatus(xl.Hidden)
            }
        }
        toggleEvents(e, t) {
            [...this.pageActivityEvents.document, ...this.pageVisibilityEvents.document].forEach((n => document[e](n, t))), [...this.pageActivityEvents.window, ...this.pageVisibilityEvents.window].forEach((n => window[e](n, t)))
        }
        connectedCallback() {
            var e;
            null === (e = super.connectedCallback) || void 0 === e || e.call(this), this.toggleEvents("addEventListener", this.registerPageActivityThrottled), Ge.subscribe({
                requestUpdate: this.onAppInitializationUpdate
            })
        }
        disconnectedCallback() {
            var e;
            null === (e = super.disconnectedCallback) || void 0 === e || e.call(this), this.toggleEvents("removeEventListener", this.registerPageActivityThrottled), this.stopIdleTimer()
        }
        onActive() {
            throw new Error("Not implemented")
        }
        onInactive() {
            throw new Error("Not implemented")
        }
        changeStatus(e) {
            return this.status !== e && (this.status = e, hn(`Page activity status ${e}`), !0)
        }
    }
    return t[wl] = !0, t
}(function(e) {
    if (_l in e) return e;
    class t extends e {
        constructor() {
            super(...arguments), this.expirationTimer = 0, this.injectAuthHeaders = (e, t) => {
                if (hn("_injectAuthHeaders called"), !e || 0 === Object.keys(e).length) return void hn("Received empty headers");
                let n = !0;
                this.headers ? (n = JSON.stringify(this.headers) !== JSON.stringify(e), hn(n ? "Replacing with new headers" : "Received identical headers")) : hn("Initializing headers"), this.expirationTimer && (window.clearTimeout(this.expirationTimer), this.expirationTimer = 0), this.headers = e, this.onUpdateAuthHeaders(e, n);
                const i = t - Date.now();
                i > 0 ? (hn("Setting timer to request refresh: " + i.toString() + "ms"), this.expirationTimer = window.setTimeout(this.requestAuthRefresh, i)) : hn(`App injected expired auth (${t})! Will not attempt further auth refresh unless app injects valid auth`)
            }, this.requestAuthRefresh = () => {
                this.dispatchEvent(g("host-communication", {
                    type: Lt.RefreshAuth
                }))
            }, this.onInjectAuthHeaders = e => {
                if (gl(e.origin) && e.data.type === Ft.InjectAuthHeaders) this.injectAuthHeaders(e.data.headers, e.data.expiration)
            }
        }
        onUpdateAuthHeaders(e, t) {
            throw new Error("Not implemented")
        }
        connectedCallback() {
            var e;
            null === (e = super.connectedCallback) || void 0 === e || e.call(this), window._injectAuthHeaders = this.injectAuthHeaders, window.addEventListener("message", this.onInjectAuthHeaders), this.requestAuthRefresh()
        }
        disconnectedCallback() {
            var e;
            window.removeEventListener("message", this.onInjectAuthHeaders), window._injectAuthHeaders = void 0, null === (e = super.disconnectedCallback) || void 0 === e || e.call(this)
        }
    }
    return t[_l] = !0, t
}(function(e) {
    if (El in e) return e;
    class t extends e {
        constructor() {
            super(...arguments), this.hostClient = qt() ? new $t : Ut() ? new zt : Bt() ? new Vt : void 0, this.communicateToHost = e => {
                var t, n, i, r, o, s;
                e.detail.type !== Lt.SyncCoordinates && hn(`Notifying host apps to ${e.detail.type}`);
                try {
                    switch (e.detail.type) {
                        case Lt.Close:
                            null === (t = this.hostClient) || void 0 === t || t.close();
                            break;
                        case Lt.RefreshAuth:
                            null === (n = this.hostClient) || void 0 === n || n.refreshAuth();
                            break;
                        case Lt.SignIn:
                            null === (i = this.hostClient) || void 0 === i || i.signIn(e.detail.data.dest);
                            break;
                        case Lt.Share:
                            null === (r = this.hostClient) || void 0 === r || r.share(e.detail.data);
                            break;
                        case Lt.SyncCoordinates:
                            null === (o = this.hostClient) || void 0 === o || o.syncCoordinates(e.detail.data);
                            break;
                        case Lt.OpenProfile:
                            null === (s = this.hostClient) || void 0 === s || s.openProfile(e.detail.data)
                    }
                } catch (e) {
                    dn(`Error notifying host client: ${e}`)
                }
            }
        }
    }
    return t[El] = !0, t
}(function(e) {
    if (Sl in e) return e;
    class t extends e {
        constructor() {
            super(...arguments), this.timeoutId = 0, this.startedAt = 0, this.expireAt = 0
        }
        startTimer(e) {
            this.startedAt = Date.now(), this.expireAt = this.startedAt + t.INTERVAL * e, this.start()
        }
        updateTimer(e) {
            if (this.expireAt = this.startedAt + t.INTERVAL * e, 0 === this.timeoutId) this.start();
            else {
                const e = this.getRemainingSeconds();
                this.notify(e)
            }
        }
        disconnectedCallback() {
            var e;
            this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0), null === (e = super.disconnectedCallback) || void 0 === e || e.call(this)
        }
        start() {
            this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
            const e = this.getRemainingSeconds();
            if (this.notify(e), 0 === e) return;
            let n = this.startedAt + t.INTERVAL;
            const i = () => {
                const e = Date.now() - n;
                n += t.INTERVAL;
                const r = this.getRemainingSeconds();
                this.notify(r), this.timeoutId = 0 !== r ? window.setTimeout(i, Math.max(0, t.INTERVAL - e)) : 0
            };
            this.timeoutId = window.setTimeout(i, t.INTERVAL)
        }
        notify(e) {
            this.dispatchEvent(g("tick-timer", {
                expireIn: e
            }))
        }
        getRemainingSeconds() {
            return Math.max(0, Math.round((this.expireAt - Date.now()) / t.INTERVAL))
        }
    }
    return t[Sl] = !0, t.INTERVAL = 1e3, t
}(tn(function(e) {
    if (ln in e) return e;
    class t extends e {
        connectedCallback() {
            super.connectedCallback && super.connectedCallback();
            for (let e = 0; e < this.constructor._eventListeners.length; e++) {
                const t = this.constructor._eventListeners[e],
                    n = t.options.useShadowRoot ? this.shadowRoot : this;
                t.options.useShadowRoot && t.options.shouldBindMethod && (this[t.method] = this[t.method].bind(this), t.options.shouldBindMethod = !1), n.addEventListener(t.event, this[t.method], t.useCapture)
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback && super.disconnectedCallback();
            for (let e = 0; e < this.constructor._eventListeners.length; e++) {
                const t = this.constructor._eventListeners[e];
                (t.options.useShadowRoot ? this.shadowRoot : this).removeEventListener(t.event, this[t.method], t.useCapture)
            }
        }
    }
    return t[ln] = !0, t._eventListeners = [], t
}(Ae))))));
let ed = class extends Zh {
    constructor() {
        super(), this._events = new Le(this), this.showZoomControl = !1, this.isSharing = !1, this.canvasStateById = {}, this.isPlacingPixel = !1, this.showColorPicker = !1, this.helpModalOpen = !1, this.isSynchronizingConfiguration = !1, this.isRestoringAuthorization = !1, this.isRestoringAfterInactive = !1, this.isGameOver = !1, this.isFullScreen = dt(this, Ke), this.pxRatio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth, this.helpModalName = "help-modal", this._handleResize = () => {
            this._handleZooming(), this._setViewportCustomProperty()
        }, this.onError = e => {
            this.haltAndAskToReload(e.message)
        }, this.onUnhandledRejection = e => {
            this.haltAndAskToReload(e.reason)
        }, this.syncValuesToURL = an(500, !1, (() => {
            if (!history) return;
            const e = Ge.getState();
            if (!e.camera || !e.canvas) return;
            const t = new URL(location.href),
                {
                    cx: n,
                    cy: i,
                    px: r
                } = rl();
            t.searchParams.set(Ue.CX, `${n}`), t.searchParams.set(Ue.CY, `${i}`), t.searchParams.set(Ue.PX, `${r}`), history.replaceState({}, "", t.toString())
        })), this.cleanSynchronizeConfigurationTimeout = () => {
            this.synchronizeConfigurationTimeout && (clearTimeout(this.synchronizeConfigurationTimeout), this.synchronizeConfigurationTimeout = void 0)
        }, this.cleanReleaseSyncLockTimeout = () => {
            this.releaseSyncLockTimeout && (clearTimeout(this.releaseSyncLockTimeout), this.releaseSyncLockTimeout = void 0)
        }, this.cleanRestoreAuthTimeout = () => {
            this.restoreAuthTimeout && (clearTimeout(this.restoreAuthTimeout), this.restoreAuthTimeout = void 0)
        }, this.cleanReleaseAuthLockTimeout = () => {
            this.releaseAuthLockTimeout && (clearTimeout(this.releaseAuthLockTimeout), this.releaseAuthLockTimeout = void 0)
        }, this.onEmbedHostMessage = e => {
            if (Qt() || gl(e.origin))
                if (e.data.type === Ft.SetFullScreen) this.setFullScreen(e.data.state);
                else if (e.data.type === Ft.InjectTelemetryDefaults) {
                const {
                    telemetryDefaults: t
                } = e.data;
                "object" == typeof t && Object.keys(t).length && Ze.updateState(t)
            }
        }, this.setFullScreen = e => {
            if (this.isFullScreen.state(e), this._setViewportCustomProperty(), !1 === e) this.helpModalOpen = !1, this.isPlacingPixel = !1, this.isSharing = !1, this.selectedColor = void 0, this.selectedPixel = void 0, this.showColorPicker = !1;
            else if (Je.getState() && !this.isGameOver && Je.getState()) {
                const e = {
                        x: et.getState(),
                        y: tt.getState()
                    },
                    t = al(e);
                t && this.canvasStateById[t.index] && this.selectPixel(e)
            }
            e && this.reactivateAfterInactive()
        }, this.onConfigurationUpdateMessage = async e => {
            var t;
            switch (hn("Received configuration message", e), e.__typename) {
                case dl.ConfigurationUpdate: {
                    const n = i(e, ["__typename"]),
                        {
                            width: r,
                            height: o
                        } = sl(n.canvasConfigurations, n.canvasWidth, n.canvasHeight);
                    if (r === at.getState() && o === st.getState()) ot.updateState(n), this.isRestoringAfterInactive && this.expandCanvas(n);
                    else if (We())
                        if (r < at.getState() || o < st.getState()) this.shrinkCanvas(n);
                        else {
                            const e = i(n, ["canvasConfigurations", "canvasHeight", "canvasWidth"]);
                            ot.updateState(Object.assign(Object.assign({}, ot.getState()), e)), this.scheduleCanvasExpansion(n), this.isRestoringAfterInactive && this.expandCanvas(ot.getState())
                        }
                    else this.expandCanvas(n), (null === (t = Xe.getState()) || void 0 === t ? void 0 : t.readonlyMode) && fl.unsubscribeFromConfigUpdates();
                    this.isRestoringAfterInactive && (this.isRestoringAfterInactive = !1);
                    break
                }
                default:
                    dn(`Unsupported message data received over configuration channel ${e.__typename}`)
            }
        }, this.expandCanvas = async e => {
            ot.updateState(e), this.updateCanvasSize(e), this.initializeCamera(), this.updateVisibleCanvasIndexList(), this.canvasStateById = {}, this.subscribeToCanvasUpdates()
        }, this.subscribeToCanvasUpdates = async e => {
            try {
                const t = e ? [e] : ot.getState().canvasConfigurations;
                await Promise.all(t.map((e => fl.subscribeToCanvasUpdates(this.onCanvasMessage, e))))
            } catch (e) {
                const t = g("faceplate-alert", {
                    level: b.error,
                    message: e.message
                });
                dn("Error while expanding canvas", e), this.dispatchEvent(t)
            }
        }, this.onCanvasMessage = async (e, t) => {
            var n, i, r;
            if (hn("Received canvas message", t, e), this.canvas) {
                switch (e.__typename) {
                    case dl.FullFrame:
                        if (this.drawCanvasImage(e.name, t), this.canvasStateById[t] = {
                                isTainted: !1
                            }, Je.getState() && Ke.getState()) {
                            const e = {
                                    x: et.getState(),
                                    y: tt.getState()
                                },
                                n = al(e);
                            t === (null == n ? void 0 : n.index) && this.selectPixel(e)
                        }(null === (n = Xe.getState()) || void 0 === n ? void 0 : n.readonlyMode) && fl.unsubscribeFromCanvasUpdates(t), this.releaseSyncLock();
                        break;
                    case dl.DiffFrame: {
                        const n = this.canvasStateById[t];
                        if (!n) break;
                        const {
                            previousDiffTimestamp: r,
                            isTainted: o
                        } = n;
                        if (o) break;
                        if (r && r !== e.previousTimestamp) {
                            n.isTainted = !0;
                            const e = null === (i = ot.getState()) || void 0 === i ? void 0 : i.canvasConfigurations.find((e => e.index === t));
                            e && this.subscribeToCanvasUpdates(e);
                            break
                        }
                        n.previousDiffTimestamp = e.currentTimestamp, this.drawCanvasImage(e.name, t);
                        const s = ut.getState();
                        s && s.timestamp > e.currentTimestamp ? this.canvas.drawPixel(s) : ut.updateState(null);
                        break
                    }
                    default:
                        dn("Unsupported API message data received over canvas subscription", e)
                }(null === (r = Xe.getState()) || void 0 === r ? void 0 : r.readonlyMode) && ot.getState().canvasConfigurations.every((e => this.canvasStateById[e.index])) && (fl.createReadonlyClient(), hn("Websocket connection severed, reinstantiated w/ readonly client"))
            }
        }, this.drawCanvasImage = async (e, t) => {
            const n = this.getCanvasConfig(t);
            if (this.canvas && n) try {
                const t = await bl(e);
                this.canvas.drawImage({
                    image: t,
                    x: n.dx,
                    y: n.dy
                })
            } catch (e) {
                dn(e)
            }
        }, this.onUpdateVisiblePixels = this._events.define("update-visible-pixels", (e => {
            nt.updateState(e.detail.px)
        })), this.onCancelPixel = this._events.define("cancel-pixel", (() => {
            this.cancelPixel()
        })), this.onClickCanvas = this._events.define("click-canvas", (async e => {
            var t;
            this.selectPixel(e.detail);
            const {
                x: n,
                y: i
            } = e.detail, r = null === (t = this.canvas) || void 0 === t ? void 0 : t.getPixelColor({
                x: n,
                y: i
            });
            this.trackEvent((({
                x: e,
                y: t,
                color: n
            }) => Yt({
                source: Jt.HotPotato,
                action: Xt.Click,
                noun: Zt.Pixel
            }, {
                action_info: {
                    setting_value: n,
                    reason: [e, t].join(",")
                }
            }))({
                x: n,
                y: i,
                color: r
            }))
        })), this.onChangeZoom = this._events.define("change-zoom", (e => {
            var t;
            const {
                zoom: n
            } = e.detail;
            it.updateState(n), null === (t = this.camera) || void 0 === t || t.zoomIn(n)
        })), this.onConfirmPixel = this._events.define("confirm-pixel", (async () => {
            var e, t;
            if (!(null === (e = Xe.getState()) || void 0 === e ? void 0 : e.canParticipate)) return;
            if (ct.getState()) return this.dispatchEvent(g("confirm-erase")), void this.cancelPixel();
            if (!this.canvas || !this.showColorPicker || "number" != typeof this.selectedColor || this.nextTileAvailableIn) return;
            const n = {
                x: et.getState(),
                y: tt.getState(),
                colorIndex: this.selectedColor
            };
            this.canvas.drawPixel(n), ut.updateState(Object.assign(Object.assign({}, n), {
                timestamp: Date.now()
            })), null === (t = this.camera) || void 0 === t || t.refreshTooltip(), this.trackEvent((({
                x: e,
                y: t,
                colorIndex: n
            }) => Yt({
                source: Jt.HotPotato,
                action: Xt.Click,
                noun: Zt.Submit
            }, {
                action_info: {
                    setting_value: wt(n) || "",
                    reason: [e, t].join(",")
                }
            }))(n)), this.isPlacingPixel = !0;
            const i = await fl.setPixel(n);
            if (i.type === pl.Success) {
                const {
                    data: e
                } = i;
                (null == e ? void 0 : e.nextAvailablePixelTimestamp) && this.startTimer(Math.ceil((e.nextAvailablePixelTimestamp - Date.now()) / 1e3));
                const t = ut.getState();
                t && (null == e ? void 0 : e.timestamp) && ut.updateState(Object.assign(Object.assign({}, t), {
                    timestamp: e.timestamp
                })), this.showColorPicker = !1, this.selectedColor = void 0
            } else if (i.type === pl.PixelRateLimit) {
                const e = g("faceplate-alert", {
                    level: b.warning,
                    message: Jc
                });
                this.dispatchEvent(e), this.startTimer(Math.ceil((i.nextAvailablePixelTimestamp - Date.now()) / 1e3))
            } else this.handleFailedResponse(i), ut.updateState(null);
            this.isPlacingPixel = !1
        })), this.haltAndAskToReload = e => {
            this.isGameOver = !0, dn(`Game over: ${e}`), this.cleanSynchronizeConfigurationTimeout(), this.cleanReleaseSyncLockTimeout(), this.cleanReleaseAuthLockTimeout(), this.canvasStateById = {}, fl.destroy()
        }, this.onContextMenu = this._events.define("contextmenu", (e => {
            e.preventDefault(), this.showColorPicker = !1
        })), this.onMoveCamera = this._events.define("move-camera", (e => {
            if (ct.getState() && lt.getState().length) return;
            const t = nl(e.detail);
            et.updateState(t.x), tt.updateState(t.y), this.updateVisibleCanvasIndexListThrottled()
        })), this.updateVisibleCanvasIndexList = () => {
            var e;
            const t = null === (e = this.camera) || void 0 === e ? void 0 : e.getVisibilityRect();
            if (!t) return;
            const n = function(e, t) {
                if (1 === t.canvasConfigurations.length) return [t.canvasConfigurations[0].index];
                const {
                    width: n,
                    height: i
                } = sl(t.canvasConfigurations, t.canvasWidth, t.canvasHeight);
                return ll({
                    x1: Math.max(e.x1, 0),
                    y1: Math.max(e.y1, 0),
                    x2: Math.min(e.x2, n),
                    y2: Math.min(e.y2, i)
                }, t).map((e => e.canvasIndex))
            }(t, ot.getState());
            fl.toggleVisibleCanvasListSubscription(n)
        }, this.updateVisibleCanvasIndexListThrottled = an(1e3, !1, this.updateVisibleCanvasIndexList), this.onMouseMove = this._events.define("mousemove", (e => {
            var t;
            null === (t = this.cursor) || void 0 === t || t.move(e.clientX, e.clientY)
        })), this.onFaceplateRequest = this._events.define("faceplate-request", (e => {
            if ("/svc/mona-lisa/perf-metrics" === e.detail.resource) {
                const {
                    body: t
                } = e.detail.request;
                t.meta = Object.assign(Object.assign({}, t.meta), {
                    route_name: "embed",
                    page_type: "embed"
                })
            }
        })), this.onRegisterCamera = this._events.define("register-camera", (async e => {
            this.camera = e.detail
        })), this.onRegisterCanvas = this._events.define("register-canvas", (async e => {
            this.canvas = e.detail
        })), this.onRegisterCursor = this._events.define("register-cursor", (e => {
            this.cursor = e.detail
        })), this.onSelectColor = this._events.define("select-color", (e => {
            this.selectedColor = e.detail.color
        })), this.onHelpModalClose = this._events.define(this.helpModalName, (() => {
            this.helpModalOpen = !1
        })), this.onWebSocketConnection = e => {
            e.type === pl.Success ? (this.releaseAuthLock(), this.isGameOver = !1) : e.type === pl.GenericError && this.haltAndAskToReload("Failed to instantiate a connection to the Realtime API")
        }, this.onToggleZoomButton = this._events.define("toggle-zoom-control", (() => {
            this.showZoomControl = !this.showZoomControl
        })), this.onTickTimer = this._events.define("tick-timer", (e => {
            this.nextTileAvailableIn = e.detail.expireIn
        })), this.onToggleShareSheet = this._events.define("toggle-share-sheet", (e => {
            this.isSharing = e.detail.isVisible, this.isSharing && (this.showColorPicker = !1)
        })), this.onToggleEraseTool = this._events.define("toggle-admin-erase-tool", (() => {
            const e = ct.getState();
            e && lt.updateState([]), e || this.dispatchEvent(g("cancel-pixel")), ct.updateState(!e)
        })), this.onConfirmErase = this._events.define("confirm-erase", (() => {
            const e = lt.getState(),
                t = ul(),
                {
                    x: n,
                    y: i
                } = e[0];
            let {
                x: r,
                y: o
            } = e[1];
            t && (r = n, o = i);
            const s = ll({
                x1: n,
                y1: i,
                x2: r,
                y2: o
            }, ot.getState());
            s ? (s.forEach((async e => {
                const t = await fl.setRect(Object.assign(Object.assign({}, e), {
                    colorIndex: "number" == typeof this.selectedColor ? this.selectedColor : 31
                }));
                t.type !== pl.Success && this.handleFailedResponse(t)
            })), this.trackEvent(((e, t, n, i) => Yt({
                source: Jt.HotPotato,
                action: Xt.Set,
                noun: Zt.Rectangle
            }, {
                action_info: {
                    setting_value: `x1: ${e}, y1: ${t}, x2: ${n}, y2: ${i}`
                }
            }))(n, i, r, o)), this.dispatchEvent(g("toggle-admin-erase-tool"))) : dn("Failed to split the area into canvas rectangles")
        })), this.onHostCommunication = this._events.define("host-communication", this.communicateToHost), this.onApiError = this._events.define("api-error", (e => {
            this.handleFailedResponse(e.detail)
        })), this.onHelpButtonClick = () => {
            this.helpModalOpen = !0, this.trackEvent(Yt({
                source: Jt.HotPotato,
                action: Xt.View,
                noun: Zt.Tutorial
            }))
        }, this._setViewportCustomProperty(), dt(this, et), dt(this, tt), dt(this, nt), dt(this, Xe), dt(this, ct), dt(this, lt), dt(this, Ge);
        const e = He();
        Ke.updateState(e.fullscreen), Ye.updateState(CLIENT_CONFIG.USE_DEBUG || e.debug)
    }
    static get styles() {
        return Ve(":host {\n  display: block;\n  color: var(--color-global-white);\n}\n.layout {\n  display: flex;\n  flex-direction: column;\n  height: calc(var(--vh, 1vh) * 100);\n}\n.shadow-styles,\n.top-shadow,\n.bottom-shadow {\n  content: '';\n  position: fixed;\n  left: 0;\n  right: 0;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(196, 196, 196, 0) 100%);\n  height: 120px;\n  pointer-events: none;\n}\n.top-shadow {\n  top: 0;\n}\n.bottom-shadow {\n  bottom: 0;\n  transform: rotate(180deg);\n}\n.controls,\n.top-controls,\n.bottom-controls {\n  position: fixed;\n  left: calc(var(--sail) + 16px);\n  right: calc(var(--sair) + 16px);\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  pointer-events: none;\n}\n.top-controls {\n  top: calc(var(--sait) + 16px);\n}\nmona-lisa-close-button {\n  position: fixed;\n  left: calc(var(--sail) + 16px);\n  top: calc(var(--sait) + 16px - 8px);\n}\nmona-lisa-mute-button {\n  position: fixed;\n  left: calc(var(--sail) + 76px);\n  top: calc(var(--sait) + 16px - 8px);\n}\nmona-lisa-share-button {\n  position: absolute;\n  top: -8px;\n  left: 0;\n}\nmona-lisa-help-button,\nmona-lisa-zoom-button {\n  position: absolute;\n  top: -8px;\n  right: 0;\n}\n.bottom-controls {\n  bottom: calc(var(--saib) + 16px);\n}\nmona-lisa-share-container {\n  flex: 1;\n}\nmona-lisa-color-picker {\n  position: relative;\n  flex: 0 0 auto;\n}\n.help-modal {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.help-modal p {\n  font-size: 16px;\n  line-height: 18px;\n  margin: 0 0 18px;\n}\n@media (min-width: 800px) {\n  .help-modal p {\n    font-size: 18px;\n    line-height: 20px;\n    margin: 0 0 20px;\n  }\n}\n")
    }
    _setViewportCustomProperty() {
        const e = .01 * window.innerHeight;
        e !== this.vhUnit && (document.documentElement.style.setProperty("--vh", `${e}px`), this.vhUnit = e)
    }
    _handleZooming() {
        const e = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
        if (e != this.pxRatio) {
            this.pxRatio = e;
            const t = g("faceplate-alert", {
                level: b.warning,
                message: "For the best experience 100% browser zoom is recommended, consider using our zoom tool instead."
            });
            this.dispatchEvent(t)
        }
    }
    connectedCallback() {
        super.connectedCallback(), window.addEventListener("resize", this._handleResize), window.addEventListener("message", this.onEmbedHostMessage), this.shouldGameOverOnError && (window.addEventListener("error", this.onError), window.addEventListener("unhandledrejection", this.onUnhandledRejection)), window._setFullScreen = this.setFullScreen, this.setVHUnitInterval = window.setInterval(this._setViewportCustomProperty, 1e3)
    }
    firstUpdated(e) {
        this.user && Xe.updateState(this.user), super.firstUpdated(e)
    }
    update(e) {
        const t = [];
        try {
            e.has("showColorPicker") && !1 === this.showColorPicker && !0 === e.get("showColorPicker") && (e.has("nextTileAvailableIn") && this.nextTileAvailableIn > 0 && (0 === e.get("nextTileAvailableIn") || void 0 === e.get("nextTileAvailableIn")) || (yl["close-pallette"].currentTime = 0, t.push(yl["close-pallette"].play()))), e.has("selectedPixel") && this.selectedPixel !== e.get("selectedPixel") && (this.nextTileAvailableIn > 0 ? (yl.invalid.currentTime = 0, t.push(yl.invalid.play())) : (yl.highlight.currentTime = 0, t.push(yl.highlight.play()))), e.has("selectedColor") && this.selectedColor !== e.get("selectedColor") && void 0 !== this.selectedColor && (this.nextTileAvailableIn > 0 ? (yl.invalid.currentTime = 0, t.push(yl.invalid.play())) : (yl["select-color"].currentTime = 0, t.push(yl["select-color"].play()))), e.has("nextTileAvailableIn") && (0 === this.nextTileAvailableIn && 1 === e.get("nextTileAvailableIn") && t.push(yl["cooldown-end"].play()), this.nextTileAvailableIn > 0 && (0 === e.get("nextTileAvailableIn") || void 0 === e.get("nextTileAvailableIn")) && t.push(yl["cooldown-start"].play()))
        } catch (e) {}
        super.update(e), Promise.all(t).catch((() => {}))
    }
    updated(e) {
        this.syncValuesToURL(), super.updated(e)
    }
    disconnectedCallback() {
        window.removeEventListener("resize", this._handleResize), window.removeEventListener("message", this.onEmbedHostMessage), window.removeEventListener("error", this.onError), window.removeEventListener("unhandledrejection", this.onUnhandledRejection), this.cleanSynchronizeConfigurationTimeout(), this.cleanReleaseSyncLockTimeout(), this.cleanRestoreAuthTimeout(), this.cleanReleaseAuthLockTimeout(), clearInterval(this.setVHUnitInterval), super.disconnectedCallback()
    }
    initializeCamera() {
        var e, t, n;
        if (!this.camera) return;
        const i = He();
        nt.updateState(null !== (e = i.px) && void 0 !== e ? e : nt.getState());
        const r = {
                x: null !== (t = i.cx) && void 0 !== t ? t : -1,
                y: null !== (n = i.cy) && void 0 !== n ? n : -1
            },
            o = !cl(r);
        Je.updateState(i.edit && o);
        const s = nl(o ? r : this.camera.getRandomCenter());
        et.updateState(s.x), tt.updateState(s.y), this.camera.initialize()
    }
    initializeCanvas() {
        var e;
        null === (e = this.canvas) || void 0 === e || e.initialize()
    }
    scheduleCanvasExpansion(e) {
        if (this.isSynchronizingConfiguration) return;
        if (this.nextCanvasConfig = e, this.synchronizeConfigurationTimeout) return;
        const t = Math.round(9e5 * Math.random());
        hn(`Scheduled a config update in ${t}ms`), this.synchronizeConfigurationTimeout = window.setTimeout((async () => {
            this.synchronizeConfigurationTimeout = void 0, this.nextCanvasConfig ? (this.isSynchronizingConfiguration = !0, await this.updateComplete, this.expandCanvas(this.nextCanvasConfig)) : dn("Should not happen: Missing canvas config when trying to apply a scheduled config")
        }), t)
    }
    updateCanvasSize(e) {
        const {
            width: t,
            height: n
        } = sl(e.canvasConfigurations, e.canvasWidth, e.canvasHeight);
        at.updateState(t), st.updateState(n), this.initializeCanvas()
    }
    onActive() {
        Ke.getState() && this.reactivateAfterInactive()
    }
    reactivateAfterInactive() {
        this.isRestoringAfterInactive && !this.isGameOver && (hn("Page active. Enable the connection"), this.isRestoringAuthorization = !1, this.cleanRestoreAuthTimeout(), this.lockUIAndRefreshAuth())
    }
    onInactive() {
        hn("Page inactive. Destroy the connection"), this.isGameOver || (fl.destroy(), this.isRestoringAfterInactive = !0)
    }
    async shrinkCanvas(e) {
        var t;
        if (this.synchronizeConfigurationTimeout) return;
        this.isSynchronizingConfiguration = !0, await this.updateComplete;
        const n = new Set(e.canvasConfigurations.map((e => e.index)));
        for (const e of ot.getState().canvasConfigurations) n.has(e.index) || (delete this.canvasStateById[e.index], fl.unsubscribeFromCanvasUpdates(e.index));
        this.updateCanvasSize(e), ot.updateState(e);
        const i = nl({
            x: et.getState(),
            y: tt.getState()
        });
        i.x === et.getState() && i.y === tt.getState() || (et.updateState(i.x), tt.updateState(i.y), null === (t = this.camera) || void 0 === t || t.initialize()), this.releaseSyncLock()
    }
    releaseSyncLock() {
        var e;
        ot.getState() ? (null === (e = ot.getState()) || void 0 === e ? void 0 : e.canvasConfigurations.find((e => !this.canvasStateById[e.index] || this.canvasStateById.isTainted))) || this.releaseSyncLockTimeout || (this.releaseSyncLockTimeout = window.setTimeout((() => {
            this.releaseSyncLockTimeout = void 0, this.isSynchronizingConfiguration = !1
        }), 3e3)) : dn("Should not happen: Missing global config when trying to release the lock")
    }
    getCanvasConfig(e) {
        const t = ot.getState();
        return null == t ? void 0 : t.canvasConfigurations.find((t => t.index === e))
    }
    cancelPixel() {
        this.showColorPicker = !1, this.selectedColor = void 0, ct.getState() && lt.updateState([])
    }
    selectPixel(e) {
        var t, n, i, r;
        if (!this.isSharing) {
            if (Je.updateState(!1), this.showColorPicker || (null === (t = Xe.getState()) || void 0 === t ? void 0 : t.readonlyMode)) null === (n = this.camera) || void 0 === n || n.moveTo(e);
            else {
                const t = Math.max(it.getState(), Be.Optimal);
                it.updateState(t), null === (i = this.camera) || void 0 === i || i.moveTo(e, t)
            }
            if (ct.getState()) {
                return 2 === lt.getState().length ? void(this.showColorPicker = !0) : void lt.updateState([e])
            }
            this.selectedPixel = e, (null === (r = Xe.getState()) || void 0 === r ? void 0 : r.readonlyMode) || (this.showColorPicker = !0)
        }
    }
    lockUIAndRefreshAuth() {
        this.isRestoringAuthorization || this.restoreAuthTimeout || (this.isRestoringAuthorization = !0, this.requestAuthRefresh(), this.restoreAuthTimeout = window.setTimeout((() => {
            this.haltAndAskToReload("Failed to restore authorization")
        }), 15e3))
    }
    releaseAuthLock() {
        this.isRestoringAuthorization && !this.releaseAuthLockTimeout && (this.cleanRestoreAuthTimeout(), this.releaseAuthLockTimeout = window.setTimeout((() => {
            this.releaseAuthLockTimeout = void 0, this.isRestoringAuthorization = !1
        }), 3e3))
    }
    handleFailedResponse(e) {
        if (e.type === pl.UnauthorizedError) this.lockUIAndRefreshAuth();
        else if (e.type === pl.PixelRateLimit) this.startTimer(Math.ceil((e.nextAvailablePixelTimestamp - Date.now()) / 1e3));
        else {
            const t = g("faceplate-alert", {
                level: b.error,
                message: e.message
            });
            this.dispatchEvent(t), e.type !== pl.GenericError && dn(`Error while making an API request: ${e.message}`, e)
        }
    }
    async onUpdateAuthHeaders(e, t) {
        var n;
        if (this.isGameOver) return;
        if (!t && !this.isRestoringAfterInactive) return;
        const i = (null === (n = Xe.getState()) || void 0 === n ? void 0 : n.readonlyMode) && ot.getState().canvasConfigurations.every((e => this.canvasStateById[e.index])) && We();
        fl.setAuthHeaders(e, this.onWebSocketConnection, i);
        try {
            await Promise.all([fl.subscribeToConfigUpdates(this.onConfigurationUpdateMessage), this.fetchUserData(), this.initializeCooldownTimer()])
        } catch (e) {
            const t = g("faceplate-alert", {
                level: b.error,
                message: e.message
            });
            dn("Error while updating auth headers", e), this.dispatchEvent(t)
        }
    }
    async fetchUserData() {
        if (!Xe.getState()) try {
            const e = await fl.fetchUserData();
            e.type === pl.Success ? Xe.updateState(e.data) : this.handleFailedResponse(e)
        } catch (e) {
            dn("Error while fetching user data", e)
        }
    }
    async initializeCooldownTimer() {
        var e, t, n;
        if (!Ge.getState().cooldown) {
            if (null === (e = Xe.getState()) || void 0 === e ? void 0 : e.canParticipate) try {
                const e = await fl.getUserCooldown();
                if (e.type === pl.Success) {
                    if (null === (t = e.data) || void 0 === t ? void 0 : t.nextAvailablePixelTimestamp) {
                        const t = ((null === (n = e.data) || void 0 === n ? void 0 : n.nextAvailablePixelTimestamp) - Date.now()) / 1e3;
                        this.startTimer(t)
                    }
                } else e.type !== pl.GenericError && this.handleFailedResponse(e)
            } catch (e) {
                dn("Error while fetching user cooldown", e)
            }
            Ge.updateState(Object.assign(Object.assign({}, Ge.getState()), {
                cooldown: !0
            }))
        }
    }
    render() {
        var e, t;
        const n = We(),
            i = this.isFullScreen.state(),
            r = Qt(),
            o = null === (e = Xe.getState()) || void 0 === e ? void 0 : e.readonlyMode;
        return le` ${this.isAdminOverride&&n&&!r&&i?le`<mona-lisa-admin-controls></mona-lisa-admin-controls>`:""} <div class="layout"> <mona-lisa-share-container ?is-safari="${this.isSafari}" ?is-sheet-open="${this.isSharing}"> <mona-lisa-camera ?is-ios="${this.isIOS}" ?is-safari="${this.isSafari}" ?is-show-color-picker="${this.showColorPicker}" ?show-pixel-history="${this.showPixelHistory}"> <mona-lisa-canvas ?is-ios="${this.isIOS}" ?is-safari="${this.isSafari}"></mona-lisa-canvas> ${i&&!ct.getState()?le` <mona-lisa-pixel-preview slot="pixel" color="${un(this.selectedColor)}"></mona-lisa-pixel-preview> `:""} ${ct.getState()&&(null===(t=lt.getState())||void 0===t?void 0:t.length)?le`<mona-lisa-erasure-preview slot="pixel" color="${un(this.selectedColor)}"></mona-lisa-erasure-preview>`:""} </mona-lisa-camera> ${i?le` <div class="top-shadow"></div> <div class="bottom-shadow"></div> <div class="top-controls"> ${this.isSharing?"":le`<mona-lisa-coordinates></mona-lisa-coordinates>`} ${this.isSharing?"":le`<mona-lisa-help-button @click="${this.onHelpButtonClick}"></mona-lisa-help-button>`} </div> `:""} <div class="bottom-controls"> ${i?le`<mona-lisa-share-button></mona-lisa-share-button>`:""} ${o?"":le` <mona-lisa-status-pill next-tile-available-in="${un(this.nextTileAvailableIn)}"></mona-lisa-status-pill> `} ${i?le`<mona-lisa-zoom-button ?showzoomcontrol="${this.showZoomControl}"></mona-lisa-zoom-button> `:""} </div> ${i&&!o?le` <mona-lisa-color-picker color="${un(this.selectedColor)}" ?is-visible="${this.showColorPicker}" ?is-locked="${this.isPlacingPixel||!!this.nextTileAvailableIn}" next-tile-available-in="${un(this.nextTileAvailableIn)}"></mona-lisa-color-picker> `:""} </mona-lisa-share-container> </div> <mona-lisa-modal name="${this.helpModalName}" header="Place" ?isOpen="${this.helpModalOpen}" ?show-help-link="${this.showHelpLink}"> <div class="help-modal"> <p> There is an empty canvas. </p> <p> You may place a tile upon it, but you must wait to place another. </p> <p> Individually you can create something. </p> <p> Together you can create something more. </p> </div> </mona-lisa-modal> <faceplate-perfmark name="${pn.FIRST_CONTENTFUL_PAINT}"></faceplate-perfmark> ${n?le` <faceplate-perfmark name="${pn.FIRST_MEANINGFUL_PAINT}"></faceplate-perfmark> `:""} <slot></slot> <mona-lisa-overlay type="${un(this.isGameOver&&wn.GameOver||!n&&wn.Init||this.isSynchronizingConfiguration&&wn.Sync||this.isRestoringAuthorization&&wn.Auth||void 0)}"></mona-lisa-overlay> ${i&&!this.isSharing?le`<mona-lisa-close-button></mona-lisa-close-button>`:""} `
    }
};
r([u({
    type: Boolean,
    attribute: "is-ios"
})], ed.prototype, "isIOS", void 0), r([u({
    type: Boolean,
    attribute: "is-safari"
})], ed.prototype, "isSafari", void 0), r([u({
    type: Boolean,
    attribute: "is-admin-override"
})], ed.prototype, "isAdminOverride", void 0), r([u({
    type: Boolean,
    attribute: "show-help-link"
})], ed.prototype, "showHelpLink", void 0), r([u({
    type: Boolean,
    attribute: "show-pixel-history"
})], ed.prototype, "showPixelHistory", void 0), r([u({
    type: Boolean,
    attribute: "game-over-on-error"
})], ed.prototype, "shouldGameOverOnError", void 0), r([u({
    type: Object
})], ed.prototype, "user", void 0), r([h()], ed.prototype, "selectedColor", void 0), r([h()], ed.prototype, "nextTileAvailableIn", void 0), r([h()], ed.prototype, "selectedPixel", void 0), r([h()], ed.prototype, "showZoomControl", void 0), r([h()], ed.prototype, "isSharing", void 0), r([h()], ed.prototype, "canvasStateById", void 0), r([h()], ed.prototype, "isPlacingPixel", void 0), r([h()], ed.prototype, "showColorPicker", void 0), r([h()], ed.prototype, "helpModalOpen", void 0), r([h()], ed.prototype, "isSynchronizingConfiguration", void 0), r([h()], ed.prototype, "isRestoringAuthorization", void 0), r([h()], ed.prototype, "isRestoringAfterInactive", void 0), r([h()], ed.prototype, "isGameOver", void 0), ed = r([c("mona-lisa-embed")], ed);
