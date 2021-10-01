export const parseDateString = (dateString) => dateString.replace(/T\S+/gm, '')

export const checkСondition = (a, b, condition) => {
    const left = a.toString().replace(/\n/gm, '').toLowerCase()
    const right = b.toString().replace(/\n/gm, '').toLowerCase()

    switch(condition) {
        case condition === 'равно':
            return left === right;
        case condition === 'больше':
            return left > right;
        case condition === 'меньше':
            return left < right;
        default:
            return left.includes(right)
    }
}