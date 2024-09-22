import React from 'react';
import { Box, Grid } from '@mui/material';
import { useTable } from 'react-table';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { LuWallet } from 'react-icons/lu';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';
import { BsCurrencyRupee } from 'react-icons/bs';
import { RiArrowRightUpFill } from 'react-icons/ri';
const MobIncomeWallet = () => {
	const loanData = [
		{
			Serial: '1',
			Type: 'credit',
			Credit: '1800.00',
			Debit: '0',
			Balance: '1800',
		},
	];

	const columns = React.useMemo(
		() => [
			{
				Header: 'Serial',
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
							{/* <span></span> */}
							Income Wallet
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
						<Box>Income Wallet</Box>

						{/* <Box ml={1}>Income Wallet</Box> */}
					</Box>

					<Box className='my-main-wallet'>
						<Box className='my-wallet'>
							{' '}
							<span>
								{' '}
								<BsCurrencyRupee />
							</span>{' '}
							My Wallet
						</Box>

						{/* Total payout Income  */}
						<Box className='flex-box-total'>
							<Box className='total-payout-main'>
								<Box className='Total-Withdraw'>Total Payout Income</Box>
								<Box className='number-total'>2,880</Box>
							</Box>

							<Box className='ruppee-design'>
								<Box>
									<BsCurrencyRupee />
								</Box>
							</Box>
						</Box>

						{/* Total withdraw */}
						<Box className='flex-box-total'>
							<Box className='total-payout-main'>
								<Box className='Total-Withdraw'>Total Withdraw</Box>
								<Box className='number-total'>0</Box>
							</Box>

							<Box className='ruppee-design-2'>
								<Box className='RiArrowRightUpFill-design'>
									<RiArrowRightUpFill />
								</Box>
							</Box>
						</Box>

						{/* Total Balance  */}
						<Box className='flex-box-total'>
							<Box className='total-payout-main'>
								<Box className='Total-Withdraw'>Total Withdraw</Box>
								<Box className='number-total'>-50</Box>
							</Box>

							<Box className='ruppee-design-3'>
								<Box>
									<LuWallet />
								</Box>
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
																// backgroundColor: 'rgb(3 169 244 / 44%)',
																backgroundColor: '#f6f6f6',
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

export default MobIncomeWallet;
