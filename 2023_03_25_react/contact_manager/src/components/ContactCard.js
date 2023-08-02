import React from "react";
import shiv from "../images/shiv.jpg";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={ shiv } alt="Shiv" />
                <div className="content">
                    <div className="Headre">{ name}</div>
                    <div className="Headre">{ email}</div>
                </div>
                <i className="trash alternate outline right floated icon"
                style={{color : 'red' , marginTop : '7px' }}></i>
            </div>
    )
}

export default ContactCard;