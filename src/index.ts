import * as core from '@actions/core'

export async function run(): Promise<boolean> {
  try {
    const host: string = core.getInput('host')
    console.log('Input parameter host value: ', host)
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

if (process.env.NODE_ENV !== 'test') {
  run()
}
