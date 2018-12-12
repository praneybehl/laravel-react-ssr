<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$welcome = [
        'login' => Route::has('login'),
        'register' => Route::has('register'),
        'formAction' => 'form-submit',
        'links' => [
            [ 'id' => 1, 'url' => 'https://laravel.com/docs', 'label' => 'Documentation' ],
            [ 'id' => 2, 'url' => 'https://laracasts.com', 'label' => 'Laracasts' ],
            [ 'id' => 3, 'url' => 'https://laravel-news.com', 'label' => 'News' ],
            [ 'id' => 4, 'url' => 'https://nova.laravel.com', 'label' => 'Nova' ],
            [ 'id' => 5, 'url' => 'https://forge.laravel.com', 'label' => 'Forge' ],
            [ 'id' => 6, 'url' => 'https://github.com/laravel/laravel', 'label' => 'GitHub' ],
            [ 'id' => 7, 'url' => '/form', 'label' => 'Test Form' ],
            [ 'id' => 8, 'url' => '/form-prefilled', 'label' => 'Test form with Pre-filled Data' ]
        ]
];


$form = [
        'formAction' => '/form-submit'
];

Route::get('/', function () use ($welcome){
    return view('welcome', [ 'welcome' => $welcome ]);
});

Route::get('/form-prefilled', function () {
    return view('welcome', [ 'welcome' => [
          'formAction' => '/form-submit',
          'token' => csrf_token(),
          'user' => [
              'firstName' => 'Johny',
              'lastName' => 'Dunnings',
              'email' => ''
          ]
      ]]);
});

Route::get('/form', function () {
    return view('welcome', [ 'welcome' => ['formAction' => '/form-submit', 'token' => csrf_token()] ]);
});


Route::post('/form-submit', function () {
    var_dump($_POST);
});





Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
