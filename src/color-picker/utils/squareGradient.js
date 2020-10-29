export default function quadGradient(canvas, corners) {
    const context = canvas.getContext('2d');
    const { width, height } = canvas;
    let gradient, startColor, endColor, fac;

    for(let i = 0; i < height; i++) {
        gradient = context.createLinearGradient(0, i, width, i);
        fac = i / (height - 1);

        startColor = arrayToRGBA(lerp(corners.topLeft, corners.bottomLeft, fac));
        endColor = arrayToRGBA(lerp(corners.topRight, corners.bottomRight, fac));

        gradient.addColorStop(0, startColor);
        gradient.addColorStop(1, endColor);

        context.fillStyle = gradient;
        context.fillRect(0, i, width, i);
    }
}

function arrayToRGBA(arr) {
    const ret = arr.map(function(v) {
        return Math.max(Math.min(Math.round(v * 255), 255), 0);
    });
    ret[3] = arr[3];
    return 'rgba(' + ret.join(',') + ')';
}

function lerp(a, b, fac) {
    return a.map(function(v, i) {
        return v * (1 - fac) + b[i] * fac;
    });
}