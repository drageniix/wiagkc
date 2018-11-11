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
        <input type="hidden" name="no_shipping" value={1} />
        <input
            type="hidden"
            name="image_url"
            src="https://wiakc.org/assets/images/logo-text.png"
        />
        <input type="hidden" name="return" value="https://wiakc.org" />
        <input type="hidden" name="cancel_return" value="https://wiakc.org" />
        <input type="hidden" name="shopping_url" value="https://wiakc.org" />
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
                <input
                    type="hidden"
                    name={`quantity_${index + 1}`}
                    value={ticket.quantity}
                />
            </div>
        ))}
        <input name="submit" type="image" src="assets/images/buynow.png" />
    </form>
);

PayPalForm.propTypes = {
    tickets: PropTypes.array.isRequired
};

export default PayPalForm;
