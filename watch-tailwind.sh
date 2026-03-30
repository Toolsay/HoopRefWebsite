# Run while developing to update styles.min.css as new tailwind classes are used.
npm install --prefer-offline --no-audit --no-fund
npx @tailwindcss/cli -i styles.css -o styles.min.css --minify --watch
