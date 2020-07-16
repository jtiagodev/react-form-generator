import React from 'react';

const ErrorMessage = (props) => {
    const { text, children } = props;

    return (
        <span style={{ fontSize: "10px", color: "red" }}>{children}</span>
    )
};

export default ErrorMessage;