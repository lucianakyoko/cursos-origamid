# TypeScript para iniciantes

Links:
 - [slide do curso](https://origamid.com/slide/typescript-para-iniciantes);

---

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

---

## Aula 02 - TypeScript Básico
**Annotation** -> Com o TypeScript podemos indicar qual será o tipo de dado de uma variável através de anotações (: string).

**Inference** -> O TS consegue inferir o tipo de dado de expressões em JavaScript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado.

**Funções** -> As anotações serão necessárias quando lidamos com funções. Funções podem receber parâmetros com diferentes tipos e também podem retornar diferentes tipos de dados.

**string, number e boolean** -> string, number e boolean são tipos básicos do TypeScript (primitivos).

**typeof** -> typeof é um operador de JavaScript que retorna uma string indicando o tipo do dado. Os possíveis valores retornados por typeof são: string, number, boolean, function, object, undefined, bigint e symbol. O typeof funciona como um type guard.

**String, Number e Boolean** -> Não confundir string, number e boolean com String, Number e Boolean. Os últimos são as funções construtoras desses tipos de dados, responsáveis pela herança das propriedades e métodos dos mesmos.

**Union Types** -> É comum termos funções que podem retornar ou receber tipos diferentes. Para isso usamos a barra vertical ```string | number | boolean```.

**DOM** -> Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o TypeScript não tem acesso prévio ao DOM para saber se o elemento existe ou não.