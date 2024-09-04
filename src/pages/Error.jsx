import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../assets/error.png";
import refresh from "../assets/refresh.png";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center max-w-5xl container mx-auto p-5">
      <img className="w-80 mt-36" src={error} alt="에러페이지" />
      <button
        className="mt-5 sm:h-12 px-3 py-1 border border-orange-400 rounded bg-orange-400 text-white text-xl hover:bg-orange-600 flex items-center gap-2"
        onClick={() => navigate("/")}
      >
        <img src={refresh} alt="새로고침" />
        <p>다시 불러오기</p>
      </button>
    </div>
  );
}
