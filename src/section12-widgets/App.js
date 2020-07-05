import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'Who made this?',
    content: 'Son Nguyen',
  },
  {
    title: 'Where is him?',
    content: 'Tran Phu, Hoang Mai, Ha Noi, Viet Nam',
  },
  {
    title: 'What is his company?',
    content: 'SOLID',
  },
];

const options = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Green',
    value: 'green',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items} />
    <Search /> */}
      {/* <Dropdown
        selected={selected}
        onChange={setSelected}
        options={options}
      />
      <div style={{ color: selected.value }}>
        Selected color is
        {' '}
        {selected.label}
      </div> */}
      <Translate />
    </div>
  );
};

export default App;
