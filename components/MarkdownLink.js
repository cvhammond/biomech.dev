import Link from 'next/link'

export default function MarkdownLink({ href, children, ...props }) {
    // check if internal link
    // if internal link, use next/Link
    // else use normal <a> tag with target="_blank" and rel="noopener noreferrer"
    let linkType = 'external'
    if(href.startsWith('/') && !props.target==='_blank') {
        linkType = 'internal'
    }
    else if(href.startsWith('#')) {
        linkType = 'onPage'
    }

    switch(linkType) {
        case 'internal':
            return (
                <Link href={href} {...props}>
                {children}
                </Link>
            )
        case 'onPage':
            return (
                <Link className="onPage" href={href} {...props}>
                {children}
                </Link>
            )
        default:
            return(
                <>
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
        {String.fromCodePoint(0x2197)}
        </a>
        </>
            )
    }
}
