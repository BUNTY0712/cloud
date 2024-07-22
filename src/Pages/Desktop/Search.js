import React, { useState } from 'react';

const Search = () => {
	const [search, setSearch] = useState('');

	const handleChange = (e) => {
		let value = e.target.value;
		setSearch(value);
	};

	const [contain, setContain] = useState([
		{
			para: 'item1 item i',
		},
		{
			para: 'item2',
		},
		{
			para: 'item3',
		},
	]);

	const getHighlightedText = (text, highlight) => {
		// Split text on highlight term, include term itself into parts, ignore case
		const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
		return parts.map((part, index) =>
			part.toLowerCase() === highlight.toLowerCase() ? (
				<span key={index} style={{ color: 'red' }}>
					{part}
				</span>
			) : (
				part
			)
		);
	};

	return (
		<>
			{/* search input  */}
			<input onChange={handleChange} type='text' placeholder='Search items' />

			{contain.map((item, i) => (
				<h1 key={i}>{getHighlightedText(item.para, search)}</h1>
			))}
		</>
	);
};

export default Search;
