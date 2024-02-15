import React from 'react'

const UseMap = () => {
    const arr = [10,20,30,40,50];
    const obj = [
        {
            id:1,
            name:"Aaryan",
            age:"10y"
        },
        {
            id:2,
            name:"Jatin",
            age:"7y"
        },
        {
            id:3,
            name:"Ayaan",
            age:"6y"
        },
        {
            id:4,
            name:"abc",
            age:"12y"
        }
    ];
  return (
    <div>
        <h1>UseMap Component</h1>
        <div>
            {
                arr.map((item,index)=><li key={index} type="none">{item}</li>)
            }
        </div>
        
        <div>
            {
                obj.map((data)=><li key={data.id} type="none">{data.id} - {data.name} - {data.age}</li>)
            }
        </div>
    </div>
  )
}

export default UseMap;