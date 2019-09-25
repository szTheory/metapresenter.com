import graphql from 'graphql.js'

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded")
  setTimeout(() => {
    setupStargazerCounters();
  }, 0);
});

function setupStargazerCounters() {
  console.log("setupStargazerCounters")
  stargazersCount().then(function(stargazersCount) {
    $('.stargazers-count').each(function() {
      $(this).text(stargazersCount);
    })
  }).catch(function() {
  })
}

function stargazersCount() {
  // API key with public access only (no scopes enabled)
  const token = 'a7209614753aae0048e76bd58055209755640713';

  var graph = graphql("https://api.github.com/graphql", {
    headers: {
      "Authorization": "token "+token,
    },
    asJSON: true
  });

  return graph(`
    query repo($name: String!, $owner: String!) {
      repository(name: $name, owner: $owner) {
        stargazers {
          totalCount
        }
      }
    }
  `)({
    name: "meta_presenter",
    owner: "szTheory"
  }).then(function(response) {
    // console.log(response);
    return response.repository.stargazers.totalCount;
  }).catch(function(error) {
    console.log(error);
    return -1;
  });
}