export default function RightCol() {
    return (
        <div class="right-col">
            <div class="profile-card">
                <div class="profile-pic">
                    <img src="assets/img/n1.svg" alt="profile-pic" />
                </div>
                <div>
                    <p class="username">fulaninho.silva</p>
                    <p class="sub-text">Fulaninho Silva</p>
                </div>
                <button class="action-btn">Mudar</button>
            </div>
            <p class="suggestion-text">Sugestões para você</p>
            <div class="profile-card">
                <div class="profile-pic">
                    <img src="assets/img/n14.jpeg" alt="profile-pic" />
                </div>
                <div>
                    <p class="username">fulaninho.silva</p>
                    <p class="sub-text">Seguido por @blabla</p>
                </div>
                <button class="action-btn">follow</button>
            </div>
        </div>
    );
}