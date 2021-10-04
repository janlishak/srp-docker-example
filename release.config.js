module.exports = {
	plugins: [
		[
			"@semantic-release-plus/docker",
			{
				name: " joa-mos/srp-docker-example",
				registryUrl: "ghcr.io",
				publishChannelTag: true,
			},
		],
	],
};
