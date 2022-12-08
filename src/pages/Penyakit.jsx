import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { publicRequest } from '../AxiosInstances';

const Penyakit = () => {
	//Storing Data Penyakit
	const [penyakit, setPenyakit] = useState(null);

	//Storing Fetching Error
	const [err, setErr] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await publicRequest.get(`/diseases/${id}`);
				setPenyakit(res.data.data);
			} catch (err) {
				setErr('Err');
			}
		};
		getData();
	}, []);

	return (
		<div className="flex flex-col gap-24 justify-center items-center mt-16">
			{/* Penyakit Thumbnail */}
			<img
				src={`http://localhost:5000/${penyakit?.image_url}`}
				alt=""
				className="w-[500px] h-64 rounded-xl object-cover"
			/>

			{/* Judul Penyakit */}
			<h3 className="text-3xl font-bold text-indigo-900">{penyakit?.name}</h3>

			{/* Answer */}
			<div className="flex justify-between w-full gap-24">
				<div className="basis-1/2">
					<h2 className="font-semibold text-2xl mb-8">Solusi</h2>
					<p>{penyakit?.solution}</p>
				</div>

				<div className="basis-1/2">
					<h2 className="font-semibold text-2xl mb-8">Gejala</h2>
					{penyakit === null ? (
						<></>
					) : (
						<div className="flex flex-col gap-4">
							{penyakit.symptom.stem !== null ? (
								<p className="w-full bg-yellow-500 text-white rounded-xl py-2 px-8 hover:bg-yellow-600 transition-all ease-in-out">
									{penyakit.symptom.stem}
								</p>
							) : (
								<></>
							)}
							{penyakit.symptom.leaf !== null ? (
								<p className="w-full bg-yellow-500 text-white rounded-xl py-2 px-8 hover:bg-yellow-600 transition-all ease-in-out">
									{penyakit.symptom.leaf}
								</p>
							) : (
								<></>
							)}
							{penyakit.symptom.fruit !== null ? (
								<p className="w-full bg-yellow-500 text-white rounded-xl py-2 px-8 hover:bg-yellow-600 transition-all ease-in-out">
									{penyakit.symptom.fruit}
								</p>
							) : (
								<></>
							)}
							{penyakit.symptom.root !== null ? (
								<p className="w-full bg-yellow-500 text-white rounded-xl py-2 px-8 hover:bg-yellow-600 transition-all ease-in-out">
									{penyakit.symptom.root}
								</p>
							) : (
								<></>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Penyakit;
