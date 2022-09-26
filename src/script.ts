import PromptSync = require("prompt-sync");
import { Menu } from "./enum";
import { showMenu } from "./showMenu";
import { addItem } from "./addItem";
import { removeItem } from "./removeItem";

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
    }
} while (choice != Menu.Sair)

