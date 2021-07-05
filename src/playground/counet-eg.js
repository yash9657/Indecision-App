class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount,10);
        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }

    componentDidUpdate(prevState) {
        if(prevState.count != this.state.count) 
        {
            localStorage.setItem('count',this.state.count);
        }
    }
    handleAddOne() {
        //count += 1;
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        //count -= 1;
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset() {
        //count = 0
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render() {
        
        
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));
/* let count = 0;
const addone = () => {
    count += 1;
    render();
};
const minusone = () => {
    count -= 1;
    render();
};
const reset = () => {
    count = 0;
    render();
};




const render = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addone}>+1</button>
        
            <button onClick={minusone}>-1</button>
            
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template2,appRoot);
};
render(); */

