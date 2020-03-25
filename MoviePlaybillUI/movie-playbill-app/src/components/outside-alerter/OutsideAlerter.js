import React, {Component} from 'react';

class OutsideAlerter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldListen: false
        };

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        // document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.state.shouldListen && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            alert('You clicked outside of me!');
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            ...prevState,
            shouldListen: nextProps.shouldBeActive
        }
    }

    render() {
        const incomingClass = this.props.className ? this.props.className + " " : "";
        return <div ref={this.setWrapperRef} className={incomingClass}>{this.props.children}</div>;
    }
}

export default OutsideAlerter;