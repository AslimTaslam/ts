import { useAppSelector } from "../hooks/redux";

function FavouritesPage() {
	const { favourites } = useAppSelector((state) => state.github);

	if (favourites.length === 0) {
		return <p> No items...</p>;
	}

	return (
		<div>
			<ul className="collection with-header">
				<li className="collection-header">
					<h4>Favourites</h4>
				</li>
				{favourites.map((f) => (
					<a
						className="collection-item"
						key={f}
						href={f}
						target="_blank">
						{f}
					</a>
				))}
			</ul>
		</div>
	);
}

export default FavouritesPage;
