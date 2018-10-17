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
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/nasha-produkciya")
     */
    public function ourProductsAction()
    {

    }

    /**
     * @Route("/kak-zakazat")
     */
    public function howToOrderAction()
    {

    }

    /**
     * @Route("/kontakty")
     */
    public function contactsAction()
    {

    }
}
