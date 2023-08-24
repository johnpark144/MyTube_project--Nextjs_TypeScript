import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function DarkModeIcon() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

// 새로고침시 아이콘 유지
  useEffect(() => {
    setMounted(true);
  }, []); 

  const renderThemeChanger = () => {
    if (!mounted) return null; // 새로고침시 아이콘 유지

    const currentTheme = theme === "s" ? systemTheme : theme; // systemTheme은 항상 light (일반모드 light 디폴트)

    if (currentTheme === "dark") {
      // 다크모드인경우
      return (
        <button
          className={'h-12 p-2 mt-2 rounded-xl hover:ring-2 hover:ring-gray-300 bg-gray-200 dark:bg-gray-600'}
          onClick={() => setTheme("light")}
        >
          <BsFillSunFill />
        </button>
      );
    } else {
      // 일반모드인경우
      return (
        <button
          className={'h-12 p-2 mt-2 rounded-xl hover:ring-2 hover:ring-gray-300 bg-gray-200'}
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonFill />
        </button>
      );
    }
  };

  return (
    <>
      {renderThemeChanger()}
    </>
  )
}

export default DarkModeIcon;
