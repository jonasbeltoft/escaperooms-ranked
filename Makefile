# Top-level Makefile for local dev
.PHONY: dev migrate migrate-up migrate-down up down help

SVC_DIR := supabase-services
FRONTEND_DIR := escaperoom-ranked

help:
	@echo "Usage:"
	@echo "  make dev              # Start supabase services and run Angular in watch"
	@echo "  make migrate-up       # Run DB migrations (up)"
	@echo "  make migrate-down     # Rollback DB migrations (down)"
	@echo "Convenience: make migrate up  (equivalent to make migrate-up)"

# Start supabase (detached) and run frontend in watch mode (foreground)
dev:
	@echo "Starting supabase services (detached)..."
	@cd $(SVC_DIR) && docker compose up -d

	@echo "Starting Angular dev server (watch)..."
	@cd $(FRONTEND_DIR) && npm install --no-audit --no-fund >/dev/null 2>&1 || true
	@cd $(FRONTEND_DIR) && npm start

# Migrations: use the migrate service defined in supabase-services
migrate-up:
	@cd $(SVC_DIR) && docker compose run --rm migrate up

migrate-down:
	@cd $(SVC_DIR) && docker compose run --rm migrate down

# Convenience aliases so users can run: `make migrate up` or `make migrate down`
up: dev

down:
	@cd $(SVC_DIR) && docker compose down

migrate: help

