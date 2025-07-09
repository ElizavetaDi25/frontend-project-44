install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-nod:
	node bin/brain-nod.js

brain-progress:
	node bin/brain-progress.js

brain-simple:
	node bin/brain-simple.js


publish:
	npm publish --dry-run