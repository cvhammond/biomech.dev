import Link from 'next/link'

export default function MarkdownLink({ href, children }) {
    // check if internal link
    // if internal link, use next/Link
    // else use normal <a> tag with target="_blank" and rel="noopener noreferrer"
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
        return (
            <Link href={href}>
            {children}
            </Link>
        )
    }
    else {
    return(
        <>
        <a href={href} target="_blank" rel="noopener noreferrer">{children}
        {String.fromCodePoint(0x2197)}
        </a>
        </>
    )
    }
}
