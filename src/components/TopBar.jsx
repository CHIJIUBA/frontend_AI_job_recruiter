export function TopBar() {

    function printSpecificArea() {

        window.print();
    }

    return (
        <nav className={"navbar"}>
            <div className={"brand-title"}>
                <span className={"brand-logo"}><i className={"devicon-electron-original"}></i></span>
                <span className={"brand-name"}>Resume Builder</span>
            </div>
            <a href={"#"} className={"toggle-button"}>
                <span className={"bar"}></span>
                <span className={"bar"}></span>
                <span className={"bar"}></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li><a href={"#"}></a></li>
                    <li><a href={"#"}></a></li>
                    <li><a href={"#"}></a></li>
                    <li><button className={"downloadButton"} onClick={printSpecificArea}>Download Resume</button></li>
                </ul>
            </div>
        </nav>
    )

}
          