const Voter = require("./../Schemas/VoterSchema");
const bcrypt = require("bcryptjs");
const secret = require("./../config/passwords").secret;
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const loginUser = (req, res) => {
  //   console.log(req.headers.cookie);
  //   console.log(req.body);
  //   console.log(req.cookies);
  //   res.set("Access-Control-Allow-Origin", "*");
  Voter.findOne({ username: req.body.username }).exec((err, voter) => {
    if (err) {
      //   console.log("here");
      res.json(err);
    } else if (!voter) {
      //bad username
      res.json({ error: "credentials not recognized" });
    } else {
      bcrypt.compare(req.body.password, voter.password, (err, match) => {
        if (err) res.send(err);
        else if (!match) {
          //bad password
          res.json({ error: "credentials not recognized" });
        } else {
          //   console.log(new Object(voter));
          // console.log(voter._doc);
          // console.log(
          //   Object.assign(
          //     {},
          //     { _id: voter._doc._id, username: voter._doc.username }
          //   )
          // );
          jwt.sign(
            Object.assign(
              {},
              { _id: voter._doc._id, username: voter._doc.username }
            ),
            secret,
            (err, token) => {
              if (err) res.send(err);
              else {
                //   console.log("here");
                //   console.log(String(token));
                //   res.setHeader(
                //     "Set-Cookie",
                //     cookie.serialize("jwt", String(token), {
                //       maxAge: 60 * 60 * 24 * 365.25,
                //       expires: 60 * 60 * 24 * 365.25
                //     })
                //   );
                // console.log("here");
                //   res.set("something", "nothing")
                // console.log(token);
                res.status(200).json({ token });
              }
            }
          );
        }
      });
    }
  });
};

module.exports = loginUser;
