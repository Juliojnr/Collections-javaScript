import PromptSync = require("prompt-sync");
import { Menu } from "./enum";
import { showMenu } from "./showMenu";
import { addItem } from "./addItem";
import { removeItem } from "./removeItem";
import { atualizarItem } from "./atulizarItem";

const prompt = PromptSync();

let vet: string [] = []

let choice: Menu

do {
    choice = showMenu()

    switch (choice) {
        case Menu.Adicionar:
            console.clear()
            addItem(vet);
            break;
        case Menu.Remover:
            console.clear()
            removeItem(vet)
            break;
        case Menu.Atualizar:
            console.clear()
            atualizarItem(vet)
            break;
        case Menu.Apresentar:
            console.clear();
            console.log(vet);
            prompt('\n\nPress ENTER -->');
            console.clear();
            break;
        case Menu.Sair:
            console.clear()
            console.log('Confirmar?');
            prompt('\nPress ENTER -->');
            

    }
} while (choice != Menu.Sair)

