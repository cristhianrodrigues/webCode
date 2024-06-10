import React, { useState } from 'react';
import ComponenteTeste from './Components/ComponenteTeste/ComponenteTeste';
import Header from './Components/Header/Header';
import SettingsModal from './Components/settingsModal/SettingsModal';
import dataProvider from './context/UseContext';
import DownloadModal from './Components/DownloadModal/DownloadModal';
import defaultValues from './Components/ComponenteTeste/DefautValuesContent';
import './style/style.css';

const App = () => {

    const [ sizeValue, setSizeValue ] = useState(20);
    const [ minimapValue, setMinimapValue ] = useState(true);
    const [ wordwrapValue, setWordwrapValue ] = useState('on');
    const [ toggleModalSettings, setToggleModalSettings ] = useState(false);
    const [ projectName, setProjectName ] = useState(undefined);
    const [ toggleModalDownload, setToggleModalDownload ] = useState(false);
    const [htmlEditor, setHtmlEditor] = useState(defaultValues.defaultHtml);
    const [cssEditor, setCssEditor] = useState(defaultValues.defaultCss);
    const [javascriptEditor, setJavascriptEditor] = useState(defaultValues.defaultScript);
    
    const monacoConfig = {
        size: sizeValue,
        minimap: minimapValue
    };

    return (
        <html>
            <head>
                <title>{projectName ? `WebCode - ${projectName}` : 'WebCode' }</title>
            </head>
            <body>
                <dataProvider.Provider value={{monacoConfig, sizeValue, setSizeValue, toggleModalSettings, setToggleModalSettings, minimapValue, setMinimapValue, wordwrapValue, setWordwrapValue, projectName, setProjectName, toggleModalDownload, setToggleModalDownload, htmlEditor, setHtmlEditor, cssEditor, setCssEditor, javascriptEditor, setJavascriptEditor}}>
                    <Header />
                    <SettingsModal />
                    <DownloadModal />
                    <ComponenteTeste />
                </dataProvider.Provider>
            </body>
        </html>
        
    );
};

export default App;
