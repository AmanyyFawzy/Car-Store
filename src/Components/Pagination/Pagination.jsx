import React from 'react';
import './Pagination.modules.css'

export default function Pagination({ productPerPage, length, handlePagination }) {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / productPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <section className="pagination d-flex justify-content-center gap-2 mt-4">
      {paginationNumbers.map((pagNumber, indx) => (
        <button key={indx} onClick={() => handlePagination(pagNumber)} className="btn btn-outline-primary">
          {pagNumber}
        </button>
      ))}
    </section>
  );
}
