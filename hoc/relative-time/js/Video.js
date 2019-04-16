'use strict';

function DateTimePretty(DateTime) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                date: props.date
            };
        }
        
        componentWillMount() {
            const date = new Date(this.state.date).getTime() / 1000;
            const now = Date.now() / 1000;
            const diff = now - date;
            let prettyTime = null;

            if (diff <= 3600 && diff > 0) {
                console.log('less hour', now, date);
                prettyTime = `${new Date(diff * 1000).getMinutes()} минут назад`;
            } else if (diff > 3600 && diff < 3600 * 24) {
                console.log('less day, but more hour', now, date);
                prettyTime = `${new Date(diff * 1000).getHours()} часов назад`;
            } else if (diff >= 3600 * 24) {
                console.log('more day', now, date);
                prettyTime = `${new Date(diff * 1000).getDate()} дней назад`;
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