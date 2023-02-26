
const jargonDictionary = (slug) => {
 const dictionary = {
    'ai': {link: 'artificial-intelligence', name: 'Artificial Intelligence'},
}
for (const key in dictionary) {
    if (dictionary[key] === slug) {
        delete dictionary[key]
        break
    }
}
return dictionary
}

export default jargonDictionary
