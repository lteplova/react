'use strict';

function Popular(Article, Videos) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				date: props.date,
			};
		}

		
		render() {
			return 
            <Article {...this.state} />
            }
	};
}