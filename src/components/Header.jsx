import { NavLink, Outlet } from "react-router-dom";


const Header = () => {

	const links = <>
		 <li><NavLink to='/'>Home</NavLink></li>
		 <li><NavLink to='/addCoffee'>Add Coffee</NavLink></li>
		 <li><NavLink to='/signIn'>Sign In</NavLink></li>
		 <li><NavLink to='/users'>Users</NavLink></li>
		 <li><NavLink to='/signUp'>Sign Up</NavLink></li>
	</>
	return (
		<div>
			<div className="navbar text-white bg-gradient-to-l from-sky-900 to-rose-700 rounded-b-lg font-semibold">
				<div className="navbar-start">
					<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
						{links}
					</ul>
					</div>
					<a className="btn btn-ghost text-xl">COFFEE STORE</a>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
					{links}
					</ul>
				</div>

			</div>
			<Outlet/>
		</div>
	);
};

export default Header;