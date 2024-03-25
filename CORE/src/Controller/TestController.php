<?php

namespace App\Controller;

use App\Entity\Test;
use App\Repository\TestRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class TestController extends AbstractController
{
    #[Route('/api/test', name: 'app_test')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/TestController.php',
        ]);
    }

    #[Route('api/test/liste-tests', name: 'liste_tests')]
    public function getAllTests(TestRepository $testRepository, SerializerInterface $serializer)
    {
        $liste = $testRepository->findAll();

        $json = $serializer->serialize($liste, 'json');

        return new JsonResponse($json, Response::HTTP_OK, [], true);
    }

    #[Route('api/test/liste-tests/{id}', name: 'liste_tests')]
    public function getTestsById(Test $test, SerializerInterface $serializer)
    {

        $json = $serializer->serialize($test, 'json');

        return new JsonResponse($json, Response::HTTP_OK, [], true);
    }

}
