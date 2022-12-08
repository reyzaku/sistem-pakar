import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authRequest, publicRequest } from '../../AxiosInstances';

const EditPenyakit = () => {
	//stored input Value
	const [penyakit, setPenyakit] = useState({});

	const [isOpen, setIsOpen] = useState(false)

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

	const [err, setErr] = useState(null);

	let navigate = useNavigate();

	//Send Value Handler
	const submitHandle = (e) => {
		e.preventDefault();
		authRequest
			.put(`/diseases/${penyakit.id}`, penyakit, {
				headers: {
					'content-type': 'multipart/form-data',
				},
			})
			.then(() => {
				navigate(`/admin/manage`);
			})
			.catch((error) => {
				setErr(error);
				setIsOpen(true)
			});
	};

	return (
		<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<h2 className="mb-16 font-bold text-3xl text-indigo-900">
				Edit Data Penyakit
			</h2>
			{isOpen && (
				<h4 className="text-red-500 font-thin mb-16 text-center">
					{err.message}
					<br />
					{err.name}
				</h4>
			)}
			<div className="w-full bg-white rounded-l md:mt-0 sm:max-w-md xl:p-0 ">
				<form action="submit" className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<label
							htmlFor="disease"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Nama Penyakit
						</label>
						<input
							type="text"
							name="disease"
							placeholder="kode_penyakit"
							value={penyakit.name}
							onChange={(e) =>
								setPenyakit({ ...penyakit, name: e.target.value })
							}
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label
							htmlFor="stem"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Solusi dari penyakit
						</label>
						<textarea
							type="text"
							name="stem"
							rows={5}
							placeholder=""
							value={penyakit.solution}
							onChange={(e) =>
								setPenyakit({ ...penyakit, solution: e.target.value })
							}
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label
							htmlFor="file-upload"
							className="block mb-2 text-sm font-medium text-gray-900"
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
											onChange={(e) =>
												setPenyakit({
													...penyakit,
													image_url: e.target.files[0],
												})
											}
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
						className="w-full text-white bg-indigo-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						Selanjutnya
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditPenyakit;
