import React from "react";
import BlueCar from "../../Icons/blue_car.jpg"
import styles from "./Home.styled"
import BMW from "../../Icons/bmw.jpg"
import Mercedes from "../../Icons/mercedes.webp"
import Lamborgini from "../../Icons/lamborgini.jpg"
import CardItem from "../../components/CardItem/CardItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const data = [
    {
        mark: "BMW",
        power: "400",
        image: BMW,
        speed: 320,
    },
    {
        mark: "Mercedes",
        power: "300",
        image: Mercedes,
        speed: 290,
    },
    {
        mark: "Lamborgini",
        power: "600",
        image: Lamborgini,
        speed: 350,
    },
];

const Home = () => {
    return (
        <div className="container">
            <div style={styles.container} className="row">
                <div className="col-md-6">
                    <img style={styles.img}
                        src={BlueCar}
                        alt="Зображення"
                        className="img-fluid"
                    />
                    </div>
                    <div className="col-md-6">
                    <h2 style={styles.textHeader}>Магазин найкращих машин</h2>
                    <p style={styles.text}>
                        Наш магазин надає тільки люксові автомобілі, в нашому асортименті
                        машин є різні екземпляри на будь-який смак і кошельок.
                    </p>
                </div>
            </div>
            <div style={styles.cardWrapper}>
                {data.map(({ mark, power, image, speed }, idx) => (
                    <CardItem
                        mark={mark}
                        power={power}
                        imageSrc={image}
                        speed={speed}
                        id={idx}
                    />
                ))}
            </div>
            <div style={styles.button_container}>
                <button style={styles.button} className="btn btn-primary">
                    <a className="nav-link" href="#">View more</a>
                </button>
            </div>
        </div>
    );
}

export default Home