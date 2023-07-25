import React, { useState } from "react";

const Pick_Container = (props) => {
    const images = ["https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Honda-City--160320231754.jpg&w=730&h=484&q=75&c=1",
        "https://zedextata.co.in/wp-content/uploads/2021/02/BG.png",
        "https://images.carandbike.com/car-images/colors/hyundai/i20-n-line/hyundai-i20-n-line-blue-black-dual-tone.png?v=1630610273",
        "https://shreepng.com/img/Inside/Car/Tata/Altroz%20Dark%20Exterior%20tata.png",
        "https://ph-files.imgix.net/6fe84a1e-ba30-4734-b992-5825b415f3f4.png?auto=format&fit=crop&frame=1&h=512&w=1024",
        "https://img2.gaadicdn.com/images/carNewsimages/userimages/650X420/20631/Hyundai.jpg"
    ];
    const information = [
        {
            brand: "Honda",
            Model: "City",
            Year: "2023",
            Transmission: "automatic",
            Fuel: "petrol",
            price:10000
        },
        {
            brand: "Tata",
            Model: "Harrier",
            Year: "2019",
            Transmission: "manual",
            Fuel: "Diesel",
            price:15000
        },
        {
            brand: "Hyundai",
            Model: "i20",
            Year: "2021",
            Transmission: "manual",
            Fuel: "petrol",
            price:8000
        },
        {
            brand: "Tata",
            Model: "Altroz",
            Year: "2018",
            Transmission: "manual",
            Fuel: "diesel",
            price:7000
        },
        {
            brand: "Mahindra",
            Model: "XUV700",
            Year: "2022",
            Transmission: "Automatic",
            Fuel: "petrol",
            price:20000
        },
        {
            brand: "hyundai",
            Model: "verna",
            Year: "2017",
            Transmission: "manual",
            Fuel: "petrol",
            price:11000
        }
    ]
    const [carNo, setCarNo] = useState(0);
    const [carImg, setCarImg] = useState(images[carNo]);
    const [carInfo, setCarInfo] = useState(information[carNo]);

    function handleClick(event) {
        console.log(carInfo)
        setCarNo(event.target.id);
        setCarImg(images[event.target.id]);
        setCarInfo(information[event.target.id]);
    }
    return (
        <div className={props.className}>
            <div className="carNames">
                {information.map((item,index)=>(<button onClick={handleClick} className={parseInt(carNo)===parseInt(index)?"selectedCar":""} id={index}>{item.brand+" "+item.Model}</button>))}
            </div>
            <div className="carImgContainer">
                <img src={carImg} className="carImg" alt="car IMG"></img>

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
                        <span>{carInfo.Model}</span>
                    </div>
                    <div className="carDetails_table_col">
                        <span>Year</span>
                        <span>{carInfo.Year}</span>
                    </div>
                    <div className="carDetails_table_col">
                        <span>Transmission</span>
                        <span>{carInfo.Transmission}</span>
                    </div>
                    <div className="carDetails_table_col">
                        <span>Fuel</span>
                        <span>{carInfo.Fuel}</span>
                    </div>
                    <button>Reserve Now</button>
                </div>
            </div>
        </div>
    )
}
export default Pick_Container