import React from "react";
import UserItem from "./UserItem";

export default function UserList({ paginatedUsers }) {
  return (
    <div>
      {paginatedUsers && paginatedUsers.length > 0 ? (
        <ul className="grid gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-4 xl:col-span-2">
          {paginatedUsers?.map((user, index) => (
            <UserItem user={user} key={index} />
          ))}
        </ul>
      ) : (
        <p className="mt-10">검색 결과가 없습니다.</p>
      )}
    </div>
  );
}
