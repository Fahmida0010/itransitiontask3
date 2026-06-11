# 🔢 Web API (JavaScript / Node.js)

This project is a simple web service built using **Node.js + Express**.

---

# 🚀 Live API

🔗 Base URL:

```
https://itransitiontask3-r9an.onrender.com
```

---

# 📌 API Endpoint

## GET /

📧 Email-based identifier is used as the main route:

```
GET /fahmidaakter0010_gmail_com?x={number}&y={number}
```

---

# 🌐 Example Usage

## ✅ Valid Request

```
https://itransitiontask3-r9an.onrender.com/fahmidaakter0010_gmail_com?x=12&y=18
```

### Response:

```
36
```

---

## ❌ Invalid Request

```
https://itransitiontask3-r9an.onrender.com/fahmidaakter0010_gmail_com?x=a&y=10
```

### Response:

```
NaN
```

---

# ⚙️ Task Requirement Fulfilled

✔ HTTP GET method implemented
✔ Uses email-based route identifier
✔ Accepts `x` and `y` as inputs
✔ Returns only numeric result
✔ Returns `"NaN"` for invalid input
✔ No HTML / JSON output
✔ Deployed on Render

---

# 🧠 Logic Used

LCM is calculated using:

```
LCM(x, y) = (x × y) / GCD(x, y)
```

---

# 📦 Deployment

🔗 Live URL:

```
https://itransitiontask3-r9an.onrender.com
```

---

# ⚠️ Notes

* Only natural numbers are allowed (`x > 0`, `y > 0`)
* Invalid input returns `"NaN"`
* Response is plain text only

---
