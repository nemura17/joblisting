import React, { useState, useEffect } from 'react'
import JobBoardComponent from './components/JobBoardComponent'
import data from './assets/data.json'

function App() {

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterTags = ({ role, level, languages, tools }) => {
    
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return filters.every((filter) => tags.includes(filter));
  }

  const handleClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJobs = jobs.filter(filterTags);

  

  return (
    <div>
      <header className = 'bg-teal-500 mb-12'>
        <img className = 'w-full' src = '/images/bg-header-desktop.svg' alt = '' />
      </header>

      <div className = 'container m-auto'>
        {
          filters.length > 0 && (
            <div className = 'flex flex-wrap bg-white shadow-md -mt-20 z-10 relative mb-16 mx-10 p-6 rounded'>
              {filters.map(filter => (
                <span className = 'cursor-pointer font-bold mr-4 mb-6 lg:mb-0' onClick = {() => handleFilterClick(filter)}>
                  <span className = 'text-teal-500 bg-teal-100 rounded p-2'> {filter} </span>
                  <span className = 'bg-teal-500 text-teal-100 rounded p-2'> &#10005; </span>
                </span>
              ))}

              <button onClick = {clearFilters} className = 'font-bold text-gray-700 ml-auto'> Clear All </button>
            </div>
          )  
        }
        
        { jobs.length === 0 ? (
          <p> No jobs yet! </p>
        ) : (
          filteredJobs.map(job => (
            <JobBoardComponent handleClick = { handleClick } job = { job } key = { job.id } />
          ))
        ) }
      </div>

    </div>
  );
}

export default App;
