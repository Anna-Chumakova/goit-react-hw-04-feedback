import propTypes from 'prop-types';
import styles from './FeedbackOption.module.css';

const FeedbackOptions = ({ leaveFeedbackGood, leaveFeedbackNeutral, leaveFeedbackBad }) => (
    <div className={styles.containerOptions}>
        <button className={styles.button} type="button" onClick={leaveFeedbackGood}>Good</button>
        <button className={styles.button} type="button" onClick={() => {leaveFeedbackNeutral()}}>Neutral</button>
        <button className={styles.button} type="button" onClick={() => {leaveFeedbackBad()}} >Bad</button>
    </div>
) 
FeedbackOptions.propTypes = {
    leaveFeedbackGood: propTypes.func.isRequired,
    leaveFeedbackNeutral: propTypes.func.isRequired,
    leaveFeedbackBad: propTypes.func.isRequired,
}
export default FeedbackOptions;