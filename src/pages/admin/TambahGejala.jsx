import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { publicRequest } from '../../AxiosInstances';

const TambahGejala = () => {
	//stored input Value
	const [gejala, setGejala] = useState({});

	let navigate = useNavigate();

	//Send Value Handler
	const submitHandle = (e) => {
        e.preventDefault()
		publicRequest
			.post('/symptoms')
			.then(() => {
				navigate('/gejala');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<div className="w-full bg-white rounded-l md:mt-0 sm:max-w-md xl:p-0 ">
				<form action="submit" className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<label
							for="disease"
							class="block mb-2 text-sm font-medium text-gray-900"
						>
							Kode Penyakit
						</label>
						<input
							type="text"
							name="disease"
							placeholder="kode_penyakit"
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
							onChange={(e) => setGejala({ ...gejala, fruit: e.target.value })}
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
		</div>
	);
};

export default TambahGejala;
