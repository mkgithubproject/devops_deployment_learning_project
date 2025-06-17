#!/bin/bash

# Clean and normalize a .env file
sed -E 's/^[[:space:]]*//; s/[[:space:]]*=[[:space:]]*/=/; s/[[:space:]]*$//' .env \
  | grep -v '^\s*$' \
  > .env.cleaned

echo "✅ Cleaned .env saved as .env.cleaned"
