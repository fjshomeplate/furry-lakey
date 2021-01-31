import React from "react";
import { Link } from "gatsby";
export default function Header() {
    return (
        <div className={`p-80`}>
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                <h1 className={`text-center text-white`}>GoLakey</h1>
            </Link>
        </div>
    );
}
