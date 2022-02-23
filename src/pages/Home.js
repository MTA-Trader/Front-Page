import { Container } from "reactstrap"

import Header from '../components/Header'
import Spacer from '../components/Spacer'
import Footer from "../components/Footer"

const HomePage = props => {
    return <Container style={{ maxWidth: "85rem" }}>
        <img className="full-width" style={{ marginBottom: "2rem", objectFit: "cover", height: "30rem" }} src="../../images/transamerica-pyramid.jpg" alt="Transamerica Pyramid" />
        <div>
            <Header>Who We Are</Header>
            Mortgage Trading Analytics, LLC (MTA) is a capital markets optimization shop, specializing in risk management and trading arbitrage with a focus on technology. Cultivating and creating various trading opportunities as well as analyzing multiple secondary marketing sales options allows MTA to bridge the gap between where you are and where you want to be.
            <br /><br />
            Designed to work in concert with banks, mortgage banks, warehouse banks, and hedge firms (replacing none and enhancing each), MTA leverages the vast experience of its principals as well as exciting new technologies and proprietary algorithms to create revenue streams, reduce leakage, and improve overall performance, streamlining the entire process and maximizing profitability.
            <br /><br />
            In addition to risk management and trading arbitrage, MTA is well-versed in strategic consulting services, specializing in problem detection and resolution. Previous assignments run the gamut: operational tuning, system build-outs, code reconciliation, financial modeling, forecasting, pipeline metrics, custom analytics, best-ex sales solutions, trade improvement, department creation.
        </div>
        <Spacer />
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            <img style={{ flexBasis: "auto", flexGrow: 1, minWidth: 0, maxWidth: "40rem" }} src="../../images/gains.png" alt="Gains" />
            <div style={{ flexBasis: "20rem", flexGrow: 2, padding: "1rem" }}>
                <Header>What We Do</Header>
                <Header sub>Proprietary Trading Models &#38; Arbitrage System</Header>
                Using exciting new technologies and proprietary algorithms, MTA has a unique approach to helping improve your pipeline hedge. G-Fee analysis allows you to know when a trade is cheap, when it's not, and by exactly how much. Investor-pricing strength-indicators let you see exactly how good a price you're getting, with whom, when, and how it sits relative to the GSEs. New processes and specialized securities allow you to expand your hedging options, generating new revenue streams and improving the current ones.
                <br /><br />
                <Header sub>Capital Markets Enhancement</Header>
                A policy and procedure review is where MTA starts, simplifying how things work and filling-in existing gaps. Restructuring margins and targeted volume generation allow for revenue maximization. Auditing the received execution allows leakage discovery, which is then remedied through various means. Hedge set-up, hedge company communication, margin call exposure... the list goes on and on, and so does the revenue improvement.
                <br /><br />
                <Header sub>Secondary Marketing Tune-Up</Header>
                Under the Capital Markets umbrella, Secondary Marketing is its own unique entity with its own set of requirements and complications. Setting pricing, pushing rate sheets, managing P&#38;L, regulating pull-through, renegotiating lock pricing, the list goes on and on. MTA has countless years of experience handling these complexities as well as unique approaches to some traditional complications.
                <br /><br />
                <Header sub>Post-closing Prioritization &#38; Warehouse Best-EX</Header>
                Delivering loans takes time, and that costs money. But how much money, and what's the best way to minimize the cost? Holding that file on your warehouse line costs money as well, and with multiple lines, each having different factors, knowing which one to use for which file can be a tedious and seemingly impossible task. MTA has proprietary modeling to let you see exactly what file will be the most costly and by how much, as well as where you should hold it and why, allowing you to prioritize your limited time and manpower, minimizing your additional costs.
                <br /><br />
                <Header sub>LOS Audit &#38; Optimization</Header>
                Your LOS system is the backbone of your operation, but they are huge, encompassing so many functions and features that a lot can be overlooked or simply glossed-over due to time and manpower constraints. Locks, pricing changes, extensions, renegotiations, margins, controls, workflow, pricing leakage: MTA has decades of experience setting-up and optimizing operating systems, allowing us to maximize your returns and streamline the entire process.
                <br /><br />
                <Header sub>Department Creation, Build-out, Restructure, Outsourcing</Header>
                Don't have a lock desk? Need your Secondary Marketing Department reorganized? Does Capital Markets need a tear-down and rebuild? MTA has done all of that. Or perhaps it's time to shrink them down and outsource a good bit of the process. MTA can do that too, helping you downsize or offload various capital markets processes... or just let us handle it for you.
            </div>
        </div>
        <Spacer />
        <div>
            <Header>Work With MTA</Header>
            <Header sub>Vendor Services</Header>
            Sign-up for a full-service vendor relationship with MTA and let us handle as much or as little as you need. Capital Markets tuning, bringing your trading in-house, managing your trading, margin controls, pricing restructure, arbitrage trades... we'll work with your current processes, vendors, and systems, improve upon them, and make your Secondary profitability our primary concern.
            <br /><br />
            <Header sub>Consulting Services</Header>
            Have a specific issue that you can't solve? Need some additional, specialized minds to work out a problem? Not sure you're ready for a full-time vendor relationship? Let MTA offer solutions.
            <br /><br />
            <Header sub>Subscription Services</Header>
            We offer access to unique and specialized tools to optimize your trades, enhance your analytics, and improve your bottom line.
            No time wasted retrieving and uploading data. MTA pulls, uploads, and disseminates everything to you and for you.
            All results are easily extractable in a user-friendly CSV format.
        </div>
        <img className="full-width" style={{ marginTop: "2rem", objectFit: "cover", height: "30rem" }} src="../../images/golden-gate-bridge.jpg" alt="SF Golden Gate Bridge" />
        <Footer />
    </Container>
}

export default HomePage