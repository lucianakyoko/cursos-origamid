# TypeScript para iniciantes

Links:
 - [slide do curso](https://origamid.com/slide/typescript-para-iniciantes);

## Aula 01 - Introdução
**Types** -> O tipo define o que podemos fazer com um dado.

**@ts-check** -> O VS Code já vem com o TypeScript (TS) instalado. Enquanto escrevemos JavaScript, serviços do TS rodam na sua máquina e já te oferecem funcionalidades como a sugestão de métodos/propriedades do tipo.

Ao adicionar um comentário ```//@ts-check``` no início de um arquivo JS, o editor passará a indicar erros que seriam pegos pelo TS.

**Type Annotations** -> No momento o JavaScript não possui uma forma de indicarmos qual será o tipo de dado. Não é possível prever o argumento que será passado no parâmetro de funções, para isso são necessárias as anotações de tipos.

**script.ts e tsc** -> Os principais programas que executam JavaScript (browser/node), não conseguem executar TypeScript. Por isso precisamos de um compilador para gerar um arquivo JavaScript a partir de um TypeScript.

Para usarmos o typescript, precisamos seguir os passos abaixo:
 - rodar o comando ```npm install -g typescript``` fará a instalação de maneira global o typescript
 - rodar o comando ```tsc [nome do arquivo em ts]```

 Mas para não ficarmos rodando o comando acima toda vez que o código for modificado, vamos seguir os passoa abaixo:

 - rodar o comando ```tsc --init```. Esse comando cria um arquivo chamado tsconfig.json;
 - por ora, vamos deletar todas as informações contidas no arquivo tsconfig e colocar o código abaixo:
 ```
 {
  "compilerOptions": {
    "target": "ESNext",
    "strict": true
  }
}
 ```
 - rodar o comando ```tsc -w```, esse comando faz com que aconteça o hot reload