import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Sidebar from '../Dashboard/Sidebar/Sidebar';


const AddService = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const serviceData = {
            key: data.key,
            name: data.name,
            subject: data.subject,
            price: data.price,
            duration: data.duration,
            imageURL: imageURL,
        };
        const url = `http://localhost:5000/addService`;
        console.log(serviceData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server site response', res))
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'ec9cd347f661e9286a2658fc44d6ede8');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-9 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Service</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="key" placeholder="Enter key" {...register("key")} /><br />
                    <input name="name" placeholder="Enter name" {...register("name")} /><br />
                    <input name="subject" placeholder="Enter subject" {...register("subject")} /><br />
                    <input name="price" placeholder="Enter price" {...register("price")} /><br />
                    <input name="duration" placeholder="Enter duration" {...register("duration")} /><br />
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} /><br />
                    <input type="submit" />
                </form>
            </div>
        </section >
    );
};

export default AddService;
