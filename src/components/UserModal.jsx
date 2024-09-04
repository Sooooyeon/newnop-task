import React from "react";
import email from "../assets/icon-email.png";
import phone from "../assets/icon-phone.png";

export default function UserModal({ user, setOpenModal }) {
  return (
    <div className="bg-white z-100 shadow-2xl rounded-2xl py-10 px-2 md:p-10">
      <div className="flex flex-col items-center gap-x-6 box-border">
        <img
          src={user.picture.large}
          alt="사용자 프로필 이미지"
          className="rounded-full border border-gray-300"
        />
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold leading-8 tracking-tight mt-6 mb-2">
            {user.name.first} {user.name.last}
          </h3>
          <div>
            <div className="flex gap-2 items-center my-1">
              <img className="w-4 h-3" src={email} alt="이메일" />
              <p className="text-sm md:text-lg font-semibold">{user.email}</p>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-4 h-4" src={phone} alt="전화번호" />
              <p className="text-sm md:text-lg font-semibold">{user.phone}</p>
            </div>
          </div>
        </div>
        <button
          className="w-44 sm:h-10 px-3 py-1 border border-orange-400 rounded bg-orange-400 text-white text-md hover:bg-orange-600 mt-5"
          onClick={() => setOpenModal(false)}
        >
          확인
        </button>
      </div>
    </div>
  );
  s;
}
