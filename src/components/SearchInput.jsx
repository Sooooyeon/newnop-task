import React from "react";

export default function SearchInput({ searchName, handleSearchChange }) {
  return (
    <input
      className="w-full max-w-sm border border-orange-400 rounded-xl p-2 rounded-xl bg-yellow-50 h-12 focus:outline-orange-400"
      type="text"
      placeholder="검색 할 이름을 입력해주세요."
      value={searchName}
      onChange={handleSearchChange}
    />
  );
}
