const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');


passport.serializeUser((user, done)=>{
    done(null, user.id)
});

passport.deserializeUser((id, done)=>{
    User.findById(id)
    .then(user => {
        console.log(user);
        done(null, user);
    })
    .catch((err)=>{
        done(null, err);
    })
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done)=>{
        User.findOne({googleId: profile.id})
        .then((exitingUser)=>{
            if(exitingUser){
                // We already have a record
                console.log("User Exists");
                done(null, exitingUser)
            }
            else{
                new User({
                    googleId: profile.id
                })
                .save()
                .then(user=>done(null, user));
            }
        })
        .catch(err=>{
            console.log(err)
        })

        
    })
);