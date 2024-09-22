import React from 'react';
import { Box, Grid } from '@mui/material';
import { useTable } from 'react-table';
import { MdKeyboardArrowRight } from 'react-icons/md';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';

const MobLoanInstallment = () => {
	const loanData = [
		{
			'#': '1',
			Loan: '2250-1800',
			Description: 'First Loan, First installment of total 4',
			Credit: '0',
			Debit: '450',
			Penalty: '0',
		},
		{
			'#': '2',
			Loan: '2250-1800',
			Description: 'First Loan, First installment of total 4',
			Credit: '0',
			Debit: '450',
			Penalty: '0',
		},

		{
			'#': '3',
			Loan: '2250-1800',
			Description: 'First Loan, First installment of total 4',
			Credit: '450.00',
			Debit: '450',
			Penalty: '0',
		},
	];

	const columns = React.useMemo(
		() => [
			{
				Header: '#',
				accessor: '#',
			},
			{
				Header: 'Loan',
				accessor: 'Loan',
			},
			{
				Header: 'Description',
				accessor: 'Description',
			},
			{
				Header: 'Credit',
				accessor: 'Credit',
			},
			{
				Header: 'Debit',
				accessor: 'Debit',
			},
			{
				Header: 'Penalty',
				accessor: 'Penalty',
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
								// alignItems: 'center',
								justifyContent: 'center',
							}}>
							<Box style={{ marginTop: '4px', marginRight: '4px' }}>
								<MdOutlineFeaturedPlayList
									style={{ color: 'red', marginBottom: '10px' }}
								/>
							</Box>
							<Box>
								Loan Installments{' '}
								<span style={{ color: '#5ba3ff' }}> [EMI]</span>
							</Box>
						</Box>
					</Box>
					<Box
						style={{
							display: 'flex',
							paddingLeft: '20px',
							paddingRight: '20px',
							paddingBottom: '15px',
							borderBottom: '1px solid grey',
						}}>
						<Box>Loan</Box>
						<Box ml={1}>
							<MdKeyboardArrowRight />
						</Box>
						<Box ml={1}>Loan Installments</Box>
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
															padding: '15px',
															textAlign: 'center',
															borderRight: '1px solid  #f6f6f6',
															backgroundColor:
																column.Header === 'Penalty'
																	? '#ffd4d4' // Apply background for 'Penalty' column header
																	: '#dbe7ff',
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
																borderBottom: '1px solid #ddd',
																borderRight: '1px solid  #ddd',
																backgroundColor:
																	cell.column.Header === 'Penalty'
																		? '#ffd4d4' // Apply background for 'Penalty' column cells
																		: 'white',
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

export default MobLoanInstallment;
