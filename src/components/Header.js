const Header = props => {
    const { sub } = props
    return !sub ?
        <h1 style={{ fontWeight: 900, color: "Navy" }}>{props.children}</h1>
        :
        <h5 style={{ fontWeight: 600, color: "#005" }}>{props.children}</h5>
}

export default Header