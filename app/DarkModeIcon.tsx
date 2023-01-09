import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/Bs";

function DarkModeIcon() {
  const { systemTheme, theme, setTheme } = useTheme(); // 다크모드 툴
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); // 다크모드떄 새로고침해도 태양모양 아이콘 유지시키려고

  const renderThemeChanger = () => {
    if (!mounted) return null; // 다크모드떄 새로고침해도 태양모양 아이콘 유지시킴

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

export default DarkModeIcon
