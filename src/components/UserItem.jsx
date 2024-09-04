import React, { useState } from "react";
import email from "../assets/icon-email.png";
import phone from "../assets/icon-phone.png";
import UserModal from "./UserModal";

export default function UserItem({ user }) {
  const [openModal, setOpenModal] = useState(false);

  const handleModalClick = (e) => {
    // 모달 외부 클릭 시 클릭 이벤트 전파를 막음.
    e.stopPropagation();
  };

  return (
    <>
      <li
        className="w-full max-w-80 border border-orange-400 rounded-xl p-2 hover:bg-gradient-to-r from-orange-600 to-orange-300  hover:text-orange-50 hover:cursor-pointer text-overflow"
        onClick={() => setOpenModal(true)}
        role="button"
      >
        <div className="flex items-center gap-x-6 box-border truncate text-ellipsis">
          <img
            src={user.picture.large}
            alt="사용자 프로필 이미지"
            className="h-16 w-16 rounded-full border border-gray-300"
          />
          <div>
            <h3 className="text-base font-semibold leading-5 tracking-tight">
              {user.name.first} {user.name.last}
            </h3>
            <div className="flex gap-2 items-center my-1">
              <img className="w-4 h-3" src={email} alt="이메일" />
              <p className="text-xs font-semibold text-overflow">
                {user.email}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-4 h-4" src={phone} alt="전화번호" />
              <p className="text-xs font-semibold">{user.phone}</p>
            </div>
          </div>
        </div>
      </li>
      {openModal && (
        <>
          {/* 백드롭 레이어 */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpenModal(false)}
          ></div>

          {/* 모달 컴포넌트 */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div onClick={handleModalClick}>
              <UserModal user={user} setOpenModal={setOpenModal} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
