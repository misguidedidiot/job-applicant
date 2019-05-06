import applicantApi from './applicant-api.js';

const tBody = document.getElementById('applicants');

const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', applicant.name);
    link.href = 'applicant.html?' + searchParams.toString();
    link.textContent = applicant.name;
    nameCell.appendChild(link);
    tr.appendChild(nameCell);

    const haveFeetCell = document.createElement('td');
    haveFeetCell.textContent = applicant.haveFeet;
    tr.appendChild(haveFeetCell);

    const destinationCell = document.createElement('td');
    destinationCell.textContent = applicant.destination;
    tr.appendChild(destinationCell);

    const grossFeet = document.createElement('td');
    grossFeet.textContent = applicant.grossFeet;
    tr.appendChild(grossFeet);
    
    tBody.appendChild(tr);
}