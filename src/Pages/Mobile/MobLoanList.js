import React from 'react';
import { Box, Grid } from '@mui/material';
import { useTable } from 'react-table';
import { MdKeyboardArrowRight } from 'react-icons/md';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';

const MobLoanList = () => {
	const loanData = [
		{
			Serial: '1',
			ApprrovedLoan: '2250',
			NetLoan: '1800',
			EWI: '450',
			TotalWeek: '4',
			PaidWeek: '4',
			TotalPayament: '1800cr',
		},
		{
			Serial: '2',
			ApprrovedLoan: '2550',
			NetLoan: '2000',
			EWI: '550',
			TotalWeek: '2',
			PaidWeek: '4',
			TotalPayament: '700cr',
		},
	];

	const columns = React.useMemo(
		() => [
			{
				Header: 'Serial',
				accessor: 'Serial',
			},
			{
				Header: 'Approved Loan',
				accessor: 'ApprrovedLoan',
			},
			{
				Header: 'Net Loan',
				accessor: 'NetLoan',
			},
			{
				Header: 'EWI',
				accessor: 'EWI',
			},
			{
				Header: 'Total Week',
				accessor: 'TotalWeek',
			},
			{
				Header: 'Paid Week',
				accessor: 'PaidWeek',
			},
			{
				Header: 'Total Payment',
				accessor: 'TotalPayament',
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data: loanData });

	return (
		<>
			<Grid container>
				<Grid item lg={10} md={11} xs={12} sm={12}>
					<MobileUpperMenu />
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
							<span>
								<MdOutlineFeaturedPlayList style={{ color: 'red' }} />
							</span>
							Loan List
						</Box>
					</Box>
					<Box
						mt={0.5}
						style={{
							display: 'flex',
							padding: '0px 20px',
							borderBottom: '1px solid grey',
							paddingBottom: '13px',
						}}>
						<Box>Loan</Box>
						<Box ml={1}>
							<MdKeyboardArrowRight />
						</Box>
						<Box ml={1}>Loan List</Box>
					</Box>
					<Box style={{ padding: '0px 20px' }}>
						<Box className='newdirect'>
							3 new direct needed to achieve third loan.
						</Box>
					</Box>
					<Grid container>
						<Grid item lg={0.5}></Grid>
						<Grid item lg={11} sm={11} xs={11} mx='auto'>
							<Box
								style={{
									maxHeight: '400px', // Adjust height as needed
									overflow: 'auto',
									marginTop: '20px', // Add spacing if needed
									border: '1px solid #f6f6f6',
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
															borderBottom: '1px solid #f6f6f6',
															padding: '10px',
															textAlign: 'center',
															backgroundColor: '#dbe7ff',
															borderRight: '1px solid  #ddd',
															// backgroundColor: '#f0f0f0',
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
																borderBottom: '1px solid #ddd', // Optional: add border to cells
															}}>
															{cell.render('Cell')}
														</td>
													))}
												</tr>
											);
										})}
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

export default MobLoanList;
