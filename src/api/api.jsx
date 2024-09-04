import axios from "axios";

// 사용자에게 오류 메시지를 표시하는 함수
const showErrorMessage = (message) => {
  alert(message);
};

export const getUserAPI = async (navigate) => {
  try {
    const res = await axios.get(`https://randomuser.me/api/?results=500`);

    // 요청이 잘못되었거나, 페이지를 찾을 수 없을 때
    if (res.status === 400 || res.status === 404) navigate("/error");

    if (res.status === 200) {
      // 요청이 성공했을 때
      return res.data.results;
    } else {
      // 서버가 200이 아닌 상태 코드를 반환했을 때
      console.error("서버 응답 오류:", res.status);
      showErrorMessage(
        "페이지를 불러오는데 실패했습니다. 잠시 후 다시 시도해 주세요."
      );
    }
  } catch (error) {
    // 서버와의 통신 오류 또는 기타 오류 발생 시
    if (error.response) {
      // 서버가 2xx 범위 외의 상태 코드를 반환했을 때
      console.error(
        "서버 응답 오류:",
        error.response.status,
        error.response.data
      );
      showErrorMessage(
        "서버에서 오류가 발생했습니다. 오류 코드: " +
          error.response.status +
          " 잠시 후 다시 시도해 주세요."
      );
      navigate("/error");
    } else if (error.request) {
      // 요청이 만들어졌으나 서버로부터 응답이 없을 때
      console.error("서버 응답 없음:", error.request);
      showErrorMessage(
        "서버로부터 응답이 없습니다. 네트워크 연결을 확인하고 다시 시도해 주세요."
      );
      navigate("/error");
    } else {
      // 요청 설정 중 발생한 오류
      console.error("요청 설정 오류:", error.message);
      showErrorMessage(
        "요청을 처리하는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
      );
      navigate("/error");
    }
  }
};
