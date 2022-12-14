import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authRequest, publicRequest } from '../../AxiosInstances';

const EditGejala = () => {
	//stored input Value
	const [gejala, setGejala] = useState({});
	const { id } = useParams();

	const [status, setStatus] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await publicRequest.get(`/symptoms/${id}`);
				setGejala(res.data.data);
				setStatus(true);
			} catch (err) {
				setErr('Err');
				setStatus(false);
				setIsOpen(true);
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
			.put(`/symptoms/${id}`, gejala)
			.then(() => {
				navigate('/admin/manage');
			})
			.catch((error) => {
				setErr(error);
			});
	};

	return (
		<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<h2 className="mb-16 font-bold text-3xl text-indigo-900">
				Edit Data Gejala
			</h2>
			{isOpen && (
				<h4 className="text-red-500 font-thin mb-16 text-center">
					{err.message}
					<br />
					{err.name}
				</h4>
			)}
			{status ? (
				<div className="w-full bg-white rounded-l md:mt-0 sm:max-w-md xl:p-0 ">
					<form action="submit" className="flex flex-col gap-8">
						<div className="flex flex-col gap-2">
							<label
								htmlFor="disease"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Kode penyakit
							</label>
							<input
								type="text"
								name="disease"
								disabled
								value={`P000${id}`}
								onChange={(e) =>
									setGejala({ ...gejala, diseaseId: e.target.value })
								}
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label
								htmlFor="stem"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Gejala pada Batang
							</label>
							<input
								type="text"
								name="stem"
								placeholder=""
								value={gejala.stem}
								onChange={(e) => setGejala({ ...gejala, stem: e.target.value })}
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label
								htmlFor="leaf"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Gejala pada Daun
							</label>
							<input
								type="text"
								name="leaf"
								placeholder=""
								value={gejala.leaf}
								onChange={(e) => setGejala({ ...gejala, leaf: e.target.value })}
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label
								htmlFor="fruit"
								className="block mb-2 text-sm font-medium text-gray-900"
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
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label
								htmlFor="root"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Gejala pada Akar
							</label>
							<input
								type="text"
								name="root"
								placeholder=""
								value={gejala.root}
								onChange={(e) => setGejala({ ...gejala, root: e.target.value })}
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
							/>
						</div>

						<button
							type="submit"
							onClick={submitHandle}
							className="w-full text-white bg-indigo-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Edit Gejala
						</button>
					</form>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default EditGejala;
