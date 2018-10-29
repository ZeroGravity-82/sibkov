<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
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
     */
    public function indexAction()
    {
        return $this->render("contact/index.html.twig");
    }
}
