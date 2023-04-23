/**
 *
 * Takes a list of phone numbers as string separated by comma
 * and return back the phone numbers in array format
 * @param phoneNumbers The phone numbers separated by comma
 * @returns Phone number list as string array
 */
export const getPhoneNumberArray = (phoneNumbers: string) => {
	const phoneNumbersArray = phoneNumbers.split(',').map((number) => {
		const phoneNumber = number.replace(/^\s+|\s+$/g, '');
		if (phoneNumber.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)) {
			return phoneNumber;
		}
		throw new Error('Invalid Phone Numbers');
	});

	return phoneNumbersArray;
};
