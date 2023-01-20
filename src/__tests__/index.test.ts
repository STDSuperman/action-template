import { describe, it, vi, expect } from 'vitest'
import { run } from '../'
import dotenv from 'dotenv'
dotenv.config()

const mockInputData = {
  host: process.env.SERVER_HOST,
}

describe('test action', () => {
  vi.mock('@actions/core', () => {
    return {
      getInput(key: keyof typeof mockInputData) {
        return mockInputData[key]
      },
      setFailed: vi.fn(),
      debug: console.debug,
    }
  })

  it('should run this action success', async () => {
    expect(await run()).toBeTruthy()
  })
})
