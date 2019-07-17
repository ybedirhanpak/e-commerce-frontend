import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

export default class slide extends Component {

	constructor(props) {
		super(props);

		this.state = {
			days: 0,
			hours: 0,
			min: 0,
			sec: 0
		}
	}

	componentDidMount() {

		this.interval = setInterval(() => {
			const date = this.calculateCountdown(this.props.date);
			date ? this.setState(date) : this.stop();
		}, 1000);
	}

	componentWillUnmount() {
		this.stop();
	}
	calculateCountdown(endDate) {
		let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

		// clear countdown when date is reached
		if (diff <= 0) return false;

		const timeLeft = {
			years: 1,
			days: 12,
			hours: 10,
			min: 5,
			sec: 14,
			millisec: 0,
		};

		// calculate time difference between now and expected date
		if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
			timeLeft.years = Math.floor(diff / (365.25 * 86400));
			diff -= timeLeft.years * 365.25 * 86400;
		}
		if (diff >= 86400) { // 24 * 60 * 60
			timeLeft.days = Math.floor(diff / 86400);
			diff -= timeLeft.days * 86400;
		}
		if (diff >= 3600) { // 60 * 60
			timeLeft.hours = Math.floor(diff / 3600);
			diff -= timeLeft.hours * 3600;
		}
		if (diff >= 60) {
			timeLeft.min = Math.floor(diff / 60);
			diff -= timeLeft.min * 60;
		}
		timeLeft.sec = diff;
		return timeLeft;
	}

	stop() {
		clearInterval(this.interval);
	}

	addLeadingZeros(value) {
		value = String(value);
		while (value.length < 2) {
			value = '0' + value;
		}
		return value;
	}


	render() {
		const countDown = this.state;
		return (
			<div>
				<div id="hot-deal" className="section">

					<div className="container">

						<div className="row">
							<div className="col-md-12">
								<div className="hot-deal">
									<ul className="hot-deal-countdown">
										<li>
											<div>
												<h3>{this.addLeadingZeros(countDown.days)}</h3>
												<span>Days</span>
											</div>
										</li>
										<li>
											<div>
												<h3>{this.addLeadingZeros(countDown.hours)}</h3>
												<span>Hours</span>
											</div>
										</li>
										<li>
											<div>
												<h3>{this.addLeadingZeros(countDown.min)}</h3>
												<span>Mins</span>
											</div>
										</li>
										<li>
											<div>
												<h3>{this.addLeadingZeros(countDown.sec)}</h3>
												<span>Secs</span>
											</div>
										</li>
									</ul>
									<h2 className="text-uppercase">hot deal this week</h2>
									<p>New Collection Up to 50% OFF</p>
									<a className="primary-btn cta-btn" href="/hot-deals">Shop now</a>
								</div>
							</div>
						</div>

					</div>

				</div>




			</div>
		)
	}
}

slide.propTypes = {
	date: PropTypes.string.isRequired
};

slide.defaultProps = {
	date: new Date()
};

