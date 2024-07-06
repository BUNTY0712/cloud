import React from 'react';

const Activation = () => {
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
						<Box style={{ fontWeight: 'bold', fontSize: '20px' }}>
							ACTIVATION
						</Box>
						<Box style={{ display: 'flex' }}>
							<Box>Activation</Box>
							<Box ml={1}>
								<MdKeyboardArrowRight />
							</Box>
							<Box ml={1}>Statistics</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Activation;
