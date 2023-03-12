import React, { useEffect } from 'react'
import Prism from 'prismjs'
import Image from 'next/image'

const repoUrl = 'https://raw.githubusercontent.com/cvhammond/'
const branch = 'main'

export default function Code(params) {
    const [code, setCode] = React.useState('')
    const [body, setBody] = React.useState('')
    useEffect(() => {
        Prism.highlightAll()
    }, [code])
    useEffect(() => {
        const loadRemote = async () => {
            console.log(body)
            if (!body.startsWith('@')) {setCode(body); return}
            let repo = body.split('/')[0].substring(1) + '/'
            let file = '/' + body.split('/')[1]
            console.log(repoUrl + repo + branch + file)
            let newBody = await fetch(repoUrl + repo + branch + file).then(res => res.text())
            setCode(newBody)
        }
        loadRemote()
    }, [body])
    const isInline = !params.children.includes('\n')
    if (isInline) {
        return (<code className={"language-js"}>{params.children}</code>)
    }
    else {
        const splitIndex = params.children.indexOf('&')
        const meta = params.children.substring(0, splitIndex)
        if(!body){
            setBody(params.children.substring(splitIndex + 1))
        }
        return (<>
            <div className="code-meta">
                <code className="language-text">{languageCodeToName[params.className] ?? params.className.replace('language-', '') ?? ''}</code>
                <Image
                    className="copy-button"
                    onClick={() => navigator.clipboard.writeText(params.children)}
                    src="/copy.svg" width={24} height={20}
                    alt="Copy to clipboard" />
            </div>
            <div className="code-title">
                {meta ?? ''}
            </div>
            <hr />
            <code className={params.className}>{code}</code>
        </>
        )
    }
}

const languageCodeToName = {
    "language-js": 'JavaScript',
    "language-matlab": 'MATLAB',
    "language-py": 'Python',
    "language-cpp": 'C++',
}
