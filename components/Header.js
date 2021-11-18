//import Link API
import Link from 'next/link';

//Header component 
//Navbar that displays on the start page of the portfolio
const Header = () => {
    return (
    <div>
        <Link href="/">
            <a >HOME</a>
        </Link>
        <Link href="/about">
            <a > ABOUT </a>
        </Link>
        <Link href="/projects">
            <a > PROJECTS </a>
        </Link>
        <Link href="/contact">
            <a > CONTACT ME</a>
        </Link>
         {/**style jsx have no effect on elements inside a child component */}
        <style jsx> 
            {`
            div {
                padding: 2rem;
                background-color: green;
                width: 100%;
                position: fixed; 
                
            }
            a {
                text-decoration: none;
                margin: 3px 1.5rem;
                color: white;
                font-size: 1rem;
                font-family: Arial;
               
            }
            a :hover {
                text-decoration: none;
                color: blue;
            }
            `}
        </style>
    </div>
    );
}

export default Header;


