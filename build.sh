#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 如果你要部署到自定义域名
echo 'itsman.org' > docs/CNAME

