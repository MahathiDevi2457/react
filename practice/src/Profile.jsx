function Profile() {
    const name="Mahathi Devi"
    const age=18
    const IsStudent=true
    return (
        <div>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>{IsStudent===true?"I am a student":"I am not a student"}</p>
        </div>
    )
}
export default Profile