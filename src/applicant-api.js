const applicantApi = {
    save(applicant) {
        const applicants = applicantApi.getAll();
        applicants.push(applicant);
        const json = JSON.stringify(applicants);
        localStorage.setItem('applicants', json);
    },
    get() {
        const applicants = applicantApi.getAll();
        
        return applicants[0];
    },
    getAll() {
        const json = localStorage.getItem('applicants');
        let applicants = JSON.parse(json);
        if(!applicants) {
            applicants = [];
        }
        
        return applicants;
    }
};

export default applicantApi;