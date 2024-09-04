import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserAPI } from "../api/api";
import UserList from "../components/UserList";
import SearchInput from "../components/SearchInput";
import SortButtons from "../components/SortButtons";
import Pagination from "../components/Pagenation";
import loadingImg from "../assets/loading.gif";

export default function User() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const users = await getUserAPI(navigate);
      setUserList(users);
      if (users) setLoading(false);
    };
    getUserData();
  }, []);

  // 검색할 이름 받기
  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
    setCurrentPage(1);
  };

  // 검색 함수
  const filterUsers = (users, searchName) => {
    return users.filter((user) =>
      `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(searchName.toLowerCase())
    );
  };

  // 정렬 함수
  const sortUsers = (users, sortOrder) => {
    return users.sort((a, b) => {
      const nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
      const nameB = `${b.name.first} ${b.name.last}`.toLowerCase();

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  };

  const filteredUsers = filterUsers(userList, searchName);
  const sortedUsers = sortUsers(filteredUsers, sortOrder);

  // 페이지네이션
  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  //

  return (
    <div className="flex flex-col items-center max-w-5xl container mx-auto p-5">
      <h1
        className="text-3xl mt-10 mb-4 hover:cursor-pointer"
        onClick={() => navigate("/newnop-task/")}
      >
        사용자 목록
      </h1>
      <div className="max-w-screen-sm px-1  flex flex-col justify-between container gap-1 items-center md:flex-row">
        <SearchInput
          searchName={searchName}
          handleSearchChange={handleSearchChange}
        />
        <SortButtons
          onSortAsc={() => setSortOrder("asc")}
          onSortDesc={() => setSortOrder("desc")}
        />
      </div>
      {loading ? (
        <>
          <img className="w-10 mt-3 mb-6" src={loadingImg} alt="로딩중" />
          <p>사용자 목록을 불러오고 있습니다.</p>
          <p>잠시만 기다려주세요.</p>
        </>
      ) : (
        <>
          <UserList paginatedUsers={paginatedUsers} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
