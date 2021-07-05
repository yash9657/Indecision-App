class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handletoggleVisibility = this.handletoggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handletoggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handletoggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. Here are some details.</p>
                    </div>
                )}

            </div>
        );
    }
}
ReactDOM.render(<Visibility />,document.getElementById('app'))
/* let visibility = false;
const appRoot = document.getElementById('app');
const toggleVisibility = () => {
    visibility = !visibility;
    render();
};
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <div>
                    <p>Hey. Here are some details.</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template,appRoot);
};
render();
 */