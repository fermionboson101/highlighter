import React, { useRef, useEffect, useState } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-r";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/r";
import 'ace-builds/src-min-noconflict/ext-searchbox';

import { ControlButtons } from '../ControlButtons';
import RCustomMode from "../../CustomModes/RCustomMode";

import "./RHighlighter.css";

export interface IRHighlighterProps {
	headingText?: string;
}

export const RHighlighter: React.FC<IRHighlighterProps> = ({ headingText }) => {

	const [currentTheme, setCurrentTheme] = useState('monokai');
	const [themes] = useState(['monokai', 'github']);

	const aceRef = useRef<any>(null);

	useEffect(() => {
		const customMode = new RCustomMode();
		aceRef.current.editor.getSession().setMode(customMode);
	}, []);

	const handleTheme = (selectedTheme: string) => {
		setCurrentTheme(selectedTheme);
	}

	return (
		<div className="editor">
			<div>
				<h1 className="heading">{headingText}</h1>
				<ControlButtons themes={themes} handleTheme={handleTheme} />
				<AceEditor
					ref={aceRef}
					placeholder="Write R program"
					mode="r"
					theme={currentTheme}
					name="blah2"
					fontSize={14}
					showPrintMargin={true}
					showGutter={true}
					highlightActiveLine={true}
					editorProps={{ $blockScrolling: Infinity }}
					setOptions={{
						enableBasicAutocompletion: true,
						enableLiveAutocompletion: true,
						enableSnippets: true,
						showLineNumbers: true,
						tabSize: 2,
					}}
					height="500px"
					width="650px"
				/>
			</div>
		</div>
	)
};