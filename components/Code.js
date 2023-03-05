import React, { useEffect } from 'react'
import Prism from 'prismjs'
import Image from 'next/image'

export default function Code(params) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
    const isInline = !params.children.includes('\n')
    if (isInline) {
        return (<code className={"language-js"}>{params.children}</code>)
    }
    else {
        console.log(params)
        const splitIndex = params.children.indexOf('&')
        const meta = params.children.substring(0, splitIndex)
        const body = params.children.substring(splitIndex + 1)
        console.log(meta, body)
        return (<>
            <div className="code-meta">
                <code className="language-text">{languageCodeToName[params.className] ?? params.className.replace('language-', '') ?? ''}</code>
                <Image
                    className="copy-button"
                    onClick={() => navigator.clipboard.writeText(params.children)}
                    src="/copy.svg" width={24} height={20} />
            </div>
            <div className="code-title">
                {meta ?? ''}
            </div>
            <hr />
            <code className={params.className}>{body}</code>
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
