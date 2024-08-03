import styles from './peopleInput.module.scss';
import React from 'react';
import AmountInput from '../../common/AmountInput/AmountInput';

const PeopleInput = ({ currentPeople, peopleMax, onCurrentPeopleChange, onPeopleMaxChange}) => {

    return ( 
        <div className={styles.peoplecontainer}>
                <span className={styles.people}>People:</span>
                <AmountInput
                    data-testid="currentPeople"
                    type="number"
                    value={currentPeople}
                    onChange={e =>  onCurrentPeopleChange(e.target.value)}
                />
                <span>/</span>
                <AmountInput
                    data-testid="peopleMax"
                    type="number"
                    value={peopleMax}
                    onChange={e => onPeopleMaxChange(e.target.value)}
                />
            </div>
    )
};

export default PeopleInput;