import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
import { MdAccountBalanceWallet as WalletIcon, MdArrowRightAlt as RigthArrowAlt } from 'react-icons/md';

const MobileNav = ({ show, setShow }) => {
	return (
		<>
			<div
				className={
					show
						? 'w-full h-full absolute z-40  transform  translate-x-0 '
						: '   w-full h-full absolute z-40  transform -translate-x-full'
				}
				id='mobile-nav'
			>
				<div
					className='bg-gray-800 opacity-50 absolute h-full w-full lg:hidden'
					onClick={() => setShow(!show)}
				/>
				<div className='absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full'>
					<div className='flex flex-col justify-between h-full w-full'>
						<div>
							<div className='flex items-center justify-between px-8'>
								<div className='w-full h-16 flex items-center py-3 px-8'>
									<Link to='/'>
										<Logo />
									</Link>
								</div>
								<div
									id='closeSideBar'
									className='flex items-center justify-center h-10 w-10'
									onClick={() => setShow(!show)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='icon icon-tabler icon-tabler-x'
										width={20}
										height={20}
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path stroke='none' d='M0 0h24v24H0z' />
										<line x1={18} y1={6} x2={6} y2={18} />
										<line x1={6} y1={6} x2={18} y2={18} />
									</svg>
								</div>
							</div>
							<ul className=' py-6'>
								<li className='py-1  px-3'>
									<Link
										to='/'
										className='flex items-center rounded-md pl-2 py-2 text-white bg-glitz-300'
									>
										<WalletIcon className='w-6 h-6 mr-4' />
										<span className='text-base font-dm-sans font-normal  tracking-wider capitalize'>
											Wallet
										</span>
									</Link>
								</li>
								<li className='py-1 px-3'>
									<Link
										to='/'
										className='flex items-center rounded-md pl-2 py-2 text-nature-700 hover:bg-nature-50'
									>
										<RigthArrowAlt className='w-6 h-6 mr-4' />
										<span className='text-base font-dm-sans font-normal  tracking-wider capitalize'>
											Transfer
										</span>
									</Link>
								</li>
								{/* <li className='pl-6 cursor-pointer text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none'>
									<div className='flex items-center'>
										<div className='w-6 h-6 md:w-8 md:h-8'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-grid'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' />
												<rect x={4} y={4} width={6} height={6} rx={1} />
												<rect x={14} y={4} width={6} height={6} rx={1} />
												<rect x={4} y={14} width={6} height={6} rx={1} />
												<rect x={14} y={14} width={6} height={6} rx={1} />
											</svg>
										</div>
										<span className='ml-2 xl:text-base md:text-2xl text-base'>Dashboard</span>
									</div>
								</li>
								<li className='pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
									<div className='flex items-center'>
										<div className='w-6 h-6 md:w-8 md:h-8'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-puzzle'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' />
												<path d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1' />
											</svg>
										</div>
										<span className='ml-2 xl:text-base md:text-2xl text-base'>Products</span>
									</div>
								</li>
								<li className='pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
									<div className='flex items-center'>
										<div className='w-6 h-6 md:w-8 md:h-8'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-compass'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' />
												<polyline points='8 16 10 10 16 8 14 14 8 16' />
												<circle cx={12} cy={12} r={9} />
											</svg>
										</div>
										<span className='ml-2 xl:text-base md:text-2xl text-base'>Performance</span>
									</div>
								</li>
								<li className='pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
									<div className='flex items-center'>
										<div className='w-6 h-6 md:w-8 md:h-8'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-code'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' />
												<polyline points='7 8 3 12 7 16' />
												<polyline points='17 8 21 12 17 16' />
												<line x1={14} y1={4} x2={10} y2={20} />
											</svg>
										</div>
										<span className='ml-2 xl:text-base md:text-2xl text-base'>Deliverables</span>
									</div>
								</li> */}
							</ul>
						</div>
						<div className='w-full'>
							<div className='border-t border-gray-300'>
								<div className='w-full flex items-center justify-between px-6 pt-1'>
									<div className='flex items-center'>
										<img
											alt='profile-pic'
											src='https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png'
											className='w-8 h-8 rounded-md'
										/>
										<p className='md:text-xl text-gray-800 text-base leading-4 ml-2'>Jane Doe</p>
									</div>
									<ul className='flex'>
										<li className='cursor-pointer text-white pt-5 pb-3'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-messages'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												strokeWidth={1}
												stroke='#718096'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' />
												<path d='M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10' />
												<path d='M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2' />
											</svg>
										</li>
										<li className='cursor-pointer text-white pt-5 pb-3 pl-3'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-bell'
												width={24}
												height={24}
												viewBox='0 0 24 24'
												strokeWidth={1}
												stroke='#718096'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' />
												<path d='M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
												<path d='M9 17v1a3 3 0 0 0 6 0v-1' />
											</svg>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileNav;
