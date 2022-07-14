import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const IconBox = styled.div`
  position: absolute;
  right: 10%;
  top: 20px;
  display: flex;
`;

const IconArea = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

const I = styled.i`
  font-size: 18px;
`;

function Switches() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleDarkAtom = () => {
    console.log("click");
    setIsDark((prev) => !prev);
  };
  const navigate = useNavigate();

  return (
    <IconBox>
      <IconArea onClick={toggleDarkAtom}>
        <I className={isDark ? "fas fa-moon" : "fas fa-sun"}></I>
      </IconArea>
      <IconArea onClick={() => navigate(-1)}>
        <I className="fas fa-angle-left"></I>
      </IconArea>
    </IconBox>
  );
}

export default Switches;
