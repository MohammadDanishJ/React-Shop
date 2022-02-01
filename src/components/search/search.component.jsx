import React, { useState } from 'react';
import "./search.styles.scss";

const Search = ({ placeholder, data }) => {
  const [filteredData, setfilteredData] = useState([]);
  const [wordEntered, setwordEntered] = useState("");

  const handleFilter = e => {
    const searchWord = e.target.value;
    setwordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') return setfilteredData([]);
    return setfilteredData(newFilter);
  };

  return (
    <div className="prel search-box w100">
      <input
        className={`${wordEntered ? 'hasSearchWord' : ''} p12h w100`}
        type="search"
        placeholder={placeholder}
        value={wordEntered}
        onChange={handleFilter}
        spellCheck="false"
      />

      <div className="pabs dataResult w100">
        {
          // 20 best matches
          (filteredData.length != 0) ? (
            <div className='fl fl-d-cl w100'>
              {filteredData.slice(0, 20).map((value, key) => {
                return <a className='w100 p12h' key={key} href={`/shop/${value.id}`}>{value.name}</a>
              })}
            </div>
          ) : (wordEntered.length === 0 ? '' :
            <div className='fl fl-d-cl w100'>
              <div className="w100 p12h">No Match Found</div>
            </div>
          )}
      </div>

    </div>
  );
}

export default Search;
