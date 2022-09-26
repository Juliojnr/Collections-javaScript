import PromptSync = require("prompt-sync");
const prompt = PromptSync();

export function removeItem(vet: string []) {
    console.log(vet);
    console.log('\nQual item deseja remover:\n')
    const itemRemove = prompt('>> ')
    console.clear()
    console.log('Item removido com sucesso!')
    prompt('\nPress ENTER ->')
    console.clear()
    

    let cont: number = 0;

    vet.forEach(item => {
        if(item == itemRemove){
        vet.splice (cont, 1)
        }
        else {
            console.log('Opção Inválida!')
        }
        cont++
    })
}