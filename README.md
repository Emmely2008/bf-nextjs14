# Next.js Employee Directory

## Description

This project is a responsive employee directory application built with Next.js 14 and TypeScript. It features a filterable list of employees by name and office.

## Features

- **Filter by Name and Office**: Users can filter employees based on name and office location.
- **TypeScript**: The application is fully typed with TypeScript.
- **Responsive Design**: The application is responsive and works well on mobile, tablets, and desktops.
- **Modern CSS**: Utilizes modern CSS features like CSS grid, custom properties (variables). The UI was inspired by the NextJs create app.
- **Deployment**: The application is deployed on Vercel with a CI/CD pipeline that automatically builds and deploys the application upon git push.
- **Accessibility**: The application is designed with accessibility in mind, featuring good contrast colors, semantic HTML, and keyboard navigability.

## Live Demo

You can view the live demo of the application at the following URL: [Live Demo](https://bf-nextjs14.vercel.app/)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

`git clone https://github.com/Emmely2008/bf-nextjs14`

(bf stand for backend frontend)

Setting Up Your Development Environment
Node.js: Ensure you have Node.js installed. Next.js 13 requires Node.js 12.22.0 or later.
Package Manager: You can use either npm or Yarn. If you haven't installed Yarn and prefer it, you can do so via npm with npm install -g yarn.

`yarn install`

Rename `.env copy.local` to `.env.local` and enter a valid API key.

First, run the development server:

`yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

*The project is  project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# Design Philosophy
I was curious by the server-side capabilities since of Next.js 13, especially since it represents a paradigm shift by combining both backend and frontend in a single application framework - hence the repo name.

Upon examining the documentation, I noticed that the https://api.1337co.de/v3/employees endpoint lacked support for filtering. This would typically result in retrieving all employee data on the client side in a purely frontend application.

To take advantage server-side computation power, I implemented an endpoint, api/employee, within the app. This acts as an middle layer, handling both filtering and pagination on the server. The client receives a minimun set of employee items. This is particularly beneficial for performance, especially on mobile devices, as it minimizes data transfer to the client side.

The choice to use TypeScript was mainly to enhance developer productivity and code quality. 

# Motivation for Package Selection
Each package included in this project serves a specific purpose:

- sass: For writing more structured and maintainable CSS using SCSS syntax.
