(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [604], {
        6097: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/express", function() {
                return s(34838)
            }])
        },
        34838: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var l = s(85893),
                r = s(32997),
                a = s(67294);
            let n = e => (0, l.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 448 512",
                ...e,
                children: (0, l.jsx)("path", {
                    fill: "currentColor",
                    d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                })
            });
            var i = s(47041);
            let c = e => (0, l.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    ...e,
                    children: (0, l.jsx)("path", {
                        fill: "currentColor",
                        d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    })
                }),
                o = s(3023).QT;
            var d = e => {
                    let {
                        activeFiat: t,
                        setActiveFiat: s,
                        fiats: d
                    } = e, [u, m] = (0, a.useState)(!1), x = e => {
                        console.log(e), m(!u)
                    }, p = e => {
                        let t = e.target.getAttribute("id");
                        t && "default-modal" == t && m(!1)
                    }, h = (e, t) => {
                        if (e.preventDefault(), t < 0 || t > d.length - 1) return;
                        s(d[t]);
                        let l = new Date(Date.now() + 2592e6);
                        (0, i.setCookie)("user_fiat", t, {
                            expires: l
                        }), m(!1)
                    };
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("button", {
                            onClick: e => x(e),
                            "aria-label": "change currency",
                            "data-modal-target": "default-modal",
                            "data-modal-toggle": "default-modal",
                            className: "flex gap-1 items-center absolute top-0 right-0 h-[100%] w-[70px] text-sm justify-center",
                            type: "button",
                            children: [(0, l.jsx)("p", {
                                children: null == t ? void 0 : t.ticker_symbol
                            }), (0, l.jsx)("p", {
                                children: (0, l.jsx)(c, {
                                    height: 12
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            id: "default-modal",
                            onClick: e => p(e),
                            className: "modal flex flex-col ".concat(u ? "fixed" : "hidden", " inset-0 z-[9999] top-0 left-0 bottom-0 w-[100%] backdrop-blur-md min-h-full items-center justify-center px-5"),
                            children: (0, l.jsxs)("div", {
                                className: "flex flex-col w-full max-w-[400px] rounded-xl overflow-hidden bg-white dark:bg-[#16162E] shadow-lg",
                                children: [(0, l.jsx)("div", {
                                    className: "p-7 border-b-1 border-b-white/5",
                                    children: "Select a default currency"
                                }), (0, l.jsx)("div", {
                                    className: "p-7 max-h-[600px] overflow-y-scroll",
                                    children: null == d ? void 0 : d.map((e, s) => {
                                        let a = o[e.ticker_symbol],
                                            i = (null == t ? void 0 : t.ticker_symbol) == e.ticker_symbol;
                                        return (0, l.jsxs)("button", {
                                            className: "mb-5 flex gap-4 items-center w-full",
                                            onClick: e => h(e, s),
                                            children: [(0, l.jsx)("div", {
                                                className: "min-w-[50px]",
                                                children: e.ticker_symbol
                                            }), (0, l.jsxs)("div", {
                                                className: "text-start",
                                                children: [(0, l.jsx)("p", {
                                                    children: a.name
                                                }), (0, l.jsxs)("p", {
                                                    className: "text-sm text-black/50 dark:text-white/70",
                                                    children: ["Min. ", a.symbol + (0, r.uf)(e.min_amount, a.decimals)]
                                                })]
                                            }), (0, l.jsx)("div", {
                                                className: "ml-auto",
                                                children: i && (0, l.jsx)(n, {
                                                    height: 20,
                                                    className: "text-success"
                                                })
                                            })]
                                        }, s)
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "p-7 border-t-1 border-t-white/5",
                                    children: (0, l.jsx)("button", {
                                        onClick: e => x(e),
                                        children: "Close"
                                    })
                                })]
                            })
                        })]
                    })
                },
                u = s(20060),
                m = s(24522),
                x = s(87066),
                p = s(25675),
                h = s.n(p),
                f = e => {
                    let {
                        activeCrypto: t,
                        setActiveCrypto: s,
                        cryptos: r
                    } = e, [n, i] = (0, a.useState)(!1), o = e => {
                        i(!n)
                    }, d = e => {
                        let t = e.target.getAttribute("id");
                        t && "default-modal" == t && i(!1)
                    }, u = (e, t) => {
                        e.preventDefault(), t < 0 || t > r.length - 1 || (s(r[t]), i(!1))
                    };
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("button", {
                            onClick: e => o(e),
                            "aria-label": "change currency",
                            "data-modal-target": "default-modal",
                            "data-modal-toggle": "default-modal",
                            className: "flex items-center gap-2 border-2 border-white/5 p-3 w-full dark:text-white focus:ring-0 focus:outline-none font-medium rounded-xl text-sm text-center mb-3",
                            type: "button",
                            children: [t && (0, l.jsx)(h(), {
                                src: "/img/tokens/".concat(null == t ? void 0 : t.ticker_symbol.toLowerCase(), ".png"),
                                width: 18,
                                height: 18,
                                alt: "icon"
                            }), (0, l.jsx)("p", {
                                children: null == t ? void 0 : t.name
                            }), (0, l.jsx)("p", {
                                children: (0, l.jsx)(c, {
                                    width: 12
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            id: "default-modal",
                            onClick: e => d(e),
                            className: "modal flex flex-col ".concat(n ? "fixed" : "hidden", " inset-0 z-[9999] top-0 left-0 bottom-0 w-[100%] backdrop-blur-md min-h-full items-center justify-center px-5"),
                            children: (0, l.jsxs)("div", {
                                className: "flex flex-col w-full max-w-[400px] rounded-xl overflow-hidden bg-white dark:bg-[#16162E] shadow-lg",
                                children: [(0, l.jsx)("div", {
                                    className: "p-7 border-b-1 border-b-white/5",
                                    children: "Select a Crypto"
                                }), (0, l.jsx)("div", {
                                    className: "p-7 max-h-[600px] overflow-y-scroll",
                                    children: null == r ? void 0 : r.map((e, t) => {
                                        let s = e.ticker_symbol.toLowerCase();
                                        return (0, l.jsxs)("button", {
                                            className: "mb-5 flex items-center w-full text-start gap-4",
                                            onClick: e => u(e, t),
                                            children: [(0, l.jsx)("div", {
                                                children: (0, l.jsx)(h(), {
                                                    src: "/img/tokens/".concat(s, ".png"),
                                                    width: 30,
                                                    height: 30,
                                                    alt: "icon"
                                                })
                                            }), (0, l.jsx)("div", {
                                                children: (0, l.jsxs)("p", {
                                                    children: [e.name, " ", (0, l.jsx)("small", {
                                                        className: "text-black/50 dark:text-white/50",
                                                        children: e.ticker_symbol
                                                    })]
                                                })
                                            }), (0, l.jsx)("div", {
                                                className: "ml-auto text-xs text-black/50 dark:text-white/50",
                                                children: e.networks[0]
                                            })]
                                        }, t)
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "p-7 border-t-1 border-t-white/5",
                                    children: (0, l.jsx)("button", {
                                        onClick: e => o(e),
                                        children: "Close"
                                    })
                                })]
                            })
                        })]
                    })
                },
                b = s(26281),
                j = e => {
                    let {
                        setQuote: t,
                        crypto: s,
                        fiat: r,
                        fiatAmount: n,
                        wallet: i,
                        setError: c
                    } = e, [o, d] = (0, a.useState)(!1), u = async () => {
                        if (!o) {
                            if (c(null), n < r.min_amount || n > r.max_amount) {
                                c("Amount must not exceeed the limits.");
                                return
                            }
                            d(!0);
                            try {
                                let e = await x.Z.get("https://api.ipify.org").then(e => e.data),
                                    l = {
                                        end_user_id: (0, b.Vj)(),
                                        digital_currency: s.ticker_symbol,
                                        fiat_currency: r.ticker_symbol,
                                        requested_currency: r.ticker_symbol,
                                        requested_amount: n,
                                        wallet_id: "dione",
                                        client_ip: e
                                    },
                                    a = await x.Z.post("https://webapi.dioneprotocol.com/simplex/quote", l).then(e => e.data);
                                if (a.error) {
                                    c(a.error), d(!1);
                                    return
                                }
                                d(!1), t(a)
                            } catch (e) {
                                c(e.message), d(!1)
                            }
                        }
                    };
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)("button", {
                            onClick: () => u(),
                            className: "px-6 py-4 bg-success/70 disabled:opacity-50 mb-3 hover:bg-success rounded-xl w-full font-[600] disabled:cursor-progress transition-opacity",
                            disabled: o || null == i || "" == i,
                            children: "Get Quote"
                        })
                    })
                },
                y = e => {
                    let {
                        quote: t,
                        setQuote: s,
                        setFiatAmount: r
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "text-start w-full",
                        children: [(0, l.jsx)("p", {
                            className: "text-lg font-bold",
                            children: "Your Quote:"
                        }), (0, l.jsx)("p", {
                            className: "text-xs",
                            children: "Please review the following details"
                        }), (0, l.jsx)("hr", {
                            className: " dark:border-white/20 my-3"
                        }), (0, l.jsxs)("div", {
                            className: "flex mb-2",
                            children: [(0, l.jsx)("p", {
                                children: "Fiat"
                            }), (0, l.jsxs)("p", {
                                className: "ml-auto",
                                children: [t.fiat_money.total_amount, " ", t.fiat_money.currency]
                            })]
                        }), (0, l.jsx)("hr", {
                            className: " dark:border-white/20 my-3"
                        }), (0, l.jsxs)("div", {
                            className: "flex justify-between mb-2",
                            children: [(0, l.jsx)("p", {
                                children: "Partner Fee"
                            }), (0, l.jsxs)("p", {
                                className: "text-danger",
                                children: ["-", t.fees.partner_fee.amount, " ", t.fees.partner_fee.currency]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex justify-between mb-2",
                            children: [(0, l.jsx)("p", {
                                children: "Blockchain Fee"
                            }), (0, l.jsxs)("p", {
                                className: "text-danger",
                                children: ["-", t.fees.blockchain_fee.amount, " ", t.fees.partner_fee.currency]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex justify-between mb-2",
                            children: [(0, l.jsx)("p", {
                                children: "Payment Fee"
                            }), (0, l.jsxs)("p", {
                                className: "text-danger",
                                children: ["-", t.fees.payment_fee.amount, " ", t.fees.partner_fee.currency]
                            })]
                        }), (0, l.jsx)("hr", {
                            className: " dark:border-white/20 my-3"
                        }), (0, l.jsxs)("div", {
                            className: "flex justify-between mb-2",
                            children: [(0, l.jsx)("p", {
                                children: "Base"
                            }), (0, l.jsxs)("p", {
                                children: [t.fiat_money.base_amount, " ", t.fees.partner_fee.currency]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex justify-between mb-5",
                            children: [(0, l.jsx)("p", {
                                children: "Crypto"
                            }), (0, l.jsxs)("p", {
                                className: "text-success font-bold",
                                children: [t.digital_money.amount, " ", t.digital_money.currency]
                            })]
                        })]
                    })
                },
                w = e => {
                    let {
                        quote: t,
                        resetQuote: s,
                        wallet: r,
                        setError: n
                    } = e, [i, c] = (0, a.useState)(!1), o = async () => {
                        c(!0);
                        try {
                            let e = await x.Z.get("https://api.ipify.org").then(e => e.data),
                                s = crypto.randomUUID(),
                                l = t.quote_id,
                                r = await u(e, l, s);
                            if (null == r) {
                                c(!1);
                                return
                            }
                            let a = d(s);
                            a.submit(), document.body.removeChild(a), c(!1)
                        } catch (e) {
                            console.log(e)
                        }
                    }, d = e => {
                        let t = document.createElement("form");
                        t.setAttribute("method", "POST"), t.setAttribute("action", "https://checkout.simplexcc.com/payments/new"), t.setAttribute("target", "_blank");
                        let s = [{
                            type: "hidden",
                            name: "version",
                            value: "1"
                        }, {
                            type: "hidden",
                            name: "partner",
                            value: "dione"
                        }, {
                            type: "hidden",
                            name: "payment_flow_type",
                            value: "dione"
                        }, {
                            type: "hidden",
                            name: "return_url_success",
                            value: "https://dioneprotocol.com/express"
                        }, {
                            type: "hidden",
                            name: "return_url_fail",
                            value: "https://dioneprotocol.com/express"
                        }, {
                            type: "hidden",
                            name: "payment_id",
                            value: e
                        }];
                        return console.log(s), s.forEach((e, s) => {
                            let l = document.createElement("input");
                            l.setAttribute("type", e.type), l.setAttribute("name", e.name), l.setAttribute("value", e.value), t.append(l)
                        }), document.body.appendChild(t), t
                    }, u = async (e, s, l) => {
                        try {
                            let a = {
                                    account_details: {
                                        app_provider_id: "dione",
                                        app_version_id: "1.3.1",
                                        app_end_user_id: t.user_id,
                                        signup_login: {
                                            ip: e,
                                            uaid: "IBAnKPg1bdxRiT6EDkIgo24Ri8akYQpsITRKIueg+3XjxWqZlmXin7YJtQzuY4K73PWTZOvmuhIHu + ee8m4Cs4WLEqd2SvQS9jW59pMDcYu + Tpl16U / Ss3SrcFKnriEn4VUVKG9QnpAJGYB3JUAPx1y7PbAugNoC8LX0Daqg66E = ",
                                            accept_language: "de,en-US;q=0.7,en;q=0.3",
                                            http_accept_language: "de,en-US;q=0.7,en;q=0.3",
                                            user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0",
                                            cookie_session_id: "7r7rz_VfGC_viXTp5XPh5Bm--rWM6RyU",
                                            timestamp: "2021-08-03T08:18:53.200Z"
                                        }
                                    },
                                    transaction_details: {
                                        payment_details: {
                                            quote_id: s,
                                            payment_id: l,
                                            original_http_ref_url: "https://dioneprotocol.com",
                                            destination_wallet: {
                                                currency: t.digital_money.currency,
                                                address: r
                                            }
                                        }
                                    }
                                },
                                i = await x.Z.post("https://webapi.dioneprotocol.com/simplex/partner/data", a).then(e => e.data);
                            if (i.error) return n(i.error), null;
                            return i
                        } catch (e) {
                            return n(e.message), null
                        }
                    };
                    return (0, l.jsxs)("div", {
                        className: "flex items-center gap-3 w-full",
                        children: [(0, l.jsx)("div", {
                            children: (0, l.jsx)("button", {
                                onClick: () => s(),
                                className: "mx-auto block px-3 py-3 bg-danger rounded-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-progress",
                                disabled: i,
                                children: "Cancel"
                            })
                        }), (0, l.jsx)("div", {
                            className: "w-full",
                            children: (0, l.jsx)("button", {
                                onClick: () => o(),
                                className: "mx-auto block px-3 py-3 bg-success w-full rounded-lg disabled:opacity-50 disabled:cursor-progress",
                                disabled: i,
                                children: "Continue"
                            })
                        })]
                    })
                };

            function g() {
                let [e, t] = (0, a.useState)(null), [s, r] = (0, a.useState)(!1), [n, c] = (0, a.useState)(null), [o, p] = (0, a.useState)(null), [h, b] = (0, a.useState)(null), [g, _] = (0, a.useState)(null), [v, N] = (0, a.useState)(null), [k, C] = (0, a.useState)(50), [S, E] = (0, a.useState)(null), A = "https://webapi.dioneprotocol.com/simplex/currency";
                (0, a.useEffect)(() => {
                    o || h || (r(!0), q())
                }, [o, h]);
                let q = () => {
                    x.Z.get(A + "/crypto").then(async e => {
                        let t = e.data;
                        if (t.error) {
                            c(t.error), r(!1);
                            return
                        }
                        let s = await x.Z.get(A + "/fiat").then(e => e.data);
                        if (s.error) {
                            c(s.error), r(!1);
                            return
                        }
                        b(s), p(t), _(t[4]);
                        let l = Number.parseInt((0, i.getCookie)("user_fiat"));
                        l && l > -1 && l < s.length ? N(s[l]) : N(s[0]), setTimeout(() => r(!1), 1500)
                    })
                };
                return (0, l.jsx)(m.Z, {
                    showCookieNotice: !0,
                    title: "Express",
                    description: "Easily and quickly purchase thousands of different tokens and coins. Powered by Simplex.",
                    children: (0, l.jsx)("div", {
                        className: "flex w-full items-center justify-center h-[100vh] min-h-[600px]",
                        children: (0, l.jsx)(u.W, {
                            children: (0, l.jsx)("div", {
                                className: "flex justify-center items-center",
                                children: (0, l.jsxs)("div", {
                                    className: "w-full max-w-[500px]",
                                    children: [(0, l.jsxs)("div", {
                                        className: "mb-5",
                                        children: [(0, l.jsx)("p", {
                                            className: "text-4xl font-bold",
                                            children: "Dione Express"
                                        }), (0, l.jsx)("p", {
                                            className: "text-xs",
                                            children: "A simple and fast way to buy crypto. Powered by Simplex."
                                        })]
                                    }), n && (0, l.jsx)("p", {
                                        className: "text-danger mb-3 text-sm",
                                        children: n
                                    }), !S && (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(f, {
                                            activeCrypto: g,
                                            setActiveCrypto: _,
                                            cryptos: o
                                        }), (0, l.jsxs)("div", {
                                            className: "relative mb-3",
                                            children: [(0, l.jsx)("div", {
                                                className: "absolute top-0 left-0 bottom-0 w-[70px] ps-1 flex items-center justify-center",
                                                children: (0, l.jsx)("p", {
                                                    className: "text-white/50 text-xs",
                                                    children: "Wallet"
                                                })
                                            }), (0, l.jsx)("input", {
                                                type: "text",
                                                onChange: e => t(e.target.value),
                                                autoComplete: "off",
                                                placeholder: "0x...",
                                                id: "address",
                                                className: "w-full border-2 border-white/5 bg-transparent p-3 rounded-xl ps-16 focus:outline-0 focus:border-2"
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "relative mb-5",
                                            children: [(0, l.jsx)("div", {
                                                className: "absolute top-0 left-0 bottom-0 w-[70px] ps-1 flex items-center justify-center",
                                                children: (0, l.jsx)("p", {
                                                    className: "text-white/50 text-xs",
                                                    children: "Spend"
                                                })
                                            }), (0, l.jsx)("input", {
                                                type: "number",
                                                step: "0.01",
                                                min: v ? v.min_amount : 1,
                                                onChange: e => C(Number.parseFloat(e.target.value)),
                                                autoComplete: "off",
                                                placeholder: "100.00",
                                                id: "address",
                                                className: "w-full border-2 pr-20 border-white/5 bg-transparent p-3 rounded-xl ps-16 focus:outline-0 focus:border-2"
                                            }), (0, l.jsx)(d, {
                                                activeFiat: v,
                                                setActiveFiat: N,
                                                fiats: h
                                            })]
                                        }), (0, l.jsx)(j, {
                                            quote: S,
                                            setQuote: E,
                                            crypto: g,
                                            fiat: v,
                                            fiatAmount: k,
                                            wallet: e,
                                            setError: c
                                        }), (0, l.jsx)("p", {
                                            className: "text-white/50 text-xs mb-3",
                                            children: "Please make sure the address is correct, we are not responsibile for misplaced or lost crypto!"
                                        })]
                                    }), S && (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(y, {
                                            quote: S,
                                            setQuote: E,
                                            setFiatAmount: C
                                        }), (0, l.jsx)(w, {
                                            quote: S,
                                            resetQuote: () => {
                                                E(null), C(50)
                                            },
                                            wallet: "0x2A6208f67497f5C8346C92E7312648797714d753",
                                            setError: c
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [123, 313, 522, 888, 774, 179], function() {
            return e(e.s = 6097)
        }), _N_E = e.O()
    }
]);