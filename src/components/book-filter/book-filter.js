import React, {Component} from 'react';
import isEqual from 'lodash.isequal';

const initialState = {
    title: '',
    author: ''
};

const prepareFilter = ({title, author}) => {
    return {
        title: title || '',
        author: author || ''
    }
};

class BookFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...prepareFilter(props.filter)
        };

    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.filter, this.props.filter)) {
            this.setState(prev => ({
                ...prepareFilter(this.props.filter)
            }));
        }
    }

    changeFilter = (e) => {
        const target = e.currentTarget;
        const fieldName = target.name;
        const value = target.value;

        this.setState(() => ({
                [fieldName]: value
            }),
            () => this.props.setFilter(this.state)
        );
    };

    resetFilter = () => {
        this.setState(() => ({
                ...initialState
            }),
            () => this.props.setFilter(this.state)
        );
    };

    render() {
        const {title, author} = this.state;

        return (
            <div className="row">
                <div className="col-md-6">
                    <label>Название книги</label>
                    <input type="text" className="form-control" name={'title'} value={title}
                           onChange={this.changeFilter}/>
                </div>
                <div className="col-md-6">
                    <label>Автор книги</label>
                    <select className="form-control" name={'author'} value={author} onChange={this.changeFilter}>
                        <option value={''}>Не выбрано</option>
                        <option value={'Susan J.'}>Susan J.</option>
                        <option value={'Michael K.'}>Michael K.</option>
                    </select>
                </div>
                <div className="col-md-12">
                    <button onClick={this.resetFilter}>Очистить</button>
                </div>
            </div>
        );
    }
}

export default BookFilter;