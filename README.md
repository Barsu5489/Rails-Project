# Project Job Application: React/Rails API


 This is a project that  was designed by a group of engineers  from Moringa school based on the emerging technology where employees have to locate their jobs with ease

# Contributors
1. Emmanuel Bett
2. Eugene Aija
3. Edson Kimothi
4. Emmanuel Barsu


## Table of contents

- [Description](#description)
- [Contributors](#contributors)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Live Link](#live-link)
- [Configuration](#Configuration)
- [Database Creation](#database-creation)
- [Deployment Instructions](#deployment-instructions)


# Description
The project Job Application on a Jobs Portal Web App that allows users to:
* View various jobs `GET/jobs`
* View varios jobs `GET/jobs/:id`
* View various job categories `GET/categories`
* Create a new job `POST/jobs`
* Update a details of a specific job `PATCH/jobs`
* Delete a job `DELETE/jobs`
* Create a user `POST/users`
* Delete a user `DELETE/users`
* Reset-password `PATCH/users`


## Live link
 * Backend- https://japp.onrender.com
 * Frontend- https://job-app-user-interface.vercel.app


### Technology Used
![](https://img.shields.io/badge/Github-black)&nbsp;&nbsp;&nbsp;![](https://img.shields.io/badge/Ruby-Red)&nbsp;&nbsp;&nbsp;![](https://img.shields.io/badge/Postman-orange)
- NodeJS (v16), and npm
- Render account
- sqlite3
- Reactjs
- Css
- HTML
- Vercel


See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Setup

Start by **cloning** (not forking) the project repository and removing
the remote:

```console
$ git clone git@github.com:Barsu5489/Rails-Project.git
$ cd Rails-Project
$ git remote rm origin
```



Finally, connect the GitHub remote repository to your local repository and push
up your code:

* Navigate to the client folder and install the required dependencies
```
$ cd client
$ npm install 
$ npm update
```
* Navigate to the parent folder of the client and install ruby on rails
```
$ cd ..
$ gem install rails
```
* Run the migrations and seed the data
```
$ rails db:migrate db:seed
```
* Start the rails server
```
$ rails s
```
* Open a new terminal and start the client
```
$ npm start --prefix client

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
 [http://localhost:4000](http://localhost:4000)







## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```



```




## Resources

- [Getting Started with Ruby on Rails on Render](https://render.com/docs/deploy-rails)
- [Render Databases Guide](https://render.com/docs/databases)


# Contributing

our website is build with little knowledge in four languages,it is however,open to anyone who would wish to contribute to our project. you can also refer here https://stackoverflow.com/questions/8503559/what-is-linting to learn more and run tests. software methods and tools refer herehttp://www.methodsandtools.com/archive/archive.php?id=33.


# License
Copyright (c) 2022 Emmanuel Bett

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


### Author's Information
- Name: Emmanuel Bett 
- Email: ebett471@gmil.com
- [LinkedIn](https://www.linkedin.com/in/emmanuel-bett-415138263/)


### Support and contact details
For any further clarification and support contact:

Email: emmanuel.bett@student.moringaschool.com
Email: eugeneosu7@gmail.com
Email: edson.kimotho@student.moringaschool.com
Email: emmanuel.barsulai@student.moringaschool.com

Show support with ⭐️ if you like this project!:wink::wink: