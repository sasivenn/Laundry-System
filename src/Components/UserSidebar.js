import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from './App';


function UserSidebar(props) {
	useEffect(() => {
		console.log(props.changeTab)
	}, [])
	return (
		<React.Fragment>
			<div class="table-wrapper">
				<table>
					<tbody>
						<tr>
							<td onClick={() => props.changeTab('usermain')}>Summary</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('userplaceorder')}>Place Order</td>
						</tr>
                        <tr>
							<td onClick={() => props.changeTab('userissues')}>Issues</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('userchat')}>Chat</td>
						</tr>
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
}
export default UserSidebar;