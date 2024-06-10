import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "../../style/settingsModal.css";
import dataProvider from "../../context/UseContext";

const SettingsModal = () => {

    const {monacoConfig, setSizeValue, toggleModalSettings, setToggleModalSettings, minimapValue, setMinimapValue, wordwrapValue, setWordwrapValue} = useContext(dataProvider);

    const [sizeInputValue, setInputValue] = useState(monacoConfig.size);

    const handleOpttions = () => {
        setToggleModalSettings(!toggleModalSettings);
    };

    const handleSizeChange = (event) => {
        setInputValue(setSizeValue(event.target.value));
    };

    const handleMinimapChange = (event) => {
        setMinimapValue(event.target.value);
    };

    const handleWordwrapChange = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue);
        setWordwrapValue(inputValue);
        ontoggle(inputValue);
    };

    

    return (
        <div className="settings-container" style={{display: toggleModalSettings ? 'block' : 'none'}}>
            <span className="filter-modal" onClick={handleOpttions}>
            </span>
            <div className="settings-modal">
                <FontAwesomeIcon className="exit-icon" icon={faX} onClick={handleOpttions} />
                <h1 className="modal-tittle">Editor Settings:</h1>
                <div className="model-input-container">
                    <div className="input-card">
                        <label className="input-label">Size text:</label>
                        <input className="input-field" type="number" value={sizeInputValue} onChange={handleSizeChange}/>
                    </div>
                    <div className="input-card">
                        <label className="input-label">Show minimap:</label>
                        <select value={minimapValue} onChange={handleMinimapChange}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div className="input-card">
                        <label className="input-label">Word wrap:</label>
                        <select value={wordwrapValue} onChange={handleWordwrapChange}>
                            <option value="on">On</option>
                            <option value="off">Off</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SettingsModal;