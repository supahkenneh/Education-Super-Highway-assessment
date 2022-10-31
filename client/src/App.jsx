import './App.css';
import { useState } from 'react';
import { Input } from './Components/Input';
import { Header } from './Components/Header';
import { ResultList } from './Components/ResultList';
import axios from 'axios';

function App() {
  const [address, setAddress] = useState('');
  const [addressList, setAddressList] = useState([]);
  const [results, setResults] = useState('');

  const fetchCoordinates = async () => {
    const fetchResponse = await axios.post(
      'http://localhost:8888/coordinates',
      { addresses: addressList }
    );
    setResults(fetchResponse?.data);
  };

  const addAddress = (e) => {
    e.preventDefault();
    setAddressList([...addressList, address]);
    setAddress('');
  };

  const removeAddress = (idx) => {
    const addr = addressList[idx];
    setAddressList(addressList.filter((address) => address != addr));
  };

  return (
    <div className='App'>
      <Header />
      <div>
        {addressList.map((address, idx) => (
          <div key={idx}>
            <div>{address}</div>
            <button onClick={() => removeAddress(idx)}>➖</button>
          </div>
        ))}
      </div>
      <form onSubmit={(e) => addAddress(e)}>
        <Input
          handleInput={(input) => setAddress(input)}
          inputValue={address}
        />
        <button onClick={(e) => addAddress(e)}>Add Address</button>
      </form>
      <button onClick={() => fetchCoordinates()}>Get Coordinates</button>
      <ResultList searchData={results} />
    </div>
  );
}

export default App;
