import './App.css';
import { useState } from 'react';
import { Input } from './Components/Input';
import { Header } from './Components/Header';
import { Result } from './Components/Result';
import axios from 'axios';

function App() {
  const [address, setAddress] = useState('');
  const [results, setResults] = useState('');

  const fetchCoordinates = async () => {
    const fetchResponse = await axios.get(
      `http://localhost:8888/coordinates/${address}`
    );
    setResults(fetchResponse?.data);
  };

  return (
    <div className='App'>
      <Header />
      <div>
        <Input handleInput={(input) => setAddress(input)} />
        <button onClick={() => fetchCoordinates()}>Get Coordinates</button>
      </div>
      <Result searchData={results} />
    </div>
  );
}

export default App;
