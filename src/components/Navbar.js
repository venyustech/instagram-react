export default function Navbar() {
    return (
        <nav class="navbar">
            <nav class="nav-wrapper">
                <div class="logos">
                    <div class="camera-logo">
                        <ion-icon class="brand-camera" name="logo-instagram"></ion-icon>
                        <div class="vertical-bar"></div>
                    </div>
                    <img src="assets/img/logo.png" class="brand-img" alt="logo-img" />
                </div>
                <input type="text" class="search-box" placeholder="pesquisar" />
                <div class="nav-itens">
                    <ion-icon class="icon" name="paper-plane-outline"></ion-icon>
                    <div class="sub-icons">
                        <ion-icon class="icon" name="compass-outline"></ion-icon>
                        <ion-icon class="icon" name="heart-outline"></ion-icon>
                        <ion-icon class="icon" name="person-outline"></ion-icon>
                    </div>
                </div>
            </nav>
        </nav>
    );

}