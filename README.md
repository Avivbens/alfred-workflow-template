<div align="center">

# Alfred <TODO>

<br>

[![Latest Version Downloads](https://img.shields.io/github/downloads/REPO-ORG/REPO-NAME/latest/total?label=Latest%20Version%20Downloads&color=green)](https://github.com/REPO-ORG/REPO-NAME/releases/latest)
[![Latest Version](https://img.shields.io/github/v/release/REPO-ORG/REPO-NAME?label=Latest%20Version&color=green)](https://github.com/REPO-ORG/REPO-NAME/releases/latest)
[![Total Downloads](https://img.shields.io/github/downloads/REPO-ORG/REPO-NAME/total?label=Total%20Downloads&color=blue)](https://github.com/REPO-ORG/REPO-NAME/releases)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/kcao7snkgx)

</div>

## Description

<!-- TODO -->

### Install via GitHub Releases :sparkles:

```bash
repo_name="REPO-ORG/REPO-NAME"
download_url=$(curl -s "https://api.github.com/repos/$repo_name/releases/latest" | grep "browser_download_url.*alfredworkflow" | cut -d '"' -f 4)

curl -fsSLk $download_url -o ~/Desktop/REPO-NAME.alfredworkflow
open ~/Desktop/REPO-NAME.alfredworkflow
```

## Usage

<!-- TODO -->
