import { useContext } from 'react';
import MainContent from './components/mainContent.jsx';
import Sidebar from './components/sidebar.jsx';
import './styles/components/app.scss';
import { ThemeContext } from './context/themeContext.jsx';
import { FiSun, FiMoon } from "react-icons/fi";

function App() {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    
    <div id="portfolio" className={theme === 'dark' ? 'dark-body' : 'light-body'}>
      <div className="switch-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <button className='theme-icon' >{theme === 'dark' ? <FiMoon /> : <FiSun />}</button>
      </div>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
