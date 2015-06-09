(function() {
    var app = angular.module('logApp');
    
    app.factory('sidenav', function() {
        var data = [
            {
                'id': 0,
                'section': 'HIG',
                'contents': [
                    'General',
                    'Mockups',
                    'Elements',
                    'Links'
                ],
            },
            {
                'id': 1,
                'section': 'Business Analysis',
                'contents': [
                    'Idea',
                    'Requirements',
                    'User stories',
                    'Personas',
                    'Icebox',
                    'Links'
                ],
            },
            {
                'id': 2,
                'section': 'Backend',
                'contents': [
                    'Stack',
                    'Architecture',
                    'Configs',
                    'Integration'
                ],
            },
            {
                'id': 3,
                'section': 'Frontend',
                'contents': [
                    'Stack',
                    'Architecture',
                    'Configs',
                    'Integration',
                    'Templates'
                ],
            }
        ]; 
        
        return {
            data: data
            // searchItem: function(item){
            //     for (var i = 0; i < data.length; i++) {
            //         if (data[i].id === item.id) {
            //             data.splice(i, 1);
            //             break;
            //         }
            //     }
            // }
        };
    });
    
})();