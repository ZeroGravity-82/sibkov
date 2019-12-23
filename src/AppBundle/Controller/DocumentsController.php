<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DocumentsController
 * @package AppBundle\Controller
 *
 * @Route("/dokumenty")
 */
class DocumentsController extends Controller
{
    /**
     * @Route("/", name="documents_index")
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->render("documents/index.html.twig");
    }
}
