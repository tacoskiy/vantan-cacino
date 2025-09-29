# vantan-cacino
A Cacino App for vantan cultual fes.

## How to Build app
Obtain the .env file from the team leader and place it in the project root.
 
Then, run `make build` on project root terminal.

## Makefile Commands
You can develop more faster with makefile commands.

`make build` build container

`make up` start up container

`make down` shut down container

`make migrate` run migration

`make mkmigrate 'migration-name'` make migration

`make bash-be` enter Laravel bash shell
 
`make bash-fe` enter Next.js bash shell

`make clear` clear Laravel cache, config, route, view

`db-shell` enter mysql(database) shell
