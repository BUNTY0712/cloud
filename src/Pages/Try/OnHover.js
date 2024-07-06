import React, { useState } from 'react';

const OnHover = () => {
	const [isHovered, setIsHovered] = useState(false);

	const boxStyle = {
		width: '100px',
		height: '100px',
		backgroundColor: isHovered ? 'red' : 'blue',
		transition: 'background-color 0.3s ease',
	};

	return (
		<div
			style={boxStyle}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			change color
		</div>
	);
};

export default OnHover;
