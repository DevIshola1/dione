(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [195], {
        63087: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/partners", function() {
                return n(46189)
            }])
        },
        26407: function(e, t, n) {
            "use strict";
            var i = n(85893),
                r = n(20060);
            t.Z = e => {
                let {
                    pretitle: t,
                    title: n,
                    subtitle: a
                } = e;
                return (0, i.jsx)("div", {
                    className: "page-header py-24 pt-40",
                    children: (0, i.jsx)(r.W, {
                        children: (0, i.jsxs)("div", {
                            className: "max-w-[1100px]",
                            children: [(0, i.jsx)("div", {
                                className: "mb-3 text-primary",
                                children: t && t
                            }), (0, i.jsx)("h2", {
                                className: "text-4xl font-bold tracking-tight sm:text-6xl",
                                children: n
                            }), a && (0, i.jsx)("p", {
                                className: "mt-6 text-lg leading-8 text-gray-500",
                                children: a
                            })]
                        })
                    })
                })
            }
        },
        55629: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return r
                }
            });
            var i = n(85893);
            n(67294);
            let r = e => (0, i.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 448 512",
                ...e,
                "aria-label": "Arrow Right Icon",
                children: (0, i.jsx)("path", {
                    fill: "currentColor",
                    d: "M264.6 70.63l176 168c4.75 4.531 7.438 10.81 7.438 17.38s-2.688 12.84-7.438 17.38l-176 168c-9.594 9.125-24.78 8.781-33.94-.8125c-9.156-9.5-8.812-24.75 .8125-33.94l132.7-126.6H24.01c-13.25 0-24.01-10.76-24.01-24.01s10.76-23.99 24.01-23.99h340.1l-132.7-126.6C221.8 96.23 221.5 80.98 230.6 71.45C239.8 61.85 254.1 61.51 264.6 70.63z"
                })
            })
        },
        51223: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var i = n(85893),
                r = n(67294),
                a = n(33234),
                s = n(16014),
                o = n(96681);

            function c(e) {
                let t = (0, o.h)(() => (0, a.BX)(e)),
                    {
                        isStatic: n
                    } = (0, r.useContext)(s._);
                if (n) {
                    let [, n] = (0, r.useState)(e);
                    (0, r.useEffect)(() => t.on("change", n), [])
                }
                return t
            }
            var d = n(70798),
                l = n(58868),
                g = n(2074),
                p = n(40406);

            function m() {
                var e, t;
                let n = (e = ["\n                radial-gradient(\n                    350px circle at ", "px ", "px, \n                    #5454d320, \n                    transparent 80%\n                )"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                })));
                return m = function() {
                    return n
                }, n
            }
            var u = e => {
                let {
                    children: t,
                    className: n,
                    ...r
                } = e, a = c(0), s = c(0);
                return (0, i.jsxs)("div", {
                    onMouseMove: function(e) {
                        let {
                            currentTarget: t,
                            clientX: n,
                            clientY: i
                        } = e, {
                            left: r,
                            top: o
                        } = t.getBoundingClientRect();
                        a.set(n - r), s.set(i - o)
                    },
                    className: "spotlight-card rounded-xl bg-card dark:hover:border-[#222245] hover:border-gray-200 shadow-none overflow-hidden ".concat(n),
                    children: [(0, i.jsx)(d.E.div, {
                        className: "spotlight z-0",
                        style: {
                            background: function(e, ...t) {
                                let n = e.length;
                                return function(e, t) {
                                    let n = c(t()),
                                        i = () => n.set(t());
                                    return i(), (0, l.L)(() => {
                                        let t = () => g.Wi.update(i, !1, !0),
                                            n = e.map(e => e.on("change", t));
                                        return () => {
                                            n.forEach(e => e()), (0, g.Pn)(i)
                                        }
                                    }), n
                                }(t.filter(p.i), function() {
                                    let i = "";
                                    for (let r = 0; r < n; r++) {
                                        i += e[r];
                                        let n = t[r];
                                        n && (i += (0, p.i)(n) ? n.get() : n)
                                    }
                                    return i
                                })
                            }(m(), a, s)
                        }
                    }), (0, i.jsx)("div", {
                        className: "p-12 relative z-10",
                        children: t
                    })]
                })
            }
        },
        86236: function(e) {
            "use strict";
            e.exports = [{
                title: "Uniswap",
                url: "https://app.uniswap.org/#/swap?outputCurrency=0x89B69F2d1adffA9A253d40840B6Baa7fC903D697&chain=mainnet",
                image: "/img/brands/uniswap.png",
                icon: "/img/brands/uniswap2.png"
            }, {
                title: "Etherscan",
                url: "https://etherscan.io/token/0x89b69f2d1adffa9a253d40840b6baa7fc903d697",
                image: "/img/brands/etherscan.png",
                icon: "/img/brands/etherscan2.png"
            }, {
                title: "CoinMarket",
                url: "https://coinmarketcap.com/currencies/dione-protocol/",
                image: "/img/brands/coinmarket.webp",
                icon: "/img/brands/coinmarket2.png"
            }, {
                title: "Crypto.com",
                url: "https://crypto.com/price/dione-protocol",
                image: "/img/brands/cryptocom.png",
                icon: "/img/brands/cryptocom2.png"
            }, {
                title: "Coinbase",
                url: "https://www.coinbase.com/price/dione-protocol",
                image: "/img/brands/coinbase.png",
                icon: "/img/brands/coinbase2.png"
            }, {
                title: "MEXC",
                url: "https://www.mexc.com/price/DIONE?calculatorTab=trade&utm_source=mexc&utm_medium=markets&utm_campaign=marketsdetails",
                image: "/img/brands/mexc.png",
                icon: "/img/brands/mexc2.png"
            }, {
                title: "Gate IO",
                url: "https://www.gate.io/trade/DIONE_USDT",
                image: "/img/brands/gateio.png",
                icon: "/img/brands/gateio2.png"
            }, {
                title: "OKX",
                url: "https://www.okx.com/web3/dex?inputChain=1&inputCurrency=ETH&outputChain=1&outputCurrency=0x89b69f2d1adffa9a253d40840b6baa7fc903d697",
                image: "/img/brands/okx.png"
            }]
        },
        69591: function(e) {
            "use strict";
            e.exports = [{
                name: "IBC Solar",
                description: "Reliable, competent and with above-average yields. From individual solar modules to entire solar parks: Solar energy from one of the world’s most experienced solar solutions providers.",
                website: "https://www.ibc-solar.com/",
                image: "/img/brands/ibc.png",
                category: "energy"
            }, {
                name: "Energiekreislauf GmbH",
                description: "Focusing on renewable energy and storage, specialized in Agri-PV solutions, which describes ground-mounted solar power applications with special dedication to agricultural needs ",
                website: "https://energiekreislauf.at/",
                image: "/img/brands/energie.png",
                category: "energy"
            }, {
                name: "Green Energy",
                description: "Green Energy is an electro-mechanical engineering consultancy firm dedicated to crafting economically sustainable energy solutions.",
                website: "http://www.greenenergy.ae/",
                image: "/img/brands/green.png",
                category: "energy"
            }, {
                name: "Hacken",
                description: "Blockchain auditor with over 1,000 protected clients who rely on their team of experts and innovative products",
                website: "https://hacken.io/",
                image: "/img/brands/hacken.png",
                category: "security"
            }, {
                name: "DiamondSwap",
                description: "An exlusive automated market maker based Decentralized Exchange designed to work seamlessly on every network.",
                website: "https://diamondswap.org/",
                image: "/img/brands/diamondswap.png",
                category: "crypto"
            }, {
                name: "Hashlock",
                description: "An australian based blockchain audit firm with industry leading security research and auditing, and proud member of Fintec Australia.",
                website: "https://www.hashlock.com.au/",
                image: "/img/brands/hashlock.png",
                category: "security"
            }, {
                name: "SGEC",
                description: "Sustainable Geothermal Energy Company holds patent technology for its closed loop U-Loop technology in single well of Geothermal Energy.",
                website: "https://eco-sge.com/",
                image: "/img/brands/eco.png",
                category: "energy"
            }, {
                name: "ITU SEED",
                description: "One of the top 5 university-affiliated incubation centers in the world, hosting thousands of startups of startups over the past 10 years.",
                website: "https://ituseed.com/",
                image: "/img/brands/ituseed.png",
                category: "energy"
            }, {
                name: "Crypto Rubic",
                description: "An aggregator for users and dapps featuring more than 60 major blockchains, over 90 dexes and bridges, and over 15,500 assets.",
                website: "https://rubic.exchange/",
                image: "/img/brands/rubic.png",
                category: "crypto"
            }, {
                name: "Shido Dex",
                description: "One of the fastest growing dexes, Shido is a decentralized DeFi aggregator, cross-chain swap, liquidity protocol, and perpetual Dex.",
                website: "https://www.shido.io/dex",
                image: "/img/brands/shido.png",
                category: "crypto"
            }, {
                name: "Simplex by nuvei",
                description: "A leading fiat-crypto gateway connecting market participants, including exchanges, brokers, wallet, and liquidity providers.",
                website: "https://www.simplex.com/",
                image: "/img/brands/simplex2.png",
                category: "crypto"
            }, {
                name: "Traken",
                description: "Data tracking, asset management and exploitation tool for smart electrical grids that provides a distributed ledger to manage unique identities and product passports of smart meters",
                website: "https://www.traken.tech/",
                image: "/img/brands/traken.png",
                category: "energy"
            }, {
                name: "Tectum",
                description: "Tectum™ is a distributed ledger protocol managing platform that employs the proprietary record change signature management algorithm - HashDrive™.",
                website: "https://tectum.io/wallet",
                image: "/img/brands/tectum.png",
                category: "crypto"
            }, {
                name: "ALGATEC Energy Systems LLC",
                description: "Turnkey services such as: consulting, energy efficiency calculation, sourcing of suitable systems, project planning and maintenance.",
                website: "https://www.algatec.ae/",
                image: "/img/brands/algatec.png",
                category: "energy"
            }, {
                name: "Tumurly",
                description: "The Premium Wind Turbine Manufacturer in sustainable energy solutions with a vision to become the global leader in sustainable energy solutions.",
                website: "https://www.tumurly.com/",
                image: "/img/brands/tumurly.png",
                category: "energy"
            }, {
                name: "Ator",
                description: "An anonymous routing network built to be truly decentralized; no authority controls the flow of traffic.",
                website: "https://www.ator.io/",
                image: "/img/brands/ator.png",
                category: "crypto"
            }, {
                name: "WPower",
                description: "W Power is an internationally expanding company with a focus on solar parks and battery storage systems. Together with customers and partners, we consistently develop and invest in renewable energies",
                website: "https://wpower.eco/",
                image: "/img/brands/wpower.png",
                category: "energy"
            }, {
                name: "Jasmine",
                description: "Focused on tokenizing Renewable Energy Certificates which represent the environmental benefits of renewable energy resources.",
                website: "https://www.jasmine.energy/",
                image: "/img/brands/Jasmine.png",
                category: "energy"
            }, {
                name: "Forward",
                description: "Create blockchains, subnets, and dApps with a no-code interface. Cross chain compatible, industry agnostic, and adoption focused.",
                website: "https://forwardprotocol.io/",
                image: "/img/brands/forward.png",
                category: "crypto"
            }, {
                name: "OptimusAI",
                description: "A decentralised venture fund investing in emerging AI projects, and a suite of best-in-class AI bots or tools",
                website: "https://www.optimustoken.io/",
                image: "/img/brands/opti.png",
                category: "crypto"
            }, {
                name: "SunMoney",
                description: "Become the part of an energetic community, where people make money from renewable energy and protect the environment!",
                website: "https://sunmoney.com/",
                image: "/img/brands/sunmoney.png",
                category: "energy"
            }, {
                name: "Team.Finance",
                description: "Team Finance allows companies to create, vest, lock, track, and spin up staking pools for their tokens.",
                website: "https://www.team.finance/",
                image: "/img/brands/teamfinance.jpg",
                category: "crypto"
            }, {
                name: "Messier M87",
                description: "Developing a utility ecosystem around it's DAO, integrating advanced AI with decentralized products and services.",
                website: "https://messier.app",
                image: "/img/brands/messier.png",
                category: "crypto"
            }, {
                name: "Spectre AI",
                description: "Spectre AI is an advanced On-Chain Search Engine, now in closed beta, designed to deliver comprehensive crypto data insights.",
                website: "https://spectrebot.ai/",
                image: "/img/brands/spectreai.png",
                category: "crypto"
            }, {
                name: "Mock Capital",
                description: "Amplifying traders profits through tooling and bots on social applications like Discord and Telegram. Offering dozens of never before seen tools and bots.",
                website: "https://mock.capital/",
                image: "/img/brands/mock.png",
                category: "crypto"
            }, {
                name: "THREE",
                description: "Building the private and decentralised eCommerce future: through AI, ZKP and Blockchain",
                website: "https://www.threeprotocol.ai/",
                image: "/img/brands/three.png",
                category: "crypto"
            }, {
                name: "Cosmic",
                description: "Decentralized peer-to-peer VPN service which provides a robust, personalized and secure browsing experience powered by AI.",
                website: "https://cosmicnetwork.io/",
                image: "/img/brands/cosmic.svg",
                category: "crypto"
            }, {
                name: "Arkreen",
                description: "Web3-powered digital infrastructure for global distributed renewable energy resources.",
                website: "https://arkreen.com",
                image: "/img/brands/arkreen.png",
                category: "energy"
            }, {
                name: "Hash AI",
                description: "Secure and reliable crypto mining solution. Rent powerful nodes for diverse tasks & unlock the potential of AI-powered mining.",
                website: "https://www.hashai.co.uk",
                image: "/img/brands/hashai.png",
                category: "crypto"
            }]
        },
        46189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n(85893),
                r = n(24522),
                a = n(20060),
                s = n(55629),
                o = n(26407),
                c = n(67294),
                d = n(32997),
                l = n(51223),
                g = n(25675),
                p = n.n(g),
                m = n(41664),
                u = n.n(m);

            function h() {
                let [e, t] = (0, c.useState)(null), g = n(86236), m = n(69591), h = (n, i) => {
                    if (n.preventDefault(), i == e) {
                        t(null);
                        return
                    }
                    t(i)
                };
                return (0, i.jsxs)(r.Z, {
                    showCookieNotice: !0,
                    title: "Partners",
                    description: "We are looking for partners who share our vision of a more sustainable and equitable future. Together, we can build a new energy economy that is powered by clean energy and decentralized technologies.",
                    children: [(0, i.jsx)(o.Z, {
                        pretitle: "Meet Everyone Involved",
                        title: "Our Partners & Sponsors",
                        subtitle: "We are looking for partners who share our vision of a more sustainable and equitable future. Together, we can build a new energy economy that is powered by clean energy and decentralized technologies."
                    }), (0, i.jsxs)(a.W, {
                        children: [(0, i.jsx)("p", {
                            className: "font-bold text-2xl mb-4",
                            children: "Featured on:"
                        }), (0, i.jsx)("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-2 mb-24",
                            children: g.map((e, t) => (0, i.jsx)("div", {
                                children: (0, i.jsx)(u(), {
                                    href: e.url,
                                    target: "_blank",
                                    rel: "nofollow noopener noreferer",
                                    className: "p-4 bg-white dark:bg-white/5 shadow transition-colors rounded-xl w-full flex items-center justify-center",
                                    children: (0, i.jsx)(p(), {
                                        src: e.image,
                                        width: 48,
                                        height: 48,
                                        unoptimized: !0,
                                        className: "invert dark:invert-0 h-10 w-auto",
                                        alt: e.title
                                    })
                                })
                            }, t))
                        }), (0, i.jsxs)("div", {
                            className: "flex gap-3 items-center mb-10",
                            children: [(0, i.jsx)("div", {
                                children: "Filters"
                            }), ["energy", "blockchain", "crypto", "security"].map((t, n) => (0, i.jsx)("div", {
                                children: (0, i.jsx)("button", {
                                    className: "px-4 text-sm rounded-full py-2 bg-black/5 dark:bg-white/5  ".concat(e == t && "!bg-primary text-black"),
                                    onClick: e => h(e, t),
                                    children: (0, d.kC)(t)
                                })
                            }, n))]
                        }), (0, i.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 items-stretch mb-32",
                            children: m.map((t, n) => e && e != t.category ? null : (0, i.jsx)(l.Z, {
                                children: (0, i.jsxs)("div", {
                                    children: [(0, i.jsxs)("div", {
                                        className: "flex items-center gap-x-2 mb-4",
                                        children: [(0, i.jsx)(p(), {
                                            unoptimized: !0,
                                            src: t.image,
                                            className: "rounded-full p-1 ".concat(t.invert && "invert dark:invert-0", " dark:bg-black/30"),
                                            width: 50,
                                            height: 50,
                                            alt: t.name
                                        }), (0, i.jsx)("p", {
                                            className: "font-bold text-xl",
                                            children: t.name
                                        })]
                                    }), (0, i.jsx)("div", {
                                        children: (0, i.jsx)("p", {
                                            className: "mb-5",
                                            children: t.description
                                        })
                                    }), (0, i.jsx)("div", {
                                        children: (0, i.jsxs)("div", {
                                            className: "rounded-full flex items-center gap-3",
                                            children: [(0, i.jsxs)(u(), {
                                                href: t.website,
                                                target: "_blank",
                                                rel: "nofollow",
                                                className: "text-xs bg-primary p-2 px-4 rounded-full text-white dark:text-black whitespace-nowrap flex gap-2",
                                                children: ["Learn More ", (0, i.jsx)(s.L, {
                                                    width: 10
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "text-xs mr-4 rounded-full inline-block bg-black/20 p-2 px-3 dark:text-white/50",
                                                children: (0, d.kC)(t.category)
                                            })]
                                        })
                                    })]
                                })
                            }, n))
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [123, 798, 522, 888, 774, 179], function() {
            return e(e.s = 63087)
        }), _N_E = e.O()
    }
]);