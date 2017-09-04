import * as nls from 'vscode-nls';
const localize = nls.config(process.env.VSCODE_NLS_CONFIG)();

import * as vscode from 'vscode';
import { sayByeCommand } from './command/sayBye';

export function activate(context: vscode.ExtensionContext) {
  const helloCmd = vscode.commands.registerCommand('extension.sayHello', () => {
    const message = localize('sayHello.text', 'Hello')
    vscode.window.showInformationMessage(message);
  });

  const byeCmd = vscode.commands.registerCommand(
    'extension.sayBye',
    sayByeCommand
  );

  context.subscriptions.push(helloCmd, byeCmd);
}

export function deactivate() {}