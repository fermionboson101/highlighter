import * as ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-r';

class CustomHighlightRules extends ace.acequire(
	'ace/mode/text_highlight_rules'
).TextHighlightRules {
	constructor() {
		super();

		this.$rules = {
			'start': [
				{
					token: function (value: string) {
						if (value.match(/[^a-zA-Z]+/g)) {
							return 'non-alphabets';
						}
					},
					regex: '[^a-zA-Z]'
				},
			]
		};
	}
}

export default class RCustomMode extends ace.acequire('ace/mode/r')
	.Mode {
	constructor() {
		super();
		this.HighlightRules = CustomHighlightRules;
	}
}

