# **Profile Share By SnowBit**

- **Profile Share** connects people. It is an open-source platform to share your profiles.
- Main point of making this is to encourage people to contribute in opensource.


## 👨🏻‍💻 **Demo**

Check out: [Profile Share](https://profile-share.netlify.app/)

### 🚦 **Prerequisites**

Before installation, make sure you have following tools installed on your machine:

- [Git](https://git-scm.com/downloads)
  
- [NODE.JS](https://nodejs.org/en/download/)
  
### 🛠 **Installing steps**

- Fork the project
- Clone the project
- Go to project directory `cd profile-share`
- Install all `dependencies` if not, `npm install`
- Run `npm start`

### 🙃 **Contributing**

- Any contributons of yours are **greatly appreciated**


### 🗃 **Add your profile**

- Go to `/src/data/UsersData.js`

- Submit your profile from the **end** of the file, don't submit your profile in radnom order it must be submitted from bottom and should not be added in between
- Syntax must be like following code-block, and make sure to add comment at the start/end as shown in the following code:
- Your **avatar** URL must follow the format of `https://github.com/<yourusername>.png`
- 
  ```js
  // SnowBit Start
  {
    name: "snowbit",
    displayName: "SnowBit",
    img: "https://github.com/codewithsnowbit.png",
    bio: "Coding is fun",
    social: [
        {
            name: "github",
            url: "https://github.com/codewithsnowbit.png",
        },
        {
            name: "twitter",
            url: "https://twitter.com/codewithsnowbit",
        },
        {
            name: "youtube",
            url: "https://www.youtube.com/channel/UCNTKqF1vhFYX_v0ERnUa1RQ",
        },
        {
            name: "dev",
            url: "https://dev.to/snowbit",
        }

    ]}
    //SnowBit End

- Your URL will be `https://profile-share.netlify.app/<username>`

Looking for example? Check out

- [SnowBit](https://profile-share.netlify.app/snowbit)

### **Icons**

Make sure to use the exact names of the social apps in your profile code block or else social icons will not be shown on your profile page

- github
- twitter
- youtube
- facebook
- dev
- codepen
- stackoverflow
- instagram
- hackernews
- gitlab
- hackerrank

### 🔥 **Contributors**
<a href="https://github.com/snowbit-coderboi/profile-share/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=snowbit-coderboi/profile-share" />
</a>

### **Support**
Give it a **star** ⭐️ and become a stargazer 💫
