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

export default getApplicant;