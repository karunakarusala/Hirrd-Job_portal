import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../ui/button'

function NavBar() {
  const navItems = [
    { path: '/', title: 'Start a Search' },
    { path: '/myJobs', title: 'My Jobs' },
    { path: '/salary', title: 'Salary Estimate' },
    { path: '/postJob', title: 'Post a Job' }
  ]

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-gray-100 z-50 font-dmSans sm:flex gap-2 py-4">
        <nav className="flex px-8 py-4">
          <Link to="/about" className="flex gap-2 ">
            <img
              className="w-18 h-14 mt-2 text-black"
              src="/images/hirrd_logo2.png"
              alt="Logo"
            />
            <span className="py-4 text-xl sm:md font-medium">HIRRD Job Portal</span>
          </Link>
          <div className="my-4 mx-48 md:flex items-center justify-center gap-8">
            {navItems.map(({ path, title }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {title}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-3 my-2 ml-52 lg-block">
            <Button className="bg-#f0f0f0 border-solid border-2 rounded-sm" variant="outline">
              login
            </Button>
            <Button className="bg-blue-400" variant="outline">
              signup
            </Button>
          </div>
          {/* <div className="md:hidden block">
            <Button>hello</Button>
          </div> */}
        </nav>
      </header>

      {/* Content wrapper below navbar with padding-top */}
      <div className="pt-20">
        {/* The rest of your content here */}
        <div>Right</div>
        {/* Add other components here */}
      </div>
    </div>
  )
}

export default NavBar
