import React from "react";
import { useQueryParams } from '../hooks/useQueryParams';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { setParam } = useQueryParams();

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setParam('page', pageNumber);
      onPageChange(pageNumber);
      // Smooth scroll to top for better UX
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const buildPageNumbers = () => {
    const pageElements = [];
    const maxVisiblePages = 5;

    // Calculate the range of pages to show
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust if we're near the end
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Show first page if not in range
    if (startPage > 1) {
      pageElements.push(
        <button
          key={1}
          onClick={() => goToPage(1)}
          className="page-btn"
          aria-label="Go to page 1"
        >
          1
        </button>
      );

      // Add ellipsis if there's a gap
      if (startPage > 2) {
        pageElements.push(
          <span key="ellipsis-start" className="ellipsis">...</span>
        );
      }
    }

    // Add the visible page numbers
    for (let i = startPage; i <= endPage; i++) {
      pageElements.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`page-btn ${i === currentPage ? 'active' : ''}`}
          aria-label={`Go to page ${i}`}
          aria-current={i === currentPage ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }

    // Show last page if not in range
    if (endPage < totalPages) {
      // Add ellipsis if there's a gap
      if (endPage < totalPages - 1) {
        pageElements.push(
          <span key="ellipsis-end" className="ellipsis">...</span>
        );
      }

      pageElements.push(
        <button
          key={totalPages}
          onClick={() => goToPage(totalPages)}
          className="page-btn"
          aria-label={`Go to page ${totalPages}`}
        >
          {totalPages}
        </button>
      );
    }

    return pageElements;
  };

  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="pagination-container">
      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={isFirstPage}
          className="nav-btn prev-btn"
          aria-label="Go to previous page"
        >
          ← Previous
        </button>

        <div className="page-numbers">
          {buildPageNumbers()}
        </div>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={isLastPage}
          className="nav-btn next-btn"
          aria-label="Go to next page"
        >
          Next →
        </button>
      </div>

      <div className="pagination-info">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
