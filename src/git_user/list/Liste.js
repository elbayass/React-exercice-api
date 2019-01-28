import React from 'react';
import Git from '../Git_User'
import './Liste.css'



class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            currentPage: 1,
            todosPerPage: 500,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }



    componentDidMount() {
        this.setState({
            filtered: this.props.items
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.items
        });
    }

    handleChange(e) {
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
            currentList = this.props.items;
            newList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.props.items;
        }
        this.setState({
            filtered: newList,
            currentPage: 1
        });
    }
    render() {
        const { filtered, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentList = filtered.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderList = currentList.map((filtered) => {
            return <Git key={filtered}
                username={filtered}>
            </Git>
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(filtered.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div>
                <label for="inp" className="inp">
                    <input type="text" onChange={this.handleChange} placeholder="&nbsp;" />
                    <span className="label">Search</span>
                    <span className="border"></span>
                </label>

                <ul className='cart' onChange={this.handleChange}>
                    {renderList}
                </ul>

            </div>
        )
    }
}

export default List;