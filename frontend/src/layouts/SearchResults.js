import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = ({ results, onLoadMore }) => {

  return (
    <>
      <table className="search-results-table ms-3">
        <tbody>
          {results.map((result) => {
            console.log('Result:', result);
            return (
              <tr key={result.id} className="search-result-row">
                <td className="image-cell">
                  <Link to={`/product-detail?productId=${result.id}`}>
                    <img src={`./images/items/${result.thumbnail}`} alt={`Thumbnail for ${result.title}`} style={{ height: '100px' }}/>
                  </Link>
                </td>
                <td className="info-cell mt-4">
                  <div className='title'>{result.title}</div>
                  <div className='price'>{result.price}.000.000đ</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={onLoadMore}>Load More</button>
    </>
  );
};

export default SearchResults;
