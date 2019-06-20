<?php
return [
    'debug' => true,
    'api' => [
        'basicAuth' => true,
        'allowInsecure' => true
    ],
    'routes' => [
        [
            'pattern' => '/rest/(:all)',
            'method'  => 'GET|POST|DELETE|PATCH',
            'env'     => 'api',
            'action'  => function ($path = null) {
                $kirby = kirby();

                // Run the request through the Kirby instance and capture the
                // response
                $request = $kirby->request();
                $render = $kirby->api()->render($path, $this->method(), [
                    'body'    => $request->body()->toArray(),
                    'headers' => $request->headers(),
                    'query'   => $request->query()->toArray(),
                ]);
                $decoded = json_decode($render, true);
                $p = 0;

                // Kirbytags
                // Kirbytext-ize any field whose key contains "text"
                function ktt($array) {
                    foreach ($array as $key => $value) {
                        if (is_array($value)) {
                            $array[$key] = ktt($value);
                        } else {
                          $contains = 'text';
                          if( strpos( $key, $contains ) !== false ) {
                            $array[$key] = kirbytext($value);
                          }
                        }
                    }
                    return $array;
                }

                $decoded = ktt($decoded);
                $encoded = json_encode($decoded, true);
                return $encoded;
            }
        ]
    ],
];
