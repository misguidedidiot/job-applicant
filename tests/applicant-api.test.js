const test = QUnit.test;

QUnit.module('applicant-api');

const applicantApi = {
    save(applicant) {
        const json = JSON.stringify(applicant);
        localStorage.setItem('applicant', json);
    },
    get() {
        const json = localStorage.getItem('applicant');
        const applicant = JSON.parse(json);
        return applicant;
    }

};

test('round trip applicant', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const applicant = { name: 'tester' };
 

    //Act 
    // Call the function you're testing and set the result to a const
    applicantApi.save(applicant);
    const result = applicantApi.get();
    
    //Assert
    assert.deepEqual(result, applicant);
});