module.exports = {
    "branches": ['master'],

    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/npm",
        ["@semantic-release/exec", {
            "prepareCmd": "echo ${nextRelease.version}",
        }],
    ]
}
