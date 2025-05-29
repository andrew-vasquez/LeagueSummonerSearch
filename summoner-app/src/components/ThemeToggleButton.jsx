import  { useState, useEffect } from "react";
import { IoSunny, IoMoon } from 'react-icons/io5';


const themes = ["light", "dark"];
export const ThemeToggleButton = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')){
            return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            return "dark"
        }
        return "light"
    })

    const toggleTheme = () => {
        const t = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', t);
        setTheme(t)
    }

    useEffect(() => {
        const userTheme = document.documentElement
        if (theme === 'light'){
            userTheme.classList.remove("dark")
        } else {
            userTheme.classList.add('dark')
        }
    }, [theme])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return isMounted ? (
        <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 dark:bg-zinc-600">
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${
              checked ? 'bg-slate-200 text-black' : ''
            } cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === 'light' ? <IoSunny /> : <IoMoon />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  ) 
};
