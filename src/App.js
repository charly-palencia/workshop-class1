import {useState} from 'react';
import './App.css';
import List from './List';
import Search from './Search';

function App() {
  /*
   * NEW TOPICS
   * useState
   * https://reactjs.org/docs/hooks-state.html
   *
   * destructuring
   * https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
   */
  const [searchTerm, setSearchTerm] = useState("");

  /*
   * NEW TOPICS
   * useEffect
   * https://reactjs.org/docs/hooks-effect.html
   */
  const handleChange = ({target: {value}}) => {
    setSearchTerm(value);
  };


  const profiles = [{
    id: 1,
    image: "https://i.pinimg.com/474x/55/ba/30/55ba30e8f83d0064ee7669dc203ad1d5.jpg",
    name: "Pays For Account Never Watches"
  },
  {
    id: 2,
    image: "https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg",
    name: "Ex Still Has Your Password"
  }];

  /*
   * NEW TOPICS
   * Array.prototype.filter
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   *
   * String.prototype.toLowerCase
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
   *
   * Ternary Operator
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   */
  const filteredProfiles = profiles.filter(({name}) => {
    const cleanedName = name.toLowerCase();
    return  !searchTerm.trim() ? true : cleanedName.includes(searchTerm)
  });


  /*
   * NEW TOPICS
   * JSX
   * https://reactjs.org/docs/introducing-jsx.html#gatsby-focus-wrapper
   */
  return (
    <div className="App">
      <div className="logo"></div>

      <div className="wrapper">
        <h1>Who's Watching?</h1>
        <Search onChange={handleChange}/>
        <List items={filteredProfiles}/>
      </div>
    </div>
  );
}

export default App;
