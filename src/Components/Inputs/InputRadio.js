import {useState} from 'react';

export const InputRadio = () => {
    const [selectedOption, setSelectedOption] = useState('male');
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
    return (
      <>
        <label>
          <input type="radio" value="male" checked={selectedOption === 'male'} onChange={handleChange}/> Male
        </label>
        <label>
          <input type="radio" value="Female" checked={selectedOption === 'Female'} onChange={handleChange}/> Female
        </label>
      </>
    );
  };