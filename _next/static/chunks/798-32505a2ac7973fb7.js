"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [798], {
        70798: function(t, e, i) {
            i.d(e, {
                E: function() {
                    return eh
                }
            });
            var s = i(5401),
                o = i(4007),
                r = i(33899),
                n = i(55770),
                a = i(50806),
                l = i(81662),
                h = i(45487),
                u = i(28148),
                d = i(86917),
                c = i(70486),
                m = i(83624);
            let p = (t, e) => Math.abs(t - e);
            var g = i(9403),
                v = i(2074);
            class f {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: s,
                    dragSnapToOrigin: o = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let i = P(this.lastMoveEventInfo, this.history),
                                s = null !== this.startEvent,
                                o = (t = i.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(p(t.x, e.x) ** 2 + p(t.y, e.y) ** 2) >= 3);
                            if (!s && !o) return;
                            let {
                                point: r
                            } = i, {
                                timestamp: n
                            } = v.frameData;
                            this.history.push({ ...r,
                                timestamp: n
                            });
                            let {
                                onStart: a,
                                onMove: l
                            } = this.handlers;
                            s || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = y(e, this.transformPagePoint), v.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: s,
                                resumeAnimation: o
                            } = this.handlers;
                            if (this.dragSnapToOrigin && o && o(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let r = P("pointercancel" === t.type ? this.lastMoveEventInfo : y(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, r), s && s(t, r)
                        }, !(0, g.D)(t)) return;
                    this.dragSnapToOrigin = o, this.handlers = e, this.transformPagePoint = i, this.contextWindow = s || window;
                    let r = y((0, u.Q)(t), this.transformPagePoint),
                        {
                            point: n
                        } = r,
                        {
                            timestamp: a
                        } = v.frameData;
                    this.history = [{ ...n,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, P(r, this.history)), this.removeListeners = (0, m.z)((0, c.a)(this.contextWindow, "pointermove", this.handlePointerMove), (0, c.a)(this.contextWindow, "pointerup", this.handlePointerUp), (0, c.a)(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, v.Pn)(this.updatePoint)
                }
            }

            function y(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function x(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function P({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: x(t, T(e)),
                    offset: x(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            s = null,
                            o = T(t);
                        for (; i >= 0 && (s = t[i], !(o.timestamp - s.timestamp > (0, d.w)(.1)));) i--;
                        if (!s) return {
                            x: 0,
                            y: 0
                        };
                        let r = (0, d.X)(o.timestamp - s.timestamp);
                        if (0 === r) return {
                            x: 0,
                            y: 0
                        };
                        let n = {
                            x: (o.x - s.x) / r,
                            y: (o.y - s.y) / r
                        };
                        return n.x === 1 / 0 && (n.x = 0), n.y === 1 / 0 && (n.y = 0), n
                    }(e, 0)
                }
            }

            function T(t) {
                return t[t.length - 1]
            }
            var D = i(37544),
                E = i(51804),
                S = i(23967),
                R = i(80022);

            function L(t) {
                return t.max - t.min
            }

            function A(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function j(t, e, i, s = .5) {
                t.origin = s, t.originPoint = (0, R.C)(e.min, e.max, t.origin), t.scale = L(i) / L(e), (A(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, R.C)(i.min, i.max, t.origin) - t.originPoint, (A(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function C(t, e, i, s) {
                j(t.x, e.x, i.x, s ? s.originX : void 0), j(t.y, e.y, i.y, s ? s.originY : void 0)
            }

            function B(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + L(e)
            }

            function w(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + L(e)
            }

            function M(t, e, i) {
                w(t.x, e.x, i.x), w(t.y, e.y, i.y)
            }
            var b = i(24169);

            function V(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function k(t, e) {
                let i = e.min - t.min,
                    s = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
                    min: i,
                    max: s
                }
            }

            function U(t, e, i) {
                return {
                    min: O(t, e),
                    max: O(t, i)
                }
            }

            function O(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            var F = i(61512);

            function I(t) {
                return [t("x"), t("y")]
            }
            var W = i(56460),
                N = i(76117),
                G = i(18456),
                z = i(96190),
                $ = i(45480);
            let H = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null,
                Y = new WeakMap;
            class X {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, F.dO)(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: s
                    } = this.getProps();
                    this.panSession = new f(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor((0, u.Q)(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: s,
                                onDragStart: o
                            } = this.getProps();
                            if (i && !s && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, D.fJ)(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), I(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (z.aQ.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let s = i.layout.layoutBox[t];
                                        if (s) {
                                            let t = L(s);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), o && v.Wi.update(() => o(t, e), !1, !0);
                            let {
                                animationState: r
                            } = this.visualElement;
                            r && r.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: s,
                                onDirectionLock: o,
                                onDrag: r
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: n
                            } = e;
                            if (s && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(n), null !== this.currentDirection && o && o(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, n), this.updateAxis("y", e.point, n), this.visualElement.render(), r && r(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => I(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: s,
                        contextWindow: H(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: s
                    } = e;
                    this.startAnimation(s);
                    let {
                        onDragEnd: o
                    } = this.getProps();
                    o && v.Wi.update(() => o(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: s
                    } = this.getProps();
                    if (!i || !Z(t, s, this.currentDirection)) return;
                    let o = this.getAxisMotionValue(t),
                        r = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (r = function(t, {
                        min: e,
                        max: i
                    }, s) {
                        return void 0 !== e && t < e ? t = s ? (0, R.C)(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? (0, R.C)(i, t, s.max) : Math.min(t, i)), t
                    }(r, this.constraints[t], this.elastic[t])), o.set(r)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, o = this.constraints;
                    e && (0, E.I)(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: s,
                        right: o
                    }) {
                        return {
                            x: V(t.x, i, o),
                            y: V(t.y, e, s)
                        }
                    }(s.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: U(t, "left", "right"),
                            y: U(t, "top", "bottom")
                        }
                    }(i), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && I(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(s.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !(0, E.I)(e)) return !1;
                    let s = e.current;
                    (0, h.k)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: o
                    } = this.visualElement;
                    if (!o || !o.layout) return !1;
                    let r = (0, W.z)(s, o.root, this.visualElement.getTransformPagePoint()),
                        n = {
                            x: k((t = o.layout.layoutBox).x, r.x),
                            y: k(t.y, r.y)
                        };
                    if (i) {
                        let t = i((0, N.z2)(n));
                        this.hasMutatedConstraints = !!t, t && (n = (0, N.i8)(t))
                    }
                    return n
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: s,
                        dragTransition: o,
                        dragSnapToOrigin: r,
                        onDragTransitionEnd: n
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(I(n => {
                        if (!Z(n, e, this.currentDirection)) return;
                        let l = a && a[n] || {};
                        r && (l = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: i ? t[n] : 0,
                            bounceStiffness: s ? 200 : 1e6,
                            bounceDamping: s ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...o,
                            ...l
                        };
                        return this.startAxisValueAnimation(n, h)
                    })).then(n)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start((0, $.v)(t, i, 0, e))
                }
                stopAnimation() {
                    I(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    I(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    I(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!Z(e, i, this.currentDirection)) return;
                        let {
                            projection: s
                        } = this.visualElement, o = this.getAxisMotionValue(e);
                        if (s && s.layout) {
                            let {
                                min: i,
                                max: r
                            } = s.layout.layoutBox[e];
                            o.set(t[e] - (0, R.C)(i, r, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!(0, E.I)(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let s = {
                        x: 0,
                        y: 0
                    };
                    I(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let i = e.get();
                            s[t] = function(t, e) {
                                let i = .5,
                                    s = L(t),
                                    o = L(e);
                                return o > s ? i = (0, S.Y)(e.min, e.max - s, t.min) : s > o && (i = (0, S.Y)(t.min, t.max - o, e.min)), (0, b.u)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: o
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), I(e => {
                        if (!Z(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: o,
                                max: r
                            } = this.constraints[e];
                        i.set((0, R.C)(o, r, s[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    Y.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = (0, c.a)(t, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        i = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            (0, E.I)(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: s
                        } = this.visualElement,
                        o = s.addEventListener("measure", i);
                    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), i();
                    let r = (0, G.E)(window, "resize", () => this.scalePositionWithinConstraints()),
                        n = s.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (I(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        r(), e(), o(), n && n()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: s = !1,
                            dragConstraints: o = !1,
                            dragElastic: r = .35,
                            dragMomentum: n = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: s,
                        dragConstraints: o,
                        dragElastic: r,
                        dragMomentum: n
                    }
                }
            }

            function Z(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class Q extends a.L {
                constructor(t) {
                    super(t), this.removeGroupControls = l.Z, this.removeListeners = l.Z, this.controls = new X(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || l.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let _ = t => (e, i) => {
                t && v.Wi.update(() => t(e, i))
            };
            class q extends a.L {
                constructor() {
                    super(...arguments), this.removePointerDownListener = l.Z
                }
                onPointerDown(t) {
                    this.session = new f(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: H(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: s
                    } = this.node.getProps();
                    return {
                        onSessionStart: _(t),
                        onStart: _(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, s && v.Wi.update(() => s(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = (0, c.a)(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var J = i(67294),
                K = i(240),
                tt = i(25364),
                te = i(41705);
            let ti = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function ts(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let to = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!z.px.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = ts(t, e.target.x),
                        s = ts(t, e.target.y);
                    return `${i}% ${s}%`
                }
            };
            var tr = i(51550),
                tn = i(64561);
            class ta extends J.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: s
                    } = this.props, {
                        projection: o
                    } = t;
                    (0, tn.B)(th), o && (e.group && e.group.add(o), i && i.register && s && i.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), o.setOptions({ ...o.options,
                        onExitComplete: () => this.safeToRemove()
                    })), ti.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: s,
                        isPresent: o
                    } = this.props, r = i.projection;
                    return r && (r.isPresent = o, s || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(), t.isPresent === o || (o ? r.promote() : r.relegate() || v.Wi.postRender(() => {
                        let t = r.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: s
                    } = t;
                    s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function tl(t) {
                let [e, i] = function() {
                    let t = (0, J.useContext)(K.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: s
                    } = t, o = (0, J.useId)();
                    return (0, J.useEffect)(() => s(o), []), !e && i ? [!1, () => i && i(o)] : [!0]
                }(), s = (0, J.useContext)(tt.p);
                return J.createElement(ta, { ...t,
                    layoutGroup: s,
                    switchLayoutGroup: (0, J.useContext)(te.g),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let th = {
                borderRadius: { ...to,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: to,
                borderTopRightRadius: to,
                borderBottomLeftRadius: to,
                borderBottomRightRadius: to,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        let s = tr.P.parse(t);
                        if (s.length > 5) return t;
                        let o = tr.P.createTransformer(t),
                            r = "number" != typeof s[0] ? 1 : 0,
                            n = i.x.scale * e.x,
                            a = i.y.scale * e.y;
                        s[0 + r] /= n, s[1 + r] /= a;
                        let l = (0, R.C)(n, a, .5);
                        return "number" == typeof s[2 + r] && (s[2 + r] /= l), "number" == typeof s[3 + r] && (s[3 + r] /= l), o(s)
                    }
                }
            };
            var tu = i(21560),
                td = i(27255);
            let tc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                tm = tc.length,
                tp = t => "string" == typeof t ? parseFloat(t) : t,
                tg = t => "number" == typeof t || z.px.test(t);

            function tv(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let tf = tx(0, .5, td.Bn),
                ty = tx(.5, .95, l.Z);

            function tx(t, e, i) {
                return s => s < t ? 0 : s > e ? 1 : i((0, S.Y)(t, e, s))
            }

            function tP(t, e) {
                t.min = e.min, t.max = e.max
            }

            function tT(t, e) {
                tP(t.x, e.x), tP(t.y, e.y)
            }
            var tD = i(16e3);

            function tE(t, e, i, s, o) {
                return t -= e, t = (0, tD.q2)(t, 1 / i, s), void 0 !== o && (t = (0, tD.q2)(t, 1 / o, s)), t
            }

            function tS(t, e, [i, s, o], r, n) {
                ! function(t, e = 0, i = 1, s = .5, o, r = t, n = t) {
                    if (z.aQ.test(e) && (e = parseFloat(e), e = (0, R.C)(n.min, n.max, e / 100) - n.min), "number" != typeof e) return;
                    let a = (0, R.C)(r.min, r.max, s);
                    t === r && (a -= e), t.min = tE(t.min, e, i, a, o), t.max = tE(t.max, e, i, a, o)
                }(t, e[i], e[s], e[o], e.scale, r, n)
            }
            let tR = ["x", "scaleX", "originX"],
                tL = ["y", "scaleY", "originY"];

            function tA(t, e, i, s) {
                tS(t.x, e, tR, i ? i.x : void 0, s ? s.x : void 0), tS(t.y, e, tL, i ? i.y : void 0, s ? s.y : void 0)
            }
            var tj = i(31056);

            function tC(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function tB(t) {
                return tC(t.x) && tC(t.y)
            }

            function tw(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function tM(t) {
                return L(t.x) / L(t.y)
            }
            var tb = i(10010);
            class tV {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, tb.y4)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, tb.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: s
                        } = t.options;
                        !1 === s && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function tk(t, e, i) {
                let s = "",
                    o = t.x.translate / e.x,
                    r = t.y.translate / e.y;
                if ((o || r) && (s = `translate3d(${o}px, ${r}px, 0) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: o
                    } = i;
                    t && (s += `rotate(${t}deg) `), e && (s += `rotateX(${e}deg) `), o && (s += `rotateY(${o}deg) `)
                }
                let n = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== n || 1 !== a) && (s += `scale(${n}, ${a})`), s || "none"
            }
            var tU = i(99527);
            let tO = (t, e) => t.depth - e.depth;
            class tF {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, tb.y4)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, tb.cl)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(tO), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var tI = i(16399),
                tW = i(33234),
                tN = i(40406);
            let tG = ["", "X", "Y", "Z"],
                tz = {
                    visibility: "hidden"
                },
                t$ = 0,
                tH = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function tY({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: s,
                resetTransform: o
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = t$++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, tH.totalNodes = tH.resolvedTargetDeltas = tH.recalculatedProjection = 0, this.nodes.forEach(tQ), this.nodes.forEach(t5), this.nodes.forEach(t2), this.nodes.forEach(t_), window.MotionDebug && window.MotionDebug.record(tH)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new tF)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tu.L), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: s,
                            layout: o,
                            visualElement: r
                        } = this.options;
                        if (r && !r.current && r.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (o || s) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let s = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = performance.now(),
                                        s = ({
                                            timestamp: e
                                        }) => {
                                            let o = e - i;
                                            o >= 250 && ((0, v.Pn)(s), t(o - 250))
                                        };
                                    return v.Wi.read(s, !0), () => (0, v.Pn)(s)
                                }(s, 0), ti.hasAnimatedSinceResize && (ti.hasAnimatedSinceResize = !1, this.nodes.forEach(t1))
                            })
                        }
                        s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && r && (s || o) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: s
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let o = this.options.transition || r.getDefaultTransition() || t9,
                                {
                                    onLayoutAnimationStart: n,
                                    onLayoutAnimationComplete: a
                                } = r.getProps(),
                                l = !this.targetLayout || !tw(this.targetLayout, s) || i,
                                h = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, h);
                                let e = { ...(0, tj.e)(o, "layout"),
                                    onPlay: n,
                                    onComplete: a
                                };
                                (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || t1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = s
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, v.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(t4), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let s = this.getTransformTemplate();
                        this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(tJ);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(tK), this.isUpdating = !1, this.nodes.forEach(t0), this.nodes.forEach(tX), this.nodes.forEach(tZ), this.clearAllSnapshots();
                        let t = performance.now();
                        v.frameData.delta = (0, b.u)(0, 1e3 / 60, t - v.frameData.timestamp), v.frameData.timestamp = t, v.frameData.isProcessing = !0, v.S6.update.process(v.frameData), v.S6.preRender.process(v.frameData), v.S6.render.process(v.frameData), v.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(tq), this.sharedNodes.forEach(t6)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, v.Wi.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        v.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = (0, F.dO)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: s(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!o) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !tB(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            s = i ? i(this.latestValues, "") : void 0,
                            r = s !== this.prevTransformTemplateValue;
                        t && (e || (0, tU.ud)(this.latestValues) || r) && (o(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            s = this.removeElementScroll(i);
                        return t && (s = this.removeTransform(s)), ei((e = s).x), ei(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: s,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return (0, F.dO)();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && ((0, tD.am)(e.x, i.offset.x), (0, tD.am)(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = (0, F.dO)();
                        tT(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let s = this.path[i],
                                {
                                    scroll: o,
                                    options: r
                                } = s;
                            if (s !== this.root && o && r.layoutScroll) {
                                if (o.isRoot) {
                                    tT(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && ((0, tD.am)(e.x, -i.offset.x), (0, tD.am)(e.y, -i.offset.y))
                                }(0, tD.am)(e.x, o.offset.x), (0, tD.am)(e.y, o.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = (0, F.dO)();
                        tT(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let s = this.path[t];
                            !e && s.options.layoutScroll && s.scroll && s !== s.root && (0, tD.D2)(i, {
                                x: -s.scroll.offset.x,
                                y: -s.scroll.offset.y
                            }), (0, tU.ud)(s.latestValues) && (0, tD.D2)(i, s.latestValues)
                        }
                        return (0, tU.ud)(this.latestValues) && (0, tD.D2)(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = (0, F.dO)();
                        tT(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !(0, tU.ud)(i.latestValues)) continue;
                            (0, tU.Lj)(i.latestValues) && i.updateSnapshot();
                            let s = (0, F.dO)();
                            tT(s, i.measurePageBox()), tA(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                        }
                        return (0, tU.ud)(this.latestValues) && tA(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== v.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, s, o;
                        let r = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
                        let n = !!this.resumingFrom || this !== r;
                        if (!(t || n && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = v.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, F.dO)(), this.relativeTargetOrigin = (0, F.dO)(), M(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), tT(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = (0, F.dO)(), this.targetWithTransforms = (0, F.dO)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, s = this.relativeTarget, o = this.relativeParent.target, B(i.x, s.x, o.x), B(i.y, s.y, o.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tT(this.target, this.layout.layoutBox), (0, tD.o2)(this.target, this.targetDelta)) : tT(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, F.dO)(), this.relativeTargetOrigin = (0, F.dO)(), M(this.relativeTargetOrigin, this.target, t.target), tT(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                tH.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || (0, tU.Lj)(this.parent.latestValues) || (0, tU.D_)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            s = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (s = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1), this.resolvedRelativeTargetAt === v.frameData.timestamp && (s = !1), s) return;
                        let {
                            layout: o,
                            layoutId: r
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(o || r)) return;
                        tT(this.layoutCorrected, this.layout.layoutBox);
                        let n = this.treeScale.x,
                            a = this.treeScale.y;
                        (0, tD.YY)(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.projectionTransform && (this.projectionDelta = (0, F.wc)(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = (0, F.wc)(), this.projectionDeltaWithTransform = (0, F.wc)());
                        let h = this.projectionTransform;
                        C(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = tk(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== n || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), tH.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let s = this.snapshot,
                            o = s ? s.latestValues : {},
                            r = { ...this.latestValues
                            },
                            n = (0, F.wc)();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = (0, F.dO)(),
                            l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            h = this.getStack(),
                            u = !h || h.members.length <= 1,
                            d = !!(l && !u && !0 === this.options.crossfade && !this.path.some(t8));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let s = e / 1e3;
                            if (t3(n.x, t.x, s), t3(n.y, t.y, s), this.setTargetDelta(n), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var h, c, m, p;
                                M(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), m = this.relativeTarget, p = this.relativeTargetOrigin, t7(m.x, p.x, a.x, s), t7(m.y, p.y, a.y, s), i && (h = this.relativeTarget, c = i, h.x.min === c.x.min && h.x.max === c.x.max && h.y.min === c.y.min && h.y.max === c.y.max) && (this.isProjectionDirty = !1), i || (i = (0, F.dO)()), tT(i, this.relativeTarget)
                            }
                            l && (this.animationValues = r, function(t, e, i, s, o, r) {
                                o ? (t.opacity = (0, R.C)(0, void 0 !== i.opacity ? i.opacity : 1, tf(s)), t.opacityExit = (0, R.C)(void 0 !== e.opacity ? e.opacity : 1, 0, ty(s))) : r && (t.opacity = (0, R.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, s));
                                for (let o = 0; o < tm; o++) {
                                    let r = `border${tc[o]}Radius`,
                                        n = tv(e, r),
                                        a = tv(i, r);
                                    (void 0 !== n || void 0 !== a) && (n || (n = 0), a || (a = 0), 0 === n || 0 === a || tg(n) === tg(a) ? (t[r] = Math.max((0, R.C)(tp(n), tp(a), s), 0), (z.aQ.test(a) || z.aQ.test(n)) && (t[r] += "%")) : t[r] = a)
                                }(e.rotate || i.rotate) && (t.rotate = (0, R.C)(e.rotate || 0, i.rotate || 0, s))
                            }(r, o, this.latestValues, s, d, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = s
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, v.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = v.Wi.update(() => {
                            ti.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let s = (0, tN.i)(0) ? 0 : (0, tW.BX)(0);
                                return s.start((0, $.v)("", s, 1e3, i)), s.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: s,
                                latestValues: o
                            } = t;
                        if (e && i && s) {
                            if (this !== t && this.layout && s && es(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                                i = this.target || (0, F.dO)();
                                let e = L(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let s = L(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + s
                            }
                            tT(e, i), (0, tD.D2)(e, o), C(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new tV), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let s = this.getStack();
                        s && s.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let s = {};
                        for (let e = 0; e < tG.length; e++) {
                            let o = "rotate" + tG[e];
                            i[o] && (s[o] = i[o], t.setStaticValue(o, 0))
                        }
                        for (let e in t.render(), s) t.setStaticValue(e, s[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return tz;
                        let s = {
                                visibility: ""
                            },
                            o = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = (0, tI.b)(null == t ? void 0 : t.pointerEvents) || "", s.transform = o ? o(this.latestValues, "") : "none", s;
                        let r = this.getLead();
                        if (!this.projectionDelta || !this.layout || !r.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, tI.b)(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !(0, tU.ud)(this.latestValues) && (e.transform = o ? o({}, "") : "none", this.hasProjected = !1), e
                        }
                        let n = r.animationValues || r.latestValues;
                        this.applyTransformsToTarget(), s.transform = tk(this.projectionDeltaWithTransform, this.treeScale, n), o && (s.transform = o(n, s.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in s.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, r.animationValues ? s.opacity = r === this ? null !== (i = null !== (e = n.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : s.opacity = r === this ? void 0 !== n.opacity ? n.opacity : "" : void 0 !== n.opacityExit ? n.opacityExit : 0, tn.P) {
                            if (void 0 === n[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = tn.P[t], o = "none" === s.transform ? n[t] : e(n[t], r);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) s[i[e]] = o
                            } else s[t] = o
                        }
                        return this.options.layoutId && (s.pointerEvents = r === this ? (0, tI.b)(null == t ? void 0 : t.pointerEvents) || "" : "none"), s
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(tJ), this.root.sharedNodes.clear()
                    }
                }
            }

            function tX(t) {
                t.updateLayout()
            }

            function tZ(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: s
                    } = t.layout, {
                        animationType: o
                    } = t.options, r = i.source !== t.layout.source;
                    "size" === o ? I(t => {
                        let s = r ? i.measuredBox[t] : i.layoutBox[t],
                            o = L(s);
                        s.min = e[t].min, s.max = s.min + o
                    }) : es(o, i.layoutBox, e) && I(s => {
                        let o = r ? i.measuredBox[s] : i.layoutBox[s],
                            n = L(e[s]);
                        o.max = o.min + n, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + n)
                    });
                    let n = (0, F.wc)();
                    C(n, e, i.layoutBox);
                    let a = (0, F.wc)();
                    r ? C(a, t.applyTransform(s, !0), i.measuredBox) : C(a, e, i.layoutBox);
                    let l = !tB(n),
                        h = !1;
                    if (!t.resumeFrom) {
                        let s = t.getClosestProjectingParent();
                        if (s && !s.resumeFrom) {
                            let {
                                snapshot: o,
                                layout: r
                            } = s;
                            if (o && r) {
                                let n = (0, F.dO)();
                                M(n, i.layoutBox, o.layoutBox);
                                let a = (0, F.dO)();
                                M(a, e, r.layoutBox), tw(n, a) || (h = !0), s.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = n, t.relativeParent = s)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: n,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: h
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function tQ(t) {
                tH.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function t_(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function tq(t) {
                t.clearSnapshot()
            }

            function tJ(t) {
                t.clearMeasurements()
            }

            function tK(t) {
                t.isLayoutDirty = !1
            }

            function t0(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function t1(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function t5(t) {
                t.resolveTargetDelta()
            }

            function t2(t) {
                t.calcProjection()
            }

            function t4(t) {
                t.resetRotation()
            }

            function t6(t) {
                t.removeLeadSnapshot()
            }

            function t3(t, e, i) {
                t.translate = (0, R.C)(e.translate, 0, i), t.scale = (0, R.C)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function t7(t, e, i, s) {
                t.min = (0, R.C)(e.min, i.min, s), t.max = (0, R.C)(e.max, i.max, s)
            }

            function t8(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let t9 = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                et = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                ee = et("applewebkit/") && !et("chrome/") ? Math.round : l.Z;

            function ei(t) {
                t.min = ee(t.min), t.max = ee(t.max)
            }

            function es(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !A(tM(e), tM(i), .2)
            }
            let eo = tY({
                    attachResizeListener: (t, e) => (0, G.E)(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                er = {
                    current: void 0
                },
                en = tY({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!er.current) {
                            let t = new eo({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), er.current = t
                        }
                        return er.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });
            var ea = i(74547);
            let el = { ...n.s,
                    ...r.E,
                    pan: {
                        Feature: q
                    },
                    drag: {
                        Feature: Q,
                        ProjectionNode: en,
                        MeasureLayout: tl
                    },
                    layout: {
                        ProjectionNode: en,
                        MeasureLayout: tl
                    }
                },
                eh = (0, s.D)((t, e) => (0, o.w)(t, e, el, ea.b))
        }
    }
]);