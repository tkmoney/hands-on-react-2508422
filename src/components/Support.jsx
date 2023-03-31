import {useState, useEffect, useInsertionEffect} from 'react';
const pageTitle = document.title;


export default () => {
  const [count, setCount] = useState(0);
  useInsertionEffect(()=>{
    count && (document.title = `${pageTitle}--${count}`);
  })

  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {count === 0 ? 'Click to support' : `Supported ${count}`}
    </button>
  )
}
