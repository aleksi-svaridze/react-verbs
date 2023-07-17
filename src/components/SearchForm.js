export const SearchForm = ({width, handleChange}) => {

    return (
        <form className={`${width <= 992 ? 'w-75' : 'w-50'} my-5`}>
            <input type='text' style={Styles.input} placeholder="Search verbs here.."  className={`bg-white w-100 border-0  py-2 px-3 rounded-3 overflow-hidden shadow`} onChange={e => handleChange(e)} />
        </form>
    )
}

const Styles = {
    input: {
        outline: 'none'
    }
}