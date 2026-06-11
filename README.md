# 🔢 LCM Web API (JavaScript / Node.js)

This project is a simple web service built using **JavaScript (Node.js + Express)** that calculates the **Lowest Common Multiple (LCM)** of two natural numbers using an HTTP GET request.

---

# 🚀 Live API

🔗 Base URL:
```

[https://itransitiontask3-r9an.onrender.com](https://itransitiontask3-r9an.onrender.com)

```text

📧 Email-based identifier:
```

fahmidaakter0010_gmail_com

```text

---

# 📌 API Endpoint

## GET /lcm

```

GET /lcm?x={number}&y={number}

```text

---

# 🌐 Example Usage

## ✅ Valid Request

```

[https://itransitiontask3-r9an.onrender.com/lcm?x=12&y=18](https://itransitiontask3-r9an.onrender.com/lcm?x=12&y=18)

```text

### Response:
```

36

```text

---

## ❌ Invalid Request

```

[https://itransitiontask3-r9an.onrender.com/lcm?x=a&y=10](https://itransitiontask3-r9an.onrender.com/lcm?x=a&y=10)

```text

### Response:
```

NaN

```text

---

# ⚙️ Task Requirement Fulfilled

✔ HTTP GET method implemented  
✔ Accepts `x` and `y` as natural numbers  
✔ Returns only digits (LCM result)  
✔ Returns `"NaN"` for invalid input  
✔ No HTML / JSON output  
✔ Deployed publicly on Render  

---

# 🧠 Logic Used

LCM is calculated using:

- GCD (Greatest Common Divisor)
- Formula:  
```

LCM(x, y) = (x × y) / GCD(x, y)

```text

---

# 📦 Deployment

The project is deployed on **Render**:

🔗 Live URL:
```

[https://itransitiontask3-r9an.onrender.com](https://itransitiontask3-r9an.onrender.com)

```text

---

# 📌 Submission Format

```

!task3 fahmidaakter0010_gmail_com [https://itransitiontask3-r9an.onrender.com/lcm?x={}&y={}](https://itransitiontask3-r9an.onrender.com/lcm?x={}&y={})

```text

---

# ⚠️ Notes

- Only natural numbers are allowed (`x > 0`, `y > 0`)
- Invalid input returns `"NaN"`
- API returns plain text response (no HTML/JSON)
