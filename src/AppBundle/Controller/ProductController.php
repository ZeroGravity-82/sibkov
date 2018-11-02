<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ProductController
 * @package AppBundle\Controller
 *
 * @Route("/nasha-produkciya")
 */
class ProductController extends Controller
{
    /**
     * @Route("", name="product_index")
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->render("product/index.html.twig");
    }
}
