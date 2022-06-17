import React from 'react';

function Nav(props) {
const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    } = props;

const handleClick = (item) => {
    console.log(item);
    return item;
  };

    return (
        <header className='flex-row mx-2'>
            <h3>
                <a href='/'>
                    <span role='img' aria-label=''></span> Boris Veselov
                </a>
            </h3>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handleClick()}>
                            About me
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick('Projects')}>Projects</span>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick('Resume')}>Resume</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                            }`}
                            key={category.name}
                        >
                        <span
                            onClick={() => {
                            setCurrentCategory(category)
                            }}>
                        </span>
                        </li>
                    ))}
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick('Contact')}>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
  
export default Nav;