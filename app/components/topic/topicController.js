/**
 * Created by jx685f on 7/14/2015.
 */

angular.module("main").controller("topicController", function($scope, $rootScope) {

     $scope.topic = {
        title: "Angular",
        questions: [
            {
                title: "How does ng-repeat work?",
                description: "I want to create a list of items, is ng-repeat the best way to do this?"
            },
            {
                title: "Angular vs jQuery",
                description: "What is the difference between Angular and jQuery?"
            },
            {
                title: "Filtering",
                description: "What is filtering and how do I do it in Angular?"
            },
            {
                title: "Sorting a list",
                description: "I want to sort a list that I created using ng-repeat."
            },
            {
                title: "Controller vs Directive",
                description: "What is the difference between a controller and directive, and when should I use them?"
            },
            {
                title: "Angular Service",
                description: "What is the point of a service in Angular?"
            }
        ]
    };
     /*
    $scope.topicHTML = {
        title: "HTML",
        questions: [
            {
                title: "Center a div",
                description: "What's the best way to center an element?"
            },
            {
                title: "Link vs a",
                description: "What is the difference between the link and 'a' tags."
            },
            {
                title: "HTML Table",
                description: "How do you make a table in html?"
            },
            {
                title: "Link Javascript",
                description: "How do I link javascript to an html page?"
            }
        ]
    };

    $scope.topicAgile({
        title: "Agile",
        questions: [
            {
                title: "About Agile",
                description: "What is Agile?"
            },
            {
                title: "Agile Benefits",
                description: "How does Agile benefit a company?"
            },
            {
                title: "Agile vs Waterfall",
                description: "What is the difference between the Agile and Waterfall methods?"s
            }
        ]
    });

    $scope.topicBigData({
        title: "Big Data",
        questions: [
            {
                title: "What is Big Data?",
                description: "How does AT&T use big data?"
            },
            {
                title: "Kind of Data",
                description: "What type of data does the term Big Data include?"
            },
            {
                title: "Role of Big Data",
                description: "How does AT&T expect the role of Big Data to change in the next five years?"
            }
        ]
    });*/

    $scope.getInfo = function () {
        var query = new Parse.Query("Topic")
        {
            query.get($rootScope.topic.id, {
                success: function (object) {
                    $scope.topic = object.attributes.topic;
                }, error: function (object) {
                    alert("Error retrieving topic info!");
                }
            })
        };
    };

});
