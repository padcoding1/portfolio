// PoolingLogic.js

import { useState, useEffect } from 'react';

const usePooling = (initialSize = 10) => {
  const [pooledCubes, setPooledCubes] = useState([]);
  const [borrowedCubes, setBorrowedCubes] = useState([]);

  useEffect(() => {
    // Initialize cube pool
    const pool = Array(initialSize)
      .fill(null)
      .map((_, idx) => ({ id: idx, available: true }));
    setPooledCubes(pool);
    console.log('Cube pool initialized', pool);
  }, [initialSize]);

  const borrowCube = (techItem) => {
    const availableCube = pooledCubes.find((cube) => cube.available);
    if (availableCube) {
      availableCube.available = false;
      setBorrowedCubes((prev) => [...prev, techItem]);
    }
    console.log(`Borrowed cube for: ${techItem.name}`);
  };

  const returnCubes = () => {
    // Release all borrowed cubes back to the pool
    setBorrowedCubes([]);
    setPooledCubes(pooledCubes.map((cube) => ({ ...cube, available: true })));
    console.log('Returned all cubes to the pool');
  };

  return { borrowedCubes, borrowCube, returnCubes };
};

export default usePooling;
