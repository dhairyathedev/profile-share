# Profile Share By SnowBit
- **Profile Share** connects people. It is an open-source platform to share your profiles.
- Main point of making this is to encourage people to contribute in opensource
r Profiel
<!-- Image -->

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

  ```js
  // SnowBit Start
  {
    name: "snowbit",
    displayName: "SnowBit",
    img: "https://avatars.githubusercontent.com/u/65452005?v=4",
    bio: "Coding is fun",
    social: [
        {
            name: "github",
            url: "https://github.com/snowbit-coderboi",
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

