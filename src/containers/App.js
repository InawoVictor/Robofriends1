import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';


class App extends Component {
    constructor (){
        super()
        this.state = {
            robot: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robot: user}));
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render(){
        const {robot, searchfield} =this.state
        const filteredRobots = robot.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        }); 

        return !robot.length ?  <h1>Loading</h1>:
             (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    < SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            < CardList robot={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        
        
    }
    
}

export default App;