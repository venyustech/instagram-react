export default function StatusWrapper() {
    const statusCard = [
        {
            profilePic: "n2.svg",
            username: "username1"
        },
        {
            profilePic: "n3.svg",
            username: "username1"
        },
        {
            profilePic: "n4.svg",
            username: "username1"
        },
        {
            profilePic: "n5.svg",
            username: "username1"
        },
        {
            profilePic: "n6.svg",
            username: "username1"
        },
        {
            profilePic: "n7.svg",
            username: "username1"
        },
        {
            profilePic: "n8.svg",
            username: "username1"
        },
        {
            profilePic: "n9.svg",
            username: "username1"
        },
        {
            profilePic: "n10.svg",
            username: "username1"
        },
        {
            profilePic: "n11.svg",
            username: "username1"
        },
        {
            profilePic: "n12.svg",
            username: "username1"
        },
    ]
    return (
        <div class="status-wrapper">
            {statusCard.map((post) => (
                <StatusCard
                    profilePic={post.profilePic}
                    username={post.username}
                />
            ))}
        </div>
    )
}

function StatusCard(props) {
    return (
        <div class="status-card">
            <div class="profile-pic"><img src={`assets/img/${props.profilePic}`} alt="profile-pic" /></div>
            <p class="username">{props.username}</p>
        </div>
    );
}