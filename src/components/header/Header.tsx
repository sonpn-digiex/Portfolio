import React from 'react'
import { Link } from 'react-router-dom'
import PAGE_ROUTES from '@utils/constants'
import { useLocalStorage } from 'usehooks-ts'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { TiThMenu } from 'react-icons/ti'

function Header() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true)

  const toggleTheme = () => {
    setDarkTheme((prevValue: boolean) => !prevValue)
  }
  const handleContact = () => {}

  return (
    <div className="flex justify-between items-center container m-auto py-2 px-4 md:px-0 pt-4 z-2">
      <div className="flex items-center justify-between text-2xl">
        <div className="block md:hidden cursor-pointer z-10">
          <TiThMenu className="text-white" />
        </div>
        <div className="button-border-hover hidden md:block">
          <Link to={PAGE_ROUTES.ABOUT_ME.ROOT} className="py-1 px-6">
            About me
          </Link>
        </div>
        <div className="button-border-hover hidden md:block">
          <Link to={PAGE_ROUTES.ABOUT_ME.ROOT} className="py-1 px-6">
            Portfolio
          </Link>
        </div>
        <div className="button-border-hover hidden md:block">
          <Link to={PAGE_ROUTES.ABOUT_ME.ROOT} className="py-1 px-6">
            Services
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 text-white z-10">
        <button onClick={handleContact} type="button">
          Contact me
        </button>
        <button onClick={toggleTheme} type="button">
          {isDarkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </div>
    </div>
  )
}

export default Header
