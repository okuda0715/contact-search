import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/contactinfos')
            .then(res => {
                const result = JSON.stringify(res);
                console.log(result);
                // const contacts = res.data.map(obj => obj.data);
                // this.setState({ contacts });
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.contacts.map(contact =>
                        <li key={contact.firstName}>
                            {contact.firstName}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default List;