const { author, description, homepage } = require('./package.json')

const README = `
TODO - fill README

See the workflow codebase in here:
${homepage}
`.trim()

/**
 * @type {import('fast-alfred').FastAlfredConfig}
 */
module.exports = {
    bundlerOptions: {},
    workflowMetadata: {
        name: 'WORKFLOW_NAME',
        // category: 'Internet',
        createdby: author.name,
        webaddress: homepage,
        description,
        readme: README,
    },
    tabSize: 4,
}
