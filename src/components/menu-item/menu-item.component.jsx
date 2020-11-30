import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, image, size }) => (
    <div style={{
        backgroundImage: `url(${image})`
    }} className={`${size} menu-item`} >
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">BUY NOW</span>
        </div>
    </div >
);

export default MenuItem;