import React from 'react';

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
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Projects</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
  
export default Nav;