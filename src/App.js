import React, {Component} from 'react';
import './App.css';
import Range from './Components/Range';
import Output from './Components/Output';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: 170,
            weight: 65,
            bmi: 22.49,
            bmiClass: 'Normal'
        }
    }

    // Update height state onChange
    heightChange(height) {
        // Set height state to match value of input from child component
        this.setState({height: height}, this.setBmi);
    }

    // Update weight state onChange
    weightChange(weight) {
        // Set height state to match value of input from child component
        this.setState({weight: weight}, this.setBmi);
    }

    // Calculate the BMI
    setBmi(){
        let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
        this.setState({bmi: bmi, bmiClass: this.getBmiClass(bmi)}, function() {
            //console.log(this.state);
        });
    }

    // If statement to return BmiClass
    getBmiClass(bmi){
        if(bmi < 18.5) return 'Underweight';
        if(bmi >= 18.5 && bmi < 24.9) return 'Normal';
        if(bmi >= 25 && bmi <= 29.9) return 'Overweight';
        if(bmi >= 30) return 'Obese';
    }

    render() {
        return (
            <div className="App">
                <h1>BMI Calculator</h1>
                <form>
                    <div>
                        <label>Height</label>
                        <Range value={this.state.height} onChange={this.heightChange.bind(this)} />
                    </div>
                    <div>
                        <label>Weight</label>
                        <Range value={this.state.weight} onChange={this.weightChange.bind(this)} />
                    </div>
                </form>
                <br />
                <br />
                <Output data={this.state} />
            </div>
        );
    }
}

export default App;
