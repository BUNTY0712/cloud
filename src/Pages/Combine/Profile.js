import { useMediaQuery, Box } from '@mui/material';
import React from 'react';

import DesktopWalletAddress from '../Desktop/DesktopWalletAddress';
import MobileWalletAddress from '../Mobile/MobileWalletAddress';
import MobProfile from '../Mobile/MobProfile';
import DesktopProfile from '../Desktop/DesktopProfile';

const Profile = () => {
	const small = useMediaQuery('(max-width:600px)');
	return <>{small ? <MobProfile /> : <DesktopProfile />}</>;
};

export default Profile;
