# Kirby Vue Starter Simple

This is a **simple** starter for working with Kirby 3 and Vue together. The Vue app is served via Kirby's
`home.php` template and communicates with the CMS via its API.

## What is Kirby?

Kirby is a file-based CMS.
Easy to setup. Easy to use. Flexible as hell.

https://getkirby.com/

## What is Vue?

A progressive, incrementally-adoptable JavaScript framework for building UI on the web.

http://vuejs.org

## Setup

1. Serve Kirby locally somehow. [MAMP](https://www.mamp.info/en/) is a possibility for this.
2. Create an "API" user within the panel and add its credentials to `.env`. The Vue app will use these to communicate with Kirby. Read more about Vue and environment variables [here](https://cli.vuejs.org/guide/mode-and-env.html).

## Usage

Compile assets on the fly as you develop
```bash
$ npm run dev
```

Create an asset build ready for production

**⚠️ WARNING ⚠️** `/assets` is completely deleted

```bash
$ npm run build
```
