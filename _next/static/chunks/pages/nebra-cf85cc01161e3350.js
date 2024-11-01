(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [147], {
        60647: function(e, r, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/nebra", function() {
                return n(38761)
            }])
        },
        26407: function(e, r, n) {
            "use strict";
            var t = n(85893),
                s = n(20060);
            r.Z = e => {
                let {
                    pretitle: r,
                    title: n,
                    subtitle: a
                } = e;
                return (0, t.jsx)("div", {
                    className: "page-header py-24 pt-40",
                    children: (0, t.jsx)(s.W, {
                        children: (0, t.jsxs)("div", {
                            className: "max-w-[1100px]",
                            children: [(0, t.jsx)("div", {
                                className: "mb-3 text-primary",
                                children: r && r
                            }), (0, t.jsx)("h2", {
                                className: "text-4xl font-bold tracking-tight sm:text-6xl",
                                children: n
                            }), a && (0, t.jsx)("p", {
                                className: "mt-6 text-lg leading-8 text-gray-500",
                                children: a
                            })]
                        })
                    })
                })
            }
        },
        38761: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return l
                }
            });
            var t = n(85893),
                s = n(24522),
                a = n(20060),
                i = n(26407),
                o = n(41664),
                c = n.n(o);

            function l() {
                return (0, t.jsxs)(s.Z, {
                    showCookieNotice: !0,
                    title: "Home",
                    description: "The green energy marketplace inspired by the Nebra Sky.",
                    children: [(0, t.jsx)(i.Z, {
                        pretitle: "The green energy marketplace",
                        title: "Nebra by Dione",
                        subtitle: "Inspired by the Nebra Sky"
                    }), (0, t.jsxs)(a.W, {
                        className: "pb-32",
                        children: [(0, t.jsx)("p", {
                            className: "text-xl font-bold mb-2",
                            children: "What is Nebra?"
                        }), (0, t.jsx)("p", {
                            className: "mb-3",
                            children: "Nebra is a decentralized energy trading platform powered by the Dione Protocol blockchain. It aims to make renewable energy more accessible and affordable for everyone; It works by connecting energy producers and consumers on a peer-to-peer (P2P) basis. This allows producers to sell their excess energy directly to consumers, bypassing the traditional energy grid. This can lead to significant savings for both producers and consumers."
                        }), (0, t.jsx)(c(), {
                            href: "https://medium.com/@dioneprotocol/nebra-powered-by-dione-219047088c81",
                            target: "_blank",
                            rel: "nofollow",
                            className: "text-primary hover:text-primary/80",
                            children: "Read the full breakdown"
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [123, 522, 888, 774, 179], function() {
            return e(e.s = 60647)
        }), _N_E = e.O()
    }
]);