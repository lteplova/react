'use strict';

function DateTimePretty(DateTime) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                date: props.date
            };
        }
        
        componentDidMount() {
            const date = new Date(this.state.date).getTime()/1000; //кол-во секунд
            const now = Date.now()/1000; //кол-во секунд с 01-01-1970
            const diff = now - date;
            console.log(diff);
            let prettyTime = null;

            if (diff <= 3600 && diff > 0) {
                console.log('less hour', now, date, diff);
                prettyTime = `${Math.floor(diff / 60)} минут назад`;
            } else if (diff > 3600 && diff < 3600 * 24) {
                console.log('less day, but more hour', now, date);
                prettyTime = `${Math.floor(diff / 60 / 60)} часов назад`;
            } else if (diff >= 3600 * 24) {
                console.log('more day', now, date);
                prettyTime = `${Math.floor(diff / 60 / 60 / 24)} дней назад`;
            } else {
                console.log('future', now, date);
            }
            
            this.setState({date: prettyTime});
        }

        render() {
            return (
                 <DateTime {...this.state}/>
                // <div>date</div>
            )
        }
    }
}

const DateTimeComponent = DateTimePretty(DateTime);

const Video = props => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimeComponent date={props.date} />
        </div>
    )
};


