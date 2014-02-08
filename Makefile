MOCHA = node_modules/.bin/mocha


.PHONY: setup
setup:
	npm install


.PHONY: test
test:
	$(MOCHA)
