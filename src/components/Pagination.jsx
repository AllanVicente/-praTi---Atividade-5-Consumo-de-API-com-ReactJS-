import React from "react";
import "./Pagination.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Anterior
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Próximo
      </button>
    </div>
  );
}
