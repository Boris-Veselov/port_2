import React, { useEffect } from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label=""></span>Boris Veselov
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  // setContactSelected(false);
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
