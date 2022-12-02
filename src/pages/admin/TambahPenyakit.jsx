import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { publicRequest } from '../../AxiosInstances';

const TambahPenyakit = () => {
	//stored input Value
	const [penyakit, setPenyakit] = useState({});

	let navigate = useNavigate();

	//Send Value Handler
	const submitHandle = (e) => {
        e.preventDefault()
		publicRequest
			.post('/symptoms')
			.then(() => {
				navigate(`/admin/add/gejala`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h2 className='mb-16 font-bold text-3xl text-indigo-900'>Tambah Data Penyakit</h2>
			<div className="w-full bg-white rounded-l md:mt-0 sm:max-w-md xl:p-0 ">
				<form action="submit" className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<label
							for="disease"
							class="block mb-2 text-sm font-medium text-gray-900"
						>
							Nama Penyakit
						</label>
						<input
							type="text"
							name="disease"
							placeholder="kode_penyakit"
							onChange={(e) =>
								setPenyakit({ ...penyakit, name: e.target.value })
							}
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label
							for="stem"
							class="block mb-2 text-sm font-medium text-gray-900"
						>
							Solusi dari penyakit
						</label>
						<textarea
							type="text"
							name="stem"
                            rows={5}
							placeholder=""
							onChange={(e) =>
								setPenyakit({ ...penyakit, solution: e.target.value })
							}
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label
							for="file-upload"
							class="block mb-2 text-sm font-medium text-gray-900"
						>
							Gambar Penyakit
						</label>
						<div className="flex justify-center items-center border border-dashed py-8 border-gray-300 rounded-lg">
							<div>
								<div className="flex text-sm text-gray-600">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
									>
										<span>Upload a file</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
										/>
									</label>
									<p className="pl-1">or drag and drop</p>
								</div>
								<p className="text-xs text-gray-500">
									PNG, JPG, GIF up to 10MB
								</p>
							</div>
						</div>
					</div>
					<button
						type="submit"
                        onClick={submitHandle}
						class="w-full text-white bg-indigo-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						Selanjutnya
					</button>
				</form>
			</div>
		</div>
	);
};

export default TambahPenyakit;
