import React, { useState, useEffect } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  // Fetch accounts data from the API
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('http://localhost:5000/accounts');
        const data = await response.json();
        setAccounts(data.accounts || []); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToRecent = (account) => {
    if (!recentSearches.some((search) => search.id === account.id)) {
      setRecentSearches([...recentSearches, account]);
    }
  };

  const handleRemoveRecent = (id) => {
    setRecentSearches(recentSearches.filter((search) => search.id !== id));
  };

  const filteredAccounts = accounts.filter(account => 
    account.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search accounts..."
        className="search-input"
      />
      <div className="search-results">
        {filteredAccounts.map((account) => (
          <div key={account.id} className="account-item" onClick={() => handleAddToRecent(account)}>
            <p>{account.name} ({account.username})</p>
          </div>
        ))}
      </div>
      <div className="recent-searches">
        <h3>Recent Searches</h3>
        {recentSearches.map((search) => (
          <div key={search.id} className="recent-item">
            <p>{search.name} ({search.username})</p>
            <button onClick={() => handleRemoveRecent(search.id)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
