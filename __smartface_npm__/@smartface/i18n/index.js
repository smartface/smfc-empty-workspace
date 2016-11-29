const dictionaries = {};

const defineLanguage = ( languageCode, dictionary ) => {
	dictionaries[ languageCode ] = dictionary;
};

const initialize = ( dictionaries ) => {
    dictionaries.forEach( ( dictionary ) => defineLanguage( dictionary.language, dictionary ) );

    // TODO: handle other languages
    return dictionaries.filter( ( dictionary ) => dictionary['@code'] === 'en' );
};

export { initialize };