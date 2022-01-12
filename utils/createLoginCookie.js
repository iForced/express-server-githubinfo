export const createLoginCookie = (res, token) => {
    res.cookie('token', token, {
        httpOnly: false,
        secure: false,
        path: '/api',
        expires: new Date(Date.now() * 60 * 60 * 24 * 30 * 1000)
    })
}