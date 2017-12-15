<!DOCTYPE html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
        <meta name="description" content="<?= $site->description()->html() ?>">
        <link rel="icon" href="<?= $site->page('/projects')->children()->first()->files()->first()->crop(32)->url() ?>">
        <meta property="og:url" content="http://example.com">
        <meta property="og:title" content="<?= $site->title()->html() ?>" >
        <meta property="og:description" content="<?= $site->description()->html() ?>" >
        <meta property="og:image" content="<?= $site->page('/projects')->children()->first()->files()->first()->url() ?>" >
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@example">
        <meta name="twitter:creator" content="@mhgbrown">
        <meta name="twitter:title" content="<?= $site->title()->html() ?>">
        <meta name="twitter:description" content="<?= $site->description()->html() ?>">
        <meta name="twitter:image" content="<?= $site->page('/projects')->children()->first()->files()->first()->url() ?>">
        <title><?= $site->title()->html() ?></title>
    <link href="/assets/css/main.72b87344e2fa15d109144e24fea540b7.css" rel="stylesheet"></head>
    <body>
        <div id="app"></div>
        <script type="text/javascript">
            window.Kirby = {}
            window.Kirby.pages = <?= json_encode($pages) ?>;
        </script>
    <script type="text/javascript" src="/assets/js/main.d6933ab885ae032d45c9.js"></script></body>
</html>
