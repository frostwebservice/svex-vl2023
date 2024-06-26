export const amplifyConfig = {
    aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION,
    aws_cognito_identity_pool_id: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
    aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
    aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
    aws_user_pools_web_client_id: process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID
  };
  
  export const auth0Config = {
    base_url: process.env.REACT_APP_AUTH0_BASE_URL,
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    issuer_base_url: process.env.REACT_APP_AUTH0_ISSUER_BASE_URL
  };
  
  export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
  };
  
  export const gtmConfig = {
    containerId: process.env.REACT_APP_GTM_CONTAINER_ID
  };
  
  export const mapboxConfig = {
    apiKey: process.env.REACT_APP_MAPBOX_API_KEY
  };
  