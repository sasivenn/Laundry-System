import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from './App';


function VisitorSidebar(props) {
	useEffect(() => {
		console.log(props.changeTab)
	}, [])
	return (
		<React.Fragment>
			<div class="table-wrapper">
				<table>
					<tbody>
						<tr>
							<td onClick={() => props.changeTab('visitormain')}>Summary</td>
						</tr>
                        <tr>
							<td onClick={() => props.changeTab('visitorissues')}>Issues</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('visitorchat')}>Chat</td>
						</tr>
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
}
export default VisitorSidebar;