import React from 'react'
import Swal from 'sweetalert2';

const PlayerTable = (props) => {
    const handleDelete = (playerId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                props.delete(playerId);
                Swal.fire(
                    'Deleted!',
                    'The player has been deleted.',
                    'success'
                );
            }
        });
    };

    return (
        <div className="col-10 mx-auto">
            <table className="table table-hover table-bordered text-center">
                <thead>
                    <tr className='table-success'>
                        <th>Player Name</th>
                        <th>Preffered position</th>
                        <th scope="col-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.players.map((player, i) => (
                        <tr key={i}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td colSpan="2">
                                <button className="btn btn-danger" onClick={() => handleDelete(player._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </div>
    )
}

export default PlayerTable