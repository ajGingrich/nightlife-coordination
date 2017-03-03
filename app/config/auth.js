'use strict';

module.exports = {
    facebookAuth: {
        clientID: process.env.FACEBOOK_KEY,
        clientSecret: process.env.FACEBOOK_SECRET,
        //clientID: process.env.FACEBOOK_KEY,
        //clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitterAuth: {
        consumerKey: process.env.TWITTER_KEY,
        consumerSecret: process.env.TWITTER_SECRET,
        callbackURL: process.env.APP_URL + 'auth/twitter/callback'
    },
    googleAuth: {
        clientID: process.env.GOOGLE_KEY,
        clientSecret: process.env.GOOGLE_SECRET,
        //clientID: process.env.GOOGLE_KEY,
        //clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.APP_URL + 'auth/google/callback'
    }
};