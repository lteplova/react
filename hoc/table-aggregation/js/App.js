'use strict';

function FormatComponent (Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
           // console.log('FFF', this.props);
        }
        
        sort = (list, dataArray) => {
            dataArray.reduce( (item) => {
            return console.log('AAA', list, item.date);
            }
            )
        }

        //sort(props);

        render() {
             return <Component list={this.props.list}/>
        }
    }
}

const FormatMonth = FormatComponent(MonthTable);
const FormatYear = FormatComponent(YearTable);
const FormatSort = FormatComponent(SortTable);


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            years: [],
            months: []
        };
    }

    sum(list, key) {
        const newList = [];
        for (let obj of list) {
          if (newList.some(item => item[key] === obj[key])) {
            let foundIndex = newList.findIndex(item => item[key] === obj[key]);
            newList[foundIndex].amount += obj.amount;
          } else {
            newList.push({[key]: obj[key], amount: obj.amount});
          }
        }
        return newList; 
      }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            const list = response.data.list.map(item => {
                let fullDate = new Date(item.date);
                item.month = fullDate.toLocaleString('En-Us', { month: "short" });
                item.year = fullDate.getFullYear();
                return item;
            }).sort((a, b) => {
                if (a.date > b.date) return 1;
                if (a.date < b.date) return -1;
                return 0;
            });
            
            const years = this.sum(list, 'year');
            const months = this.sum(list, 'month');
            this.setState({ list, years, months });
        });
        
    }

    render() {
        return (
            <div id="app">
                <FormatMonth list={this.state.months} />
                <FormatYear list={this.state.years} />
                <FormatSort list={this.state.list} />
            </div>
        );
    }
};