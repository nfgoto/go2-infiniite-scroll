if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config();
}

module.exports = {
    APPLICATION_ID: process.env.APPLICATION_ID,
    APPLICATION_SECRET: process.env.APPLICATION_SECRET,
    CALLBACK_URL: process.env.CALLBACK_URL,
    PORT: process.env.PORT
};