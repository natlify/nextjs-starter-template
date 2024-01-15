const path = require("path")

const buildEslintCommand = filenames =>
  `next lint --quiet --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(" --file ")}`

module.exports = {
  "**/*.{js,ts}?(x)": [buildEslintCommand, "prettier --write"],
  "./*.md": ["prettier --write"],
}
