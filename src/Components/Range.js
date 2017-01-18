import React, {Component} from 'react';

class Range extends Component {
    // Set default state
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    // Set default props
    static defaultProps = {
        min: 0,
        max: 245,
        step: 1
    }

    onChange(event) {
        // console.log(event.target.value);
        // Change value state
        this.props.onChange(this.state.value);
        // Set input value to value state
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="Range">
                <input type='range'
                    value={this.state.value}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    onChange={this.onChange.bind(this)} />
            </div>
        );
    }
}

// propTypes allow validation for the props
Range.propTypes = {
    min: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    step: React.PropTypes.number.isRequired
}

export default Range;
