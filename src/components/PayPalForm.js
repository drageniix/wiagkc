import React from 'react';
import PropTypes from 'prop-types';

export const PayPalForm = ({ tickets }) => (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="POST">
        <input type="hidden" name="cmd" value="_cart" />
        <input
            type="hidden"
            name="business"
            value="westindianassociationkc@gmail.com"
        />
        <input type="hidden" name="upload" value="1" />
        {tickets.map((ticket, index) => (
            <div key={index}>
                <input
                    type="hidden"
                    name={`item_name_${index + 1}`}
                    value={ticket.title}
                />
                <input
                    type="hidden"
                    name={`item_number_${index + 1}`}
                    value={2018120 + index + 1}
                />
                <input
                    type="hidden"
                    name={`amount_${index + 1}`}
                    value={ticket.price}
                />
                <input type="hidden" name="no_shipping" value={1} />
                <input
                    type="hidden"
                    name={`quantity_${index + 1}`}
                    value={ticket.quantity}
                />
            </div>
        ))}
        <input type="hidden" name="shopping_url" value="https://wiakc.org" />
        <input
            name="submit"
            type="image"
            src="https://www.paypalobjects.com/webstatic/en_US/btn/btn_buynow_cc_171x47.png"
        />
    </form>
);

PayPalForm.propTypes = {
    tickets: PropTypes.array.isRequired
};

export default PayPalForm;
