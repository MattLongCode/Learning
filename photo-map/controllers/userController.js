const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");

const clientId = process.env.OAUTH_CLIENT_ID;

const client = new OAuth2Client({ clientId });

const findOrCreateUser = async (token) => {
  const googleUser = await verifyAuthToken(token);
  const user = await checkIfUserExists(googleUser.email);
  return user ? user : createNewUser(googleUser);
};

const verifyAuthToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId,
    });
    return ticket.getPayload();
  } catch (err) {
    console.err(`Error verifying auth token`, err);
  }
};

const checkIfUserExists = async (email) => await User.findOne({ email }).exec();

const createNewUser = (googleUser) => {
  const user = {
    name: googleUser.name,
    email: googleUser.email,
    picture: googleUser.picture,
  };
  return new User(user).save();
};

module.exports = { findOrCreateUser };
