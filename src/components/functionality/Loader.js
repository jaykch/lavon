import React, {Component} from 'react';
import $ from 'jquery';
import './Loader.css';

class Loader extends Component {

    handleLoader=  () => {
        $(document).ready(function() {
            setTimeout(function(){
                $('body').addClass('loaded');
            }, 3000);
        });
    };

    componentDidMount() {
        this.handleLoader();
    }

    render() {
        return (
            <div id="loader-wrapper">
                <div id="loader"></div>
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
        );
    }
}

export default Loader;