import React from 'react'

const JobBoardComponent = ({ job: {company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools}, handleClick}) => {
    const tags = [role, level];

    if (tools) {
        tags.push(...tools);
      }
  
    if (languages) {
        tags.push(...languages);
    } 

    return (
        <div className = {`flex flex-col bg-white shadow-md mx-10 my-16 p-4 rounded lg:my-4 ${ featured && 'border-l-4 border-teal-500 border-solid'} lg:flex-row`}>
            <div>
                <img className = '-mt-16 mb-4 w-20 h-20 lg:my-0 lg:w-24 lg:h-24' src = { logo } alt = { company } />
            </div>
            <div className = 'flex flex-col justify-between ml-4'>
                <h3 className = 'font-bold text-teal-500 text-xl'> 
                { company } 
                { isNew && <span className = 'bg-teal-500 text-teal-100 text-sm font-bold uppercase m-2 py-1 px-2 rounded-full'> New! </span>} 
                { featured && <span className = 'bg-gray-800 text-white text-sm font-bold uppercase py-1 px-2 rounded-full'> Featured </span>} </h3>
                <h2 className = 'font-bold my-2 text-xl'> { position } </h2>
                <p className = 'text-gray-700'> { postedAt } &middot; { contract } &middot; { location } </p>
            </div>
            <div className = 'cursor-pointer flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0'>
                { tags ? tags.map((tag) => (
                    <span onClick = {() => handleClick(tag)} className = 'text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-8'> {tag} </span>
                )) : '' } 
            </div>
        </div>
    )
}

export default JobBoardComponent
