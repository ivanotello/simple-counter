import React from "react";
import PropTypes from "prop-types";

const containerStyle = {
	fontSize: "60px",
	color: "whitesmoke",
	background: "#101010",
	padding: "20px"
};
const numberStyle = {
	background: "#323232",
	padding: "20px",
	margin: "20px"
};

const SimpleCounter = props => {
	return (
		<div
			className="container d-flex flex-row justify-content-center"
			style={containerStyle}>
			<div className="clock" style={numberStyle}>
				<i className="far fa-clock" />
			</div>
			<div className="number-four" style={numberStyle}>
				{props.numberFour % 10}
			</div>
			<div className="number-three" style={numberStyle}>
				{props.numberThree % 10}
			</div>
			<div className="number-two" style={numberStyle}>
				{props.numberTwo % 10}
			</div>
			<div className="number-one" style={numberStyle}>
				{props.numberOne % 10}
			</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	numberFour: PropTypes.number,
	numberThree: PropTypes.number,
	numberTwo: PropTypes.number,
	numberOne: PropTypes.number
};

export default SimpleCounter;
