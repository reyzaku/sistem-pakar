import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/AuthCall';

const Auth = () => {
	const [user, setUser] = useState({})
	const [error, setError] = useState("")
	const dispatch = useDispatch()

	const LoginHandle = (event) => {
		event.preventDefault();
		login(dispatch, user);
	};

	return (
		<div>
			<section class="">
				<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
						<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
								Masuk Sebagai Admin
							</h1>
							<form class="space-y-4 md:space-y-6" action="#">
								<div className='flex flex-col gap-4'>
									<label
										for="email"
										class="block mb-2 text-sm font-medium text-gray-900"
									>
										Email Admin
									</label>
									<input
										type="email"
										name="email"
										id="email"
										onChange={(e) =>
											setUser({ ...user, email: e.target.value })
										}
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										placeholder="admin@admin.com"
										required=""
									/>
								</div>
								<div>
									<label
										for="password"
										class="block mb-2 text-sm font-medium text-gray-900 "
									>
										Kata Sandi
									</label>
									<input
										type="password"
										name="password"
										id="password"
										onChange={(e) =>
											setUser({ ...user, password: e.target.value })
										}
										placeholder="••••••••"
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
										required=""
									/>
								</div>
								<button
									type="submit"
									onClick={LoginHandle}
									class="w-full text-white bg-indigo-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								>
									Masuk
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Auth;
