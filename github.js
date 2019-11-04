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
    }, {per_page: 50}, function (err,users) {
      if (err) {throw 'ouch...'}

      console.log(users);
      _.each(users, function(user) {
        $("#user").append(
          $('<li/>').append(
            $('<a/>')
              .attr('href', user.html_url)
              .text(user.login)
          )
      );
      })
    });
}


userSearch();