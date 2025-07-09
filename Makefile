install:
	npm ci

brain-games:
	node bin/brain-games.js

play-calc:
	node bin/play-calc.js

play-even:
	node bin/play-even.js

play-nod:
	node bin/play-nod.js

play-progress:
	node bin/play-play-progress.js

play-simple:
	node bin/play-simple.js


publish:
	npm publish --dry-run