# auto-label-in-issue

## Usage

```yml
# .github/workflows/auto-label.yml
name: 'Auto Label'

on:
  pull_request:
    types: [labeled, unlabeled, opened, synchronize, reopened]

permissions:
  pull-requests: write

jobs:
  auto-label:
    runs-on: ubuntu-latest
    steps:
      - uses: Yaminyam/auto-label-in-issue@1.0.0
```
