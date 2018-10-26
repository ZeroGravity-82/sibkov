<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Class ProductController
 * @package AppBundle\Controller
 *
 * @Route("/nasha-produkciya")
 */
class ProductController extends Controller
{
    /**
     * @Route("/", name="product_index")
     */
    public function indexAction()
    {
        return $this->render("product/index.html.twig");
    }
}
