import './App.css';
import Navigation from './components/Navigation/Navigation';
import ActiveView from './components/ActiveView/ActiveView';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <ActiveView />
      </main>
    </div>
  );
}

export default App;
