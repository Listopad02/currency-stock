import './App.css';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Routes> 
          <Route path="/" element={<Currency />} />
          <Route path="/currency/:id" element={<CurrencyInfo />} />
        </Routes> */}
      </Layout>
    </div>
  );
}

export default App;
