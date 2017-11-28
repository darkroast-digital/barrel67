<?php

namespace App\Controllers;

use App\Controllers\Controller;
use Mailgun\Mailgun;


class HomeController extends Controller
{
    public function index($request, $response, $args)
    {
        return $this->view->render($response, 'home.twig');
    }

    public function menu($request, $response, $args)
    {
        return $this->view->render($response, 'menu.twig');
    }

    public function contact($request, $response, $args)
    {
        return $this->view->render($response, 'contact.twig');
    }

    public function post($request, $response, $args)
    {

        $mg = Mailgun::create('key-1715c074f053673f6e3c4c79e8595390');

        # Now, compose and send your message.
        # $mg->messages()->send($domain, $params);
        $mg->messages()->send('barrel67.com', [
          'from'    => $request->getParam('email'),
          'to'      => 'duggalsa@gmail.com',
          'subject' => $request->getParam('subject'),
          'html'    => $request->getParam('fname') . " " . $request->getParam('lname') . "<br/>" . 
                        $request->getParam('email') . "<br/>" . 
                        $request->getParam('message')
        ]);

    }
}
