<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Class BookController
 * @package AppBundle\Controller
 *
 * @Route("/ptitsevodstvo")
 */
class BookController extends Controller
{
    /**
     * @Route("/", name="book_index")
     */
    public function indexAction()
    {
        return $this->render("book/index.html.twig");
    }
}
