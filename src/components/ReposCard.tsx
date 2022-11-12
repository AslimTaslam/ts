import { useState, MouseEvent } from "react";
import { IRepo } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import "./ReposCard.css";

export function ReposCard({ repo }: { repo: IRepo }) {
	const { addFavourite, removeFavourite } = useActions();
	const { favourites } = useAppSelector((state) => state.github);
	const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

	const addToFavourite = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		addFavourite(repo.html_url);
		setIsFav(false);
	};
	const removeFromFavourite = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		removeFavourite(repo.html_url);
		setIsFav(true);
	};

	return (
		<div className="card horizontal repos-card">
			<div className="card-stacked">
				<a className="repos-link" href={repo.html_url} target="_blank">
					<div className="card-content">
						<span className="card-title">{repo.name}</span>
						<div>
							<span className="stat-card">Forks: {repo.forks}</span>
							<span className="stat-card">Watchers: {repo.watchers}</span>
						</div>
						<p>{repo.description}</p>
					</div>
				</a>
				<div className="card-action">
					{isFav ? (
						<button
							className="btn-floating waves-effect red"
							onClick={removeFromFavourite}
						>
							<i className="material-icons">delete</i>
						</button>
					) : (
						<button
							className="btn-floating waves-effect orange"
							onClick={addToFavourite}
						>
							<i className="material-icons">add</i>
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
