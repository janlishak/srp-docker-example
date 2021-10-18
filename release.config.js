module.exports = {
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release-plus/docker",
			{
				name: "joa-mos/srp-docker-example",
				registry: "ghcr.io",
			},
		],
		"@semantic-release/github",
	],
};
