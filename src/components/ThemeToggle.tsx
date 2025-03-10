import { useTheme } from "@/context/ThemeContext";
import { useMounted } from "@/hooks/useMounted";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ToggleContainer = styled.label<{ $customTheme: "dark" | "light" }>`
  width: 60px;
  height: 30px;
  background-color: ${(props) =>
    props.$customTheme === "dark" ? "#fff" : "#222"};
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
`;

const ToggleSlider = styled.div<{ $isDark: boolean }>`
  width: 25px;
  height: 25px;
  background-color: ${(props) => (props.$isDark ? "#333" : "#FFD700")};
  border-radius: 50%;
  position: absolute;
  left: ${(props) => (props.$isDark ? "5px" : "calc(100% - 30px)")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease, background-color 0.3s ease;
`;

const Icon = styled(FontAwesomeIcon)<{ $customTheme: "dark" | "light" }>`
  color: ${(props) => (props.$customTheme === "dark" ? "#FFD700" : "#333")};
  font-size: 14px;
`;

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const isMounted = useMounted();

  return (
    <ToggleContainer onClick={toggleTheme} $customTheme={isDark ? "dark" : "light"}>
      <ToggleSlider $isDark={isDark}>
        {isMounted && <Icon $customTheme={isDark ? "dark" : "light"} icon={isDark ? faMoon : faSun} />}
      </ToggleSlider>
    </ToggleContainer>
  );
}