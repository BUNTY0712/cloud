import { Box, Grid } from '@mui/material';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import RightNavbar from '../../ReusableComnent/RightNavbar';
import UpperMenu from './ResuableComponent.js/UpperMenu';
import MUIDataTable from 'mui-datatables';

const Directt = () => {
	// const data = [
	// 	{
	// 		name: 'Sanju devi',
	// 		userId: 'Sanju100',
	// 		position: 'Left',
	// 		email: 'Kumaratul15041978@gmail.com',
	// 		mobile: '8700539775',
	// 		joinDate: '06-Apr-24 09:45 PM',
	// 		status: 'Activated on 06-Apr-24 21:50:51',
	// 	},
	// 	{
	// 		name: 'Parmila devi',
	// 		userId: 'Parmila10',
	// 		position: 'Right',
	// 		email: 'Parmila543218@gmail.com',
	// 		mobile: '9153772387',
	// 		joinDate: '06-Apr-24 09:53 PM',
	// 		status: 'Activated on 06-Apr-24 22:09:11',
	// 	},
	// ];

	const data = [
		[
			'Sanju devi',
			'Sanju100',
			'Left',
			'Kumaratul15041978@gmail.com',
			'8700539775',
			'06-Apr-24 09:45 PM',
			'Activated on 06-Apr-24 21:50:51',
		],
		[
			'Parmila devi',
			'Parmila10',
			'Right',
			'Parmila543218@gmail.com',
			'9153772387',
			'06-Apr-24 09:53 PM',
			'Activated on 06-Apr-24 22:09:11',
		],
	];

	// const columns = [
	// 	{ title: 'Name', field: 'name' },
	// 	{ title: 'User Id', field: 'userId' },
	// 	{ title: 'Position', field: 'position' },
	// 	{ title: 'Email', field: 'email' },
	// 	{ title: 'Mobile', field: 'mobile' },
	// 	{ title: 'Join Date', field: 'joinDate' },
	// 	{ title: 'Status', field: 'status' },
	// ];

	const columns = [
		{ name: 'Name', label: 'Name' },
		{ name: 'User Id', label: 'User Id' },
		{ name: 'Position', label: 'Position' },
		{ name: 'Email', label: 'Email' },
		{ name: 'Mobile', label: 'Mobile' },
		{ name: 'Join Date', label: 'Join Date' },
		{ name: 'Status', label: 'Status' },
	];

	const options = {
		filterType: 'checkbox',
	};
	return (
		<>
			<Grid container>
				<RightNavbar />
				<Grid item lg={10}>
					<UpperMenu />
					<Box
						mt={2}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '0px 20px',
						}}>
						<Box style={{ fontWeight: 'bold', fontSize: '17px' }}>
							WALLET BEP 20{' '}
							<span
								style={{
									fontSize: '15px',
									fontWeight: 'bold',
									color: '#878a99',
								}}>
								[ REFERRED ]
							</span>
						</Box>
						<Box style={{ display: 'flex' }}>
							<Box>Members</Box>
							<Box ml={1}>
								<MdKeyboardArrowRight />
							</Box>
							<Box ml={1}>Directs</Box>
						</Box>
					</Box>

					<Box style={{ padding: '15px' }} mt={5}>
						<MUIDataTable
							title={'User Data'}
							data={data}
							columns={columns}
							options={options}
						/>
					</Box>
				</Grid>
			</Grid>

			{/* <Grid container spacing={3}>
				<Grid item lg={10}>
					<Box>
						<MaterialTable
							title='User Data'
							columns={columns}
							data={data}
							options={{
								search: true,
								paging: true,
								filtering: true,
								exportButton: true,
								sorting: true,
							}}
						/>
					</Box>
				</Grid>
			</Grid> */}

			{/* <Grid container spacing={3}>
				<Grid item lg={10}>
					<Box>
						<MUIDataTable
							title={'User Data'}
							data={data}
							columns={columns}
							options={options}
						/>
					</Box>
				</Grid>
			</Grid> */}
		</>
	);
};

export default Directt;
