import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
function UserOrderSuccess() {
	return (
		<React.Fragment>
			<div class="row">
				<div class="col-12 col-12-medium">
					<h2>Your Order was placed successfully. Please pay the due amount while check out.</h2>
				</div>
			</div>
		</React.Fragment>
	);
}
export default UserOrderSuccess;
