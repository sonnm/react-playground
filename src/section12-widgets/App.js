import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
  return null;
};

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
  return null;
};

const showDropdown = (selected, setSelected) => {
  if (window.location.pathname === '/dropdown') {
    return (
      <>
        <Dropdown
          label="Select a Color"
          selected={selected}
          onChange={setSelected}
          options={options}
        />
        <div style={{ color: selected.value }}>
          Selected color is
          {' '}
          {selected.label}
        </div>
      </>
    );
  }
  return null;
};

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
  return null;
};

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onChange={setSelected}
          options={options}
        />
        <div className="ui segment" style={{ color: selected.value }}>
          Selected color is
          {' '}
          {selected.label}
        </div>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
