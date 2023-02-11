import React, { useState, useEffect, useRef } from 'react';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

export default function Test(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [selectedIndex]);

  return (
    <div className="letest">
      <div className="list" ref={listRef}>
        {items.map((item, index) => (
          <div
            key={item}
            className={`item ${selectedIndex === index ? 'selected' : ''}`}
            style={{ transform: `translateX(${selectedIndex * -100}%)` }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
