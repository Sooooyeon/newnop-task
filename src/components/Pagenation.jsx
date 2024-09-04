import React from "react";

const generatePageButtons = (start, end, currentPage, handlePageChange) => {
  /**
   * Array.from 메서드를 사용해 페이지 번호에 해당하는 버튼을 동적으로 생성
   * 메서드 설명 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   */
  return Array.from({ length: end - start + 1 }, (_, index) => {
    const pageNumber = start + index;
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`px-3 py-1 mx-2 border border-orange-400 rounded ${
          currentPage === pageNumber
            ? "bg-orange-600 text-white"
            : "bg-yellow text-black"
        }`}
      >
        {pageNumber}
      </button>
    );
  });
};

export default function Pagination({
  totalPages,
  currentPage,
  handlePageChange,
}) {
  const pagesToShow = 5;

  // 현재 페이지를 기준으로 표시할 페이지의 시작과 끝을 계산
  let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  // 페이지 범위가 총 페이지 수를 벗어나지 않도록 조정
  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  return (
    <div className="mt-10 mb-5 flex items-center justify-center space-x-1">
      {/* 이전페이지 버튼 */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 border border-orange-400 rounded bg-orange-400 text-white disabled:opacity-50"
      >
        {"<"}
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className="px-3 py-1 mx-1 border border-orange-400 rounded bg-yellow-50 text-black"
          >
            1
          </button>
          {startPage > 2 && <span className="mx-1">...</span>}
        </>
      )}

      {/* 페이지 번호 버튼들 생성 및 렌더링 */}
      {generatePageButtons(startPage, endPage, currentPage, handlePageChange)}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="mx-1">...</span>}
          <button
            onClick={() => handlePageChange(totalPages)}
            className="px-3 py-1 mx-1 border border-orange-400 rounded bg-yellow-50 text-black"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* 다음페이지 버튼 */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 border border-orange-400 rounded bg-orange-400 text-white disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
}
