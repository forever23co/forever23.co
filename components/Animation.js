import React from "react";

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export function lerp(t) {
  return Math.sin(t * Math.PI * 0.5);
}

export function map(x, x1, x2, y1, y2) {
    return y1 + ((y2 - y1) / (x2 - x1)) * (x - x1);
}

export function smooth(t) {
    return t * t * (3 - 2 * t);
}

export function smoother(t) {
    return t * t * t * (t * (6 * t - 15) + 10);
}

export function sin(x, offset) {
    return Math.sin(x + offset);
}

export function cos(x, offset) {
    return Math.cos(x + offset);
}

export function tan(x, offset) {
    return Math.tan(x + offset);
}

export function atan(x, offset) {
    return Math.atan(x + offset);
}

export function ctg(x, offset) {
    return 1 / Math.tan(x + offset);
}

export function actg(x) {
    return Math.PI / 2 - Math.atan(x);
}

export function flatsin(x, offset, delta = 0.1) {
    const f = 1 / (2 * Math.PI);
    return (1 / atan(1 / delta, 0)) * atan(sin(2 * Math.PI * x * f, offset) / delta, 0);
}

export function flatcos(x, offset, delta = 0.1) {
    const f = 1 / (2 * Math.PI);
    return (1 / atan(1 / delta, 0)) * atan(cos(2 * Math.PI * x * f, offset) / delta, 0);
}

export function sqsin(x, offset, n) {
    return Math.pow(sin(x, offset), n);
}

export function sqcos(x, offset, n) {
    return Math.pow(cos(x, offset), n);
}

export function flatsqsin(x, n, offset, delta) {
    const f = 1 / (2 * Math.PI);
    return (1 / atan(1 / delta, 0)) * atan(sqsin(2 * Math.PI * x * f, offset, n) / delta, 0);
}

export function flatsqcos(x, n, offset, delta) {
    const f = 1 / (2 * Math.PI);
    return (1 / atan(1 / delta, 0)) * atan(sqcos(2 * Math.PI * x * f, offset, n) / delta, 0);
}

export default class Animation extends React.Component {
    constructor(props) {
        super(props);
        this.mounted = false;
        this.start = 0;
        this.frameId = null;
        this.state = props.initialState;

        this.onFrame = this.onFrame.bind(this);
    }

    async componentDidMount(e) {
        this.mounted = true;
        this.start = Date.now();
        this.onFrame();
    }

    componentWillUnmount() {
        this.mounted = false;
        if (this.frameId) {
            window.cancelAnimationFrame(this.frameId);
        }
    }

    async onFrame() {
        if (!this.mounted) {
            return;
        }

        const res = await this.props.onFrame({
            state: this.state,
            sleep,
            lerp,
            map,
            smooth,
            smoother,
            sin,
            flatsin,
            flatcos,
            sqsin,
            sqcos,
            flatsqsin,
            flatsqcos,
            start: this.start
        });
        this.setState(res);
        this.frameId = window.requestAnimationFrame(this.onFrame);
    }

    render() {
        return this.props.render(this.state);
    }
}