import { overlay, shown } from './Overlay.css';

import React from 'react';

export default function Overlay ({ children }) {
	return (
		<div className={ `${ overlay } ${ children ? shown : null }` }>
			{ children }
		</div>
	);
}
