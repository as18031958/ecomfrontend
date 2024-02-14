import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../Allcss/homepage.css' // Import your CSS file for styling

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?size=626&ext=jpg&ga=GA1.1.1597514946.1706995668&semt=ais" alt="phone" className="carousel-image"/>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?size=626&ext=jpg&ga=GA1.1.1597514946.1706995668&semt=ais" alt="phone" className="carousel-image"/>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714071.jpg?size=626&ext=jpg&ga=GA1.1.1597514946.1706995668&semt=sph" alt="phone" className="carousel-image"/>
                    </div>
                    <div>

                    <img src="https://img.freepik.com/free-photo/people-with-glasses-composition_23-2150188078.jpg?size=626&ext=jpg&ga=GA1.1.1597514946.1706995668&semt=sph" alt="phone" className="carousel-image"/>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039303.jpg?size=626&ext=jpg&ga=GA1.1.1597514946.1706995668&semt=sph" alt="phone" className="carousel-image"/>
                </div>
                
            </Carousel>
        </div>
    );
}
