import { ACTIVEVIEW } from '../../Features/activeView'
import { useSelector } from 'react-redux';
import HomePage from '../HomeView/HomePage'
import AboutPage from '../AboutView/AboutPage'
import './ActiveView.css'

function ActiveView() {
    const activeView = useSelector(state => state.activeView.activeView);

    let content = null;

    if (activeView === ACTIVEVIEW.ABOUT) {
        content = <AboutPage />
    } else if (activeView === ACTIVEVIEW.PORTFOLIO) {
        content = 'PORTFOLIO PAGE'
    } else if (activeView === ACTIVEVIEW.CONTACT) {
        content = 'CONTACT PAGE'
    }else {
        content = <HomePage />
    }

    return (
        <div className="main-container">
            {content}
        </div>
    )
}

export default ActiveView
