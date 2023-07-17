const SearchedItem = ({width, filteredVerbs}) => {

    return (
       <>
            {
            filteredVerbs.map(verb => (
                <div className={`shadow ${width <= 992 ? 'w-100' : 'w-75'} mb-4 text-center`} key={verb.verb}>
                    <div className='d-flex justify-content-between rounded-top-3 overflow-hidden'>
                        <div className={`${width >= 768 ? 'fs-5 px-3' : 'fs-6 px-1'} bg-primary text-white fw-bolder w-100 text-capitalize py-2`}>Verb</div>
                        <div className={`${width >= 768 ? 'fs-5 px-3' : 'fs-6 px-1'} bg-primary text-white fw-bolder w-100 text-capitalize py-2`}>Past Tense</div>
                        <div className={`${width >= 768 ? 'fs-5 px-3' : 'fs-6 px-1'} bg-primary text-white fw-bolder w-100 text-capitalize py-2`}>Past Participle</div>
                    </div>
                    <div className='d-flex justify-content-between rounded-bottom-3 bg-white'>
                        <div className={`${width >= 768 ? 'fs-5 px-3' : 'fs-6 px-1'} w-100 fw-medium text-capitalize py-3`}>{verb.verb}</div>
                        <div className={`${width >= 768 ? 'fs-5 px-3' : 'fs-6 px-1'} w-100 fw-medium text-capitalize py-3`}>{verb.past_tense}</div>
                        <div className={`${width >= 768 ? 'fs-5 px-3' : 'fs-6 px-1'} w-100 fw-medium text-capitalize py-3`}>{verb.past_participle}</div>
                    </div>
                </div>
            ))
          }
        </>
    )
}

export default SearchedItem;