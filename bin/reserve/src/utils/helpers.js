/**
 * Generates a random string of a particular length
 *
 * @param {number} length
 * @returns {string}
 */
const generateRandomString = (length) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (let i = 0; i <= length ; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


const helpers = {
    generateRandomString: generateRandomString
};

module.exports = helpers;
