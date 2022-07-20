import './App.scss';
import Sidebar from './components/Sidebar';
import Card from './components/Card';

function App() {
  return (
    <div className='admin-panel'>
      <div className="admin-panel__content">
        <Sidebar />
        <Card />
      </div>
    </div>
  );
}

export default App;
