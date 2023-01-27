import React, { Component } from 'react';


class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        };
    }

    updateResults(newResults) {
        this.setState({
            results: newResults
        });
    }

    renderResults() {
        if (this.state.results.length === 0) {
            return <p>No results yet.</p>;
        } else {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Label</th>
                            <th>Confidence</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map((result, index) => (
                            <tr key={index}>
                                <td>{result.image}</td>
                                <td>{result.label}</td>
                                <td>{result.confidence}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Results</h2>
                {this.renderResults()}
            </div>
        );
    }
}

export default Results;
