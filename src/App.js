import { Route, Routes } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Currency from './components/Currency/Currency';
import CurrencyInfo from './components/CurrencyInfo/CurrencyInfo'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/table' element={<Currency />} />
          <Route path='/table/:id' element={<CurrencyInfo />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;