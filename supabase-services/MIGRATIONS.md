How to run golang-migrate migrations (local dev)

- Add new migrations to the `migrations/` folder. File names must follow migrate's format, e.g. `1_init.up.sql` and `1_init.down.sql`.
- Run all migrations against the local database with:

```bash
docker compose run --rm migrate up
```

- These are abstracted to **make** commands in the Makefile

- To migrate a single step:

```bash
docker compose run --rm migrate up 1
```

- To roll back one step:

```bash
docker compose run --rm migrate down 1
```

Notes:
- The `migrate` service is configured with `restart: "no"` so it won't auto-run on `docker compose up`. Use `docker compose run --rm migrate ...` to execute migrations on demand.
- Keep migration files in git so all devs run the same migrations.
