(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [932], {
        27083: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/orion", function() {
                return n(26702)
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
                    subtitle: o
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
                            }), o && (0, i.jsx)("p", {
                                className: "mt-6 text-lg leading-8 text-gray-500",
                                children: o
                            })]
                        })
                    })
                })
            }
        },
        51223: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var i = n(85893),
                r = n(67294),
                o = n(33234),
                a = n(16014),
                s = n(96681);

            function l(e) {
                let t = (0, s.h)(() => (0, o.BX)(e)),
                    {
                        isStatic: n
                    } = (0, r.useContext)(a._);
                if (n) {
                    let [, n] = (0, r.useState)(e);
                    (0, r.useEffect)(() => t.on("change", n), [])
                }
                return t
            }
            var c = n(70798),
                d = n(58868),
                u = n(2074),
                h = n(40406);

            function p() {
                var e, t;
                let n = (e = ["\n                radial-gradient(\n                    350px circle at ", "px ", "px, \n                    #5454d320, \n                    transparent 80%\n                )"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                })));
                return p = function() {
                    return n
                }, n
            }
            var f = e => {
                let {
                    children: t,
                    className: n,
                    ...r
                } = e, o = l(0), a = l(0);
                return (0, i.jsxs)("div", {
                    onMouseMove: function(e) {
                        let {
                            currentTarget: t,
                            clientX: n,
                            clientY: i
                        } = e, {
                            left: r,
                            top: s
                        } = t.getBoundingClientRect();
                        o.set(n - r), a.set(i - s)
                    },
                    className: "spotlight-card rounded-xl bg-card dark:hover:border-[#222245] hover:border-gray-200 shadow-none overflow-hidden ".concat(n),
                    children: [(0, i.jsx)(c.E.div, {
                        className: "spotlight z-0",
                        style: {
                            background: function(e, ...t) {
                                let n = e.length;
                                return function(e, t) {
                                    let n = l(t()),
                                        i = () => n.set(t());
                                    return i(), (0, d.L)(() => {
                                        let t = () => u.Wi.update(i, !1, !0),
                                            n = e.map(e => e.on("change", t));
                                        return () => {
                                            n.forEach(e => e()), (0, u.Pn)(i)
                                        }
                                    }), n
                                }(t.filter(h.i), function() {
                                    let i = "";
                                    for (let r = 0; r < n; r++) {
                                        i += e[r];
                                        let n = t[r];
                                        n && (i += (0, h.i)(n) ? n.get() : n)
                                    }
                                    return i
                                })
                            }(p(), o, a)
                        }
                    }), (0, i.jsx)("div", {
                        className: "p-12 relative z-10",
                        children: t
                    })]
                })
            }
        },
        34490: function(e) {
            "use strict";
            e.exports = [{
                question: "Who is leading the project?",
                answer: ["Our team includes experienced blockchain developers, networking experts, and renewable energy specialists who share a passion for innovation, sustainability, and decentralization. We are led by a group of seasoned executives with extensive experience in the blockchain, finance, and technology industries."]
            }, {
                question: "How does this benefit Dione Protocol?",
                answer: ["Many blockchain networks claim to be decentralized, but the reality is that they are often reliant on centralized power sources and the power grid. This can be a significant weakness in the network's decentralization and security, as it introduces potential vulnerabilities that can be exploited by attackers or governments.", "At Dione Protocol, we recognize the importance of true decentralization, and that means being self-sufficient when it comes to energy supply. By harnessing renewable energy from solar panels and utilizing satellite internet connectivity, Orion is designed to operate independently of the grid and provide a more resilient and sustainable solution for blockchain validation.", "Our off-grid capabilities are a critical part of our decentralization strategy, as they ensure that our network remains operational even in the event of power outages or other grid failures. Additionally, by having complete control over our energy supply, we reduce the risk of potential disruptions from centralized power suppliers and promote a more inclusive and decentralized approach to blockchain operations.", "In short, true decentralization requires not only a decentralized network but also a decentralized energy supply. At Dione Protocol, we are committed to both, and our off-grid capabilities are a key part of our efforts to create a truly decentralized and resilient blockchain network."]
            }, {
                question: "Why do you prefer to use Starlink for this?",
                answer: ["At Dione Protocol, we are proud to be the world's first blockchain to utilize a SpaceX product, Starlink, to power our blockchain network. This is a significant achievement for us and reflects our commitment to innovation, sustainability, and resilience.", "We also share Tesla's vision for a green cryptocurrency that is powered by renewable energy and reduces the carbon footprint of blockchain operations. By integrating solar panels into our remote validator, Orion, and utilizing Starlink's satellite internet system, we have created a more sustainable and environmentally friendly solution for blockchain validation.", "We believe that our efforts to combine SpaceX's cutting-edge technology with renewable energy sources represent a significant step forward in creating a more decentralized, sustainable, and secure blockchain network. Our goal is to create a blueprint for future blockchain networks to follow, one that emphasizes resilience, sustainability, and true decentralization. The marketing potential for our decentralized, off-grid blockchain network is immense in today's world. With increasing concerns about data privacy, security, and trust in centralized institutions, there is a growing demand for decentralized and secure solutions.", "Overall, our use of Starlink to power our blockchain network is a reflection of our commitment to innovation and sustainability, and we are proud to be at the forefront of this groundbreaking development in the blockchain space."]
            }, {
                question: "Can we power the node with our regular internet provider other than Starlink?",
                answer: ["While it is technically possible to power the node with a regular internet provider, the unique value proposition of Orion by Dione Protocol lies in its use of Starlink's satellite internet system.", "Overall, our use of Starlink to power our blockchain network is a reflection of our commitment to innovation and sustainability, and we are proud to be at the forefront of this groundbreaking development in the blockchain space.", "Orion is specifically designed to leverage Starlink's low latency and high bandwidth satellite internet to achieve unparalleled connectivity in remote and hard-to-reach locations. This allows it to operate seamlessly in areas where traditional internet infrastructure is unavailable or unreliable.", "Furthermore, Starlink's satellite internet system is essential for maintaining the off-grid and decentralized nature of our blockchain network. By not relying on centralized internet providers, we can ensure that our network remains secure, resilient, and independent of outside influences. Moreover, because our system is distributed and decentralized, it would be virtually impossible to take down the blockchain sources of validation, as there is no central point of failure. This makes our system highly secure and resistant to attacks. Even in the event of a targeted attack on our system, the distributed nature of our remote validator would make it extremely difficult to locate and take down all instances of the system, ensuring the continuity of our blockchain network.", "While it is possible to use a regular internet provider to power the node, it would likely result in reduced reliability and security compared to using Starlink. We strongly recommend utilizing Starlink's satellite internet system to fully realize the benefits of our off-grid blockchain network."]
            }, {
                question: "When can we expect it to go live?",
                answer: ["Any validator can feel free to use the components in this paper after our Network has gone live and after their own extensive research and testing. Dione Protocol is not liable for any personal harm, environmental harm, or finances involved in a user’s initiative to use this system."]
            }, {
                question: "How does Orion's off-grid capabilities contribute to a more decentralized blockchain network?",
                answer: ["Orion's off-grid capabilities contribute to a more decentralized blockchain network by reducing the reliance on centralized power suppliers and the power grid. By harnessing renewable energy and utilizing satellite internet connectivity, Orion can operate independently of the grid, providing a more resilient and sustainable solution for blockchain validation in remote and disconnected areas. This promotes a more inclusive and decentralized approach to blockchain operations, allowing for greater participation and trust in the network."]
            }, {
                question: "Can Orion be used in areas with limited access to the grid?",
                answer: ["Yes, Orion's off-grid capabilities make it an ideal solution for areas with limited access to the grid. By harnessing renewable energy from solar panels and utilizing satellite internet connectivity, Orion can operate independently of the grid and provide blockchain validation in remote and disconnected areas."]
            }, {
                question: "How does Orion's off-grid capabilities enhance the security of the network?",
                answer: ["Orion's off-grid capabilities enhance the security of the network by eliminating the risk of potential disruptions from centralized power suppliers or grid failures. By having complete control over our energy supply, we reduce the risk of potential attacks on the power grid that could disrupt the network's operations. Additionally, by harnessing renewable energy, we reduce our reliance on non-renewable resources and contribute to sustainable and eco-friendly blockchain operations."]
            }, {
                question: "What are the benefits of going off-grid with Orion?",
                answer: ["Going off-grid with Orion offers several benefits. Firstly, it ensures the continuity of blockchain validation even in the event of power outages or other grid failures. Secondly, it gives us more control over our energy supply, reducing the risk of potential disruptions from centralized power suppliers. Additionally, by harnessing renewable energy from solar panels, we reduce our carbon footprint and contribute to sustainable and eco-friendly blockchain operations."]
            }, {
                question: "How does Orion's off-grid capabilities work?",
                answer: ["Orion is powered by a combination of solar panels and battery storage systems. The solar panels generate renewable energy from sunlight, which is stored in the battery storage systems for continuous operation even during periods of low sunlight. This off-grid capability means that we have complete control over our energy supply and are not reliant on the grid or centralized power suppliers."]
            }, {
                question: "Why is it important that Orion is not reliant on the grid?",
                answer: ["Orion's ability to operate independently of the grid provides several advantages. Firstly, it ensures that our network remains operational in the event of power outages or other grid failures. This can be particularly important in areas where power supply is unreliable or prone to failure. Additionally, by going off-grid, we eliminate the need to rely on centralized power suppliers, giving us more control over our energy supply and reducing the risk of potential disruptions."]
            }, {
                question: "How is Orion powered?",
                answer: ["Orion is powered by solar panels and battery storage systems. The solar panels generate renewable energy from sunlight, which is stored in the battery storage systems for continuous operation even during periods of low sunlight."]
            }, {
                question: "What is Starlink?",
                answer: ["Starlink is a global satellite internet infrastructure that provides seamless connectivity in remote and hard-to-reach locations. It is used by Orion to achieve unparalleled connectivity, allowing it to operate seamlessly in remote and disconnected areas."]
            }, {
                question: "What is Orion by Dione Protocol?",
                answer: ["Orion by Dione Protocol is a remote validator designed to provide robust, resilient, and sustainable blockchain validation. It utilizes advanced hardware components and satellite connectivity to operate in remote and disconnected areas, and its solar panel integration ensures that it is eco-friendly."]
            }, {
                question: "How does Orion work?",
                answer: ["Orion uses satellite internet infrastructure provided by Starlink to achieve unparalleled connectivity, allowing it to operate seamlessly in remote and hard-to-reach locations. It is powered by solar panels, reducing the carbon footprint associated with blockchain networks. It is also equipped with high-performance processors, high-speed memory modules, and reliable storage systems to handle the computational requirements of blockchain validation, authenticity, and integrity of data."]
            }, {
                question: "Is Orion difficult to set up?",
                answer: ["Orion is designed to be user-friendly and easy to set up. However, it requires a certain level of technical expertise to set up and configure the system properly. We recommend that users have experience with hardware and software setup and configuration before attempting to set up Orion."]
            }]
        },
        26702: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n(85893),
                r = n(24522),
                o = n(20060),
                a = n(26407),
                s = n(41664),
                l = n.n(s),
                c = n(51223);

            function d() {
                let e = n(34490);
                return (0, i.jsxs)(r.Z, {
                    showCookieNotice: !0,
                    title: "Orion",
                    description: "A remote validator for Dione Protocol - a resilient, renewable-powered blockchain network",
                    children: [(0, i.jsx)(a.Z, {
                        pretitle: "Blockchain",
                        title: "Project Orion",
                        subtitle: "Experience the true potential of blockchain technology, with Odyssey validators hosted on Starlink Satellites."
                    }), (0, i.jsxs)(o.W, {
                        className: "pb-32",
                        children: [(0, i.jsx)("p", {
                            className: "mb-3 text-xl font-bold",
                            children: "What is Orion?"
                        }), (0, i.jsx)("p", {
                            className: "mb-4",
                            children: "Orion, developed by Dione Protocol, is a remote validator that is designed to be powered by renewable energy sources. It leverages the global satellite internet infrastructure provided by Starlink to achieve unparalleled connectivity, allowing it to operate seamlessly in remote and hard-to-reach locations. Furthermore, Orion is integrated with solar panels to harness clean energy from the sun, making it the first truly climate net-positive blockchain."
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsx)(l(), {
                                href: "https://dione-protocol.gitbook.io/orion-whitepaper-v1.0/",
                                target: "_blank",
                                className: "bg-primary text-white dark:text-black px-5 py-3 inline-block rounded-lg mb-10",
                                children: "Whitepaper"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "grid grid-cols-3 gap-4 mb-10 text-center",
                            children: [(0, i.jsxs)(c.Z, {
                                children: [(0, i.jsx)("p", {
                                    className: "text-3xl font-bold",
                                    children: "3,500+"
                                }), (0, i.jsx)("p", {
                                    children: "Satellites"
                                })]
                            }), (0, i.jsxs)(c.Z, {
                                children: [(0, i.jsx)("p", {
                                    className: "text-3xl font-bold",
                                    children: "64+"
                                }), (0, i.jsx)("p", {
                                    children: "Countries"
                                })]
                            }), (0, i.jsxs)(c.Z, {
                                children: [(0, i.jsx)("p", {
                                    className: "text-3xl font-bold",
                                    children: "25ms"
                                }), (0, i.jsx)("p", {
                                    children: "Avg. Ping"
                                })]
                            })]
                        }), (0, i.jsx)("p", {
                            className: "mb-10 text-4xl font-bold",
                            children: "Frequently Asked Questions"
                        }), e.map((e, t) => (0, i.jsxs)("div", {
                            className: "mb-10",
                            children: [(0, i.jsx)("p", {
                                className: "mb-3 text-xl font-bold",
                                children: e.question
                            }), e.answer.map((e, t) => (0, i.jsx)("p", {
                                className: "mb-3",
                                children: e
                            }, t))]
                        }, t))]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [123, 798, 522, 888, 774, 179], function() {
            return e(e.s = 27083)
        }), _N_E = e.O()
    }
]);