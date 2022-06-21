import React from 'react'

export default function ListItem(props) {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.name}</div>
                    {props.description}
                </div>
                {(props.rating > 5) ? <span className="badge bg-success rounded-pill">{props.rating}</span> : <span className="badge bg-danger rounded-pill">{props.rating}</span>}

            </li>

        </>
    )
}
