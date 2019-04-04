"use strict";

const title = "React";
const data = [
  {
    title: "Компоненты",
    article:
      "Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой."
  },
  {
    title: "Выучил раз, используй везде!",
    article:
      "После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native."
  },
  {
    title: "Использование JSX",
    article:
      "JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода."
  }
];

const Section = props => {
	return (
  <section
    key={props.item}
	className={`section ${props.activeItem == props.item ? "open" : ""}`}
	onClick={e => props.handleClick(props.item)}
  >
    <button>toggle</button>
    <h3 className="sectionhead">{props.title}</h3>
    <div className="articlewrap">
      <div className="article">{props.article}</div>
    </div>
  </section>
)};

const Sections = ({ data, activeItem, handleClick }) => (
  <div>
    {data.map((item, index) => (
      <Section
        item={index}
        handleClick={handleClick}
        activeItem={activeItem}
        title={item.title}
        article={item.article}
      />
    ))}
  </div>
);

class App extends React.Component {
  constructor() {
	super();
	this.state = {
		activeItem: 0
	};
  }

  handleClick = (item) => {
	  if (this.state.activeItem == item) {
		this.setState({activeItem: -1});
	  } else {
	  	this.setState({activeItem: item});
	  }
  };

  render() {
    return (
      <main className="main">
        <h2 className="title">{this.props.title}</h2>
        <Sections
          data={this.props.data}
          activeItem={this.state.activeItem}
          handleClick={this.handleClick}
        />
      </main>
    );
  }
}
