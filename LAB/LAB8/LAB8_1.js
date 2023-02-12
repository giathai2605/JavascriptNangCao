async function whereAmI(lat, lng) {
    try {
        const response = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log(`You are in ${data.city}, ${data.countryname}`);
    } catch (error) {
        console.error(error);
    }
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
