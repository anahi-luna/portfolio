import './App.scss';
import { ContainerRow } from './components/ContainerRow';
import { useThemesContext } from './context/ThemeContext';

function App() {
  const {contextTheme}=useThemesContext();
  return (
    <div className="App light-theme" id={contextTheme} >
      <ContainerRow/>
    </div>
  );
}

export default App;
