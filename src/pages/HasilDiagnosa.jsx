import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { publicRequest } from '../AxiosInstances';

const HasilDiagnosa = () => {
	//Get data from redux
	const consult = useSelector((state) => state.consult);

	//Store Data from fetch
	const [penyakit, setPenyakit] = useState({});
	const [gejala, setGejala] = useState({});

	//Storing Fetching Error
	const [err, setErr] = useState(null);

	//Fetch Data
	useEffect(() => {
		const getData = async () => {
			try {
				const res = await publicRequest.get(`/diseases/${consult.disease}`);
				setPenyakit(res.data.data);
				console.log(res.data.data)
			} catch (error) {
				setErr(error);
			}
		};
		getData();
	}, []);

	return (
		<>
			{consult.disease === '' ? (
				<div className="flex flex-col justify-center">
					<h4 className="text-center text-indigo-900 font-bold text-2xl mt-32">
						Maaf Penyakit yang anda cari tidak di temukan, silahkan coba kembali
					</h4>
					<div></div>
					<Link
						to={`/`}
						className="bg-blue-500 mx-auto px-4 py-2 text-white text-sm rounded-md w-64 text-center mt-8"
					>
						Kembali ke Dashboard
					</Link>
				</div>
			) : (
				<div className="mt-16">
					{penyakit === null ? (
						<></>
					) : (
						<>
							<h1 className="text-4xl font-bold text-indigo-900 text-center mb-4">
								Hasil Diagnosa
							</h1>
							<h1 className="text-sm text-indigo-900 text-center">
								Dibuat pada: {Date.now()}
							</h1>
							<div className="mt-16 mx-20">
								<table className="text-lg text-left text-gray-500">
									<tbody>
										<tr className="bg-white border-b">
											<td className="py-4 px-6 font-bold">Nama Penyakit</td>
											<td className="py-4 px-6 font-bold text-red-500">
												{penyakit?.name}
											</td>
										</tr>

										{/* <tr className="bg-white border-b">
											<td className="py-4 px-6 font-bold">Gejala</td>
											<td className="py-4 px-6">
												{penyakit?.symptom[0].stem !== null ? (
													<p>{penyakit.symptom[0].stem}</p>
												) : (
													<></>
												)}
												{penyakit?.symptom[0].leaf !== null ? (
													<p>{penyakit.symptom[0].leaf}</p>
												) : (
													<></>
												)}
												{penyakit?.symptom[0].fruit !== null ? (
													<p>{penyakit.symptom[0].fruit}</p>
												) : (
													<></>
												)}
												{penyakit?.symptom[0].root !== null ? (
													<p className="w-full bg-yellow-500 text-white rounded-xl py-2 px-8 hover:bg-yellow-600 transition-all ease-in-out">
														{penyakit.symptom[0].root}
													</p>
												) : (
													<></>
												)}
											</td>
										</tr> */}

										<tr className="bg-white border-b">
											<td className="py-4 px-6 font-bold">Solusi</td>
											<td className="py-4 px-6">{penyakit.solution}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</>
					)}
				</div>
			)}
		</>
	);
};

export default HasilDiagnosa;
