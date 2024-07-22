import React, { useState } from 'react';

const Try = () => {
	const [favorites, setFavorites] = useState(['apple', 'banana', 'orange']);
	const allItems = ['apple', 'banana', 'orange', 'grape', 'mango'];

	return (
		<div>
			<h1>Items</h1>
			<ul>
				{allItems.map((item) => (
					<li
						key={item}
						style={{ color: favorites.includes(item) ? 'red' : 'black' }}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Try;
