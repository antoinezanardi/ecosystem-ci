import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'harlan-zw/nuxt-og-image',
		branch: 'main',
		build: ['build'],
		test: 'test',
	})
}