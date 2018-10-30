<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->render("book/index.html.twig");
    }
}
