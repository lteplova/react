'use strict';

function FormatComponent (Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
             return <Component list={this.props.list}/>
        }
    }
}

const FormatMonth = FormatComponent(MonthTable);
const FormatYear = FormatComponent(YearTable, SortTable);
const FormatSort = FormatComponent(SortTable);


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <FormatMonth list={this.state.list} />
                <FormatYear list={this.state.list} />
                <FormatSort list={this.state.list} />
            </div>
        );
    }
};