function getApplicant(formData) {
    const haveFeet = formData.get('have-feet') === 'yes';
    const grossFeet = parseInt(formData.get('gross-feet'));

    const applicant = {
        name: formData.get('name'),
        haveFeet: haveFeet,
        destination: formData.get('destination'),
        season: formData.getAll('season'),
        grossFeet: grossFeet,

    };
    return applicant;
}

export default getApplicant;