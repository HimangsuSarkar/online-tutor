import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Enroll = () => {
    const { key } = useParams();
    const history = useHistory()
    const [enrolls, setEnrolls] = useState({});
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const { name, email } = loggedInUser;

    useEffect(() => {
        fetch('http://localhost:5000/service/' + key)
            .then(res => res.json())
            .then(data => setEnrolls(data))
    }, [key])
    const { subject, price, duration } = enrolls;


    const onSubmit = data => {
        history.push(`/enroll_list`);
        const enrollData = {
            name,
            email,
            enrolls,
            data,
            oderTime: new Date().toDateString('dd/MM/yyyy')
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
            <div className="col-md-9 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Enroll Course</h5>
                < form className='' onSubmit={handleSubmit(onSubmit)} >
                    <input className="col-4" name="name" defaultValue={loggedInUser.name} {...register("name")} /><br />
                    <input className="col-4" name="email" defaultValue={loggedInUser.email} {...register("email")} /> <br />
                    <input className="col-4" name="price" defaultValue={price} {...register("price")} /> <br />
                    <input className="col-4" name="address" {...register("address")} /><br />
                    <input className="col-4" name="phone" {...register("phone")} /><br />
                    <div className="col-4">
                        <select className="form-control" name="status"{...register("status", { required: true })} >
                            <option disabled={true} value="Not set">Select Status</option>
                            <option value="Done">Done</option>
                            <option value="Pending">Pending</option>
                            <option value="Cancel">Cancel</option>
                        </select>
                    </div>
                    <input type="submit" value="Enroll" />
                </form >
            </div>
        </section >
    );
};

export default Enroll;
