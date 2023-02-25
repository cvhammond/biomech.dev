import React, {useEffect} from 'react'
import Prism from 'prismjs'

export default function Code(params) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
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

const languageCodeToName = {
    "language-js": 'JavaScript',
    "language-matlab": 'MATLAB',
    "language-py": 'Python',
    "language-cpp": 'C++',
}
