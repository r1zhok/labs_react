import Footer from "../App/Footer/Footer";
import Layout from "../App/Layout/Layout";
import Filters from "./Filter";
import Items from "./Items";
import React from "react";

export default function Catalog () {
    return (
        <div>
            <Layout searchLine="true" />
            <Filters />
            <Items />
            <Footer />
        </div>
    );
}