FROM mcr.microsoft.com/devcontainers/typescript-node:24-bookworm

ARG PNPM_VERSION=11.17.0
ARG SAFE_CHAIN_VERSION=1.5.13

USER root

# ベースイメージに含まれるpnpmを、指定したバージョンへ更新する。
# Corepackを再導入すると既存のpnpm shimと衝突するため、
# このイメージ自身と同じくnpm経由で更新する。
RUN npm install --global "pnpm@${PNPM_VERSION}" \
        --force \
        --no-audit \
        --no-fund \
    && test "$(pnpm --version)" = "${PNPM_VERSION}"

USER node

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# バージョン固定されたインストーラーからSafe Chainを導入する。
# --ciはaliasではなく実行ファイルのshimを作成する。
RUN curl -fsSL \
        "https://github.com/AikidoSec/safe-chain/releases/download/${SAFE_CHAIN_VERSION}/install-safe-chain.sh" \
    | sh -s -- \
        --ci \
        --install-dir /home/node/.safe-chain

# 通常のpnpmよりSafe Chainのshimを先に解決する。
ENV PATH="/home/node/.safe-chain/shims:/home/node/.safe-chain/bin:${PATH}"

# Safe Chainの公開直後パッケージ制限を明示する。
ENV SAFE_CHAIN_MINIMUM_PACKAGE_AGE_HOURS=48
