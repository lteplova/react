function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
	return a - b;
}

const Charts = props => {
	let value = '';
	return (
		<div className={`Charts ${props.dir}`}>
			{props.data.map((serie, serieIndex) => {
				var sortedSerie = serie.slice(0),
					sum;

				sum = serie.reduce((carry, current) => carry + current, 0);
				sortedSerie.sort(compareNumbers);

				switch (props.type) {
					case 'stacked':
						value = sum;
						break;
					default:
						value = props.max;
				}

				return (
					<ChartsSerie
						type={props.type}
						sortedSerie={sortedSerie}
						serieIndex={serieIndex}
						max={props.max}
						labels={props.labels}
						serie={serie}
						colors={props.colors}
						value={value}
						height={props.height}
					/>
				);
			})}
		</div>
	);
};

const ChartsItem = props => {
	return (
		<div className={`Charts--item ${props.type}`} style={props.style} key={props.itemIndex}>
			<b style={{ color: props.color }}>{props.item}</b>
		</div>
	);
};

const ChartsSerie = props => {
	return (
		<div className={`Charts--serie ${props.type}`} key={props.serieIndex} style={{ height: props.height }}>
			<label>{props.labels[props.serieIndex]}</label>
			{props.serie.map((item, itemIndex) => {
				var color = props.colors[itemIndex],
					style,
					size = (item / props.value) * 100;

				style = {
					backgroundColor: color,
					opacity: item / props.max + 0.05,
					zIndex: item,
					height: size + '%',
				};

				if (props.type == 'layered') {
					style = Object.assign(style, {
						right: (props.sortedSerie.indexOf(item) / (props.serie.length + 1)) * 100 + '%',
					});
				}

				if (props.height == 'auto') {
					style.height = null;
					style.width = size + '%';
				}

				return <ChartsItem type={props.type} item={item} itemIndex={itemIndex} color={color} style={style} />;
			})}
		</div>
	);
};

const Legend = props => {
	return (
		<div className="Legend">
			{props.labels.map((label, labelIndex) => {
				return (
					<div>
						<span
							className="Legend--color"
							style={{
								backgroundColor: props.colors[labelIndex % props.colors.length],
							}}
						/>
						<span className="Legend--label">{label}</span>
					</div>
				);
			})}
		</div>
	);
};

const propsCharts = {
	data: [],
	series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
	labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
	colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'],
};

class App extends React.Component {
	componentWillMount() {
		this.setState(propsCharts);
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 10000);
	}

	populateArray() {
		const series = 5;
		const serieLength = 5;

		let data = new Array(series).fill(new Array(serieLength).fill(0));
		data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce(
			(max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)),
			0
		);

		return (
			<section>
				<Charts max={max} data={data} colors={colors} labels={labels} height={250} />
				<Charts type={'stacked'} max={max} data={data} colors={colors} labels={labels} height={250} />
				<Charts type={'layered'} max={max} data={data} colors={colors} labels={labels} height={250} />
				<Charts dir="horizontal" max={max} data={data} colors={colors} labels={series} height={'auto'} />
				<Legend labels={labels} colors={colors} />
			</section>
		);
	}
}
