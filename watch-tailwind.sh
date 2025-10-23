# Run while developing to update styles.min.css as new tailwind classes are used.
npx @tailwindcss/cli -i styles.css -o styles.min.css --minify --watch
