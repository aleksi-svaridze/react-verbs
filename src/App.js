import { useWindowSize } from "usehooks-ts";
import { useState } from "react";
import data from './data/verbs.json';
import SearchedItem from "./components/SearchedItem";
import { SearchForm } from "./components/SearchForm";

const getFilteredVerbs = (verbs, data) => {
  if(!verbs) {
    return [];
  }
 
  return data.filter(verb => (verb.verb.includes(verbs) || verb.past_tense.includes(verbs) || verb.past_participle.includes(verbs)));
}

const App = () => {
  const { width } = useWindowSize();
  const [verbs, setVerbs] = useState('');
  const filteredVerbs = getFilteredVerbs(verbs, data);

  const handleChange = (e) => {
    setVerbs(e.target.value);
  }

  return (
    <div className='py-5'>
      <div className='container d-flex flex-column align-items-center pt-5'>
        <h1 className={`text-capitalize text-white text-center ${width > 992 ? 'w-50' : 'w-75'}`}>Find irregular verbs in english</h1>
        <SearchForm width={width} handleChange={handleChange} />
        <SearchedItem width={width} filteredVerbs={filteredVerbs} />
      </div>
    </div>
  );
}

export default App;
