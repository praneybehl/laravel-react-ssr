<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>

    {!! ssr('js/app.server.js')
    ->context('serverData', $welcome)
    ->fallback('<div id="root"></div>')
    ->render() !!}

    <!--<div id="root"></div>-->


    <script>
        // Share the serverData with the client script through a JS variable
        window.__PRELOADED_STATE__ = @json(['serverData' => $welcome])
    </script>
    <!--Add client bundle to hydrate-->
    <script defer src="js/app.client.js"></script>

    </body>
</html>

