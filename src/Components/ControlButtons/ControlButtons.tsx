import React from 'react';

import './ControlButtons.css';

export interface IControlButtonsProps {
	themes: Array<string>
	handleTheme: Function;
}
export const ControlButtons: React.FC<IControlButtonsProps> = ({ themes, handleTheme }) => {

	return (
		<div className='dropdown-container'>
			<div>
				<div className='dropdown-heading'>Theme</div>
				<select onChange={(e) => handleTheme(e.target.value)}>
					{themes.map(theme => <option key={theme} value={theme}>{theme}</option>)}
				</select>
			</div>
		</div>
	)
};