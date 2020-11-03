#!/bin/sh

result=$(yarn eslint --ext .ts src | grep -e "warning" -e "error")
if ["$result" = ""]; then
  echo "COMMIT 成功"
  exit 0
else
  echo "COMMIT 失敗: ESLintによるエラーが発生しています"
  exit 1
fi
