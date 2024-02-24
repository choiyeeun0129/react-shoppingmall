import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "sale",
    "지속가능성",
  ];
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.authenticate);

  const changeLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      console.log("we click this key", event.key);
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;
      console.log("keyword", keyword);
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div onClick={changeLogout} className="logout">
          <FontAwesomeIcon icon={faUser} />
          <span>로그아웃</span>
        </div>
      ) : (
        <div onClick={goToLogin} className="login">
          <FontAwesomeIcon icon={faUser} />
          <span>로그인</span>
        </div>
      )}

      {/* <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div className="loginMargin">로그인</div>
        </div>
      </div> */}

      <div className="logo">
        <img
          width={100}
          src="https://i.namu.wiki/i/OG5qxJZ2PG4F-HWeiPsKCCO4IuTLUlrDE3l8T1Cvmz3SSmS0Au9Jf6mM9OFCH-8GvY-pE8Q7x3uxYOJ3Tsx3YviwYGVOChutp_F6lPDj-TemA-QUhE54ikBRU8kj-O4iyKoXMKLmRwQ_DVPDtT55cA.svg"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <TextField
            id="standard-basic"
            label=""
            variant="standard"
            onKeyDown={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
