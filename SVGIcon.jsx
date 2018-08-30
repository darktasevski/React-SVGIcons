import React from 'react';
import PropTypes from 'prop-types';
import * as icons from './Icons';

const SVGIcon = props => {
	if (!icons[props.icon]) {
		return 'There is no icon with that name';
	}

	const { icon, handleClick = () => {}, wrapperClassName, dataAutomation, ...rest } = props;
	const Icon = icons[icon];
	const classNames = ['SvgIconWrapper', wrapperClassName].join(' ');

	return (
		<span
			onClick={handleClick}
			style={{ height: props.size || props.height, width: props.size || props.width }}
			className={classNames}
			data-automation={dataAutomation}
		>
			<Icon {...rest} />
		</span>
	);
};

SVGIcon.defaultProps = {
	styles: ' ',
	width: 15,
	height: 15,
	fillOpacity: '1',
	strokeWidth: '1',
	strokeOpacity: '1',
	strokeLinejoin: 'round',
};

SVGIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	styles: PropTypes.string,
	size: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	fill: PropTypes.string,
	fillOpacity: PropTypes.string,
	strokeWidth: PropTypes.string,
	strokeOpacity: PropTypes.string,
	strokeLinejoin: PropTypes.string,
	handleClick: PropTypes.func,
	wrapperClassName: PropTypes.string,
	dataAutomation: PropTypes.string,
};

export default SVGIcon;
