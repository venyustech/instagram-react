

export default function RightCol() {
    const folloSugestionData = [
        {
            userControl: "n2.svg",
            userControlName: "Sugestao.1blabla",
            subUserControlName: "fulaninha.blabla",
        },
        {
            userControl: "n3.svg",
            userControlName: "Sugestao.2blabla",
            subUserControlName: "Fulaninho2 bleble",
        },
        {
            userControl: "n4.svg",
            userControlName: "Sugestao3.blabla",
            subUserControlName: "Fulaninho3 blibli",
        },
        {
            userControl: "n5.svg",
            userControlName: "Sugestao.4blabla",
            subUserControlName: "Fulaninho4 bloblo",
        },
        {
            userControl: "n6.svg",
            userControlName: "Sugestao.5blabla",
            subUserControlName: "Fulaninho5 blublu",
        },

    ];
    return (
        <div class="right-col">
            <ProfileCardUser
                userControl="n1.svg"
                userControlName="fulaninho.silva"
                subUserControlName="Fulaninho Silva"
            />
            <p class="suggestion-text">Sugestões para você
                <p>ver tudo</p>
            </p>
            {folloSugestionData.map((post) => (
                <ProfileCard
                    userControl={post.userControl}
                    userControlName={post.userControlName}
                    subUserControlName={post.subUserControlName}
                />
            ))}

        </div>
    );
}
function ProfileCard(props) {
    return (
        <div class="profile-card">
            <div class="menu-left">
                <div class="profile-pic">
                    <img src={`assets/img/${props.userControl}`} alt="profile-pic" />
                </div>
                <div>
                    <p class="username">{props.userControlName}</p>
                    <p class="sub-text">{props.subUserControlName}</p>
                </div>
            </div>
            <button class="action-btn">Mudar</button>
        </div>
    );
}
function ProfileCardUser(props) {
    return (
        <div class="profile-card menu-left">

            <div class="profile-pic">
                <img src={`assets/img/${props.userControl}`} alt="profile-pic" />
            </div>
            <div>
                <p class="username">{props.userControlName}</p>
                <p class="sub-text">{props.subUserControlName}</p>
            </div>

        </div>
    );
}