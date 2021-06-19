import graphql from "graphql.js";

export const setupStargazerCounters = function () {
  stargazersCount()
    .then(function (stargazersCount) {
      $(".stargazers-count").each(function () {
        $(this).text(stargazersCount);
      });
    })
    .catch(function () {});
};

function stargazersCount() {
  // API key with public access only (no scopes enabled)
  const token = "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";

  var graph = graphql("https://api.github.com/graphql", {
    headers: {
      Authorization: "token " + token,
    },
    asJSON: true,
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
    owner: "szTheory",
  })
    .then(function (response) {
      // console.log(response);
      return response.repository.stargazers.totalCount;
    })
    .catch(function (error) {
      console.log(error);
      return -1;
    });
}
