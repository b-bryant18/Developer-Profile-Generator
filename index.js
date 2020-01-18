const inquirer = require("inquirer");
const fs = require("fs");
const axios = require('axios').default;
const makeHTML = require('./generateHTML');

const HTMLtoPDF = require('html-pdf');
const html = fs.readFileSync('./index.html', 'utf8');
const options = {format: 'Letter'};
const api = require("./api");



function devProfileGen() {

    // Variables that will be overwritten by user inputs from Github. ------------------------------------------
    let profileImg;
    let githubUsername;
    let userCity;
    let userGithubProfileURL;
    let userBlogURL;
    let userBio;
    let numberOfRepos;
    let numberOfFollowers;
    let numberOfUsersFollowing;

    // User will be asked for their Github username and favorite color.----------------------------
    inquirer.prompt([
            {
                type: "input",
                name: "username",
                message: "What is your github username?"
            },
            {
                type: "list",
                message: "What's your favorite color?",
                name: "colors",
                        choices: Object.keys[makeHTML.colors]
            }
        ])
    .then(function(userInput) {

       
        githubQuery(userInput);

        // Creates a json file using user input.---------------------------------------------------
        let githubUsername = userInput.username + ".html";
        // let generatehtml = generateHTML.generateHTML(userInput, response, responseStars, profileImg, githubUsername, userCity, userGithubProfileURL, userblogURL, userBio, numberOfRepos, numberOfFollowers, numberOfUsersFollowing, userCompany);

//         fs.writeFile(githubUsername, generatehtml, function (err) {/
//             if (err) {
//                 return console.log(err);
//             }
//             //If successful, make an axios request to find user info.
//             //queryURL needs to include user's Github username

            
//             console.log(queryURL);
//             console.log(queryStarURL);

//             // Functions for axios requests--------------------------------------------------------
//             githubQuery(queryURL).then(function (response) {
//                 githubQueryStars(queryStarURL).then(function (responseStars) {
//                     let options = {format: 'letter'};
//                     // Maybe change let to const later on------------------------------------------

//                     // Put this info an HTML file then a PDF file. 
//                     // Need a function for making an HTML file. From generateHTML.js.
//                     // Then change HTMLtoPDF.create makes a PDF file from the HTML info received. 

//                     HTMLtoPDF.create(html, options).toFile(`./${userInput.username}.pdf`, function (err, res) {
//                         if (err) return console.log(err);
//                         console.log(res);
//                     });
//                 })
//             });
//         });
    });
}
    

// Make a request for a user with a given Github ID------------------------------------------------
function githubQuery(userInput) {
    const queryURL = "https://api.github.com/users/" + userInput.username;
    const queryStarURL = "https://api.github.com/users/" + userInput.username + "/starred";
    console.log(userInput)

    return axios.get(queryURL)
    .then(function (response) {
        // Success
        // console.log(response);
        // console.log(response.data.name);
        // console.log(response.data.public_repos);

        profileImg = response.data.avatar_url + ".png";
        console.log(profileImg);

        githubUsername = response.data.login;
        console.log("Username:" + githubUsername);

        userCity = response.data.location;
        console.log("Lives in " + userCity);

        userGithubProfileURL = response.data.html_url;
        console.log("Github URL: " + userGithubProfileURL);

        userBlogURL = response.data.blog;
        console.log("Blog: " + userBlogURL);

        userBio = response.data.bio;
        console.log(userBio);

        numberOfRepos = response.data.public_repos;
        console.log("Number of Public Repos: " + numberOfRepos);

        numberOfFollowers = response.data.followers;
        console.log("Number of Followers: "+ numberOfFollowers);

        numberOfUsersFollowing = response.data.following;
        console.log("Number of Users Following:" + numberOfUsersFollowing);
        
        makeHTML.generateHTML(response);
    })
    
    


    // .catch(function(error) {
    //     // Handle error
    //     console.log(error);
    // })
    // .finally(function() {
    //     // Will always be executed
    // })
}

// Function for finding the number of starred repos that a user has--------------------------------
function githubQueryStars(queryStarURL) {
    return axios.get(queryStarURL)
    .then(function (responseStars) {
        // console.log("Number of Starred Repos: " + responseStars.data.length);
        return responseStars.data.length;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // Will always be executed
    });
}


devProfileGen();

// Run inquirer, pass in questionList variable, use name property,
// githubUsername and favColor. Use fs, writeFilesync to create a PDF.
// WFS replaces a file each time it's edited. Need to make a file for
// the github API JS. Use axios to make a get request from the gh API. 
// Make new variable for username and use inquirer to get the value.
// Make folder w/ 3 files in it. index.js, api.js, htmlgenerator.js - 
// Make function that the electron package (from Dan Sires) I can use. 
// Create an html page first (pic on top w/ 4 boxes) then copy and
// paste the whole skeleton into a function. 