export const msalConfig = {
    auth: {
      clientId: process.env.REACT_APP_CLIENT_ID || "Client ID not set",
      //authority: "https://ohmssb2c.b2clogin.com/ohmssb2c.onmicrosoft.com", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      authority: process.env.REACT_APP_AUTHORITY || "Authority not set",
      redirectUri: process.env.REACT_APP_REDIRECT_URI || "Redirect URI not set",
      knownAuthorities: [process.env.REACT_APP_DOMAIN] || "Authorities not set"
    },
    cache: {
      cacheLocation: "localStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
      loggerOptions: {
        loggerCallback: (level, message, containsPII) => {
          console.log(message);
        },
        logLevel: "Verbose",
      }
    }
  };

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["openid"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com"
};