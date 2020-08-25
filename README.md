# Availabilities Chrome Client

Chrome extension client for Availabilities

## Getting started

### Prerequisites

* VueJS CLI 
* Google Calendar API enabled 

### Installation

Clone the repository:

```
git clone https://github.com/availabilities/availabilities-chrome.git
```

### Retrieving credentials

#### Calendar API id

Retrieve Client ID from the Google Calendar API console and replace it in your .env:
```
GOOGLE_CLIENT_ID=YOUR_ID
```

#### Extension key [ONLY DO THIS IF STARTING FROM SCRATCH]

Proceed to initial setup first and then come back to this section.

1. Go to chrome://extensions/ and enable Developer mode.

2. Click on "Pack extension..." and select the app/extension's `dist` directory and confirm.

3. Now you've got a .crx file and a .pem file. Back up the private key (.pem file)!
The extension mentioned can be used to get the same information. 

4. Copy and paste the key from the .pem file into a field in your .env file
```
"key"="YOUR_ID"
```

### Initial Setup

Install dependendencies

```
npm install
```

Build the application

```
npm run build:dev
```

Go to [chrome://extensions/](chrome://extensions/) and enable developer mode.

Click on "Pack extension..." and select the app/extension's `dist` directory and confirm.

Run the application

```
npm run watch:dev
```



### Additional resources

* [Obtaining id for development](https://stackoverflow.com/questions/23873623/obtaining-chrome-extension-id-for-development)
* [Generating pem file](https://stackoverflow.com/questions/21497781/how-to-change-chrome-packaged-app-id-or-why-do-we-need-key-field-in-the-manifest/21500707#21500707)
