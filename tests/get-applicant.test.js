import getApplicant from '../src/get-applicant.js';
const test = QUnit.test;




test('return completed form object', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'steve',
        haveFeet: true,
        destination: 'beach',
        season: ['summer', 'spring'],
        grossFeet: 10,
    };

    const formData = new FormData(); 
    formData.set('name', expected.name);
    formData.set('have-feet', 'yes');
    formData.set('destination', expected.destination);
    formData.set('season', expected.season[0]);
    formData.append('season', expected.season[1]);
    formData.set('gross-feet', '10');

    //Act 
    // Call the function you're testing and set the result to a const
    const applicant = getApplicant(formData);
    
    //Assert
    assert.deepEqual(applicant, expected);
});