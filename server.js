const express = require("express");

const app = express();

function gcd(a, b) {
    while (b !== 0n) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}

app.get("/fahmidaakter0010_gmail_com", (req, res) => {
    const xStr = req.query.x;
    const yStr = req.query.y;

    if (
        !/^[1-9]\d*$/.test(xStr) ||
        !/^[1-9]\d*$/.test(yStr)
    ) {
        return res.send("NaN");
    }

    const x = BigInt(xStr);
    const y = BigInt(yStr);

    res.send(lcm(x, y).toString());
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});