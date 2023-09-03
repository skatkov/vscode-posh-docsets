'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const writeEmitter = new vscode.EventEmitter<string>();
	context.subscriptions.push(vscode.commands.registerCommand('poshtui.view', () => {
		const terminal = vscode.window.createTerminal({ name: `posh tui`});
		terminal.sendText('posh');
		terminal.show();
	}));

	context.subscriptions.push(vscode.commands.registerCommand('poshtui.docsets', () => {
		const terminal = vscode.window.createTerminal({ name: `posh docsets`});
		terminal.sendText('posh docsets');
		terminal.show();
	}));
}