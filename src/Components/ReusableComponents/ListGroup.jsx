import React, { Component } from 'react'
class Listgroup extends Component {
    state = {
        University: []
    }
    async componentDidMount() {
        fetch('http://localhost:53535/api/Employee/University_name')
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                this.setState({ University: res })
                console.log(this.state.University)

            })
    }
    render() {
        return (
            <div className='container m-5'>
                <ul class="list-group container">
                    <li class="list-group-item active" onClick={()=>this.props.onListItemClick('All Universities')}>All Universities</li>
                    {this.state.University.map((uni) => {
                        return (
                            <li class="list-group-item" onClick={()=>this.props.onListItemClick(uni)}>{uni}</li>

                        )
                    })}
                </ul>
            </div>
        );
    }
}
export default Listgroup
