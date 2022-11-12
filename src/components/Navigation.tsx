import { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

function Navigation() {
	useEffect(() => {
		var sidenav = document.querySelectorAll(".sidenav");
		M.Sidenav.init(sidenav, {});
	}, []);

	return (
		<>
			<nav className="grey darken-1 navigation">
				<div className="nav-wrapper">
					<Link to="/" className="brand-logo">
						Logo
					</Link>
					<a href="#" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="right hide-on-med-and-down">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/favourites">Favourites</Link>
						</li>
					</ul>
				</div>
			</nav>

			<ul className="sidenav" id="mobile-demo">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/favourites">Favourites</Link>
				</li>
			</ul>
		</>
	);
}

export default Navigation;
