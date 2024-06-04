import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CareerConsultancyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        careerInterest: '',
        message: ''
    });

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
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Career Consultancy Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                   
                    <input
                        type="text"
                        className="form-control my-2"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                   
                    <input
                        type="email"
                        className="form-control my-2"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                   
                    <input
                        type="tel"
                        className="form-control my-2"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    
                    <input
                        type="text"
                        className="form-control my-2"
                        id="careerInterest"
                        name="careerInterest"
                        placeholder="Enter your career interest"
                        value={formData.careerInterest}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                   
                    <textarea
                        className="form-control my-2"
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
        </div>
    );
};

export default CareerConsultancyForm;
