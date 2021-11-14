import React, { useState, useEffect} from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import { user as userState, UserContext } from './context/UserContext'
import UserInfo from './components/UserInfo'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import ComponentContext from './components/ComponentUseContext'

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
        </Provider>
      </header>
    </div>
  );
}

export default App;
