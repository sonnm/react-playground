import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    // (async () => {
    //   const response = axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${term}`);
    // })();

    // axios
    //   .get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${term}`)
    //   .then((response) => {});
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => (
    <div key={result.pageid} className="item">
      <div className="right floated content">
        <a className="ui button" target="_blank" rel="noopener noreferrer" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
      </div>
      <div className="content">
        <div className="header">{result.title}</div>
        <div dangerouslySetInnerHTML={{ __html: result.snippet }} />
      </div>
    </div>
  ));

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
