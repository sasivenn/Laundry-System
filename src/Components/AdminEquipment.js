import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';
import { API_ENDPOINT } from "../API/api.dev";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
function AdminEquipment() {
	const [data, setData] = useState([]);
	const [headers, setHeaders] = useState([]);
	const [values, setValues] = useState([]);
	const [modalData, setModalData] = useState([]);
	const [show, setShow] = useState(false);
	const [modalRowIndex, setModalRowIndex] = useState(-1);
	const handleClose = () => setShow(false);
	const handleShow = (index = -1) => { setShow(true); if (index > -1) setModalRowIndex(index); }
	let history = useHistory();
	const [equipmentID, setEquipmentID] = useState("");
	const [equipmentName, setEquipmentName] = useState("");
	const [equipmentStatus, setEquipmentStatus] = useState("");
	const UpdateEquipment = (value) => {
		console.log('In here');
		let reqOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				equipmentID, equipmentName, equipmentStatus
			})
		}
		fetch(API_ENDPOINT + "/update_equipment.php", reqOptions)
			.then(res => res.json())
			.then(data => {
				console.log("data is", data);
			})
			.catch(err => console.log(err))
	}
	function getEquipment() {
		let reqOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}
		fetch(API_ENDPOINT + "/get_equipment.php", reqOptions)
			.then(res => res.json())
			.then(data => {
				console.log("data is", data);
				setData(data);
				setModalData(values[modalRowIndex]);
			})
			.catch(err => console.log(err))
	}
	useEffect(() => {
		setModalData(values[modalRowIndex]);
		if (values[modalRowIndex] && values[modalRowIndex].length > 1) {
			setEquipmentID(values[modalRowIndex][0])
			setEquipmentName(values[modalRowIndex][1])
			setEquipmentStatus(values[modalRowIndex][2])
		}
	}, [modalRowIndex])
	useEffect(() => {
		getEquipment();
	}, [])
	useEffect(() => {
		let header = [];
		let values = [];
		data.forEach(value => {
			header = Object.keys(value);
			let val = Object.values(value);
			values.push(val);
		})
		setHeaders(header);
		setValues(values);
	}, [data])
	return (
		<React.Fragment>
			<div class="row">
				<div class="col-12 col-12-medium">
					<h2>Equipment</h2>
					<div class="table-wrapper">
						<table>
							<thead>
								<tr>
									{
										headers.map((val, i) => {
											return <th>{val}</th>
										})
									}
									<th>Edit</th>
								</tr>
							</thead>
							<tbody>
								{values.map((val, i) => {
									return (
										<tr>
											{val.map((v, i) => {
												return <td>{v}</td>
											})}
											<td><Button variant="primary" onClick={() => handleShow(i)}>Edit</Button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
						<Modal.Header closeButton>
							<Modal.Title>Edit</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div class="row">
								<div class="col-9 col-12-medium">
									<div class="row gtr-uniform">
										<div class="col-12">
											<label>Equipment Id</label>
											<input type="text" value={equipmentID} onChange={(e) => setEquipmentID(e.target.value)} />
										</div>
										<div class="col-12">
											<label>Equipment Name</label>
											<input type="text" value={equipmentName} onChange={(e) => setEquipmentName(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> Equipment Status</label>
											<input type="text" value={equipmentStatus} onChange={(e) => setEquipmentStatus(e.target.value)} />
										</div>
										<div class="col-12">
											<ul class="actions">
												<li><input type="submit" value="Update" class="primary" onClick={(e) => UpdateEquipment(e)} /></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</React.Fragment >
	)
}
export default AdminEquipment;
