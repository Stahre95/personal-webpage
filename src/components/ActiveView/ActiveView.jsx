import { ACTIVEVIEW } from '../../Features/activeView'
import { useSelector } from 'react-redux';
import './ActiveView.css'

function ActiveView() {
    const activeView = useSelector(state => state.activeView.activeView);

    let content = null;

    if (activeView === ACTIVEVIEW.ABOUT) {
        content = 'ABOUT PAGE'
    } else if (activeView === ACTIVEVIEW.PORTFOLIO) {
        content = 'PORTFOLIO PAGE'
    } else if (activeView === ACTIVEVIEW.CONTACT) {
        content = 'CONTACT PAGE'
    } else if (activeView === ACTIVEVIEW.HOME) {
        content = 'HOME PAGE'
    } else {
        content = 'HOME PAGE'
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default ActiveView
