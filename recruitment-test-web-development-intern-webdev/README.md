# Recruitment Test - Intern Web Dev

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=whitewhite)

## Subject

The goal of this test is to evaluate your skills on creating an Angular / Node.js web app.
You'll be judged on your code, your logic of implementation and how you structure the project.

Once finished, send us the URL of the git repository or optionally as an archive.
If you choose to send an archive, remember to delete the `node_modules` before compressing.
Finally, set the times it takes you to finish this test below &#8595;.

Estimated time: ~1h\
Time to complete: _<insert_yours_here>_

> A minimum of UI/UX design effort will be appreciated, but don't spend too much time on it.
> You're allowed to use external libraries like [Angular Material](https://v16.material.angular.io/) if you're familiar with them.

## Prerequisites

Here's the list of framework and packages required before to start the test:

| App                              | Version |
| -------------------------------- | ------- |
| [Node.js](https://nodejs.org/fr) | ≥ 18.13 |
| [Git](https://git-scm.com/)      |         |

## Installation

Install dependencies of each project with the following command:

```bash
npm i
```

If the project isn't already in a git repository, you must init one from GitLab, GitHub or using:

```bash
git init
```

## Description

You're going to create a server and a client app to retrieve and display fake users.

At your disposal, you have :

- A template of an Angular project: `client/`
- A template of a Node.js / Express project: `server/`
- A faked database (see `server/database.js`) already containing data.

You'll improve each of these projects according to the requirements listed below &#8595;.

### Requirements

#### Server

- [ ] Implement a route to retrieve a list of users.

#### Client

- [ ] Create a top-navbar allowing to navigate between two pages: home and user.
- [ ] The home page should be displayed by default.
- [ ] The home page should display a welcome message.
- [ ] The user page should display a list of users retrieved by calling the server.
      When a row is clicked, all the user information must be displayed below the list.
- [ ] The user list and the user information must be in separate components.

## Report an issue?

Please feel free to contact us if you encounter any configuration issue during your test.
