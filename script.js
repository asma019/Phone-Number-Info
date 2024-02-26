function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const country = document.getElementById('country').value;

    const url = `https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp?number=${phoneNumber}&country=${country}`;

    fetch(url, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,  // Replace with your API key
            "X-RapidAPI-Host": "phonenumbervalidatefree.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
        const formattedOutput = `
            phoneNumberEntered: "${data.phoneNumberEntered}"
            defaultCountryEntered: "${data.defaultCountryEntered}"
            languageEntered: "${data.languageEntered}"
            countryCode: "${data.countryCode}"
            nationalNumber: "${data.nationalNumber}"
            extension: "${data.extension}"
            countryCodeSource: "${data.countryCodeSource}"
            italianLeadingZero: ${data.italianLeadingZero}
            rawInput: "${data.rawInput}"
            isPossibleNumber: ${data.isPossibleNumber}
            isValidNumber: ${data.isValidNumber}
            isValidNumberForRegion: ${data.isValidNumberForRegion}
            phoneNumberRegion: "${data.phoneNumberRegion}"
            numberType: "${data.numberType}"
            E164Format: "${data.E164Format}"
            originalFormat: "${data.originalFormat}"
            nationalFormat: "${data.nationalFormat}"
            internationalFormat: "${data.internationalFormat}"
            outOfCountryFormatFromUS: "${data.outOfCountryFormatFromUS}"
            outOfCountryFormatFromCH: "${data.outOfCountryFormatFromCH}"
            location: "${data.location}"
            timeZone_s: "${data.timeZone_s}"
            carrier: "${data.carrier}"
        `;

        document.getElementById('result').innerText = formattedOutput;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
