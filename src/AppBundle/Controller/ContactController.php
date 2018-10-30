<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ContactController
 * @package AppBundle\Controller
 *
 * @Route("/kontakty")
 */
class ContactController extends Controller
{
    /**
     * @Route("/", name="contact_index")
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->render("contact/index.html.twig");
    }
}
