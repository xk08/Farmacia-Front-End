let backendHost;

const applicationProfile = process.env.NODE_ENV;

console.log(applicationProfile);

switch (applicationProfile) {
  case 'development':
    backendHost = "http://localhost:8080";
    break;
  case 'heroku':
    backendHost = "https://farmacia-back-end.herokuapp.com";
    break;
}

export const API_ROOT = backendHost;