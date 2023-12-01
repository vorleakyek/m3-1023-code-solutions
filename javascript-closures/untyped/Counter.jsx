import { useEffect, useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    getData();
    setCounter((prev) => prev + 1);
  }, [getData]);

  function getData() {
    // fetch data
    return { foo: 'bar' };
  }

  return <div>Fetching {counter} times</div>;
}
