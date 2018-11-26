import React from 'react'
import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'
import Button from './components/Button'


class App extends React.Component {

    state = {
        spacePeople: []
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        const response = await fetch('http://api.open-notify.org/astros.json')
        const spacePeople = await response.json()
        this.setState({ spacePeople })
    }

    render() {
        return (
            <div>
                <Greeting />
                <ExampleComponent />
                <Button />
            </div>
        )}

}

export default App 