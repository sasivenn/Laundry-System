import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="wrapper">
                    <footer id="footer">
                        <div class="inner">
                            <ul class="copyright">
                                <li>&copy; 2021 Wash & Dry Pvt. Ltd.</li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}
export default Footer;
