// const { execSync } = require('child_process');
import { execSync } from 'child_process'
const store = process.env.STORE_NAME;
console.log('🚀  store', store)
console.log('🚀  process.env', process.env)
console.log('🚀  import.meta', import.meta)
if (!store) {
  console.error('SHOPIFY_STORE is not set in your .env file.');
  process.exit(1);
}

try {
  execSync(`shopify theme dev -s ${store}`, { stdio: 'inherit' });
} catch (err) {
  process.exit(err.status || 1);
}
