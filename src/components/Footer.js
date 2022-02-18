import { Card } from 'reactstrap'

const Footer = props => {
    return <Card style={{ margin: "2rem 0 2rem 0", backgroundColor: "#F8F8FF" }} >
        <div style={{ display: "flex", justifyContent: "space-evenly", color: "#273746", padding: "0.5rem" }}>
            <div>
                <div>Mortgage Trading Analytics, LLC</div>
                <div>100 Elena Circle / San Rafael, CA 94903</div>
            </div>
            <div>
                <div>(628) 237-6058</div>
                <div>jsheadel@mta-trader.com</div>
            </div>
        </div>
    </Card>
}

export default Footer