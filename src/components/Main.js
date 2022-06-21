import React from 'react'
import ListItem from './ListItem'
export default function Main() {
    return (
        <>
            <ul className="list-group list-group-numbered">
                <ListItem name="Alpha" description="He's a good student" rating={8} />
                <ListItem name="Beta" description="He's a average student" rating={5}/>
                <ListItem name="Gamma" description="She's a brillent student" rating={10}/>
                <ListItem name="Delta" description="She's a terrible student" rating={1}/>
            </ul>  
        </>
    )
}
