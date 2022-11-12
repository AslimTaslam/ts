import { useState, useEffect } from "react";
import {
	useSearchUsersQuery,
	useLazyGetUserReposQuery,
} from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";
import { ReposCard } from "../components/ReposCard";
import "./HomePage.css";

function HomePage() {
	const [search, setSearch] = useState("");
	const [dropdown, setDropdown] = useState(false);
	const debounced = useDebounce(search);
	const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
	});

	const [fetchRepos, { isLoading: isReposLoading, data: repos }] =
		useLazyGetUserReposQuery();

	useEffect(() => {
		setDropdown(debounced.length > 3 && data?.length! > 0);
	}, [debounced, data]);

	const clickHandler = (username: string) => {
		fetchRepos(username);
		setDropdown(false);
	};

	return (
		<div>
			{isError ? (
				<p className="red-text text-darken-2">Something has terrebly wrong</p>
			) : null}
			<div className="row">
				<div className="input-field col s12">
					<input
						type="text"
						id="autocomplete-input"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<label htmlFor="autocomplete-input">Search user</label>
					{dropdown ? (
						<ul className="autocomplete-window z-depth-2">
							{isLoading ? (
								<li className="autocomplete-item">Loading...</li>
							) : null}
							{data?.map((user) => (
								<li
									className="autocomplete-item"
									key={user.id}
									onClick={() => clickHandler(user.login)}
								>
									{user.login}
								</li>
							))}
						</ul>
					) : null}
				</div>
			</div>
			<div className="container">
				{isReposLoading ? <p>Loading repos....</p> : null}
				{repos?.map((repo) => (
					<ReposCard repo={repo} />
				))}
			</div>
		</div>
	);
}

export default HomePage;
