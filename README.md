# auto-label-in-issue

GitHub Actions: Add the same tag of the issue associated with the pull_request.

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
      - uses: Yaminyam/auto-label-in-issue@1.1.0
```
