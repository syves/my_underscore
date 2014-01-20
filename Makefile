NODE = $(shell which node)


.PHONY: test
test:
	$(NODE) test/underscore
