import { Box, Grid } from '@mui/material';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import RightNavbar from '../../ReusableComnent/RightNavbar';
import MUIDataTable from 'mui-datatables';
import UpperMenu from './ResuableComponent.js/UpperMenu';

const DesktopMyActivation = () => {
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

	const columns = [
		{
			name: 'serial',
			label: '#',
			options: {
				customBodyRenderLite: (dataIndex) => dataIndex + 1,
				setCellHeaderProps: () => ({
					style: {
						backgroundColor: '#ffccbc',
						color: 'black',
						fontWeight: 'bold', // Bold font for label
					},
				}),
			},
		},
		{
			name: 'Date',
			label: 'Date',
			options: {
				setCellHeaderProps: () => ({
					style: {
						backgroundColor: '#ffccbc',
						color: 'black',
						fontWeight: 'bold', // Bold font for label
					},
				}),
			},
		},
		{
			name: 'Amount',
			label: 'Amount',
			options: {
				setCellHeaderProps: () => ({
					style: {
						backgroundColor: '#ffccbc',
						color: 'black',
						fontWeight: 'bold', // Bold font for label
					},
				}),
			},
		},
		{
			name: 'Member',
			label: 'Member',
			options: {
				setCellHeaderProps: () => ({
					style: {
						backgroundColor: '#ffccbc',
						color: 'black',
						fontWeight: 'bold', // Bold font for label
					},
				}),
			},
		},
	];

	const options = {
		filter: false, // Disables filter
		selectableRows: 'none', // Removes checkbox selection
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
						<Box
							style={{
								fontWeight: 'bold',
								fontSize: '17px',
								textTransform: 'uppercase',
							}}>
							My Activation
						</Box>
						<Box style={{ display: 'flex' }}>
							<Box>Members</Box>
							<Box ml={1}>
								<MdKeyboardArrowRight />
							</Box>
							<Box ml={1}>Activations</Box>
						</Box>
					</Box>

					<Box style={{ padding: '15px' }} mt={5}>
						<MUIDataTable
							title={'Activation'}
							data={data}
							columns={columns}
							options={options}
						/>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default DesktopMyActivation;
