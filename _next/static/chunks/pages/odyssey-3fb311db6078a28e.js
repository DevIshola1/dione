(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [991], {
        90694: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/odyssey", function() {
                return s(60775)
            }])
        },
        6917: function(e, t, s) {
            "use strict";
            var r = s(85893),
                i = s(67294);
            t.Z = e => {
                let {
                    className: t = "",
                    quantity: s = 100,
                    staticity: a = 50,
                    ease: n = 50,
                    size: l = .4,
                    refresh: o = !1,
                    color: c = "#ffffff",
                    vx: d = 0,
                    vy: m = 0
                } = e, p = (0, i.useRef)(null), h = (0, i.useRef)(null), g = (0, i.useRef)(null), x = (0, i.useRef)([]), u = function() {
                    let [e, t] = (0, i.useState)({
                        x: 0,
                        y: 0
                    });
                    return (0, i.useEffect)(() => {
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
                }(), y = (0, i.useRef)({
                    x: 0,
                    y: 0
                }), f = (0, i.useRef)({
                    w: 0,
                    h: 0
                }), b = window.devicePixelRatio;
                (0, i.useEffect)(() => (p.current && (g.current = p.current.getContext("2d")), w(), O(), window.addEventListener("resize", w), () => {
                    window.removeEventListener("resize", w)
                }), [c]), (0, i.useEffect)(() => {
                    v()
                }, [u.x, u.y]), (0, i.useEffect)(() => {
                    w()
                }, [o]);
                let w = () => {
                        j(), z()
                    },
                    v = () => {
                        if (p.current) {
                            let e = p.current.getBoundingClientRect(),
                                {
                                    w: t,
                                    h: s
                                } = f.current,
                                r = u.x - e.left - t / 2,
                                i = u.y - e.top - s / 2;
                            r < t / 2 && r > -t / 2 && i < s / 2 && i > -s / 2 && (y.current.x = r, y.current.y = i)
                        }
                    },
                    j = () => {
                        h.current && p.current && g.current && (x.current.length = 0, f.current.w = h.current.offsetWidth, f.current.h = h.current.offsetHeight, p.current.width = f.current.w * b, p.current.height = f.current.h * b, p.current.style.width = "".concat(f.current.w, "px"), p.current.style.height = "".concat(f.current.h, "px"), g.current.scale(b, b))
                    },
                    N = () => {
                        let e = Math.floor(Math.random() * f.current.w);
                        return {
                            x: e,
                            y: Math.floor(Math.random() * f.current.h),
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
                    E = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (g.current) {
                            let {
                                x: s,
                                y: r,
                                translateX: i,
                                translateY: a,
                                size: n,
                                alpha: l
                            } = e;
                            g.current.translate(i, a), g.current.beginPath(), g.current.arc(s, r, n, 0, 2 * Math.PI), g.current.fillStyle = "rgba(".concat(k.join(", "), ", ").concat(l, ")"), g.current.fill(), g.current.setTransform(b, 0, 0, b, 0, 0), t || x.current.push(e)
                        }
                    },
                    A = () => {
                        g.current && g.current.clearRect(0, 0, f.current.w, f.current.h)
                    },
                    z = () => {
                        A();
                        for (let e = 0; e < s; e++) E(N())
                    },
                    C = (e, t, s, r, i) => {
                        let a = (e - t) * (i - r) / (s - t) + r;
                        return a > 0 ? a : 0
                    },
                    O = () => {
                        A(), x.current.forEach((e, t) => {
                            let s = parseFloat(C([e.x + e.translateX - e.size, f.current.w - e.x - e.translateX - e.size, e.y + e.translateY - e.size, f.current.h - e.y - e.translateY - e.size].reduce((e, t) => Math.min(e, t)), 0, 20, 0, 1).toFixed(2));
                            s > 1 ? (e.alpha += .02, e.alpha > e.targetAlpha && (e.alpha = e.targetAlpha)) : e.alpha = e.targetAlpha * s, e.x += e.dx + d, e.y += e.dy + m, e.translateX += (y.current.x / (a / e.magnetism) - e.translateX) / n, e.translateY += (y.current.y / (a / e.magnetism) - e.translateY) / n, E(e, !0), (e.x < -e.size || e.x > f.current.w + e.size || e.y < -e.size || e.y > f.current.h + e.size) && (x.current.splice(t, 1), E(N()))
                        }), window.requestAnimationFrame(O)
                    };
                return (0, r.jsx)("div", {
                    className: t,
                    ref: h,
                    "aria-hidden": "true",
                    children: (0, r.jsx)("canvas", {
                        ref: p,
                        className: "h-full w-full !z-[0] relative"
                    })
                })
            }
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
        60775: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return D
                }
            });
            var r = s(85893),
                i = s(24522),
                a = s(41664),
                n = s.n(a),
                l = s(41027),
                o = s(45448),
                c = s(47566),
                d = s(87740),
                m = s(86597),
                p = s(96476),
                h = s(51021),
                g = s(67294),
                x = s(39883);
            let u = (0, g.createContext)({});

            function y(e) {
                let {
                    options: t,
                    children: s,
                    ...i
                } = e;
                return (0, r.jsx)("button", {
                    onClick: e => {
                        let s = e.currentTarget.getBoundingClientRect(),
                            r = s.left + s.width / 2,
                            i = s.top + s.height / 2;
                        (0, x.Z)({ ...t,
                            origin: {
                                x: r / window.innerWidth,
                                y: i / window.innerHeight
                            }
                        })
                    },
                    ...i,
                    children: s
                })
            }(0, g.forwardRef)((e, t) => {
                let {
                    options: s,
                    globalOptions: i = {
                        resize: !0,
                        useWorker: !0
                    },
                    manualstart: a = !1,
                    children: n,
                    ...l
                } = e, o = (0, g.useRef)(null), c = (0, g.useCallback)(e => {
                    null !== e ? o.current || (o.current = x.Z.create(e, { ...i,
                        resize: !0
                    })) : o.current && (o.current.reset(), o.current = null)
                }, [i]), d = (0, g.useCallback)(function() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return null === (e = o.current) || void 0 === e ? void 0 : e.call(o, { ...s,
                        ...t
                    })
                }, [s]), m = (0, g.useMemo)(() => ({
                    fire: d
                }), [d]);
                return (0, g.useImperativeHandle)(t, () => m, [m]), (0, g.useEffect)(() => {
                    a || d()
                }, [a, d]), (0, r.jsxs)(u.Provider, {
                    value: m,
                    children: [(0, r.jsx)("canvas", {
                        ref: c,
                        ...l
                    }), n]
                })
            }).displayName = "Confetti";
            var f = e => {
                    let { ...t
                    } = e, {
                        isOpen: s,
                        onOpen: i,
                        onOpenChange: a
                    } = (0, l.q)();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(y, {
                            children: (0, r.jsx)("div", {
                                onClick: i,
                                className: "inline-block text-white rounded-full buybutton relative px-9 py-5 whitespace-nowrap",
                                children: "Try Odyssey"
                            })
                        }), (0, r.jsx)(o.R, {
                            isOpen: s,
                            onOpenChange: a,
                            size: "2xl",
                            children: (0, r.jsx)(c.A, {
                                className: "bg-card",
                                children: e => (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(d.k, {
                                        className: "flex flex-col gap-1",
                                        children: "Odyssey Testnet"
                                    }), (0, r.jsxs)(m.I, {
                                        className: "overflow-x-scroll pt-5 pb-8 scrollbar",
                                        children: [(0, r.jsx)("p", {
                                            className: "mb-3 text-xl font-bold",
                                            children: "Thanks for trying Odyssey!"
                                        }), (0, r.jsx)("p", {
                                            className: "text-sm mb-3",
                                            children: "The team at Dione appreciates you for taking the time to explore our blockchain. Below you'll find the credentials required to connect to, and test Odyssey on our isolated network."
                                        }), (0, r.jsxs)("div", {
                                            className: "flex gap-5 items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: "w-[130px] border-r-3 border-secondary text-sm uppercase text-white/50",
                                                children: "Network Name"
                                            }), (0, r.jsx)("div", {
                                                children: (0, r.jsx)("p", {
                                                    className: "inline-block w-full p-1 px-5 bg-black/40 rounded-full",
                                                    children: "Odyssey Testnet"
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex gap-5 items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: "min-w-[130px] w-[130px] border-r-3 border-secondary text-sm uppercase text-white/50",
                                                children: "RPC URL"
                                            }), (0, r.jsx)("div", {
                                                children: (0, r.jsx)(n(), {
                                                    href: "https://testnode.dioneprotocol.com/ext/bc/D/rpc",
                                                    target: "_blank",
                                                    rel: "nofollow",
                                                    className: "text-primary inline-block p-1 px-5 bg-black/40 rounded-full",
                                                    children: "https://testnode.dioneprotocol.com/ext/bc/D/rpc"
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex gap-5 items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: "w-[130px] border-r-3 border-secondary text-sm uppercase text-white/50",
                                                children: "Chain ID"
                                            }), (0, r.jsx)("div", {
                                                children: (0, r.jsx)("p", {
                                                    className: "inline-block p-1 px-5 bg-black/40 rounded-full",
                                                    children: "131313"
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex gap-5 items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: "w-[130px] border-r-3 border-secondary text-sm uppercase text-white/50",
                                                children: "Symbol"
                                            }), (0, r.jsx)("div", {
                                                children: (0, r.jsx)("p", {
                                                    className: "inline-block p-1 px-5 bg-black/40 rounded-full",
                                                    children: "DIONE"
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex gap-5 items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: "w-[130px] border-r-3 border-secondary text-sm uppercase text-white/50",
                                                children: "Decimals"
                                            }), (0, r.jsx)("div", {
                                                children: (0, r.jsx)("p", {
                                                    className: "inline-block p-1 px-5 bg-black/40 rounded-full",
                                                    children: "18"
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex gap-5 items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: "w-[130px] border-r-3 border-secondary text-sm uppercase text-white/50",
                                                children: "Explorer URL"
                                            }), (0, r.jsx)("div", {
                                                children: (0, r.jsx)(n(), {
                                                    href: "https://testnet.odysseyscan.com/",
                                                    target: "_blank",
                                                    rel: "nofollow",
                                                    className: "text-primary inline-block p-1 px-5 bg-black/40 rounded-full",
                                                    children: "https://testnet.odysseyscan.com/"
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex gap-5 items-center",
                                            children: [(0, r.jsx)("div", {
                                                className: "min-w-[130px] border-r-3 border-secondary text-sm uppercase text-white/50",
                                                children: "Tech Docs"
                                            }), (0, r.jsx)("div", {
                                                className: "overflow-hidden w-full",
                                                children: (0, r.jsx)(n(), {
                                                    href: "https://dione-protocol.gitbook.io/technical-documentation",
                                                    target: "_blank",
                                                    rel: "nofollow",
                                                    className: "inline-block text-primary p-1 px-5 bg-black/40 rounded-full text-ellipsis overflow-hidden",
                                                    children: "Technical Docs"
                                                })
                                            })]
                                        })]
                                    }), (0, r.jsx)(p.R, {
                                        children: (0, r.jsx)(h.A, {
                                            color: "danger",
                                            variant: "light",
                                            onPress: e,
                                            children: "Close"
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                },
                b = s(6917),
                w = e => {
                    let { ...t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "relative pt-[200px] pb-[150px] z-[5] flex w-full items-center justify-center overflow-hidden rounded-lg p-4",
                        children: [(0, r.jsx)("div", {
                            className: "flex items-center justify-center lg:text-center relative z-[10]",
                            children: (0, r.jsxs)("div", {
                                children: [(0, r.jsxs)("p", {
                                    className: "mb-8 text-lg text-white/50",
                                    children: [(0, r.jsx)("span", {
                                        className: "text-primary",
                                        children: "Odyssey Chain"
                                    }), " | The next generation of trust and security"]
                                }), (0, r.jsx)("div", {
                                    className: "w-full max-w-[1200px]",
                                    children: (0, r.jsx)("p", {
                                        className: "text-4xl lg:text-6xl font-bold uppercase tracking-wider leading-[1.1em] mb-10 hyphens-auto",
                                        children: "the backbone of the Dione Ecosystem - a fast, secure, and scalable blockchain"
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "flex gap-8 items-center lg:justify-center",
                                    children: [(0, r.jsx)(f, {}), (0, r.jsxs)("div", {
                                        className: "flex gap-8",
                                        children: [(0, r.jsx)(n(), {
                                            href: "https://testnet.odysseyscan.com/api-docs",
                                            target: "_blank",
                                            className: "dark:text-white/70 dark:hover:text-white bch-link",
                                            children: "Explore API"
                                        }), (0, r.jsx)(n(), {
                                            href: "",
                                            className: "dark:text-white/70 dark:hover:text-white bch-link",
                                            children: "Join the Community"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, r.jsx)(b.Z, {
                            className: "absolute inset-0 z-[9]",
                            quantity: 100,
                            ease: 80,
                            color: "#FFFFFF",
                            refresh: !0
                        })]
                    })
                },
                v = s(20060),
                j = s(15831),
                N = s(68606),
                k = s(57741),
                E = () => (0, r.jsxs)(v.W, {
                    children: [(0, r.jsxs)("div", {
                        className: "text-center max-w-[800px] mx-auto mb-20",
                        children: [(0, r.jsx)("p", {
                            className: "text-[18px] text-primary mb-3",
                            children: "Introducing"
                        }), (0, r.jsx)("div", {
                            className: "small-divider mx-auto"
                        }), (0, r.jsx)("p", {
                            className: "font-bold text-5xl mb-6",
                            children: "Odyssey Chain"
                        }), (0, r.jsx)("p", {
                            className: "text-lg text-gray-500",
                            children: "Build the future on Odyssey, a highly performant Layer-1 protocol offering swift transaction finality, robust security, and seamless scalability."
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-10 mb-20",
                        children: [(0, r.jsx)("div", {
                            className: "group rounded-xl relative overflow-hidden",
                            children: (0, r.jsxs)("div", {
                                className: "grid grid-cols-1 xl:flex gap-5 z-1 relative",
                                children: [(0, r.jsx)("div", {
                                    children: (0, r.jsx)(j.Z, {
                                        width: 50,
                                        strokeWidth: .8,
                                        className: "text-gray-400 group-hover:text-primary transition-all"
                                    })
                                }), (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("p", {
                                        className: "font-[600] text-2xl mb-4",
                                        children: "Super Fast"
                                    }), (0, r.jsx)("p", {
                                        children: "Enjoy swift transfers with reduced fees, minimizing wait times and maximizing your flexibility."
                                    })]
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "group rounded-xl relative overflow-hidden",
                            children: (0, r.jsxs)("div", {
                                className: "grid grid-cols-1 xl:flex gap-5 z-1 relative",
                                children: [(0, r.jsx)("div", {
                                    children: (0, r.jsx)(N.Z, {
                                        width: 50,
                                        strokeWidth: .8,
                                        className: "text-gray-400 group-hover:text-primary transition-all"
                                    })
                                }), (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("p", {
                                        className: "font-[600] text-2xl mb-4",
                                        children: "Secure"
                                    }), (0, r.jsx)("p", {
                                        children: "Network security scales with an increased validator count, making the network even more secure."
                                    })]
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "group rounded-xl relative overflow-hidden",
                            children: (0, r.jsxs)("div", {
                                className: "grid grid-cols-1 xl:flex gap-5 z-1 relative",
                                children: [(0, r.jsx)("div", {
                                    children: (0, r.jsx)(k.Z, {
                                        height: 50,
                                        strokeWidth: .8,
                                        className: "text-gray-400 group-hover:text-primary transition-all"
                                    })
                                }), (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("p", {
                                        className: "font-[600] text-2xl mb-4",
                                        children: "Scalable"
                                    }), (0, r.jsx)("p", {
                                        children: "Starting with up to 4,500 txns per sec, we provide one of the fastest solutions on the market."
                                    })]
                                })]
                            })
                        })]
                    })]
                }),
                A = s(25675),
                z = s.n(A);
            let C = s(69591);
            var O = () => (0, r.jsx)("div", {
                    className: "mb-20",
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-col lg:flex-row justify-center gap-x-10 gap-y-10 items-center py-3 px-20 rounded-full",
                        children: [(0, r.jsx)("div", {
                            children: (0, r.jsx)("p", {
                                className: "font-bold text-lg",
                                children: "Our Partners"
                            })
                        }), (0, r.jsx)("div", {
                            className: "flex gap-4",
                            children: C.slice(0, 6).map((e, t) => (0, r.jsx)(n(), {
                                href: e.website,
                                target: "_blank",
                                rel: "nofollow",
                                className: "flex items-center brightness-75 hover:brightness-100 gap-2",
                                children: (0, r.jsx)(z(), {
                                    className: "col-span-2 max-h-16 w-full object-contain lg:col-span-1 ".concat(e.invert && "invert dark:invert-0"),
                                    src: e.image,
                                    alt: e.name,
                                    width: 64,
                                    height: 64
                                })
                            }, t))
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsxs)(n(), {
                                href: "/partners",
                                className: "font-semibold text-black dark:text-white inline-block text-lg",
                                children: ["+", C.length - 6, " more", " ", " ", (0, r.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: "→"
                                })]
                            })
                        })]
                    })
                }),
                T = () => (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        className: "py-24",
                        children: (0, r.jsxs)(v.W, {
                            children: [(0, r.jsxs)("div", {
                                className: "max-w-[1000px] mb-24",
                                children: [(0, r.jsx)("p", {
                                    className: "text-[18px] text-primary mb-3",
                                    children: "Developer Friendly"
                                }), (0, r.jsx)("div", {
                                    className: "small-divider"
                                }), (0, r.jsx)("p", {
                                    className: "font-bold text-5xl mb-6",
                                    children: "Build on Odyssey"
                                }), (0, r.jsx)("p", {
                                    className: "text-lg text-gray-500",
                                    children: "Leverage your existing expertise in Solidity and familiar tools like Remix, Truffle, and MetaMask for a smooth transition to Odyssey Chain. EVM compatible, Odyssey Chain lets you effortlessly deploy your dApps, just like on Ethereum."
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10",
                                children: [(0, r.jsx)("div", {
                                    className: "group grid grid-cols-1 xl:flex gap-5 z-1 relative",
                                    children: (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("p", {
                                            className: "font-bold text-xl mb-3",
                                            children: "EVM Compatible"
                                        }), (0, r.jsx)("p", {
                                            className: "mb-4",
                                            children: "Unlock the full potential of your dApps. Odyssey Chain's EVM compatibility meets blazing speed and affordability."
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "group grid grid-cols-1 xl:flex gap-5 z-1 relative",
                                    children: (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("p", {
                                            className: "font-bold text-xl mb-3",
                                            children: "Oracles Integrations"
                                        }), (0, r.jsx)("p", {
                                            className: "mb-4",
                                            children: "With Chainlink and Band Protocol seamlessly woven into our fabric, you have access to everything you need."
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "group grid grid-cols-1 xl:flex gap-5 z-1 relative",
                                    children: (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("p", {
                                            className: "font-bold text-xl mb-3",
                                            children: "Open Source"
                                        }), (0, r.jsx)("p", {
                                            className: "mb-4",
                                            children: "The code is just the beginning. Odyssey lets you explore, tinker, and build with the community."
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "group grid grid-cols-1 xl:flex gap-5 z-1 relative",
                                    children: (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("p", {
                                            className: "font-bold text-xl mb-3",
                                            children: "Robust APIs"
                                        }), (0, r.jsx)("p", {
                                            className: "mb-4",
                                            children: "Forge the next generation of dApps with our Rest API that comes in multiple formats and good for all skill levels."
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "group grid grid-cols-1 xl:flex gap-5 z-1 relative",
                                    children: (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("p", {
                                            className: "font-bold text-xl mb-3",
                                            children: "Low Fees"
                                        }), (0, r.jsx)("p", {
                                            className: "mb-4",
                                            children: "Enjoy lower fees on all of your contract deployments lowering the barrier to entry for businesses of all sizes."
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "group grid grid-cols-1 xl:flex gap-5 z-1 relative",
                                    children: (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("p", {
                                            className: "font-bold text-xl mb-3",
                                            children: "Energy Efficient"
                                        }), (0, r.jsx)("p", {
                                            className: "mb-4",
                                            children: "Low energy usage on our proof-of-stake network, bringing the power of renewable energy to Odyssey."
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                }),
                F = s(11429),
                S = s(68562),
                I = () => (0, r.jsx)("div", {
                    className: "bg-black/10 py-24",
                    children: (0, r.jsx)(v.W, {
                        children: (0, r.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-3 items-center",
                            children: [(0, r.jsx)("div", {
                                className: "mb-4 lg:mb-0 hidden md:flex max-w-[700px]",
                                children: (0, r.jsx)(z(), {
                                    src: "/img/storyset/stats.svg",
                                    width: 600,
                                    height: 520,
                                    className: "mx-auto",
                                    alt: ""
                                })
                            }), (0, r.jsxs)("div", {
                                className: "mb-4 lg:mb-0",
                                children: [(0, r.jsx)("p", {
                                    className: "text-[18px] text-primary mb-3",
                                    children: "Start Building"
                                }), (0, r.jsx)("div", {
                                    className: "small-divider"
                                }), (0, r.jsx)("p", {
                                    className: "font-bold text-4xl mb-10",
                                    children: "Explore the API"
                                }), (0, r.jsx)("p", {
                                    className: "text-lg mb-6",
                                    children: "Dive into a treasure trove of advanced functionalities: Odyssey's API boasts a rich tapestry of formats, meticulously crafted to seamlessly integrate with your unique vision. Whether you're building a blazing-fast DeFi protocol, a cutting-edge NFT marketplace, or an innovative DAO platform, Odyssey's flexible tools adapt to your specific use case"
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col gap-y-1 mb-10 text-lg",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)(F.Z, {
                                                width: 24,
                                                strokeWidth: 2.5,
                                                className: "text-success"
                                            })
                                        }), (0, r.jsx)("div", {
                                            children: "Get a list of all transactions"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)(F.Z, {
                                                width: 24,
                                                strokeWidth: 2.5,
                                                className: "text-success"
                                            })
                                        }), (0, r.jsx)("div", {
                                            children: "Stats and chart data"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)(F.Z, {
                                                width: 24,
                                                strokeWidth: 2.5,
                                                className: "text-success"
                                            })
                                        }), (0, r.jsx)("div", {
                                            children: "See holder counts for any token"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)(F.Z, {
                                                width: 24,
                                                strokeWidth: 2.5,
                                                className: "text-success"
                                            })
                                        }), (0, r.jsx)("div", {
                                            children: "List all transfers from any given wallet"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)(F.Z, {
                                                width: 24,
                                                strokeWidth: 2.5,
                                                className: "text-success"
                                            })
                                        }), (0, r.jsx)("div", {
                                            children: "+ more..."
                                        })]
                                    })]
                                }), (0, r.jsx)(n(), {
                                    href: "https://testnet.odysseyscan.com/api-docs",
                                    target: "_blank",
                                    rel: "nofollow",
                                    className: "inline-block text-white rounded-full buybutton relative px-9 py-5 whitespace-nowrap",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex gap-3",
                                        children: [(0, r.jsx)(S.Z, {
                                            height: 20
                                        }), (0, r.jsx)("p", {
                                            children: "Explore API"
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                });

            function D() {
                return (0, r.jsxs)(i.Z, {
                    showCookieNotice: !0,
                    title: "Odyssey",
                    description: "Layer 1 blockchain with up to 12,000 TPS.",
                    children: [(0, r.jsx)(w, {}), (0, r.jsx)(E, {}), (0, r.jsx)(O, {}), (0, r.jsx)(I, {}), (0, r.jsx)(T, {})]
                })
            }
        }
    },
    function(e) {
        e.O(0, [123, 946, 522, 888, 774, 179], function() {
            return e(e.s = 90694)
        }), _N_E = e.O()
    }
]);