import './index.css'
export default function User({user}){
    const {id, name, email, username, city} = user;
    return(
        <div className='box'>
            <p>Id:{id}</p>
            <p>Name:{name}</p>
            <p>Username:{username}</p>
            <p>Email:{email} </p>
            <p>Address:{user?.address?.city}</p>
            <p>Company Name: {user.company.name}</p>
        </div>
    )
}