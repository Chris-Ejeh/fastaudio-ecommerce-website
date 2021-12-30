import { ChangeEvent, FC, FormEventHandler } from 'react';

import { FormDataProps, TextWidthType } from '../../utils/types';
import styles from './CheckoutForm.module.scss';
import TextInput from './TextInput';

interface FormProps {
    inputs: FormDataProps;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: FormEventHandler<HTMLFormElement> | undefined;
}

const Form: FC<FormProps> = ({ handleChange, inputs, onSubmit, children }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className={styles.checkoutContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.fieldset}>
                        <p>Billing Details</p>

                        <div className={styles.inputWrapper}>
                            <TextInput
                                title="Name"
                                htmlFor="name"
                                type="text"
                                name="name"
                                placeholder="Alexei Ward"
                                autoComplete="name"
                                InputWidth={TextWidthType.HalfWidth}
                                value={inputs.name}
                                onChange={handleChange}
                            />
                            <TextInput
                                title=" Email Address"
                                htmlFor="email"
                                type="email"
                                name="email"
                                placeholder="Alexei@gmail.com"
                                autoComplete="email"
                                InputWidth={TextWidthType.HalfWidth}
                                value={inputs.email}
                                onChange={handleChange}
                            />
                            <TextInput
                                title="Phone Number"
                                htmlFor="tel"
                                type="tel"
                                name="tel"
                                placeholder="+1 902-544-3434"
                                autoComplete="tel"
                                InputWidth={TextWidthType.HalfWidth}
                                value={inputs.tel}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.fieldset}>
                        <p>Shipping Info</p>

                        <div className={styles.inputWrapper}>
                            <TextInput
                                title="Address"
                                htmlFor="address"
                                type="text"
                                name="address"
                                placeholder="1137 Williams Avenue"
                                InputWidth={TextWidthType.FullWidth}
                                value={inputs.address}
                                onChange={handleChange}
                            />
                            <TextInput
                                title="Zip Code"
                                htmlFor="zip"
                                type="text"
                                name="zip"
                                placeholder="10001"
                                InputWidth={TextWidthType.HalfWidth}
                                value={inputs.zip}
                                onChange={handleChange}
                            />
                            <TextInput
                                title="City"
                                htmlFor="city"
                                type="text"
                                name="city"
                                placeholder="New York"
                                InputWidth={TextWidthType.HalfWidth}
                                value={inputs.city}
                                onChange={handleChange}
                            />
                            <TextInput
                                title="  Country"
                                htmlFor="country"
                                type="text"
                                name="country"
                                placeholder="United States"
                                autoComplete="country"
                                InputWidth={TextWidthType.HalfWidth}
                                value={inputs.country}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.fieldset}>
                        <p>Payment Details</p>

                        <div className={styles.radioContainer}>
                            <label className={styles.radioLabel} htmlFor="payment">
                                Payment Method
                            </label>
                            <div>
                                <div className={styles.radioButton}>
                                    <TextInput
                                        type="radio"
                                        name="payment"
                                        InputWidth={TextWidthType.radioWidth}
                                        value={inputs.payment}
                                        onChange={handleChange}
                                    />
                                    <p className={styles.radioText}>e-Money</p>
                                </div>
                                <div className={styles.radioButton}>
                                    <TextInput
                                        type="radio"
                                        name="payment"
                                        InputWidth={TextWidthType.radioWidth}
                                        value={inputs.payment}
                                        onChange={handleChange}
                                    />
                                    <p className={styles.radioText}>Cash on Delivery</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.inputWrapper}>
                            <TextInput
                                title="e-Money Number"
                                htmlFor="money"
                                type="text"
                                name="moneyNumber"
                                placeholder="43634563456"
                                InputWidth={TextWidthType.HalfWidth}
                                value={inputs.moneyNumber}
                                onChange={handleChange}
                            />
                            <TextInput
                                title="e-Money PIN"
                                htmlFor="e-Money"
                                type="text"
                                name="pin"
                                placeholder="4563"
                                InputWidth={TextWidthType.HalfWidth}
                                value={inputs.pin}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.cartContainer}>{children}</div>
            </div>
        </form>
    );
};
export default Form;
