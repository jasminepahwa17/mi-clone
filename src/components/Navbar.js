import React from 'react'
import "../styles/nav.css";
import pkg from "../data/data.json"


const logo=pkg.logo;
const searchIcon=<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.475 20.15-6.25-6.25q-.75.625-1.725.975-.975.35-1.95.35-2.425 0-4.087-1.663Q3.8 11.9 3.8 9.5q0-2.4 1.663-4.063 1.662-1.662 4.062-1.662 2.4 0 4.075 1.662Q15.275 7.1 15.275 9.5q0 1.05-.375 2.025-.375.975-.975 1.65L20.2 19.45ZM9.55 14.225q1.975 0 3.35-1.362Q14.275 11.5 14.275 9.5T12.9 6.137q-1.375-1.362-3.35-1.362-2 0-3.375 1.362Q4.8 7.5 4.8 9.5t1.375 3.363q1.375 1.362 3.375 1.362Z"/></svg>
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <a href="/" >
                <img id="logoImage" src={logo} alt="Not"/>
            </a>
        </div>
            <a className='navlinks' href="/miphones">Mi Phones</a>
            <a className='navlinks' href="/redmiphones">Redmi Phones</a>
            <a className='navlinks' href="/tv">TV</a>
            <a className='navlinks' href="/laptops">Laptops</a>
            <a className='navlinks' href="/lifestyle">Fitness & Lifestyle</a>
            <a className='navlinks' href="/home">Home</a>
            <a className='navlinks' href="/audio">Radio</a>
            <a className='navlinks' href="/accessories">Accessories</a>

            <div className='searchBox'>
                <input type="text" name="search" placeholder="Search Products"/>{searchIcon}
            </div>
        </div>

    
  )
}

export default Navbar