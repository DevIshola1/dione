(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        48312: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(43670)
            }])
        },
        55629: function(e, t, r) {
            "use strict";
            r.d(t, {
                L: function() {
                    return a
                }
            });
            var s = r(85893);
            r(67294);
            let a = e => (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 448 512",
                ...e,
                "aria-label": "Arrow Right Icon",
                children: (0, s.jsx)("path", {
                    fill: "currentColor",
                    d: "M264.6 70.63l176 168c4.75 4.531 7.438 10.81 7.438 17.38s-2.688 12.84-7.438 17.38l-176 168c-9.594 9.125-24.78 8.781-33.94-.8125c-9.156-9.5-8.812-24.75 .8125-33.94l132.7-126.6H24.01c-13.25 0-24.01-10.76-24.01-24.01s10.76-23.99 24.01-23.99h340.1l-132.7-126.6C221.8 96.23 221.5 80.98 230.6 71.45C239.8 61.85 254.1 61.51 264.6 70.63z"
                })
            })
        },
        6917: function(e, t, r) {
            "use strict";
            var s = r(85893),
                a = r(67294);
            t.Z = e => {
                let {
                    className: t = "",
                    quantity: r = 100,
                    staticity: n = 50,
                    ease: i = 50,
                    size: l = .4,
                    refresh: o = !1,
                    color: c = "#ffffff",
                    vx: d = 0,
                    vy: m = 0
                } = e, h = (0, a.useRef)(null), p = (0, a.useRef)(null), g = (0, a.useRef)(null), x = (0, a.useRef)([]), u = function() {
                    let [e, t] = (0, a.useState)({
                        x: 0,
                        y: 0
                    });
                    return (0, a.useEffect)(() => {
                        let e = e => {
                            t({
                                x: e.clientX,
                                y: e.clientY
                            })
                        };
                        return window.addEventListener("mousemove", e), () => {
                            window.removeEventListener("mousemove", e)
                        }
                    }, []), e
                }(), f = (0, a.useRef)({
                    x: 0,
                    y: 0
                }), w = (0, a.useRef)({
                    w: 0,
                    h: 0
                }), b = window.devicePixelRatio;
                (0, a.useEffect)(() => (h.current && (g.current = h.current.getContext("2d")), y(), _(), window.addEventListener("resize", y), () => {
                    window.removeEventListener("resize", y)
                }), [c]), (0, a.useEffect)(() => {
                    v()
                }, [u.x, u.y]), (0, a.useEffect)(() => {
                    y()
                }, [o]);
                let y = () => {
                        j(), M()
                    },
                    v = () => {
                        if (h.current) {
                            let e = h.current.getBoundingClientRect(),
                                {
                                    w: t,
                                    h: r
                                } = w.current,
                                s = u.x - e.left - t / 2,
                                a = u.y - e.top - r / 2;
                            s < t / 2 && s > -t / 2 && a < r / 2 && a > -r / 2 && (f.current.x = s, f.current.y = a)
                        }
                    },
                    j = () => {
                        p.current && h.current && g.current && (x.current.length = 0, w.current.w = p.current.offsetWidth, w.current.h = p.current.offsetHeight, h.current.width = w.current.w * b, h.current.height = w.current.h * b, h.current.style.width = "".concat(w.current.w, "px"), h.current.style.height = "".concat(w.current.h, "px"), g.current.scale(b, b))
                    },
                    N = () => {
                        let e = Math.floor(Math.random() * w.current.w);
                        return {
                            x: e,
                            y: Math.floor(Math.random() * w.current.h),
                            translateX: 0,
                            translateY: 0,
                            size: Math.floor(2 * Math.random()) + l,
                            alpha: 0,
                            targetAlpha: parseFloat((.6 * Math.random() + .1).toFixed(1)),
                            dx: (Math.random() - .5) * .1,
                            dy: (Math.random() - .5) * .1,
                            magnetism: .1 + 4 * Math.random()
                        }
                    },
                    k = function(e) {
                        let t = parseInt(e = e.replace("#", ""), 16);
                        return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                    }(c),
                    C = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (g.current) {
                            let {
                                x: r,
                                y: s,
                                translateX: a,
                                translateY: n,
                                size: i,
                                alpha: l
                            } = e;
                            g.current.translate(a, n), g.current.beginPath(), g.current.arc(r, s, i, 0, 2 * Math.PI), g.current.fillStyle = "rgba(".concat(k.join(", "), ", ").concat(l, ")"), g.current.fill(), g.current.setTransform(b, 0, 0, b, 0, 0), t || x.current.push(e)
                        }
                    },
                    z = () => {
                        g.current && g.current.clearRect(0, 0, w.current.w, w.current.h)
                    },
                    M = () => {
                        z();
                        for (let e = 0; e < r; e++) C(N())
                    },
                    E = (e, t, r, s, a) => {
                        let n = (e - t) * (a - s) / (r - t) + s;
                        return n > 0 ? n : 0
                    },
                    _ = () => {
                        z(), x.current.forEach((e, t) => {
                            let r = parseFloat(E([e.x + e.translateX - e.size, w.current.w - e.x - e.translateX - e.size, e.y + e.translateY - e.size, w.current.h - e.y - e.translateY - e.size].reduce((e, t) => Math.min(e, t)), 0, 20, 0, 1).toFixed(2));
                            r > 1 ? (e.alpha += .02, e.alpha > e.targetAlpha && (e.alpha = e.targetAlpha)) : e.alpha = e.targetAlpha * r, e.x += e.dx + d, e.y += e.dy + m, e.translateX += (f.current.x / (n / e.magnetism) - e.translateX) / i, e.translateY += (f.current.y / (n / e.magnetism) - e.translateY) / i, C(e, !0), (e.x < -e.size || e.x > w.current.w + e.size || e.y < -e.size || e.y > w.current.h + e.size) && (x.current.splice(t, 1), C(N()))
                        }), window.requestAnimationFrame(_)
                    };
                return (0, s.jsx)("div", {
                    className: t,
                    ref: p,
                    "aria-hidden": "true",
                    children: (0, s.jsx)("canvas", {
                        ref: h,
                        className: "h-full w-full !z-[0] relative"
                    })
                })
            }
        },
        51223: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return g
                }
            });
            var s = r(85893),
                a = r(67294),
                n = r(33234),
                i = r(16014),
                l = r(96681);

            function o(e) {
                let t = (0, l.h)(() => (0, n.BX)(e)),
                    {
                        isStatic: r
                    } = (0, a.useContext)(i._);
                if (r) {
                    let [, r] = (0, a.useState)(e);
                    (0, a.useEffect)(() => t.on("change", r), [])
                }
                return t
            }
            var c = r(70798),
                d = r(58868),
                m = r(2074),
                h = r(40406);

            function p() {
                var e, t;
                let r = (e = ["\n                radial-gradient(\n                    350px circle at ", "px ", "px, \n                    #5454d320, \n                    transparent 80%\n                )"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                })));
                return p = function() {
                    return r
                }, r
            }
            var g = e => {
                let {
                    children: t,
                    className: r,
                    ...a
                } = e, n = o(0), i = o(0);
                return (0, s.jsxs)("div", {
                    onMouseMove: function(e) {
                        let {
                            currentTarget: t,
                            clientX: r,
                            clientY: s
                        } = e, {
                            left: a,
                            top: l
                        } = t.getBoundingClientRect();
                        n.set(r - a), i.set(s - l)
                    },
                    className: "spotlight-card rounded-xl bg-card dark:hover:border-[#222245] hover:border-gray-200 shadow-none overflow-hidden ".concat(r),
                    children: [(0, s.jsx)(c.E.div, {
                        className: "spotlight z-0",
                        style: {
                            background: function(e, ...t) {
                                let r = e.length;
                                return function(e, t) {
                                    let r = o(t()),
                                        s = () => r.set(t());
                                    return s(), (0, d.L)(() => {
                                        let t = () => m.Wi.update(s, !1, !0),
                                            r = e.map(e => e.on("change", t));
                                        return () => {
                                            r.forEach(e => e()), (0, m.Pn)(s)
                                        }
                                    }), r
                                }(t.filter(h.i), function() {
                                    let s = "";
                                    for (let a = 0; a < r; a++) {
                                        s += e[a];
                                        let r = t[a];
                                        r && (s += (0, h.i)(r) ? r.get() : r)
                                    }
                                    return s
                                })
                            }(p(), n, i)
                        }
                    }), (0, s.jsx)("div", {
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
        43670: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return Z
                }
            });
            var s = r(85893),
                a = r(41664),
                n = r.n(a),
                i = r(20060),
                l = r(67294);
            let o = e => (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 320 512",
                ...e,
                "aria-label": "Right Chevron Icon",
                children: (0, s.jsx)("path", {
                    fill: "currentColor",
                    d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                })
            });
            var c = r(25675),
                d = r.n(c),
                m = function() {
                    let e = r(86236),
                        [t, a] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        if (t) return;
                        let e = document.querySelectorAll(".rotate-item");
                        e.forEach(e => {
                            var t;
                            let r = null === (t = e.textContent) || void 0 === t ? void 0 : t.split("");
                            e.textContent = "", null == r || r.forEach(t => {
                                let r = document.createElement("span");
                                r.textContent = t, r.className = "letter", e.append(r)
                            })
                        });
                        let r = 0,
                            s = e.length - 1;
                        e[r].style.opacity = "1";
                        let n = () => {
                            let t = e[r],
                                i = r === s ? e[0] : e[r + 1];
                            Array.from(t.children).forEach((e, t) => {
                                setTimeout(() => {
                                    e.className = "letter out"
                                }, 80 * t)
                            }), i.style.opacity = "1", Array.from(i.children).forEach((e, t) => {
                                e.className = "letter behind", setTimeout(() => {
                                    e.className = "letter in"
                                }, 340 + 80 * t)
                            }), r = r === s ? 0 : r + 1, a(!0), setTimeout(n, 5e3)
                        };
                        setTimeout(n, 5e3)
                    }, [t]), (0, s.jsxs)("div", {
                        className: "home-header relative",
                        children: [(0, s.jsx)("div", {
                            className: "absolute header-video top-[-100px] -z-10 w-[1920px] left-[50%] ml-[-960px]",
                            children: (0, s.jsx)("video", {
                                autoPlay: !0,
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                width: "1920",
                                height: "1080",
                                children: (0, s.jsx)("source", {
                                    src: "/video/video3.mp4",
                                    type: "video/mp4"
                                })
                            })
                        }), (0, s.jsx)(i.W, {
                            className: "relative z-50",
                            children: (0, s.jsx)("div", {
                                className: "grid grid-flow-row py-10 pt-32 items-center w-[100%] h-[100vh] max-h-[900px] z-10",
                                children: (0, s.jsxs)("div", {
                                    className: "max-w-[1100px]",
                                    children: [(0, s.jsx)(n(), {
                                        href: "/roadmap",
                                        target: "_blank",
                                        rel: "nofollow",
                                        className: "inline-block px-3 py-2 border-2 border-danger/80 hover:border-danger rounded-full pr-5 mb-4",
                                        children: (0, s.jsxs)("div", {
                                            className: "flex align-middle items-center",
                                            children: [(0, s.jsx)("div", {
                                                className: "bg-danger px-3 py-1 rounded-full text-white uppercase text-xs font-bold",
                                                children: "New"
                                            }), (0, s.jsx)("p", {
                                                className: "text-lg mb-0 leading-none ml-3 font-[300]",
                                                children: "Orbit 5 Roadmap “Home” Now Live"
                                            }), (0, s.jsx)(o, {
                                                width: 8,
                                                style: {
                                                    marginLeft: 20
                                                }
                                            })]
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "text-4xl font-bold sm:text-7xl !leading-[1.2em] mb-4",
                                        children: ["Powering the crypto revolution ", (0, s.jsx)("br", {}), "with", " ", (0, s.jsx)("div", {
                                            className: "rotator text-primary leading-[1em]",
                                            id: "rotator",
                                            children: (0, s.jsxs)("p", {
                                                children: [(0, s.jsx)("span", {
                                                    className: "rotate-item",
                                                    children: "clean\xa0energy."
                                                }), (0, s.jsx)("span", {
                                                    className: "rotate-item",
                                                    children: "innovation."
                                                }), (0, s.jsx)("span", {
                                                    className: "rotate-item",
                                                    children: "creativity."
                                                }), (0, s.jsx)("span", {
                                                    className: "rotate-item",
                                                    children: "utility."
                                                }), (0, s.jsx)("span", {
                                                    className: "rotate-item",
                                                    children: "AI."
                                                }), (0, s.jsx)("span", {
                                                    className: "rotate-item",
                                                    children: "DePIN."
                                                })]
                                            })
                                        })]
                                    }), (0, s.jsx)("p", {
                                        className: "text-gray-500 mb-8 text-lg",
                                        children: "Building a sustainable future with eco-friendly and innovative blockchain technologies."
                                    }), (0, s.jsxs)("div", {
                                        className: "flex items-center gap-2 z-50",
                                        children: [(0, s.jsx)(n(), {
                                            href: "/express",
                                            className: "text-white rounded-full buybutton relative overflow-visible text-sm py-5 px-8 lg:text-[1em] text-center whitespace-nowrap",
                                            children: "Buy Crypto"
                                        }), (0, s.jsx)(n(), {
                                            href: "https://dione-protocol.gitbook.io/dione-whitepaper/",
                                            target: "_blank",
                                            rel: "nofollow",
                                            className: "text-black dark:text-white/75 dark:hover:text-white rounded-full relative overflow-visible text-sm py-5 px-8 lg:text-[1em]",
                                            children: "Whitepaper"
                                        }), (0, s.jsx)(n(), {
                                            href: "/roadmap",
                                            className: "text-black dark:text-white/75 dark:hover:text-white rounded-full relative overflow-visible text-sm py-5 px-8 lg:text-[1em]",
                                            children: "Roadmap"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "mt-10",
                                        children: [(0, s.jsx)("hr", {
                                            className: "mb-5 border-gray-300 dark:border-gray-800"
                                        }), (0, s.jsxs)("div", {
                                            className: "flex items-center flex-col lg:flex-row mb-10 gap-5",
                                            children: [(0, s.jsx)("div", {
                                                children: (0, s.jsx)("p", {
                                                    className: "text-gray-400 dark:text-gray-500 font-bold",
                                                    children: "Featured In"
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "flex gap-3",
                                                children: e.slice(0, 6).map((e, t) => (0, s.jsx)(n(), {
                                                    href: e.url,
                                                    target: "_blank",
                                                    rel: "nofollow",
                                                    className: "flex items-center brightness-75 hover:brightness-100 gap-2",
                                                    children: (0, s.jsx)(d(), {
                                                        className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1 invert dark:invert-0",
                                                        src: e.icon,
                                                        alt: e.title,
                                                        width: 48,
                                                        height: 48
                                                    })
                                                }, t))
                                            }), (0, s.jsx)("div", {
                                                children: (0, s.jsxs)(n(), {
                                                    href: "/partners",
                                                    className: "font-semibold text-white",
                                                    children: [(0, s.jsx)("span", {
                                                        "aria-hidden": "true"
                                                    }), " See full list", " ", (0, s.jsx)("span", {
                                                        "aria-hidden": "true",
                                                        children: "→"
                                                    })]
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                h = r(24522);
            let p = e => (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 384 512",
                    ...e,
                    children: (0, s.jsx)("path", {
                        fill: "currentColor",
                        d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    })
                }),
                g = e => (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    ...e,
                    children: (0, s.jsx)("path", {
                        fill: "currentColor",
                        d: "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                    })
                });
            var x = r(27963),
                u = (0, r(59488).tv)({
                    base: "shrink-0 bg-divider border-none",
                    variants: {
                        orientation: {
                            horizontal: "w-full h-divider",
                            vertical: "h-full w-divider"
                        }
                    },
                    defaultVariants: {
                        orientation: "horizontal"
                    }
                }),
                f = (0, r(15607).Gp)((e, t) => {
                    let {
                        Component: r,
                        getDividerProps: a
                    } = function(e) {
                        var t;
                        let r, s;
                        let {
                            as: a,
                            className: n,
                            orientation: i,
                            ...o
                        } = e, c = a || "hr";
                        "hr" === c && "vertical" === i && (c = "div");
                        let {
                            separatorProps: d
                        } = (t = {
                            elementType: "string" == typeof c ? c : "hr",
                            orientation: i
                        }, s = (0, x.z)(t, {
                            enabled: "string" == typeof t.elementType
                        }), ("vertical" === t.orientation && (r = "vertical"), "hr" !== t.elementType) ? {
                            separatorProps: { ...s,
                                role: "separator",
                                "aria-orientation": r
                            }
                        } : {
                            separatorProps: s
                        }), m = (0, l.useMemo)(() => u({
                            orientation: i,
                            className: n
                        }), [i, n]);
                        return {
                            Component: c,
                            getDividerProps: (0, l.useCallback)((e = {}) => ({
                                className: m,
                                role: "separator",
                                "data-orientation": i,
                                ...d,
                                ...o,
                                ...e
                            }), [m, i, d, o])
                        }
                    }({ ...e
                    });
                    return (0, s.jsx)(r, {
                        ref: t,
                        ...a()
                    })
                });
            f.displayName = "NextUI.Divider";
            let w = e => (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 576 512",
                    ...e,
                    children: (0, s.jsx)("path", {
                        fill: "currentColor",
                        d: "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    })
                }),
                b = e => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 576 512",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        fill: "currentColor",
                        className: "fa-primary",
                        d: "M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z"
                    }), (0, s.jsx)("path", {
                        fill: "currentColor",
                        className: "fa-secondary",
                        d: "M146.3 512C145.3 512.1 144.2 512.1 143.1 512H146.3zM288 439.8V-.0387L288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.1 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L288 439.8z"
                    })]
                });
            var y = () => (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("div", {
                        className: "relative featured pb-24 lg:pb-0",
                        id: "wallet",
                        children: (0, s.jsx)(i.W, {
                            className: "text-center lg:text-left",
                            children: (0, s.jsxs)("div", {
                                className: "relative items-center justify-between overflow-hidden pt-20 md:pt-24 lg:flex lg:pt-0",
                                children: [(0, s.jsxs)("div", {
                                    className: "mx-auto max-w-3xl lg:mx-0 lg:flex-auto lg:py-32 z-10",
                                    children: [(0, s.jsx)("p", {
                                        className: "text-gray-300 mb-4",
                                        children: "Now Available"
                                    }), (0, s.jsx)("h2", {
                                        className: "text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6",
                                        children: "Dione Wallet"
                                    }), (0, s.jsx)("p", {
                                        className: "text-lg leading-8 text-gray-300",
                                        children: "Dione Wallet is the first piece of the Dione Ecosystem; a system powered by renewable energy, combining convenience and a safer future of Blockchain."
                                    }), (0, s.jsxs)("div", {
                                        className: "mt-10 flex items-center justify-center gap-x-6 lg:justify-start",
                                        children: [(0, s.jsx)("a", {
                                            href: "https://apps.apple.com/us/app/dione-wallet/id6443594821",
                                            target: "_blank",
                                            rel: "nofollow",
                                            className: "rounded-lg bg-black text-white text-sm font-semibold shadow-sm hover:bg-gray-900",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center gap-3 px-5 py-2.5",
                                                children: [(0, s.jsx)("div", {
                                                    children: (0, s.jsx)(p, {
                                                        height: 30
                                                    })
                                                }), (0, s.jsxs)("div", {
                                                    children: [(0, s.jsx)("p", {
                                                        className: "text-[8px] mb-0 leading-snug font-[400] uppercase",
                                                        children: "Get it on"
                                                    }), (0, s.jsx)("p", {
                                                        className: "text-[16px] font-[500] whitespace-nowrap",
                                                        children: "App Store"
                                                    })]
                                                })]
                                            })
                                        }), (0, s.jsx)("a", {
                                            href: "https://play.google.com/store/apps/details?id=com.dione.app",
                                            target: "_blank",
                                            rel: "nofollow",
                                            className: "rounded-lg bg-black text-white text-sm font-semibold shadow-sm hover:bg-gray-900",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center gap-3 px-5 py-2.5",
                                                children: [(0, s.jsx)("div", {
                                                    children: (0, s.jsx)(g, {
                                                        height: 24
                                                    })
                                                }), (0, s.jsxs)("div", {
                                                    children: [(0, s.jsx)("p", {
                                                        className: "text-[8px] mb-0 leading-snug uppercase font-[400]",
                                                        children: "Get it on"
                                                    }), (0, s.jsx)("p", {
                                                        className: "text-[16px] leading-0 mb-0 font-[500] whitespace-nowrap",
                                                        children: "Google Play"
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0, s.jsx)(f, {
                                        className: "my-10"
                                    }), (0, s.jsxs)("div", {
                                        className: "flex items-center justify-center gap-5 lg:justify-start sm:gap-6",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex -space-x-3 overflow-hidden",
                                            children: [(0, s.jsx)(d(), {
                                                className: "inline-block w-8 h-8 border border-white rounded-full dark:border-gray-900",
                                                src: "https://i.pravatar.cc/150?img=1",
                                                width: 50,
                                                height: 50,
                                                alt: "user image"
                                            }), (0, s.jsx)(d(), {
                                                className: "inline-block w-8 h-8 border border-white rounded-full dark:border-gray-900",
                                                src: "https://i.pravatar.cc/150?img=2",
                                                width: 50,
                                                height: 50,
                                                alt: "user image"
                                            }), (0, s.jsx)(d(), {
                                                className: "inline-block w-8 h-8 border border-white rounded-full dark:border-gray-900",
                                                src: "https://i.pravatar.cc/150?img=3",
                                                width: 50,
                                                height: 50,
                                                alt: "user image"
                                            }), (0, s.jsx)(d(), {
                                                className: "inline-block w-8 h-8 border border-white rounded-full dark:border-gray-900",
                                                src: "https://i.pravatar.cc/150?img=4",
                                                width: 50,
                                                height: 50,
                                                alt: "user image"
                                            }), (0, s.jsx)(d(), {
                                                className: "inline-block w-8 h-8 border border-white rounded-full dark:border-gray-900",
                                                src: "https://i.pravatar.cc/150?img=5",
                                                width: 50,
                                                height: 50,
                                                alt: "user image"
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "w-px h-8 bg-gray-200 dark:bg-gray-400"
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "flex items-center gap-0.5",
                                                    children: [(0, s.jsx)(w, {
                                                        width: 18,
                                                        className: "text-yellow-300"
                                                    }), (0, s.jsx)(w, {
                                                        width: 18,
                                                        className: "text-yellow-300"
                                                    }), (0, s.jsx)(w, {
                                                        width: 18,
                                                        className: "text-yellow-300"
                                                    }), (0, s.jsx)(w, {
                                                        width: 18,
                                                        className: "text-yellow-300"
                                                    }), (0, s.jsx)(b, {
                                                        width: 18,
                                                        className: "text-yellow-300"
                                                    })]
                                                }), (0, s.jsx)("span", {
                                                    className: "text-base font-normal text-gray-500 dark:text-gray-400",
                                                    children: "4.5"
                                                })]
                                            }), (0, s.jsxs)("p", {
                                                className: "mt-1 text-sm font-normal text-gray-500 dark:text-gray-400",
                                                children: ["Top rated by ", (0, s.jsx)("span", {
                                                    className: "font-semibold text-gray-900 dark:text-white",
                                                    children: "100+"
                                                }), " Reviews"]
                                            })]
                                        })]
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "hidden lg:flex absolute -bottom-20 -top-20 right-24 rotate-[25deg]",
                                    children: (0, s.jsx)(d(), {
                                        width: 600,
                                        height: 941,
                                        className: "w-auto",
                                        src: "/img/phone_app.png",
                                        alt: "App screenshot"
                                    })
                                })]
                            })
                        })
                    })
                }),
                v = r(51223);
            let j = l.forwardRef(function(e, t) {
                    let {
                        title: r,
                        titleId: s,
                        ...a
                    } = e;
                    return l.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        "data-slot": "icon",
                        ref: t,
                        "aria-labelledby": s
                    }, a), r ? l.createElement("title", {
                        id: s
                    }, r) : null, l.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    }))
                }),
                N = l.forwardRef(function(e, t) {
                    let {
                        title: r,
                        titleId: s,
                        ...a
                    } = e;
                    return l.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        "data-slot": "icon",
                        ref: t,
                        "aria-labelledby": s
                    }, a), r ? l.createElement("title", {
                        id: s
                    }, r) : null, l.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
                    }))
                });
            var k = r(15831),
                C = () => (0, s.jsxs)(i.W, {
                    className: "py-10 pt-2",
                    children: [(0, s.jsxs)("div", {
                        className: "text-center mb-[80px]",
                        children: [(0, s.jsx)("p", {
                            className: "uppercase tracking-widest dark:text-white/50",
                            children: "introducing"
                        }), (0, s.jsx)("p", {
                            className: "text-5xl font-bold my-3",
                            children: "The Dione Ecosystem"
                        }), (0, s.jsx)("p", {
                            className: "text-gray-400",
                            children: "Inspired by the Nebra Sky"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-10 items-center",
                        children: [(0, s.jsx)("div", {
                            children: (0, s.jsxs)(v.Z, {
                                children: [(0, s.jsx)(j, {
                                    width: 34,
                                    className: "mb-2 text-primary"
                                }), (0, s.jsx)("p", {
                                    className: "text-3xl font-bold mb-3 inline-block",
                                    children: "Odyssey"
                                }), (0, s.jsx)("p", {
                                    children: "Setting the foundation for a new era of eco-friendly and sustainable blockchain technologies."
                                }), (0, s.jsx)("div", {
                                    className: "mt-5 max-w-[150px]",
                                    children: (0, s.jsx)(n(), {
                                        color: "secondary",
                                        href: "/odyssey",
                                        className: "mr-3 p-0 text-lg dark:[text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)] font-[300] text-md text-primary",
                                        children: "Learn More"
                                    })
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsxs)(v.Z, {
                                children: [(0, s.jsx)(N, {
                                    width: 34,
                                    className: "mb-2 text-primary"
                                }), (0, s.jsx)("p", {
                                    className: "text-3xl font-bold mb-3 inline-block",
                                    children: "Orion"
                                }), (0, s.jsx)("p", {
                                    children: "Innovative off-grid validators for Odyssey, powered by solar energy and Starlink connectivity."
                                }), (0, s.jsx)("div", {
                                    className: "mt-5 max-w-[150px]",
                                    children: (0, s.jsx)(n(), {
                                        color: "secondary",
                                        href: "/orion",
                                        className: "mr-3 p-0 text-lg dark:[text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)] font-[300] text-md text-primary",
                                        children: "Learn More"
                                    })
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsxs)(v.Z, {
                                children: [(0, s.jsx)(k.Z, {
                                    width: 34,
                                    className: "mb-2 text-primary"
                                }), (0, s.jsx)("p", {
                                    className: "text-3xl font-bold mb-3 inline-block",
                                    children: "Nebra"
                                }), (0, s.jsx)("p", {
                                    children: "Empowers individuals and businesses by facilitating easy and secure transactions of clean energy through Odyssey."
                                }), (0, s.jsx)("div", {
                                    className: "mt-5 max-w-[150px]",
                                    children: (0, s.jsx)(n(), {
                                        color: "secondary",
                                        href: "/nebra",
                                        className: "mr-3 p-0 text-lg dark:[text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)] font-[300] text-md  text-primary",
                                        children: "Learn More"
                                    })
                                })]
                            })
                        })]
                    })]
                });
            let z = () => {
                let e = r(69591);
                return (0, s.jsxs)("div", {
                    className: "max-w-[1100px] mx-auto py-24",
                    children: [(0, s.jsx)("p", {
                        className: "text-center font-bold uppercase mb-5",
                        children: "Partners & Sponsors"
                    }), (0, s.jsx)("div", {
                        className: "flex flex-col lg:flex-row justify-center gap-x-10 items-center mb-10",
                        children: e.slice(0, 5).map((e, t) => (0, s.jsxs)(n(), {
                            href: e.website,
                            target: "_blank",
                            rel: "nofollow",
                            className: "flex items-center brightness-75 hover:brightness-100 gap-2",
                            children: [(0, s.jsx)(d(), {
                                src: e.image,
                                alt: "Binance",
                                width: 48,
                                height: 48
                            }), (0, s.jsx)("p", {
                                className: "font-bold text-lg",
                                children: e.name
                            })]
                        }, t))
                    }), (0, s.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, s.jsxs)("p", {
                            className: "relative rounded-full bg-white dark:bg-[#16162E] shadow-md px-4 py-1.5 text-sm leading-6 text-gray-600 dark:text-gray-300",
                            children: [(0, s.jsx)("span", {
                                className: "hidden md:inline",
                                children: "We‘re partnered with some of the best in the business"
                            }), (0, s.jsxs)(n(), {
                                href: "/partners",
                                className: "font-semibold text-black dark:text-white",
                                children: [(0, s.jsx)("span", {
                                    className: "absolute inset-0",
                                    "aria-hidden": "true"
                                }), " See full list", " ", (0, s.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: "→"
                                })]
                            })]
                        })
                    })]
                })
            };
            var M = () => (0, s.jsx)("div", {
                    className: "pb-32",
                    id: "nfts",
                    children: (0, s.jsx)(i.W, {
                        children: (0, s.jsxs)("div", {
                            className: "flex flex-col lg:flex-row items-center gap-y-20 lg:gap-x-20",
                            children: [(0, s.jsx)("div", {
                                className: " max-w-[400px] w-full",
                                children: (0, s.jsx)(d(), {
                                    src: "https://i.seadn.io/s/raw/files/0f4af3825a07bce696daecba6e776b48.png?auto=format&dpr=1&w=1000",
                                    width: 800,
                                    height: 800,
                                    className: "mx-auto rounded-2xl",
                                    alt: "StorySet Innovate"
                                })
                            }), (0, s.jsxs)("div", {
                                className: "w-full",
                                children: [(0, s.jsx)("p", {
                                    className: "font-bold text-danger inline-block text-sm",
                                    children: "NEW!"
                                }), (0, s.jsx)("p", {
                                    className: "text-4xl font-bold mb-3",
                                    children: "Elysium 88 - A Dione Collection"
                                }), (0, s.jsx)("p", {
                                    className: "mb-5",
                                    children: "Dione, in collaboration with DiamondSwap and in anticipation of the launch of our Odyssey mainnet is excited to introduce the future of decentralized finance on the Odyssey mainnet, the first official Yield Farm. This venture will begin with the launch of our highly anticipated “Elysium 88: A Dione Collection.” In Dione fashion, the Elysium 88 NFTs are launching the same way Dione was back on August 14, 2022 - stealthily; so everyone has a fair opportunity."
                                }), (0, s.jsx)(n(), {
                                    href: "https://diamondswap.com/collections/elysium-88",
                                    target: "_blank",
                                    rel: "nofollow noopener noreferer",
                                    className: "text-white rounded-full buybutton relative inline-block overflow-visible text-sm py-5 px-8 lg:text-[1em] text-center whitespace-nowrap",
                                    children: "Get yours now"
                                })]
                            })]
                        })
                    })
                }),
                E = r(55629);
            let _ = e => (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512",
                ...e,
                "aria-label": "Sun Icon",
                children: (0, s.jsx)("path", {
                    fill: "currentColor",
                    d: "M256 144C194.1 144 144 194.1 144 256c0 61.86 50.14 112 112 112s112-50.14 112-112C368 194.1 317.9 144 256 144zM256 320c-35.29 0-64-28.71-64-64c0-35.29 28.71-64 64-64s64 28.71 64 64C320 291.3 291.3 320 256 320zM256 112c13.25 0 24-10.75 24-24v-64C280 10.75 269.3 0 256 0S232 10.75 232 24v64C232 101.3 242.8 112 256 112zM256 400c-13.25 0-24 10.75-24 24v64C232 501.3 242.8 512 256 512s24-10.75 24-24v-64C280 410.8 269.3 400 256 400zM488 232h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64C501.3 280 512 269.3 512 256S501.3 232 488 232zM112 256c0-13.25-10.75-24-24-24h-64C10.75 232 0 242.8 0 256s10.75 24 24 24h64C101.3 280 112 269.3 112 256zM391.8 357.8c-9.344-9.375-24.56-9.372-33.94 .0031s-9.375 24.56 0 33.93l45.25 45.28c4.672 4.688 10.83 7.031 16.97 7.031s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L391.8 357.8zM120.2 154.2c4.672 4.688 10.83 7.031 16.97 7.031S149.5 158.9 154.2 154.2c9.375-9.375 9.375-24.56 0-33.93L108.9 74.97c-9.344-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L120.2 154.2zM374.8 161.2c6.141 0 12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.94s-24.59-9.375-33.94 0l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.93C362.5 158.9 368.7 161.2 374.8 161.2zM120.2 357.8l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.94c4.688 4.688 10.83 7.031 16.97 7.031s12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.93S129.6 348.4 120.2 357.8z"
                })
            });
            var L = r(77451),
                A = r(17083);
            let S = e => (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 640 512",
                "aria-label": "Store icon",
                ...e,
                children: (0, s.jsx)("path", {
                    fill: "currentColor",
                    d: "M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"
                })
            });
            var D = r(37767),
                T = function() {
                    for (var e, t, r = 0, s = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
                        var r, s, a = "";
                        if ("string" == typeof t || "number" == typeof t) a += t;
                        else if ("object" == typeof t) {
                            if (Array.isArray(t))
                                for (r = 0; r < t.length; r++) t[r] && (s = e(t[r])) && (a && (a += " "), a += s);
                            else
                                for (r in t) t[r] && (a && (a += " "), a += r)
                        }
                        return a
                    }(e)) && (s && (s += " "), s += t);
                    return s
                },
                F = e => {
                    let {
                        number: t = 20
                    } = e, [r, a] = (0, l.useState)([]);
                    return (0, l.useEffect)(() => {
                        a([...Array(t)].map(() => ({
                            top: -5,
                            left: Math.floor(Math.random() * window.innerWidth) + "px",
                            animationDelay: 1 * Math.random() + .2 + "s",
                            animationDuration: Math.floor(8 * Math.random() + 2) + "s"
                        })))
                    }, [t]), (0, s.jsx)(s.Fragment, {
                        children: [...r].map((e, t) => (0, s.jsx)("span", {
                            className: T("pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"),
                            style: e,
                            children: (0, s.jsx)("div", {
                                className: "pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent"
                            })
                        }, t))
                    })
                },
                I = r(6917),
                O = e => {
                    let { ...t
                    } = e;
                    return (0, s.jsxs)(i.W, {
                        className: "py-32",
                        children: [(0, s.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5",
                            children: [(0, s.jsxs)(v.Z, {
                                className: "lg:col-span-2",
                                children: [(0, s.jsx)(F, {
                                    number: 30
                                }), (0, s.jsxs)("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-2 justify-between gap-7 items-center min-h-[180px]",
                                    children: [(0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("p", {
                                            className: "text-3xl font-bold mb-2 inline-block",
                                            children: "Want the latest news?"
                                        }), (0, s.jsx)("p", {
                                            children: "Don‘t forget to follow us on social media to get the latest news first!"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex gap-5 lg:ml-auto",
                                        children: [(0, s.jsx)(n(), {
                                            href: "https://twitter.com/intent/follow?screen_name=DioneProtocol",
                                            target: "_blank",
                                            rel: "nofollow",
                                            className: "flex gap-3 justify-center items-center transition-colors rounded-full",
                                            children: (0, s.jsx)(L.TwitterIcon, {
                                                height: 40
                                            })
                                        }), (0, s.jsx)(n(), {
                                            href: "https://discord.gg/grpMQmym2m",
                                            target: "_blank",
                                            rel: "nofollow",
                                            className: "flex gap-3 justify-center items-center transition-colors rounded-full",
                                            children: (0, s.jsx)(D.DiscordIcon, {
                                                height: 40
                                            })
                                        }), (0, s.jsx)(n(), {
                                            href: "https://t.me/DioneProtocol",
                                            target: "_blank",
                                            rel: "nofollow",
                                            className: "flex gap-3 justify-center items-center transition-colors rounded-full",
                                            children: (0, s.jsx)(A.TelegramIcon, {
                                                height: 40
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, s.jsxs)(v.Z, {
                                className: "group",
                                children: [(0, s.jsx)(I.Z, {
                                    className: "absolute inset-0 !z-[0] opacity-0 group-hover:opacity-100 transition-all duration-[700ms]",
                                    quantity: 30,
                                    ease: 80,
                                    color: "#FFFFFF",
                                    refresh: !0
                                }), (0, s.jsxs)("div", {
                                    className: "relative z-[1]",
                                    children: [(0, s.jsx)("p", {
                                        className: "text-3xl font-bold mb-3",
                                        children: "Missed our latest AMA?"
                                    }), (0, s.jsx)("p", {
                                        className: "text-sm mb-3",
                                        children: "Find the latest recording here for you to listen to or download."
                                    }), (0, s.jsxs)("figure", {
                                        className: "mx-auto inline-block",
                                        children: [(0, s.jsxs)("audio", {
                                            controls: !0,
                                            className: "mb-2",
                                            children: [(0, s.jsx)("source", {
                                                src: "https://webapi.dioneprotocol.com/public/ama/June-28-2024.ogg",
                                                id: "oggSource",
                                                type: "audio/ogg"
                                            }), (0, s.jsx)("source", {
                                                src: "https://webapi.dioneprotocol.com/public/ama/June-28-2024.mp3",
                                                id: "mp3Source",
                                                type: "audio/mpeg"
                                            }), "Your browser does not support the audio element."]
                                        }), (0, s.jsx)("p", {
                                            className: "text-xs text-black/40 dark:text-white/30",
                                            children: "Recorded June 28, 2024."
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                            children: [(0, s.jsx)("div", {
                                children: (0, s.jsxs)(v.Z, {
                                    className: "group",
                                    children: [(0, s.jsx)(I.Z, {
                                        className: "absolute inset-0 !z-[0] opacity-0 group-hover:opacity-100 transition-all duration-[700ms]",
                                        quantity: 30,
                                        ease: 80,
                                        color: "#FFFFFF",
                                        refresh: !0
                                    }), (0, s.jsxs)("div", {
                                        className: "relative z-[1]",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex justify-between gap-7 mb-10 items-center text-primary",
                                            children: [(0, s.jsx)("div", {
                                                className: "flex-col",
                                                children: (0, s.jsx)(S, {
                                                    height: 24
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "flex-col",
                                                children: (0, s.jsx)(E.L, {
                                                    width: 20
                                                })
                                            })]
                                        }), (0, s.jsx)("p", {
                                            className: "text-3xl font-bold mb-3 inline-block",
                                            children: "Dione Express"
                                        }), (0, s.jsx)("p", {
                                            children: "Buy thousands of different cryptocurrencies quickly and easily through our unique and custom checkout experience."
                                        }), (0, s.jsxs)(n(), {
                                            href: "/express",
                                            className: "flex gap-3 mt-10 text-primary items-center",
                                            children: [(0, s.jsx)("div", {
                                                children: "Check it out"
                                            }), (0, s.jsx)("div", {
                                                children: (0, s.jsx)(E.L, {
                                                    width: 20
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                children: (0, s.jsxs)(v.Z, {
                                    className: "group",
                                    children: [(0, s.jsx)(I.Z, {
                                        className: "absolute inset-0 !z-[0] opacity-0 group-hover:opacity-100 transition-all duration-[700ms]",
                                        quantity: 30,
                                        ease: 80,
                                        color: "#FFFFFF",
                                        refresh: !0
                                    }), (0, s.jsxs)("div", {
                                        className: "relative z-[1]",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex justify-between gap-7 mb-10 items-center text-primary",
                                            children: [(0, s.jsx)("div", {
                                                className: "flex-col",
                                                children: (0, s.jsx)(_, {
                                                    height: 24
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "flex-col",
                                                children: (0, s.jsx)(E.L, {
                                                    width: 20
                                                })
                                            })]
                                        }), (0, s.jsx)("p", {
                                            className: "text-3xl font-bold mb-3 inline-block",
                                            children: "Project Orion"
                                        }), (0, s.jsx)("p", {
                                            children: "Innovative off-grid validators for Odyssey, uploaded to Starlink powered by solar energy and Starlink connectivity."
                                        }), (0, s.jsxs)(n(), {
                                            href: "/orion",
                                            className: "flex gap-3 mt-10 text-primary items-center",
                                            children: [(0, s.jsx)("div", {
                                                children: "Check it out"
                                            }), (0, s.jsx)("div", {
                                                children: (0, s.jsx)(E.L, {
                                                    width: 20
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                },
                B = r(51526),
                P = r(70798);
            let R = e => {
                let {
                    num: t,
                    text: r,
                    className: a
                } = e;
                if (("hours" == r || "days" == r) && 0 == t) return null;
                let n = t.toString();
                return t > -10 && t < 10 && (n = "0" + t), (0, s.jsxs)("div", {
                    className: "flex flex-row items-baseline justify-center",
                    children: [(0, s.jsx)("div", {
                        className: "text-center relative overflow-hidden text-xl w-10 ".concat(a && a),
                        children: (0, s.jsx)(B.M, {
                            mode: "popLayout",
                            children: (0, s.jsx)(P.E.span, {
                                initial: {
                                    y: "100%"
                                },
                                animate: {
                                    y: "0%"
                                },
                                exit: {
                                    y: "-100%"
                                },
                                transition: {
                                    ease: "backIn",
                                    duration: .75
                                },
                                className: "block font-bold",
                                children: n
                            }, t)
                        })
                    }), r && (0, s.jsx)("span", {
                        className: "text-xs md:text-sm lg:text-base font-light opacity-75",
                        children: r
                    })]
                })
            };
            var H = e => {
                    let {
                        futureDate: t,
                        className: r
                    } = e, a = (0, l.useRef)(null), [n, i] = (0, l.useState)({
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    });
                    (0, l.useEffect)(() => (a.current = setInterval(o, 1e3), () => clearInterval(a.current || void 0)), []);
                    let o = () => {
                        let e = +t - +new Date;
                        i({
                            days: Math.floor(e / 864e5),
                            hours: Math.floor(e % 864e5 / 36e5),
                            minutes: Math.floor(e % 36e5 / 6e4),
                            seconds: Math.floor(e % 6e4 / 1e3)
                        })
                    };
                    return (0, s.jsxs)("div", {
                        className: "w-full mx-auto flex justify-center mb-5 gap-3",
                        children: [(0, s.jsx)(R, {
                            num: n.days,
                            text: "d",
                            className: r
                        }), (0, s.jsx)(R, {
                            num: n.hours,
                            text: "h",
                            className: r
                        }), (0, s.jsx)(R, {
                            num: n.minutes,
                            text: "m",
                            className: r
                        }), (0, s.jsx)(R, {
                            num: n.seconds,
                            text: "s",
                            className: r
                        })]
                    })
                },
                W = e => {
                    let {
                        endTime: t,
                        setShowTimer: r
                    } = e;
                    return (0, s.jsx)("div", {
                        className: "fixed flex items-center justify-center top-0 left-0 w-full h-full z-[1000] backdrop-blur",
                        children: (0, s.jsxs)("div", {
                            className: "bg-card w-full max-w-md p-10 rounded-3xl text-center",
                            children: [(0, s.jsx)(d(), {
                                src: "/favicon.svg",
                                width: 150,
                                height: 150,
                                alt: "",
                                className: "border-[10px] rounded-full border-card -mt-28 mx-auto mb-5"
                            }), (0, s.jsx)("p", {
                                className: "text-white/50 text-sm mb-3",
                                children: "Odyssey trading will go live"
                            }), (0, s.jsx)("p", {
                                className: "text-6xl text-center mb-3 font-[900] text-primary",
                                children: "11.05.2024"
                            }), (0, s.jsx)(H, {
                                futureDate: t
                            }), (0, s.jsx)("p", {
                                className: "mb-5",
                                children: "Time: 03:00PM (EST)"
                            }), (0, s.jsx)("p", {
                                className: "mb-3",
                                children: "The much anticipated public launch of Odyssey will occur on the date above. Keep an eye on our socials for more information!"
                            }), (0, s.jsx)("hr", {
                                className: "my-5 border-white/5"
                            }), (0, s.jsxs)("div", {
                                className: "flex justify-center gap-3",
                                children: [(0, s.jsx)(n(), {
                                    href: "https://twitter.com/intent/follow?screen_name=DioneProtocol",
                                    className: "px-5 py-2.5 rounded-full inline-block items-center gap-3",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0, s.jsx)(L.TwitterIcon, {
                                            height: 20
                                        }), (0, s.jsx)("p", {
                                            children: "(Twitter)"
                                        })]
                                    })
                                }), (0, s.jsx)("button", {
                                    onClick: () => r(!1),
                                    className: "px-5 py-2.5 buybutton relative rounded-full flex items-center gap-3",
                                    children: (0, s.jsx)("p", {
                                        children: "Ok, got it!"
                                    })
                                })]
                            })]
                        })
                    })
                };

            function Z() {
                let e = new Date("2024-10-30T07:00:00.000z"),
                    t = new Date("2024-11-05T15:00:00.000z"),
                    [r, a] = (0, l.useState)(!1);
                return (0, l.useEffect)(() => {
                    a(new Date > e)
                }, []), (0, s.jsxs)(h.Z, {
                    showCookieNotice: !0,
                    title: "Home",
                    description: "Setting the foundation for a new era of eco-friendly and sustainable blockchain technologies.",
                    children: [r && (0, s.jsx)(W, {
                        endTime: t,
                        setShowTimer: a
                    }), (0, s.jsx)(m, {}), (0, s.jsx)(C, {}), (0, s.jsx)(z, {}), (0, s.jsx)(y, {}), (0, s.jsx)(O, {}), (0, s.jsx)(M, {})]
                })
            }
        },
        15831: function(e, t, r) {
            "use strict";
            var s = r(67294);
            let a = s.forwardRef(function(e, t) {
                let {
                    title: r,
                    titleId: a,
                    ...n
                } = e;
                return s.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: t,
                    "aria-labelledby": a
                }, n), r ? s.createElement("title", {
                    id: a
                }, r) : null, s.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                }))
            });
            t.Z = a
        }
    },
    function(e) {
        e.O(0, [123, 798, 522, 888, 774, 179], function() {
            return e(e.s = 48312)
        }), _N_E = e.O()
    }
]);