# Portfolio

A website that serves as a portfolio for myself. Personal and professional information is detailed within the website structure.

## Description

This portfolio was created to demonstrate skills I have obtained from my first year of learning web development. Each of the five page contents in this portfolio utilizes many different aspects of HTML, CSS, JavaScript/TypeScript, and React.

This portfolio is hosted publicly at https://rzheng2019.github.io/portfolio/

## Node JS and npm setup

(Optional, if you don't have Node.js installed)

Install Node.js to have access to npm and npx terminal commands. Instructions can be found at https://nodejs.org/en.

This webpage was made using Create-React-App.

Make sure Node.js version is 14.0.0 or greater.

Make sure npm version is 5.6 or greater.

## Setup

1. Download or clone this repository into a directory or folder of choice.

2. Open up a terminal and navigate to newly downloaded or cloned directory.

3. Input the following commands to install required `npm` packages.
    - `npm install react-router-dom --save`

    NOTE:
    Create-React-App environment naturally comes with vulnerabilities. It seems that these vulnerabilities are expected and don't interfere with the webpage application. Running npm audit doesn't fix the issues as it seems it is meant to be broken.

    The only thing modified in index.html is the title tag. When run through HTML validator (http://validator.w3.org), there are a bunch of errors regarding link tags that have %PUBLIC_URL%. These link URLs are meant to be replaced later on when built as stated in the comments in the index.html. Please disregard, as these errors are not due to any of my changes.

4. To open this website in local server, input the following commands:
    - `npm start` or `npm run start`

    A new webpage called `Ricky Zheng Portfolio` will open at http://localhost:3000/ on a web browser of choice. Please leave the npm start or npm run start React session running.

    NOTE:

    When the command is first run, there will be a warning regarding a dependency issue not being maintained anymore. Please disregard this message, as any sequential run will not have this message. The build message still states that there were no issues found.

5. Alternatively, this `portfolio` is hosted publicly on GitHub Pages 
   at the link below:
   - https://rzheng2019.github.io/portfolio/

## Overall Web Page Structure

There are five web pages in this portfolio:

1. Home (Defaulted to `/portfolio`)
2. About 
3. Resume 
4. Projects
5. Contact

### Home

The `Home` and default page of this portfolio serves to display the overall web layout to the user/visitor. The contents of this page contain a photo of myself and a brief professional description. The header of the page contains links to the other four web pages all connected to each other through `react-route-dom` with a `HashRouter`.
The footer of the page displays copyright info and a contact email for further questions. This home page (and the other four pages) were built with responsive web design in mind, as these pages can fit multiple screen sizes and adjust their content accordingly.

### About

The `About` page component gives a professional and personal description of myself. Also, a `Tech Stack` section is displayed showing a list of programming languages, tools, and frameworks I have used and am experienced with.

### Resume

The `Resume` page component displays my resume broken down using HTML and CSS features such as Flexbox. Links to my LinkedIn and GitHub profiles are provided as well.

### Projects

In the `Projects` page component, a total of four projects I've done are displayed with HTML and CSS Flexbox. Each of the projects contains a title, a Graphics Interchange Format (GIF), and a brief description of the project. These project tiles are hoverable and clickable, where clicking on the tile will open up a new tab to the GitHub repository that contains the project.

### Contact

The `Contact` page component is a form that contains many input fields such as name and subject that can be used to contact myself. Each of these fields are validated in React and displays appropriate error messages when an input is not valid. Upon successful submission via a submit button, a green text will appear notifying the user. This component is just front-end functional and doesn't have back-end functionality for right now.

## Accessing Via Direct URL

To directly access a specific webpage from this portfolio, please make sure that `/#/` comes after the home page URL and comes before the desired webpage destination.

To naviagate to `Resume` page:

- Example: `https://rzheng2019.github.io/portfolio/#/resume`