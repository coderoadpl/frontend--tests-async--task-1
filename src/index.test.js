it('should pass', () => {
    expect.assertions(1)
    expect(true).toBe(true)
})

it('should pass with setTimeout', () => {
    expect.assertions(1)
    setTimeout(
        () => expect(true).toBe(true),
        1000
    )
})

it('should fail with setTimeout', () => {
    expect.assertions(1)
    setTimeout(
        () => expect(true).toBe(false),
        1000
    )
})

it('should pass with resolved promise', () => {
    expect.assertions(1)
    Promise.resolve('some data').then((data) => {
        expect(data).toBe('some data')
    })
})

it('should fail with rejected promise', () => {
    expect.assertions(1)
    Promise.reject('some data').then((data) => {
        expect(data).toBe('some data')
    })
})

it('should fail with resolved promise', () => {
    expect.assertions(1)
    Promise.resolve('some data').catch((error) => {
        expect(error).toBe('some data')
    })
})

it('should pass with rejected promise', () => {
    expect.assertions(1)
    Promise.reject('some data').catch((error) => {
        expect(error).toBe('some data')
    })
})