#!/bin/bash

# Exit on error
set -e

# Create or overwrite .env.production
echo "Generating .env..."

cat <<EOF > .env
EMAILJS_PUBLIC_KEY=${EMAILJS_PUBLIC_KEY} 
EMAILJS_TEMPLATE_ID=${EMAILJS_TEMPLATE_ID}
EMAILJS_SERVICE_ID=${EMAILJS_SERVICE_ID}
EOF

echo ".env generated:"
cat .env
