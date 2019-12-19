<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class BookController
 * @package AppBundle\Controller
 *
 * @Route("/literatura")
 */
class BookController extends Controller
{
    /**
     * @Route("/", name="book_literatura_index")
     */
    public function showLiteraturaAction()
    {
        return $this->render("book/index.html.twig");
    }

    /**
     * @Route("/ptitsevodstvo/", name="book_ptitsevodstvo_index")
     *
     * @return Response
     */
    public function showPtitsevodstvoAction()
    {
        return $this->render("book/ptitsevodstvo/index.html.twig");
    }

    /**
     * @Route("/ptitsevodstvo/porody-kur/", name="book_ptitsevodstvo_porody_kur")
     *
     * @return Response
     */
    public function showPtitsevodstvoPorodyKurAction()
    {
        return $this->render("book/ptitsevodstvo/porody_kur.html.twig");
    }

    /**
     * @Route("/ptitsevodstvo/soderzhanie-kur/", name="book_ptitsevodstvo_soderzhanie_kur")
     *
     * @return Response
     */
    public function showPtitsevodstvoSoderzhanieKurAction()
    {
        return $this->render("book/ptitsevodstvo/soderzhanie_kur.html.twig");
    }

    /**
     * @Route("/ptitsevodstvo/kormlenie-kur/", name="book_ptitsevodstvo_kormlenie_kur")
     *
     * @return Response
     */
    public function showPtitsevodstvoKormlenieKurAction()
    {
        return $this->render("book/ptitsevodstvo/kormlenie_kur.html.twig");
    }

    /**
     * @Route("/ptitsevodstvo/razvedenie-kur/", name="book_ptitsevodstvo_razvedenie_kur")
     *
     * @return Response
     */
    public function showPtitsevodstvoRazvedenieKurAction()
    {
        return $this->render("book/ptitsevodstvo/razvedenie_kur.html.twig");
    }

    /**
     * @Route("/ptitsevodstvo/profilaktika-i-lechenie/", name="book_ptitsevodstvo_profilaktika_i_lechenie")
     *
     * @return Response
     */
    public function showPtitsevodstvoProfilaktikaLechenieAction()
    {
        return $this->render("book/ptitsevodstvo/profilaktika_i_lechenie.html.twig");
    }

    /**
     * @Route("/ptitsevodstvo/pererabotka-produktov/", name="book_ptitsevodstvo_pererabotka_produktov")
     *
     * @return Response
     */
    public function showPtitsevodstvoPererabotkaProduktovAction()
    {
        return $this->render("book/ptitsevodstvo/pererabotka_produktov.html.twig");
    }

    /**
     * @Route("/krolikovodstvo/", name="book_krolikovodstvo_index")
     *
     * @return Response
     */
    public function krolikovodstvoIndexAction()
    {
        return $this->render("book/krolikovodstvo/index.html.twig");
    }

    /**
     * @Route("/krolikovodstvo/porody-krolikov/", name="book_krolikovodstvo_porody_krolikov")
     *
     * @return Response
     */
    public function showKrolikovodstvoPorodyKrolikovAction()
    {
        return $this->render("book/krolikovodstvo/porody_krolikov.html.twig");
    }

    /**
     * @Route("/krolikovodstvo/soderzhanie-krolikov/", name="book_krolikovodstvo_soderzhanie_krolikov")
     *
     * @return Response
     */
    public function showKrolikovodstvoSoderzhanieKrolikovAction()
    {
        return $this->render("book/krolikovodstvo/soderzhanie_krolikov.html.twig");
    }

    /**
     * @Route("/krolikovodstvo/kormlenie-krolikov/", name="book_krolikovodstvo_kormlenie_krolikov")
     *
     * @return Response
     */
    public function showKrolikovodstvoKormlenieKrolikovAction()
    {
        return $this->render("book/krolikovodstvo/kormlenie_krolikov.html.twig");
    }

    /**
     * @Route("/krolikovodstvo/razvedenie-krolikov/", name="book_krolikovodstvo_razvedenie_krolikov")
     *
     * @return Response
     */
    public function showKrolikovodstvoRazvedenieKrolikovAction()
    {
        return $this->render("book/krolikovodstvo/razvedenie_krolikov.html.twig");
    }

    /**
     * @Route("/krolikovodstvo/profilaktika-i-lechenie/", name="book_krolikovodstvo_profilaktika_i_lechenie")
     *
     * @return Response
     */
    public function showKrolikovodstvoProfilaktikaLechenieAction()
    {
        return $this->render("book/krolikovodstvo/profilaktika_i_lechenie.html.twig");
    }

    /**
     * @Route("/krolikovodstvo/pererabotka-produktov/", name="book_krolikovodstvo_pererabotka_produktov")
     *
     * @return Response
     */
    public function showKrolikovodstvoPererabotkaProduktovAction()
    {
        return $this->render("book/krolikovodstvo/pererabotka_produktov.html.twig");
    }
}
