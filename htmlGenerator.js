const colors = {
    red: {
        wrapperBackground: "#re#43291Fd",
        headerBackground: "#870603",
        headerColor: "white",
        photoBorderColor: "#226F54"
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
        wrapperBackground: "#27512C",
        headerBackground: "#5BAD62",
        headerColor: "white",
        photoBorderColor: "#FFA987"
    },
    blue: {
        wrapperBackground: "#2081C3",
        headerBackground: "#101D42",
        headerColor: "white",
        photoBorderColor: "#73448C"
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
        <style>
        @page {
            margin: 0;
        }
        *,
        *:after,
        *:before {
            box-sizing:border-box;
        }
        html,body {
            padding: 0;
            margin: 0;
        }
        html, body, .wrapper {
            height: 100%;
        }
        .wrapper {
            background-color: ${colors[userInput.colors].wrapperBackground};
            padding-top: 100px;
        }
        body {
            background-color: #E9EDEE;
            height: auto;
            padding-top: 30px;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: 'BioRhyme', serif;
            margin: 0;
        }
        h1 {
            font-size: 3em;
        }
        h2 {
            font-size: 2.5em;
        }
        h3 {
            font-size: 2em;
        }
        h4 {
            font-size: 1.5em;
        }
        h5 {
            font-size: 1.3em;
        }
        h6 {
            font-size: 1.2em;
        }

        .photo-header {
            position: relative;
            margin: 0 auto;
            margin-bottom: -50px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            background-color; ${colors[userInput.colors].headerBackground};
            color: ${colors[userInput.colors].headerColor};
            padding: 10px;
            width: 95%;
            border-radius: 6px; 
        }
        .photo header img {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
            margin-top: -75px;
            border: 6px solid ${colors[userInput.colors].photoBorderColor};
            box-shadow: rgba(0,0,0,0.3) 4px 1px 20px 4px;
        }
        .photo-header h1, .photo-header h2 {
            width: 100%;
            text-align: center;
        }
        .photo-header h1 {
            margin-top: 10px;
        }
        .links-nav {
            width: 100%;
            text-align: center;
            passing: 20px 0;
            font-size: 1.1em;
        }
        .nav-link {
            display: inline-block;
            margin: 5px 10px;
        }
        .workExp-date {
            font-style: italic;
            font-size: .7em;
            text-align: right;
            margin-top: 10px;
        }
        .container {
            padding: 50px;
            padding-left: 100px;
            padding-right: 100px;
        }
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .card {
            padding: 20px;
            border-radius: 6px;
            background-color: ${colors[userInput.colors].headerBackground};
            color: ${colors[userInput.colors].headerColor};
            margin: 20px;
        }

        .col {
            flex: 1;
            text-align; center;
        }

        a, a:hover {
            text-decoration: none;
            color: inherit;
            font-weight: bold;
        }
        @media print {
            body {
                zoom: .75;
            }
        }
        </style>
    </head>
    <body class="wrapper">
        <div class="col">
            <header>
                <div class="photo-header">
                    <div class="row"><img src=${profileImg}" alt="profile-img">
                    </div>
                    <div class="container">
                        <h2>Hi, my name is ${response.data.name}</h2>
                        <h3>I live in ${userCompany}</h3>
                        <div class="links-nav">
                            <span class="nav-link"><a href="https://google.com/maps/place/${userCity}" <i
                                    class="fas fa-location-arrow"></i>${userCity}</a></span>
                            <span class="nav link"></span><a href="${userGithubProfileURL}"><i
                                    class="fab fa-github"></i>Github</a></span>
                            <span class="nav link"></span><a href="${userBlogURL}"><i class="fad fa-rss"></i>Blog</a></span>
                        </div>
                    </div>
                </div>
            </header>
    
            <main class="container">
                <div class="col">
                    <h3>${userBio}</h3>
                </div>
    
                <div class="row">
    
                    <div class="col">
                        <div class="card">
                            <h3>Public Repositories</h3>
                            <h4>${numberOfRepos}</h4>
                        </div>
                    </div>
    
                    <div class="col">
                        <div class="card">
                            <h3>Starred Projects</h3>
                            <h4>${responseStars}</h4>
                        </div>
                    </div>
                </div>
    
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <h3>Followers</h3>
                            <h4>${numberOfFollowers}</h4>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <h3>Following</h3>
                            <h4>${numberOfUsersFollowing}</h4>
                        </div>
                    </div>
    
                </div>
    
        </div>
        <div class="bottom-half">
            <!-- User Blog -->
            <!-- User Bio -->
            <div class="row">
                <div class="col-md-6"> Number of public repos </div>
                <div class="col-md-6"> Number of followers </div>
                <div class="row">
                    <div class="col-md-6"> Number of github stars </div>
                    <div class="col-md-6"> Number of users following </div>
                </div>
            </div>
        </div>
    
        // <!-- closes row -->
        </div>
        // <!-- closes container -->
        </div>
    
        </main>
        </div>
    </body>
    
    </html>`
}

module.exports = generateHTML;