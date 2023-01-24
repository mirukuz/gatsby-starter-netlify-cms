
import React from "react";
import FullWidthImage from "./FullWidthImage";
import { GatsbyImage } from "gatsby-plugin-image";

export default ({
    img,
    title,
    subheading,
    agent,
    mainpitch
}) => {
    return (
        <div style={{ position: "relative"}}>
            <FullWidthImage img={img} title={title} subheading={subheading} />
            <GatsbyImage
                style={{ position: "absolute", bottom: 0, right: 240 }}
                image={agent}
                // This is a presentational image, so the alt should be an empty string
                alt="agent photo"
                formats={["auto", "webp", "avif"]}
            />
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="content">
                        <div className="content">
                            <div className="tile">
                            <h1 className="title">{mainpitch.title}</h1>
                            </div>
                            <div className="tile">
                            <h3 className="subtitle">{mainpitch.description}</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}