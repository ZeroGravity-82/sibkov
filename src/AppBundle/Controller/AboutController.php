<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AboutController
 * @package AppBundle\Controller
 *
 * @Route("/o-nas")
 */
class AboutController extends Controller
{
    /**
     * @Route("/", name="about_index")
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->render("about/index.html.twig");
    }
}
