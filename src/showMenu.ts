import PromptSync = require("prompt-sync");
import { Menu } from "./enum";

export function showMenu() {

    const prompt = PromptSync();
    let option: number

    do {
        console.clear();
        console.log('1 - Adicionar item no estoque')
        console.log('2 - Remover item do estoque')
        console.log('3 - Atualizar estoque')
        console.log('4 - Mostrar estoque')
        console.log('5 - Sair')

        let option = Number(prompt('>> '))

        
        switch (option) {
            case 1:
               return Menu.Adicionar
            case 2:
               return Menu.Remover
            case 3:
               return Menu.Atualizar
            case 4:
               return Menu.Apresentar
            case 5:
               return Menu.Sair
            default:
               console.log('Opção inválida !')       
        }

    } while (option < 1 || option > 5)
}