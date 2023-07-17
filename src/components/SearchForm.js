import { useWindowSize } from "usehooks-ts";


export const SearchForm = () => {
    const { width } = useWindowSize();

    return (
        <form className={`${width <= 992 ? 'w-100' : 'w-50'} my-5`}>
            <input type='text' style={Styles.input} placeholder="Search verbs here.."  className={`bg-white w-100 border-0  py-2 px-3 rounded-3 overflow-hidden shadow`} />
        </form>
    )
}

const Styles = {
    input: {
        outline: 'none'
    }
}