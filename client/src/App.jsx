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
    setAddressList(addressList.filter((address, i) => idx !== i));
  };

  return (
    <div className='App h-screen bg-gradient-to-r from-turqoise to-soft-green'>
      <Header />
      <div className='flex pl-10 w-screen my-2'>
        <form
          onSubmit={(e) => addAddress(e)}
          className='w-1/3 flex justify-between'
        >
          <Input
            handleInput={(input) => setAddress(input)}
            inputValue={address}
          />
          <button className='btn-primary' onClick={(e) => addAddress(e)}>
            Add Address
          </button>
        </form>
        <button className='btn-primary' onClick={() => fetchCoordinates()}>
          Get Coordinates
        </button>
      </div>
      <div className='flex pl-10 my-5'>
        {addressList.map((address, idx) => (
          <div
            key={idx}
            className='flex mr-5 border-2 border-gray-600 rounded-md px-5 py-1 w-1/6 justify-between'
          >
            <div className='self-start'>{address}</div>
            <button onClick={() => removeAddress(idx)}>❌</button>
          </div>
        ))}
      </div>
      <ResultList searchData={results} />
    </div>
  );
}

export default App;
