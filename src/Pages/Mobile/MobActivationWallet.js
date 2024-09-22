import React from 'react';
import { Box, Grid } from '@mui/material';
import { useTable } from 'react-table';
import { BsCurrencyRupee } from 'react-icons/bs';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';

const MobActivationWallet = () => {
	const loanData = []; // Empty data array

	const columns = React.useMemo(
		() => [
			{
				Header: '#',
				accessor: 'Serial',
			},
			{
				Header: 'Type',
				accessor: 'Type',
				Cell: ({ value }) => (
					<span
						style={{
							color: value === 'credit' ? '#5fb891' : '#ea6353',
							fontWeight: 'bold',
						}}>
						{value}
					</span>
				),
			},
			{
				Header: <span style={{ color: '#5fb891' }}>Credit</span>,
				accessor: 'Credit',
			},
			{
				Header: <span style={{ color: '#ea6353' }}>Debit</span>,
				accessor: 'Debit',
			},
			{
				Header: <span style={{ color: '#5b7ed4' }}>Balance</span>,
				accessor: 'Balance',
			},
			{
				Header: <span>Remarks</span>,
				accessor: 'Remarks',
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
							Activation Wallet
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
						<Box>Activation Wallet</Box>
					</Box>

					<Box className='my-main-wallet'>
						<Box className='my-wallet'>
							{' '}
							<span>
								{' '}
								<BsCurrencyRupee />
							</span>{' '}
							My Activation Wallet
							<span style={{ color: '#8874b2' }}>
								{' '}
								[USDT deposits will be added here.]
							</span>
						</Box>

						<Grid container>
							<Grid item lg={0.5}></Grid>
							<Grid item lg={11} sm={11} xs={11} mx='auto'>
								<Box
									style={{
										maxHeight: '400px',
										overflow: 'auto',
										margin: '20px 0px',
										border: '1px solid #f6f6f6',
										paddingBottom: '10px',
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
																borderRight: '1px solid  #ddd',
																backgroundColor: '#f6f6f6',
															}}>
															{column.render('Header')}
														</th>
													))}
												</tr>
											))}
										</thead>
										<tbody {...getTableBodyProps()}>
											{/* Check if loanData is empty */}
											{loanData.length === 0 ? (
												<tr>
													<td
														colSpan={columns.length}
														style={{
															padding: '30px 20px',
															textAlign: 'center',
															fontWeight: '500',
															fontSize: '25px',
														}}>
														No fund added yet!
													</td>
												</tr>
											) : (
												rows.map((row) => {
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
												})
											)}
										</tbody>
									</table>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default MobActivationWallet;
