#!/bin/sh

FILES=$(git diff --cached --name-only --diff-filter=ACMR "*.ts" | sed 's| |\\ |g')
echo $FILES

echo "$FILES" | xargs yarn lint

echo "test$FILES"

exit 0