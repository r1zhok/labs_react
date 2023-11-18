import React from "react";
import BMW from "../../Icons/bmw.jpg"
import Mercedes from "../../Icons/mercedes.webp"
import Lamborgini from "../../Icons/lamborgini.jpg"
import Porshe from "../../Icons/Porshe.webp"
import CardItem from "../../components/CardItem/CardItem";
import styles from "./Items.styled";

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
    {
        mark: "Porshe",
        power: "600",
        image: Porshe,
        speed: 300,
    },
];

export default function Items() {
    return (
        <div className="container">
            <div style={styles.cardWrapper}>
                {data.map(({ mark, power, image, speed }, idx) => (
                    <CardItem
                        mark={mark}
                        power={power}
                        imageSrc={image}
                        speed={speed}
                        viewButton = {true}
                        id={idx}
                    />
                ))}
            </div>
        </div>
    );
}