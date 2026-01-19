#!/bin/bash

# Configuration
ENV_FILE=".env"
ENV_EXAMPLE=".env.example"

echo "🚀 Initializing project environment..."

# Check if .env already exists
if [ -f "$ENV_FILE" ]; then
    echo "⚠️  $ENV_FILE already exists. Skipping copy."
else
    if [ -f "$ENV_EXAMPLE" ]; then
        echo "📄 Copying $ENV_EXAMPLE to $ENV_FILE..."
        cp "$ENV_EXAMPLE" "$ENV_FILE"
        echo "✅ $ENV_FILE created. Please update it with your actual credentials."
    else
        echo "❌ Error: $ENV_EXAMPLE not found!"
        exit 1
    fi
fi

# Final instructions
echo ""
echo "✨ Initialization complete!"
echo "--------------------------------------------------"
echo "Next steps:"
echo "1. Edit $ENV_FILE with your credentials."
echo "2. Run 'docker-compose up --build -d' to start the application."
echo "3. Access the frontend at http://localhost:3000"
echo "4. Access the backend API at http://localhost:8080/api/v1/tasks"
echo "5. Access Swagger UI at http://localhost:8080/api/swagger-ui.html"
echo "--------------------------------------------------"
