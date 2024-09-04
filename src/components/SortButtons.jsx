import React from "react";

export default function SortButtons({ onSortAsc, onSortDesc }) {
  return (
    <div className="flex gap-2 items-center mt-3 mb-4">
      <button
        className="sm:h-10 px-3 py-1 border border-orange-400 rounded bg-orange-400 text-white text-md hover:bg-orange-600"
        onClick={onSortAsc}
      >
        오름차순 정렬
      </button>
      <button
        className="sm:h-10 px-3 py-1 border border-orange-400 rounded bg-orange-400 text-white text-md hover:bg-orange-600"
        onClick={onSortDesc}
      >
        내림차순 정렬
      </button>
    </div>
  );
}
