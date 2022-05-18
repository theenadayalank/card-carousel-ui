import AddIcon from '../../Assets/Icons/add.svg';
import './styles.scss';


function CreateCard() {
    const OnCreateButtonClickHandler = (event) => {
        alert('Create button clicked');
    }
    return <section className='create-button'>
        {/* <AddIcon /> */}
        <button onClick={OnCreateButtonClickHandler} className="create-button--circle">
            <img src={AddIcon} alt='Add Icon' />
        </button>
        <span className='create-button--text'>
            Create/Activate Cards
        </span>
    </section>
}

export default CreateCard;