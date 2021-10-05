module.exports = {
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release-plus/docker",
			{
				name: "ghcr.io/joa-mos/srp-docker-example",
				registryUrl: "ghcr.io",
				publishLatestTag: true,
				publishMajorTag: true,
				publishMinorTag: true,
				// publishChannelTag: true,
			},
		],
		"@semantic-release/github",
	],
};
