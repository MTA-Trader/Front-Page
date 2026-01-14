import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastContainerContainer = props => {
    return <ToastContainer
        position="top-right"
        autoClose={false}
        hideProgressBar
        newestOnTop
        closeOnClick
        stacked
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme={"light"}
    />
}

export default ToastContainerContainer