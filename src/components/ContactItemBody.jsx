import React from 'react';

function ContactItemBody({ name, tag }) {
    return (
        <div className="contact-item__body">
            <h3 className="contact-item__title">{name}</h3>
            <p className="contact-item__username">@{tagh}</p>
        </div>
    );
}

export default ContactItemBody;