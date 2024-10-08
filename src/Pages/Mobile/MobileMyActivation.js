import { Box, Grid } from '@mui/material';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useTable } from 'react-table';
import RightNavbar from '../../ReusableComnent/RightNavbar';
// import UpperMenu from './ResuableComponent.js/UpperMenu';
import MUIDataTable from 'mui-datatables';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';

const MobileMyActivation = () => {
	const loanData = [
		{
			'#': '1',
			Date: '16-May-24 12:18:05',
			Amount: '32620.00',
			'Member userId': 'FT-Juhi',
		},
		{
			'#': '2',
			Date: '16-May-24 12:18:05',
			Amount: '32620.00',
			'Member userId': 'FT-Juhi',
		},
		{
			'#': '3',
			Date: '16-May-24 12:18:05',
			Amount: '32620.00',
			'Member userId': 'FT-Juhi',
		},
		{
			'#': '4',
			Date: '16-May-24 12:18:05',
			Amount: '32620.00',
			'Member userId': 'FT-Juhi',
		},
	];

	// Calculate the total sum of Amount
	const totalAmount = loanData.reduce(
		(acc, item) => acc + parseFloat(item.Amount),
		0
	);

	const columns = React.useMemo(
		() => [
			{
				Header: '#',
				accessor: '#',
			},
			{
				Header: 'Date',
				accessor: 'Date',
			},
			{
				Header: 'Amount',
				accessor: 'Amount',
			},
			{
				Header: 'Member userId',
				accessor: 'Member userId',
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data: loanData });

	return (
		<>
			<Grid container>
				<Grid item md={11} xs={12} sm={12}>
					<MobileUpperMenu />
					<Box
						mt={1}
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
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<Box>MY ACTIVATION</Box>
						</Box>
					</Box>
					<Box
						mt={0.5}
						style={{
							display: 'flex',
							paddingLeft: '20px',
							paddingRight: '20px',
							paddingBottom: '15px',
							borderBottom: '1px solid grey',
						}}>
						<Box style={{ color: 'black', fontWeight: '500' }}>Members</Box>
						<Box ml={1}>
							<MdKeyboardArrowRight style={{ paddingTopTop: '4px' }} />
						</Box>
						<Box style={{ color: 'grey' }} ml={1}>
							Activations
						</Box>
					</Box>

					<Grid container>
						<Grid item lg={0.5}></Grid>
						<Grid item lg={11} sm={11} xs={11} mx='auto'>
							<Box
								style={{
									maxHeight: '400px',
									overflow: 'auto',
									marginTop: '20px',
									border: '1px solid #f6f6f6',
								}}>
								<table {...getTableProps()} style={{ width: '100%' }}>
									<thead>
										{headerGroups.map((headerGroup) => (
											<tr {...headerGroup.getHeaderGroupProps()}>
												{headerGroup.headers.map((column) => (
													<th
														{...column.getHeaderProps()}
														style={{
															padding: '15px',
															textAlign: 'center',
															backgroundColor: '#daf1e7',
														}}>
														{column.render('Header')}
													</th>
												))}
											</tr>
										))}
									</thead>
									<tbody {...getTableBodyProps()}>
										{rows.map((row) => {
											prepareRow(row);
											return (
												<tr {...row.getRowProps()}>
													{row.cells.map((cell) => (
														<td
															{...cell.getCellProps()}
															style={{
																padding: '10px',
																textAlign: 'center',
																borderBottom: '1px solid #ddd',
																borderRight: '1px solid  #ddd',
															}}>
															{cell.render('Cell')}
														</td>
													))}
												</tr>
											);
										})}
										{/* Add a new row for the total amount */}
										<tr>
											<td
												colSpan={2}
												style={{ textAlign: 'right', padding: '10px' }}>
												{/* <strong>Total Amount:</strong> */}
											</td>
											<td style={{ textAlign: 'center', padding: '10px' }}>
												<strong>{totalAmount.toFixed(2)}</strong>
											</td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default MobileMyActivation;
