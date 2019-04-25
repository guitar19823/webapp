import React, { Fragment } from 'react';

const Success = ({ message }) => {
	if (message) {
		return (
			<Fragment>
				{message}
			</Fragment>
		);
	}

	return null;
};

export default Success;