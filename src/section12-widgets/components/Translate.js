import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Vietnam',
    value: 'vi',
  },
  {
    label: 'Japan',
    value: 'ja',
  },
  {
    label: 'Thailand',
    value: 'th',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown label="Select a Language" options={options} selected={language} onChange={setLanguage} />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
