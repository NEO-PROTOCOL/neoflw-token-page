# NEO-Protocol - Makefile

.PHONY: install dev audit build commit help

# Detect OS
OS := $(shell uname)

help:
	@echo "Comandos disponíveis:"
	@echo "  make install  - Instala as dependências e gera o lockfile"
	@echo "  make dev      - Inicia um servidor local para preview"
	@echo "  make audit    - Verifica vulnerabilidades de segurança"
	@echo "  make commit   - Executa o fluxo de commit e push seguro (NΞØ Protocol)"

install:
	pnpm install

dev:
	npx serve .

audit:
	pnpm audit

commit:
	@echo "🚀 Iniciando fluxo NΞØ Protocol..."
	pnpm audit
	git status
	@echo "Digite o tipo do commit (feat, fix, docs, style, refactor, chore):"
	@read type; \
	echo "Digite a mensagem do commit:"; \
	read msg; \
	git add .; \
	git commit -m "$$type: $$msg"; \
	git push origin main
	@echo "✅ Commit e Push realizados com sucesso!"
