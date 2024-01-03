# SAKARYA UNIVERSITY
## FACULTY OF COMPUTER AND INFORMATICS
### COMPUTER ENGINEERING

**Course Name:** Mobile Application Development  
**Course Instructor:** Instructor AHMET ŞANSLI  
**Application Name:** Stock Market App  
**Prepared by:** Ömer Tufan Ayhan – B191210012

## Purpose
Stock Market App is a mobile application that allows users to track their crypto assets, create portfolios, and monitor the prices of these assets. Its main objectives are as follows:
- Provide users with a user-friendly interface displaying a comprehensive list of crypto assets.
- Enable users to create and manage their personal portfolios.
- Offer secure authentication and different authorizations with administrator-user roles.

## Technologies
Stock Market App has been developed using React Native. Cloud-based services like Firebase are utilized for authentication and database management. React Native ensures smooth operation of the application on both iOS and Android platforms.

## Recommendations and Improvements
Suggestions for further development of the application include:
- Integration of more crypto asset data.
- Adding graphical representations for users to analyze their portfolios in more detail.

## Conclusion
Stock Market App provides users with significant convenience in tracking crypto assets, thanks to its user-friendly interface and various features. The aim is to expand the user base and enhance the application further based on feedback received during the development process.

## Application Features
1. **Crypto Asset List:** The application presents users with real-time prices and changes of different crypto assets through charts with various date options.

2. **Portfolio Creation and Monitoring:** Users can create their portfolios through the application and track the performance of these assets.

3. **Watchlists:** Users can add their favorite assets to watchlists for easier monitoring.

4. **Authentication and Authorization:** The application offers authentication features to ensure secure login and distinguish between different user roles.

## Technical Documentation
- **Firebase Config File:** It's crucial to follow [Firebase Authentication Documentation](https://firebase.google.com/docs/auth).

- **Flatlist Usage:** Loading continues as the user reaches every 50+1 data.

- **Authentication Usage:** `src/LoginScreen/index.jsx` contains visuals related to Firebase Authentication.

## Recoil Usage
For tracking crypto portfolios, users can follow them in the Portfolio screen by fetching current data from the API with cryptocurrency identifiers stored in local storage (localStorage).

## Installation and Usage
To run the application, follow these steps:
- Clone the repository.
- Install dependencies using `npm install`.
- Run the application using `npm start`.
  
You can find the Turkish version and images under the `docs` folder.
