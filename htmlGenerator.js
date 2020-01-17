const colors = {
    red: {
        wrapperBackground: "",
        headerBackground: "",
        headerColor: "white",
        photoBorderColor: ""
    },
    orange: {
        wrapperBackground: "",
        headerBackground: "",
        headerColor: "white",
        photoBorderColor: ""
    },
    yellow: {
        wrapperBackground: "",
        headerBackground: "",
        headerColor: "white",
        photoBorderColor: ""
    },
    green: {
        wrapperBackground: "",
        headerBackground: "",
        headerColor: "white",
        photoBorderColor: ""
    },
    blue: {
        wrapperBackground: "",
        headerBackground: "",
        headerColor: "white",
        photoBorderColor: ""
    },
    purple: {
        wrapperBackground: "",
        headerBackground: "",
        headerColor: "white",
        photoBorderColor: ""
    }
};

function generateHTML(userInput, response, responseStars, profileImg, githubUsername, userCity, userGithubProfileURL, userblogURL, userBio, numberOfRepos, numberOfFollowers, numberOfUsersFollowing, userCompany) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${userInput.username}</title>
</head>

<body class = "wrapper">
<div class="col">
<header>
<div class ="photo-header">
<div class="row"><img src=${profileImg}" alt="profile-img">
</div>
<body>
    <div class="container">
            <img src="" alt="Profile Image">
            <h2>Hi, my name is ${username}</h2>
            <h3>I live in ${userCompany}</h3>
            <div class = "links-nav">
            <span class="nav-link"><a href="https://google.com/maps/place/${userCity}"<i class ="fas fa-location-arrow"></i>${userCity}</a></span>
            <span class="nav link"<a href="${userGithubProfileURL}"><i class="fab fa-github"></i>Github</a></span>
            <span class="nav link"<a href="${userBlogURL}"><i class="fad fa-rss"></i>Blog</a></span>
            </div>
            </div>
            
    user github profile -->
        </div>
        <div class="bottom-half">
            <!-- User Blog -->
            <!-- User Bio -->
            <div class="row">
                <div class=col-md-6> Number of public repos </div>
                <div class=col-md-6> Number of followers </div>
                <div class="row">
                    <div class=col-md-6> Number of github stars </div>
                    <div class=col-md-6> Number of users following </div>
                </div>
            </div>
        </div>
</body>

</html>`
}