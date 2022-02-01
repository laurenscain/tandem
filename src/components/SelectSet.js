import React from 'react';

const SETS: Array[number] = [1234, 4321]
export const SelectSet: React.FC<Props> = ({ loadTileData }) => {
    const [selectedSet, setSelectedSet ] = React.useState(0);

    React.useEffect(() => {
        if(!selectedSet) setSelectedSet(SETS[0])
    }, []);
    React.useEffect(() => {
        loadTileData(selectedSet);
    }, [selectedSet]);


  return (<select onChange={(e) => setSelectedSet(e.currentTarget.value)}>
      {SETS.map(s=> <option key={s}>{s}</option>)}
  </select>);
}

export default SelectSet;