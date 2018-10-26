<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Class OrderController
 * @package AppBundle\Controller
 *
 * @Route("/kak-zakazat")
 */
class OrderController extends Controller
{
    /**
     * @Route("/", name="order_index")
     */
    public function indexAction()
    {
        return $this->render("order/index.html.twig");
    }
}
