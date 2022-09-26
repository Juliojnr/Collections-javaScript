import PromptSync = require("prompt-sync");
import { showMenu } from "./showMenu";
const prompt = PromptSync();

export function addItem(vet: string[]) {
    console.log('Item que deseja adicionar:')
    const item = prompt('>> ')
    vet.push(item)
    console.clear()
    console.log('Item Adicionado com sucesso!')
    prompt('\nPress ENTER ->')
    console.clear()
}