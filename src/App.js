import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.onClickAdd = this.onClickAdd.bind(this)
        this.onClickSub = this.onClickSub.bind(this)
    }

// add two event functions to our button click and acsess the Apps State
    onClickAdd() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }   
        })
    }

    onClickSub() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }


    render() {

        return (
            <>
                <h1> The count is : {this.state.count} </h1>
                <button onClick={this.onClickAdd}> Add </button>
                <button onClick={this.onClickSub}> Sub </button>
            </>
            
        )
    }
}

export default App