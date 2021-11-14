import React from 'react'
import { UserContext } from '../context/UserContext';

class ComponentUseContext extends React.Component {
    componentDidMount() {
        const { updateState } = this.context;
        setTimeout(() => {
            updateState({ userName: 'new User', surname: 'undefined' })
        }, 5000)
    }

  render() {
    const { user } = this.context;

    return (
        <div>
            { user.userName }
        </div>
    )
  }
}
ComponentUseContext.contextType = UserContext;

export default ComponentUseContext
