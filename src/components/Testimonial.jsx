import React, { useEffect, useState } from "react";
import TestimonialBox from "./Routes/Home/Testimonial_Box";
import Heading from "./Routes/Home/Heading";

const Testimonial=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                let response=await fetch(process.env.REACT_APP_GET_TESTIMONIALS);
                let dataReceived=await response.json();
                setData(dataReceived);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[]);
    return(
        <section className="Container">
            <div>
                <Heading heading1="Reviewed by People" heading2="Client's Testimonials" details="Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you." className="testimonialTitle" />
            </div>
            <div className="testimonials">
            {data.map((item,index)=>(
                <TestimonialBox review={item.review} name={item.name} location={item.location} className="testimonialBox" src={item.image}/>
            ))}
            </div>
        </section>
    );
}
export default Testimonial;