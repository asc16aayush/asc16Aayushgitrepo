# Fixing package vulnerabilities found using npm audit

This is a summary of various things to try out to fix package vulnerabilities found using `npm audit`

## Articles

Auditing package dependencies for security vulnerabilities | npm Docs  
Documentation for the npm registry, website, and command-line interface  
https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities

-   Other articles online for fixing vulnerabilities

    -   https://itnext.io/fixing-security-vulnerabilities-in-npm-dependencies-in-less-than-3-mins-a53af735261d
    -   https://stackoverflow.com/questions/51377148/how-to-fix-npm-vulnerabilities-manually
    -   https://www.syncfusion.com/blogs/post/how-to-treat-npm-audit-results.aspx
    -   https://levelup.gitconnected.com/understanding-dependency-management-with-node-modules-1c47bcdee98b
    -   https://blog.ifs.com/2022/10/how-to-fix-security-vulnerabilities-with-npm/ (not great)
    -   Understanding the new audit report format (npm v7+ does not report in tabular format): https://uko.codes/dealing-with-npm-v7-audit-changes
    -   Better dependency queries using npm query and jq: https://blog.logrocket.com/npm-query-better-dependency-management/

## Suggested steps

1.  For JSON output
    `npm audit --json`

    For severity-based reporting
    `npm audit --audit-level=critical`

    Reference: https://stackoverflow.com/questions/61875736/the-command-npm-audit-level-is-not-working-when-trying-to-change-level-to-high

    ```
    # For dry-run (reports what fixes will be made but does not fix them)
    npm audit fix --dry-run --json

    # Skip updating devDependencies:
    npm audit fix --only=prod

    # Audit only production dependencies
    npm audit --production
    # Alternatively,
    npm audit --only=prod
    ```

2.  `npm audit fix` (Updates patch version only)
3.  `npm update` (Updates minor versions as well)
4.  Test individual packages updates / fixes by running unit tests
5.  Remove any unused dependencies (these may be vulnerable but may no longer be used in the app)
6.  Check point 3 in this article regarding resolutions key in `package.json` - https://itnext.io/fixing-security-vulnerabilities-in-npm-dependencies-in-less-than-3-mins-a53af735261d

```
{
    "resolutions": {
        "minimist": "^1.2.5"
    }
}
{
    "scripts": {
        "preinstall": "npx npm-force-resolutions"
    }
}
```

7.  Also check - https://stackoverflow.com/questions/64605805/npm-force-resolutions-not-working-when-installing-a-new-package

8.  Similar to resolutions, npm latest versions support overrides
