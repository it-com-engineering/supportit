import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ITcomLogo extends Component {
	render() {
		const space = this.props.height / 24.5;
		const unit = space * 5;

		const totalWidth = Math.ceil(unit * 3 + space * 2);
		const totalHeight = this.props.height;

		const rectProps = {
			shapeRendering: 'optimizeQuality'
		};

		return (
			<div style={this.props.style}>
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width={totalWidth}
					height={totalHeight}
					viewBox={`0 0 ${totalWidth} ${totalHeight}`}
					className="itcom-logo"
					style={{
						enableBackground: `new 0 0 ${totalWidth} ${totalHeight}`,
						fill: this.props.fill
					}}
				>
					<g>
						<rect
							className="i base"
							y={unit * 2 + space * 2}
							width={unit}
							height={Math.floor(unit * 2.5 + space * 2)}
							{...rectProps}
						/>
						<rect className="i" width={unit} height={unit} {...rectProps} />
						<rect
							className="t"
							y={unit + space}
							width={unit}
							height={unit}
							{...rectProps}
						/>
						<rect
							className="t"
							x={unit + space}
							y={unit + space}
							width={unit}
							height={unit}
							{...rectProps}
						/>
						<rect
							className="t"
							x={unit * 2 + space * 2}
							y={unit + space}
							width={unit}
							height={unit}
							{...rectProps}
						/>
						<rect
							className="t"
							x={unit + space}
							y={unit * 2 + space * 2}
							width={unit}
							height={Math.floor(unit * 2.5 + space * 2)}
							{...rectProps}
						/>
					</g>
				</svg>
			</div>
		);
	}
}

ITcomLogo.propTypes = {
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	fill: PropTypes.string,
	style: PropTypes.object
};

ITcomLogo.defaultProps = {
	height: 35,
	fill: '#fff',
	style: {}
};

export default ITcomLogo;
