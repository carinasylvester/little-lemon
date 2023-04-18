import React from 'react';
import "./styles/ReservationsContent.css";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("Please enter your full name."),
    email: yup.string().required("Please enter your email address.").email("Invalid email"),
    telephone: yup.string().required("Please enter your phone number.").matches(/^\d{3}-\d{3}-\d{4}$/, "Phone number must match the format: ###-###-####"),
    guests: yup.number().min(1, "Please select at least 1 guest.").required("Please specify number of guests for your reservation."),
    date: yup.string().required("Please select a date and time."),
})

function Form() {


    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    console.log(errors)

    const formSubmit = (data) => {
        console.table(data)
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="John Doe" name="name" {...register("name")} />
                    <span className="error-message">{errors.name?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="text@email.com" name="email" {...register("email")}/>
                    <span className="error-message">{errors.email?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="telephone">Telephone</label>
                    <input type="tel" placeholder="000-000-0000" name="telephone" {...register("telephone")}/>
                    <span className="error-message">{errors.telephone?.message}</span>
                </div>

                {/*<div className="guestsdate">*/}
                <div className="field occasion">
                    <label htmlFor="occasion">Occasion (optional)</label>
                    <div className="options">
                        <select name="occasion" {...register("occasion")}>
                            <option value="select">Select occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
                <div className="field guest">
                    <label htmlFor="guests">Guests</label>
                    <input type="number" placeholder="2" name="guests" {...register("guests")}/> 
                    <span className="error-message">{errors.guests?.message}</span>
                </div>
                {/*</div>*/}
                        
                <div className="field">
                    <label htmlFor="date">Date & Time</label>
                    <input type="datetime-local" name="date" {...register("date")} />
                    <span className="error-message">{errors.date?.message}</span>
                </div>
                <button className="reserve-btn" type="submit">Reserve</button>
            </fieldset>
        </form>
  )
}

export default Form