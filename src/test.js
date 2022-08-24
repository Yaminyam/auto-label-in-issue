import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: "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" });

const closing_issue_number = await octokit.graphql({
  query: `query {
        repository(owner: "42-world", name: "42world-Backend") {
          pullRequest(number: 10) {
              id
              closingIssuesReferences (first: 1) {
                edges {
                  node {
                    id
                    body
                    number
                    title
                  }
                }
              }
          }
        }
      }`,
});
console.log(closing_issue_number.repository.pullRequest.closingIssuesReferences.edges[0].node.number);
