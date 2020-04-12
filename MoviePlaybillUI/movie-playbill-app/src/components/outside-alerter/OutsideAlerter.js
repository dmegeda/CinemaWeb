import React, {Component} from 'react';

class OutsideAlerter extends Component {

    state = {
        shouldListen: false
    };

    componentDidMount() {
        document.addEventListener('mouseup', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };

    handleClickOutside = (event) => {
        if (this.state.shouldListen && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.wrapperRef.style.display = "none";
            this.props.onClickOutside();
        }
    };

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