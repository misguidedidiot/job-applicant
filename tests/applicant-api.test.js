import applicantApi from '../src/applicant-api.js';
const test = QUnit.test;

QUnit.module('applicant-api');

test('round trip application', (assert) => {
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

test('no applicants return empty array', (assert) => {
    localStorage.removeItem('applicants');
    const expected = [];

    const applicants = applicantApi.getAll();

    assert.deepEqual(applicants, expected);
});

test('two saves return an array with items', (assert) => {
    localStorage.removeItem('applicants');

    const applicant1 = { name: 'tester1' };
    const applicant2 = { name: 'tester2' };
    const expected = [applicant1, applicant2];

    applicantApi.save(applicant1);
    applicantApi.save(applicant2);

    const applicants = applicantApi.getAll();

    assert.deepEqual(applicants, expected);

});

