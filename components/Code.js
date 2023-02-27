import React, {useEffect} from 'react'
import Prism from 'prismjs'

export default function Code(params) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
    const isInline = !params.children.includes('\n')
    if (isInline) {
      return (<code className={"language-js"}>{params.children}</code>)
    }
    else {
    return (
    <div className="Code">
      <pre>
        <div><code>{languageCodeToName[params.className]}</code></div>
        <hr/>
        <code className={params.className}>{params.children}</code>
      </pre>
    </div>
    )
    }
}

const languageCodeToName = {
    "language-js": 'JavaScript',
    "language-matlab": 'MATLAB',
    "language-py": 'Python',
    "language-cpp": 'C++',
}
