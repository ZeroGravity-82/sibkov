<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class BookController
 * @package AppBundle\Controller
 *
 * @Route("/ptitsevodstvo")
 */
class BookController extends Controller
{
    /**
     * @Route("", name="book_index")
     *
     * @return Response
     */
    public function indexAction()
    {
        return $this->render("book/index.html.twig");
    }

    /**
     * @Route("/porody-kur", name="book_ptitsevodstvo_porody_kur")
     *
     * @return Response
     */
    public function showPorodyKurAction()
    {
        return $this->render("book/porody_kur.html.twig");
    }

    /**
     * @Route("/soderzhanie-kur", name="book_ptitsevodstvo_soderzhanie_kur")
     *
     * @return Response
     */
    public function showSoderzhanieKurAction()
    {
        return $this->render("book/soderzhanie_kur.html.twig");
    }

    /**
     * @Route("/kormlenie-kur", name="book_ptitsevodstvo_kormlenie_kur")
     *
     * @return Response
     */
    public function showKormlenieKurAction()
    {
        return $this->render("book/kormlenie_kur.html.twig");
    }

    /**
     * @Route("/razvedenie-kur", name="book_ptitsevodstvo_razvedenie_kur")
     *
     * @return Response
     */
    public function showRazvedenieKurAction()
    {
        return $this->render("book/razvedenie_kur.html.twig");
    }

    /**
     * @Route("/profilaktika-i-lechenie", name="book_ptitsevodstvo_profilaktika_i_lechenie")
     *
     * @return Response
     */
    public function showProfilaktikaLechenieAction()
    {
        return $this->render("book/profilaktika_i_lechenie.html.twig");
    }

    /**
     * @Route("/pererabotka-produktov", name="book_ptitsevodstvo_pererabotka_produktov")
     *
     * @return Response
     */
    public function showPererabotkaProduktovAction()
    {
        return $this->render("book/pererabotka_produktov.html.twig");
    }
}
