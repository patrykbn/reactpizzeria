import styles from './BillInput.module.scss';
import React from 'react';
import AmountInput from '../../common/AmountInput/AmountInput';

const BillInput = ({ value, onChange}) => {

    return (
        <div className={styles.billcontainer}>
        <span className={styles.bill}>Bill:</span>
        <span className={styles.dollarsign}>$</span>
        <AmountInput
            data-testid="bill"
            type="number"
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </div>
    )
};

export default BillInput;