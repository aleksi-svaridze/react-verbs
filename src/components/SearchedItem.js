import Verbs from '../data/verbs.json';
import { useWindowSize } from "usehooks-ts";


const SearchedItem = () => {
    const { width } = useWindowSize();

    return (
       <>
            {
                Verbs.map(verb => (
                    <div className={`shadow ${width <= 992 ? 'w-100' : 'w-50'} mb-4`} key={verb.verb}>
                        <div className='d-flex justify-content-between rounded-top-3 overflow-hidden'>
                            <div className='bg-primary text-white fw-bolder w-100 text-capitalize px-3 py-2'>Verb</div>
                            <div className='bg-primary text-white fw-bolder w-100 text-capitalize px-3 py-2'>Past Tense</div>
                            <div className='bg-primary text-white fw-bolder w-100 text-capitalize px-3 py-2'>Past Participle</div>
                        </div>
                        <div className='d-flex justify-content-between rounded-bottom-3 bg-white'>
                            <div className=' w-100 px-3 fw-medium text-capitalize py-3'>{verb.verb}</div>
                            <div className=' w-100 px-3 fw-medium text-capitalize py-3'>{verb.past_tense}</div>
                            <div className=' w-100 px-3 fw-medium text-capitalize py-3'>{verb.past_participle}</div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default SearchedItem;