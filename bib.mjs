

import fs from 'fs';
import path from 'path';

const parseNbib = (nbib) => {
    const lines = nbib.split('\n')
    let bibDict = {}
    let header = ''
    for (let line of lines) {
        line = line.replace(/\r/g, '')
        if (header === 'TI') {
            bibDict['title'] = bibDict['title'] + line.split('- ')[0].trim()
            header = line.split('- ')[0].trim()
            continue
        }
            header = line.split('- ')[0].trim()
        switch (header) {
            case 'FAU':
                if (!bibDict['fullauthor']) {
                    bibDict['fullauthor'] = []
                }
                bibDict['fullauthor'].push(line.split('- ')[1])
                break
            case 'TI':
                if (!bibDict['title']) {
                    bibDict['title'] = ''
                }
                bibDict['title'] = bibDict['title'] + line.split('- ')[1]
                break
            case 'JT':
                bibDict['journal'] = line.split('- ')[1]
                break
            case 'VI':
                bibDict['volume'] = line.split('- ')[1]
                break
            case 'DP':
                bibDict['date'] = line.split('- ')[1]
                break
            case 'PG':
                bibDict['pages'] = line.split('- ')[1]
                break
            case 'AID':
                bibDict['doi'] = line.split('- ')[1].replace('[doi]', '').trim()
                break
            default:
                break
    }
    }
    let bib = ''
    bib += '@article{' + bibDict.fullauthor[0].split(',')[0] + bibDict.date + ',\n'
    bib += 'title = {' + bibDict.title + '},\n'
    bib += 'journal = {' + bibDict.journal + '},\n'
    bib += 'volume = {' + bibDict.volume + '},\n'
    bib += 'year = {' + bibDict.date + '},\n'
    bib += 'pages = {' + bibDict.pages + '},\n'
    bib += 'doi = {' + bibDict.doi + '},\n'
    bib += 'author = {' + bibDict.fullauthor.join(' and ') + '},\n'
    bib += '}'
    return bib
}

const bibFiles = fs.readdirSync(path.join('bibliography'))
const stream = fs.createWriteStream(path.join('public', 'references.bib'))
for (let file of bibFiles) {
    let bib = ''
    if (file.endsWith('.bib')) {
        bib = fs.readFileSync(path.join('bibliography', file), 'utf8')
        console.log(bib)
    }
    if (file.endsWith('.nbib')) {
        bib = fs.readFileSync(path.join('bibliography', file), 'utf8')
        bib = parseNbib(bib)
        console.log(bib)
    }
    stream.write(bib + '\n')
}
stream.end()

