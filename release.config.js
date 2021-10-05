module.exports = {
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release-plus/docker",
			{
				name: " joa-mos/srp-docker-example",
				registryUrl: "ghcr.io",
				// publishChannelTag: true,
			},
		],
		"@semantic-release/github",
	],
};
