import React, {Component} from 'react';

class Cart extends Component {

    render() {
        const {data, onIncrease, onDecrease, onDelete} = this.props;

        let totalPrice = 0;
        const renderBooks = data.map(({id, title, price, count, total}) => {
            totalPrice += total;
            return (
                <tr key={id}>
                    <td>
                        {title}
                    </td>
                    <td>
                        {total}
                    </td>
                    <td>
                        {count}
                    </td>
                    <td>
                        <button onClick={() => onDecrease({id, title, price})}>-</button>
                        <button onClick={() => onIncrease({id, title, price})}>+</button>
                        <button onClick={() => onDelete({id, title, price})}>Удалить</button>
                    </td>
                </tr>
            )
        });

        return (
            <>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th colSpan={'3'}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderBooks}
                    </tbody>
                </table>
                <b>Total:{totalPrice}тг.</b>
            </>
        );
    }
}


export default Cart;