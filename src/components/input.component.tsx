import React, { useState } from 'react';
import {createLink} from "../services";
import validator from 'validator';
import './input.css';

const InputComponent = ({setInputValue}: any): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleOnClick = async () => {
    if(!value) return setError("Field is required");
    if(!validator.isURL(value)) return setError('Provide a valid url')
    setValue("");
    const shortUrl: any = await createLink(value.trim());
    setInputValue(shortUrl)
  }

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setError('')
    setValue(event.currentTarget.value);
  }

  return (
    <div className="input-container">
      <h1>URL <span>Shortener</span></h1>
        <div>
          <input
            type="text"
            placeholder="Paste a link to shorten it"
            value={value}
            onChange={handleOnChange}
          />
          <button onClick={handleOnClick}>shorten</button>
        </div>
        <div className="validation-error">{error}</div>
    </div>
  )
}

export default InputComponent
