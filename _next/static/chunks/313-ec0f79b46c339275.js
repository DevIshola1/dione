(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [313], {
        83426: function(a, e, n) {
            "use strict";
            var r = n(36005),
                t = n(25235),
                i = {};
            i.asia = {
                name: "Asia",
                regions: ["centralAsia", "southernAsia", "southeastAsia", "eastAsia", "westernAsia"],
                countries: r.flatten([t.centralAsia.countries, t.southernAsia.countries, t.southeastAsia.countries, t.eastAsia.countries, t.westernAsia.countries]).sort()
            }, i.africa = {
                name: "Africa",
                regions: ["centralAfrica", "northAfrica", "southernAfrica", "eastAfrica", "westAfrica"],
                countries: r.flatten([t.centralAfrica.countries, t.northAfrica.countries, t.southernAfrica.countries, t.eastAfrica.countries, t.westAfrica.countries]).sort()
            }, i.northAmerica = {
                name: "North America",
                regions: ["centralAmerica", "northernAmerica", "caribbean"],
                countries: r.flatten([t.centralAmerica.countries, t.northernAmerica.countries, t.caribbean.countries]).sort()
            }, i.southAmerica = {
                name: "South America",
                regions: ["southAmerica"],
                countries: r.flatten([t.southAmerica.countries]).sort()
            }, i.antartica = {
                name: "Antartica",
                regions: ["antartica"],
                countries: r.flatten([t.antartica.countries]).sort()
            }, i.europe = {
                name: "Europe",
                regions: ["northernEurope", "southernEurope", "easternEurope", "westernEurope"],
                countries: r.flatten([t.northernEurope.countries, t.southernEurope.countries, t.easternEurope.countries, t.westernEurope.countries]).sort()
            }, i.oceania = {
                name: "Oceania",
                regions: ["australia", "melanesia", "micronesia", "polynesia"],
                countries: r.flatten([t.australia.countries, t.melanesia.countries, t.micronesia.countries, t.polynesia.countries]).sort()
            }, a.exports = i
        },
        25235: function(a) {
            "use strict";
            var e = {};
            e.centralAsia = {
                name: "Central Asia",
                countries: ["KZ", "KG", "TJ", "TM", "UZ"]
            }, e.southernAsia = {
                name: "Southern Asia",
                countries: ["AF", "BD", "BT", "IO", "IN", "IR", "MV", "NP", "PK", "LK"]
            }, e.southeastAsia = {
                name: "Southeast Asia",
                countries: ["BN", "KH", "CX", "CC", "TL", "ID", "LA", "MY", "MM", "PH", "SG", "TH", "VN"]
            }, e.eastAsia = {
                name: "East Asia",
                countries: ["CN", "HK", "JP", "KP", "KR", "MO", "MN", "TW"]
            }, e.westernAsia = {
                name: "Western Asia",
                countries: ["AM", "AZ", "BH", "IQ", "IL", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "AE", "YE"]
            }, e.centralAfrica = {
                name: "Central Aftrica",
                countries: ["AO", "CM", "CF", "TD", "CG", "CD", "GQ", "GA", "ST"]
            }, e.northAfrica = {
                name: "North Africa",
                countries: ["DZ", "EG", "LY", "MA", "SD", "TN", "EH"]
            }, e.southernAfrica = {
                name: "Southern Africa",
                countries: ["BW", "LS", "NA", "ZA", "SZ"]
            }, e.eastAfrica = {
                name: "East Africa",
                countries: ["BI", "KM", "DJ", "ER", "ET", "KE", "MG", "MW", "MU", "YT", "MZ", "RE", "RW", "SC", "SO", "SS", "TZ", "UG", "ZM", "ZW"]
            }, e.westAfrica = {
                name: "West Africa",
                countries: ["BJ", "BF", "CV", "CI", "GM", "GH", "GN", "GW", "LR", "ML", "MR", "NE", "NG", "SH", "SN", "SL", "TG"]
            }, e.centralAmerica = {
                name: "Central America",
                countries: ["BZ", "CR", "SV", "GT", "HN", "NI", "PA"]
            }, e.northernAmerica = {
                name: "Northern America",
                countries: ["BM", "CA", "GL", "MX", "PM", "US"]
            }, e.caribbean = {
                name: "Caribbean",
                countries: ["AI", "AG", "AW", "BS", "BB", "BQ", "VG", "KY", "CU", "CW", "DM", "DO", "GD", "GP", "HT", "JM", "MQ", "MS", "PR", "BL", "KN", "LC", "MF", "VC", "SX", "TT", "TC", "VI"]
            }, e.southAmerica = {
                name: "South America",
                countries: ["AR", "BO", "BR", "CL", "CO", "EC", "FK", "GF", "GY", "PY", "PE", "SR", "UY", "VE"]
            }, e.antartica = {
                name: "Antartica",
                countries: ["AQ", "BV", "TF", "HM", "GS"]
            }, e.northernEurope = {
                name: "Northern Europe",
                countries: ["AX", "DK", "EE", "FO", "FI", "GG", "IS", "IE", "JE", "IM", "LV", "LT", "NO", "SJ", "SE", "GB"]
            }, e.southernEurope = {
                name: "Southern Europe",
                countries: ["AL", "AD", "BA", "HR", "CY", "GI", "GR", "IT", "MK", "VA", "MT", "ME", "PT", "SM", "RS", "SI", "ES"]
            }, e.easternEurope = {
                name: "Eastern Europe",
                countries: ["BY", "BG", "CZ", "GE", "HU", "MD", "PL", "RO", "RU", "SK", "UA"]
            }, e.westernEurope = {
                name: "Western Europe",
                countries: ["AT", "BE", "FR", "DE", "LI", "LU", "MC", "NL", "CH"]
            }, e.australia = {
                name: "Australia",
                countries: ["AU", "NF", "NZ"]
            }, e.melanesia = {
                name: "Melanesia",
                countries: ["FJ", "NC", "PG", "SB", "VU"]
            }, e.micronesia = {
                name: "Micronesia",
                countries: ["GU", "KI", "MH", "FM", "NR", "MP", "PW", "UM"]
            }, e.polynesia = {
                name: "Polynesia",
                countries: ["AS", "CK", "PF", "NU", "PN", "WS", "TK", "TO", "TV", "WF"]
            }, a.exports = e
        },
        3023: function(a, e, n) {
            "use strict";
            var r = n(36005),
                t = (n(83426), n(25235), n(65921)),
                i = n(42574),
                o = n(26735),
                l = n(42105),
                s = n(81463);
            e.hW = {
                all: t
            }, r.each(t, function(a) {
                var n = e.hW[a.alpha2];
                n && "deleted" !== n.status || (e.hW[a.alpha2] = a);
                var r = e.hW[a.alpha3];
                r && "deleted" !== r.status || (e.hW[a.alpha3] = a)
            }), e.QT = {
                all: i
            }, r.each(i, function(a) {
                var n = s(a.code);
                "?" == n && (n = a.code), a.symbol = n, e.QT[a.code] = a
            }), e.Mj = {
                all: o
            }, r.each(o, function(a) {
                e.Mj[a.alpha2] = a, e.Mj[a.bibliographic] = a, e.Mj[a.alpha3] = a
            }), l({
                countries: t,
                currencies: i,
                languages: o
            });
            var u = {
                    all: []
                },
                c = r.reduce(t, function(a, e) {
                    return e.countryCallingCodes && e.countryCallingCodes.length && (u.all.push(e), u[e.alpha2] = e, u[e.alpha3] = e, r.each(e.countryCallingCodes, function(e) {
                        -1 == a.indexOf(e) && a.push(e)
                    })), a
                }, []);
            delete u[""], c.sort(function(a, e) {
                var n = function(a) {
                        return parseInt(a)
                    },
                    t = r.map(a.split(" "), n),
                    i = r.map(e.split(" "), n);
                return t[0] < i[0] ? -1 : t[0] > i[0] ? 1 : void 0 === t[1] && void 0 !== i[1] ? -1 : void 0 !== t[1] && void 0 === i[1] ? 1 : t[1] < i[1] ? -1 : t[1] > i[1] ? 1 : 0
            })
        },
        42105: function(a, e, n) {
            var r = n(36005);

            function t(a, e) {
                var n = r.pairs(e);
                return a.filter(function(a) {
                    return n.filter(function(e) {
                        var n = a[e[0]];
                        return r.isArray(n) ? n.indexOf(e[1]) >= 0 : n == e[1]
                    }).length == n.length
                })
            }
            a.exports = function(a) {
                return {
                    countries: t.bind(null, a.countries),
                    currencies: t.bind(null, a.currencies),
                    languages: t.bind(null, a.languages)
                }
            }
        },
        81463: function(a, e, n) {
            a.exports = function(a) {
                return r.hasOwnProperty(a) ? r[a] : "?"
            };
            var r = n(96411)
        },
        96411: function(a) {
            a.exports = {
                ALL: "L",
                AFN: "؋",
                ARS: "$",
                AWG: "ƒ",
                AUD: "$",
                AZN: "₼",
                BSD: "$",
                BBD: "$",
                BYR: "p.",
                BZD: "BZ$",
                BMD: "$",
                BOB: "Bs.",
                BAM: "KM",
                BWP: "P",
                BGN: "лв",
                BRL: "R$",
                BND: "$",
                KHR: "៛",
                CAD: "$",
                KYD: "$",
                CLP: "$",
                CNY: "\xa5",
                COP: "$",
                CRC: "₡",
                HRK: "kn",
                CUP: "₱",
                CZK: "Kč",
                DKK: "kr",
                DOP: "RD$",
                XCD: "$",
                EGP: "\xa3",
                SVC: "$",
                EEK: "kr",
                EUR: "€",
                FKP: "\xa3",
                FJD: "$",
                GHC: "\xa2",
                GIP: "\xa3",
                GTQ: "Q",
                GGP: "\xa3",
                GYD: "$",
                HNL: "L",
                HKD: "$",
                HUF: "Ft",
                ISK: "kr",
                INR: "₹",
                IDR: "Rp",
                IRR: "﷼",
                IMP: "\xa3",
                ILS: "₪",
                JMD: "J$",
                JPY: "\xa5",
                JEP: "\xa3",
                KES: "KSh",
                KZT: "лв",
                KPW: "₩",
                KRW: "₩",
                KGS: "лв",
                LAK: "₭",
                LVL: "Ls",
                LBP: "\xa3",
                LRD: "$",
                LTL: "Lt",
                MKD: "ден",
                MYR: "RM",
                MUR: "₨",
                MXN: "$",
                MNT: "₮",
                MZN: "MT",
                NAD: "$",
                NPR: "₨",
                ANG: "ƒ",
                NZD: "$",
                NIO: "C$",
                NGN: "₦",
                NOK: "kr",
                OMR: "﷼",
                PKR: "₨",
                PAB: "B/.",
                PYG: "Gs",
                PEN: "S/.",
                PHP: "₱",
                PLN: "zł",
                QAR: "﷼",
                RON: "lei",
                RUB: "₽",
                SHP: "\xa3",
                SAR: "﷼",
                RSD: "Дин.",
                SCR: "₨",
                SGD: "$",
                SBD: "$",
                SOS: "S",
                ZAR: "R",
                LKR: "₨",
                SEK: "kr",
                CHF: "CHF",
                SRD: "$",
                SYP: "\xa3",
                TZS: "TSh",
                TWD: "NT$",
                THB: "฿",
                TTD: "TT$",
                TRY: "",
                TRL: "₤",
                TVD: "$",
                UGX: "USh",
                UAH: "₴",
                GBP: "\xa3",
                USD: "$",
                UYU: "$U",
                UZS: "лв",
                VEF: "Bs",
                VND: "₫",
                YER: "﷼",
                ZWD: "Z$"
            }
        },
        83454: function(a, e, n) {
            "use strict";
            var r, t;
            a.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof(null == (t = n.g.process) ? void 0 : t.env) ? n.g.process : n(77663)
        },
        21876: function(a) {
            ! function() {
                var e = {
                        675: function(a, e) {
                            "use strict";
                            e.byteLength = function(a) {
                                var e = s(a),
                                    n = e[0],
                                    r = e[1];
                                return (n + r) * 3 / 4 - r
                            }, e.toByteArray = function(a) {
                                var e, n, i = s(a),
                                    o = i[0],
                                    l = i[1],
                                    u = new t((o + l) * 3 / 4 - l),
                                    c = 0,
                                    p = l > 0 ? o - 4 : o;
                                for (n = 0; n < p; n += 4) e = r[a.charCodeAt(n)] << 18 | r[a.charCodeAt(n + 1)] << 12 | r[a.charCodeAt(n + 2)] << 6 | r[a.charCodeAt(n + 3)], u[c++] = e >> 16 & 255, u[c++] = e >> 8 & 255, u[c++] = 255 & e;
                                return 2 === l && (e = r[a.charCodeAt(n)] << 2 | r[a.charCodeAt(n + 1)] >> 4, u[c++] = 255 & e), 1 === l && (e = r[a.charCodeAt(n)] << 10 | r[a.charCodeAt(n + 1)] << 4 | r[a.charCodeAt(n + 2)] >> 2, u[c++] = e >> 8 & 255, u[c++] = 255 & e), u
                            }, e.fromByteArray = function(a) {
                                for (var e, r = a.length, t = r % 3, i = [], o = 0, l = r - t; o < l; o += 16383) i.push(function(a, e, r) {
                                    for (var t, i = [], o = e; o < r; o += 3) i.push(n[(t = (a[o] << 16 & 16711680) + (a[o + 1] << 8 & 65280) + (255 & a[o + 2])) >> 18 & 63] + n[t >> 12 & 63] + n[t >> 6 & 63] + n[63 & t]);
                                    return i.join("")
                                }(a, o, o + 16383 > l ? l : o + 16383));
                                return 1 === t ? i.push(n[(e = a[r - 1]) >> 2] + n[e << 4 & 63] + "==") : 2 === t && i.push(n[(e = (a[r - 2] << 8) + a[r - 1]) >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="), i.join("")
                            };
                            for (var n = [], r = [], t = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, l = i.length; o < l; ++o) n[o] = i[o], r[i.charCodeAt(o)] = o;

                            function s(a) {
                                var e = a.length;
                                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                                var n = a.indexOf("="); - 1 === n && (n = e);
                                var r = n === e ? 0 : 4 - n % 4;
                                return [n, r]
                            }
                            r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
                        },
                        72: function(a, e, n) {
                            "use strict";
                            var r = n(675),
                                t = n(783),
                                i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                            function o(a) {
                                if (a > 2147483647) throw RangeError('The value "' + a + '" is invalid for option "size"');
                                var e = new Uint8Array(a);
                                return Object.setPrototypeOf(e, l.prototype), e
                            }

                            function l(a, e, n) {
                                if ("number" == typeof a) {
                                    if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                                    return c(a)
                                }
                                return s(a, e, n)
                            }

                            function s(a, e, n) {
                                if ("string" == typeof a) return function(a, e) {
                                    if (("string" != typeof e || "" === e) && (e = "utf8"), !l.isEncoding(e)) throw TypeError("Unknown encoding: " + e);
                                    var n = 0 | g(a, e),
                                        r = o(n),
                                        t = r.write(a, e);
                                    return t !== n && (r = r.slice(0, t)), r
                                }(a, e);
                                if (ArrayBuffer.isView(a)) return p(a);
                                if (null == a) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a);
                                if (P(a, ArrayBuffer) || a && P(a.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (P(a, SharedArrayBuffer) || a && P(a.buffer, SharedArrayBuffer))) return function(a, e, n) {
                                    var r;
                                    if (e < 0 || a.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                                    if (a.byteLength < e + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
                                    return Object.setPrototypeOf(r = void 0 === e && void 0 === n ? new Uint8Array(a) : void 0 === n ? new Uint8Array(a, e) : new Uint8Array(a, e, n), l.prototype), r
                                }(a, e, n);
                                if ("number" == typeof a) throw TypeError('The "value" argument must not be of type number. Received type number');
                                var r = a.valueOf && a.valueOf();
                                if (null != r && r !== a) return l.from(r, e, n);
                                var t = function(a) {
                                    if (l.isBuffer(a)) {
                                        var e, n = 0 | h(a.length),
                                            r = o(n);
                                        return 0 === r.length || a.copy(r, 0, 0, n), r
                                    }
                                    return void 0 !== a.length ? "number" != typeof a.length || (e = a.length) != e ? o(0) : p(a) : "Buffer" === a.type && Array.isArray(a.data) ? p(a.data) : void 0
                                }(a);
                                if (t) return t;
                                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof a[Symbol.toPrimitive]) return l.from(a[Symbol.toPrimitive]("string"), e, n);
                                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a)
                            }

                            function u(a) {
                                if ("number" != typeof a) throw TypeError('"size" argument must be of type number');
                                if (a < 0) throw RangeError('The value "' + a + '" is invalid for option "size"')
                            }

                            function c(a) {
                                return u(a), o(a < 0 ? 0 : 0 | h(a))
                            }

                            function p(a) {
                                for (var e = a.length < 0 ? 0 : 0 | h(a.length), n = o(e), r = 0; r < e; r += 1) n[r] = 255 & a[r];
                                return n
                            }

                            function h(a) {
                                if (a >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                                return 0 | a
                            }

                            function g(a, e) {
                                if (l.isBuffer(a)) return a.length;
                                if (ArrayBuffer.isView(a) || P(a, ArrayBuffer)) return a.byteLength;
                                if ("string" != typeof a) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof a);
                                var n = a.length,
                                    r = arguments.length > 2 && !0 === arguments[2];
                                if (!r && 0 === n) return 0;
                                for (var t = !1;;) switch (e) {
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                        return n;
                                    case "utf8":
                                    case "utf-8":
                                        return R(a).length;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return 2 * n;
                                    case "hex":
                                        return n >>> 1;
                                    case "base64":
                                        return O(a).length;
                                    default:
                                        if (t) return r ? -1 : R(a).length;
                                        e = ("" + e).toLowerCase(), t = !0
                                }
                            }

                            function f(a, e, n) {
                                var t, i, o = !1;
                                if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (e >>>= 0))) return "";
                                for (a || (a = "utf8");;) switch (a) {
                                    case "hex":
                                        return function(a, e, n) {
                                            var r = a.length;
                                            (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                                            for (var t = "", i = e; i < n; ++i) t += U[a[i]];
                                            return t
                                        }(this, e, n);
                                    case "utf8":
                                    case "utf-8":
                                        return y(this, e, n);
                                    case "ascii":
                                        return function(a, e, n) {
                                            var r = "";
                                            n = Math.min(a.length, n);
                                            for (var t = e; t < n; ++t) r += String.fromCharCode(127 & a[t]);
                                            return r
                                        }(this, e, n);
                                    case "latin1":
                                    case "binary":
                                        return function(a, e, n) {
                                            var r = "";
                                            n = Math.min(a.length, n);
                                            for (var t = e; t < n; ++t) r += String.fromCharCode(a[t]);
                                            return r
                                        }(this, e, n);
                                    case "base64":
                                        return t = e, i = n, 0 === t && i === this.length ? r.fromByteArray(this) : r.fromByteArray(this.slice(t, i));
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return function(a, e, n) {
                                            for (var r = a.slice(e, n), t = "", i = 0; i < r.length; i += 2) t += String.fromCharCode(r[i] + 256 * r[i + 1]);
                                            return t
                                        }(this, e, n);
                                    default:
                                        if (o) throw TypeError("Unknown encoding: " + a);
                                        a = (a + "").toLowerCase(), o = !0
                                }
                            }

                            function m(a, e, n) {
                                var r = a[e];
                                a[e] = a[n], a[n] = r
                            }

                            function d(a, e, n, r, t) {
                                var i;
                                if (0 === a.length) return -1;
                                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), (i = n = +n) != i && (n = t ? 0 : a.length - 1), n < 0 && (n = a.length + n), n >= a.length) {
                                    if (t) return -1;
                                    n = a.length - 1
                                } else if (n < 0) {
                                    if (!t) return -1;
                                    n = 0
                                }
                                if ("string" == typeof e && (e = l.from(e, r)), l.isBuffer(e)) return 0 === e.length ? -1 : b(a, e, n, r, t);
                                if ("number" == typeof e) return (e &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? t ? Uint8Array.prototype.indexOf.call(a, e, n) : Uint8Array.prototype.lastIndexOf.call(a, e, n) : b(a, [e], n, r, t);
                                throw TypeError("val must be string, number or Buffer")
                            }

                            function b(a, e, n, r, t) {
                                var i, o = 1,
                                    l = a.length,
                                    s = e.length;
                                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                                    if (a.length < 2 || e.length < 2) return -1;
                                    o = 2, l /= 2, s /= 2, n /= 2
                                }

                                function u(a, e) {
                                    return 1 === o ? a[e] : a.readUInt16BE(e * o)
                                }
                                if (t) {
                                    var c = -1;
                                    for (i = n; i < l; i++)
                                        if (u(a, i) === u(e, -1 === c ? 0 : i - c)) {
                                            if (-1 === c && (c = i), i - c + 1 === s) return c * o
                                        } else -1 !== c && (i -= i - c), c = -1
                                } else
                                    for (n + s > l && (n = l - s), i = n; i >= 0; i--) {
                                        for (var p = !0, h = 0; h < s; h++)
                                            if (u(a, i + h) !== u(e, h)) {
                                                p = !1;
                                                break
                                            }
                                        if (p) return i
                                    }
                                return -1
                            }

                            function y(a, e, n) {
                                n = Math.min(a.length, n);
                                for (var r = [], t = e; t < n;) {
                                    var i, o, l, s, u = a[t],
                                        c = null,
                                        p = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                                    if (t + p <= n) switch (p) {
                                        case 1:
                                            u < 128 && (c = u);
                                            break;
                                        case 2:
                                            (192 & (i = a[t + 1])) == 128 && (s = (31 & u) << 6 | 63 & i) > 127 && (c = s);
                                            break;
                                        case 3:
                                            i = a[t + 1], o = a[t + 2], (192 & i) == 128 && (192 & o) == 128 && (s = (15 & u) << 12 | (63 & i) << 6 | 63 & o) > 2047 && (s < 55296 || s > 57343) && (c = s);
                                            break;
                                        case 4:
                                            i = a[t + 1], o = a[t + 2], l = a[t + 3], (192 & i) == 128 && (192 & o) == 128 && (192 & l) == 128 && (s = (15 & u) << 18 | (63 & i) << 12 | (63 & o) << 6 | 63 & l) > 65535 && s < 1114112 && (c = s)
                                    }
                                    null === c ? (c = 65533, p = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), t += p
                                }
                                return function(a) {
                                    var e = a.length;
                                    if (e <= 4096) return String.fromCharCode.apply(String, a);
                                    for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, a.slice(r, r += 4096));
                                    return n
                                }(r)
                            }

                            function C(a, e, n) {
                                if (a % 1 != 0 || a < 0) throw RangeError("offset is not uint");
                                if (a + e > n) throw RangeError("Trying to access beyond buffer length")
                            }

                            function A(a, e, n, r, t, i) {
                                if (!l.isBuffer(a)) throw TypeError('"buffer" argument must be a Buffer instance');
                                if (e > t || e < i) throw RangeError('"value" argument is out of bounds');
                                if (n + r > a.length) throw RangeError("Index out of range")
                            }

                            function S(a, e, n, r, t, i) {
                                if (n + r > a.length || n < 0) throw RangeError("Index out of range")
                            }

                            function v(a, e, n, r, i) {
                                return e = +e, n >>>= 0, i || S(a, e, n, 4, 34028234663852886e22, -34028234663852886e22), t.write(a, e, n, r, 23, 4), n + 4
                            }

                            function E(a, e, n, r, i) {
                                return e = +e, n >>>= 0, i || S(a, e, n, 8, 17976931348623157e292, -17976931348623157e292), t.write(a, e, n, r, 52, 8), n + 8
                            }
                            e.Buffer = l, e.SlowBuffer = function(a) {
                                return +a != a && (a = 0), l.alloc(+a)
                            }, e.INSPECT_MAX_BYTES = 50, e.kMaxLength = 2147483647, l.TYPED_ARRAY_SUPPORT = function() {
                                try {
                                    var a = new Uint8Array(1),
                                        e = {
                                            foo: function() {
                                                return 42
                                            }
                                        };
                                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(a, e), 42 === a.foo()
                                } catch (a) {
                                    return !1
                                }
                            }(), l.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(l.prototype, "parent", {
                                enumerable: !0,
                                get: function() {
                                    if (l.isBuffer(this)) return this.buffer
                                }
                            }), Object.defineProperty(l.prototype, "offset", {
                                enumerable: !0,
                                get: function() {
                                    if (l.isBuffer(this)) return this.byteOffset
                                }
                            }), l.poolSize = 8192, l.from = function(a, e, n) {
                                return s(a, e, n)
                            }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array), l.alloc = function(a, e, n) {
                                return (u(a), a <= 0) ? o(a) : void 0 !== e ? "string" == typeof n ? o(a).fill(e, n) : o(a).fill(e) : o(a)
                            }, l.allocUnsafe = function(a) {
                                return c(a)
                            }, l.allocUnsafeSlow = function(a) {
                                return c(a)
                            }, l.isBuffer = function(a) {
                                return null != a && !0 === a._isBuffer && a !== l.prototype
                            }, l.compare = function(a, e) {
                                if (P(a, Uint8Array) && (a = l.from(a, a.offset, a.byteLength)), P(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(a) || !l.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                if (a === e) return 0;
                                for (var n = a.length, r = e.length, t = 0, i = Math.min(n, r); t < i; ++t)
                                    if (a[t] !== e[t]) {
                                        n = a[t], r = e[t];
                                        break
                                    }
                                return n < r ? -1 : r < n ? 1 : 0
                            }, l.isEncoding = function(a) {
                                switch (String(a).toLowerCase()) {
                                    case "hex":
                                    case "utf8":
                                    case "utf-8":
                                    case "ascii":
                                    case "latin1":
                                    case "binary":
                                    case "base64":
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }, l.concat = function(a, e) {
                                if (!Array.isArray(a)) throw TypeError('"list" argument must be an Array of Buffers');
                                if (0 === a.length) return l.alloc(0);
                                if (void 0 === e)
                                    for (n = 0, e = 0; n < a.length; ++n) e += a[n].length;
                                var n, r = l.allocUnsafe(e),
                                    t = 0;
                                for (n = 0; n < a.length; ++n) {
                                    var i = a[n];
                                    if (P(i, Uint8Array) && (i = l.from(i)), !l.isBuffer(i)) throw TypeError('"list" argument must be an Array of Buffers');
                                    i.copy(r, t), t += i.length
                                }
                                return r
                            }, l.byteLength = g, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
                                var a = this.length;
                                if (a % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                                for (var e = 0; e < a; e += 2) m(this, e, e + 1);
                                return this
                            }, l.prototype.swap32 = function() {
                                var a = this.length;
                                if (a % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                                for (var e = 0; e < a; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                                return this
                            }, l.prototype.swap64 = function() {
                                var a = this.length;
                                if (a % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                                for (var e = 0; e < a; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                                return this
                            }, l.prototype.toString = function() {
                                var a = this.length;
                                return 0 === a ? "" : 0 == arguments.length ? y(this, 0, a) : f.apply(this, arguments)
                            }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(a) {
                                if (!l.isBuffer(a)) throw TypeError("Argument must be a Buffer");
                                return this === a || 0 === l.compare(this, a)
                            }, l.prototype.inspect = function() {
                                var a = "",
                                    n = e.INSPECT_MAX_BYTES;
                                return a = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (a += " ... "), "<Buffer " + a + ">"
                            }, i && (l.prototype[i] = l.prototype.inspect), l.prototype.compare = function(a, e, n, r, t) {
                                if (P(a, Uint8Array) && (a = l.from(a, a.offset, a.byteLength)), !l.isBuffer(a)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a);
                                if (void 0 === e && (e = 0), void 0 === n && (n = a ? a.length : 0), void 0 === r && (r = 0), void 0 === t && (t = this.length), e < 0 || n > a.length || r < 0 || t > this.length) throw RangeError("out of range index");
                                if (r >= t && e >= n) return 0;
                                if (r >= t) return -1;
                                if (e >= n) return 1;
                                if (e >>>= 0, n >>>= 0, r >>>= 0, t >>>= 0, this === a) return 0;
                                for (var i = t - r, o = n - e, s = Math.min(i, o), u = this.slice(r, t), c = a.slice(e, n), p = 0; p < s; ++p)
                                    if (u[p] !== c[p]) {
                                        i = u[p], o = c[p];
                                        break
                                    }
                                return i < o ? -1 : o < i ? 1 : 0
                            }, l.prototype.includes = function(a, e, n) {
                                return -1 !== this.indexOf(a, e, n)
                            }, l.prototype.indexOf = function(a, e, n) {
                                return d(this, a, e, n, !0)
                            }, l.prototype.lastIndexOf = function(a, e, n) {
                                return d(this, a, e, n, !1)
                            }, l.prototype.write = function(a, e, n, r) {
                                if (void 0 === e) r = "utf8", n = this.length, e = 0;
                                else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                                else if (isFinite(e)) e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
                                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                var t, i, o, l, s, u, c, p, h, g, f, m, d = this.length - e;
                                if ((void 0 === n || n > d) && (n = d), a.length > 0 && (n < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                                r || (r = "utf8");
                                for (var b = !1;;) switch (r) {
                                    case "hex":
                                        return function(a, e, n, r) {
                                            n = Number(n) || 0;
                                            var t = a.length - n;
                                            r ? (r = Number(r)) > t && (r = t) : r = t;
                                            var i = e.length;
                                            r > i / 2 && (r = i / 2);
                                            for (var o = 0; o < r; ++o) {
                                                var l = parseInt(e.substr(2 * o, 2), 16);
                                                if (l != l) break;
                                                a[n + o] = l
                                            }
                                            return o
                                        }(this, a, e, n);
                                    case "utf8":
                                    case "utf-8":
                                        return s = e, u = n, B(R(a, this.length - s), this, s, u);
                                    case "ascii":
                                        return c = e, p = n, B(j(a), this, c, p);
                                    case "latin1":
                                    case "binary":
                                        return t = this, i = a, o = e, l = n, B(j(i), t, o, l);
                                    case "base64":
                                        return h = e, g = n, B(O(a), this, h, g);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return f = e, m = n, B(function(a, e) {
                                            for (var n, r, t = [], i = 0; i < a.length && !((e -= 2) < 0); ++i) r = (n = a.charCodeAt(i)) >> 8, t.push(n % 256), t.push(r);
                                            return t
                                        }(a, this.length - f), this, f, m);
                                    default:
                                        if (b) throw TypeError("Unknown encoding: " + r);
                                        r = ("" + r).toLowerCase(), b = !0
                                }
                            }, l.prototype.toJSON = function() {
                                return {
                                    type: "Buffer",
                                    data: Array.prototype.slice.call(this._arr || this, 0)
                                }
                            }, l.prototype.slice = function(a, e) {
                                var n = this.length;
                                a = ~~a, e = void 0 === e ? n : ~~e, a < 0 ? (a += n) < 0 && (a = 0) : a > n && (a = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < a && (e = a);
                                var r = this.subarray(a, e);
                                return Object.setPrototypeOf(r, l.prototype), r
                            }, l.prototype.readUIntLE = function(a, e, n) {
                                a >>>= 0, e >>>= 0, n || C(a, e, this.length);
                                for (var r = this[a], t = 1, i = 0; ++i < e && (t *= 256);) r += this[a + i] * t;
                                return r
                            }, l.prototype.readUIntBE = function(a, e, n) {
                                a >>>= 0, e >>>= 0, n || C(a, e, this.length);
                                for (var r = this[a + --e], t = 1; e > 0 && (t *= 256);) r += this[a + --e] * t;
                                return r
                            }, l.prototype.readUInt8 = function(a, e) {
                                return a >>>= 0, e || C(a, 1, this.length), this[a]
                            }, l.prototype.readUInt16LE = function(a, e) {
                                return a >>>= 0, e || C(a, 2, this.length), this[a] | this[a + 1] << 8
                            }, l.prototype.readUInt16BE = function(a, e) {
                                return a >>>= 0, e || C(a, 2, this.length), this[a] << 8 | this[a + 1]
                            }, l.prototype.readUInt32LE = function(a, e) {
                                return a >>>= 0, e || C(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3]
                            }, l.prototype.readUInt32BE = function(a, e) {
                                return a >>>= 0, e || C(a, 4, this.length), 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3])
                            }, l.prototype.readIntLE = function(a, e, n) {
                                a >>>= 0, e >>>= 0, n || C(a, e, this.length);
                                for (var r = this[a], t = 1, i = 0; ++i < e && (t *= 256);) r += this[a + i] * t;
                                return r >= (t *= 128) && (r -= Math.pow(2, 8 * e)), r
                            }, l.prototype.readIntBE = function(a, e, n) {
                                a >>>= 0, e >>>= 0, n || C(a, e, this.length);
                                for (var r = e, t = 1, i = this[a + --r]; r > 0 && (t *= 256);) i += this[a + --r] * t;
                                return i >= (t *= 128) && (i -= Math.pow(2, 8 * e)), i
                            }, l.prototype.readInt8 = function(a, e) {
                                return (a >>>= 0, e || C(a, 1, this.length), 128 & this[a]) ? -((255 - this[a] + 1) * 1) : this[a]
                            }, l.prototype.readInt16LE = function(a, e) {
                                a >>>= 0, e || C(a, 2, this.length);
                                var n = this[a] | this[a + 1] << 8;
                                return 32768 & n ? 4294901760 | n : n
                            }, l.prototype.readInt16BE = function(a, e) {
                                a >>>= 0, e || C(a, 2, this.length);
                                var n = this[a + 1] | this[a] << 8;
                                return 32768 & n ? 4294901760 | n : n
                            }, l.prototype.readInt32LE = function(a, e) {
                                return a >>>= 0, e || C(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24
                            }, l.prototype.readInt32BE = function(a, e) {
                                return a >>>= 0, e || C(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]
                            }, l.prototype.readFloatLE = function(a, e) {
                                return a >>>= 0, e || C(a, 4, this.length), t.read(this, a, !0, 23, 4)
                            }, l.prototype.readFloatBE = function(a, e) {
                                return a >>>= 0, e || C(a, 4, this.length), t.read(this, a, !1, 23, 4)
                            }, l.prototype.readDoubleLE = function(a, e) {
                                return a >>>= 0, e || C(a, 8, this.length), t.read(this, a, !0, 52, 8)
                            }, l.prototype.readDoubleBE = function(a, e) {
                                return a >>>= 0, e || C(a, 8, this.length), t.read(this, a, !1, 52, 8)
                            }, l.prototype.writeUIntLE = function(a, e, n, r) {
                                if (a = +a, e >>>= 0, n >>>= 0, !r) {
                                    var t = Math.pow(2, 8 * n) - 1;
                                    A(this, a, e, n, t, 0)
                                }
                                var i = 1,
                                    o = 0;
                                for (this[e] = 255 & a; ++o < n && (i *= 256);) this[e + o] = a / i & 255;
                                return e + n
                            }, l.prototype.writeUIntBE = function(a, e, n, r) {
                                if (a = +a, e >>>= 0, n >>>= 0, !r) {
                                    var t = Math.pow(2, 8 * n) - 1;
                                    A(this, a, e, n, t, 0)
                                }
                                var i = n - 1,
                                    o = 1;
                                for (this[e + i] = 255 & a; --i >= 0 && (o *= 256);) this[e + i] = a / o & 255;
                                return e + n
                            }, l.prototype.writeUInt8 = function(a, e, n) {
                                return a = +a, e >>>= 0, n || A(this, a, e, 1, 255, 0), this[e] = 255 & a, e + 1
                            }, l.prototype.writeUInt16LE = function(a, e, n) {
                                return a = +a, e >>>= 0, n || A(this, a, e, 2, 65535, 0), this[e] = 255 & a, this[e + 1] = a >>> 8, e + 2
                            }, l.prototype.writeUInt16BE = function(a, e, n) {
                                return a = +a, e >>>= 0, n || A(this, a, e, 2, 65535, 0), this[e] = a >>> 8, this[e + 1] = 255 & a, e + 2
                            }, l.prototype.writeUInt32LE = function(a, e, n) {
                                return a = +a, e >>>= 0, n || A(this, a, e, 4, 4294967295, 0), this[e + 3] = a >>> 24, this[e + 2] = a >>> 16, this[e + 1] = a >>> 8, this[e] = 255 & a, e + 4
                            }, l.prototype.writeUInt32BE = function(a, e, n) {
                                return a = +a, e >>>= 0, n || A(this, a, e, 4, 4294967295, 0), this[e] = a >>> 24, this[e + 1] = a >>> 16, this[e + 2] = a >>> 8, this[e + 3] = 255 & a, e + 4
                            }, l.prototype.writeIntLE = function(a, e, n, r) {
                                if (a = +a, e >>>= 0, !r) {
                                    var t = Math.pow(2, 8 * n - 1);
                                    A(this, a, e, n, t - 1, -t)
                                }
                                var i = 0,
                                    o = 1,
                                    l = 0;
                                for (this[e] = 255 & a; ++i < n && (o *= 256);) a < 0 && 0 === l && 0 !== this[e + i - 1] && (l = 1), this[e + i] = (a / o >> 0) - l & 255;
                                return e + n
                            }, l.prototype.writeIntBE = function(a, e, n, r) {
                                if (a = +a, e >>>= 0, !r) {
                                    var t = Math.pow(2, 8 * n - 1);
                                    A(this, a, e, n, t - 1, -t)
                                }
                                var i = n - 1,
                                    o = 1,
                                    l = 0;
                                for (this[e + i] = 255 & a; --i >= 0 && (o *= 256);) a < 0 && 0 === l && 0 !== this[e + i + 1] && (l = 1), this[e + i] = (a / o >> 0) - l & 255;
                                return e + n
                            }, l.prototype.writeInt8 = function(a, e, n) {
                                return a = +a, e >>>= 0, n || A(this, a, e, 1, 127, -128), a < 0 && (a = 255 + a + 1), this[e] = 255 & a, e + 1
                            }, l.prototype.writeInt16LE = function(a, e, n) {
                                return a = +a, e >>>= 0, n || A(this, a, e, 2, 32767, -32768), this[e] = 255 & a, this[e + 1] = a >>> 8, e + 2
                            }, l.prototype.writeInt16BE = function(a, e, n) {
                                return a = +a, e >>>= 0, n || A(this, a, e, 2, 32767, -32768), this[e] = a >>> 8, this[e + 1] = 255 & a, e + 2
                            }, l.prototype.writeInt32LE = function(a, e, n) {
                                return a = +a, e >>>= 0, n || A(this, a, e, 4, 2147483647, -2147483648), this[e] = 255 & a, this[e + 1] = a >>> 8, this[e + 2] = a >>> 16, this[e + 3] = a >>> 24, e + 4
                            }, l.prototype.writeInt32BE = function(a, e, n) {
                                return a = +a, e >>>= 0, n || A(this, a, e, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), this[e] = a >>> 24, this[e + 1] = a >>> 16, this[e + 2] = a >>> 8, this[e + 3] = 255 & a, e + 4
                            }, l.prototype.writeFloatLE = function(a, e, n) {
                                return v(this, a, e, !0, n)
                            }, l.prototype.writeFloatBE = function(a, e, n) {
                                return v(this, a, e, !1, n)
                            }, l.prototype.writeDoubleLE = function(a, e, n) {
                                return E(this, a, e, !0, n)
                            }, l.prototype.writeDoubleBE = function(a, e, n) {
                                return E(this, a, e, !1, n)
                            }, l.prototype.copy = function(a, e, n, r) {
                                if (!l.isBuffer(a)) throw TypeError("argument should be a Buffer");
                                if (n || (n = 0), r || 0 === r || (r = this.length), e >= a.length && (e = a.length), e || (e = 0), r > 0 && r < n && (r = n), r === n || 0 === a.length || 0 === this.length) return 0;
                                if (e < 0) throw RangeError("targetStart out of bounds");
                                if (n < 0 || n >= this.length) throw RangeError("Index out of range");
                                if (r < 0) throw RangeError("sourceEnd out of bounds");
                                r > this.length && (r = this.length), a.length - e < r - n && (r = a.length - e + n);
                                var t = r - n;
                                if (this === a && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, n, r);
                                else if (this === a && n < e && e < r)
                                    for (var i = t - 1; i >= 0; --i) a[i + e] = this[i + n];
                                else Uint8Array.prototype.set.call(a, this.subarray(n, r), e);
                                return t
                            }, l.prototype.fill = function(a, e, n, r) {
                                if ("string" == typeof a) {
                                    if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw TypeError("encoding must be a string");
                                    if ("string" == typeof r && !l.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
                                    if (1 === a.length) {
                                        var t, i = a.charCodeAt(0);
                                        ("utf8" === r && i < 128 || "latin1" === r) && (a = i)
                                    }
                                } else "number" == typeof a ? a &= 255 : "boolean" == typeof a && (a = Number(a));
                                if (e < 0 || this.length < e || this.length < n) throw RangeError("Out of range index");
                                if (n <= e) return this;
                                if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, a || (a = 0), "number" == typeof a)
                                    for (t = e; t < n; ++t) this[t] = a;
                                else {
                                    var o = l.isBuffer(a) ? a : l.from(a, r),
                                        s = o.length;
                                    if (0 === s) throw TypeError('The value "' + a + '" is invalid for argument "value"');
                                    for (t = 0; t < n - e; ++t) this[t + e] = o[t % s]
                                }
                                return this
                            };
                            var w = /[^+/0-9A-Za-z-_]/g;

                            function R(a, e) {
                                e = e || 1 / 0;
                                for (var n, r = a.length, t = null, i = [], o = 0; o < r; ++o) {
                                    if ((n = a.charCodeAt(o)) > 55295 && n < 57344) {
                                        if (!t) {
                                            if (n > 56319 || o + 1 === r) {
                                                (e -= 3) > -1 && i.push(239, 191, 189);
                                                continue
                                            }
                                            t = n;
                                            continue
                                        }
                                        if (n < 56320) {
                                            (e -= 3) > -1 && i.push(239, 191, 189), t = n;
                                            continue
                                        }
                                        n = (t - 55296 << 10 | n - 56320) + 65536
                                    } else t && (e -= 3) > -1 && i.push(239, 191, 189);
                                    if (t = null, n < 128) {
                                        if ((e -= 1) < 0) break;
                                        i.push(n)
                                    } else if (n < 2048) {
                                        if ((e -= 2) < 0) break;
                                        i.push(n >> 6 | 192, 63 & n | 128)
                                    } else if (n < 65536) {
                                        if ((e -= 3) < 0) break;
                                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                                    } else if (n < 1114112) {
                                        if ((e -= 4) < 0) break;
                                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                                    } else throw Error("Invalid code point")
                                }
                                return i
                            }

                            function j(a) {
                                for (var e = [], n = 0; n < a.length; ++n) e.push(255 & a.charCodeAt(n));
                                return e
                            }

                            function O(a) {
                                return r.toByteArray(function(a) {
                                    if ((a = (a = a.split("=")[0]).trim().replace(w, "")).length < 2) return "";
                                    for (; a.length % 4 != 0;) a += "=";
                                    return a
                                }(a))
                            }

                            function B(a, e, n, r) {
                                for (var t = 0; t < r && !(t + n >= e.length) && !(t >= a.length); ++t) e[t + n] = a[t];
                                return t
                            }

                            function P(a, e) {
                                return a instanceof e || null != a && null != a.constructor && null != a.constructor.name && a.constructor.name === e.name
                            }
                            var U = function() {
                                for (var a = "0123456789abcdef", e = Array(256), n = 0; n < 16; ++n)
                                    for (var r = 16 * n, t = 0; t < 16; ++t) e[r + t] = a[n] + a[t];
                                return e
                            }()
                        },
                        783: function(a, e) {
                            e.read = function(a, e, n, r, t) {
                                var i, o, l = 8 * t - r - 1,
                                    s = (1 << l) - 1,
                                    u = s >> 1,
                                    c = -7,
                                    p = n ? t - 1 : 0,
                                    h = n ? -1 : 1,
                                    g = a[e + p];
                                for (p += h, i = g & (1 << -c) - 1, g >>= -c, c += l; c > 0; i = 256 * i + a[e + p], p += h, c -= 8);
                                for (o = i & (1 << -c) - 1, i >>= -c, c += r; c > 0; o = 256 * o + a[e + p], p += h, c -= 8);
                                if (0 === i) i = 1 - u;
                                else {
                                    if (i === s) return o ? NaN : 1 / 0 * (g ? -1 : 1);
                                    o += Math.pow(2, r), i -= u
                                }
                                return (g ? -1 : 1) * o * Math.pow(2, i - r)
                            }, e.write = function(a, e, n, r, t, i) {
                                var o, l, s, u = 8 * i - t - 1,
                                    c = (1 << u) - 1,
                                    p = c >> 1,
                                    h = 23 === t ? 5960464477539062e-23 : 0,
                                    g = r ? 0 : i - 1,
                                    f = r ? 1 : -1,
                                    m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                                for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (l = isNaN(e) ? 1 : 0, o = c) : (o = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -o)) < 1 && (o--, s *= 2), o + p >= 1 ? e += h / s : e += h * Math.pow(2, 1 - p), e * s >= 2 && (o++, s /= 2), o + p >= c ? (l = 0, o = c) : o + p >= 1 ? (l = (e * s - 1) * Math.pow(2, t), o += p) : (l = e * Math.pow(2, p - 1) * Math.pow(2, t), o = 0)); t >= 8; a[n + g] = 255 & l, g += f, l /= 256, t -= 8);
                                for (o = o << t | l, u += t; u > 0; a[n + g] = 255 & o, g += f, o /= 256, u -= 8);
                                a[n + g - f] |= 128 * m
                            }
                        }
                    },
                    n = {};

                function r(a) {
                    var t = n[a];
                    if (void 0 !== t) return t.exports;
                    var i = n[a] = {
                            exports: {}
                        },
                        o = !0;
                    try {
                        e[a](i, i.exports, r), o = !1
                    } finally {
                        o && delete n[a]
                    }
                    return i.exports
                }
                r.ab = "//";
                var t = r(72);
                a.exports = t
            }()
        },
        77663: function(a) {
            ! function() {
                var e = {
                        229: function(a) {
                            var e, n, r, t = a.exports = {};

                            function i() {
                                throw Error("setTimeout has not been defined")
                            }

                            function o() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function l(a) {
                                if (e === setTimeout) return setTimeout(a, 0);
                                if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(a, 0);
                                try {
                                    return e(a, 0)
                                } catch (n) {
                                    try {
                                        return e.call(null, a, 0)
                                    } catch (n) {
                                        return e.call(this, a, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    e = "function" == typeof setTimeout ? setTimeout : i
                                } catch (a) {
                                    e = i
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : o
                                } catch (a) {
                                    n = o
                                }
                            }();
                            var s = [],
                                u = !1,
                                c = -1;

                            function p() {
                                u && r && (u = !1, r.length ? s = r.concat(s) : c = -1, s.length && h())
                            }

                            function h() {
                                if (!u) {
                                    var a = l(p);
                                    u = !0;
                                    for (var e = s.length; e;) {
                                        for (r = s, s = []; ++c < e;) r && r[c].run();
                                        c = -1, e = s.length
                                    }
                                    r = null, u = !1,
                                        function(a) {
                                            if (n === clearTimeout) return clearTimeout(a);
                                            if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(a);
                                            try {
                                                n(a)
                                            } catch (e) {
                                                try {
                                                    return n.call(null, a)
                                                } catch (e) {
                                                    return n.call(this, a)
                                                }
                                            }
                                        }(a)
                                }
                            }

                            function g(a, e) {
                                this.fun = a, this.array = e
                            }

                            function f() {}
                            t.nextTick = function(a) {
                                var e = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                s.push(new g(a, e)), 1 !== s.length || u || l(h)
                            }, g.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {}, t.on = f, t.addListener = f, t.once = f, t.off = f, t.removeListener = f, t.removeAllListeners = f, t.emit = f, t.prependListener = f, t.prependOnceListener = f, t.listeners = function(a) {
                                return []
                            }, t.binding = function(a) {
                                throw Error("process.binding is not supported")
                            }, t.cwd = function() {
                                return "/"
                            }, t.chdir = function(a) {
                                throw Error("process.chdir is not supported")
                            }, t.umask = function() {
                                return 0
                            }
                        }
                    },
                    n = {};

                function r(a) {
                    var t = n[a];
                    if (void 0 !== t) return t.exports;
                    var i = n[a] = {
                            exports: {}
                        },
                        o = !0;
                    try {
                        e[a](i, i.exports, r), o = !1
                    } finally {
                        o && delete n[a]
                    }
                    return i.exports
                }
                r.ab = "//";
                var t = r(229);
                a.exports = t
            }()
        },
        79720: function(a, e, n) {
            var r = n(21876).Buffer,
                t = n(83454);
            ! function() {
                var e = {
                        992: function(a) {
                            a.exports = function(a, n, r) {
                                if (a.filter) return a.filter(n, r);
                                if (null == a || "function" != typeof n) throw TypeError();
                                for (var t = [], i = 0; i < a.length; i++)
                                    if (e.call(a, i)) {
                                        var o = a[i];
                                        n.call(r, o, i, a) && t.push(o)
                                    }
                                return t
                            };
                            var e = Object.prototype.hasOwnProperty
                        },
                        256: function(a, e, n) {
                            "use strict";
                            var r = n(925),
                                t = n(139),
                                i = t(r("String.prototype.indexOf"));
                            a.exports = function(a, e) {
                                var n = r(a, !!e);
                                return "function" == typeof n && i(a, ".prototype.") > -1 ? t(n) : n
                            }
                        },
                        139: function(a, e, n) {
                            "use strict";
                            var r = n(174),
                                t = n(925),
                                i = t("%Function.prototype.apply%"),
                                o = t("%Function.prototype.call%"),
                                l = t("%Reflect.apply%", !0) || r.call(o, i),
                                s = t("%Object.getOwnPropertyDescriptor%", !0),
                                u = t("%Object.defineProperty%", !0),
                                c = t("%Math.max%");
                            if (u) try {
                                u({}, "a", {
                                    value: 1
                                })
                            } catch (a) {
                                u = null
                            }
                            a.exports = function(a) {
                                var e = l(r, o, arguments);
                                return s && u && s(e, "length").configurable && u(e, "length", {
                                    value: 1 + c(0, a.length - (arguments.length - 1))
                                }), e
                            };
                            var p = function() {
                                return l(r, i, arguments)
                            };
                            u ? u(a.exports, "apply", {
                                value: p
                            }) : a.exports.apply = p
                        },
                        144: function(a) {
                            var e = Object.prototype.hasOwnProperty,
                                n = Object.prototype.toString;
                            a.exports = function(a, r, t) {
                                if ("[object Function]" !== n.call(r)) throw TypeError("iterator must be a function");
                                var i = a.length;
                                if (i === +i)
                                    for (var o = 0; o < i; o++) r.call(t, a[o], o, a);
                                else
                                    for (var l in a) e.call(a, l) && r.call(t, a[l], l, a)
                            }
                        },
                        426: function(a) {
                            "use strict";
                            var e = Array.prototype.slice,
                                n = Object.prototype.toString;
                            a.exports = function(a) {
                                var r, t = this;
                                if ("function" != typeof t || "[object Function]" !== n.call(t)) throw TypeError("Function.prototype.bind called on incompatible " + t);
                                for (var i = e.call(arguments, 1), o = Math.max(0, t.length - i.length), l = [], s = 0; s < o; s++) l.push("$" + s);
                                if (r = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                                        if (!(this instanceof r)) return t.apply(a, i.concat(e.call(arguments)));
                                        var n = t.apply(this, i.concat(e.call(arguments)));
                                        return Object(n) === n ? n : this
                                    }), t.prototype) {
                                    var u = function() {};
                                    u.prototype = t.prototype, r.prototype = new u, u.prototype = null
                                }
                                return r
                            }
                        },
                        174: function(a, e, n) {
                            "use strict";
                            var r = n(426);
                            a.exports = Function.prototype.bind || r
                        },
                        500: function(a, e, n) {
                            "use strict";
                            var r, t = SyntaxError,
                                i = Function,
                                o = TypeError,
                                l = function(a) {
                                    try {
                                        return i('"use strict"; return (' + a + ").constructor;")()
                                    } catch (a) {}
                                },
                                s = Object.getOwnPropertyDescriptor;
                            if (s) try {
                                s({}, "")
                            } catch (a) {
                                s = null
                            }
                            var u = function() {
                                    throw new o
                                },
                                c = s ? function() {
                                    try {
                                        return arguments.callee, u
                                    } catch (a) {
                                        try {
                                            return s(arguments, "callee").get
                                        } catch (a) {
                                            return u
                                        }
                                    }
                                }() : u,
                                p = n(115)(),
                                h = Object.getPrototypeOf || function(a) {
                                    return a.__proto__
                                },
                                g = {},
                                f = "undefined" == typeof Uint8Array ? r : h(Uint8Array),
                                m = {
                                    "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
                                    "%Array%": Array,
                                    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                                    "%ArrayIteratorPrototype%": p ? h([][Symbol.iterator]()) : r,
                                    "%AsyncFromSyncIteratorPrototype%": r,
                                    "%AsyncFunction%": g,
                                    "%AsyncGenerator%": g,
                                    "%AsyncGeneratorFunction%": g,
                                    "%AsyncIteratorPrototype%": g,
                                    "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
                                    "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                                    "%Boolean%": Boolean,
                                    "%DataView%": "undefined" == typeof DataView ? r : DataView,
                                    "%Date%": Date,
                                    "%decodeURI%": decodeURI,
                                    "%decodeURIComponent%": decodeURIComponent,
                                    "%encodeURI%": encodeURI,
                                    "%encodeURIComponent%": encodeURIComponent,
                                    "%Error%": Error,
                                    "%eval%": eval,
                                    "%EvalError%": EvalError,
                                    "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
                                    "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
                                    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
                                    "%Function%": i,
                                    "%GeneratorFunction%": g,
                                    "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
                                    "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
                                    "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
                                    "%isFinite%": isFinite,
                                    "%isNaN%": isNaN,
                                    "%IteratorPrototype%": p ? h(h([][Symbol.iterator]())) : r,
                                    "%JSON%": "object" == typeof JSON ? JSON : r,
                                    "%Map%": "undefined" == typeof Map ? r : Map,
                                    "%MapIteratorPrototype%": "undefined" != typeof Map && p ? h((new Map)[Symbol.iterator]()) : r,
                                    "%Math%": Math,
                                    "%Number%": Number,
                                    "%Object%": Object,
                                    "%parseFloat%": parseFloat,
                                    "%parseInt%": parseInt,
                                    "%Promise%": "undefined" == typeof Promise ? r : Promise,
                                    "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                                    "%RangeError%": RangeError,
                                    "%ReferenceError%": ReferenceError,
                                    "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
                                    "%RegExp%": RegExp,
                                    "%Set%": "undefined" == typeof Set ? r : Set,
                                    "%SetIteratorPrototype%": "undefined" != typeof Set && p ? h((new Set)[Symbol.iterator]()) : r,
                                    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                                    "%String%": String,
                                    "%StringIteratorPrototype%": p ? h("" [Symbol.iterator]()) : r,
                                    "%Symbol%": p ? Symbol : r,
                                    "%SyntaxError%": t,
                                    "%ThrowTypeError%": c,
                                    "%TypedArray%": f,
                                    "%TypeError%": o,
                                    "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
                                    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                                    "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
                                    "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
                                    "%URIError%": URIError,
                                    "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
                                    "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
                                    "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
                                },
                                d = function a(e) {
                                    var n;
                                    if ("%AsyncFunction%" === e) n = l("async function () {}");
                                    else if ("%GeneratorFunction%" === e) n = l("function* () {}");
                                    else if ("%AsyncGeneratorFunction%" === e) n = l("async function* () {}");
                                    else if ("%AsyncGenerator%" === e) {
                                        var r = a("%AsyncGeneratorFunction%");
                                        r && (n = r.prototype)
                                    } else if ("%AsyncIteratorPrototype%" === e) {
                                        var t = a("%AsyncGenerator%");
                                        t && (n = h(t.prototype))
                                    }
                                    return m[e] = n, n
                                },
                                b = {
                                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                                    "%ArrayPrototype%": ["Array", "prototype"],
                                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                                    "%BooleanPrototype%": ["Boolean", "prototype"],
                                    "%DataViewPrototype%": ["DataView", "prototype"],
                                    "%DatePrototype%": ["Date", "prototype"],
                                    "%ErrorPrototype%": ["Error", "prototype"],
                                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                                    "%FunctionPrototype%": ["Function", "prototype"],
                                    "%Generator%": ["GeneratorFunction", "prototype"],
                                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                                    "%JSONParse%": ["JSON", "parse"],
                                    "%JSONStringify%": ["JSON", "stringify"],
                                    "%MapPrototype%": ["Map", "prototype"],
                                    "%NumberPrototype%": ["Number", "prototype"],
                                    "%ObjectPrototype%": ["Object", "prototype"],
                                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                                    "%PromisePrototype%": ["Promise", "prototype"],
                                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                                    "%Promise_all%": ["Promise", "all"],
                                    "%Promise_reject%": ["Promise", "reject"],
                                    "%Promise_resolve%": ["Promise", "resolve"],
                                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                                    "%RegExpPrototype%": ["RegExp", "prototype"],
                                    "%SetPrototype%": ["Set", "prototype"],
                                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                                    "%StringPrototype%": ["String", "prototype"],
                                    "%SymbolPrototype%": ["Symbol", "prototype"],
                                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                                    "%URIErrorPrototype%": ["URIError", "prototype"],
                                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                                },
                                y = n(174),
                                C = n(101),
                                A = y.call(Function.call, Array.prototype.concat),
                                S = y.call(Function.apply, Array.prototype.splice),
                                v = y.call(Function.call, String.prototype.replace),
                                E = y.call(Function.call, String.prototype.slice),
                                w = y.call(Function.call, RegExp.prototype.exec),
                                R = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                                j = /\\(\\)?/g,
                                O = function(a) {
                                    var e = E(a, 0, 1),
                                        n = E(a, -1);
                                    if ("%" === e && "%" !== n) throw new t("invalid intrinsic syntax, expected closing `%`");
                                    if ("%" === n && "%" !== e) throw new t("invalid intrinsic syntax, expected opening `%`");
                                    var r = [];
                                    return v(a, R, function(a, e, n, t) {
                                        r[r.length] = n ? v(t, j, "$1") : e || a
                                    }), r
                                },
                                B = function(a, e) {
                                    var n, r = a;
                                    if (C(b, r) && (r = "%" + (n = b[r])[0] + "%"), C(m, r)) {
                                        var i = m[r];
                                        if (i === g && (i = d(r)), void 0 === i && !e) throw new o("intrinsic " + a + " exists, but is not available. Please file an issue!");
                                        return {
                                            alias: n,
                                            name: r,
                                            value: i
                                        }
                                    }
                                    throw new t("intrinsic " + a + " does not exist!")
                                };
                            a.exports = function(a, e) {
                                if ("string" != typeof a || 0 === a.length) throw new o("intrinsic name must be a non-empty string");
                                if (arguments.length > 1 && "boolean" != typeof e) throw new o('"allowMissing" argument must be a boolean');
                                if (null === w(/^%?[^%]*%?$/g, a)) throw new t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                                var n = O(a),
                                    r = n.length > 0 ? n[0] : "",
                                    i = B("%" + r + "%", e),
                                    l = i.name,
                                    u = i.value,
                                    c = !1,
                                    p = i.alias;
                                p && (r = p[0], S(n, A([0, 1], p)));
                                for (var h = 1, g = !0; h < n.length; h += 1) {
                                    var f = n[h],
                                        d = E(f, 0, 1),
                                        b = E(f, -1);
                                    if (('"' === d || "'" === d || "`" === d || '"' === b || "'" === b || "`" === b) && d !== b) throw new t("property names with quotes must have matching quotes");
                                    if ("constructor" !== f && g || (c = !0), r += "." + f, C(m, l = "%" + r + "%")) u = m[l];
                                    else if (null != u) {
                                        if (!(f in u)) {
                                            if (!e) throw new o("base intrinsic for " + a + " exists, but the property is not available.");
                                            return
                                        }
                                        if (s && h + 1 >= n.length) {
                                            var y = s(u, f);
                                            u = (g = !!y) && "get" in y && !("originalValue" in y.get) ? y.get : u[f]
                                        } else g = C(u, f), u = u[f];
                                        g && !c && (m[l] = u)
                                    }
                                }
                                return u
                            }
                        },
                        925: function(a, e, n) {
                            "use strict";
                            var r, t = SyntaxError,
                                i = Function,
                                o = TypeError,
                                l = function(a) {
                                    try {
                                        return i('"use strict"; return (' + a + ").constructor;")()
                                    } catch (a) {}
                                },
                                s = Object.getOwnPropertyDescriptor;
                            if (s) try {
                                s({}, "")
                            } catch (a) {
                                s = null
                            }
                            var u = function() {
                                    throw new o
                                },
                                c = s ? function() {
                                    try {
                                        return arguments.callee, u
                                    } catch (a) {
                                        try {
                                            return s(arguments, "callee").get
                                        } catch (a) {
                                            return u
                                        }
                                    }
                                }() : u,
                                p = n(115)(),
                                h = n(504)(),
                                g = Object.getPrototypeOf || (h ? function(a) {
                                    return a.__proto__
                                } : null),
                                f = {},
                                m = "undefined" != typeof Uint8Array && g ? g(Uint8Array) : r,
                                d = {
                                    "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
                                    "%Array%": Array,
                                    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                                    "%ArrayIteratorPrototype%": p && g ? g([][Symbol.iterator]()) : r,
                                    "%AsyncFromSyncIteratorPrototype%": r,
                                    "%AsyncFunction%": f,
                                    "%AsyncGenerator%": f,
                                    "%AsyncGeneratorFunction%": f,
                                    "%AsyncIteratorPrototype%": f,
                                    "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
                                    "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                                    "%BigInt64Array%": "undefined" == typeof BigInt64Array ? r : BigInt64Array,
                                    "%BigUint64Array%": "undefined" == typeof BigUint64Array ? r : BigUint64Array,
                                    "%Boolean%": Boolean,
                                    "%DataView%": "undefined" == typeof DataView ? r : DataView,
                                    "%Date%": Date,
                                    "%decodeURI%": decodeURI,
                                    "%decodeURIComponent%": decodeURIComponent,
                                    "%encodeURI%": encodeURI,
                                    "%encodeURIComponent%": encodeURIComponent,
                                    "%Error%": Error,
                                    "%eval%": eval,
                                    "%EvalError%": EvalError,
                                    "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
                                    "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
                                    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
                                    "%Function%": i,
                                    "%GeneratorFunction%": f,
                                    "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
                                    "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
                                    "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
                                    "%isFinite%": isFinite,
                                    "%isNaN%": isNaN,
                                    "%IteratorPrototype%": p && g ? g(g([][Symbol.iterator]())) : r,
                                    "%JSON%": "object" == typeof JSON ? JSON : r,
                                    "%Map%": "undefined" == typeof Map ? r : Map,
                                    "%MapIteratorPrototype%": "undefined" != typeof Map && p && g ? g((new Map)[Symbol.iterator]()) : r,
                                    "%Math%": Math,
                                    "%Number%": Number,
                                    "%Object%": Object,
                                    "%parseFloat%": parseFloat,
                                    "%parseInt%": parseInt,
                                    "%Promise%": "undefined" == typeof Promise ? r : Promise,
                                    "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                                    "%RangeError%": RangeError,
                                    "%ReferenceError%": ReferenceError,
                                    "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
                                    "%RegExp%": RegExp,
                                    "%Set%": "undefined" == typeof Set ? r : Set,
                                    "%SetIteratorPrototype%": "undefined" != typeof Set && p && g ? g((new Set)[Symbol.iterator]()) : r,
                                    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                                    "%String%": String,
                                    "%StringIteratorPrototype%": p && g ? g("" [Symbol.iterator]()) : r,
                                    "%Symbol%": p ? Symbol : r,
                                    "%SyntaxError%": t,
                                    "%ThrowTypeError%": c,
                                    "%TypedArray%": m,
                                    "%TypeError%": o,
                                    "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
                                    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                                    "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
                                    "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
                                    "%URIError%": URIError,
                                    "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
                                    "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
                                    "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
                                };
                            if (g) try {
                                null.error
                            } catch (a) {
                                var b = g(g(a));
                                d["%Error.prototype%"] = b
                            }
                            var y = function a(e) {
                                    var n;
                                    if ("%AsyncFunction%" === e) n = l("async function () {}");
                                    else if ("%GeneratorFunction%" === e) n = l("function* () {}");
                                    else if ("%AsyncGeneratorFunction%" === e) n = l("async function* () {}");
                                    else if ("%AsyncGenerator%" === e) {
                                        var r = a("%AsyncGeneratorFunction%");
                                        r && (n = r.prototype)
                                    } else if ("%AsyncIteratorPrototype%" === e) {
                                        var t = a("%AsyncGenerator%");
                                        t && g && (n = g(t.prototype))
                                    }
                                    return d[e] = n, n
                                },
                                C = {
                                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                                    "%ArrayPrototype%": ["Array", "prototype"],
                                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                                    "%BooleanPrototype%": ["Boolean", "prototype"],
                                    "%DataViewPrototype%": ["DataView", "prototype"],
                                    "%DatePrototype%": ["Date", "prototype"],
                                    "%ErrorPrototype%": ["Error", "prototype"],
                                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                                    "%FunctionPrototype%": ["Function", "prototype"],
                                    "%Generator%": ["GeneratorFunction", "prototype"],
                                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                                    "%JSONParse%": ["JSON", "parse"],
                                    "%JSONStringify%": ["JSON", "stringify"],
                                    "%MapPrototype%": ["Map", "prototype"],
                                    "%NumberPrototype%": ["Number", "prototype"],
                                    "%ObjectPrototype%": ["Object", "prototype"],
                                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                                    "%PromisePrototype%": ["Promise", "prototype"],
                                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                                    "%Promise_all%": ["Promise", "all"],
                                    "%Promise_reject%": ["Promise", "reject"],
                                    "%Promise_resolve%": ["Promise", "resolve"],
                                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                                    "%RegExpPrototype%": ["RegExp", "prototype"],
                                    "%SetPrototype%": ["Set", "prototype"],
                                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                                    "%StringPrototype%": ["String", "prototype"],
                                    "%SymbolPrototype%": ["Symbol", "prototype"],
                                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                                    "%URIErrorPrototype%": ["URIError", "prototype"],
                                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                                },
                                A = n(174),
                                S = n(101),
                                v = A.call(Function.call, Array.prototype.concat),
                                E = A.call(Function.apply, Array.prototype.splice),
                                w = A.call(Function.call, String.prototype.replace),
                                R = A.call(Function.call, String.prototype.slice),
                                j = A.call(Function.call, RegExp.prototype.exec),
                                O = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                                B = /\\(\\)?/g,
                                P = function(a) {
                                    var e = R(a, 0, 1),
                                        n = R(a, -1);
                                    if ("%" === e && "%" !== n) throw new t("invalid intrinsic syntax, expected closing `%`");
                                    if ("%" === n && "%" !== e) throw new t("invalid intrinsic syntax, expected opening `%`");
                                    var r = [];
                                    return w(a, O, function(a, e, n, t) {
                                        r[r.length] = n ? w(t, B, "$1") : e || a
                                    }), r
                                },
                                U = function(a, e) {
                                    var n, r = a;
                                    if (S(C, r) && (r = "%" + (n = C[r])[0] + "%"), S(d, r)) {
                                        var i = d[r];
                                        if (i === f && (i = y(r)), void 0 === i && !e) throw new o("intrinsic " + a + " exists, but is not available. Please file an issue!");
                                        return {
                                            alias: n,
                                            name: r,
                                            value: i
                                        }
                                    }
                                    throw new t("intrinsic " + a + " does not exist!")
                                };
                            a.exports = function(a, e) {
                                if ("string" != typeof a || 0 === a.length) throw new o("intrinsic name must be a non-empty string");
                                if (arguments.length > 1 && "boolean" != typeof e) throw new o('"allowMissing" argument must be a boolean');
                                if (null === j(/^%?[^%]*%?$/, a)) throw new t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                                var n = P(a),
                                    r = n.length > 0 ? n[0] : "",
                                    i = U("%" + r + "%", e),
                                    l = i.name,
                                    u = i.value,
                                    c = !1,
                                    p = i.alias;
                                p && (r = p[0], E(n, v([0, 1], p)));
                                for (var h = 1, g = !0; h < n.length; h += 1) {
                                    var f = n[h],
                                        m = R(f, 0, 1),
                                        b = R(f, -1);
                                    if (('"' === m || "'" === m || "`" === m || '"' === b || "'" === b || "`" === b) && m !== b) throw new t("property names with quotes must have matching quotes");
                                    if ("constructor" !== f && g || (c = !0), r += "." + f, S(d, l = "%" + r + "%")) u = d[l];
                                    else if (null != u) {
                                        if (!(f in u)) {
                                            if (!e) throw new o("base intrinsic for " + a + " exists, but the property is not available.");
                                            return
                                        }
                                        if (s && h + 1 >= n.length) {
                                            var y = s(u, f);
                                            u = (g = !!y) && "get" in y && !("originalValue" in y.get) ? y.get : u[f]
                                        } else g = S(u, f), u = u[f];
                                        g && !c && (d[l] = u)
                                    }
                                }
                                return u
                            }
                        },
                        504: function(a) {
                            "use strict";
                            var e = {
                                    foo: {}
                                },
                                n = Object;
                            a.exports = function() {
                                return ({
                                    __proto__: e
                                }).foo === e.foo && !(({
                                    __proto__: null
                                }) instanceof n)
                            }
                        },
                        942: function(a, e, n) {
                            "use strict";
                            var r = "undefined" != typeof Symbol && Symbol,
                                t = n(773);
                            a.exports = function() {
                                return "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" == typeof Symbol("bar") && t()
                            }
                        },
                        773: function(a) {
                            "use strict";
                            a.exports = function() {
                                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                                if ("symbol" == typeof Symbol.iterator) return !0;
                                var a = {},
                                    e = Symbol("test"),
                                    n = Object(e);
                                if ("string" == typeof e || "[object Symbol]" !== Object.prototype.toString.call(e) || "[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
                                for (e in a[e] = 42, a) return !1;
                                if ("function" == typeof Object.keys && 0 !== Object.keys(a).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(a).length) return !1;
                                var r = Object.getOwnPropertySymbols(a);
                                if (1 !== r.length || r[0] !== e || !Object.prototype.propertyIsEnumerable.call(a, e)) return !1;
                                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                                    var t = Object.getOwnPropertyDescriptor(a, e);
                                    if (42 !== t.value || !0 !== t.enumerable) return !1
                                }
                                return !0
                            }
                        },
                        115: function(a, e, n) {
                            "use strict";
                            var r = "undefined" != typeof Symbol && Symbol,
                                t = n(832);
                            a.exports = function() {
                                return "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" == typeof Symbol("bar") && t()
                            }
                        },
                        832: function(a) {
                            "use strict";
                            a.exports = function() {
                                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                                if ("symbol" == typeof Symbol.iterator) return !0;
                                var a = {},
                                    e = Symbol("test"),
                                    n = Object(e);
                                if ("string" == typeof e || "[object Symbol]" !== Object.prototype.toString.call(e) || "[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
                                for (e in a[e] = 42, a) return !1;
                                if ("function" == typeof Object.keys && 0 !== Object.keys(a).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(a).length) return !1;
                                var r = Object.getOwnPropertySymbols(a);
                                if (1 !== r.length || r[0] !== e || !Object.prototype.propertyIsEnumerable.call(a, e)) return !1;
                                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                                    var t = Object.getOwnPropertyDescriptor(a, e);
                                    if (42 !== t.value || !0 !== t.enumerable) return !1
                                }
                                return !0
                            }
                        },
                        101: function(a, e, n) {
                            "use strict";
                            var r = n(174);
                            a.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
                        },
                        782: function(a) {
                            "function" == typeof Object.create ? a.exports = function(a, e) {
                                e && (a.super_ = e, a.prototype = Object.create(e.prototype, {
                                    constructor: {
                                        value: a,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }))
                            } : a.exports = function(a, e) {
                                if (e) {
                                    a.super_ = e;
                                    var n = function() {};
                                    n.prototype = e.prototype, a.prototype = new n, a.prototype.constructor = a
                                }
                            }
                        },
                        157: function(a) {
                            "use strict";
                            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                                n = Object.prototype.toString,
                                r = function(a) {
                                    return (!e || !a || "object" != typeof a || !(Symbol.toStringTag in a)) && "[object Arguments]" === n.call(a)
                                },
                                t = function(a) {
                                    return !!r(a) || null !== a && "object" == typeof a && "number" == typeof a.length && a.length >= 0 && "[object Array]" !== n.call(a) && "[object Function]" === n.call(a.callee)
                                },
                                i = function() {
                                    return r(arguments)
                                }();
                            r.isLegacyArguments = t, a.exports = i ? r : t
                        },
                        391: function(a) {
                            "use strict";
                            var e = Object.prototype.toString,
                                n = Function.prototype.toString,
                                r = /^\s*(?:function)?\*/,
                                t = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                                i = Object.getPrototypeOf,
                                o = function() {
                                    if (!t) return !1;
                                    try {
                                        return Function("return function*() {}")()
                                    } catch (a) {}
                                }(),
                                l = o ? i(o) : {};
                            a.exports = function(a) {
                                return "function" == typeof a && (!!r.test(n.call(a)) || (t ? i(a) === l : "[object GeneratorFunction]" === e.call(a)))
                            }
                        },
                        994: function(a, e, r) {
                            "use strict";
                            var t = r(144),
                                i = r(349),
                                o = r(256),
                                l = o("Object.prototype.toString"),
                                s = r(942)() && "symbol" == typeof Symbol.toStringTag,
                                u = i(),
                                c = o("Array.prototype.indexOf", !0) || function(a, e) {
                                    for (var n = 0; n < a.length; n += 1)
                                        if (a[n] === e) return n;
                                    return -1
                                },
                                p = o("String.prototype.slice"),
                                h = {},
                                g = r(24),
                                f = Object.getPrototypeOf;
                            s && g && f && t(u, function(a) {
                                var e = new n.g[a];
                                if (!(Symbol.toStringTag in e)) throw EvalError("this engine has support for Symbol.toStringTag, but " + a + " does not have the property! Please report this.");
                                var r = f(e),
                                    t = g(r, Symbol.toStringTag);
                                t || (t = g(f(r), Symbol.toStringTag)), h[a] = t.get
                            });
                            var m = function(a) {
                                var e = !1;
                                return t(h, function(n, r) {
                                    if (!e) try {
                                        e = n.call(a) === r
                                    } catch (a) {}
                                }), e
                            };
                            a.exports = function(a) {
                                return !!a && "object" == typeof a && (s ? !!g && m(a) : c(u, p(l(a), 8, -1)) > -1)
                            }
                        },
                        369: function(a) {
                            a.exports = function(a) {
                                return a instanceof r
                            }
                        },
                        584: function(a, e, n) {
                            "use strict";
                            var r = n(157),
                                t = n(391),
                                i = n(490),
                                o = n(994);

                            function l(a) {
                                return a.call.bind(a)
                            }
                            var s = "undefined" != typeof BigInt,
                                u = "undefined" != typeof Symbol,
                                c = l(Object.prototype.toString),
                                p = l(Number.prototype.valueOf),
                                h = l(String.prototype.valueOf),
                                g = l(Boolean.prototype.valueOf);
                            if (s) var f = l(BigInt.prototype.valueOf);
                            if (u) var m = l(Symbol.prototype.valueOf);

                            function d(a, e) {
                                if ("object" != typeof a) return !1;
                                try {
                                    return e(a), !0
                                } catch (a) {
                                    return !1
                                }
                            }

                            function b(a) {
                                return "[object Map]" === c(a)
                            }

                            function y(a) {
                                return "[object Set]" === c(a)
                            }

                            function C(a) {
                                return "[object WeakMap]" === c(a)
                            }

                            function A(a) {
                                return "[object WeakSet]" === c(a)
                            }

                            function S(a) {
                                return "[object ArrayBuffer]" === c(a)
                            }

                            function v(a) {
                                return "undefined" != typeof ArrayBuffer && (S.working ? S(a) : a instanceof ArrayBuffer)
                            }

                            function E(a) {
                                return "[object DataView]" === c(a)
                            }

                            function w(a) {
                                return "undefined" != typeof DataView && (E.working ? E(a) : a instanceof DataView)
                            }
                            e.isArgumentsObject = r, e.isGeneratorFunction = t, e.isTypedArray = o, e.isPromise = function(a) {
                                return "undefined" != typeof Promise && a instanceof Promise || null !== a && "object" == typeof a && "function" == typeof a.then && "function" == typeof a.catch
                            }, e.isArrayBufferView = function(a) {
                                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(a) : o(a) || w(a)
                            }, e.isUint8Array = function(a) {
                                return "Uint8Array" === i(a)
                            }, e.isUint8ClampedArray = function(a) {
                                return "Uint8ClampedArray" === i(a)
                            }, e.isUint16Array = function(a) {
                                return "Uint16Array" === i(a)
                            }, e.isUint32Array = function(a) {
                                return "Uint32Array" === i(a)
                            }, e.isInt8Array = function(a) {
                                return "Int8Array" === i(a)
                            }, e.isInt16Array = function(a) {
                                return "Int16Array" === i(a)
                            }, e.isInt32Array = function(a) {
                                return "Int32Array" === i(a)
                            }, e.isFloat32Array = function(a) {
                                return "Float32Array" === i(a)
                            }, e.isFloat64Array = function(a) {
                                return "Float64Array" === i(a)
                            }, e.isBigInt64Array = function(a) {
                                return "BigInt64Array" === i(a)
                            }, e.isBigUint64Array = function(a) {
                                return "BigUint64Array" === i(a)
                            }, b.working = "undefined" != typeof Map && b(new Map), e.isMap = function(a) {
                                return "undefined" != typeof Map && (b.working ? b(a) : a instanceof Map)
                            }, y.working = "undefined" != typeof Set && y(new Set), e.isSet = function(a) {
                                return "undefined" != typeof Set && (y.working ? y(a) : a instanceof Set)
                            }, C.working = "undefined" != typeof WeakMap && C(new WeakMap), e.isWeakMap = function(a) {
                                return "undefined" != typeof WeakMap && (C.working ? C(a) : a instanceof WeakMap)
                            }, A.working = "undefined" != typeof WeakSet && A(new WeakSet), e.isWeakSet = function(a) {
                                return A(a)
                            }, S.working = "undefined" != typeof ArrayBuffer && S(new ArrayBuffer), e.isArrayBuffer = v, E.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && E(new DataView(new ArrayBuffer(1), 0, 1)), e.isDataView = w;
                            var R = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

                            function j(a) {
                                return "[object SharedArrayBuffer]" === c(a)
                            }

                            function O(a) {
                                return void 0 !== R && (void 0 === j.working && (j.working = j(new R)), j.working ? j(a) : a instanceof R)
                            }

                            function B(a) {
                                return d(a, p)
                            }

                            function P(a) {
                                return d(a, h)
                            }

                            function U(a) {
                                return d(a, g)
                            }

                            function T(a) {
                                return s && d(a, f)
                            }

                            function M(a) {
                                return u && d(a, m)
                            }
                            e.isSharedArrayBuffer = O, e.isAsyncFunction = function(a) {
                                return "[object AsyncFunction]" === c(a)
                            }, e.isMapIterator = function(a) {
                                return "[object Map Iterator]" === c(a)
                            }, e.isSetIterator = function(a) {
                                return "[object Set Iterator]" === c(a)
                            }, e.isGeneratorObject = function(a) {
                                return "[object Generator]" === c(a)
                            }, e.isWebAssemblyCompiledModule = function(a) {
                                return "[object WebAssembly.Module]" === c(a)
                            }, e.isNumberObject = B, e.isStringObject = P, e.isBooleanObject = U, e.isBigIntObject = T, e.isSymbolObject = M, e.isBoxedPrimitive = function(a) {
                                return B(a) || P(a) || U(a) || T(a) || M(a)
                            }, e.isAnyArrayBuffer = function(a) {
                                return "undefined" != typeof Uint8Array && (v(a) || O(a))
                            }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(a) {
                                Object.defineProperty(e, a, {
                                    enumerable: !1,
                                    value: function() {
                                        throw Error(a + " is not supported in userland")
                                    }
                                })
                            })
                        },
                        177: function(a, e, n) {
                            var r = Object.getOwnPropertyDescriptors || function(a) {
                                    for (var e = Object.keys(a), n = {}, r = 0; r < e.length; r++) n[e[r]] = Object.getOwnPropertyDescriptor(a, e[r]);
                                    return n
                                },
                                i = /%[sdj%]/g;
                            e.format = function(a) {
                                if (!C(a)) {
                                    for (var e = [], n = 0; n < arguments.length; n++) e.push(u(arguments[n]));
                                    return e.join(" ")
                                }
                                for (var n = 1, r = arguments, t = r.length, o = String(a).replace(i, function(a) {
                                        if ("%%" === a) return "%";
                                        if (n >= t) return a;
                                        switch (a) {
                                            case "%s":
                                                return String(r[n++]);
                                            case "%d":
                                                return Number(r[n++]);
                                            case "%j":
                                                try {
                                                    return JSON.stringify(r[n++])
                                                } catch (a) {
                                                    return "[Circular]"
                                                }
                                            default:
                                                return a
                                        }
                                    }), l = r[n]; n < t; l = r[++n]) b(l) || !v(l) ? o += " " + l : o += " " + u(l);
                                return o
                            }, e.deprecate = function(a, n) {
                                if (void 0 !== t && !0 === t.noDeprecation) return a;
                                if (void 0 === t) return function() {
                                    return e.deprecate(a, n).apply(this, arguments)
                                };
                                var r = !1;
                                return function() {
                                    if (!r) {
                                        if (t.throwDeprecation) throw Error(n);
                                        t.traceDeprecation ? console.trace(n) : console.error(n), r = !0
                                    }
                                    return a.apply(this, arguments)
                                }
                            };
                            var o = {},
                                l = /^$/;
                            if (t.env.NODE_DEBUG) {
                                var s = t.env.NODE_DEBUG;
                                l = RegExp("^" + (s = s.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase()) + "$", "i")
                            }

                            function u(a, n) {
                                var r = {
                                    seen: [],
                                    stylize: p
                                };
                                return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), d(n) ? r.showHidden = n : n && e._extend(r, n), A(r.showHidden) && (r.showHidden = !1), A(r.depth) && (r.depth = 2), A(r.colors) && (r.colors = !1), A(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = c), h(r, a, r.depth)
                            }

                            function c(a, e) {
                                var n = u.styles[e];
                                return n ? "\x1b[" + u.colors[n][0] + "m" + a + "\x1b[" + u.colors[n][1] + "m" : a
                            }

                            function p(a, e) {
                                return a
                            }

                            function h(a, n, r) {
                                if (a.customInspect && n && R(n.inspect) && n.inspect !== e.inspect && !(n.constructor && n.constructor.prototype === n)) {
                                    var t, i, o, l, s, u = n.inspect(r, a);
                                    return C(u) || (u = h(a, u, r)), u
                                }
                                var c = function(a, e) {
                                    if (A(e)) return a.stylize("undefined", "undefined");
                                    if (C(e)) {
                                        var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                                        return a.stylize(n, "string")
                                    }
                                    return y(e) ? a.stylize("" + e, "number") : d(e) ? a.stylize("" + e, "boolean") : b(e) ? a.stylize("null", "null") : void 0
                                }(a, n);
                                if (c) return c;
                                var p = Object.keys(n),
                                    v = (l = {}, p.forEach(function(a, e) {
                                        l[a] = !0
                                    }), l);
                                if (a.showHidden && (p = Object.getOwnPropertyNames(n)), w(n) && (p.indexOf("message") >= 0 || p.indexOf("description") >= 0)) return g(n);
                                if (0 === p.length) {
                                    if (R(n)) {
                                        var j = n.name ? ": " + n.name : "";
                                        return a.stylize("[Function" + j + "]", "special")
                                    }
                                    if (S(n)) return a.stylize(RegExp.prototype.toString.call(n), "regexp");
                                    if (E(n)) return a.stylize(Date.prototype.toString.call(n), "date");
                                    if (w(n)) return g(n)
                                }
                                var O = "",
                                    B = !1,
                                    U = ["{", "}"];
                                return (m(n) && (B = !0, U = ["[", "]"]), R(n) && (O = " [Function" + (n.name ? ": " + n.name : "") + "]"), S(n) && (O = " " + RegExp.prototype.toString.call(n)), E(n) && (O = " " + Date.prototype.toUTCString.call(n)), w(n) && (O = " " + g(n)), 0 !== p.length || B && 0 != n.length) ? r < 0 ? S(n) ? a.stylize(RegExp.prototype.toString.call(n), "regexp") : a.stylize("[Object]", "special") : (a.seen.push(n), s = B ? function(a, e, n, r, t) {
                                    for (var i = [], o = 0, l = e.length; o < l; ++o) P(e, String(o)) ? i.push(f(a, e, n, r, String(o), !0)) : i.push("");
                                    return t.forEach(function(t) {
                                        t.match(/^\d+$/) || i.push(f(a, e, n, r, t, !0))
                                    }), i
                                }(a, n, r, v, p) : p.map(function(e) {
                                    return f(a, n, r, v, e, B)
                                }), a.seen.pop(), t = O, i = U, o = 0, s.reduce(function(a, e) {
                                    return o++, e.indexOf("\n") >= 0 && o++, a + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                                }, 0) > 60 ? i[0] + ("" === t ? "" : t + "\n ") + " " + s.join(",\n  ") + " " + i[1] : i[0] + t + " " + s.join(", ") + " " + i[1]) : U[0] + O + U[1]
                            }

                            function g(a) {
                                return "[" + Error.prototype.toString.call(a) + "]"
                            }

                            function f(a, e, n, r, t, i) {
                                var o, l, s;
                                if ((s = Object.getOwnPropertyDescriptor(e, t) || {
                                        value: e[t]
                                    }).get ? l = s.set ? a.stylize("[Getter/Setter]", "special") : a.stylize("[Getter]", "special") : s.set && (l = a.stylize("[Setter]", "special")), P(r, t) || (o = "[" + t + "]"), !l && (0 > a.seen.indexOf(s.value) ? (l = b(n) ? h(a, s.value, null) : h(a, s.value, n - 1)).indexOf("\n") > -1 && (l = i ? l.split("\n").map(function(a) {
                                        return "  " + a
                                    }).join("\n").substr(2) : "\n" + l.split("\n").map(function(a) {
                                        return "   " + a
                                    }).join("\n")) : l = a.stylize("[Circular]", "special")), A(o)) {
                                    if (i && t.match(/^\d+$/)) return l;
                                    (o = JSON.stringify("" + t)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = a.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = a.stylize(o, "string"))
                                }
                                return o + ": " + l
                            }

                            function m(a) {
                                return Array.isArray(a)
                            }

                            function d(a) {
                                return "boolean" == typeof a
                            }

                            function b(a) {
                                return null === a
                            }

                            function y(a) {
                                return "number" == typeof a
                            }

                            function C(a) {
                                return "string" == typeof a
                            }

                            function A(a) {
                                return void 0 === a
                            }

                            function S(a) {
                                return v(a) && "[object RegExp]" === j(a)
                            }

                            function v(a) {
                                return "object" == typeof a && null !== a
                            }

                            function E(a) {
                                return v(a) && "[object Date]" === j(a)
                            }

                            function w(a) {
                                return v(a) && ("[object Error]" === j(a) || a instanceof Error)
                            }

                            function R(a) {
                                return "function" == typeof a
                            }

                            function j(a) {
                                return Object.prototype.toString.call(a)
                            }

                            function O(a) {
                                return a < 10 ? "0" + a.toString(10) : a.toString(10)
                            }
                            e.debuglog = function(a) {
                                if (!o[a = a.toUpperCase()]) {
                                    if (l.test(a)) {
                                        var n = t.pid;
                                        o[a] = function() {
                                            var r = e.format.apply(e, arguments);
                                            console.error("%s %d: %s", a, n, r)
                                        }
                                    } else o[a] = function() {}
                                }
                                return o[a]
                            }, e.inspect = u, u.colors = {
                                bold: [1, 22],
                                italic: [3, 23],
                                underline: [4, 24],
                                inverse: [7, 27],
                                white: [37, 39],
                                grey: [90, 39],
                                black: [30, 39],
                                blue: [34, 39],
                                cyan: [36, 39],
                                green: [32, 39],
                                magenta: [35, 39],
                                red: [31, 39],
                                yellow: [33, 39]
                            }, u.styles = {
                                special: "cyan",
                                number: "yellow",
                                boolean: "yellow",
                                undefined: "grey",
                                null: "bold",
                                string: "green",
                                date: "magenta",
                                regexp: "red"
                            }, e.types = n(584), e.isArray = m, e.isBoolean = d, e.isNull = b, e.isNullOrUndefined = function(a) {
                                return null == a
                            }, e.isNumber = y, e.isString = C, e.isSymbol = function(a) {
                                return "symbol" == typeof a
                            }, e.isUndefined = A, e.isRegExp = S, e.types.isRegExp = S, e.isObject = v, e.isDate = E, e.types.isDate = E, e.isError = w, e.types.isNativeError = w, e.isFunction = R, e.isPrimitive = function(a) {
                                return null === a || "boolean" == typeof a || "number" == typeof a || "string" == typeof a || "symbol" == typeof a || void 0 === a
                            }, e.isBuffer = n(369);
                            var B = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                            function P(a, e) {
                                return Object.prototype.hasOwnProperty.call(a, e)
                            }
                            e.log = function() {
                                var a, n;
                                console.log("%s - %s", (n = [O((a = new Date).getHours()), O(a.getMinutes()), O(a.getSeconds())].join(":"), [a.getDate(), B[a.getMonth()], n].join(" ")), e.format.apply(e, arguments))
                            }, e.inherits = n(782), e._extend = function(a, e) {
                                if (!e || !v(e)) return a;
                                for (var n = Object.keys(e), r = n.length; r--;) a[n[r]] = e[n[r]];
                                return a
                            };
                            var U = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

                            function T(a, e) {
                                if (!a) {
                                    var n = Error("Promise was rejected with a falsy value");
                                    n.reason = a, a = n
                                }
                                return e(a)
                            }
                            e.promisify = function(a) {
                                if ("function" != typeof a) throw TypeError('The "original" argument must be of type Function');
                                if (U && a[U]) {
                                    var e = a[U];
                                    if ("function" != typeof e) throw TypeError('The "util.promisify.custom" argument must be of type Function');
                                    return Object.defineProperty(e, U, {
                                        value: e,
                                        enumerable: !1,
                                        writable: !1,
                                        configurable: !0
                                    }), e
                                }

                                function e() {
                                    for (var e, n, r = new Promise(function(a, r) {
                                            e = a, n = r
                                        }), t = [], i = 0; i < arguments.length; i++) t.push(arguments[i]);
                                    t.push(function(a, r) {
                                        a ? n(a) : e(r)
                                    });
                                    try {
                                        a.apply(this, t)
                                    } catch (a) {
                                        n(a)
                                    }
                                    return r
                                }
                                return Object.setPrototypeOf(e, Object.getPrototypeOf(a)), U && Object.defineProperty(e, U, {
                                    value: e,
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                }), Object.defineProperties(e, r(a))
                            }, e.promisify.custom = U, e.callbackify = function(a) {
                                if ("function" != typeof a) throw TypeError('The "original" argument must be of type Function');

                                function e() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e.push(arguments[n]);
                                    var r = e.pop();
                                    if ("function" != typeof r) throw TypeError("The last argument must be of type Function");
                                    var i = this,
                                        o = function() {
                                            return r.apply(i, arguments)
                                        };
                                    a.apply(this, e).then(function(a) {
                                        t.nextTick(o.bind(null, null, a))
                                    }, function(a) {
                                        t.nextTick(T.bind(null, a, o))
                                    })
                                }
                                return Object.setPrototypeOf(e, Object.getPrototypeOf(a)), Object.defineProperties(e, r(a)), e
                            }
                        },
                        490: function(a, e, r) {
                            "use strict";
                            var t = r(144),
                                i = r(349),
                                o = r(256),
                                l = o("Object.prototype.toString"),
                                s = r(942)() && "symbol" == typeof Symbol.toStringTag,
                                u = i(),
                                c = o("String.prototype.slice"),
                                p = {},
                                h = r(24),
                                g = Object.getPrototypeOf;
                            s && h && g && t(u, function(a) {
                                if ("function" == typeof n.g[a]) {
                                    var e = new n.g[a];
                                    if (!(Symbol.toStringTag in e)) throw EvalError("this engine has support for Symbol.toStringTag, but " + a + " does not have the property! Please report this.");
                                    var r = g(e),
                                        t = h(r, Symbol.toStringTag);
                                    t || (t = h(g(r), Symbol.toStringTag)), p[a] = t.get
                                }
                            });
                            var f = function(a) {
                                    var e = !1;
                                    return t(p, function(n, r) {
                                        if (!e) try {
                                            var t = n.call(a);
                                            t === r && (e = t)
                                        } catch (a) {}
                                    }), e
                                },
                                m = r(994);
                            a.exports = function(a) {
                                return !!m(a) && (s ? f(a) : c(l(a), 8, -1))
                            }
                        },
                        349: function(a, e, r) {
                            "use strict";
                            var t = r(992);
                            a.exports = function() {
                                return t(["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], function(a) {
                                    return "function" == typeof n.g[a]
                                })
                            }
                        },
                        24: function(a, e, n) {
                            "use strict";
                            var r = n(500)("%Object.getOwnPropertyDescriptor%", !0);
                            if (r) try {
                                r([], "length")
                            } catch (a) {
                                r = null
                            }
                            a.exports = r
                        }
                    },
                    i = {};

                function o(a) {
                    var n = i[a];
                    if (void 0 !== n) return n.exports;
                    var r = i[a] = {
                            exports: {}
                        },
                        t = !0;
                    try {
                        e[a](r, r.exports, o), t = !1
                    } finally {
                        t && delete i[a]
                    }
                    return r.exports
                }
                o.ab = "//";
                var l = o(177);
                a.exports = l
            }()
        },
        97466: function(a, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                NIL: function() {
                    return P
                },
                parse: function() {
                    return d
                },
                stringify: function() {
                    return h
                },
                v1: function() {
                    return m
                },
                v3: function() {
                    return R
                },
                v4: function() {
                    return j
                },
                v5: function() {
                    return B
                },
                validate: function() {
                    return u
                },
                version: function() {
                    return U
                }
            });
            var r, t, i, o = new Uint8Array(16);

            function l() {
                if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return r(o)
            }
            for (var s = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, u = function(a) {
                    return "string" == typeof a && s.test(a)
                }, c = [], p = 0; p < 256; ++p) c.push((p + 256).toString(16).substr(1));
            var h = function(a) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = (c[a[e + 0]] + c[a[e + 1]] + c[a[e + 2]] + c[a[e + 3]] + "-" + c[a[e + 4]] + c[a[e + 5]] + "-" + c[a[e + 6]] + c[a[e + 7]] + "-" + c[a[e + 8]] + c[a[e + 9]] + "-" + c[a[e + 10]] + c[a[e + 11]] + c[a[e + 12]] + c[a[e + 13]] + c[a[e + 14]] + c[a[e + 15]]).toLowerCase();
                    if (!u(n)) throw TypeError("Stringified UUID is invalid");
                    return n
                },
                g = 0,
                f = 0,
                m = function(a, e, n) {
                    var r = e && n || 0,
                        o = e || Array(16),
                        s = (a = a || {}).node || t,
                        u = void 0 !== a.clockseq ? a.clockseq : i;
                    if (null == s || null == u) {
                        var c = a.random || (a.rng || l)();
                        null == s && (s = t = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]), null == u && (u = i = (c[6] << 8 | c[7]) & 16383)
                    }
                    var p = void 0 !== a.msecs ? a.msecs : Date.now(),
                        m = void 0 !== a.nsecs ? a.nsecs : f + 1,
                        d = p - g + (m - f) / 1e4;
                    if (d < 0 && void 0 === a.clockseq && (u = u + 1 & 16383), (d < 0 || p > g) && void 0 === a.nsecs && (m = 0), m >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    g = p, f = m, i = u;
                    var b = ((268435455 & (p += 122192928e5)) * 1e4 + m) % 4294967296;
                    o[r++] = b >>> 24 & 255, o[r++] = b >>> 16 & 255, o[r++] = b >>> 8 & 255, o[r++] = 255 & b;
                    var y = p / 4294967296 * 1e4 & 268435455;
                    o[r++] = y >>> 8 & 255, o[r++] = 255 & y, o[r++] = y >>> 24 & 15 | 16, o[r++] = y >>> 16 & 255, o[r++] = u >>> 8 | 128, o[r++] = 255 & u;
                    for (var C = 0; C < 6; ++C) o[r + C] = s[C];
                    return e || h(o)
                },
                d = function(a) {
                    if (!u(a)) throw TypeError("Invalid UUID");
                    var e, n = new Uint8Array(16);
                    return n[0] = (e = parseInt(a.slice(0, 8), 16)) >>> 24, n[1] = e >>> 16 & 255, n[2] = e >>> 8 & 255, n[3] = 255 & e, n[4] = (e = parseInt(a.slice(9, 13), 16)) >>> 8, n[5] = 255 & e, n[6] = (e = parseInt(a.slice(14, 18), 16)) >>> 8, n[7] = 255 & e, n[8] = (e = parseInt(a.slice(19, 23), 16)) >>> 8, n[9] = 255 & e, n[10] = (e = parseInt(a.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = e / 4294967296 & 255, n[12] = e >>> 24 & 255, n[13] = e >>> 16 & 255, n[14] = e >>> 8 & 255, n[15] = 255 & e, n
                };

            function b(a, e, n) {
                function r(a, r, t, i) {
                    if ("string" == typeof a && (a = function(a) {
                            a = unescape(encodeURIComponent(a));
                            for (var e = [], n = 0; n < a.length; ++n) e.push(a.charCodeAt(n));
                            return e
                        }(a)), "string" == typeof r && (r = d(r)), 16 !== r.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                    var o = new Uint8Array(16 + a.length);
                    if (o.set(r), o.set(a, r.length), (o = n(o))[6] = 15 & o[6] | e, o[8] = 63 & o[8] | 128, t) {
                        i = i || 0;
                        for (var l = 0; l < 16; ++l) t[i + l] = o[l];
                        return t
                    }
                    return h(o)
                }
                try {
                    r.name = a
                } catch (a) {}
                return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r
            }

            function y(a) {
                return (a + 64 >>> 9 << 4) + 14 + 1
            }

            function C(a, e) {
                var n = (65535 & a) + (65535 & e);
                return (a >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
            }

            function A(a, e, n, r, t, i) {
                var o;
                return C((o = C(C(e, a), C(r, i))) << t | o >>> 32 - t, n)
            }

            function S(a, e, n, r, t, i, o) {
                return A(e & n | ~e & r, a, e, t, i, o)
            }

            function v(a, e, n, r, t, i, o) {
                return A(e & r | n & ~r, a, e, t, i, o)
            }

            function E(a, e, n, r, t, i, o) {
                return A(e ^ n ^ r, a, e, t, i, o)
            }

            function w(a, e, n, r, t, i, o) {
                return A(n ^ (e | ~r), a, e, t, i, o)
            }
            var R = b("v3", 48, function(a) {
                    if ("string" == typeof a) {
                        var e = unescape(encodeURIComponent(a));
                        a = new Uint8Array(e.length);
                        for (var n = 0; n < e.length; ++n) a[n] = e.charCodeAt(n)
                    }
                    return function(a) {
                        for (var e = [], n = 32 * a.length, r = "0123456789abcdef", t = 0; t < n; t += 8) {
                            var i = a[t >> 5] >>> t % 32 & 255,
                                o = parseInt(r.charAt(i >>> 4 & 15) + r.charAt(15 & i), 16);
                            e.push(o)
                        }
                        return e
                    }(function(a, e) {
                        a[e >> 5] |= 128 << e % 32, a[y(e) - 1] = e;
                        for (var n = 1732584193, r = -271733879, t = -1732584194, i = 271733878, o = 0; o < a.length; o += 16) {
                            var l = n,
                                s = r,
                                u = t,
                                c = i;
                            n = S(n, r, t, i, a[o], 7, -680876936), i = S(i, n, r, t, a[o + 1], 12, -389564586), t = S(t, i, n, r, a[o + 2], 17, 606105819), r = S(r, t, i, n, a[o + 3], 22, -1044525330), n = S(n, r, t, i, a[o + 4], 7, -176418897), i = S(i, n, r, t, a[o + 5], 12, 1200080426), t = S(t, i, n, r, a[o + 6], 17, -1473231341), r = S(r, t, i, n, a[o + 7], 22, -45705983), n = S(n, r, t, i, a[o + 8], 7, 1770035416), i = S(i, n, r, t, a[o + 9], 12, -1958414417), t = S(t, i, n, r, a[o + 10], 17, -42063), r = S(r, t, i, n, a[o + 11], 22, -1990404162), n = S(n, r, t, i, a[o + 12], 7, 1804603682), i = S(i, n, r, t, a[o + 13], 12, -40341101), t = S(t, i, n, r, a[o + 14], 17, -1502002290), r = S(r, t, i, n, a[o + 15], 22, 1236535329), n = v(n, r, t, i, a[o + 1], 5, -165796510), i = v(i, n, r, t, a[o + 6], 9, -1069501632), t = v(t, i, n, r, a[o + 11], 14, 643717713), r = v(r, t, i, n, a[o], 20, -373897302), n = v(n, r, t, i, a[o + 5], 5, -701558691), i = v(i, n, r, t, a[o + 10], 9, 38016083), t = v(t, i, n, r, a[o + 15], 14, -660478335), r = v(r, t, i, n, a[o + 4], 20, -405537848), n = v(n, r, t, i, a[o + 9], 5, 568446438), i = v(i, n, r, t, a[o + 14], 9, -1019803690), t = v(t, i, n, r, a[o + 3], 14, -187363961), r = v(r, t, i, n, a[o + 8], 20, 1163531501), n = v(n, r, t, i, a[o + 13], 5, -1444681467), i = v(i, n, r, t, a[o + 2], 9, -51403784), t = v(t, i, n, r, a[o + 7], 14, 1735328473), r = v(r, t, i, n, a[o + 12], 20, -1926607734), n = E(n, r, t, i, a[o + 5], 4, -378558), i = E(i, n, r, t, a[o + 8], 11, -2022574463), t = E(t, i, n, r, a[o + 11], 16, 1839030562), r = E(r, t, i, n, a[o + 14], 23, -35309556), n = E(n, r, t, i, a[o + 1], 4, -1530992060), i = E(i, n, r, t, a[o + 4], 11, 1272893353), t = E(t, i, n, r, a[o + 7], 16, -155497632), r = E(r, t, i, n, a[o + 10], 23, -1094730640), n = E(n, r, t, i, a[o + 13], 4, 681279174), i = E(i, n, r, t, a[o], 11, -358537222), t = E(t, i, n, r, a[o + 3], 16, -722521979), r = E(r, t, i, n, a[o + 6], 23, 76029189), n = E(n, r, t, i, a[o + 9], 4, -640364487), i = E(i, n, r, t, a[o + 12], 11, -421815835), t = E(t, i, n, r, a[o + 15], 16, 530742520), r = E(r, t, i, n, a[o + 2], 23, -995338651), n = w(n, r, t, i, a[o], 6, -198630844), i = w(i, n, r, t, a[o + 7], 10, 1126891415), t = w(t, i, n, r, a[o + 14], 15, -1416354905), r = w(r, t, i, n, a[o + 5], 21, -57434055), n = w(n, r, t, i, a[o + 12], 6, 1700485571), i = w(i, n, r, t, a[o + 3], 10, -1894986606), t = w(t, i, n, r, a[o + 10], 15, -1051523), r = w(r, t, i, n, a[o + 1], 21, -2054922799), n = w(n, r, t, i, a[o + 8], 6, 1873313359), i = w(i, n, r, t, a[o + 15], 10, -30611744), t = w(t, i, n, r, a[o + 6], 15, -1560198380), r = w(r, t, i, n, a[o + 13], 21, 1309151649), n = w(n, r, t, i, a[o + 4], 6, -145523070), i = w(i, n, r, t, a[o + 11], 10, -1120210379), t = w(t, i, n, r, a[o + 2], 15, 718787259), r = w(r, t, i, n, a[o + 9], 21, -343485551), n = C(n, l), r = C(r, s), t = C(t, u), i = C(i, c)
                        }
                        return [n, r, t, i]
                    }(function(a) {
                        if (0 === a.length) return [];
                        for (var e = 8 * a.length, n = new Uint32Array(y(e)), r = 0; r < e; r += 8) n[r >> 5] |= (255 & a[r / 8]) << r % 32;
                        return n
                    }(a), 8 * a.length))
                }),
                j = function(a, e, n) {
                    var r = (a = a || {}).random || (a.rng || l)();
                    if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, e) {
                        n = n || 0;
                        for (var t = 0; t < 16; ++t) e[n + t] = r[t];
                        return e
                    }
                    return h(r)
                };

            function O(a, e) {
                return a << e | a >>> 32 - e
            }
            var B = b("v5", 80, function(a) {
                    var e = [1518500249, 1859775393, 2400959708, 3395469782],
                        n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    if ("string" == typeof a) {
                        var r = unescape(encodeURIComponent(a));
                        a = [];
                        for (var t = 0; t < r.length; ++t) a.push(r.charCodeAt(t))
                    } else Array.isArray(a) || (a = Array.prototype.slice.call(a));
                    a.push(128);
                    for (var i = Math.ceil((a.length / 4 + 2) / 16), o = Array(i), l = 0; l < i; ++l) {
                        for (var s = new Uint32Array(16), u = 0; u < 16; ++u) s[u] = a[64 * l + 4 * u] << 24 | a[64 * l + 4 * u + 1] << 16 | a[64 * l + 4 * u + 2] << 8 | a[64 * l + 4 * u + 3];
                        o[l] = s
                    }
                    o[i - 1][14] = (a.length - 1) * 8 / 4294967296, o[i - 1][14] = Math.floor(o[i - 1][14]), o[i - 1][15] = (a.length - 1) * 8 & 4294967295;
                    for (var c = 0; c < i; ++c) {
                        for (var p = new Uint32Array(80), h = 0; h < 16; ++h) p[h] = o[c][h];
                        for (var g = 16; g < 80; ++g) p[g] = O(p[g - 3] ^ p[g - 8] ^ p[g - 14] ^ p[g - 16], 1);
                        for (var f = n[0], m = n[1], d = n[2], b = n[3], y = n[4], C = 0; C < 80; ++C) {
                            var A = Math.floor(C / 20),
                                S = O(f, 5) + function(a, e, n, r) {
                                    switch (a) {
                                        case 0:
                                            return e & n ^ ~e & r;
                                        case 1:
                                        case 3:
                                            return e ^ n ^ r;
                                        case 2:
                                            return e & n ^ e & r ^ n & r
                                    }
                                }(A, m, d, b) + y + e[A] + p[C] >>> 0;
                            y = b, b = d, d = O(m, 30) >>> 0, m = f, f = S
                        }
                        n[0] = n[0] + f >>> 0, n[1] = n[1] + m >>> 0, n[2] = n[2] + d >>> 0, n[3] = n[3] + b >>> 0, n[4] = n[4] + y >>> 0
                    }
                    return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
                }),
                P = "00000000-0000-0000-0000-000000000000",
                U = function(a) {
                    if (!u(a)) throw TypeError("Invalid UUID");
                    return parseInt(a.substr(14, 1), 16)
                }
        },
        26281: function(a, e, n) {
            "use strict";
            e.Vj = void 0;
            let r = n(79720),
                t = n(97466),
                i = (/(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u.toString().slice(1, -2), /(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u.toString().slice(1, -2), (0, r.deprecate)(() => (0, t.v4)(), "uuidv4() is deprecated. Use v4() from the uuid module instead."));
            e.Vj = i, (0, r.deprecate)(a => (0, t.validate)(a) && (4 === (0, t.version)(a) || 5 === (0, t.version)(a)), "isUuid() is deprecated. Use validate() from the uuid module instead."), (0, r.deprecate)(() => t.NIL, "empty() is deprecated. Use NIL from the uuid module instead."), (0, r.deprecate)((a, e = "bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45") => (0, t.v5)(a, e), "fromString() is deprecated. Use v5() from the uuid module instead.")
        },
        87066: function(a, e, n) {
            "use strict";
            let r, t, i;
            n.d(e, {
                Z: function() {
                    return ef
                }
            });
            var o, l, s, u, c, p = {};

            function h(a, e) {
                return function() {
                    return a.apply(e, arguments)
                }
            }
            n.r(p), n.d(p, {
                hasBrowserEnv: function() {
                    return ab
                },
                hasStandardBrowserEnv: function() {
                    return aC
                },
                hasStandardBrowserWebWorkerEnv: function() {
                    return aA
                },
                navigator: function() {
                    return ay
                },
                origin: function() {
                    return aS
                }
            });
            var g = n(83454);
            let {
                toString: f
            } = Object.prototype, {
                getPrototypeOf: m
            } = Object, d = (r = Object.create(null), a => {
                let e = f.call(a);
                return r[e] || (r[e] = e.slice(8, -1).toLowerCase())
            }), b = a => (a = a.toLowerCase(), e => d(e) === a), y = a => e => typeof e === a, {
                isArray: C
            } = Array, A = y("undefined"), S = b("ArrayBuffer"), v = y("string"), E = y("function"), w = y("number"), R = a => null !== a && "object" == typeof a, j = a => {
                if ("object" !== d(a)) return !1;
                let e = m(a);
                return (null === e || e === Object.prototype || null === Object.getPrototypeOf(e)) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a)
            }, O = b("Date"), B = b("File"), P = b("Blob"), U = b("FileList"), T = b("URLSearchParams"), [M, N, I, D] = ["ReadableStream", "Request", "Response", "Headers"].map(b);

            function k(a, e, {
                allOwnKeys: n = !1
            } = {}) {
                let r, t;
                if (null != a) {
                    if ("object" != typeof a && (a = [a]), C(a))
                        for (r = 0, t = a.length; r < t; r++) e.call(null, a[r], r, a);
                    else {
                        let t;
                        let i = n ? Object.getOwnPropertyNames(a) : Object.keys(a),
                            o = i.length;
                        for (r = 0; r < o; r++) t = i[r], e.call(null, a[t], t, a)
                    }
                }
            }

            function L(a, e) {
                let n;
                e = e.toLowerCase();
                let r = Object.keys(a),
                    t = r.length;
                for (; t-- > 0;)
                    if (e === (n = r[t]).toLowerCase()) return n;
                return null
            }
            let F = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
                G = a => !A(a) && a !== F,
                x = (t = "undefined" != typeof Uint8Array && m(Uint8Array), a => t && a instanceof t),
                K = b("HTMLFormElement"),
                z = (({
                    hasOwnProperty: a
                }) => (e, n) => a.call(e, n))(Object.prototype),
                H = b("RegExp"),
                _ = (a, e) => {
                    let n = Object.getOwnPropertyDescriptors(a),
                        r = {};
                    k(n, (n, t) => {
                        let i;
                        !1 !== (i = e(n, t, a)) && (r[t] = i || n)
                    }), Object.defineProperties(a, r)
                },
                W = "abcdefghijklmnopqrstuvwxyz",
                V = "0123456789",
                Z = {
                    DIGIT: V,
                    ALPHA: W,
                    ALPHA_DIGIT: W + W.toUpperCase() + V
                },
                J = b("AsyncFunction"),
                Y = (o = "function" == typeof setImmediate, l = E(F.postMessage), o ? setImmediate : l ? (s = `axios@${Math.random()}`, u = [], F.addEventListener("message", ({
                    source: a,
                    data: e
                }) => {
                    a === F && e === s && u.length && u.shift()()
                }, !1), a => {
                    u.push(a), F.postMessage(s, "*")
                }) : a => setTimeout(a)),
                q = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(F) : void 0 !== g && g.nextTick || Y;
            var X = {
                isArray: C,
                isArrayBuffer: S,
                isBuffer: function(a) {
                    return null !== a && !A(a) && null !== a.constructor && !A(a.constructor) && E(a.constructor.isBuffer) && a.constructor.isBuffer(a)
                },
                isFormData: a => {
                    let e;
                    return a && ("function" == typeof FormData && a instanceof FormData || E(a.append) && ("formdata" === (e = d(a)) || "object" === e && E(a.toString) && "[object FormData]" === a.toString()))
                },
                isArrayBufferView: function(a) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(a) : a && a.buffer && S(a.buffer)
                },
                isString: v,
                isNumber: w,
                isBoolean: a => !0 === a || !1 === a,
                isObject: R,
                isPlainObject: j,
                isReadableStream: M,
                isRequest: N,
                isResponse: I,
                isHeaders: D,
                isUndefined: A,
                isDate: O,
                isFile: B,
                isBlob: P,
                isRegExp: H,
                isFunction: E,
                isStream: a => R(a) && E(a.pipe),
                isURLSearchParams: T,
                isTypedArray: x,
                isFileList: U,
                forEach: k,
                merge: function a() {
                    let {
                        caseless: e
                    } = G(this) && this || {}, n = {}, r = (r, t) => {
                        let i = e && L(n, t) || t;
                        j(n[i]) && j(r) ? n[i] = a(n[i], r) : j(r) ? n[i] = a({}, r) : C(r) ? n[i] = r.slice() : n[i] = r
                    };
                    for (let a = 0, e = arguments.length; a < e; a++) arguments[a] && k(arguments[a], r);
                    return n
                },
                extend: (a, e, n, {
                    allOwnKeys: r
                } = {}) => (k(e, (e, r) => {
                    n && E(e) ? a[r] = h(e, n) : a[r] = e
                }, {
                    allOwnKeys: r
                }), a),
                trim: a => a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                stripBOM: a => (65279 === a.charCodeAt(0) && (a = a.slice(1)), a),
                inherits: (a, e, n, r) => {
                    a.prototype = Object.create(e.prototype, r), a.prototype.constructor = a, Object.defineProperty(a, "super", {
                        value: e.prototype
                    }), n && Object.assign(a.prototype, n)
                },
                toFlatObject: (a, e, n, r) => {
                    let t, i, o;
                    let l = {};
                    if (e = e || {}, null == a) return e;
                    do {
                        for (i = (t = Object.getOwnPropertyNames(a)).length; i-- > 0;) o = t[i], (!r || r(o, a, e)) && !l[o] && (e[o] = a[o], l[o] = !0);
                        a = !1 !== n && m(a)
                    } while (a && (!n || n(a, e)) && a !== Object.prototype);
                    return e
                },
                kindOf: d,
                kindOfTest: b,
                endsWith: (a, e, n) => {
                    a = String(a), (void 0 === n || n > a.length) && (n = a.length), n -= e.length;
                    let r = a.indexOf(e, n);
                    return -1 !== r && r === n
                },
                toArray: a => {
                    if (!a) return null;
                    if (C(a)) return a;
                    let e = a.length;
                    if (!w(e)) return null;
                    let n = Array(e);
                    for (; e-- > 0;) n[e] = a[e];
                    return n
                },
                forEachEntry: (a, e) => {
                    let n;
                    let r = (a && a[Symbol.iterator]).call(a);
                    for (;
                        (n = r.next()) && !n.done;) {
                        let r = n.value;
                        e.call(a, r[0], r[1])
                    }
                },
                matchAll: (a, e) => {
                    let n;
                    let r = [];
                    for (; null !== (n = a.exec(e));) r.push(n);
                    return r
                },
                isHTMLForm: K,
                hasOwnProperty: z,
                hasOwnProp: z,
                reduceDescriptors: _,
                freezeMethods: a => {
                    _(a, (e, n) => {
                        if (E(a) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                        if (E(a[n])) {
                            if (e.enumerable = !1, "writable" in e) {
                                e.writable = !1;
                                return
                            }
                            e.set || (e.set = () => {
                                throw Error("Can not rewrite read-only method '" + n + "'")
                            })
                        }
                    })
                },
                toObjectSet: (a, e) => {
                    let n = {};
                    return (a => {
                        a.forEach(a => {
                            n[a] = !0
                        })
                    })(C(a) ? a : String(a).split(e)), n
                },
                toCamelCase: a => a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(a, e, n) {
                    return e.toUpperCase() + n
                }),
                noop: () => {},
                toFiniteNumber: (a, e) => null != a && Number.isFinite(a = +a) ? a : e,
                findKey: L,
                global: F,
                isContextDefined: G,
                ALPHABET: Z,
                generateString: (a = 16, e = Z.ALPHA_DIGIT) => {
                    let n = "",
                        {
                            length: r
                        } = e;
                    for (; a--;) n += e[Math.random() * r | 0];
                    return n
                },
                isSpecCompliantForm: function(a) {
                    return !!(a && E(a.append) && "FormData" === a[Symbol.toStringTag] && a[Symbol.iterator])
                },
                toJSONObject: a => {
                    let e = Array(10),
                        n = (a, r) => {
                            if (R(a)) {
                                if (e.indexOf(a) >= 0) return;
                                if (!("toJSON" in a)) {
                                    e[r] = a;
                                    let t = C(a) ? [] : {};
                                    return k(a, (a, e) => {
                                        let i = n(a, r + 1);
                                        A(i) || (t[e] = i)
                                    }), e[r] = void 0, t
                                }
                            }
                            return a
                        };
                    return n(a, 0)
                },
                isAsyncFn: J,
                isThenable: a => a && (R(a) || E(a)) && E(a.then) && E(a.catch),
                setImmediate: Y,
                asap: q
            };

            function $(a, e, n, r, t) {
                Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = a, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), t && (this.response = t, this.status = t.status ? t.status : null)
            }
            X.inherits($, Error, {
                toJSON: function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: X.toJSONObject(this.config),
                        code: this.code,
                        status: this.status
                    }
                }
            });
            let Q = $.prototype,
                aa = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(a => {
                aa[a] = {
                    value: a
                }
            }), Object.defineProperties($, aa), Object.defineProperty(Q, "isAxiosError", {
                value: !0
            }), $.from = (a, e, n, r, t, i) => {
                let o = Object.create(Q);
                return X.toFlatObject(a, o, function(a) {
                    return a !== Error.prototype
                }, a => "isAxiosError" !== a), $.call(o, a.message, e, n, r, t), o.cause = a, o.name = a.name, i && Object.assign(o, i), o
            };
            var ae = n(21876).Buffer;

            function an(a) {
                return X.isPlainObject(a) || X.isArray(a)
            }

            function ar(a) {
                return X.endsWith(a, "[]") ? a.slice(0, -2) : a
            }

            function at(a, e, n) {
                return a ? a.concat(e).map(function(a, e) {
                    return a = ar(a), !n && e ? "[" + a + "]" : a
                }).join(n ? "." : "") : e
            }
            let ai = X.toFlatObject(X, {}, null, function(a) {
                return /^is[A-Z]/.test(a)
            });
            var ao = function(a, e, n) {
                if (!X.isObject(a)) throw TypeError("target must be an object");
                e = e || new FormData;
                let r = (n = X.toFlatObject(n, {
                        metaTokens: !0,
                        dots: !1,
                        indexes: !1
                    }, !1, function(a, e) {
                        return !X.isUndefined(e[a])
                    })).metaTokens,
                    t = n.visitor || u,
                    i = n.dots,
                    o = n.indexes,
                    l = (n.Blob || "undefined" != typeof Blob && Blob) && X.isSpecCompliantForm(e);
                if (!X.isFunction(t)) throw TypeError("visitor must be a function");

                function s(a) {
                    if (null === a) return "";
                    if (X.isDate(a)) return a.toISOString();
                    if (!l && X.isBlob(a)) throw new $("Blob is not supported. Use a Buffer instead.");
                    return X.isArrayBuffer(a) || X.isTypedArray(a) ? l && "function" == typeof Blob ? new Blob([a]) : ae.from(a) : a
                }

                function u(a, n, t) {
                    let l = a;
                    if (a && !t && "object" == typeof a) {
                        if (X.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), a = JSON.stringify(a);
                        else {
                            var u;
                            if (X.isArray(a) && (u = a, X.isArray(u) && !u.some(an)) || (X.isFileList(a) || X.endsWith(n, "[]")) && (l = X.toArray(a))) return n = ar(n), l.forEach(function(a, r) {
                                X.isUndefined(a) || null === a || e.append(!0 === o ? at([n], r, i) : null === o ? n : n + "[]", s(a))
                            }), !1
                        }
                    }
                    return !!an(a) || (e.append(at(t, n, i), s(a)), !1)
                }
                let c = [],
                    p = Object.assign(ai, {
                        defaultVisitor: u,
                        convertValue: s,
                        isVisitable: an
                    });
                if (!X.isObject(a)) throw TypeError("data must be an object");
                return ! function a(n, r) {
                    if (!X.isUndefined(n)) {
                        if (-1 !== c.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                        c.push(n), X.forEach(n, function(n, i) {
                            !0 === (!(X.isUndefined(n) || null === n) && t.call(e, n, X.isString(i) ? i.trim() : i, r, p)) && a(n, r ? r.concat(i) : [i])
                        }), c.pop()
                    }
                }(a), e
            };

            function al(a) {
                let e = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\0"
                };
                return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function(a) {
                    return e[a]
                })
            }

            function as(a, e) {
                this._pairs = [], a && ao(a, this, e)
            }
            let au = as.prototype;

            function ac(a) {
                return encodeURIComponent(a).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            function ap(a, e, n) {
                let r;
                if (!e) return a;
                let t = n && n.encode || ac,
                    i = n && n.serialize;
                if (r = i ? i(e, n) : X.isURLSearchParams(e) ? e.toString() : new as(e, n).toString(t)) {
                    let e = a.indexOf("#"); - 1 !== e && (a = a.slice(0, e)), a += (-1 === a.indexOf("?") ? "?" : "&") + r
                }
                return a
            }
            au.append = function(a, e) {
                this._pairs.push([a, e])
            }, au.toString = function(a) {
                let e = a ? function(e) {
                    return a.call(this, e, al)
                } : al;
                return this._pairs.map(function(a) {
                    return e(a[0]) + "=" + e(a[1])
                }, "").join("&")
            };
            class ah {
                constructor() {
                    this.handlers = []
                }
                use(a, e, n) {
                    return this.handlers.push({
                        fulfilled: a,
                        rejected: e,
                        synchronous: !!n && n.synchronous,
                        runWhen: n ? n.runWhen : null
                    }), this.handlers.length - 1
                }
                eject(a) {
                    this.handlers[a] && (this.handlers[a] = null)
                }
                clear() {
                    this.handlers && (this.handlers = [])
                }
                forEach(a) {
                    X.forEach(this.handlers, function(e) {
                        null !== e && a(e)
                    })
                }
            }
            var ag = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                af = "undefined" != typeof URLSearchParams ? URLSearchParams : as,
                am = "undefined" != typeof FormData ? FormData : null,
                ad = "undefined" != typeof Blob ? Blob : null;
            let ab = "undefined" != typeof window && "undefined" != typeof document,
                ay = "object" == typeof navigator && navigator || void 0,
                aC = ab && (!ay || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(ay.product)),
                aA = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
                aS = ab && window.location.href || "http://localhost";
            var av = { ...p,
                    isBrowser: !0,
                    classes: {
                        URLSearchParams: af,
                        FormData: am,
                        Blob: ad
                    },
                    protocols: ["http", "https", "file", "blob", "url", "data"]
                },
                aE = function(a) {
                    if (X.isFormData(a) && X.isFunction(a.entries)) {
                        let e = {};
                        return X.forEachEntry(a, (a, n) => {
                            ! function a(e, n, r, t) {
                                let i = e[t++];
                                if ("__proto__" === i) return !0;
                                let o = Number.isFinite(+i),
                                    l = t >= e.length;
                                return (i = !i && X.isArray(r) ? r.length : i, l) ? X.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n : (r[i] && X.isObject(r[i]) || (r[i] = []), a(e, n, r[i], t) && X.isArray(r[i]) && (r[i] = function(a) {
                                    let e, n;
                                    let r = {},
                                        t = Object.keys(a),
                                        i = t.length;
                                    for (e = 0; e < i; e++) r[n = t[e]] = a[n];
                                    return r
                                }(r[i]))), !o
                            }(X.matchAll(/\w+|\[(\w*)]/g, a).map(a => "[]" === a[0] ? "" : a[1] || a[0]), n, e, 0)
                        }), e
                    }
                    return null
                };
            let aw = {
                transitional: ag,
                adapter: ["xhr", "http", "fetch"],
                transformRequest: [function(a, e) {
                    let n;
                    let r = e.getContentType() || "",
                        t = r.indexOf("application/json") > -1,
                        i = X.isObject(a);
                    if (i && X.isHTMLForm(a) && (a = new FormData(a)), X.isFormData(a)) return t ? JSON.stringify(aE(a)) : a;
                    if (X.isArrayBuffer(a) || X.isBuffer(a) || X.isStream(a) || X.isFile(a) || X.isBlob(a) || X.isReadableStream(a)) return a;
                    if (X.isArrayBufferView(a)) return a.buffer;
                    if (X.isURLSearchParams(a)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), a.toString();
                    if (i) {
                        if (r.indexOf("application/x-www-form-urlencoded") > -1) {
                            var o, l;
                            return (o = a, l = this.formSerializer, ao(o, new av.classes.URLSearchParams, Object.assign({
                                visitor: function(a, e, n, r) {
                                    return av.isNode && X.isBuffer(a) ? (this.append(e, a.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
                                }
                            }, l))).toString()
                        }
                        if ((n = X.isFileList(a)) || r.indexOf("multipart/form-data") > -1) {
                            let e = this.env && this.env.FormData;
                            return ao(n ? {
                                "files[]": a
                            } : a, e && new e, this.formSerializer)
                        }
                    }
                    return i || t ? (e.setContentType("application/json", !1), function(a, e, n) {
                        if (X.isString(a)) try {
                            return (0, JSON.parse)(a), X.trim(a)
                        } catch (a) {
                            if ("SyntaxError" !== a.name) throw a
                        }
                        return (0, JSON.stringify)(a)
                    }(a)) : a
                }],
                transformResponse: [function(a) {
                    let e = this.transitional || aw.transitional,
                        n = e && e.forcedJSONParsing,
                        r = "json" === this.responseType;
                    if (X.isResponse(a) || X.isReadableStream(a)) return a;
                    if (a && X.isString(a) && (n && !this.responseType || r)) {
                        let n = e && e.silentJSONParsing;
                        try {
                            return JSON.parse(a)
                        } catch (a) {
                            if (!n && r) {
                                if ("SyntaxError" === a.name) throw $.from(a, $.ERR_BAD_RESPONSE, this, null, this.response);
                                throw a
                            }
                        }
                    }
                    return a
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {
                    FormData: av.classes.FormData,
                    Blob: av.classes.Blob
                },
                validateStatus: function(a) {
                    return a >= 200 && a < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": void 0
                    }
                }
            };
            X.forEach(["delete", "get", "head", "post", "put", "patch"], a => {
                aw.headers[a] = {}
            });
            let aR = X.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
            var aj = a => {
                let e, n, r;
                let t = {};
                return a && a.split("\n").forEach(function(a) {
                    r = a.indexOf(":"), e = a.substring(0, r).trim().toLowerCase(), n = a.substring(r + 1).trim(), !e || t[e] && aR[e] || ("set-cookie" === e ? t[e] ? t[e].push(n) : t[e] = [n] : t[e] = t[e] ? t[e] + ", " + n : n)
                }), t
            };
            let aO = Symbol("internals");

            function aB(a) {
                return a && String(a).trim().toLowerCase()
            }

            function aP(a) {
                return !1 === a || null == a ? a : X.isArray(a) ? a.map(aP) : String(a)
            }
            let aU = a => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());

            function aT(a, e, n, r, t) {
                if (X.isFunction(r)) return r.call(this, e, n);
                if (t && (e = n), X.isString(e)) {
                    if (X.isString(r)) return -1 !== e.indexOf(r);
                    if (X.isRegExp(r)) return r.test(e)
                }
            }
            class aM {
                constructor(a) {
                    a && this.set(a)
                }
                set(a, e, n) {
                    let r = this;

                    function t(a, e, n) {
                        let t = aB(e);
                        if (!t) throw Error("header name must be a non-empty string");
                        let i = X.findKey(r, t);
                        i && void 0 !== r[i] && !0 !== n && (void 0 !== n || !1 === r[i]) || (r[i || e] = aP(a))
                    }
                    let i = (a, e) => X.forEach(a, (a, n) => t(a, n, e));
                    if (X.isPlainObject(a) || a instanceof this.constructor) i(a, e);
                    else if (X.isString(a) && (a = a.trim()) && !aU(a)) i(aj(a), e);
                    else if (X.isHeaders(a))
                        for (let [e, r] of a.entries()) t(r, e, n);
                    else null != a && t(e, a, n);
                    return this
                }
                get(a, e) {
                    if (a = aB(a)) {
                        let n = X.findKey(this, a);
                        if (n) {
                            let a = this[n];
                            if (!e) return a;
                            if (!0 === e) return function(a) {
                                let e;
                                let n = Object.create(null),
                                    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                for (; e = r.exec(a);) n[e[1]] = e[2];
                                return n
                            }(a);
                            if (X.isFunction(e)) return e.call(this, a, n);
                            if (X.isRegExp(e)) return e.exec(a);
                            throw TypeError("parser must be boolean|regexp|function")
                        }
                    }
                }
                has(a, e) {
                    if (a = aB(a)) {
                        let n = X.findKey(this, a);
                        return !!(n && void 0 !== this[n] && (!e || aT(this, this[n], n, e)))
                    }
                    return !1
                }
                delete(a, e) {
                    let n = this,
                        r = !1;

                    function t(a) {
                        if (a = aB(a)) {
                            let t = X.findKey(n, a);
                            t && (!e || aT(n, n[t], t, e)) && (delete n[t], r = !0)
                        }
                    }
                    return X.isArray(a) ? a.forEach(t) : t(a), r
                }
                clear(a) {
                    let e = Object.keys(this),
                        n = e.length,
                        r = !1;
                    for (; n--;) {
                        let t = e[n];
                        (!a || aT(this, this[t], t, a, !0)) && (delete this[t], r = !0)
                    }
                    return r
                }
                normalize(a) {
                    let e = this,
                        n = {};
                    return X.forEach(this, (r, t) => {
                        let i = X.findKey(n, t);
                        if (i) {
                            e[i] = aP(r), delete e[t];
                            return
                        }
                        let o = a ? t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, e, n) => e.toUpperCase() + n) : String(t).trim();
                        o !== t && delete e[t], e[o] = aP(r), n[o] = !0
                    }), this
                }
                concat(...a) {
                    return this.constructor.concat(this, ...a)
                }
                toJSON(a) {
                    let e = Object.create(null);
                    return X.forEach(this, (n, r) => {
                        null != n && !1 !== n && (e[r] = a && X.isArray(n) ? n.join(", ") : n)
                    }), e
                }[Symbol.iterator]() {
                    return Object.entries(this.toJSON())[Symbol.iterator]()
                }
                toString() {
                    return Object.entries(this.toJSON()).map(([a, e]) => a + ": " + e).join("\n")
                }
                get[Symbol.toStringTag]() {
                    return "AxiosHeaders"
                }
                static from(a) {
                    return a instanceof this ? a : new this(a)
                }
                static concat(a, ...e) {
                    let n = new this(a);
                    return e.forEach(a => n.set(a)), n
                }
                static accessor(a) {
                    let e = (this[aO] = this[aO] = {
                            accessors: {}
                        }).accessors,
                        n = this.prototype;

                    function r(a) {
                        let r = aB(a);
                        e[r] || (! function(a, e) {
                            let n = X.toCamelCase(" " + e);
                            ["get", "set", "has"].forEach(r => {
                                Object.defineProperty(a, r + n, {
                                    value: function(a, n, t) {
                                        return this[r].call(this, e, a, n, t)
                                    },
                                    configurable: !0
                                })
                            })
                        }(n, a), e[r] = !0)
                    }
                    return X.isArray(a) ? a.forEach(r) : r(a), this
                }
            }

            function aN(a, e) {
                let n = this || aw,
                    r = e || n,
                    t = aM.from(r.headers),
                    i = r.data;
                return X.forEach(a, function(a) {
                    i = a.call(n, i, t.normalize(), e ? e.status : void 0)
                }), t.normalize(), i
            }

            function aI(a) {
                return !!(a && a.__CANCEL__)
            }

            function aD(a, e, n) {
                $.call(this, null == a ? "canceled" : a, $.ERR_CANCELED, e, n), this.name = "CanceledError"
            }

            function ak(a, e, n) {
                let r = n.config.validateStatus;
                !n.status || !r || r(n.status) ? a(n) : e(new $("Request failed with status code " + n.status, [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
            }
            aM.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), X.reduceDescriptors(aM.prototype, ({
                value: a
            }, e) => {
                let n = e[0].toUpperCase() + e.slice(1);
                return {
                    get: () => a,
                    set(a) {
                        this[n] = a
                    }
                }
            }), X.freezeMethods(aM), X.inherits(aD, $, {
                __CANCEL__: !0
            });
            var aL = function(a, e) {
                    let n;
                    let r = Array(a = a || 10),
                        t = Array(a),
                        i = 0,
                        o = 0;
                    return e = void 0 !== e ? e : 1e3,
                        function(l) {
                            let s = Date.now(),
                                u = t[o];
                            n || (n = s), r[i] = l, t[i] = s;
                            let c = o,
                                p = 0;
                            for (; c !== i;) p += r[c++], c %= a;
                            if ((i = (i + 1) % a) === o && (o = (o + 1) % a), s - n < e) return;
                            let h = u && s - u;
                            return h ? Math.round(1e3 * p / h) : void 0
                        }
                },
                aF = function(a, e) {
                    let n, r, t = 0,
                        i = 1e3 / e,
                        o = (e, i = Date.now()) => {
                            t = i, n = null, r && (clearTimeout(r), r = null), a.apply(null, e)
                        };
                    return [(...a) => {
                        let e = Date.now(),
                            l = e - t;
                        l >= i ? o(a, e) : (n = a, r || (r = setTimeout(() => {
                            r = null, o(n)
                        }, i - l)))
                    }, () => n && o(n)]
                };
            let aG = (a, e, n = 3) => {
                    let r = 0,
                        t = aL(50, 250);
                    return aF(n => {
                        let i = n.loaded,
                            o = n.lengthComputable ? n.total : void 0,
                            l = i - r,
                            s = t(l);
                        r = i, a({
                            loaded: i,
                            total: o,
                            progress: o ? i / o : void 0,
                            bytes: l,
                            rate: s || void 0,
                            estimated: s && o && i <= o ? (o - i) / s : void 0,
                            event: n,
                            lengthComputable: null != o,
                            [e ? "download" : "upload"]: !0
                        })
                    }, n)
                },
                ax = (a, e) => {
                    let n = null != a;
                    return [r => e[0]({
                        lengthComputable: n,
                        total: a,
                        loaded: r
                    }), e[1]]
                },
                aK = a => (...e) => X.asap(() => a(...e));
            var az = av.hasStandardBrowserEnv ? function() {
                    let a;
                    let e = av.navigator && /(msie|trident)/i.test(av.navigator.userAgent),
                        n = document.createElement("a");

                    function r(a) {
                        let r = a;
                        return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                            href: n.href,
                            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                            host: n.host,
                            search: n.search ? n.search.replace(/^\?/, "") : "",
                            hash: n.hash ? n.hash.replace(/^#/, "") : "",
                            hostname: n.hostname,
                            port: n.port,
                            pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                        }
                    }
                    return a = r(window.location.href),
                        function(e) {
                            let n = X.isString(e) ? r(e) : e;
                            return n.protocol === a.protocol && n.host === a.host
                        }
                }() : function() {
                    return !0
                },
                aH = av.hasStandardBrowserEnv ? {
                    write(a, e, n, r, t, i) {
                        let o = [a + "=" + encodeURIComponent(e)];
                        X.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), X.isString(r) && o.push("path=" + r), X.isString(t) && o.push("domain=" + t), !0 === i && o.push("secure"), document.cookie = o.join("; ")
                    },
                    read(a) {
                        let e = document.cookie.match(RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
                        return e ? decodeURIComponent(e[3]) : null
                    },
                    remove(a) {
                        this.write(a, "", Date.now() - 864e5)
                    }
                } : {
                    write() {},
                    read: () => null,
                    remove() {}
                };

            function a_(a, e) {
                return a && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) ? e ? a.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : a : e
            }
            let aW = a => a instanceof aM ? { ...a
            } : a;

            function aV(a, e) {
                e = e || {};
                let n = {};

                function r(a, e, n) {
                    return X.isPlainObject(a) && X.isPlainObject(e) ? X.merge.call({
                        caseless: n
                    }, a, e) : X.isPlainObject(e) ? X.merge({}, e) : X.isArray(e) ? e.slice() : e
                }

                function t(a, e, n) {
                    return X.isUndefined(e) ? X.isUndefined(a) ? void 0 : r(void 0, a, n) : r(a, e, n)
                }

                function i(a, e) {
                    if (!X.isUndefined(e)) return r(void 0, e)
                }

                function o(a, e) {
                    return X.isUndefined(e) ? X.isUndefined(a) ? void 0 : r(void 0, a) : r(void 0, e)
                }

                function l(n, t, i) {
                    return i in e ? r(n, t) : i in a ? r(void 0, n) : void 0
                }
                let s = {
                    url: i,
                    method: i,
                    data: i,
                    baseURL: o,
                    transformRequest: o,
                    transformResponse: o,
                    paramsSerializer: o,
                    timeout: o,
                    timeoutMessage: o,
                    withCredentials: o,
                    withXSRFToken: o,
                    adapter: o,
                    responseType: o,
                    xsrfCookieName: o,
                    xsrfHeaderName: o,
                    onUploadProgress: o,
                    onDownloadProgress: o,
                    decompress: o,
                    maxContentLength: o,
                    maxBodyLength: o,
                    beforeRedirect: o,
                    transport: o,
                    httpAgent: o,
                    httpsAgent: o,
                    cancelToken: o,
                    socketPath: o,
                    responseEncoding: o,
                    validateStatus: l,
                    headers: (a, e) => t(aW(a), aW(e), !0)
                };
                return X.forEach(Object.keys(Object.assign({}, a, e)), function(r) {
                    let i = s[r] || t,
                        o = i(a[r], e[r], r);
                    X.isUndefined(o) && i !== l || (n[r] = o)
                }), n
            }
            var aZ = a => {
                    let e;
                    let n = aV({}, a),
                        {
                            data: r,
                            withXSRFToken: t,
                            xsrfHeaderName: i,
                            xsrfCookieName: o,
                            headers: l,
                            auth: s
                        } = n;
                    if (n.headers = l = aM.from(l), n.url = ap(a_(n.baseURL, n.url), a.params, a.paramsSerializer), s && l.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))), X.isFormData(r)) {
                        if (av.hasStandardBrowserEnv || av.hasStandardBrowserWebWorkerEnv) l.setContentType(void 0);
                        else if (!1 !== (e = l.getContentType())) {
                            let [a, ...n] = e ? e.split(";").map(a => a.trim()).filter(Boolean) : [];
                            l.setContentType([a || "multipart/form-data", ...n].join("; "))
                        }
                    }
                    if (av.hasStandardBrowserEnv && (t && X.isFunction(t) && (t = t(n)), t || !1 !== t && az(n.url))) {
                        let a = i && o && aH.read(o);
                        a && l.set(i, a)
                    }
                    return n
                },
                aJ = "undefined" != typeof XMLHttpRequest && function(a) {
                    return new Promise(function(e, n) {
                        let r, t, i, o, l;
                        let s = aZ(a),
                            u = s.data,
                            c = aM.from(s.headers).normalize(),
                            {
                                responseType: p,
                                onUploadProgress: h,
                                onDownloadProgress: g
                            } = s;

                        function f() {
                            o && o(), l && l(), s.cancelToken && s.cancelToken.unsubscribe(r), s.signal && s.signal.removeEventListener("abort", r)
                        }
                        let m = new XMLHttpRequest;

                        function d() {
                            if (!m) return;
                            let r = aM.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
                            ak(function(a) {
                                e(a), f()
                            }, function(a) {
                                n(a), f()
                            }, {
                                data: p && "text" !== p && "json" !== p ? m.response : m.responseText,
                                status: m.status,
                                statusText: m.statusText,
                                headers: r,
                                config: a,
                                request: m
                            }), m = null
                        }
                        m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout, "onloadend" in m ? m.onloadend = d : m.onreadystatechange = function() {
                            m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(d)
                        }, m.onabort = function() {
                            m && (n(new $("Request aborted", $.ECONNABORTED, a, m)), m = null)
                        }, m.onerror = function() {
                            n(new $("Network Error", $.ERR_NETWORK, a, m)), m = null
                        }, m.ontimeout = function() {
                            let e = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded",
                                r = s.transitional || ag;
                            s.timeoutErrorMessage && (e = s.timeoutErrorMessage), n(new $(e, r.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED, a, m)), m = null
                        }, void 0 === u && c.setContentType(null), "setRequestHeader" in m && X.forEach(c.toJSON(), function(a, e) {
                            m.setRequestHeader(e, a)
                        }), X.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), p && "json" !== p && (m.responseType = s.responseType), g && ([i, l] = aG(g, !0), m.addEventListener("progress", i)), h && m.upload && ([t, o] = aG(h), m.upload.addEventListener("progress", t), m.upload.addEventListener("loadend", o)), (s.cancelToken || s.signal) && (r = e => {
                            m && (n(!e || e.type ? new aD(null, a, m) : e), m.abort(), m = null)
                        }, s.cancelToken && s.cancelToken.subscribe(r), s.signal && (s.signal.aborted ? r() : s.signal.addEventListener("abort", r)));
                        let b = function(a) {
                            let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
                            return e && e[1] || ""
                        }(s.url);
                        if (b && -1 === av.protocols.indexOf(b)) {
                            n(new $("Unsupported protocol " + b + ":", $.ERR_BAD_REQUEST, a));
                            return
                        }
                        m.send(u || null)
                    })
                },
                aY = (a, e) => {
                    let {
                        length: n
                    } = a = a ? a.filter(Boolean) : [];
                    if (e || n) {
                        let n, r = new AbortController,
                            t = function(a) {
                                if (!n) {
                                    n = !0, o();
                                    let e = a instanceof Error ? a : this.reason;
                                    r.abort(e instanceof $ ? e : new aD(e instanceof Error ? e.message : e))
                                }
                            },
                            i = e && setTimeout(() => {
                                i = null, t(new $(`timeout ${e} of ms exceeded`, $.ETIMEDOUT))
                            }, e),
                            o = () => {
                                a && (i && clearTimeout(i), i = null, a.forEach(a => {
                                    a.unsubscribe ? a.unsubscribe(t) : a.removeEventListener("abort", t)
                                }), a = null)
                            };
                        a.forEach(a => a.addEventListener("abort", t));
                        let {
                            signal: l
                        } = r;
                        return l.unsubscribe = () => X.asap(o), l
                    }
                };
            let aq = function*(a, e) {
                    let n, r = a.byteLength;
                    if (!e || r < e) {
                        yield a;
                        return
                    }
                    let t = 0;
                    for (; t < r;) n = t + e, yield a.slice(t, n), t = n
                },
                aX = async function*(a, e) {
                    for await (let n of a$(a)) yield* aq(n, e)
                },
                a$ = async function*(a) {
                    if (a[Symbol.asyncIterator]) {
                        yield* a;
                        return
                    }
                    let e = a.getReader();
                    try {
                        for (;;) {
                            let {
                                done: a,
                                value: n
                            } = await e.read();
                            if (a) break;
                            yield n
                        }
                    } finally {
                        await e.cancel()
                    }
                },
                aQ = (a, e, n, r) => {
                    let t;
                    let i = aX(a, e),
                        o = 0,
                        l = a => {
                            !t && (t = !0, r && r(a))
                        };
                    return new ReadableStream({
                        async pull(a) {
                            try {
                                let {
                                    done: e,
                                    value: r
                                } = await i.next();
                                if (e) {
                                    l(), a.close();
                                    return
                                }
                                let t = r.byteLength;
                                if (n) {
                                    let a = o += t;
                                    n(a)
                                }
                                a.enqueue(new Uint8Array(r))
                            } catch (a) {
                                throw l(a), a
                            }
                        },
                        cancel: a => (l(a), i.return())
                    }, {
                        highWaterMark: 2
                    })
                },
                a2 = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response,
                a3 = a2 && "function" == typeof ReadableStream,
                a0 = a2 && ("function" == typeof TextEncoder ? (i = new TextEncoder, a => i.encode(a)) : async a => new Uint8Array(await new Response(a).arrayBuffer())),
                a1 = (a, ...e) => {
                    try {
                        return !!a(...e)
                    } catch (a) {
                        return !1
                    }
                },
                a4 = a3 && a1(() => {
                    let a = !1,
                        e = new Request(av.origin, {
                            body: new ReadableStream,
                            method: "POST",
                            get duplex() {
                                return a = !0, "half"
                            }
                        }).headers.has("Content-Type");
                    return a && !e
                }),
                a5 = a3 && a1(() => X.isReadableStream(new Response("").body)),
                a6 = {
                    stream: a5 && (a => a.body)
                };
            a2 && (c = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(a => {
                a6[a] || (a6[a] = X.isFunction(c[a]) ? e => e[a]() : (e, n) => {
                    throw new $(`Response type '${a}' is not supported`, $.ERR_NOT_SUPPORT, n)
                })
            }));
            let a8 = async a => {
                    if (null == a) return 0;
                    if (X.isBlob(a)) return a.size;
                    if (X.isSpecCompliantForm(a)) {
                        let e = new Request(av.origin, {
                            method: "POST",
                            body: a
                        });
                        return (await e.arrayBuffer()).byteLength
                    }
                    return X.isArrayBufferView(a) || X.isArrayBuffer(a) ? a.byteLength : (X.isURLSearchParams(a) && (a += ""), X.isString(a)) ? (await a0(a)).byteLength : void 0
                },
                a9 = async (a, e) => {
                    let n = X.toFiniteNumber(a.getContentLength());
                    return null == n ? a8(e) : n
                },
                a7 = {
                    http: null,
                    xhr: aJ,
                    fetch: a2 && (async a => {
                        let e, n, {
                            url: r,
                            method: t,
                            data: i,
                            signal: o,
                            cancelToken: l,
                            timeout: s,
                            onDownloadProgress: u,
                            onUploadProgress: c,
                            responseType: p,
                            headers: h,
                            withCredentials: g = "same-origin",
                            fetchOptions: f
                        } = aZ(a);
                        p = p ? (p + "").toLowerCase() : "text";
                        let m = aY([o, l && l.toAbortSignal()], s),
                            d = m && m.unsubscribe && (() => {
                                m.unsubscribe()
                            });
                        try {
                            if (c && a4 && "get" !== t && "head" !== t && 0 !== (n = await a9(h, i))) {
                                let a, e = new Request(r, {
                                    method: "POST",
                                    body: i,
                                    duplex: "half"
                                });
                                if (X.isFormData(i) && (a = e.headers.get("content-type")) && h.setContentType(a), e.body) {
                                    let [a, r] = ax(n, aG(aK(c)));
                                    i = aQ(e.body, 65536, a, r)
                                }
                            }
                            X.isString(g) || (g = g ? "include" : "omit");
                            let o = "credentials" in Request.prototype;
                            e = new Request(r, { ...f,
                                signal: m,
                                method: t.toUpperCase(),
                                headers: h.normalize().toJSON(),
                                body: i,
                                duplex: "half",
                                credentials: o ? g : void 0
                            });
                            let l = await fetch(e),
                                s = a5 && ("stream" === p || "response" === p);
                            if (a5 && (u || s && d)) {
                                let a = {};
                                ["status", "statusText", "headers"].forEach(e => {
                                    a[e] = l[e]
                                });
                                let e = X.toFiniteNumber(l.headers.get("content-length")),
                                    [n, r] = u && ax(e, aG(aK(u), !0)) || [];
                                l = new Response(aQ(l.body, 65536, n, () => {
                                    r && r(), d && d()
                                }), a)
                            }
                            p = p || "text";
                            let b = await a6[X.findKey(a6, p) || "text"](l, a);
                            return !s && d && d(), await new Promise((n, r) => {
                                ak(n, r, {
                                    data: b,
                                    headers: aM.from(l.headers),
                                    status: l.status,
                                    statusText: l.statusText,
                                    config: a,
                                    request: e
                                })
                            })
                        } catch (n) {
                            if (d && d(), n && "TypeError" === n.name && /fetch/i.test(n.message)) throw Object.assign(new $("Network Error", $.ERR_NETWORK, a, e), {
                                cause: n.cause || n
                            });
                            throw $.from(n, n && n.code, a, e)
                        }
                    })
                };
            X.forEach(a7, (a, e) => {
                if (a) {
                    try {
                        Object.defineProperty(a, "name", {
                            value: e
                        })
                    } catch (a) {}
                    Object.defineProperty(a, "adapterName", {
                        value: e
                    })
                }
            });
            let ea = a => `- ${a}`,
                ee = a => X.isFunction(a) || null === a || !1 === a;
            var en = a => {
                let e, n;
                let {
                    length: r
                } = a = X.isArray(a) ? a : [a], t = {};
                for (let i = 0; i < r; i++) {
                    let r;
                    if (n = e = a[i], !ee(e) && void 0 === (n = a7[(r = String(e)).toLowerCase()])) throw new $(`Unknown adapter '${r}'`);
                    if (n) break;
                    t[r || "#" + i] = n
                }
                if (!n) {
                    let a = Object.entries(t).map(([a, e]) => `adapter ${a} ` + (!1 === e ? "is not supported by the environment" : "is not available in the build"));
                    throw new $("There is no suitable adapter to dispatch the request " + (r ? a.length > 1 ? "since :\n" + a.map(ea).join("\n") : " " + ea(a[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
                }
                return n
            };

            function er(a) {
                if (a.cancelToken && a.cancelToken.throwIfRequested(), a.signal && a.signal.aborted) throw new aD(null, a)
            }

            function et(a) {
                return er(a), a.headers = aM.from(a.headers), a.data = aN.call(a, a.transformRequest), -1 !== ["post", "put", "patch"].indexOf(a.method) && a.headers.setContentType("application/x-www-form-urlencoded", !1), en(a.adapter || aw.adapter)(a).then(function(e) {
                    return er(a), e.data = aN.call(a, a.transformResponse, e), e.headers = aM.from(e.headers), e
                }, function(e) {
                    return !aI(e) && (er(a), e && e.response && (e.response.data = aN.call(a, a.transformResponse, e.response), e.response.headers = aM.from(e.response.headers))), Promise.reject(e)
                })
            }
            let ei = "1.7.7",
                eo = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((a, e) => {
                eo[a] = function(n) {
                    return typeof n === a || "a" + (e < 1 ? "n " : " ") + a
                }
            });
            let el = {};
            eo.transitional = function(a, e, n) {
                function r(a, e) {
                    return "[Axios v" + ei + "] Transitional option '" + a + "'" + e + (n ? ". " + n : "")
                }
                return (n, t, i) => {
                    if (!1 === a) throw new $(r(t, " has been removed" + (e ? " in " + e : "")), $.ERR_DEPRECATED);
                    return e && !el[t] && (el[t] = !0, console.warn(r(t, " has been deprecated since v" + e + " and will be removed in the near future"))), !a || a(n, t, i)
                }
            };
            var es = {
                assertOptions: function(a, e, n) {
                    if ("object" != typeof a) throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
                    let r = Object.keys(a),
                        t = r.length;
                    for (; t-- > 0;) {
                        let i = r[t],
                            o = e[i];
                        if (o) {
                            let e = a[i],
                                n = void 0 === e || o(e, i, a);
                            if (!0 !== n) throw new $("option " + i + " must be " + n, $.ERR_BAD_OPTION_VALUE);
                            continue
                        }
                        if (!0 !== n) throw new $("Unknown option " + i, $.ERR_BAD_OPTION)
                    }
                },
                validators: eo
            };
            let eu = es.validators;
            class ec {
                constructor(a) {
                    this.defaults = a, this.interceptors = {
                        request: new ah,
                        response: new ah
                    }
                }
                async request(a, e) {
                    try {
                        return await this._request(a, e)
                    } catch (a) {
                        if (a instanceof Error) {
                            let e;
                            Error.captureStackTrace ? Error.captureStackTrace(e = {}) : e = Error();
                            let n = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                            try {
                                a.stack ? n && !String(a.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (a.stack += "\n" + n) : a.stack = n
                            } catch (a) {}
                        }
                        throw a
                    }
                }
                _request(a, e) {
                    let n, r;
                    "string" == typeof a ? (e = e || {}).url = a : e = a || {};
                    let {
                        transitional: t,
                        paramsSerializer: i,
                        headers: o
                    } = e = aV(this.defaults, e);
                    void 0 !== t && es.assertOptions(t, {
                        silentJSONParsing: eu.transitional(eu.boolean),
                        forcedJSONParsing: eu.transitional(eu.boolean),
                        clarifyTimeoutError: eu.transitional(eu.boolean)
                    }, !1), null != i && (X.isFunction(i) ? e.paramsSerializer = {
                        serialize: i
                    } : es.assertOptions(i, {
                        encode: eu.function,
                        serialize: eu.function
                    }, !0)), e.method = (e.method || this.defaults.method || "get").toLowerCase();
                    let l = o && X.merge(o.common, o[e.method]);
                    o && X.forEach(["delete", "get", "head", "post", "put", "patch", "common"], a => {
                        delete o[a]
                    }), e.headers = aM.concat(l, o);
                    let s = [],
                        u = !0;
                    this.interceptors.request.forEach(function(a) {
                        ("function" != typeof a.runWhen || !1 !== a.runWhen(e)) && (u = u && a.synchronous, s.unshift(a.fulfilled, a.rejected))
                    });
                    let c = [];
                    this.interceptors.response.forEach(function(a) {
                        c.push(a.fulfilled, a.rejected)
                    });
                    let p = 0;
                    if (!u) {
                        let a = [et.bind(this), void 0];
                        for (a.unshift.apply(a, s), a.push.apply(a, c), r = a.length, n = Promise.resolve(e); p < r;) n = n.then(a[p++], a[p++]);
                        return n
                    }
                    r = s.length;
                    let h = e;
                    for (p = 0; p < r;) {
                        let a = s[p++],
                            e = s[p++];
                        try {
                            h = a(h)
                        } catch (a) {
                            e.call(this, a);
                            break
                        }
                    }
                    try {
                        n = et.call(this, h)
                    } catch (a) {
                        return Promise.reject(a)
                    }
                    for (p = 0, r = c.length; p < r;) n = n.then(c[p++], c[p++]);
                    return n
                }
                getUri(a) {
                    return ap(a_((a = aV(this.defaults, a)).baseURL, a.url), a.params, a.paramsSerializer)
                }
            }
            X.forEach(["delete", "get", "head", "options"], function(a) {
                ec.prototype[a] = function(e, n) {
                    return this.request(aV(n || {}, {
                        method: a,
                        url: e,
                        data: (n || {}).data
                    }))
                }
            }), X.forEach(["post", "put", "patch"], function(a) {
                function e(e) {
                    return function(n, r, t) {
                        return this.request(aV(t || {}, {
                            method: a,
                            headers: e ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: n,
                            data: r
                        }))
                    }
                }
                ec.prototype[a] = e(), ec.prototype[a + "Form"] = e(!0)
            });
            class ep {
                constructor(a) {
                    let e;
                    if ("function" != typeof a) throw TypeError("executor must be a function.");
                    this.promise = new Promise(function(a) {
                        e = a
                    });
                    let n = this;
                    this.promise.then(a => {
                        if (!n._listeners) return;
                        let e = n._listeners.length;
                        for (; e-- > 0;) n._listeners[e](a);
                        n._listeners = null
                    }), this.promise.then = a => {
                        let e;
                        let r = new Promise(a => {
                            n.subscribe(a), e = a
                        }).then(a);
                        return r.cancel = function() {
                            n.unsubscribe(e)
                        }, r
                    }, a(function(a, r, t) {
                        n.reason || (n.reason = new aD(a, r, t), e(n.reason))
                    })
                }
                throwIfRequested() {
                    if (this.reason) throw this.reason
                }
                subscribe(a) {
                    if (this.reason) {
                        a(this.reason);
                        return
                    }
                    this._listeners ? this._listeners.push(a) : this._listeners = [a]
                }
                unsubscribe(a) {
                    if (!this._listeners) return;
                    let e = this._listeners.indexOf(a); - 1 !== e && this._listeners.splice(e, 1)
                }
                toAbortSignal() {
                    let a = new AbortController,
                        e = e => {
                            a.abort(e)
                        };
                    return this.subscribe(e), a.signal.unsubscribe = () => this.unsubscribe(e), a.signal
                }
                static source() {
                    let a;
                    return {
                        token: new ep(function(e) {
                            a = e
                        }),
                        cancel: a
                    }
                }
            }
            let eh = {
                Continue: 100,
                SwitchingProtocols: 101,
                Processing: 102,
                EarlyHints: 103,
                Ok: 200,
                Created: 201,
                Accepted: 202,
                NonAuthoritativeInformation: 203,
                NoContent: 204,
                ResetContent: 205,
                PartialContent: 206,
                MultiStatus: 207,
                AlreadyReported: 208,
                ImUsed: 226,
                MultipleChoices: 300,
                MovedPermanently: 301,
                Found: 302,
                SeeOther: 303,
                NotModified: 304,
                UseProxy: 305,
                Unused: 306,
                TemporaryRedirect: 307,
                PermanentRedirect: 308,
                BadRequest: 400,
                Unauthorized: 401,
                PaymentRequired: 402,
                Forbidden: 403,
                NotFound: 404,
                MethodNotAllowed: 405,
                NotAcceptable: 406,
                ProxyAuthenticationRequired: 407,
                RequestTimeout: 408,
                Conflict: 409,
                Gone: 410,
                LengthRequired: 411,
                PreconditionFailed: 412,
                PayloadTooLarge: 413,
                UriTooLong: 414,
                UnsupportedMediaType: 415,
                RangeNotSatisfiable: 416,
                ExpectationFailed: 417,
                ImATeapot: 418,
                MisdirectedRequest: 421,
                UnprocessableEntity: 422,
                Locked: 423,
                FailedDependency: 424,
                TooEarly: 425,
                UpgradeRequired: 426,
                PreconditionRequired: 428,
                TooManyRequests: 429,
                RequestHeaderFieldsTooLarge: 431,
                UnavailableForLegalReasons: 451,
                InternalServerError: 500,
                NotImplemented: 501,
                BadGateway: 502,
                ServiceUnavailable: 503,
                GatewayTimeout: 504,
                HttpVersionNotSupported: 505,
                VariantAlsoNegotiates: 506,
                InsufficientStorage: 507,
                LoopDetected: 508,
                NotExtended: 510,
                NetworkAuthenticationRequired: 511
            };
            Object.entries(eh).forEach(([a, e]) => {
                eh[e] = a
            });
            let eg = function a(e) {
                let n = new ec(e),
                    r = h(ec.prototype.request, n);
                return X.extend(r, ec.prototype, n, {
                    allOwnKeys: !0
                }), X.extend(r, n, null, {
                    allOwnKeys: !0
                }), r.create = function(n) {
                    return a(aV(e, n))
                }, r
            }(aw);
            eg.Axios = ec, eg.CanceledError = aD, eg.CancelToken = ep, eg.isCancel = aI, eg.VERSION = ei, eg.toFormData = ao, eg.AxiosError = $, eg.Cancel = eg.CanceledError, eg.all = function(a) {
                return Promise.all(a)
            }, eg.spread = function(a) {
                return function(e) {
                    return a.apply(null, e)
                }
            }, eg.isAxiosError = function(a) {
                return X.isObject(a) && !0 === a.isAxiosError
            }, eg.mergeConfig = aV, eg.AxiosHeaders = aM, eg.formToJSON = a => aE(X.isHTMLForm(a) ? new FormData(a) : a), eg.getAdapter = en, eg.HttpStatusCode = eh, eg.default = eg;
            var ef = eg
        },
        36005: function(a, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                VERSION: function() {
                    return t
                },
                after: function() {
                    return eS
                },
                all: function() {
                    return eK
                },
                allKeys: function() {
                    return ag
                },
                any: function() {
                    return ez
                },
                assign: function() {
                    return aT
                },
                before: function() {
                    return ev
                },
                bind: function() {
                    return eu
                },
                bindAll: function() {
                    return eh
                },
                chain: function() {
                    return ei
                },
                chunk: function() {
                    return nf
                },
                clone: function() {
                    return aD
                },
                collect: function() {
                    return eD
                },
                compact: function() {
                    return nr
                },
                compose: function() {
                    return eA
                },
                constant: function() {
                    return X
                },
                contains: function() {
                    return eH
                },
                countBy: function() {
                    return e1
                },
                create: function() {
                    return aI
                },
                debounce: function() {
                    return eb
                },
                default: function() {
                    return nC
                },
                defaults: function() {
                    return aM
                },
                defer: function() {
                    return em
                },
                delay: function() {
                    return ef
                },
                detect: function() {
                    return eM
                },
                difference: function() {
                    return ni
                },
                drop: function() {
                    return ne
                },
                each: function() {
                    return eI
                },
                escape: function() {
                    return a1
                },
                every: function() {
                    return eK
                },
                extend: function() {
                    return aU
                },
                extendOwn: function() {
                    return aT
                },
                filter: function() {
                    return eG
                },
                find: function() {
                    return eM
                },
                findIndex: function() {
                    return ej
                },
                findKey: function() {
                    return ew
                },
                findLastIndex: function() {
                    return eO
                },
                findWhere: function() {
                    return eN
                },
                first: function() {
                    return na
                },
                flatten: function() {
                    return nt
                },
                foldl: function() {
                    return eL
                },
                foldr: function() {
                    return eF
                },
                forEach: function() {
                    return eI
                },
                functions: function() {
                    return aB
                },
                get: function() {
                    return ax
                },
                groupBy: function() {
                    return e3
                },
                has: function() {
                    return aK
                },
                head: function() {
                    return na
                },
                identity: function() {
                    return az
                },
                include: function() {
                    return eH
                },
                includes: function() {
                    return eH
                },
                indexBy: function() {
                    return e0
                },
                indexOf: function() {
                    return eU
                },
                initial: function() {
                    return e7
                },
                inject: function() {
                    return eL
                },
                intersection: function() {
                    return nu
                },
                invert: function() {
                    return aO
                },
                invoke: function() {
                    return e_
                },
                isArguments: function() {
                    return J
                },
                isArray: function() {
                    return W
                },
                isArrayBuffer: function() {
                    return k
                },
                isBoolean: function() {
                    return O
                },
                isDataView: function() {
                    return _
                },
                isDate: function() {
                    return M
                },
                isElement: function() {
                    return B
                },
                isEmpty: function() {
                    return al
                },
                isEqual: function() {
                    return ah
                },
                isError: function() {
                    return I
                },
                isFinite: function() {
                    return Y
                },
                isFunction: function() {
                    return G
                },
                isMap: function() {
                    return aS
                },
                isMatch: function() {
                    return as
                },
                isNaN: function() {
                    return q
                },
                isNull: function() {
                    return R
                },
                isNumber: function() {
                    return T
                },
                isObject: function() {
                    return w
                },
                isRegExp: function() {
                    return N
                },
                isSet: function() {
                    return aE
                },
                isString: function() {
                    return U
                },
                isSymbol: function() {
                    return D
                },
                isTypedArray: function() {
                    return ar
                },
                isUndefined: function() {
                    return j
                },
                isWeakMap: function() {
                    return av
                },
                isWeakSet: function() {
                    return aw
                },
                iteratee: function() {
                    return aZ
                },
                keys: function() {
                    return ao
                },
                last: function() {
                    return nn
                },
                lastIndexOf: function() {
                    return eT
                },
                map: function() {
                    return eD
                },
                mapObject: function() {
                    return aY
                },
                matcher: function() {
                    return aH
                },
                matches: function() {
                    return aH
                },
                max: function() {
                    return eZ
                },
                memoize: function() {
                    return eg
                },
                methods: function() {
                    return aB
                },
                min: function() {
                    return eJ
                },
                mixin: function() {
                    return nd
                },
                negate: function() {
                    return eC
                },
                noop: function() {
                    return aq
                },
                now: function() {
                    return a2
                },
                object: function() {
                    return nh
                },
                omit: function() {
                    return e9
                },
                once: function() {
                    return eE
                },
                pairs: function() {
                    return aj
                },
                partial: function() {
                    return es
                },
                partition: function() {
                    return e4
                },
                pick: function() {
                    return e8
                },
                pluck: function() {
                    return eW
                },
                property: function() {
                    return a_
                },
                propertyOf: function() {
                    return aX
                },
                random: function() {
                    return aQ
                },
                range: function() {
                    return ng
                },
                reduce: function() {
                    return eL
                },
                reduceRight: function() {
                    return eF
                },
                reject: function() {
                    return ex
                },
                rest: function() {
                    return ne
                },
                restArguments: function() {
                    return E
                },
                result: function() {
                    return en
                },
                sample: function() {
                    return eX
                },
                select: function() {
                    return eG
                },
                shuffle: function() {
                    return e$
                },
                size: function() {
                    return e5
                },
                some: function() {
                    return ez
                },
                sortBy: function() {
                    return eQ
                },
                sortedIndex: function() {
                    return eB
                },
                tail: function() {
                    return ne
                },
                take: function() {
                    return na
                },
                tap: function() {
                    return ak
                },
                template: function() {
                    return ee
                },
                templateSettings: function() {
                    return a5
                },
                throttle: function() {
                    return ed
                },
                times: function() {
                    return a$
                },
                toArray: function() {
                    return eq
                },
                toPath: function() {
                    return aL
                },
                transpose: function() {
                    return nc
                },
                unescape: function() {
                    return a4
                },
                union: function() {
                    return ns
                },
                uniq: function() {
                    return nl
                },
                unique: function() {
                    return nl
                },
                uniqueId: function() {
                    return et
                },
                unzip: function() {
                    return nc
                },
                values: function() {
                    return aR
                },
                where: function() {
                    return eV
                },
                without: function() {
                    return no
                },
                wrap: function() {
                    return ey
                },
                zip: function() {
                    return np
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                VERSION: function() {
                    return t
                },
                after: function() {
                    return eS
                },
                all: function() {
                    return eK
                },
                allKeys: function() {
                    return ag
                },
                any: function() {
                    return ez
                },
                assign: function() {
                    return aT
                },
                before: function() {
                    return ev
                },
                bind: function() {
                    return eu
                },
                bindAll: function() {
                    return eh
                },
                chain: function() {
                    return ei
                },
                chunk: function() {
                    return nf
                },
                clone: function() {
                    return aD
                },
                collect: function() {
                    return eD
                },
                compact: function() {
                    return nr
                },
                compose: function() {
                    return eA
                },
                constant: function() {
                    return X
                },
                contains: function() {
                    return eH
                },
                countBy: function() {
                    return e1
                },
                create: function() {
                    return aI
                },
                debounce: function() {
                    return eb
                },
                default: function() {
                    return nb
                },
                defaults: function() {
                    return aM
                },
                defer: function() {
                    return em
                },
                delay: function() {
                    return ef
                },
                detect: function() {
                    return eM
                },
                difference: function() {
                    return ni
                },
                drop: function() {
                    return ne
                },
                each: function() {
                    return eI
                },
                escape: function() {
                    return a1
                },
                every: function() {
                    return eK
                },
                extend: function() {
                    return aU
                },
                extendOwn: function() {
                    return aT
                },
                filter: function() {
                    return eG
                },
                find: function() {
                    return eM
                },
                findIndex: function() {
                    return ej
                },
                findKey: function() {
                    return ew
                },
                findLastIndex: function() {
                    return eO
                },
                findWhere: function() {
                    return eN
                },
                first: function() {
                    return na
                },
                flatten: function() {
                    return nt
                },
                foldl: function() {
                    return eL
                },
                foldr: function() {
                    return eF
                },
                forEach: function() {
                    return eI
                },
                functions: function() {
                    return aB
                },
                get: function() {
                    return ax
                },
                groupBy: function() {
                    return e3
                },
                has: function() {
                    return aK
                },
                head: function() {
                    return na
                },
                identity: function() {
                    return az
                },
                include: function() {
                    return eH
                },
                includes: function() {
                    return eH
                },
                indexBy: function() {
                    return e0
                },
                indexOf: function() {
                    return eU
                },
                initial: function() {
                    return e7
                },
                inject: function() {
                    return eL
                },
                intersection: function() {
                    return nu
                },
                invert: function() {
                    return aO
                },
                invoke: function() {
                    return e_
                },
                isArguments: function() {
                    return J
                },
                isArray: function() {
                    return W
                },
                isArrayBuffer: function() {
                    return k
                },
                isBoolean: function() {
                    return O
                },
                isDataView: function() {
                    return _
                },
                isDate: function() {
                    return M
                },
                isElement: function() {
                    return B
                },
                isEmpty: function() {
                    return al
                },
                isEqual: function() {
                    return ah
                },
                isError: function() {
                    return I
                },
                isFinite: function() {
                    return Y
                },
                isFunction: function() {
                    return G
                },
                isMap: function() {
                    return aS
                },
                isMatch: function() {
                    return as
                },
                isNaN: function() {
                    return q
                },
                isNull: function() {
                    return R
                },
                isNumber: function() {
                    return T
                },
                isObject: function() {
                    return w
                },
                isRegExp: function() {
                    return N
                },
                isSet: function() {
                    return aE
                },
                isString: function() {
                    return U
                },
                isSymbol: function() {
                    return D
                },
                isTypedArray: function() {
                    return ar
                },
                isUndefined: function() {
                    return j
                },
                isWeakMap: function() {
                    return av
                },
                isWeakSet: function() {
                    return aw
                },
                iteratee: function() {
                    return aZ
                },
                keys: function() {
                    return ao
                },
                last: function() {
                    return nn
                },
                lastIndexOf: function() {
                    return eT
                },
                map: function() {
                    return eD
                },
                mapObject: function() {
                    return aY
                },
                matcher: function() {
                    return aH
                },
                matches: function() {
                    return aH
                },
                max: function() {
                    return eZ
                },
                memoize: function() {
                    return eg
                },
                methods: function() {
                    return aB
                },
                min: function() {
                    return eJ
                },
                mixin: function() {
                    return nd
                },
                negate: function() {
                    return eC
                },
                noop: function() {
                    return aq
                },
                now: function() {
                    return a2
                },
                object: function() {
                    return nh
                },
                omit: function() {
                    return e9
                },
                once: function() {
                    return eE
                },
                pairs: function() {
                    return aj
                },
                partial: function() {
                    return es
                },
                partition: function() {
                    return e4
                },
                pick: function() {
                    return e8
                },
                pluck: function() {
                    return eW
                },
                property: function() {
                    return a_
                },
                propertyOf: function() {
                    return aX
                },
                random: function() {
                    return aQ
                },
                range: function() {
                    return ng
                },
                reduce: function() {
                    return eL
                },
                reduceRight: function() {
                    return eF
                },
                reject: function() {
                    return ex
                },
                rest: function() {
                    return ne
                },
                restArguments: function() {
                    return E
                },
                result: function() {
                    return en
                },
                sample: function() {
                    return eX
                },
                select: function() {
                    return eG
                },
                shuffle: function() {
                    return e$
                },
                size: function() {
                    return e5
                },
                some: function() {
                    return ez
                },
                sortBy: function() {
                    return eQ
                },
                sortedIndex: function() {
                    return eB
                },
                tail: function() {
                    return ne
                },
                take: function() {
                    return na
                },
                tap: function() {
                    return ak
                },
                template: function() {
                    return ee
                },
                templateSettings: function() {
                    return a5
                },
                throttle: function() {
                    return ed
                },
                times: function() {
                    return a$
                },
                toArray: function() {
                    return eq
                },
                toPath: function() {
                    return aL
                },
                transpose: function() {
                    return nc
                },
                unescape: function() {
                    return a4
                },
                union: function() {
                    return ns
                },
                uniq: function() {
                    return nl
                },
                unique: function() {
                    return nl
                },
                uniqueId: function() {
                    return et
                },
                unzip: function() {
                    return nc
                },
                values: function() {
                    return aR
                },
                where: function() {
                    return eV
                },
                without: function() {
                    return no
                },
                wrap: function() {
                    return ey
                },
                zip: function() {
                    return np
                }
            });
            var t = "1.13.6",
                i = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {},
                o = Array.prototype,
                l = Object.prototype,
                s = "undefined" != typeof Symbol ? Symbol.prototype : null,
                u = o.push,
                c = o.slice,
                p = l.toString,
                h = l.hasOwnProperty,
                g = "undefined" != typeof ArrayBuffer,
                f = "undefined" != typeof DataView,
                m = Array.isArray,
                d = Object.keys,
                b = Object.create,
                y = g && ArrayBuffer.isView,
                C = isNaN,
                A = isFinite,
                S = !({
                    toString: null
                }).propertyIsEnumerable("toString"),
                v = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

            function E(a, e) {
                return e = null == e ? a.length - 1 : +e,
                    function() {
                        for (var n = Math.max(arguments.length - e, 0), r = Array(n), t = 0; t < n; t++) r[t] = arguments[t + e];
                        switch (e) {
                            case 0:
                                return a.call(this, r);
                            case 1:
                                return a.call(this, arguments[0], r);
                            case 2:
                                return a.call(this, arguments[0], arguments[1], r)
                        }
                        var i = Array(e + 1);
                        for (t = 0; t < e; t++) i[t] = arguments[t];
                        return i[e] = r, a.apply(this, i)
                    }
            }

            function w(a) {
                var e = typeof a;
                return "function" === e || "object" === e && !!a
            }

            function R(a) {
                return null === a
            }

            function j(a) {
                return void 0 === a
            }

            function O(a) {
                return !0 === a || !1 === a || "[object Boolean]" === p.call(a)
            }

            function B(a) {
                return !!(a && 1 === a.nodeType)
            }

            function P(a) {
                var e = "[object " + a + "]";
                return function(a) {
                    return p.call(a) === e
                }
            }
            var U = P("String"),
                T = P("Number"),
                M = P("Date"),
                N = P("RegExp"),
                I = P("Error"),
                D = P("Symbol"),
                k = P("ArrayBuffer"),
                L = P("Function"),
                F = i.document && i.document.childNodes;
            "object" != typeof Int8Array && "function" != typeof F && (L = function(a) {
                return "function" == typeof a
            });
            var G = L,
                x = P("Object"),
                K = f && x(new DataView(new ArrayBuffer(8))),
                z = "undefined" != typeof Map && x(new Map),
                H = P("DataView"),
                _ = K ? function(a) {
                    return null != a && G(a.getInt8) && k(a.buffer)
                } : H,
                W = m || P("Array");

            function V(a, e) {
                return null != a && h.call(a, e)
            }
            var Z = P("Arguments");
            ! function() {
                Z(arguments) || (Z = function(a) {
                    return V(a, "callee")
                })
            }();
            var J = Z;

            function Y(a) {
                return !D(a) && A(a) && !isNaN(parseFloat(a))
            }

            function q(a) {
                return T(a) && C(a)
            }

            function X(a) {
                return function() {
                    return a
                }
            }

            function $(a) {
                return function(e) {
                    var n = a(e);
                    return "number" == typeof n && n >= 0 && n <= 9007199254740991
                }
            }

            function Q(a) {
                return function(e) {
                    return null == e ? void 0 : e[a]
                }
            }
            var aa = Q("byteLength"),
                ae = $(aa),
                an = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,
                ar = g ? function(a) {
                    return y ? y(a) && !_(a) : ae(a) && an.test(p.call(a))
                } : X(!1),
                at = Q("length");

            function ai(a, e) {
                e = function(a) {
                    for (var e = {}, n = a.length, r = 0; r < n; ++r) e[a[r]] = !0;
                    return {
                        contains: function(a) {
                            return !0 === e[a]
                        },
                        push: function(n) {
                            return e[n] = !0, a.push(n)
                        }
                    }
                }(e);
                var n = v.length,
                    r = a.constructor,
                    t = G(r) && r.prototype || l,
                    i = "constructor";
                for (V(a, i) && !e.contains(i) && e.push(i); n--;)(i = v[n]) in a && a[i] !== t[i] && !e.contains(i) && e.push(i)
            }

            function ao(a) {
                if (!w(a)) return [];
                if (d) return d(a);
                var e = [];
                for (var n in a) V(a, n) && e.push(n);
                return S && ai(a, e), e
            }

            function al(a) {
                if (null == a) return !0;
                var e = at(a);
                return "number" == typeof e && (W(a) || U(a) || J(a)) ? 0 === e : 0 === at(ao(a))
            }

            function as(a, e) {
                var n = ao(e),
                    r = n.length;
                if (null == a) return !r;
                for (var t = Object(a), i = 0; i < r; i++) {
                    var o = n[i];
                    if (e[o] !== t[o] || !(o in t)) return !1
                }
                return !0
            }

            function au(a) {
                return a instanceof au ? a : this instanceof au ? void(this._wrapped = a) : new au(a)
            }

            function ac(a) {
                return new Uint8Array(a.buffer || a, a.byteOffset || 0, aa(a))
            }
            au.VERSION = t, au.prototype.value = function() {
                return this._wrapped
            }, au.prototype.valueOf = au.prototype.toJSON = au.prototype.value, au.prototype.toString = function() {
                return String(this._wrapped)
            };
            var ap = "[object DataView]";

            function ah(a, e) {
                return function a(e, n, r, t) {
                    if (e === n) return 0 !== e || 1 / e == 1 / n;
                    if (null == e || null == n) return !1;
                    if (e != e) return n != n;
                    var i = typeof e;
                    return ("function" === i || "object" === i || "object" == typeof n) && function e(n, r, t, i) {
                        n instanceof au && (n = n._wrapped), r instanceof au && (r = r._wrapped);
                        var o = p.call(n);
                        if (o !== p.call(r)) return !1;
                        if (K && "[object Object]" == o && _(n)) {
                            if (!_(r)) return !1;
                            o = ap
                        }
                        switch (o) {
                            case "[object RegExp]":
                            case "[object String]":
                                return "" + n == "" + r;
                            case "[object Number]":
                                if (+n != +n) return +r != +r;
                                return 0 == +n ? 1 / +n == 1 / r : +n == +r;
                            case "[object Date]":
                            case "[object Boolean]":
                                return +n == +r;
                            case "[object Symbol]":
                                return s.valueOf.call(n) === s.valueOf.call(r);
                            case "[object ArrayBuffer]":
                            case ap:
                                return e(ac(n), ac(r), t, i)
                        }
                        var l = "[object Array]" === o;
                        if (!l && ar(n)) {
                            if (aa(n) !== aa(r)) return !1;
                            if (n.buffer === r.buffer && n.byteOffset === r.byteOffset) return !0;
                            l = !0
                        }
                        if (!l) {
                            if ("object" != typeof n || "object" != typeof r) return !1;
                            var u = n.constructor,
                                c = r.constructor;
                            if (u !== c && !(G(u) && u instanceof u && G(c) && c instanceof c) && "constructor" in n && "constructor" in r) return !1
                        }
                        i = i || [];
                        for (var h = (t = t || []).length; h--;)
                            if (t[h] === n) return i[h] === r;
                        if (t.push(n), i.push(r), l) {
                            if ((h = n.length) !== r.length) return !1;
                            for (; h--;)
                                if (!a(n[h], r[h], t, i)) return !1
                        } else {
                            var g, f = ao(n);
                            if (h = f.length, ao(r).length !== h) return !1;
                            for (; h--;)
                                if (!(V(r, g = f[h]) && a(n[g], r[g], t, i))) return !1
                        }
                        return t.pop(), i.pop(), !0
                    }(e, n, r, t)
                }(a, e)
            }

            function ag(a) {
                if (!w(a)) return [];
                var e = [];
                for (var n in a) e.push(n);
                return S && ai(a, e), e
            }

            function af(a) {
                var e = at(a);
                return function(n) {
                    if (null == n || at(ag(n))) return !1;
                    for (var r = 0; r < e; r++)
                        if (!G(n[a[r]])) return !1;
                    return a !== aC || !G(n[am])
                }
            }
            var am = "forEach",
                ad = ["clear", "delete"],
                ab = ["get", "has", "set"],
                ay = ad.concat(am, ab),
                aC = ad.concat(ab),
                aA = ["add"].concat(ad, am, "has"),
                aS = z ? af(ay) : P("Map"),
                av = z ? af(aC) : P("WeakMap"),
                aE = z ? af(aA) : P("Set"),
                aw = P("WeakSet");

            function aR(a) {
                for (var e = ao(a), n = e.length, r = Array(n), t = 0; t < n; t++) r[t] = a[e[t]];
                return r
            }

            function aj(a) {
                for (var e = ao(a), n = e.length, r = Array(n), t = 0; t < n; t++) r[t] = [e[t], a[e[t]]];
                return r
            }

            function aO(a) {
                for (var e = {}, n = ao(a), r = 0, t = n.length; r < t; r++) e[a[n[r]]] = n[r];
                return e
            }

            function aB(a) {
                var e = [];
                for (var n in a) G(a[n]) && e.push(n);
                return e.sort()
            }

            function aP(a, e) {
                return function(n) {
                    var r = arguments.length;
                    if (e && (n = Object(n)), r < 2 || null == n) return n;
                    for (var t = 1; t < r; t++)
                        for (var i = arguments[t], o = a(i), l = o.length, s = 0; s < l; s++) {
                            var u = o[s];
                            e && void 0 !== n[u] || (n[u] = i[u])
                        }
                    return n
                }
            }
            var aU = aP(ag),
                aT = aP(ao),
                aM = aP(ag, !0);

            function aN(a) {
                if (!w(a)) return {};
                if (b) return b(a);
                var e = function() {};
                e.prototype = a;
                var n = new e;
                return e.prototype = null, n
            }

            function aI(a, e) {
                var n = aN(a);
                return e && aT(n, e), n
            }

            function aD(a) {
                return w(a) ? W(a) ? a.slice() : aU({}, a) : a
            }

            function ak(a, e) {
                return e(a), a
            }

            function aL(a) {
                return W(a) ? a : [a]
            }

            function aF(a) {
                return au.toPath(a)
            }

            function aG(a, e) {
                for (var n = e.length, r = 0; r < n; r++) {
                    if (null == a) return;
                    a = a[e[r]]
                }
                return n ? a : void 0
            }

            function ax(a, e, n) {
                var r = aG(a, aF(e));
                return j(r) ? n : r
            }

            function aK(a, e) {
                for (var n = (e = aF(e)).length, r = 0; r < n; r++) {
                    var t = e[r];
                    if (!V(a, t)) return !1;
                    a = a[t]
                }
                return !!n
            }

            function az(a) {
                return a
            }

            function aH(a) {
                return a = aT({}, a),
                    function(e) {
                        return as(e, a)
                    }
            }

            function a_(a) {
                return a = aF(a),
                    function(e) {
                        return aG(e, a)
                    }
            }

            function aW(a, e, n) {
                if (void 0 === e) return a;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return a.call(e, n)
                        };
                    case 3:
                        return function(n, r, t) {
                            return a.call(e, n, r, t)
                        };
                    case 4:
                        return function(n, r, t, i) {
                            return a.call(e, n, r, t, i)
                        }
                }
                return function() {
                    return a.apply(e, arguments)
                }
            }

            function aV(a, e, n) {
                return null == a ? az : G(a) ? aW(a, e, n) : w(a) && !W(a) ? aH(a) : a_(a)
            }

            function aZ(a, e) {
                return aV(a, e, 1 / 0)
            }

            function aJ(a, e, n) {
                return au.iteratee !== aZ ? au.iteratee(a, e) : aV(a, e, n)
            }

            function aY(a, e, n) {
                e = aJ(e, n);
                for (var r = ao(a), t = r.length, i = {}, o = 0; o < t; o++) {
                    var l = r[o];
                    i[l] = e(a[l], l, a)
                }
                return i
            }

            function aq() {}

            function aX(a) {
                return null == a ? aq : function(e) {
                    return ax(a, e)
                }
            }

            function a$(a, e, n) {
                var r = Array(Math.max(0, a));
                e = aW(e, n, 1);
                for (var t = 0; t < a; t++) r[t] = e(t);
                return r
            }

            function aQ(a, e) {
                return null == e && (e = a, a = 0), a + Math.floor(Math.random() * (e - a + 1))
            }
            au.toPath = aL, au.iteratee = aZ;
            var a2 = Date.now || function() {
                return new Date().getTime()
            };

            function a3(a) {
                var e = function(e) {
                        return a[e]
                    },
                    n = "(?:" + ao(a).join("|") + ")",
                    r = RegExp(n),
                    t = RegExp(n, "g");
                return function(a) {
                    return a = null == a ? "" : "" + a, r.test(a) ? a.replace(t, e) : a
                }
            }
            var a0 = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                a1 = a3(a0),
                a4 = a3(aO(a0)),
                a5 = au.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                },
                a6 = /(.)^/,
                a8 = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                a9 = /\\|'|\r|\n|\u2028|\u2029/g;

            function a7(a) {
                return "\\" + a8[a]
            }
            var ea = /^\s*(\w|\$)+\s*$/;

            function ee(a, e, n) {
                !e && n && (e = n);
                var r, t = RegExp([((e = aM({}, e, au.templateSettings)).escape || a6).source, (e.interpolate || a6).source, (e.evaluate || a6).source].join("|") + "|$", "g"),
                    i = 0,
                    o = "__p+='";
                a.replace(t, function(e, n, r, t, l) {
                    return o += a.slice(i, l).replace(a9, a7), i = l + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : t && (o += "';\n" + t + "\n__p+='"), e
                }), o += "';\n";
                var l = e.variable;
                if (l) {
                    if (!ea.test(l)) throw Error("variable is not a bare identifier: " + l)
                } else o = "with(obj||{}){\n" + o + "}\n", l = "obj";
                o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    r = Function(l, "_", o)
                } catch (a) {
                    throw a.source = o, a
                }
                var s = function(a) {
                    return r.call(this, a, au)
                };
                return s.source = "function(" + l + "){\n" + o + "}", s
            }

            function en(a, e, n) {
                var r = (e = aF(e)).length;
                if (!r) return G(n) ? n.call(a) : n;
                for (var t = 0; t < r; t++) {
                    var i = null == a ? void 0 : a[e[t]];
                    void 0 === i && (i = n, t = r), a = G(i) ? i.call(a) : i
                }
                return a
            }
            var er = 0;

            function et(a) {
                var e = ++er + "";
                return a ? a + e : e
            }

            function ei(a) {
                var e = au(a);
                return e._chain = !0, e
            }

            function eo(a, e, n, r, t) {
                if (!(r instanceof e)) return a.apply(n, t);
                var i = aN(a.prototype),
                    o = a.apply(i, t);
                return w(o) ? o : i
            }
            var el = E(function(a, e) {
                var n = el.placeholder,
                    r = function() {
                        for (var t = 0, i = e.length, o = Array(i), l = 0; l < i; l++) o[l] = e[l] === n ? arguments[t++] : e[l];
                        for (; t < arguments.length;) o.push(arguments[t++]);
                        return eo(a, r, this, this, o)
                    };
                return r
            });
            el.placeholder = au;
            var es = el,
                eu = E(function(a, e, n) {
                    if (!G(a)) throw TypeError("Bind must be called on a function");
                    var r = E(function(t) {
                        return eo(a, r, e, this, n.concat(t))
                    });
                    return r
                }),
                ec = $(at);

            function ep(a, e, n, r) {
                if (r = r || [], e || 0 === e) {
                    if (e <= 0) return r.concat(a)
                } else e = 1 / 0;
                for (var t = r.length, i = 0, o = at(a); i < o; i++) {
                    var l = a[i];
                    if (ec(l) && (W(l) || J(l))) {
                        if (e > 1) ep(l, e - 1, n, r), t = r.length;
                        else
                            for (var s = 0, u = l.length; s < u;) r[t++] = l[s++]
                    } else n || (r[t++] = l)
                }
                return r
            }
            var eh = E(function(a, e) {
                var n = (e = ep(e, !1, !1)).length;
                if (n < 1) throw Error("bindAll must be passed function names");
                for (; n--;) {
                    var r = e[n];
                    a[r] = eu(a[r], a)
                }
                return a
            });

            function eg(a, e) {
                var n = function(r) {
                    var t = n.cache,
                        i = "" + (e ? e.apply(this, arguments) : r);
                    return V(t, i) || (t[i] = a.apply(this, arguments)), t[i]
                };
                return n.cache = {}, n
            }
            var ef = E(function(a, e, n) {
                    return setTimeout(function() {
                        return a.apply(null, n)
                    }, e)
                }),
                em = es(ef, au, 1);

            function ed(a, e, n) {
                var r, t, i, o, l = 0;
                n || (n = {});
                var s = function() {
                        l = !1 === n.leading ? 0 : a2(), r = null, o = a.apply(t, i), r || (t = i = null)
                    },
                    u = function() {
                        var u = a2();
                        l || !1 !== n.leading || (l = u);
                        var c = e - (u - l);
                        return t = this, i = arguments, c <= 0 || c > e ? (r && (clearTimeout(r), r = null), l = u, o = a.apply(t, i), r || (t = i = null)) : r || !1 === n.trailing || (r = setTimeout(s, c)), o
                    };
                return u.cancel = function() {
                    clearTimeout(r), l = 0, r = t = i = null
                }, u
            }

            function eb(a, e, n) {
                var r, t, i, o, l, s = function() {
                        var u = a2() - t;
                        e > u ? r = setTimeout(s, e - u) : (r = null, n || (o = a.apply(l, i)), r || (i = l = null))
                    },
                    u = E(function(u) {
                        return l = this, i = u, t = a2(), !r && (r = setTimeout(s, e), n && (o = a.apply(l, i))), o
                    });
                return u.cancel = function() {
                    clearTimeout(r), r = i = l = null
                }, u
            }

            function ey(a, e) {
                return es(e, a)
            }

            function eC(a) {
                return function() {
                    return !a.apply(this, arguments)
                }
            }

            function eA() {
                var a = arguments,
                    e = a.length - 1;
                return function() {
                    for (var n = e, r = a[e].apply(this, arguments); n--;) r = a[n].call(this, r);
                    return r
                }
            }

            function eS(a, e) {
                return function() {
                    if (--a < 1) return e.apply(this, arguments)
                }
            }

            function ev(a, e) {
                var n;
                return function() {
                    return --a > 0 && (n = e.apply(this, arguments)), a <= 1 && (e = null), n
                }
            }
            var eE = es(ev, 2);

            function ew(a, e, n) {
                e = aJ(e, n);
                for (var r, t = ao(a), i = 0, o = t.length; i < o; i++)
                    if (e(a[r = t[i]], r, a)) return r
            }

            function eR(a) {
                return function(e, n, r) {
                    n = aJ(n, r);
                    for (var t = at(e), i = a > 0 ? 0 : t - 1; i >= 0 && i < t; i += a)
                        if (n(e[i], i, e)) return i;
                    return -1
                }
            }
            var ej = eR(1),
                eO = eR(-1);

            function eB(a, e, n, r) {
                for (var t = (n = aJ(n, r, 1))(e), i = 0, o = at(a); i < o;) {
                    var l = Math.floor((i + o) / 2);
                    n(a[l]) < t ? i = l + 1 : o = l
                }
                return i
            }

            function eP(a, e, n) {
                return function(r, t, i) {
                    var o = 0,
                        l = at(r);
                    if ("number" == typeof i) a > 0 ? o = i >= 0 ? i : Math.max(i + l, o) : l = i >= 0 ? Math.min(i + 1, l) : i + l + 1;
                    else if (n && i && l) return i = n(r, t), r[i] === t ? i : -1;
                    if (t != t) return (i = e(c.call(r, o, l), q)) >= 0 ? i + o : -1;
                    for (i = a > 0 ? o : l - 1; i >= 0 && i < l; i += a)
                        if (r[i] === t) return i;
                    return -1
                }
            }
            var eU = eP(1, ej, eB),
                eT = eP(-1, eO);

            function eM(a, e, n) {
                var r = (ec(a) ? ej : ew)(a, e, n);
                if (void 0 !== r && -1 !== r) return a[r]
            }

            function eN(a, e) {
                return eM(a, aH(e))
            }

            function eI(a, e, n) {
                if (e = aW(e, n), ec(a))
                    for (r = 0, t = a.length; r < t; r++) e(a[r], r, a);
                else {
                    var r, t, i = ao(a);
                    for (r = 0, t = i.length; r < t; r++) e(a[i[r]], i[r], a)
                }
                return a
            }

            function eD(a, e, n) {
                e = aJ(e, n);
                for (var r = !ec(a) && ao(a), t = (r || a).length, i = Array(t), o = 0; o < t; o++) {
                    var l = r ? r[o] : o;
                    i[o] = e(a[l], l, a)
                }
                return i
            }

            function ek(a) {
                var e = function(e, n, r, t) {
                    var i = !ec(e) && ao(e),
                        o = (i || e).length,
                        l = a > 0 ? 0 : o - 1;
                    for (t || (r = e[i ? i[l] : l], l += a); l >= 0 && l < o; l += a) {
                        var s = i ? i[l] : l;
                        r = n(r, e[s], s, e)
                    }
                    return r
                };
                return function(a, n, r, t) {
                    var i = arguments.length >= 3;
                    return e(a, aW(n, t, 4), r, i)
                }
            }
            var eL = ek(1),
                eF = ek(-1);

            function eG(a, e, n) {
                var r = [];
                return e = aJ(e, n), eI(a, function(a, n, t) {
                    e(a, n, t) && r.push(a)
                }), r
            }

            function ex(a, e, n) {
                return eG(a, eC(aJ(e)), n)
            }

            function eK(a, e, n) {
                e = aJ(e, n);
                for (var r = !ec(a) && ao(a), t = (r || a).length, i = 0; i < t; i++) {
                    var o = r ? r[i] : i;
                    if (!e(a[o], o, a)) return !1
                }
                return !0
            }

            function ez(a, e, n) {
                e = aJ(e, n);
                for (var r = !ec(a) && ao(a), t = (r || a).length, i = 0; i < t; i++) {
                    var o = r ? r[i] : i;
                    if (e(a[o], o, a)) return !0
                }
                return !1
            }

            function eH(a, e, n, r) {
                return ec(a) || (a = aR(a)), ("number" != typeof n || r) && (n = 0), eU(a, e, n) >= 0
            }
            var e_ = E(function(a, e, n) {
                var r, t;
                return G(e) ? t = e : (r = (e = aF(e)).slice(0, -1), e = e[e.length - 1]), eD(a, function(a) {
                    var i = t;
                    if (!i) {
                        if (r && r.length && (a = aG(a, r)), null == a) return;
                        i = a[e]
                    }
                    return null == i ? i : i.apply(a, n)
                })
            });

            function eW(a, e) {
                return eD(a, a_(e))
            }

            function eV(a, e) {
                return eG(a, aH(e))
            }

            function eZ(a, e, n) {
                var r, t, i = -1 / 0,
                    o = -1 / 0;
                if (null == e || "number" == typeof e && "object" != typeof a[0] && null != a) {
                    a = ec(a) ? a : aR(a);
                    for (var l = 0, s = a.length; l < s; l++) null != (r = a[l]) && r > i && (i = r)
                } else e = aJ(e, n), eI(a, function(a, n, r) {
                    ((t = e(a, n, r)) > o || t === -1 / 0 && i === -1 / 0) && (i = a, o = t)
                });
                return i
            }

            function eJ(a, e, n) {
                var r, t, i = 1 / 0,
                    o = 1 / 0;
                if (null == e || "number" == typeof e && "object" != typeof a[0] && null != a) {
                    a = ec(a) ? a : aR(a);
                    for (var l = 0, s = a.length; l < s; l++) null != (r = a[l]) && r < i && (i = r)
                } else e = aJ(e, n), eI(a, function(a, n, r) {
                    ((t = e(a, n, r)) < o || t === 1 / 0 && i === 1 / 0) && (i = a, o = t)
                });
                return i
            }
            var eY = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;

            function eq(a) {
                return a ? W(a) ? c.call(a) : U(a) ? a.match(eY) : ec(a) ? eD(a, az) : aR(a) : []
            }

            function eX(a, e, n) {
                if (null == e || n) return ec(a) || (a = aR(a)), a[aQ(a.length - 1)];
                var r = eq(a),
                    t = at(r);
                e = Math.max(Math.min(e, t), 0);
                for (var i = t - 1, o = 0; o < e; o++) {
                    var l = aQ(o, i),
                        s = r[o];
                    r[o] = r[l], r[l] = s
                }
                return r.slice(0, e)
            }

            function e$(a) {
                return eX(a, 1 / 0)
            }

            function eQ(a, e, n) {
                var r = 0;
                return e = aJ(e, n), eW(eD(a, function(a, n, t) {
                    return {
                        value: a,
                        index: r++,
                        criteria: e(a, n, t)
                    }
                }).sort(function(a, e) {
                    var n = a.criteria,
                        r = e.criteria;
                    if (n !== r) {
                        if (n > r || void 0 === n) return 1;
                        if (n < r || void 0 === r) return -1
                    }
                    return a.index - e.index
                }), "value")
            }

            function e2(a, e) {
                return function(n, r, t) {
                    var i = e ? [
                        [],
                        []
                    ] : {};
                    return r = aJ(r, t), eI(n, function(e, t) {
                        var o = r(e, t, n);
                        a(i, e, o)
                    }), i
                }
            }
            var e3 = e2(function(a, e, n) {
                    V(a, n) ? a[n].push(e) : a[n] = [e]
                }),
                e0 = e2(function(a, e, n) {
                    a[n] = e
                }),
                e1 = e2(function(a, e, n) {
                    V(a, n) ? a[n]++ : a[n] = 1
                }),
                e4 = e2(function(a, e, n) {
                    a[n ? 0 : 1].push(e)
                }, !0);

            function e5(a) {
                return null == a ? 0 : ec(a) ? a.length : ao(a).length
            }

            function e6(a, e, n) {
                return e in n
            }
            var e8 = E(function(a, e) {
                    var n = {},
                        r = e[0];
                    if (null == a) return n;
                    G(r) ? (e.length > 1 && (r = aW(r, e[1])), e = ag(a)) : (r = e6, e = ep(e, !1, !1), a = Object(a));
                    for (var t = 0, i = e.length; t < i; t++) {
                        var o = e[t],
                            l = a[o];
                        r(l, o, a) && (n[o] = l)
                    }
                    return n
                }),
                e9 = E(function(a, e) {
                    var n, r = e[0];
                    return G(r) ? (r = eC(r), e.length > 1 && (n = e[1])) : (e = eD(ep(e, !1, !1), String), r = function(a, n) {
                        return !eH(e, n)
                    }), e8(a, r, n)
                });

            function e7(a, e, n) {
                return c.call(a, 0, Math.max(0, a.length - (null == e || n ? 1 : e)))
            }

            function na(a, e, n) {
                return null == a || a.length < 1 ? null == e || n ? void 0 : [] : null == e || n ? a[0] : e7(a, a.length - e)
            }

            function ne(a, e, n) {
                return c.call(a, null == e || n ? 1 : e)
            }

            function nn(a, e, n) {
                return null == a || a.length < 1 ? null == e || n ? void 0 : [] : null == e || n ? a[a.length - 1] : ne(a, Math.max(0, a.length - e))
            }

            function nr(a) {
                return eG(a, Boolean)
            }

            function nt(a, e) {
                return ep(a, e, !1)
            }
            var ni = E(function(a, e) {
                    return e = ep(e, !0, !0), eG(a, function(a) {
                        return !eH(e, a)
                    })
                }),
                no = E(function(a, e) {
                    return ni(a, e)
                });

            function nl(a, e, n, r) {
                O(e) || (r = n, n = e, e = !1), null != n && (n = aJ(n, r));
                for (var t = [], i = [], o = 0, l = at(a); o < l; o++) {
                    var s = a[o],
                        u = n ? n(s, o, a) : s;
                    e && !n ? (o && i === u || t.push(s), i = u) : n ? eH(i, u) || (i.push(u), t.push(s)) : eH(t, s) || t.push(s)
                }
                return t
            }
            var ns = E(function(a) {
                return nl(ep(a, !0, !0))
            });

            function nu(a) {
                for (var e = [], n = arguments.length, r = 0, t = at(a); r < t; r++) {
                    var i, o = a[r];
                    if (!eH(e, o)) {
                        for (i = 1; i < n && eH(arguments[i], o); i++);
                        i === n && e.push(o)
                    }
                }
                return e
            }

            function nc(a) {
                for (var e = a && eZ(a, at).length || 0, n = Array(e), r = 0; r < e; r++) n[r] = eW(a, r);
                return n
            }
            var np = E(nc);

            function nh(a, e) {
                for (var n = {}, r = 0, t = at(a); r < t; r++) e ? n[a[r]] = e[r] : n[a[r][0]] = a[r][1];
                return n
            }

            function ng(a, e, n) {
                null == e && (e = a || 0, a = 0), n || (n = e < a ? -1 : 1);
                for (var r = Math.max(Math.ceil((e - a) / n), 0), t = Array(r), i = 0; i < r; i++, a += n) t[i] = a;
                return t
            }

            function nf(a, e) {
                if (null == e || e < 1) return [];
                for (var n = [], r = 0, t = a.length; r < t;) n.push(c.call(a, r, r += e));
                return n
            }

            function nm(a, e) {
                return a._chain ? au(e).chain() : e
            }

            function nd(a) {
                return eI(aB(a), function(e) {
                    var n = au[e] = a[e];
                    au.prototype[e] = function() {
                        var a = [this._wrapped];
                        return u.apply(a, arguments), nm(this, n.apply(au, a))
                    }
                }), au
            }
            eI(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
                var e = o[a];
                au.prototype[a] = function() {
                    var n = this._wrapped;
                    return null != n && (e.apply(n, arguments), ("shift" === a || "splice" === a) && 0 === n.length && delete n[0]), nm(this, n)
                }
            }), eI(["concat", "join", "slice"], function(a) {
                var e = o[a];
                au.prototype[a] = function() {
                    var a = this._wrapped;
                    return null != a && (a = e.apply(a, arguments)), nm(this, a)
                }
            });
            var nb = au,
                ny = nd(r);
            ny._ = ny;
            var nC = ny
        },
        65921: function(a) {
            "use strict";
            a.exports = JSON.parse('[{"alpha2":"AC","alpha3":"","countryCallingCodes":["+247"],"currencies":["USD"],"emoji":"","ioc":"SHP","languages":["eng"],"name":"Ascension Island","status":"reserved"},{"alpha2":"AD","alpha3":"AND","countryCallingCodes":["+376"],"currencies":["EUR"],"emoji":"\uD83C\uDDE6\uD83C\uDDE9","ioc":"AND","languages":["cat"],"name":"Andorra","status":"assigned"},{"alpha2":"AE","alpha3":"ARE","countryCallingCodes":["+971"],"currencies":["AED"],"emoji":"\uD83C\uDDE6\uD83C\uDDEA","ioc":"UAE","languages":["ara"],"name":"United Arab Emirates","status":"assigned"},{"alpha2":"AF","alpha3":"AFG","countryCallingCodes":["+93"],"currencies":["AFN"],"emoji":"\uD83C\uDDE6\uD83C\uDDEB","ioc":"AFG","languages":["pus"],"name":"Afghanistan","status":"assigned"},{"alpha2":"AG","alpha3":"ATG","countryCallingCodes":["+1 268"],"currencies":["XCD"],"emoji":"\uD83C\uDDE6\uD83C\uDDEC","ioc":"ANT","languages":["eng"],"name":"Antigua And Barbuda","status":"assigned"},{"alpha2":"AI","alpha3":"AIA","countryCallingCodes":["+1 264"],"currencies":["XCD"],"emoji":"\uD83C\uDDE6\uD83C\uDDEE","ioc":"","languages":["eng"],"name":"Anguilla","status":"assigned"},{"alpha2":"AI","alpha3":"AFI","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"French Afar and Issas","status":"deleted"},{"alpha2":"AL","alpha3":"ALB","countryCallingCodes":["+355"],"currencies":["ALL"],"emoji":"\uD83C\uDDE6\uD83C\uDDF1","ioc":"ALB","languages":["sqi"],"name":"Albania","status":"assigned"},{"alpha2":"AM","alpha3":"ARM","countryCallingCodes":["+374"],"currencies":["AMD"],"emoji":"\uD83C\uDDE6\uD83C\uDDF2","ioc":"ARM","languages":["hye","rus"],"name":"Armenia","status":"assigned"},{"alpha2":"AN","alpha3":"ANT","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Netherlands Antilles","status":"deleted"},{"alpha2":"AO","alpha3":"AGO","countryCallingCodes":["+244"],"currencies":["AOA"],"emoji":"\uD83C\uDDE6\uD83C\uDDF4","ioc":"ANG","languages":["por"],"name":"Angola","status":"assigned"},{"alpha2":"AQ","alpha3":"ATA","countryCallingCodes":["+672"],"currencies":[],"emoji":"\uD83C\uDDE6\uD83C\uDDF6","ioc":"","languages":[],"name":"Antarctica","status":"assigned"},{"alpha2":"AR","alpha3":"ARG","countryCallingCodes":["+54"],"currencies":["ARS"],"emoji":"\uD83C\uDDE6\uD83C\uDDF7","ioc":"ARG","languages":["spa"],"name":"Argentina","status":"assigned"},{"alpha2":"AS","alpha3":"ASM","countryCallingCodes":["+1 684"],"currencies":["USD"],"emoji":"\uD83C\uDDE6\uD83C\uDDF8","ioc":"ASA","languages":["eng","smo"],"name":"American Samoa","status":"assigned"},{"alpha2":"AT","alpha3":"AUT","countryCallingCodes":["+43"],"currencies":["EUR"],"emoji":"\uD83C\uDDE6\uD83C\uDDF9","ioc":"AUT","languages":["deu"],"name":"Austria","status":"assigned"},{"alpha2":"AU","alpha3":"AUS","countryCallingCodes":["+61"],"currencies":["AUD"],"emoji":"\uD83C\uDDE6\uD83C\uDDFA","ioc":"AUS","languages":["eng"],"name":"Australia","status":"assigned"},{"alpha2":"AW","alpha3":"ABW","countryCallingCodes":["+297"],"currencies":["AWG"],"emoji":"\uD83C\uDDE6\uD83C\uDDFC","ioc":"ARU","languages":["nld"],"name":"Aruba","status":"assigned"},{"alpha2":"AX","alpha3":"ALA","countryCallingCodes":["+358"],"currencies":["EUR"],"emoji":"\uD83C\uDDE6\uD83C\uDDFD","ioc":"","languages":["swe"],"name":"\xc5land Islands","status":"assigned"},{"alpha2":"AZ","alpha3":"AZE","countryCallingCodes":["+994"],"currencies":["AZN"],"emoji":"\uD83C\uDDE6\uD83C\uDDFF","ioc":"AZE","languages":["aze"],"name":"Azerbaijan","status":"assigned"},{"alpha2":"BA","alpha3":"BIH","countryCallingCodes":["+387"],"currencies":["BAM"],"emoji":"\uD83C\uDDE7\uD83C\uDDE6","ioc":"BIH","languages":["bos","cre","srp"],"name":"Bosnia & Herzegovina","status":"assigned"},{"alpha2":"BB","alpha3":"BRB","countryCallingCodes":["+1 246"],"currencies":["BBD"],"emoji":"\uD83C\uDDE7\uD83C\uDDE7","ioc":"BAR","languages":["eng"],"name":"Barbados","status":"assigned"},{"alpha2":"BD","alpha3":"BGD","countryCallingCodes":["+880"],"currencies":["BDT"],"emoji":"\uD83C\uDDE7\uD83C\uDDE9","ioc":"BAN","languages":["ben"],"name":"Bangladesh","status":"assigned"},{"alpha2":"BE","alpha3":"BEL","countryCallingCodes":["+32"],"currencies":["EUR"],"emoji":"\uD83C\uDDE7\uD83C\uDDEA","ioc":"BEL","languages":["nld","fra","deu"],"name":"Belgium","status":"assigned"},{"alpha2":"BF","alpha3":"BFA","countryCallingCodes":["+226"],"currencies":["XOF"],"emoji":"\uD83C\uDDE7\uD83C\uDDEB","ioc":"BUR","languages":["fra"],"name":"Burkina Faso","status":"assigned"},{"alpha2":"BG","alpha3":"BGR","countryCallingCodes":["+359"],"currencies":["BGN"],"emoji":"\uD83C\uDDE7\uD83C\uDDEC","ioc":"BUL","languages":["bul"],"name":"Bulgaria","status":"assigned"},{"alpha2":"BH","alpha3":"BHR","countryCallingCodes":["+973"],"currencies":["BHD"],"emoji":"\uD83C\uDDE7\uD83C\uDDED","ioc":"BRN","languages":["ara"],"name":"Bahrain","status":"assigned"},{"alpha2":"BI","alpha3":"BDI","countryCallingCodes":["+257"],"currencies":["BIF"],"emoji":"\uD83C\uDDE7\uD83C\uDDEE","ioc":"BDI","languages":["fra"],"name":"Burundi","status":"assigned"},{"alpha2":"BJ","alpha3":"BEN","countryCallingCodes":["+229"],"currencies":["XOF"],"emoji":"\uD83C\uDDE7\uD83C\uDDEF","ioc":"BEN","languages":["fra"],"name":"Benin","status":"assigned"},{"alpha2":"BL","alpha3":"BLM","countryCallingCodes":["+590"],"currencies":["EUR"],"emoji":"\uD83C\uDDE7\uD83C\uDDF1","ioc":"","languages":["fra"],"name":"Saint Barth\xe9lemy","status":"assigned"},{"alpha2":"BM","alpha3":"BMU","countryCallingCodes":["+1 441"],"currencies":["BMD"],"emoji":"\uD83C\uDDE7\uD83C\uDDF2","ioc":"BER","languages":["eng"],"name":"Bermuda","status":"assigned"},{"alpha2":"BN","alpha3":"BRN","countryCallingCodes":["+673"],"currencies":["BND"],"emoji":"\uD83C\uDDE7\uD83C\uDDF3","ioc":"BRU","languages":["msa","eng"],"name":"Brunei Darussalam","status":"assigned"},{"alpha2":"BO","alpha3":"BOL","countryCallingCodes":["+591"],"currencies":["BOB","BOV"],"emoji":"\uD83C\uDDE7\uD83C\uDDF4","ioc":"BOL","languages":["spa","aym","que"],"name":"Bolivia, Plurinational State Of","status":"assigned"},{"alpha2":"BQ","alpha3":"BES","countryCallingCodes":["+599"],"currencies":["USD"],"emoji":"\uD83C\uDDE7\uD83C\uDDF6","ioc":"","languages":["nld"],"name":"Bonaire, Saint Eustatius And Saba","status":"assigned"},{"alpha2":"BQ","alpha3":"ATB","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"British Antarctic Territory","status":"deleted"},{"alpha2":"BR","alpha3":"BRA","countryCallingCodes":["+55"],"currencies":["BRL"],"emoji":"\uD83C\uDDE7\uD83C\uDDF7","ioc":"BRA","languages":["por"],"name":"Brazil","status":"assigned"},{"alpha2":"BS","alpha3":"BHS","countryCallingCodes":["+1 242"],"currencies":["BSD"],"emoji":"\uD83C\uDDE7\uD83C\uDDF8","ioc":"BAH","languages":["eng"],"name":"Bahamas","status":"assigned"},{"alpha2":"BT","alpha3":"BTN","countryCallingCodes":["+975"],"currencies":["INR","BTN"],"emoji":"\uD83C\uDDE7\uD83C\uDDF9","ioc":"BHU","languages":["dzo"],"name":"Bhutan","status":"assigned"},{"alpha2":"BU","alpha3":"BUR","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Burma","status":"deleted"},{"alpha2":"BV","alpha3":"BVT","countryCallingCodes":[],"currencies":["NOK"],"emoji":"\uD83C\uDDE7\uD83C\uDDFB","ioc":"","languages":[],"name":"Bouvet Island","status":"assigned"},{"alpha2":"BW","alpha3":"BWA","countryCallingCodes":["+267"],"currencies":["BWP"],"emoji":"\uD83C\uDDE7\uD83C\uDDFC","ioc":"BOT","languages":["eng","tsn"],"name":"Botswana","status":"assigned"},{"alpha2":"BY","alpha3":"BLR","countryCallingCodes":["+375"],"currencies":["BYR"],"emoji":"\uD83C\uDDE7\uD83C\uDDFE","ioc":"BLR","languages":["bel","rus"],"name":"Belarus","status":"assigned"},{"alpha2":"BY","alpha3":"BYS","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Byelorussian SSR","status":"deleted"},{"alpha2":"BZ","alpha3":"BLZ","countryCallingCodes":["+501"],"currencies":["BZD"],"emoji":"\uD83C\uDDE7\uD83C\uDDFF","ioc":"BIZ","languages":["eng"],"name":"Belize","status":"assigned"},{"alpha2":"CA","alpha3":"CAN","countryCallingCodes":["+1"],"currencies":["CAD"],"emoji":"\uD83C\uDDE8\uD83C\uDDE6","ioc":"CAN","languages":["eng","fra"],"name":"Canada","status":"assigned"},{"alpha2":"CC","alpha3":"CCK","countryCallingCodes":["+61"],"currencies":["AUD"],"emoji":"\uD83C\uDDE8\uD83C\uDDE8","ioc":"","languages":["eng"],"name":"Cocos (Keeling) Islands","status":"assigned"},{"alpha2":"CD","alpha3":"COD","countryCallingCodes":["+243"],"currencies":["CDF"],"emoji":"\uD83C\uDDE8\uD83C\uDDE9","ioc":"COD","languages":["fra","lin","kon","swa"],"name":"Democratic Republic Of Congo","status":"assigned"},{"alpha2":"CF","alpha3":"CAF","countryCallingCodes":["+236"],"currencies":["XAF"],"emoji":"\uD83C\uDDE8\uD83C\uDDEB","ioc":"CAF","languages":["fra","sag"],"name":"Central African Republic","status":"assigned"},{"alpha2":"CG","alpha3":"COG","countryCallingCodes":["+242"],"currencies":["XAF"],"emoji":"\uD83C\uDDE8\uD83C\uDDEC","ioc":"CGO","languages":["fra","lin"],"name":"Republic Of Congo","status":"assigned"},{"alpha2":"CH","alpha3":"CHE","countryCallingCodes":["+41"],"currencies":["CHF","CHE","CHW"],"emoji":"\uD83C\uDDE8\uD83C\uDDED","ioc":"SUI","languages":["deu","fra","ita","roh"],"name":"Switzerland","status":"assigned"},{"alpha2":"CI","alpha3":"CIV","countryCallingCodes":["+225"],"currencies":["XOF"],"emoji":"\uD83C\uDDE8\uD83C\uDDEE","ioc":"CIV","languages":["fra"],"name":"C\xf4te d\'Ivoire","status":"assigned"},{"alpha2":"CK","alpha3":"COK","countryCallingCodes":["+682"],"currencies":["NZD"],"emoji":"\uD83C\uDDE8\uD83C\uDDF0","ioc":"COK","languages":["eng","mri"],"name":"Cook Islands","status":"assigned"},{"alpha2":"CL","alpha3":"CHL","countryCallingCodes":["+56"],"currencies":["CLP","CLF"],"emoji":"\uD83C\uDDE8\uD83C\uDDF1","ioc":"CHI","languages":["spa"],"name":"Chile","status":"assigned"},{"alpha2":"CM","alpha3":"CMR","countryCallingCodes":["+237"],"currencies":["XAF"],"emoji":"\uD83C\uDDE8\uD83C\uDDF2","ioc":"CMR","languages":["eng","fra"],"name":"Cameroon","status":"assigned"},{"alpha2":"CN","alpha3":"CHN","countryCallingCodes":["+86"],"currencies":["CNY"],"emoji":"\uD83C\uDDE8\uD83C\uDDF3","ioc":"CHN","languages":["zho"],"name":"China","status":"assigned"},{"alpha2":"CO","alpha3":"COL","countryCallingCodes":["+57"],"currencies":["COP","COU"],"emoji":"\uD83C\uDDE8\uD83C\uDDF4","ioc":"COL","languages":["spa"],"name":"Colombia","status":"assigned"},{"alpha2":"CP","alpha3":"","countryCallingCodes":[],"currencies":["EUR"],"emoji":"","ioc":"","languages":[],"name":"Clipperton Island","status":"reserved"},{"alpha2":"CR","alpha3":"CRI","countryCallingCodes":["+506"],"currencies":["CRC"],"emoji":"\uD83C\uDDE8\uD83C\uDDF7","ioc":"CRC","languages":["spa"],"name":"Costa Rica","status":"assigned"},{"alpha2":"CS","alpha3":"CSK","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Czechoslovakia","status":"deleted"},{"alpha2":"CS","alpha3":"SCG","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Serbia and Montenegro","status":"deleted"},{"alpha2":"CT","alpha3":"CTE","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Canton and Enderbury Islands","status":"deleted"},{"alpha2":"CU","alpha3":"CUB","countryCallingCodes":["+53"],"currencies":["CUP","CUC"],"emoji":"\uD83C\uDDE8\uD83C\uDDFA","ioc":"CUB","languages":["spa"],"name":"Cuba","status":"assigned"},{"alpha2":"CV","alpha3":"CPV","countryCallingCodes":["+238"],"currencies":["CVE"],"emoji":"\uD83C\uDDE8\uD83C\uDDFB","ioc":"CPV","languages":["por"],"name":"Cabo Verde","status":"assigned"},{"alpha2":"CW","alpha3":"CUW","countryCallingCodes":["+599"],"currencies":["ANG"],"emoji":"\uD83C\uDDE8\uD83C\uDDFC","ioc":"","languages":["nld"],"name":"Curacao","status":"assigned"},{"alpha2":"CX","alpha3":"CXR","countryCallingCodes":["+61"],"currencies":["AUD"],"emoji":"\uD83C\uDDE8\uD83C\uDDFD","ioc":"","languages":["eng"],"name":"Christmas Island","status":"assigned"},{"alpha2":"CY","alpha3":"CYP","countryCallingCodes":["+357"],"currencies":["EUR"],"emoji":"\uD83C\uDDE8\uD83C\uDDFE","ioc":"CYP","languages":["ell","tur"],"name":"Cyprus","status":"assigned"},{"alpha2":"CZ","alpha3":"CZE","countryCallingCodes":["+420"],"currencies":["CZK"],"emoji":"\uD83C\uDDE8\uD83C\uDDFF","ioc":"CZE","languages":["ces"],"name":"Czech Republic","status":"assigned"},{"alpha2":"DD","alpha3":"DDR","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"German Democratic Republic","status":"deleted"},{"alpha2":"DE","alpha3":"DEU","countryCallingCodes":["+49"],"currencies":["EUR"],"emoji":"\uD83C\uDDE9\uD83C\uDDEA","ioc":"GER","languages":["deu"],"name":"Germany","status":"assigned"},{"alpha2":"DG","alpha3":"","countryCallingCodes":[],"currencies":["USD"],"emoji":"","ioc":"","languages":[],"name":"Diego Garcia","status":"reserved"},{"alpha2":"DJ","alpha3":"DJI","countryCallingCodes":["+253"],"currencies":["DJF"],"emoji":"\uD83C\uDDE9\uD83C\uDDEF","ioc":"DJI","languages":["ara","fra"],"name":"Djibouti","status":"assigned"},{"alpha2":"DK","alpha3":"DNK","countryCallingCodes":["+45"],"currencies":["DKK"],"emoji":"\uD83C\uDDE9\uD83C\uDDF0","ioc":"DEN","languages":["dan"],"name":"Denmark","status":"assigned"},{"alpha2":"DM","alpha3":"DMA","countryCallingCodes":["+1 767"],"currencies":["XCD"],"emoji":"\uD83C\uDDE9\uD83C\uDDF2","ioc":"DMA","languages":["eng"],"name":"Dominica","status":"assigned"},{"alpha2":"DO","alpha3":"DOM","countryCallingCodes":["+1 809","+1 829","+1 849"],"currencies":["DOP"],"emoji":"\uD83C\uDDE9\uD83C\uDDF4","ioc":"DOM","languages":["spa"],"name":"Dominican Republic","status":"assigned"},{"alpha2":"DY","alpha3":"DHY","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Dahomey","status":"deleted"},{"alpha2":"DZ","alpha3":"DZA","countryCallingCodes":["+213"],"currencies":["DZD"],"emoji":"\uD83C\uDDE9\uD83C\uDDFF","ioc":"ALG","languages":["ara"],"name":"Algeria","status":"assigned"},{"alpha2":"EA","alpha3":"","countryCallingCodes":[],"currencies":["EUR"],"emoji":"","ioc":"","languages":[],"name":"Ceuta, Mulilla","status":"reserved"},{"alpha2":"EC","alpha3":"ECU","countryCallingCodes":["+593"],"currencies":["USD"],"emoji":"\uD83C\uDDEA\uD83C\uDDE8","ioc":"ECU","languages":["spa","que"],"name":"Ecuador","status":"assigned"},{"alpha2":"EE","alpha3":"EST","countryCallingCodes":["+372"],"currencies":["EUR"],"emoji":"\uD83C\uDDEA\uD83C\uDDEA","ioc":"EST","languages":["est"],"name":"Estonia","status":"assigned"},{"alpha2":"EG","alpha3":"EGY","countryCallingCodes":["+20"],"currencies":["EGP"],"emoji":"\uD83C\uDDEA\uD83C\uDDEC","ioc":"EGY","languages":["ara"],"name":"Egypt","status":"assigned"},{"alpha2":"EH","alpha3":"ESH","countryCallingCodes":["+212"],"currencies":["MAD"],"emoji":"\uD83C\uDDEA\uD83C\uDDED","ioc":"","languages":[],"name":"Western Sahara","status":"assigned"},{"alpha2":"ER","alpha3":"ERI","countryCallingCodes":["+291"],"currencies":["ERN"],"emoji":"\uD83C\uDDEA\uD83C\uDDF7","ioc":"ERI","languages":["eng","ara","tir"],"name":"Eritrea","status":"assigned"},{"alpha2":"ES","alpha3":"ESP","countryCallingCodes":["+34"],"currencies":["EUR"],"emoji":"\uD83C\uDDEA\uD83C\uDDF8","ioc":"ESP","languages":["spa"],"name":"Spain","status":"assigned"},{"alpha2":"ET","alpha3":"ETH","countryCallingCodes":["+251"],"currencies":["ETB"],"emoji":"\uD83C\uDDEA\uD83C\uDDF9","ioc":"ETH","languages":["amh"],"name":"Ethiopia","status":"assigned"},{"alpha2":"EU","alpha3":"","countryCallingCodes":["+388"],"currencies":["EUR"],"emoji":"\uD83C\uDDEA\uD83C\uDDFA","ioc":"","languages":[],"name":"European Union","status":"reserved"},{"alpha2":"FI","alpha3":"FIN","countryCallingCodes":["+358"],"currencies":["EUR"],"emoji":"\uD83C\uDDEB\uD83C\uDDEE","ioc":"FIN","languages":["fin","swe"],"name":"Finland","status":"assigned"},{"alpha2":"FJ","alpha3":"FJI","countryCallingCodes":["+679"],"currencies":["FJD"],"emoji":"\uD83C\uDDEB\uD83C\uDDEF","ioc":"FIJ","languages":["eng","fij"],"name":"Fiji","status":"assigned"},{"alpha2":"FK","alpha3":"FLK","countryCallingCodes":["+500"],"currencies":["FKP"],"emoji":"\uD83C\uDDEB\uD83C\uDDF0","ioc":"","languages":["eng"],"name":"Falkland Islands","status":"assigned"},{"alpha2":"FM","alpha3":"FSM","countryCallingCodes":["+691"],"currencies":["USD"],"emoji":"\uD83C\uDDEB\uD83C\uDDF2","ioc":"FSM","languages":["eng"],"name":"Micronesia, Federated States Of","status":"assigned"},{"alpha2":"FO","alpha3":"FRO","countryCallingCodes":["+298"],"currencies":["DKK"],"emoji":"\uD83C\uDDEB\uD83C\uDDF4","ioc":"FAI","languages":["fao","dan"],"name":"Faroe Islands","status":"assigned"},{"alpha2":"FQ","alpha3":"ATF","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"French Southern and Antarctic Territories","status":"deleted"},{"alpha2":"FR","alpha3":"FRA","countryCallingCodes":["+33"],"currencies":["EUR"],"emoji":"\uD83C\uDDEB\uD83C\uDDF7","ioc":"FRA","languages":["fra"],"name":"France","status":"assigned"},{"alpha2":"FX","alpha3":"","countryCallingCodes":["+241"],"currencies":["EUR"],"emoji":"","ioc":"","languages":["fra"],"name":"France, Metropolitan","status":"reserved"},{"alpha2":"GA","alpha3":"GAB","countryCallingCodes":["+241"],"currencies":["XAF"],"emoji":"\uD83C\uDDEC\uD83C\uDDE6","ioc":"GAB","languages":["fra"],"name":"Gabon","status":"assigned"},{"alpha2":"GB","alpha3":"GBR","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"\uD83C\uDDEC\uD83C\uDDE7","ioc":"GBR","languages":["eng","cor","gle","gla","cym"],"name":"United Kingdom","status":"assigned"},{"alpha2":"GD","alpha3":"GRD","countryCallingCodes":["+473"],"currencies":["XCD"],"emoji":"\uD83C\uDDEC\uD83C\uDDE9","ioc":"GRN","languages":["eng"],"name":"Grenada","status":"assigned"},{"alpha2":"GE","alpha3":"GEO","countryCallingCodes":["+995"],"currencies":["GEL"],"emoji":"\uD83C\uDDEC\uD83C\uDDEA","ioc":"GEO","languages":["kat"],"name":"Georgia","status":"assigned"},{"alpha2":"GE","alpha3":"GEL","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Gilbert and Ellice Islands","status":"deleted"},{"alpha2":"GF","alpha3":"GUF","countryCallingCodes":["+594"],"currencies":["EUR"],"emoji":"\uD83C\uDDEC\uD83C\uDDEB","ioc":"","languages":["fra"],"name":"French Guiana","status":"assigned"},{"alpha2":"GG","alpha3":"GGY","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"\uD83C\uDDEC\uD83C\uDDEC","ioc":"GCI","languages":["fra"],"name":"Guernsey","status":"assigned"},{"alpha2":"GH","alpha3":"GHA","countryCallingCodes":["+233"],"currencies":["GHS"],"emoji":"\uD83C\uDDEC\uD83C\uDDED","ioc":"GHA","languages":["eng"],"name":"Ghana","status":"assigned"},{"alpha2":"GI","alpha3":"GIB","countryCallingCodes":["+350"],"currencies":["GIP"],"emoji":"\uD83C\uDDEC\uD83C\uDDEE","ioc":"","languages":["eng"],"name":"Gibraltar","status":"assigned"},{"alpha2":"GL","alpha3":"GRL","countryCallingCodes":["+299"],"currencies":["DKK"],"emoji":"\uD83C\uDDEC\uD83C\uDDF1","ioc":"","languages":["kal"],"name":"Greenland","status":"assigned"},{"alpha2":"GM","alpha3":"GMB","countryCallingCodes":["+220"],"currencies":["GMD"],"emoji":"\uD83C\uDDEC\uD83C\uDDF2","ioc":"GAM","languages":["eng"],"name":"Gambia","status":"assigned"},{"alpha2":"GN","alpha3":"GIN","countryCallingCodes":["+224"],"currencies":["GNF"],"emoji":"\uD83C\uDDEC\uD83C\uDDF3","ioc":"GUI","languages":["fra"],"name":"Guinea","status":"assigned"},{"alpha2":"GP","alpha3":"GLP","countryCallingCodes":["+590"],"currencies":["EUR"],"emoji":"\uD83C\uDDEC\uD83C\uDDF5","ioc":"","languages":["fra"],"name":"Guadeloupe","status":"assigned"},{"alpha2":"GQ","alpha3":"GNQ","countryCallingCodes":["+240"],"currencies":["XAF"],"emoji":"\uD83C\uDDEC\uD83C\uDDF6","ioc":"GEQ","languages":["spa","fra","por"],"name":"Equatorial Guinea","status":"assigned"},{"alpha2":"GR","alpha3":"GRC","countryCallingCodes":["+30"],"currencies":["EUR"],"emoji":"\uD83C\uDDEC\uD83C\uDDF7","ioc":"GRE","languages":["ell"],"name":"Greece","status":"assigned"},{"alpha2":"GS","alpha3":"SGS","countryCallingCodes":[],"currencies":["GBP"],"emoji":"\uD83C\uDDEC\uD83C\uDDF8","ioc":"","languages":["eng"],"name":"South Georgia And The South Sandwich Islands","status":"assigned"},{"alpha2":"GT","alpha3":"GTM","countryCallingCodes":["+502"],"currencies":["GTQ"],"emoji":"\uD83C\uDDEC\uD83C\uDDF9","ioc":"GUA","languages":["spa"],"name":"Guatemala","status":"assigned"},{"alpha2":"GU","alpha3":"GUM","countryCallingCodes":["+1 671"],"currencies":["USD"],"emoji":"\uD83C\uDDEC\uD83C\uDDFA","ioc":"GUM","languages":["eng"],"name":"Guam","status":"assigned"},{"alpha2":"GW","alpha3":"GNB","countryCallingCodes":["+245"],"currencies":["XOF"],"emoji":"\uD83C\uDDEC\uD83C\uDDFC","ioc":"GBS","languages":["por"],"name":"Guinea-bissau","status":"assigned"},{"alpha2":"GY","alpha3":"GUY","countryCallingCodes":["+592"],"currencies":["GYD"],"emoji":"\uD83C\uDDEC\uD83C\uDDFE","ioc":"GUY","languages":["eng"],"name":"Guyana","status":"assigned"},{"alpha2":"HK","alpha3":"HKG","countryCallingCodes":["+852"],"currencies":["HKD"],"emoji":"\uD83C\uDDED\uD83C\uDDF0","ioc":"HKG","languages":["zho","eng"],"name":"Hong Kong","status":"assigned"},{"alpha2":"HM","alpha3":"HMD","countryCallingCodes":[],"currencies":["AUD"],"emoji":"\uD83C\uDDED\uD83C\uDDF2","ioc":"","languages":[],"name":"Heard Island And McDonald Islands","status":"assigned"},{"alpha2":"HN","alpha3":"HND","countryCallingCodes":["+504"],"currencies":["HNL"],"emoji":"\uD83C\uDDED\uD83C\uDDF3","ioc":"HON","languages":["spa"],"name":"Honduras","status":"assigned"},{"alpha2":"HR","alpha3":"HRV","countryCallingCodes":["+385"],"currencies":["HRK"],"emoji":"\uD83C\uDDED\uD83C\uDDF7","ioc":"CRO","languages":["hrv"],"name":"Croatia","status":"assigned"},{"alpha2":"HT","alpha3":"HTI","countryCallingCodes":["+509"],"currencies":["HTG","USD"],"emoji":"\uD83C\uDDED\uD83C\uDDF9","ioc":"HAI","languages":["fra","hat"],"name":"Haiti","status":"assigned"},{"alpha2":"HU","alpha3":"HUN","countryCallingCodes":["+36"],"currencies":["HUF"],"emoji":"\uD83C\uDDED\uD83C\uDDFA","ioc":"HUN","languages":["hun"],"name":"Hungary","status":"assigned"},{"alpha2":"HV","alpha3":"HVO","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Upper Volta","status":"deleted"},{"alpha2":"IC","alpha3":"","countryCallingCodes":[],"currencies":["EUR"],"emoji":"","ioc":"","languages":[],"name":"Canary Islands","status":"reserved"},{"alpha2":"ID","alpha3":"IDN","countryCallingCodes":["+62"],"currencies":["IDR"],"emoji":"\uD83C\uDDEE\uD83C\uDDE9","ioc":"INA","languages":["ind"],"name":"Indonesia","status":"assigned"},{"alpha2":"IE","alpha3":"IRL","countryCallingCodes":["+353"],"currencies":["EUR"],"emoji":"\uD83C\uDDEE\uD83C\uDDEA","ioc":"IRL","languages":["eng","gle"],"name":"Ireland","status":"assigned"},{"alpha2":"IL","alpha3":"ISR","countryCallingCodes":["+972"],"currencies":["ILS"],"emoji":"\uD83C\uDDEE\uD83C\uDDF1","ioc":"ISR","languages":["heb","ara","eng"],"name":"Israel","status":"assigned"},{"alpha2":"IM","alpha3":"IMN","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"\uD83C\uDDEE\uD83C\uDDF2","ioc":"","languages":["eng","glv"],"name":"Isle Of Man","status":"assigned"},{"alpha2":"IN","alpha3":"IND","countryCallingCodes":["+91"],"currencies":["INR"],"emoji":"\uD83C\uDDEE\uD83C\uDDF3","ioc":"IND","languages":["eng","hin"],"name":"India","status":"assigned"},{"alpha2":"IO","alpha3":"IOT","countryCallingCodes":["+246"],"currencies":["USD"],"emoji":"\uD83C\uDDEE\uD83C\uDDF4","ioc":"","languages":["eng"],"name":"British Indian Ocean Territory","status":"assigned"},{"alpha2":"IQ","alpha3":"IRQ","countryCallingCodes":["+964"],"currencies":["IQD"],"emoji":"\uD83C\uDDEE\uD83C\uDDF6","ioc":"IRQ","languages":["ara","kur"],"name":"Iraq","status":"assigned"},{"alpha2":"IR","alpha3":"IRN","countryCallingCodes":["+98"],"currencies":["IRR"],"emoji":"\uD83C\uDDEE\uD83C\uDDF7","ioc":"IRI","languages":["fas"],"name":"Iran, Islamic Republic Of","status":"assigned"},{"alpha2":"IS","alpha3":"ISL","countryCallingCodes":["+354"],"currencies":["ISK"],"emoji":"\uD83C\uDDEE\uD83C\uDDF8","ioc":"ISL","languages":["isl"],"name":"Iceland","status":"assigned"},{"alpha2":"IT","alpha3":"ITA","countryCallingCodes":["+39"],"currencies":["EUR"],"emoji":"\uD83C\uDDEE\uD83C\uDDF9","ioc":"ITA","languages":["ita"],"name":"Italy","status":"assigned"},{"alpha2":"JE","alpha3":"JEY","countryCallingCodes":["+44"],"currencies":["GBP"],"emoji":"\uD83C\uDDEF\uD83C\uDDEA","ioc":"JCI","languages":["eng","fra"],"name":"Jersey","status":"assigned"},{"alpha2":"JM","alpha3":"JAM","countryCallingCodes":["+1 876"],"currencies":["JMD"],"emoji":"\uD83C\uDDEF\uD83C\uDDF2","ioc":"JAM","languages":["eng"],"name":"Jamaica","status":"assigned"},{"alpha2":"JO","alpha3":"JOR","countryCallingCodes":["+962"],"currencies":["JOD"],"emoji":"\uD83C\uDDEF\uD83C\uDDF4","ioc":"JOR","languages":["ara"],"name":"Jordan","status":"assigned"},{"alpha2":"JP","alpha3":"JPN","countryCallingCodes":["+81"],"currencies":["JPY"],"emoji":"\uD83C\uDDEF\uD83C\uDDF5","ioc":"JPN","languages":["jpn"],"name":"Japan","status":"assigned"},{"alpha2":"JT","alpha3":"JTN","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Johnston Island","status":"deleted"},{"alpha2":"KE","alpha3":"KEN","countryCallingCodes":["+254"],"currencies":["KES"],"emoji":"\uD83C\uDDF0\uD83C\uDDEA","ioc":"KEN","languages":["eng","swa"],"name":"Kenya","status":"assigned"},{"alpha2":"KG","alpha3":"KGZ","countryCallingCodes":["+996"],"currencies":["KGS"],"emoji":"\uD83C\uDDF0\uD83C\uDDEC","ioc":"KGZ","languages":["rus"],"name":"Kyrgyzstan","status":"assigned"},{"alpha2":"KH","alpha3":"KHM","countryCallingCodes":["+855"],"currencies":["KHR"],"emoji":"\uD83C\uDDF0\uD83C\uDDED","ioc":"CAM","languages":["khm"],"name":"Cambodia","status":"assigned"},{"alpha2":"KI","alpha3":"KIR","countryCallingCodes":["+686"],"currencies":["AUD"],"emoji":"\uD83C\uDDF0\uD83C\uDDEE","ioc":"KIR","languages":["eng"],"name":"Kiribati","status":"assigned"},{"alpha2":"KM","alpha3":"COM","countryCallingCodes":["+269"],"currencies":["KMF"],"emoji":"\uD83C\uDDF0\uD83C\uDDF2","ioc":"COM","languages":["ara","fra"],"name":"Comoros","status":"assigned"},{"alpha2":"KN","alpha3":"KNA","countryCallingCodes":["+1 869"],"currencies":["XCD"],"emoji":"\uD83C\uDDF0\uD83C\uDDF3","ioc":"SKN","languages":["eng"],"name":"Saint Kitts And Nevis","status":"assigned"},{"alpha2":"KP","alpha3":"PRK","countryCallingCodes":["+850"],"currencies":["KPW"],"emoji":"\uD83C\uDDF0\uD83C\uDDF5","ioc":"PRK","languages":["kor"],"name":"Korea, Democratic People\'s Republic Of","status":"assigned"},{"alpha2":"KR","alpha3":"KOR","countryCallingCodes":["+82"],"currencies":["KRW"],"emoji":"\uD83C\uDDF0\uD83C\uDDF7","ioc":"KOR","languages":["kor"],"name":"Korea, Republic Of","status":"assigned"},{"alpha2":"KW","alpha3":"KWT","countryCallingCodes":["+965"],"currencies":["KWD"],"emoji":"\uD83C\uDDF0\uD83C\uDDFC","ioc":"KUW","languages":["ara"],"name":"Kuwait","status":"assigned"},{"alpha2":"KY","alpha3":"CYM","countryCallingCodes":["+1 345"],"currencies":["KYD"],"emoji":"\uD83C\uDDF0\uD83C\uDDFE","ioc":"CAY","languages":["eng"],"name":"Cayman Islands","status":"assigned"},{"alpha2":"KZ","alpha3":"KAZ","countryCallingCodes":["+7","+7 6","+7 7"],"currencies":["KZT"],"emoji":"\uD83C\uDDF0\uD83C\uDDFF","ioc":"KAZ","languages":["kaz","rus"],"name":"Kazakhstan","status":"assigned"},{"alpha2":"LA","alpha3":"LAO","countryCallingCodes":["+856"],"currencies":["LAK"],"emoji":"\uD83C\uDDF1\uD83C\uDDE6","ioc":"LAO","languages":["lao"],"name":"Lao People\'s Democratic Republic","status":"assigned"},{"alpha2":"LB","alpha3":"LBN","countryCallingCodes":["+961"],"currencies":["LBP"],"emoji":"\uD83C\uDDF1\uD83C\uDDE7","ioc":"LIB","languages":["ara","hye"],"name":"Lebanon","status":"assigned"},{"alpha2":"LC","alpha3":"LCA","countryCallingCodes":["+1 758"],"currencies":["XCD"],"emoji":"\uD83C\uDDF1\uD83C\uDDE8","ioc":"LCA","languages":["eng"],"name":"Saint Lucia","status":"assigned"},{"alpha2":"LI","alpha3":"LIE","countryCallingCodes":["+423"],"currencies":["CHF"],"emoji":"\uD83C\uDDF1\uD83C\uDDEE","ioc":"LIE","languages":["deu"],"name":"Liechtenstein","status":"assigned"},{"alpha2":"LK","alpha3":"LKA","countryCallingCodes":["+94"],"currencies":["LKR"],"emoji":"\uD83C\uDDF1\uD83C\uDDF0","ioc":"SRI","languages":["sin","tam"],"name":"Sri Lanka","status":"assigned"},{"alpha2":"LR","alpha3":"LBR","countryCallingCodes":["+231"],"currencies":["LRD"],"emoji":"\uD83C\uDDF1\uD83C\uDDF7","ioc":"LBR","languages":["eng"],"name":"Liberia","status":"assigned"},{"alpha2":"LS","alpha3":"LSO","countryCallingCodes":["+266"],"currencies":["LSL","ZAR"],"emoji":"\uD83C\uDDF1\uD83C\uDDF8","ioc":"LES","languages":["eng","sot"],"name":"Lesotho","status":"assigned"},{"alpha2":"LT","alpha3":"LTU","countryCallingCodes":["+370"],"currencies":["EUR"],"emoji":"\uD83C\uDDF1\uD83C\uDDF9","ioc":"LTU","languages":["lit"],"name":"Lithuania","status":"assigned"},{"alpha2":"LU","alpha3":"LUX","countryCallingCodes":["+352"],"currencies":["EUR"],"emoji":"\uD83C\uDDF1\uD83C\uDDFA","ioc":"LUX","languages":["fra","deu","ltz"],"name":"Luxembourg","status":"assigned"},{"alpha2":"LV","alpha3":"LVA","countryCallingCodes":["+371"],"currencies":["EUR"],"emoji":"\uD83C\uDDF1\uD83C\uDDFB","ioc":"LAT","languages":["lav"],"name":"Latvia","status":"assigned"},{"alpha2":"LY","alpha3":"LBY","countryCallingCodes":["+218"],"currencies":["LYD"],"emoji":"\uD83C\uDDF1\uD83C\uDDFE","ioc":"LBA","languages":["ara"],"name":"Libya","status":"assigned"},{"alpha2":"MA","alpha3":"MAR","countryCallingCodes":["+212"],"currencies":["MAD"],"emoji":"\uD83C\uDDF2\uD83C\uDDE6","ioc":"MAR","languages":["ara"],"name":"Morocco","status":"assigned"},{"alpha2":"MC","alpha3":"MCO","countryCallingCodes":["+377"],"currencies":["EUR"],"emoji":"\uD83C\uDDF2\uD83C\uDDE8","ioc":"MON","languages":["fra"],"name":"Monaco","status":"assigned"},{"alpha2":"MD","alpha3":"MDA","countryCallingCodes":["+373"],"currencies":["MDL"],"emoji":"\uD83C\uDDF2\uD83C\uDDE9","ioc":"MDA","languages":["ron"],"name":"Moldova","status":"assigned"},{"alpha2":"ME","alpha3":"MNE","countryCallingCodes":["+382"],"currencies":["EUR"],"emoji":"\uD83C\uDDF2\uD83C\uDDEA","ioc":"MNE","languages":["mot"],"name":"Montenegro","status":"assigned"},{"alpha2":"MF","alpha3":"MAF","countryCallingCodes":["+590"],"currencies":["EUR"],"emoji":"\uD83C\uDDF2\uD83C\uDDEB","ioc":"","languages":["fra"],"name":"Saint Martin","status":"assigned"},{"alpha2":"MG","alpha3":"MDG","countryCallingCodes":["+261"],"currencies":["MGA"],"emoji":"\uD83C\uDDF2\uD83C\uDDEC","ioc":"MAD","languages":["fra","mlg"],"name":"Madagascar","status":"assigned"},{"alpha2":"MH","alpha3":"MHL","countryCallingCodes":["+692"],"currencies":["USD"],"emoji":"\uD83C\uDDF2\uD83C\uDDED","ioc":"MHL","languages":["eng","mah"],"name":"Marshall Islands","status":"assigned"},{"alpha2":"MI","alpha3":"MID","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Midway Islands","status":"deleted"},{"alpha2":"MK","alpha3":"MKD","countryCallingCodes":["+389"],"currencies":["MKD"],"emoji":"\uD83C\uDDF2\uD83C\uDDF0","ioc":"MKD","languages":["mkd"],"name":"Macedonia, The Former Yugoslav Republic Of","status":"assigned"},{"alpha2":"ML","alpha3":"MLI","countryCallingCodes":["+223"],"currencies":["XOF"],"emoji":"\uD83C\uDDF2\uD83C\uDDF1","ioc":"MLI","languages":["fra"],"name":"Mali","status":"assigned"},{"alpha2":"MM","alpha3":"MMR","countryCallingCodes":["+95"],"currencies":["MMK"],"emoji":"\uD83C\uDDF2\uD83C\uDDF2","ioc":"MYA","languages":["mya"],"name":"Myanmar","status":"assigned"},{"alpha2":"MN","alpha3":"MNG","countryCallingCodes":["+976"],"currencies":["MNT"],"emoji":"\uD83C\uDDF2\uD83C\uDDF3","ioc":"MGL","languages":["mon"],"name":"Mongolia","status":"assigned"},{"alpha2":"MO","alpha3":"MAC","countryCallingCodes":["+853"],"currencies":["MOP"],"emoji":"\uD83C\uDDF2\uD83C\uDDF4","ioc":"MAC","languages":["zho","por"],"name":"Macao","status":"assigned"},{"alpha2":"MP","alpha3":"MNP","countryCallingCodes":["+1 670"],"currencies":["USD"],"emoji":"\uD83C\uDDF2\uD83C\uDDF5","ioc":"","languages":["eng"],"name":"Northern Mariana Islands","status":"assigned"},{"alpha2":"MQ","alpha3":"MTQ","countryCallingCodes":["+596"],"currencies":["EUR"],"emoji":"\uD83C\uDDF2\uD83C\uDDF6","ioc":"","languages":[],"name":"Martinique","status":"assigned"},{"alpha2":"MR","alpha3":"MRT","countryCallingCodes":["+222"],"currencies":["MRO"],"emoji":"\uD83C\uDDF2\uD83C\uDDF7","ioc":"MTN","languages":["ara","fra"],"name":"Mauritania","status":"assigned"},{"alpha2":"MS","alpha3":"MSR","countryCallingCodes":["+1 664"],"currencies":["XCD"],"emoji":"\uD83C\uDDF2\uD83C\uDDF8","ioc":"","languages":[],"name":"Montserrat","status":"assigned"},{"alpha2":"MT","alpha3":"MLT","countryCallingCodes":["+356"],"currencies":["EUR"],"emoji":"\uD83C\uDDF2\uD83C\uDDF9","ioc":"MLT","languages":["mlt","eng"],"name":"Malta","status":"assigned"},{"alpha2":"MU","alpha3":"MUS","countryCallingCodes":["+230"],"currencies":["MUR"],"emoji":"\uD83C\uDDF2\uD83C\uDDFA","ioc":"MRI","languages":["eng","fra"],"name":"Mauritius","status":"assigned"},{"alpha2":"MV","alpha3":"MDV","countryCallingCodes":["+960"],"currencies":["MVR"],"emoji":"\uD83C\uDDF2\uD83C\uDDFB","ioc":"MDV","languages":["div"],"name":"Maldives","status":"assigned"},{"alpha2":"MW","alpha3":"MWI","countryCallingCodes":["+265"],"currencies":["MWK"],"emoji":"\uD83C\uDDF2\uD83C\uDDFC","ioc":"MAW","languages":["eng","nya"],"name":"Malawi","status":"assigned"},{"alpha2":"MX","alpha3":"MEX","countryCallingCodes":["+52"],"currencies":["MXN","MXV"],"emoji":"\uD83C\uDDF2\uD83C\uDDFD","ioc":"MEX","languages":["spa"],"name":"Mexico","status":"assigned"},{"alpha2":"MY","alpha3":"MYS","countryCallingCodes":["+60"],"currencies":["MYR"],"emoji":"\uD83C\uDDF2\uD83C\uDDFE","ioc":"MAS","languages":["msa","eng"],"name":"Malaysia","status":"assigned"},{"alpha2":"MZ","alpha3":"MOZ","countryCallingCodes":["+258"],"currencies":["MZN"],"emoji":"\uD83C\uDDF2\uD83C\uDDFF","ioc":"MOZ","languages":["por"],"name":"Mozambique","status":"assigned"},{"alpha2":"NA","alpha3":"NAM","countryCallingCodes":["+264"],"currencies":["NAD","ZAR"],"emoji":"\uD83C\uDDF3\uD83C\uDDE6","ioc":"NAM","languages":["eng"],"name":"Namibia","status":"assigned"},{"alpha2":"NC","alpha3":"NCL","countryCallingCodes":["+687"],"currencies":["XPF"],"emoji":"\uD83C\uDDF3\uD83C\uDDE8","ioc":"","languages":["fra"],"name":"New Caledonia","status":"assigned"},{"alpha2":"NE","alpha3":"NER","countryCallingCodes":["+227"],"currencies":["XOF"],"emoji":"\uD83C\uDDF3\uD83C\uDDEA","ioc":"NIG","languages":["fra"],"name":"Niger","status":"assigned"},{"alpha2":"NF","alpha3":"NFK","countryCallingCodes":["+672"],"currencies":["AUD"],"emoji":"\uD83C\uDDF3\uD83C\uDDEB","ioc":"","languages":["eng"],"name":"Norfolk Island","status":"assigned"},{"alpha2":"NG","alpha3":"NGA","countryCallingCodes":["+234"],"currencies":["NGN"],"emoji":"\uD83C\uDDF3\uD83C\uDDEC","ioc":"NGR","languages":["eng"],"name":"Nigeria","status":"assigned"},{"alpha2":"NH","alpha3":"NHB","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"New Hebrides","status":"deleted"},{"alpha2":"NI","alpha3":"NIC","countryCallingCodes":["+505"],"currencies":["NIO"],"emoji":"\uD83C\uDDF3\uD83C\uDDEE","ioc":"NCA","languages":["spa"],"name":"Nicaragua","status":"assigned"},{"alpha2":"NL","alpha3":"NLD","countryCallingCodes":["+31"],"currencies":["EUR"],"emoji":"\uD83C\uDDF3\uD83C\uDDF1","ioc":"NED","languages":["nld"],"name":"Netherlands","status":"assigned"},{"alpha2":"NO","alpha3":"NOR","countryCallingCodes":["+47"],"currencies":["NOK"],"emoji":"\uD83C\uDDF3\uD83C\uDDF4","ioc":"NOR","languages":["nor"],"name":"Norway","status":"assigned"},{"alpha2":"NP","alpha3":"NPL","countryCallingCodes":["+977"],"currencies":["NPR"],"emoji":"\uD83C\uDDF3\uD83C\uDDF5","ioc":"NEP","languages":["nep"],"name":"Nepal","status":"assigned"},{"alpha2":"NQ","alpha3":"ATN","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Dronning Maud Land","status":"deleted"},{"alpha2":"NR","alpha3":"NRU","countryCallingCodes":["+674"],"currencies":["AUD"],"emoji":"\uD83C\uDDF3\uD83C\uDDF7","ioc":"NRU","languages":["eng","nau"],"name":"Nauru","status":"assigned"},{"alpha2":"NT","alpha3":"NTZ","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Neutral Zone","status":"deleted"},{"alpha2":"NU","alpha3":"NIU","countryCallingCodes":["+683"],"currencies":["NZD"],"emoji":"\uD83C\uDDF3\uD83C\uDDFA","ioc":"","languages":["eng"],"name":"Niue","status":"assigned"},{"alpha2":"NZ","alpha3":"NZL","countryCallingCodes":["+64"],"currencies":["NZD"],"emoji":"\uD83C\uDDF3\uD83C\uDDFF","ioc":"NZL","languages":["eng"],"name":"New Zealand","status":"assigned"},{"alpha2":"OM","alpha3":"OMN","countryCallingCodes":["+968"],"currencies":["OMR"],"emoji":"\uD83C\uDDF4\uD83C\uDDF2","ioc":"OMA","languages":["ara"],"name":"Oman","status":"assigned"},{"alpha2":"PA","alpha3":"PAN","countryCallingCodes":["+507"],"currencies":["PAB","USD"],"emoji":"\uD83C\uDDF5\uD83C\uDDE6","ioc":"PAN","languages":["spa"],"name":"Panama","status":"assigned"},{"alpha2":"PC","alpha3":"PCI","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Pacific Islands, Trust Territory of the","status":"deleted"},{"alpha2":"PE","alpha3":"PER","countryCallingCodes":["+51"],"currencies":["PEN"],"emoji":"\uD83C\uDDF5\uD83C\uDDEA","ioc":"PER","languages":["spa","aym","que"],"name":"Peru","status":"assigned"},{"alpha2":"PF","alpha3":"PYF","countryCallingCodes":["+689"],"currencies":["XPF"],"emoji":"\uD83C\uDDF5\uD83C\uDDEB","ioc":"","languages":["fra"],"name":"French Polynesia","status":"assigned"},{"alpha2":"PG","alpha3":"PNG","countryCallingCodes":["+675"],"currencies":["PGK"],"emoji":"\uD83C\uDDF5\uD83C\uDDEC","ioc":"PNG","languages":["eng"],"name":"Papua New Guinea","status":"assigned"},{"alpha2":"PH","alpha3":"PHL","countryCallingCodes":["+63"],"currencies":["PHP"],"emoji":"\uD83C\uDDF5\uD83C\uDDED","ioc":"PHI","languages":["eng"],"name":"Philippines","status":"assigned"},{"alpha2":"PK","alpha3":"PAK","countryCallingCodes":["+92"],"currencies":["PKR"],"emoji":"\uD83C\uDDF5\uD83C\uDDF0","ioc":"PAK","languages":["urd","eng"],"name":"Pakistan","status":"assigned"},{"alpha2":"PL","alpha3":"POL","countryCallingCodes":["+48"],"currencies":["PLN"],"emoji":"\uD83C\uDDF5\uD83C\uDDF1","ioc":"POL","languages":["pol"],"name":"Poland","status":"assigned"},{"alpha2":"PM","alpha3":"SPM","countryCallingCodes":["+508"],"currencies":["EUR"],"emoji":"\uD83C\uDDF5\uD83C\uDDF2","ioc":"","languages":["eng"],"name":"Saint Pierre And Miquelon","status":"assigned"},{"alpha2":"PN","alpha3":"PCN","countryCallingCodes":["+872"],"currencies":["NZD"],"emoji":"\uD83C\uDDF5\uD83C\uDDF3","ioc":"","languages":["eng"],"name":"Pitcairn","status":"assigned"},{"alpha2":"PR","alpha3":"PRI","countryCallingCodes":["+1 787","+1 939"],"currencies":["USD"],"emoji":"\uD83C\uDDF5\uD83C\uDDF7","ioc":"PUR","languages":["spa","eng"],"name":"Puerto Rico","status":"assigned"},{"alpha2":"PS","alpha3":"PSE","countryCallingCodes":["+970"],"currencies":["JOD","EGP","ILS"],"emoji":"\uD83C\uDDF5\uD83C\uDDF8","ioc":"PLE","languages":["ara"],"name":"Palestinian Territory, Occupied","status":"assigned"},{"alpha2":"PT","alpha3":"PRT","countryCallingCodes":["+351"],"currencies":["EUR"],"emoji":"\uD83C\uDDF5\uD83C\uDDF9","ioc":"POR","languages":["por"],"name":"Portugal","status":"assigned"},{"alpha2":"PU","alpha3":"PUS","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"U.S. Miscellaneous Pacific Islands","status":"deleted"},{"alpha2":"PW","alpha3":"PLW","countryCallingCodes":["+680"],"currencies":["USD"],"emoji":"\uD83C\uDDF5\uD83C\uDDFC","ioc":"PLW","languages":["eng"],"name":"Palau","status":"assigned"},{"alpha2":"PY","alpha3":"PRY","countryCallingCodes":["+595"],"currencies":["PYG"],"emoji":"\uD83C\uDDF5\uD83C\uDDFE","ioc":"PAR","languages":["spa"],"name":"Paraguay","status":"assigned"},{"alpha2":"PZ","alpha3":"PCZ","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Panama Canal Zone","status":"deleted"},{"alpha2":"QA","alpha3":"QAT","countryCallingCodes":["+974"],"currencies":["QAR"],"emoji":"\uD83C\uDDF6\uD83C\uDDE6","ioc":"QAT","languages":["ara"],"name":"Qatar","status":"assigned"},{"alpha2":"RE","alpha3":"REU","countryCallingCodes":["+262"],"currencies":["EUR"],"emoji":"\uD83C\uDDF7\uD83C\uDDEA","ioc":"","languages":["fra"],"name":"Reunion","status":"assigned"},{"alpha2":"RH","alpha3":"RHO","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Southern Rhodesia","status":"deleted"},{"alpha2":"RO","alpha3":"ROU","countryCallingCodes":["+40"],"currencies":["RON"],"emoji":"\uD83C\uDDF7\uD83C\uDDF4","ioc":"ROU","languages":["ron"],"name":"Romania","status":"assigned"},{"alpha2":"RS","alpha3":"SRB","countryCallingCodes":["+381"],"currencies":["RSD"],"emoji":"\uD83C\uDDF7\uD83C\uDDF8","ioc":"SRB","languages":["srp"],"name":"Serbia","status":"assigned"},{"alpha2":"RU","alpha3":"RUS","countryCallingCodes":["+7","+7 3","+7 4","+7 8"],"currencies":["RUB"],"emoji":"\uD83C\uDDF7\uD83C\uDDFA","ioc":"RUS","languages":["rus"],"name":"Russian Federation","status":"assigned"},{"alpha2":"RW","alpha3":"RWA","countryCallingCodes":["+250"],"currencies":["RWF"],"emoji":"\uD83C\uDDF7\uD83C\uDDFC","ioc":"RWA","languages":["eng","fra","kin"],"name":"Rwanda","status":"assigned"},{"alpha2":"SA","alpha3":"SAU","countryCallingCodes":["+966"],"currencies":["SAR"],"emoji":"\uD83C\uDDF8\uD83C\uDDE6","ioc":"KSA","languages":["ara"],"name":"Saudi Arabia","status":"assigned"},{"alpha2":"SB","alpha3":"SLB","countryCallingCodes":["+677"],"currencies":["SBD"],"emoji":"\uD83C\uDDF8\uD83C\uDDE7","ioc":"SOL","languages":["eng"],"name":"Solomon Islands","status":"assigned"},{"alpha2":"SC","alpha3":"SYC","countryCallingCodes":["+248"],"currencies":["SCR"],"emoji":"\uD83C\uDDF8\uD83C\uDDE8","ioc":"SEY","languages":["eng","fra"],"name":"Seychelles","status":"assigned"},{"alpha2":"SD","alpha3":"SDN","countryCallingCodes":["+249"],"currencies":["SDG"],"emoji":"\uD83C\uDDF8\uD83C\uDDE9","ioc":"SUD","languages":["ara","eng"],"name":"Sudan","status":"assigned"},{"alpha2":"SE","alpha3":"SWE","countryCallingCodes":["+46"],"currencies":["SEK"],"emoji":"\uD83C\uDDF8\uD83C\uDDEA","ioc":"SWE","languages":["swe"],"name":"Sweden","status":"assigned"},{"alpha2":"SG","alpha3":"SGP","countryCallingCodes":["+65"],"currencies":["SGD"],"emoji":"\uD83C\uDDF8\uD83C\uDDEC","ioc":"SIN","languages":["eng","zho","msa","tam"],"name":"Singapore","status":"assigned"},{"alpha2":"SH","alpha3":"SHN","countryCallingCodes":["+290"],"currencies":["SHP"],"emoji":"\uD83C\uDDF8\uD83C\uDDED","ioc":"","languages":["eng"],"name":"Saint Helena, Ascension And Tristan Da Cunha","status":"assigned"},{"alpha2":"SI","alpha3":"SVN","countryCallingCodes":["+386"],"currencies":["EUR"],"emoji":"\uD83C\uDDF8\uD83C\uDDEE","ioc":"SLO","languages":["slv"],"name":"Slovenia","status":"assigned"},{"alpha2":"SJ","alpha3":"SJM","countryCallingCodes":["+47"],"currencies":["NOK"],"emoji":"\uD83C\uDDF8\uD83C\uDDEF","ioc":"","languages":[],"name":"Svalbard And Jan Mayen","status":"assigned"},{"alpha2":"SK","alpha3":"SVK","countryCallingCodes":["+421"],"currencies":["EUR"],"emoji":"\uD83C\uDDF8\uD83C\uDDF0","ioc":"SVK","languages":["slk"],"name":"Slovakia","status":"assigned"},{"alpha2":"SK","alpha3":"SKM","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Sikkim","status":"deleted"},{"alpha2":"SL","alpha3":"SLE","countryCallingCodes":["+232"],"currencies":["SLL"],"emoji":"\uD83C\uDDF8\uD83C\uDDF1","ioc":"SLE","languages":["eng"],"name":"Sierra Leone","status":"assigned"},{"alpha2":"SM","alpha3":"SMR","countryCallingCodes":["+378"],"currencies":["EUR"],"emoji":"\uD83C\uDDF8\uD83C\uDDF2","ioc":"SMR","languages":["ita"],"name":"San Marino","status":"assigned"},{"alpha2":"SN","alpha3":"SEN","countryCallingCodes":["+221"],"currencies":["XOF"],"emoji":"\uD83C\uDDF8\uD83C\uDDF3","ioc":"SEN","languages":["fra"],"name":"Senegal","status":"assigned"},{"alpha2":"SO","alpha3":"SOM","countryCallingCodes":["+252"],"currencies":["SOS"],"emoji":"\uD83C\uDDF8\uD83C\uDDF4","ioc":"SOM","languages":["som"],"name":"Somalia","status":"assigned"},{"alpha2":"SR","alpha3":"SUR","countryCallingCodes":["+597"],"currencies":["SRD"],"emoji":"\uD83C\uDDF8\uD83C\uDDF7","ioc":"SUR","languages":["nld"],"name":"Suriname","status":"assigned"},{"alpha2":"SS","alpha3":"SSD","countryCallingCodes":["+211"],"currencies":["SSP"],"emoji":"\uD83C\uDDF8\uD83C\uDDF8","ioc":"SSD","languages":["eng"],"name":"South Sudan","status":"assigned"},{"alpha2":"ST","alpha3":"STP","countryCallingCodes":["+239"],"currencies":["STD"],"emoji":"\uD83C\uDDF8\uD83C\uDDF9","ioc":"STP","languages":["por"],"name":"Sao Tome and Principe","status":"assigned"},{"alpha2":"SU","alpha3":"","countryCallingCodes":[],"currencies":["RUB"],"emoji":"","ioc":"","languages":["rus"],"name":"USSR","status":"reserved"},{"alpha2":"SV","alpha3":"SLV","countryCallingCodes":["+503"],"currencies":["USD"],"emoji":"\uD83C\uDDF8\uD83C\uDDFB","ioc":"ESA","languages":["spa"],"name":"El Salvador","status":"assigned"},{"alpha2":"SX","alpha3":"SXM","countryCallingCodes":["+1 721"],"currencies":["ANG"],"emoji":"\uD83C\uDDF8\uD83C\uDDFD","ioc":"","languages":["nld"],"name":"Sint Maarten","status":"assigned"},{"alpha2":"SY","alpha3":"SYR","countryCallingCodes":["+963"],"currencies":["SYP"],"emoji":"\uD83C\uDDF8\uD83C\uDDFE","ioc":"SYR","languages":["ara"],"name":"Syrian Arab Republic","status":"assigned"},{"alpha2":"SZ","alpha3":"SWZ","countryCallingCodes":["+268"],"currencies":["SZL"],"emoji":"\uD83C\uDDF8\uD83C\uDDFF","ioc":"SWZ","languages":["eng","ssw"],"name":"Swaziland","status":"assigned"},{"alpha2":"TA","alpha3":"","countryCallingCodes":["+290"],"currencies":["GBP"],"emoji":"","ioc":"","languages":[],"name":"Tristan de Cunha","status":"reserved"},{"alpha2":"TC","alpha3":"TCA","countryCallingCodes":["+1 649"],"currencies":["USD"],"emoji":"\uD83C\uDDF9\uD83C\uDDE8","ioc":"","languages":["eng"],"name":"Turks And Caicos Islands","status":"assigned"},{"alpha2":"TD","alpha3":"TCD","countryCallingCodes":["+235"],"currencies":["XAF"],"emoji":"\uD83C\uDDF9\uD83C\uDDE9","ioc":"CHA","languages":["ara","fra"],"name":"Chad","status":"assigned"},{"alpha2":"TF","alpha3":"ATF","countryCallingCodes":[],"currencies":["EUR"],"emoji":"\uD83C\uDDF9\uD83C\uDDEB","ioc":"","languages":["fra"],"name":"French Southern Territories","status":"assigned"},{"alpha2":"TG","alpha3":"TGO","countryCallingCodes":["+228"],"currencies":["XOF"],"emoji":"\uD83C\uDDF9\uD83C\uDDEC","ioc":"TOG","languages":["fra"],"name":"Togo","status":"assigned"},{"alpha2":"TH","alpha3":"THA","countryCallingCodes":["+66"],"currencies":["THB"],"emoji":"\uD83C\uDDF9\uD83C\uDDED","ioc":"THA","languages":["tha"],"name":"Thailand","status":"assigned"},{"alpha2":"TJ","alpha3":"TJK","countryCallingCodes":["+992"],"currencies":["TJS"],"emoji":"\uD83C\uDDF9\uD83C\uDDEF","ioc":"TJK","languages":["tgk","rus"],"name":"Tajikistan","status":"assigned"},{"alpha2":"TK","alpha3":"TKL","countryCallingCodes":["+690"],"currencies":["NZD"],"emoji":"\uD83C\uDDF9\uD83C\uDDF0","ioc":"","languages":["eng"],"name":"Tokelau","status":"assigned"},{"alpha2":"TL","alpha3":"TLS","countryCallingCodes":["+670"],"currencies":["USD"],"emoji":"\uD83C\uDDF9\uD83C\uDDF1","ioc":"TLS","languages":["por"],"name":"Timor-Leste, Democratic Republic of","status":"assigned"},{"alpha2":"TM","alpha3":"TKM","countryCallingCodes":["+993"],"currencies":["TMT"],"emoji":"\uD83C\uDDF9\uD83C\uDDF2","ioc":"TKM","languages":["tuk","rus"],"name":"Turkmenistan","status":"assigned"},{"alpha2":"TN","alpha3":"TUN","countryCallingCodes":["+216"],"currencies":["TND"],"emoji":"\uD83C\uDDF9\uD83C\uDDF3","ioc":"TUN","languages":["ara"],"name":"Tunisia","status":"assigned"},{"alpha2":"TO","alpha3":"TON","countryCallingCodes":["+676"],"currencies":["TOP"],"emoji":"\uD83C\uDDF9\uD83C\uDDF4","ioc":"TGA","languages":["eng"],"name":"Tonga","status":"assigned"},{"alpha2":"TP","alpha3":"TMP","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"East Timor","status":"deleted"},{"alpha2":"TR","alpha3":"TUR","countryCallingCodes":["+90"],"currencies":["TRY"],"emoji":"\uD83C\uDDF9\uD83C\uDDF7","ioc":"TUR","languages":["tur"],"name":"Turkey","status":"assigned"},{"alpha2":"TT","alpha3":"TTO","countryCallingCodes":["+1 868"],"currencies":["TTD"],"emoji":"\uD83C\uDDF9\uD83C\uDDF9","ioc":"TTO","languages":["eng"],"name":"Trinidad And Tobago","status":"assigned"},{"alpha2":"TV","alpha3":"TUV","countryCallingCodes":["+688"],"currencies":["AUD"],"emoji":"\uD83C\uDDF9\uD83C\uDDFB","ioc":"TUV","languages":["eng"],"name":"Tuvalu","status":"assigned"},{"alpha2":"TW","alpha3":"TWN","countryCallingCodes":["+886"],"currencies":["TWD"],"emoji":"\uD83C\uDDF9\uD83C\uDDFC","ioc":"TPE","languages":["zho"],"name":"Taiwan","status":"assigned"},{"alpha2":"TZ","alpha3":"TZA","countryCallingCodes":["+255"],"currencies":["TZS"],"emoji":"\uD83C\uDDF9\uD83C\uDDFF","ioc":"TAN","languages":["swa","eng"],"name":"Tanzania, United Republic Of","status":"assigned"},{"alpha2":"UA","alpha3":"UKR","countryCallingCodes":["+380"],"currencies":["UAH"],"emoji":"\uD83C\uDDFA\uD83C\uDDE6","ioc":"UKR","languages":["ukr","rus"],"name":"Ukraine","status":"assigned"},{"alpha2":"UG","alpha3":"UGA","countryCallingCodes":["+256"],"currencies":["UGX"],"emoji":"\uD83C\uDDFA\uD83C\uDDEC","ioc":"UGA","languages":["eng","swa"],"name":"Uganda","status":"assigned"},{"alpha2":"UK","alpha3":"","countryCallingCodes":[],"currencies":["GBP"],"emoji":"","ioc":"","languages":["eng","cor","gle","gla","cym"],"name":"United Kingdom","status":"reserved"},{"alpha2":"UM","alpha3":"UMI","countryCallingCodes":["+1"],"currencies":["USD"],"emoji":"\uD83C\uDDFA\uD83C\uDDF2","ioc":"","languages":["eng"],"name":"United States Minor Outlying Islands","status":"assigned"},{"alpha2":"US","alpha3":"USA","countryCallingCodes":["+1"],"currencies":["USD"],"emoji":"\uD83C\uDDFA\uD83C\uDDF8","ioc":"USA","languages":["eng"],"name":"United States","status":"assigned"},{"alpha2":"UY","alpha3":"URY","countryCallingCodes":["+598"],"currencies":["UYU","UYI"],"emoji":"\uD83C\uDDFA\uD83C\uDDFE","ioc":"URU","languages":["spa"],"name":"Uruguay","status":"assigned"},{"alpha2":"UZ","alpha3":"UZB","countryCallingCodes":["+998"],"currencies":["UZS"],"emoji":"\uD83C\uDDFA\uD83C\uDDFF","ioc":"UZB","languages":["uzb","rus"],"name":"Uzbekistan","status":"assigned"},{"alpha2":"VA","alpha3":"VAT","countryCallingCodes":["+379","+39"],"currencies":["EUR"],"emoji":"\uD83C\uDDFB\uD83C\uDDE6","ioc":"","languages":["ita"],"name":"Vatican City State","status":"assigned"},{"alpha2":"VC","alpha3":"VCT","countryCallingCodes":["+1 784"],"currencies":["XCD"],"emoji":"\uD83C\uDDFB\uD83C\uDDE8","ioc":"VIN","languages":["eng"],"name":"Saint Vincent And The Grenadines","status":"assigned"},{"alpha2":"VD","alpha3":"VDR","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Viet-Nam, Democratic Republic of","status":"deleted"},{"alpha2":"VE","alpha3":"VEN","countryCallingCodes":["+58"],"currencies":["VEF"],"emoji":"\uD83C\uDDFB\uD83C\uDDEA","ioc":"VEN","languages":["spa"],"name":"Venezuela, Bolivarian Republic Of","status":"assigned"},{"alpha2":"VG","alpha3":"VGB","countryCallingCodes":["+1 284"],"currencies":["USD"],"emoji":"\uD83C\uDDFB\uD83C\uDDEC","ioc":"IVB","languages":["eng"],"name":"Virgin Islands (British)","status":"assigned"},{"alpha2":"VI","alpha3":"VIR","countryCallingCodes":["+1 340"],"currencies":["USD"],"emoji":"\uD83C\uDDFB\uD83C\uDDEE","ioc":"ISV","languages":["eng"],"name":"Virgin Islands (US)","status":"assigned"},{"alpha2":"VN","alpha3":"VNM","countryCallingCodes":["+84"],"currencies":["VND"],"emoji":"\uD83C\uDDFB\uD83C\uDDF3","ioc":"VIE","languages":["vie"],"name":"Viet Nam","status":"assigned"},{"alpha2":"VU","alpha3":"VUT","countryCallingCodes":["+678"],"currencies":["VUV"],"emoji":"\uD83C\uDDFB\uD83C\uDDFA","ioc":"VAN","languages":["bis","eng","fra"],"name":"Vanuatu","status":"assigned"},{"alpha2":"WF","alpha3":"WLF","countryCallingCodes":["+681"],"currencies":["XPF"],"emoji":"\uD83C\uDDFC\uD83C\uDDEB","ioc":"","languages":["fra"],"name":"Wallis And Futuna","status":"assigned"},{"alpha2":"WK","alpha3":"WAK","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Wake Island","status":"deleted"},{"alpha2":"WS","alpha3":"WSM","countryCallingCodes":["+685"],"currencies":["WST"],"emoji":"\uD83C\uDDFC\uD83C\uDDF8","ioc":"SAM","languages":["eng","smo"],"name":"Samoa","status":"assigned"},{"alpha2":"XK","alpha3":"","countryCallingCodes":["+383"],"currencies":["EUR"],"emoji":"","ioc":"KOS","languages":["sqi","srp","bos","tur","rom"],"name":"Kosovo","status":"user assigned"},{"alpha2":"YD","alpha3":"YMD","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Yemen, Democratic","status":"deleted"},{"alpha2":"YE","alpha3":"YEM","countryCallingCodes":["+967"],"currencies":["YER"],"emoji":"\uD83C\uDDFE\uD83C\uDDEA","ioc":"YEM","languages":["ara"],"name":"Yemen","status":"assigned"},{"alpha2":"YT","alpha3":"MYT","countryCallingCodes":["+262"],"currencies":["EUR"],"emoji":"\uD83C\uDDFE\uD83C\uDDF9","ioc":"","languages":["fra"],"name":"Mayotte","status":"assigned"},{"alpha2":"YU","alpha3":"YUG","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Yugoslavia","status":"deleted"},{"alpha2":"ZA","alpha3":"ZAF","countryCallingCodes":["+27"],"currencies":["ZAR"],"emoji":"\uD83C\uDDFF\uD83C\uDDE6","ioc":"RSA","languages":["afr","eng","nbl","som","tso","ven","xho","zul"],"name":"South Africa","status":"assigned"},{"alpha2":"ZM","alpha3":"ZMB","countryCallingCodes":["+260"],"currencies":["ZMW"],"emoji":"\uD83C\uDDFF\uD83C\uDDF2","ioc":"ZAM","languages":["eng"],"name":"Zambia","status":"assigned"},{"alpha2":"ZR","alpha3":"ZAR","countryCallingCodes":[],"currencies":[],"ioc":"","languages":[],"name":"Zaire","status":"deleted"},{"alpha2":"ZW","alpha3":"ZWE","countryCallingCodes":["+263"],"currencies":["USD","ZAR","BWP","GBP","EUR"],"emoji":"\uD83C\uDDFF\uD83C\uDDFC","ioc":"ZIM","languages":["eng","sna","nde"],"name":"Zimbabwe","status":"assigned"}]')
        },
        42574: function(a) {
            "use strict";
            a.exports = JSON.parse('[{"code":"AED","decimals":2,"name":"United Arab Emirates dirham","number":"784"},{"code":"AFN","decimals":2,"name":"Afghan afghani","number":"971"},{"code":"ALL","decimals":2,"name":"Albanian lek","number":"8"},{"code":"AMD","decimals":2,"name":"Armenian dram","number":"51"},{"code":"ANG","decimals":2,"name":"Netherlands Antillean guilder","number":"532"},{"code":"AOA","decimals":2,"name":"Angolan kwanza","number":"973"},{"code":"ARS","decimals":2,"name":"Argentine peso","number":"32"},{"code":"AUD","decimals":2,"name":"Australian dollar","number":"36"},{"code":"AWG","decimals":2,"name":"Aruban florin","number":"533"},{"code":"AZN","decimals":2,"name":"Azerbaijani manat","number":"944"},{"code":"BAM","decimals":2,"name":"Bosnia and Herzegovina convertible mark","number":"977"},{"code":"BBD","decimals":2,"name":"Barbados dollar","number":"52"},{"code":"BDT","decimals":2,"name":"Bangladeshi taka","number":"50"},{"code":"BGN","decimals":2,"name":"Bulgarian lev","number":"975"},{"code":"BHD","decimals":3,"name":"Bahraini dinar","number":"48"},{"code":"BIF","decimals":0,"name":"Burundian franc","number":"108"},{"code":"BMD","decimals":2,"name":"Bermudian dollar (customarily known as Bermuda dollar)","number":"60"},{"code":"BND","decimals":2,"name":"Brunei dollar","number":"96"},{"code":"BOB","decimals":2,"name":"Boliviano","number":"68"},{"code":"BOV","decimals":2,"name":"Bolivian Mvdol (funds code)","number":"984"},{"code":"BRL","decimals":2,"name":"Brazilian real","number":"986"},{"code":"BSD","decimals":2,"name":"Bahamian dollar","number":"44"},{"code":"BTN","decimals":2,"name":"Bhutanese ngultrum","number":"64"},{"code":"BWP","decimals":2,"name":"Botswana pula","number":"72"},{"code":"BYR","decimals":0,"name":"Belarusian ruble","number":"974"},{"code":"BZD","decimals":2,"name":"Belize dollar","number":"84"},{"code":"CAD","decimals":2,"name":"Canadian dollar","number":"124"},{"code":"CDF","decimals":2,"name":"Congolese franc","number":"976"},{"code":"CHE","decimals":2,"name":"WIR Euro (complementary currency)","number":"947"},{"code":"CHF","decimals":2,"name":"Swiss franc","number":"756"},{"code":"CHW","decimals":2,"name":"WIR Franc (complementary currency)","number":"948"},{"code":"CLF","decimals":0,"name":"Unidad de Fomento (funds code)","number":"990"},{"code":"CLP","decimals":0,"name":"Chilean peso","number":"152"},{"code":"CNY","decimals":2,"name":"Chinese yuan","number":"156"},{"code":"COP","decimals":2,"name":"Colombian peso","number":"170"},{"code":"COU","decimals":2,"name":"Unidad de Valor Real","number":"970"},{"code":"CRC","decimals":2,"name":"Costa Rican colon","number":"188"},{"code":"CUC","decimals":2,"name":"Cuban convertible peso","number":"931"},{"code":"CUP","decimals":2,"name":"Cuban peso","number":"192"},{"code":"CVE","decimals":0,"name":"Cape Verde escudo","number":"132"},{"code":"CZK","decimals":2,"name":"Czech koruna","number":"203"},{"code":"DJF","decimals":0,"name":"Djiboutian franc","number":"262"},{"code":"DKK","decimals":2,"name":"Danish krone","number":"208"},{"code":"DOP","decimals":2,"name":"Dominican peso","number":"214"},{"code":"DZD","decimals":2,"name":"Algerian dinar","number":"12"},{"code":"EGP","decimals":2,"name":"Egyptian pound","number":"818"},{"code":"ERN","decimals":2,"name":"Eritrean nakfa","number":"232"},{"code":"ETB","decimals":2,"name":"Ethiopian birr","number":"230"},{"code":"EUR","decimals":2,"name":"Euro","number":"978"},{"code":"FJD","decimals":2,"name":"Fiji dollar","number":"242"},{"code":"FKP","decimals":2,"name":"Falkland Islands pound","number":"238"},{"code":"GBP","decimals":2,"name":"Pound sterling","number":"826"},{"code":"GEL","decimals":2,"name":"Georgian lari","number":"981"},{"code":"GHS","decimals":2,"name":"Ghanaian cedi","number":"936"},{"code":"GIP","decimals":2,"name":"Gibraltar pound","number":"292"},{"code":"GMD","decimals":2,"name":"Gambian dalasi","number":"270"},{"code":"GNF","decimals":0,"name":"Guinean franc","number":"324"},{"code":"GTQ","decimals":2,"name":"Guatemalan quetzal","number":"320"},{"code":"GYD","decimals":2,"name":"Guyanese dollar","number":"328"},{"code":"HKD","decimals":2,"name":"Hong Kong dollar","number":"344"},{"code":"HNL","decimals":2,"name":"Honduran lempira","number":"340"},{"code":"HRK","decimals":2,"name":"Croatian kuna","number":"191"},{"code":"HTG","decimals":2,"name":"Haitian gourde","number":"332"},{"code":"HUF","decimals":2,"name":"Hungarian forint","number":"348"},{"code":"IDR","decimals":2,"name":"Indonesian rupiah","number":"360"},{"code":"ILS","decimals":2,"name":"Israeli new shekel","number":"376"},{"code":"INR","decimals":2,"name":"Indian rupee","number":"356"},{"code":"IQD","decimals":3,"name":"Iraqi dinar","number":"368"},{"code":"IRR","decimals":0,"name":"Iranian rial","number":"364"},{"code":"ISK","decimals":0,"name":"Icelandic kr\xf3na","number":"352"},{"code":"JMD","decimals":2,"name":"Jamaican dollar","number":"388"},{"code":"JOD","decimals":3,"name":"Jordanian dinar","number":"400"},{"code":"JPY","decimals":0,"name":"Japanese yen","number":"392"},{"code":"KES","decimals":2,"name":"Kenyan shilling","number":"404"},{"code":"KGS","decimals":2,"name":"Kyrgyzstani som","number":"417"},{"code":"KHR","decimals":2,"name":"Cambodian riel","number":"116"},{"code":"KMF","decimals":0,"name":"Comoro franc","number":"174"},{"code":"KPW","decimals":0,"name":"North Korean won","number":"408"},{"code":"KRW","decimals":0,"name":"South Korean won","number":"410"},{"code":"KWD","decimals":3,"name":"Kuwaiti dinar","number":"414"},{"code":"KYD","decimals":2,"name":"Cayman Islands dollar","number":"136"},{"code":"KZT","decimals":2,"name":"Kazakhstani tenge","number":"398"},{"code":"LAK","decimals":0,"name":"Lao kip","number":"418"},{"code":"LBP","decimals":0,"name":"Lebanese pound","number":"422"},{"code":"LKR","decimals":2,"name":"Sri Lankan rupee","number":"144"},{"code":"LRD","decimals":2,"name":"Liberian dollar","number":"430"},{"code":"LSL","decimals":2,"name":"Lesotho loti","number":"426"},{"code":"LTL","decimals":2,"name":"Lithuanian litas","number":"440"},{"code":"LVL","decimals":2,"name":"Latvian lats","number":"428"},{"code":"LYD","decimals":3,"name":"Libyan dinar","number":"434"},{"code":"MAD","decimals":2,"name":"Moroccan dirham","number":"504"},{"code":"MDL","decimals":2,"name":"Moldovan leu","number":"498"},{"code":"MGA","decimals":0,"name":"Malagasy ariary","number":"969"},{"code":"MKD","decimals":0,"name":"Macedonian denar","number":"807"},{"code":"MMK","decimals":0,"name":"Myanma kyat","number":"104"},{"code":"MNT","decimals":2,"name":"Mongolian tugrik","number":"496"},{"code":"MOP","decimals":2,"name":"Macanese pataca","number":"446"},{"code":"MRO","decimals":0,"name":"Mauritanian ouguiya","number":"478"},{"code":"MUR","decimals":2,"name":"Mauritian rupee","number":"480"},{"code":"MVR","decimals":2,"name":"Maldivian rufiyaa","number":"462"},{"code":"MWK","decimals":2,"name":"Malawian kwacha","number":"454"},{"code":"MXN","decimals":2,"name":"Mexican peso","number":"484"},{"code":"MXV","decimals":2,"name":"Mexican Unidad de Inversion (UDI) (funds code)","number":"979"},{"code":"MYR","decimals":2,"name":"Malaysian ringgit","number":"458"},{"code":"MZN","decimals":2,"name":"Mozambican metical","number":"943"},{"code":"NAD","decimals":2,"name":"Namibian dollar","number":"516"},{"code":"NGN","decimals":2,"name":"Nigerian naira","number":"566"},{"code":"NIO","decimals":2,"name":"Nicaraguan c\xf3rdoba","number":"558"},{"code":"NOK","decimals":2,"name":"Norwegian krone","number":"578"},{"code":"NPR","decimals":2,"name":"Nepalese rupee","number":"524"},{"code":"NZD","decimals":2,"name":"New Zealand dollar","number":"554"},{"code":"OMR","decimals":3,"name":"Omani rial","number":"512"},{"code":"PAB","decimals":2,"name":"Panamanian balboa","number":"590"},{"code":"PEN","decimals":2,"name":"Peruvian nuevo sol","number":"604"},{"code":"PGK","decimals":2,"name":"Papua New Guinean kina","number":"598"},{"code":"PHP","decimals":2,"name":"Philippine peso","number":"608"},{"code":"PKR","decimals":2,"name":"Pakistani rupee","number":"586"},{"code":"PLN","decimals":2,"name":"Polish złoty","number":"985"},{"code":"PYG","decimals":0,"name":"Paraguayan guaran\xed","number":"600"},{"code":"QAR","decimals":2,"name":"Qatari riyal","number":"634"},{"code":"RON","decimals":2,"name":"Romanian new leu","number":"946"},{"code":"RSD","decimals":2,"name":"Serbian dinar","number":"941"},{"code":"RUB","decimals":2,"name":"Russian rouble","number":"643"},{"code":"RWF","decimals":0,"name":"Rwandan franc","number":"646"},{"code":"SAR","decimals":2,"name":"Saudi riyal","number":"682"},{"code":"SBD","decimals":2,"name":"Solomon Islands dollar","number":"90"},{"code":"SCR","decimals":2,"name":"Seychelles rupee","number":"690"},{"code":"SDG","decimals":2,"name":"Sudanese pound","number":"938"},{"code":"SEK","decimals":2,"name":"Swedish krona/kronor","number":"752"},{"code":"SGD","decimals":2,"name":"Singapore dollar","number":"702"},{"code":"SHP","decimals":2,"name":"Saint Helena pound","number":"654"},{"code":"SLL","decimals":0,"name":"Sierra Leonean leone","number":"694"},{"code":"SOS","decimals":2,"name":"Somali shilling","number":"706"},{"code":"SRD","decimals":2,"name":"Surinamese dollar","number":"968"},{"code":"SSP","decimals":2,"name":"South Sudanese pound","number":"728"},{"code":"STD","decimals":0,"name":"S\xe3o Tom\xe9 and Pr\xedncipe dobra","number":"678"},{"code":"SYP","decimals":2,"name":"Syrian pound","number":"760"},{"code":"SZL","decimals":2,"name":"Swazi lilangeni","number":"748"},{"code":"THB","decimals":2,"name":"Thai baht","number":"764"},{"code":"TJS","decimals":2,"name":"Tajikistani somoni","number":"972"},{"code":"TMT","decimals":2,"name":"Turkmenistani manat","number":"934"},{"code":"TND","decimals":3,"name":"Tunisian dinar","number":"788"},{"code":"TOP","decimals":2,"name":"Tongan paʻanga","number":"776"},{"code":"TRY","decimals":2,"name":"Turkish lira","number":"949"},{"code":"TTD","decimals":2,"name":"Trinidad and Tobago dollar","number":"780"},{"code":"TWD","decimals":2,"name":"New Taiwan dollar","number":"901"},{"code":"TZS","decimals":2,"name":"Tanzanian shilling","number":"834"},{"code":"UAH","decimals":2,"name":"Ukrainian hryvnia","number":"980"},{"code":"UGX","decimals":2,"name":"Ugandan shilling","number":"800"},{"code":"USD","decimals":2,"name":"United States dollar","number":"840"},{"code":"USN","decimals":2,"name":"United States dollar (next day) (funds code)","number":"997"},{"code":"USS","decimals":2,"name":"United States dollar (same day) (funds code) (one source[who?] claims it is no longer used, but it is still on the ISO 4217-MA list)","number":"998"},{"code":"UYI","decimals":0,"name":"Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)","number":"940"},{"code":"UYU","decimals":2,"name":"Uruguayan peso","number":"858"},{"code":"UZS","decimals":2,"name":"Uzbekistan som","number":"860"},{"code":"VEF","decimals":2,"name":"Venezuelan bol\xedvar fuerte","number":"937"},{"code":"VND","decimals":0,"name":"Vietnamese dong","number":"704"},{"code":"VUV","decimals":0,"name":"Vanuatu vatu","number":"548"},{"code":"WST","decimals":2,"name":"Samoan tala","number":"882"},{"code":"XAF","decimals":0,"name":"CFA franc BEAC","number":"950"},{"code":"XAG","decimals":null,"name":"Silver (one troy ounce)","number":"961"},{"code":"XAU","decimals":null,"name":"Gold (one troy ounce)","number":"959"},{"code":"XBA","decimals":null,"name":"European Composite Unit (EURCO) (bond market unit)","number":"955"},{"code":"XBB","decimals":null,"name":"European Monetary Unit (E.M.U.-6) (bond market unit)","number":"956"},{"code":"XBC","decimals":null,"name":"European Unit of Account 9 (E.U.A.-9) (bond market unit)","number":"957"},{"code":"XBD","decimals":null,"name":"European Unit of Account 17 (E.U.A.-17) (bond market unit)","number":"958"},{"code":"XCD","decimals":2,"name":"East Caribbean dollar","number":"951"},{"code":"XDR","decimals":null,"name":"Special drawing rights","number":"960"},{"code":"XFU","decimals":null,"name":"UIC franc (special settlement currency)","number":"Nil"},{"code":"XOF","decimals":0,"name":"CFA franc BCEAO","number":"952"},{"code":"XPD","decimals":null,"name":"Palladium (one troy ounce)","number":"964"},{"code":"XPF","decimals":0,"name":"CFP franc","number":"953"},{"code":"XPT","decimals":null,"name":"Platinum (one troy ounce)","number":"962"},{"code":"XTS","decimals":null,"name":"Code reserved for testing purposes","number":"963"},{"code":"XXX","decimals":null,"name":"No currency","number":"999"},{"code":"YER","decimals":2,"name":"Yemeni rial","number":"886"},{"code":"ZAR","decimals":2,"name":"South African rand","number":"710"},{"code":"ZMW","decimals":2,"name":"Zambian kwacha","number":"967"}]')
        },
        26735: function(a) {
            "use strict";
            a.exports = JSON.parse('[{"alpha2":"aa","alpha3":"aar","bibliographic":"","name":"Afar"},{"alpha2":"ab","alpha3":"abk","bibliographic":"","name":"Abkhazian"},{"alpha2":"","alpha3":"ace","bibliographic":"","name":"Achinese"},{"alpha2":"","alpha3":"ach","bibliographic":"","name":"Acoli"},{"alpha2":"","alpha3":"ada","bibliographic":"","name":"Adangme"},{"alpha2":"","alpha3":"ady","bibliographic":"","name":"Adygei"},{"alpha2":"","alpha3":"ady","bibliographic":"","name":"Adyghe"},{"alpha2":"","alpha3":"afa","bibliographic":"","name":"Afro-Asiatic languages"},{"alpha2":"","alpha3":"afh","bibliographic":"","name":"Afrihili"},{"alpha2":"af","alpha3":"afr","bibliographic":"","name":"Afrikaans"},{"alpha2":"","alpha3":"ain","bibliographic":"","name":"Ainu"},{"alpha2":"ak","alpha3":"aka","bibliographic":"","name":"Akan"},{"alpha2":"","alpha3":"akk","bibliographic":"","name":"Akkadian"},{"alpha2":"","alpha3":"ale","bibliographic":"","name":"Aleut"},{"alpha2":"","alpha3":"alg","bibliographic":"","name":"Algonquian languages"},{"alpha2":"","alpha3":"alt","bibliographic":"","name":"Southern Altai"},{"alpha2":"am","alpha3":"amh","bibliographic":"","name":"Amharic"},{"alpha2":"","alpha3":"ang","bibliographic":"","name":"English, Old (ca.450-1100)"},{"alpha2":"","alpha3":"anp","bibliographic":"","name":"Angika"},{"alpha2":"","alpha3":"apa","bibliographic":"","name":"Apache languages"},{"alpha2":"ar","alpha3":"ara","bibliographic":"","name":"Arabic"},{"alpha2":"","alpha3":"arc","bibliographic":"","name":"Imperial Aramaic (700-300 BCE)"},{"alpha2":"","alpha3":"arc","bibliographic":"","name":"Official Aramaic (700-300 BCE)"},{"alpha2":"an","alpha3":"arg","bibliographic":"","name":"Aragonese"},{"alpha2":"","alpha3":"arn","bibliographic":"","name":"Mapuche"},{"alpha2":"","alpha3":"arn","bibliographic":"","name":"Mapudungun"},{"alpha2":"","alpha3":"arp","bibliographic":"","name":"Arapaho"},{"alpha2":"","alpha3":"art","bibliographic":"","name":"Artificial languages"},{"alpha2":"","alpha3":"arw","bibliographic":"","name":"Arawak"},{"alpha2":"as","alpha3":"asm","bibliographic":"","name":"Assamese"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Asturian"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Asturleonese"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Bable"},{"alpha2":"","alpha3":"ast","bibliographic":"","name":"Leonese"},{"alpha2":"","alpha3":"ath","bibliographic":"","name":"Athapascan languages"},{"alpha2":"","alpha3":"aus","bibliographic":"","name":"Australian languages"},{"alpha2":"av","alpha3":"ava","bibliographic":"","name":"Avaric"},{"alpha2":"ae","alpha3":"ave","bibliographic":"","name":"Avestan"},{"alpha2":"","alpha3":"awa","bibliographic":"","name":"Awadhi"},{"alpha2":"ay","alpha3":"aym","bibliographic":"","name":"Aymara"},{"alpha2":"az","alpha3":"aze","bibliographic":"","name":"Azerbaijani"},{"alpha2":"","alpha3":"bad","bibliographic":"","name":"Banda languages"},{"alpha2":"","alpha3":"bai","bibliographic":"","name":"Bamileke languages"},{"alpha2":"ba","alpha3":"bak","bibliographic":"","name":"Bashkir"},{"alpha2":"","alpha3":"bal","bibliographic":"","name":"Baluchi"},{"alpha2":"bm","alpha3":"bam","bibliographic":"","name":"Bambara"},{"alpha2":"","alpha3":"ban","bibliographic":"","name":"Balinese"},{"alpha2":"","alpha3":"bas","bibliographic":"","name":"Basa"},{"alpha2":"","alpha3":"bat","bibliographic":"","name":"Baltic languages"},{"alpha2":"","alpha3":"bej","bibliographic":"","name":"Bedawiyet"},{"alpha2":"","alpha3":"bej","bibliographic":"","name":"Beja"},{"alpha2":"be","alpha3":"bel","bibliographic":"","name":"Belarusian"},{"alpha2":"","alpha3":"bem","bibliographic":"","name":"Bemba"},{"alpha2":"bn","alpha3":"ben","bibliographic":"","name":"Bengali"},{"alpha2":"","alpha3":"ber","bibliographic":"","name":"Berber languages"},{"alpha2":"","alpha3":"bho","bibliographic":"","name":"Bhojpuri"},{"alpha2":"bh","alpha3":"bih","bibliographic":"","name":"Bihari languages"},{"alpha2":"","alpha3":"bik","bibliographic":"","name":"Bikol"},{"alpha2":"","alpha3":"bin","bibliographic":"","name":"Bini"},{"alpha2":"","alpha3":"bin","bibliographic":"","name":"Edo"},{"alpha2":"bi","alpha3":"bis","bibliographic":"","name":"Bislama"},{"alpha2":"","alpha3":"bla","bibliographic":"","name":"Siksika"},{"alpha2":"","alpha3":"bnt","bibliographic":"","name":"Bantu languages"},{"alpha2":"bo","alpha3":"bod","bibliographic":"tib","name":"Tibetan"},{"alpha2":"bs","alpha3":"bos","bibliographic":"","name":"Bosnian"},{"alpha2":"","alpha3":"bra","bibliographic":"","name":"Braj"},{"alpha2":"br","alpha3":"bre","bibliographic":"","name":"Breton"},{"alpha2":"","alpha3":"btk","bibliographic":"","name":"Batak languages"},{"alpha2":"","alpha3":"bua","bibliographic":"","name":"Buriat"},{"alpha2":"","alpha3":"bug","bibliographic":"","name":"Buginese"},{"alpha2":"bg","alpha3":"bul","bibliographic":"","name":"Bulgarian"},{"alpha2":"","alpha3":"byn","bibliographic":"","name":"Bilin"},{"alpha2":"","alpha3":"byn","bibliographic":"","name":"Blin"},{"alpha2":"","alpha3":"cad","bibliographic":"","name":"Caddo"},{"alpha2":"","alpha3":"cai","bibliographic":"","name":"Central American Indian languages"},{"alpha2":"","alpha3":"car","bibliographic":"","name":"Galibi Carib"},{"alpha2":"ca","alpha3":"cat","bibliographic":"","name":"Catalan"},{"alpha2":"ca","alpha3":"cat","bibliographic":"","name":"Valencian"},{"alpha2":"","alpha3":"cau","bibliographic":"","name":"Caucasian languages"},{"alpha2":"","alpha3":"ceb","bibliographic":"","name":"Cebuano"},{"alpha2":"","alpha3":"cel","bibliographic":"","name":"Celtic languages"},{"alpha2":"cs","alpha3":"ces","bibliographic":"cze","name":"Czech"},{"alpha2":"ch","alpha3":"cha","bibliographic":"","name":"Chamorro"},{"alpha2":"","alpha3":"chb","bibliographic":"","name":"Chibcha"},{"alpha2":"ce","alpha3":"che","bibliographic":"","name":"Chechen"},{"alpha2":"","alpha3":"chg","bibliographic":"","name":"Chagatai"},{"alpha2":"","alpha3":"chk","bibliographic":"","name":"Chuukese"},{"alpha2":"","alpha3":"chm","bibliographic":"","name":"Mari"},{"alpha2":"","alpha3":"chn","bibliographic":"","name":"Chinook jargon"},{"alpha2":"","alpha3":"cho","bibliographic":"","name":"Choctaw"},{"alpha2":"","alpha3":"chp","bibliographic":"","name":"Chipewyan"},{"alpha2":"","alpha3":"chp","bibliographic":"","name":"Dene Suline"},{"alpha2":"","alpha3":"chr","bibliographic":"","name":"Cherokee"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Church Slavic"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Church Slavonic"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Old Bulgarian"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Old Church Slavonic"},{"alpha2":"cu","alpha3":"chu","bibliographic":"","name":"Old Slavonic"},{"alpha2":"cv","alpha3":"chv","bibliographic":"","name":"Chuvash"},{"alpha2":"","alpha3":"chy","bibliographic":"","name":"Cheyenne"},{"alpha2":"","alpha3":"cmc","bibliographic":"","name":"Chamic languages"},{"alpha2":"","alpha3":"cop","bibliographic":"","name":"Coptic"},{"alpha2":"kw","alpha3":"cor","bibliographic":"","name":"Cornish"},{"alpha2":"co","alpha3":"cos","bibliographic":"","name":"Corsican"},{"alpha2":"","alpha3":"cpe","bibliographic":"","name":"Creoles and pidgins, English based"},{"alpha2":"","alpha3":"cpf","bibliographic":"","name":"Creoles and pidgins, French-based"},{"alpha2":"","alpha3":"cpp","bibliographic":"","name":"Creoles and pidgins, Portuguese-based"},{"alpha2":"cr","alpha3":"cre","bibliographic":"","name":"Cree"},{"alpha2":"","alpha3":"crh","bibliographic":"","name":"Crimean Tatar"},{"alpha2":"","alpha3":"crh","bibliographic":"","name":"Crimean Turkish"},{"alpha2":"","alpha3":"crp","bibliographic":"","name":"Creoles and pidgins"},{"alpha2":"","alpha3":"csb","bibliographic":"","name":"Kashubian"},{"alpha2":"","alpha3":"cus","bibliographic":"","name":"Cushitic languages"},{"alpha2":"cy","alpha3":"cym","bibliographic":"wel","name":"Welsh"},{"alpha2":"","alpha3":"dak","bibliographic":"","name":"Dakota"},{"alpha2":"da","alpha3":"dan","bibliographic":"","name":"Danish"},{"alpha2":"","alpha3":"dar","bibliographic":"","name":"Dargwa"},{"alpha2":"","alpha3":"day","bibliographic":"","name":"Land Dayak languages"},{"alpha2":"","alpha3":"del","bibliographic":"","name":"Delaware"},{"alpha2":"","alpha3":"den","bibliographic":"","name":"Slave (Athapascan)"},{"alpha2":"de","alpha3":"deu","bibliographic":"ger","name":"German"},{"alpha2":"","alpha3":"dgr","bibliographic":"","name":"Dogrib"},{"alpha2":"","alpha3":"din","bibliographic":"","name":"Dinka"},{"alpha2":"dv","alpha3":"div","bibliographic":"","name":"Dhivehi"},{"alpha2":"dv","alpha3":"div","bibliographic":"","name":"Divehi"},{"alpha2":"dv","alpha3":"div","bibliographic":"","name":"Maldivian"},{"alpha2":"","alpha3":"doi","bibliographic":"","name":"Dogri"},{"alpha2":"","alpha3":"dra","bibliographic":"","name":"Dravidian languages"},{"alpha2":"","alpha3":"dsb","bibliographic":"","name":"Lower Sorbian"},{"alpha2":"","alpha3":"dua","bibliographic":"","name":"Duala"},{"alpha2":"","alpha3":"dum","bibliographic":"","name":"Dutch, Middle (ca.1050-1350)"},{"alpha2":"","alpha3":"dyu","bibliographic":"","name":"Dyula"},{"alpha2":"dz","alpha3":"dzo","bibliographic":"","name":"Dzongkha"},{"alpha2":"","alpha3":"efi","bibliographic":"","name":"Efik"},{"alpha2":"","alpha3":"egy","bibliographic":"","name":"Egyptian (Ancient)"},{"alpha2":"","alpha3":"eka","bibliographic":"","name":"Ekajuk"},{"alpha2":"el","alpha3":"ell","bibliographic":"gre","name":"Greek, Modern (1453-)"},{"alpha2":"","alpha3":"elx","bibliographic":"","name":"Elamite"},{"alpha2":"en","alpha3":"eng","bibliographic":"","name":"English"},{"alpha2":"","alpha3":"enm","bibliographic":"","name":"English, Middle (1100-1500)"},{"alpha2":"eo","alpha3":"epo","bibliographic":"","name":"Esperanto"},{"alpha2":"et","alpha3":"est","bibliographic":"","name":"Estonian"},{"alpha2":"eu","alpha3":"eus","bibliographic":"baq","name":"Basque"},{"alpha2":"ee","alpha3":"ewe","bibliographic":"","name":"Ewe"},{"alpha2":"","alpha3":"ewo","bibliographic":"","name":"Ewondo"},{"alpha2":"","alpha3":"fan","bibliographic":"","name":"Fang"},{"alpha2":"fo","alpha3":"fao","bibliographic":"","name":"Faroese"},{"alpha2":"fa","alpha3":"fas","bibliographic":"per","name":"Persian"},{"alpha2":"","alpha3":"fat","bibliographic":"","name":"Fanti"},{"alpha2":"fj","alpha3":"fij","bibliographic":"","name":"Fijian"},{"alpha2":"","alpha3":"fil","bibliographic":"","name":"Filipino"},{"alpha2":"","alpha3":"fil","bibliographic":"","name":"Pilipino"},{"alpha2":"fi","alpha3":"fin","bibliographic":"","name":"Finnish"},{"alpha2":"","alpha3":"fiu","bibliographic":"","name":"Finno-Ugrian languages"},{"alpha2":"","alpha3":"fon","bibliographic":"","name":"Fon"},{"alpha2":"fr","alpha3":"fra","bibliographic":"fre","name":"French"},{"alpha2":"","alpha3":"frm","bibliographic":"","name":"French, Middle (ca.1400-1600)"},{"alpha2":"","alpha3":"fro","bibliographic":"","name":"French, Old (842-ca.1400)"},{"alpha2":"","alpha3":"frr","bibliographic":"","name":"Northern Frisian"},{"alpha2":"","alpha3":"frs","bibliographic":"","name":"Eastern Frisian"},{"alpha2":"fy","alpha3":"fry","bibliographic":"","name":"Western Frisian"},{"alpha2":"ff","alpha3":"ful","bibliographic":"","name":"Fulah"},{"alpha2":"","alpha3":"fur","bibliographic":"","name":"Friulian"},{"alpha2":"","alpha3":"gaa","bibliographic":"","name":"Ga"},{"alpha2":"","alpha3":"gay","bibliographic":"","name":"Gayo"},{"alpha2":"","alpha3":"gba","bibliographic":"","name":"Gbaya"},{"alpha2":"","alpha3":"gem","bibliographic":"","name":"Germanic languages"},{"alpha2":"","alpha3":"gez","bibliographic":"","name":"Geez"},{"alpha2":"","alpha3":"gil","bibliographic":"","name":"Gilbertese"},{"alpha2":"gd","alpha3":"gla","bibliographic":"","name":"Gaelic"},{"alpha2":"gd","alpha3":"gla","bibliographic":"","name":"Scottish Gaelic"},{"alpha2":"ga","alpha3":"gle","bibliographic":"","name":"Irish"},{"alpha2":"gl","alpha3":"glg","bibliographic":"","name":"Galician"},{"alpha2":"gv","alpha3":"glv","bibliographic":"","name":"Manx"},{"alpha2":"","alpha3":"gmh","bibliographic":"","name":"German, Middle High (ca.1050-1500)"},{"alpha2":"","alpha3":"goh","bibliographic":"","name":"German, Old High (ca.750-1050)"},{"alpha2":"","alpha3":"gon","bibliographic":"","name":"Gondi"},{"alpha2":"","alpha3":"gor","bibliographic":"","name":"Gorontalo"},{"alpha2":"","alpha3":"got","bibliographic":"","name":"Gothic"},{"alpha2":"","alpha3":"grb","bibliographic":"","name":"Grebo"},{"alpha2":"","alpha3":"grc","bibliographic":"","name":"Greek, Ancient (to 1453)"},{"alpha2":"gn","alpha3":"grn","bibliographic":"","name":"Guarani"},{"alpha2":"","alpha3":"gsw","bibliographic":"","name":"Alemannic"},{"alpha2":"","alpha3":"gsw","bibliographic":"","name":"Alsatian"},{"alpha2":"","alpha3":"gsw","bibliographic":"","name":"Swiss German"},{"alpha2":"gu","alpha3":"guj","bibliographic":"","name":"Gujarati"},{"alpha2":"","alpha3":"gwi","bibliographic":"","name":"Gwich\'in"},{"alpha2":"","alpha3":"hai","bibliographic":"","name":"Haida"},{"alpha2":"ht","alpha3":"hat","bibliographic":"","name":"Haitian"},{"alpha2":"ht","alpha3":"hat","bibliographic":"","name":"Haitian Creole"},{"alpha2":"ha","alpha3":"hau","bibliographic":"","name":"Hausa"},{"alpha2":"","alpha3":"haw","bibliographic":"","name":"Hawaiian"},{"alpha2":"he","alpha3":"heb","bibliographic":"","name":"Hebrew"},{"alpha2":"hz","alpha3":"her","bibliographic":"","name":"Herero"},{"alpha2":"","alpha3":"hil","bibliographic":"","name":"Hiligaynon"},{"alpha2":"","alpha3":"him","bibliographic":"","name":"Himachali languages"},{"alpha2":"","alpha3":"him","bibliographic":"","name":"Western Pahari languages"},{"alpha2":"hi","alpha3":"hin","bibliographic":"","name":"Hindi"},{"alpha2":"","alpha3":"hit","bibliographic":"","name":"Hittite"},{"alpha2":"","alpha3":"hmn","bibliographic":"","name":"Hmong"},{"alpha2":"","alpha3":"hmn","bibliographic":"","name":"Mong"},{"alpha2":"ho","alpha3":"hmo","bibliographic":"","name":"Hiri Motu"},{"alpha2":"hr","alpha3":"hrv","bibliographic":"","name":"Croatian"},{"alpha2":"","alpha3":"hsb","bibliographic":"","name":"Upper Sorbian"},{"alpha2":"hu","alpha3":"hun","bibliographic":"","name":"Hungarian"},{"alpha2":"","alpha3":"hup","bibliographic":"","name":"Hupa"},{"alpha2":"hy","alpha3":"hye","bibliographic":"arm","name":"Armenian"},{"alpha2":"","alpha3":"iba","bibliographic":"","name":"Iban"},{"alpha2":"ig","alpha3":"ibo","bibliographic":"","name":"Igbo"},{"alpha2":"io","alpha3":"ido","bibliographic":"","name":"Ido"},{"alpha2":"ii","alpha3":"iii","bibliographic":"","name":"Nuosu"},{"alpha2":"ii","alpha3":"iii","bibliographic":"","name":"Sichuan Yi"},{"alpha2":"","alpha3":"ijo","bibliographic":"","name":"Ijo languages"},{"alpha2":"iu","alpha3":"iku","bibliographic":"","name":"Inuktitut"},{"alpha2":"ie","alpha3":"ile","bibliographic":"","name":"Interlingue"},{"alpha2":"ie","alpha3":"ile","bibliographic":"","name":"Occidental"},{"alpha2":"","alpha3":"ilo","bibliographic":"","name":"Iloko"},{"alpha2":"ia","alpha3":"ina","bibliographic":"","name":"Interlingua (International Auxiliary Language Association)"},{"alpha2":"","alpha3":"inc","bibliographic":"","name":"Indic languages"},{"alpha2":"id","alpha3":"ind","bibliographic":"","name":"Indonesian"},{"alpha2":"","alpha3":"ine","bibliographic":"","name":"Indo-European languages"},{"alpha2":"","alpha3":"inh","bibliographic":"","name":"Ingush"},{"alpha2":"ik","alpha3":"ipk","bibliographic":"","name":"Inupiaq"},{"alpha2":"","alpha3":"ira","bibliographic":"","name":"Iranian languages"},{"alpha2":"","alpha3":"iro","bibliographic":"","name":"Iroquoian languages"},{"alpha2":"is","alpha3":"isl","bibliographic":"ice","name":"Icelandic"},{"alpha2":"it","alpha3":"ita","bibliographic":"","name":"Italian"},{"alpha2":"jv","alpha3":"jav","bibliographic":"","name":"Javanese"},{"alpha2":"","alpha3":"jbo","bibliographic":"","name":"Lojban"},{"alpha2":"ja","alpha3":"jpn","bibliographic":"","name":"Japanese"},{"alpha2":"","alpha3":"jpr","bibliographic":"","name":"Judeo-Persian"},{"alpha2":"","alpha3":"jrb","bibliographic":"","name":"Judeo-Arabic"},{"alpha2":"","alpha3":"kaa","bibliographic":"","name":"Kara-Kalpak"},{"alpha2":"","alpha3":"kab","bibliographic":"","name":"Kabyle"},{"alpha2":"","alpha3":"kac","bibliographic":"","name":"Jingpho"},{"alpha2":"","alpha3":"kac","bibliographic":"","name":"Kachin"},{"alpha2":"kl","alpha3":"kal","bibliographic":"","name":"Greenlandic"},{"alpha2":"kl","alpha3":"kal","bibliographic":"","name":"Kalaallisut"},{"alpha2":"","alpha3":"kam","bibliographic":"","name":"Kamba"},{"alpha2":"kn","alpha3":"kan","bibliographic":"","name":"Kannada"},{"alpha2":"","alpha3":"kar","bibliographic":"","name":"Karen languages"},{"alpha2":"ks","alpha3":"kas","bibliographic":"","name":"Kashmiri"},{"alpha2":"ka","alpha3":"kat","bibliographic":"geo","name":"Georgian"},{"alpha2":"kr","alpha3":"kau","bibliographic":"","name":"Kanuri"},{"alpha2":"","alpha3":"kaw","bibliographic":"","name":"Kawi"},{"alpha2":"kk","alpha3":"kaz","bibliographic":"","name":"Kazakh"},{"alpha2":"","alpha3":"kbd","bibliographic":"","name":"Kabardian"},{"alpha2":"","alpha3":"kha","bibliographic":"","name":"Khasi"},{"alpha2":"","alpha3":"khi","bibliographic":"","name":"Khoisan languages"},{"alpha2":"km","alpha3":"khm","bibliographic":"","name":"Central Khmer"},{"alpha2":"","alpha3":"kho","bibliographic":"","name":"Khotanese"},{"alpha2":"","alpha3":"kho","bibliographic":"","name":"Sakan"},{"alpha2":"ki","alpha3":"kik","bibliographic":"","name":"Gikuyu"},{"alpha2":"ki","alpha3":"kik","bibliographic":"","name":"Kikuyu"},{"alpha2":"rw","alpha3":"kin","bibliographic":"","name":"Kinyarwanda"},{"alpha2":"ky","alpha3":"kir","bibliographic":"","name":"Kirghiz"},{"alpha2":"ky","alpha3":"kir","bibliographic":"","name":"Kyrgyz"},{"alpha2":"","alpha3":"kmb","bibliographic":"","name":"Kimbundu"},{"alpha2":"","alpha3":"kok","bibliographic":"","name":"Konkani"},{"alpha2":"kv","alpha3":"kom","bibliographic":"","name":"Komi"},{"alpha2":"kg","alpha3":"kon","bibliographic":"","name":"Kongo"},{"alpha2":"ko","alpha3":"kor","bibliographic":"","name":"Korean"},{"alpha2":"","alpha3":"kos","bibliographic":"","name":"Kosraean"},{"alpha2":"","alpha3":"kpe","bibliographic":"","name":"Kpelle"},{"alpha2":"","alpha3":"krc","bibliographic":"","name":"Karachay-Balkar"},{"alpha2":"","alpha3":"krl","bibliographic":"","name":"Karelian"},{"alpha2":"","alpha3":"kro","bibliographic":"","name":"Kru languages"},{"alpha2":"","alpha3":"kru","bibliographic":"","name":"Kurukh"},{"alpha2":"kj","alpha3":"kua","bibliographic":"","name":"Kuanyama"},{"alpha2":"kj","alpha3":"kua","bibliographic":"","name":"Kwanyama"},{"alpha2":"","alpha3":"kum","bibliographic":"","name":"Kumyk"},{"alpha2":"ku","alpha3":"kur","bibliographic":"","name":"Kurdish"},{"alpha2":"","alpha3":"kut","bibliographic":"","name":"Kutenai"},{"alpha2":"","alpha3":"lad","bibliographic":"","name":"Ladino"},{"alpha2":"","alpha3":"lah","bibliographic":"","name":"Lahnda"},{"alpha2":"","alpha3":"lam","bibliographic":"","name":"Lamba"},{"alpha2":"lo","alpha3":"lao","bibliographic":"","name":"Lao"},{"alpha2":"la","alpha3":"lat","bibliographic":"","name":"Latin"},{"alpha2":"lv","alpha3":"lav","bibliographic":"","name":"Latvian"},{"alpha2":"","alpha3":"lez","bibliographic":"","name":"Lezghian"},{"alpha2":"li","alpha3":"lim","bibliographic":"","name":"Limburgan"},{"alpha2":"li","alpha3":"lim","bibliographic":"","name":"Limburger"},{"alpha2":"li","alpha3":"lim","bibliographic":"","name":"Limburgish"},{"alpha2":"ln","alpha3":"lin","bibliographic":"","name":"Lingala"},{"alpha2":"lt","alpha3":"lit","bibliographic":"","name":"Lithuanian"},{"alpha2":"","alpha3":"lol","bibliographic":"","name":"Mongo"},{"alpha2":"","alpha3":"loz","bibliographic":"","name":"Lozi"},{"alpha2":"lb","alpha3":"ltz","bibliographic":"","name":"Letzeburgesch"},{"alpha2":"lb","alpha3":"ltz","bibliographic":"","name":"Luxembourgish"},{"alpha2":"","alpha3":"lua","bibliographic":"","name":"Luba-Lulua"},{"alpha2":"lu","alpha3":"lub","bibliographic":"","name":"Luba-Katanga"},{"alpha2":"lg","alpha3":"lug","bibliographic":"","name":"Ganda"},{"alpha2":"","alpha3":"lui","bibliographic":"","name":"Luiseno"},{"alpha2":"","alpha3":"lun","bibliographic":"","name":"Lunda"},{"alpha2":"","alpha3":"luo","bibliographic":"","name":"Luo (Kenya and Tanzania)"},{"alpha2":"","alpha3":"lus","bibliographic":"","name":"Lushai"},{"alpha2":"","alpha3":"mad","bibliographic":"","name":"Madurese"},{"alpha2":"","alpha3":"mag","bibliographic":"","name":"Magahi"},{"alpha2":"mh","alpha3":"mah","bibliographic":"","name":"Marshallese"},{"alpha2":"","alpha3":"mai","bibliographic":"","name":"Maithili"},{"alpha2":"","alpha3":"mak","bibliographic":"","name":"Makasar"},{"alpha2":"ml","alpha3":"mal","bibliographic":"","name":"Malayalam"},{"alpha2":"","alpha3":"man","bibliographic":"","name":"Mandingo"},{"alpha2":"","alpha3":"map","bibliographic":"","name":"Austronesian languages"},{"alpha2":"mr","alpha3":"mar","bibliographic":"","name":"Marathi"},{"alpha2":"","alpha3":"mas","bibliographic":"","name":"Masai"},{"alpha2":"","alpha3":"mdf","bibliographic":"","name":"Moksha"},{"alpha2":"","alpha3":"mdr","bibliographic":"","name":"Mandar"},{"alpha2":"","alpha3":"men","bibliographic":"","name":"Mende"},{"alpha2":"","alpha3":"mga","bibliographic":"","name":"Irish, Middle (900-1200)"},{"alpha2":"","alpha3":"mic","bibliographic":"","name":"Mi\'kmaq"},{"alpha2":"","alpha3":"mic","bibliographic":"","name":"Micmac"},{"alpha2":"","alpha3":"min","bibliographic":"","name":"Minangkabau"},{"alpha2":"","alpha3":"mis","bibliographic":"","name":"Uncoded languages"},{"alpha2":"mk","alpha3":"mkd","bibliographic":"mac","name":"Macedonian"},{"alpha2":"","alpha3":"mkh","bibliographic":"","name":"Mon-Khmer languages"},{"alpha2":"mg","alpha3":"mlg","bibliographic":"","name":"Malagasy"},{"alpha2":"mt","alpha3":"mlt","bibliographic":"","name":"Maltese"},{"alpha2":"","alpha3":"mnc","bibliographic":"","name":"Manchu"},{"alpha2":"","alpha3":"mni","bibliographic":"","name":"Manipuri"},{"alpha2":"","alpha3":"mno","bibliographic":"","name":"Manobo languages"},{"alpha2":"","alpha3":"moh","bibliographic":"","name":"Mohawk"},{"alpha2":"mn","alpha3":"mon","bibliographic":"","name":"Mongolian"},{"alpha2":"","alpha3":"mos","bibliographic":"","name":"Mossi"},{"alpha2":"","alpha3":"mot","bibliographic":"","name":"Montenegrin"},{"alpha2":"mi","alpha3":"mri","bibliographic":"mao","name":"Maori"},{"alpha2":"ms","alpha3":"msa","bibliographic":"may","name":"Malay"},{"alpha2":"","alpha3":"mul","bibliographic":"","name":"Multiple languages"},{"alpha2":"","alpha3":"mun","bibliographic":"","name":"Munda languages"},{"alpha2":"","alpha3":"mus","bibliographic":"","name":"Creek"},{"alpha2":"","alpha3":"mwl","bibliographic":"","name":"Mirandese"},{"alpha2":"","alpha3":"mwr","bibliographic":"","name":"Marwari"},{"alpha2":"my","alpha3":"mya","bibliographic":"bur","name":"Burmese"},{"alpha2":"","alpha3":"myn","bibliographic":"","name":"Mayan languages"},{"alpha2":"","alpha3":"myv","bibliographic":"","name":"Erzya"},{"alpha2":"","alpha3":"nah","bibliographic":"","name":"Nahuatl languages"},{"alpha2":"","alpha3":"nai","bibliographic":"","name":"North American Indian languages"},{"alpha2":"","alpha3":"nap","bibliographic":"","name":"Neapolitan"},{"alpha2":"na","alpha3":"nau","bibliographic":"","name":"Nauru"},{"alpha2":"nv","alpha3":"nav","bibliographic":"","name":"Navaho"},{"alpha2":"nv","alpha3":"nav","bibliographic":"","name":"Navajo"},{"alpha2":"nr","alpha3":"nbl","bibliographic":"","name":"Ndebele, South"},{"alpha2":"nr","alpha3":"nbl","bibliographic":"","name":"South Ndebele"},{"alpha2":"nd","alpha3":"nde","bibliographic":"","name":"Ndebele, North"},{"alpha2":"nd","alpha3":"nde","bibliographic":"","name":"North Ndebele"},{"alpha2":"ng","alpha3":"ndo","bibliographic":"","name":"Ndonga"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"German, Low"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"Low German"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"Low Saxon"},{"alpha2":"","alpha3":"nds","bibliographic":"","name":"Saxon, Low"},{"alpha2":"ne","alpha3":"nep","bibliographic":"","name":"Nepali"},{"alpha2":"","alpha3":"new","bibliographic":"","name":"Nepal Bhasa"},{"alpha2":"","alpha3":"new","bibliographic":"","name":"Newari"},{"alpha2":"","alpha3":"nia","bibliographic":"","name":"Nias"},{"alpha2":"","alpha3":"nic","bibliographic":"","name":"Niger-Kordofanian languages"},{"alpha2":"","alpha3":"niu","bibliographic":"","name":"Niuean"},{"alpha2":"nl","alpha3":"nld","bibliographic":"dut","name":"Dutch"},{"alpha2":"nl","alpha3":"nld","bibliographic":"dut","name":"Flemish"},{"alpha2":"nn","alpha3":"nno","bibliographic":"","name":"Norwegian Nynorsk"},{"alpha2":"nn","alpha3":"nno","bibliographic":"","name":"Nynorsk, Norwegian"},{"alpha2":"nb","alpha3":"nob","bibliographic":"","name":"Bokm\xe5l, Norwegian"},{"alpha2":"nb","alpha3":"nob","bibliographic":"","name":"Norwegian Bokm\xe5l"},{"alpha2":"","alpha3":"nog","bibliographic":"","name":"Nogai"},{"alpha2":"","alpha3":"non","bibliographic":"","name":"Norse, Old"},{"alpha2":"no","alpha3":"nor","bibliographic":"","name":"Norwegian"},{"alpha2":"","alpha3":"nqo","bibliographic":"","name":"N\'Ko"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Northern Sotho"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Pedi"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Sepedi"},{"alpha2":"","alpha3":"nso","bibliographic":"","name":"Sotho, Northern"},{"alpha2":"","alpha3":"nub","bibliographic":"","name":"Nubian languages"},{"alpha2":"","alpha3":"nwc","bibliographic":"","name":"Classical Nepal Bhasa"},{"alpha2":"","alpha3":"nwc","bibliographic":"","name":"Classical Newari"},{"alpha2":"","alpha3":"nwc","bibliographic":"","name":"Old Newari"},{"alpha2":"ny","alpha3":"nya","bibliographic":"","name":"Chewa"},{"alpha2":"ny","alpha3":"nya","bibliographic":"","name":"Chichewa"},{"alpha2":"ny","alpha3":"nya","bibliographic":"","name":"Nyanja"},{"alpha2":"","alpha3":"nym","bibliographic":"","name":"Nyamwezi"},{"alpha2":"","alpha3":"nyn","bibliographic":"","name":"Nyankole"},{"alpha2":"","alpha3":"nyo","bibliographic":"","name":"Nyoro"},{"alpha2":"","alpha3":"nzi","bibliographic":"","name":"Nzima"},{"alpha2":"oc","alpha3":"oci","bibliographic":"","name":"Occitan (post 1500)"},{"alpha2":"oj","alpha3":"oji","bibliographic":"","name":"Ojibwa"},{"alpha2":"or","alpha3":"ori","bibliographic":"","name":"Oriya"},{"alpha2":"om","alpha3":"orm","bibliographic":"","name":"Oromo"},{"alpha2":"","alpha3":"osa","bibliographic":"","name":"Osage"},{"alpha2":"os","alpha3":"oss","bibliographic":"","name":"Ossetian"},{"alpha2":"os","alpha3":"oss","bibliographic":"","name":"Ossetic"},{"alpha2":"","alpha3":"ota","bibliographic":"","name":"Turkish, Ottoman (1500-1928)"},{"alpha2":"","alpha3":"oto","bibliographic":"","name":"Otomian languages"},{"alpha2":"","alpha3":"paa","bibliographic":"","name":"Papuan languages"},{"alpha2":"","alpha3":"pag","bibliographic":"","name":"Pangasinan"},{"alpha2":"","alpha3":"pal","bibliographic":"","name":"Pahlavi"},{"alpha2":"","alpha3":"pam","bibliographic":"","name":"Kapampangan"},{"alpha2":"","alpha3":"pam","bibliographic":"","name":"Pampanga"},{"alpha2":"pa","alpha3":"pan","bibliographic":"","name":"Panjabi"},{"alpha2":"pa","alpha3":"pan","bibliographic":"","name":"Punjabi"},{"alpha2":"","alpha3":"pap","bibliographic":"","name":"Papiamento"},{"alpha2":"","alpha3":"pau","bibliographic":"","name":"Palauan"},{"alpha2":"","alpha3":"peo","bibliographic":"","name":"Persian, Old (ca.600-400 B.C.)"},{"alpha2":"","alpha3":"phi","bibliographic":"","name":"Philippine languages"},{"alpha2":"","alpha3":"phn","bibliographic":"","name":"Phoenician"},{"alpha2":"pi","alpha3":"pli","bibliographic":"","name":"Pali"},{"alpha2":"pl","alpha3":"pol","bibliographic":"","name":"Polish"},{"alpha2":"","alpha3":"pon","bibliographic":"","name":"Pohnpeian"},{"alpha2":"pt","alpha3":"por","bibliographic":"","name":"Portuguese"},{"alpha2":"","alpha3":"pra","bibliographic":"","name":"Prakrit languages"},{"alpha2":"","alpha3":"pro","bibliographic":"","name":"Occitan, Old (to 1500)"},{"alpha2":"","alpha3":"pro","bibliographic":"","name":"Proven\xe7al, Old (to 1500)"},{"alpha2":"ps","alpha3":"pus","bibliographic":"","name":"Pashto"},{"alpha2":"ps","alpha3":"pus","bibliographic":"","name":"Pushto"},{"alpha2":"qu","alpha3":"que","bibliographic":"","name":"Quechua"},{"alpha2":"","alpha3":"raj","bibliographic":"","name":"Rajasthani"},{"alpha2":"","alpha3":"rap","bibliographic":"","name":"Rapanui"},{"alpha2":"","alpha3":"rar","bibliographic":"","name":"Cook Islands Maori"},{"alpha2":"","alpha3":"rar","bibliographic":"","name":"Rarotongan"},{"alpha2":"","alpha3":"roa","bibliographic":"","name":"Romance languages"},{"alpha2":"rm","alpha3":"roh","bibliographic":"","name":"Romansh"},{"alpha2":"","alpha3":"rom","bibliographic":"","name":"Romany"},{"alpha2":"ro","alpha3":"ron","bibliographic":"rum","name":"Moldavian"},{"alpha2":"ro","alpha3":"ron","bibliographic":"rum","name":"Romanian"},{"alpha2":"rn","alpha3":"run","bibliographic":"","name":"Rundi"},{"alpha2":"","alpha3":"rup","bibliographic":"","name":"Aromanian"},{"alpha2":"","alpha3":"rup","bibliographic":"","name":"Arumanian"},{"alpha2":"","alpha3":"rup","bibliographic":"","name":"Macedo-Romanian"},{"alpha2":"ru","alpha3":"rus","bibliographic":"","name":"Russian"},{"alpha2":"","alpha3":"sad","bibliographic":"","name":"Sandawe"},{"alpha2":"sg","alpha3":"sag","bibliographic":"","name":"Sango"},{"alpha2":"","alpha3":"sah","bibliographic":"","name":"Yakut"},{"alpha2":"","alpha3":"sai","bibliographic":"","name":"South American Indian languages"},{"alpha2":"","alpha3":"sal","bibliographic":"","name":"Salishan languages"},{"alpha2":"","alpha3":"sam","bibliographic":"","name":"Samaritan Aramaic"},{"alpha2":"sa","alpha3":"san","bibliographic":"","name":"Sanskrit"},{"alpha2":"","alpha3":"sas","bibliographic":"","name":"Sasak"},{"alpha2":"","alpha3":"sat","bibliographic":"","name":"Santali"},{"alpha2":"","alpha3":"scn","bibliographic":"","name":"Sicilian"},{"alpha2":"","alpha3":"sco","bibliographic":"","name":"Scots"},{"alpha2":"","alpha3":"sel","bibliographic":"","name":"Selkup"},{"alpha2":"","alpha3":"sem","bibliographic":"","name":"Semitic languages"},{"alpha2":"","alpha3":"sga","bibliographic":"","name":"Irish, Old (to 900)"},{"alpha2":"","alpha3":"sgn","bibliographic":"","name":"Sign Languages"},{"alpha2":"","alpha3":"shn","bibliographic":"","name":"Shan"},{"alpha2":"","alpha3":"sid","bibliographic":"","name":"Sidamo"},{"alpha2":"si","alpha3":"sin","bibliographic":"","name":"Sinhala"},{"alpha2":"si","alpha3":"sin","bibliographic":"","name":"Sinhalese"},{"alpha2":"","alpha3":"sio","bibliographic":"","name":"Siouan languages"},{"alpha2":"","alpha3":"sit","bibliographic":"","name":"Sino-Tibetan languages"},{"alpha2":"","alpha3":"sla","bibliographic":"","name":"Slavic languages"},{"alpha2":"sk","alpha3":"slk","bibliographic":"slo","name":"Slovak"},{"alpha2":"sl","alpha3":"slv","bibliographic":"","name":"Slovenian"},{"alpha2":"","alpha3":"sma","bibliographic":"","name":"Southern Sami"},{"alpha2":"se","alpha3":"sme","bibliographic":"","name":"Northern Sami"},{"alpha2":"","alpha3":"smi","bibliographic":"","name":"Sami languages"},{"alpha2":"","alpha3":"smj","bibliographic":"","name":"Lule Sami"},{"alpha2":"","alpha3":"smn","bibliographic":"","name":"Inari Sami"},{"alpha2":"sm","alpha3":"smo","bibliographic":"","name":"Samoan"},{"alpha2":"","alpha3":"sms","bibliographic":"","name":"Skolt Sami"},{"alpha2":"sn","alpha3":"sna","bibliographic":"","name":"Shona"},{"alpha2":"sd","alpha3":"snd","bibliographic":"","name":"Sindhi"},{"alpha2":"","alpha3":"snk","bibliographic":"","name":"Soninke"},{"alpha2":"","alpha3":"sog","bibliographic":"","name":"Sogdian"},{"alpha2":"so","alpha3":"som","bibliographic":"","name":"Somali"},{"alpha2":"","alpha3":"son","bibliographic":"","name":"Songhai languages"},{"alpha2":"st","alpha3":"sot","bibliographic":"","name":"Sotho, Southern"},{"alpha2":"es","alpha3":"spa","bibliographic":"","name":"Castilian"},{"alpha2":"es","alpha3":"spa","bibliographic":"","name":"Spanish"},{"alpha2":"sq","alpha3":"sqi","bibliographic":"alb","name":"Albanian"},{"alpha2":"sc","alpha3":"srd","bibliographic":"","name":"Sardinian"},{"alpha2":"","alpha3":"srn","bibliographic":"","name":"Sranan Tongo"},{"alpha2":"sr","alpha3":"srp","bibliographic":"","name":"Serbian"},{"alpha2":"","alpha3":"srr","bibliographic":"","name":"Serer"},{"alpha2":"","alpha3":"ssa","bibliographic":"","name":"Nilo-Saharan languages"},{"alpha2":"ss","alpha3":"ssw","bibliographic":"","name":"Swati"},{"alpha2":"","alpha3":"suk","bibliographic":"","name":"Sukuma"},{"alpha2":"su","alpha3":"sun","bibliographic":"","name":"Sundanese"},{"alpha2":"","alpha3":"sus","bibliographic":"","name":"Susu"},{"alpha2":"","alpha3":"sux","bibliographic":"","name":"Sumerian"},{"alpha2":"sw","alpha3":"swa","bibliographic":"","name":"Swahili"},{"alpha2":"sv","alpha3":"swe","bibliographic":"","name":"Swedish"},{"alpha2":"","alpha3":"syc","bibliographic":"","name":"Classical Syriac"},{"alpha2":"","alpha3":"syr","bibliographic":"","name":"Syriac"},{"alpha2":"ty","alpha3":"tah","bibliographic":"","name":"Tahitian"},{"alpha2":"","alpha3":"tai","bibliographic":"","name":"Tai languages"},{"alpha2":"ta","alpha3":"tam","bibliographic":"","name":"Tamil"},{"alpha2":"tt","alpha3":"tat","bibliographic":"","name":"Tatar"},{"alpha2":"te","alpha3":"tel","bibliographic":"","name":"Telugu"},{"alpha2":"","alpha3":"tem","bibliographic":"","name":"Timne"},{"alpha2":"","alpha3":"ter","bibliographic":"","name":"Tereno"},{"alpha2":"","alpha3":"tet","bibliographic":"","name":"Tetum"},{"alpha2":"tg","alpha3":"tgk","bibliographic":"","name":"Tajik"},{"alpha2":"tl","alpha3":"tgl","bibliographic":"","name":"Tagalog"},{"alpha2":"th","alpha3":"tha","bibliographic":"","name":"Thai"},{"alpha2":"","alpha3":"tig","bibliographic":"","name":"Tigre"},{"alpha2":"ti","alpha3":"tir","bibliographic":"","name":"Tigrinya"},{"alpha2":"","alpha3":"tiv","bibliographic":"","name":"Tiv"},{"alpha2":"","alpha3":"tkl","bibliographic":"","name":"Tokelau"},{"alpha2":"","alpha3":"tlh","bibliographic":"","name":"Klingon"},{"alpha2":"","alpha3":"tlh","bibliographic":"","name":"tlhIngan-Hol"},{"alpha2":"","alpha3":"tli","bibliographic":"","name":"Tlingit"},{"alpha2":"","alpha3":"tmh","bibliographic":"","name":"Tamashek"},{"alpha2":"","alpha3":"tog","bibliographic":"","name":"Tonga (Nyasa)"},{"alpha2":"to","alpha3":"ton","bibliographic":"","name":"Tonga (Tonga Islands)"},{"alpha2":"","alpha3":"tpi","bibliographic":"","name":"Tok Pisin"},{"alpha2":"","alpha3":"tsi","bibliographic":"","name":"Tsimshian"},{"alpha2":"tn","alpha3":"tsn","bibliographic":"","name":"Tswana"},{"alpha2":"ts","alpha3":"tso","bibliographic":"","name":"Tsonga"},{"alpha2":"tk","alpha3":"tuk","bibliographic":"","name":"Turkmen"},{"alpha2":"","alpha3":"tum","bibliographic":"","name":"Tumbuka"},{"alpha2":"","alpha3":"tup","bibliographic":"","name":"Tupi languages"},{"alpha2":"tr","alpha3":"tur","bibliographic":"","name":"Turkish"},{"alpha2":"","alpha3":"tut","bibliographic":"","name":"Altaic languages"},{"alpha2":"","alpha3":"tvl","bibliographic":"","name":"Tuvalu"},{"alpha2":"tw","alpha3":"twi","bibliographic":"","name":"Twi"},{"alpha2":"","alpha3":"tyv","bibliographic":"","name":"Tuvinian"},{"alpha2":"","alpha3":"udm","bibliographic":"","name":"Udmurt"},{"alpha2":"","alpha3":"uga","bibliographic":"","name":"Ugaritic"},{"alpha2":"ug","alpha3":"uig","bibliographic":"","name":"Uighur"},{"alpha2":"ug","alpha3":"uig","bibliographic":"","name":"Uyghur"},{"alpha2":"uk","alpha3":"ukr","bibliographic":"","name":"Ukrainian"},{"alpha2":"","alpha3":"umb","bibliographic":"","name":"Umbundu"},{"alpha2":"","alpha3":"und","bibliographic":"","name":"Undetermined"},{"alpha2":"ur","alpha3":"urd","bibliographic":"","name":"Urdu"},{"alpha2":"uz","alpha3":"uzb","bibliographic":"","name":"Uzbek"},{"alpha2":"","alpha3":"vai","bibliographic":"","name":"Vai"},{"alpha2":"ve","alpha3":"ven","bibliographic":"","name":"Venda"},{"alpha2":"vi","alpha3":"vie","bibliographic":"","name":"Vietnamese"},{"alpha2":"vo","alpha3":"vol","bibliographic":"","name":"Volap\xfck"},{"alpha2":"","alpha3":"vot","bibliographic":"","name":"Votic"},{"alpha2":"","alpha3":"wak","bibliographic":"","name":"Wakashan languages"},{"alpha2":"","alpha3":"wal","bibliographic":"","name":"Wolaitta"},{"alpha2":"","alpha3":"wal","bibliographic":"","name":"Wolaytta"},{"alpha2":"","alpha3":"war","bibliographic":"","name":"Waray"},{"alpha2":"","alpha3":"was","bibliographic":"","name":"Washo"},{"alpha2":"","alpha3":"wen","bibliographic":"","name":"Sorbian languages"},{"alpha2":"wa","alpha3":"wln","bibliographic":"","name":"Walloon"},{"alpha2":"wo","alpha3":"wol","bibliographic":"","name":"Wolof"},{"alpha2":"","alpha3":"xal","bibliographic":"","name":"Kalmyk"},{"alpha2":"","alpha3":"xal","bibliographic":"","name":"Oirat"},{"alpha2":"xh","alpha3":"xho","bibliographic":"","name":"Xhosa"},{"alpha2":"","alpha3":"yao","bibliographic":"","name":"Yao"},{"alpha2":"","alpha3":"yap","bibliographic":"","name":"Yapese"},{"alpha2":"yi","alpha3":"yid","bibliographic":"","name":"Yiddish"},{"alpha2":"yo","alpha3":"yor","bibliographic":"","name":"Yoruba"},{"alpha2":"","alpha3":"ypk","bibliographic":"","name":"Yupik languages"},{"alpha2":"","alpha3":"zap","bibliographic":"","name":"Zapotec"},{"alpha2":"","alpha3":"zbl","bibliographic":"","name":"Bliss"},{"alpha2":"","alpha3":"zbl","bibliographic":"","name":"Blissymbolics"},{"alpha2":"","alpha3":"zbl","bibliographic":"","name":"Blissymbols"},{"alpha2":"","alpha3":"zen","bibliographic":"","name":"Zenaga"},{"alpha2":"","alpha3":"zgh","bibliographic":"","name":"Standard Moroccan Tamazight"},{"alpha2":"za","alpha3":"zha","bibliographic":"","name":"Chuang"},{"alpha2":"za","alpha3":"zha","bibliographic":"","name":"Zhuang"},{"alpha2":"zh","alpha3":"zho","bibliographic":"chi","name":"Chinese"},{"alpha2":"","alpha3":"znd","bibliographic":"","name":"Zande languages"},{"alpha2":"zu","alpha3":"zul","bibliographic":"","name":"Zulu"},{"alpha2":"","alpha3":"zun","bibliographic":"","name":"Zuni"},{"alpha2":"","alpha3":"zxx","bibliographic":"","name":"No linguistic content"},{"alpha2":"","alpha3":"zxx","bibliographic":"","name":"Not applicable"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Dimili"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Dimli"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Kirdki"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Kirmanjki"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Zaza"},{"alpha2":"","alpha3":"zza","bibliographic":"","name":"Zazaki"}]')
        }
    }
]);