import React from "react";
import Banner from "../../Banner";
import Footer from "../../Footer";
const Team = () => {
    const image = [
        {
            src: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000",
            name: "Path2D",
            position: "salesman"
        },
        {
            src:
                "https://images.squarespace-cdn.com/content/v1/59e5d996dc2b4a72ea60c9dc/1554837474583-QWHR32E8MCV1NHGG4AY4/850_9556.jpg?format=1500w",
            name: "Path2D",
            position: "BuisnessOwner"
        },
        {
            src: "https://www.letseatgrandma.com/wp-content/uploads/2018/10/linkedin-headshot-example-1.jpg",
            name: "Path2D",
            position: "Photographer"
        },
        {
            src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNoZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
            name: "Path2D",
            position: "car Detailist"
        },
        {
            src: "https://img.freepik.com/premium-photo/close-up-handsome-caucasian-man-smiling-with-white-teeth-looking-confident-camera-standing-blue-shirt-white-background_1258-49632.jpg",
            name: "Path2D",
            position: "mechanic"
        },
        {
            src: "https://img.freepik.com/premium-photo/healthy-smile-dentistry-concept-man-handsome-guy-smiling-white-background-guy-cheerful-smile-macho-happy-satisfied-teeth-health-beauty-brilliant-smile-teeth-whitening-procedure_474717-108692.jpg?w=360",
            name: "Path2D",
            position: "manager"
        }
    ]
    return (
        <div>
            <section className="Container">
                <div className="HeroContainerText">
                    <h1>Team</h1>
                    <h3><a href="/">Home</a>/Team</h3>
                </div>
            </section>
            <section className="Container">
                <div className="employeeContainer">
                    {image.map((item, index) => (
                        <div className="employeeCard">
                            <img src={item.src} alt="" className="employeeCard_img" />
                            <div className="employeeDetail">
                                <h2>{item.name}</h2>
                                <h3>{item.position}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="banner">
                <Banner heading1="Book a car by getting in touch with us" highlight="📞 +91 123-456-7890" />
            </section>
            <Footer />
        </div>
    );
}

export default Team;