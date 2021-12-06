export default function Post(props) {
    return (
        <div class="post">
            <div class="info">
                <div class="user">
                    <div class="profile-pic"><img src={`assets/img/${props.profilePic}`} alt="profile-pic" /></div>
                    <p class="username">{props.username}</p>
                </div>
                <ion-icon class="options" name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img src={`assets/img/${props.postPic}`} alt="post-image" class="post-image" />
            <div class="post-content">
                <div class="reaction-wrapper">
                    <ion-icon class="icon" name="heart-outline"></ion-icon>
                    <ion-icon class="icon" name="chatbubble-outline"></ion-icon>
                    <ion-icon class="icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon class="icon save" name="bookmark-outline"></ion-icon>
                </div>
                <p class="likes">{props.qtdLikes}</p>
            </div>
        </div>
    );
}