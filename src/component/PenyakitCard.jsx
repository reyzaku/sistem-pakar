import React from 'react';
import { Link } from 'react-router-dom';

const PenyakitCard = (props) => {
	return (
		<Link to={`/penyakit/${props.data.name.split(" ").join("").toLowerCase()}`} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
			<article className="overflow-hidden rounded-lg shadow-lg">
				<h3>
					<img
						alt="Placeholder"
						className="block h-auto w-full"
						src={props.data.image_url}
					/>
				</h3>

				<header className="flex items-center justify-between leading-tight p-2 md:p-4">
					<h1 className="text-lg">
						<h3 className="no-underline hover:underline text-black">
							{props.data.name}
						</h3>
					</h1>
				</header>
			</article>
		</Link>
	);
};

export default PenyakitCard;
