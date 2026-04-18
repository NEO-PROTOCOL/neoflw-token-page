# Markdown Style Guide (Seed)

Este guia existe para ser adotado como fonte canônica do novo workspace.
Ele é propositalmente curto no seed.

## Regras

- Use títulos curtos e objetivos.
- Prefira listas quando houver enumeração real.
- Evite texto vago, placeholders soltos e narrativas que não refletem execução.
- Documentos estruturais devem refletir manifests, não inventar segunda realidade.

## Placeholders

- `__FILL__` deve ser substituído por valores finais antes de publicar.

## Verificação automática (markdownlint)

O ficheiro **`.markdownlint.json`** na raiz deste seed define regras alinhadas a documentos longos e históricos: comprimento de linha (120), tolerância a HTML (comentários `<!-- markdownlint-disable -->`), títulos duplicados ou hierarquia não estrita em roadmaps, e blocos de código sem linguagem (diagramas ASCII). Repositórios filhos podem copiar o mesmo ficheiro para a raiz do repo para o editor e `markdownlint-cli2` usarem a mesma matriz.

Regras úteis a manter no hábito de escrita (não desativadas no JSON): **MD031** (linha em branco antes e depois de fences ` ``` `), **MD032** (linha em branco em torno de listas), consistência de listas.

Em repositórios com `package.json`, recomenda-se `pnpm add -D markdownlint-cli2` e um script `lint:md` que invoque o CLI com exclusão de `node_modules` / `.pnpm` e de pastas históricas (`docs/archive`, etc.), alinhado ao `make check` local e ao CI.

