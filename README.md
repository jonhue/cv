# CV

This repository contains the source code for my CV.

**https://jonhue.github.io/cv**

### Development

This project uses [asdf](https://github.com/asdf-vm/asdf) as version manager and [Yarn](https://github.com/yarnpkg/yarn) as JavaScript package manager.

Dependencies are listed in the [.tool-versions](.tool-versions) file.

1. Clone this repository

    `$ git clone ssh://git@github.com/jonhue/jonhue.github.io.git`

2. Install dependencies

    ```
    $ asdf install
    $ gem install jekyll
    $ yarn install
    ```

5. Start development server

    ```
    $ jekyll serve
    $ yarn start
    ```

### Testing

```
$ yarn run stylelint
```

### Deployment

Every push to `master` is automatically deployed. You can manually deploy with:

```
$ yarn build
$ yarn deploy
```
