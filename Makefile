BACKEND_CONTAINER = backend
FRONTEND_CONTAINER = frontend
DB_CONTAINER = db

.PHONY: build up down bash-be bash-fe migrate mkmigrate seed clear db-shell help

build: 
	docker-compose up --build --remove-orphans
up: 
	docker-compose up -d

down:
	docker-compose down

bash-be:
	docker-compose exec $(BACKEND_CONTAINER) bash

bash-fe:
	docker-compose exec $(FRONTEND_CONTAINER) bash

migrate:
	docker-compose exec $(BACKEND_CONTAINER) php artisan migrate

mkmigrate:
	ifndef $(filter-out $@, $(MAKECMDGOALS))
		$(error please enter migration name: make mkmigration migration-name)
	endif
		docker-compose exec $(BACKEND_CONTAINER) php artisan make:migration $(filter-out $@,$(MAKECMDGOALS))

seed:
	docker-compose exec $(BACKEND_CONTAINER) db:seed

clear:
	docker-compose exec $(BACKEND_CONTAINER) php artisan cache:clear
	docker-compose exec $(BACKEND_CONTAINER) php artisan config:clear
	docker-compose exec $(BACKEND_CONTAINER) php artisan route:clear
	docker-compose exec $(BACKEND_CONTAINER) php artisan view:clear

db-shell:
	docker-compose exec $(DB_CONTAINER) mysql -u root -p