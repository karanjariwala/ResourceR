'use strict';
angular.module('confusionApp', []).controller('MenuController',['$scope', function($scope) {
  $scope.tab = 1;
  $scope.filtText = 'clinical';
   $scope.showDetails = true;
  
  var team = [{
      name:'Karan',
      image: 'images/karan.png',
      email:'karan.jariwala@cerner.com',
      track: ['data','clinical','Bridge'],
      ManagersEmail:'sharath.huruli@cerner.com',
      nextWeeksAvail:20,
      quartersAvail :300,
      designation: 'System Engineer',
      interfaces:[{name:'AP History Upload',
		          description:'Uploading AP data',
		          category: 'Data Migration',
                  status: 'ongoing',
                  clients:['Chsi Scranton',
                        'Chsi Southside',
                        'Chsi Oro-valley',
                        'Chsi Northwest',
                        'Chsi Gadsden',
                        'chsi Porter',
                        'Chsi Vista',
                        'Chsi Gateway',
                        'Chsi Pottstown',
                        'Mission Health MSJH'
                        ]},
                 {name:'Blood Bank History Upload',
		          description:'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
		          category: 'Data Migration',
		          status: 'ongoing',
                  clients:['Chsi Porter','Chsi Trinity']},
                  { name:'CCD Interfaces',
		          description:'Interface for Creating Continutiy of Care document outbound',
                  category: 'Clinical FSI',
		          status: 'ongoing',
                   clients:['Dignity Health CCD','Huntington CCD HMH_CA','United Surgical Partners International USP_TX']},
                  { name: 'ADT/ORU interface',
                   description: 'Creating Outbound ADT interface',
                   category: 'Clinical FSI',
		              status:'ongoing',
		              clients:['Delano Regional Medical Center DRMC_CA']},
             
                    {
                        name:'Accounts Payable AP',
		              description:'Accounts Payable Bidirectional',
                          category:'Financial FSI',
                        status:'completed',
                        clients:['San Antonio SACH']
                        }]
    },
     {
         name:'Akash',
      image: 'images/akash.png',
      email:'Akash.Verma@cerner.com',
      track: ['financial'],
      ManagersEmail:'sharath.huruli@cerner.com',
      nextWeeksAvail:'40',
      quartersAvail :'300',
      designation: 'System Engineer',
      interfaces:[{name:'AP History Upload',
		          description:'Uploading AP data',
		          category: 'Data Migration',
                  status: 'ongoing',
                  clients:['Chsi Scranton',
                        'Chsi Southside',
                        'Chsi Oro-valley',
                        'Chsi Northwest',
                        'Chsi Gadsden',
                        'chsi Porter',
                        'Chsi Vista',
                        'Chsi Gateway',
                        'Chsi Pottstown',
                        'Mission Health MSJH'
                        ]},
                 {name:'Blood Bank History Upload',
		          description:'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
		          category: 'Data Migration',
		          status: 'ongoing',
                  clients:['Chsi Porter','Chsi Trinity']},
                  { name:'CCD Interfaces',
		          description:'Interface for Creating Continutiy of Care document outbound',
                  category: 'Clinical FSI',
		          status: 'ongoing',
                   clients:['Dignity Health CCD','Huntington CCD HMH_CA','United Surgical Partners International USP_TX']},
                  { name: 'ADT/ORU interface',
                   description: 'Creating Outbound ADT interface',
                   category: 'Clinical FSI',
		              status:'ongoing',
		              clients:['Delano Regional Medical Center DRMC_CA']},
             
                    {
                        name:'Accounts Payable AP',
		              description:'Accounts Payable Bidirectional',
                          category:'Financial FSI',
                        status:'completed',
                        clients:['San Antonio SACH']
                        }]
         
     },
     {
         name:'Neha',
      image: 'images/neha.png',
      email:'Neha.Singh@cerner.com',
      track: ['financial'],
      ManagersEmail:'sharath.huruli@cerner.com',
      nextWeeksAvail:'40',
      quartersAvail :'300',
      designation: 'System Engineer',
      interfaces:[{name:'AP History Upload',
		          description:'Uploading AP data',
		          category: 'Data Migration',
                  status: 'ongoing',
                  clients:['Chsi Scranton',
                        'Chsi Southside',
                        'Chsi Oro-valley',
                        'Chsi Northwest',
                        'Chsi Gadsden',
                        'chsi Porter',
                        'Chsi Vista',
                        'Chsi Gateway',
                        'Chsi Pottstown',
                        'Mission Health MSJH'
                        ]},
                 {name:'Blood Bank History Upload',
		          description:'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
		          category: 'Data Migration',
		          status: 'ongoing',
                  clients:['Chsi Porter','Chsi Trinity']},
                  { name:'CCD Interfaces',
		          description:'Interface for Creating Continutiy of Care document outbound',
                  category: 'Clinical FSI',
		          status: 'ongoing',
                   clients:['Dignity Health CCD','Huntington CCD HMH_CA','United Surgical Partners International USP_TX']},
                  { name: 'ADT/ORU interface',
                   description: 'Creating Outbound ADT interface',
                   category: 'Clinical FSI',
		              status:'ongoing',
		              clients:['Delano Regional Medical Center DRMC_CA']},
             
                    {
                        name:'Accounts Payable AP',
		              description:'Accounts Payable Bidirectional',
                          category:'Financial FSI',
                        status:'completed',
                        clients:['San Antonio SACH']
                        }]
     },
     {
          name:'Archit',
      image: 'images/archit.png',
      email:'Archit.Gupta@cerner.com',
      track: ['data','clinical'],
      ManagersEmail:'sharath.huruli@cerner.com',
      nextWeeksAvail:'40',
      quartersAvail :'300',
       designation: 'System Engineer',
      interfaces:[{name:'AP History Upload',
		          description:'Uploading AP data',
		          category: 'Data Migration',
                  status: 'ongoing',
                  clients:['Chsi Scranton',
                        'Chsi Southside',
                        'Chsi Oro-valley',
                        'Chsi Northwest',
                        'Chsi Gadsden',
                        'chsi Porter',
                        'Chsi Vista',
                        'Chsi Gateway',
                        'Chsi Pottstown',
                        'Mission Health MSJH'
                        ]},
                 {name:'Blood Bank History Upload',
		          description:'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
		          category: 'Data Migration',
		          status: 'ongoing',
                  clients:['Chsi Porter','Chsi Trinity']},
                  { name:'CCD Interfaces',
		          description:'Interface for Creating Continutiy of Care document outbound',
                  category: 'Clinical FSI',
		          status: 'ongoing',
                   clients:['Dignity Health CCD','Huntington CCD HMH_CA','United Surgical Partners International USP_TX']},
                  { name: 'ADT/ORU interface',
                   description: 'Creating Outbound ADT interface',
                   category: 'Clinical FSI',
		              status:'ongoing',
		              clients:['Delano Regional Medical Center DRMC_CA']},
             
                    {
                        name:'Accounts Payable AP',
		              description:'Accounts Payable Bidirectional',
                          category:'Financial FSI',
                        status:'completed',
                        clients:['San Antonio SACH']
                        }]
         
     },
     {
         name:'Rahul',
      image: 'images/rahul.png',
      email:'Rahul.Sawhney@cerner.com',
      track: ['clinical','bridge'],
      ManagersEmail:'sharath.huruli@cerner.com',
      nextWeeksAvail:'40',
      quartersAvail :'300',
      designation: 'System Engineer',
      interfaces:[{name:'AP History Upload',
		          description:'Uploading AP data',
		          category: 'Data Migration',
                  status: 'ongoing',
                  clients:['Chsi Scranton',
                        'Chsi Southside',
                        'Chsi Oro-valley',
                        'Chsi Northwest',
                        'Chsi Gadsden',
                        'chsi Porter',
                        'Chsi Vista',
                        'Chsi Gateway',
                        'Chsi Pottstown',
                        'Mission Health MSJH'
                        ]},
                 {name:'Blood Bank History Upload',
		          description:'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
		          category: 'Data Migration',
		          status: 'ongoing',
                  clients:['Chsi Porter','Chsi Trinity']},
                  { name:'CCD Interfaces',
		          description:'Interface for Creating Continutiy of Care document outbound',
                  category: 'Clinical FSI',
		          status: 'ongoing',
                   clients:['Dignity Health CCD','Huntington CCD HMH_CA','United Surgical Partners International USP_TX']},
                  { name: 'ADT/ORU interface',
                   description: 'Creating Outbound ADT interface',
                   category: 'Clinical FSI',
		              status:'ongoing',
		              clients:['Delano Regional Medical Center DRMC_CA']},
             
                    {
                        name:'Accounts Payable AP',
		              description:'Accounts Payable Bidirectional',
                          category:'Financial FSI',
                        status:'completed',
                        clients:['San Antonio SACH']
                        }]
     },
     {
         name:'Sharath',
      image: 'images/uthapizza.png',
      email:'Sharath.Huruli@cerner.com',
      track: ['data','clinical'],
      ManagersEmail:'sharath.huruli@cerner.com',
      nextWeeksAvail:'40',
      quartersAvail :'300',
      designation: 'Team Lead',
      interfaces:[{name:'AP History Upload',
		          description:'Uploading AP data',
		          category: 'Data Migration',
                  status: 'ongoing',
                  clients:['Chsi Scranton',
                        'Chsi Southside',
                        'Chsi Oro-valley',
                        'Chsi Northwest',
                        'Chsi Gadsden',
                        'chsi Porter',
                        'Chsi Vista',
                        'Chsi Gateway',
                        'Chsi Pottstown',
                        'Mission Health MSJH'
                        ]},
                 {name:'Blood Bank History Upload',
		          description:'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
		          category: 'Data Migration',
		          status: 'ongoing',
                  clients:['Chsi Porter','Chsi Trinity']},
                  { name:'CCD Interfaces',
		          description:'Interface for Creating Continutiy of Care document outbound',
                  category: 'Clinical FSI',
		          status: 'ongoing',
                   clients:['Dignity Health CCD','Huntington CCD HMH_CA','United Surgical Partners International USP_TX']},
                  { name: 'ADT/ORU interface',
                   description: 'Creating Outbound ADT interface',
                   category: 'Clinical FSI',
		              status:'ongoing',
		              clients:['Delano Regional Medical Center DRMC_CA']},
             
                    {
                        name:'Accounts Payable AP',
		              description:'Accounts Payable Bidirectional',
                          category:'Financial FSI',
                        status:'completed',
                        clients:['San Antonio SACH']
                        }]
     },
     {
         name:'Niru',
      image: 'images/uthapizza.png',
      email:'Niru.Kumari@cerner.com',
      track: ['financial'],
      ManagersEmail:'sharath.huruli@cerner.com',
      nextWeeksAvail:'40',
      quartersAvail :'300',
      designation: 'System Engineer',
      interfaces:[{name:'AP History Upload',
		          description:'Uploading AP data',
		          category: 'Data Migration',
                  status: 'ongoing',
                  clients:['Chsi Scranton',
                        'Chsi Southside',
                        'Chsi Oro-valley',
                        'Chsi Northwest',
                        'Chsi Gadsden',
                        'chsi Porter',
                        'Chsi Vista',
                        'Chsi Gateway',
                        'Chsi Pottstown',
                        'Mission Health MSJH'
                        ]},
                 {name:'Blood Bank History Upload',
		          description:'Uploading Blood bank data includes uploading Patient data, Products and Transfusions',
		          category: 'Data Migration',
		          status: 'ongoing',
                  clients:['Chsi Porter','Chsi Trinity']},
                  { name:'CCD Interfaces',
		          description:'Interface for Creating Continutiy of Care document outbound',
                  category: 'Clinical FSI',
		          status: 'ongoing',
                   clients:['Dignity Health CCD','Huntington CCD HMH_CA','United Surgical Partners International USP_TX']},
                  { name: 'ADT/ORU interface',
                   description: 'Creating Outbound ADT interface',
                   category: 'Clinical FSI',
		              status:'ongoing',
		              clients:['Delano Regional Medical Center DRMC_CA']},
             
                    {
                        name:'Accounts Payable AP',
		              description:'Accounts Payable Bidirectional',
                          category:'Financial FSI',
                        status:'completed',
                        clients:['San Antonio SACH']
                        }]
     }]
    
  ; 
  
    $scope.team = team;
    $scope.hours;
    
     $scope.select = function(setTab) {
    $scope.tab = setTab;
    
    if (setTab === 2) {
      $scope.filtText = "financial";
    } 
    else if (setTab === 3) {
      $scope.filtText = "data";
    }
    else if (setTab === 4) {
      $scope.filtText = "bridge";
    }
    else 
        {
      $scope.filtText = "clinical";
    }
  };
  
  $scope.isSelected = function (checkTab) {
    return ($scope.tab === checkTab);
  };
    
   $scope.toggleDetails = function()
   {
       $scope.showDetails=!$scope.showDetails;
       
   };
    
   $scope.getAvail= function(hours)
   {
       return ((Number($scope.hours)/40)*100)
   }
   
    
  
  
    

}]);


