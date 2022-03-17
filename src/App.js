import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Currency from './components/Currency/Currency';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/table' element={<Currency />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
