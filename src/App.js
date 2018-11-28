// create your App component here
import React from 'react'

class App extends React.Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    people: [...data.people]
                })
             }
        )
    }       

    render() {
        return (
            <div>
                <ul>
                    {this.state.people.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default App;
