import React from 'react'

function GamesStatus(props) {
    const onChangeHandler = (playerId, value) => () => {
        // Find the status object that matches the player ID
        const statusObj = Array.isArray(props.status) && props.status.find(status => status.player === playerId);

        // Determine the selected value for the buttons
        const selectedValue = statusObj ? (statusObj.status ? "1" : "2") : "3";

        // Set the status based on the selected button value
        const status = value === "1" ? true : false;

        // Handle the case where the player is undecided (not in the status array)
        if (selectedValue === "3") {
            // Call the function to create a connector
            props.createConnector(status, playerId);
        } else {
            props.updateStatus(status, playerId);
        }
    };

    return (
        <div className='container'>
            <table className="table table-hover table-bordered text-center">
                <thead>
                    <tr className='table-success'>
                        <th>Player Name</th>
                        <th scope="col-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.players.map((player, i) => {
                        // Find the status object that matches the player ID
                        const statusObj = Array.isArray(props.status) && props.status.find(status => status.player === player._id);

                        // Determine the selected value for the buttons
                        const selectedValue = statusObj ? (statusObj.status ? "1" : "2") : "3";

                        return (
                            <tr key={i}>
                                <td>{player.name}</td>
                                <td colSpan="2">
                                    <div className="btn-group" role="group">
                                        <button
                                            type="button"
                                            className={`btn ${selectedValue === "1" ? "btn-success" : "btn-outline-secondary"}`}
                                            onClick={onChangeHandler(player._id, "1")}
                                        >
                                            Playing
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn ${selectedValue === "2" ? "btn-danger" : "btn-outline-secondary"}`}
                                            onClick={onChangeHandler(player._id, "2")}
                                        >
                                            Not Playing
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn ${selectedValue === "3" ? "btn-warning" : "btn-outline-secondary"}`}
                                            onClick={onChangeHandler(player._id, "3")}
                                        >
                                            Undecided
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GamesStatus;
