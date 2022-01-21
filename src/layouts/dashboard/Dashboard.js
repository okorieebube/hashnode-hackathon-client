import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
import SettingNavbar from './SettingNavbar';
// import SideBar from './SideBar';

const Dashboard = () => {
	const [show, setShow] = useState(false);
	const [profile, setProfile] = useState(false);
	return (
		<>
			<div className='w-full h-full bg-nature-100 dark:bg-nature-900'>
				<div className='flex flex-no-wrap'>
					{/* Sidebar starts */}
					{/* <SideBar /> */}
					{/*Mobile responsive sidebar starts*/}
					<MobileNav show={show} setShow={setShow} />
					{/*Mobile responsive sidebar end*/}
					{/* Sidebar ends */}
					<div className='w-full'>
						{/* Navigation starts */}
						<Navbar show={show} setShow={setShow} profile={profile} setProfile={setProfile} />
						<SettingNavbar />
						{/* Navigation ends */}
						{/* Remove class [ h-64 ] when adding a card block */}
						<div className='container mx-auto py-12 md:w-full w-11/12 px-8'>
							{/* <SettingNavbar /> */}

							<main className='w-full h-full'>
								<Outlet />
							</main>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;