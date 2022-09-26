import PromptSync = require("prompt-sync");
const prompt = PromptSync();

export function atualizarItem(vet: string []) {
    console.log(vet)
    console.log('\nQual item deseja atualizar?')
    let iTem = prompt ('>> ')
    console.log('\nNovo item:')
    let updateItem = prompt('>> ')
    console.clear()
    console.log('Item Atualizado com sucesso!')
    prompt('\nPress ENTER ->')

    let cont = 0

    vet.forEach( item => {
        if(item == iTem) {
            vet.splice(cont, 1, updateItem)
        }
        cont++
    })
}
