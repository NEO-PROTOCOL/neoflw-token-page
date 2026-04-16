# NEXT STEPS - NEØ FlowOFF Token Page

## CONTINUIDADE OBRIGATORIA (AGENTES)

- Arquivo oficial de handoff e continuidade: `NEXTSTEPS.md`.
- Qualquer proximo agente deve ler este arquivo antes de propor plano, editar codigo ou executar comandos de mudanca.
- Em caso de conflito entre instrucoes de chat e este arquivo, priorizar seguranca/infra e depois alinhar o plano com este arquivo.

## 0. AUDIT

- inicie auditando todo projeto e para facilicar temos `/Users/nettomello/neomello/NEO-FlowOFF/neoflw-token-page /repomix-output.md`

## 1. Localization (PT-BR)

- Create a Portuguese version of the landing page (`index-pt.html` or using an i18n solution).
- Translate all content while maintaining the technical and institutional tone.

## 2. Design Refinement

- Further improve the footer design to make it even more premium and cohesive with the rest of the page.
- Audit spacing and typography in the bento box sections for mobile responsiveness.

## 3. Communication & Support

- Implement a contact/support system (e.g., integrating Resend for emails or a small AI-powered chat/help component).
- Ensure minimal human intervention is required for basic user inquiries.

## 4. Final Deployment Audit

- Perform a final consistency check on the Base Mainnet contract address citations.
- Optimize asset delivery (images/video weight).

## 5. Environment Integration

- Replace hardcoded `base:app_id` in layout/pages with `import.meta.env.PUBLIC_BASE_APP_ID`, preserving a fallback to the current static value.
- Define and implement an explicit functional role for `BUILDER_CODE` (tracking attribution and/or link parameter strategy) and document where it is consumed.

## 6. Contracts Decision Gate (before closing this repo)

Context:
- This token page repository is being closed as an active delivery surface.
- We must decide whether the contracts currently present in `contracts/` should be rewritten, adapted, or kept as-is in another canonical repository.

Mandatory evaluation checklist:
- Inventory all files in `contracts/` and classify each one as:
  - production-critical
  - migration/support only
  - obsolete/deletable
- Confirm where the canonical smart-contract source of truth will live:
  - `NEO-FlowOFF/neoflw-token`
  - or `NEO-PROTOCOL/neo-protocol-contracts`
- Validate compatibility requirements against current stack:
  - Hardhat version
  - ethers version (v5/v6 mismatch risk)
  - deployment scripts and verification pipeline
- Define migration strategy per contract:
  - keep unchanged
  - adapt (minimal refactor)
  - rewrite (full redesign)
- Define objective acceptance criteria for each migrated contract:
  - tests passing
  - deploy + verify success
  - ABI compatibility explicitly approved (or breaking change documented)

Execution output required:
- A short decision memo with:
  - target repository for each contract
  - decision (keep/adapt/rewrite)
  - estimated effort and risk
  - go/no-go recommendation to deprecate `neoflw-token-page/contracts`
