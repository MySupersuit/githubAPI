function getUserInfo() {
	console.log("getuserinfo");
	var mysupersuit = new Gh3.User("mysupersuit"),
			userInfos = $("#user");
	mysupersuit.fetch(function (err, resUser) {

		if (err) {
			throw "ouch..."
		}

		console.log(mysupersuit, resUser);


		_.each(_.keys(resUser), function(prop) {
			userInfos.append(
				$('<li>').append(prop+" : "+resUser[prop])
				);
		});
	});	
}

function getRepo() {
	console.log("get repo");
	var mysupersuit = new Gh3.User("mysupersuit");

	var myRepos = new Gh3.Repositories(mysupersuit);

	myRepos.fetch({page:1, per_page:5, direction : "desc"},"next",
		function (err, res) {
			if (err) {
				throw "ouch...";
			}

			console.log("Repositories ", myRepos);
		});
}

function userSearch() {
	console.log("user search");
	Gh3.Search.users({
      q: '+language:Python+location:Ireland',
      sort: 'followers',
    }, {per_page: 1}, function (err,users) {
      if (err) {throw 'ouch...'}

      //console.log(users);

    	var user = users[0];

    	console.log(user);
    	var userRepo = new Gh3.Repositories(user);

    	userRepo.fetch({page:1,per_page:1,direction : "desc"},"next",function(err, res) {
    		if (err) {
    			throw "ouch..."
    		}

    		var repo = res.repositories[0];



    		console.log(repo);
    	});



      // _.each(users, function(user) {
      //   $("#user").append(
      //     $('<li/>').append(
      //       $('<a/>')
      //         .attr('href', user.html_url)
      //         .text(user.login)
      //     )
      // );
      // })
    });
}


// seems good (except first one)
// for each repo impact vs churn per top collaborator?
//visualisation for each repo?

// then best coders/ see what langauge are most popular among the "best" coders

Gh3.Search.repos({
	q: 'size:>=100000',
	sort: 'forks',
	order: 'desc'
}, {per_page: 50}, function(err, repos) {
	console.log(repos);
});

