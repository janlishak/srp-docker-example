module.exports = {
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release-plus/docker",
			{
				name: "ghcr.io/joa-mos/srp-docker-example",
				skipLogin: true,
			},
		],
		[
			"@semantic-release-plus/docker",
			{
				name: {
					namespace: "joamos",
					repository: "srp-docker-example",
				},
				skipLogin: true,
			},
		],
		"@semantic-release/github",
	],
};
