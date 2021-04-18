import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Enroll = () => {
    const { key } = useParams();
    const history = useHistory()
    const [enrolls, setEnrolls] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const { name, email } = loggedInUser;
    const [enrollPayData, setEnrollPayData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service/' + key)
            .then(res => res.json())
            .then(data => setEnrolls(data))
    }, [key])

    const onSubmit = data => {
        setEnrollPayData(data);
    }

    const handlePaymentSuccess = paymentId => {
        history.push(`/enroll_list`);
        const enrollData = {
            name,
            email,
            enrolls,
            enrollPayData,
            paymentId,
            enrollTime: new Date().toDateString('dd/MM/yyyy')
        };
        const url = `http://localhost:5000/addEnroll`;
        console.log(enrollData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enrollData)
        })
            // .then(res => console.log('server site response', res))
            .then(res => res.json())
            .then(data => alert('your Enroll placed successfully'))
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Enroll Course</h5>
                <div style={{ display: enrollPayData ? 'none' : 'block' }} className="col-md-6">
                    <form className='' onSubmit={handleSubmit(onSubmit)} >
                        <input className="col-4" name="name" placeholder="Enter Name" defaultValue={loggedInUser.name} {...register("name")} /><br />
                        <input className="col-4" name="email" placeholder="Enter Email" defaultValue={loggedInUser.email} {...register("email")} /> <br />
                        <input className="col-4" name="price" defaultValue={enrolls.price} {...register("price")} /> <br />
                        <input className="col-4" name="address" placeholder="Enter address"  {...register("address")} /><br />
                        {errors.address && <span>This field is required</span>}
                        <input className="col-4" name="phone" placeholder="Enter phone"  {...register("phone")} /><br />
                        <select name="status"{...register(" status")}>
                            <option value="">Select your Status</option>
                            <option value="Done">Done</option>
                            <option value="Pending">Pending</option>
                            <option value="Cancel">Cancel</option>
                        </select><br />
                        <input type="submit" value="Enroll" />
                    </form >
                </div>
                <div style={{ display: enrollPayData ? 'block' : 'none' }} className="col-md-6">
                    <h2>Pay Your Course Fee</h2>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </section >
    );
};

export default Enroll;
