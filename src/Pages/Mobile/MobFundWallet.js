import React from 'react';
import { Box, Grid } from '@mui/material';
import { useTable } from 'react-table';
import { BsCurrencyRupee } from 'react-icons/bs';
import MobileUpperMenu from './ResuableComponent/MobileUpperMenu';
import { MdKeyboardArrowRight } from 'react-icons/md';

const MobFundWallet = () => {
	const loanData = [
		{
			'#': '1',
			Type: 'Credit',
			Credit: '1500',
			Debit: '0',
			Balance: '1800.00',
			Remark: 'Good',
		},
		{
			'#': '2',
			Type: 'Debit',
			Credit: '1000',
			Debit: '0',
			Balance: '200.00',
			Remark: 'Good',
		},
		{
			'#': '3',
			Type: 'Credit',
			Credit: '1500',
			Debit: '0',
			Balance: '1800.00',
			Remark: 'Bad',
		},
		{
			'#': '4',
			Type: 'Debit',
			Credit: '0',
			Debit: '0',
			Balance: '1450.00',
			Remark: 'Good',
		},
	]; // Empty data array

	const columns = React.useMemo(
		() => [
			{
				Header: '#',
				accessor: '#',
			},
			{
				Header: 'Type',
				accessor: 'Type',
				Cell: ({ value }) => (
					<span
						style={{
							// color: value === 'credit' ? '#5fb891' : '#ea6353',
							color: value === 'Credit' ? '#5fb891' : '#ea6353',
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
							Fund Wallet
						</Box>
					</Box>

					<Box
						mt={0.5}
						style={{
							display: 'flex',
							paddingLeft: '20px',
							paddingRight: '20px',
							paddingBottom: '15px',
							borderBottom: '1px solid #b3b3b3',
						}}>
						<Box style={{ color: 'black', fontWeight: '500' }}>Wallet</Box>
						<Box ml={1}>
							<MdKeyboardArrowRight style={{ paddingTopTop: '4px' }} />
						</Box>
						<Box style={{ color: 'grey' }} ml={1}>
							Fund
						</Box>
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
															backgroundColor: '#efe8f8',
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
																	paddingBottom: '60px',
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
				</Grid>
			</Grid>
		</>
	);
};

export default MobFundWallet;
