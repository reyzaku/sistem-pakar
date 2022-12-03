import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { publicRequest } from '../AxiosInstances';
import { consultYes } from '../redux/consultReduces';

const Pertanyaan = () => {
	//Storing Data
	const [data, setData] = useState([]);

	const consult = useSelector((state) => state.consult);

	const location = useLocation();
	const currentLocation = location.pathname.split('/')[1];

	//Storing Fetching Error
	const [err, setErr] = useState(null);

	const { id } = useParams();
	let navigate = useNavigate();
	let dispatch = useDispatch();

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
	}, [consult]);

	const Answer = (event) => {
		let answer = event.target.name;
		let nextQuestion = '';

		//Jika User Klik Iya
		if (answer === 'yes') {

			//Kalau Next Question Kosong, maka Pertanyaan selanjutnya leaf
			if (consult.nextQuestion === '') {
				dispatch(consultYes({ disease: id.charAt(0), nextQuestion: 'leaf' }));
				nextQuestion = id.charAt(0);
				if (currentLocation === 'q') {
					navigate(`/q2/${nextQuestion}`);
				} else {
					navigate(`/q/${nextQuestion}`);
				}

			//Kalau Next Question stem, maka Pertanyaan selanjutnya fruit
			} else if (consult.nextQuestion === 'leaf') {
				dispatch(consultYes({ disease: id.charAt(0), nextQuestion: 'fruit' }));
				nextQuestion = id.charAt(0);
				if (currentLocation === 'q') {
					navigate(`/q2/${nextQuestion}`);
				} else {
					navigate(`/q/${nextQuestion}`);
				}
			
			//Kalau Next Question fruit, maka Pertanyaan selanjutnya root
			} else if (consult.nextQuestion === 'fruit') {
				dispatch(consultYes({ disease: id.charAt(0), nextQuestion: 'root' }));
				nextQuestion = id.charAt(0);
				if (currentLocation === 'q') {
					navigate(`/q2/${nextQuestion}`);
				} else {
					navigate(`/q/${nextQuestion}`);
				}

			//Kalau Next Question root, maka Pertanyaan konsultasi selesai dan pindah halaman riwayat
			} else if (consult.nextQuestion === 'root') {
				dispatch(consultYes({ disease: id.charAt(0), nextQuestion: 'end' }));
				nextQuestion = id.charAt(0);
				navigate(`/riwayat`);
			}
		} else if (answer == 'no') {
			nextQuestion = id.substring(1);
			if(currentLocation === "q"){
				navigate(`/q2/${nextQuestion}`);
			} else {
				navigate(`/q/${nextQuestion}`);
			}
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
						Apakah{' '}
						{consult.nextQuestion === ''
							? data[0].stem
							: consult.nextQuestion === 'leaf'
							? data[0].leaf
							: consult.nextQuestion === 'fruit'
							? data[0].fruit
							: consult.nextQuestion === 'root'
							? data[0].root
							: ''}{' '}
						?
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
