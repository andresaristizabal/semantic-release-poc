module.exports = {
    "branches": ['master'],
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            "releaseRules": [
                // Disable default rules
                {type: "*", release: false},
                {type: 'wapiFix', release: 'patch'},
                {type: 'wapiFeat', release: 'minor'},
                {type: 'wapiRelease', release: 'major'},
            ]
        }],
    ]
}
