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
     * @Route("/kletki-dlya-krolikov", name="media_album_kletki_dlya_krolikov")
     *
     * @return Response
     */
    public function showAlbumKletkiDlyaKrolikov()
    {
        return $this->render("media/album_kletki_dlya_krolikov.html.twig");
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
     * @Route("/boksy-dlya-kur", name="media_album_boksy_dlya_kur")
     *
     * @return Response
     */
    public function showAlbumBoksyDlyaKur()
    {
        return $this->render("media/album_boksy_dlya_kur.html.twig");
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
}
