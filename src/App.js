import { Route, Routes } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Currency from './components/Currency/Currency';
import CurrencyItem from './components/CurrencyItem/CurrencyItem';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<CurrencyItem />} />
          <Route path='/table' element={<Currency />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;