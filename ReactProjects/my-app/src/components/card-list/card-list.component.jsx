import { Component } from 'react';

class CardList extends Component {   
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster) => (
                    <div className='card-container'>
                    </div>
                ))}
            </div>
        );
    }
}

export default CardList;