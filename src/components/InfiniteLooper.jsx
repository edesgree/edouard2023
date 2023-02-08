import React from 'react';
export default function InfiniteLooper({ speed, direction, children }) {
  const [looperInstances, setLooperInstances] = React.useState(1);
  const outerRef = React.useRef < HTMLDivElement > null;
  const innerRef = React.useRef < HTMLDivElement > null;

  const setupInstances = React.useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const instanceWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
    }
    resetAnimation();
  }, [looperInstances]);
  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 50);
    }
  }
  React.useEffect(() => {
    window.addEventListener('resize', setupInstances);

    return () => {
      window.removeEventListener('resize', setupInstances);
    };
  }, []);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef}>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal'
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
