import React, { Component } from 'react';


class Table extends Component {
constructor(props) {
        super(props)
        this.state = {
            tixAvail: true
        }
    }
    yesTickets = () => {
        alert("1 avail, hurry!")
        this.setState({
            tixAvail: true
        }) 
    }

    noTickets = () => {
     alert("None avail, sorry!")
        this.setState({
            tixAvail: false,

        })
    }



    render() {
            const buttonStyle = {
        backgroundColor: this.state.tixAvail ? 'green' : "red"
    }
        return [
            <div className="tourBG" key="1">
                <div className="topTour">
                    <img key="2" className="topRose" src="../images/AW_ROSE.png" />
                    <p>TOUR DATES</p>
                </div>

                <div className="tourText">
                    <div className="row">
                        <div className="col"><strong>DATE </strong></div>
                        <div className="col"><strong>EVENT </strong></div>
                        <div className="col"><strong>LOCATION </strong></div>
                        <div className="col"><strong>TICKETS </strong></div>
                    </div>
                    <div className="row">
                        <div className="col">Nov 24</div>
                        <div className="col">Wonderland Warehouse Project 3.0</div>
                        <div className="col">Adelaide, Australia</div>
                        <div className="col" onClick={this.yesTickets}><div className="bluebox" style={buttonStyle} >TICKETS</div></div>
                    </div>
                    <div className="row">
                        <div className="col">Nov 24</div>
                        <div className="col">Wonderland Warehouse Project 3.0</div>
                        <div className="col">Adelaide, Australia</div>
                        <div className="col" onClick={this.yesTickets}><div className="bluebox">TICKETS</div></div>

                    </div>
                    <div className="row">
                        <div className="col">April 30</div>
                        <div className="col">Wonderland Warehouse Project 3.0</div>
                        <div className="col">Adelaide, Australia</div>
                        <div className="col" onClick={this.noTickets}><div className="bluebox">TICKETS</div></div>

                    </div>
                    <div className="row">
                        <div className="col">April 30</div>
                        <div className="col">Wonderland Warehouse Project 3.0</div>
                        <div className="col">Sydney, Australia</div>
                        <div className="col" onClick={this.noTickets}><div className="bluebox">TICKETS</div></div>

                    </div>
                    <div className="row">
                        <div className="col">April 30</div>
                        <div className="col">Wonderland Warehouse Project 3.0</div>
                        <div className="col">Sydney, Australia</div>
                        <div className="col" onClick={this.noTickets}><div className="bluebox">TICKETS</div></div>

                    </div>
                    <div className="row">
                        <div className="col">Nov 24</div>
                        <div className="col">Wonderland Warehouse Project 3.0</div>
                        <div className="col">Adelaide, Australia</div>
                        <div className="col" onClick={this.noTickets}><div className="bluebox">TICKETS</div></div>

                    </div>
                </div>
            </div>
        ];
    };
};



export default Table;
