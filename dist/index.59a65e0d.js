!function(e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).earcut = e();
}(function() {
    return (function r(x, i, u) {
        function f(n, e) {
            if (!i[n]) {
                if (!x[n]) {
                    var t = "function" == typeof require && undefined;
                    if (!e && t) return t(n, !0);
                    if (o) return o(n, !0);
                    throw (t = new Error("Cannot find module '" + n + "'")).code = "MODULE_NOT_FOUND", t;
                }
                t = i[n] = {
                    exports: {
                    }
                }, x[n][0].call(t.exports, function(e) {
                    return f(x[n][1][e] || e);
                }, t, t.exports, r, x, i, u);
            }
            return i[n].exports;
        }
        for(var o = "function" == typeof require && undefined, e = 0; e < u.length; e++)f(u[e]);
        return f;
    })({
        1: [
            function(e, n, t) {
                "use strict";
                function r(e, n, t) {
                    t = t || 2;
                    var r, x, i, u, f, o = n && n.length, v = o ? n[0] * t : e.length, y = c(e, 0, v, t, !0), p = [];
                    if (!y || y.next === y.prev) return p;
                    if (o && (y = (function(e, n, t, r) {
                        var x, i, u, f, o = [];
                        for(x = 0, i = n.length; x < i; x++)u = n[x] * r, f = x < i - 1 ? n[x + 1] * r : e.length, (f = c(e, u, f, r, !1)) === f.next && (f.steiner = !0), o.push(function(e) {
                            var n = e, t = e;
                            for(; (n.x < t.x || n.x === t.x && n.y < t.y) && (t = n), n = n.next, n !== e;);
                            return t;
                        }(f));
                        for(o.sort(Z), x = 0; x < o.length; x++)t = (function(e, n) {
                            var t = function(e, n) {
                                var t, r = n, x = e.x, i = e.y, u = -1 / 0;
                                do if (i <= r.y && i >= r.next.y && r.next.y !== r.y) {
                                    var f = r.x + (i - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                                    if (f <= x && u < f) {
                                        if ((u = f) === x) {
                                            if (i === r.y) return r;
                                            if (i === r.next.y) return r.next;
                                        }
                                        t = r.x < r.next.x ? r : r.next;
                                    }
                                }
                                while (r = r.next, r !== n)
                                if (!t) return null;
                                if (x === u) return t;
                                var o, v = t, y = t.x, p = t.y, a = 1 / 0;
                                r = t;
                                for(; x >= r.x && r.x >= y && x !== r.x && w(i < p ? x : u, i, y, p, i < p ? u : x, i, r.x, r.y) && (o = Math.abs(i - r.y) / (x - r.x), b(r, e) && (o < a || o === a && (r.x > t.x || r.x === t.x && (function(e, n) {
                                    return M(e.prev, e, n.prev) < 0 && M(n.next, e, e.next) < 0;
                                })(t, r))) && (t = r, a = o)), r = r.next, r !== v;);
                                return t;
                            }(e, n);
                            if (!t) return n;
                            var r = m(t, e), e = s(t, t.next);
                            return s(r, r.next), n === t ? e : n;
                        })(o[x], t), t = s(t, t.next);
                        return t;
                    })(e, n, y, t)), e.length > 80 * t) {
                        for(var a = r = e[0], l = x = e[1], h = t; h < v; h += t)(i = e[h]) < a && (a = i), (u = e[h + 1]) < l && (l = u), r < i && (r = i), x < u && (x = u);
                        f = 0 !== (f = Math.max(r - a, x - l)) ? 1 / f : 0;
                    }
                    return d(y, p, t, a, l, f), p;
                }
                function c(e, n, t, r, x) {
                    var i, u;
                    if (x === 0 < z(e, n, t, r)) for(i = n; i < t; i += r)u = f(i, e[i], e[i + 1], u);
                    else for(i = t - r; n <= i; i -= r)u = f(i, e[i], e[i + 1], u);
                    return u && y(u, u.next) && (a1(u), u = u.next), u;
                }
                function s(e, n) {
                    if (!e) return e;
                    n = n || e;
                    var t, r = e;
                    do if (t = !1, r.steiner || !y(r, r.next) && 0 !== M(r.prev, r, r.next)) r = r.next;
                    else {
                        if (a1(r), (r = n = r.prev) === r.next) break;
                        t = !0;
                    }
                    while (t || r !== n)
                    return n;
                }
                function d(e, n, t, r, x, i, u) {
                    if (e) {
                        !u && i && (function(e, n, t, r) {
                            var x = e;
                            for(; null === x.z && (x.z = g(x.x, x.y, n, t, r)), x.prevZ = x.prev, x.nextZ = x.next, x = x.next, x !== e;);
                            x.prevZ.nextZ = null, x.prevZ = null, (function(e) {
                                var n, t, r, x, i, u, f, o, v = 1;
                                do for(t = e, i = e = null, u = 0; t;){
                                    for(u++, r = t, n = f = 0; n < v && (f++, r = r.nextZ); n++);
                                    for(o = v; 0 < f || 0 < o && r;)0 !== f && (0 === o || !r || t.z <= r.z) ? (t = (x = t).nextZ, f--) : (r = (x = r).nextZ, o--), i ? i.nextZ = x : e = x, x.prevZ = i, i = x;
                                    t = r;
                                }
                                while (i.nextZ = null, v *= 2, 1 < u)
                            })(x);
                        })(e, r, x, i);
                        for(var f, o, v = e; e.prev !== e.next;)if (f = e.prev, o = e.next, i ? (function(e, n, t, r) {
                            var x = e.prev, i = e, u = e.next;
                            if (0 <= M(x, i, u)) return !1;
                            var f = (x.x < i.x ? x.x < u.x ? x : u : i.x < u.x ? i : u).x, o = (x.y < i.y ? x.y < u.y ? x : u : i.y < u.y ? i : u).y, v = (x.x > i.x ? x.x > u.x ? x : u : i.x > u.x ? i : u).x, y = (x.y > i.y ? x.y > u.y ? x : u : i.y > u.y ? i : u).y, p = g(f, o, n, t, r), a = g(v, y, n, t, r), l = e.prevZ, h = e.nextZ;
                            for(; l && l.z >= p && h && h.z <= a;){
                                if (l !== e.prev && l !== e.next && w(x.x, x.y, i.x, i.y, u.x, u.y, l.x, l.y) && 0 <= M(l.prev, l, l.next)) return !1;
                                if (l = l.prevZ, h !== e.prev && h !== e.next && w(x.x, x.y, i.x, i.y, u.x, u.y, h.x, h.y) && 0 <= M(h.prev, h, h.next)) return !1;
                                h = h.nextZ;
                            }
                            for(; l && l.z >= p;){
                                if (l !== e.prev && l !== e.next && w(x.x, x.y, i.x, i.y, u.x, u.y, l.x, l.y) && 0 <= M(l.prev, l, l.next)) return !1;
                                l = l.prevZ;
                            }
                            for(; h && h.z <= a;){
                                if (h !== e.prev && h !== e.next && w(x.x, x.y, i.x, i.y, u.x, u.y, h.x, h.y) && 0 <= M(h.prev, h, h.next)) return !1;
                                h = h.nextZ;
                            }
                            return !0;
                        })(e, r, x, i) : (function(e) {
                            var n = e.prev, t = e, r = e.next;
                            if (0 <= M(n, t, r)) return !1;
                            var x = e.next.next;
                            for(; x !== e.prev;){
                                if (w(n.x, n.y, t.x, t.y, r.x, r.y, x.x, x.y) && 0 <= M(x.prev, x, x.next)) return !1;
                                x = x.next;
                            }
                            return !0;
                        })(e)) n.push(f.i / t), n.push(e.i / t), n.push(o.i / t), a1(e), e = o.next, v = o.next;
                        else if ((e = o) === v) {
                            u ? 1 === u ? d(e = function(e, n, t) {
                                var r = e;
                                do var x = r.prev, i = r.next.next;
                                while (!y(x, i) && p(x, r, r.next, i) && b(x, i) && b(i, x) && (n.push(x.i / t), n.push(r.i / t), n.push(i.i / t), a1(r), a1(r.next), r = e = i), r = r.next, r !== e)
                                return s(r);
                            }(s(e), n, t), n, t, r, x, i, 2) : 2 === u && (function(e, n, t, r, x, i) {
                                var u = e;
                                do for(var f = u.next.next; f !== u.prev;){
                                    if (u.i !== f.i && (function(e, n) {
                                        return e.next.i !== n.i && e.prev.i !== n.i && !function(e, n) {
                                            var t = e;
                                            do {
                                                if (t.i !== e.i && t.next.i !== e.i && t.i !== n.i && t.next.i !== n.i && p(t, t.next, e, n)) return !0;
                                            }while (t = t.next, t !== e)
                                            return !1;
                                        }(e, n) && (b(e, n) && b(n, e) && (function(e, n) {
                                            var t = e, r = !1, x = (e.x + n.x) / 2, i = (e.y + n.y) / 2;
                                            for(; t.y > i != t.next.y > i && t.next.y !== t.y && x < (t.next.x - t.x) * (i - t.y) / (t.next.y - t.y) + t.x && (r = !r), t = t.next, t !== e;);
                                            return r;
                                        })(e, n) && (M(e.prev, e, n.prev) || M(e, n.prev, n)) || y(e, n) && 0 < M(e.prev, e, e.next) && 0 < M(n.prev, n, n.next));
                                    })(u, f)) {
                                        var o = m(u, f);
                                        return u = s(u, u.next), o = s(o, o.next), d(u, n, t, r, x, i), d(o, n, t, r, x, i);
                                    }
                                    f = f.next;
                                }
                                while (u = u.next, u !== e)
                            })(e, n, t, r, x, i) : d(s(e), n, t, r, x, i, 1);
                            break;
                        }
                    }
                }
                function Z(e, n) {
                    return e.x - n.x;
                }
                function g(e, n, t, r, x) {
                    return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - t) * x) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (n = 1431655765 & ((n = 858993459 & ((n = 252645135 & ((n = 16711935 & ((n = 32767 * (n - r) * x) | n << 8)) | n << 4)) | n << 2)) | n << 1)) << 1;
                }
                function w(e, n, t, r, x, i, u, f) {
                    return 0 <= (x - u) * (n - f) - (e - u) * (i - f) && 0 <= (e - u) * (r - f) - (t - u) * (n - f) && 0 <= (t - u) * (i - f) - (x - u) * (r - f);
                }
                function M(e, n, t) {
                    return (n.y - e.y) * (t.x - n.x) - (n.x - e.x) * (t.y - n.y);
                }
                function y(e, n) {
                    return e.x === n.x && e.y === n.y;
                }
                function p(e, n, t, r) {
                    var x = v(M(e, n, t)), i = v(M(e, n, r)), u = v(M(t, r, e)), f = v(M(t, r, n));
                    return x !== i && u !== f || 0 === x && o(e, t, n) || 0 === i && o(e, r, n) || 0 === u && o(t, e, r) || !(0 !== f || !o(t, n, r));
                }
                function o(e, n, t) {
                    return n.x <= Math.max(e.x, t.x) && n.x >= Math.min(e.x, t.x) && n.y <= Math.max(e.y, t.y) && n.y >= Math.min(e.y, t.y);
                }
                function v(e) {
                    return 0 < e ? 1 : e < 0 ? -1 : 0;
                }
                function b(e, n) {
                    return M(e.prev, e, e.next) < 0 ? 0 <= M(e, n, e.next) && 0 <= M(e, e.prev, n) : M(e, n, e.prev) < 0 || M(e, e.next, n) < 0;
                }
                function m(e, n) {
                    var t = new u(e.i, e.x, e.y), r = new u(n.i, n.x, n.y), x = e.next, i = n.prev;
                    return (e.next = n).prev = e, (t.next = x).prev = t, (r.next = t).prev = r, (i.next = r).prev = i, r;
                }
                function f(e, n, t, r) {
                    t = new u(e, n, t);
                    return r ? (t.next = r.next, (t.prev = r).next.prev = t, r.next = t) : (t.prev = t).next = t, t;
                }
                function a1(e) {
                    e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
                }
                function u(e, n, t) {
                    this.i = e, this.x = n, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
                }
                function z(e, n, t, r) {
                    for(var x = 0, i = n, u = t - r; i < t; i += r)x += (e[u] - e[i]) * (e[i + 1] + e[u + 1]), u = i;
                    return x;
                }
                n.exports = r, (n.exports.default = r).deviation = function(e, n, t, r) {
                    var x = n && n.length, i = x ? n[0] * t : e.length, u = Math.abs(z(e, 0, i, t));
                    if (x) for(var f = 0, o = n.length; f < o; f++){
                        var v = n[f] * t, y = f < o - 1 ? n[f + 1] * t : e.length;
                        u -= Math.abs(z(e, v, y, t));
                    }
                    for(var p = 0, f = 0; f < r.length; f += 3){
                        var a = r[f] * t, l = r[f + 1] * t, h = r[f + 2] * t;
                        p += Math.abs((e[a] - e[h]) * (e[1 + l] - e[1 + a]) - (e[a] - e[l]) * (e[1 + h] - e[1 + a]));
                    }
                    return 0 === u && 0 === p ? 0 : Math.abs((p - u) / u);
                }, r.flatten = function(e) {
                    for(var n = e[0][0].length, t = {
                        vertices: [],
                        holes: [],
                        dimensions: n
                    }, r = 0, x = 0; x < e.length; x++){
                        for(var i = 0; i < e[x].length; i++)for(var u = 0; u < n; u++)t.vertices.push(e[x][i][u]);
                        0 < x && (r += e[x - 1].length, t.holes.push(r));
                    }
                    return t;
                };
            },
            {
            }
        ]
    }, {
    }, [
        1
    ])(1);
});

//# sourceMappingURL=index.59a65e0d.js.map
