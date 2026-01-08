b.style.background=`#000`;

r = [];
o = [];
x = m = 187;
y = n = 32;
q = 0;

for (i = 0; i < 384; i++) {
    o[i] = Math.round(Math.random() * .53);
    r[i] = o[i] ? 0.4 : Math.random();
};

setInterval(() => {
    q += .02;
    q %= 2 * Math.PI;
    c.clearRect(0, 0, 374, 512);

    for (i = 0; i < 384; i++) {
        t = .1 * i;
        s = Math.sin(q + t);
        x = m + 3 * t * Math.cos(q + t);
        y = i + n + t * s++;
        c.fillStyle = o[i]
            ? `rgba(255,255,0,${s * .8})`
            : `rgba(0,112,32,${s * .3 * r[i]})`;
        c.moveTo(x, y);
        c.beginPath();
        c.arc(x, y, 28 * r[i], 0, 2 * Math.PI, 1);
        c.fill();
        c.closePath();
    }
}, 16);