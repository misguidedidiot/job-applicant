import applicantApi from './applicant-api.js';

// reference all the DOM elements we need to update
const name = document.getElementById('name');
const haveFeet = document.getElementById('have-feet');
const destination = document.getElementById('destination');
const season = document.getElementById('season');
const sweetFeet = document.getElementById('sweet-feet');

// get our applicant from the api
const applicant = applicantApi.get();

// no applicant? no can do, head back to home page...
if(!applicant) {
    window.location = './';
}

// mediate data into the elements
name.textContent = applicant.name;
haveFeet.textContent = applicant.haveFeet;
destination.textContent = applicant.destination;
season.textContent = applicant.season;
sweetFeet.textContent = applicant.sweetFeet;
