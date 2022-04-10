
import React from 'react'
import { Card, Button  } from 'react-bootstrap'
import propTypes  from "prop-types"

const Profile = (props) => {
    
    const handleName= (name)=> alert('My name is $ {props.name}') 
return (
    <div style={{ margin:"2% 40%" }}>
<Card style={{ width: '18rem' }}>
{props.children}
<Card.Body>
    <Card.Title> {props.name} </Card.Title>
    <Card.Text>
        {props.bio}
    
    </Card.Text>
    <Card.Text>
    {props.profession}
    </Card.Text>
    <Button variant="primary" onClick={handleName}>Go somewhere</Button>
</Card.Body>
</Card>

    </div>
)
}
export default Profile 
Profile.defaultProps={
    name:"amal"
}
Profile.propTypes={
    name: Profile.string ,
    bio: Profile.string ,
    profession: Profile.string 
}
