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
    const { displayName, email } = loggedInUser;

    useEffect(() => {
        fetch('http://localhost:5000/service/' + key)
            .then(res => res.json())
            .then(data => setEnrolls(data))
    }, [key])
    // const { name, subject, price, duration } = enrolls;


    const onSubmit = data => {
        history.push(`/enroll_list`);
        const enrollData = {
            displayName,
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
                < form className='ship-form' onSubmit={handleSubmit(onSubmit)} >
                    < input name="displayName" defaultValue={loggedInUser.displayName} {...register("displayName")} /><br />
                    < input name="email" defaultValue={loggedInUser.email} {...register("email")} /> <br />
                    < input name="address" {...register("address")} /><br />
                    < input name="phone" {...register("phone")} /><br />
                    <input type="submit" value="Enroll" />
                </form >
            </div>
        </section >
    );
};

export default Enroll;
