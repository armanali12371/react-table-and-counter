import * as React from 'react';


const Pagination = ({ postPerPage, TotalPosts }) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(TotalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }
    return (
       <nav>
           <ul>
               {pageNumbers.map(i => (
                   <li key={i} className = 'page-item'>
                       <a href="!#" className="page-link">
                       {i}
                       </a>
                   </li>
               ))}
           </ul>
       </nav>
    )
}
export default Pagination;