import React from 'react';

const PenyakitCard = (props) => {
	return (
		<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
			<article className="overflow-hidden rounded-lg shadow-lg">
				<h3>
					<img
						alt="Placeholder"
						className="block h-auto w-full"
						src="https://picsum.photos/600/400/?random"
					/>
				</h3>

				<header className="flex items-center justify-between leading-tight p-2 md:p-4">
					<h1 className="text-lg">
						<h3 className="no-underline hover:underline text-black">
							props.penyakit_title
						</h3>
					</h1>
				</header>
			</article>
		</div>
	);
};

export default PenyakitCard;
