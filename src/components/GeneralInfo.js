import React from "react";
import { Link } from "gatsby";

const GI = (to, info, subHead) => (
    <div>
        <h2>The Lakeland Terrier</h2>
        <h3>{subHead}</h3>
        <br></br>
        <p>{info}</p>
        <Link to={{ to }}>Learn More</Link>
    </div>
);
export default GI;
