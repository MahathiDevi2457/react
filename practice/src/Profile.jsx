function Profile({ name, branch, rollNo, bloodGrp, dob }) {
    const pstyle={
padding: "10px",
        fontSize: "15px",
        fontStyle: "normal",
        textAlign: "center"
    }
    const titlestyle = {
        border: "1px",
        borderRadius: "15px",
        borderStyle: "solid",
        padding: "20px",
        fontSize: "15px",
        fontStyle: "normal",
        textAlign: "center"
    }
    const namestyle = {
        color: "red"
    }
    return (
        <div style={titlestyle}>
            <img src="public/profile.jpg" height="100px" width="100px"></img>
            <p style={namestyle}>{name}</p>
            <p style={pstyle}>Course: BTech({branch})</p>
            <p style={pstyle}>Roll No.: {rollNo}</p>
            <p style={pstyle}>Blood Group: {bloodGrp}</p>
            <p style={pstyle}>D.O.B: {dob}</p>
        </div>
    )
}
export default Profile