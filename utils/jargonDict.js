
const jargonDictionary = (slug) => {
 const dictionary = {
    'opensim': {link: 'introduction', name: 'OpenSim'},
    'simtk': {link: 'simtk', name: 'SimTK'},
    'simbody': {link: 'simbody', name: 'Simbody'},
    'os': {link: 'operating-system', name: 'Operating System'},
    'matlab': {link: 'matlab', name: 'MATLAB'},
    'python': {link: 'python', name: 'Python'},
}
for (const key in dictionary) {
    if (dictionary[key].link === slug) {
        delete dictionary[key]
        break
    }
}
return dictionary
}

export default jargonDictionary
