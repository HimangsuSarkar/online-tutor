import React, { useContext, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';


const AddReview = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    const onSubmit = data => {
        const ReviewData = {
            key: data.key,
            name: data.name,
            address: data.address,
            quote: data.quote,
            imageURL: imageURL,
        };
        const url = `http://localhost:5000/addReview`;
        console.log(ReviewData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ReviewData)
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
                <h5 className="text-brand">Add a Review</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="key" placeholder="Enter key" {...register("key")} /><br />
                    <input name="name" placeholder="Enter name" {...register("name")} /><br />
                    {/* <input name="email" placeholder="Enter Email" defaultValue={loggedInUser.email} {...register("email")} /><br /> */}
                    <input name="address" placeholder="Enter address" {...register("address")} /><br />
                    <textarea name="quote" type="" placeholder=" Enter your quote" {...register("quote")} /><br />
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} /><br />
                    <input type="submit" />
                </form>
            </div>
        </section >
    );
};

export default AddReview;
