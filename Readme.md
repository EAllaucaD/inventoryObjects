# **Microservices for InventoryObjects**

## **🚨Attention! 🚨**

This is an important message related to the project. Please read it carefully before proceeding.

- **dev Branch:** This branch is where the general development and work of this repository takes place.

- **QA Branch:** In this branch you will see the project approved from the development branch to QA.

- **Main Branch:** This branch contains the final functionalities of the repository.

---

## 📋 Table of Contents

1. [📖 About the Project](#-about-the-project)
2. [🛠️ Tools Used](#%EF%B8%8F-tools-used)
3. [📋 Prerequisites](#-prerequisites)
4. [🚀 Project Usage](#-project-usage)
5. [📜 Preview]()

---

## 📖 About the Project

This domain handles the logic for inventorying objects with CRUD functionalities, each separated as a microservice, and connecting to a Postgres database with its AWS service.

### 🏗️ Features:

- **CI/CD Automation**: Automatic updates on every push and pull request.
- **Secure Deployment**: Uses SSH keys for server access
---

## 🛠️ Tools Used

![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)

![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

![AWS EC2](https://img.shields.io/badge/AWS%20EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

---

## 📋 Prerequisites

Before you begin, make sure you have:
1. **AWS Account** with a configured EC2 instance.
2. **SSH Keys** generated for secure connection.

    EC2_KEY: Content of your private SSH key.

    EC2_HOST: Public IP address of your EC2 instance.

    You can get them from your AWS account.
3. **Secrets configured** in your GitHub repository.
4. **DockerHub** credential.
5. **Postgre DB** create in AWS RDS.
6. Create a .env file in each microservice for this project that has HOST_DB,USER_DB, PASSWORD_DB, DATABASE_NAME, 
JWT_SECRET,PORT.

---

## 🚀 Project Usage

### Clone the Repository
```bash
git clone https://github.com/EAllaucaD/inventoryObjects.git
```
### Comands
### To test the microservice locally:

```bash
npm install
```
You can then run the application (local) using the following command.

```bash
npm start
```

Each new push to dev or pull request to QA or main triggers the flow of GitHub Actions to DockerHub and AWS EC2.


## Execute
Once you run the detailed commands you can see how the service is started on the assigned port. You can test this by doing a get in postman with the appropriate route.

Server run in http://localhost:PORT
 
This port change in each microservice.


### To test the microservice in AWS:

a. Configure the appropriate secrets with the instances and databases raised.

b. You can us this microservice in this ip : http://52.54.67.181:PORT.

For this microservices you can use this ports: 3014, 3015, 3016 and 3017 in each.

And you can use /api-docs for view the configurations of swagger only in branch dev and QA.

http://52.54.67.181:{PORT}/api-docs


## 🎨 Preview

Microservices pushed to Docker Hub.
![image](https://github.com/user-attachments/assets/c2f04df9-eef9-410c-a9f2-7a35278aa3af)

Pull the images of each microservice to the EC2.
![image](https://github.com/user-attachments/assets/aa5baf31-8526-46ff-807c-d7014eb8c92f)

PostgresDB in AWS RDS.
![image](https://github.com/user-attachments/assets/174522c7-b029-466b-8b33-d0770c0a76cc)

Microservices consumed by IP EC2.

![image](https://github.com/user-attachments/assets/365937f5-a650-4c61-965b-2709bf51afa9)

Swagger

![image](https://github.com/user-attachments/assets/a981978e-44f8-4eae-9af9-8d61fef0dfe4)

Microservices consumed by a front end.

![image](https://github.com/user-attachments/assets/7039ef23-c4e5-4e4e-9004-078f6cca9f8d)



