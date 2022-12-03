import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { publicRequest } from '../AxiosInstances';

const Pertanyaan = () => {
	//Storing Data
	const [data, setData] = useState([]);

	//Storing Fetching Error
	const [err, setErr] = useState(null);

	const { id } = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await publicRequest.get(`/symptoms/${id}`);
				setData(res.data.data);
				console.log(res.data);
			} catch (err) {
				setErr(err);
			}
		};
		getData();
	}, []);

	const Answer = (event) => {
		let answer = event.target.name;
		let nextQuestion = ""
		if (answer === 'yes') {
			nextQuestion = id.charAt(0)
			navigate(`/q/${nextQuestion}`)
		} else if (answer == 'no') {
			nextQuestion = id.substring(1)
			navigate(`/q/${nextQuestion}`)
		}
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex flex-col gap-24 justify-center items-center">
				{/* Questions */}
				{data.length <= 0 ? (
					<></>
				) : (
					<h3 className="text-4xl font-bold text-indigo-900">
						Apakah {data[0].stem} ?
					</h3>
				)}

				{/* Answer */}
				<div className="flex justify-center items-center gap-24">
					<button
						className="bg-green-500 text-white w-32 h-16 rounded-xl font-semibold hover:bg-green-600"
						name="yes"
						onClick={Answer}
					>
						Iya
					</button>
					<button
						className="bg-red-500 text-white w-32 h-16 rounded-xl font-semibold hover:bg-red-600"
						name="no"
						onClick={Answer}
					>
						Tidak
					</button>
				</div>
			</div>
		</div>
	);
};

export default Pertanyaan;
