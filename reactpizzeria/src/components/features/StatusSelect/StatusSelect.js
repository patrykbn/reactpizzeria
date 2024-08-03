import styles from './StatusSelect.module.scss';
import React from "react";
import Select from "../../common/Select/Select";

const StatusSelect = ({ value, onChange}) => {

    return(
        <div>
                <span className={styles.status}>Status:</span>
                <Select value={value} data-testid="status-select" onChange={e => onChange(e.target.value)}>
                    <option value="Free">Free</option>
                    <option value="Busy">Busy</option>
                    <option value="Cleaning">Cleaning</option>
                </Select>
            </div>
    )
};

export default StatusSelect;