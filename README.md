<div align="center">
  <h2> 🌟 Bank Management System 🌟</h2>
</div>

## A Web-Based **Bank Management System** for **Users** and **Admins**

<p align="center">
  <img src="https://github.com/gopaljyani2005/Bank-Portal/blob/main/public/image/ProjectImage.png" alt="project-image" style="border: 2px solid #0078D7; border-radius: 10px;">
</p>

---


## 🌟 Motivation

Managing financial operations efficiently and securely is a cornerstone of modern banking. This **Bank Management System** was developed with the vision to:

- Simplify banking processes for users and administrators.
- Enhance security, transparency, and accessibility in financial transactions.
- Provide a seamless and user-friendly platform to manage accounts, loans, and other banking services.
  
With technology shaping the future of banking, this project is a step toward delivering reliable and innovative financial solutions. 🚀  


---
### ✨ **Features**

- 🔒 **User Login**: Log in, view account status, and perform money transfer operations.
- 🛠️ **Admin Login**: Manage users by creating new accounts, deleting accounts, and performing transactions.
- 📩 **OTP Verification**: Secure logins with OTP authentication.

---

### 📸 **Project Screenshots**


<div align="center">
  <h2>Admin Login Page</h2>
    <img src="https://github.com/gopaljyani2005/Bank-Portal/blob/main/public/image/admin_login.png" alt="Admin Login Screenshot" width="600" style="border: 2px solid #32CD32; border-radius: 10px;">
</div>


<div align="center">
  <h2>Users Login Page</h2>
    <img src="https://github.com/gopaljyani2005/Bank-Portal/blob/main/public/image/users_login.png" alt="User Login Screenshot" width="600" style="border: 2px solid #32CD32; border-radius: 10px;">
</div>



<div align="center">
  <h2>Admin Features</h2>
    <img src="https://github.com/gopaljyani2005/Bank-Portal/blob/main/public/image/admin_feature.png" alt="Admin Features Screenshot" width="600" style="border: 2px solid #FF4500; border-radius: 10px;">
</div>


<div align="center">
  <h2>Users Features</h2>
      <img src="https://github.com/gopaljyani2005/Bank-Portal/blob/main/public/image/users_feature.png" alt="User Features Screenshot" width="600" style="border: 2px solid #FF4500; border-radius: 10px;">
</div>


---

### 💻 **Tech Stack**

- 🌐 **Frontend**: HTML, CSS, JavaScript, Next.js, Redux
- ⚙️ **Backend**: Next.js, AWS
- 🚀 **Deployment**: Vercel, AWS

---

### 🎥 **Demo Videos**

#### 1. **User Login and Features**

[Watch Demo](https://www.youtube.com/watch?v=cu32m4m2poU)  

<p align="center">
  <a href="https://www.youtube.com/watch?v=cu32m4m2poU" target="_blank">
    <img src="https://img.youtube.com/vi/cu32m4m2poU/0.jpg" alt="YouTube Video Thumbnail" width="800" style="border: 3px solid #0078D7; border-radius: 10px;">
  </a>
</p>

---

### 🎥 **Live Demo**
[Click here to view the live project](https://gopalaramjyanibankportal-lsk944v5q-gopalaram.vercel.app/)
```
https://gopalaramjyanibankportal-lsk944v5q-gopalaram.vercel.app/
```

-----


### ⚡ **Installation**

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/gopaljyani2005/Bank-Portal.git
    cd Bank-Portal
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env.local` file:
    ```bash
    USER_NAME=YourDBUser
    PASS_WORD=YourDBPassword
    USER_EMAIL=YourEmail
    EMAIL_PASSWORD=YourAppPassword
    JWT_SECRET_KEY = BXXMEXX
    ```

4. **Run the Project Locally**:
    ```bash
    npm run dev
    ```

---

### 📂 **Routes to Implement**

| **METHOD** | **ROUTE**                  | **FUNCTIONALITY**                              | **ACCESS**               |
|------------|----------------------------|------------------------------------------------|--------------------------|
| POST       | `/api/addaccount/`          | Create a new account                          | Bank Manager             |
|  GET      | `/api/logIn/`                | User login your account                       | Users                    |
| GET        | `/api/addaccount/`          | Get account details                           | Bank Manager, Users      |
| DELETE     | `/api/addaccount/`          | Delete an account                             | Bank Manager             |
| PUT        | `/api/addaccount/[addaccount]`| Update user details                         | Bank Manager             |
| POST       | `/api/emailSend/`           | Send OTP, account number, and password        | Auto Send                |
| POST       | `/api/TransactionApi/`      | Transfer money to other bank users            | Bank Manager, Users      |
| POST       | `/api/MOBILEOTP/`           | Send OTP to a mobile number                   | Bank Manager             |
| POST       | `/api/userlogout/`          | Logout Users from your account                | Users                    |
| POST       | `/api/adminlogout/`         | Logout Bank Manager from your Branch          | Bank Manager             |
| GET        | `/api/cookieData/`          | Get stored data in the cookies from backend   | Bank Manager ,Users      |


---

### 🤝 **Contributing**

We welcome contributions! Fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create a new branch:  
    ```bash
    git checkout -b feature-branch
    ```
3. Make changes and commit:  
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to your branch:  
    ```bash
    git push origin feature-branch
    ```
5. Submit a pull request

---

<body>
    <h1>Folder Structure</h1>
    <p>This project follows the folder structure outlined below:</p>
    <pre>
<code>src/
├── app/
│   ├── about/
│   ├── adminlogin/
|   |       └── adminpage/
│   │                 ├── Accountdetail/
│   │                 ├── createaccount/
│   │                 ├── deleteaccount/
│   │                 ├── depositmoney/
│   │                 |── updateAccountDetail/
|   |                 |── withdrawal/
│   │                 
│   ├── api/
│   │   ├── addaccount/
|   |   |           └── [getdata]
│   │   ├── logIn/
|   |   |           └── [logIn]  
│   │   ├── emailSend/
│   │   ├── MOBILEOTP/
│   │   ├── sendmailaccountdetail/
│   │   |── TransactionApi/
│   │   |── cookieData/
│   │   |── userlogout/
│   │   |── adminlogout/  
|   |
│   ├── login/
│   │   ├── forgotpassword/
│   │   └── otpverification/
│   │             └── userfolder/
│   │                    ├── sendmoney/
│   │                    ├── userdetail/
|   ├── services/
|   ├── style/
│   ├── favicon.ico
│   ├── globals.css
|   ├── page.js
│   └── layout.js
├── Components
├── lib/
|     └── DBmodel/
├── utils/
|     └── token.js
|  
└── middleware.js
</code>
    </pre>
</body>

----

### 📧 **Contact Information**

If you have any questions or need further assistance, feel free to reach out:

- **Email**: [jyanigopalaram@gmail.com](mailto:jyanigopalaram@gmail.com)
- **LinkedIn**: [Gopala Ram Jyani](https://www.linkedin.com/in/gopala-ram-jyani-1734b4274/)
- **GitHub**: [Gopaljyani2005](https://github.com/gopaljyani2005/)

---
