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
    try {
        const x = BigInt(req.query.x);
        const y = BigInt(req.query.y);

        if (x <= 0n || y <= 0n) {
            return res.send("NaN");
        }

        res.send(lcm(x, y).toString());
    } catch {
        res.send("NaN");
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});