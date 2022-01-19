import React from 'react';

const Wallet = () => {
	return (
		<div class='bg-white dark:bg-gray-900'>
			<div class='container px-6 py-8 mx-auto'>
				<h1 class='flex items-center text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white'>
					<img className='w-7 h-7 mr-3' src='/images/eth_logo.svg' alt='Eth-logo' /> 0 ETH
				</h1>

				<p class='max-w-2xl mx-auto mt-2 text-center text-gray-500 xl:mt-6 dark:text-gray-300'>$0.00 USD</p>
				{/* 
				<div class='grid grid-cols-2 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-2'>
					<div class='w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700'>
						<p class='font-medium text-gray-500 uppercase dark:text-gray-300'>Free</p>

						<h2 class='text-5xl font-bold text-gray-800 uppercase dark:text-gray-100'>$0</h2>

						<p class='font-medium text-gray-500 dark:text-gray-300'>Life time</p>

						<button class='w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
							Start Now
						</button>
					</div>

					<div class='w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg'>
						<p class='font-medium text-gray-200 uppercase'>Premium</p>

						<h2 class='text-5xl font-bold text-white uppercase dark:text-gray-100'>$40</h2>

						<p class='font-medium text-gray-200'>Per month</p>

						<button class='w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80'>
							Start Now
						</button>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Wallet;
