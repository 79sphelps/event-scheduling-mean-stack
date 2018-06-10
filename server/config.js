// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'sphelps.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://sphelps:sphelps1@DS153460.mlab.com:53460/mean-rsvp',
    NAMESPACE: 'http://myapp.com/roles'   // from Auth0.com rules specification
  };
