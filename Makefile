install: 
	npm ci

publish:
	npm publish --dry-run

link:
	npm link

unlink:
	npm unlink

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .