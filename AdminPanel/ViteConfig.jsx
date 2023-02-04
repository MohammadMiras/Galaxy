import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')
fs = require('fs')

const aliases = {
  'Panel': 'src/Panel/Exports',
  'Contexts': 'src/Contexts/Exports'
}

const modules = [];

try {
  const dirs = fs.readdirSync(path.resolve(__dirname, 'src'))
  const baseDirs = ['Panel']
  dirs.forEach(dir => {
    if (baseDirs.indexOf(dir) > -1) {
      return;
    }
    if (dir === '.git' || dir === 'favicons' || dir === 'Branding') {
      return;
    }
    if (!fs.lstatSync(path.resolve(__dirname, 'src', dir)).isDirectory()) {
      return;
    }
    var exportFile = path.resolve(__dirname, 'src', dir, 'Exports.jsx')
    if (fs.existsSync(exportFile)) {
      modules.push(dir)
      aliases[dir] = `src/${dir}/Exports`
    }
  })
} catch (error) {
  console.log(error)
}

const orderedAliases = Object.keys(aliases).sort().reduce(
  (obj, key) => {
    obj[key] = aliases[key];
    return obj;
  },
  {}
);

console.log(orderedAliases)
console.log(modules)
try {
  let content = 'const modules = ['
  modules.forEach(module => {
    content += `'${module}', `
  })
  content += '];'
  content += ' export { modules }'
  fs.writeFileSync('./src/Modules.jsx', content);
} catch (err) {
  console.error(err);
}

const resolvedAliases = Object.fromEntries(
  Object.entries(orderedAliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
)



export default defineConfig({
  resolve: {
    alias: resolvedAliases,
    preserveSymlinks: true
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0'    
  }
})
