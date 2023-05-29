export const RequiredFieldSpaceNotAllow = (field) => {
	if (!field || field === null ) {
		return 'Required *';
	} else if(field.match(/^\S.*[a-zA-Z\s]*$/)) {
		return 'true';
	} else{
		return 'Space Not Allow';
	}
};