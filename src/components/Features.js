import React from 'react';

function OneFeature({ img, topic, body }) {
	return (
		<div className='mr-4 bg-nature-100 dark:bg-nature-800 mb-8 lg:mb-0 rounded-2xl py-12 px-8 flex flex-col  items-center justify-center'>
			<div className='py-4 mb-1'>
				<img src={img} alt={topic} className='bg-cover' />
			</div>
			<span className='mb-1 font-semibold text-center text-lg text-gray-600 dark:text-norm-text py-2'>
				{topic}
			</span>
			<p className='mb-3 text-center py-2 font-dm-sans text-gray-400 dark:text-norm-light'> {body} </p>
			<div className='mt-3 flex items-center'>
				<button className='py-3 font-segoe-ui hover:cursor-pointer hover:bg-norm-black hover:border-none hover:text-white text-gray-800 dark:text-norm-text font-semibold  border-2 border-gray-200 px-7 rounded-2xl text-sm'>
					Buy Crypto
				</button>
			</div>
		</div>
	);
}

function Features() {
	return (
		<div className='bg-gray-white dark:bg-nature-900'>
			<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<div className='container mx-auto'>
					<h1 className='md:text-center text-left text-4xl lg:text-5xl dark:text-norm-text'>
						Start Saving crypto assets in seconds
					</h1>
					<p className='md:text-center text-left my-5 text-xl text-gray-500 dark:text-norm-light font-dm-sans '>
						We've got everything you need to start saving
					</p>
					<div className='grid grid-col-1 lg:grid-cols-3 my-8 mt-16 gap-x-8'>
						<OneFeature
							img='/images/feature.png'
							topic='Deposite & Withdraw Crypto'
							body='a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is'
						/>
						<OneFeature
							img='/images/feature2.png'
							topic='Transfer Coins'
							body=' a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is'
						/>
						<OneFeature
							img='/images/feature3.png'
							topic='Compond Staking'
							body='a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Features;
