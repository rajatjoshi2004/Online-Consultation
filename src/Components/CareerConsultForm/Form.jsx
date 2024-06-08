import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const CareerConsultancyForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        careerInterest: '',
        message: ''
    });

    const handleCloseForm = () => setShowForm(false);
    const handleShowForm = () => setShowForm(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form data submitted:', formData);
        setShowForm(false); // Close the form after submission
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Career Consultancy Form</h2>
            <Button variant="primary" onClick={handleShowForm}>Open Form</Button>

            <Modal show={showForm} onHide={handleCloseForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Career Consultancy Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="careerInterest">Career Interest</label>
                            <input
                                type="text"
                                className="form-control"
                                id="careerInterest"
                                name="careerInterest"
                                placeholder="Enter your career interest"
                                value={formData.careerInterest}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CareerConsultancyForm;
