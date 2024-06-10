import React, { useState, useContext } from 'react';
import { Editor } from '@monaco-editor/react';
import { SplitPane } from "react-collapse-pane";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import dataProvider from '../../context/UseContext';
import defaultValues from './DefautValuesContent';
import '../../style/style.css';

const ComponenteTeste = () => {

    const {sizeValue, minimapValue, wordwrapValue, htmlEditor, setHtmlEditor, cssEditor, setCssEditor, javascriptEditor, setJavascriptEditor} = useContext(dataProvider);

    
    const [previewHtml, setPreviewHtml] = useState(defaultValues.defaultHtml);
    
    const handleChangeHtml = (newValue) => {
        setHtmlEditor(newValue);

        const textHtml = `${newValue}`;
        setPreviewHtml(textHtml);
    }

    const [previewCss, setPreviewCss] = useState(`<style>${defaultValues.defaultCss}</style>`); 
  
    const handleChangeCss = (newValue) => {
        setCssEditor(newValue);

        const styledHtml = `<style>${newValue}</style>`;
        setPreviewCss(styledHtml);
    };

    
    const [previewJavascript, setPreviewJavascript] = useState(`<script>${defaultValues.defaultScript}</script>`);

    const handleChangeJavascript = (newValue) => {
        setJavascriptEditor(newValue);

        const scriptHtml = `<script>${newValue}</script>`;
        setPreviewJavascript(scriptHtml);
    }

    const options = {
        fontSize: sizeValue,
        wordWrap: wordwrapValue,
        minimap: { enabled: minimapValue },
    };

    return(
        <SplitPane split="vertical" collapse={true}>
            <SplitPane split="horizontal" collapse={true} className='code-containar'>
                <div className='code-card'>
                    <div className='code-description'>
                        <FontAwesomeIcon className='code-icon html-icon' icon={faHtml5} />
                        <h1 className='code-title'>Html</h1>
                    </div>
                    <Editor 
                        className='code html'
                        value={htmlEditor}
                        onChange={handleChangeHtml}
                        theme='vs-dark' 
                        path='index.html' 
                        defaultLanguage='html' 
                        defaultValue={defaultValues.defaultHtml}
                        options={options}
                    />
                </div>
                <div className='code-card'>
                    <div className='code-description'>
                        <FontAwesomeIcon className='code-icon css-icon' icon={faCss3Alt} />
                        <h1 className='code-title'>Css</h1>
                    </div>
                    <Editor 
                        className='code css'
                        value={cssEditor}
                        onChange={handleChangeCss}
                        theme='vs-dark' 
                        path='style.css' 
                        defaultLanguage='css' 
                        defaultValue={defaultValues.defaultCss}
                        options={options}
                    />
                </div>
                <div className='code-card'>
                    <div className='code-description'>
                        <FontAwesomeIcon className='code-icon js-icon' icon={faSquareJs} />
                        <h1 className='code-title'>Js</h1>
                    </div>
                    <Editor 
                        className='code javascript'
                        value={javascriptEditor}
                        onChange={handleChangeJavascript}
                        theme='vs-dark'
                        path='script.js'
                        defaultLanguage='javascript'
                        defaultValue={defaultValues.defaultScript}
                        options={options}
                    />
                </div>
            </SplitPane>
            <div className='output-containar'>
                <iframe className='output' title='Output' srcDoc={`<body>${previewHtml}${previewCss}${previewJavascript}</body>`} />
            </div>
        </SplitPane>
    );
};


export default ComponenteTeste;