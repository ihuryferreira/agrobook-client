export default function extractInitials(fullName) {

    try {
        const names = fullName.split(' '); // Divida a string em palavras usando o espaço como separador
        if (names.length >= 2) { // Verifique se há pelo menos dois nomes na string
            return `${names[0][0]}${names[1][0]}` //retorna a primeira e segunda letra do Nome
        } else {
            // Caso não haja pelo menos dois nomes na string
            return names[0][0];
        }
    } catch (error) {
        console.error('Nome Nao passado para as iniciais')
    }
}