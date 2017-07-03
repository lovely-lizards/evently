module.exports = {
  'appID' : '<your_app_identifier>',
  'appSecret' : '<your_app_secret>',
  'callbackUrl' : 'http://localhost:3000/auth/facebook/callback'
}

// TODO: Change these to environment variables instead

/* Legacy Notes: 

Facebok Auth Steps

1. You'll need Facebook developer account to get started. 
   If you don't have one upgrade your personal Facebook account to a Facebook Developer account now. 
   Skip this step, if you already have a developer account.

To enable Facebook authentication, we first need to create a Facebook App using the Facebook Developer Portal. 
https://developers.facebook.com/
Note down the App ID and App Secret, and specify the callback URL by going to Settings and specifying the Site URL in the Website section for the application. 
Also make sure to enter a valid email address for the Contact Email field. 
It is required to be able to make this app public and accessible by the public. 


2. Next, go to the Status & Review section and turn the slider to Yes to make the app public. 
We create a config file, fb.js, to hold this configuration information which will be needed to connect to Facebook.

Leave the callback url the same. You only need to add the AppID and AppSecret

*/