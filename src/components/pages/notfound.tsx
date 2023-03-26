import React from 'react';
import {Helmet} from "react-helmet-async";

const rotation = {
    hidden: {
        opacity: 0,
        scale: 1.6,
        transition: {
            type: "spring",
            stiffness: 40,
            restDelta: 0.5
        }
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 40,
            restDelta: 0.5
        }
    }
};

function NotFound() {
    return (
        <div className="d-flex h-auto h-md-100 flex-column justify-content-start justify-content-md-center">
            <Helmet>
                <title>Ops, Page not found</title>
                <meta name='description'
                      content='It looked link we can not find the document you are looking.Please browse other pages.' />
                <meta name={"robots"} content={process.env.ROBOTS} />
            </Helmet>
        </div>
    );
}


export default NotFound;