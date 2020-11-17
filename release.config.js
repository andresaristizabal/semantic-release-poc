module.exports = {
    "branches": ['master'],

    "plugins": [
        ["@semantic-release/commit-analyzer", {
            "useDefaultReleaseRules": false,
            "release": false,
            "releaseRules": [
                {type: 'wapi-release', "release": 'major'},
                {type: 'wapi-feat', "release": 'minor'},
                {type: 'wapi-fix', "release": 'patch'},
                // Disable default rules
                {type: "feat", "release": false},
                {type: "fix", "release": false},
                {type: "perf", "release": false},
                {emoji: ':racehorse:', release: false},
                {emoji: ':bug:', release: false},
                {emoji: ':penguin:', release: false},
                {emoji: ':apple:', release: false},
                {emoji: ':checkered_flag:', release: false},
                {tag: 'BUGFIX', release: false},
                {tag: 'FEATURE', release: false},
                {tag: 'SECURITY', release: false},
                {tag: 'Breaking', release: false},
                {tag: 'Fix', release: false},
                {tag: 'Update', release: false},
                {tag: 'New', release: false},
                {component: 'perf', release: false},
                {component: 'deps', release: false},
                {type: 'FEAT', release: false},
                {type: 'FIX', release: false},
            ]
        }],
        "@semantic-release/npm",
        ["@semantic-release/exec", {
            "prepareCmd": "echo ${nextRelease.version}",
        }],
    ]
}
