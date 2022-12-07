import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { publicRequest } from '../AxiosInstances';
import {
	consultAddPrecentage,
	consultNo,
	consultYes,
} from '../redux/consultReduces';

const Pertanyaan = () => {
	//Get Data from Redux
	const consult = useSelector((state) => state.consult);

	//Stored Fetched Data
	const [data, setData] = useState([]);

	//Initiate Question from redux
	const [question, setQuestion] = useState(consult.question);
	
	//Storing Fetching Error
	const [err, setErr] = useState(null);

	let navigate = useNavigate();
	let dispatch = useDispatch();

	//Fetching Data
	useEffect(() => {
		const getData = async () => {
			try {
				const res = await publicRequest.get(`/symptoms/${question[0]}`);
				setData(res.data.data);
			} catch (err) {
				setErr(err);
			}
		};
		getData();
	}, [question, setQuestion]);

	//Function which Handle Answer
	const Answer = (event) => {
		let answer = event.target.name;
		let nextQuestion = '';

		//Jika User Klik Iya
		if (answer === 'yes') {
			switch (consult.nextQuestion) {
				//Kalau Next Question Kosong, maka Pertanyaan selanjutnya leaf
				case '':
					if (data.leaf === null && data.fruit !== null) {
						dispatch(
							consultYes({
								symptom: question[0],
								disease: data.diseaseId,
								nextQuestion: 'fruit',
							})
						);
					} else if (data.leaf === null && data.fruit === null) {
						dispatch(
							consultYes({
								symptom: question[0],
								disease: data.diseaseId,
								nextQuestion: 'root',
							})
						);
					} else {
						dispatch(
							consultYes({
								symptom: question[0],
								disease: data.diseaseId,
								nextQuestion: 'leaf',
							})
						);
					}
					break;

				//Kalau Next Question leaf, maka Pertanyaan selanjutnya fruit
				case 'leaf':

					//Kalau Gejala pada fruit kosong & root tidak kosong
					if (data.fruit === null && data.root !== null) {
						dispatch(
							consultYes({
								symptom: question[0],
								disease: data.diseaseId,
								nextQuestion: 'root',
							})
						);

					// Kalau Gejala pada fruit kosong & root kosong
					} else if (data.fruit === null && data.root === null) {
						dispatch(consultAddPrecentage);
						navigate(`/hasil`);
					} else {
						dispatch(
							consultYes({
								symptom: question[0],
								disease: data.diseaseId,
								nextQuestion: 'fruit',
							})
						);
					}
					break;

				//Kalau Next Question fruit, maka Pertanyaan selanjutnya root
				case 'fruit':

					//Kalau Gejala pada root kosong
					if (data.root === null) {
						dispatch(consultAddPrecentage);
						navigate(`/hasil`);
					} else {
						dispatch(
							consultYes({
								symptom: question[0],
								disease: data.diseaseId,
								nextQuestion: 'root',
							})
						);
					}
					break;
				
				//Kalau Next Question root, maka Pertanyaan konsultasi selesai dan pindah halaman Hasil
				case 'root':
					dispatch(
						consultYes({
							symptom: question[0],
							disease: data.diseaseId,
							nextQuestion: 'end',
						})
					);
					navigate(`/hasil`);
					break;
				default:
					break;
			}

			//Jika User Menjawab Tidak
		} else if (answer === 'no') {

			//Jika Sudah Menjawab Iya pada Pertanyaan Batang lalu menjawab tidak
			if (consult.nextQuestion !== '') {
				switch (consult.nextQuestion) {

					//Kalau Next Question Kosong, maka Pertanyaan selanjutnya leaf
					case '':
						dispatch(
							consultNo({
								symptom: question[0],
								disease: data.diseaseId,
								nextQuestion: 'leaf',
							})
						);
						break;

					//Kalau Next Question leaf, maka Pertanyaan selanjutnya fruit
					case 'leaf':

						//Kalau Gejala pada fruit kosong & root tidak kosong
						if (data.fruit === null && data.root !== null) {
							dispatch(
								consultNo({
									symptom: question[0],
									disease: data.diseaseId,
									nextQuestion: 'root',
								})
							);

							//Kalau Gejala pada fruit & root kosong
						} else if (data.fruit === null && data.root === null) {
							dispatch(
								consultNo({
									symptom: question[0],
									disease: data.diseaseId,
									nextQuestion: 'fruit',
								})
							);
							navigate(`/hasil`);
						} else {
							dispatch(
								consultNo({
									symptom: question[0],
									disease: data.diseaseId,
									nextQuestion: 'fruit',
								})
							);
						}

						break;

					//Kalau Next Question fruit, maka Pertanyaan selanjutnya root
					case 'fruit':

						//Kalau Gejala pada root kosong
						if (data.root === null) {
							dispatch(
								consultNo({
									symptom: question[0],
									disease: data.diseaseId,
									nextQuestion: 'fruit',
								})
							);
							navigate(`/hasil`);
						} else {
							dispatch(
								consultNo({
									symptom: question[0],
									disease: data.diseaseId,
									nextQuestion: 'root',
								})
							);
						}
						break;

					//Kalau Next Question root, maka Pertanyaan konsultasi selesai dan pindah halaman riwayat
					case 'root':
						dispatch(
							consultNo({
								symptom: question[0],
								disease: data.diseaseId,
								nextQuestion: 'end',
							})
						);
						navigate(`/hasil`);
						break;
					default:
						break;
				}
			} else {
				//Jika Belum menjawab iya sebelumnya
				nextQuestion = question.slice(1);

				//Jika User menjawab Tidak dan pilihan penyakit sudah habis
				if (nextQuestion.length <= 0) {
					navigate(`/hasil`);
				} else {
					
					//Jika User menjawab Tidak dan pilihan penyakit masih ada
					setQuestion(nextQuestion);
				}
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
							? data.stem
							: consult.nextQuestion === 'leaf'
							? data.leaf
							: consult.nextQuestion === 'fruit'
							? data.fruit
							: consult.nextQuestion === 'root'
							? data.root
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
