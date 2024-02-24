// import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';

// const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem('saved-clicks');
//     if (savedClicks !== null) {
//       return savedClicks;
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem('saved-clicks', clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };
const App = () => {
  const condition = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  return (
    <>
      <Description />
      <Options
        good={condition.good}
        neutral={condition.neutral}
        bad={condition.bad}
      />
      <Feedback />
    </>
  );
};

export default App;
