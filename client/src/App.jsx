import './App.css';
import { useState } from 'react';
import { Input } from './Components/Input';
import { Header } from './Components/Header';
import { ResultList } from './Components/ResultList';
import axios from 'axios';

function App() {
  // individual address handled by input
  const [address, setAddress] = useState('');
  // collection of addresses, updated via removing addresses or 'add address' button on client
  const [addressList, setAddressList] = useState([]);
  // stores api payload data
  const [results, setResults] = useState('');
  // basic error handling for invalid characters
  const [errorToggle, setErrorToggle] = useState(false);

  const fetchCoordinates = async () => {
    const fetchResponse = await axios.post(
      'http://localhost:8888/coordinates',
      { addresses: addressList }
    );
    setResults(fetchResponse?.data);
  };

  const addressHandler = (input) => {
    if (!address.length || !input.length) {
      setErrorToggle(false);
    }
    setAddress(input);
  };

  const addAddress = (e) => {
    e.preventDefault();
    if (!validateAddress(address)) {
      setAddressList([...addressList, address]);
      setAddress('');
      if (errorToggle) setErrorToggle(false);
    } else {
      setErrorToggle(true);
    }
  };

  const validateAddress = (address) => {
    const invalidChars = [
      '!',
      '@',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '_',
      '+',
      '=',
      '{',
      '}',
      '[',
      ']',
      ':',
      ';',
      '"',
      '<',
      '>',
      '/',
      '?',
    ];

    const invalidCharsExist = invalidChars.every((char) => {
      if (address.includes(char)) return false;
      return true;
    });

    if (invalidCharsExist) {
      return false;
    }
    return true;
  };

  const removeAddress = (idx) => {
    setAddressList(addressList.filter((address, i) => idx !== i));
  };

  return (
    <div className='App h-screen bg-gradient-to-r from-turqoise to-soft-green'>
      <Header />
      {errorToggle ? (
        <p className='text-red-600 text-xs flex pl-10 my-2'>
          Address has invalid characters
        </p>
      ) : (
        <></>
      )}
      <div className='flex pl-10 w-screen my-2'>
        <form onSubmit={(e) => addAddress(e)} className='flex justify-between'>
          <div className='w-1/3'>
            <Input
              handleInput={(input) => addressHandler(input)}
              inputValue={address}
            />
          </div>
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
