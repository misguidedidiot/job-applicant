import applicantApi from './applicant-api.js';

const tBody = document.getElementById('applicants');

const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('tr');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const haveFeetCell = document.createElement('tr');
    haveFeetCell.textContent = applicant.haveFeet;
    tr.appendChild(haveFeetCell);

    const destinationCell = document.createElement('tr');
    destinationCell.textContent = applicant.destination;
    tr.appendChild(destinationCell);

    const grossFeet = document.createElement('tr');
    grossFeet.textContent = applicant.grossFeet;
    tr.appendChild(grossFeet);
    
    tBody.appendChild(tr);
}