<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        return $this->render("default/index.html.twig");
    }

    /**
     * @Route("/nasha-produkciya")
     */
    public function ourProductsAction()
    {
        return $this->render("default/our_products.html.twig");
    }

    /**
     * @Route("/kak-zakazat")
     */
    public function howToOrderAction()
    {
        return $this->render("default/how_to_order.html.twig");
    }

    /**
     * @Route("/kontakty")
     */
    public function contactsAction()
    {
        return $this->render("default/contacts.html.twig");
    }
}
