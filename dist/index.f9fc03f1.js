/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/@mapbox/shelf-pack@3.2.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ShelfPack = e();
}(this, function() {
    function t(t, e, i) {
        i = i || {
        }, this.w = t || 64, this.h = e || 64, this.autoResize = !!i.autoResize, this.shelves = [], this.freebins = [], this.stats = {
        }, this.bins = {
        }, this.maxId = 0;
    }
    function e(t, e, i) {
        this.x = 0, this.y = t, this.w = this.free = e, this.h = i;
    }
    function i(t, e, i, s, h, n, r) {
        this.id = t, this.x = e, this.y = i, this.w = s, this.h = h, this.maxw = n || s, this.maxh = r || h, this.refcount = 0;
    }
    return t.prototype.pack = function(t, e) {
        t = [].concat(t), e = e || {
        };
        for(var i, s, h, n, r = [], f = 0; f < t.length; f++)if (i = t[f].w || t[f].width, s = t[f].h || t[f].height, h = t[f].id, i && s) {
            if (!(n = this.packOne(i, s, h))) continue;
            e.inPlace && (t[f].x = n.x, t[f].y = n.y, t[f].id = n.id), r.push(n);
        }
        return this.shrink(), r;
    }, t.prototype.packOne = function(t, i, s) {
        var h, n, r, f, o, a, l, u, c = {
            freebin: -1,
            shelf: -1,
            waste: 1 / 0
        }, p = 0;
        if ("string" == typeof s || "number" == typeof s) {
            if (h = this.getBin(s)) return this.ref(h), h;
            "number" == typeof s && (this.maxId = Math.max(s, this.maxId));
        } else s = ++this.maxId;
        for(f = 0; f < this.freebins.length; f++){
            if (i === (h = this.freebins[f]).maxh && t === h.maxw) return this.allocFreebin(f, t, i, s);
            i > h.maxh || t > h.maxw || i <= h.maxh && t <= h.maxw && (r = h.maxw * h.maxh - t * i) < c.waste && (c.waste = r, c.freebin = f);
        }
        for(f = 0; f < this.shelves.length; f++)if (p += (n = this.shelves[f]).h, !(t > n.free)) {
            if (i === n.h) return this.allocShelf(f, t, i, s);
            i > n.h || i < n.h && (r = (n.h - i) * t) < c.waste && (c.freebin = -1, c.waste = r, c.shelf = f);
        }
        return -1 !== c.freebin ? this.allocFreebin(c.freebin, t, i, s) : -1 !== c.shelf ? this.allocShelf(c.shelf, t, i, s) : i <= this.h - p && t <= this.w ? (n = new e(p, this.w, i), this.allocShelf(this.shelves.push(n) - 1, t, i, s)) : this.autoResize ? (o = a = this.h, ((l = u = this.w) <= o || t > l) && (u = 2 * Math.max(t, l)), (o < l || i > o) && (a = 2 * Math.max(i, o)), this.resize(u, a), this.packOne(t, i, s)) : null;
    }, t.prototype.allocFreebin = function(t, e, i, s) {
        var h = this.freebins.splice(t, 1)[0];
        return h.id = s, h.w = e, h.h = i, h.refcount = 0, this.bins[s] = h, this.ref(h), h;
    }, t.prototype.allocShelf = function(t, e, i, s) {
        var h = this.shelves[t].alloc(e, i, s);
        return this.bins[s] = h, this.ref(h), h;
    }, t.prototype.shrink = function() {
        if (this.shelves.length > 0) {
            for(var t = 0, e = 0, i = 0; i < this.shelves.length; i++){
                var s = this.shelves[i];
                e += s.h, t = Math.max(s.w - s.free, t);
            }
            this.resize(t, e);
        }
    }, t.prototype.getBin = function(t) {
        return this.bins[t];
    }, t.prototype.ref = function(t) {
        if (1 == ++t.refcount) {
            var e = t.h;
            this.stats[e] = 1 + (0 | this.stats[e]);
        }
        return t.refcount;
    }, t.prototype.unref = function(t) {
        return 0 === t.refcount ? 0 : (0 == --t.refcount && (this.stats[t.h]--, delete this.bins[t.id], this.freebins.push(t)), t.refcount);
    }, t.prototype.clear = function() {
        this.shelves = [], this.freebins = [], this.stats = {
        }, this.bins = {
        }, this.maxId = 0;
    }, t.prototype.resize = function(t, e) {
        this.w = t, this.h = e;
        for(var i = 0; i < this.shelves.length; i++)this.shelves[i].resize(t);
        return !0;
    }, e.prototype.alloc = function(t, e, s) {
        if (t > this.free || e > this.h) return null;
        var h = this.x;
        return this.x += t, this.free -= t, new i(s, h, this.y, t, e, t, this.h);
    }, e.prototype.resize = function(t) {
        return this.free += t - this.w, this.w = t, !0;
    }, t;
}); //# sourceMappingURL=/sm/ee4954ca14ee75a79c6771d3f3a4f1df3a75f1d8e1b363117c7fa6c9518d6947.map

//# sourceMappingURL=index.f9fc03f1.js.map
