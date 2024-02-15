import React from 'react';

const UseFilter = () => {
    const arr = [10,20,30,40,50];
    const filtered = arr.filter(item=>item>20);
    const obj = ["Aaryan", "Jatin", "Ayaan", "abc"];
    const filterObj = obj.filter(names => names.includes('A'));
  return (
    <div>
          <h1>UseMap/UseFilter Component</h1>
        <div>
            {
                filtered.map((itemss,index)=><li key={index} type="none">{itemss}</li>)
            }
        </div>
        <div>
            {
                filterObj.map((data,index)=><li key={index} type="none">{data}</li>)
            }
        </div>
    </div>
  )
}

export default UseFilter;