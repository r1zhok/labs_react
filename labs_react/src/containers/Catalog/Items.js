import React, { useEffect, useState } from "react";
import styles from "./Items.styled";
import { getAllCars } from "../../API/api";
import CardItem from "../../components/CardItem/CardItem";

export default function Items(props) {
    const [filteredCars, setFilteredCars] = useState([]);

    return (
        <div className="container">
            <div style={styles.cardWrapper}>
                {filteredCars.map(car => (
                    <CardItem
                        id={car.id}
                        mark={car.mark}
                        power={car.power}
                        speed={car.speed}
                        photo={car.urlPhoto}
                        viewButton={true}
                        key={car.id}
                    />
                ))}
            </div>
        </div>
    );
}
