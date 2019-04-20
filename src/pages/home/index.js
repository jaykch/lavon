import React, {Component} from 'react';
import Typist from 'react-typist';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        <Typist>
                            Home page imported<br/>
                        </Typist>
                    </p>
                </header>
            </div>
        );
    }
}

export default Home;
