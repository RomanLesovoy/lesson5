import React, { useState, useEffect} from 'react';
import { Provider } from 'react-redux'
import store from './store/old'
import './App.css';
import { user as userState, UserContext } from './context/UserContext'
import UserInfo from './components/UserInfo'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import ComponentContext from './components/ComponentUseContext'
// import Universities from "./components/Universities";
import UserFromApi from "./components/UserFromApi";
import Post from "./components/Post";

function App() {
  const [user, setUser] = useState(userState);

  useEffect(() => {
    setTimeout(() => {
        setUser({ ...user, userName: 'Romka' })
    }, 2000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <UserContext.Provider value={{ user, updateState: setUser }}>
          <UserInfo />
          <ComponentContext />
        </UserContext.Provider>

        <Provider store={store}>
          <Counter />
          <CounterClass />
          {/*<Universities />*/} {/* should use new store */}
          <UserFromApi />
          <Post title={'title'} text={'text'} id={234} date={new Date()} />
        </Provider>
      </header>
    </div>
  );
}

export default App;
