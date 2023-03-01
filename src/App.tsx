import {Header} from './components/HomePage/Header';
import {HomePage} from './components/HomePage/HomePage';
import {Route, Routes, Navigate} from 'react-router-dom';
import './styles/main.scss';
import {PageNotFound} from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="sections">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
