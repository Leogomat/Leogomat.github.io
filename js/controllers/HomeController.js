app.controller('HomeController', ['$scope', '$routeParams', function ($scope, $routeParams) {
//Results
    $scope.usaResult1 = false;
    $scope.usaResult2 = true;
    $scope.usaResult3 = false;
    $scope.usaResult4 = false;
    $scope.usaResult5 = false;
//Models
    $scope.currentModel = "1";
    $scope.start = true;
//Models controls
    $scope.setModel = function (now, next) {
        $scope["model" + now] = false;
        $scope["model" + next] = true;
        $scope.currentModel = next;
    };
    $scope.goModelStart = function (number) {$scope.start = false; $scope.model1 = true; };
//Checklists
    $scope.next1 = function (number) {
        if ($scope.criteria > 2) {
            $scope["model" + $scope.currentModel + 1] = true;
        } else {
            $scope["model" + $scope.currentModel + 0] = true;
        }
        $scope.model1110 = false;
    };
    $scope.usaRedirect1 = [0, 0, 0, 0, 0, 1, 1, 1, 2];
    $scope.primes = [2, 3, 5, 7, 11, 13, 17, 23, 31, 37];
    $scope.itemSelect = ['s0', 's0', 's0', 's0', 's0', 's0', 's0', 's0', 's0', 's0'];
    $scope.criteria = 0;
    $scope.criteria2 = 1;
    $scope.criteriaCheck = function (number) {
        if ($scope.criteria2 % $scope.primes[number] === 0) {
            $scope.criteria = $scope.criteria - 1;
            $scope.criteria2 = $scope.criteria2 / $scope.primes[number];
            $scope.itemSelect[number] = 's0';
        } else {
            $scope.criteria = $scope.criteria + 1;
            $scope.criteria2 = $scope.criteria2 * $scope.primes[number];
            $scope.itemSelect[number] = 's1';
        }
    };
//Data
    $scope.questions =
            [{
            header: 'Qual e o seu objetivo nos Estados Unidos?',
            options: {
                option11: 'Estudar',
                option12: 'Imigrar',
                option13: 'Visitar'
            }
        },
            {
                header: 'Voce possui uma oferta de emprego?',
                options: {
                    option11: 'Sim, possuo chances reais de ser contratado nos EUA',
                    option12: 'Nao, porem pretendo procurar oportunidades de emprego'
                }
            },
            {
                header: 'Voce trabalha em alguma dessas areas?',
                options: {
                    option11: 'Ciencias',
                    option12: 'Artes',
                    option13: 'Educacao',
                    option14: 'Negocios',
                    option15: 'Atletismo',
                    option16: 'Religiosa',
                    option17: 'Broadcaster',
                    option18: 'Medico',
                    option19: 'Nao'
                }
            },
            {
                header: 'Selecione os criterios os quais voce acredita preencher:',
                options: {
                    option11: 'Evidence of receipt of lesser nationally or internationally recognized prizes or awards for excellence',
                    option12: 'Evidence of your membership in associations in the field which demand outstanding achievement of their members.',
                    option13: 'Evidence of published material about you in professional or major trade publications or other major media',
                    option14: 'Evidence that you have been asked to judge the work of others, either individually or on a panel',
                    option15: 'Evidence of your original scientific, scholarly, artistic, athletic, or business-related contributions of major significance to the field',
                    option16: 'Evidence of your authorship of scholarly articles in professional or major trade publications or other major media',
                    option17: 'Evidence that your work has been displayed at artistic exhibitions or showcases',
                    option18: 'Evidence of your performance of a leading or critical role in distinguished organizations',
                    option19: 'Evidence that you command a high salary or other significantly high remuneration in relation to others in the field',
                    option21: 'Evidence of your commercial successes in the performing arts'
                }
            }];
    $scope.results = {
        textEB1: "Seu perfil se encaixa no visto de primeira preferencia para trabalhadores.",
        textEB2: "Seu perfil se encaixa no visto de segunda preferencia para trabalhadores.",
        textEB3: "Seu perfil se encaixa no visto de terceira preferencia para trabalhadores.",
        textEB4: "Seu perfil se encaixa no visto de quarta preferencia para trabalhadores.",
        textEB5: "Seu perfil se encaixa no visto de quinta preferencia para trabalhadores."
    };
}]);