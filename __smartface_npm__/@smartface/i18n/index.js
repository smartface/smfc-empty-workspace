const dictionaries = {};

const defineLanguage = ( languageCode, dictionary ) => {
	dictionaries[ languageCode ] = dictionary;
};

const initialize = ( dictionaries ) => {
    dictionaries.forEach( ( dictionary ) => defineLanguage( dictionary.language, dictionary ) );

    return dictionaries.en;
};

export { initialize };