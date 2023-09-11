import 'reflect-metadata'
import { container } from 'tsyringe'
import { test } from 'vitest'
import { SessionService } from './sessionService'

test('Get User By Email', () => {
    const sessionService = container.resolve(SessionService)

    expect(sessionService.getUserByEmail('joao@govfacil.com')).toEqual({ id: 1, name: 'João', email: 'joao@govfacil.com', password: '1234' })
})