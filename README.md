# CV

This repository contains the source code for my CV.

**https://jonhue.github.io/cv**

### Development

This project requires [Ruby](https://www.ruby-lang.org/en/) and [Yarn](https://github.com/yarnpkg/yarn).

1. Install dependencies

    ```
    $ gem install jekyll
    $ yarn install
    ```

2. Start development server

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
