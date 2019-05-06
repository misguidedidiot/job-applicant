import getApplicant from './get-applicant.js';
import applicantApi from './applicant-api.js';

// reffrence needed DOM notes
const form = document.getElementById('flip-flop-applicant');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const applicant = getApplicant(formData);
    
    applicantApi.save(applicant);

    window.location = 'thank-you.html';
}); 


const feetRange = document.getElementById('gross-feet');
const feetDisplay = document.getElementById('feet');

feetRange.addEventListener('change', function() {
    feetDisplay.textContent = feetRange.value;
});


