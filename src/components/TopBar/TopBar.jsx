import React, {Component} from "react";
import axios from 'axios';

class TopBar extends Component {

    render() {
        return (
            <div>
                <h2>This will be at the top of every page.</h2>
                <h5>Exp and Level and stats and stuff here. Should change as the game goes without refreshing.</h5>
                <h2>BUTTON TO RETURN HOME</h2>
            </div>
        )
    }
}

export default TopBar;