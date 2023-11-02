import React from "react";
import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import styles from "./Filter.styled";


export default function Filters() {

    const [open, setOpen] = useState(false);

    const toggleFilters = () => {
        setOpen(!open);
    };

    return(
        <div className="container" style={{marginTop: '50px'}}>
            <div className="row">
                <div className="col" onClick={toggleFilters}>
                    <div className="container-filter">
                        <button className="btn btn-primary">Фільтр 1</button>
                        <button className="btn btn-primary" style={{marginLeft: '45px'}}>Фільтр 2</button>
                        <button className="btn btn-primary" style={{marginLeft: '45px'}}>Фільтр 3</button>
                    </div>
                </div>
                <div className="col d-flex align-items-center"> 
                    <Button
                        className="btn btn-primary"
                        onClick={toggleFilters}
                        style={styles.button}>
                        Apply
                    </Button>
                </div>
            </div>
            <Collapse in={open}>
                <div className="container-filter">
                <div>Пункт 1</div>
                <div>Пункт 2</div>
                <div>Пункт 3</div>
                </div>
            </Collapse>
    </div>
    );
}