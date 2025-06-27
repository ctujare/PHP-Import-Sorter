import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('php-import-statement-sorter.sortImports', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active text editor found.');
            return;
        }

        const document = editor.document;
        if (document.languageId !== 'php') {
            vscode.window.showErrorMessage('This command can only be used in PHP files.');
            return;
        }

        const text = document.getText();
        const lines = text.split('\n');
        const useLines = lines
            .map((line, i) => ({ line, index: i }))
            .filter(obj => obj.line.trim().startsWith('use ') && obj.line.trim().endsWith(';'));

        if (useLines.length === 0) {
            vscode.window.showInformationMessage('No use statements found.');
            return;
        }

        // Sort use statements by string length in descending order
        const sortedUseLines = [...useLines].sort((a, b) => {
            const lengthA = a.line.trim().length;
            const lengthB = b.line.trim().length;
            return lengthB - lengthA; // Sort in descending order
        });

        await editor.edit(editBuilder => {
            for (let i = 0; i < useLines.length; i++) {
                const lineIndex = useLines[i].index;
                editBuilder.replace(new vscode.Range(lineIndex, 0, lineIndex, lines[lineIndex].length), sortedUseLines[i].line);
            }
        });

        vscode.window.showInformationMessage('Sorted use statements by string length.');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    // Clean up resources if needed
}