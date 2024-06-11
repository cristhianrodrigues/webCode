import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGear, faFileDownload} from "@fortawesome/free-solid-svg-icons";
import dataProvider from "../../context/UseContext";
import "../../style/header.css";

const Header = () => {

    const { toggleModalSettings, setToggleModalSettings, projectName, setProjectName, toggleModalDownload, setToggleModalDownload } = useContext(dataProvider);

    const handleOpttions = () => {
        setToggleModalSettings(!toggleModalSettings);
    };

    const handleDownload = () => {
        setToggleModalDownload(!toggleModalDownload);
    };

    const [ inputProjectNameLength, setInputProjectNameLength ] = useState(15);

    const handleInputAdjust = (event) => {
        setProjectName(event.target.value);
        console.log(projectName);
        if(event.target.value.length <= 200) {
            setInputProjectNameLength(event.target.value.length + 15);
        };
    };

    const handleClickGit = () => {
        window.open("https://github.com/cristhianrodrigues/webCode", "_blank");
    };

    return (
        <header>
            <div className="header-container">
                <div className="logo" onClick={handleClickGit}>
                    <FontAwesomeIcon className="logo-icon" icon={faCode} />
                    <div className="git-repository">
                        <h1 className="git-repository-descrition">Git repository</h1>
                    </div>
                </div>
                <div className="project-name" style={{width:`${inputProjectNameLength}ch`, }}>
                    <input type="text" value={projectName} placeholder={"Project-name"} onChange={handleInputAdjust} />
                </div>
                <div className="nav-buttons">
                    <FontAwesomeIcon className="settings-icon" icon={faFileDownload} onClick={handleDownload} />
                    <FontAwesomeIcon className="download-icon" icon={faGear} onClick={handleOpttions} />
                </div>
            </div>
        </header>
    );
}

export default Header;