
function FooterBar() {
    const getUsername = sessionStorage.getItem('username')
    return (
        <footer className= "p-5 mt-auto text-light d-flex justify-content-center text-lg-start bg-secondary">
           © 2023 Copyright: Atm Machine created by Power Marsing
        </footer>
    );
}

export default FooterBar;