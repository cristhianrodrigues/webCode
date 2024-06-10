import React, { useContext, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "../../style/downloadModal.css";
import dataProvider from "../../context/UseContext";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export default function DownloadModal () {

    const {toggleModalDownload, setToggleModalDownload, htmlEditor, cssEditor, javascriptEditor, projectName} = useContext(dataProvider);

    const [spanAlert, setSpanAlert] = useState(false);
    
    const handleDownload = () => {
        setToggleModalDownload(!toggleModalDownload)
    };

    const [downloadSettings, setDownloadSettings] = useState({ html: true, css: true, javascript: true });

    const handleToggleCheckHtmlSettings = () => {
        setDownloadSettings(prevSettings => ({...prevSettings, html: !prevSettings.html}));
    };

    const handleToggleCheckCssSettings = () => {
        setDownloadSettings(prevSettings => ({...prevSettings, css: !prevSettings.css}));
    };

    const handleToggleCheckJavascriptSettings = () => {
        setDownloadSettings(prevSettings => ({...prevSettings, javascript: !prevSettings.javascript}));
    }


    const handleDownloadFile = async () => {

        if (downloadSettings.html === true || downloadSettings.css === true || downloadSettings.javascript === true) {


            const zip = new JSZip();

            if (downloadSettings.html) {
                zip.file("index.html", htmlEditor);
            };

            if (downloadSettings.css) {
                zip.file("styles.css", cssEditor);
            };
            
            if (downloadSettings.javascript) {
                zip.file("script.js", javascriptEditor);
            };

            const file = await zip.generateAsync({type: "blob"});
            saveAs(file, projectName ? `${projectName}.zip` : "UnamedProject.zip");

        } else {
            setSpanAlert(true)
        }


    };


    return(
        <div className="download-container" style={{display: toggleModalDownload ? 'block' : 'none'}}>
            <span className="filter-modal">
            </span>
            <div className="download-modal">
                <FontAwesomeIcon className="exit-icon" icon={faX} onClick={handleDownload} />
                <h1 className="modal-tittle">Download:</h1>
                <div className="model-download-input-container">
                    <div className="input-card">
                        <label>HTML:</label>
                        <input type="checkbox" defaultChecked={downloadSettings.html} onClick={handleToggleCheckHtmlSettings}/>
                    </div>
                    <div className="input-card">
                        <label>CSS:</label>
                        <input type="checkbox" defaultChecked={downloadSettings.css} onClick={handleToggleCheckCssSettings}/>
                    </div>
                    <div className="input-card">
                        <label>JavaScript:</label>
                        <input type="checkbox" defaultChecked={downloadSettings.javascript} onClick={handleToggleCheckJavascriptSettings}/>
                    </div>
                </div>
                <button className="download-button" onClick={handleDownloadFile}>Download Zip File</button>
                <span style={{display: spanAlert ? "block" : "none" }}>Selecione no mínimo 1 arquivo para baixar.</span>
            </div>
        </div>
    )
}