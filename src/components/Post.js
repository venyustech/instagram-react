export default function Post() {
    return (
        <div class="post">
            <div class="info">
                <div class="user">
                    <div class="profile-pic"><img src="assets/img/n2.svg" alt="profile-pic" /></div>
                    <p class="username">User1</p>
                </div>
                <img src="assets/img/options.png" alt="options" class="options" />
            </div>
            <img src="assets/img/b1.png" alt="post-image" class="post-image" />
            <div class="post-content">
                <div class="reaction-wrapper">
                    <img src="assets/img/like.png" alt="" class="icon" />
                    <img src="assets/img/comment.png" alt="" class="icon" />
                    <img src="assets/img/send.png" alt="" class="icon" />
                    <img src="assets/img/save.png" alt="" class="icon save" />
                </div>
                <p class="likes">8,785 cutidasbla</p>
            </div>
        </div>
    );
}