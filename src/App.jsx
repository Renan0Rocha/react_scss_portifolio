import MainContent from './components/MainContent';
import Sidebar from './components/sidebar';

import './styles/components/app.scss';

function App() {
  return (
    <div id="portfolio">
      <h1>Renan Rocha</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
