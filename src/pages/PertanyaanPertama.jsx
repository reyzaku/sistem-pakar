import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { publicRequest } from '../AxiosInstances';
import { consultReset } from '../redux/consultReduces';

const PertanyaanPertama = () => {

	const consult = useSelector((state) => state.consult);

    //Storing Data
	const [data, setData] = useState([]);

    //Storing Fetching Error
	const [err, setErr] = useState(null);

    //Storing Checked State on Checkbox
    const [check, setCheck] = useState([])

    //Storing Value of Checked Checkbox
    const [question, setQuestion] = useState([])
    
	const dispatch = useDispatch()


    //Fetching First Data
	useEffect(() => {
		dispatch(consultReset())
		const getData = async () => {
			try {
				const res = await publicRequest.get(`/symptoms`);
				setData(res.data.data);
                if(check.length < 1) {
                    setCheck(new Array(res.data.data.length).fill(false))
                }
				console.log(res.data);
			} catch (err) {
				setErr('Err');
			}
		};
		getData();
	}, []);

    //Handling Checkbox
    const handleChange = (position) => {
        //Chanching Boolean of the Checkbox
        const updatedCheckedState = check.map((item, index) => 
            index === position ? !item : item
        );

        //Temporary Array for Storing value
        let temp = []

        //Changing Value of the array
        updatedCheckedState.map((item, index) => 
            item ? temp.push(data[index].id) : 
            console.log(`temp adalah ${temp}`)
            
        )

        setCheck(updatedCheckedState)
        setQuestion(temp)
    }

	return (
		<div className="flex flex-col gap-24 justify-center items-center mt-16">
			{/* Question Image */}
			<img
				src="https://picsum.photos/600/400/?random"
				alt=""
				className="w-[500px] h-64 rounded-xl object-cover"
			/>

			{/* Questions */}
			<h3 className="text-4xl font-bold text-indigo-900">
				Pilihlah Masalah pada batang padi yang sedang dialami
			</h3>

			<div className="grid grid-cols-3 gap-4">
                {err && <div>Rusak</div> }
				{data?.map((item, index) => (
					<div key={item.id}>
						<input
							className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
							type="checkbox"
							id="flexCheckDefault"
                            name={item.id}
                            value={item.id}
                            checked={check[index]}
                            onChange={() => handleChange(index)}
						/>
						<label
							className="form-check-label inline-block text-gray-800"
							for="flexCheckDefault"
						>
							{item.stem}
						</label>
					</div>
				))}
			</div>

			{/* Answer */}
			<div className="flex justify-center items-center gap-24">
				<Link to={`/q/${question.join("")}`} className="bg-green-500 text-white w-32 h-16 rounded-xl font-semibold hover:bg-green-600 flex justify-center items-center">
					Iya
				</Link>
			</div>
		</div>
	);
};

export default PertanyaanPertama;
