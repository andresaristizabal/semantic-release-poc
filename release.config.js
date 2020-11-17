module.exports = {
    "branches": ['master'],
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            "useDefaultReleaseRules": false,
            "release": false,
            "releaseRules": [
                // Disable default rules
                {type: "*", release: false},
                {type: 'wapiRelease', release: 'patch'},
                {type: 'wapiFeat', release: 'minor'},
                {type: 'wapiFix', release: 'patch'},
            ]
        }],
        ["@semantic-release/exec", {
            "prepareCmd": "echo ${nextRelease.version}",
        }],
    ]
}
