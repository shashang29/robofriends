import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        pending: state.requestRobots.pending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),

        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends React.Component {
   
    componentDidMount() {
        this.props.onRequestRobots();
      }

    render() {

        const { searchField, onSearchChange, robots, pending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return (robot.name.toLowerCase().includes(searchField.toLowerCase()))
        })
        return pending ?
            <h1 className='tc'>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox handleChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )


    }
}





export default connect(mapStateToProps, mapDispatchToProps)(App);
