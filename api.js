const axios = require("axios");
require("dotenv").config();

const api = {
    getUser(username) {
        return axios
            .get('${ username }')
            .catch(err => {
                console.log("User not found");
            })
    },
    getStars(username) {
        return axios
            .get('${ username }')
            .then(response => {
                return (response.data)
                // Find the path for github stars and add it response.data
            })
    },
};

module.exports = api