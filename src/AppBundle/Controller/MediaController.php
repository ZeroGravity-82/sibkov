<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
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
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->render("media/index.html.twig");
    }

    /**
     * @Route("/kroliki", name="media_album_kroliki")
     *
     * @return Response
     */
    public function showAlbumKrolikiAction()
    {
        return $this->render("media/album_kroliki.html.twig");
    }

    /**
     * @Route("/shkurki", name="media_album_shkurki")
     *
     * @return Response
     */
    public function showAlbumShkurkiAction()
    {
        return $this->render("media/album_shkurki.html.twig");
    }

    /**
     * @Route("/kury", name="media_album_kury")
     *
     * @return Response
     */
    public function showAlbumKuryAction()
    {
        return $this->render("media/album_kury.html.twig");
    }

    /**
     * @Route("/ptitsa", name="media_album_ptitsa")
     *
     * @return Response
     */
    public function showAlbumPtitsaAction()
    {
        return $this->render("media/album_ptitsa.html.twig");
    }

    /**
     * @Route("/vystavki", name="media_album_vystavki")
     *
     * @return Response
     */
    public function showAlbumVystavki()
    {
        return $this->render("media/album_vystavki.html.twig");
    }

    /**
     * @Route("/kozy", name="media_album_kozy")
     *
     * @return Response
     */
    public function showAlbumKozy()
    {
        return $this->render("media/album_kozy.html.twig");
    }

    /**
     * @Route("/ferma", name="media_album_ferma")
     *
     * @return Response
     */
    public function showAlbumFerma()
    {
        return $this->render("media/album_ferma.html.twig");
    }
}
