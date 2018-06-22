export default {
  oidc: {
    clientId: '0oafj4ktyc4ETPRyP0h7',
    issuer: 'https://dev-235892.oktapreview.com/oauth2/default',
    redirectUri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email',
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
