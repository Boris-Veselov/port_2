import React from 'react';

const categories = [
    {
        name: "Projects",
        description:
        "my projects",
    },
    { 
        name: "Resume", 
        description: "my resume" 
    },
];

const handleClick = () => {
    console.log("click handled")
  }

function Nav() {
    return (
        <header>
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
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}>
                        <span onClick={() => { handleClick(); }}>
                            {(category.name)}
                        </span>
                        </li>
                    ))}
                    <li lassName={"mx-2"}>
                        <span onClick={() => handleClick()}>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
  
export default Nav;