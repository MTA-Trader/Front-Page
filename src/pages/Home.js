import PageContainer from "../components/PageContainer"
import Footer from "../components/Footer"

const HomePage = props => {
    return <PageContainer>
        <img className="full-width" style={{ objectFit: "cover", height: "30rem" }} src="../../images/transamerica-pyramid.jpg" alt="Transamerica Pyramid" />
        <div style={{ margin: "1rem 0 1rem 0" }}>
            {/* <h3 style={{ fontWeight: 600, textAlign: "center" }}>Who We Are</h3> */}
            Mortgage Trading Analytics, LLC (MTA) is a capital markets optimization shop, specializing in risk management and trading arbitrage with a focus on technology. Cultivating and creating various trading opportunities as well as analyzing multiple secondary marketing sales options allows MTA to bridge the gap between where you are and where you want to be.
            <br />
            <br />
            Designed to work in concert with banks, mortgage banks, warehouse banks, and hedge firms (replacing none and enhancing each), MTA leverages the vast experience of its principals as well as exciting new technologies and proprietary algorithms to create revenue streams, reduce leakage, and improve overall performance, streamlining the entire process and maximizing profitability.
            <br />
            <br />
            In addition to risk management and trading arbitrage, MTA is well-versed in strategic consulting services, specializing in problem detection and resolution. Previous assignments run the gamut: operational tuning, system build-outs, code reconciliation, financial modeling, forecasting, pipeline metrics, custom analytics, best-ex sales solutions, trade improvement, department creation.
        </div>
        {/* <img className="full-width" style={{ objectFit: "cover", height: "30rem" }} src="../../images/golden-gate-bridge.jpg" alt="SF Golden Gate Bridge" /> */}
        <Footer />
    </PageContainer>
}

export default HomePage