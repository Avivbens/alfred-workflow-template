import { FastAlfred } from 'fast-alfred'

const alfredClient = new FastAlfred()

const name = alfredClient.input

const item = {
    title: "Helloworld " + name,
    subtitle: 'NanoID',
    arg: name,
    text: {
        copy: "Helloworld " + name,
        largetype: "Helloworld " + name,
    },
    variables: {
        action: 'copy',
    },
}

const output = []
output.push(item)

alfredClient.output({
    items: output,
})
