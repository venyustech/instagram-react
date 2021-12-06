export default function Navbar() {
    return (
        <nav class="navbar">
            <nav class="nav-wrapper">
                <div class="logos">
                    <div class="camera-logo">
                        <img src="assets/img/camera.png" alt="brand-camera" class="brand-camera" />
                        <div class="vertical-bar"></div>
                    </div>
                    <img src="assets/img/logo.png" class="brand-img" alt="logo-img" />
                </div>
                <input type="text" class="search-box" placeholder="pesquisar" />
                <div class="nav-itens">
                    <img src="assets/img/messenger.png" class="icon" alt="" />
                    <div class="sub-icons">
                        <img src="assets/img/bussola.png" class="icon" alt="" />
                        <img src="assets/img/like.png" class="icon" alt="" />
                        <img src="assets/img/person.png" class="icon" alt="" />
                    </div>
                </div>
            </nav>
        </nav>
    );

}