 
### REST API Implementation  

## 📌 Objective
Build and host a REST API (`POST` method) that:  
- Accepts an array as input  
- Returns filtered and processed results such as even numbers, odd numbers, alphabets, special characters, sum of numbers, and a custom concatenated string  

---

## 🚀 Features
- Returns:  
  1. **Status** (`is_success`)  
  2. **User ID** (Format: `fullname_ddmmyyyy`)  
  3. **Email ID**  
  4. **Roll Number**  
  5. **Even numbers** (as strings)  
  6. **Odd numbers** (as strings)  
  7. **Alphabets** (converted to uppercase)  
  8. **Special Characters**  
  9. **Sum of numbers** (as string)  
  10. **Concatenation of alphabets in reverse order with alternating caps**  

---

## 🛠️ Tech Stack
- **Backend:** Node.js / Express.js  
- **Hosting:** Render 
- **Version Control:** Git + GitHub  

---

## 📂 API Endpoint
- **Method:** `POST`  
- **Route:** `/bfhl`  
- **Status Code:** `200 OK` (for successful requests)
  
---
## Deployed Site:
https://bajaj-finserv-project-1-a0wj.onrender.com/bfhl
---

## 📥 Request Format
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}

 



