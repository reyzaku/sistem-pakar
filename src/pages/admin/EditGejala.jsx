import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authRequest, publicRequest } from '../../AxiosInstances';

const EditGejala = () => {
	//stored input Value
	const [gejala, setGejala] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await publicRequest.get(`/symptoms/${id}`);
				setGejala(res.data.data[0]);
			} catch (err) {
				setErr('Err');
			}
		};
		getData();
	}, []);

	const [err, setErr] = useState(null);

	let navigate = useNavigate();

	//Send Value Handler
	const submitHandle = (e) => {
		e.preventDefault();
		authRequest
			.put(`/symptoms/${gejala.id}`)
			.then(() => {
				navigate('/admin/manage');
			})
			.catch((err) => {
				setErr(err);
			});
	};

	return (
		<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<h2 className="mb-16 font-bold text-3xl text-indigo-900">
				Edit Data Gejala
			</h2>
			{Object.keys(gejala).length === 0 ? (
				<></>
			) : (
				<div className="w-full bg-white rounded-l md:mt-0 sm:max-w-md xl:p-0 ">
					<form action="submit" className="flex flex-col gap-8">
						<div className="flex flex-col gap-2">
							<label
								for="disease"
								class="block mb-2 text-sm font-medium text-gray-900"
							>
								Kode penyakit
							</label>
							<input
								type="text"
								name="disease"
								disabled
								value={`P000${gejala.diseaseId}`}
								onChange={(e) =>
									setGejala({ ...gejala, diseaseId: e.target.value })
								}
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label
								for="stem"
								class="block mb-2 text-sm font-medium text-gray-900"
							>
								Gejala pada Batang
							</label>
							<input
								type="text"
								name="stem"
								placeholder=""
								value={gejala.stem}
								onChange={(e) => setGejala({ ...gejala, stem: e.target.value })}
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label
								for="leaf"
								class="block mb-2 text-sm font-medium text-gray-900"
							>
								Gejala pada Daun
							</label>
							<input
								type="text"
								name="leaf"
								placeholder=""
								value={gejala.leaf}
								onChange={(e) => setGejala({ ...gejala, leaf: e.target.value })}
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label
								for="fruit"
								class="block mb-2 text-sm font-medium text-gray-900"
							>
								Gejala pada Buah
							</label>
							<input
								type="text"
								name="fruit"
								placeholder=""
								value={gejala.fruit}
								onChange={(e) =>
									setGejala({ ...gejala, fruit: e.target.value })
								}
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label
								for="root"
								class="block mb-2 text-sm font-medium text-gray-900"
							>
								Gejala pada Akar
							</label>
							<input
								type="text"
								name="root"
								placeholder=""
								value={gejala.root}
								onChange={(e) => setGejala({ ...gejala, root: e.target.value })}
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
							/>
						</div>

						<button
							type="submit"
							onClick={submitHandle}
							class="w-full text-white bg-indigo-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Tambah Gejala
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default EditGejala;
