import styles from './AmountInput.module.scss';

const AmountInput = props => {
  return (
    <input
      {...props}
      className={styles.input}
      type="text" />
  );
};

export default AmountInput;