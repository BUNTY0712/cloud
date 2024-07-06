import { Box, Grid, colors } from '@mui/material';
import React from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { CiMenuFries } from 'react-icons/ci';
import { RiMenu2Line } from 'react-icons/ri';
import { BiFontFamily, BiTimer } from 'react-icons/bi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineContactMail } from 'react-icons/md';
import { BiSolidGroup } from 'react-icons/bi';
import { BiGroup } from 'react-icons/bi';
import { FaWallet } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';
import { FiUpload } from 'react-icons/fi';
import { TbCircleArrowDownLeftFilled } from 'react-icons/tb';
import { PiCopySimpleLight } from 'react-icons/pi';
import { BsArrowDownRightCircleFill } from 'react-icons/bs';

const UpperMenu = () => {
	return (
		<>
			<Box
				style={{
					height: '10vh',
					background: '#192072',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0px 20px',
					color: 'white',
				}}>
				<Box style={{ fontSize: '30px' }}>
					<RiMenu2Line />
				</Box>

				<Box>Logo </Box>
			</Box>
		</>
	);
};

export default UpperMenu;
