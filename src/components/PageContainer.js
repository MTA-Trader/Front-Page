const PageContainer = props => {
    return <div style={{ display: "flex", justifyContent: "center", margin: "0 2rem 0 2rem" }}>
        <div style={{ maxWidth: "85rem" }}>
            {props.children}
        </div>
    </div>
}

export default PageContainer