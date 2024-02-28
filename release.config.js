module.exports = {
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release-plus/docker",
			{
				name: {
					registry: "ghcr.io",
					namespace: "janlishak",
					repository: "srp-docker-example"
				},
				skipLogin: true,
			},
		],
		"@semantic-release/github",
	],
};
