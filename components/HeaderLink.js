export const h1Link = (props) => {
    return (
        <h1 id={props.id}>
            {props.children}
            {LinkButton(props.id)}
        </h1>
    )
}

export const h2Link = (props) => {
    return (
        <h2 id={props.id}>
            {props.children}
            {LinkButton(props.id)}
        </h2>
    )
}

export const h3Link = (props) => {
    return (
        <h3 id={props.id}>
            {props.children}
            {LinkButton(props.id)}
        </h3>
    )
}

export const h4Link = (props) => {
    return (
        <h4 id={props.id}>
            {props.children}
            {LinkButton(props.id)}
        </h4>
    )
}

export const h5Link = (props) => {
    return (
        <h5 id={props.id}>
            {props.children}
            {LinkButton(props.id)}
        </h5>
    )
}

export const h6Link = (props) => {
    return (
        <h6 id={props.id}>
            {props.children}
            {LinkButton(props.id)}
        </h6>
    )
}

const LinkButton = (id) => <a className="header-link" href={"#" + id}>{'\u{0001F517}'}</a>
