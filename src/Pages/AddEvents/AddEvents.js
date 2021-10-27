import React from 'react';
import { useForm } from "react-hook-form";
import './AddEvents.css';


const AddEvents = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div className="add-event">
            <h2>Add Events</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("Image")} placeholder="Image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;