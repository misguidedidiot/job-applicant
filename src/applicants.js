import makeApplicantRow from './make-applicant-row.js';
import applicantApi from './applicant-api.js';

const tBody = document.getElementById('applicants');

const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    const tr = makeApplicantRow(applicant);
    tBody.appendChild(tr);
}