function fetchCountries(name) {
    const ENDPOINT = `https://restcountries.com/v3.1/name/${name}`;
    return fetch(`${ENDPOINT}?fields=name,capital,population,flags,languages`)
        .then((res) => res.json())       
};

export { fetchCountries };
