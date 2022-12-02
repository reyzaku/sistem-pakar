import React from 'react';
import PenyakitCard from '../component/PenyakitCard';

const DaftarPenyakit = () => {
	return (
		<div className="container my-12">
			<div className="flex flex-wrap -mx-1 lg:-mx-4">
				<PenyakitCard/>
				<PenyakitCard/>
				<PenyakitCard/>
			</div>
		</div>
	);
};

export default DaftarPenyakit;
