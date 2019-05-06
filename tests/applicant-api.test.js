import applicantApi from '../src/applicant-api.js';
const test = QUnit.test;

QUnit.module('applicant-api');

applicantApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round trip application', (assert) => {
    testStorage.removeItem('applicants');

    const applicant = { name: 'tester' };

    applicantApi.save(applicant);
    const result = applicantApi.get();
    
    assert.deepEqual(result, applicant);
});

test('no applicants return empty array', (assert) => {
    testStorage.removeItem('applicants');
    const expected = [];

    const applicants = applicantApi.getAll();

    assert.deepEqual(applicants, expected);
});

test('two saves return an array with items', (assert) => {
    testStorage.removeItem('applicants');

    const applicant1 = { name: 'applicant1' };
    const applicant2 = { name: 'applicant2' };

    applicantApi.save(applicant1);
    applicantApi.save(applicant2);
    const result = applicantApi.get(applicant2.name);
    

    assert.deepEqual(result, applicant2);

});
