<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MediaController
 * @package AppBundle\Controller
 *
 * @Route("/foto-i-video")
 */
class MediaController extends Controller
{
    /**
     * @Route("/", name="media_index")
     */
    public function indexAction()
    {
        return $this->render("media/index.html.twig");
    }
}
