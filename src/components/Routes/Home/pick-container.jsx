import React, { useEffect, useState } from "react";

const Pick_Container = (props) => {
    const [information,setInformation]=useState([]);
    const [data,setData]=useState([]);
    const [carNo, setCarNo] = useState(0);
    const [carInfo, setCarInfo] = useState("");
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                let response=await fetch(process.env.REACT_APP_BASE_URL+process.env.REACT_APP_GET_CARS);
                let dataReceived=await response.json();
                setData(dataReceived);
                setCarInfo(dataReceived[carNo]);
                var info=dataReceived.map(item=>item.brand+" "+item.model);
                setInformation(info);
                props.getCars(info);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[]);    

    function handleClick(event) {
        setCarNo(event.target.id);
        setCarInfo(data[event.target.id]);
    }
    return (
        <div className={props.className}>
            <div className="carNames">
                {information.map((item,index)=>(<button onClick={handleClick} className={parseInt(carNo)===parseInt(index)?"selectedCar":""} id={index}>{item}</button>))}
            </div>
            <div className="carImgContainer">
                <img src={carInfo.image} className="carImg" alt="car IMG"></img>

            </div>
            <div className="carDetails">
                <div>
                    <div className="carDetails_price">
                        <span>Rs{carInfo.price}/per day</span>
                    </div>
                    <div className="carDetails_table_col">
                        <span>brand</span>
                        <span>{carInfo.brand}</span>
                    </div>
                    <div className="carDetails_table_col">
                        <span>Model</span>
                        <span>{carInfo.model}</span>
                    </div>
                    <div className="carDetails_table_col">
                        <span>Year</span>
                        <span>{carInfo.year}</span>
                    </div>
                    <div className="carDetails_table_col">
                        <span>Transmission</span>
                        <span>{carInfo.transmission}</span>
                    </div>
                    <div className="carDetails_table_col">
                        <span>Fuel</span>
                        <span>{carInfo.fuel}</span>
                    </div>
                    <button class="reserve" onClick={props.onClick}>Reserve Now</button>
                </div>
            </div>
        </div>
    )
}
export default Pick_Container