const test = QUnit.test;

function getApplicant(formData) {
    const haveFeet = formData.get('have-feet') === 'yes';
    const sweetFeet = parseInt(formData.get('sweet-feet'));

    const applicant = {
        name: formData.get('name'),
        haveFeet: haveFeet,
        destination: formData.get('destination'),
        season: formData.getAll('season'),
        sweetFeet: sweetFeet,

    };
    return applicant;

}

test('return completed form object', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'steve',
        haveFeet: true,
        destination: 'beach',
        season: ['summer', 'spring'],
        sweetFeet: 10,
    };

    const formData = new FormData(); 
    formData.set('name', expected.name);
    formData.set('have-feet', 'yes');
    formData.set('destination', expected.destination);
    formData.set('season', expected.season[0]);
    formData.append('season', expected.season[1]);
    formData.set('sweet-feet', '10');

    //Act 
    // Call the function you're testing and set the result to a const
    const applicant = getApplicant(formData);
    
    //Assert
    assert.deepEqual(applicant, expected);
});
