import React from 'react';
import Link from 'next/link';

const index = () => {
	return (
		<div>
			{/* Index Routes */}
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>

				<li>
					<Link href='/about'>About</Link>
				</li>
			</ul>
			<h1>This is a Home Page</h1>
		</div>
	);
};

export default index;
