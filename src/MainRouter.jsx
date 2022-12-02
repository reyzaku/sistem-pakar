import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DaftarPenyakit from './pages/DaftarPenyakit';
import Homepage from './pages/Homepage';
import HomepageAdmin from './pages/admin/Homepage';
import Penyakit from './pages/Penyakit';
import DaftarGejala from './pages/DaftarGejala';
import HasilDiagnosa from './pages/HasilDiagnosa';
import RiwayatKonsultasi from './pages/RiwayatKonsultasi';
import Auth from './pages/admin/Auth';
import PertanyaanPertama from './pages/PertanyaanPertama';
import Pertanyaan from './pages/Pertanyaan';

const MainRouter = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Homepage />} />
			<Route path="/penyakit" element={<DaftarPenyakit />} />
			<Route path="/penyakit/:id" element={<Penyakit />} />
			<Route path="/gejala" element={<DaftarGejala />} />
			<Route path="/gejala/gejala" element={<Penyakit />} />
			<Route path="/konsultasi" element={<PertanyaanPertama />} />
			<Route path="/q/:id" element={<Pertanyaan />} />
			<Route path="/hasil" element={<HasilDiagnosa />} />
			<Route path="/riwayat" element={<RiwayatKonsultasi />} />

			{/* Admin Pages */}
			<Route path="/masuk" element={<Auth />} />
			<Route path="/admin" element={<HomepageAdmin />} />
			<Route path="/admin/rule" element={<RiwayatKonsultasi />} />
			<Route path="/admin/tambah/gejala" element={<RiwayatKonsultasi />} />
			<Route path="/admin/tambah/penyakit" element={<RiwayatKonsultasi />} />
		</Routes>
	);
};

export default MainRouter;
