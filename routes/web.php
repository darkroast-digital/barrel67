<?php

/*
|--------------------------------------------------------------------------
| #WEB
|--------------------------------------------------------------------------
*/



use App\Controllers\HomeController;
use Mailgun\Mailgun;


// #HOME
// =========================================================================

$app->get('/', HomeController::class . ':index')->setName("home");
$app->get('/menu', HomeController::class . ':menu')->setName("menu");
$app->get('/contact', HomeController::class . ':contact')->setName("contact");
$app->post('/', HomeController::class . ':post');
$app->get('/mail', function($request, $response, $args){
    # First, instantiate the SDK with your API credentials
    $mg = Mailgun::create('key-cc4eb1a7f244be8847093aed45b647cd');

    # Now, compose and send your message.
    # $mg->messages()->send($domain, $params);
    $mg->messages()->send('barrel67.com', [
      'from'    => 'josh@darkroast.co',
      'to'      => 'kimmorin93@gmail.com',
      'subject' => 'The PHP SDK is awesome!',
      'text'    => 'It is so simple to send a message.'
    ]);
});