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
					repository: "srp-docker-example",
					tag: "latest"
				},
				skipLogin: true,
			},
		],
		"@semantic-release/github",
	],
};
