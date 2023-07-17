import { useWindowSize } from "usehooks-ts";
import { useState } from "react";
import data from './data/verbs.json';

const getFilteredVerbs = (verbs, data) => {
  if(!verbs) {
    return [];
  }
 
  return data.filter(verb => {
    if(verb.verb.includes(verbs) || verb.past_tense.includes(verbs) || verb.past_participle.includes(verbs)) return verbs;
  });
}

const App = () => {
  const { width } = useWindowSize();
  const [verbs, setVerbs] = useState('');

  const filteredVerbs = getFilteredVerbs(verbs, data);

  return (
    <div className='py-5'>
      <div className='container d-flex flex-column align-items-center pt-5'>
        <h1 className={`text-capitalize text-white text-center ${width > 992 ? 'w-50' : 'w-75'}`}>Find irregular verbs in english</h1>
        <form className={`${width <= 992 ? 'w-100' : 'w-50'} my-5`}>
            <input type='text' style={Styles.input} placeholder="Search verbs here.."  className={`bg-white w-100 border-0  py-2 px-3 rounded-3 overflow-hidden shadow`} onChange={e => setVerbs(e.target.value)} />
        </form>
        {
            filteredVerbs.map(verb => (
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
      </div>
    </div>
  );
}

const Styles = {
  input: {
      outline: 'none'
  }
}

export default App;
