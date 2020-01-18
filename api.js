const axios = require("axios");
require("dotenv").config();

const api = {
    getUser(username) {
        return axios
            .get('https://api.github.com/users/' + username)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log("User not found");
            })
    },
    getStars(username) {
        return axios
            .get('https://api.github.com/users')
            .then(response => {
                return (response);
                // Find the path for github stars and add it response.data
            })
    },
};

module.exports = api