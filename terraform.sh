#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Fail if .env does not exist
if [ ! -f .env ]; then
  echo "❌ .env file not found!"
  exit 1
fi

# Load environment variables safely from .env
while IFS='=' read -r key value; do
  # Skip empty lines or lines starting with #
  [[ -z "$key" || "$key" =~ ^# ]] && continue

  # Remove surrounding quotes from the value if present
  value="${value%\"}"
  value="${value#\"}"

  # Export the key-value pair
  export "$key"="$value"
done < .env

# Run Terraform in Docker
docker run --rm -it \
  -v "$(pwd)/devops_todo/terraform:/workspace" \
  -w /workspace \
  -e AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID" \
  -e AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY" \
  hashicorp/terraform:1.7 "$@"
