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

**TypeScript Básico**
-> Object: É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}

-> Type: A palavra-chave type cria um atalho (alias) para um tipo customizado.

-> Interface: interface geralmente da mesma forma que type, porém possui uma sintaxe diferente. As intefaces são geralmente utilizadas para definirmos objetos.
A diferença será explorada em aulas mais avançadas. Por agora, vamos utilizar Type para tipos primitivos e Interface para objetos.

--> Array: Uma array é definida com o tipo de dado(s) que ela possui, seguida por [];
Existe uma sintaxe alternativa, onde usamos Array<type>. Sendo type o tipo de dado dentro da array.

--> Any: O any indica que o dado pode conter qualquer tipo de dado do TypeScript. Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.

--> Any Implicito: Fora do modo estrito, o TypeScript permitirá o uso de parâmetros sem especificarmos o tipo. Esses parâmetros terão o tipo implícito de any.

--> Uso do Any: Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.

--> Any e Erros: Usar o any pode quebrar a sua aplicação.

--> null: null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

--> undefined: undefined representa variáveis/propriedades que foram instanciadas, p                                                               orém, os seus valores ainda não foram definidos.

--> Propriedades Opcionais: Podemos definir propriedades opcionais utilizando opcional?: string. Quando opcional, elas poderão sempre retornar como o valor definido ou undefined.

--> strictNullChecks: Sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde realmente o null | undefined podem ser retornados.