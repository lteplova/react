class ProgressBar extends React.Component {
  constructor() {
    super();
    this.ctx = null;
    this.state = {
      completed: 1
    };
    this.coords = {
      x: 0,
      y: 0
    };
  }

  get angle() {
    return 360 * (this.percent / 100)
  }

  get percent() {
    return (100 * this.state.completed / this.props.total).toFixed()
  }

  drawArc(radius, weight, color, closed = false, filled = false) {
    const angle = closed ? 2 : this.angle / 180;
    this.ctx.beginPath();
    this.ctx.arc(this.coords.x, this.coords.y, radius-weight, 0, angle * Math.PI);
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
    this.ctx.lineWidth = weight;
    filled ? this.ctx.fill() : this.ctx.stroke();
  }

  drawText() {
    this.ctx.font = "22px sans-serif";
    this.ctx.fillStyle = 'black';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`${this.percent}%`, this.coords.x, this.coords.y+8);
  }

  render() {
    return (
      <canvas id="progressCanvas" className="progress" ref={el => this.canvasEl = el} />
      );
    }
    
    componentWillReceiveProps(nextProps) {
      this.setState({
        completed: nextProps.completed
      }, () => {
        this.drawArc(48, 7, 'white', true, true); // очищаем область
        this.drawArc(45, 7, '#96d6f4'); // рисуем внутренний круг
        this.drawText(); // пишем текст
      });
    }

    componentDidMount() {
      this.ctx = this.canvasEl.getContext('2d');
      const rect = this.canvasEl.getBoundingClientRect();
      this.canvasEl.width = rect.width;
      this.canvasEl.height = rect.height;
      this.coords.x = rect.width / 2;
      this.coords.y = rect.height / 2;
      this.drawArc(52, 7, '#4ca89a', true); // рисуем внешний круг
      this.drawArc(45, 7, '#96d6f4'); // рисуем внутренний круг
      this.drawText(); // пишем текст
  }
}
