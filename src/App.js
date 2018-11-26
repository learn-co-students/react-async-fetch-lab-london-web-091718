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
        console.log(spacePeople)
        this.setState({ spacePeople })
    }

    render() {
        return (
            <div>
                {this.state.spacePeople.map((person, id) => <h1 key={id}>{person.name}</h1>)}
                <Greeting />
                <ExampleComponent />
                <Button />
            </div>
        )
    }

}

export default App 