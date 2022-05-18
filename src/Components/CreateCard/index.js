import AddIcon from '../../Assets/Icons/add.svg';
import './styles.scss';


function CreateCard(props) {
    const { onCreateButtonClickHandler } = props;

    return <section className='create-button'>
        <button onClick={onCreateButtonClickHandler} className="create-button--circle">
            <img src={AddIcon} alt='Add Icon' />
        </button>
        <span className='create-button--text'>
            Create/Activate Cards
        </span>
    </section>
}

export default CreateCard;