<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class HomepageController
 * @package AppBundle\Controller
 */
class HomepageController extends Controller
{
    /**
     * @Route("/", name="homepage")
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->render("homepage/index.html.twig");
    }

    /**
     * @Route("/test", name="test")
     *
     * @return Response
     */
    public function testAction()
    {
        return $this->render("homepage/test.html.twig");
    }
}
