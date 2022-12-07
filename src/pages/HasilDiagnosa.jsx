import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authRequest, publicRequest } from '../AxiosInstances';

const HasilDiagnosa = () => {
	//Get data from redux
	const consult = useSelector((state) => state.consult);

	//Store Data from fetch
	const [penyakit, setPenyakit] = useState({});

	//Store data which will be sent to result database
	const [savedData, setSavedData] = useState({
		disease: '',
		solution: '',
		presentage: '',
	});

	//Storing Fetching Error
	const [err, setErr] = useState(null);

	//Get Current Date
	const current = new Date();
	const date = `${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;

	let navigate = useNavigate();

	let presentage = Math.floor((consult.totalYes / consult.totalNo) * 100);

	//Fetch Data
	useEffect(() => {
		const getDataDisease = async () => {
			try {
				const resDisease = await publicRequest.get(
					`/diseases/${consult.disease}`
				);
				setPenyakit(resDisease.data.data);
				setSavedData({
					...savedData,
					disease: resDisease.data.data.name,
					solution: resDisease.data.data.solution,
					presentage: presentage,
				});
			} catch (error) {
				setErr({ ...err, disease: error });
			}
		};
		getDataDisease();
	}, []);

	const saveHandler = () => {
		authRequest.post('/results', savedData).then(() => {
			navigate(`/riwayat`);
		});
	};

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
					{Object.keys(penyakit).length === 0 ? (
						<></>
					) : (
						<>
							<h1 className="text-4xl font-bold text-indigo-900 text-center mb-4">
								Hasil Diagnosa
							</h1>
							<h1 className="text-sm text-indigo-900 text-center">
								Dibuat pada: {date}
							</h1>
							<div className="mt-16 mx-20 flex flex-col">
								<table className="text-lg text-left text-gray-500">
									<tbody>
										<tr className="bg-white border-b">
											<td className="py-4 px-6 font-bold">Nama Penyakit</td>
											<td className="py-4 px-6 font-bold text-red-500">
												{penyakit?.name}
											</td>
										</tr>

										<tr className="bg-white border-b">
											<td className="py-4 px-6 font-bold">Gejala</td>
											<td className="py-4 px-6">
												{penyakit?.symptom.stem !== null ? (
													<li>{penyakit.symptom.stem}</li>
												) : (
													<></>
												)}
												{penyakit?.symptom.leaf !== null ? (
													<li>{penyakit.symptom.leaf}</li>
												) : (
													<></>
												)}
												{penyakit?.symptom.fruit !== null ? (
													<li>{penyakit.symptom.fruit}</li>
												) : (
													<></>
												)}
												{penyakit?.symptom.root !== null ? (
													<li>{penyakit.symptom.root}</li>
												) : (
													<></>
												)}
											</td>
										</tr>

										<tr className="bg-white border-b">
											<td className="py-4 px-6 font-bold">Solusi</td>
											<td className="py-4 px-6">{penyakit.solution}</td>
										</tr>

										<tr className="bg-white border-b">
											<td className="py-4 px-6 font-bold">Presentase</td>
											<td className="py-4 px-6 text-red-500 font-bold">
												{presentage}%
											</td>
										</tr>
									</tbody>
								</table>
								<button
									onClick={saveHandler}
									className="bg-blue-500 mx-auto px-4 py-2 text-white text-sm rounded-md w-64 text-center mt-8"
								>
									Simpan Data
								</button>
							</div>
						</>
					)}
				</div>
			)}
		</>
	);
};

export default HasilDiagnosa;
