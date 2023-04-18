# Real Time Chat 

---
# Requirements 
* **Node.js** `18.16`
* **Postgres** `15.2`
* **Express** `8.18`
* **JavaScript** `1.8.5`
___

## docker-compose
Server is ready immediately after containers are up
```shell
  docker-compose up
```

## Dockerfile 
```shell
 docker build -t web-app .
 docker run -d -p 8080:8080 --name ChatJS web-app
```
---

## Build / Run

```shell
git clone https://github.com/QuitM6n/RealTimeChat.git 
cd RealTimeChat
npm start 
```

## Сompleted tasks
***1. Added Private Room and connected to it with use password***<br/>

***2.Added storage space for connected users in chat***<br/>

***3.Added display of sent message time***<br/>

***4.Added button for disconnect from chat***<br/>

***5.Added Postgresql for storage password private room and it's name***<br/>

***6.Added send message on press of enter button in keyboard***<br/>

***7.Added validation***<br/>

***8.Added the ability to send an image or file another client***<br/>

***9.Added storage space for data that clients send each other***<br/>

***10.Added a bot for a user if he has no friends or anyone who can support a discussion with him says***<br/>
