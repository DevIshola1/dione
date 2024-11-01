(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [845], {
        82954: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/roadmap", function() {
                return r(71591)
            }])
        },
        26407: function(e, t, r) {
            "use strict";
            var o = r(85893),
                n = r(20060);
            t.Z = e => {
                let {
                    pretitle: t,
                    title: r,
                    subtitle: a
                } = e;
                return (0, o.jsx)("div", {
                    className: "page-header py-24 pt-40",
                    children: (0, o.jsx)(n.W, {
                        children: (0, o.jsxs)("div", {
                            className: "max-w-[1100px]",
                            children: [(0, o.jsx)("div", {
                                className: "mb-3 text-primary",
                                children: t && t
                            }), (0, o.jsx)("h2", {
                                className: "text-4xl font-bold tracking-tight sm:text-6xl",
                                children: r
                            }), a && (0, o.jsx)("p", {
                                className: "mt-6 text-lg leading-8 text-gray-500",
                                children: a
                            })]
                        })
                    })
                })
            }
        },
        33165: function(e) {
            "use strict";
            e.exports = {
                "June/July": {
                    completed: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
                    items: ["Roadmap Publication", "Post-Mainnet Capital Partnership Announced", "Mobile Wallet Update Live", "Hackathon Day 2", "X marks the spot Announcement", "Explorer with D Chain on Odyssey Testnet", "Hackathon Recap Video 1", "Solar Flares", "wDIONE on Odyssey Testnet", "Minimum of 2 Team Members Introduced", "Hackathon Recap Video 2", "AWS RPC for Odyssey Testing Report", "Bridge Modification for wDione Complete", "DiamondSwap on Testnet", "Staking Extension Details Announcement", "Wanchain Bridge on Testnet Complete", "Gnosis Safe Integration Complete", "Bug Bounty Begins with New Partner to be named", "ORION Use Case Extension", "NEBRA Development Partnership", "OdysseyGo Installer on Testnet", "Solar Energy Charity Partnership", "OdysseyGo Postman Collection on Testnet", "Dione Browser Extension Wallet UIs", "Airdrop Program UIs", "Community/Mod Highlight"]
                },
                "Aug/Sept": {
                    completed: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                    items: ["Minimum of 3 team members introduced", "Migration Announcement Details", "Announce Official Mainnet Date", "Migration Instructions and Graphic", "CLI Development on Testnet", "Odysseyjs Library on Testnet", "Points System + Airdrops Announced", "Grants System Announced", "CEX Trading Info", "ORION User Engagement", "Odyssey Promotional Video Release", "OdysseyGo and Coreth Public", "Community/Mod Highlight", "Technical Documentation Release", "Website Overhaul", "Energy/Utility Partnership MoU", "ORION MVP Launch", "Private Mainnet Launch", "Energy Project 1 on Odyssey - Introduced", "Major Sponsorship at Token 2049"]
                },
                October: {
                    completed: [1, 2, 5, 8, 9],
                    items: ["Public Mainnet Launch", "Wanchain Integration Mainnet", "Diamondswap Integration Mainnet", "DEX Trading Info (mainnet)", "DEX Trading Info (ERC20)", "Points System Live on Testnet", "Grants System Live on Mainnet", "Whitepaper 3.0", "Oracle Integration on Testnet", "Carbon Credit dApp - Introduced", "More CEX Trading Info"]
                },
                November: {
                    completed: [],
                    items: ["CoinMarketCap Integration of Mainnet", "Dextools Integration of Mainnet", "Dexscreener Integration of Mainnet", "FOMO Week 4", "Orbit 6 Roadmap—introduced", "GateIO Integration Mainnet", "MEXC Integration Mainnet", "Explorer release mainnet", "Team Finance Integration Mainnet", "Delegator Dapp Live on Testnet", "Validator Dapp Live on Testnet", "Browser Wallet Live on Testnet", "The Migration of 2024"]
                },
                December: {
                    completed: [],
                    items: ["Coming Soon"]
                },
                "Q1 2025": {
                    completed: [],
                    items: ["Coming Soon"]
                }
            }
        },
        71591: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var o = r(85893),
                n = r(20060),
                a = r(26407),
                s = r(32997),
                i = r(24522),
                c = r(67294);

            function d() {
                let e = r(33165),
                    [t, d] = (0, c.useState)(0),
                    l = Object.keys(e),
                    m = Object.values(e[l[t]].items),
                    f = Object.values(e[l[t]].completed);
                return (0, o.jsxs)(i.Z, {
                    showCookieNotice: !0,
                    title: "Roadmap",
                    description: "Our roadmap outlines our vision and direction for the future. We review and update this roadmap regularly, so make sure to check back often so you don't miss out!",
                    children: [(0, o.jsx)(a.Z, {
                        pretitle: "Started June 24",
                        title: "Orbit 5 Roadmap",
                        subtitle: "Our roadmap outlines our vision and direction for the future. We review and update this roadmap regularly, so make sure to check back often so you don't miss out! "
                    }), (0, o.jsxs)(n.W, {
                        children: [(0, o.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-6 gap-4 items-stretch",
                            children: [(0, o.jsx)("div", {
                                className: "",
                                children: l.map((e, r) => (0, o.jsx)("button", {
                                    onClick: () => d(r),
                                    className: "inline-block lg:w-full text-left py-2 px-4 text-sm lg:text-[1em] transition-all lg:py-3 lg:px-6 ".concat(t == r ? "bg-secondary dark:bg-primary dark:text-black text-white" : "bg-black/10", " mb-2.5 rounded-full pl-5"),
                                    children: (0, s.kC)(e)
                                }, r))
                            }), (0, o.jsxs)("div", {
                                className: "col-span-5 border-l border-white/10",
                                children: [(0, o.jsx)("p", {
                                    className: "text-2xl font-bold mb-3 ml-5",
                                    children: (0, s.kC)(l[t])
                                }), (0, o.jsx)("hr", {
                                    className: "border-white/10"
                                }), (0, o.jsx)("div", {
                                    className: "px-5 py-5",
                                    children: m.map((e, t) => {
                                        let r = f.includes(t);
                                        return (0, o.jsxs)("div", {
                                            className: "flex items-center mb-3",
                                            children: [(0, o.jsx)("div", {
                                                className: "mr-3 pt-2",
                                                children: (0, o.jsx)("input", {
                                                    id: "link-checkbox",
                                                    readOnly: !0,
                                                    type: "checkbox",
                                                    checked: r,
                                                    className: "relative h-[1.125rem] w-[1.125rem] appearance-none rounded-full border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                })
                                            }), (0, o.jsx)("p", {
                                                children: e
                                            })]
                                        }, t)
                                    })
                                })]
                            })]
                        }), (0, o.jsx)("p", {
                            className: "text-gray-500 my-32",
                            children: "Disclaimer: The roadmap presented is a projection of our goals and is not a definitive guide. Achievements and timeframes are subject to change and are not guaranteed, as they depend on a range of external and internal factors. The order of items on the roadmap is flexible and may shift within the outlined timelines. We commit to keeping our community informed about any substantial updates or alterations to our roadmap plans."
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [123, 522, 888, 774, 179], function() {
            return e(e.s = 82954)
        }), _N_E = e.O()
    }
]);