# layout-selecao-vue

Projeto com intenção de exibição para a MPX Brasil.

### ATENÇÃO

Os scripts ```serve``` ```build``` e ```lint```, presentes no ```package.json``` estão preparados para a versão do node 17+.

Devido a novas regras de SSL3 do node 17 foi necessário alterar a inicialização destes scripts.

## Para iniciar o app:

```yarn install``` ou ```npm install```

Node >=17:

```yarn serve``` ou ```npm serve``` ou ```export NODE_OPTIONS=--openssl-legacy-provider; vue-cli-service serve```

Node <=16:

```vue-cli-service serve```

## Build:

Node >=17:

```yarn build``` ou ```npm build``` ou ```export NODE_OPTIONS=--openssl-legacy-provider; vue-cli-service build```

Node <=16:

```vue-cli-service build```

## Lint:

Node >=17:

```yarn lint``` ou ```npm lint``` ou ```export NODE_OPTIONS=--openssl-legacy-provider; vue-cli-service lint```

Node <=16:

```vue-cli-service lint```


#####