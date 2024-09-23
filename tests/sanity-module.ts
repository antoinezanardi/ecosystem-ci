import type { RunOptions } from '../types.ts'
import { runInRepo } from '../utils.ts'

export async function test(options: RunOptions) {
  await runInRepo({
    ...options,
    repo: 'nuxt-modules/sanity',
    build: ['dev:prepare', 'build'],
    test: ['test'],
  })
}
