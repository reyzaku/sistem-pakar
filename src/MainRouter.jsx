import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DaftarPenyakit from './pages/DaftarPenyakit';
import Homepage from './pages/Homepage';
import PertanyaanDiagnosis from './pages/PertanyaanDiagnosis';
import Penyakit from './pages/Penyakit';
import DaftarGejala from './pages/DaftarGejala';
import HasilDiagnosa from './pages/HasilDiagnosa';

const MainRouter = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Homepage />} />
			<Route path="/penyakit" element={<DaftarPenyakit />} />
			<Route path="/penyakit/penyakit" element={<Penyakit />} />
			<Route path="/gejala" element={<DaftarGejala />} />
			<Route path="/gejala/gejala" element={<Penyakit />} />
			<Route path="/konsultasi" element={<PertanyaanDiagnosis />} />
			<Route path="/hasil" element={<HasilDiagnosa />} />
			<Route path="/riwayat" element={<DaftarPenyakit />} />
		</Routes>
	);
};

export default MainRouter;
