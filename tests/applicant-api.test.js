import applicantApi from '../src/applicant-api.js';
const test = QUnit.test;

QUnit.module('applicant-api');

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