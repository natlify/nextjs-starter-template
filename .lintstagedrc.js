const path = require("path")

const buildEslintCommand = filenames =>
  `next lint --quiet --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(" --file ")}`

module.exports = {
  "**/*.{js,ts}?(x)": ["prettier --write", buildEslintCommand],
  "./*.md": ["prettier --write"],
}
