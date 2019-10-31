function getUserInfo() {
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


getUserInfo();