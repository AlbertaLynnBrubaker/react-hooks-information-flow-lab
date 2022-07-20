import React from "react";

const Header = ( {isDarkMode, onDarkModeClick} )  => {

  const handleClick = () => {
    onDarkModeClick()
  }

  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={handleClick}>
        {!isDarkMode ? "Dark" : "Light"} Mode
      </button>
      </header>
  )
}

export default Header;