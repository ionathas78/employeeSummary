const axios = require("axios");
const Engineer = require("./lib/Engineer");

const _myGitHubAccessToken = "1a25e08c59656340753ca20819a746dda5c4a1a5";
const _GITHUBAPI_USER_ENDPOINT = `https://api.github.com/users/%NAME%`;

/**
 * Query the GitHub API to learn details on the user
 * @param {Text} userName GitHub user name
 */
function getGitUser(targetUser, targetArray) {
    let queryUrl = _GITHUBAPI_USER_ENDPOINT.replace("%NAME%", targetUser.additional);
    axios
    .get(queryUrl, {headers: {Authorization: _myGitHubAccessToken}})
    .then(data => {
        const responseData = data.data;
        const { login, id, node_id, avatar_url, email, url, html_url, type, site_admin } = responseData;

        // console.log(`From GitHub: ${login} (${email}) - Avatar: ${avatar_url} - URL: ${html_url}`)

        // userData = new UserInfo(login, avatar_url, email, html_url, type, site_admin);

        targetArray.push(new Engineer(targetUser.name, targetUser.id, targetUser.email, avatar_url, login));
        // return {
        //     login: login,
        //     id: id,
        //     avatarURL: avatar_url,
        //     email: email,
        //     apiURL: url,
        //     gitHubURL: html_url
        // };
    })
    .catch(err => {
        targetArray.push(new Engineer(targetUser.name, targetUser.id, targetUser.email, targetUser.avatarURL, targetUser.additional));
    });
};

module.exports = { getGitUser };
