import { useState } from 'react';
import { Counter } from './Counter';
import { Timer } from './Timer';

export function App() {
  const [part1, setPart1] = useState(true);
  const text = part1 ? 'Switch to Part2' : 'Switch to Part 1';
  return (
    <div>
      {part1 && <Timer />}
      {!part1 && <Counter />}
      <button onClick={() => setPart1(!part1)}>{text}</button>
    </div>
  );
}
