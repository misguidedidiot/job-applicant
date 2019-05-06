import applicantApi from './applicant-api.js';

// reference all the DOM elements we need to update
const name = document.getElementById('name');
const haveFeet = document.getElementById('have-feet');
const destination = document.getElementById('destination');
const season = document.getElementById('season');
const grossFeet = document.getElementById('gross-feet');

//get the applicant name
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');


// get our applicant from the api
const applicant = applicantApi.get(id);


// no applicant? no can do, head back to home page...
if(!applicant) {
    window.location = './';
}

// mediate data into the elements
name.textContent = applicant.name;
haveFeet.textContent = applicant.haveFeet;
destination.textContent = applicant.destination;
season.textContent = applicant.season;
grossFeet.textContent = applicant.grossFeet;
